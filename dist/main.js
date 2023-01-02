(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(81),o=t.n(r),a=t(645),c=t.n(a)()(o());c.push([e.id,":root {\n    --purple: #8351A3;\n    --green: #86D4D5;\n    --white: #fff;\n}\n\n/* general style */\n\nbody {\n    background-color: var(--white);\n    font-family: Verdana, Geneva, sans-serif;\n    min-height: 100vh;\n}\n\nh1,\nh2,\nh3 {\n    color: var(--green);\n    letter-spacing: -1px;\n    margin-bottom: 16px;\n}\n\nh1 {\n    font-size: 70px;\n}\n\nh2 {\n    font-size: 60px;\n}\n\nh3 {\n    font-size: 40px;\n}\n\np {\n    color: var(--white);\n}\n\na {\n    color: var(--green);\n}\n\nimg {\n    width: 100%;\n}\n\n/* sitewise */\n\n.tabs-container {\n    width: 740px;\n    margin: auto;\n    padding: 0;\n}\n\n.tab {\n    border: none;\n    outline: none;\n    font-family: inherit;\n    font-size: 16px;\n    padding: 16px;\n    background-color: var(--white);\n    color: var(--purple);\n    margin-right: 8px;\n    border-radius: 8px 8px 0 0;\n}\n\n.tab.active,\n.tab:hover {\n    background-color: var(--purple);\n    color: var(--green);\n}\n\n#content {\n    background-color: var(--purple);\n    text-align: center;\n    width: 700px;\n    height: 90vh;\n    margin: auto;\n    padding: 20px;\n}\n\n/* menu */\n\n.menu-item {\n    display: flex;\n    justify-content: space-between;\n    color: var(--white);\n    font-weight: bold;\n    margin: 16px;\n}",""]);const i=c},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(c[d]=!0)}for(var s=0;s<e.length;s++){var p=[].concat(e[s]);r&&c[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),n.push(p))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var d=e[i],s=r.base?d[0]+r.base:d[0],p=a[s]||0,l="".concat(s," ").concat(p);a[s]=p+1;var u=t(l),h={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(h);else{var m=o(h,r);r.byIndex=i,n.splice(i,0,{identifier:l,updater:m,references:1})}c.push(l)}return c}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=t(a[c]);n[i].references--}for(var d=r(e,o),s=0;s<a.length;s++){var p=t(a[s]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}a=d}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{const e=t.p+"b3909a82446f6fb84b6c.jpg";function n(){const n=document.querySelector("#content"),t=new Image;t.src=e;const r=document.createElement("h1");r.textContent="BURGERLAND";const o=document.createElement("p");o.textContent="Open Monday - Sunday 12:00 -23:00";const a=document.createElement("p");a.textContent="Delivery Order: 123-456-789",n.appendChild(t),n.appendChild(r),n.appendChild(o),n.appendChild(a)}function r(e,n){const t=document.createElement("div");t.classList.add("menu-item");const r=document.createElement("span");r.textContent=e;const o=document.createElement("span");return o.textContent=n,t.appendChild(r),t.appendChild(o),t}var o=t(379),a=t.n(o),c=t(795),i=t.n(c),d=t(569),s=t.n(d),p=t(565),l=t.n(p),u=t(216),h=t.n(u),m=t(589),f=t.n(m),v=t(426),g={};g.styleTagTransform=f(),g.setAttributes=l(),g.insert=s().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=h(),a()(v.Z,g),v.Z&&v.Z.locals&&v.Z.locals;const C=document.createElement("button");C.textContent="Home",C.classList.add("tab"),C.addEventListener("click",(()=>{E.innerHTML="",C.classList.add("active"),b.classList.remove("active"),y.classList.remove("active"),n()}));const b=document.createElement("button");b.textContent="Menu",b.classList.add("tab"),b.addEventListener("click",(()=>{E.innerHTML="",b.classList.add("active"),C.classList.remove("active"),y.classList.remove("active"),function(){const e=document.querySelector("#content"),n=document.createElement("h3");n.textContent="BURGERS",e.appendChild(n),e.appendChild(r("RACLETTE BURGERS","$12")),e.appendChild(r("SMASH BURGERS","$10")),e.appendChild(r("THE FULL WORKS BURGER","$11")),e.appendChild(r("JUICY LUCY BURGER","$12")),e.appendChild(r("DOUBLE SWISS","$12")),e.appendChild(r("BEETROOT BURGER","$10")),e.appendChild(r("ASIAN CHICKEN BURGERS","$11"));const t=document.createElement("h3");t.textContent="DRINKS",e.appendChild(t),e.appendChild(r("Starfruit","$11")),e.appendChild(r("Avocado","$11")),e.appendChild(r("Bitterground","$11")),e.appendChild(r("Dragonfruit","$11")),e.appendChild(r("Sugarcane","$11")),e.appendChild(r("Honeydew","$11"))}()}));const y=document.createElement("button");y.textContent="Contact",y.classList.add("tab"),y.addEventListener("click",(()=>{E.innerHTML="",y.classList.add("active"),C.classList.remove("active"),b.classList.remove("active"),function(){const e=document.querySelector("#content"),n=document.createElement("h3");n.textContent="DELIVERY";const t=document.createElement("h3");t.textContent="123-456-789",e.appendChild(n),e.appendChild(t);const r=document.createElement("p");r.textContent="123 Nathan Road, Hong Kong.";const o=document.createElement("a");o.href="#",o.textContent="www.burgerland.com",e.appendChild(r),e.appendChild(o)}()}));const x=document.createElement("div");x.classList.add("tabs-container"),x.appendChild(C),x.appendChild(b),x.appendChild(y),document.body.appendChild(x);const E=document.createElement("div");E.id="content",document.body.appendChild(E),C.classList.add("active"),n()})()})();