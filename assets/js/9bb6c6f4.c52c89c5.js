"use strict";(self.webpackChunktangle=self.webpackChunktangle||[]).push([[8263],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3052:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=t(3117),o=t(102),a=(t(7294),t(3905)),i=["components"],l={title:"Compose",sidebar_label:"Compose"},s=void 0,c={unversionedId:"viewModels/compose",id:"version-0.12.1/viewModels/compose",title:"Compose",description:'Tangle supports ViewModel "injection" in composables in a manner very similar to Hilt\'s',source:"@site/versioned_docs/version-0.12.1/viewModels/compose.md",sourceDirName:"viewModels",slug:"/viewModels/compose",permalink:"/Tangle/docs/0.12.1/viewModels/compose",draft:!1,editUrl:"https://github.com/rbusarow/Tangle/blob/main/website/versioned_docs/version-0.12.1/viewModels/compose.md",tags:[],version:"0.12.1",frontMatter:{title:"Compose",sidebar_label:"Compose"},sidebar:"version-0.12.1/Docs",previous:{title:"SavedStateHandle Injection",permalink:"/Tangle/docs/0.12.1/viewModels/savedStateHandle"},next:{title:"Fragments",permalink:"/Tangle/docs/0.12.1/fragments/"}},p={},u=[],m={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Tangle supports ViewModel \"injection\" in composables in a manner very similar to Hilt's\nnavigation/viewModel artifact. It will scope the ViewModel to the composable's ",(0,a.kt)("inlineCode",{parentName:"p"},"NavBackStackEntry"),"."),(0,a.kt)("p",null,"The viewModels are still able to make use of automatic ",(0,a.kt)("a",{parentName:"p",href:"/Tangle/docs/0.12.1/viewModels/savedStateHandle"},"SavedStateHandle injection"),",\nincluding arguments annotated with ",(0,a.kt)("inlineCode",{parentName:"p"},"@TangleParam"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"import androidx.compose.runtime.Composable\nimport androidx.navigation.NavController\nimport tangle.viewmodel.compose.tangleViewModel\n\n@Composable\nfun MyComposable(\n  navController: NavController,\n  viewModel: MyViewModel = tangleViewModel()\n) { /* ... */ }\n")))}d.isMDXComponent=!0}}]);