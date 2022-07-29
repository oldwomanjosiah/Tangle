"use strict";(self.webpackChunktangle=self.webpackChunktangle||[]).push([[5491],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return g}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),g=o,m=d["".concat(p,".").concat(g)]||d[g]||s[g]||i;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5321:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var r=t(3117),o=t(102),i=(t(7294),t(3905)),a=["components"],l={id:"configuration",sidebar_label:"Configuration"},p=void 0,c={unversionedId:"configuration",id:"version-0.10.0/configuration",title:"configuration",description:"The TangleComponents holder needs to be initialized with an application-scoped Dagger Component in",source:"@site/versioned_docs/version-0.10.0/configuration.mdx",sourceDirName:".",slug:"/configuration",permalink:"/Tangle/docs/0.10.0/configuration",draft:!1,editUrl:"https://github.com/rbusarow/Tangle/blob/main/website/versioned_docs/version-0.10.0/configuration.mdx",tags:[],version:"0.10.0",frontMatter:{id:"configuration",sidebar_label:"Configuration"},sidebar:"version-0.10.0/Docs",previous:{title:"Quick Start",permalink:"/Tangle/docs/0.10.0/"},next:{title:"ViewModels",permalink:"/Tangle/docs/0.10.0/viewModels/"}},u={},s=[{value:"Gradle plugin",id:"gradle-plugin",level:3},{value:"Explicit dependencies",id:"explicit-dependencies",level:3}],d={toc:s};function g(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"TangleComponents")," holder needs to be initialized with an application-scoped Dagger Component in\norder to complete the graph."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"class MyApplication : Application() {\n\n  override fun onCreate() {\n    super.onCreate()\n\n    val myAppComponent = DaggerAppComponent.factory()\n      .create(this)\n\n    TangleComponents.add(myAppComponent)\n  }\n}\n")),(0,i.kt)("h3",{id:"gradle-plugin"},"Gradle plugin"),(0,i.kt)("p",null,"The simple way to apply Tangle is to just apply the gradle plugin. It will automatically add the\ndependencies and perform some basic validation of your module's configuration."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"// settings.gradle.kts\n\npluginManagement {\n  repositories {\n    gradlePluginPortal()\n  }\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'// top-level build.gradle.kts\n\nplugins {\n  id("com.rickbusarow.tangle") version "0.10.0"\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'// any Android module\'s build.gradle.kts\n\nplugins {\n  id("android-library") // or application, etc.\n  kotlin("android")\n  id("com.squareup.anvil")\n  id("com.rickbusarow.tangle")\n}\n\n// optional\ntangle {\n  composeEnabled.set(true) // default is false\n}\n')),(0,i.kt)("h3",{id:"explicit-dependencies"},"Explicit dependencies"),(0,i.kt)("p",null,"You can also just add dependencies yourself, without applying the plugin."),(0,i.kt)("p",null,"Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"tangle-api")," is an Android library, and ",(0,i.kt)("inlineCode",{parentName:"p"},"tangle-compiler")," generates Android-specific code,\nso they should only be added to Android modules."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'// any Android module\'s build.gradle.kts\n\nplugins {\n  id("android-library") // or application, etc.\n  kotlin("android")\n  id("com.squareup.anvil")\n}\n\ndependencies {\n\n  api("com.rickbusarow.tangle:tangle-annotations:0.10.0")\n\n  implementation("com.rickbusarow.tangle:tangle-api:0.10.0")\n\n  // optional Compose support\n  implementation("com.rickbusarow.tangle:tangle-compose:0.10.0")\n\n  // `anvil` adds the compiler extension to the Anvil plugin\'s list of code generators\n  anvil("com.rickbusarow.tangle:tangle-compiler:0.10.0")\n}\n')))}g.isMDXComponent=!0}}]);