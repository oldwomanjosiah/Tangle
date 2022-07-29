"use strict";(self.webpackChunktangle=self.webpackChunktangle||[]).push([[1463],{3905:function(e,n,t){t.d(n,{Zo:function(){return g},kt:function(){return p}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},g=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),u=s(t),p=r,d=u["".concat(c,".").concat(p)]||u[p]||m[p]||o;return t?a.createElement(d,i(i({ref:n},g),{},{components:t})):a.createElement(d,i({ref:n},g))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4017:function(e,n,t){t.r(n),t.d(n,{assets:function(){return g},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return m}});var a=t(3117),r=t(102),o=(t(7294),t(3905)),i=["components"],l={title:"Bundle Injection",sidebar_label:"Bundle Injection"},c=void 0,s={unversionedId:"fragments/bundles",id:"version-0.11.4/fragments/bundles",title:"Bundle Injection",description:"The goal",source:"@site/versioned_docs/version-0.11.4/fragments/bundles.md",sourceDirName:"fragments",slug:"/fragments/bundles",permalink:"/Tangle/docs/0.11.4/fragments/bundles",draft:!1,editUrl:"https://github.com/rbusarow/Tangle/blob/main/website/versioned_docs/version-0.11.4/fragments/bundles.md",tags:[],version:"0.11.4",frontMatter:{title:"Bundle Injection",sidebar_label:"Bundle Injection"},sidebar:"version-0.11.4/Docs",previous:{title:"Fragments",permalink:"/Tangle/docs/0.11.4/fragments/"}},g={},m=[{value:"The goal",id:"the-goal",level:3},{value:"Background",id:"background",level:3},{value:"Tangle&#39;s generated factories",id:"tangles-generated-factories",level:3},{value:"Limiting access",id:"limiting-access",level:3}],u={toc:m};function p(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"the-goal"},"The goal"),(0,o.kt)("p",null,"Fragment runtime arguments must be passed via a ",(0,o.kt)("inlineCode",{parentName:"p"},"Bundle")," in order for the arguments to be present\nif the Fragment is recreated by a ",(0,o.kt)("a",{parentName:"p",href:"https://developer.android.com/reference/kotlin/androidx/fragment/app/FragmentManager"},"FragmentManager"),".  For those of us who don't want to rely upon\n",(0,o.kt)("a",{parentName:"p",href:"https://developer.android.com/guide/navigation/navigation-getting-started"},"Androidx Navigation"),", there's still quite a lot of boilerplate involved in passing these arguments\nand ensuring that it's compile-time safe."),(0,o.kt)("p",null,"Tangle removes as much of that boilerplate as possible,\nwhile using some Dagger tricks to prevent creating new instances without their arguments."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"@FragmentInject")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"@Inject"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'@ContributesFragment(AppScope::class)\nclass MyFragment @FragmentInject constructor() : Fragment() {\n\n  val name by arg<String>("name")\n\n  @FragmentInjectFactory\n  interface Factory {\n    fun create(@TangleParam("name") name: String): MyFragment\n  }\n}\n\nclass MyActivity : BaseActivity() {\n\n  val myFragmentFactory: MyFragment.Factory = TODO("use your favorite Dagger pattern here")\n\n  override fun onCreate(savedInstanceState: Bundle?) {\n    super.onCreate(savedInstanceState)\n\n    val fragment = myFragmentFactory.create(name = "Bigyan")\n\n    supportFragmentManager.beginTransaction()\n      .replace(containerId, fragment)\n      .commit()\n  }\n}\n')),(0,o.kt)("h3",{id:"background"},"Background"),(0,o.kt)("p",null,"Since long before ",(0,o.kt)("a",{parentName:"p",href:"https://developer.android.com/reference/kotlin/androidx/fragment/app/FragmentFactory"},"FragmentFactory")," and ",(0,o.kt)("a",{parentName:"p",href:"https://developer.android.com/guide/navigation/navigation-getting-started"},"Androidx Navigation"),",\n",(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/9245510/7537239"},"it has long been common practice")," to create static\n",(0,o.kt)("inlineCode",{parentName:"p"},"newInstance")," functions which take the deconstructed Bundle parameters and return\na Fragment instance which already has those arguments injected as a Bundle."),(0,o.kt)("p",null,"Here's what it may look like in Kotlin:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyFragment : Fragment() {\n\n  companion object {\n    fun newInstance(name: String): MyFragment {\n      val myFragment = MyFragment()\n\n      myFragment.arguments = bundleOf("name" to name)\n      return myFragment\n    }\n  }\n}\n')),(0,o.kt)("h3",{id:"tangles-generated-factories"},"Tangle's generated factories"),(0,o.kt)("p",null,"For the ",(0,o.kt)("inlineCode",{parentName:"p"},"MyFragment")," definition above, Tangle will generate the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'public class MyFragment_Factory_Impl(\n  public val delegateFactory: MyFragment_Factory\n) : MyFragment.Factory {\n  public override fun create(name: String): MyFragment {\n    val bundle = bundleOf(\n          "name" to name\n        )\n    return delegateFactory.get().apply {\n      this@apply.arguments = bundle\n    }\n  }\n\n  public companion object {\n    @JvmStatic\n    public fun create(delegateFactory: MyFragment_Factory): Provider<MyFragment.Factory> =\n        InstanceFactory.create(MyFragment_Factory_Impl(delegateFactory))\n  }\n}\n')),(0,o.kt)("p",null,"It will then create a Dagger binding for ",(0,o.kt)("inlineCode",{parentName:"p"},"MyFragment_Factory_Impl")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"MyFragment.Factory"),",\nwhich allows us to use it in our code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"class MyNavigationImpl @Inject constructor(\n  // fragments without bundle arguments can be injected in a Provider\n  val myListFragmentProvider: Provider<MyListFragment>,\n  // fragments with a factory must be injected this way\n  val myFragmentFactory: MyFragment.Factory\n) : MyNavigation {\n\n  override fun goToMyListFragment(name: String){\n    val fragment = myFragmentFactory.create(name)\n    // actual navigation logic would go here\n  }\n  override fun goToMyFragment(name: String){\n    val fragment = myFragmentFactory.create(name)\n    // actual navigation logic would go here\n  }\n}\n")),(0,o.kt)("p",null,'These factories are essentially an "entry point" to the ',(0,o.kt)("a",{parentName:"p",href:"https://rbusarow.github.io/Tangle/api/tangle-fragment-api/tangle.fragment/-tangle-fragment-factory"},"TangleFragmentFactory"),".  Once the factory\nhas initialized its Fragment, the arguments are established and cached by the Android framework.\nIf the Fragment needs to be recreated by the ",(0,o.kt)("a",{parentName:"p",href:"https://rbusarow.github.io/Tangle/api/tangle-fragment-api/tangle.fragment/-tangle-fragment-factory"},"TangleFragmentFactory"),", the new instance will be\ncreated using a ",(0,o.kt)("inlineCode",{parentName:"p"},"Provider")," and just invoking the constructor, without recreating the ",(0,o.kt)("inlineCode",{parentName:"p"},"Bundle"),"."),(0,o.kt)("h3",{id:"limiting-access"},"Limiting access"),(0,o.kt)("p",null,"If a Fragment requires a custom factory for bundle arguments,\nTangle ",(0,o.kt)("em",{parentName:"p"},"does")," create a ",(0,o.kt)("inlineCode",{parentName:"p"},"@Provides"),"-annotated function, but it's hidden behind a qualifier:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Provides\n@TangleFragmentProviderMap\npublic fun provideMyFragment(): MyFragment = MyFragment_Factory.newInstance()\n")),(0,o.kt)("p",null,"This means that if anyone attempts to inject it like a normal Dagger dependency:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"class SomeClass @Inject constructor(\n  val myFragmentProvider: Provider<MyFragment>\n)\n")),(0,o.kt)("p",null,"...Dagger will fail the build with a very familiar error message:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"[Dagger/MissingBinding]"," com.example.MyFragment cannot be provided without an @Inject constructor or an @Provides-annotated method.")))}p.isMDXComponent=!0}}]);