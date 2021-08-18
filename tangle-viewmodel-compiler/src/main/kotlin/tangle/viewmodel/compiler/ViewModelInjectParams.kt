package tangle.viewmodel.compiler

import com.squareup.anvil.compiler.internal.*
import com.squareup.kotlinpoet.ClassName
import com.squareup.kotlinpoet.ParameterizedTypeName.Companion.parameterizedBy
import com.squareup.kotlinpoet.TypeName
import com.squareup.kotlinpoet.TypeVariableName
import com.squareup.kotlinpoet.jvm.jvmSuppressWildcards
import org.jetbrains.kotlin.descriptors.ClassDescriptor
import org.jetbrains.kotlin.descriptors.DescriptorVisibilities
import org.jetbrains.kotlin.descriptors.FunctionDescriptor
import org.jetbrains.kotlin.descriptors.Modality.ABSTRACT
import org.jetbrains.kotlin.descriptors.ModuleDescriptor
import org.jetbrains.kotlin.name.FqName
import org.jetbrains.kotlin.psi.KtClass
import org.jetbrains.kotlin.psi.KtClassOrObject
import org.jetbrains.kotlin.psi.KtConstructor
import org.jetbrains.kotlin.resolve.scopes.DescriptorKindFilter
import org.jetbrains.kotlin.types.KotlinType
import tangle.inject.compiler.*

data class TangleScopeModule(
  val packageName: String,
  val viewModelParamsList: List<ViewModelInjectParams>
)

sealed interface ViewModelInjectParams {
  val packageName: String
  val scopeName: FqName
  val viewModelClassName: ClassName
  val viewModelFactoryClassName: ClassName
}

data class ViewModelParams(
  override val packageName: String,
  override val scopeName: FqName,
  override val viewModelClassName: ClassName,
  val viewModelClassDescriptor: ClassDescriptor,
  val viewModelConstructorParams: List<ContructorInjectParameter>,
  val viewModelFactoryClassNameString: String,
  override val viewModelFactoryClassName: ClassName,
  val viewModelFactoryConstructorParams: List<Parameter>,
  val constructor: KtConstructor<*>,
  val memberInjectedParams: List<MemberInjectParameter>,
  val typeParameters: List<TypeVariableName>,
  val viewModelClassSimpleName: String,
  val viewModelTypeName: TypeName,
  val savedStateParam: Parameter?
) : ViewModelInjectParams {
  companion object {
    fun create(
      module: ModuleDescriptor,
      viewModelClass: KtClassOrObject,
      constructor: KtConstructor<*>
    ): ViewModelParams {

      val packageName = viewModelClass.containingKtFile
        .packageFqName
        .safePackageString(dotSuffix = false)

      val viewModelClassDescriptor = viewModelClass.requireClassDescriptor(module)

      val viewModelFactoryClassNameString = "${viewModelClass.generateClassName()}_Factory"
      val viewModelFactoryClassName = ClassName(packageName, viewModelFactoryClassNameString)

      // val scopeName = viewModelClass.scope(FqNames.contributesViewModel, module)

      val memberInjectParameters = viewModelClassDescriptor.memberInjectedParameters(module)

      val viewModelConstructorParams = constructor.valueParameters.mapToParameters(module)

      val (daggerConstructorParams, savedStateParams) = viewModelConstructorParams
        .filterNot { it.isAssisted }
        .partition { !it.isTangleParam }

      val tempSavedStateParam = daggerConstructorParams
        .firstOrNull {
          it.typeName == ClassNames.androidxSavedStateHandle ||
            it.typeName == ClassNames.androidxSavedStateHandle.jvmSuppressWildcards()
        }
        ?: createSavedStateParameter(viewModelConstructorParams)

      val needsExtraSavedStateParam =
        tempSavedStateParam !in daggerConstructorParams && savedStateParams.isNotEmpty()

      val factoryConstructorParams = if (needsExtraSavedStateParam) {
        daggerConstructorParams + memberInjectParameters + tempSavedStateParam
      } else {
        daggerConstructorParams + memberInjectParameters
      }

      val typeParameters = viewModelClass.typeVariableNames(module)

      val viewModelClassSimpleName = viewModelClass.asClassName()
        .simpleNames
        .joinToString("_")

      val viewModelClassName = viewModelClass.asClassName()

      val viewModelTypeName = viewModelClassName.let {
        if (typeParameters.isEmpty()) it else it.parameterizedBy(typeParameters)
      }

      val finalSavedStateParam = when {
        needsExtraSavedStateParam -> tempSavedStateParam
        savedStateParams.isNotEmpty() -> tempSavedStateParam
        else -> null
      }

      return ViewModelParams(
        packageName = packageName,
        scopeName = FqNames.tangleAppScope,
        viewModelClassName = viewModelClassName,
        viewModelClassDescriptor = viewModelClassDescriptor,
        viewModelConstructorParams = viewModelConstructorParams,
        viewModelFactoryClassNameString = viewModelFactoryClassNameString,
        viewModelFactoryClassName = viewModelFactoryClassName,
        viewModelFactoryConstructorParams = factoryConstructorParams,
        constructor = constructor,
        memberInjectedParams = memberInjectParameters,
        typeParameters = typeParameters,
        viewModelClassSimpleName = viewModelClassSimpleName,
        viewModelTypeName = viewModelTypeName,
        savedStateParam = finalSavedStateParam
      )
    }

    private fun createSavedStateParameter(
      viewModelConstructorParams: List<ContructorInjectParameter>
    ): ContructorInjectParameter {
      return ContructorInjectParameter(
        name = viewModelConstructorParams.uniqueName("savedStateHandleProvider"),
        typeName = ClassNames.androidxSavedStateHandle,
        providerTypeName = ClassNames.androidxSavedStateHandle.wrapInProvider(),
        lazyTypeName = ClassNames.androidxSavedStateHandle.wrapInLazy(),
        isWrappedInProvider = true,
        isWrappedInLazy = false,
        tangleParamName = null,
        qualifiers = emptyList(),
        isAssisted = false
      )
    }
  }
}

data class Factory(
  override val packageName: String,
  override val scopeName: FqName,
  override val viewModelClassName: ClassName,
  val viewModelParams: ViewModelParams,
  val factoryDescriptor: ClassDescriptor,
  val factoryInterface: KtClassOrObject,
  val factoryInterfaceClassName: ClassName,
  override val viewModelFactoryClassName: ClassName,
  val factoryImplClassName: ClassName,
  val assistedParams: List<AssistedParameter>,
  val typeParameters: List<TypeVariableName>,
  val functionName: String
) : ViewModelInjectParams {
  data class AssistedParameter(
    val name: String,
    val kotlinType: KotlinType,
    val typeName: TypeName
  )

  companion object {
    fun create(
      module: ModuleDescriptor,
      factoryInterface: KtClassOrObject,
      viewModelClass: KtClass,
      constructor: KtConstructor<*>
    ): Factory {
      val packageName = factoryInterface.containingKtFile
        .packageFqName
        .safePackageString(dotSuffix = false)

      val viewModelFactoryClassName =
        ClassName(packageName, "${viewModelClass.generateClassName()}_Factory")

      val factoryDescriptor = factoryInterface.requireClassDescriptor(module)

      val functions = factoryDescriptor.functions()

      require(functions.size == 1, factoryDescriptor) {
        "@${FqNames.vmInjectFactory.shortName().asString()}-annotated types must have " +
          "exactly one abstract function -- without a default implementation -- " +
          "which returns the ${FqNames.vmInject.shortName().asString()} ViewModel type."
      }

      val function = functions[0]

      val functionParameters = function.valueParameters

      val factoryInterfaceClassName = factoryInterface.asClassName()
      val factoryImplSimpleName =
        "${factoryInterfaceClassName.simpleNames.joinToString("_")}_Impl"
      val factoryImplClassName = ClassName(packageName, factoryImplSimpleName)

      val assistedParams = functionParameters.map {
        AssistedParameter(
          // it.requireTangleParamName(),
          it.name.asString(),
          it.type,
          it.type.asTypeName()
        )
      }

      val functionName = function.name.asString()

      val viewModelParams =
        ViewModelParams.create(module, viewModelClass, constructor)

      val typeParameters = factoryInterface.typeVariableNames(module)

      return Factory(
        packageName = packageName,
        scopeName = FqNames.tangleAppScope,
        viewModelClassName = viewModelParams.viewModelClassName,
        viewModelParams = viewModelParams,
        factoryDescriptor = factoryDescriptor,
        factoryInterface = factoryInterface,
        factoryInterfaceClassName = factoryInterfaceClassName,
        viewModelFactoryClassName = viewModelFactoryClassName,
        factoryImplClassName = factoryImplClassName,
        assistedParams = assistedParams,
        typeParameters = typeParameters,
        functionName = functionName
      )
    }

    private fun ClassDescriptor.functions(): List<FunctionDescriptor> = unsubstitutedMemberScope
      .getContributedDescriptors(DescriptorKindFilter.FUNCTIONS)
      .asSequence()
      .filterIsInstance<FunctionDescriptor>()
      .filter { it.modality == ABSTRACT }
      .filter {
        it.visibility == DescriptorVisibilities.PUBLIC ||
          it.visibility == DescriptorVisibilities.PROTECTED
      }
      .toList()
  }
}
