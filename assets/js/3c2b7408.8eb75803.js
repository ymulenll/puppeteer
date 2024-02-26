/*! For license information please see 3c2b7408.8eb75803.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[50479],{21189:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var r=n(85893),i=n(11151);const s={sidebar_label:"EventEmitter.once"},o="EventEmitter.once() method",l={id:"api/puppeteer.eventemitter.once",title:"EventEmitter.once() method",description:"Like on but the listener will only be fired once and then it will be removed.",source:"@site/versioned_docs/version-22.3.0/api/puppeteer.eventemitter.once.md",sourceDirName:"api",slug:"/api/puppeteer.eventemitter.once",permalink:"/api/puppeteer.eventemitter.once",draft:!1,unlisted:!1,tags:[],version:"22.3.0",frontMatter:{sidebar_label:"EventEmitter.once"},sidebar:"api",previous:{title:"EventEmitter.on",permalink:"/api/puppeteer.eventemitter.on"},next:{title:"EventEmitter.removeAllListeners",permalink:"/api/puppeteer.eventemitter.removealllisteners"}},d={},a=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"eventemitteronce-method",children:"EventEmitter.once() method"}),"\n",(0,r.jsxs)(t.p,{children:["Like ",(0,r.jsx)(t.code,{children:"on"})," but the listener will only be fired once and then it will be removed."]}),"\n",(0,r.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"class EventEmitter {\n  once<Key extends keyof EventsWithWildcard<Events>>(\n    type: Key,\n    handler: Handler<EventsWithWildcard<Events>[Key]>\n  ): this;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"type"}),(0,r.jsx)(t.td,{children:"Key"}),(0,r.jsx)(t.td,{children:"the event you'd like to listen to"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"handler"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.a,{href:"/api/puppeteer.handler",children:"Handler"}),"<",(0,r.jsx)(t.a,{href:"/api/puppeteer.eventswithwildcard",children:"EventsWithWildcard"}),"<Events>[Key]>"]}),(0,r.jsx)(t.td,{children:"the handler function to run when the event occurs"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,r.jsx)(t.p,{children:"this"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"this"})," to enable you to chain method calls."]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},75251:(e,t,n)=>{var r=n(67294),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,n){var r,s={},a=null,c=null;for(r in void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(c=t.ref),t)o.call(t,r)&&!d.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:i,type:e,key:a,ref:c,props:s,_owner:l.current}}t.Fragment=s,t.jsx=a,t.jsxs=a},85893:(e,t,n)=>{e.exports=n(75251)},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>o});var r=n(67294);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);