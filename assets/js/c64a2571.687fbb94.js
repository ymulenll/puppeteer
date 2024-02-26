/*! For license information please see c64a2571.687fbb94.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[16102],{7679:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var n=t(85893),s=t(11151);const o={},i="Docker",a={id:"guides/docker",title:"Docker",description:"Puppeteer offers a Docker image that includes Chrome for Testing along with the required",source:"@site/versioned_docs/version-22.3.0/guides/docker.md",sourceDirName:"guides",slug:"/guides/docker",permalink:"/guides/docker",draft:!1,unlisted:!1,tags:[],version:"22.3.0",frontMatter:{},sidebar:"docs",previous:{title:"Evaluate JavaScript",permalink:"/guides/evaluate-javascript"},next:{title:"Request Interception",permalink:"/guides/request-interception"}},c={},p=[{value:"Usage",id:"usage",level:2}];function d(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"docker",children:"Docker"}),"\n",(0,n.jsxs)(r.p,{children:["Puppeteer offers a Docker image that includes ",(0,n.jsx)(r.a,{href:"https://developer.chrome.com/blog/chrome-for-testing/",children:"Chrome for Testing"})," along with the required\ndependencies and a pre-installed Puppeteer version. The image is available via\nthe\n",(0,n.jsx)(r.a,{href:"https://github.com/puppeteer/puppeteer/pkgs/container/puppeteer",children:"GitHub Container Registry"}),".\nThe latest image is tagged as ",(0,n.jsx)(r.code,{children:"latest"})," and other tags match Puppeteer versions.\nFor example,"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"docker pull ghcr.io/puppeteer/puppeteer:latest # pulls the latest\ndocker pull ghcr.io/puppeteer/puppeteer:16.1.0 # pulls the image that contains Puppeteer v16.1.0\n"})}),"\n",(0,n.jsxs)(r.p,{children:["The image is meant for running the browser in sandbox mode and therefore,\nrunning the image requires the ",(0,n.jsx)(r.code,{children:"SYS_ADMIN"})," capability."]}),"\n",(0,n.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(r.p,{children:"To use the docker image directly, run:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:'docker run -i --init --cap-add=SYS_ADMIN --rm ghcr.io/puppeteer/puppeteer:latest node -e "$(cat path/to/script.js)"\n'})}),"\n",(0,n.jsxs)(r.p,{children:["where ",(0,n.jsx)(r.code,{children:"path/to/script.js"})," is the path relative to your working directory. Note\nthe image requires the ",(0,n.jsx)(r.code,{children:"SYS_ADMIN"})," capability since the browser runs in sandbox\nmode."]}),"\n",(0,n.jsxs)(r.p,{children:["If you need to build an image based on a different base image, you can use our\n",(0,n.jsx)(r.a,{href:"https://github.com/puppeteer/puppeteer/blob/main/docker/Dockerfile",children:(0,n.jsx)(r.code,{children:"Dockerfile"})}),"\nas the starting point."]})]})}function l(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},75251:(e,r,t)=>{var n=t(67294),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function p(e,r,t){var n,o={},p=null,d=null;for(n in void 0!==t&&(p=""+t),void 0!==r.key&&(p=""+r.key),void 0!==r.ref&&(d=r.ref),r)i.call(r,n)&&!c.hasOwnProperty(n)&&(o[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===o[n]&&(o[n]=r[n]);return{$$typeof:s,type:e,key:p,ref:d,props:o,_owner:a.current}}r.Fragment=o,r.jsx=p,r.jsxs=p},85893:(e,r,t)=>{e.exports=t(75251)},11151:(e,r,t)=>{t.d(r,{Z:()=>a,a:()=>i});var n=t(67294);const s={},o=n.createContext(s);function i(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);