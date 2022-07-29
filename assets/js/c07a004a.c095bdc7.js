"use strict";(self.webpackChunktangle=self.webpackChunktangle||[]).push([[1966],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||l;return t?r.createElement(f,o(o({ref:n},s),{},{components:t})):r.createElement(f,o({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=p;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5162:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(7294),a=t(6010),l="tabItem_Ymn6";function o(e){var n=e.children,t=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:t},n)}},5488:function(e,n,t){t.d(n,{Z:function(){return m}});var r=t(3117),a=t(7294),l=t(6010),o=t(2389),i=t(7392),u=t(7094),c=t(2466),s="tabList__CuJ",d="tabItem_LNqP";function p(e){var n,t,o=e.lazy,p=e.block,m=e.defaultValue,f=e.values,v=e.groupId,b=e.className,g=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=f?f:g.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),k=(0,i.l)(y,(function(e,n){return e.value===n.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===m?m:null!=(n=null!=m?m:null==(t=g.find((function(e){return e.props.default})))?void 0:t.props.value)?n:g[0].props.value;if(null!==h&&!y.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,u.U)(),O=w.tabGroupChoices,T=w.setTabGroupChoices,N=(0,a.useState)(h),E=N[0],x=N[1],P=[],j=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var D=O[v];null!=D&&D!==E&&y.some((function(e){return e.value===D}))&&x(D)}var Z=function(e){var n=e.currentTarget,t=P.indexOf(n),r=y[t].value;r!==E&&(j(n),x(r),null!=v&&T(v,String(r)))},C=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r,a=P.indexOf(e.currentTarget)+1;t=null!=(r=P[a])?r:P[0];break;case"ArrowLeft":var l,o=P.indexOf(e.currentTarget)-1;t=null!=(l=P[o])?l:P[P.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},b)},y.map((function(e){var n=e.value,t=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===n?0:-1,"aria-selected":E===n,key:n,ref:function(e){return P.push(e)},onKeyDown:C,onFocus:Z,onClick:Z},o,{className:(0,l.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":E===n})}),null!=t?t:n)}))),o?(0,a.cloneElement)(g.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==E})}))))}function m(e){var n=(0,o.Z)();return a.createElement(p,(0,r.Z)({key:String(n)},e))}},8095:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return m}});var r=t(3117),a=t(102),l=(t(7294),t(3905)),o=t(5488),i=t(5162),u=["components"],c={id:"quickstart",title:"Quick Start",sidebar_label:"Quick Start",slug:"/"},s=void 0,d={unversionedId:"quickstart",id:"version-0.11.0/quickstart",title:"Quick Start",description:"Dependencies",source:"@site/versioned_docs/version-0.11.0/quickstart.mdx",sourceDirName:".",slug:"/",permalink:"/Tangle/docs/0.11.0/",draft:!1,editUrl:"https://github.com/rbusarow/Tangle/blob/main/website/versioned_docs/version-0.11.0/quickstart.mdx",tags:[],version:"0.11.0",frontMatter:{id:"quickstart",title:"Quick Start",sidebar_label:"Quick Start",slug:"/"},sidebar:"version-0.11.0/Docs",next:{title:"Configuration",permalink:"/Tangle/docs/0.11.0/configuration"}},p={},m=[{value:"Dependencies",id:"dependencies",level:2}],f={toc:m};function v(e){var n=e.components,t=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"dependencies"},"Dependencies"),(0,l.kt)(o.Z,{groupId:"language",defaultValue:"Kotlin",values:[{label:"Kotlin",value:"Kotlin"},{label:"Groovy",value:"Groovy"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"// settings.gradle.kts\n\npluginManagement {\n  repositories {\n    gradlePluginPortal()\n  }\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'// top-level build.gradle.kts\n\nplugins {\n  id("com.rickbusarow.tangle") version "0.11.0"\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'// any Android module\'s build.gradle.kts\n\nplugins {\n  id("android-library") // or application, etc.\n  kotlin("android")\n  id("com.squareup.anvil")\n  id("com.rickbusarow.tangle")\n}\n\n// optional\ntangle {\n  composeEnabled.set(true) // default is false\n}\n'))),(0,l.kt)(i.Z,{value:"Groovy",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-groovy"},"// settings.gradle\n\npluginManagement {\n  repositories {\n    gradlePluginPortal()\n  }\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-groovy"},'// top-level build.gradle\n\nplugins {\n  id "com.rickbusarow.tangle" version "0.11.0"\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-groovy"},"// any Android module's build.gradle\n\nplugins {\n  id 'android-library' // or application, etc.\n  kotlin(\"android\")\n  id 'com.squareup.anvil'\n  id 'com.rickbusarow.tangle'\n}\n\n// optional\ntangle {\n  composeEnabled = true // default is false\n}\n")))))}v.isMDXComponent=!0}}]);