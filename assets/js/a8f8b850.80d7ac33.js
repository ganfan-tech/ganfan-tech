"use strict";(self.webpackChunkganfan_tech_website=self.webpackChunkganfan_tech_website||[]).push([[6397],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(r),d=o,m=u["".concat(l,".").concat(d)]||u[d]||f[d]||c;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var s=2;s<c;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7761:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>c,metadata:()=>i,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const c={},a="\u63a7\u5236",i={unversionedId:"os-and-c/control",id:"os-and-c/control",title:"\u63a7\u5236",description:"if, for, do, while, switch, case",source:"@site/docs/os-and-c/02.control.md",sourceDirName:"os-and-c",slug:"/os-and-c/control",permalink:"/docs/os-and-c/control",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/os-and-c/02.control.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"c-compiler",permalink:"/docs/os-and-c/c-compiler"},next:{title:"\u6807\u51c6\u5e93",permalink:"/docs/os-and-c/std"}},l={},s=[],p={toc:s},u="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u63a7\u5236"},"\u63a7\u5236"),(0,o.kt)("p",null,"if, for, do, while, switch, case"),(0,o.kt)("p",null,"\u4e09\u5143\u8fd0\u7b97\u7b26"),(0,o.kt)("p",null,"\u9884\u5904\u7406\n#if, #ifdef, #ifndef, #elif, #else, #endif"),(0,o.kt)("p",null,"_Generic \u6cdb\u7c7b\u578b\u8868\u8fbe\u5f0f"),(0,o.kt)("p",null,"\u8981\u70b93.1\u3000\u503c0\u8868\u793a\u903b\u8f91\u4e3a\u5047\u3002\n\u8981\u70b93.2\u3000\u4efb\u4f55\u4e0d\u662f0\u7684\u503c\u90fd\u8868\u793a\u903b\u8f91\u4e3a\u771f\u3002\n\u8981\u70b93.3\u3000\u4e0d\u8981\u4e0e0\u3001false\u6216true\u8fdb\u884c\u6bd4\u8f83\uff08\u4f1a\u56e0\u4e3a\u5197\u4f59\uff0c\u53d8\u5f97\u4e0d\u53ef\u8bfb\uff09"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u8981\u70b93.4\u3000\u6240\u6709\u6807\u91cf\u90fd\u6709\u4e00\u4e2a\u771f\u503c\u3002\u8fd9\u91cc\uff0c\u6807\u91cfC\u7c7b\u578b\u5305\u62ec\u6211\u4eec\u5df2\u7ecf\u9047\u5230\u7684\u6240\u6709\u6570\u503c\u7c7b\u578b\uff0c\u5982size_t\u3001bool\u548cint\uff0c\u4ee5\u53ca\u6307\u9488C\u7c7b\u578b\u3002\n")))}f.isMDXComponent=!0}}]);