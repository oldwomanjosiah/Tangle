"use strict";(self.webpackChunktangle=self.webpackChunktangle||[]).push([[9859],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),c=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,v=p["".concat(d,".").concat(m)]||p[m]||u[m]||l;return n?a.createElement(v,i(i({ref:t},s),{},{components:n})):a.createElement(v,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8779:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var a=n(3117),r=n(102),l=(n(7294),n(3905)),i=["components"],o={title:"SavedStateHandle injection",sidebar_label:"SavedStateHandle Injection"},d=void 0,c={unversionedId:"viewModels/savedStateHandle",id:"version-0.15.0/viewModels/savedStateHandle",title:"SavedStateHandle injection",description:"When using the tangleViewModel delegate function, a scoped subcomponent is created",source:"@site/versioned_docs/version-0.15.0/viewModels/savedStateHandle.md",sourceDirName:"viewModels",slug:"/viewModels/savedStateHandle",permalink:"/Tangle/docs/viewModels/savedStateHandle",draft:!1,editUrl:"https://github.com/rbusarow/Tangle/blob/main/website/versioned_docs/version-0.15.0/viewModels/savedStateHandle.md",tags:[],version:"0.15.0",frontMatter:{title:"SavedStateHandle injection",sidebar_label:"SavedStateHandle Injection"},sidebar:"Docs",previous:{title:"ViewModels",permalink:"/Tangle/docs/viewModels/"},next:{title:"Compose",permalink:"/Tangle/docs/viewModels/compose"}},s={},u=[],p={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"When using the ",(0,l.kt)("inlineCode",{parentName:"p"},"tangleViewModel")," delegate function, a scoped subcomponent is created\nwith a binding for ",(0,l.kt)("a",{parentName:"p",href:"https://developer.android.com/topic/libraries/architecture/viewmodel-savedstate"},"SavedStateHandle"),".  This ",(0,l.kt)("inlineCode",{parentName:"p"},"SavedStateHandle")," is provided\nby the ViewModel's owning ",(0,l.kt)("inlineCode",{parentName:"p"},"Fragment"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Activity"),", or ",(0,l.kt)("inlineCode",{parentName:"p"},"NavBackStackEntry"),"."),(0,l.kt)("p",null,"This ",(0,l.kt)("inlineCode",{parentName:"p"},"SavedStateHandle")," may then be included as a dependency in injected constructors,\njust as it can in ",(0,l.kt)("a",{parentName:"p",href:"https://dagger.dev/hilt/view-model.html"},"Hilt"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"import androidx.lifecycle.SavedStateHandle\nimport androidx.lifecycle.ViewModel\nimport tangle.viewmodel.VMInject\n\nclass MyViewModel @VMInject constructor(\n  val savedState: SavedStateHandle\n) : ViewModel()\n")),(0,l.kt)("p",null,"In addition, Tangle can automatically extract arguments from the ",(0,l.kt)("inlineCode",{parentName:"p"},"SavedStateHandle"),"\nand inject them into the constructor, through use of the ",(0,l.kt)("inlineCode",{parentName:"p"},"TangleParam")," annotation."),(0,l.kt)("p",null,"If the constructor argument's type is not nullable, then Tangle will assert that the argument is in\nthe bundle while creating the ViewModel."),(0,l.kt)("p",null,"If the argument is marked as nullable, then Tangle will gracefully handle a missing argument and\njust inject ",(0,l.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,l.kt)("p",null,"Given this code:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'import androidx.lifecycle.ViewModel\nimport tangle.inject.TangleParam\nimport tangle.viewmodel.VMInject\n\nclass MyViewModel @VMInject constructor(\n  @TangleParam("userId")\n  val userId: String, // must be present in the SavedStateHandle\n  @TangleParam("address")\n  val addressOrNull: String? // can safely be null\n) : ViewModel()\n')),(0,l.kt)("p",null,"Tangle will generate the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'import androidx.lifecycle.SavedStateHandle\nimport javax.inject.Inject\nimport javax.inject.Provider\n\npublic class MyViewModel_Factory @Inject constructor(\n  internal val savedStateHandleProvider: Provider<SavedStateHandle>\n) {\n  public fun create(): MyViewModel {\n    val userId = savedStateHandleProvider.get().get<String>("userId")\n    checkNotNull(userId) {\n      "Required parameter with name `userId` " +\n        "and type `kotlin.String` is missing from SavedStateHandle."\n    }\n    val addressOrNull = savedStateHandleProvider.get().get<String?>("address")\n    return MyViewModel(userId, addressOrNull)\n  }\n}\n')))}m.isMDXComponent=!0}}]);