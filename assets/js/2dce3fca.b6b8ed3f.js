"use strict";(self.webpackChunktangle=self.webpackChunktangle||[]).push([[2490],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return g}});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(t),g=l,m=p["".concat(u,".").concat(g)]||p[g]||c[g]||r;return t?a.createElement(m,i(i({ref:n},d),{},{components:t})):a.createElement(m,i({ref:n},d))}));function g(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=p;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5162:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(7294),l=t(6010),r="tabItem_Ymn6";function i(e){var n=e.children,t=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:t},n)}},5488:function(e,n,t){t.d(n,{Z:function(){return g}});var a=t(3117),l=t(7294),r=t(6010),i=t(2389),o=t(7392),u=t(7094),s=t(2466),d="tabList__CuJ",c="tabItem_LNqP";function p(e){var n,t,i=e.lazy,p=e.block,g=e.defaultValue,m=e.values,f=e.groupId,v=e.className,b=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=m?m:b.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),h=(0,o.l)(y,(function(e,n){return e.value===n.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===g?g:null!=(n=null!=g?g:null==(t=b.find((function(e){return e.props.default})))?void 0:t.props.value)?n:b[0].props.value;if(null!==k&&!y.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var T=(0,u.U)(),w=T.tabGroupChoices,N=T.setTabGroupChoices,E=(0,l.useState)(k),x=E[0],O=E[1],P=[],j=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var Z=w[f];null!=Z&&Z!==x&&y.some((function(e){return e.value===Z}))&&O(Z)}var A=function(e){var n=e.currentTarget,t=P.indexOf(n),a=y[t].value;a!==x&&(j(n),O(a),null!=f&&N(f,String(a)))},S=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a,l=P.indexOf(e.currentTarget)+1;t=null!=(a=P[l])?a:P[0];break;case"ArrowLeft":var r,i=P.indexOf(e.currentTarget)-1;t=null!=(r=P[i])?r:P[P.length-1]}null==(n=t)||n.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",d)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":p},v)},y.map((function(e){var n=e.value,t=e.label,i=e.attributes;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===n?0:-1,"aria-selected":x===n,key:n,ref:function(e){return P.push(e)},onKeyDown:S,onFocus:A,onClick:A},i,{className:(0,r.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":x===n})}),null!=t?t:n)}))),i?(0,l.cloneElement)(b.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},b.map((function(e,n){return(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==x})}))))}function g(e){var n=(0,i.Z)();return l.createElement(p,(0,a.Z)({key:String(n)},e))}},3243:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return g}});var a=t(3117),l=t(102),r=(t(7294),t(3905)),i=t(5488),o=t(5162),u=["components"],s={id:"gradle-plugin",sidebar_label:"Gradle Plugin",title:"Gradle Plugin"},d=void 0,c={unversionedId:"gradle-plugin",id:"version-0.15.0/gradle-plugin",title:"Gradle Plugin",description:"The simplest way to apply Tangle is via the Gradle plugin.",source:"@site/versioned_docs/version-0.15.0/gradle-plugin.mdx",sourceDirName:".",slug:"/gradle-plugin",permalink:"/Tangle/docs/gradle-plugin",draft:!1,editUrl:"https://github.com/rbusarow/Tangle/blob/main/website/versioned_docs/version-0.15.0/gradle-plugin.mdx",tags:[],version:"0.15.0",frontMatter:{id:"gradle-plugin",sidebar_label:"Gradle Plugin",title:"Gradle Plugin"},sidebar:"Docs",previous:{title:"Configuration",permalink:"/Tangle/docs/configuration"},next:{title:"Extending Anvil",permalink:"/Tangle/docs/extending-anvil"}},p={},g=[{value:"Explicitly defining behavior",id:"explicitly-defining-behavior",level:2}],m={toc:g};function f(e){var n=e.components,t=(0,l.Z)(e,u);return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The simplest way to apply Tangle is via the Gradle plugin."),(0,r.kt)("p",null,"The plugin will automatically apply the Anvil compiler plugin and all required Tangle extensions.\nBy default, the plugin will automatically determine which Tangle dependencies to add by inspecting\nthe module's Androidx dependencies, and adding the corresponding Tangle features."),(0,r.kt)("p",null,"For example, if a project has declared a Fragments dependency like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'dependencies {\n  api("androidx.fragment:fragment")\n}\n')),(0,r.kt)("p",null,"Then Tangle will add the tangle-fragment dependencies:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"com.rickbusarow.tangle:tangle-fragment-api:0.14.1"),(0,r.kt)("li",{parentName:"ul"},"com.rickbusarow.tangle:tangle-fragment-compiler:0.14.1")),(0,r.kt)(i.Z,{groupId:"language",defaultValue:"Kotlin",values:[{label:"Kotlin",value:"Kotlin"},{label:"Groovy",value:"Groovy"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"// settings.gradle.kts\n\npluginManagement {\n  repositories {\n    gradlePluginPortal()\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'// root project build.gradle.kts\n\nplugins {\n  // add Tangle and Anvil versions to the project\'s classpath\n  id("com.squareup.anvil") version <anvil_version> apply false\n  id("com.rickbusarow.tangle") version "0.15.0-SNAPSHOT" apply false\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'// any Android module\'s build.gradle.kts\n\nplugins {\n  id("android-library") // or application, etc.\n  kotlin("android")\n  id("com.rickbusarow.tangle") version "0.15.0-SNAPSHOT"\n}\n'))),(0,r.kt)(o.Z,{value:"Groovy",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},"// settings.gradle\n\npluginManagement {\n  repositories {\n    gradlePluginPortal()\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},"// root project build.gradle\n\nplugins {\n  // add Tangle and Anvil versions to the project's classpath\n  id 'com.squareup.anvil' version <anvil_version> apply false\n  id 'com.rickbusarow.tangle' version \"0.15.0-SNAPSHOT\" apply false\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},"// any Android module's build.gradle\n\nplugins {\n  id 'android-library' // or application, etc.\n  kotlin(\"android\")\n  id 'com.rickbusarow.tangle'\n}\n")))),(0,r.kt)("h2",{id:"explicitly-defining-behavior"},"Explicitly defining behavior"),(0,r.kt)("p",null,"This automatic behavior may be overridden by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"tangle { ... }")," configuration block."),(0,r.kt)("p",null,"These settings are prioritized ahead of the automatic configuration.  Note that explicitly setting\na feature to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," (enabled) will force the plugin to add dependencies and compiler extensions\nwhich probably aren't needed.  This functionality mostly exists for its ability to ",(0,r.kt)("em",{parentName:"p"},"disable")," the\nTangle functionality."),(0,r.kt)(i.Z,{groupId:"language",defaultValue:"Kotlin",values:[{label:"Kotlin",value:"Kotlin"},{label:"Groovy",value:"Groovy"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'// any Android module\'s build.gradle.kts\n\nplugins {\n  id("android-library") // or application, etc.\n  kotlin("android")\n  id("com.rickbusarow.tangle") version "0.15.0-SNAPSHOT"\n}\n\n// optional\ntangle {\n  // enables the Fragments feature regardless of the project\'s dependencies\n  fragmentsEnabled = true // default is null\n\n  // disables the Work/WorkManager feature regardless of the project\'s dependencies\n  workEnabled = false // default is null\n\n  viewModelOptions {\n    enabled = true // default is null\n    activitiesEnabled = true // default is null\n    composeEnabled = true // default is null\n    fragmentsEnabled = true // default is null\n  }\n}\n'))),(0,r.kt)(o.Z,{value:"Groovy",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},"// any Android module's build.gradle\n\nplugins {\n  id 'android-library' // or application, etc.\n  kotlin(\"android\")\n  id 'com.rickbusarow.tangle'\n}\n\n// optional\ntangle {\n  // enables the Fragments feature regardless of the project's dependencies\n  fragmentsEnabled = true // default is null\n\n  // disables the Work/WorkManager feature regardless of the project's dependencies\n  workEnabled = false // default is null\n\n  viewModelOptions {\n    enabled true // default is null\n    activitiesEnabled true // default is null\n    composeEnabled true // default is null\n    fragmentsEnabled true // default is null\n  }\n}\n")))))}f.isMDXComponent=!0}}]);