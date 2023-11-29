/*! For license information please see 68482511.d1d0d0a7.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[20732],{80833:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(85893),i=r(11151);const a={sidebar_label:"Frame.waitForNavigation"},o="Frame.waitForNavigation() method",s={id:"api/puppeteer.frame.waitfornavigation",title:"Frame.waitForNavigation() method",description:"Waits for the frame to navigate. It is useful for when you run code which will indirectly cause the frame to navigate.",source:"@site/versioned_docs/version-21.5.2/api/puppeteer.frame.waitfornavigation.md",sourceDirName:"api",slug:"/api/puppeteer.frame.waitfornavigation",permalink:"/api/puppeteer.frame.waitfornavigation",draft:!1,unlisted:!1,tags:[],version:"21.5.2",frontMatter:{sidebar_label:"Frame.waitForNavigation"},sidebar:"api",previous:{title:"Frame.waitForFunction",permalink:"/api/puppeteer.frame.waitforfunction"},next:{title:"Frame.waitForSelector",permalink:"/api/puppeteer.frame.waitforselector"}},l={},c=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function p(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"framewaitfornavigation-method",children:"Frame.waitForNavigation() method"}),"\n",(0,n.jsx)(t.p,{children:"Waits for the frame to navigate. It is useful for when you run code which will indirectly cause the frame to navigate."}),"\n",(0,n.jsxs)(t.p,{children:["Usage of the ",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/History_API",children:"History API"})," to change the URL is considered a navigation."]}),"\n",(0,n.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"class Frame {\n  abstract waitForNavigation(\n    options?: WaitForOptions\n  ): Promise<HTTPResponse | null>;\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"options"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/api/puppeteer.waitforoptions",children:"WaitForOptions"})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.em,{children:"(Optional)"})," Options to configure waiting behavior."]})]})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,n.jsxs)(t.p,{children:["Promise<",(0,n.jsx)(t.a,{href:"/api/puppeteer.httpresponse",children:"HTTPResponse"})," | null>"]}),"\n",(0,n.jsx)(t.p,{children:"A promise which resolves to the main resource response."}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"const [response] = await Promise.all([\n  // The navigation promise resolves after navigation has finished\n  frame.waitForNavigation(),\n  // Clicking the link will indirectly cause a navigation\n  frame.click('a.my-link'),\n]);\n"})})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},75251:(e,t,r)=>{var n=r(67294),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,a={},c=null,p=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(p=t.ref),t)o.call(t,n)&&!l.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:i,type:e,key:c,ref:p,props:a,_owner:s.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},85893:(e,t,r)=>{e.exports=r(75251)},11151:(e,t,r)=>{r.d(t,{Z:()=>s,a:()=>o});var n=r(67294);const i={},a=n.createContext(i);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);