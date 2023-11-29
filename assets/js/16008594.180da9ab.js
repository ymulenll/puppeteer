/*! For license information please see 16008594.180da9ab.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[93510],{75621:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>i});var o=t(85893),s=t(11151);const r={},l="Query Selectors",a={id:"guides/query-selectors",title:"Query Selectors",description:"Queries are the primary mechanism for interacting with the DOM on your site. For example, a typical workflow goes like:",source:"@site/versioned_docs/version-21.5.2/guides/query-selectors.mdx",sourceDirName:"guides",slug:"/guides/query-selectors",permalink:"/guides/query-selectors",draft:!1,unlisted:!1,tags:[],version:"21.5.2",frontMatter:{},sidebar:"docs",previous:{title:"Configuration",permalink:"/guides/configuration"},next:{title:"Locators",permalink:"/guides/locators"}},c={},i=[{value:"<code>P</code> Selectors",id:"p-selectors",level:2},{value:"<code>&gt;&gt;&gt;</code> and <code>&gt;&gt;&gt;&gt;</code> combinators",id:"-and--combinators",level:3},{value:"Example",id:"example",level:4},{value:"<code>P</code>-elements",id:"p-elements",level:3},{value:"Text selectors (<code>-p-text</code>)",id:"text-selectors--p-text",level:4},{value:"Example",id:"example-1",level:5},{value:"XPath selectors (<code>-p-xpath</code>)",id:"xpath-selectors--p-xpath",level:4},{value:"Example",id:"example-2",level:5},{value:"ARIA selectors (<code>-p-aria</code>)",id:"aria-selectors--p-aria",level:4},{value:"Example",id:"example-3",level:5},{value:"Custom selectors",id:"custom-selectors",level:3},{value:"Custom Selectors",id:"custom-selectors-1",level:4},{value:"Custom framework components selector",id:"custom-framework-components-selector",level:4},{value:"Web Components",id:"web-components",level:4}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"query-selectors",children:"Query Selectors"}),"\n",(0,o.jsx)(n.p,{children:"Queries are the primary mechanism for interacting with the DOM on your site. For example, a typical workflow goes like:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"// Import puppeteer\nimport puppeteer from 'puppeteer';\n\n(async () => {\n  // Launch the browser\n  const browser = await puppeteer.launch();\n\n  // Create a page\n  const page = await browser.newPage();\n\n  // Go to your site\n  await page.goto('YOUR_SITE');\n\n  // Query for an element handle.\n  const element = await page.waitForSelector('div > .class-name');\n\n  // Do something with element...\n  await element.click(); // Just an example.\n\n  // Dispose of handle\n  await element.dispose();\n\n  // Close browser.\n  await browser.close();\n})();\n"})}),"\n",(0,o.jsxs)(n.h2,{id:"p-selectors",children:[(0,o.jsx)(n.code,{children:"P"})," Selectors"]}),"\n",(0,o.jsxs)(n.p,{children:["Puppeteer uses a superset of the CSS selector syntax for querying. We call this syntax ",(0,o.jsx)(n.em,{children:"P selectors"})," and it's supercharged with extra capabilities such as deep combinators and text selection."]}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsx)(n.p,{children:"Although P selectors look like real CSS selectors (we intentionally designed it this way), they should not be used for actually CSS styling. They are designed only for Puppeteer."})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:['P selectors only work on the first "depth" of selectors; for example, ',(0,o.jsx)(n.code,{children:":is(div >>> a)"})," will not work."]})}),"\n",(0,o.jsxs)(n.h3,{id:"-and--combinators",children:[(0,o.jsx)(n.code,{children:">>>"})," and ",(0,o.jsx)(n.code,{children:">>>>"})," combinators"]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:">>>"})," and ",(0,o.jsx)(n.code,{children:">>>>"})," are called ",(0,o.jsx)(n.em,{children:"deep descendent"})," and ",(0,o.jsx)(n.em,{children:"deep"})," combinators respectively. Both combinators have the effect of going into shadow hosts with ",(0,o.jsx)(n.code,{children:">>>"})," going into every shadow host under a node and ",(0,o.jsx)(n.code,{children:">>>>"})," going into the immediate one (if the node is a shadow host; otherwise, it's a no-op)."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["A common question is when should ",(0,o.jsx)(n.code,{children:">>>>"})," be chosen over ",(0,o.jsx)(n.code,{children:">>>"})," considering the flexibility of ",(0,o.jsx)(n.code,{children:">>>"}),". A similar question can be asked about ",(0,o.jsx)(n.code,{children:">"})," and a space; choose ",(0,o.jsx)(n.code,{children:">"})," if you do not need to query all elements under a given node and a space otherwise. This answer extends to ",(0,o.jsx)(n.code,{children:">>>>"})," (",(0,o.jsx)(n.code,{children:">"}),") and ",(0,o.jsx)(n.code,{children:">>>"})," (space) naturally."]})}),"\n",(0,o.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,o.jsx)(n.p,{children:"Suppose we have the markup"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'<custom-element>\n  <template shadowrootmode="open">\n    <slot></slot>\n  </template>\n  <custom-element>\n    <template shadowrootmode="open">\n      <slot></slot>\n    </template>\n    <custom-element>\n      <template shadowrootmode="open">\n        <slot></slot>\n      </template>\n      <h2>Light content</h2>\n    </custom-element>\n  </custom-element>\n</custom-element>\n'})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["Note: ",(0,o.jsx)(n.code,{children:'<template shadowrootmode="open">'})," is not supported on Firefox.\nYou can read more about it ",(0,o.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template#attributes",children:"here"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Then ",(0,o.jsx)(n.code,{children:"custom-element >>> h2"})," will return ",(0,o.jsx)(n.code,{children:"h2"}),", but ",(0,o.jsx)(n.code,{children:"custom-element >>>> h2"})," will return nothing since the inner ",(0,o.jsx)(n.code,{children:"h2"})," is in a deeper shadow root."]}),"\n",(0,o.jsxs)(n.h3,{id:"p-elements",children:[(0,o.jsx)(n.code,{children:"P"}),"-elements"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"P"})," elements are ",(0,o.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements",children:"pseudo-elements"})," with a ",(0,o.jsx)(n.code,{children:"-p"})," vendor prefix. It allows you to enhance your selectors with Puppeteer-specific query engines such as XPath, text queries, and ARIA."]}),"\n",(0,o.jsxs)(n.h4,{id:"text-selectors--p-text",children:["Text selectors (",(0,o.jsx)(n.code,{children:"-p-text"}),")"]}),"\n",(0,o.jsx)(n.p,{children:'Text selectors will select "minimal" elements containing the given text, even within (open) shadow roots. Here, "minimum" means the deepest elements that contain a given text, but not their parents (which technically will also contain the given text).'}),"\n",(0,o.jsx)(n.h5,{id:"example-1",children:"Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"const element = await page.waitForSelector('div ::-p-text(My name is Jun)');\n// You can also use escapes.\nconst element = await page.waitForSelector(\n  ':scope >>> ::-p-text(My name is Jun \\\\(pronounced like \"June\"\\\\))'\n);\n// or quotes\nconst element = await page.waitForSelector(\n  'div >>>> ::-p-text(\"My name is Jun (pronounced like \\\\\"June\\\\\")\"):hover'\n);\n"})}),"\n",(0,o.jsxs)(n.h4,{id:"xpath-selectors--p-xpath",children:["XPath selectors (",(0,o.jsx)(n.code,{children:"-p-xpath"}),")"]}),"\n",(0,o.jsxs)(n.p,{children:["XPath selectors will use the browser's native ",(0,o.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Document/evaluate",children:(0,o.jsx)(n.code,{children:"Document.evaluate"})})," to query for elements."]}),"\n",(0,o.jsx)(n.h5,{id:"example-2",children:"Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"const element = await page.waitForSelector('::-p-xpath(h2)');\n"})}),"\n",(0,o.jsxs)(n.h4,{id:"aria-selectors--p-aria",children:["ARIA selectors (",(0,o.jsx)(n.code,{children:"-p-aria"}),")"]}),"\n",(0,o.jsx)(n.p,{children:"ARIA selectors can be used to find elements with a given ARIA label. These labels are computed using Chrome's internal representation."}),"\n",(0,o.jsx)(n.h5,{id:"example-3",children:"Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"const node = await page.waitForSelector('::-p-aria(Submit)');\nconst node = await page.waitForSelector(\n  '::-p-aria([name=\"Click me\"][role=\"button\"])'\n);\n"})}),"\n",(0,o.jsx)(n.h3,{id:"custom-selectors",children:"Custom selectors"}),"\n",(0,o.jsxs)(n.p,{children:["Puppeteer provides users the ability to add their own query selectors to Puppeteer using ",(0,o.jsx)(n.a,{href:"/api/puppeteer.registercustomqueryhandler",children:"Puppeteer.registerCustomQueryHandler"}),". This is useful for creating custom selectors based on framework objects or other vendor-specific objects."]}),"\n",(0,o.jsx)(n.h4,{id:"custom-selectors-1",children:"Custom Selectors"}),"\n",(0,o.jsxs)(n.p,{children:["You can register a custom query handler that allows you to create custom selectors. For example, define a query handler for ",(0,o.jsx)(n.code,{children:"getById"})," selectors:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:'Puppeteer.registerCustomQueryHandler(\'getById\', {\n  queryOne: (elementOrDocument, selector) => {\n    return elementOrDocument.querySelector(`[id="${CSS.escape(selector)}"]`);\n  },\n  // Note: for demonstation perpose only `id` should be page unique\n  queryAll: (elementOrDocument, selector) => {\n    return elementOrDocument.querySelectorAll(`[id="${CSS.escape(selector)}"]`);\n  },\n});\n'})}),"\n",(0,o.jsx)(n.p,{children:"You can now use it as following:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"const node = await page.waitForSelector('::-p-getById(elementId)');\n// OR used in conjunction with other selectors\nconst moreSpecificNode = await page.waitForSelector(\n  '.side-bar ::-p-getById(elementId)'\n);\n"})}),"\n",(0,o.jsx)(n.h4,{id:"custom-framework-components-selector",children:"Custom framework components selector"}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsx)(n.p,{children:"Be careful when relying on internal APIs of libraries or frameworks. They can change at any time."})}),"\n",(0,o.jsx)(n.p,{children:"Find Vue components by name by using Vue internals for querying:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"Puppeteer.registerCustomQueryHandler('vue', {\n  queryOne: (element, name) => {\n    const walker = document.createTreeWalker(element, NodeFilter.SHOW_ELEMENT);\n    do {\n      const currentNode = walker.currentNode;\n      if (\n        currentNode.__vnode?.ctx?.type?.name.toLowerCase() ===\n        name.toLocaleLowerCase()\n      ) {\n        return currentNode;\n      }\n    } while (walker.nextNode());\n\n    return null;\n  },\n});\n"})}),"\n",(0,o.jsx)(n.p,{children:"Query the Vue component as following:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"const element = await page.$('::-p-vue(MyComponent)');\n"})}),"\n",(0,o.jsx)(n.h4,{id:"web-components",children:"Web Components"}),"\n",(0,o.jsx)(n.p,{children:"Web Components create their own tag so you can query them by the tag name:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"const element = await page.$('my-web-component');\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Extend ",(0,o.jsx)(n.code,{children:"HTMLElementTagNameMap"})," to define types for custom tags. This allows Puppeteer to infer the return type for the ElementHandle:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"declare global {\n  interface HTMLElementTagNameMap {\n    'my-web-component': MyWebComponent;\n  }\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},75251:(e,n,t)=>{var o=t(67294),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,n,t){var o,r={},i=null,d=null;for(o in void 0!==t&&(i=""+t),void 0!==n.key&&(i=""+n.key),void 0!==n.ref&&(d=n.ref),n)l.call(n,o)&&!c.hasOwnProperty(o)&&(r[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===r[o]&&(r[o]=n[o]);return{$$typeof:s,type:e,key:i,ref:d,props:r,_owner:a.current}}n.Fragment=r,n.jsx=i,n.jsxs=i},85893:(e,n,t)=>{e.exports=t(75251)},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>l});var o=t(67294);const s={},r=o.createContext(s);function l(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);