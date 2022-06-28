"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[73835],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),h=s(r),d=a,m=h["".concat(c,".").concat(d)]||h[d]||u[d]||p;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,i=new Array(p);i[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<p;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},51474:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>p,metadata:()=>o,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const p={},i="HTTPRequest.redirectChain() method",o={unversionedId:"api/puppeteer.httprequest.redirectchain",id:"api/puppeteer.httprequest.redirectchain",title:"HTTPRequest.redirectChain() method",description:"A redirectChain is a chain of requests initiated to fetch a resource.",source:"@site/../docs/api/puppeteer.httprequest.redirectchain.md",sourceDirName:"api",slug:"/api/puppeteer.httprequest.redirectchain",permalink:"/puppeteer/api/puppeteer.httprequest.redirectchain",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"HTTPRequest.postData() method",permalink:"/puppeteer/api/puppeteer.httprequest.postdata"},next:{title:"HTTPRequest.resourceType() method",permalink:"/puppeteer/api/puppeteer.httprequest.resourcetype"}},c={},s=[{value:"Remarks",id:"remarks",level:2}],l={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"httprequestredirectchain-method"},"HTTPRequest.redirectChain() method"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"redirectChain")," is a chain of requests initiated to fetch a resource."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"redirectChain(): HTTPRequest[];\n")),(0,a.kt)("b",null,"Returns:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/puppeteer/api/puppeteer.httprequest"},"HTTPRequest"),"[","]"),(0,a.kt)("p",null,"the chain of requests - if a server responds with at least a single redirect, this chain will contain all requests that were redirected."),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"redirectChain")," is shared between all the requests of the same chain."),(0,a.kt)("p",null,"For example, if the website ",(0,a.kt)("inlineCode",{parentName:"p"},"http://example.com")," has a single redirect to ",(0,a.kt)("inlineCode",{parentName:"p"},"https://example.com"),", then the chain will contain one request:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const response = await page.goto('http://example.com');\nconst chain = response.request().redirectChain();\nconsole.log(chain.length); // 1\nconsole.log(chain[0].url()); // 'http://example.com'\n")),(0,a.kt)("p",null,"If the website ",(0,a.kt)("inlineCode",{parentName:"p"},"https://google.com")," has no redirects, then the chain will be empty:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const response = await page.goto('https://google.com');\nconst chain = response.request().redirectChain();\nconsole.log(chain.length); // 0\n")))}u.isMDXComponent=!0}}]);