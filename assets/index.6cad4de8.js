import{s as e}from"./side-effect-manager.es.3578cf95.js";import{e as t}from"./ensure-attributes.2c659353.js";let o,s;function n(e,t,o,s){const n=e.indexOf(t,s);return[n,e.indexOf(o,n)]}function r(e,t,o,s,r){const[i,a]=n(e,o,s,r),[l,c]=n(t,o,s,r);return[e.slice(0,i)+t.slice(l,c)+e.slice(a),a]}function i(e,t,o=0){return[e,o]=r(e,t,"<window","/>",o),[e,o]=r(e,t,'<pane location="" divider=',"/>",o),[e,o]=r(e,t,'visible="true"',"/>",o),[e,o]=r(e,t,"<size ","/>",o),[e,o]=r(e,t,"<coordSystem ","/>",o),e}const a={kind:"GeoGebra",async setup(n){const r=n.getBox(),a=t(n,{"geogebra_defaults2d.xml":"","geogebra_defaults3d.xml":"","geogebra_javascript.js":"","geogebra.xml":""});r.mountStyles(".netless-app-geogebra{width:100%!important;height:100%!important}\n");const l=document.createElement("div");l.classList.add("netless-app-geogebra"),r.mountContent(l);const c=new e,d=await(window.GGBApplet?Promise.resolve(window.GGBApplet):s||(o=document.createElement("script"),s=new Promise((e=>{o.addEventListener("load",(()=>e(window.GGBApplet)))})),o.src="https://www.geogebra.org/apps/deployggb.js",document.head.appendChild(o),s)),g=await new Promise((e=>{new d({appName:"graphing",showToolBar:!0,showAlgebraInput:!0,showMenuBar:!0,borderColor:null,useBrowserForJS:!0,appletOnLoad:e}).inject(l)}));new ResizeObserver((()=>{const{width:e,height:t}=l.getBoundingClientRect();g.setWidth(e),g.setHeight(t)})).observe(l);const m=()=>{const{archive:e}=g.getFileJSON();for(const{fileName:t,fileContent:o}of e)a[t]!==o&&n.updateAttributes([t],o)};let p=0;const u=async()=>{clearTimeout(p),p=setTimeout(m,500)},f=()=>{const e=[],t=Object.fromEntries(g.getFileJSON().archive.map((e=>[e.fileName,e.fileContent]))),o=new Map;for(const[s,n]of Object.entries(a))s in t&&("geogebra.xml"===s&&(t[s]=i(t[s],n)),t[s]!==n&&o.set(s,[t[s],n]),e.push({fileName:s,fileContent:n}));o.size>0&&(console.log(o),g.setFileJSON({archive:e}))};let w=0;const b=Object.keys(a);c.add((()=>n.mobxUtils.autorun((()=>{b.forEach((e=>a[e])),clearTimeout(w),w=setTimeout(f,500)})))),g.registerAddListener(u),g.registerClearListener(u),g.registerRemoveListener(u),g.registerRenameListener(u),g.registerStoreUndoListener(u),g.registerUpdateListener(u),n.emitter.on("destroy",(()=>{console.log("[GeoGebra]: destroy"),c.flushAll()}))}};export{a as default};