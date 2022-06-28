"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[64244],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var p=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);t&&(p=p.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,p)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,p,n=function(e,t){if(null==e)return{};var r,p,n={},a=Object.keys(e);for(p=0;p<a.length;p++)r=a[p],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(p=0;p<a.length;p++)r=a[p],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=p.createContext({}),l=function(e){var t=p.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return p.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return p.createElement(p.Fragment,{},t)}},f=p.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=l(r),m=n,d=f["".concat(u,".").concat(m)]||f[m]||s[m]||a;return r?p.createElement(d,o(o({ref:t},c),{},{components:r})):p.createElement(d,o({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var l=2;l<a;l++)o[l]=r[l];return p.createElement.apply(null,o)}return p.createElement.apply(null,r)}f.displayName="MDXCreateElement"},95698:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var p=r(87462),n=(r(67294),r(3905));const a={},o="PuppeteerLaunchOptions interface",i={unversionedId:"api/puppeteer.puppeteerlaunchoptions",id:"api/puppeteer.puppeteerlaunchoptions",title:"PuppeteerLaunchOptions interface",description:"Signature:",source:"@site/../docs/api/puppeteer.puppeteerlaunchoptions.md",sourceDirName:"api",slug:"/api/puppeteer.puppeteerlaunchoptions",permalink:"/puppeteer/api/puppeteer.puppeteerlaunchoptions",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"PuppeteerErrors.TimeoutError property",permalink:"/puppeteer/api/puppeteer.puppeteererrors.timeouterror"},next:{title:"PuppeteerLaunchOptions.extraPrefsFirefox property",permalink:"/puppeteer/api/puppeteer.puppeteerlaunchoptions.extraprefsfirefox"}},u={},l=[{value:"Properties",id:"properties",level:2}],c={toc:l};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,p.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"puppeteerlaunchoptions-interface"},"PuppeteerLaunchOptions interface"),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface PuppeteerLaunchOptions extends LaunchOptions, BrowserLaunchArgumentOptions, BrowserConnectOptions\n")),(0,n.kt)("b",null,"Extends:")," [LaunchOptions](/puppeteer/api/puppeteer.launchoptions), [BrowserLaunchArgumentOptions](/puppeteer/api/puppeteer.browserlaunchargumentoptions), [BrowserConnectOptions](/puppeteer/api/puppeteer.browserconnectoptions)",(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/puppeteer/api/puppeteer.puppeteerlaunchoptions.extraprefsfirefox"},"extraPrefsFirefox?")),(0,n.kt)("td",{parentName:"tr",align:null},"Record","<","string, unknown",">"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("i",null,"(Optional)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/puppeteer/api/puppeteer.puppeteerlaunchoptions.product"},"product?")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/puppeteer/api/puppeteer.product"},"Product")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("i",null,"(Optional)"))))))}s.isMDXComponent=!0}}]);