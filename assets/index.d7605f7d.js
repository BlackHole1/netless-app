var e,t=Object.defineProperty,n=Object.defineProperties,o=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(e,n,o)=>n in e?t(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,c=(e,t)=>{for(var n in t||(t={}))a.call(t,n)&&s(e,n,t[n]);if(r)for(var n of r(t))i.call(t,n)&&s(e,n,t[n]);return e},l=(e,t)=>{var n={};for(var o in e)a.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&r)for(var o of r(e))t.indexOf(o)<0&&i.call(e,o)&&(n[o]=e[o]);return n};import{m as d,w as u,f as p,S as m,i as f,s as g,a as h,e as y,t as b,b as w,c as _,d as v,g as k,h as T,j as O,k as E,l as N,n as j,o as I,p as S,q as x,r as P,u as A,v as M,x as V,y as D,z as R,A as L,B as C,C as K,D as Y,E as U,F as z}from"./vendor.878c767b.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const W={},Z=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`${e}`)in W)return;W[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const o=document.createElement("link");return o.rel=t?"stylesheet":"modulepreload",t||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),t?new Promise(((e,t)=>{o.addEventListener("load",e),o.addEventListener("error",t)})):void 0}))).then((()=>e())):e()},$=console.log.bind(console),J=console.debug.bind(console),q={"../../app-browser/playground.ts":()=>Z((()=>import("./playground.68f8b7b0.js")),["assets/playground.68f8b7b0.js","assets/vendor.878c767b.js"]),"../../app-countdown/playground.ts":()=>Z((()=>import("./playground.7d53f5c8.js")),["assets/playground.7d53f5c8.js","assets/vendor.878c767b.js"]),"../../app-docs-viewer/playground.ts":()=>Z((()=>import("./playground.e80d92c5.js").then((function(e){return e.p}))),[]),"../../app-geogebra/playground.ts":()=>Z((()=>import("./playground.8294679e.js")),["assets/playground.8294679e.js","assets/vendor.878c767b.js"]),"../../app-hello-world/playground.ts":()=>Z((()=>import("./playground.e91a328a.js")),[]),"../../app-iframe-bridge/playground.ts":()=>Z((()=>import("./playground.572eef2b.js")),["assets/playground.572eef2b.js","assets/side-effect-manager.es.3578cf95.js","assets/ensure-attributes.2c659353.js","assets/vendor.878c767b.js"]),"../../app-media-player/playground.ts":()=>Z((()=>import("./playground.7c43db40.js")),["assets/playground.7c43db40.js","assets/vendor.878c767b.js"]),"../../app-monaco/playground.ts":()=>Z((()=>import("./playground.d7a5e4e1.js").then((function(e){return e.p}))),[]),"../../app-vote/playground.ts":()=>Z((()=>import("./playground.1484380c.js")),["assets/playground.1484380c.js","assets/vendor.878c767b.js"])};document.querySelector.bind(document);const F=sessionStorage,G=localStorage,B={VITE_APPID:"ss4WoMf_EeqfCXcv33LmiA/izfIC88inXYJKw",VITE_ROOM_TOKEN:"NETLESSROOM_YWs9VWtNUk92M1JIN2I2Z284dCZub25jZT0xNjMxNTg3NTU0NDc5MDAmcm9sZT0wJnNpZz01ODUyNDJjZGYwOGNhY2Y4ZWFjMzNlYjk1ZGU1YWZlNWUwMWY0OWQ5MTNkODhmNzY2ZjQyMDNhZGYzNjViYzcwJnV1aWQ9ZTE1YmMzYjAxNTA1MTFlY2E5Y2M5NzQ1Mzc2M2M0MmM",VITE_ROOM_UUID:"e15bc3b0150511eca9cc97453763c42c",VITE_JUDGE0_KEY:"c6bf0d946amsh8a74c4b74695c0cp1d3a6ejsnb53b0567a805",BASE_URL:"",MODE:"production",DEV:!1,PROD:!0},Q=(e,t)=>fetch(`https://api.netless.link/v5/${e}`,{method:"POST",headers:{token:B.VITE_TOKEN,region:"cn-hz","Content-Type":"application/json"},body:JSON.stringify(t)}).then((e=>e.json()));async function X(){const{uuid:e}=await Q("rooms",{name:"test1",limit:0});$("uuid = %O",e);const t=await Q(`tokens/rooms/${e}`,{lifespan:0,role:"admin"});$("roomToken = %O",t);const n=JSON.parse(G.getItem("rooms")||"[]"),o={uuid:e,roomToken:t};return n.unshift(o),G.setItem("rooms",JSON.stringify(n)),o}function H(e){return"object"==typeof e&&null!==e&&"uuid"in e&&(e=`uuid=${e.uuid}&roomToken=${e.roomToken}`),location.origin+location.pathname+"?"+e.toString()}function ee(e){e||(e=location.origin+location.pathname),history.replaceState({url:e},"",e)}const te=new u.WhiteWebSdk({appIdentifier:B.VITE_APPID,useMobXState:!0,deviceType:u.DeviceType.Surface});async function ne(e){const t=await te.joinRoom((r=c({},e),a={invisiblePlugins:[d],useMultiViews:!0,disableNewPencil:!1,floatBar:!0,userPayload:{cursorName:p.name.firstName()}},n(r,o(a))));var r,a;window.room=t;const i=F.getItem("currentApplianceName");return i&&t.setMemberState({currentApplianceName:i}),ee(location.origin+location.pathname),t}function oe(e){room.setScenePath("/init"),d.mount({room:room,container:e,chessboard:!1,cursor:!0,debug:!0}),window.manager=room.getInvisiblePlugin(d.kind),manager.switchMainViewToWriter()}const re=Object.values(u.ApplianceNames),{window:ae}=D;function ie(e){h(e,"svelte-fgakyb",".tip.svelte-fgakyb{position:fixed;bottom:1em;right:1em;color:#fff;background-color:#0074d9;padding:1em;border-radius:4px;box-shadow:0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),\n      0 2px 4px -1px rgba(0, 0, 0, 0.2);z-index:9999;font-family:Arial, sans-serif;font-size:small}.tip.error.svelte-fgakyb{background-color:#ff4136}")}function se(e,t,n){const o=e.slice();return o[12]=t[n].kind,o[13]=t[n].configs,o}function ce(e,t,n){const o=e.slice();return o[16]=t[n],o[18]=n,o}function le(e,t,n){const o=e.slice();return o[19]=t[n],o}function de(e){let t,n,o,r,a,i,s,c,l,d,u,p,m,f,g,h=e[3].split("-").map(ke).join(" ")+"",_=re,O=[];for(let y=0;y<_.length;y+=1)O[y]=ge(le(e,_,y));let E=e[1],I=[];for(let y=0;y<E.length;y+=1)I[y]=ye(se(e,E,y));return{c(){t=y("div");for(let e=0;e<O.length;e+=1)O[e].c();n=j(),o=y("button"),r=b(h),a=j(),i=y("button"),i.textContent="RESET",s=j(),c=y("a"),c.textContent="GITHUB",l=j(),d=y("div"),u=y("div");for(let e=0;e<I.length;e+=1)I[e].c();p=j(),m=y("div"),w(o,"class","new-page-btn"),w(o,"title","copy share url to clipboard\npress ctrl/meta to clear address bar\npress shift to create new room (only available with sdk token)"),w(i,"class","reset-btn"),w(i,"title","remove all apps, reset camera\npress ctrl/meta to reload page\npress shift to clear screen"),w(c,"class","github-btn"),w(c,"href","https://github.com/netless-io/netless-app"),w(c,"title","View my source"),w(t,"id","tools"),w(u,"id","actions"),w(m,"id","whiteboard"),w(d,"class","two-side")},m(h,y){v(h,t,y);for(let e=0;e<O.length;e+=1)O[e].m(t,null);k(t,n),k(t,o),k(o,r),k(t,a),k(t,i),k(t,s),k(t,c),v(h,l,y),v(h,d,y),k(d,u);for(let e=0;e<I.length;e+=1)I[e].m(u,null);k(d,p),k(d,m),f||(g=[S(o,"click",e[9]),S(i,"click",ve),S(t,"click",e[5]),S(u,"click",e[6]),Y(oe.call(null,m))],f=!0)},p(e,o){if(4&o){let r;for(_=re,r=0;r<_.length;r+=1){const a=le(e,_,r);O[r]?O[r].p(a,o):(O[r]=ge(a),O[r].c(),O[r].m(t,n))}for(;r<O.length;r+=1)O[r].d(1);O.length=_.length}if(8&o&&h!==(h=e[3].split("-").map(ke).join(" ")+"")&&T(r,h),2&o){let t;for(E=e[1],t=0;t<E.length;t+=1){const n=se(e,E,t);I[t]?I[t].p(n,o):(I[t]=ye(n),I[t].c(),I[t].m(u,null))}for(;t<I.length;t+=1)I[t].d(1);I.length=E.length}},d(e){e&&N(t),K(O,e),e&&N(l),e&&N(d),K(I,e),f=!1,M(g)}}}function ue(e){let t;return{c(){t=y("div"),t.textContent="Joining Room..."},m(e,n){v(e,t,n)},p:U,d(e){e&&N(t)}}}function pe(e){let t;return{c(){t=y("div"),t.textContent="Registering Apps..."},m(e,n){v(e,t,n)},p:U,d(e){e&&N(t)}}}function me(e){let t;return{c(){t=y("div"),t.textContent="404 Not Found Room."},m(e,n){v(e,t,n)},p:U,d(e){e&&N(t)}}}function fe(e){let t;return{c(){t=y("div"),t.textContent="Preparing..."},m(e,n){v(e,t,n)},p:U,d(e){e&&N(t)}}}function ge(e){let t,n,o,r=e[19]+"";return{c(){t=y("button"),n=b(r),w(t,"data-tool",o=e[19]),_(t,"active",e[19]===e[2])},m(e,o){v(e,t,o),k(t,n)},p(e,n){4&n&&_(t,"active",e[19]===e[2])},d(e){e&&N(t)}}}function he(e){var t;let n,o,r,a,i,s=((null==(t=e[16].options)?void 0:t.title)||`${e[16].kind} ${e[18]+1}`)+"";return{c(){n=y("button"),o=b(s),r=j(),w(n,"data-app-kind",a=e[12]),w(n,"data-app-index",i=e[18])},m(e,t){v(e,n,t),k(n,o),k(n,r)},p(e,t){var r;2&t&&s!==(s=((null==(r=e[16].options)?void 0:r.title)||`${e[16].kind} ${e[18]+1}`)+"")&&T(o,s),2&t&&a!==(a=e[12])&&w(n,"data-app-kind",a)},d(e){e&&N(n)}}}function ye(e){let t,n,o,r,a=e[12]+"",i=e[13],s=[];for(let c=0;c<i.length;c+=1)s[c]=he(ce(e,i,c));return{c(){t=y("strong"),n=b(a),o=j();for(let e=0;e<s.length;e+=1)s[e].c();r=I()},m(e,a){v(e,t,a),k(t,n),v(e,o,a);for(let t=0;t<s.length;t+=1)s[t].m(e,a);v(e,r,a)},p(e,t){if(2&t&&a!==(a=e[12]+"")&&T(n,a),2&t){let n;for(i=e[13],n=0;n<i.length;n+=1){const o=ce(e,i,n);s[n]?s[n].p(o,t):(s[n]=he(o),s[n].c(),s[n].m(r.parentNode,r))}for(;n<s.length;n+=1)s[n].d(1);s.length=i.length}},d(e){e&&N(t),e&&N(o),K(s,e),e&&N(r)}}}function be(e){let t,n,o,r,a;return{c(){t=y("div"),n=b(e[4]),w(t,"class","tip svelte-fgakyb"),_(t,"error",e[4].includes("Failed"))},m(e,o){v(e,t,o),k(t,n),a=!0},p(e,o){(!a||16&o)&&T(n,e[4]),16&o&&_(t,"error",e[4].includes("Failed"))},i(e){a||(O((()=>{r&&r.end(1),o=R(t,z,{x:200}),o.start()})),a=!0)},o(e){o&&o.invalidate(),r=E(t,L,{}),a=!1},d(e){e&&N(t),e&&r&&r.end()}}}function we(e){let t,n,o,r,a;function i(e,t){return"prepare"===e[0]?fe:"404"===e[0]?me:"register-apps"===e[0]?pe:"join-room"===e[0]?ue:de}let s=i(e),c=s(e),l=e[4]&&be(e);return{c(){c.c(),t=j(),l&&l.c(),n=I()},m(i,s){c.m(i,s),v(i,t,s),l&&l.m(i,s),v(i,n,s),o=!0,r||(a=[S(ae,"keydown",e[7]),S(ae,"keyup",e[8])],r=!0)},p(e,[o]){s===(s=i(e))&&c?c.p(e,o):(c.d(1),c=s(e),c&&(c.c(),c.m(t.parentNode,t))),e[4]?l?(l.p(e,o),16&o&&x(l,1)):(l=be(e),l.c(),x(l,1),l.m(n.parentNode,n)):l&&(C(),P(l,1,1,(()=>{l=null})),A())},i(e){o||(x(l),o=!0)},o(e){P(l),o=!1},d(e){c.d(e),e&&N(t),l&&l.d(e),e&&N(n),r=!1,M(a)}}}let _e=0;function ve(e){!async function({manager:e=window.manager,room:t=window.room,clearScreen:n=!1,reload:o=!1}={}){await Promise.all(Object.keys(e.apps||{}).map((t=>e.closeApp(t)))),Object.keys(e.attributes).forEach((t=>{/-[-_a-zA-Z0-9]{8}$/.test(t)?e.updateAttributes([t],void 0):"apps"===t&&e.updateAttributes([t],{})})),e.mainView.moveCamera({centerX:0,centerY:0,scale:1}),n&&t.cleanCurrentScene(),o&&location.reload()}({clearScreen:e.shiftKey,reload:e.ctrlKey||e.metaKey})}const ke=e=>e.toUpperCase();function Te(e,t,n){let o,r,a,i="prepare",s="share",u="";function p(e){n(4,u=e),clearTimeout(_e),_e=window.setTimeout((()=>{_e=0,n(4,u="")}),3e3)}return V((async()=>{const e=await async function(){let e,t;const n=new URLSearchParams(location.search);if(n.has("uuid")&&n.has("roomToken")&&(e=n.get("uuid"),t=n.get("roomToken")),!e||!t){const n=JSON.parse(G.getItem("rooms")||"[]");n[0]&&({uuid:e,roomToken:t}=n[0])}e&&t||(e=B.VITE_ROOM_UUID,t=B.VITE_ROOM_TOKEN),e&&t||!B.VITE_TOKEN||window.confirm("Not found uuid/roomToken both in query and localStorage, create a new one?")&&(({uuid:e,roomToken:t}=await X()),location.reload());if(e&&t)return{uuid:e,roomToken:t}}();e?(n(0,i="register-apps"),n(1,o=await async function(){const e=await Promise.all(Object.values(q).map((e=>e()))),t=[];for(let{default:n}of e){Array.isArray(n)||(n=[n]),J("[register]",n[0].kind);const e={kind:n[0].kind,configs:[]};for(const t of n){const n=t,{kind:o,src:r}=n,a=l(n,["kind","src"]),i=async()=>{if("function"==typeof r){const e=await r();return"default"in e?e.default:e}return r};d.register({kind:o,src:i}),e.configs.push(c({kind:o},a))}t.push(e)}return window.apps=t,t}()),n(0,i="join-room"),r=await ne(e),n(2,a=r.state.memberState.currentApplianceName),r.callbacks.on("onRoomStateChanged",(e=>{e.memberState&&n(2,a=e.memberState.currentApplianceName)})),n(0,i="main")):n(0,i="404")})),[i,o,a,s,u,function(e){var t;const n=e.target;if(null==(t=null==n?void 0:n.dataset)?void 0:t.tool){const e=n.dataset.tool;r.setMemberState({currentApplianceName:e}),F.setItem("currentApplianceName",e)}},function(e){var t,n;const r=e.target;if((null==(t=null==r?void 0:r.dataset)?void 0:t.appKind)&&(null==(n=null==r?void 0:r.dataset)?void 0:n.appIndex)){const e=r.dataset.appKind,t=+r.dataset.appIndex,{configs:n}=o.find((t=>t.kind===e));window.manager.addApp(n[t])}},function(e){"Shift"===e.key&&e.shiftKey&&B.VITE_TOKEN&&n(3,s="new-room")},function(e){"Shift"!==e.key||e.shiftKey||n(3,s="share")},async function(e){if("share"===s){const{uuid:t,roomToken:n}=r,o=new URLSearchParams;o.set("uuid",t),o.set("roomToken",n);const a=H(o);ee(e.ctrlKey||e.metaKey?"":a);try{await async function(e){var t;try{return await(null==(t=window.navigator.clipboard)?void 0:t.writeText(e))}catch{const t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.left="-999999px",t.style.top="-999999px",document.body.appendChild(t),t.focus(),t.select();const n=document.execCommand("copy");return t.remove(),n?Promise.resolve():Promise.reject()}}(a),p("Copied share url.")}catch{p("Failed to write clipboard.")}}if("new-room"===s){const e=H(await X());window.open(e,"_blank"),n(3,s="share")}}]}window.app=new class extends m{constructor(e){super(),f(this,e,Te,we,g,{},ie)}}({target:document.querySelector("#app")}),null==(e=navigator.serviceWorker)||e.getRegistrations().then((e=>{for(const t of e)t.unregister()})).catch((()=>{}));export{Z as _};