/*! For license information please see b4f02348.ecacc6f4.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[27874],{61733:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var a=r(85893),n=r(11151);const i={sidebar_label:"Page.addScriptTag"},s="Page.addScriptTag() method",d={id:"api/puppeteer.page.addscripttag",title:"Page.addScriptTag() method",description:"Adds a `` tag into the page with the desired URL or content.",source:"@site/versioned_docs/version-22.1.0/api/puppeteer.page.addscripttag.md",sourceDirName:"api",slug:"/api/puppeteer.page.addscripttag",permalink:"/api/puppeteer.page.addscripttag",draft:!1,unlisted:!1,tags:[],version:"22.1.0",frontMatter:{sidebar_label:"Page.addScriptTag"},sidebar:"api",previous:{title:"Page.$eval",permalink:"/api/puppeteer.page._eval"},next:{title:"Page.addStyleTag",permalink:"/api/puppeteer.page.addstyletag"}},p={},o=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"pageaddscripttag-method",children:"Page.addScriptTag() method"}),"\n",(0,a.jsxs)(t.p,{children:["Adds a ",(0,a.jsx)(t.code,{children:"<script>"})," tag into the page with the desired URL or content."]}),"\n",(0,a.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  addScriptTag(\n    options: FrameAddScriptTagOptions\n  ): Promise<ElementHandle<HTMLScriptElement>>;\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Parameter"}),(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"options"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"/api/puppeteer.frameaddscripttagoptions",children:"FrameAddScriptTagOptions"})}),(0,a.jsx)(t.td,{children:"Options for the script."})]})})]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,a.jsxs)(t.p,{children:["Promise<",(0,a.jsx)(t.a,{href:"/api/puppeteer.elementhandle",children:"ElementHandle"}),"<HTMLScriptElement>>"]}),"\n",(0,a.jsxs)(t.p,{children:["An ",(0,a.jsx)(t.a,{href:"/api/puppeteer.elementhandle",children:"element handle"})," to the injected ",(0,a.jsx)(t.code,{children:"<script>"})," element."]}),"\n",(0,a.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,a.jsxs)(t.p,{children:["Shortcut for ",(0,a.jsx)(t.a,{href:"/api/puppeteer.frame.addscripttag",children:"page.mainFrame().addScriptTag(options)"}),"."]})]})}function l(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},75251:(e,t,r)=>{var a=r(67294),n=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,d=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,r){var a,i={},o=null,c=null;for(a in void 0!==r&&(o=""+r),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(c=t.ref),t)s.call(t,a)&&!p.hasOwnProperty(a)&&(i[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===i[a]&&(i[a]=t[a]);return{$$typeof:n,type:e,key:o,ref:c,props:i,_owner:d.current}}t.Fragment=i,t.jsx=o,t.jsxs=o},85893:(e,t,r)=>{e.exports=r(75251)},11151:(e,t,r)=>{r.d(t,{Z:()=>d,a:()=>s});var a=r(67294);const n={},i=a.createContext(n);function s(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);