/*! For license information please see add6e371.9474255b.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[17188],{69142:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var o=t(85893),r=t(11151);const s={sidebar_label:"Page.exposeFunction"},a="Page.exposeFunction() method",i={id:"api/puppeteer.page.exposefunction",title:"Page.exposeFunction() method",description:"The method adds a function called name on the page's window object. When called, the function executes puppeteerFunction in node.js and returns a Promise which resolves to the return value of puppeteerFunction.",source:"@site/versioned_docs/version-21.5.2/api/puppeteer.page.exposefunction.md",sourceDirName:"api",slug:"/api/puppeteer.page.exposefunction",permalink:"/api/puppeteer.page.exposefunction",draft:!1,unlisted:!1,tags:[],version:"21.5.2",frontMatter:{sidebar_label:"Page.exposeFunction"},sidebar:"api",previous:{title:"Page.evaluateOnNewDocument",permalink:"/api/puppeteer.page.evaluateonnewdocument"},next:{title:"Page.focus",permalink:"/api/puppeteer.page.focus"}},c={},p=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2}];function l(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"pageexposefunction-method",children:"Page.exposeFunction() method"}),"\n",(0,o.jsxs)(n.p,{children:["The method adds a function called ",(0,o.jsx)(n.code,{children:"name"})," on the page's ",(0,o.jsx)(n.code,{children:"window"})," object. When called, the function executes ",(0,o.jsx)(n.code,{children:"puppeteerFunction"})," in node.js and returns a ",(0,o.jsx)(n.code,{children:"Promise"})," which resolves to the return value of ",(0,o.jsx)(n.code,{children:"puppeteerFunction"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["If the puppeteerFunction returns a ",(0,o.jsx)(n.code,{children:"Promise"}),", it will be awaited."]}),"\n",(0,o.jsxs)(n.admonition,{type:"note",children:[(0,o.jsxs)(n.p,{children:["Functions installed via ",(0,o.jsx)(n.code,{children:"page.exposeFunction"})," survive navigations."]}),(0,o.jsxs)(n.admonition,{type:"note",children:[(0,o.jsx)(n.h4,{id:"signature",children:"Signature:"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"class Page {\n  abstract exposeFunction(\n    name: string,\n    pptrFunction:\n      | Function\n      | {\n          default: Function;\n        }\n  ): Promise<void>;\n}\n"})}),(0,o.jsx)(n.h2,{id:"parameters",children:"Parameters"}),(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Parameter"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"name"}),(0,o.jsx)(n.td,{children:"string"}),(0,o.jsx)(n.td,{children:"Name of the function on the window object"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"pptrFunction"}),(0,o.jsx)(n.td,{children:"Function | { default: Function; }"}),(0,o.jsx)(n.td,{children:"Callback function which will be called in Puppeteer's context."})]})]})]}),(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Returns:"})}),(0,o.jsx)(n.p,{children:"Promise<void>"}),(0,o.jsx)(n.h2,{id:"example-1",children:"Example 1"}),(0,o.jsxs)(n.p,{children:["An example of adding an ",(0,o.jsx)(n.code,{children:"md5"})," function into the page:"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import puppeteer from 'puppeteer';\nimport crypto from 'crypto';\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  page.on('console', msg => console.log(msg.text()));\n  await page.exposeFunction('md5', text =>\n    crypto.createHash('md5').update(text).digest('hex')\n  );\n  await page.evaluate(async () => {\n    // use window.md5 to compute hashes\n    const myString = 'PUPPETEER';\n    const myHash = await window.md5(myString);\n    console.log(`md5 of ${myString} is ${myHash}`);\n  });\n  await browser.close();\n})();\n"})}),(0,o.jsx)(n.h2,{id:"example-2",children:"Example 2"}),(0,o.jsxs)(n.p,{children:["An example of adding a ",(0,o.jsx)(n.code,{children:"window.readfile"})," function into the page:"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import puppeteer from 'puppeteer';\nimport fs from 'fs';\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  page.on('console', msg => console.log(msg.text()));\n  await page.exposeFunction('readfile', async filePath => {\n    return new Promise((resolve, reject) => {\n      fs.readFile(filePath, 'utf8', (err, text) => {\n        if (err) reject(err);\n        else resolve(text);\n      });\n    });\n  });\n  await page.evaluate(async () => {\n    // use window.readfile to read contents of a file\n    const content = await window.readfile('/etc/hosts');\n    console.log(content);\n  });\n  await browser.close();\n})();\n"})})]})]})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},75251:(e,n,t)=>{var o=t(67294),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function p(e,n,t){var o,s={},p=null,l=null;for(o in void 0!==t&&(p=""+t),void 0!==n.key&&(p=""+n.key),void 0!==n.ref&&(l=n.ref),n)a.call(n,o)&&!c.hasOwnProperty(o)&&(s[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===s[o]&&(s[o]=n[o]);return{$$typeof:r,type:e,key:p,ref:l,props:s,_owner:i.current}}n.Fragment=s,n.jsx=p,n.jsxs=p},85893:(e,n,t)=>{e.exports=t(75251)},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>a});var o=t(67294);const r={},s=o.createContext(r);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);