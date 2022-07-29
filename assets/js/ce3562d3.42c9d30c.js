"use strict";(self.webpackChunktangle=self.webpackChunktangle||[]).push([[8070],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return g}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(t),g=a,m=u["".concat(c,".").concat(g)]||u[g]||p[g]||i;return t?r.createElement(m,o(o({ref:n},d),{},{components:t})):r.createElement(m,o({ref:n},d))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6825:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=t(3117),a=t(102),i=(t(7294),t(3905)),o=["components"],l={id:"extending-anvil",sidebar_label:"Extending Anvil",title:"Extending Anvil"},c=void 0,s={unversionedId:"extending-anvil",id:"version-0.13.0/extending-anvil",title:"Extending Anvil",description:"[Anvil] is a Kotlin compiler plugin which simplifies how we use [Dagger]. Anvil's documentation is",source:"@site/versioned_docs/version-0.13.0/extending-anvil.md",sourceDirName:".",slug:"/extending-anvil",permalink:"/Tangle/docs/0.13.0/extending-anvil",draft:!1,editUrl:"https://github.com/rbusarow/Tangle/blob/main/website/versioned_docs/version-0.13.0/extending-anvil.md",tags:[],version:"0.13.0",frontMatter:{id:"extending-anvil",sidebar_label:"Extending Anvil",title:"Extending Anvil"},sidebar:"version-0.13.0/Docs",previous:{title:"Configuration",permalink:"/Tangle/docs/0.13.0/configuration"},next:{title:"Member Injection",permalink:"/Tangle/docs/0.13.0/member-injection"}},d={},p=[{value:"Generating code from generated code",id:"generating-code-from-generated-code",level:2}],u={toc:p};function g(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/square/anvil"},"Anvil")," is a Kotlin compiler plugin which simplifies how we use ",(0,i.kt)("a",{parentName:"p",href:"https://dagger.dev"},"Dagger"),". Anvil's documentation is\ndefinitely worth a read. Its benefits can be broken down into three categories:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'It can dramatically simplify Dagger development by automating most of the "plumbing".'),(0,i.kt)("li",{parentName:"ol"},"It can ",(0,i.kt)("strong",{parentName:"li"},"reduce build times")," by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/square/anvil#dagger-factory-generation"},"generating dagger factories"),", meaning that you can remove\nthe ",(0,i.kt)("inlineCode",{parentName:"li"},"dagger-compiler")," kapt dependency (and probably remove kapt entirely) from most of your\nproject."),(0,i.kt)("li",{parentName:"ol"},"It allows us to write our own code generators. This is what Tangle does. We're able to generate\nour own code, which is then integrated into the final graph by Anvil.")),(0,i.kt)("h2",{id:"generating-code-from-generated-code"},"Generating code from generated code"),(0,i.kt)("p",null,"Some of the code generated by Tangle requires additional processing."),(0,i.kt)("p",null,"For instance, given this human-written code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyViewModel @VMInject constructor(\n  @TangleParam("name")\n  val name: String\n) : ViewModel()\n')),(0,i.kt)("p",null,"Tangle will generate this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'// generated by Tangle\npublic class MyViewModel_Factory @Inject constructor(\n  internal val savedStateHandleProvider: Provider<SavedStateHandle>\n) {\n  public fun create(): MyViewModel {\n    val name = savedStateHandleProvider.get().get<String>("name")\n    checkNotNull(name) {\n      "Required parameter with name `name` and type `kotlin.String` is missing from SavedStateHandle."\n    }\n    return MyViewModel(name)\n  }\n}\n')),(0,i.kt)("p",null,"Notice that it uses ",(0,i.kt)("inlineCode",{parentName:"p"},"@Inject constructor"),". This code was created ",(0,i.kt)("em",{parentName:"p"},"after")," compilation started, but it\nneeds to be analyzed as part of the overall Kotlin compilation task."),(0,i.kt)("p",null,"This is trivial if the project is using Dagger to generate dagger factories, because the kapt\ncompilation stage hasn't started yet. When kapt starts, it will scan the files and see the generated\nMyViewModel_Factory.kt as though it's just another human-written file."),(0,i.kt)("p",null,"For Anvil, however, things are more difficult. The Kotlin compiler scans files once and passes that\ncollection of files to the Anvil plugin. So in order for Anvil to generate code for Tangle, the two\nlibraries need to be able to talk to one another. As Tangle creates new files, those files are\npassed along to Anvil for additional processing. For the MyViewModel_Factory.kt file above, Anvil\nwill generate the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"// generated by Anvil\npublic class MyViewModel_Factory_Factory(\n  private val param0: Provider<@JvmSuppressWildcards SavedStateHandle>\n) : Factory<MyViewModel_Factory> {\n  public override fun `get`(): MyViewModel_Factory = newInstance(param0)\n\n  public companion object {\n    @JvmStatic\n    public fun create(param0: Provider<@JvmSuppressWildcards SavedStateHandle>):\n      MyViewModel_Factory_Factory = MyViewModel_Factory_Factory(param0)\n\n    @JvmStatic\n    public fun newInstance(param0: Provider<@JvmSuppressWildcards SavedStateHandle>):\n      MyViewModel_Factory = MyViewModel_Factory(param0)\n  }\n}\n")))}g.isMDXComponent=!0}}]);