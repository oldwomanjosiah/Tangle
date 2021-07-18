package tangle.inject.api

import androidx.fragment.app.Fragment
import androidx.fragment.app.FragmentFactory
import tangle.inject.annotations.internal.TangleFragmentProviderMap
import javax.inject.Provider

class TangleFragmentFactory(
  private val providerMap: Map<Class<out Fragment>, Provider<@JvmSuppressWildcards Fragment>>,
  @TangleFragmentProviderMap
  private val assistedProviderMap: Map<Class<out Fragment>, Provider<@JvmSuppressWildcards Fragment>>
) : FragmentFactory() {

  override fun instantiate(classLoader: ClassLoader, className: String): Fragment {
    val fragmentClass = loadFragmentClass(classLoader, className)

    return providerMap[fragmentClass]?.get()
      ?: assistedProviderMap[fragmentClass]?.get()
      ?: return super.instantiate(classLoader, className)
  }
}