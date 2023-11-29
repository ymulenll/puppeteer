/*! For license information please see 3a1c47e7.609b9d76.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[59719],{8584:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var n=r(85893),s=r(11151);const o={sidebar_label:"Page.goto"},i="Page.goto() method",a={id:"api/puppeteer.page.goto",title:"Page.goto() method",description:"Navigates the page to the given url.",source:"@site/versioned_docs/version-21.5.2/api/puppeteer.page.goto.md",sourceDirName:"api",slug:"/api/puppeteer.page.goto",permalink:"/api/puppeteer.page.goto",draft:!1,unlisted:!1,tags:[],version:"21.5.2",frontMatter:{sidebar_label:"Page.goto"},sidebar:"api",previous:{title:"Page.goForward",permalink:"/api/puppeteer.page.goforward"},next:{title:"Page.hover",permalink:"/api/puppeteer.page.hover"}},l={},d=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Exceptions",id:"exceptions",level:2},{value:"Remarks",id:"remarks",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"pagegoto-method",children:"Page.goto() method"}),"\n",(0,n.jsxs)(t.p,{children:["Navigates the page to the given ",(0,n.jsx)(t.code,{children:"url"}),"."]}),"\n",(0,n.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  goto(url: string, options?: GoToOptions): Promise<HTTPResponse | null>;\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"url"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsxs)(t.td,{children:["URL to navigate page to. The URL should include scheme, e.g. ",(0,n.jsx)("code",{children:"https://"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"options"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/api/puppeteer.gotooptions",children:"GoToOptions"})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.em,{children:"(Optional)"})," Options to configure waiting behavior."]})]})]})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,n.jsxs)(t.p,{children:["Promise<",(0,n.jsx)(t.a,{href:"/api/puppeteer.httpresponse",children:"HTTPResponse"})," | null>"]}),"\n",(0,n.jsx)(t.p,{children:"A promise which resolves to the main resource response. In case of multiple redirects, the navigation will resolve with the response of the last redirect."}),"\n",(0,n.jsx)(t.h2,{id:"exceptions",children:"Exceptions"}),"\n",(0,n.jsx)(t.p,{children:"If:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"there's an SSL error (e.g. in case of self-signed certificates). - target URL is invalid. - the timeout is exceeded during navigation. - the remote server does not respond or is unreachable. - the main resource failed to load."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:['This method will not throw an error when any valid HTTP status code is returned by the remote server, including 404 "Not Found" and 500 "Internal Server Error". The status code for such responses can be retrieved by calling ',(0,n.jsx)(t.a,{href:"/api/puppeteer.httpresponse.status",children:"HTTPResponse.status()"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(t.p,{children:["Navigation to ",(0,n.jsx)(t.code,{children:"about:blank"})," or navigation to the same URL with a different hash will succeed and return ",(0,n.jsx)(t.code,{children:"null"}),"."]}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsxs)(t.p,{children:["Headless mode doesn't support navigation to a PDF document. See the ",(0,n.jsx)(t.a,{href:"https://bugs.chromium.org/p/chromium/issues/detail?id=761295",children:"upstream issue"}),"."]})}),"\n",(0,n.jsxs)(t.p,{children:["Shortcut for ",(0,n.jsx)(t.a,{href:"/api/puppeteer.frame.goto",children:"page.mainFrame().goto(url, options)"}),"."]})]})}function c(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},75251:(e,t,r)=>{var n=r(67294),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,r){var n,o={},d=null,p=null;for(n in void 0!==r&&(d=""+r),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(p=t.ref),t)i.call(t,n)&&!l.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:s,type:e,key:d,ref:p,props:o,_owner:a.current}}t.Fragment=o,t.jsx=d,t.jsxs=d},85893:(e,t,r)=>{e.exports=r(75251)},11151:(e,t,r)=>{r.d(t,{Z:()=>a,a:()=>i});var n=r(67294);const s={},o=n.createContext(s);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);