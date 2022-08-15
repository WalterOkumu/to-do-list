(()=>{"use strict";var n={137:(e,t,n)=>{n.d(t,{Z:()=>i});var t=n(537),t=n.n(t),o=n(645),n=n.n(o)()(t());n.push([e.id,"body{background-color:#d3d3d3;margin:0;padding:0}ul,li{margin:0;padding:0;list-style:none}.to-do-list-container{background-color:#fff;position:relative;height:auto;width:auto;margin-left:20%;margin-right:20%;margin-top:5%;margin-bottom:10%;box-shadow:3px 4px 5px 0 rgba(0,0,0,.75);-webkit-box-shadow:3px 4px 5px 0 rgba(0,0,0,.75);-moz-box-shadow:3px 4px 5px 0 rgba(0,0,0,.75);border:none}.to-do-list-container .list-header{display:flex;justify-content:space-between;align-items:center;padding:10px}.to-do-list-container .list-header .title{font-weight:bold;font-size:18px}.to-do-list-container .list-header .sync-image{width:15px;height:15px;cursor:pointer}.to-do-list-container hr{border:.5px solid #d3d3d3;width:99%}.to-do-list-container .task-container{display:flex;justify-content:space-between;align-items:center;padding:5px}.to-do-list-container .task-container .task-input{font-style:italic;font-size:15px;padding:8px;border:none;width:100%;background-color:rgba(0,0,0,0);resize:none;outline:none}.to-do-list-container .task-container .return-icon{width:15px;height:15px;cursor:pointer}.to-do-list-container .task-list-container{display:flex;flex-direction:column;width:100%;height:100%;padding-bottom:10%}.to-do-list-container .task-list-container .task-list{display:flex;flex-direction:row;align-items:center;width:100%;justify-content:space-between;padding:2px;border-bottom:1px solid #d3d3d3}.to-do-list-container .task-list-container .task-list .task{text-align:left;flex:1;padding-right:5px}.to-do-list-container .task-list-container .task-list .task-icon{width:25px;height:25px}.to-do-list-container .task-list-container .task-list .task-icon:hover{cursor:move}.to-do-list-container .bottom-area{cursor:pointer;background-color:#d3d3d3;height:40px;display:flex;justify-content:center;align-items:center;position:absolute;bottom:0;left:0;right:0;width:100%}.to-do-list-container .bottom-area .bottom-text{text-align:center;color:#000;font-weight:bold}","",{version:3,sources:["webpack://./src/styles/styles.scss"],names:[],mappings:"AAAA,KACE,wBAAA,CACA,QAAA,CACA,SAAA,CAGF,MAEE,QAAA,CACA,SAAA,CACA,eAAA,CAGF,sBACE,qBAAA,CACA,iBAAA,CACA,WAAA,CACA,UAAA,CACA,eAAA,CACA,gBAAA,CACA,aAAA,CACA,iBAAA,CACA,wCAAA,CACA,gDAAA,CACA,6CAAA,CACA,WAAA,CAEA,mCACE,YAAA,CACA,6BAAA,CACA,kBAAA,CACA,YAAA,CAEA,0CACE,gBAAA,CACA,cAAA,CAGF,+CACE,UAAA,CACA,WAAA,CACA,cAAA,CAIJ,yBACE,yBAAA,CACA,SAAA,CAGF,sCACE,YAAA,CACA,6BAAA,CACA,kBAAA,CACA,WAAA,CAEA,kDACE,iBAAA,CACA,cAAA,CACA,WAAA,CACA,WAAA,CACA,UAAA,CACA,8BAAA,CACA,WAAA,CACA,YAAA,CAGF,mDACE,UAAA,CACA,WAAA,CACA,cAAA,CAIJ,2CACE,YAAA,CACA,qBAAA,CACA,UAAA,CACA,WAAA,CACA,kBAAA,CAEA,sDACE,YAAA,CACA,kBAAA,CACA,kBAAA,CACA,UAAA,CACA,6BAAA,CACA,WAAA,CACA,+BAAA,CAEA,4DACE,eAAA,CACA,MAAA,CACA,iBAAA,CAGF,iEACE,UAAA,CACA,WAAA,CAEA,uEACE,WAAA,CAMR,mCACE,cAAA,CACA,wBAAA,CACA,WAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,iBAAA,CACA,QAAA,CACA,MAAA,CACA,OAAA,CACA,UAAA,CAEA,gDACE,iBAAA,CACA,UAAA,CACA,gBAAA",sourcesContent:["body {\n  background-color: lightgray;\n  margin: 0;\n  padding: 0;\n}\n\nul,\nli {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.to-do-list-container {\n  background-color: white;\n  position: relative;\n  height: auto;\n  width: auto;\n  margin-left: 20%;\n  margin-right: 20%;\n  margin-top: 5%;\n  margin-bottom: 10%;\n  box-shadow: 3px 4px 5px 0 rgba(0, 0, 0, 0.75);\n  -webkit-box-shadow: 3px 4px 5px 0 rgba(0, 0, 0, 0.75);\n  -moz-box-shadow: 3px 4px 5px 0 rgba(0, 0, 0, 0.75);\n  border: none;\n\n  .list-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 10px;\n\n    .title {\n      font-weight: bold;\n      font-size: 18px;\n    }\n\n    .sync-image {\n      width: 15px;\n      height: 15px;\n      cursor: pointer;\n    }\n  }\n\n  hr {\n    border: 0.5px solid lightgray;\n    width: 99%;\n  }\n\n  .task-container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 5px;\n\n    .task-input {\n      font-style: italic;\n      font-size: 15px;\n      padding: 8px;\n      border: none;\n      width: 100%;\n      background-color: transparent;\n      resize: none;\n      outline: none;\n    }\n\n    .return-icon {\n      width: 15px;\n      height: 15px;\n      cursor: pointer;\n    }\n  }\n\n  .task-list-container {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 100%;\n    padding-bottom: 10%;\n\n    .task-list {\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      width: 100%;\n      justify-content: space-between;\n      padding: 2px;\n      border-bottom: 1px solid lightgray;\n\n      .task {\n        text-align: left;\n        flex: 1;\n        padding-right: 5px;\n      }\n\n      .task-icon {\n        width: 25px;\n        height: 25px;\n\n        &:hover {\n          cursor: move;\n        }\n      }\n    }\n  }\n\n  .bottom-area {\n    cursor: pointer;\n    background-color: lightgray;\n    height: 40px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    width: 100%;\n\n    .bottom-text {\n      text-align: center;\n      color: black;\n      font-weight: bold;\n    }\n  }\n}\n"],sourceRoot:""}]);const i=n},645:e=>{e.exports=function(o){var l=[];return l.toString=function(){return this.map(function(e){var t="",n=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),n&&(t+="@layer".concat(0<e[5].length?" ".concat(e[5]):""," {")),t+=o(e),n&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t}).join("")},l.i=function(e,t,n,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(n)for(var r=0;r<this.length;r++){var A=this[r][0];null!=A&&(a[A]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);n&&a[c[0]]||(void 0!==i&&(void 0!==c[5]&&(c[1]="@layer".concat(0<c[5].length?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),t&&(c[2]&&(c[1]="@media ".concat(c[2]," {").concat(c[1],"}")),c[2]=t),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),l.push(c))}},l}},537:e=>{e.exports=function(e){var t,n=e[1],o=e[3];return o?"function"==typeof btoa?(e=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),e="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e),e="/*# ".concat(e," */"),t=o.sources.map(function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}),[n].concat(t).concat([e]).join("\n")):[n].join("\n"):n}},379:e=>{var c=[];function l(e){for(var t=-1,n=0;n<c.length;n++)if(c[n].identifier===e){t=n;break}return t}function A(e,t){for(var n={},o=[],i=0;i<e.length;i++){var a=e[i],r=t.base?a[0]+t.base:a[0],A=n[r]||0,s="".concat(r," ").concat(A),r=(n[r]=A+1,l(s)),A={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};-1!==r?(c[r].references++,c[r].updater(A)):(a=function(t,e){var n=e.domAPI(e);return n.update(t),function(e){e?e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer||n.update(t=e):n.remove()}}(A,t),t.byIndex=i,c.splice(i,0,{identifier:s,updater:a,references:1})),o.push(s)}return o}e.exports=function(e,a){var r=A(e=e||[],a=a||{});return function(e){e=e||[];for(var t=0;t<r.length;t++){var n=l(r[t]);c[n].references--}for(var e=A(e,a),o=0;o<r.length;o++){var i=l(r[o]);0===c[i].references&&(c[i].updater(),c.splice(i,1))}r=e}}},569:e=>{var n={};e.exports=function(e,t){if(!(e=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e)))throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(t)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(a){var r=a.insertStyleElement(a);return{update:function(e){var t,n,o,i;t=r,n=a,o="",(e=e).supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {")),(i=void 0!==e.layer)&&(o+="@layer".concat(0<e.layer.length?" ".concat(e.layer):""," {")),o+=e.css,i&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}"),(i=e.sourceMap)&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(o,t,n.options)},remove:function(){var e;null!==(e=r).parentNode&&e.parentNode.removeChild(e)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},o={};function i(e){var t=o[e];if(void 0!==t)return t.exports;t=o[e]={id:e,exports:{}};return n[e](t,t.exports,i),t.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.nc=void 0;{var e=i(379),e=i.n(e),t=i(795),t=i.n(t),a=i(569),a=i.n(a),r=i(565),r=i.n(r),A=i(216),A=i.n(A),s=i(589),s=i.n(s),c=i(137),l={};l.styleTagTransform=s(),l.setAttributes=r(),l.insert=a().bind(null,"head"),l.domAPI=t(),l.insertStyleElement=A(),e()(c.Z,l),c.Z&&c.Z.locals&&c.Z.locals;const d=JSON.parse('[{"index":0,"description":"Tempor consequat ut et consectetur irure aute fugiat qui velit.","completed":false},{"index":1,"description":"Reprehenderit eu eu veniam ullamco incididunt aliqua velit non consequat excepteur excepteur qui.","completed":false},{"index":2,"description":"Sint nisi mollit sunt non fugiat.","completed":false},{"index":3,"description":"Amet laborum aute aliqua Lorem reprehenderit.","completed":false}]'),p=e=>{const r=document.createElement("ul");return r.className="task-list-container",e.forEach((e,t)=>{const n=document.createElement("li"),o=(n.className="task-list",document.createElement("input")),i=(o.className="checkbox",o.id="checkbox-"+t,o.name="checkbox-"+t,o.type="checkbox",o.placeholder="",document.createElement("label")),a=(i.className="task",i.htmlFor="checkbox-"+t,i.innerText=e.description,document.createElement("div"));a.className="task-icon",a.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16"><path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>',n.appendChild(o),n.appendChild(i),n.appendChild(a),r.appendChild(n)}),r},C=()=>{const e=document.createElement("div"),t=(e.className="bottom-area",document.createElement("p"));return t.className="bottom-text",t.innerText="Clear all completed",e.appendChild(t),e},u=()=>{const e=document.getElementsByClassName("to-do-list-container")[0],t=document.createElement("div"),n=(t.className="list-header",document.createElement("div")),o=(n.className="title",n.innerHTML="Today&#39;s To Do",document.createElement("div")),i=(o.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16"><path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/><path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/></svg>',o.className="sync-image",document.createElement("div")),a=(i.className="task-container",document.createElement("label")),r=(a.innerText="",a.htmlFor="task-input",a.className="label",document.createElement("input")),A=(r.className="task-input",r.id="task-input",r.type="text",r.placeholder="Add to your list...",document.createElement("div"));A.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/></svg>',A.className="return-icon",t.appendChild(n),t.appendChild(o),a.appendChild(r),i.appendChild(a),i.appendChild(A),e.appendChild(t),e.appendChild(document.createElement("hr")),e.appendChild(i),e.appendChild(document.createElement("hr")),e.appendChild(p(d)),e.appendChild(C())};window.onload=()=>{u()}}})();