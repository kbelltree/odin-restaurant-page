(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>y});var o=t(81),a=t.n(o),r=t(645),i=t.n(r),c=t(667),s=t.n(c),d=new URL(t(868),t.b),l=new URL(t(916),t.b),p=new URL(t(368),t.b),u=new URL(t(389),t.b),h=new URL(t(546),t.b),m=i()(a()),f=s()(d),g=s()(l),b=s()(p),v=s()(u),w=s()(h);m.push([n.id,`* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font: inherit;\n}\n\n:root {\n    --dark-green: #3B4220;\n    --medium-green: #5F6643;\n    --light-green: #7F9B27;\n    --background-beige: #F6EDD9;    \n}\n\n/* open-sans-regular - latin */\n@font-face {\n    font-display: swap; \n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 400;\n    src: url(${f}) format('woff2'); \n  }\n\n/* open-sans-800 - latin */\n@font-face {\n    font-display: swap; \n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 800;\n    src: url(${g}) format('woff2'); \n}\n\n  /* open-sans-300 - latin */\n@font-face {\n    font-display: swap; \n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 300;\n    src: url(${b}) format('woff2'); \n  }\n  \nbody {\n    font-family: 'Open Sans', sans-serif;\n    font-weight: 300;\n    background-color: var(--background-beige, antiqueWhite);\n    min-height: 100vh; \n    min-height: 100dvh;\n}\n\nh1 {\n    color: white;   \n    font-weight: 800;\n    font-size: 3.75rem;\n}\n\nh2 {\n    color: var(--light-green, oliveDrab);\n    font-weight: 800;\n    font-size: 2.5rem; \n}\n\nh3 {\n    color: var(--medium-green, olive);\n    font-weight: 800;\n    font-size: 1.75rem;\n}\n\np {\n    font-size: 1.5rem;\n}\n\nbutton {\n    font-size: 1.5rem; \n    font-weight: 400;\n    background: none;\n    color: var(--dark-green, darkOliveGreen);\n    border: none;  \n}\n\nbutton:hover, \nbutton:active {\n    font-weight: 800;\n    cursor: pointer; \n}\n\nbutton:hover {   \n    color: var(--medium-green, olive);\n}\n\nbutton:active {\n    color: var(--light-green, oliveDrab); \n}\n\n.header {\n    position: sticky; \n    top: 0;\n    left: 0;\n    width: 100%; \n    height: 6rem;\n    padding: 1.25rem 2rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background: var(--background-beige, antiqueWhite);\n    z-index: 1000;\n}\n\n.credit, \n.credit a {\n    color: darkgoldenrod;\n    text-align: center; \n    font-size: 1rem; \n}\n\n/* Home Page */\n\n  /* Make the container fill the viewport  */\n.hero-section {\n    position: relative;\n    width: 100%; \n    height: calc(100vh - 6rem); /* deduct header height */\n    height: calc(100dvh - 6rem); /* deduct header height */\n    overflow: hidden;\n}\n\n/* Style the image to cover the container */\n.hero-image {\n    position: absolute;\n    top: 0;\n    left: 0;\n    object-fit: cover;  \n    object-position: center;  \n    width: 100%;\n    height: 100%;\n    z-index: -1; \n}\n\n.banner {\n    position: absolute; \n}\n\n.logo {\n    height: 7.5rem; \n    width: auto; \n}\n\n.slogan {\n    font-size: 3rem;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    display: inline-block;\n    padding: 1rem; \n    font-weight: 300;\n    text-align: center; \n} \n\n/* Blurry Slogan Background */\n.slogan::before {\n    content: '';\n    position: absolute;\n    inset: 0; \n    background: rgba(95, 102, 67, 0.50);\n    filter: blur(25px);\n    z-index: -1;\n}\n\n.button-wrapper {\n    display: flex; \n    gap: 2.5rem; \n    margin-right: 1rem; \n}\n\n.about-section {\n    padding: 2rem 5rem;\n    display: flex; \n    flex-direction: column;\n    gap: 2rem; \n}\n\n.intro-wrapper {\n    background-color: white;\n    border: double 3px var(--medium-green, oliveDrab);\n}\n\n.intro-content {\n    padding: 2rem 2rem;\n    text-indent: 2rem;\n    white-space: pre-wrap;\n    text-align: justify;\n    line-height: 1.5;\n    font-weight: 300;\n}\n\n.album-wrapper {\n    /* flex: 2;  */\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n}\n\n.image-holder img {\n    width: 100%;\n    height: 100%;\n    display: block; /* remove default whitespace below */\n    object-fit: cover; \n    object-position: center;\n}\n\n/* Menu and Contact Pages */\n\n.menu-heading, \n.contact-heading {\n    background-image: url(${v});\n    height: 18rem; \n    background-size: cover; \n    background-repeat: no-repeat; \n    background-position: center;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n}\n\n.menu-wrapper {\n    display: flex; \n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    gap: 2rem;\n    padding: 2rem;\n}\n\n.menu-wrapper h2 {\n    padding-top: 1rem;\n}\n\n.menu-item h3 {\n    padding-bottom: 0.5rem; \n}\n\n\n.contact-heading {\n    background-image: url(${w});\n}\n\n.contact-wrapper {\n   padding: 2.5rem 0;\n   display: flex; \n   flex-direction: column;\n   align-items: center; \n   gap: 1rem; \n}\n\n.contact-wrapper h2 {\n    color: var(--medium-green, olive);\n    font-size: 1.75rem;\n}\n\n.contact-wrapper p {\n    font-weight: 300;\n    word-wrap: break-word;\n}\n\n.map-holder img {\n    width: 80%;\n    height: auto;\n    display: block; /* remove default whitespace below */\n    object-fit: contain; \n    object-position: center;\n    margin: auto;\n}\n\n@media (max-width: 50rem) {\n    .header {\n       flex-direction: column;\n       justify-content: center;\n       height: 11rem; \n    }\n\n    .hero-section {\n        height: calc(100vh - 11rem);\n        height: calc(100dvh - 11rem);\n    }\n  \n    .button-wrapper {\n        margin: auto;\n    }\n\n    .album-wrapper {\n        grid-template-columns: repeat(2, 1fr);\n    }\n\n    .menu-heading, \n    .contact-heading {\n        height: 9rem; \n    }\n\n}\n\n\n\n`,""]);const y=m},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,a,r){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&i[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var r={},i=[],c=0;c<n.length;c++){var s=n[c],d=o.base?s[0]+o.base:s[0],l=r[d]||0,p="".concat(d," ").concat(l);r[d]=l+1;var u=t(p),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(h);else{var m=a(h,o);o.byIndex=c,e.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var r=o(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<r.length;i++){var c=t(r[i]);e[c].references--}for(var s=o(n,a),d=0;d<r.length;d++){var l=t(r[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}r=s}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,a&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},368:(n,e,t)=>{n.exports=t.p+"4e3b09cb828e85399ea4.woff2"},916:(n,e,t)=>{n.exports=t.p+"33c6485cbb8a07c48900.woff2"},868:(n,e,t)=>{n.exports=t.p+"2e11868c8988e285301c.woff2"},389:(n,e,t)=>{n.exports=t.p+"c66c4d162818c2a431fe.jpg"},546:(n,e,t)=>{n.exports=t.p+"558cad3b4a8a5f20e276.png"}},e={};function t(o){var a=e[o];if(void 0!==a)return a.exports;var r=e[o]={id:o,exports:{}};return n[o](r,r.exports,t),r.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var a=o.length-1;a>-1&&!n;)n=o[a--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{function n(n,e){const t=document.createElement("button");return t.textContent=n,t.setAttribute("id",e),t}function e(n,e,t=null){const o=document.createElement(n);return o.textContent=e,t&&o.setAttribute("class",t),o}function o(n,e,t,o,a=null){const r=document.createElement("img");return r.src=n,r.alt=e,r.width=t,r.height=o,a&&r.setAttribute("class",a),r}function a(n=null){const e=document.createElement("div");return n&&e.setAttribute("class",n),e}const r=t.p+"2a0e1d42c7bba3f1aab1.jpg",i=t.p+"7363d2379243a31cbd6f.png",c=t.p+"d9098428cc77c4340a63.jpg",s=t.p+"434af7e1cdc98513bd71.jpg",d=t.p+"bec1db8bf6512ec3de99.jpg",l=t.p+"b75d74b6bd6c264e450e.jpg",p={slogan:"Eating Well Feels Good!",intro:" Welcome to NiCoLi, inspired by the Japanese word for 'smile' (ニコリ[nɪˈkoʊli]). Our menu, created with organic vegetables, mushrooms, tofu, and pasture-raised eggs, reflects our commitment to serving meals that nourish both the body and soul. At NiCoLi, we believe in the joy of eating well and feeling good. \n     \n    Join us for a meal that delights your taste buds and leaves you smiling and satisfied!"},u={logo:{src:i,alt:"NiCoLi Restaurant Logo",width:"397",height:"204"},hero:{src:r,alt:"The interior of NiCoLi(Mock Restaurant)",width:"3840",height:"2160"},foods:[{src:l,alt:"vegetable filled Japanese curry and rice",width:"480",height:"480"},{src:d,alt:"tofu and cabbage based Japanese pancake",width:"480",height:"480"},{src:c,alt:"quartered avocado with skin skewed and roasted topped with soy sauce",width:"480",height:"480"},{src:s,alt:"vegetable filled miso and soy milk based Udon noodle hotpot noodle",width:"480",height:"480"}]};function h(e){const t=a("header"),r=o(u.logo.src,u.logo.alt,u.logo.width,u.logo.height,"logo"),i=a("button-wrapper"),c=n("HOME","home-btn"),s=n("MENU","menu-btn"),d=n("CONTACT","contact-btn");i.append(c,s,d),t.append(r,i),e.appendChild(t)}function m(n){n.append(function(){const n=a("hero-section"),t=o(u.hero.src,u.hero.alt,u.hero.width,u.hero.height,"hero-image"),r=e("h1",p.slogan,"slogan");return n.append(t,r),n}(),function(){const n=a("about-section"),t=a("intro-wrapper"),r=e("p",p.intro,"intro-content"),i=a("album-wrapper");var c,s;return c=u.foods,s=i,c.forEach((n=>{const e=a("image-holder"),t=o(n.src,n.alt,n.width,n.height);e.appendChild(t),s.appendChild(e)})),t.appendChild(r),n.append(t,i),n}())}const f=[{name:"Avocado Kushiyaki - 6",description:"4 pcs of quartered grilled avocado skewers"},{name:"Daikon Mochi - 7.5",description:"Daikon radish based chewy cake"},{name:"Tofu Gyoza - 8",description:"Tofu based vegetable dumplings"},{name:"Lotus Root Chips - 6",description:"Crispy fried lotus root slices"},{name:"Eggplant Steaks - 7.5",description:"Eggplant slices pan-fried with garlic butter and soy sauce"},{name:"Grilled Onigiri - 6",description:"2 pcs of sprouted rice balls dipped in our special sauce and grilled"},{name:"Kenchin Miso Soup - 5.5",description:"Miso soup filled with chunky vegetables and crispy tofu"}],g=[{name:"Tofu Okonomiyaki - 14",description:"Tofu based Japanese pancake topped with aonori seaweed, mayo, and sauce"},{name:"Vegetable Curry and Rice - 15",description:"Japanese style curry filled with seasonal vegetables over steamed sprouted rice topped with boiled egg"},{name:"Vegetable Nabeyaki Udon - 15",description:"Thick Udon noodles in miso based soup with seasonal vegetables and mushrooms"},{name:"Tofu Katsu and Fried Vegetables - 16",description:"Tofu cutlet with fried vegetables, side with steamed sprouted rice"},{name:"Potato croquet sandwich - 14",description:"Vegetable and mashed potato croquette in bran bread"},{name:"Shirataki Noodle Yakisoba - 15.5",description:"Fried shirataki noodle with vegetables, eggs, and mushrooms"}],b=[{name:"Tofu and Avocado Salad - 8",description:"Soft tofu, avocado, mixed greens drizzled over with sesame based dressing"},{name:"Sauteed Mushrooms Salad - 7",description:"Mixed greens with sauteed mushrooms"},{name:"Potato Salad - 7",description:"Mashed potato salad mixed with vegetables"}],v=[{name:"Barley Tea - 3",description:"Iced or Hot"},{name:"Ume Kombucha - 4",description:"Hot kelp tea with plum"},{name:"Black Bean Tea - 4",description:"Iced or Hot"},{name:"Matcha Tea - 3.5",description:"Iced or Hot"}];function w(n,t){n.forEach((n=>{const o=a("menu-item"),r=e("h3",n.name),i=e("p",n.description);o.append(r,i),t.appendChild(o)}))}const y={map:{src:t.p+"aa05d55ef200c352c773.jpg",alt:"Street map of the restaurant location",width:"1080",height:"863"}},k={phone:{heading:"Phone",info:"123-456-7890"},email:{heading:"Email",info:"hello@mockcafenicoli.com"},address:{heading:"Address",info:"123 Lorem St., Ipsum, ZZ 99999"},hours:{heading:"Hours",info:"Tue - Sun: 11am - 3pm / 5pm - 10pm"}};var x=t(379),C=t.n(x),S=t(795),T=t.n(S),j=t(569),M=t.n(j),E=t(565),z=t.n(E),L=t(216),A=t.n(L),N=t(589),O=t.n(N),U=t(426),R={};R.styleTagTransform=O(),R.setAttributes=z(),R.insert=M().bind(null,"head"),R.domAPI=T(),R.insertStyleElement=A(),C()(U.Z,R),U.Z&&U.Z.locals&&U.Z.locals;const I=document.querySelector("#content");h(I),I.addEventListener("click",(n=>{if("home-btn"!==n.target.id&&"logo"!==n.target.className&&"menu-btn"!==n.target.id&&"contact-btn"!==n.target.id||(function(){for(;I.firstChild;)I.removeChild(I.firstChild)}(),h(I)),"home-btn"===n.target.id||"logo"===n.target.className)m(I);else if("menu-btn"===n.target.id)!function(n){const t=a("menu-section");t.append(function(){const n=a("menu-heading"),t=e("h1","Menu");return n.appendChild(t),n}(),function(){const n=a("menu-wrapper"),t=e("h2","Snacks"),o=e("h2","Meals"),r=e("h2","Salads"),i=e("h2","Drinks");return n.appendChild(t),w(f,n),n.appendChild(o),w(g,n),n.appendChild(r),w(b,n),n.appendChild(i),w(v,n),n}()),n.appendChild(t)}(I);else{if("contact-btn"!==n.target.id)return;!function(n){const t=a("contact-section");t.append(function(){const n=a("contact-heading"),t=e("h1","Contact");return n.appendChild(t),n}(),function(n){const t=a("contact-wrapper");for(const o in n){const a=e("h2",n[o].heading),r=e("p",n[o].info);t.append(a,r)}return t}(k),function(){const n=a("map-holder"),e=o(y.map.src,y.map.alt,y.map.width,y.map.height,"map");return n.appendChild(e),n}()),n.appendChild(t)}(I)}})),m(I)})()})();