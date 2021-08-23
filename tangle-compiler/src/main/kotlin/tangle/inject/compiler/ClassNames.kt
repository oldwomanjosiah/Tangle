package tangle.inject.compiler

import com.squareup.anvil.annotations.ContributesTo
import com.squareup.anvil.annotations.MergeComponent
import com.squareup.anvil.annotations.MergeSubcomponent
import com.squareup.kotlinpoet.ClassName
import com.squareup.kotlinpoet.ParameterizedTypeName
import com.squareup.kotlinpoet.ParameterizedTypeName.Companion.parameterizedBy
import com.squareup.kotlinpoet.TypeVariableName
import com.squareup.kotlinpoet.asClassName
import com.squareup.kotlinpoet.jvm.jvmSuppressWildcards
import dagger.Binds
import dagger.BindsInstance
import dagger.Module
import dagger.Provides
import dagger.Subcomponent
import com.squareup.kotlinpoet.ClassName
import com.squareup.kotlinpoet.asClassName
import dagger.*
import dagger.internal.Factory
import dagger.internal.InstanceFactory
import dagger.multibindings.ClassKey
import dagger.multibindings.IntoMap
import dagger.multibindings.IntoSet
import dagger.multibindings.Multibinds
import dagger.multibindings.StringKey
import javax.inject.Inject
import javax.inject.Named
import javax.inject.Provider

  object ClassNames {

    val androidContext = ClassName("android.content", "Context")
    val string = String::class.asClassName()

    val internalTangleApi = ClassName("tangle.inject", "InternalTangleApi")

    val tangleScope = ClassName("tangle.inject.internal", "TangleScope")
    val tangleAppScope = ClassName("tangle.inject.internal", "TangleAppScope")

    val provider = Provider::class.asClassName()

    val binds = Binds::class.asClassName()
    val bindsInstance = BindsInstance::class.asClassName()
    val classKey = ClassKey::class.asClassName()
    val contributesTo = ContributesTo::class.asClassName()
    val daggerFactory = Factory::class.asClassName()
    val intoMap = IntoMap::class.asClassName()
    val intoSet = IntoSet::class.asClassName()
    val mergeComponent = MergeComponent::class.asClassName()
    val mergeSubcomponent = MergeSubcomponent::class.asClassName()
    val module = Module::class.asClassName()
    val multibinds = Multibinds::class.asClassName()
    val named = Named::class.asClassName()
    val provides = Provides::class.asClassName()
    val stringKey = StringKey::class.asClassName()
    val subcomponentFactory = Subcomponent.Factory::class.asClassName()

    val instanceFactory = InstanceFactory::class.asClassName()

    val inject = Inject::class.asClassName()
    val jvmStatic = JvmStatic::class.asClassName()

    val bundle = ClassName("android.os", "Bundle")
    val iBinder = ClassName("android.os", "IBinder")
    val parcelable = ClassName("android.os", "Parcelable")
    val size = ClassName("android.util", "Size")
    val sizeF = ClassName("android.util", "SizeF")

  val androidContext = ClassName("android.content", "Context")
  val string = String::class.asClassName()

  val internalTangleApi = ClassName("tangle.inject", "InternalTangleApi")

  public val tangleViewModelComponent: ClassName =
    ClassName("tangle.viewmodel", "TangleViewModelComponent")
  public val tangleViewModelMapSubcomponent: ClassName =
    ClassName("tangle.viewmodel", "TangleViewModelMapSubcomponent")
  public val tangleViewModelMapSubcomponentFactory: ClassName =
    tangleViewModelMapSubcomponent.nestedClass("Factory")
  public val tangleViewModelKeysSubcomponent: ClassName =
    ClassName("tangle.viewmodel", "TangleViewModelKeysSubcomponent")
  public val tangleViewModelKeysSubcomponentFactory: ClassName =
    tangleViewModelKeysSubcomponent.nestedClass("Factory")

  public val tangleViewModelProviderMap: ClassName =
    ClassName("tangle.viewmodel", "TangleViewModelProviderMap")
  public val tangleViewModelProviderMapKeySet: ClassName =
    ClassName("tangle.viewmodel", "TangleViewModelProviderMap", "KeySet")
  public val tangleFragmentFactory: ClassName =
    ClassName("tangle.fragment", "TangleFragmentFactory")
  public val tangleFragmentSubcomponent: ClassName =
    ClassName("tangle.fragment", "TangleFragmentSubcomponent")
  public val tangleFragmentSubcomponentFactory: ClassName =
    tangleFragmentSubcomponent.nestedClass("Factory")
  public val tangleFragmentKey: ClassName = ClassName("tangle.fragment", "FragmentKey")
  public val tangleFragmentProviderMap: ClassName =
    ClassName("tangle.fragment", "TangleFragmentProviderMap")

  public val internalTangleApi: ClassName = ClassName("tangle.inject", "InternalTangleApi")
  public val optIn: ClassName = ClassName("kotlin", "OptIn")

  public val tangleScope: ClassName = ClassName("tangle.inject.internal", "TangleScope")
  public val tangleAppScope: ClassName = ClassName("tangle.inject.internal", "TangleAppScope")

  public val androidxViewModel: ClassName = ClassName("androidx.lifecycle", "ViewModel")
  public val androidxFragment: ClassName = ClassName("androidx.fragment.app", "Fragment")
  public val androidxFragmentFactory: ClassName =
    ClassName("androidx.fragment.app", "FragmentFactory")
  public val androidxSavedStateHandle: ClassName =
    ClassName("androidx.lifecycle", "SavedStateHandle")

  public val javaClassOutFragment: ParameterizedTypeName = Class::class.asClassName()
    .parameterizedBy(TypeVariableName("out·${androidxFragment.canonicalName}"))
  public val javaClassOutVM: ParameterizedTypeName = Class::class.asClassName()
    .parameterizedBy(TypeVariableName("out·${androidxViewModel.canonicalName}"))
  public val javaClassWildcard: ParameterizedTypeName = Class::class.asClassName()
    .parameterizedBy(TypeVariableName("*"))

  public val viewModelClassSet: ParameterizedTypeName = Set::class.asClassName().parameterizedBy(
    javaClassOutVM
  )
  public val viewModelMap: ParameterizedTypeName = Map::class.asClassName().parameterizedBy(
    javaClassWildcard,
    androidxViewModel.jvmSuppressWildcards()
  )
  public val fragmentMap: ParameterizedTypeName = Map::class.asClassName().parameterizedBy(
    javaClassOutFragment,
    androidxFragment.jvmSuppressWildcards()
  )
  public val provider: ClassName = Provider::class.asClassName()
  public val fragmentProviderMap: ParameterizedTypeName = Map::class.asClassName().parameterizedBy(
    javaClassOutFragment,
    provider.parameterizedBy(androidxFragment.jvmSuppressWildcards()).jvmSuppressWildcards()
  )

  public val binds: ClassName = Binds::class.asClassName()
  public val bindsInstance: ClassName = BindsInstance::class.asClassName()
  public val classKey: ClassName = ClassKey::class.asClassName()
  public val contributesTo: ClassName = ContributesTo::class.asClassName()
  public val daggerFactory: ClassName = Factory::class.asClassName()
  public val intoMap: ClassName = IntoMap::class.asClassName()
  public val intoSet: ClassName = IntoSet::class.asClassName()
  public val mergeComponent: ClassName = MergeComponent::class.asClassName()
  public val mergeSubomponent: ClassName = MergeSubcomponent::class.asClassName()
  public val module: ClassName = Module::class.asClassName()
  public val multibinds: ClassName = Multibinds::class.asClassName()
  public val named: ClassName = Named::class.asClassName()
  public val provides: ClassName = Provides::class.asClassName()
  public val stringKey: ClassName = StringKey::class.asClassName()
  public val subcomponentFactory: ClassName = Subcomponent.Factory::class.asClassName()

  public val instanceFactory: ClassName = InstanceFactory::class.asClassName()

  public val inject: ClassName = Inject::class.asClassName()
  public val jvmStatic: ClassName = JvmStatic::class.asClassName()
  public val providerSavedStateHandle: ParameterizedTypeName = Provider::class.asClassName()
    .parameterizedBy(androidxSavedStateHandle)

  public val bundle: ClassName = ClassName("android.os", "Bundle")
  public val iBinder: ClassName = ClassName("android.os", "IBinder")
  public val parcelable: ClassName = ClassName("android.os", "Parcelable")
  public val size: ClassName = ClassName("android.util", "Size")
  public val sizeF: ClassName = ClassName("android.util", "SizeF")


    val androidContext = ClassName("android.content", "Context")
    val string = String::class.asClassName()

    public val javaClassWildcard: ParameterizedTypeName = Class::class.asClassName()
      .parameterizedBy(TypeVariableName("*"))

    public val any: ClassName = Any::class.asClassName()
    public val anyMap: ParameterizedTypeName = Map::class.asClassName().parameterizedBy(
      javaClassWildcard,
      Any::class.asClassName().jvmSuppressWildcards()
    )

    val internalTangleApi = ClassName("tangle.inject", "InternalTangleApi")

    val tangleScope = ClassName("tangle.inject.internal", "TangleScope")
    val tangleAppScope = ClassName("tangle.inject.internal", "TangleAppScope")

    val provider = Provider::class.asClassName()

    val binds = Binds::class.asClassName()
    val bindsInstance = BindsInstance::class.asClassName()
    val classKey = ClassKey::class.asClassName()
    val contributesTo = ContributesTo::class.asClassName()
    val daggerFactory = Factory::class.asClassName()
    val intoMap = IntoMap::class.asClassName()
    val intoSet = IntoSet::class.asClassName()
    val mergeComponent = MergeComponent::class.asClassName()
    val mergeSubcomponent = MergeSubcomponent::class.asClassName()
    val module = Module::class.asClassName()
    val multibinds = Multibinds::class.asClassName()
    val named = Named::class.asClassName()
    val provides = Provides::class.asClassName()
    val stringKey = StringKey::class.asClassName()
    val subcomponentFactory = Subcomponent.Factory::class.asClassName()

    val instanceFactory = InstanceFactory::class.asClassName()

    val inject = Inject::class.asClassName()
    val jvmStatic = JvmStatic::class.asClassName()

    val bundle = ClassName("android.os", "Bundle")
    val iBinder = ClassName("android.os", "IBinder")
    val parcelable = ClassName("android.os", "Parcelable")
    val size = ClassName("android.util", "Size")
    val sizeF = ClassName("android.util", "SizeF")
}
