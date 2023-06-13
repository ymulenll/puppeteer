"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[83703],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),m=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=m(r),f=n,h=c["".concat(l,".").concat(f)]||c[f]||s[f]||o;return r?a.createElement(h,p(p({ref:t},u),{},{components:r})):a.createElement(h,p({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var m=2;m<o;m++)p[m]=r[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},3961:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>c,frontMatter:()=>p,metadata:()=>l,toc:()=>u});r(67294);var a=r(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const p={sidebar_label:"Frame.waitForXPath"},i="Frame.waitForXPath() method",l={unversionedId:"api/puppeteer.frame.waitforxpath",id:"version-20.7.1/api/puppeteer.frame.waitforxpath",title:"Frame.waitForXPath() method",description:"Warning: This API is now obsolete.",source:"@site/versioned_docs/version-20.7.1/api/puppeteer.frame.waitforxpath.md",sourceDirName:"api",slug:"/api/puppeteer.frame.waitforxpath",permalink:"/api/puppeteer.frame.waitforxpath",draft:!1,tags:[],version:"20.7.1",frontMatter:{sidebar_label:"Frame.waitForXPath"},sidebar:"api",previous:{title:"Frame.waitForTimeout",permalink:"/api/puppeteer.frame.waitfortimeout"},next:{title:"JSHandle",permalink:"/api/puppeteer.jshandle"}},m={},u=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2}],s={toc:u};function c(e){var{components:t}=e,r=o(e,["components"]);return(0,a.kt)("wrapper",n({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",n({},{id:"framewaitforxpath-method"}),"Frame.waitForXPath() method"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Warning: This API is now obsolete."),(0,a.kt)("p",{parentName:"blockquote"},"Use ",(0,a.kt)("a",n({parentName:"p"},{href:"/api/puppeteer.frame.waitforselector"}),"Frame.waitForSelector()")," with the ",(0,a.kt)("inlineCode",{parentName:"p"},"xpath")," prefix."),(0,a.kt)("p",{parentName:"blockquote"},"Example: ",(0,a.kt)("inlineCode",{parentName:"p"},"await frame.waitForSelector('xpath/' + xpathExpression)")),(0,a.kt)("p",{parentName:"blockquote"},"The method evaluates the XPath expression relative to the Frame. If ",(0,a.kt)("inlineCode",{parentName:"p"},"xpath")," starts with ",(0,a.kt)("inlineCode",{parentName:"p"},"//")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},".//"),", the dot will be appended automatically."),(0,a.kt)("p",{parentName:"blockquote"},"Wait for the ",(0,a.kt)("inlineCode",{parentName:"p"},"xpath")," to appear in page. If at the moment of calling the method the ",(0,a.kt)("inlineCode",{parentName:"p"},"xpath")," already exists, the method will return immediately. If the xpath doesn't appear after the ",(0,a.kt)("inlineCode",{parentName:"p"},"timeout")," milliseconds of waiting, the function will throw."),(0,a.kt)("p",{parentName:"blockquote"},"For a code example, see the example for ",(0,a.kt)("a",n({parentName:"p"},{href:"/api/puppeteer.frame.waitforselector"}),"Frame.waitForSelector()"),". That function behaves identically other than taking a CSS selector rather than an XPath.")),(0,a.kt)("h4",n({},{id:"signature"}),"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-typescript"}),"class Frame {\n  waitForXPath(\n    xpath: string,\n    options?: WaitForSelectorOptions\n  ): Promise<ElementHandle<Node> | null>;\n}\n")),(0,a.kt)("h2",n({},{id:"parameters"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Parameter"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"xpath"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"the XPath expression to wait for.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"options"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.waitforselectoroptions"}),"WaitForSelectorOptions")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"(Optional)")," options to configure the visibility of the element and how long to wait before timing out.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<",(0,a.kt)("a",n({parentName:"p"},{href:"/api/puppeteer.elementhandle"}),"ElementHandle"),"<","Node",">"," ","|"," null",">"))}c.isMDXComponent=!0}}]);