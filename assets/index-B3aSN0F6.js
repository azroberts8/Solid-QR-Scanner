(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();const Z=(i,e)=>i===e,N={equals:Z};let U=z;const S=1,A=2,j={owned:null,cleanups:null,context:null,owner:null};var p=null;let W=null,J=null,m=null,v=null,y=null,F=0;function ee(i,e){const t=m,s=p,n=i.length===0,r=e===void 0?s:e,a=n?j:{owned:null,cleanups:null,context:r?r.context:null,owner:r},o=n?i:()=>i(()=>L(()=>D(a)));p=a,m=null;try{return P(o,!0)}finally{m=t,p=s}}function te(i,e){e=e?Object.assign({},N,e):N;const t={value:i,observers:null,observerSlots:null,comparator:e.equals||void 0},s=n=>(typeof n=="function"&&(n=n(t.value)),q(t,n));return[re.bind(t),s]}function H(i,e,t){const s=Q(i,e,!1,S);I(s)}function ie(i,e,t){U=le;const s=Q(i,e,!1,S);s.user=!0,y?y.push(s):I(s)}function L(i){if(m===null)return i();const e=m;m=null;try{return i()}finally{m=e}}function se(i){ie(()=>L(i))}function ne(i){return p===null||(p.cleanups===null?p.cleanups=[i]:p.cleanups.push(i)),i}function re(){if(this.sources&&this.state)if(this.state===S)I(this);else{const i=v;v=null,P(()=>b(this),!1),v=i}if(m){const i=this.observers?this.observers.length:0;m.sources?(m.sources.push(this),m.sourceSlots.push(i)):(m.sources=[this],m.sourceSlots=[i]),this.observers?(this.observers.push(m),this.observerSlots.push(m.sources.length-1)):(this.observers=[m],this.observerSlots=[m.sources.length-1])}return this.value}function q(i,e,t){let s=i.value;return(!i.comparator||!i.comparator(s,e))&&(i.value=e,i.observers&&i.observers.length&&P(()=>{for(let n=0;n<i.observers.length;n+=1){const r=i.observers[n],a=W&&W.running;a&&W.disposed.has(r),(a?!r.tState:!r.state)&&(r.pure?v.push(r):y.push(r),r.observers&&G(r)),a||(r.state=S)}if(v.length>1e6)throw v=[],new Error},!1)),e}function I(i){if(!i.fn)return;D(i);const e=F;oe(i,i.value,e)}function oe(i,e,t){let s;const n=p,r=m;m=p=i;try{s=i.fn(e)}catch(a){return i.pure&&(i.state=S,i.owned&&i.owned.forEach(D),i.owned=null),i.updatedAt=t+1,K(a)}finally{m=r,p=n}(!i.updatedAt||i.updatedAt<=t)&&(i.updatedAt!=null&&"observers"in i?q(i,s):i.value=s,i.updatedAt=t)}function Q(i,e,t,s=S,n){const r={fn:i,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:e,owner:p,context:p?p.context:null,pure:t};return p===null||p!==j&&(p.owned?p.owned.push(r):p.owned=[r]),r}function M(i){if(i.state===0)return;if(i.state===A)return b(i);if(i.suspense&&L(i.suspense.inFallback))return i.suspense.effects.push(i);const e=[i];for(;(i=i.owner)&&(!i.updatedAt||i.updatedAt<F);)i.state&&e.push(i);for(let t=e.length-1;t>=0;t--)if(i=e[t],i.state===S)I(i);else if(i.state===A){const s=v;v=null,P(()=>b(i,e[0]),!1),v=s}}function P(i,e){if(v)return i();let t=!1;e||(v=[]),y?t=!0:y=[],F++;try{const s=i();return ae(t),s}catch(s){t||(y=null),v=null,K(s)}}function ae(i){if(v&&(z(v),v=null),i)return;const e=y;y=null,e.length&&P(()=>U(e),!1)}function z(i){for(let e=0;e<i.length;e++)M(i[e])}function le(i){let e,t=0;for(e=0;e<i.length;e++){const s=i[e];s.user?i[t++]=s:M(s)}for(e=0;e<t;e++)M(i[e])}function b(i,e){i.state=0;for(let t=0;t<i.sources.length;t+=1){const s=i.sources[t];if(s.sources){const n=s.state;n===S?s!==e&&(!s.updatedAt||s.updatedAt<F)&&M(s):n===A&&b(s,e)}}}function G(i){for(let e=0;e<i.observers.length;e+=1){const t=i.observers[e];t.state||(t.state=A,t.pure?v.push(t):y.push(t),t.observers&&G(t))}}function D(i){let e;if(i.sources)for(;i.sources.length;){const t=i.sources.pop(),s=i.sourceSlots.pop(),n=t.observers;if(n&&n.length){const r=n.pop(),a=t.observerSlots.pop();s<n.length&&(r.sourceSlots[a]=s,n[s]=r,t.observerSlots[s]=a)}}if(i.tOwned){for(e=i.tOwned.length-1;e>=0;e--)D(i.tOwned[e]);delete i.tOwned}if(i.owned){for(e=i.owned.length-1;e>=0;e--)D(i.owned[e]);i.owned=null}if(i.cleanups){for(e=i.cleanups.length-1;e>=0;e--)i.cleanups[e]();i.cleanups=null}i.state=0}function ce(i){return i instanceof Error?i:new Error(typeof i=="string"?i:"Unknown error",{cause:i})}function K(i,e=p){throw ce(i)}function he(i,e){return L(()=>i(e||{}))}function de(i,e,t){let s=t.length,n=e.length,r=s,a=0,o=0,c=e[n-1].nextSibling,u=null;for(;a<n||o<r;){if(e[a]===t[o]){a++,o++;continue}for(;e[n-1]===t[r-1];)n--,r--;if(n===a){const d=r<s?o?t[o-1].nextSibling:t[r-o]:c;for(;o<r;)i.insertBefore(t[o++],d)}else if(r===o)for(;a<n;)(!u||!u.has(e[a]))&&e[a].remove(),a++;else if(e[a]===t[r-1]&&t[o]===e[n-1]){const d=e[--n].nextSibling;i.insertBefore(t[o++],e[a++].nextSibling),i.insertBefore(t[--r],d),e[n]=t[r]}else{if(!u){u=new Map;let f=o;for(;f<r;)u.set(t[f],f++)}const d=u.get(e[a]);if(d!=null)if(o<d&&d<r){let f=a,h=1,g;for(;++f<n&&f<r&&!((g=u.get(e[f]))==null||g!==d+h);)h++;if(h>d-o){const E=e[a];for(;o<d;)i.insertBefore(t[o++],E)}else i.replaceChild(t[o++],e[a++])}else a++;else e[a++].remove()}}}function ue(i,e,t,s={}){let n;return ee(r=>{n=r,e===document?i():Y(e,i(),e.firstChild?null:void 0,t)},s.owner),()=>{n(),e.textContent=""}}function X(i,e,t){let s;const n=()=>{const a=document.createElement("template");return a.innerHTML=i,a.content.firstChild},r=()=>(s||(s=n())).cloneNode(!0);return r.cloneNode=r,r}function fe(i,e,t){return L(()=>i(e,t))}function Y(i,e,t,s){if(t!==void 0&&!s&&(s=[]),typeof e!="function")return x(i,e,s,t);H(n=>x(i,e(),n,t),s)}function x(i,e,t,s,n){for(;typeof t=="function";)t=t();if(e===t)return t;const r=typeof e,a=s!==void 0;if(i=a&&t[0]&&t[0].parentNode||i,r==="string"||r==="number"){if(r==="number"&&(e=e.toString(),e===t))return t;if(a){let o=t[0];o&&o.nodeType===3?o.data!==e&&(o.data=e):o=document.createTextNode(e),t=O(i,t,s,o)}else t!==""&&typeof t=="string"?t=i.firstChild.data=e:t=i.textContent=e}else if(e==null||r==="boolean")t=O(i,t,s);else{if(r==="function")return H(()=>{let o=e();for(;typeof o=="function";)o=o();t=x(i,o,t,s)}),()=>t;if(Array.isArray(e)){const o=[],c=t&&Array.isArray(t);if(V(o,e,t,n))return H(()=>t=x(i,o,t,s,!0)),()=>t;if(o.length===0){if(t=O(i,t,s),a)return t}else c?t.length===0?k(i,o,s):de(i,t,o):(t&&O(i),k(i,o));t=o}else if(e.nodeType){if(Array.isArray(t)){if(a)return t=O(i,t,s,e);O(i,t,null,e)}else t==null||t===""||!i.firstChild?i.appendChild(e):i.replaceChild(e,i.firstChild);t=e}}return t}function V(i,e,t,s){let n=!1;for(let r=0,a=e.length;r<a;r++){let o=e[r],c=t&&t[i.length],u;if(!(o==null||o===!0||o===!1))if((u=typeof o)=="object"&&o.nodeType)i.push(o);else if(Array.isArray(o))n=V(i,o,c)||n;else if(u==="function")if(s){for(;typeof o=="function";)o=o();n=V(i,Array.isArray(o)?o:[o],Array.isArray(c)?c:[c])||n}else i.push(o),n=!0;else{const d=String(o);c&&c.nodeType===3&&c.data===d?i.push(c):i.push(document.createTextNode(d))}}return n}function k(i,e,t=null){for(let s=0,n=e.length;s<n;s++)i.insertBefore(e[s],t)}function O(i,e,t,s){if(t===void 0)return i.textContent="";const n=s||document.createTextNode("");if(e.length){let r=!1;for(let a=e.length-1;a>=0;a--){const o=e[a];if(n!==o){const c=o.parentNode===i;!r&&!a?c?i.replaceChild(n,o):i.insertBefore(n,t):c&&o.remove()}else r=!0}}else i.insertBefore(n,t);return[n]}const ge="modulepreload",me=function(i){return"/Solid-QR-Scanner/"+i},B={},pe=function(e,t,s){let n=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=a?.nonce||a?.getAttribute("nonce");n=Promise.allSettled(t.map(c=>{if(c=me(c),c in B)return;B[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":ge,u||(f.as="script"),f.crossOrigin="",f.href=c,o&&f.setAttribute("nonce",o),document.head.appendChild(f),u)return new Promise((h,g)=>{f.addEventListener("load",h),f.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return n.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return e().catch(r)})};class l{constructor(e,t,s,n,r){this._legacyCanvasSize=l.DEFAULT_CANVAS_SIZE,this._preferredCamera="environment",this._maxScansPerSecond=25,this._lastScanTimestamp=-1,this._destroyed=this._flashOn=this._paused=this._active=!1,this.$video=e,this.$canvas=document.createElement("canvas"),s&&typeof s=="object"?this._onDecode=t:(console.warn(s||n||r?"You're using a deprecated version of the QrScanner constructor which will be removed in the future":"Note that the type of the scan result passed to onDecode will change in the future. To already switch to the new api today, you can pass returnDetailedScanResult: true."),this._legacyOnDecode=t),t=typeof s=="object"?s:{},this._onDecodeError=t.onDecodeError||(typeof s=="function"?s:this._onDecodeError),this._calculateScanRegion=t.calculateScanRegion||(typeof n=="function"?n:this._calculateScanRegion),this._preferredCamera=t.preferredCamera||r||this._preferredCamera,this._legacyCanvasSize=typeof s=="number"?s:typeof n=="number"?n:this._legacyCanvasSize,this._maxScansPerSecond=t.maxScansPerSecond||this._maxScansPerSecond,this._onPlay=this._onPlay.bind(this),this._onLoadedMetaData=this._onLoadedMetaData.bind(this),this._onVisibilityChange=this._onVisibilityChange.bind(this),this._updateOverlay=this._updateOverlay.bind(this),e.disablePictureInPicture=!0,e.playsInline=!0,e.muted=!0;let a=!1;if(e.hidden&&(e.hidden=!1,a=!0),document.body.contains(e)||(document.body.appendChild(e),a=!0),s=e.parentElement,t.highlightScanRegion||t.highlightCodeOutline){if(n=!!t.overlay,this.$overlay=t.overlay||document.createElement("div"),r=this.$overlay.style,r.position="absolute",r.display="none",r.pointerEvents="none",this.$overlay.classList.add("scan-region-highlight"),!n&&t.highlightScanRegion){this.$overlay.innerHTML='<svg class="scan-region-highlight-svg" viewBox="0 0 238 238" preserveAspectRatio="none" style="position:absolute;width:100%;height:100%;left:0;top:0;fill:none;stroke:#e9b213;stroke-width:4;stroke-linecap:round;stroke-linejoin:round"><path d="M31 2H10a8 8 0 0 0-8 8v21M207 2h21a8 8 0 0 1 8 8v21m0 176v21a8 8 0 0 1-8 8h-21m-176 0H10a8 8 0 0 1-8-8v-21"/></svg>';try{this.$overlay.firstElementChild.animate({transform:["scale(.98)","scale(1.01)"]},{duration:400,iterations:1/0,direction:"alternate",easing:"ease-in-out"})}catch{}s.insertBefore(this.$overlay,this.$video.nextSibling)}t.highlightCodeOutline&&(this.$overlay.insertAdjacentHTML("beforeend",'<svg class="code-outline-highlight" preserveAspectRatio="none" style="display:none;width:100%;height:100%;fill:none;stroke:#e9b213;stroke-width:5;stroke-dasharray:25;stroke-linecap:round;stroke-linejoin:round"><polygon/></svg>'),this.$codeOutlineHighlight=this.$overlay.lastElementChild)}this._scanRegion=this._calculateScanRegion(e),requestAnimationFrame(()=>{let o=window.getComputedStyle(e);o.display==="none"&&(e.style.setProperty("display","block","important"),a=!0),o.visibility!=="visible"&&(e.style.setProperty("visibility","visible","important"),a=!0),a&&(console.warn("QrScanner has overwritten the video hiding style to avoid Safari stopping the playback."),e.style.opacity="0",e.style.width="0",e.style.height="0",this.$overlay&&this.$overlay.parentElement&&this.$overlay.parentElement.removeChild(this.$overlay),delete this.$overlay,delete this.$codeOutlineHighlight),this.$overlay&&this._updateOverlay()}),e.addEventListener("play",this._onPlay),e.addEventListener("loadedmetadata",this._onLoadedMetaData),document.addEventListener("visibilitychange",this._onVisibilityChange),window.addEventListener("resize",this._updateOverlay),this._qrEnginePromise=l.createQrEngine()}static set WORKER_PATH(e){console.warn("Setting QrScanner.WORKER_PATH is not required and not supported anymore. Have a look at the README for new setup instructions.")}static async hasCamera(){try{return!!(await l.listCameras(!1)).length}catch{return!1}}static async listCameras(e=!1){if(!navigator.mediaDevices)return[];let t=async()=>(await navigator.mediaDevices.enumerateDevices()).filter(n=>n.kind==="videoinput"),s;try{e&&(await t()).every(n=>!n.label)&&(s=await navigator.mediaDevices.getUserMedia({audio:!1,video:!0}))}catch{}try{return(await t()).map((n,r)=>({id:n.deviceId,label:n.label||(r===0?"Default Camera":`Camera ${r+1}`)}))}finally{s&&(console.warn("Call listCameras after successfully starting a QR scanner to avoid creating a temporary video stream"),l._stopVideoStream(s))}}async hasFlash(){let e;try{if(this.$video.srcObject){if(!(this.$video.srcObject instanceof MediaStream))return!1;e=this.$video.srcObject}else e=(await this._getCameraStream()).stream;return"torch"in e.getVideoTracks()[0].getSettings()}catch{return!1}finally{e&&e!==this.$video.srcObject&&(console.warn("Call hasFlash after successfully starting the scanner to avoid creating a temporary video stream"),l._stopVideoStream(e))}}isFlashOn(){return this._flashOn}async toggleFlash(){this._flashOn?await this.turnFlashOff():await this.turnFlashOn()}async turnFlashOn(){if(!this._flashOn&&!this._destroyed&&(this._flashOn=!0,this._active&&!this._paused))try{if(!await this.hasFlash())throw"No flash available";await this.$video.srcObject.getVideoTracks()[0].applyConstraints({advanced:[{torch:!0}]})}catch(e){throw this._flashOn=!1,e}}async turnFlashOff(){this._flashOn&&(this._flashOn=!1,await this._restartVideoStream())}destroy(){this.$video.removeEventListener("loadedmetadata",this._onLoadedMetaData),this.$video.removeEventListener("play",this._onPlay),document.removeEventListener("visibilitychange",this._onVisibilityChange),window.removeEventListener("resize",this._updateOverlay),this._destroyed=!0,this._flashOn=!1,this.stop(),l._postWorkerMessage(this._qrEnginePromise,"close")}async start(){if(this._destroyed)throw Error("The QR scanner can not be started as it had been destroyed.");if((!this._active||this._paused)&&(window.location.protocol!=="https:"&&console.warn("The camera stream is only accessible if the page is transferred via https."),this._active=!0,!document.hidden))if(this._paused=!1,this.$video.srcObject)await this.$video.play();else try{let{stream:e,facingMode:t}=await this._getCameraStream();!this._active||this._paused?l._stopVideoStream(e):(this._setVideoMirror(t),this.$video.srcObject=e,await this.$video.play(),this._flashOn&&(this._flashOn=!1,this.turnFlashOn().catch(()=>{})))}catch(e){if(!this._paused)throw this._active=!1,e}}stop(){this.pause(),this._active=!1}async pause(e=!1){if(this._paused=!0,!this._active)return!0;this.$video.pause(),this.$overlay&&(this.$overlay.style.display="none");let t=()=>{this.$video.srcObject instanceof MediaStream&&(l._stopVideoStream(this.$video.srcObject),this.$video.srcObject=null)};return e?(t(),!0):(await new Promise(s=>setTimeout(s,300)),this._paused?(t(),!0):!1)}async setCamera(e){e!==this._preferredCamera&&(this._preferredCamera=e,await this._restartVideoStream())}static async scanImage(e,t,s,n,r=!1,a=!1){let o,c=!1;t&&("scanRegion"in t||"qrEngine"in t||"canvas"in t||"disallowCanvasResizing"in t||"alsoTryWithoutScanRegion"in t||"returnDetailedScanResult"in t)?(o=t.scanRegion,s=t.qrEngine,n=t.canvas,r=t.disallowCanvasResizing||!1,a=t.alsoTryWithoutScanRegion||!1,c=!0):console.warn(t||s||n||r||a?"You're using a deprecated api for scanImage which will be removed in the future.":"Note that the return type of scanImage will change in the future. To already switch to the new api today, you can pass returnDetailedScanResult: true."),t=!!s;try{let u,d;[s,u]=await Promise.all([s||l.createQrEngine(),l._loadImage(e)]),[n,d]=l._drawToCanvas(u,o,n,r);let f;if(s instanceof Worker){let h=s;t||l._postWorkerMessageSync(h,"inversionMode","both"),f=await new Promise((g,E)=>{let $,C,w,T=-1;C=_=>{_.data.id===T&&(h.removeEventListener("message",C),h.removeEventListener("error",w),clearTimeout($),_.data.data!==null?g({data:_.data.data,cornerPoints:l._convertPoints(_.data.cornerPoints,o)}):E(l.NO_QR_CODE_FOUND))},w=_=>{h.removeEventListener("message",C),h.removeEventListener("error",w),clearTimeout($),E("Scanner error: "+(_?_.message||_:"Unknown Error"))},h.addEventListener("message",C),h.addEventListener("error",w),$=setTimeout(()=>w("timeout"),1e4);let R=d.getImageData(0,0,n.width,n.height);T=l._postWorkerMessageSync(h,"decode",R,[R.data.buffer])})}else f=await Promise.race([new Promise((h,g)=>window.setTimeout(()=>g("Scanner error: timeout"),1e4)),(async()=>{try{var[h]=await s.detect(n);if(!h)throw l.NO_QR_CODE_FOUND;return{data:h.rawValue,cornerPoints:l._convertPoints(h.cornerPoints,o)}}catch(g){if(h=g.message||g,/not implemented|service unavailable/.test(h))return l._disableBarcodeDetector=!0,l.scanImage(e,{scanRegion:o,canvas:n,disallowCanvasResizing:r,alsoTryWithoutScanRegion:a});throw`Scanner error: ${h}`}})()]);return c?f:f.data}catch(u){if(!o||!a)throw u;let d=await l.scanImage(e,{qrEngine:s,canvas:n,disallowCanvasResizing:r});return c?d:d.data}finally{t||l._postWorkerMessage(s,"close")}}setGrayscaleWeights(e,t,s,n=!0){l._postWorkerMessage(this._qrEnginePromise,"grayscaleWeights",{red:e,green:t,blue:s,useIntegerApproximation:n})}setInversionMode(e){l._postWorkerMessage(this._qrEnginePromise,"inversionMode",e)}static async createQrEngine(e){if(e&&console.warn("Specifying a worker path is not required and not supported anymore."),e=()=>pe(()=>import("./qr-scanner-worker.min-D85Z9gVD.js"),[]).then(s=>s.createWorker()),!(!l._disableBarcodeDetector&&"BarcodeDetector"in window&&BarcodeDetector.getSupportedFormats&&(await BarcodeDetector.getSupportedFormats()).includes("qr_code")))return e();let t=navigator.userAgentData;return t&&t.brands.some(({brand:s})=>/Chromium/i.test(s))&&/mac ?OS/i.test(t.platform)&&await t.getHighEntropyValues(["architecture","platformVersion"]).then(({architecture:s,platformVersion:n})=>/arm/i.test(s||"arm")&&13<=parseInt(n||"13")).catch(()=>!0)?e():new BarcodeDetector({formats:["qr_code"]})}_onPlay(){this._scanRegion=this._calculateScanRegion(this.$video),this._updateOverlay(),this.$overlay&&(this.$overlay.style.display=""),this._scanFrame()}_onLoadedMetaData(){this._scanRegion=this._calculateScanRegion(this.$video),this._updateOverlay()}_onVisibilityChange(){document.hidden?this.pause():this._active&&this.start()}_calculateScanRegion(e){let t=Math.round(.6666666666666666*Math.min(e.videoWidth,e.videoHeight));return{x:Math.round((e.videoWidth-t)/2),y:Math.round((e.videoHeight-t)/2),width:t,height:t,downScaledWidth:this._legacyCanvasSize,downScaledHeight:this._legacyCanvasSize}}_updateOverlay(){requestAnimationFrame(()=>{if(this.$overlay){var e=this.$video,t=e.videoWidth,s=e.videoHeight,n=e.offsetWidth,r=e.offsetHeight,a=e.offsetLeft,o=e.offsetTop,c=window.getComputedStyle(e),u=c.objectFit,d=t/s,f=n/r;switch(u){case"none":var h=t,g=s;break;case"fill":h=n,g=r;break;default:(u==="cover"?d>f:d<f)?(g=r,h=g*d):(h=n,g=h/d),u==="scale-down"&&(h=Math.min(h,t),g=Math.min(g,s))}var[E,$]=c.objectPosition.split(" ").map((w,T)=>{const R=parseFloat(w);return w.endsWith("%")?(T?r-g:n-h)*R/100:R});c=this._scanRegion.width||t,f=this._scanRegion.height||s,u=this._scanRegion.x||0;var C=this._scanRegion.y||0;d=this.$overlay.style,d.width=`${c/t*h}px`,d.height=`${f/s*g}px`,d.top=`${o+$+C/s*g}px`,s=/scaleX\(-1\)/.test(e.style.transform),d.left=`${a+(s?n-E-h:E)+(s?t-u-c:u)/t*h}px`,d.transform=e.style.transform}})}static _convertPoints(e,t){if(!t)return e;let s=t.x||0,n=t.y||0,r=t.width&&t.downScaledWidth?t.width/t.downScaledWidth:1;t=t.height&&t.downScaledHeight?t.height/t.downScaledHeight:1;for(let a of e)a.x=a.x*r+s,a.y=a.y*t+n;return e}_scanFrame(){!this._active||this.$video.paused||this.$video.ended||("requestVideoFrameCallback"in this.$video?this.$video.requestVideoFrameCallback.bind(this.$video):requestAnimationFrame)(async()=>{if(!(1>=this.$video.readyState)){var e=Date.now()-this._lastScanTimestamp,t=1e3/this._maxScansPerSecond;e<t&&await new Promise(n=>setTimeout(n,t-e)),this._lastScanTimestamp=Date.now();try{var s=await l.scanImage(this.$video,{scanRegion:this._scanRegion,qrEngine:this._qrEnginePromise,canvas:this.$canvas})}catch(n){if(!this._active)return;this._onDecodeError(n)}!l._disableBarcodeDetector||await this._qrEnginePromise instanceof Worker||(this._qrEnginePromise=l.createQrEngine()),s?(this._onDecode?this._onDecode(s):this._legacyOnDecode&&this._legacyOnDecode(s.data),this.$codeOutlineHighlight&&(clearTimeout(this._codeOutlineHighlightRemovalTimeout),this._codeOutlineHighlightRemovalTimeout=void 0,this.$codeOutlineHighlight.setAttribute("viewBox",`${this._scanRegion.x||0} ${this._scanRegion.y||0} ${this._scanRegion.width||this.$video.videoWidth} ${this._scanRegion.height||this.$video.videoHeight}`),this.$codeOutlineHighlight.firstElementChild.setAttribute("points",s.cornerPoints.map(({x:n,y:r})=>`${n},${r}`).join(" ")),this.$codeOutlineHighlight.style.display="")):this.$codeOutlineHighlight&&!this._codeOutlineHighlightRemovalTimeout&&(this._codeOutlineHighlightRemovalTimeout=setTimeout(()=>this.$codeOutlineHighlight.style.display="none",100))}this._scanFrame()})}_onDecodeError(e){e!==l.NO_QR_CODE_FOUND&&console.log(e)}async _getCameraStream(){if(!navigator.mediaDevices)throw"Camera not found.";let e=/^(environment|user)$/.test(this._preferredCamera)?"facingMode":"deviceId",t=[{width:{min:1024}},{width:{min:768}},{}],s=t.map(n=>Object.assign({},n,{[e]:{exact:this._preferredCamera}}));for(let n of[...s,...t])try{let r=await navigator.mediaDevices.getUserMedia({video:n,audio:!1}),a=this._getFacingMode(r)||(n.facingMode?this._preferredCamera:this._preferredCamera==="environment"?"user":"environment");return{stream:r,facingMode:a}}catch{}throw"Camera not found."}async _restartVideoStream(){let e=this._paused;await this.pause(!0)&&!e&&this._active&&await this.start()}static _stopVideoStream(e){for(let t of e.getTracks())t.stop(),e.removeTrack(t)}_setVideoMirror(e){this.$video.style.transform="scaleX("+(e==="user"?-1:1)+")"}_getFacingMode(e){return(e=e.getVideoTracks()[0])?/rear|back|environment/i.test(e.label)?"environment":/front|user|face/i.test(e.label)?"user":null:null}static _drawToCanvas(e,t,s,n=!1){s=s||document.createElement("canvas");let r=t&&t.x?t.x:0,a=t&&t.y?t.y:0,o=t&&t.width?t.width:e.videoWidth||e.width,c=t&&t.height?t.height:e.videoHeight||e.height;return n||(n=t&&t.downScaledWidth?t.downScaledWidth:o,t=t&&t.downScaledHeight?t.downScaledHeight:c,s.width!==n&&(s.width=n),s.height!==t&&(s.height=t)),t=s.getContext("2d",{alpha:!1}),t.imageSmoothingEnabled=!1,t.drawImage(e,r,a,o,c,0,0,s.width,s.height),[s,t]}static async _loadImage(e){if(e instanceof Image)return await l._awaitImageLoad(e),e;if(e instanceof HTMLVideoElement||e instanceof HTMLCanvasElement||e instanceof SVGImageElement||"OffscreenCanvas"in window&&e instanceof OffscreenCanvas||"ImageBitmap"in window&&e instanceof ImageBitmap)return e;if(e instanceof File||e instanceof Blob||e instanceof URL||typeof e=="string"){let t=new Image;t.src=e instanceof File||e instanceof Blob?URL.createObjectURL(e):e.toString();try{return await l._awaitImageLoad(t),t}finally{(e instanceof File||e instanceof Blob)&&URL.revokeObjectURL(t.src)}}else throw"Unsupported image type."}static async _awaitImageLoad(e){e.complete&&e.naturalWidth!==0||await new Promise((t,s)=>{let n=r=>{e.removeEventListener("load",n),e.removeEventListener("error",n),r instanceof ErrorEvent?s("Image load error"):t()};e.addEventListener("load",n),e.addEventListener("error",n)})}static async _postWorkerMessage(e,t,s,n){return l._postWorkerMessageSync(await e,t,s,n)}static _postWorkerMessageSync(e,t,s,n){if(!(e instanceof Worker))return-1;let r=l._workerMessageId++;return e.postMessage({id:r,type:t,data:s},n),r}}l.DEFAULT_CANVAS_SIZE=400;l.NO_QR_CODE_FOUND="No QR code found";l._disableBarcodeDetector=!1;l._workerMessageId=0;var ve=X('<div><video class="w-full h-full aspect-square">'),ye=X("<div><h1>QR Code Scanner</h1><p>QR Code Content: ");const we=()=>{let i;const[e,t]=te(null);let s=null;return se(()=>{i&&(s=new l(i,n=>t(n)),s.start())}),ne(()=>{s?.stop()}),[(()=>{var n=ve(),r=n.firstChild,a=i;return typeof a=="function"?fe(a,r):i=r,n})(),(()=>{var n=ye(),r=n.firstChild,a=r.nextSibling;return a.firstChild,Y(a,e,null),n})()]},_e=document.getElementById("root");ue(()=>he(we,{}),_e);
