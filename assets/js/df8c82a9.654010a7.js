"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[89440],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),l=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(i.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,p=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(t),f=o,y=d["".concat(i,".").concat(f)]||d[f]||s[f]||p;return t?n.createElement(y,a(a({ref:r},u),{},{components:t})):n.createElement(y,a({ref:r},u))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var p=t.length,a=new Array(p);a[0]=d;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<p;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8189:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>a,default:()=>s,frontMatter:()=>p,metadata:()=>c,toc:()=>l});var n=t(87462),o=(t(67294),t(3905));const p={},a="ErrorCode type",c={unversionedId:"api/puppeteer.errorcode",id:"api/puppeteer.errorcode",title:"ErrorCode type",description:"Signature:",source:"@site/../docs/api/puppeteer.errorcode.md",sourceDirName:"api",slug:"/api/puppeteer.errorcode",permalink:"/puppeteer/api/puppeteer.errorcode",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"ElementHandle.waitForXPath() method",permalink:"/puppeteer/api/puppeteer.elementhandle.waitforxpath"},next:{title:"errors variable",permalink:"/puppeteer/api/puppeteer.errors"}},i={},l=[],u={toc:l};function s(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"errorcode-type"},"ErrorCode type"),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare type ErrorCode =\n  | 'aborted'\n  | 'accessdenied'\n  | 'addressunreachable'\n  | 'blockedbyclient'\n  | 'blockedbyresponse'\n  | 'connectionaborted'\n  | 'connectionclosed'\n  | 'connectionfailed'\n  | 'connectionrefused'\n  | 'connectionreset'\n  | 'internetdisconnected'\n  | 'namenotresolved'\n  | 'timedout'\n  | 'failed';\n")))}s.isMDXComponent=!0}}]);