/*! For license information please see dcd2fca6.35cce53f.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[252],{85939:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>i});var r=t(85893),n=t(11151);const o={sidebar_label:"ConsoleMessage"},c="ConsoleMessage class",a={id:"api/puppeteer.consolemessage",title:"ConsoleMessage class",description:"ConsoleMessage objects are dispatched by page via the 'console' event.",source:"@site/versioned_docs/version-22.3.0/api/puppeteer.consolemessage.md",sourceDirName:"api",slug:"/api/puppeteer.consolemessage",permalink:"/api/puppeteer.consolemessage",draft:!1,unlisted:!1,tags:[],version:"22.3.0",frontMatter:{sidebar_label:"ConsoleMessage"},sidebar:"api",previous:{title:"Dialog.type",permalink:"/api/puppeteer.dialog.type"},next:{title:"ConsoleMessage.(constructor)",permalink:"/api/puppeteer.consolemessage._constructor_"}},l={},i=[{value:"Signature:",id:"signature",level:4},{value:"Constructors",id:"constructors",level:2},{value:"Methods",id:"methods",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"consolemessage-class",children:"ConsoleMessage class"}),"\n",(0,r.jsx)(s.p,{children:"ConsoleMessage objects are dispatched by page via the 'console' event."}),"\n",(0,r.jsx)(s.h4,{id:"signature",children:"Signature:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-typescript",children:"export declare class ConsoleMessage\n"})}),"\n",(0,r.jsx)(s.h2,{id:"constructors",children:"Constructors"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Constructor"}),(0,r.jsx)(s.th,{children:"Modifiers"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/api/puppeteer.consolemessage._constructor_",children:"(constructor)(type, text, args, stackTraceLocations)"})}),(0,r.jsx)(s.td,{}),(0,r.jsxs)(s.td,{children:["Constructs a new instance of the ",(0,r.jsx)("code",{children:"ConsoleMessage"})," class"]})]})})]}),"\n",(0,r.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Method"}),(0,r.jsx)(s.th,{children:"Modifiers"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/api/puppeteer.consolemessage.args",children:"args()"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"An array of arguments passed to the console."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/api/puppeteer.consolemessage.location",children:"location()"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"The location of the console message."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/api/puppeteer.consolemessage.stacktrace",children:"stackTrace()"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"The array of locations on the stack of the console message."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/api/puppeteer.consolemessage.text",children:"text()"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"The text of the console message."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/api/puppeteer.consolemessage.type",children:"type()"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"The type of the console message."})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},75251:(e,s,t)=>{var r=t(67294),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function i(e,s,t){var r,o={},i=null,d=null;for(r in void 0!==t&&(i=""+t),void 0!==s.key&&(i=""+s.key),void 0!==s.ref&&(d=s.ref),s)c.call(s,r)&&!l.hasOwnProperty(r)&&(o[r]=s[r]);if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===o[r]&&(o[r]=s[r]);return{$$typeof:n,type:e,key:i,ref:d,props:o,_owner:a.current}}s.Fragment=o,s.jsx=i,s.jsxs=i},85893:(e,s,t)=>{e.exports=t(75251)},11151:(e,s,t)=>{t.d(s,{Z:()=>a,a:()=>c});var r=t(67294);const n={},o=r.createContext(n);function c(e){const s=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);