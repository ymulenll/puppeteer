/*! For license information please see 0f739f30.00c023ee.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[27825],{17647:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var n=t(85893),o=t(11151);const s={sidebar_label:"Browser.createBrowserContext"},a="Browser.createBrowserContext() method",c={id:"api/puppeteer.browser.createbrowsercontext",title:"Browser.createBrowserContext() method",description:"Creates a new browser context.",source:"@site/versioned_docs/version-22.1.0/api/puppeteer.browser.createbrowsercontext.md",sourceDirName:"api",slug:"/api/puppeteer.browser.createbrowsercontext",permalink:"/api/puppeteer.browser.createbrowsercontext",draft:!1,unlisted:!1,tags:[],version:"22.1.0",frontMatter:{sidebar_label:"Browser.createBrowserContext"},sidebar:"api",previous:{title:"Browser.close",permalink:"/api/puppeteer.browser.close"},next:{title:"Browser.defaultBrowserContext",permalink:"/api/puppeteer.browser.defaultbrowsercontext"}},i={},p=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function l(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"browsercreatebrowsercontext-method",children:"Browser.createBrowserContext() method"}),"\n",(0,n.jsxs)(r.p,{children:["Creates a new ",(0,n.jsx)(r.a,{href:"/api/puppeteer.browsercontext",children:"browser context"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["This won't share cookies/cache with other ",(0,n.jsx)(r.a,{href:"/api/puppeteer.browsercontext",children:"browser contexts"}),"."]}),"\n",(0,n.jsx)(r.h4,{id:"signature",children:"Signature:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"class Browser {\n  abstract createBrowserContext(\n    options?: BrowserContextOptions\n  ): Promise<BrowserContext>;\n}\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"options"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/api/puppeteer.browsercontextoptions",children:"BrowserContextOptions"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.em,{children:"(Optional)"})})]})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsxs)(r.p,{children:["Promise<",(0,n.jsx)(r.a,{href:"/api/puppeteer.browsercontext",children:"BrowserContext"}),">"]}),"\n",(0,n.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"import puppeteer from 'puppeteer';\n\nconst browser = await puppeteer.launch();\n// Create a new browser context.\nconst context = await browser.createBrowserContext();\n// Create a new page in a pristine context.\nconst page = await context.newPage();\n// Do stuff\nawait page.goto('https://example.com');\n"})})]})}function d(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},75251:(e,r,t)=>{var n=t(67294),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function p(e,r,t){var n,s={},p=null,l=null;for(n in void 0!==t&&(p=""+t),void 0!==r.key&&(p=""+r.key),void 0!==r.ref&&(l=r.ref),r)a.call(r,n)&&!i.hasOwnProperty(n)&&(s[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===s[n]&&(s[n]=r[n]);return{$$typeof:o,type:e,key:p,ref:l,props:s,_owner:c.current}}r.Fragment=s,r.jsx=p,r.jsxs=p},85893:(e,r,t)=>{e.exports=t(75251)},11151:(e,r,t)=>{t.d(r,{Z:()=>c,a:()=>a});var n=t(67294);const o={},s=n.createContext(o);function a(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);