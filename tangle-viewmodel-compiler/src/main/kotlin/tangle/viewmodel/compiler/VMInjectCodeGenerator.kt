package tangle.viewmodel.compiler

import com.google.auto.service.AutoService
import com.squareup.anvil.compiler.api.AnvilContext
import com.squareup.anvil.compiler.api.CodeGenerator
import com.squareup.anvil.compiler.api.GeneratedFile
import com.squareup.anvil.compiler.internal.asClassName
import com.squareup.anvil.compiler.internal.classesAndInnerClasses
import com.squareup.anvil.compiler.internal.hasAnnotation
import org.jetbrains.kotlin.descriptors.ModuleDescriptor
import org.jetbrains.kotlin.psi.KtFile
import org.jetbrains.kotlin.psi.psiUtil.nonStaticOuterClasses
import tangle.inject.compiler.FqNames
import tangle.inject.compiler.TangleCompilationException
import tangle.inject.compiler.vmInjectConstructor
import java.io.File

@Suppress("UNUSED")
@AutoService(CodeGenerator::class)
class VMInjectCodeGenerator : CodeGenerator {

  override fun isApplicable(context: AnvilContext): Boolean = true

  override fun generateCode(
    codeGenDir: File,
    module: ModuleDescriptor,
    projectFiles: Collection<KtFile>
  ): Collection<GeneratedFile> {

    val paramsList = projectFiles
      .flatMap { file ->

        val factoryParams = file.classesAndInnerClasses(module)
          .filter { it.hasAnnotation(FqNames.vmInjectFactory, module) }
          .map { factoryInterface ->

            factoryInterface.nonStaticOuterClasses()
              .firstOrNull { it.vmInjectConstructor(module) != null }
              ?.let { viewModelClass ->
                Factory.create(
                  module,
                  factoryInterface,
                  viewModelClass,
                  viewModelClass.vmInjectConstructor(module)!!
                )
              } ?: throw TangleCompilationException(
              "The @${FqNames.vmInjectFactory.shortName().asString()}-annotated interface " +
                "`${factoryInterface.fqName}` must be defined inside a ViewModel " +
                "which is annotated with `@${FqNames.vmInject.shortName().asString()}`."
            )
          }

        val alreadyParsedViewModels = factoryParams
          .map { it.viewModelClassName }
          .toSet()

        val viewModelParamsList = file.classesAndInnerClasses(module)
          .filterNot { it.asClassName() in alreadyParsedViewModels }
          .mapNotNull { clazz ->

            if (clazz.asClassName() in alreadyParsedViewModels) return@mapNotNull null

            val constructor = clazz.vmInjectConstructor(module) ?: return@mapNotNull null

            ViewModelParams.create(module, clazz, constructor)
          }

        factoryParams + factoryParams.map { it.viewModelParams } + viewModelParamsList
      }
      .toList()

    val generated = paramsList.map { params ->

      when (params) {
        is Factory -> with(ViewModelFactoryImplGenerator()) { generate(codeGenDir, params) }
        is ViewModelParams -> with(ViewModelFactoryGenerator()) { generate(codeGenDir, params) }
      }
    }

    val moduleParams = paramsList
      .filterIsInstance<ViewModelParams>()
      .groupBy { it.packageName }
      .map { (packageName, byPackageName) ->

        TangleScopeModule(
          packageName = packageName,
          viewModelParamsList = byPackageName
        )
      }
    val tangleScopeModules = with(ViewModelTangleScopeModuleGenerator()) {
      moduleParams
        .map { generate(codeGenDir, it) }
    }
    val tangleAppScopeModules = with(ViewModelTangleAppScopeModuleGenerator()) {
      moduleParams
        .map { generate(codeGenDir, it) }
    }

    return generated + tangleScopeModules + tangleAppScopeModules
  }
}
