"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[26568],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(67294);function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){p(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,p=function(e,t){if(null==e)return{};var a,n,p={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(p[a]=e[a]);return p}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(p[a]=e[a])}return p}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,p=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(a),d=p,h=c["".concat(l,".").concat(d)]||c[d]||m[d]||r;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function d(e,t){var a=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var r=a.length,o=new Array(r);o[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:p,o[1]=i;for(var s=2;s<r;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},87989:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var n=a(87462),p=(a(67294),a(3905));const r={sidebar_position:1},o="Puppeteer",i={unversionedId:"index",id:"index",title:"Puppeteer",description:"Build status npm puppeteer package",source:"@site/../docs/index.md",sourceDirName:".",slug:"/",permalink:"/puppeteer/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",next:{title:"FAQ",permalink:"/puppeteer/faq"}},l={},s=[{value:"API | FAQ | Contributing | Troubleshooting",id:"api--faq--contributing--troubleshooting",level:6},{value:"What can I do?",id:"what-can-i-do",level:6},{value:"Getting Started",id:"getting-started",level:2},{value:"Installation",id:"installation",level:3},{value:"puppeteer-core",id:"puppeteer-core",level:3},{value:"Usage",id:"usage",level:3},{value:"Default runtime settings",id:"default-runtime-settings",level:2},{value:"Resources",id:"resources",level:2},{value:"Debugging tips",id:"debugging-tips",level:2},{value:"Contributing",id:"contributing",level:2},{value:"FAQ",id:"faq",level:2}],u={toc:s};function m(e){let{components:t,...a}=e;return(0,p.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"puppeteer"},"Puppeteer"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer/actions?query=workflow%3ACI"},(0,p.kt)("img",{parentName:"a",src:"https://github.com/puppeteer/puppeteer/workflows/CI/badge.svg",alt:"Build status"}))," ",(0,p.kt)("a",{parentName:"p",href:"https://npmjs.org/package/puppeteer"},(0,p.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/puppeteer.svg",alt:"npm puppeteer package"}))),(0,p.kt)("img",{src:"https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png",height:"200",align:"right"}),(0,p.kt)("h6",{id:"api--faq--contributing--troubleshooting"},(0,p.kt)("a",{parentName:"h6",href:"https://github.com/puppeteer/puppeteer/blob/main/docs/api.md"},"API")," | ",(0,p.kt)("a",{parentName:"h6",href:"#faq"},"FAQ")," | ",(0,p.kt)("a",{parentName:"h6",href:"https://github.com/puppeteer/puppeteer/blob/main/CONTRIBUTING.md"},"Contributing")," | ",(0,p.kt)("a",{parentName:"h6",href:"https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md"},"Troubleshooting")),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"Puppeteer is a Node library which provides a high-level API to control Chrome or Chromium over the ",(0,p.kt)("a",{parentName:"p",href:"https://chromedevtools.github.io/devtools-protocol/"},"DevTools Protocol"),". Puppeteer runs ",(0,p.kt)("a",{parentName:"p",href:"https://developers.google.com/web/updates/2017/04/headless-chrome"},"headless")," by default, but can be configured to run full (non-headless) Chrome or Chromium.")),(0,p.kt)("h6",{id:"what-can-i-do"},"What can I do?"),(0,p.kt)("p",null,"Most things that you can do manually in the browser can be done using Puppeteer! Here are a few examples to get you started:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Generate screenshots and PDFs of pages."),(0,p.kt)("li",{parentName:"ul"},'Crawl a SPA (Single-Page Application) and generate pre-rendered content (i.e. "SSR" (Server-Side Rendering)).'),(0,p.kt)("li",{parentName:"ul"},"Automate form submission, UI testing, keyboard input, etc."),(0,p.kt)("li",{parentName:"ul"},"Create an up-to-date, automated testing environment. Run your tests directly in the latest version of Chrome using the latest JavaScript and browser features."),(0,p.kt)("li",{parentName:"ul"},"Capture a ",(0,p.kt)("a",{parentName:"li",href:"https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/reference"},"timeline trace")," of your site to help diagnose performance issues."),(0,p.kt)("li",{parentName:"ul"},"Test Chrome Extensions.")),(0,p.kt)("h2",{id:"getting-started"},"Getting Started"),(0,p.kt)("h3",{id:"installation"},"Installation"),(0,p.kt)("p",null,"To use Puppeteer in your project, run:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},'npm i puppeteer\n# or "yarn add puppeteer"\n')),(0,p.kt)("p",null,"Note: When you install Puppeteer, it downloads a recent version of Chromium (~170MB Mac, ~282MB Linux, ~280MB Win) that is guaranteed to work with the API. To skip the download, download into another path, or download a different browser, see ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer/blob/main/docs/api.md#environment-variables"},"Environment variables"),"."),(0,p.kt)("h3",{id:"puppeteer-core"},"puppeteer-core"),(0,p.kt)("p",null,"Since version 1.7.0 we publish the ",(0,p.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/puppeteer-core"},(0,p.kt)("inlineCode",{parentName:"a"},"puppeteer-core"))," package,\na version of Puppeteer that doesn't download any browser by default."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},'npm i puppeteer-core\n# or "yarn add puppeteer-core"\n')),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"puppeteer-core")," is intended to be a lightweight version of Puppeteer for launching an existing browser installation or for connecting to a remote one. Be sure that the version of puppeteer-core you install is compatible with the browser you intend to connect to."),(0,p.kt)("p",null,"See ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer/blob/main/docs/api.md#puppeteer-vs-puppeteer-core"},"puppeteer vs puppeteer-core"),"."),(0,p.kt)("h3",{id:"usage"},"Usage"),(0,p.kt)("p",null,"Puppeteer follows the latest ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/nodejs/Release#release-schedule"},"maintenance LTS")," version of Node."),(0,p.kt)("p",null,"Note: Prior to v1.18.1, Puppeteer required at least Node v6.4.0. Versions from v1.18.1 to v2.1.0 rely on\nNode 8.9.0+. Starting from v3.0.0 Puppeteer starts to rely on Node 10.18.1+. All examples below use async/await which is only supported in Node v7.6.0 or greater."),(0,p.kt)("p",null,"Puppeteer will be familiar to people using other browser testing frameworks. You create an instance\nof ",(0,p.kt)("inlineCode",{parentName:"p"},"Browser"),", open pages, and then manipulate them with ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer/blob/main/docs/api.md#"},"Puppeteer's API"),"."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Example")," - navigating to ",(0,p.kt)("a",{parentName:"p",href:"https://example.com"},"https://example.com")," and saving a screenshot as ",(0,p.kt)("em",{parentName:"p"},"example.png"),":"),(0,p.kt)("p",null,"Save file as ",(0,p.kt)("strong",{parentName:"p"},"example.js")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"const puppeteer = require('puppeteer');\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  await page.goto('https://example.com');\n  await page.screenshot({path: 'example.png'});\n\n  await browser.close();\n})();\n")),(0,p.kt)("p",null,"Execute script on the command line"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"node example.js\n")),(0,p.kt)("p",null,"Puppeteer sets an initial page size to 800\xd7600px, which defines the screenshot size. The page size can be customized with ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer/blob/main/docs/api.md#pagesetviewportviewport"},(0,p.kt)("inlineCode",{parentName:"a"},"Page.setViewport()")),"."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Example")," - create a PDF."),(0,p.kt)("p",null,"Save file as ",(0,p.kt)("strong",{parentName:"p"},"hn.js")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"const puppeteer = require('puppeteer');\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  await page.goto('https://news.ycombinator.com', {\n    waitUntil: 'networkidle2',\n  });\n  await page.pdf({path: 'hn.pdf', format: 'a4'});\n\n  await browser.close();\n})();\n")),(0,p.kt)("p",null,"Execute script on the command line"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"node hn.js\n")),(0,p.kt)("p",null,"See ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer/blob/main/docs/api.md#pagepdfoptions"},(0,p.kt)("inlineCode",{parentName:"a"},"Page.pdf()"))," for more information about creating pdfs."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Example")," - evaluate script in the context of the page"),(0,p.kt)("p",null,"Save file as ",(0,p.kt)("strong",{parentName:"p"},"get-dimensions.js")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"const puppeteer = require('puppeteer');\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  await page.goto('https://example.com');\n\n  // Get the \"viewport\" of the page, as reported by the page.\n  const dimensions = await page.evaluate(() => {\n    return {\n      width: document.documentElement.clientWidth,\n      height: document.documentElement.clientHeight,\n      deviceScaleFactor: window.devicePixelRatio,\n    };\n  });\n\n  console.log('Dimensions:', dimensions);\n\n  await browser.close();\n})();\n")),(0,p.kt)("p",null,"Execute script on the command line"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"node get-dimensions.js\n")),(0,p.kt)("p",null,"See ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer/blob/main/docs/api.md#pageevaluatepagefunction-args"},(0,p.kt)("inlineCode",{parentName:"a"},"Page.evaluate()"))," for more information on ",(0,p.kt)("inlineCode",{parentName:"p"},"evaluate")," and related methods like ",(0,p.kt)("inlineCode",{parentName:"p"},"evaluateOnNewDocument")," and ",(0,p.kt)("inlineCode",{parentName:"p"},"exposeFunction"),"."),(0,p.kt)("h2",{id:"default-runtime-settings"},"Default runtime settings"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"1. Uses Headless mode")),(0,p.kt)("p",null,"Puppeteer launches Chromium in ",(0,p.kt)("a",{parentName:"p",href:"https://developers.google.com/web/updates/2017/04/headless-chrome"},"headless mode"),". To launch a full version of Chromium, set the ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer/blob/main/docs/api.md#puppeteerlaunchoptions"},(0,p.kt)("inlineCode",{parentName:"a"},"headless")," option")," when launching a browser:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"const browser = await puppeteer.launch({headless: false}); // default is true\n")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"2. Runs a bundled version of Chromium")),(0,p.kt)("p",null,"By default, Puppeteer downloads and uses a specific version of Chromium so its API\nis guaranteed to work out of the box. To use Puppeteer with a different version of Chrome or Chromium,\npass in the executable's path when creating a ",(0,p.kt)("inlineCode",{parentName:"p"},"Browser")," instance:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"const browser = await puppeteer.launch({executablePath: '/path/to/Chrome'});\n")),(0,p.kt)("p",null,"You can also use Puppeteer with Firefox Nightly (experimental support). See ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer/blob/main/docs/api.md#puppeteerlaunchoptions"},(0,p.kt)("inlineCode",{parentName:"a"},"Puppeteer.launch()"))," for more information."),(0,p.kt)("p",null,"See ",(0,p.kt)("a",{parentName:"p",href:"https://www.howtogeek.com/202825/what%E2%80%99s-the-difference-between-chromium-and-chrome/"},(0,p.kt)("inlineCode",{parentName:"a"},"this article"))," for a description of the differences between Chromium and Chrome. ",(0,p.kt)("a",{parentName:"p",href:"https://chromium.googlesource.com/chromium/src/+/refs/heads/main/docs/chromium_browser_vs_google_chrome.md"},(0,p.kt)("inlineCode",{parentName:"a"},"This article"))," describes some differences for Linux users."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"3. Creates a fresh user profile")),(0,p.kt)("p",null,"Puppeteer creates its own browser user profile which it ",(0,p.kt)("strong",{parentName:"p"},"cleans up on every run"),"."),(0,p.kt)("h2",{id:"resources"},"Resources"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/puppeteer/puppeteer/blob/main/docs/api.md"},"API Documentation")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/puppeteer/puppeteer/tree/main/examples/"},"Examples")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/transitive-bullshit/awesome-puppeteer"},"Community list of Puppeteer resources"))),(0,p.kt)("h2",{id:"debugging-tips"},"Debugging tips"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Turn off headless mode - sometimes it's useful to see what the browser is\ndisplaying. Instead of launching in headless mode, launch a full version of\nthe browser using ",(0,p.kt)("inlineCode",{parentName:"p"},"headless: false"),":"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-js"},"const browser = await puppeteer.launch({headless: false});\n"))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Slow it down - the ",(0,p.kt)("inlineCode",{parentName:"p"},"slowMo")," option slows down Puppeteer operations by the\nspecified amount of milliseconds. It's another way to help see what's going on."),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-js"},"const browser = await puppeteer.launch({\n  headless: false,\n  slowMo: 250, // slow down by 250ms\n});\n"))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Capture console output - You can listen for the ",(0,p.kt)("inlineCode",{parentName:"p"},"console")," event.\nThis is also handy when debugging code in ",(0,p.kt)("inlineCode",{parentName:"p"},"page.evaluate()"),":"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-js"},"page.on('console', msg => console.log('PAGE LOG:', msg.text()));\n\nawait page.evaluate(() => console.log(`url is ${location.href}`));\n"))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Use debugger in application code browser"),(0,p.kt)("p",{parentName:"li"},"There are two execution context: node.js that is running test code, and the browser\nrunning application code being tested. This lets you debug code in the\napplication code browser; ie code inside ",(0,p.kt)("inlineCode",{parentName:"p"},"evaluate()"),"."),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Use ",(0,p.kt)("inlineCode",{parentName:"p"},"{devtools: true}")," when launching Puppeteer:"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-js"},"const browser = await puppeteer.launch({devtools: true});\n"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Change default test timeout:"),(0,p.kt)("p",{parentName:"li"},"jest: ",(0,p.kt)("inlineCode",{parentName:"p"},"jest.setTimeout(100000);")),(0,p.kt)("p",{parentName:"li"},"jasmine: ",(0,p.kt)("inlineCode",{parentName:"p"},"jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;")),(0,p.kt)("p",{parentName:"li"},"mocha: ",(0,p.kt)("inlineCode",{parentName:"p"},"this.timeout(100000);")," (don't forget to change test to use ",(0,p.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/23492442"},"function and not '=>'"),")")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Add an evaluate statement with ",(0,p.kt)("inlineCode",{parentName:"p"},"debugger")," inside / add ",(0,p.kt)("inlineCode",{parentName:"p"},"debugger")," to an existing evaluate statement:"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-js"},"await page.evaluate(() => {\n  debugger;\n});\n")),(0,p.kt)("p",{parentName:"li"},"The test will now stop executing in the above evaluate statement, and chromium will stop in debug mode.")))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Use debugger in node.js"),(0,p.kt)("p",{parentName:"li"},"This will let you debug test code. For example, you can step over ",(0,p.kt)("inlineCode",{parentName:"p"},"await page.click()")," in the node.js script and see the click happen in the application code browser."),(0,p.kt)("p",{parentName:"li"},"Note that you won't be able to run ",(0,p.kt)("inlineCode",{parentName:"p"},"await page.click()")," in\nDevTools console due to this ",(0,p.kt)("a",{parentName:"p",href:"https://bugs.chromium.org/p/chromium/issues/detail?id=833928"},"Chromium bug"),". So if\nyou want to try something out, you have to add it to your test file."),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Add ",(0,p.kt)("inlineCode",{parentName:"p"},"debugger;")," to your test, eg:"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-js"},"debugger;\nawait page.click('a[target=_blank]');\n"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Set ",(0,p.kt)("inlineCode",{parentName:"p"},"headless")," to ",(0,p.kt)("inlineCode",{parentName:"p"},"false"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Run ",(0,p.kt)("inlineCode",{parentName:"p"},"node --inspect-brk"),", eg ",(0,p.kt)("inlineCode",{parentName:"p"},"node --inspect-brk node_modules/.bin/jest tests"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"In Chrome open ",(0,p.kt)("inlineCode",{parentName:"p"},"chrome://inspect/#devices")," and click ",(0,p.kt)("inlineCode",{parentName:"p"},"inspect"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"In the newly opened test browser, type ",(0,p.kt)("inlineCode",{parentName:"p"},"F8")," to resume test execution")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Now your ",(0,p.kt)("inlineCode",{parentName:"p"},"debugger")," will be hit and you can debug in the test browser")))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Enable verbose logging - internal DevTools protocol traffic\nwill be logged via the ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/visionmedia/debug"},(0,p.kt)("inlineCode",{parentName:"a"},"debug"))," module under the ",(0,p.kt)("inlineCode",{parentName:"p"},"puppeteer")," namespace."),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre"},' # Basic verbose logging\n env DEBUG="puppeteer:*" node script.js\n\n # Protocol traffic can be rather noisy. This example filters out all Network domain messages\n env DEBUG="puppeteer:*" env DEBUG_COLORS=true node script.js 2>&1 | grep -v \'"Network\'\n'))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Debug your Puppeteer (node) code easily, using ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/GoogleChromeLabs/ndb"},"ndb")))),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"npm install -g ndb")," (or even better, use ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/zkat/npx"},"npx"),"!)")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"add a ",(0,p.kt)("inlineCode",{parentName:"p"},"debugger")," to your Puppeteer (node) code")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"add ",(0,p.kt)("inlineCode",{parentName:"p"},"ndb")," (or ",(0,p.kt)("inlineCode",{parentName:"p"},"npx ndb"),") before your test command. For example:"),(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"ndb jest")," or ",(0,p.kt)("inlineCode",{parentName:"p"},"ndb mocha")," (or ",(0,p.kt)("inlineCode",{parentName:"p"},"npx ndb jest")," / ",(0,p.kt)("inlineCode",{parentName:"p"},"npx ndb mocha"),")")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"debug your test inside chromium like a boss!"))),(0,p.kt)("h2",{id:"contributing"},"Contributing"),(0,p.kt)("p",null,"Check out our ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer/blob/main/CONTRIBUTING.md"},"contributing guide")," to get an overview of Puppeteer development."),(0,p.kt)("h2",{id:"faq"},"FAQ"),(0,p.kt)("p",null,"Our ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer/blob/main/CONTRIBUTING.md"},"FAQ")," has migrated to ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer/blob/main/troubleshooting.md"},"our site"),"."))}m.isMDXComponent=!0}}]);