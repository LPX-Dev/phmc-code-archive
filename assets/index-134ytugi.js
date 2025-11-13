const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/deathReport-CXcHNuTI.js","assets/bootstrap-BmKVvN9Q.js","assets/react-7MU6i0XA.js","assets/ImagePreview-Dm01e4sS.js","assets/EmployeeCredentialsSection-Dt5SJN4G.js","assets/vendor-mmIjhQJT.js","assets/CoronerEmail-BqNouftK.js","assets/PhysEvalPHMC-CpgtK-4A.js","assets/GeneralConsult-C-SqmLEe.js","assets/EmergencyForm-Ihzsdswy.js","assets/devTest-B8FvJgpu.js","assets/CommNotePHMC-DSg3gK5A.js","assets/CommNotePBC-DGWqtbrV.js","assets/PatientFile-CFdHdHU5.js","assets/CharacterSelector-CArQCUR8.js","assets/phmc-tooltips-DSm5XPCd.css","assets/MentalHealth-BGG0qvGn.js","assets/EmailInternal-BZ_q_tdr.js","assets/Surgical-C9TPgSKT.js","assets/MedicalRecords-CgaGV8g3.js","assets/Shrink-DyY7vFGe.js","assets/Autopsy-9yNNXopr.js","assets/Certificate-C3Dl_XhM.js","assets/MassFatality-BhBcPb6W.js","assets/DeathRecord-6PSFompa.js","assets/SicknessEmail-Bg6QUPre.js","assets/Physician-ClZmVcH7.js","assets/Psych-BXot0KJo.js","assets/Admin-Bn9o3FDR.js","assets/Nursing-BcLdDMF1.js","assets/Coroner-BbdZlVEI.js","assets/Ems-_U9Ul6Qp.js","assets/SavedReportsModal-DYUrP8rS.js","assets/AgencyGroupSelectorModal-yMTRceUv.js","assets/AgencySelector-DH7HcNSp.js","assets/OnboardingModal-muyZHJXS.js","assets/Footer-l6YCAUm-.js","assets/Footer-R0gwHjSw.css","assets/HeaderInfo-DjHLAOcr.js","assets/BusinessCardModal-DK4GJOIE.js","assets/BusinessCardModal-DjRNNxmH.css","assets/EmsAmaModal-BbYKrKH1.js","assets/EmsAmaModal-JuhzJSqW.css","assets/EasterEggModal-JHUKQqi1.js","assets/SwitchableFormsModal-BTq0PSbo.js","assets/EmployeeModal-1q74J87s.js","assets/RecruitmentStatusDisplay-5tM6x_43.js","assets/FeatureRequestModal-Dg-yyQux.js","assets/FeatureRequestModal-DBP6z2ga.css","assets/FormImageLink-Do24PBOW.js","assets/EmsBingoModal-LPI1WfEY.js","assets/EmsBingoModal-CZNfhoO9.css","assets/EmployeeDetailsModal-BHit1Zcx.js","assets/BasicPatientFile-sInl949D.js"])))=>i.map(i=>d[i]);
import{r as b,j as i,B as de,F as pe,S as Qe,e as vl,M as _t,L as Pd,A as Et,C as vn,f as Vo,T as dg,g as $d,h as fr,i as ea,d as ug,D as An}from"./bootstrap-BmKVvN9Q.js";import{S as jh,l as Dd,c as Ze,u as Ua,a as hg,N as Lh,b as sn,d as mg,_ as Te,e as Uh,E as pg,H as fg,R as gg,f as zs,i as bg,g as yg,r as vg,h as _g,j as Cg}from"./vendor-mmIjhQJT.js";import"./react-7MU6i0XA.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const Sg=()=>{};var Od={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bh={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ie=function(t,e){if(!t)throw pi(e)},pi=function(t){return new Error("Firebase Database ("+Bh.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hh=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},wg=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=t[n++];e[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=t[n++],a=t[n++],l=t[n++],d=((s&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(d>>10)),e[r++]=String.fromCharCode(56320+(d&1023))}else{const o=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return e.join("")},_l={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const o=t[s],a=s+1<t.length,l=a?t[s+1]:0,d=s+2<t.length,u=d?t[s+2]:0,p=o>>2,f=(o&3)<<4|l>>4;let g=(l&15)<<2|u>>6,S=u&63;d||(S=64,a||(g=64)),r.push(n[p],n[f],n[g],n[S])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Hh(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):wg(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const o=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,o==null||l==null||u==null||f==null)throw new Eg;const g=o<<2|l>>4;if(r.push(g),u!==64){const S=l<<4&240|u>>2;if(r.push(S),f!==64){const _=u<<6&192|f;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Eg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Gh=function(t){const e=Hh(t);return _l.encodeByteArray(e,!0)},la=function(t){return Gh(t).replace(/\./g,"")},da=function(t){try{return _l.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ng(t){return Wh(void 0,t)}function Wh(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!xg(n)||(t[n]=Wh(t[n],e[n]));return t}function xg(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ag(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig=()=>Ag().__FIREBASE_DEFAULTS__,Tg=()=>{if(typeof process>"u"||typeof Od>"u")return;const t=Od.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Rg=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&da(t[1]);return e&&JSON.parse(e)},Cl=()=>{try{return Sg()||Ig()||Tg()||Rg()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},zh=t=>Cl()?.emulatorHosts?.[t],Sl=t=>{const e=zh(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},qh=()=>Cl()?.config,Vh=t=>Cl()?.[`_${t}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ba(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yh(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...t};return[la(JSON.stringify(n)),la(JSON.stringify(a)),""].join(".")}const Ui={};function kg(){const t={prod:[],emulator:[]};for(const e of Object.keys(Ui))Ui[e]?t.emulator.push(e):t.prod.push(e);return t}function Fg(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Md=!1;function Ha(t,e){if(typeof window>"u"||typeof document>"u"||!Ir(window.location.host)||Ui[t]===e||Ui[t]||Md)return;Ui[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",o=kg().prod.length>0;function a(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function d(g,S){g.setAttribute("width","24"),g.setAttribute("id",S),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function u(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{Md=!0,a()},g}function p(g,S){g.setAttribute("id",S),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function f(){const g=Fg(r),S=n("text"),_=document.getElementById(S)||document.createElement("span"),I=n("learnmore"),F=document.getElementById(I)||document.createElement("a"),P=n("preprendIcon"),k=document.getElementById(P)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const D=g.element;l(D),p(F,I);const R=u();d(k,P),D.append(k,_,F,R),document.body.appendChild(D)}o?(_.innerText="Preview backend disconnected.",k.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(k.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,_.innerText="Preview backend running in this workspace."),_.setAttribute("id",S)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function wl(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(mn())}function Pg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Kh(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Jh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $g(){const t=mn();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Dg(){return Bh.NODE_ADMIN===!0}function Xh(){try{return typeof indexedDB=="object"}catch{return!1}}function Qh(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(n){e(n)}})}function Og(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mg="FirebaseError";class kn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Mg,Object.setPrototypeOf(this,kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Is.prototype.create)}}class Is{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,o=this.errors[e],a=o?jg(o,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new kn(s,l,r)}}function jg(t,e){return t.replace(Lg,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Lg=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(t){return JSON.parse(t)}function Lt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh=function(t){let e={},n={},r={},s="";try{const o=t.split(".");e=Qi(da(o[0])||""),n=Qi(da(o[1])||""),s=o[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},Ug=function(t){const e=Zh(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Bg=function(t){const e=Zh(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ii(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Hc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ua(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function Er(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const o=t[s],a=e[s];if(jd(o)&&jd(a)){if(!Er(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function jd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Oi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,o]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(o)}}),e}function Mi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const g=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(g<<1|g>>>31)&4294967295}let s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],d=this.chain_[4],u,p;for(let f=0;f<80;f++){f<40?f<20?(u=l^o&(a^l),p=1518500249):(u=o^a^l,p=1859775393):f<60?(u=o&a|l&(o|a),p=2400959708):(u=o^a^l,p=3395469782);const g=(s<<5|s>>>27)+u+d+p+r[f]&4294967295;d=l,l=a,a=(o<<30|o>>>2)&4294967295,o=s,s=g}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+d&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const o=this.buf_;let a=this.inbuf_;for(;s<n;){if(a===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(o[a]=e.charCodeAt(s),++a,++s,a===this.blockSize){this.compress_(o),a=0;break}}else for(;s<n;)if(o[a]=e[s],++a,++s,a===this.blockSize){this.compress_(o),a=0;break}}this.inbuf_=a,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let o=24;o>=0;o-=8)e[r]=this.chain_[s]>>o&255,++r;return e}}function Gg(t,e){const n=new Wg(t,e);return n.subscribe.bind(n)}class Wg{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");zg(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=fc),s.error===void 0&&(s.error=fc),s.complete===void 0&&(s.complete=fc);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zg(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function fc(){}function Ga(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const o=s-55296;r++,ie(r<t.length,"Surrogate pair missing trail surrogate.");const a=t.charCodeAt(r)-56320;s=65536+(o<<10)+a}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Wa=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg=1e3,Yg=2,Kg=14400*1e3,Jg=.5;function Ld(t,e=Vg,n=Yg){const r=e*Math.pow(n,t),s=Math.round(Jg*r*(Math.random()-.5)*2);return Math.min(Kg,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(t){return t&&t._delegate?t._delegate:t}class Nn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new mo;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Zg(e))try{this.getOrInitializeService({instanceIdentifier:hs})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(e=hs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=hs){return this.instances.has(e)}getOptions(e=hs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&a.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Qg(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=hs){return this.component?this.component.multipleInstances?e:hs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Qg(t){return t===hs?void 0:t}function Zg(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Xg(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var dt;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(dt||(dt={}));const tb={debug:dt.DEBUG,verbose:dt.VERBOSE,info:dt.INFO,warn:dt.WARN,error:dt.ERROR,silent:dt.SILENT},nb=dt.INFO,rb={[dt.DEBUG]:"log",[dt.VERBOSE]:"log",[dt.INFO]:"info",[dt.WARN]:"warn",[dt.ERROR]:"error"},sb=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=rb[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class po{constructor(e){this.name=e,this._logLevel=nb,this._logHandler=sb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in dt))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?tb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,dt.DEBUG,...e),this._logHandler(this,dt.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,dt.VERBOSE,...e),this._logHandler(this,dt.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,dt.INFO,...e),this._logHandler(this,dt.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,dt.WARN,...e),this._logHandler(this,dt.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,dt.ERROR,...e),this._logHandler(this,dt.ERROR,...e)}}const ib=(t,e)=>e.some(n=>t instanceof n);let Ud,Bd;function ob(){return Ud||(Ud=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ab(){return Bd||(Bd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const em=new WeakMap,Gc=new WeakMap,tm=new WeakMap,gc=new WeakMap,El=new WeakMap;function cb(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",o),t.removeEventListener("error",a)},o=()=>{n(Hr(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",o),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&em.set(n,t)}).catch(()=>{}),El.set(e,t),e}function lb(t){if(Gc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",a),t.removeEventListener("abort",a)},o=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",o),t.addEventListener("error",a),t.addEventListener("abort",a)});Gc.set(t,e)}let Wc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Gc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||tm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Hr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function db(t){Wc=t(Wc)}function ub(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(bc(this),e,...n);return tm.set(r,e.sort?e.sort():[e]),Hr(r)}:ab().includes(t)?function(...e){return t.apply(bc(this),e),Hr(em.get(this))}:function(...e){return Hr(t.apply(bc(this),e))}}function hb(t){return typeof t=="function"?ub(t):(t instanceof IDBTransaction&&lb(t),ib(t,ob())?new Proxy(t,Wc):t)}function Hr(t){if(t instanceof IDBRequest)return cb(t);if(gc.has(t))return gc.get(t);const e=hb(t);return e!==t&&(gc.set(t,e),El.set(e,t)),e}const bc=t=>El.get(t);function nm(t,e,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(t,e),l=Hr(a);return r&&a.addEventListener("upgradeneeded",d=>{r(Hr(a.result),d.oldVersion,d.newVersion,Hr(a.transaction),d)}),n&&a.addEventListener("blocked",d=>n(d.oldVersion,d.newVersion,d)),l.then(d=>{o&&d.addEventListener("close",()=>o()),s&&d.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const mb=["get","getKey","getAll","getAllKeys","count"],pb=["put","add","delete","clear"],yc=new Map;function Hd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(yc.get(e))return yc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=pb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||mb.includes(n)))return;const o=async function(a,...l){const d=this.transaction(a,s?"readwrite":"readonly");let u=d.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&d.done]))[0]};return yc.set(e,o),o}db(t=>({...t,get:(e,n,r)=>Hd(e,n)||t.get(e,n,r),has:(e,n)=>!!Hd(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(gb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function gb(t){return t.getComponent()?.type==="VERSION"}const zc="@firebase/app",Gd="0.14.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr=new po("@firebase/app"),bb="@firebase/app-compat",yb="@firebase/analytics-compat",vb="@firebase/analytics",_b="@firebase/app-check-compat",Cb="@firebase/app-check",Sb="@firebase/auth",wb="@firebase/auth-compat",Eb="@firebase/database",Nb="@firebase/data-connect",xb="@firebase/database-compat",Ab="@firebase/functions",Ib="@firebase/functions-compat",Tb="@firebase/installations",Rb="@firebase/installations-compat",kb="@firebase/messaging",Fb="@firebase/messaging-compat",Pb="@firebase/performance",$b="@firebase/performance-compat",Db="@firebase/remote-config",Ob="@firebase/remote-config-compat",Mb="@firebase/storage",jb="@firebase/storage-compat",Lb="@firebase/firestore",Ub="@firebase/ai",Bb="@firebase/firestore-compat",Hb="firebase",Gb="12.5.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qc="[DEFAULT]",Wb={[zc]:"fire-core",[bb]:"fire-core-compat",[vb]:"fire-analytics",[yb]:"fire-analytics-compat",[Cb]:"fire-app-check",[_b]:"fire-app-check-compat",[Sb]:"fire-auth",[wb]:"fire-auth-compat",[Eb]:"fire-rtdb",[Nb]:"fire-data-connect",[xb]:"fire-rtdb-compat",[Ab]:"fire-fn",[Ib]:"fire-fn-compat",[Tb]:"fire-iid",[Rb]:"fire-iid-compat",[kb]:"fire-fcm",[Fb]:"fire-fcm-compat",[Pb]:"fire-perf",[$b]:"fire-perf-compat",[Db]:"fire-rc",[Ob]:"fire-rc-compat",[Mb]:"fire-gcs",[jb]:"fire-gcs-compat",[Lb]:"fire-fst",[Bb]:"fire-fst-compat",[Ub]:"fire-vertex","fire-js":"fire-js",[Hb]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha=new Map,zb=new Map,Vc=new Map;function Wd(t,e){try{t.container.addComponent(e)}catch(n){Nr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Tn(t){const e=t.name;if(Vc.has(e))return Nr.debug(`There were multiple attempts to register component ${e}.`),!1;Vc.set(e,t);for(const n of ha.values())Wd(n,t);for(const n of zb.values())Wd(n,t);return!0}function Tr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function wn(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Gr=new Is("app","Firebase",qb);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Nn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts=Gb;function rm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:qc,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Gr.create("bad-app-name",{appName:String(s)});if(n||(n=qh()),!n)throw Gr.create("no-options");const o=ha.get(s);if(o){if(Er(n,o.options)&&Er(r,o.config))return o;throw Gr.create("duplicate-app",{appName:s})}const a=new eb(s);for(const d of Vc.values())a.addComponent(d);const l=new Vb(n,r,a);return ha.set(s,l),l}function fo(t=qc){const e=ha.get(t);if(!e&&t===qc&&qh())return rm();if(!e)throw Gr.create("no-app",{appName:t});return e}function rn(t,e,n){let r=Wb[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Nr.warn(a.join(" "));return}Tn(new Nn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yb="firebase-heartbeat-database",Kb=1,Zi="firebase-heartbeat-store";let vc=null;function sm(){return vc||(vc=nm(Yb,Kb,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Zi)}catch(n){console.warn(n)}}}}).catch(t=>{throw Gr.create("idb-open",{originalErrorMessage:t.message})})),vc}async function Jb(t){try{const n=(await sm()).transaction(Zi),r=await n.objectStore(Zi).get(im(t));return await n.done,r}catch(e){if(e instanceof kn)Nr.warn(e.message);else{const n=Gr.create("idb-get",{originalErrorMessage:e?.message});Nr.warn(n.message)}}}async function zd(t,e){try{const r=(await sm()).transaction(Zi,"readwrite");await r.objectStore(Zi).put(e,im(t)),await r.done}catch(n){if(n instanceof kn)Nr.warn(n.message);else{const r=Gr.create("idb-set",{originalErrorMessage:n?.message});Nr.warn(r.message)}}}function im(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xb=1024,Qb=30;class Zb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ty(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=qd();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>Qb){const s=ny(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Nr.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=qd(),{heartbeatsToSend:n,unsentEntries:r}=ey(this._heartbeatsCache.heartbeats),s=la(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return Nr.warn(e),""}}}function qd(){return new Date().toISOString().substring(0,10)}function ey(t,e=Xb){const n=[];let r=t.slice();for(const s of t){const o=n.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),Vd(n)>e){o.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Vd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ty{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xh()?Qh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Jb(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return zd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return zd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Vd(t){return la(JSON.stringify({version:2,heartbeats:t})).length}function ny(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ry(t){Tn(new Nn("platform-logger",e=>new fb(e),"PRIVATE")),Tn(new Nn("heartbeat",e=>new Zb(e),"PRIVATE")),rn(zc,Gd,t),rn(zc,Gd,"esm2020"),rn("fire-js","")}ry("");var sy="firebase",iy="12.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rn(sy,iy,"app");var Yd={};const Kd="@firebase/database",Jd="1.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let om="";function oy(t){om=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Lt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Qi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return dr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const am=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new ay(e)}}catch{}return new cy},fs=am("localStorage"),ly=am("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js=new po("@firebase/database"),dy=(function(){let t=1;return function(){return t++}})(),cm=function(t){const e=qg(t),n=new Hg;n.update(e);const r=n.digest();return _l.encodeByteArray(r)},go=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=go.apply(null,r):typeof r=="object"?e+=Lt(r):e+=r,e+=" "}return e};let Bi=null,Xd=!0;const uy=function(t,e){ie(!0,"Can't turn on custom loggers persistently."),Js.logLevel=dt.VERBOSE,Bi=Js.log.bind(Js)},Yt=function(...t){if(Xd===!0&&(Xd=!1,Bi===null&&ly.get("logging_enabled")===!0&&uy()),Bi){const e=go.apply(null,t);Bi(e)}},bo=function(t){return function(...e){Yt(t,...e)}},Yc=function(...t){const e="FIREBASE INTERNAL ERROR: "+go(...t);Js.error(e)},xr=function(...t){const e=`FIREBASE FATAL ERROR: ${go(...t)}`;throw Js.error(e),new Error(e)},un=function(...t){const e="FIREBASE WARNING: "+go(...t);Js.warn(e)},hy=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&un("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Nl=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},my=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},oi="[MIN_NAME]",Cs="[MAX_NAME]",Rs=function(t,e){if(t===e)return 0;if(t===oi||e===Cs)return-1;if(e===oi||t===Cs)return 1;{const n=Qd(t),r=Qd(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},py=function(t,e){return t===e?0:t<e?-1:1},ki=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Lt(e))},xl=function(t){if(typeof t!="object"||t===null)return Lt(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Lt(e[r]),n+=":",n+=xl(t[e[r]]);return n+="}",n},lm=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function Kt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const dm=function(t){ie(!Nl(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,o,a,l,d;t===0?(o=0,a=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),o=l+r,a=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(o=0,a=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(d=n;d;d-=1)u.push(a%2?1:0),a=Math.floor(a/2);for(d=e;d;d-=1)u.push(o%2?1:0),o=Math.floor(o/2);u.push(s?1:0),u.reverse();const p=u.join("");let f="";for(d=0;d<64;d+=8){let g=parseInt(p.substr(d,8),2).toString(16);g.length===1&&(g="0"+g),f=f+g}return f.toLowerCase()},fy=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},gy=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function by(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const yy=new RegExp("^-?(0*)\\d{1,10}$"),vy=-2147483648,_y=2147483647,Qd=function(t){if(yy.test(t)){const e=Number(t);if(e>=vy&&e<=_y)return e}return null},gi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw un("Exception was thrown by user callback.",n),e},Math.floor(0))}},Cy=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Hi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,wn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n?.getImmediate({optional:!0}),this.appCheck||n?.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(n=>n.addTokenListener(e))}notifyForInvalidToken(){un(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Yt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',un(e)}}class ta{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ta.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al="5",um="v",hm="s",mm="r",pm="f",fm=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,gm="ls",bm="p",Kc="ac",ym="websocket",vm="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(e,n,r,s,o=!1,a="",l=!1,d=!1,u=null){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=o,this.persistenceKey=a,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=d,this.emulatorOptions=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=fs.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&fs.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Ey(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Cm(t,e,n){ie(typeof e=="string","typeof type must == string"),ie(typeof n=="object","typeof params must == object");let r;if(e===ym)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===vm)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Ey(t)&&(n.ns=t.namespace);const s=[];return Kt(n,(o,a)=>{s.push(o+"="+a)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(){this.counters_={}}incrementCounter(e,n=1){dr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Ng(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c={},Cc={};function Il(t){const e=t.toString();return _c[e]||(_c[e]=new Ny),_c[e]}function xy(t,e){const n=t.toString();return Cc[n]||(Cc[n]=e()),Cc[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&gi(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zd="start",Iy="close",Ty="pLPCommand",Ry="pRTLPCB",Sm="id",wm="pw",Em="ser",ky="cb",Fy="seg",Py="ts",$y="d",Dy="dframe",Nm=1870,xm=30,Oy=Nm-xm,My=25e3,jy=3e4;class Ys{constructor(e,n,r,s,o,a,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=o,this.transportSessionId=a,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=bo(e),this.stats_=Il(n),this.urlFn=d=>(this.appCheckToken&&(d[Kc]=this.appCheckToken),Cm(n,vm,d))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Ay(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(jy)),my(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Tl((...o)=>{const[a,l,d,u,p]=o;if(this.incrementIncomingBytes_(o),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,a===Zd)this.id=l,this.password=d;else if(a===Iy)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+a)},(...o)=>{const[a,l]=o;this.incrementIncomingBytes_(o),this.myPacketOrderer.handleResponse(a,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Zd]="t",r[Em]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[ky]=this.scriptTagHolder.uniqueCallbackIdentifier),r[um]=Al,this.transportSessionId&&(r[hm]=this.transportSessionId),this.lastSessionId&&(r[gm]=this.lastSessionId),this.applicationId&&(r[bm]=this.applicationId),this.appCheckToken&&(r[Kc]=this.appCheckToken),typeof location<"u"&&location.hostname&&fm.test(location.hostname)&&(r[mm]=pm);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ys.forceAllow_=!0}static forceDisallow(){Ys.forceDisallow_=!0}static isAvailable(){return Ys.forceAllow_?!0:!Ys.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!fy()&&!gy()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Lt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Gh(n),s=lm(r,Oy);for(let o=0;o<s.length;o++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[o]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[Dy]="t",r[Sm]=e,r[wm]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Lt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Tl{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=dy(),window[Ty+this.uniqueCallbackIdentifier]=e,window[Ry+this.uniqueCallbackIdentifier]=n,this.myIFrame=Tl.createIFrame_();let o="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(o='<script>document.domain="'+document.domain+'";<\/script>');const a="<html><body>"+o+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(a),this.myIFrame.doc.close()}catch(l){Yt("frame writing exception"),l.stack&&Yt(l.stack),Yt(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Yt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Sm]=this.myID,e[wm]=this.myPW,e[Em]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+xm+r.length<=Nm;){const a=this.pendingSegs.shift();r=r+"&"+Fy+s+"="+a.seg+"&"+Py+s+"="+a.ts+"&"+$y+s+"="+a.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(My)),o=()=>{clearTimeout(s),r()};this.addTag(e,o)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Yt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ly=16384,Uy=45e3;let ma=null;typeof MozWebSocket<"u"?ma=MozWebSocket:typeof WebSocket<"u"&&(ma=WebSocket);class zn{constructor(e,n,r,s,o,a,l){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=o,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=bo(this.connId),this.stats_=Il(n),this.connURL=zn.connectionURL_(n,a,l,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,o){const a={};return a[um]=Al,typeof location<"u"&&location.hostname&&fm.test(location.hostname)&&(a[mm]=pm),n&&(a[hm]=n),r&&(a[gm]=r),s&&(a[Kc]=s),o&&(a[bm]=o),Cm(e,ym,a)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,fs.set("previous_websocket_failure",!0);try{let r;Dg(),this.mySock=new ma(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){zn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&ma!==null&&!zn.forceDisallow_}static previouslyFailed(){return fs.isInMemoryStorage||fs.get("previous_websocket_failure")===!0}markConnectionHealthy(){fs.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Qi(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(ie(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Lt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=lm(n,Ly);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Uy))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}zn.responsesRequiredToBeHealthy=2;zn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{static get ALL_TRANSPORTS(){return[Ys,zn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=zn&&zn.isAvailable();let r=n&&!zn.previouslyFailed();if(e.webSocketOnly&&(n||un("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[zn];else{const s=this.transports_=[];for(const o of eo.ALL_TRANSPORTS)o&&o.isAvailable()&&s.push(o);eo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}eo.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By=6e4,Hy=5e3,Gy=10*1024,Wy=100*1024,Sc="t",eu="d",zy="s",tu="r",qy="e",nu="o",ru="a",su="n",iu="p",Vy="h";class Yy{constructor(e,n,r,s,o,a,l,d,u,p){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=o,this.onMessage_=a,this.onReady_=l,this.onDisconnect_=d,this.onKill_=u,this.lastSessionId=p,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=bo("c:"+this.id+":"),this.transportManager_=new eo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Hi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Wy?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Gy?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Sc in e){const n=e[Sc];n===ru?this.upgradeIfSecondaryHealthy_():n===tu?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===nu&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ki("t",e),r=ki("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:iu,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ru,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:su,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ki("t",e),r=ki("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ki(Sc,e);if(eu in e){const r=e[eu];if(n===Vy){const s={...r};this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===su){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===zy?this.onConnectionShutdown_(r):n===tu?this.onReset_(r):n===qy?Yc("Server Error: "+r):n===nu?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Yc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Al!==r&&un("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Hi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(By))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Hi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Hy))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:iu,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(fs.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e){this.allowedEvents_=e,this.listeners_={},ie(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let o=0;o<s.length;o++)if(s[o].callback===n&&(!r||r===s[o].context)){s.splice(o,1);return}}validateEventType_(e){ie(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa extends Im{static getInstance(){return new pa}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!wl()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return ie(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou=32,au=768;class pt{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function it(){return new pt("")}function qe(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Vr(t){return t.pieces_.length-t.pieceNum_}function gt(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new pt(t.pieces_,e)}function Rl(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Ky(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function to(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Tm(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new pt(e,0)}function Nt(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof pt)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new pt(n,0)}function Ke(t){return t.pieceNum_>=t.pieces_.length}function dn(t,e){const n=qe(t),r=qe(e);if(n===null)return e;if(n===r)return dn(gt(t),gt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Jy(t,e){const n=to(t,0),r=to(e,0);for(let s=0;s<n.length&&s<r.length;s++){const o=Rs(n[s],r[s]);if(o!==0)return o}return n.length===r.length?0:n.length<r.length?-1:1}function kl(t,e){if(Vr(t)!==Vr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function In(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Vr(t)>Vr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class Xy{constructor(e,n){this.errorPrefix_=n,this.parts_=to(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Wa(this.parts_[r]);Rm(this)}}function Qy(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Wa(e),Rm(t)}function Zy(t){const e=t.parts_.pop();t.byteLength_-=Wa(e),t.parts_.length>0&&(t.byteLength_-=1)}function Rm(t){if(t.byteLength_>au)throw new Error(t.errorPrefix_+"has a key path longer than "+au+" bytes ("+t.byteLength_+").");if(t.parts_.length>ou)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ou+") or object contains a cycle "+ms(t))}function ms(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl extends Im{static getInstance(){return new Fl}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return ie(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi=1e3,ev=300*1e3,cu=30*1e3,tv=1.3,nv=3e4,rv="server_kill",lu=3;class Sr extends Am{constructor(e,n,r,s,o,a,l,d){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=o,this.authTokenProvider_=a,this.appCheckTokenProvider_=l,this.authOverride_=d,this.id=Sr.nextPersistentConnectionId_++,this.log_=bo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Fi,this.maxReconnectDelay_=ev,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,d)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Fl.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&pa.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,o={r:s,a:e,b:n};this.log_(Lt(o)),ie(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(o),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new mo,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:a=>{const l=a.d;a.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const o=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(o),n.promise}listen(e,n,r,s){this.initConnection_();const o=e._queryIdentifier,a=e._path.toString();this.log_("Listen called for "+a+" "+o),this.listens.has(a)||this.listens.set(a,new Map),ie(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),ie(!this.listens.get(a).has(o),"listen() called twice for same path/queryId.");const l={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(a).set(o,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const o={p:r},a="q";e.tag&&(o.q=n._queryObject,o.t=e.tag),o.h=e.hashFn(),this.sendRequest(a,o,l=>{const d=l.d,u=l.s;Sr.warnOnListenWarnings_(d,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(u,d))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&dr(e,"w")){const r=ii(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',o=n._path.toString();un(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${o} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Bg(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=cu)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Ug(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const o=s.s,a=s.d||"error";this.authToken_===e&&(o==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(o,a))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),ie(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const o={p:e},a="n";s&&(o.q=r,o.t=s),this.sendRequest(a,o)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const o={p:n,d:r};this.log_("onDisconnect "+e,o),this.sendRequest(e,o,a=>{s&&setTimeout(()=>{s(a.s,a.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,o){this.initConnection_();const a={p:n,d:r};o!==void 0&&(a.h=o),this.outstandingPuts_.push({action:e,request:a,onComplete:s}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,o=>{this.log_(n+" response",o),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(o.s,o.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const o=r.d;this.log_("reportStats","Error sending stats: "+o)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Lt(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Yc("Unrecognized action received from server: "+Lt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){ie(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Fi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Fi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>nv&&(this.reconnectDelay_=Fi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*tv)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Sr.nextConnectionId_++,o=this.lastSessionId;let a=!1,l=null;const d=function(){l?l.close():(a=!0,r())},u=function(f){ie(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(f)};this.realtime_={close:d,sendRequest:u};const p=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,g]=await Promise.all([this.authTokenProvider_.getToken(p),this.appCheckTokenProvider_.getToken(p)]);a?Yt("getToken() completed but was canceled"):(Yt("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=g&&g.token,l=new Yy(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,S=>{un(S+" ("+this.repoInfo_.toString()+")"),this.interrupt(rv)},o))}catch(f){this.log_("Failed to get token: "+f),a||(this.repoInfo_.nodeAdmin&&un(f),d())}}}interrupt(e){Yt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Yt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Hc(this.interruptReasons_)&&(this.reconnectDelay_=Fi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(o=>xl(o)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new pt(e).toString();let s;if(this.listens.has(r)){const o=this.listens.get(r);s=o.get(n),o.delete(n),o.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){Yt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=lu&&(this.reconnectDelay_=cu,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Yt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=lu&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+om.replace(/\./g,"-")]=1,wl()?e["framework.cordova"]=1:Jh()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=pa.getInstance().currentlyOnline();return Hc(this.interruptReasons_)&&e}}Sr.nextPersistentConnectionId_=0;Sr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Ve(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new Ve(oi,e),s=new Ve(oi,n);return this.compare(r,s)!==0}minPost(){return Ve.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yo;class km extends za{static get __EMPTY_NODE(){return Yo}static set __EMPTY_NODE(e){Yo=e}compare(e,n){return Rs(e.name,n.name)}isDefinedOn(e){throw pi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Ve.MIN}maxPost(){return new Ve(Cs,Yo)}makePost(e,n){return ie(typeof e=="string","KeyIndex indexValue must always be a string."),new Ve(e,Yo)}toString(){return".key"}}const Xs=new km;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e,n,r,s,o=null){this.isReverse_=s,this.resultGenerator_=o,this.nodeStack_=[];let a=1;for(;!e.isEmpty();)if(e=e,a=n?r(e.key,n):1,s&&(a*=-1),a<0)this.isReverse_?e=e.left:e=e.right;else if(a===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Wt{constructor(e,n,r,s,o){this.key=e,this.value=n,this.color=r??Wt.RED,this.left=s??_n.EMPTY_NODE,this.right=o??_n.EMPTY_NODE}copy(e,n,r,s,o){return new Wt(e??this.key,n??this.value,r??this.color,s??this.left,o??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const o=r(e,s.key);return o<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):o===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return _n.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return _n.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Wt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Wt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Wt.RED=!0;Wt.BLACK=!1;class sv{copy(e,n,r,s,o){return this}insert(e,n,r){return new Wt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class _n{constructor(e,n=_n.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new _n(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Wt.BLACK,null,null))}remove(e){return new _n(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Wt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ko(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ko(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ko(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ko(this.root_,null,this.comparator_,!0,e)}}_n.EMPTY_NODE=new sv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iv(t,e){return Rs(t.name,e.name)}function Pl(t,e){return Rs(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jc;function ov(t){Jc=t}const Fm=function(t){return typeof t=="number"?"number:"+dm(t):"string:"+t},Pm=function(t){if(t.isLeafNode()){const e=t.val();ie(typeof e=="string"||typeof e=="number"||typeof e=="object"&&dr(e,".sv"),"Priority must be a string or number.")}else ie(t===Jc||t.isEmpty(),"priority of unexpected type.");ie(t===Jc||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let du;class Gt{static set __childrenNodeConstructor(e){du=e}static get __childrenNodeConstructor(){return du}constructor(e,n=Gt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,ie(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Pm(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Gt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Gt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ke(e)?this:qe(e)===".priority"?this.priorityNode_:Gt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Gt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=qe(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(ie(r!==".priority"||Vr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Gt.__childrenNodeConstructor.EMPTY_NODE.updateChild(gt(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Fm(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=dm(this.value_):e+=this.value_,this.lazyHash_=cm(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Gt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Gt.__childrenNodeConstructor?-1:(ie(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=Gt.VALUE_TYPE_ORDER.indexOf(n),o=Gt.VALUE_TYPE_ORDER.indexOf(r);return ie(s>=0,"Unknown leaf type: "+n),ie(o>=0,"Unknown leaf type: "+r),s===o?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:o-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Gt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $m,Dm;function av(t){$m=t}function cv(t){Dm=t}class lv extends za{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),o=r.compareTo(s);return o===0?Rs(e.name,n.name):o}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Ve.MIN}maxPost(){return new Ve(Cs,new Gt("[PRIORITY-POST]",Dm))}makePost(e,n){const r=$m(e);return new Ve(n,new Gt("[PRIORITY-POST]",r))}toString(){return".priority"}}const xt=new lv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv=Math.log(2);class uv{constructor(e){const n=o=>parseInt(Math.log(o)/dv,10),r=o=>parseInt(Array(o+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const fa=function(t,e,n,r){t.sort(e);const s=function(d,u){const p=u-d;let f,g;if(p===0)return null;if(p===1)return f=t[d],g=n?n(f):f,new Wt(g,f.node,Wt.BLACK,null,null);{const S=parseInt(p/2,10)+d,_=s(d,S),I=s(S+1,u);return f=t[S],g=n?n(f):f,new Wt(g,f.node,Wt.BLACK,_,I)}},o=function(d){let u=null,p=null,f=t.length;const g=function(_,I){const F=f-_,P=f;f-=_;const k=s(F+1,P),D=t[F],R=n?n(D):D;S(new Wt(R,D.node,I,null,k))},S=function(_){u?(u.left=_,u=_):(p=_,u=_)};for(let _=0;_<d.count;++_){const I=d.nextBitIsOne(),F=Math.pow(2,d.count-(_+1));I?g(F,Wt.BLACK):(g(F,Wt.BLACK),g(F,Wt.RED))}return p},a=new uv(t.length),l=o(a);return new _n(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wc;const qs={};class yr{static get Default(){return ie(qs&&xt,"ChildrenNode.ts has not been loaded"),wc=wc||new yr({".priority":qs},{".priority":xt}),wc}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=ii(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof _n?n:null}hasIndex(e){return dr(this.indexSet_,e.toString())}addIndex(e,n){ie(e!==Xs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const o=n.getIterator(Ve.Wrap);let a=o.getNext();for(;a;)s=s||e.isDefinedOn(a.node),r.push(a),a=o.getNext();let l;s?l=fa(r,e.getCompare()):l=qs;const d=e.toString(),u={...this.indexSet_};u[d]=e;const p={...this.indexes_};return p[d]=l,new yr(p,u)}addToIndexes(e,n){const r=ua(this.indexes_,(s,o)=>{const a=ii(this.indexSet_,o);if(ie(a,"Missing index implementation for "+o),s===qs)if(a.isDefinedOn(e.node)){const l=[],d=n.getIterator(Ve.Wrap);let u=d.getNext();for(;u;)u.name!==e.name&&l.push(u),u=d.getNext();return l.push(e),fa(l,a.getCompare())}else return qs;else{const l=n.get(e.name);let d=s;return l&&(d=d.remove(new Ve(e.name,l))),d.insert(e,e.node)}});return new yr(r,this.indexSet_)}removeFromIndexes(e,n){const r=ua(this.indexes_,s=>{if(s===qs)return s;{const o=n.get(e.name);return o?s.remove(new Ve(e.name,o)):s}});return new yr(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pi;class Fe{static get EMPTY_NODE(){return Pi||(Pi=new Fe(new _n(Pl),null,yr.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Pm(this.priorityNode_),this.children_.isEmpty()&&ie(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Pi}updatePriority(e){return this.children_.isEmpty()?this:new Fe(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Pi:n}}getChild(e){const n=qe(e);return n===null?this:this.getImmediateChild(n).getChild(gt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(ie(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new Ve(e,n);let s,o;n.isEmpty()?(s=this.children_.remove(e),o=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),o=this.indexMap_.addToIndexes(r,this.children_));const a=s.isEmpty()?Pi:this.priorityNode_;return new Fe(s,a,o)}}updateChild(e,n){const r=qe(e);if(r===null)return n;{ie(qe(e)!==".priority"||Vr(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(gt(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,o=!0;if(this.forEachChild(xt,(a,l)=>{n[a]=l.val(e),r++,o&&Fe.INTEGER_REGEXP_.test(a)?s=Math.max(s,Number(a)):o=!1}),!e&&o&&s<2*r){const a=[];for(const l in n)a[l]=n[l];return a}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Fm(this.getPriority().val())+":"),this.forEachChild(xt,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":cm(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const o=s.getPredecessorKey(new Ve(e,n));return o?o.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Ve(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Ve(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,Ve.Wrap);let o=s.peek();for(;o!=null&&n.compare(o,e)<0;)s.getNext(),o=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,Ve.Wrap);let o=s.peek();for(;o!=null&&n.compare(o,e)>0;)s.getNext(),o=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===yo?-1:0}withIndex(e){if(e===Xs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Fe(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Xs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(xt),s=n.getIterator(xt);let o=r.getNext(),a=s.getNext();for(;o&&a;){if(o.name!==a.name||!o.node.equals(a.node))return!1;o=r.getNext(),a=s.getNext()}return o===null&&a===null}else return!1;else return!1}}resolveIndex_(e){return e===Xs?null:this.indexMap_.get(e.toString())}}Fe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class hv extends Fe{constructor(){super(new _n(Pl),Fe.EMPTY_NODE,yr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Fe.EMPTY_NODE}isEmpty(){return!1}}const yo=new hv;Object.defineProperties(Ve,{MIN:{value:new Ve(oi,Fe.EMPTY_NODE)},MAX:{value:new Ve(Cs,yo)}});km.__EMPTY_NODE=Fe.EMPTY_NODE;Gt.__childrenNodeConstructor=Fe;ov(yo);cv(yo);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mv=!0;function jt(t,e=null){if(t===null)return Fe.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),ie(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Gt(n,jt(e))}if(!(t instanceof Array)&&mv){const n=[];let r=!1;if(Kt(t,(a,l)=>{if(a.substring(0,1)!=="."){const d=jt(l);d.isEmpty()||(r=r||!d.getPriority().isEmpty(),n.push(new Ve(a,d)))}}),n.length===0)return Fe.EMPTY_NODE;const o=fa(n,iv,a=>a.name,Pl);if(r){const a=fa(n,xt.getCompare());return new Fe(o,jt(e),new yr({".priority":a},{".priority":xt}))}else return new Fe(o,jt(e),yr.Default)}else{let n=Fe.EMPTY_NODE;return Kt(t,(r,s)=>{if(dr(t,r)&&r.substring(0,1)!=="."){const o=jt(s);(o.isLeafNode()||!o.isEmpty())&&(n=n.updateImmediateChild(r,o))}}),n.updatePriority(jt(e))}}av(jt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv extends za{constructor(e){super(),this.indexPath_=e,ie(!Ke(e)&&qe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),o=r.compareTo(s);return o===0?Rs(e.name,n.name):o}makePost(e,n){const r=jt(e),s=Fe.EMPTY_NODE.updateChild(this.indexPath_,r);return new Ve(n,s)}maxPost(){const e=Fe.EMPTY_NODE.updateChild(this.indexPath_,yo);return new Ve(Cs,e)}toString(){return to(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv extends za{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Rs(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Ve.MIN}maxPost(){return Ve.MAX}makePost(e,n){const r=jt(e);return new Ve(n,r)}toString(){return".value"}}const gv=new fv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Om(t){return{type:"value",snapshotNode:t}}function ai(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function no(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ro(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function bv(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e){this.index_=e}updateChild(e,n,r,s,o,a){ie(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(s).equals(r.getChild(s))&&l.isEmpty()===r.isEmpty()||(a!=null&&(r.isEmpty()?e.hasChild(n)?a.trackChildChange(no(n,l)):ie(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?a.trackChildChange(ai(n,r)):a.trackChildChange(ro(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(xt,(s,o)=>{n.hasChild(s)||r.trackChildChange(no(s,o))}),n.isLeafNode()||n.forEachChild(xt,(s,o)=>{if(e.hasChild(s)){const a=e.getImmediateChild(s);a.equals(o)||r.trackChildChange(ro(s,o,a))}else r.trackChildChange(ai(s,o))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?Fe.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e){this.indexedFilter_=new $l(e.getIndex()),this.index_=e.getIndex(),this.startPost_=so.getStartPost_(e),this.endPost_=so.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,s,o,a){return this.matches(new Ve(n,r))||(r=Fe.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,s,o,a)}updateFullNode(e,n,r){n.isLeafNode()&&(n=Fe.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(Fe.EMPTY_NODE);const o=this;return n.forEachChild(xt,(a,l)=>{o.matches(new Ve(a,l))||(s=s.updateImmediateChild(a,Fe.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new so(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,s,o,a){return this.rangedFilter_.matches(new Ve(n,r))||(r=Fe.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,s,o,a):this.fullLimitUpdateChild_(e,n,r,o,a)}updateFullNode(e,n,r){let s;if(n.isLeafNode()||n.isEmpty())s=Fe.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=Fe.EMPTY_NODE.withIndex(this.index_);let o;this.reverse_?o=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):o=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let a=0;for(;o.hasNext()&&a<this.limit_;){const l=o.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))s=s.updateImmediateChild(l.name,l.node),a++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(Fe.EMPTY_NODE);let o;this.reverse_?o=s.getReverseIterator(this.index_):o=s.getIterator(this.index_);let a=0;for(;o.hasNext();){const l=o.getNext();a<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?a++:s=s.updateImmediateChild(l.name,Fe.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,s,o){let a;if(this.reverse_){const f=this.index_.getCompare();a=(g,S)=>f(S,g)}else a=this.index_.getCompare();const l=e;ie(l.numChildren()===this.limit_,"");const d=new Ve(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),p=this.rangedFilter_.matches(d);if(l.hasChild(n)){const f=l.getImmediateChild(n);let g=s.getChildAfterChild(this.index_,u,this.reverse_);for(;g!=null&&(g.name===n||l.hasChild(g.name));)g=s.getChildAfterChild(this.index_,g,this.reverse_);const S=g==null?1:a(g,d);if(p&&!r.isEmpty()&&S>=0)return o?.trackChildChange(ro(n,r,f)),l.updateImmediateChild(n,r);{o?.trackChildChange(no(n,f));const I=l.updateImmediateChild(n,Fe.EMPTY_NODE);return g!=null&&this.rangedFilter_.matches(g)?(o?.trackChildChange(ai(g.name,g.node)),I.updateImmediateChild(g.name,g.node)):I}}else return r.isEmpty()?e:p&&a(u,d)>=0?(o!=null&&(o.trackChildChange(no(u.name,u.node)),o.trackChildChange(ai(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,Fe.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=xt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return ie(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return ie(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:oi}hasEnd(){return this.endSet_}getIndexEndValue(){return ie(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return ie(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Cs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return ie(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===xt}copy(){const e=new Dl;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function vv(t){return t.loadsAllData()?new $l(t.getIndex()):t.hasLimit()?new yv(t):new so(t)}function uu(t){const e={};if(t.isDefault())return e;let n;if(t.index_===xt?n="$priority":t.index_===gv?n="$value":t.index_===Xs?n="$key":(ie(t.index_ instanceof pv,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Lt(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Lt(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Lt(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Lt(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Lt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function hu(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==xt&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga extends Am{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(ie(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=bo("p:rest:"),this.listens_={}}listen(e,n,r,s){const o=e._path.toString();this.log_("Listen called for "+o+" "+e._queryIdentifier);const a=ga.getListenId_(e,r),l={};this.listens_[a]=l;const d=uu(e._queryParams);this.restRequest_(o+".json",d,(u,p)=>{let f=p;if(u===404&&(f=null,u=null),u===null&&this.onDataUpdate_(o,f,!1,r),ii(this.listens_,a)===l){let g;u?u===401?g="permission_denied":g="rest_error:"+u:g="ok",s(g,null)}})}unlisten(e,n){const r=ga.getListenId_(e,n);delete this.listens_[r]}get(e){const n=uu(e._queryParams),r=e._path.toString(),s=new mo;return this.restRequest_(r+".json",n,(o,a)=>{let l=a;o===404&&(l=null,o=null),o===null?(this.onDataUpdate_(r,l,!1,null),s.resolve(l)):s.reject(new Error(l))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,o])=>{s&&s.accessToken&&(n.auth=s.accessToken),o&&o.token&&(n.ac=o.token);const a=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+fi(n);this.log_("Sending REST request for "+a);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+a+" received. status:",l.status,"response:",l.responseText);let d=null;if(l.status>=200&&l.status<300){try{d=Qi(l.responseText)}catch{un("Failed to parse JSON response for "+a+": "+l.responseText)}r(null,d)}else l.status!==401&&l.status!==404&&un("Got unsuccessful REST response for "+a+" Status: "+l.status),r(l.status);r=null}},l.open("GET",a,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(){this.rootNode_=Fe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(){return{value:null,children:new Map}}function Mm(t,e,n){if(Ke(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=qe(e);t.children.has(r)||t.children.set(r,ba());const s=t.children.get(r);e=gt(e),Mm(s,e,n)}}function Xc(t,e,n){t.value!==null?n(e,t.value):Cv(t,(r,s)=>{const o=new pt(e.toString()+"/"+r);Xc(s,o,n)})}function Cv(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&Kt(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mu=10*1e3,wv=30*1e3,Ev=300*1e3;class Nv{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Sv(e);const r=mu+(wv-mu)*Math.random();Hi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Kt(e,(s,o)=>{o>0&&dr(this.statsToReport_,s)&&(n[s]=o,r=!0)}),r&&this.server_.reportStats(n),Hi(this.reportStats_.bind(this),Math.floor(Math.random()*2*Ev))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(qn||(qn={}));function Ol(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ml(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function jl(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=qn.ACK_USER_WRITE,this.source=Ol()}operationForChild(e){if(Ke(this.path)){if(this.affectedTree.value!=null)return ie(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new pt(e));return new ya(it(),n,this.revert)}}else return ie(qe(this.path)===e,"operationForChild called for unrelated child."),new ya(gt(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e,n){this.source=e,this.path=n,this.type=qn.LISTEN_COMPLETE}operationForChild(e){return Ke(this.path)?new io(this.source,it()):new io(this.source,gt(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=qn.OVERWRITE}operationForChild(e){return Ke(this.path)?new Ss(this.source,it(),this.snap.getImmediateChild(e)):new Ss(this.source,gt(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=qn.MERGE}operationForChild(e){if(Ke(this.path)){const n=this.children.subtree(new pt(e));return n.isEmpty()?null:n.value?new Ss(this.source,it(),n.value):new ci(this.source,it(),n)}else return ie(qe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ci(this.source,gt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ke(e))return this.isFullyInitialized()&&!this.filtered_;const n=qe(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xv{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Av(t,e,n,r){const s=[],o=[];return e.forEach(a=>{a.type==="child_changed"&&t.index_.indexedValueChanged(a.oldSnap,a.snapshotNode)&&o.push(bv(a.childName,a.snapshotNode))}),$i(t,s,"child_removed",e,r,n),$i(t,s,"child_added",e,r,n),$i(t,s,"child_moved",o,r,n),$i(t,s,"child_changed",e,r,n),$i(t,s,"value",e,r,n),s}function $i(t,e,n,r,s,o){const a=r.filter(l=>l.type===n);a.sort((l,d)=>Tv(t,l,d)),a.forEach(l=>{const d=Iv(t,l,o);s.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(d,t.query_))})})}function Iv(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Tv(t,e,n){if(e.childName==null||n.childName==null)throw pi("Should only compare child_ events.");const r=new Ve(e.childName,e.snapshotNode),s=new Ve(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qa(t,e){return{eventCache:t,serverCache:e}}function Gi(t,e,n,r){return qa(new Yr(e,n,r),t.serverCache)}function jm(t,e,n,r){return qa(t.eventCache,new Yr(e,n,r))}function va(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ws(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ec;const Rv=()=>(Ec||(Ec=new _n(py)),Ec);class ft{static fromObject(e){let n=new ft(null);return Kt(e,(r,s)=>{n=n.set(new pt(r),s)}),n}constructor(e,n=Rv()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:it(),value:this.value};if(Ke(e))return null;{const r=qe(e),s=this.children.get(r);if(s!==null){const o=s.findRootMostMatchingPathAndValue(gt(e),n);return o!=null?{path:Nt(new pt(r),o.path),value:o.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Ke(e))return this;{const n=qe(e),r=this.children.get(n);return r!==null?r.subtree(gt(e)):new ft(null)}}set(e,n){if(Ke(e))return new ft(n,this.children);{const r=qe(e),o=(this.children.get(r)||new ft(null)).set(gt(e),n),a=this.children.insert(r,o);return new ft(this.value,a)}}remove(e){if(Ke(e))return this.children.isEmpty()?new ft(null):new ft(null,this.children);{const n=qe(e),r=this.children.get(n);if(r){const s=r.remove(gt(e));let o;return s.isEmpty()?o=this.children.remove(n):o=this.children.insert(n,s),this.value===null&&o.isEmpty()?new ft(null):new ft(this.value,o)}else return this}}get(e){if(Ke(e))return this.value;{const n=qe(e),r=this.children.get(n);return r?r.get(gt(e)):null}}setTree(e,n){if(Ke(e))return n;{const r=qe(e),o=(this.children.get(r)||new ft(null)).setTree(gt(e),n);let a;return o.isEmpty()?a=this.children.remove(r):a=this.children.insert(r,o),new ft(this.value,a)}}fold(e){return this.fold_(it(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,o)=>{r[s]=o.fold_(Nt(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,it(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(Ke(e))return null;{const o=qe(e),a=this.children.get(o);return a?a.findOnPath_(gt(e),Nt(n,o),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,it(),n)}foreachOnPath_(e,n,r){if(Ke(e))return this;{this.value&&r(n,this.value);const s=qe(e),o=this.children.get(s);return o?o.foreachOnPath_(gt(e),Nt(n,s),r):new ft(null)}}foreach(e){this.foreach_(it(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(Nt(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e){this.writeTree_=e}static empty(){return new Kn(new ft(null))}}function Wi(t,e,n){if(Ke(e))return new Kn(new ft(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let o=r.value;const a=dn(s,e);return o=o.updateChild(a,n),new Kn(t.writeTree_.set(s,o))}else{const s=new ft(n),o=t.writeTree_.setTree(e,s);return new Kn(o)}}}function Qc(t,e,n){let r=t;return Kt(n,(s,o)=>{r=Wi(r,Nt(e,s),o)}),r}function pu(t,e){if(Ke(e))return Kn.empty();{const n=t.writeTree_.setTree(e,new ft(null));return new Kn(n)}}function Zc(t,e){return ks(t,e)!=null}function ks(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(dn(n.path,e)):null}function fu(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(xt,(r,s)=>{e.push(new Ve(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new Ve(r,s.value))}),e}function Wr(t,e){if(Ke(e))return t;{const n=ks(t,e);return n!=null?new Kn(new ft(n)):new Kn(t.writeTree_.subtree(e))}}function el(t){return t.writeTree_.isEmpty()}function li(t,e){return Lm(it(),t.writeTree_,e)}function Lm(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,o)=>{s===".priority"?(ie(o.value!==null,"Priority writes must always be leaf nodes"),r=o.value):n=Lm(Nt(t,s),o,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Nt(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Va(t,e){return Gm(e,t)}function kv(t,e,n,r,s){ie(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=Wi(t.visibleWrites,e,n)),t.lastWriteId=r}function Fv(t,e,n,r){ie(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=Qc(t.visibleWrites,e,n),t.lastWriteId=r}function Pv(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function $v(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);ie(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,o=!1,a=t.allWrites.length-1;for(;s&&a>=0;){const l=t.allWrites[a];l.visible&&(a>=n&&Dv(l,r.path)?s=!1:In(r.path,l.path)&&(o=!0)),a--}if(s){if(o)return Ov(t),!0;if(r.snap)t.visibleWrites=pu(t.visibleWrites,r.path);else{const l=r.children;Kt(l,d=>{t.visibleWrites=pu(t.visibleWrites,Nt(r.path,d))})}return!0}else return!1}function Dv(t,e){if(t.snap)return In(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&In(Nt(t.path,n),e))return!0;return!1}function Ov(t){t.visibleWrites=Um(t.allWrites,Mv,it()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Mv(t){return t.visible}function Um(t,e,n){let r=Kn.empty();for(let s=0;s<t.length;++s){const o=t[s];if(e(o)){const a=o.path;let l;if(o.snap)In(n,a)?(l=dn(n,a),r=Wi(r,l,o.snap)):In(a,n)&&(l=dn(a,n),r=Wi(r,it(),o.snap.getChild(l)));else if(o.children){if(In(n,a))l=dn(n,a),r=Qc(r,l,o.children);else if(In(a,n))if(l=dn(a,n),Ke(l))r=Qc(r,it(),o.children);else{const d=ii(o.children,qe(l));if(d){const u=d.getChild(gt(l));r=Wi(r,it(),u)}}}else throw pi("WriteRecord should have .snap or .children")}}return r}function Bm(t,e,n,r,s){if(!r&&!s){const o=ks(t.visibleWrites,e);if(o!=null)return o;{const a=Wr(t.visibleWrites,e);if(el(a))return n;if(n==null&&!Zc(a,it()))return null;{const l=n||Fe.EMPTY_NODE;return li(a,l)}}}else{const o=Wr(t.visibleWrites,e);if(!s&&el(o))return n;if(!s&&n==null&&!Zc(o,it()))return null;{const a=function(u){return(u.visible||s)&&(!r||!~r.indexOf(u.writeId))&&(In(u.path,e)||In(e,u.path))},l=Um(t.allWrites,a,e),d=n||Fe.EMPTY_NODE;return li(l,d)}}}function jv(t,e,n){let r=Fe.EMPTY_NODE;const s=ks(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(xt,(o,a)=>{r=r.updateImmediateChild(o,a)}),r;if(n){const o=Wr(t.visibleWrites,e);return n.forEachChild(xt,(a,l)=>{const d=li(Wr(o,new pt(a)),l);r=r.updateImmediateChild(a,d)}),fu(o).forEach(a=>{r=r.updateImmediateChild(a.name,a.node)}),r}else{const o=Wr(t.visibleWrites,e);return fu(o).forEach(a=>{r=r.updateImmediateChild(a.name,a.node)}),r}}function Lv(t,e,n,r,s){ie(r||s,"Either existingEventSnap or existingServerSnap must exist");const o=Nt(e,n);if(Zc(t.visibleWrites,o))return null;{const a=Wr(t.visibleWrites,o);return el(a)?s.getChild(n):li(a,s.getChild(n))}}function Uv(t,e,n,r){const s=Nt(e,n),o=ks(t.visibleWrites,s);if(o!=null)return o;if(r.isCompleteForChild(n)){const a=Wr(t.visibleWrites,s);return li(a,r.getNode().getImmediateChild(n))}else return null}function Bv(t,e){return ks(t.visibleWrites,e)}function Hv(t,e,n,r,s,o,a){let l;const d=Wr(t.visibleWrites,e),u=ks(d,it());if(u!=null)l=u;else if(n!=null)l=li(d,n);else return[];if(l=l.withIndex(a),!l.isEmpty()&&!l.isLeafNode()){const p=[],f=a.getCompare(),g=o?l.getReverseIteratorFrom(r,a):l.getIteratorFrom(r,a);let S=g.getNext();for(;S&&p.length<s;)f(S,r)!==0&&p.push(S),S=g.getNext();return p}else return[]}function Gv(){return{visibleWrites:Kn.empty(),allWrites:[],lastWriteId:-1}}function _a(t,e,n,r){return Bm(t.writeTree,t.treePath,e,n,r)}function Ll(t,e){return jv(t.writeTree,t.treePath,e)}function gu(t,e,n,r){return Lv(t.writeTree,t.treePath,e,n,r)}function Ca(t,e){return Bv(t.writeTree,Nt(t.treePath,e))}function Wv(t,e,n,r,s,o){return Hv(t.writeTree,t.treePath,e,n,r,s,o)}function Ul(t,e,n){return Uv(t.writeTree,t.treePath,e,n)}function Hm(t,e){return Gm(Nt(t.treePath,e),t.writeTree)}function Gm(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;ie(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),ie(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const o=s.type;if(n==="child_added"&&o==="child_removed")this.changeMap.set(r,ro(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&o==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&o==="child_changed")this.changeMap.set(r,no(r,s.oldSnap));else if(n==="child_changed"&&o==="child_added")this.changeMap.set(r,ai(r,e.snapshotNode));else if(n==="child_changed"&&o==="child_changed")this.changeMap.set(r,ro(r,e.snapshotNode,s.oldSnap));else throw pi("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Wm=new qv;class Bl{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Yr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ul(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ws(this.viewCache_),o=Wv(this.writes_,s,n,1,r,e);return o.length===0?null:o[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vv(t){return{filter:t}}function Yv(t,e){ie(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),ie(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Kv(t,e,n,r,s){const o=new zv;let a,l;if(n.type===qn.OVERWRITE){const u=n;u.source.fromUser?a=tl(t,e,u.path,u.snap,r,s,o):(ie(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!Ke(u.path),a=Sa(t,e,u.path,u.snap,r,s,l,o))}else if(n.type===qn.MERGE){const u=n;u.source.fromUser?a=Xv(t,e,u.path,u.children,r,s,o):(ie(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),a=nl(t,e,u.path,u.children,r,s,l,o))}else if(n.type===qn.ACK_USER_WRITE){const u=n;u.revert?a=e_(t,e,u.path,r,s,o):a=Qv(t,e,u.path,u.affectedTree,r,s,o)}else if(n.type===qn.LISTEN_COMPLETE)a=Zv(t,e,n.path,r,o);else throw pi("Unknown operation type: "+n.type);const d=o.getChanges();return Jv(e,a,d),{viewCache:a,changes:d}}function Jv(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),o=va(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(o)||!r.getNode().getPriority().equals(o.getPriority()))&&n.push(Om(va(e)))}}function zm(t,e,n,r,s,o){const a=e.eventCache;if(Ca(r,n)!=null)return e;{let l,d;if(Ke(n))if(ie(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=ws(e),p=u instanceof Fe?u:Fe.EMPTY_NODE,f=Ll(r,p);l=t.filter.updateFullNode(e.eventCache.getNode(),f,o)}else{const u=_a(r,ws(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,o)}else{const u=qe(n);if(u===".priority"){ie(Vr(n)===1,"Can't have a priority with additional path components");const p=a.getNode();d=e.serverCache.getNode();const f=gu(r,n,p,d);f!=null?l=t.filter.updatePriority(p,f):l=a.getNode()}else{const p=gt(n);let f;if(a.isCompleteForChild(u)){d=e.serverCache.getNode();const g=gu(r,n,a.getNode(),d);g!=null?f=a.getNode().getImmediateChild(u).updateChild(p,g):f=a.getNode().getImmediateChild(u)}else f=Ul(r,u,e.serverCache);f!=null?l=t.filter.updateChild(a.getNode(),u,f,p,s,o):l=a.getNode()}}return Gi(e,l,a.isFullyInitialized()||Ke(n),t.filter.filtersNodes())}}function Sa(t,e,n,r,s,o,a,l){const d=e.serverCache;let u;const p=a?t.filter:t.filter.getIndexedFilter();if(Ke(n))u=p.updateFullNode(d.getNode(),r,null);else if(p.filtersNodes()&&!d.isFiltered()){const S=d.getNode().updateChild(n,r);u=p.updateFullNode(d.getNode(),S,null)}else{const S=qe(n);if(!d.isCompleteForPath(n)&&Vr(n)>1)return e;const _=gt(n),F=d.getNode().getImmediateChild(S).updateChild(_,r);S===".priority"?u=p.updatePriority(d.getNode(),F):u=p.updateChild(d.getNode(),S,F,_,Wm,null)}const f=jm(e,u,d.isFullyInitialized()||Ke(n),p.filtersNodes()),g=new Bl(s,f,o);return zm(t,f,n,s,g,l)}function tl(t,e,n,r,s,o,a){const l=e.eventCache;let d,u;const p=new Bl(s,e,o);if(Ke(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,a),d=Gi(e,u,!0,t.filter.filtersNodes());else{const f=qe(n);if(f===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),d=Gi(e,u,l.isFullyInitialized(),l.isFiltered());else{const g=gt(n),S=l.getNode().getImmediateChild(f);let _;if(Ke(g))_=r;else{const I=p.getCompleteChild(f);I!=null?Rl(g)===".priority"&&I.getChild(Tm(g)).isEmpty()?_=I:_=I.updateChild(g,r):_=Fe.EMPTY_NODE}if(S.equals(_))d=e;else{const I=t.filter.updateChild(l.getNode(),f,_,g,p,a);d=Gi(e,I,l.isFullyInitialized(),t.filter.filtersNodes())}}}return d}function bu(t,e){return t.eventCache.isCompleteForChild(e)}function Xv(t,e,n,r,s,o,a){let l=e;return r.foreach((d,u)=>{const p=Nt(n,d);bu(e,qe(p))&&(l=tl(t,l,p,u,s,o,a))}),r.foreach((d,u)=>{const p=Nt(n,d);bu(e,qe(p))||(l=tl(t,l,p,u,s,o,a))}),l}function yu(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function nl(t,e,n,r,s,o,a,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let d=e,u;Ke(n)?u=r:u=new ft(null).setTree(n,r);const p=e.serverCache.getNode();return u.children.inorderTraversal((f,g)=>{if(p.hasChild(f)){const S=e.serverCache.getNode().getImmediateChild(f),_=yu(t,S,g);d=Sa(t,d,new pt(f),_,s,o,a,l)}}),u.children.inorderTraversal((f,g)=>{const S=!e.serverCache.isCompleteForChild(f)&&g.value===null;if(!p.hasChild(f)&&!S){const _=e.serverCache.getNode().getImmediateChild(f),I=yu(t,_,g);d=Sa(t,d,new pt(f),I,s,o,a,l)}}),d}function Qv(t,e,n,r,s,o,a){if(Ca(s,n)!=null)return e;const l=e.serverCache.isFiltered(),d=e.serverCache;if(r.value!=null){if(Ke(n)&&d.isFullyInitialized()||d.isCompleteForPath(n))return Sa(t,e,n,d.getNode().getChild(n),s,o,l,a);if(Ke(n)){let u=new ft(null);return d.getNode().forEachChild(Xs,(p,f)=>{u=u.set(new pt(p),f)}),nl(t,e,n,u,s,o,l,a)}else return e}else{let u=new ft(null);return r.foreach((p,f)=>{const g=Nt(n,p);d.isCompleteForPath(g)&&(u=u.set(p,d.getNode().getChild(g)))}),nl(t,e,n,u,s,o,l,a)}}function Zv(t,e,n,r,s){const o=e.serverCache,a=jm(e,o.getNode(),o.isFullyInitialized()||Ke(n),o.isFiltered());return zm(t,a,n,r,Wm,s)}function e_(t,e,n,r,s,o){let a;if(Ca(r,n)!=null)return e;{const l=new Bl(r,e,s),d=e.eventCache.getNode();let u;if(Ke(n)||qe(n)===".priority"){let p;if(e.serverCache.isFullyInitialized())p=_a(r,ws(e));else{const f=e.serverCache.getNode();ie(f instanceof Fe,"serverChildren would be complete if leaf node"),p=Ll(r,f)}p=p,u=t.filter.updateFullNode(d,p,o)}else{const p=qe(n);let f=Ul(r,p,e.serverCache);f==null&&e.serverCache.isCompleteForChild(p)&&(f=d.getImmediateChild(p)),f!=null?u=t.filter.updateChild(d,p,f,gt(n),l,o):e.eventCache.getNode().hasChild(p)?u=t.filter.updateChild(d,p,Fe.EMPTY_NODE,gt(n),l,o):u=d,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(a=_a(r,ws(e)),a.isLeafNode()&&(u=t.filter.updateFullNode(u,a,o)))}return a=e.serverCache.isFullyInitialized()||Ca(r,it())!=null,Gi(e,u,a,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new $l(r.getIndex()),o=vv(r);this.processor_=Vv(o);const a=n.serverCache,l=n.eventCache,d=s.updateFullNode(Fe.EMPTY_NODE,a.getNode(),null),u=o.updateFullNode(Fe.EMPTY_NODE,l.getNode(),null),p=new Yr(d,a.isFullyInitialized(),s.filtersNodes()),f=new Yr(u,l.isFullyInitialized(),o.filtersNodes());this.viewCache_=qa(f,p),this.eventGenerator_=new xv(this.query_)}get query(){return this.query_}}function n_(t){return t.viewCache_.serverCache.getNode()}function r_(t){return va(t.viewCache_)}function s_(t,e){const n=ws(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Ke(e)&&!n.getImmediateChild(qe(e)).isEmpty())?n.getChild(e):null}function vu(t){return t.eventRegistrations_.length===0}function i_(t,e){t.eventRegistrations_.push(e)}function _u(t,e,n){const r=[];if(n){ie(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(o=>{const a=o.createCancelEvent(n,s);a&&r.push(a)})}if(e){let s=[];for(let o=0;o<t.eventRegistrations_.length;++o){const a=t.eventRegistrations_[o];if(!a.matches(e))s.push(a);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(o+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return r}function Cu(t,e,n,r){e.type===qn.MERGE&&e.source.queryId!==null&&(ie(ws(t.viewCache_),"We should always have a full cache before handling merges"),ie(va(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,o=Kv(t.processor_,s,e,n,r);return Yv(t.processor_,o.viewCache),ie(o.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=o.viewCache,qm(t,o.changes,o.viewCache.eventCache.getNode(),null)}function o_(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(xt,(o,a)=>{r.push(ai(o,a))}),n.isFullyInitialized()&&r.push(Om(n.getNode())),qm(t,r,n.getNode(),e)}function qm(t,e,n,r){const s=r?[r]:t.eventRegistrations_;return Av(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wa;class Vm{constructor(){this.views=new Map}}function a_(t){ie(!wa,"__referenceConstructor has already been defined"),wa=t}function c_(){return ie(wa,"Reference.ts has not been loaded"),wa}function l_(t){return t.views.size===0}function Hl(t,e,n,r){const s=e.source.queryId;if(s!==null){const o=t.views.get(s);return ie(o!=null,"SyncTree gave us an op for an invalid query."),Cu(o,e,n,r)}else{let o=[];for(const a of t.views.values())o=o.concat(Cu(a,e,n,r));return o}}function Ym(t,e,n,r,s){const o=e._queryIdentifier,a=t.views.get(o);if(!a){let l=_a(n,s?r:null),d=!1;l?d=!0:r instanceof Fe?(l=Ll(n,r),d=!1):(l=Fe.EMPTY_NODE,d=!1);const u=qa(new Yr(l,d,!1),new Yr(r,s,!1));return new t_(e,u)}return a}function d_(t,e,n,r,s,o){const a=Ym(t,e,r,s,o);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,a),i_(a,n),o_(a,n)}function u_(t,e,n,r){const s=e._queryIdentifier,o=[];let a=[];const l=Kr(t);if(s==="default")for(const[d,u]of t.views.entries())a=a.concat(_u(u,n,r)),vu(u)&&(t.views.delete(d),u.query._queryParams.loadsAllData()||o.push(u.query));else{const d=t.views.get(s);d&&(a=a.concat(_u(d,n,r)),vu(d)&&(t.views.delete(s),d.query._queryParams.loadsAllData()||o.push(d.query)))}return l&&!Kr(t)&&o.push(new(c_())(e._repo,e._path)),{removed:o,events:a}}function Km(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function zr(t,e){let n=null;for(const r of t.views.values())n=n||s_(r,e);return n}function Jm(t,e){if(e._queryParams.loadsAllData())return Ya(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Xm(t,e){return Jm(t,e)!=null}function Kr(t){return Ya(t)!=null}function Ya(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ea;function h_(t){ie(!Ea,"__referenceConstructor has already been defined"),Ea=t}function m_(){return ie(Ea,"Reference.ts has not been loaded"),Ea}let p_=1;class Su{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ft(null),this.pendingWriteTree_=Gv(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Qm(t,e,n,r,s){return kv(t.pendingWriteTree_,e,n,r,s),s?bi(t,new Ss(Ol(),e,n)):[]}function f_(t,e,n,r){Fv(t.pendingWriteTree_,e,n,r);const s=ft.fromObject(n);return bi(t,new ci(Ol(),e,s))}function Br(t,e,n=!1){const r=Pv(t.pendingWriteTree_,e);if($v(t.pendingWriteTree_,e)){let o=new ft(null);return r.snap!=null?o=o.set(it(),!0):Kt(r.children,a=>{o=o.set(new pt(a),!0)}),bi(t,new ya(r.path,o,n))}else return[]}function vo(t,e,n){return bi(t,new Ss(Ml(),e,n))}function g_(t,e,n){const r=ft.fromObject(n);return bi(t,new ci(Ml(),e,r))}function b_(t,e){return bi(t,new io(Ml(),e))}function y_(t,e,n){const r=Wl(t,n);if(r){const s=zl(r),o=s.path,a=s.queryId,l=dn(o,e),d=new io(jl(a),l);return ql(t,o,d)}else return[]}function Na(t,e,n,r,s=!1){const o=e._path,a=t.syncPointTree_.get(o);let l=[];if(a&&(e._queryIdentifier==="default"||Xm(a,e))){const d=u_(a,e,n,r);l_(a)&&(t.syncPointTree_=t.syncPointTree_.remove(o));const u=d.removed;if(l=d.events,!s){const p=u.findIndex(g=>g._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(o,(g,S)=>Kr(S));if(p&&!f){const g=t.syncPointTree_.subtree(o);if(!g.isEmpty()){const S=C_(g);for(let _=0;_<S.length;++_){const I=S[_],F=I.query,P=np(t,I);t.listenProvider_.startListening(zi(F),oo(t,F),P.hashFn,P.onComplete)}}}!f&&u.length>0&&!r&&(p?t.listenProvider_.stopListening(zi(e),null):u.forEach(g=>{const S=t.queryToTagMap.get(Ka(g));t.listenProvider_.stopListening(zi(g),S)}))}S_(t,u)}return l}function Zm(t,e,n,r){const s=Wl(t,r);if(s!=null){const o=zl(s),a=o.path,l=o.queryId,d=dn(a,e),u=new Ss(jl(l),d,n);return ql(t,a,u)}else return[]}function v_(t,e,n,r){const s=Wl(t,r);if(s){const o=zl(s),a=o.path,l=o.queryId,d=dn(a,e),u=ft.fromObject(n),p=new ci(jl(l),d,u);return ql(t,a,p)}else return[]}function rl(t,e,n,r=!1){const s=e._path;let o=null,a=!1;t.syncPointTree_.foreachOnPath(s,(g,S)=>{const _=dn(g,s);o=o||zr(S,_),a=a||Kr(S)});let l=t.syncPointTree_.get(s);l?(a=a||Kr(l),o=o||zr(l,it())):(l=new Vm,t.syncPointTree_=t.syncPointTree_.set(s,l));let d;o!=null?d=!0:(d=!1,o=Fe.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((S,_)=>{const I=zr(_,it());I&&(o=o.updateImmediateChild(S,I))}));const u=Xm(l,e);if(!u&&!e._queryParams.loadsAllData()){const g=Ka(e);ie(!t.queryToTagMap.has(g),"View does not exist, but we have a tag");const S=w_();t.queryToTagMap.set(g,S),t.tagToQueryMap.set(S,g)}const p=Va(t.pendingWriteTree_,s);let f=d_(l,e,n,p,o,d);if(!u&&!a&&!r){const g=Jm(l,e);f=f.concat(E_(t,e,g))}return f}function Gl(t,e,n){const s=t.pendingWriteTree_,o=t.syncPointTree_.findOnPath(e,(a,l)=>{const d=dn(a,e),u=zr(l,d);if(u)return u});return Bm(s,e,o,n,!0)}function __(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,p)=>{const f=dn(u,n);r=r||zr(p,f)});let s=t.syncPointTree_.get(n);s?r=r||zr(s,it()):(s=new Vm,t.syncPointTree_=t.syncPointTree_.set(n,s));const o=r!=null,a=o?new Yr(r,!0,!1):null,l=Va(t.pendingWriteTree_,e._path),d=Ym(s,e,l,o?a.getNode():Fe.EMPTY_NODE,o);return r_(d)}function bi(t,e){return ep(e,t.syncPointTree_,null,Va(t.pendingWriteTree_,it()))}function ep(t,e,n,r){if(Ke(t.path))return tp(t,e,n,r);{const s=e.get(it());n==null&&s!=null&&(n=zr(s,it()));let o=[];const a=qe(t.path),l=t.operationForChild(a),d=e.children.get(a);if(d&&l){const u=n?n.getImmediateChild(a):null,p=Hm(r,a);o=o.concat(ep(l,d,u,p))}return s&&(o=o.concat(Hl(s,t,r,n))),o}}function tp(t,e,n,r){const s=e.get(it());n==null&&s!=null&&(n=zr(s,it()));let o=[];return e.children.inorderTraversal((a,l)=>{const d=n?n.getImmediateChild(a):null,u=Hm(r,a),p=t.operationForChild(a);p&&(o=o.concat(tp(p,l,d,u)))}),s&&(o=o.concat(Hl(s,t,r,n))),o}function np(t,e){const n=e.query,r=oo(t,n);return{hashFn:()=>(n_(e)||Fe.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?y_(t,n._path,r):b_(t,n._path);{const o=by(s,n);return Na(t,n,null,o)}}}}function oo(t,e){const n=Ka(e);return t.queryToTagMap.get(n)}function Ka(t){return t._path.toString()+"$"+t._queryIdentifier}function Wl(t,e){return t.tagToQueryMap.get(e)}function zl(t){const e=t.indexOf("$");return ie(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new pt(t.substr(0,e))}}function ql(t,e,n){const r=t.syncPointTree_.get(e);ie(r,"Missing sync point for query tag that we're tracking");const s=Va(t.pendingWriteTree_,e);return Hl(r,n,s,null)}function C_(t){return t.fold((e,n,r)=>{if(n&&Kr(n))return[Ya(n)];{let s=[];return n&&(s=Km(n)),Kt(r,(o,a)=>{s=s.concat(a)}),s}})}function zi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(m_())(t._repo,t._path):t}function S_(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const s=Ka(r),o=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(o)}}}function w_(){return p_++}function E_(t,e,n){const r=e._path,s=oo(t,e),o=np(t,n),a=t.listenProvider_.startListening(zi(e),s,o.hashFn,o.onComplete),l=t.syncPointTree_.subtree(r);if(s)ie(!Kr(l.value),"If we're adding a query, it shouldn't be shadowed");else{const d=l.fold((u,p,f)=>{if(!Ke(u)&&p&&Kr(p))return[Ya(p).query];{let g=[];return p&&(g=g.concat(Km(p).map(S=>S.query))),Kt(f,(S,_)=>{g=g.concat(_)}),g}});for(let u=0;u<d.length;++u){const p=d[u];t.listenProvider_.stopListening(zi(p),oo(t,p))}}return a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Vl(n)}node(){return this.node_}}class Yl{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Nt(this.path_,e);return new Yl(this.syncTree_,n)}node(){return Gl(this.syncTree_,this.path_)}}const N_=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},wu=function(t,e,n){if(!t||typeof t!="object")return t;if(ie(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return x_(t[".sv"],e,n);if(typeof t[".sv"]=="object")return A_(t[".sv"],e);ie(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},x_=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:ie(!1,"Unexpected server value: "+t)}},A_=function(t,e,n){t.hasOwnProperty("increment")||ie(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&ie(!1,"Unexpected increment value: "+r);const s=e.node();if(ie(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const a=s.getValue();return typeof a!="number"?r:a+r},rp=function(t,e,n,r){return Kl(e,new Yl(n,t),r)},sp=function(t,e,n){return Kl(t,new Vl(e),n)};function Kl(t,e,n){const r=t.getPriority().val(),s=wu(r,e.getImmediateChild(".priority"),n);let o;if(t.isLeafNode()){const a=t,l=wu(a.getValue(),e,n);return l!==a.getValue()||s!==a.getPriority().val()?new Gt(l,jt(s)):t}else{const a=t;return o=a,s!==a.getPriority().val()&&(o=o.updatePriority(new Gt(s))),a.forEachChild(xt,(l,d)=>{const u=Kl(d,e.getImmediateChild(l),n);u!==d&&(o=o.updateImmediateChild(l,u))}),o}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Xl(t,e){let n=e instanceof pt?e:new pt(e),r=t,s=qe(n);for(;s!==null;){const o=ii(r.node.children,s)||{children:{},childCount:0};r=new Jl(s,r,o),n=gt(n),s=qe(n)}return r}function yi(t){return t.node.value}function ip(t,e){t.node.value=e,sl(t)}function op(t){return t.node.childCount>0}function I_(t){return yi(t)===void 0&&!op(t)}function Ja(t,e){Kt(t.node.children,(n,r)=>{e(new Jl(n,t,r))})}function ap(t,e,n,r){n&&e(t),Ja(t,s=>{ap(s,e,!0)})}function T_(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function _o(t){return new pt(t.parent===null?t.name:_o(t.parent)+"/"+t.name)}function sl(t){t.parent!==null&&R_(t.parent,t.name,t)}function R_(t,e,n){const r=I_(n),s=dr(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,sl(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,sl(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_=/[\[\].#$\/\u0000-\u001F\u007F]/,F_=/[\[\].#$\u0000-\u001F\u007F]/,Nc=10*1024*1024,Ql=function(t){return typeof t=="string"&&t.length!==0&&!k_.test(t)},cp=function(t){return typeof t=="string"&&t.length!==0&&!F_.test(t)},P_=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),cp(t)},$_=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Nl(t)||t&&typeof t=="object"&&dr(t,".sv")},lp=function(t,e,n,r){r&&e===void 0||Xa(Ga(t,"value"),e,n)},Xa=function(t,e,n){const r=n instanceof pt?new Xy(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ms(r));if(typeof e=="function")throw new Error(t+"contains a function "+ms(r)+" with contents = "+e.toString());if(Nl(e))throw new Error(t+"contains "+e.toString()+" "+ms(r));if(typeof e=="string"&&e.length>Nc/3&&Wa(e)>Nc)throw new Error(t+"contains a string greater than "+Nc+" utf8 bytes "+ms(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,o=!1;if(Kt(e,(a,l)=>{if(a===".value")s=!0;else if(a!==".priority"&&a!==".sv"&&(o=!0,!Ql(a)))throw new Error(t+" contains an invalid key ("+a+") "+ms(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Qy(r,a),Xa(t,l,r),Zy(r)}),s&&o)throw new Error(t+' contains ".value" child '+ms(r)+" in addition to actual children.")}},D_=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const o=to(r);for(let a=0;a<o.length;a++)if(!(o[a]===".priority"&&a===o.length-1)){if(!Ql(o[a]))throw new Error(t+"contains an invalid key ("+o[a]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Jy);let s=null;for(n=0;n<e.length;n++){if(r=e[n],s!==null&&In(s,r))throw new Error(t+"contains a path "+s.toString()+" that is ancestor of another path "+r.toString());s=r}},O_=function(t,e,n,r){const s=Ga(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const o=[];Kt(e,(a,l)=>{const d=new pt(a);if(Xa(s,l,Nt(n,d)),Rl(d)===".priority"&&!$_(l))throw new Error(s+"contains an invalid value for '"+d.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");o.push(d)}),D_(s,o)},dp=function(t,e,n,r){if(!cp(n))throw new Error(Ga(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},M_=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),dp(t,e,n)},Zl=function(t,e){if(qe(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},j_=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ql(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!P_(n))throw new Error(Ga(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Qa(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],o=s.getPath();n!==null&&!kl(o,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:o}),n.events.push(s)}n&&t.eventLists_.push(n)}function up(t,e,n){Qa(t,n),hp(t,r=>kl(r,e))}function Rn(t,e,n){Qa(t,n),hp(t,r=>In(r,e)||In(e,r))}function hp(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const o=s.path;e(o)?(U_(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function U_(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Bi&&Yt("event: "+n.toString()),gi(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_="repo_interrupt",H_=25;class G_{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new L_,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ba(),this.transactionQueueTree_=new Jl,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function W_(t,e,n){if(t.stats_=Il(t.repoInfo_),t.forceRestClient_||Cy())t.server_=new ga(t.repoInfo_,(r,s,o,a)=>{Eu(t,r,s,o,a)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Nu(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Lt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Sr(t.repoInfo_,e,(r,s,o,a)=>{Eu(t,r,s,o,a)},r=>{Nu(t,r)},r=>{z_(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=xy(t.repoInfo_,()=>new Nv(t.stats_,t.server_)),t.infoData_=new _v,t.infoSyncTree_=new Su({startListening:(r,s,o,a)=>{let l=[];const d=t.infoData_.getNode(r._path);return d.isEmpty()||(l=vo(t.infoSyncTree_,r._path,d),setTimeout(()=>{a("ok")},0)),l},stopListening:()=>{}}),ed(t,"connected",!1),t.serverSyncTree_=new Su({startListening:(r,s,o,a)=>(t.server_.listen(r,o,s,(l,d)=>{const u=a(l,d);Rn(t.eventQueue_,r._path,u)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function mp(t){const n=t.infoData_.getNode(new pt(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Za(t){return N_({timestamp:mp(t)})}function Eu(t,e,n,r,s){t.dataUpdateCount++;const o=new pt(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let a=[];if(s)if(r){const d=ua(n,u=>jt(u));a=v_(t.serverSyncTree_,o,d,s)}else{const d=jt(n);a=Zm(t.serverSyncTree_,o,d,s)}else if(r){const d=ua(n,u=>jt(u));a=g_(t.serverSyncTree_,o,d)}else{const d=jt(n);a=vo(t.serverSyncTree_,o,d)}let l=o;a.length>0&&(l=di(t,o)),Rn(t.eventQueue_,l,a)}function Nu(t,e){ed(t,"connected",e),e===!1&&K_(t)}function z_(t,e){Kt(e,(n,r)=>{ed(t,n,r)})}function ed(t,e,n){const r=new pt("/.info/"+e),s=jt(n);t.infoData_.updateSnapshot(r,s);const o=vo(t.infoSyncTree_,r,s);Rn(t.eventQueue_,r,o)}function td(t){return t.nextWriteId_++}function q_(t,e,n){const r=__(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(s=>{const o=jt(s).withIndex(e._queryParams.getIndex());rl(t.serverSyncTree_,e,n,!0);let a;if(e._queryParams.loadsAllData())a=vo(t.serverSyncTree_,e._path,o);else{const l=oo(t.serverSyncTree_,e);a=Zm(t.serverSyncTree_,e._path,o,l)}return Rn(t.eventQueue_,e._path,a),Na(t.serverSyncTree_,e,n,null,!0),o},s=>(Co(t,"get for query "+Lt(e)+" failed: "+s),Promise.reject(new Error(s))))}function V_(t,e,n,r,s){Co(t,"set",{path:e.toString(),value:n,priority:r});const o=Za(t),a=jt(n,r),l=Gl(t.serverSyncTree_,e),d=sp(a,l,o),u=td(t),p=Qm(t.serverSyncTree_,e,d,u,!0);Qa(t.eventQueue_,p),t.server_.put(e.toString(),a.val(!0),(g,S)=>{const _=g==="ok";_||un("set at "+e+" failed: "+g);const I=Br(t.serverSyncTree_,u,!_);Rn(t.eventQueue_,e,I),il(t,s,g,S)});const f=rd(t,e);di(t,f),Rn(t.eventQueue_,f,[])}function Y_(t,e,n,r){Co(t,"update",{path:e.toString(),value:n});let s=!0;const o=Za(t),a={};if(Kt(n,(l,d)=>{s=!1,a[l]=rp(Nt(e,l),jt(d),t.serverSyncTree_,o)}),s)Yt("update() called with empty data.  Don't do anything."),il(t,r,"ok",void 0);else{const l=td(t),d=f_(t.serverSyncTree_,e,a,l);Qa(t.eventQueue_,d),t.server_.merge(e.toString(),n,(u,p)=>{const f=u==="ok";f||un("update at "+e+" failed: "+u);const g=Br(t.serverSyncTree_,l,!f),S=g.length>0?di(t,e):e;Rn(t.eventQueue_,S,g),il(t,r,u,p)}),Kt(n,u=>{const p=rd(t,Nt(e,u));di(t,p)}),Rn(t.eventQueue_,e,[])}}function K_(t){Co(t,"onDisconnectEvents");const e=Za(t),n=ba();Xc(t.onDisconnect_,it(),(s,o)=>{const a=rp(s,o,t.serverSyncTree_,e);Mm(n,s,a)});let r=[];Xc(n,it(),(s,o)=>{r=r.concat(vo(t.serverSyncTree_,s,o));const a=rd(t,s);di(t,a)}),t.onDisconnect_=ba(),Rn(t.eventQueue_,it(),r)}function J_(t,e,n){let r;qe(e._path)===".info"?r=rl(t.infoSyncTree_,e,n):r=rl(t.serverSyncTree_,e,n),up(t.eventQueue_,e._path,r)}function pp(t,e,n){let r;qe(e._path)===".info"?r=Na(t.infoSyncTree_,e,n):r=Na(t.serverSyncTree_,e,n),up(t.eventQueue_,e._path,r)}function X_(t){t.persistentConnection_&&t.persistentConnection_.interrupt(B_)}function Co(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Yt(n,...e)}function il(t,e,n,r){e&&gi(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let o=s;r&&(o+=": "+r);const a=new Error(o);a.code=s,e(a)}})}function fp(t,e,n){return Gl(t.serverSyncTree_,e,n)||Fe.EMPTY_NODE}function nd(t,e=t.transactionQueueTree_){if(e||ec(t,e),yi(e)){const n=bp(t,e);ie(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&Q_(t,_o(e),n)}else op(e)&&Ja(e,n=>{nd(t,n)})}function Q_(t,e,n){const r=n.map(u=>u.currentWriteId),s=fp(t,e,r);let o=s;const a=s.hash();for(let u=0;u<n.length;u++){const p=n[u];ie(p.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),p.status=1,p.retryCount++;const f=dn(e,p.path);o=o.updateChild(f,p.currentOutputSnapshotRaw)}const l=o.val(!0),d=e;t.server_.put(d.toString(),l,u=>{Co(t,"transaction put response",{path:d.toString(),status:u});let p=[];if(u==="ok"){const f=[];for(let g=0;g<n.length;g++)n[g].status=2,p=p.concat(Br(t.serverSyncTree_,n[g].currentWriteId)),n[g].onComplete&&f.push(()=>n[g].onComplete(null,!0,n[g].currentOutputSnapshotResolved)),n[g].unwatcher();ec(t,Xl(t.transactionQueueTree_,e)),nd(t,t.transactionQueueTree_),Rn(t.eventQueue_,e,p);for(let g=0;g<f.length;g++)gi(f[g])}else{if(u==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{un("transaction at "+d.toString()+" failed: "+u);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=u}di(t,e)}},a)}function di(t,e){const n=gp(t,e),r=_o(n),s=bp(t,n);return Z_(t,s,r),r}function Z_(t,e,n){if(e.length===0)return;const r=[];let s=[];const a=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const d=e[l],u=dn(n,d.path);let p=!1,f;if(ie(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),d.status===4)p=!0,f=d.abortReason,s=s.concat(Br(t.serverSyncTree_,d.currentWriteId,!0));else if(d.status===0)if(d.retryCount>=H_)p=!0,f="maxretry",s=s.concat(Br(t.serverSyncTree_,d.currentWriteId,!0));else{const g=fp(t,d.path,a);d.currentInputSnapshot=g;const S=e[l].update(g.val());if(S!==void 0){Xa("transaction failed: Data returned ",S,d.path);let _=jt(S);typeof S=="object"&&S!=null&&dr(S,".priority")||(_=_.updatePriority(g.getPriority()));const F=d.currentWriteId,P=Za(t),k=sp(_,g,P);d.currentOutputSnapshotRaw=_,d.currentOutputSnapshotResolved=k,d.currentWriteId=td(t),a.splice(a.indexOf(F),1),s=s.concat(Qm(t.serverSyncTree_,d.path,k,d.currentWriteId,d.applyLocally)),s=s.concat(Br(t.serverSyncTree_,F,!0))}else p=!0,f="nodata",s=s.concat(Br(t.serverSyncTree_,d.currentWriteId,!0))}Rn(t.eventQueue_,n,s),s=[],p&&(e[l].status=2,(function(g){setTimeout(g,Math.floor(0))})(e[l].unwatcher),e[l].onComplete&&(f==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(f),!1,null))))}ec(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)gi(r[l]);nd(t,t.transactionQueueTree_)}function gp(t,e){let n,r=t.transactionQueueTree_;for(n=qe(e);n!==null&&yi(r)===void 0;)r=Xl(r,n),e=gt(e),n=qe(e);return r}function bp(t,e){const n=[];return yp(t,e,n),n.sort((r,s)=>r.order-s.order),n}function yp(t,e,n){const r=yi(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);Ja(e,s=>{yp(t,s,n)})}function ec(t,e){const n=yi(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,ip(e,n.length>0?n:void 0)}Ja(e,r=>{ec(t,r)})}function rd(t,e){const n=_o(gp(t,e)),r=Xl(t.transactionQueueTree_,e);return T_(r,s=>{xc(t,s)}),xc(t,r),ap(r,s=>{xc(t,s)}),n}function xc(t,e){const n=yi(e);if(n){const r=[];let s=[],o=-1;for(let a=0;a<n.length;a++)n[a].status===3||(n[a].status===1?(ie(o===a-1,"All SENT items should be at beginning of queue."),o=a,n[a].status=3,n[a].abortReason="set"):(ie(n[a].status===0,"Unexpected transaction status in abort"),n[a].unwatcher(),s=s.concat(Br(t.serverSyncTree_,n[a].currentWriteId,!0)),n[a].onComplete&&r.push(n[a].onComplete.bind(null,new Error("set"),!1,null))));o===-1?ip(e,void 0):n.length=o+1,Rn(t.eventQueue_,_o(e),s);for(let a=0;a<r.length;a++)gi(r[a])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eC(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function tC(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):un(`Invalid query segment '${n}' in query '${t}'`)}return e}const xu=function(t,e){const n=nC(t),r=n.namespace;n.domain==="firebase.com"&&xr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&xr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||hy();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new _m(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new pt(n.pathString)}},nC=function(t){let e="",n="",r="",s="",o="",a=!0,l="https",d=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let p=t.indexOf("/");p===-1&&(p=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(p,f)),p<f&&(s=eC(t.substring(p,f)));const g=tC(t.substring(Math.min(t.length,f)));u=e.indexOf(":"),u>=0?(a=l==="https"||l==="wss",d=parseInt(e.substring(u+1),10)):u=e.length;const S=e.slice(0,u);if(S.toLowerCase()==="localhost")n="localhost";else if(S.split(".").length<=2)n=S;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),o=r}"ns"in g&&(o=g.ns)}return{host:e,port:d,domain:n,subdomain:r,secure:a,scheme:l,pathString:s,namespace:o}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",rC=(function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let s;const o=new Array(8);for(s=7;s>=0;s--)o[s]=Au.charAt(n%64),n=Math.floor(n/64);ie(n===0,"Cannot push at time == 0");let a=o.join("");if(r){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)a+=Au.charAt(e[s]);return ie(a.length===20,"nextPushId: Length should be 20."),a}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(e,n,r,s){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Lt(this.snapshot.exportVal())}}class iC{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return ie(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return Ke(this._path)?null:Rl(this._path)}get ref(){return new Rr(this._repo,this._path)}get _queryIdentifier(){const e=hu(this._queryParams),n=xl(e);return n==="{}"?"default":n}get _queryObject(){return hu(this._queryParams)}isEqual(e){if(e=It(e),!(e instanceof id))return!1;const n=this._repo===e._repo,r=kl(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+Ky(this._path)}}class Rr extends id{constructor(e,n){super(e,n,new Dl,!1)}get parent(){const e=Tm(this._path);return e===null?null:new Rr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ao{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new pt(e),r=co(this.ref,e);return new ao(this._node.getChild(n),r,xt)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new ao(s,co(this.ref,r),xt)))}hasChild(e){const n=new pt(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function fe(t,e){return t=It(t),t._checkNotDeleted("ref"),e!==void 0?co(t._root,e):t._root}function co(t,e){return t=It(t),qe(t._path)===null?M_("child","path",e):dp("child","path",e),new Rr(t._repo,Nt(t._path,e))}function xa(t,e){t=It(t),Zl("push",t._path),lp("push",e,t._path,!0);const n=mp(t._repo),r=rC(n),s=co(t,r),o=co(t,r);let a;return e!=null?a=At(o,e).then(()=>o):a=Promise.resolve(o),s.then=a.then.bind(a),s.catch=a.then.bind(a,void 0),s}function Gn(t){return Zl("remove",t._path),At(t,null)}function At(t,e){t=It(t),Zl("set",t._path),lp("set",e,t._path,!1);const n=new mo;return V_(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function wr(t,e){O_("update",e,t._path);const n=new mo;return Y_(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function ze(t){t=It(t);const e=new sd(()=>{}),n=new So(e);return q_(t._repo,t,n).then(r=>new ao(r,new Rr(t._repo,t._path),t._queryParams.getIndex()))}class So{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new sC("value",this,new ao(e.snapshotNode,new Rr(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new iC(this,e,n):null}matches(e){return e instanceof So?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function oC(t,e,n,r,s){const o=new sd(n,void 0),a=new So(o);return J_(t._repo,t,a),()=>pp(t._repo,t,a)}function qi(t,e,n,r){return oC(t,"value",e)}function aI(t,e,n){let r=null;const s=n?new sd(n):null;r=new So(s),pp(t._repo,t,r)}a_(Rr);h_(Rr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aC="FIREBASE_DATABASE_EMULATOR_HOST",ol={};let cC=!1;function lC(t,e,n,r){const s=e.lastIndexOf(":"),o=e.substring(0,s),a=Ir(o);t.repoInfo_=new _m(e,a,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(t.authTokenProvider_=r)}function dC(t,e,n,r,s){let o=r||t.options.databaseURL;o===void 0&&(t.options.projectId||xr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Yt("Using default host for project ",t.options.projectId),o=`${t.options.projectId}-default-rtdb.firebaseio.com`);let a=xu(o,s),l=a.repoInfo,d;typeof process<"u"&&Yd&&(d=Yd[aC]),d?(o=`http://${d}?ns=${l.namespace}`,a=xu(o,s),l=a.repoInfo):a.repoInfo.secure;const u=new wy(t.name,t.options,e);j_("Invalid Firebase Database URL",a),Ke(a.path)||xr("Database URL must point to the root of a Firebase Database (not including a child path).");const p=hC(l,t,u,new Sy(t,n));return new mC(p,t)}function uC(t,e){const n=ol[e];(!n||n[t.key]!==t)&&xr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),X_(t),delete n[t.key]}function hC(t,e,n,r){let s=ol[e.name];s||(s={},ol[e.name]=s);let o=s[t.toURLString()];return o&&xr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),o=new G_(t,cC,n,r),s[t.toURLString()]=o,o}class mC{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(W_(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Rr(this._repo,it())),this._rootInternal}_delete(){return this._rootInternal!==null&&(uC(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&xr("Cannot call "+e+" on a deleted database.")}}function Qs(t=fo(),e){const n=Tr(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Sl("database");r&&pC(n,...r)}return n}function pC(t,e,n,r={}){t=It(t),t._checkNotDeleted("useEmulator");const s=`${e}:${n}`,o=t._repoInternal;if(t._instanceStarted){if(s===t._repoInternal.repoInfo_.host&&Er(r,o.repoInfo_.emulatorOptions))return;xr("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let a;if(o.repoInfo_.nodeAdmin)r.mockUserToken&&xr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),a=new ta(ta.OWNER);else if(r.mockUserToken){const l=typeof r.mockUserToken=="string"?r.mockUserToken:Yh(r.mockUserToken,t.app.options.projectId);a=new ta(l)}Ir(e)&&(Ba(e),Ha("Database",!0)),lC(o,s,r,a)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fC(t){oy(Ts),Tn(new Nn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),o=e.getProvider("app-check-internal");return dC(r,s,o,n)},"PUBLIC").setMultipleInstances(!0)),rn(Kd,Jd,t),rn(Kd,Jd,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gC={".sv":"timestamp"};function bC(){return gC}Sr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Sr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};fC();function vp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const yC=vp,_p=new Is("auth","Firebase",vp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa=new po("@firebase/auth");function vC(t,...e){Aa.logLevel<=dt.WARN&&Aa.warn(`Auth (${Ts}): ${t}`,...e)}function na(t,...e){Aa.logLevel<=dt.ERROR&&Aa.error(`Auth (${Ts}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(t,...e){throw od(t,...e)}function ar(t,...e){return od(t,...e)}function Cp(t,e,n){const r={...yC(),[e]:n};return new Is("auth","Firebase",r).create(e,{appName:t.name})}function qr(t){return Cp(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function od(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return _p.create(t,...e)}function ke(t,e,...n){if(!t)throw od(e,...n)}function vr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw na(e),new Error(e)}function Ar(t,e){t||vr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(){return typeof self<"u"&&self.location?.href||""}function _C(){return Iu()==="http:"||Iu()==="https:"}function Iu(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_C()||Kh()||"connection"in navigator)?navigator.onLine:!0}function SC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ar(n>e,"Short delay should be less than long delay!"),this.isMobile=wl()||Jh()}get(){return CC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ad(t,e){Ar(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;vr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;vr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;vr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],NC=new wo(3e4,6e4);function Fs(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Xr(t,e,n,r,s={}){return wp(t,s,async()=>{let o={},a={};r&&(e==="GET"?a=r:o={body:JSON.stringify(r)});const l=fi({key:t.config.apiKey,...a}).slice(1),d=await t._getAdditionalHeaders();d["Content-Type"]="application/json",t.languageCode&&(d["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:d,...o};return Pg()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&Ir(t.emulatorConfig.host)&&(u.credentials="include"),Sp.fetch()(await Ep(t,t.config.apiHost,n,l),u)})}async function wp(t,e,n){t._canInitEmulator=!1;const r={...wC,...e};try{const s=new AC(t),o=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw Jo(t,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const l=o.ok?a.errorMessage:a.error.message,[d,u]=l.split(" : ");if(d==="FEDERATED_USER_ID_ALREADY_LINKED")throw Jo(t,"credential-already-in-use",a);if(d==="EMAIL_EXISTS")throw Jo(t,"email-already-in-use",a);if(d==="USER_DISABLED")throw Jo(t,"user-disabled",a);const p=r[d]||d.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Cp(t,p,u);Jn(t,p)}}catch(s){if(s instanceof kn)throw s;Jn(t,"network-request-failed",{message:String(s)})}}async function tc(t,e,n,r,s={}){const o=await Xr(t,e,n,r,s);return"mfaPendingCredential"in o&&Jn(t,"multi-factor-auth-required",{_serverResponse:o}),o}async function Ep(t,e,n,r){const s=`${e}${n}?${r}`,o=t,a=o.config.emulator?ad(t.config,s):`${t.config.apiScheme}://${s}`;return EC.includes(n)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(a).toString():a}function xC(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class AC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ar(this.auth,"network-request-failed")),NC.get())})}}function Jo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=ar(t,e,r);return s.customData._tokenResponse=n,s}function Tu(t){return t!==void 0&&t.enterprise!==void 0}class IC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return xC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function TC(t,e){return Xr(t,"GET","/v2/recaptchaConfig",Fs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RC(t,e){return Xr(t,"POST","/v1/accounts:delete",e)}async function Ia(t,e){return Xr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function kC(t,e=!1){const n=It(t),r=await n.getIdToken(e),s=cd(r);ke(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o=typeof s.firebase=="object"?s.firebase:void 0,a=o?.sign_in_provider;return{claims:s,token:r,authTime:Vi(Ac(s.auth_time)),issuedAtTime:Vi(Ac(s.iat)),expirationTime:Vi(Ac(s.exp)),signInProvider:a||null,signInSecondFactor:o?.sign_in_second_factor||null}}function Ac(t){return Number(t)*1e3}function cd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return na("JWT malformed, contained fewer than 3 sections"),null;try{const s=da(n);return s?JSON.parse(s):(na("Failed to decode base64 JWT payload"),null)}catch(s){return na("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Ru(t){const e=cd(t);return ke(e,"internal-error"),ke(typeof e.exp<"u","internal-error"),ke(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof kn&&FC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function FC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vi(this.lastLoginAt),this.creationTime=Vi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ta(t){const e=t.auth,n=await t.getIdToken(),r=await lo(t,Ia(e,{idToken:n}));ke(r?.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=s.providerUserInfo?.length?Np(s.providerUserInfo):[],a=DC(t.providerData,o),l=t.isAnonymous,d=!(t.email&&s.passwordHash)&&!a?.length,u=l?d:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new cl(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,p)}async function $C(t){const e=It(t);await Ta(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function DC(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Np(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OC(t,e){const n=await wp(t,{},async()=>{const r=fi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:o}=t.config,a=await Ep(t,s,"/v1/token",`key=${o}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const d={method:"POST",headers:l,body:r};return t.emulatorConfig&&Ir(t.emulatorConfig.host)&&(d.credentials="include"),Sp.fetch()(a,d)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function MC(t,e){return Xr(t,"POST","/v2/accounts:revokeToken",Fs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ke(e.idToken,"internal-error"),ke(typeof e.idToken<"u","internal-error"),ke(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ru(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ke(e.length!==0,"internal-error");const n=Ru(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ke(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:o}=await OC(e,n);this.updateTokensAndExpiration(r,s,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:o}=n,a=new Zs;return r&&(ke(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(ke(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),o&&(ke(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Zs,this.toJSON())}_performRefresh(){return vr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(t,e){ke(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Vn{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new PC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new cl(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await lo(this,this.stsTokenManager.getToken(this.auth,e));return ke(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return kC(this,e)}reload(){return $C(this)}_assign(e){this!==e&&(ke(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Vn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ke(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ta(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(wn(this.auth.app))return Promise.reject(qr(this.auth));const e=await this.getIdToken();return await lo(this,RC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,o=n.phoneNumber??void 0,a=n.photoURL??void 0,l=n.tenantId??void 0,d=n._redirectEventId??void 0,u=n.createdAt??void 0,p=n.lastLoginAt??void 0,{uid:f,emailVerified:g,isAnonymous:S,providerData:_,stsTokenManager:I}=n;ke(f&&I,e,"internal-error");const F=Zs.fromJSON(this.name,I);ke(typeof f=="string",e,"internal-error"),Dr(r,e.name),Dr(s,e.name),ke(typeof g=="boolean",e,"internal-error"),ke(typeof S=="boolean",e,"internal-error"),Dr(o,e.name),Dr(a,e.name),Dr(l,e.name),Dr(d,e.name),Dr(u,e.name),Dr(p,e.name);const P=new Vn({uid:f,auth:e,email:s,emailVerified:g,displayName:r,isAnonymous:S,photoURL:a,phoneNumber:o,tenantId:l,stsTokenManager:F,createdAt:u,lastLoginAt:p});return _&&Array.isArray(_)&&(P.providerData=_.map(k=>({...k}))),d&&(P._redirectEventId=d),P}static async _fromIdTokenResponse(e,n,r=!1){const s=new Zs;s.updateFromServerResponse(n);const o=new Vn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ta(o),o}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ke(s.localId!==void 0,"internal-error");const o=s.providerUserInfo!==void 0?Np(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!o?.length,l=new Zs;l.updateFromIdToken(r);const d=new Vn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new cl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!o?.length};return Object.assign(d,u),d}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku=new Map;function _r(t){Ar(t instanceof Function,"Expected a class definition");let e=ku.get(t);return e?(Ar(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ku.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}xp.type="NONE";const Fu=xp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(t,e,n){return`firebase:${t}:${e}:${n}`}class ei{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:o}=this.auth;this.fullUserKey=ra(this.userKey,s.apiKey,o),this.fullPersistenceKey=ra("persistence",s.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ia(this.auth,{idToken:e}).catch(()=>{});return n?Vn._fromGetAccountInfoResponse(this.auth,n,e):null}return Vn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ei(_r(Fu),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=s[0]||_r(Fu);const a=ra(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const p=await u._get(a);if(p){let f;if(typeof p=="string"){const g=await Ia(e,{idToken:p}).catch(()=>{});if(!g)break;f=await Vn._fromGetAccountInfoResponse(e,g,p)}else f=Vn._fromJSON(e,p);u!==o&&(l=f),o=u;break}}catch{}const d=s.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!d.length?new ei(o,e,r):(o=d[0],l&&await o._set(a,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(a)}catch{}})),new ei(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Rp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ap(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Fp(e))return"Blackberry";if(Pp(e))return"Webos";if(Ip(e))return"Safari";if((e.includes("chrome/")||Tp(e))&&!e.includes("edge/"))return"Chrome";if(kp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function Ap(t=mn()){return/firefox\//i.test(t)}function Ip(t=mn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Tp(t=mn()){return/crios\//i.test(t)}function Rp(t=mn()){return/iemobile/i.test(t)}function kp(t=mn()){return/android/i.test(t)}function Fp(t=mn()){return/blackberry/i.test(t)}function Pp(t=mn()){return/webos/i.test(t)}function ld(t=mn()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function jC(t=mn()){return ld(t)&&!!window.navigator?.standalone}function LC(){return $g()&&document.documentMode===10}function $p(t=mn()){return ld(t)||kp(t)||Pp(t)||Fp(t)||/windows phone/i.test(t)||Rp(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dp(t,e=[]){let n;switch(t){case"Browser":n=Pu(mn());break;case"Worker":n=`${Pu(mn())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ts}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((a,l)=>{try{const d=e(o);a(d)}catch(d){l(d)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BC(t,e={}){return Xr(t,"GET","/v2/passwordPolicy",Fs(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HC=6;class GC{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??HC,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $u(this),this.idTokenSubscription=new $u(this),this.beforeStateQueue=new UC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_p,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=_r(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await ei.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ia(this,{idToken:e}),r=await Vn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(wn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=this.redirectUser?._redirectEventId,a=r?._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&l?.user&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ke(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ta(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=SC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(wn(this.app))return Promise.reject(qr(this));const n=e?It(e):null;return n&&ke(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ke(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return wn(this.app)?Promise.reject(qr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return wn(this.app)?Promise.reject(qr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_r(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await BC(this),n=new GC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Is("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await MC(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&_r(e)||this._popupRedirectResolver;ke(n,this,"argument-error"),this.redirectPersistenceManager=await ei.create(this,[_r(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ke(l,this,"internal-error"),l.then(()=>{a||o(this.currentUser)}),typeof n=="function"){const d=e.addObserver(n,r,s);return()=>{a=!0,d()}}else{const d=e.addObserver(n);return()=>{a=!0,d()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ke(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Dp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(wn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&vC(`Error while retrieving App Check token: ${e.error}`),e?.token}}function vi(t){return It(t)}class $u{constructor(e){this.auth=e,this.observer=null,this.addObserver=Gg(n=>this.observer=n)}get next(){return ke(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function zC(t){nc=t}function Op(t){return nc.loadJS(t)}function qC(){return nc.recaptchaEnterpriseScript}function VC(){return nc.gapiScript}function YC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class KC{constructor(){this.enterprise=new JC}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class JC{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const XC="recaptcha-enterprise",Mp="NO_RECAPTCHA";class QC{constructor(e){this.type=XC,this.auth=vi(e)}async verify(e="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(a,l)=>{TC(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(d=>{if(d.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new IC(d);return o.tenantId==null?o._agentRecaptchaConfig=u:o._tenantRecaptchaConfigs[o.tenantId]=u,a(u.siteKey)}}).catch(d=>{l(d)})})}function s(o,a,l){const d=window.grecaptcha;Tu(d)?d.enterprise.ready(()=>{d.enterprise.execute(o,{action:e}).then(u=>{a(u)}).catch(()=>{a(Mp)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new KC().execute("siteKey",{action:"verify"}):new Promise((o,a)=>{r(this.auth).then(l=>{if(!n&&Tu(window.grecaptcha))s(l,o,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let d=qC();d.length!==0&&(d+=l),Op(d).then(()=>{s(l,o,a)}).catch(u=>{a(u)})}}).catch(l=>{a(l)})})}}async function Du(t,e,n,r=!1,s=!1){const o=new QC(t);let a;if(s)a=Mp;else try{a=await o.verify(n)}catch{a=await o.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const d=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:d,recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const d=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:a}):Object.assign(l,{captchaResponse:a}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Ou(t,e,n,r,s){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Du(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Du(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZC(t,e){const n=Tr(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),o=n.getOptions();if(Er(o,e??{}))return s;Jn(s,"already-initialized")}return n.initialize({options:e})}function eS(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(_r);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function tS(t,e,n){const r=vi(t);ke(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,o=jp(e),{host:a,port:l}=nS(e),d=l===null?"":`:${l}`,u={url:`${o}//${a}${d}/`},p=Object.freeze({host:a,port:l,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ke(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ke(Er(u,r.config.emulator)&&Er(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,Ir(a)?(Ba(`${o}//${a}${d}`),Ha("Auth",!0)):rS()}function jp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function nS(t){const e=jp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const o=s[1];return{host:o,port:Mu(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:Mu(a)}}}function Mu(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function rS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return vr("not implemented")}_getIdTokenResponse(e){return vr("not implemented")}_linkToIdToken(e,n){return vr("not implemented")}_getReauthenticationResolver(e){return vr("not implemented")}}async function sS(t,e){return Xr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iS(t,e){return tc(t,"POST","/v1/accounts:signInWithPassword",Fs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oS(t,e){return tc(t,"POST","/v1/accounts:signInWithEmailLink",Fs(t,e))}async function aS(t,e){return tc(t,"POST","/v1/accounts:signInWithEmailLink",Fs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo extends dd{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new uo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new uo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ou(e,n,"signInWithPassword",iS);case"emailLink":return oS(e,{email:this._email,oobCode:this._password});default:Jn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ou(e,r,"signUpPassword",sS);case"emailLink":return aS(e,{idToken:n,email:this._email,oobCode:this._password});default:Jn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ti(t,e){return tc(t,"POST","/v1/accounts:signInWithIdp",Fs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cS="http://localhost";class Es extends dd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Es(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Jn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...o}=n;if(!r||!s)return null;const a=new Es(r,s);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return ti(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ti(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ti(e,n)}buildRequest(){const e={requestUri:cS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=fi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lS(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function dS(t){const e=Oi(Mi(t)).link,n=e?Oi(Mi(e)).deep_link_id:null,r=Oi(Mi(t)).deep_link_id;return(r?Oi(Mi(r)).link:null)||r||n||e||t}class ud{constructor(e){const n=Oi(Mi(e)),r=n.apiKey??null,s=n.oobCode??null,o=lS(n.mode??null);ke(r&&s&&o,"argument-error"),this.apiKey=r,this.operation=o,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=dS(e);try{return new ud(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(){this.providerId=_i.PROVIDER_ID}static credential(e,n){return uo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ud.parseLink(n);return ke(r,"argument-error"),uo._fromEmailAndCode(e,r.code,r.tenantId)}}_i.PROVIDER_ID="password";_i.EMAIL_PASSWORD_SIGN_IN_METHOD="password";_i.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo extends Lp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr extends Eo{constructor(){super("facebook.com")}static credential(e){return Es._fromParams({providerId:Mr.PROVIDER_ID,signInMethod:Mr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mr.credentialFromTaggedObject(e)}static credentialFromError(e){return Mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mr.credential(e.oauthAccessToken)}catch{return null}}}Mr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Mr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr extends Eo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Es._fromParams({providerId:jr.PROVIDER_ID,signInMethod:jr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return jr.credentialFromTaggedObject(e)}static credentialFromError(e){return jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return jr.credential(n,r)}catch{return null}}}jr.GOOGLE_SIGN_IN_METHOD="google.com";jr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr extends Eo{constructor(){super("github.com")}static credential(e){return Es._fromParams({providerId:Lr.PROVIDER_ID,signInMethod:Lr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Lr.credentialFromTaggedObject(e)}static credentialFromError(e){return Lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Lr.credential(e.oauthAccessToken)}catch{return null}}}Lr.GITHUB_SIGN_IN_METHOD="github.com";Lr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur extends Eo{constructor(){super("twitter.com")}static credential(e,n){return Es._fromParams({providerId:Ur.PROVIDER_ID,signInMethod:Ur.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ur.credentialFromTaggedObject(e)}static credentialFromError(e){return Ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ur.credential(n,r)}catch{return null}}}Ur.TWITTER_SIGN_IN_METHOD="twitter.com";Ur.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const o=await Vn._fromIdTokenResponse(e,r,s),a=ju(r);return new ui({user:o,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=ju(r);return new ui({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function ju(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra extends kn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ra.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ra(e,n,r,s)}}function Up(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Ra._fromErrorAndOperation(t,o,e,r):o})}async function uS(t,e,n=!1){const r=await lo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ui._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hS(t,e,n=!1){const{auth:r}=t;if(wn(r.app))return Promise.reject(qr(r));const s="reauthenticate";try{const o=await lo(t,Up(r,s,e,t),n);ke(o.idToken,r,"internal-error");const a=cd(o.idToken);ke(a,r,"internal-error");const{sub:l}=a;return ke(t.uid===l,r,"user-mismatch"),ui._forOperation(t,s,o)}catch(o){throw o?.code==="auth/user-not-found"&&Jn(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bp(t,e,n=!1){if(wn(t.app))return Promise.reject(qr(t));const r="signIn",s=await Up(t,r,e),o=await ui._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(o.user),o}async function mS(t,e){return Bp(vi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pS(t){const e=vi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function Hp(t,e,n){return wn(t.app)?Promise.reject(qr(t)):mS(It(t),_i.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&pS(t),r})}function fS(t,e,n,r){return It(t).onIdTokenChanged(e,n,r)}function gS(t,e,n){return It(t).beforeAuthStateChanged(e,n)}function bS(t,e,n,r){return It(t).onAuthStateChanged(e,n,r)}function yS(t){return It(t).signOut()}const ka="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ka,"1"),this.storage.removeItem(ka),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vS=1e3,_S=10;class Wp extends Gp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=$p(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,l,d)=>{this.notifyListeners(a,d)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);LC()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,_S):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},vS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Wp.type="LOCAL";const CS=Wp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp extends Gp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}zp.type="SESSION";const qp=zp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new rc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:o}=n.data,a=this.handlersMap[s];if(!a?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async u=>u(n.origin,o)),d=await SS(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:d})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}rc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let o,a;return new Promise((l,d)=>{const u=hd("",20);s.port1.start();const p=setTimeout(()=>{d(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(f){const g=f;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(p),o=setTimeout(()=>{d(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),l(g.data.response);break;default:clearTimeout(p),clearTimeout(o),d(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(){return window}function ES(t){cr().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vp(){return typeof cr().WorkerGlobalScope<"u"&&typeof cr().importScripts=="function"}async function NS(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xS(){return navigator?.serviceWorker?.controller||null}function AS(){return Vp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yp="firebaseLocalStorageDb",IS=1,Fa="firebaseLocalStorage",Kp="fbase_key";class No{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function sc(t,e){return t.transaction([Fa],e?"readwrite":"readonly").objectStore(Fa)}function TS(){const t=indexedDB.deleteDatabase(Yp);return new No(t).toPromise()}function ll(){const t=indexedDB.open(Yp,IS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Fa,{keyPath:Kp})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Fa)?e(r):(r.close(),await TS(),e(await ll()))})})}async function Lu(t,e,n){const r=sc(t,!0).put({[Kp]:e,value:n});return new No(r).toPromise()}async function RS(t,e){const n=sc(t,!1).get(e),r=await new No(n).toPromise();return r===void 0?null:r.value}function Uu(t,e){const n=sc(t,!0).delete(e);return new No(n).toPromise()}const kS=800,FS=3;class Jp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ll(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>FS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Vp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rc._getInstance(AS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await NS(),!this.activeServiceWorker)return;this.sender=new wS(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||xS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ll();return await Lu(e,ka,"1"),await Uu(e,ka),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Lu(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>RS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Uu(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const o=sc(s,!1).getAll();return new No(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:o}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(o)&&(this.notifyListeners(s,o),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),kS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Jp.type="LOCAL";const PS=Jp;new wo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $S(t,e){return e?_r(e):(ke(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md extends dd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ti(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ti(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ti(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function DS(t){return Bp(t.auth,new md(t),t.bypassAuthState)}function OS(t){const{auth:e,user:n}=t;return ke(n,e,"internal-error"),hS(n,new md(t),t.bypassAuthState)}async function MS(t){const{auth:e,user:n}=t;return ke(n,e,"internal-error"),uS(n,new md(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(e,n,r,s,o=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:o,error:a,type:l}=e;if(a){this.reject(a);return}const d={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(d))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return DS;case"linkViaPopup":case"linkViaRedirect":return MS;case"reauthViaPopup":case"reauthViaRedirect":return OS;default:Jn(this.auth,"internal-error")}}resolve(e){Ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jS=new wo(2e3,1e4);class Ks extends Xp{constructor(e,n,r,s,o){super(e,n,s,o),this.provider=r,this.authWindow=null,this.pollId=null,Ks.currentPopupAction&&Ks.currentPopupAction.cancel(),Ks.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ke(e,this.auth,"internal-error"),e}async onExecution(){Ar(this.filter.length===1,"Popup operations only handle one event");const e=hd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ar(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(ar(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ks.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ar(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,jS.get())};e()}}Ks.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LS="pendingRedirect",sa=new Map;class US extends Xp{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=sa.get(this.auth._key());if(!e){try{const r=await BS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}sa.set(this.auth._key(),e)}return this.bypassAuthState||sa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function BS(t,e){const n=WS(e),r=GS(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function HS(t,e){sa.set(t._key(),e)}function GS(t){return _r(t._redirectPersistence)}function WS(t){return ra(LS,t.config.apiKey,t.name)}async function zS(t,e,n=!1){if(wn(t.app))return Promise.reject(qr(t));const r=vi(t),s=$S(r,e),a=await new US(r,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qS=600*1e3;class VS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!YS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!Qp(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";n.onError(ar(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=qS&&this.cachedEventUids.clear(),this.cachedEventUids.has(Bu(e))}saveEventToCache(e){this.cachedEventUids.add(Bu(e)),this.lastProcessedEventTime=Date.now()}}function Bu(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Qp({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function YS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Qp(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KS(t,e={}){return Xr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,XS=/^https?/;async function QS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await KS(t);for(const n of e)try{if(ZS(n))return}catch{}Jn(t,"unauthorized-domain")}function ZS(t){const e=al(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!XS.test(n))return!1;if(JS.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ew=new wo(3e4,6e4);function Hu(){const t=cr().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function tw(t){return new Promise((e,n)=>{function r(){Hu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Hu(),n(ar(t,"network-request-failed"))},timeout:ew.get()})}if(cr().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(cr().gapi?.load)r();else{const s=YC("iframefcb");return cr()[s]=()=>{gapi.load?r():n(ar(t,"network-request-failed"))},Op(`${VC()}?onload=${s}`).catch(o=>n(o))}}).catch(e=>{throw ia=null,e})}let ia=null;function nw(t){return ia=ia||tw(t),ia}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rw=new wo(5e3,15e3),sw="__/auth/iframe",iw="emulator/auth/iframe",ow={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},aw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cw(t){const e=t.config;ke(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ad(e,iw):`https://${t.config.authDomain}/${sw}`,r={apiKey:e.apiKey,appName:t.name,v:Ts},s=aw.get(t.config.apiHost);s&&(r.eid=s);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${fi(r).slice(1)}`}async function lw(t){const e=await nw(t),n=cr().gapi;return ke(n,t,"internal-error"),e.open({where:document.body,url:cw(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ow,dontclear:!0},r=>new Promise(async(s,o)=>{await r.restyle({setHideOnLeave:!1});const a=ar(t,"network-request-failed"),l=cr().setTimeout(()=>{o(a)},rw.get());function d(){cr().clearTimeout(l),s(r)}r.ping(d).then(d,()=>{o(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},uw=500,hw=600,mw="_blank",pw="http://localhost";class Gu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function fw(t,e,n,r=uw,s=hw){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const d={...dw,width:r.toString(),height:s.toString(),top:o,left:a},u=mn().toLowerCase();n&&(l=Tp(u)?mw:n),Ap(u)&&(e=e||pw,d.scrollbars="yes");const p=Object.entries(d).reduce((g,[S,_])=>`${g}${S}=${_},`,"");if(jC(u)&&l!=="_self")return gw(e||"",l),new Gu(null);const f=window.open(e||"",l,p);ke(f,t,"popup-blocked");try{f.focus()}catch{}return new Gu(f)}function gw(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bw="__/auth/handler",yw="emulator/auth/handler",vw=encodeURIComponent("fac");async function Wu(t,e,n,r,s,o){ke(t.config.authDomain,t,"auth-domain-config-required"),ke(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ts,eventId:s};if(e instanceof Lp){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",Hc(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,f]of Object.entries({}))a[p]=f}if(e instanceof Eo){const p=e.getScopes().filter(f=>f!=="");p.length>0&&(a.scopes=p.join(","))}t.tenantId&&(a.tid=t.tenantId);const l=a;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const d=await t._getAppCheckToken(),u=d?`#${vw}=${encodeURIComponent(d)}`:"";return`${_w(t)}?${fi(l).slice(1)}${u}`}function _w({config:t}){return t.emulator?ad(t,yw):`https://${t.authDomain}/${bw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic="webStorageSupport";class Cw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qp,this._completeRedirectFn=zS,this._overrideRedirectResult=HS}async _openPopup(e,n,r,s){Ar(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const o=await Wu(e,n,r,al(),s);return fw(e,o,hd())}async _openRedirect(e,n,r,s){await this._originValidation(e);const o=await Wu(e,n,r,al(),s);return ES(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:o}=this.eventManagers[n];return s?Promise.resolve(s):(Ar(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await lw(e),r=new VS(e);return n.register("authEvent",s=>(ke(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ic,{type:Ic},s=>{const o=s?.[0]?.[Ic];o!==void 0&&n(!!o),Jn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=QS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return $p()||Ip()||ld()}}const Sw=Cw;var zu="@firebase/auth",qu="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ke(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ew(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Nw(t){Tn(new Nn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;ke(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const d={apiKey:a,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Dp(t)},u=new WC(r,s,o,d);return eS(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Tn(new Nn("auth-internal",e=>{const n=vi(e.getProvider("auth").getImmediate());return(r=>new ww(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),rn(zu,qu,Ew(t)),rn(zu,qu,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xw=300,Aw=Vh("authIdTokenMaxAge")||xw;let Vu=null;const Iw=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Aw)return;const s=n?.token;Vu!==s&&(Vu=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Tw(t=fo()){const e=Tr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ZC(t,{popupRedirectResolver:Sw,persistence:[PS,CS,qp]}),r=Vh("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const a=Iw(o.toString());gS(n,a,()=>a(n.currentUser)),fS(n,l=>a(l))}}const s=zh("auth");return s&&tS(n,`http://${s}`),n}function Rw(){return document.getElementsByTagName("head")?.[0]??document}zC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const o=ar("internal-error");o.customData=s,n(o)},r.type="text/javascript",r.charset="UTF-8",Rw().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Nw("Browser");const Zp="@firebase/installations",pd="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ef=1e4,tf=`w:${pd}`,nf="FIS_v2",kw="https://firebaseinstallations.googleapis.com/v1",Fw=3600*1e3,Pw="installations",$w="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ns=new Is(Pw,$w,Dw);function rf(t){return t instanceof kn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sf({projectId:t}){return`${kw}/projects/${t}/installations`}function of(t){return{token:t.token,requestStatus:2,expiresIn:Mw(t.expiresIn),creationTime:Date.now()}}async function af(t,e){const r=(await e.json()).error;return Ns.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function cf({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Ow(t,{refreshToken:e}){const n=cf(t);return n.append("Authorization",jw(e)),n}async function lf(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Mw(t){return Number(t.replace("s","000"))}function jw(t){return`${nf} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lw({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=sf(t),s=cf(t),o=e.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const a={fid:n,authVersion:nf,appId:t.appId,sdkVersion:tf},l={method:"POST",headers:s,body:JSON.stringify(a)},d=await lf(()=>fetch(r,l));if(d.ok){const u=await d.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:of(u.authToken)}}else throw await af("Create Installation",d)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function df(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uw(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bw=/^[cdef][\w-]{21}$/,dl="";function Hw(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Gw(t);return Bw.test(n)?n:dl}catch{return dl}}function Gw(t){return Uw(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uf=new Map;function hf(t,e){const n=ic(t);mf(n,e),Ww(n,e)}function mf(t,e){const n=uf.get(t);if(n)for(const r of n)r(e)}function Ww(t,e){const n=zw();n&&n.postMessage({key:t,fid:e}),qw()}let gs=null;function zw(){return!gs&&"BroadcastChannel"in self&&(gs=new BroadcastChannel("[Firebase] FID Change"),gs.onmessage=t=>{mf(t.data.key,t.data.fid)}),gs}function qw(){uf.size===0&&gs&&(gs.close(),gs=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vw="firebase-installations-database",Yw=1,xs="firebase-installations-store";let Tc=null;function fd(){return Tc||(Tc=nm(Vw,Yw,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(xs)}}})),Tc}async function Pa(t,e){const n=ic(t),s=(await fd()).transaction(xs,"readwrite"),o=s.objectStore(xs),a=await o.get(n);return await o.put(e,n),await s.done,(!a||a.fid!==e.fid)&&hf(t,e.fid),e}async function pf(t){const e=ic(t),r=(await fd()).transaction(xs,"readwrite");await r.objectStore(xs).delete(e),await r.done}async function oc(t,e){const n=ic(t),s=(await fd()).transaction(xs,"readwrite"),o=s.objectStore(xs),a=await o.get(n),l=e(a);return l===void 0?await o.delete(n):await o.put(l,n),await s.done,l&&(!a||a.fid!==l.fid)&&hf(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gd(t){let e;const n=await oc(t.appConfig,r=>{const s=Kw(r),o=Jw(t,s);return e=o.registrationPromise,o.installationEntry});return n.fid===dl?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Kw(t){const e=t||{fid:Hw(),registrationStatus:0};return ff(e)}function Jw(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Ns.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Xw(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Qw(t)}:{installationEntry:e}}async function Xw(t,e){try{const n=await Lw(t,e);return Pa(t.appConfig,n)}catch(n){throw rf(n)&&n.customData.serverCode===409?await pf(t.appConfig):await Pa(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Qw(t){let e=await Yu(t.appConfig);for(;e.registrationStatus===1;)await df(100),e=await Yu(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await gd(t);return r||n}return e}function Yu(t){return oc(t,e=>{if(!e)throw Ns.create("installation-not-found");return ff(e)})}function ff(t){return Zw(t)?{fid:t.fid,registrationStatus:0}:t}function Zw(t){return t.registrationStatus===1&&t.registrationTime+ef<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eE({appConfig:t,heartbeatServiceProvider:e},n){const r=tE(t,n),s=Ow(t,n),o=e.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const a={installation:{sdkVersion:tf,appId:t.appId}},l={method:"POST",headers:s,body:JSON.stringify(a)},d=await lf(()=>fetch(r,l));if(d.ok){const u=await d.json();return of(u)}else throw await af("Generate Auth Token",d)}function tE(t,{fid:e}){return`${sf(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bd(t,e=!1){let n;const r=await oc(t.appConfig,o=>{if(!gf(o))throw Ns.create("not-registered");const a=o.authToken;if(!e&&sE(a))return o;if(a.requestStatus===1)return n=nE(t,e),o;{if(!navigator.onLine)throw Ns.create("app-offline");const l=oE(o);return n=rE(t,l),l}});return n?await n:r.authToken}async function nE(t,e){let n=await Ku(t.appConfig);for(;n.authToken.requestStatus===1;)await df(100),n=await Ku(t.appConfig);const r=n.authToken;return r.requestStatus===0?bd(t,e):r}function Ku(t){return oc(t,e=>{if(!gf(e))throw Ns.create("not-registered");const n=e.authToken;return aE(n)?{...e,authToken:{requestStatus:0}}:e})}async function rE(t,e){try{const n=await eE(t,e),r={...e,authToken:n};return await Pa(t.appConfig,r),n}catch(n){if(rf(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await pf(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await Pa(t.appConfig,r)}throw n}}function gf(t){return t!==void 0&&t.registrationStatus===2}function sE(t){return t.requestStatus===2&&!iE(t)}function iE(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Fw}function oE(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function aE(t){return t.requestStatus===1&&t.requestTime+ef<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cE(t){const e=t,{installationEntry:n,registrationPromise:r}=await gd(e);return r?r.catch(console.error):bd(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lE(t,e=!1){const n=t;return await dE(n),(await bd(n,e)).token}async function dE(t){const{registrationPromise:e}=await gd(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uE(t){if(!t||!t.options)throw Rc("App Configuration");if(!t.name)throw Rc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Rc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Rc(t){return Ns.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bf="installations",hE="installations-internal",mE=t=>{const e=t.getProvider("app").getImmediate(),n=uE(e),r=Tr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},pE=t=>{const e=t.getProvider("app").getImmediate(),n=Tr(e,bf).getImmediate();return{getId:()=>cE(n),getToken:s=>lE(n,s)}};function fE(){Tn(new Nn(bf,mE,"PUBLIC")),Tn(new Nn(hE,pE,"PRIVATE"))}fE();rn(Zp,pd);rn(Zp,pd,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a="analytics",gE="firebase_id",bE="origin",yE=60*1e3,vE="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",yd="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn=new po("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _E={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},En=new Is("analytics","Analytics",_E);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CE(t){if(!t.startsWith(yd)){const e=En.create("invalid-gtag-resource",{gtagURL:t});return hn.warn(e.message),""}return t}function yf(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function SE(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function wE(t,e){const n=SE("firebase-js-sdk-policy",{createScriptURL:CE}),r=document.createElement("script"),s=`${yd}?l=${t}&id=${e}`;r.src=n?n?.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function EE(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function NE(t,e,n,r,s,o){const a=r[s];try{if(a)await e[a];else{const d=(await yf(n)).find(u=>u.measurementId===s);d&&await e[d.appId]}}catch(l){hn.error(l)}t("config",s,o)}async function xE(t,e,n,r,s){try{let o=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const l=await yf(n);for(const d of a){const u=l.find(f=>f.measurementId===d),p=u&&e[u.appId];if(p)o.push(p);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),t("event",r,s||{})}catch(o){hn.error(o)}}function AE(t,e,n,r){async function s(o,...a){try{if(o==="event"){const[l,d]=a;await xE(t,e,n,l,d)}else if(o==="config"){const[l,d]=a;await NE(t,e,n,r,l,d)}else if(o==="consent"){const[l,d]=a;t("consent",l,d)}else if(o==="get"){const[l,d,u]=a;t("get",l,d,u)}else if(o==="set"){const[l]=a;t("set",l)}else t(o,...a)}catch(l){hn.error(l)}}return s}function IE(t,e,n,r,s){let o=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(o=window[s]),window[s]=AE(o,t,e,n),{gtagCore:o,wrappedGtag:window[s]}}function TE(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(yd)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RE=30,kE=1e3;class FE{constructor(e={},n=kE){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const vf=new FE;function PE(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function $E(t){const{appId:e,apiKey:n}=t,r={method:"GET",headers:PE(n)},s=vE.replace("{app-id}",e),o=await fetch(s,r);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();l.error?.message&&(a=l.error.message)}catch{}throw En.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function DE(t,e=vf,n){const{appId:r,apiKey:s,measurementId:o}=t.options;if(!r)throw En.create("no-app-id");if(!s){if(o)return{measurementId:o,appId:r};throw En.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new jE;return setTimeout(async()=>{l.abort()},yE),_f({appId:r,apiKey:s,measurementId:o},a,l,e)}async function _f(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=vf){const{appId:o,measurementId:a}=t;try{await OE(r,e)}catch(l){if(a)return hn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l?.message}]`),{appId:o,measurementId:a};throw l}try{const l=await $E(t);return s.deleteThrottleMetadata(o),l}catch(l){const d=l;if(!ME(d)){if(s.deleteThrottleMetadata(o),a)return hn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${d?.message}]`),{appId:o,measurementId:a};throw l}const u=Number(d?.customData?.httpStatus)===503?Ld(n,s.intervalMillis,RE):Ld(n,s.intervalMillis),p={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(o,p),hn.debug(`Calling attemptFetch again in ${u} millis`),_f(t,p,r,s)}}function OE(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),o=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(o),r(En.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function ME(t){if(!(t instanceof kn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class jE{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function LE(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const o=await e,a={...r,send_to:o};t("event",n,a)}}async function UE(t,e,n,r){if(r&&r.global){const s={};for(const o of Object.keys(n))s[`user_properties.${o}`]=n[o];return t("set",s),Promise.resolve()}else{const s=await e;t("config",s,{update:!0,user_properties:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BE(){if(Xh())try{await Qh()}catch(t){return hn.warn(En.create("indexeddb-unavailable",{errorInfo:t?.toString()}).message),!1}else return hn.warn(En.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function HE(t,e,n,r,s,o,a){const l=DE(t);l.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&hn.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>hn.error(g)),e.push(l);const d=BE().then(g=>{if(g)return r.getId()}),[u,p]=await Promise.all([l,d]);TE(o)||wE(o,u.measurementId),s("js",new Date);const f=a?.config??{};return f[bE]="firebase",f.update=!0,p!=null&&(f[gE]=p),s("config",u.measurementId,f),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(e){this.app=e}_delete(){return delete ni[this.app.options.appId],Promise.resolve()}}let ni={},Ju=[];const Xu={};let kc="dataLayer",WE="gtag",Qu,vd,Zu=!1;function zE(){const t=[];if(Kh()&&t.push("This is a browser extension environment."),Og()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=En.create("invalid-analytics-context",{errorInfo:e});hn.warn(n.message)}}function qE(t,e,n){zE();const r=t.options.appId;if(!r)throw En.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)hn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw En.create("no-api-key");if(ni[r]!=null)throw En.create("already-exists",{id:r});if(!Zu){EE(kc);const{wrappedGtag:o,gtagCore:a}=IE(ni,Ju,Xu,kc,WE);vd=o,Qu=a,Zu=!0}return ni[r]=HE(t,Ju,Xu,e,Qu,kc,n),new GE(t)}function VE(t=fo()){t=It(t);const e=Tr(t,$a);return e.isInitialized()?e.getImmediate():YE(t)}function YE(t,e={}){const n=Tr(t,$a);if(n.isInitialized()){const s=n.getImmediate();if(Er(e,n.getOptions()))return s;throw En.create("already-initialized")}return n.initialize({options:e})}function KE(t,e,n){t=It(t),UE(vd,ni[t.app.options.appId],e,n).catch(r=>hn.error(r))}function _d(t,e,n,r){t=It(t),LE(vd,ni[t.app.options.appId],e,n,r).catch(s=>hn.error(s))}const eh="@firebase/analytics",th="0.10.19";function JE(){Tn(new Nn($a,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return qE(r,s,n)},"PUBLIC")),Tn(new Nn("analytics-internal",t,"PRIVATE")),rn(eh,th),rn(eh,th,"esm2020");function t(e){try{const n=e.getProvider($a).getImmediate();return{logEvent:(r,s,o)=>_d(n,r,s,o),setUserProperties:(r,s)=>KE(n,r,s)}}catch(n){throw En.create("interop-component-reg-failed",{reason:n})}}}JE();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE="type.googleapis.com/google.protobuf.Int64Value",QE="type.googleapis.com/google.protobuf.UInt64Value";function Cf(t,e){const n={};for(const r in t)t.hasOwnProperty(r)&&(n[r]=e(t[r]));return n}function Da(t){if(t==null)return null;if(t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&isFinite(t)||t===!0||t===!1||Object.prototype.toString.call(t)==="[object String]")return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(e=>Da(e));if(typeof t=="function"||typeof t=="object")return Cf(t,e=>Da(e));throw new Error("Data cannot be encoded in JSON: "+t)}function hi(t){if(t==null)return t;if(t["@type"])switch(t["@type"]){case XE:case QE:{const e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(e=>hi(e)):typeof t=="function"||typeof t=="object"?Cf(t,e=>hi(e)):t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cd="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nh={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Cn extends kn{constructor(e,n,r){super(`${Cd}/${e}`,n||""),this.details=r,Object.setPrototypeOf(this,Cn.prototype)}}function ZE(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function Oa(t,e){let n=ZE(t),r=n,s;try{const o=e&&e.error;if(o){const a=o.status;if(typeof a=="string"){if(!nh[a])return new Cn("internal","internal");n=nh[a],r=a}const l=o.message;typeof l=="string"&&(r=l),s=o.details,s!==void 0&&(s=hi(s))}}catch{}return n==="ok"?null:new Cn(n,r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(e,n,r,s){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,wn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=n.getImmediate({optional:!0}),this.messaging=r.getImmediate({optional:!0}),this.auth||n.get().then(o=>this.auth=o,()=>{}),this.messaging||r.get().then(o=>this.messaging=o,()=>{}),this.appCheck||s?.get().then(o=>this.appCheck=o,()=>{})}async getAuthToken(){if(this.auth)try{return(await this.auth.getToken())?.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){const n=await this.getAuthToken(),r=await this.getMessagingToken(),s=await this.getAppCheckToken(e);return{authToken:n,messagingToken:r,appCheckToken:s}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ul="us-central1",t0=/^data: (.*?)(?:\n|$)/;function n0(t){let e=null;return{promise:new Promise((n,r)=>{e=setTimeout(()=>{r(new Cn("deadline-exceeded","deadline-exceeded"))},t)}),cancel:()=>{e&&clearTimeout(e)}}}class r0{constructor(e,n,r,s,o=ul,a=(...l)=>fetch(...l)){this.app=e,this.fetchImpl=a,this.emulatorOrigin=null,this.contextProvider=new e0(e,n,r,s),this.cancelAllRequests=new Promise(l=>{this.deleteService=()=>Promise.resolve(l())});try{const l=new URL(o);this.customDomain=l.origin+(l.pathname==="/"?"":l.pathname),this.region=ul}catch{this.customDomain=null,this.region=o}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function s0(t,e,n){const r=Ir(e);t.emulatorOrigin=`http${r?"s":""}://${e}:${n}`,r&&(Ba(t.emulatorOrigin+"/backends"),Ha("Functions",!0))}function i0(t,e,n){const r=s=>a0(t,e,s,{});return r.stream=(s,o)=>l0(t,e,s,o),r}function Sf(t){return t.emulatorOrigin&&Ir(t.emulatorOrigin)?"include":void 0}async function o0(t,e,n,r,s){n["Content-Type"]="application/json";let o;try{o=await r(t,{method:"POST",body:JSON.stringify(e),headers:n,credentials:Sf(s)})}catch{return{status:0,json:null}}let a=null;try{a=await o.json()}catch{}return{status:o.status,json:a}}async function wf(t,e){const n={},r=await t.contextProvider.getContext(e.limitedUseAppCheckTokens);return r.authToken&&(n.Authorization="Bearer "+r.authToken),r.messagingToken&&(n["Firebase-Instance-ID-Token"]=r.messagingToken),r.appCheckToken!==null&&(n["X-Firebase-AppCheck"]=r.appCheckToken),n}function a0(t,e,n,r){const s=t._url(e);return c0(t,s,n,r)}async function c0(t,e,n,r){n=Da(n);const s={data:n},o=await wf(t,r),a=r.timeout||7e4,l=n0(a),d=await Promise.race([o0(e,s,o,t.fetchImpl,t),l.promise,t.cancelAllRequests]);if(l.cancel(),!d)throw new Cn("cancelled","Firebase Functions instance was deleted.");const u=Oa(d.status,d.json);if(u)throw u;if(!d.json)throw new Cn("internal","Response is not valid JSON object.");let p=d.json.data;if(typeof p>"u"&&(p=d.json.result),typeof p>"u")throw new Cn("internal","Response is missing data field.");return{data:hi(p)}}function l0(t,e,n,r){const s=t._url(e);return d0(t,s,n,r||{})}async function d0(t,e,n,r){n=Da(n);const s={data:n},o=await wf(t,r);o["Content-Type"]="application/json",o.Accept="text/event-stream";let a;try{a=await t.fetchImpl(e,{method:"POST",body:JSON.stringify(s),headers:o,signal:r?.signal,credentials:Sf(t)})}catch(g){if(g instanceof Error&&g.name==="AbortError"){const _=new Cn("cancelled","Request was cancelled.");return{data:Promise.reject(_),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(_)}}}}}}const S=Oa(0,null);return{data:Promise.reject(S),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(S)}}}}}}let l,d;const u=new Promise((g,S)=>{l=g,d=S});r?.signal?.addEventListener("abort",()=>{const g=new Cn("cancelled","Request was cancelled.");d(g)});const p=a.body.getReader(),f=u0(p,l,d,r?.signal);return{stream:{[Symbol.asyncIterator](){const g=f.getReader();return{async next(){const{value:S,done:_}=await g.read();return{value:S,done:_}},async return(){return await g.cancel(),{done:!0,value:void 0}}}}},data:u}}function u0(t,e,n,r){const s=(a,l)=>{const d=a.match(t0);if(!d)return;const u=d[1];try{const p=JSON.parse(u);if("result"in p){e(hi(p.result));return}if("message"in p){l.enqueue(hi(p.message));return}if("error"in p){const f=Oa(0,p);l.error(f),n(f);return}}catch(p){if(p instanceof Cn){l.error(p),n(p);return}}},o=new TextDecoder;return new ReadableStream({start(a){let l="";return d();async function d(){if(r?.aborted){const u=new Cn("cancelled","Request was cancelled");return a.error(u),n(u),Promise.resolve()}try{const{value:u,done:p}=await t.read();if(p){l.trim()&&s(l.trim(),a),a.close();return}if(r?.aborted){const g=new Cn("cancelled","Request was cancelled");a.error(g),n(g),await t.cancel();return}l+=o.decode(u,{stream:!0});const f=l.split(`
`);l=f.pop()||"";for(const g of f)g.trim()&&s(g.trim(),a);return d()}catch(u){const p=u instanceof Cn?u:Oa(0,null);a.error(p),n(p)}}},cancel(){return t.cancel()}})}const rh="@firebase/functions",sh="0.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h0="auth-internal",m0="app-check-internal",p0="messaging-internal";function f0(t){const e=(n,{instanceIdentifier:r})=>{const s=n.getProvider("app").getImmediate(),o=n.getProvider(h0),a=n.getProvider(p0),l=n.getProvider(m0);return new r0(s,o,a,l,r)};Tn(new Nn(Cd,e,"PUBLIC").setMultipleInstances(!0)),rn(rh,sh,t),rn(rh,sh,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sd(t=fo(),e=ul){const r=Tr(It(t),Cd).getImmediate({identifier:e}),s=Sl("functions");return s&&g0(r,...s),r}function g0(t,e,n){s0(It(t),e,n)}function Qr(t,e,n){return i0(It(t),e)}f0();var ih=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var wd;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,y){function w(){}w.prototype=y.prototype,E.F=y.prototype,E.prototype=new w,E.prototype.constructor=E,E.D=function(N,v,A){for(var C=Array(arguments.length-2),M=2;M<arguments.length;M++)C[M-2]=arguments[M];return y.prototype[v].apply(N,C)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,y,w){w||(w=0);const N=Array(16);if(typeof y=="string")for(var v=0;v<16;++v)N[v]=y.charCodeAt(w++)|y.charCodeAt(w++)<<8|y.charCodeAt(w++)<<16|y.charCodeAt(w++)<<24;else for(v=0;v<16;++v)N[v]=y[w++]|y[w++]<<8|y[w++]<<16|y[w++]<<24;y=E.g[0],w=E.g[1],v=E.g[2];let A=E.g[3],C;C=y+(A^w&(v^A))+N[0]+3614090360&4294967295,y=w+(C<<7&4294967295|C>>>25),C=A+(v^y&(w^v))+N[1]+3905402710&4294967295,A=y+(C<<12&4294967295|C>>>20),C=v+(w^A&(y^w))+N[2]+606105819&4294967295,v=A+(C<<17&4294967295|C>>>15),C=w+(y^v&(A^y))+N[3]+3250441966&4294967295,w=v+(C<<22&4294967295|C>>>10),C=y+(A^w&(v^A))+N[4]+4118548399&4294967295,y=w+(C<<7&4294967295|C>>>25),C=A+(v^y&(w^v))+N[5]+1200080426&4294967295,A=y+(C<<12&4294967295|C>>>20),C=v+(w^A&(y^w))+N[6]+2821735955&4294967295,v=A+(C<<17&4294967295|C>>>15),C=w+(y^v&(A^y))+N[7]+4249261313&4294967295,w=v+(C<<22&4294967295|C>>>10),C=y+(A^w&(v^A))+N[8]+1770035416&4294967295,y=w+(C<<7&4294967295|C>>>25),C=A+(v^y&(w^v))+N[9]+2336552879&4294967295,A=y+(C<<12&4294967295|C>>>20),C=v+(w^A&(y^w))+N[10]+4294925233&4294967295,v=A+(C<<17&4294967295|C>>>15),C=w+(y^v&(A^y))+N[11]+2304563134&4294967295,w=v+(C<<22&4294967295|C>>>10),C=y+(A^w&(v^A))+N[12]+1804603682&4294967295,y=w+(C<<7&4294967295|C>>>25),C=A+(v^y&(w^v))+N[13]+4254626195&4294967295,A=y+(C<<12&4294967295|C>>>20),C=v+(w^A&(y^w))+N[14]+2792965006&4294967295,v=A+(C<<17&4294967295|C>>>15),C=w+(y^v&(A^y))+N[15]+1236535329&4294967295,w=v+(C<<22&4294967295|C>>>10),C=y+(v^A&(w^v))+N[1]+4129170786&4294967295,y=w+(C<<5&4294967295|C>>>27),C=A+(w^v&(y^w))+N[6]+3225465664&4294967295,A=y+(C<<9&4294967295|C>>>23),C=v+(y^w&(A^y))+N[11]+643717713&4294967295,v=A+(C<<14&4294967295|C>>>18),C=w+(A^y&(v^A))+N[0]+3921069994&4294967295,w=v+(C<<20&4294967295|C>>>12),C=y+(v^A&(w^v))+N[5]+3593408605&4294967295,y=w+(C<<5&4294967295|C>>>27),C=A+(w^v&(y^w))+N[10]+38016083&4294967295,A=y+(C<<9&4294967295|C>>>23),C=v+(y^w&(A^y))+N[15]+3634488961&4294967295,v=A+(C<<14&4294967295|C>>>18),C=w+(A^y&(v^A))+N[4]+3889429448&4294967295,w=v+(C<<20&4294967295|C>>>12),C=y+(v^A&(w^v))+N[9]+568446438&4294967295,y=w+(C<<5&4294967295|C>>>27),C=A+(w^v&(y^w))+N[14]+3275163606&4294967295,A=y+(C<<9&4294967295|C>>>23),C=v+(y^w&(A^y))+N[3]+4107603335&4294967295,v=A+(C<<14&4294967295|C>>>18),C=w+(A^y&(v^A))+N[8]+1163531501&4294967295,w=v+(C<<20&4294967295|C>>>12),C=y+(v^A&(w^v))+N[13]+2850285829&4294967295,y=w+(C<<5&4294967295|C>>>27),C=A+(w^v&(y^w))+N[2]+4243563512&4294967295,A=y+(C<<9&4294967295|C>>>23),C=v+(y^w&(A^y))+N[7]+1735328473&4294967295,v=A+(C<<14&4294967295|C>>>18),C=w+(A^y&(v^A))+N[12]+2368359562&4294967295,w=v+(C<<20&4294967295|C>>>12),C=y+(w^v^A)+N[5]+4294588738&4294967295,y=w+(C<<4&4294967295|C>>>28),C=A+(y^w^v)+N[8]+2272392833&4294967295,A=y+(C<<11&4294967295|C>>>21),C=v+(A^y^w)+N[11]+1839030562&4294967295,v=A+(C<<16&4294967295|C>>>16),C=w+(v^A^y)+N[14]+4259657740&4294967295,w=v+(C<<23&4294967295|C>>>9),C=y+(w^v^A)+N[1]+2763975236&4294967295,y=w+(C<<4&4294967295|C>>>28),C=A+(y^w^v)+N[4]+1272893353&4294967295,A=y+(C<<11&4294967295|C>>>21),C=v+(A^y^w)+N[7]+4139469664&4294967295,v=A+(C<<16&4294967295|C>>>16),C=w+(v^A^y)+N[10]+3200236656&4294967295,w=v+(C<<23&4294967295|C>>>9),C=y+(w^v^A)+N[13]+681279174&4294967295,y=w+(C<<4&4294967295|C>>>28),C=A+(y^w^v)+N[0]+3936430074&4294967295,A=y+(C<<11&4294967295|C>>>21),C=v+(A^y^w)+N[3]+3572445317&4294967295,v=A+(C<<16&4294967295|C>>>16),C=w+(v^A^y)+N[6]+76029189&4294967295,w=v+(C<<23&4294967295|C>>>9),C=y+(w^v^A)+N[9]+3654602809&4294967295,y=w+(C<<4&4294967295|C>>>28),C=A+(y^w^v)+N[12]+3873151461&4294967295,A=y+(C<<11&4294967295|C>>>21),C=v+(A^y^w)+N[15]+530742520&4294967295,v=A+(C<<16&4294967295|C>>>16),C=w+(v^A^y)+N[2]+3299628645&4294967295,w=v+(C<<23&4294967295|C>>>9),C=y+(v^(w|~A))+N[0]+4096336452&4294967295,y=w+(C<<6&4294967295|C>>>26),C=A+(w^(y|~v))+N[7]+1126891415&4294967295,A=y+(C<<10&4294967295|C>>>22),C=v+(y^(A|~w))+N[14]+2878612391&4294967295,v=A+(C<<15&4294967295|C>>>17),C=w+(A^(v|~y))+N[5]+4237533241&4294967295,w=v+(C<<21&4294967295|C>>>11),C=y+(v^(w|~A))+N[12]+1700485571&4294967295,y=w+(C<<6&4294967295|C>>>26),C=A+(w^(y|~v))+N[3]+2399980690&4294967295,A=y+(C<<10&4294967295|C>>>22),C=v+(y^(A|~w))+N[10]+4293915773&4294967295,v=A+(C<<15&4294967295|C>>>17),C=w+(A^(v|~y))+N[1]+2240044497&4294967295,w=v+(C<<21&4294967295|C>>>11),C=y+(v^(w|~A))+N[8]+1873313359&4294967295,y=w+(C<<6&4294967295|C>>>26),C=A+(w^(y|~v))+N[15]+4264355552&4294967295,A=y+(C<<10&4294967295|C>>>22),C=v+(y^(A|~w))+N[6]+2734768916&4294967295,v=A+(C<<15&4294967295|C>>>17),C=w+(A^(v|~y))+N[13]+1309151649&4294967295,w=v+(C<<21&4294967295|C>>>11),C=y+(v^(w|~A))+N[4]+4149444226&4294967295,y=w+(C<<6&4294967295|C>>>26),C=A+(w^(y|~v))+N[11]+3174756917&4294967295,A=y+(C<<10&4294967295|C>>>22),C=v+(y^(A|~w))+N[2]+718787259&4294967295,v=A+(C<<15&4294967295|C>>>17),C=w+(A^(v|~y))+N[9]+3951481745&4294967295,E.g[0]=E.g[0]+y&4294967295,E.g[1]=E.g[1]+(v+(C<<21&4294967295|C>>>11))&4294967295,E.g[2]=E.g[2]+v&4294967295,E.g[3]=E.g[3]+A&4294967295}r.prototype.v=function(E,y){y===void 0&&(y=E.length);const w=y-this.blockSize,N=this.C;let v=this.h,A=0;for(;A<y;){if(v==0)for(;A<=w;)s(this,E,A),A+=this.blockSize;if(typeof E=="string"){for(;A<y;)if(N[v++]=E.charCodeAt(A++),v==this.blockSize){s(this,N),v=0;break}}else for(;A<y;)if(N[v++]=E[A++],v==this.blockSize){s(this,N),v=0;break}}this.h=v,this.o+=y},r.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var y=1;y<E.length-8;++y)E[y]=0;y=this.o*8;for(var w=E.length-8;w<E.length;++w)E[w]=y&255,y/=256;for(this.v(E),E=Array(16),y=0,w=0;w<4;++w)for(let N=0;N<32;N+=8)E[y++]=this.g[w]>>>N&255;return E};function o(E,y){var w=l;return Object.prototype.hasOwnProperty.call(w,E)?w[E]:w[E]=y(E)}function a(E,y){this.h=y;const w=[];let N=!0;for(let v=E.length-1;v>=0;v--){const A=E[v]|0;N&&A==y||(w[v]=A,N=!1)}this.g=w}var l={};function d(E){return-128<=E&&E<128?o(E,function(y){return new a([y|0],y<0?-1:0)}):new a([E|0],E<0?-1:0)}function u(E){if(isNaN(E)||!isFinite(E))return f;if(E<0)return F(u(-E));const y=[];let w=1;for(let N=0;E>=w;N++)y[N]=E/w|0,w*=4294967296;return new a(y,0)}function p(E,y){if(E.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(E.charAt(0)=="-")return F(p(E.substring(1),y));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const w=u(Math.pow(y,8));let N=f;for(let A=0;A<E.length;A+=8){var v=Math.min(8,E.length-A);const C=parseInt(E.substring(A,A+v),y);v<8?(v=u(Math.pow(y,v)),N=N.j(v).add(u(C))):(N=N.j(w),N=N.add(u(C)))}return N}var f=d(0),g=d(1),S=d(16777216);t=a.prototype,t.m=function(){if(I(this))return-F(this).m();let E=0,y=1;for(let w=0;w<this.g.length;w++){const N=this.i(w);E+=(N>=0?N:4294967296+N)*y,y*=4294967296}return E},t.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(_(this))return"0";if(I(this))return"-"+F(this).toString(E);const y=u(Math.pow(E,6));var w=this;let N="";for(;;){const v=R(w,y).g;w=P(w,v.j(y));let A=((w.g.length>0?w.g[0]:w.h)>>>0).toString(E);if(w=v,_(w))return A+N;for(;A.length<6;)A="0"+A;N=A+N}},t.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function _(E){if(E.h!=0)return!1;for(let y=0;y<E.g.length;y++)if(E.g[y]!=0)return!1;return!0}function I(E){return E.h==-1}t.l=function(E){return E=P(this,E),I(E)?-1:_(E)?0:1};function F(E){const y=E.g.length,w=[];for(let N=0;N<y;N++)w[N]=~E.g[N];return new a(w,~E.h).add(g)}t.abs=function(){return I(this)?F(this):this},t.add=function(E){const y=Math.max(this.g.length,E.g.length),w=[];let N=0;for(let v=0;v<=y;v++){let A=N+(this.i(v)&65535)+(E.i(v)&65535),C=(A>>>16)+(this.i(v)>>>16)+(E.i(v)>>>16);N=C>>>16,A&=65535,C&=65535,w[v]=C<<16|A}return new a(w,w[w.length-1]&-2147483648?-1:0)};function P(E,y){return E.add(F(y))}t.j=function(E){if(_(this)||_(E))return f;if(I(this))return I(E)?F(this).j(F(E)):F(F(this).j(E));if(I(E))return F(this.j(F(E)));if(this.l(S)<0&&E.l(S)<0)return u(this.m()*E.m());const y=this.g.length+E.g.length,w=[];for(var N=0;N<2*y;N++)w[N]=0;for(N=0;N<this.g.length;N++)for(let v=0;v<E.g.length;v++){const A=this.i(N)>>>16,C=this.i(N)&65535,M=E.i(v)>>>16,B=E.i(v)&65535;w[2*N+2*v]+=C*B,k(w,2*N+2*v),w[2*N+2*v+1]+=A*B,k(w,2*N+2*v+1),w[2*N+2*v+1]+=C*M,k(w,2*N+2*v+1),w[2*N+2*v+2]+=A*M,k(w,2*N+2*v+2)}for(E=0;E<y;E++)w[E]=w[2*E+1]<<16|w[2*E];for(E=y;E<2*y;E++)w[E]=0;return new a(w,0)};function k(E,y){for(;(E[y]&65535)!=E[y];)E[y+1]+=E[y]>>>16,E[y]&=65535,y++}function D(E,y){this.g=E,this.h=y}function R(E,y){if(_(y))throw Error("division by zero");if(_(E))return new D(f,f);if(I(E))return y=R(F(E),y),new D(F(y.g),F(y.h));if(I(y))return y=R(E,F(y)),new D(F(y.g),y.h);if(E.g.length>30){if(I(E)||I(y))throw Error("slowDivide_ only works with positive integers.");for(var w=g,N=y;N.l(E)<=0;)w=$(w),N=$(N);var v=O(w,1),A=O(N,1);for(N=O(N,2),w=O(w,2);!_(N);){var C=A.add(N);C.l(E)<=0&&(v=v.add(w),A=C),N=O(N,1),w=O(w,1)}return y=P(E,v.j(y)),new D(v,y)}for(v=f;E.l(y)>=0;){for(w=Math.max(1,Math.floor(E.m()/y.m())),N=Math.ceil(Math.log(w)/Math.LN2),N=N<=48?1:Math.pow(2,N-48),A=u(w),C=A.j(y);I(C)||C.l(E)>0;)w-=N,A=u(w),C=A.j(y);_(A)&&(A=g),v=v.add(A),E=P(E,C)}return new D(v,E)}t.B=function(E){return R(this,E).h},t.and=function(E){const y=Math.max(this.g.length,E.g.length),w=[];for(let N=0;N<y;N++)w[N]=this.i(N)&E.i(N);return new a(w,this.h&E.h)},t.or=function(E){const y=Math.max(this.g.length,E.g.length),w=[];for(let N=0;N<y;N++)w[N]=this.i(N)|E.i(N);return new a(w,this.h|E.h)},t.xor=function(E){const y=Math.max(this.g.length,E.g.length),w=[];for(let N=0;N<y;N++)w[N]=this.i(N)^E.i(N);return new a(w,this.h^E.h)};function $(E){const y=E.g.length+1,w=[];for(let N=0;N<y;N++)w[N]=E.i(N)<<1|E.i(N-1)>>>31;return new a(w,E.h)}function O(E,y){const w=y>>5;y%=32;const N=E.g.length-w,v=[];for(let A=0;A<N;A++)v[A]=y>0?E.i(A+w)>>>y|E.i(A+w+1)<<32-y:E.i(A+w);return new a(v,E.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=u,a.fromString=p,wd=a}).apply(typeof ih<"u"?ih:typeof self<"u"?self:typeof window<"u"?window:{});var Xo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var t,e=Object.defineProperty;function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Xo=="object"&&Xo];for(var h=0;h<c.length;++h){var m=c[h];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function s(c,h){if(h)e:{var m=r;c=c.split(".");for(var x=0;x<c.length-1;x++){var U=c[x];if(!(U in m))break e;m=m[U]}c=c[c.length-1],x=m[c],h=h(x),h!=x&&h!=null&&e(m,c,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(c){return c||function(h){var m=[],x;for(x in h)Object.prototype.hasOwnProperty.call(h,x)&&m.push([x,h[x]]);return m}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(c){var h=typeof c;return h=="object"&&c!=null||h=="function"}function d(c,h,m){return c.call.apply(c.bind,arguments)}function u(c,h,m){return u=d,u.apply(null,arguments)}function p(c,h){var m=Array.prototype.slice.call(arguments,1);return function(){var x=m.slice();return x.push.apply(x,arguments),c.apply(this,x)}}function f(c,h){function m(){}m.prototype=h.prototype,c.Z=h.prototype,c.prototype=new m,c.prototype.constructor=c,c.Ob=function(x,U,z){for(var ce=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)ce[Be-2]=arguments[Be];return h.prototype[U].apply(x,ce)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function S(c){const h=c.length;if(h>0){const m=Array(h);for(let x=0;x<h;x++)m[x]=c[x];return m}return[]}function _(c,h){for(let x=1;x<arguments.length;x++){const U=arguments[x];var m=typeof U;if(m=m!="object"?m:U?Array.isArray(U)?"array":m:"null",m=="array"||m=="object"&&typeof U.length=="number"){m=c.length||0;const z=U.length||0;c.length=m+z;for(let ce=0;ce<z;ce++)c[m+ce]=U[ce]}else c.push(U)}}class I{constructor(h,m){this.i=h,this.j=m,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function F(c){a.setTimeout(()=>{throw c},0)}function P(){var c=E;let h=null;return c.g&&(h=c.g,c.g=c.g.next,c.g||(c.h=null),h.next=null),h}class k{constructor(){this.h=this.g=null}add(h,m){const x=D.get();x.set(h,m),this.h?this.h.next=x:this.g=x,this.h=x}}var D=new I(()=>new R,c=>c.reset());class R{constructor(){this.next=this.g=this.h=null}set(h,m){this.h=h,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let $,O=!1,E=new k,y=()=>{const c=Promise.resolve(void 0);$=()=>{c.then(w)}};function w(){for(var c;c=P();){try{c.h.call(c.g)}catch(m){F(m)}var h=D;h.j(c),h.h<100&&(h.h++,c.next=h.g,h.g=c)}O=!1}function N(){this.u=this.u,this.C=this.C}N.prototype.u=!1,N.prototype.dispose=function(){this.u||(this.u=!0,this.N())},N.prototype[Symbol.dispose]=function(){this.dispose()},N.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function v(c,h){this.type=c,this.g=this.target=h,this.defaultPrevented=!1}v.prototype.h=function(){this.defaultPrevented=!0};var A=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var c=!1,h=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const m=()=>{};a.addEventListener("test",m,h),a.removeEventListener("test",m,h)}catch{}return c})();function C(c){return/^[\s\xa0]*$/.test(c)}function M(c,h){v.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,h)}f(M,v),M.prototype.init=function(c,h){const m=this.type=c.type,x=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=h,h=c.relatedTarget,h||(m=="mouseover"?h=c.fromElement:m=="mouseout"&&(h=c.toElement)),this.relatedTarget=h,x?(this.clientX=x.clientX!==void 0?x.clientX:x.pageX,this.clientY=x.clientY!==void 0?x.clientY:x.pageY,this.screenX=x.screenX||0,this.screenY=x.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&M.Z.h.call(this)},M.prototype.h=function(){M.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var B="closure_listenable_"+(Math.random()*1e6|0),j=0;function V(c,h,m,x,U){this.listener=c,this.proxy=null,this.src=h,this.type=m,this.capture=!!x,this.ha=U,this.key=++j,this.da=this.fa=!1}function q(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Y(c,h,m){for(const x in c)h.call(m,c[x],x,c)}function ue(c,h){for(const m in c)h.call(void 0,c[m],m,c)}function te(c){const h={};for(const m in c)h[m]=c[m];return h}const se="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function X(c,h){let m,x;for(let U=1;U<arguments.length;U++){x=arguments[U];for(m in x)c[m]=x[m];for(let z=0;z<se.length;z++)m=se[z],Object.prototype.hasOwnProperty.call(x,m)&&(c[m]=x[m])}}function Z(c){this.src=c,this.g={},this.h=0}Z.prototype.add=function(c,h,m,x,U){const z=c.toString();c=this.g[z],c||(c=this.g[z]=[],this.h++);const ce=he(c,h,x,U);return ce>-1?(h=c[ce],m||(h.fa=!1)):(h=new V(h,this.src,z,!!x,U),h.fa=m,c.push(h)),h};function re(c,h){const m=h.type;if(m in c.g){var x=c.g[m],U=Array.prototype.indexOf.call(x,h,void 0),z;(z=U>=0)&&Array.prototype.splice.call(x,U,1),z&&(q(h),c.g[m].length==0&&(delete c.g[m],c.h--))}}function he(c,h,m,x){for(let U=0;U<c.length;++U){const z=c[U];if(!z.da&&z.listener==h&&z.capture==!!m&&z.ha==x)return U}return-1}var be="closure_lm_"+(Math.random()*1e6|0),ge={};function Re(c,h,m,x,U){if(Array.isArray(h)){for(let z=0;z<h.length;z++)Re(c,h[z],m,x,U);return null}return m=ne(m),c&&c[B]?c.J(h,m,l(x)?!!x.capture:!1,U):Pe(c,h,m,!1,x,U)}function Pe(c,h,m,x,U,z){if(!h)throw Error("Invalid event type");const ce=l(U)?!!U.capture:!!U;let Be=zt(c);if(Be||(c[be]=Be=new Z(c)),m=Be.add(h,m,x,ce,z),m.proxy)return m;if(x=Je(),m.proxy=x,x.src=c,x.listener=m,c.addEventListener)A||(U=ce),U===void 0&&(U=!1),c.addEventListener(h.toString(),x,U);else if(c.attachEvent)c.attachEvent(bt(h.toString()),x);else if(c.addListener&&c.removeListener)c.addListener(x);else throw Error("addEventListener and attachEvent are unavailable.");return m}function Je(){function c(m){return h.call(c.src,c.listener,m)}const h=Jt;return c}function we(c,h,m,x,U){if(Array.isArray(h))for(var z=0;z<h.length;z++)we(c,h[z],m,x,U);else x=l(x)?!!x.capture:!!x,m=ne(m),c&&c[B]?(c=c.i,z=String(h).toString(),z in c.g&&(h=c.g[z],m=he(h,m,x,U),m>-1&&(q(h[m]),Array.prototype.splice.call(h,m,1),h.length==0&&(delete c.g[z],c.h--)))):c&&(c=zt(c))&&(h=c.g[h.toString()],c=-1,h&&(c=he(h,m,x,U)),(m=c>-1?h[c]:null)&&Ge(m))}function Ge(c){if(typeof c!="number"&&c&&!c.da){var h=c.src;if(h&&h[B])re(h.i,c);else{var m=c.type,x=c.proxy;h.removeEventListener?h.removeEventListener(m,x,c.capture):h.detachEvent?h.detachEvent(bt(m),x):h.addListener&&h.removeListener&&h.removeListener(x),(m=zt(h))?(re(m,c),m.h==0&&(m.src=null,h[be]=null)):q(c)}}}function bt(c){return c in ge?ge[c]:ge[c]="on"+c}function Jt(c,h){if(c.da)c=!0;else{h=new M(h,this);const m=c.listener,x=c.ha||c.src;c.fa&&Ge(c),c=m.call(x,h)}return c}function zt(c){return c=c[be],c instanceof Z?c:null}var L="__closure_events_fn_"+(Math.random()*1e9>>>0);function ne(c){return typeof c=="function"?c:(c[L]||(c[L]=function(h){return c.handleEvent(h)}),c[L])}function W(){N.call(this),this.i=new Z(this),this.M=this,this.G=null}f(W,N),W.prototype[B]=!0,W.prototype.removeEventListener=function(c,h,m,x){we(this,c,h,m,x)};function oe(c,h){var m,x=c.G;if(x)for(m=[];x;x=x.G)m.push(x);if(c=c.M,x=h.type||h,typeof h=="string")h=new v(h,c);else if(h instanceof v)h.target=h.target||c;else{var U=h;h=new v(x,c),X(h,U)}U=!0;let z,ce;if(m)for(ce=m.length-1;ce>=0;ce--)z=h.g=m[ce],U=ae(z,x,!0,h)&&U;if(z=h.g=c,U=ae(z,x,!0,h)&&U,U=ae(z,x,!1,h)&&U,m)for(ce=0;ce<m.length;ce++)z=h.g=m[ce],U=ae(z,x,!1,h)&&U}W.prototype.N=function(){if(W.Z.N.call(this),this.i){var c=this.i;for(const h in c.g){const m=c.g[h];for(let x=0;x<m.length;x++)q(m[x]);delete c.g[h],c.h--}}this.G=null},W.prototype.J=function(c,h,m,x){return this.i.add(String(c),h,!1,m,x)},W.prototype.K=function(c,h,m,x){return this.i.add(String(c),h,!0,m,x)};function ae(c,h,m,x){if(h=c.i.g[String(h)],!h)return!0;h=h.concat();let U=!0;for(let z=0;z<h.length;++z){const ce=h[z];if(ce&&!ce.da&&ce.capture==m){const Be=ce.listener,Rt=ce.ha||ce.src;ce.fa&&re(c.i,ce),U=Be.call(Rt,x)!==!1&&U}}return U&&!x.defaultPrevented}function Ne(c,h){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=u(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:a.setTimeout(c,h||0)}function Se(c){c.g=Ne(()=>{c.g=null,c.i&&(c.i=!1,Se(c))},c.l);const h=c.h;c.h=null,c.m.apply(null,h)}class ye extends N{constructor(h,m){super(),this.m=h,this.l=m,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Se(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ae(c){N.call(this),this.h=c,this.g={}}f(Ae,N);var G=[];function Xe(c){Y(c.g,function(h,m){this.g.hasOwnProperty(m)&&Ge(h)},c),c.g={}}Ae.prototype.N=function(){Ae.Z.N.call(this),Xe(this)},Ae.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Le=a.JSON.stringify,Pt=a.JSON.parse,Me=class{stringify(c){return a.JSON.stringify(c,void 0)}parse(c){return a.JSON.parse(c,void 0)}};function K(){}function Ue(){}var We={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function He(){v.call(this,"d")}f(He,v);function Ie(){v.call(this,"c")}f(Ie,v);var De={},st=null;function yt(){return st=st||new W}De.Ia="serverreachability";function pn(c){v.call(this,De.Ia,c)}f(pn,v);function Ut(c){const h=yt();oe(h,new pn(h))}De.STAT_EVENT="statevent";function Dt(c,h){v.call(this,De.STAT_EVENT,c),this.stat=h}f(Dt,v);function ot(c){const h=yt();oe(h,new Dt(h,c))}De.Ja="timingevent";function Fn(c,h){v.call(this,De.Ja,c),this.size=h}f(Fn,v);function Tt(c,h){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){c()},h)}function Pn(){this.g=!0}Pn.prototype.ua=function(){this.g=!1};function on(c,h,m,x,U,z){c.info(function(){if(c.g)if(z){var ce="",Be=z.split("&");for(let ht=0;ht<Be.length;ht++){var Rt=Be[ht].split("=");if(Rt.length>1){const kt=Rt[0];Rt=Rt[1];const xn=kt.split("_");ce=xn.length>=2&&xn[1]=="type"?ce+(kt+"="+Rt+"&"):ce+(kt+"=redacted&")}}}else ce=null;else ce=z;return"XMLHTTP REQ ("+x+") [attempt "+U+"]: "+h+`
`+m+`
`+ce})}function Ot(c,h,m,x,U,z,ce){c.info(function(){return"XMLHTTP RESP ("+x+") [ attempt "+U+"]: "+h+`
`+m+`
`+z+" "+ce})}function Xt(c,h,m,x){c.info(function(){return"XMLHTTP TEXT ("+h+"): "+$n(c,m)+(x?" "+x:"")})}function $s(c,h){c.info(function(){return"TIMEOUT: "+h})}Pn.prototype.info=function(){};function $n(c,h){if(!c.g)return h;if(!h)return null;try{const z=JSON.parse(h);if(z){for(c=0;c<z.length;c++)if(Array.isArray(z[c])){var m=z[c];if(!(m.length<2)){var x=m[1];if(Array.isArray(x)&&!(x.length<1)){var U=x[0];if(U!="noop"&&U!="stop"&&U!="close")for(let ce=1;ce<x.length;ce++)x[ce]=""}}}}return Le(z)}catch{return h}}var Sn={NO_ERROR:0,TIMEOUT:8},Zr={},$e;function fn(){}f(fn,K),fn.prototype.g=function(){return new XMLHttpRequest},$e=new fn;function rt(c){return encodeURIComponent(String(c))}function Bt(c){var h=1;c=c.split(":");const m=[];for(;h>0&&c.length;)m.push(c.shift()),h--;return c.length&&m.push(c.join(":")),m}function gn(c,h,m,x){this.j=c,this.i=h,this.l=m,this.S=x||1,this.V=new Ae(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new mr}function mr(){this.i=null,this.g="",this.h=!1}var Xn={},Dn={};function On(c,h,m){c.M=1,c.A=Qt(me(h)),c.u=m,c.R=!0,bn(c,null)}function bn(c,h){c.F=Date.now(),an(c),c.B=me(c.A);var m=c.B,x=c.S;Array.isArray(x)||(x=[String(x)]),Po(m.i,"t",x),c.C=0,m=c.j.L,c.h=new mr,c.g=Ws(c.j,m?h:null,!c.u),c.P>0&&(c.O=new ye(u(c.Y,c,c.g),c.P)),h=c.V,m=c.g,x=c.ba;var U="readystatechange";Array.isArray(U)||(U&&(G[0]=U.toString()),U=G);for(let z=0;z<U.length;z++){const ce=Re(m,U[z],x||h.handleEvent,!1,h.h||h);if(!ce)break;h.g[ce.key]=ce}h=c.J?te(c.J):{},c.u?(c.v||(c.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,h)):(c.v="GET",c.g.ea(c.B,c.v,null,h)),Ut(),on(c.i,c.v,c.B,c.l,c.S,c.u)}gn.prototype.ba=function(c){c=c.target;const h=this.O;h&&Ln(c)==3?h.j():this.Y(c)},gn.prototype.Y=function(c){try{if(c==this.g)e:{const Be=Ln(this.g),Rt=this.g.ya(),ht=this.g.ca();if(!(Be<3)&&(Be!=3||this.g&&(this.h.h||this.g.la()||jo(this.g)))){this.K||Be!=4||Rt==7||(Rt==8||ht<=0?Ut(3):Ut(2)),Oe(this);var h=this.g.ca();this.X=h;var m=Mt(this);if(this.o=h==200,Ot(this.i,this.v,this.B,this.l,this.S,Be,h),this.o){if(this.U&&!this.L){t:{if(this.g){var x,U=this.g;if((x=U.g?U.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C(x)){var z=x;break t}}z=null}if(c=z)Xt(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Mn(this,c);else{this.o=!1,this.m=3,ot(12),Ht(this),vt(this);break e}}if(this.R){c=!0;let kt;for(;!this.K&&this.C<m.length;)if(kt=kr(this,m),kt==Dn){Be==4&&(this.m=4,ot(14),c=!1),Xt(this.i,this.l,null,"[Incomplete Response]");break}else if(kt==Xn){this.m=4,ot(15),Xt(this.i,this.l,m,"[Invalid Chunk]"),c=!1;break}else Xt(this.i,this.l,kt,null),Mn(this,kt);if(es(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Be!=4||m.length!=0||this.h.h||(this.m=1,ot(16),c=!1),this.o=this.o&&c,!c)Xt(this.i,this.l,m,"[Invalid Chunked Response]"),Ht(this),vt(this);else if(m.length>0&&!this.W){this.W=!0;var ce=this.j;ce.g==this&&ce.aa&&!ce.P&&(ce.j.info("Great, no buffering proxy detected. Bytes received: "+m.length),Ii(ce),ce.P=!0,ot(11))}}else Xt(this.i,this.l,m,null),Mn(this,m);Be==4&&Ht(this),this.o&&!this.K&&(Be==4?Ti(this.j,this):(this.o=!1,an(this)))}else Lo(this.g),h==400&&m.indexOf("Unknown SID")>0?(this.m=3,ot(12)):(this.m=0,ot(13)),Ht(this),vt(this)}}}catch{}finally{}};function Mt(c){if(!es(c))return c.g.la();const h=jo(c.g);if(h==="")return"";let m="";const x=h.length,U=Ln(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return Ht(c),vt(c),"";c.h.i=new a.TextDecoder}for(let z=0;z<x;z++)c.h.h=!0,m+=c.h.i.decode(h[z],{stream:!(U&&z==x-1)});return h.length=0,c.h.g+=m,c.C=0,c.h.g}function es(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function kr(c,h){var m=c.C,x=h.indexOf(`
`,m);return x==-1?Dn:(m=Number(h.substring(m,x)),isNaN(m)?Xn:(x+=1,x+m>h.length?Dn:(h=h.slice(x,x+m),c.C=x+m,h)))}gn.prototype.cancel=function(){this.K=!0,Ht(this)};function an(c){c.T=Date.now()+c.H,ee(c,c.H)}function ee(c,h){if(c.D!=null)throw Error("WatchDog timer not null");c.D=Tt(u(c.aa,c),h)}function Oe(c){c.D&&(a.clearTimeout(c.D),c.D=null)}gn.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?($s(this.i,this.B),this.M!=2&&(Ut(),ot(17)),Ht(this),this.m=2,vt(this)):ee(this,this.T-c)};function vt(c){c.j.I==0||c.K||Ti(c.j,c)}function Ht(c){Oe(c);var h=c.O;h&&typeof h.dispose=="function"&&h.dispose(),c.O=null,Xe(c.V),c.g&&(h=c.g,c.g=null,h.abort(),h.dispose())}function Mn(c,h){try{var m=c.j;if(m.I!=0&&(m.g==c||ns(m.h,c))){if(!c.L&&ns(m.h,c)&&m.I==3){try{var x=m.Ba.g.parse(h)}catch{x=null}if(Array.isArray(x)&&x.length==3){var U=x;if(U[0]==0){e:if(!m.v){if(m.g)if(m.g.F+3e3<c.F)Hs(m),Ls(m);else break e;Ai(m),ot(18)}}else m.xa=U[1],0<m.xa-m.K&&U[2]<37500&&m.F&&m.A==0&&!m.C&&(m.C=Tt(u(m.Va,m),6e3));ts(m.h)<=1&&m.ta&&(m.ta=void 0)}else Un(m,11)}else if((c.L||m.g==c)&&Hs(m),!C(h))for(U=m.Ba.g.parse(h),h=0;h<U.length;h++){let ht=U[h];const kt=ht[0];if(!(kt<=m.K))if(m.K=kt,ht=ht[1],m.I==2)if(ht[0]=="c"){m.M=ht[1],m.ba=ht[2];const xn=ht[3];xn!=null&&(m.ka=xn,m.j.info("VER="+m.ka));const T=ht[4];T!=null&&(m.za=T,m.j.info("SVER="+m.za));const J=ht[5];J!=null&&typeof J=="number"&&J>0&&(x=1.5*J,m.O=x,m.j.info("backChannelRequestTimeoutMs_="+x)),x=m;const le=c.g;if(le){const xe=le.g?le.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(xe){var z=x.h;z.g||xe.indexOf("spdy")==-1&&xe.indexOf("quic")==-1&&xe.indexOf("h2")==-1||(z.j=z.l,z.g=new Set,z.h&&(rs(z,z.h),z.h=null))}if(x.G){const lt=le.g?le.g.getResponseHeader("X-HTTP-Session-Id"):null;lt&&(x.wa=lt,Ye(x.J,x.G,lt))}}m.I=3,m.l&&m.l.ra(),m.aa&&(m.T=Date.now()-c.F,m.j.info("Handshake RTT: "+m.T+"ms")),x=m;var ce=c;if(x.na=Wo(x,x.L?x.ba:null,x.W),ce.L){H(x.h,ce);var Be=ce,Rt=x.O;Rt&&(Be.H=Rt),Be.D&&(Oe(Be),an(Be)),x.g=ce}else Ho(x);m.i.length>0&&Us(m)}else ht[0]!="stop"&&ht[0]!="close"||Un(m,7);else m.I==3&&(ht[0]=="stop"||ht[0]=="close"?ht[0]=="stop"?Un(m,7):Ni(m):ht[0]!="noop"&&m.l&&m.l.qa(ht),m.A=0)}}Ut(4)}catch{}}var pr=class{constructor(c,h){this.g=c,this.map=h}};function Fr(c){this.l=c||10,a.PerformanceNavigationTiming?(c=a.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function wt(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function ts(c){return c.h?1:c.g?c.g.size:0}function ns(c,h){return c.h?c.h==h:c.g?c.g.has(h):!1}function rs(c,h){c.g?c.g.add(h):c.h=h}function H(c,h){c.h&&c.h==h?c.h=null:c.g&&c.g.has(h)&&c.g.delete(h)}Fr.prototype.cancel=function(){if(this.i=Q(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Q(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let h=c.i;for(const m of c.g.values())h=h.concat(m.G);return h}return S(c.i)}var ve=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _e(c,h){if(c){c=c.split("&");for(let m=0;m<c.length;m++){const x=c[m].indexOf("=");let U,z=null;x>=0?(U=c[m].substring(0,x),z=c[m].substring(x+1)):U=c[m],h(U,z?decodeURIComponent(z.replace(/\+/g," ")):"")}}}function Ce(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;c instanceof Ce?(this.l=c.l,je(this,c.j),this.o=c.o,this.g=c.g,at(this,c.u),this.h=c.h,yn(this,$o(c.i)),this.m=c.m):c&&(h=String(c).match(ve))?(this.l=!1,je(this,h[1]||"",!0),this.o=jn(h[2]||""),this.g=jn(h[3]||"",!0),at(this,h[4]),this.h=jn(h[5]||"",!0),yn(this,h[6]||"",!0),this.m=jn(h[7]||"")):(this.l=!1,this.i=new is(null,this.l))}Ce.prototype.toString=function(){const c=[];var h=this.j;h&&c.push(Zt(h,Ro,!0),":");var m=this.g;return(m||h=="file")&&(c.push("//"),(h=this.o)&&c.push(Zt(h,Ro,!0),"@"),c.push(rt(m).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.u,m!=null&&c.push(":",String(m))),(m=this.h)&&(this.g&&m.charAt(0)!="/"&&c.push("/"),c.push(Zt(m,m.charAt(0)=="/"?kd:lc,!0))),(m=this.i.toString())&&c.push("?",m),(m=this.m)&&c.push("#",Zt(m,ss)),c.join("")},Ce.prototype.resolve=function(c){const h=me(this);let m=!!c.j;m?je(h,c.j):m=!!c.o,m?h.o=c.o:m=!!c.g,m?h.g=c.g:m=c.u!=null;var x=c.h;if(m)at(h,c.u);else if(m=!!c.h){if(x.charAt(0)!="/")if(this.g&&!this.h)x="/"+x;else{var U=h.h.lastIndexOf("/");U!=-1&&(x=h.h.slice(0,U+1)+x)}if(U=x,U==".."||U==".")x="";else if(U.indexOf("./")!=-1||U.indexOf("/.")!=-1){x=U.lastIndexOf("/",0)==0,U=U.split("/");const z=[];for(let ce=0;ce<U.length;){const Be=U[ce++];Be=="."?x&&ce==U.length&&z.push(""):Be==".."?((z.length>1||z.length==1&&z[0]!="")&&z.pop(),x&&ce==U.length&&z.push("")):(z.push(Be),x=!0)}x=z.join("/")}else x=U}return m?h.h=x:m=c.i.toString()!=="",m?yn(h,$o(c.i)):m=!!c.m,m&&(h.m=c.m),h};function me(c){return new Ce(c)}function je(c,h,m){c.j=m?jn(h,!0):h,c.j&&(c.j=c.j.replace(/:$/,""))}function at(c,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);c.u=h}else c.u=null}function yn(c,h,m){h instanceof is?(c.i=h,dc(c.i,c.l)):(m||(h=Zt(h,Fd)),c.i=new is(h,c.l))}function Ye(c,h,m){c.i.set(h,m)}function Qt(c){return Ye(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function jn(c,h){return c?h?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Zt(c,h,m){return typeof c=="string"?(c=encodeURI(c).replace(h,Ci),m&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Ci(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Ro=/[#\/\?@]/g,lc=/[#\?:]/g,kd=/[#\?]/g,Fd=/[#\?@]/g,ss=/#/g;function is(c,h){this.h=this.g=null,this.i=c||null,this.j=!!h}function Qn(c){c.g||(c.g=new Map,c.h=0,c.i&&_e(c.i,function(h,m){c.add(decodeURIComponent(h.replace(/\+/g," ")),m)}))}t=is.prototype,t.add=function(c,h){Qn(this),this.i=null,c=er(this,c);let m=this.g.get(c);return m||this.g.set(c,m=[]),m.push(h),this.h+=1,this};function ko(c,h){Qn(c),h=er(c,h),c.g.has(h)&&(c.i=null,c.h-=c.g.get(h).length,c.g.delete(h))}function Fo(c,h){return Qn(c),h=er(c,h),c.g.has(h)}t.forEach=function(c,h){Qn(this),this.g.forEach(function(m,x){m.forEach(function(U){c.call(h,U,x,this)},this)},this)};function Zn(c,h){Qn(c);let m=[];if(typeof h=="string")Fo(c,h)&&(m=m.concat(c.g.get(er(c,h))));else for(c=Array.from(c.g.values()),h=0;h<c.length;h++)m=m.concat(c[h]);return m}t.set=function(c,h){return Qn(this),this.i=null,c=er(this,c),Fo(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[h]),this.h+=1,this},t.get=function(c,h){return c?(c=Zn(this,c),c.length>0?String(c[0]):h):h};function Po(c,h,m){ko(c,h),m.length>0&&(c.i=null,c.g.set(er(c,h),S(m)),c.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],h=Array.from(this.g.keys());for(let x=0;x<h.length;x++){var m=h[x];const U=rt(m);m=Zn(this,m);for(let z=0;z<m.length;z++){let ce=U;m[z]!==""&&(ce+="="+rt(m[z])),c.push(ce)}}return this.i=c.join("&")};function $o(c){const h=new is;return h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),h}function er(c,h){return h=String(h),c.j&&(h=h.toLowerCase()),h}function dc(c,h){h&&!c.j&&(Qn(c),c.i=null,c.g.forEach(function(m,x){const U=x.toLowerCase();x!=U&&(ko(this,x),Po(this,U,m))},c)),c.j=h}function os(c,h){const m=new Pn;if(a.Image){const x=new Image;x.onload=p(tr,m,"TestLoadImage: loaded",!0,h,x),x.onerror=p(tr,m,"TestLoadImage: error",!1,h,x),x.onabort=p(tr,m,"TestLoadImage: abort",!1,h,x),x.ontimeout=p(tr,m,"TestLoadImage: timeout",!1,h,x),a.setTimeout(function(){x.ontimeout&&x.ontimeout()},1e4),x.src=c}else h(!1)}function uc(c,h){const m=new Pn,x=new AbortController,U=setTimeout(()=>{x.abort(),tr(m,"TestPingServer: timeout",!1,h)},1e4);fetch(c,{signal:x.signal}).then(z=>{clearTimeout(U),z.ok?tr(m,"TestPingServer: ok",!0,h):tr(m,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(U),tr(m,"TestPingServer: error",!1,h)})}function tr(c,h,m,x,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),x(m)}catch{}}function hc(){this.g=new Me}function Si(c){this.i=c.Sb||null,this.h=c.ab||!1}f(Si,K),Si.prototype.g=function(){return new Ds(this.i,this.h)};function Ds(c,h){W.call(this),this.H=c,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}f(Ds,W),t=Ds.prototype,t.open=function(c,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=h,this.readyState=1,cs(this)},t.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(h.body=c),(this.H||a).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,as(this)),this.readyState=0},t.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,cs(this)),this.g&&(this.readyState=3,cs(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Do(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function Do(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}t.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var h=c.value?c.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!c.done}))&&(this.response=this.responseText+=h)}c.done?as(this):cs(this),this.readyState==3&&Do(this)}},t.Oa=function(c){this.g&&(this.response=this.responseText=c,as(this))},t.Na=function(c){this.g&&(this.response=c,as(this))},t.ga=function(){this.g&&as(this)};function as(c){c.readyState=4,c.l=null,c.j=null,c.B=null,cs(c)}t.setRequestHeader=function(c,h){this.A.append(c,h)},t.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],h=this.h.entries();for(var m=h.next();!m.done;)m=m.value,c.push(m[0]+": "+m[1]),m=h.next();return c.join(`\r
`)};function cs(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Ds.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Oo(c){let h="";return Y(c,function(m,x){h+=x,h+=":",h+=m,h+=`\r
`}),h}function Os(c,h,m){e:{for(x in m){var x=!1;break e}x=!0}x||(m=Oo(m),typeof c=="string"?m!=null&&rt(m):Ye(c,h,m))}function ct(c){W.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}f(ct,W);var mc=/^https?$/i,Ms=["POST","PUT"];t=ct.prototype,t.Fa=function(c){this.H=c},t.ea=function(c,h,m,x){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);h=h?h.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():$e.g(),this.g.onreadystatechange=g(u(this.Ca,this));try{this.B=!0,this.g.open(h,String(c),!0),this.B=!1}catch(z){Mo(this,z);return}if(c=m||"",m=new Map(this.headers),x)if(Object.getPrototypeOf(x)===Object.prototype)for(var U in x)m.set(U,x[U]);else if(typeof x.keys=="function"&&typeof x.get=="function")for(const z of x.keys())m.set(z,x.get(z));else throw Error("Unknown input type for opt_headers: "+String(x));x=Array.from(m.keys()).find(z=>z.toLowerCase()=="content-type"),U=a.FormData&&c instanceof a.FormData,!(Array.prototype.indexOf.call(Ms,h,void 0)>=0)||x||U||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[z,ce]of m)this.g.setRequestHeader(z,ce);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(z){Mo(this,z)}};function Mo(c,h){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=h,c.o=5,wi(c),js(c)}function wi(c){c.A||(c.A=!0,oe(c,"complete"),oe(c,"error"))}t.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,oe(this,"complete"),oe(this,"abort"),js(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),js(this,!0)),ct.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Ei(this):this.Xa())},t.Xa=function(){Ei(this)};function Ei(c){if(c.h&&typeof o<"u"){if(c.v&&Ln(c)==4)setTimeout(c.Ca.bind(c),0);else if(oe(c,"readystatechange"),Ln(c)==4){c.h=!1;try{const z=c.ca();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var m;if(!(m=h)){var x;if(x=z===0){let ce=String(c.D).match(ve)[1]||null;!ce&&a.self&&a.self.location&&(ce=a.self.location.protocol.slice(0,-1)),x=!mc.test(ce?ce.toLowerCase():"")}m=x}if(m)oe(c,"complete"),oe(c,"success");else{c.o=6;try{var U=Ln(c)>2?c.g.statusText:""}catch{U=""}c.l=U+" ["+c.ca()+"]",wi(c)}}finally{js(c)}}}}function js(c,h){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const m=c.g;c.g=null,h||oe(c,"ready");try{m.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Ln(c){return c.g?c.g.readyState:0}t.ca=function(){try{return Ln(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(c){if(this.g){var h=this.g.responseText;return c&&h.indexOf(c)==0&&(h=h.substring(c.length)),Pt(h)}};function jo(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Lo(c){const h={};c=(c.g&&Ln(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let x=0;x<c.length;x++){if(C(c[x]))continue;var m=Bt(c[x]);const U=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const z=h[U]||[];h[U]=z,z.push(m)}ue(h,function(x){return x.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ls(c,h,m){return m&&m.internalChannelParams&&m.internalChannelParams[c]||h}function Uo(c){this.za=0,this.i=[],this.j=new Pn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ls("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ls("baseRetryDelayMs",5e3,c),this.Za=ls("retryDelaySeedMs",1e4,c),this.Ta=ls("forwardChannelMaxRetries",2,c),this.va=ls("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new Fr(c&&c.concurrentRequestLimit),this.Ba=new hc,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Uo.prototype,t.ka=8,t.I=1,t.connect=function(c,h,m,x){ot(0),this.W=c,this.H=h||{},m&&x!==void 0&&(this.H.OSID=m,this.H.OAID=x),this.F=this.X,this.J=Wo(this,null,this.W),Us(this)};function Ni(c){if(xi(c),c.I==3){var h=c.V++,m=me(c.J);if(Ye(m,"SID",c.M),Ye(m,"RID",h),Ye(m,"TYPE","terminate"),ds(c,m),h=new gn(c,c.j,h),h.M=2,h.A=Qt(me(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(h.A.toString(),"")}catch{}!m&&a.Image&&(new Image().src=h.A,m=!0),m||(h.g=Ws(h.j,null),h.g.ea(h.A)),h.F=Date.now(),an(h)}Gs(c)}function Ls(c){c.g&&(Ii(c),c.g.cancel(),c.g=null)}function xi(c){Ls(c),c.v&&(a.clearTimeout(c.v),c.v=null),Hs(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&a.clearTimeout(c.m),c.m=null)}function Us(c){if(!wt(c.h)&&!c.m){c.m=!0;var h=c.Ea;$||y(),O||($(),O=!0),E.add(h,c),c.D=0}}function pc(c,h){return ts(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=h.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=Tt(u(c.Ea,c,h),en(c,c.D)),c.D++,!0)}t.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const U=new gn(this,this.j,c);let z=this.o;if(this.U&&(z?(z=te(z),X(z,this.U)):z=this.U),this.u!==null||this.R||(U.J=z,z=null),this.S)e:{for(var h=0,m=0;m<this.i.length;m++){t:{var x=this.i[m];if("__data__"in x.map&&(x=x.map.__data__,typeof x=="string")){x=x.length;break t}x=void 0}if(x===void 0)break;if(h+=x,h>4096){h=m;break e}if(h===4096||m===this.i.length-1){h=m+1;break e}}h=1e3}else h=1e3;h=Bs(this,U,h),m=me(this.J),Ye(m,"RID",c),Ye(m,"CVER",22),this.G&&Ye(m,"X-HTTP-Session-Id",this.G),ds(this,m),z&&(this.R?h="headers="+rt(Oo(z))+"&"+h:this.u&&Os(m,this.u,z)),rs(this.h,U),this.Ra&&Ye(m,"TYPE","init"),this.S?(Ye(m,"$req",h),Ye(m,"SID","null"),U.U=!0,On(U,m,null)):On(U,m,h),this.I=2}}else this.I==3&&(c?Bo(this,c):this.i.length==0||wt(this.h)||Bo(this))};function Bo(c,h){var m;h?m=h.l:m=c.V++;const x=me(c.J);Ye(x,"SID",c.M),Ye(x,"RID",m),Ye(x,"AID",c.K),ds(c,x),c.u&&c.o&&Os(x,c.u,c.o),m=new gn(c,c.j,m,c.D+1),c.u===null&&(m.J=c.o),h&&(c.i=h.G.concat(c.i)),h=Bs(c,m,1e3),m.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),rs(c.h,m),On(m,x,h)}function ds(c,h){c.H&&Y(c.H,function(m,x){Ye(h,x,m)}),c.l&&Y({},function(m,x){Ye(h,x,m)})}function Bs(c,h,m){m=Math.min(c.i.length,m);const x=c.l?u(c.l.Ka,c.l,c):null;e:{var U=c.i;let Be=-1;for(;;){const Rt=["count="+m];Be==-1?m>0?(Be=U[0].g,Rt.push("ofs="+Be)):Be=0:Rt.push("ofs="+Be);let ht=!0;for(let kt=0;kt<m;kt++){var z=U[kt].g;const xn=U[kt].map;if(z-=Be,z<0)Be=Math.max(0,U[kt].g-100),ht=!1;else try{z="req"+z+"_"||"";try{var ce=xn instanceof Map?xn:Object.entries(xn);for(const[T,J]of ce){let le=J;l(J)&&(le=Le(J)),Rt.push(z+T+"="+encodeURIComponent(le))}}catch(T){throw Rt.push(z+"type="+encodeURIComponent("_badmap")),T}}catch{x&&x(xn)}}if(ht){ce=Rt.join("&");break e}}ce=void 0}return c=c.i.splice(0,m),h.G=c,ce}function Ho(c){if(!c.g&&!c.v){c.Y=1;var h=c.Da;$||y(),O||($(),O=!0),E.add(h,c),c.A=0}}function Ai(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=Tt(u(c.Da,c),en(c,c.A)),c.A++,!0)}t.Da=function(){if(this.v=null,Go(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=Tt(u(this.Wa,this),c)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ot(10),Ls(this),Go(this))};function Ii(c){c.B!=null&&(a.clearTimeout(c.B),c.B=null)}function Go(c){c.g=new gn(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var h=me(c.na);Ye(h,"RID","rpc"),Ye(h,"SID",c.M),Ye(h,"AID",c.K),Ye(h,"CI",c.F?"0":"1"),!c.F&&c.ia&&Ye(h,"TO",c.ia),Ye(h,"TYPE","xmlhttp"),ds(c,h),c.u&&c.o&&Os(h,c.u,c.o),c.O&&(c.g.H=c.O);var m=c.g;c=c.ba,m.M=1,m.A=Qt(me(h)),m.u=null,m.R=!0,bn(m,c)}t.Va=function(){this.C!=null&&(this.C=null,Ls(this),Ai(this),ot(19))};function Hs(c){c.C!=null&&(a.clearTimeout(c.C),c.C=null)}function Ti(c,h){var m=null;if(c.g==h){Hs(c),Ii(c),c.g=null;var x=2}else if(ns(c.h,h))m=h.G,H(c.h,h),x=1;else return;if(c.I!=0){if(h.o)if(x==1){m=h.u?h.u.length:0,h=Date.now()-h.F;var U=c.D;x=yt(),oe(x,new Fn(x,m)),Us(c)}else Ho(c);else if(U=h.m,U==3||U==0&&h.X>0||!(x==1&&pc(c,h)||x==2&&Ai(c)))switch(m&&m.length>0&&(h=c.h,h.i=h.i.concat(m)),U){case 1:Un(c,5);break;case 4:Un(c,10);break;case 3:Un(c,6);break;default:Un(c,2)}}}function en(c,h){let m=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(m*=2),m*h}function Un(c,h){if(c.j.info("Error code "+h),h==2){var m=u(c.bb,c),x=c.Ua;const U=!x;x=new Ce(x||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||je(x,"https"),Qt(x),U?os(x.toString(),m):uc(x.toString(),m)}else ot(2);c.I=0,c.l&&c.l.pa(h),Gs(c),xi(c)}t.bb=function(c){c?(this.j.info("Successfully pinged google.com"),ot(2)):(this.j.info("Failed to ping google.com"),ot(1))};function Gs(c){if(c.I=0,c.ja=[],c.l){const h=Q(c.h);(h.length!=0||c.i.length!=0)&&(_(c.ja,h),_(c.ja,c.i),c.h.i.length=0,S(c.i),c.i.length=0),c.l.oa()}}function Wo(c,h,m){var x=m instanceof Ce?me(m):new Ce(m);if(x.g!="")h&&(x.g=h+"."+x.g),at(x,x.u);else{var U=a.location;x=U.protocol,h=h?h+"."+U.hostname:U.hostname,U=+U.port;const z=new Ce(null);x&&je(z,x),h&&(z.g=h),U&&at(z,U),m&&(z.h=m),x=z}return m=c.G,h=c.wa,m&&h&&Ye(x,m,h),Ye(x,"VER",c.ka),ds(c,x),x}function Ws(c,h,m){if(h&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=c.Aa&&!c.ma?new ct(new Si({ab:m})):new ct(c.ma),h.Fa(c.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ri(){}t=Ri.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function tn(c,h){W.call(this),this.g=new Uo(h),this.l=c,this.h=h&&h.messageUrlParams||null,c=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(c?c["X-WebChannel-Content-Type"]=h.messageContentType:c={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(c?c["X-WebChannel-Client-Profile"]=h.sa:c={"X-WebChannel-Client-Profile":h.sa}),this.g.U=c,(c=h&&h.Qb)&&!C(c)&&(this.g.u=c),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!C(h)&&(this.g.G=h,c=this.h,c!==null&&h in c&&(c=this.h,h in c&&delete c[h])),this.j=new Pr(this)}f(tn,W),tn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},tn.prototype.close=function(){Ni(this.g)},tn.prototype.o=function(c){var h=this.g;if(typeof c=="string"){var m={};m.__data__=c,c=m}else this.v&&(m={},m.__data__=Le(c),c=m);h.i.push(new pr(h.Ya++,c)),h.I==3&&Us(h)},tn.prototype.N=function(){this.g.l=null,delete this.j,Ni(this.g),delete this.g,tn.Z.N.call(this)};function zo(c){He.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var h=c.__sm__;if(h){e:{for(const m in h){c=m;break e}c=void 0}(this.i=c)&&(c=this.i,h=h!==null&&c in h?h[c]:void 0),this.data=h}else this.data=c}f(zo,He);function qo(){Ie.call(this),this.status=1}f(qo,Ie);function Pr(c){this.g=c}f(Pr,Ri),Pr.prototype.ra=function(){oe(this.g,"a")},Pr.prototype.qa=function(c){oe(this.g,new zo(c))},Pr.prototype.pa=function(c){oe(this.g,new qo)},Pr.prototype.oa=function(){oe(this.g,"b")},tn.prototype.send=tn.prototype.o,tn.prototype.open=tn.prototype.m,tn.prototype.close=tn.prototype.close,Sn.NO_ERROR=0,Sn.TIMEOUT=8,Sn.HTTP_ERROR=6,Zr.COMPLETE="complete",Ue.EventType=We,We.OPEN="a",We.CLOSE="b",We.ERROR="c",We.MESSAGE="d",W.prototype.listen=W.prototype.J,ct.prototype.listenOnce=ct.prototype.K,ct.prototype.getLastError=ct.prototype.Ha,ct.prototype.getLastErrorCode=ct.prototype.ya,ct.prototype.getStatus=ct.prototype.ca,ct.prototype.getResponseJson=ct.prototype.La,ct.prototype.getResponseText=ct.prototype.la,ct.prototype.send=ct.prototype.ea,ct.prototype.setWithCredentials=ct.prototype.Fa}).apply(typeof Xo<"u"?Xo:typeof self<"u"?self:typeof window<"u"?window:{});const oh="@firebase/firestore",ah="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ln.UNAUTHENTICATED=new ln(null),ln.GOOGLE_CREDENTIALS=new ln("google-credentials-uid"),ln.FIRST_PARTY=new ln("first-party-uid"),ln.MOCK_USER=new ln("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xo="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi=new po("@firebase/firestore");function Yn(t,...e){if(mi.logLevel<=dt.DEBUG){const n=e.map(Ed);mi.debug(`Firestore (${xo}): ${t}`,...n)}}function Ef(t,...e){if(mi.logLevel<=dt.ERROR){const n=e.map(Ed);mi.error(`Firestore (${xo}): ${t}`,...n)}}function b0(t,...e){if(mi.logLevel<=dt.WARN){const n=e.map(Ed);mi.warn(`Firestore (${xo}): ${t}`,...n)}}function Ed(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(n){return JSON.stringify(n)})(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Nf(t,r,n)}function Nf(t,e,n){let r=`FIRESTORE (${xo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Ef(r),new Error(r)}function Yi(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Nf(e,s,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tt={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class nt extends kn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class y0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(ln.UNAUTHENTICATED)))}shutdown(){}}class v0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class _0{constructor(e){this.t=e,this.currentUser=ln.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Yi(this.o===void 0,42304);let r=this.i;const s=d=>this.i!==r?(r=this.i,n(d)):Promise.resolve();let o=new Ki;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Ki,e.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const d=o;e.enqueueRetryable((async()=>{await d.promise,await s(this.currentUser)}))},l=d=>{Yn("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((d=>l(d))),setTimeout((()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?l(d):(Yn("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Ki)}}),0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(Yn("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Yi(typeof r.accessToken=="string",31837,{l:r}),new xf(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Yi(e===null||typeof e=="string",2055,{h:e}),new ln(e)}}class C0{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=ln.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class S0{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new C0(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(ln.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ch{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class w0{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,wn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Yi(this.o===void 0,3512);const r=o=>{o.error!=null&&Yn("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,Yn("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable((()=>r(o)))};const s=o=>{Yn("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>s(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):Yn("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new ch(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(Yi(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new ch(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E0(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=E0(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<n&&(r+=e.charAt(s[o]%62))}return r}}function Jr(t,e){return t<e?-1:t>e?1:0}function x0(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),o=e.charAt(r);if(s!==o)return Fc(s)===Fc(o)?Jr(s,o):Fc(s)?1:-1}return Jr(t.length,e.length)}const A0=55296,I0=57343;function Fc(t){const e=t.charCodeAt(0);return e>=A0&&e<=I0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lh="__name__";class rr{constructor(e,n,r){n===void 0?n=0:n>e.length&&ho(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ho(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return rr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof rr?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const o=rr.compareSegments(e.get(s),n.get(s));if(o!==0)return o}return Jr(e.length,n.length)}static compareSegments(e,n){const r=rr.isNumericId(e),s=rr.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?rr.extractNumericId(e).compare(rr.extractNumericId(n)):x0(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return wd.fromString(e.substring(4,e.length-2))}}class Wn extends rr{construct(e,n,r){return new Wn(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new nt(tt.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new Wn(n)}static emptyPath(){return new Wn([])}}const T0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ps extends rr{construct(e,n,r){return new ps(e,n,r)}static isValidIdentifier(e){return T0.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ps.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===lh}static keyField(){return new ps([lh])}static fromServerFormat(e){const n=[];let r="",s=0;const o=()=>{if(r.length===0)throw new nt(tt.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new nt(tt.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const d=e[s+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new nt(tt.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=d,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(o(),s++)}if(o(),a)throw new nt(tt.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ps(n)}static emptyPath(){return new ps([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e){this.path=e}static fromPath(e){return new bs(Wn.fromString(e))}static fromName(e){return new bs(Wn.fromString(e).popFirst(5))}static empty(){return new bs(Wn.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Wn.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Wn.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new bs(new Wn(e.slice()))}}function R0(t,e,n,r){if(e===!0&&r===!0)throw new nt(tt.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function k0(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function F0(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ho(12329,{type:typeof t})}function P0(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new nt(tt.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=F0(t);throw new nt(tt.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(t,e){const n={typeString:t};return e&&(n.value=e),n}function Ao(t,e){if(!k0(t))throw new nt(tt.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,o="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const a=t[r];if(s&&typeof a!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(o!==void 0&&a!==o.value){n=`Expected '${r}' field to equal '${o.value}'`;break}}if(n)throw new nt(tt.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh=-62135596800,uh=1e6;class sr{static now(){return sr.fromMillis(Date.now())}static fromDate(e){return sr.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*uh);return new sr(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new nt(tt.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new nt(tt.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<dh)throw new nt(tt.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new nt(tt.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/uh}_compareTo(e){return this.seconds===e.seconds?Jr(this.nanoseconds,e.nanoseconds):Jr(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:sr._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ao(e,sr._jsonSchema))return new sr(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-dh;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}sr._jsonSchemaVersion="firestore/timestamp/1.0",sr._jsonSchema={type:$t("string",sr._jsonSchemaVersion),seconds:$t("number"),nanoseconds:$t("number")};function $0(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new D0("Invalid base64 string: "+o):o}})(e);return new As(n)}static fromUint8Array(e){const n=(function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o})(e);return new As(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Jr(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}As.EMPTY_BYTE_STRING=new As("");const hl="(default)";class Ma{constructor(e,n){this.projectId=e,this.database=n||hl}static empty(){return new Ma("","")}get isDefaultDatabase(){return this.database===hl}isEqual(e){return e instanceof Ma&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(e,n=null,r=[],s=[],o=null,a="F",l=null,d=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=d,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function M0(t){return new O0(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var hh,et;(et=hh||(hh={}))[et.OK=0]="OK",et[et.CANCELLED=1]="CANCELLED",et[et.UNKNOWN=2]="UNKNOWN",et[et.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",et[et.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",et[et.NOT_FOUND=5]="NOT_FOUND",et[et.ALREADY_EXISTS=6]="ALREADY_EXISTS",et[et.PERMISSION_DENIED=7]="PERMISSION_DENIED",et[et.UNAUTHENTICATED=16]="UNAUTHENTICATED",et[et.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",et[et.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",et[et.ABORTED=10]="ABORTED",et[et.OUT_OF_RANGE=11]="OUT_OF_RANGE",et[et.UNIMPLEMENTED=12]="UNIMPLEMENTED",et[et.INTERNAL=13]="INTERNAL",et[et.UNAVAILABLE=14]="UNAVAILABLE",et[et.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new wd([4294967295,4294967295],0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j0=41943040;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L0=1048576;function Pc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(e,n,r=1e3,s=1.5,o=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=o,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&Yn("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(e,n,r,s,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new Ki,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,o){const a=Date.now()+r,l=new Nd(e,n,a,s,o);return l.start(r),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new nt(tt.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var mh,ph;(ph=mh||(mh={})).Ma="default",ph.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Af="firestore.googleapis.com",gh=!0;class bh{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new nt(tt.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Af,this.ssl=gh}else this.host=e.host,this.ssl=e.ssl??gh;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=j0;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<L0)throw new nt(tt.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}R0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=B0(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new nt(tt.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new nt(tt.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new nt(tt.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class If{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new nt(tt.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new nt(tt.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bh(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new y0;switch(r.type){case"firstParty":return new S0(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new nt(tt.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=fh.get(n);r&&(Yn("ComponentProvider","Removing Datastore"),fh.delete(n),r.terminate())})(this),Promise.resolve()}}function H0(t,e,n,r={}){t=P0(t,If);const s=Ir(e),o=t._getSettings(),a={...o,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&(Ba(`https://${l}`),Ha("Firestore",!0)),o.host!==Af&&o.host!==l&&b0("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d={...o,host:l,ssl:s,emulatorOptions:r};if(!Er(d,a)&&(t._setSettings(d),r.mockUserToken)){let u,p;if(typeof r.mockUserToken=="string")u=r.mockUserToken,p=ln.MOCK_USER;else{u=Yh(r.mockUserToken,t._app?.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new nt(tt.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new ln(f)}t._authCredentials=new v0(new xf(u,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new xd(this.firestore,e,this._query)}}class or{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ad(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new or(this.firestore,e,this._key)}toJSON(){return{type:or._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Ao(n,or._jsonSchema))return new or(e,r||null,new bs(Wn.fromString(n.referencePath)))}}or._jsonSchemaVersion="firestore/documentReference/1.0",or._jsonSchema={type:$t("string",or._jsonSchemaVersion),referencePath:$t("string")};class Ad extends xd{constructor(e,n,r){super(e,n,M0(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new or(this.firestore,null,new bs(e))}withConverter(e){return new Ad(this.firestore,e,this._path)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh="AsyncQueue";class vh{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new U0(this,"async_queue_retry"),this._c=()=>{const r=Pc();r&&Yn(yh,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Pc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Pc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new Ki;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!$0(e))throw e;Yn(yh,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,Ef("INTERNAL UNHANDLED ERROR: ",_h(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Nd.createAndSchedule(this,e,n,r,(o=>this.hc(o)));return this.tc.push(s),s}uc(){this.nc&&ho(47125,{Pc:_h(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function _h(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class G0 extends If{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new vh,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new vh(e),this._firestoreClient=void 0,await e}}}function W0(t,e){const n=typeof t=="object"?t:fo(),r=typeof t=="string"?t:hl,s=Tr(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=Sl("firestore");o&&H0(s,...o)}return s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e){this._byteString=e}static fromBase64String(e){try{return new br(As.fromBase64String(e))}catch(n){throw new nt(tt.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new br(As.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:br._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ao(e,br._jsonSchema))return br.fromBase64String(e.bytes)}}br._jsonSchemaVersion="firestore/bytes/1.0",br._jsonSchema={type:$t("string",br._jsonSchemaVersion),bytes:$t("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new nt(tt.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ps(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new nt(tt.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new nt(tt.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Jr(this._lat,e._lat)||Jr(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ys._jsonSchemaVersion}}static fromJSON(e){if(Ao(e,ys._jsonSchema))return new ys(e.latitude,e.longitude)}}ys._jsonSchemaVersion="firestore/geoPoint/1.0",ys._jsonSchema={type:$t("string",ys._jsonSchemaVersion),latitude:$t("number"),longitude:$t("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0})(this._values,e._values)}toJSON(){return{type:vs._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ao(e,vs._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new vs(e.vectorValues);throw new nt(tt.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}vs._jsonSchemaVersion="firestore/vectorValue/1.0",vs._jsonSchema={type:$t("string",vs._jsonSchemaVersion),vectorValues:$t("object")};const z0=new RegExp("[~\\*/\\[\\]]");function q0(t,e,n){if(e.search(z0)>=0)throw Ch(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t);try{return new Tf(...e.split("."))._internalPath}catch{throw Ch(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t)}}function Ch(t,e,n,r,s){let o=`Function ${e}() called with invalid data`;o+=". ";let a="";return new nt(tt.INVALID_ARGUMENT,o+t+a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(e,n,r,s,o){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new or(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new V0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(kf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class V0 extends Rf{data(){return super.data()}}function kf(t,e){return typeof e=="string"?q0(t,e):e instanceof Tf?e._internalPath:e._delegate._internalPath}class Qo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ri extends Rf{constructor(e,n,r,s,o,a){super(e,n,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new oa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(kf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new nt(tt.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=ri._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}ri._jsonSchemaVersion="firestore/documentSnapshot/1.0",ri._jsonSchema={type:$t("string",ri._jsonSchemaVersion),bundleSource:$t("string","DocumentSnapshot"),bundleName:$t("string"),bundle:$t("string")};class oa extends ri{data(e={}){return super.data(e)}}class Ji{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Qo(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new oa(this._firestore,this._userDataWriter,r.key,r,new Qo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new nt(tt.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((l=>{const d=new oa(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Qo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:d,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((l=>o||l.type!==3)).map((l=>{const d=new oa(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Qo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,p=-1;return l.type!==0&&(u=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),p=a.indexOf(l.doc.key)),{type:Y0(l.type),doc:d,oldIndex:u,newIndex:p}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new nt(tt.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ji._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=N0.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((o=>{o._document!==null&&(n.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Y0(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ho(61501,{type:t})}}Ji._jsonSchemaVersion="firestore/querySnapshot/1.0",Ji._jsonSchema={type:$t("string",Ji._jsonSchemaVersion),bundleSource:$t("string","QuerySnapshot"),bundleName:$t("string"),bundle:$t("string")};(function(e,n=!0){(function(s){xo=s})(Ts),Tn(new Nn("firestore",((r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),l=new G0(new _0(r.getProvider("auth-internal")),new w0(a,r.getProvider("app-check-internal")),(function(u,p){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new nt(tt.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ma(u.options.projectId,p)})(a,s),a);return o={useFetchStreams:n,...o},l._setSettings(o),l}),"PUBLIC").setMultipleInstances(!0)),rn(oh,ah,e),rn(oh,ah,"esm2020")})();const K0={apiKey:"AIzaSyD8HnchqbNsvcAs1PRvi6xCFXlMZUof9Ok",authDomain:"gtaw-forms.firebaseapp.com",databaseURL:"https://gtaw-forms-default-rtdb.europe-west1.firebasedatabase.app",projectId:"gtaw-forms",storageBucket:"gtaw-forms.firebasestorage.app",messagingSenderId:"187858091220",appId:"1:187858091220:web:a26e8fdd0f30e8c78e4f41"},Io=rm(K0),Ee=Qs(Io),si=Tw(Io),Ff=VE(Io);W0(Io);const Cr=Sd(Io,"us-central1"),Pf=b.createContext(null),J0=({children:t})=>{const[e,n]=b.useState(null);b.useEffect(()=>si.onAuthStateChanged(a=>{n(a)}),[]);const r=o=>{n(o),sessionStorage.setItem("user",JSON.stringify(o))},s=()=>{si.signOut(),n(null),sessionStorage.removeItem("user")};return i.jsx(Pf.Provider,{value:{user:e,setUser:n,login:r,logout:s},children:t})},Id=()=>b.useContext(Pf),X0=({message:t,icon:e,onDismiss:n,actions:r})=>i.jsx("div",{className:"notification-wrapper",children:i.jsxs("div",{className:"notification-content",style:{display:"flex",flexDirection:"column"},children:[" ",i.jsxs("div",{style:{display:"flex",alignItems:"center",flexGrow:1},children:[" ",e&&i.jsx("i",{className:`${e} notification-icon`,style:{marginRight:"10px"}}),i.jsx("span",{className:"notification-message",style:{flexGrow:1,wordBreak:"break-word"},children:t}),i.jsx("button",{onClick:n,className:"notification-dismiss",style:{marginLeft:"10px"},children:i.jsx("i",{className:"fas fa-times"})})]}),r&&r.length>0&&i.jsx("div",{className:"notification-actions",style:{marginTop:"10px",display:"flex",justifyContent:"flex-end",gap:"5px",width:"100%",flexShrink:0},children:r.map((s,o)=>i.jsx(de,{variant:s.variant||"outline-light",size:"sm",onClick:()=>{s.handler&&s.handler()},className:"notification-action-button",children:s.label},o))})]})}),Q0=5e3,Z0=t=>{if(t.startsWith("fa-"))return`fas ${t}`;switch(t){case"check-circle":return"fas fa-check-circle";case"exclamation-circle":return"fas fa-exclamation-circle";case"info-circle":return"fas fa-info-circle";case"spinner fa-spin":return"fas fa-spinner fa-spin";case"save":return"fas fa-save";case"upload":return"fas fa-upload";case"plus-circle":return"fas fa-plus-circle";case"exclamation-triangle":return"fas fa-exclamation-triangle";case"warning":return"fas fa-exclamation-triangle";default:return"fas fa-info-circle"}},$f=b.createContext(),To=()=>b.useContext($f),Df=({children:t})=>{const[e,n]=b.useState([]),r=b.useRef(null),s=b.useRef(null),o=b.useCallback(l=>{n(d=>d.filter(u=>u.id!==l)),r.current===l&&(r.current=null),s.current===l&&(s.current=null)},[]),a=b.useCallback((l,d="check-circle",u=Q0,p=[])=>{const f=Date.now()+Math.random(),g=p&&p.length>0,S=u===0&&!g,_={id:f,message:l,icon:Z0(d),actions:p};return n(I=>{let F=[...I];return S?(r.current&&(F=F.filter(P=>P.id!==r.current)),r.current=f):g||(s.current&&(F=F.filter(P=>P.id!==s.current)),s.current=f),F.push(_),!g&&!S&&u>0&&setTimeout(()=>{o(f)},u),F}),f},[o]);return i.jsxs($f.Provider,{value:{showNotification:a,removeNotification:o},children:[t,i.jsx("div",{className:"notification-container",children:e.map(l=>i.jsx(X0,{message:l.message,icon:l.icon,onDismiss:()=>o(l.id),actions:l.actions.map(d=>({...d,handler:()=>d.handler(l.id)}))},l.id))})]})},eN=b.createContext(),tN=({initialFormData:t,setFormData:e,setLastWebhookIdentifier:n,showNotification:r,children:s})=>{const o=b.useCallback(()=>{e(l=>({...t,coronerEmployee:l.coronerEmployee,phmcEmployee:l.phmcEmployee,coronerBadge:l.coronerBadge,coronerRank:l.coronerRank,coronerDiscord:l.coronerDiscord,SubmitDate:new Date().toISOString().split("T")[0]})),["dateTime","department","pronouncedTimeOfDeath","placeOfDeath","mannerOfDeath"].forEach(l=>{localStorage.removeItem(l),localStorage.removeItem(`${l}_timestamp`)}),n(null),r&&r("Form cleared! Employee selections preserved.","check-circle")},[t,e,n,r]);return i.jsx(eN.Provider,{value:{clearForm:o},children:s})},Ct={FACTIONS:"factions",AGENCIES:"agencies",SELECT_OPTIONS:"selectOptions"},Sh=["savedReports"],Of=b.createContext(),Mf=()=>b.useContext(Of),jf=({children:t})=>{const e=b.useCallback(async(L,ne)=>{if(B.current[L]=ne,Sh.includes(L))console.log(`⏩ Skipping localStorage cache for ${L} (excluded segment)`);else try{const W=X(L);localStorage.setItem(Z(L),JSON.stringify(ne)),localStorage.setItem(re(L),Date.now().toString()),localStorage.setItem(he(L),W),console.log(`💾 Updated cache segment: ${L} (v${W})`)}catch(W){console.warn(`Failed to update cache for ${L}:`,W);try{localStorage.removeItem(Z(L)),localStorage.removeItem(re(L)),localStorage.removeItem(he(L))}catch(oe){console.error(`Failed to clear cache for ${L}:`,oe)}}switch(L){case Ct.FACTIONS:a(ne||{});break;case Ct.AGENCIES:d(ne||{});break;case Ct.SELECT_OPTIONS:p(ne),g(ne?.physicianRecruitmentDetails||{}),_(ne?.psychPositionDetailsData||{}),F(ne?.adminPositionDetailsData||{}),k(ne?.emsPositionDetailsData||{}),R(ne?.nursePositionDetailsData||{});break;default:console.warn(`Unknown cache segment: ${L}`)}},[]),n=L=>{Object.entries(Ct).forEach(([ne,W])=>{L[W]&&e(W,L[W])})},{showNotification:r,removeNotification:s}=To(),[o,a]=b.useState({}),[l,d]=b.useState({}),[u,p]=b.useState({}),[f,g]=b.useState({}),[S,_]=b.useState({}),[I,F]=b.useState({}),[P,k]=b.useState({}),[D,R]=b.useState({}),[$,O]=b.useState({}),[E,y]=b.useState(!0),[w,N]=b.useState(!0),[v,A]=b.useState([]),[C,M]=b.useState([]),B=b.useRef({}),j=b.useRef(!1),[V,q]=b.useState(!1),Y=b.useRef({}),ue="firebaseCache",te=1e3*60*60*24*7,se={[Ct.FACTIONS]:"1.0",[Ct.AGENCIES]:"1.0",[Ct.SELECT_OPTIONS]:"1.0"},X=L=>se[L]||"1.0",Z=L=>`${ue}_${L}_v${X(L)}`,re=L=>`${ue}_${L}_v${X(L)}_timestamp`,he=L=>`${ue}_${L}_v${X(L)}_version`,be=L=>{const ne=localStorage.getItem(re(L)),W=localStorage.getItem(he(L)),oe=X(L),ae=W===oe,Ne=ne&&Date.now()-parseInt(ne)<te;return!ae&&W?console.log(`🔄 Cache version mismatch for ${L}: Stored ${W} vs Required ${oe}. Replacing.`):!Ne&&ne&&console.log(`⏰ Cache for ${L} has expired. Replacing.`),ae&&Ne};b.useCallback(()=>{Object.values(Y.current).forEach(Se=>Se()),Y.current={};const L=fe(Ee,Ct.FACTIONS);let ne=!0;Y.current.factions=qi(L,Se=>{if(j.current&&ne){ne=!1,console.log("⏩ Skipping initial Firebase factions update because cache was used.");return}if(ne=!1,Se.exists()){const ye=Se.val();if(JSON.stringify(ye)===JSON.stringify(B.current[Ct.FACTIONS]))return;e(Ct.FACTIONS,ye),console.log("🔄 Factions data updated from Firebase")}});const W=fe(Ee,Ct.AGENCIES);let oe=!0;Y.current.agencies=qi(W,Se=>{if(j.current&&oe){oe=!1,console.log("⏩ Skipping initial Firebase agency update because cache was used.");return}if(oe=!1,Se.exists()){const ye=Se.val();if(JSON.stringify(ye)===JSON.stringify(B.current[Ct.AGENCIES]))return;e(Ct.AGENCIES,ye),console.log("🔄 Agency data updated from Firebase")}});const ae=fe(Ee,Ct.SELECT_OPTIONS);let Ne=!0;Y.current.options=qi(ae,Se=>{if(j.current&&Ne){Ne=!1,console.log("⏩ Skipping initial Firebase select options update because cache was used.");return}if(Ne=!1,Se.exists()){const ye=Se.val();if(JSON.stringify(ye)===JSON.stringify(B.current[Ct.SELECT_OPTIONS]))return;e(Ct.SELECT_OPTIONS,ye),console.log("🔄 Select options updated from Firebase")}})},[e]),b.useEffect(()=>{(async()=>{try{const ne=fe(Ee,"staff/phmc"),W=await ze(ne);if(W.exists()){const Ne=Array.isArray(W.val())?W.val():Object.values(W.val()||{});A(Ne),console.log("[DataContext] Legacy PHMC data loaded:",Ne.length,"employees")}const oe=fe(Ee,"staff/coroner"),ae=await ze(oe);if(ae.exists()){const Ne=Array.isArray(ae.val())?ae.val():Object.values(ae.val()||{});M(Ne),console.log("[DataContext] Legacy Coroner data loaded:",Ne.length,"employees")}}catch(ne){console.warn("[DataContext] Error loading legacy staff data:",ne)}})()},[]),b.useEffect(()=>{ge()},[ge]);const ge=b.useCallback(async(L=!1)=>{if(V&&!L&&Object.values(Ct).every(W=>B.current[W]&&be(W))){console.log("📦 Using memory-cached Firebase data"),y(!1),N(!1);return}if(!L&&Object.values(Ct).every(oe=>{const ae=localStorage.getItem(Z(oe));if(ae&&be(oe))try{const Ne=JSON.parse(ae);return B.current[oe]=Ne,!0}catch(Ne){return console.error(`Error parsing cached data for ${oe}:`,Ne),!1}return!1})){console.log("📦 Using localStorage-cached Firebase data"),n(B.current),q(!0),y(!1),N(!1),j.current=!0;return}let ne;try{ne=r("Data Loading...","spinner fa-spin",0),console.log("🔄 Fetching fresh data from Firebase...");const W=fe(Ee),oe=await ze(W);if(oe.exists()){const ae=oe.val();Object.entries(Ct).forEach(([Ne,Se])=>{if(ae[Se])if(B.current[Se]=ae[Se],Sh.includes(Se))console.log(`⏩ Skipping localStorage cache for ${Se} (excluded segment)`);else try{localStorage.setItem(Z(Se),JSON.stringify(ae[Se])),localStorage.setItem(re(Se),Date.now().toString())}catch(ye){console.warn(`Failed to cache ${Se} to localStorage:`,ye);try{localStorage.removeItem(Z(Se)),localStorage.removeItem(re(Se))}catch(Ae){console.error(`Failed to clear cache for ${Se}:`,Ae)}}}),console.log("💾 Firebase data cached to localStorage by segments"),n(ae),r("Data Loaded!","check-circle",2e3),q(!0)}else r("Initial application data not found on server.","error")}catch(W){r("An error has happened, contact the maintainer","error"),console.error("Error fetching data from Realtime Database:",W)}finally{y(!1),N(!1),ne&&s(ne)}},[r,s,a,d,p,g,_,F,k,R,y,N]),Re=b.useCallback(async()=>{q(!1),Object.values(Ct).forEach(L=>{localStorage.removeItem(Z(L)),localStorage.removeItem(re(L))}),await ge(!0)},[ge]),Pe=b.useCallback(async(L=[])=>{const ne=L.length>0?L:Object.values(Ct);for(const W of ne){if(!Ct[W]){console.warn(`Invalid segment: ${W}`);continue}const oe=fe(Ee,W);try{const ae=await ze(oe);ae.exists()&&await e(W,ae.val())}catch(ae){console.error(`Failed to refresh segment ${W}:`,ae),r(`Failed to refresh ${W} data`,"error")}}},[e,r]),Je=b.useCallback(async(L,ne="update")=>{console.log(`🔔 Received direct update notification for path: ${L}`);const W=[];L.startsWith("savedReports/")||(Object.entries(Ct).forEach(([oe,ae])=>{L.startsWith(ae)&&W.push(ae)}),W.length>0&&(console.log(`🔄 Refreshing segments due to direct update: ${W.join(", ")}`),await Pe(W)))},[Pe]),we=b.useMemo(()=>{if((!o[364]||!o[364].members)&&(!C||C.length===0))return console.log("[DataContext] coronerListData: Both faction and legacy data empty"),[];let L=[];if(o[364]&&o[364].members){const ne=Object.values(o[364].members),W=["Chief Boss","Deputy Chief Medical Examiner-Coroner,","Supervisor","Senior Medical Examiner","Medical Examiner","Senior Coroner Investigator","Coroner Investigator","Forensic Attendant","Trainee Forensic-Attendant"];L=ne.filter(oe=>W.includes(oe.category)),console.log("[DataContext] coronerListData using FACTION data:",L.length,"members")}else C&&C.length>0&&(L=C,console.log("[DataContext] coronerListData using LEGACY data:",L.length,"members"));return L},[o,C]),Ge=b.useMemo(()=>{if((!o[364]||!o[364].members)&&(!v||v.length===0))return console.log("[DataContext] phmcListData: Both faction and legacy data empty"),[];let L=[];if(o[364]&&o[364].members){const ne=Object.values(o[364].members),W=["Chief Boss","Deputy Chief Medical Examiner-Coroner,","Supervisor","Senior Medical Examiner","Medical Examiner","Senior Coroner Investigator","Coroner Investigator","Forensic Attendant","Trainee Forensic-Attendant"];L=ne.filter(oe=>!W.includes(oe.category)),console.log("[DataContext] phmcListData using FACTION data:",L.length,"members")}else v&&v.length>0&&(L=v,console.log("[DataContext] phmcListData using LEGACY data:",L.length,"members"));return L},[o,v]),bt=b.useMemo(()=>{if(!Ge||Ge.length===0)return console.log("[DataContext] phmcGroupedOptions: Empty - phmcListData has",Ge?.length||0,"items"),[];const L=Object.entries(Ge.reduce((ne,W)=>{const oe=W.category||"Uncategorized";return ne[oe]||(ne[oe]=[]),ne[oe].push({value:W.name,label:W.name,category:W.category,lastName:W.lastName}),ne},{})).map(([ne,W])=>({label:ne,options:W.sort((oe,ae)=>oe.label.localeCompare(ae.label))})).sort((ne,W)=>{const oe=["Leadership","Hospital Supervisor","Chief Resident","Physician","Resident Physician","Physician Assistant","Psychiatrist","Psychologist","Dentist","Nursing","Emergency Medical Services","Attending Physician","Uncategorized"];return oe.indexOf(ne.label)-oe.indexOf(W.label)});return console.log("[DataContext] phmcGroupedOptions created:",L.length,"groups"),L},[Ge]),Jt=b.useMemo(()=>!we||we.length===0?[]:Object.entries(we.reduce((L,ne)=>{const W=ne.category||"Uncategorized";return L[W]||(L[W]=[]),L[W].push({value:ne.name,label:`${ne.name} (${ne.rank||"Coroner"})`,badge:ne.badge,rank:ne.rank,discord:ne.discord,category:W}),L},{})).map(([L,ne])=>({label:L,options:ne.sort((W,oe)=>W.label.localeCompare(oe.label))})).sort((L,ne)=>{const W=["Chief Boss","Deputy Chief Medical Examiner-Coroner,","Supervisor","Senior Medical Examiner","Medical Examiner","Senior Coroner Investigator","Coroner Investigator","Forensic Attendant","Trainee Forensic-Attendant","Developer Testing","Missing_Category","Uncategorized"];return W.indexOf(L.label)-W.indexOf(ne.label)}),[we]),zt={factionsData:o,phmcListData:Ge,coronerListData:we,phmcGroupedOptions:bt,coronerGroupedOptions:Jt,agencyDataStore:l,selectOptions:u,physicianRecruitmentDetails:f,psychRecruitmentDetails:S,adminRecruitmentDetails:I,emsRecruitmentDetails:P,nurseRecruitmentDetails:D,coronerRecruitmentDetails:$,isLoadingData:E,loading:w,refreshData:Re,refreshSegments:Pe,notifyDataUpdate:Je};return i.jsx(Of.Provider,{value:zt,children:t})};let wh="",Eh=0,Di=null;const ml=[];let $c=!1;const cI=(t,e)=>{Di={type:t,fieldName:e,timestamp:Date.now()},setTimeout(()=>{Di&&Di.timestamp===Di.timestamp&&(Di=null)},3e4)},nN=()=>{try{const t=localStorage.getItem("bbCodeVersion");if(!t)return"Unknown";const e=parseInt(t,10);return{1:"Death Report",2:"Coroner Email",3:"Patient File - Advanced",4:"Autopsy Report",5:"Surgery Report",6:"Physical Evaluation (PHMC)",7:"Physical Evaluation (PBC)",8:"Death Certificate",9:"Obs Main File",10:"Obs Follow Up",11:"Mass Fatality Report",12:"Gynecology - Main File",13:"Gynecology - Add Reply",14:"Mental Health - PHMC",16:"Mental Health | PBC",18:"Agency Feedback",19:"Emergency Room Protocols",20:"Consultation Notes (PHMC)",21:"Consultation Notes (PBC)",22:"Commentary Note (PHMC)",23:"Commentary Note (PBC)",24:"Medical Record Release",25:"Patient File - Basic",26:"Medical Record Update",27:"Email Forms",28:"Psychological Evaluation PHMC",29:"Psychological Evaluation PBC",35:"PHMC - Email Generator",50:"PHMC - Physician Careers",51:"PHMC - Psych Careers",52:"PHMC - Admin Careers",53:"PHMC - Nursing Careers",54:"PHMC - Coroner Careers",55:"PHMC - EMS Careers"}[e]||`Form v${e}`}catch(t){return console.warn("Error determining form type:",t),"Unknown"}},Lf=async()=>{if($c||ml.length===0)return;const t="https://discord.com/api/webhooks/1430314470902599680/o_JoPsW9jNgKICL9StKxgORICn3cOzu41FheUsJFsPkRAX-Xt9LKTulXhWCaQsU5Cfxw";$c=!0;const e=ml.shift();try{await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}catch(n){console.error("CRITICAL: Failed to send Discord error webhook.",n)}finally{setTimeout(()=>{$c=!1,Lf()},2e3)}},Uf=(t,e=!1)=>{let o=[];const a=Date.now();if(o=o.filter(S=>a-S<6e4),o.length>=10){console.warn("[Discord Error Webhook] Rate limit exceeded. Suppressing error:",t.message);return}const l=String(t.message||"").substring(0,1e3),d=String(t.stack||"").substring(0,1e3),u=S=>S.replace(/^(TypeError|ReferenceError|SyntaxError|RangeError|URIError|EvalError|InternalError):\s*/i,"");if(u(l)===u(wh)&&a-Eh<3e5){console.warn("[Discord Error Webhook] Duplicate error suppressed:",l);return}o.push(a),wh=l,Eh=a;let f=null;window.Sentry&&window.Sentry.lastEventId?f=window.Sentry.lastEventId():jh&&Dd&&(f=Dd());const g={title:t.isButtonClickError?"🚨 Button Click Error 🚨":"🚨 Unhandled Application Error 🚨",description:"An unhandled error was caught by the global error handler.",color:e?16753920:14562636,fields:[{name:"Error Type",value:t.isButtonClickError?"UI Button Interaction":t.isInputFieldError?"Input Field Interaction":"General",inline:!0},{name:"Sentry Status",value:e?"⚠️ Blocked / Unreachable":"✅ Active",inline:!0},{name:"Form Type",value:`\`${t.currentFormType||nN()}\``,inline:!0},{name:"Error Message",value:`\`${l}\``,inline:!1},{name:"Source File",value:t.source||"N/A",inline:!0},{name:"Line",value:t.lineno||"N/A",inline:!0},{name:"Column",value:t.colno||"N/A",inline:!0},{name:"User Agent",value:`\`${navigator.userAgent}\``,inline:!1},t.isInputFieldError?{name:"Input Field Type",value:`\`${t.inputFieldType}\``,inline:!0}:null,t.lastInputInteraction?{name:"Last Input Interaction",value:`\`${t.lastInputInteraction.type} - ${t.lastInputInteraction.fieldName}\``,inline:!0}:null,{name:"Stack Trace",value:`\`${d}\``,inline:!1},f?{name:"Sentry Trace/Event ID",value:`\`${f}\``,inline:!1}:null].filter(Boolean),timestamp:new Date().toISOString(),footer:{text:"PHMC Tools - Global Error Handler"}};ml.push({content:"<@228306972204597248>",embeds:[g]}),Lf()},pl=({message:t="Loading...",delay:e=200})=>{const[n,r]=b.useState(!1);return b.useEffect(()=>{const s=setTimeout(()=>r(!0),e);return()=>clearTimeout(s)},[e]),n?i.jsx("div",{className:"spinner-overlay",children:i.jsx("div",{className:"spinner-container",children:i.jsx("div",{className:"spinner-message",children:t})})}):null},Bf=t=>{if(!t)return null;if(t&&!window.gtawDebugLogged&&(console.log("[GTAW Debug] OAuth User Data:",{username:t.username,faction:t.faction,factionData:t.factionData,userData:t.userData,characterArray:t?.userData?.character||t?.userData?.characters||t?.character||t?.characters,fullRank:t?.faction?.rank,cleanedRank:t?.faction?.rank?t.faction.rank.replace(/-/g," ").trim():null}),window.gtawDebugLogged=!0),t.faction&&t.factionData)return{id:t.factionData.characterId||t.faction.characterId,firstname:t.faction.firstname||"",lastname:t.faction.lastname||"",fullName:`${t.faction.firstname||""} ${t.faction.lastname||""}`.trim()||t.faction.characterName||t.username,memberid:t.id};if(t.faction)return{id:t.faction.characterId||t.id,firstname:t.faction.firstname||"",lastname:t.faction.lastname||"",fullName:`${t.faction.firstname||""} ${t.faction.lastname||""}`.trim()||t.faction.characterName||t.username,memberid:t.id};const e=t?.userData?.character||t?.userData?.characters||t?.character||t?.characters||[];if(Array.isArray(e)&&e.length>0){const n=t?.faction?.characterId;let r=e[0];if(n){const s=e.find(o=>o.id===n);s&&(r=s)}return{id:r.id,firstname:r.firstname||"",lastname:r.lastname||"",fullName:`${r.firstname||""} ${r.lastname||""}`.trim(),memberid:r.memberid}}return{id:t.id,firstname:"",lastname:"",fullName:t.username||"GTAW User",memberid:t.id}},fl=t=>{const e=Bf(t);return e?e.fullName:"GTAW User"},gl=t=>{const e=Bf(t);return e?e.id:t?.id},Ft={AUTHORIZE_URL:"https://ucp.gta.world/oauth/authorize",TOKEN_URL:"https://ucp.gta.world/oauth/token",USER_API_URL:"https://ucp.gta.world/api/user",CLIENT_ID:"82",FIREBASE_FUNCTION:"exchangeAuthCodeForToken"},St={OAUTH_STATE:"gta-oauth-state",OAUTH_REQUEST_LOCK:"gta-oauth-request-lock",AUTH_CODE:"gta-auth-code",USER_DATA:"gta-user-data",ACCESS_TOKEN:"gta-access-token",FALLBACK_USER_DATA:"user"};let nr=null,Nh=0;const Hf=6e4,Dc=1e3,rN=()=>Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15)+Date.now().toString(36),Gf=()=>{const t=window.location.hostname.includes("github.io"),e=window.location.hostname==="localhost";return t?"https://gtaw-forms.github.io/forms/#/auth/gta/callback":e?`${window.location.origin}/#/auth/gta/callback`:`${window.location.origin}/#/auth/gta/callback`},Wf=t=>{const e="https://discord.com/api/webhooks/1430314470902599680/o_JoPsW9jNgKICL9StKxgORICn3cOzu41FheUsJFsPkRAX-Xt9LKTulXhWCaQsU5Cfxw";try{const n={title:"GTAW User Login",description:`**${t.username}** (ID: ${t.id}) just logged in.`,color:t.isFactionMember?65280:255,fields:[{name:"Faction Member",value:t.isFactionMember?"Yes":"No",inline:!0}],timestamp:new Date().toISOString(),footer:{text:"PHMC Forms Login"}};if(t.isFactionMember&&t.faction){const o=t.faction.rank?t.faction.rank.replace(/-/g,"").trim():"N/A";n.fields.push({name:"Faction Character",value:`${t.faction.characterName} (ID: ${t.faction.characterId})`,inline:!0}),n.fields.push({name:"Faction Rank",value:o,inline:!0})}const r=t.character||t.characters;if(r&&Array.isArray(r)&&r.length>0&&!n.fields.some(a=>a.name==="All Characters")){const a=r.map(l=>l.name?`• ${l.name} (ID: ${l.id})`:l.firstname&&l.lastname?`• ${l.firstname} ${l.lastname} (ID: ${l.id})`:`• Character ID: ${l.id}`).join(`
`);n.fields.push({name:"All Characters",value:a,inline:!1})}if(t.isFactionMember&&t.faction){const o=fl(t),a=gl(t),l=t.faction?.rank?t.faction.rank.replace(/-/g," ").trim():"N/A",d=`**Character Name:** ${o}
**UCP Username:** ${t.username}
**Badge Number:** ${a}
**Rank:** ${l}`;n.fields.push({name:"DEBUG: Using GTAW OAuth Credentials",value:d,inline:!1})}if(t.allFactionCharacters&&t.allFactionCharacters.length>1){const o=t.allFactionCharacters.map(a=>`• ${a.character.characterName} (Rank: ${a.character.rank})`).join(`
`);n.fields.push({name:"Multiple PHMC Characters Detected",value:o,inline:!1})}fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:"Login Bot",embeds:[n]})}).then(o=>{o.ok||console.error(`Error sending login webhook: ${o.status} ${o.statusText}`)}).catch(o=>{console.error("Failed to send login webhook:",o),Ze(o,{extra:{context:"GTAW Login Webhook"}})})}catch(n){console.error("Failed to construct login webhook payload:",n),Ze(n,{extra:{context:"GTAW Login Webhook Payload Construction"}})}},sN=(t={})=>{try{const e=qf();if(e&&e.user){console.info("[GTA Auth] User is already authenticated, restoring session:",{user:e.user}),Wf(e.user),t.onSuccess&&t.onSuccess(e.user,t.returnPath||"#/");return}const n=Date.now(),r=n-Nh;if(r<Dc){console.warn("[GTA Auth] Login attempt ignored - too soon after last attempt:",{timeSinceLastLogin:r,debounceMs:Dc,remainingMs:Dc-r});return}Nh=n,console.info("[GTA Auth] Initiating OAuth flow"),Ft.CLIENT_ID;const s=sessionStorage.getItem(St.OAUTH_STATE);if(s)try{const p=JSON.parse(s),f=n-(p.timestamp||0);if(f<12e4){console.warn("[GTA Auth] OAuth flow already in progress, ignoring new request:",{existingTimestamp:p.timestamp,timeSinceOAuth:f,state:p.state?.substring(0,10)+"..."});return}}catch{console.warn("[GTA Auth] Invalid existing OAuth data, proceeding with new flow")}const o=rN(),a=Gf(),l=t.returnPath||window.location.hash||"#/",d={state:o,returnPath:l,redirectUri:a,timestamp:Date.now(),clientId:Ft.CLIENT_ID};sessionStorage.setItem(St.OAUTH_STATE,JSON.stringify(d)),console.debug("[GTA Auth] Stored OAuth state:",{state:o,returnPath:l,redirectUri:a});const u=new URL(Ft.AUTHORIZE_URL);u.searchParams.set("response_type","code"),u.searchParams.set("client_id",Ft.CLIENT_ID),u.searchParams.set("redirect_uri",a),u.searchParams.set("state",o),u.searchParams.set("scope",""),console.debug("[GTA Auth] Authorization URL details:",{baseUrl:Ft.AUTHORIZE_URL,redirectUri:a,clientId:Ft.CLIENT_ID,state:o,fullAuthUrl:u.toString()}),console.debug("[GTA Auth] Redirecting to:",u.toString()),window.location.href=u.toString()}catch(e){console.error("[GTA Auth] Failed to initiate OAuth flow:",e),Ze(e,{extra:{context:"GTA World OAuth Initiation"}}),t.onError&&t.onError(e.message||"Failed to initiate GTA World login")}},zf=async(t,e,n,r,s)=>{const o=performance.now(),a={sessionId:Date.now()+"-"+Math.random().toString(36).substr(2,5),startTime:o,phases:{},userAgent:navigator?.userAgent||"unknown",timestamp:new Date().toISOString()};let l=null;const d=(u,p)=>{const f=performance.now()-p;return a.phases[u]=Math.round(f),console.log(`[Perf] ${u}: ${f.toFixed(2)}ms`),f};try{console.info("[GTA Auth] Processing OAuth callback"),console.log(`[Perf] OAuth session started [${a.sessionId}]`),s?.({step:"initializing",message:"Starting authentication...",progress:10});const u=performance.now(),p=`callback-${t}-${e}`,f=sessionStorage.getItem(St.OAUTH_REQUEST_LOCK);if(d("validation",u),f===p){console.warn("[GTA Auth] Duplicate callback detected, ignoring...");return}sessionStorage.setItem(St.OAUTH_REQUEST_LOCK,p),setTimeout(()=>{sessionStorage.getItem(St.OAUTH_REQUEST_LOCK)===p&&sessionStorage.removeItem(St.OAUTH_REQUEST_LOCK)},Hf);let g;try{g=JSON.parse(sessionStorage.getItem(St.OAUTH_STATE)||"{}")}catch(I){console.error("[GTA Auth] Failed to parse stored OAuth data:",I),g={}}if(console.debug("[GTA Auth] State validation details:",{receivedState:e,storedState:g.state,storedOAuthData:g,stateMatch:g.state===e,storedDataExists:!!g.state,receivedStateLength:e?.length,storedStateLength:g.state?.length,sessionStorageRaw:sessionStorage.getItem(St.OAUTH_STATE)}),!g.state||g.state!==e){console.error("[GTA Auth] OAuth state validation failed:",{stored:g.state,received:e,storedDataFull:g});const I=!1,F=window.location.hostname.includes("github.io");(!I||e&&e.length>20)&&(console.warn("[GTA Auth] STATE VALIDATION BYPASSED - This could be a race condition or development mode"),console.warn("[GTA Auth] Proceeding with authentication despite state mismatch..."),g.returnPath||(g.returnPath="#/",g.redirectUri=Gf()))}console.debug("[GTA Auth] OAuth state validated successfully"),console.debug("[GTA Auth] OAuth timing:",{storedTimestamp:g.timestamp,currentTimestamp:Date.now(),timeDifferenceSeconds:Math.round((Date.now()-g.timestamp)/1e3),codeAge:`${Math.round((Date.now()-g.timestamp)/1e3)}s`}),s?.({step:"token_exchange",message:"Exchanging authorization code for access token...",progress:30});const S=performance.now(),_=await iN(t,g.redirectUri);if(d("token_exchange",S),console.debug("[GTA Auth] Token exchange completed:",{success:_.success,hasToken:!!_.accessToken,hasUser:!!_.userData,errorCode:_.errorCode,originalRedirectUri:g.redirectUri}),_.success){if(_.userData&&_.userData.id){const P=_.userData.character||_.userData.characters;if(console.log("🔍 [GTA Auth] Faction membership check - userData structure:",{userId:_.userData.id,username:_.userData.username,userDataKeys:Object.keys(_.userData),hasCharacterField:!!_.userData.character,hasCharactersField:!!_.userData.characters,characterFieldType:typeof _.userData.character,characterFieldContent:_.userData.character,actualFieldUsed:_.userData.character?"character":_.userData.characters?"characters":"none",charactersCount:P?.length||0,rawCharacterArray:P}),!P||!Array.isArray(P)||P.length===0)return console.warn("⚠️ [GTA Auth] No valid character array found for faction checking:",{hasCharacterField:!!_.userData.character,characterFieldType:typeof _.userData.character,hasCharactersField:!!_.userData.characters,charactersFieldType:typeof _.userData.characters,userDataStructure:_.userData}),_.userData={..._.userData,faction:null,permissions:[],accessLevel:"none",factionInfo:null,isFactionMember:!1,debugInfo:{charactersChecked:[],foundMember:!1,factionCheckDuration:0,error:"No character array found in userData"}},_;s?.({step:"character_processing",message:"Processing character information...",progress:60});const k=performance.now();let D=[];try{const R=Qr(Cr,"batchCheckFactionMembership"),$=Date.now()+"-"+Math.random().toString(36).substr(2,5),O=Date.now(),E=performance.now(),y=[];for(const q of P)q&&q.id&&(D.push(parseInt(q.id)),y.push(q.name||`${q.firstname||""} ${q.lastname||""}`.trim()));console.log("🔍 [GTA Auth] Main user info:",{userId:_.userData.id,username:_.userData.username,note:"This is the memberid, not used for faction lookup - we need individual character IDs"}),console.log("📝 [GTA Auth] Processing character array for BATCH faction check:",{arrayLength:P.length,validCharacters:D.length,characterIds:D,characterNames:y});const w=`factionData_364_${D.join("_")}`,N=sessionStorage.getItem(w);let v=!1;if(N)try{const q=JSON.parse(N),Y=Date.now()-q.timestamp,ue=1800*1e3;if(Y<ue){s?.({step:"faction_check",message:"Using cached faction data...",progress:80});const te=performance.now();d("faction_cache_hit",te),console.log(`💾 [GTA Auth] Using cached faction data [${$}]:`,{cacheKey:w,cacheAge:`${Math.round(Y/1e3)}s`,cacheValidFor:`${Math.round((ue-Y)/1e3)}s more`,characterIds:D,cachedMembersCount:q.data?.summary?.totalMembers||0}),l=q,v=!0}else console.log(`�️ [GTA Auth] Cached faction data expired [${$}]:`,{cacheKey:w,cacheAge:`${Math.round(Y/1e3)}s`,expiredBy:`${Math.round((Y-ue)/1e3)}s`,note:"Will fetch fresh data"}),sessionStorage.removeItem(w)}catch(q){console.warn(`⚠️ [GTA Auth] Invalid cached data, removing [${$}]:`,q.message),sessionStorage.removeItem(w)}if(!l&&(console.log(`�🔥 [GTA Auth] BATCH checking faction membership [${$}]:`,{function:"batchCheckFactionMembership",factionId:364,characterIds:D,characterCount:D.length,timestamp:O,cacheStatus:"cache miss - fetching fresh data"}),l=await R({characterIds:D,factionId:364}),d("faction_api_call",E),l.data?.success)){const q={data:{success:l.data.success,results:l.data.results?.map(Y=>({characterId:Y.characterId,isMember:Y.isMember,character:Y.isMember?{characterId:Y.character?.characterId,characterName:Y.character?.characterName,scriptRank:Y.character?.scriptRank,rank:Y.character?.rank}:null,permissions:Y.permissions,accessLevel:Y.accessLevel}))||[],summary:l.data.summary},timestamp:Date.now()};sessionStorage.setItem(w,JSON.stringify(q)),console.log(`💾 [GTA Auth] Cached faction data [${$}]:`,{cacheKey:w,cachedMembersCount:l.data?.summary?.totalMembers||0,validUntil:new Date(Date.now()+1800*1e3).toLocaleTimeString()})}let A={data:{isMember:!1,character:null}},C=!1;if(l.data?.success&&l.data?.results){const q=l.data.results.filter(Y=>Y.isMember);if(q.length>0){C=!0;const Y=l.data.summary?.highestRankingMember;Y?(A={data:Y},console.log("🏆 [GTA Auth] Selected highest-ranking character from batch:",{characterId:Y.character.characterId,characterName:Y.character.characterName,scriptRank:Y.character.scriptRank,rank:Y.character.rank,accessLevel:Y.accessLevel,totalFactionMembers:q.length})):A={data:q[0]}}}const B=Date.now()-O,j=A.data;_.userData={..._.userData,faction:j.isMember?j.character:null,permissions:j.permissions||[],accessLevel:j.accessLevel||"none",factionInfo:j.factionInfo||null,isFactionMember:j.isMember,debugInfo:{charactersChecked:D.length,characterIds:D,foundMember:C,factionCheckDuration:B}},console.log(`📊 [GTA Auth] Enhanced user data with faction info [${$}]:`,{username:_.userData.username,mainCharacterId:_.userData.id,isFactionMember:_.userData.isFactionMember,accessLevel:_.userData.accessLevel,permissionCount:_.userData.permissions.length,factionCharacter:_.userData.faction,charactersChecked:D.length,debugInfo:_.userData.debugInfo});const V=l.data?.results?.filter(q=>q.isMember).map(q=>({character:{characterId:q.character?.characterId,characterName:q.character?.characterName,scriptRank:q.character?.scriptRank,rank:q.character?.rank}}))||[];_.userData.allFactionCharacters=V,Wf(_.userData),console.log(`⏱️ [GTA Auth] BATCH faction membership check completed [${$}]:`,{duration:`${B}ms`,durationSeconds:`${(B/1e3).toFixed(2)}s`,foundMember:C,totalCharactersChecked:D.length,factionMembersFound:l.data?.summary?.totalMembers||0,selectedResult:C?{characterId:A.data?.character?.characterId,rank:A.data?.character?.rank,scriptRank:A.data?.character?.scriptRank,accessLevel:A.data?.accessLevel}:null,note:C?"Member access granted":"No faction membership found",dataSource:v?"cached data (no API call)":"fresh API call",batchOptimization:"Single batch call instead of individual character checks"}),sessionStorage.setItem("factionResult",JSON.stringify({m:C,d:A.data?.character?{id:A.data.character.characterId,name:A.data.character.characterName,rank:A.data.character.scriptRank,access:A.data.accessLevel}:null,t:Date.now(),c:v,dur:Math.round(B)}))}catch(R){console.warn("[GTA Auth] BATCH faction check failed, continuing without faction data:",{error:R.message,code:R.code,details:R.details,characterIds:D,batchFunction:"batchCheckFactionMembership"}),_.userData.faction=null,_.userData.permissions=[],_.userData.accessLevel="none",_.userData.isFactionMember=!1,_.userData.factionError=R.message}}const I={..._.userData,debugInfo:void 0,character:_.userData.character?_.userData.character.map(P=>({id:P.id,firstname:P.firstname,lastname:P.lastname})):void 0,allFactionCharacters:l.data?.results?.filter(P=>P.isMember).map(P=>({character:{characterId:P.character?.characterId,characterName:P.character?.characterName,scriptRank:P.character?.scriptRank,rank:P.character?.rank}}))||[]};sessionStorage.setItem(St.USER_DATA,JSON.stringify(I)),sessionStorage.setItem(St.ACCESS_TOKEN,_.accessToken),console.info("[GTA Auth] Authentication successful");const F=performance.now()-o;a.totalDuration=Math.round(F),a.success=!0,console.log(`[Perf] OAuth completed successfully [${a.sessionId}]:`,{totalDuration:`${F.toFixed(2)}ms`,phases:a.phases,efficiency:F<1e4?"excellent":F<2e4?"good":"needs improvement",cacheUsed:_.userData?.debugInfo?.usedCache||!1}),s?.({step:"complete",message:"Authentication successful!",progress:100,metrics:{totalTime:Math.round(F),phases:a.phases}}),Ah(a),sessionStorage.removeItem(St.OAUTH_STATE),sessionStorage.removeItem(St.OAUTH_REQUEST_LOCK),n&&n(_.userData,g.returnPath)}else throw new Error(_.error||"Token exchange failed")}catch(u){const p=performance.now()-o;a.totalDuration=Math.round(p),a.success=!1,a.error=u.message,console.error("[GTA Auth] OAuth callback error:",u),console.log(`[Perf] OAuth failed [${a.sessionId}]:`,{totalDuration:`${p.toFixed(2)}ms`,phases:a.phases,error:u.message}),Ah(a);const f=mN(u),g=sessionStorage.getItem("oauth_retry_count")||"0",S=2;if(f&&parseInt(g)<S){const I=parseInt(g)+1;sessionStorage.setItem("oauth_retry_count",I.toString()),console.log(`[GTA Auth] Retryable error detected, attempt ${I}/${S}:`,u.message),setTimeout(()=>{zf(t,e,n,r,s)},1e3*I);return}else sessionStorage.removeItem("oauth_retry_count");Ze(u,{extra:{context:"GTA World OAuth Callback",code:t?.substring(0,10)+"...",state:e,retryAttempts:parseInt(g),isRetryable:f}}),sessionStorage.removeItem(St.OAUTH_STATE),sessionStorage.removeItem(St.AUTH_CODE),sessionStorage.removeItem(St.OAUTH_REQUEST_LOCK);const _=pN(u);r&&r(_,{originalError:u.message,isRetryable:f,retryAttempts:parseInt(g),canRetryManually:f})}},iN=async(t,e)=>{try{const n=`${t}-${e}`;if(nr&&nr.key===n)return console.warn("[GTA Auth] Duplicate OAuth request detected, waiting for existing request..."),await nr.promise;const r=(async()=>{try{console.debug("[GTA Auth] Calling Firebase function for token exchange"),console.debug("[GTA Auth] Configuration:",{functionName:Ft.FIREBASE_FUNCTION,hasClientId:!!Ft.CLIENT_ID,redirectUri:e,codeLength:t?.length,functionsRegion:"us-central1",requestKey:n.substring(0,50)+"..."});const o=Qr(Cr,Ft.FIREBASE_FUNCTION),a=Date.now()+"-"+Math.random().toString(36).substr(2,5),l=Date.now();console.log(`🔥 [GTA Auth] Calling Firebase function [${a}]:`,{function:Ft.FIREBASE_FUNCTION,callId:a,codeLength:t?.length,redirectUri:e,clientId:Ft.CLIENT_ID?"present":"missing",timestamp:l});let d;try{const u=new Promise((g,S)=>setTimeout(()=>S(new Error("Firebase function call timed out after 20 seconds")),2e4)),p=o({code:t,redirectUri:e,clientId:Ft.CLIENT_ID});d=await Promise.race([p,u]);const f=Date.now()-l;console.log(`✅ [GTA Auth] Firebase function completed [${a}]:`,{duration:f,hasData:!!d.data,success:d.data?.success,slowCall:f>3e3,verySlowCall:f>1e4}),f>5e3&&console.warn(`⚠️ [GTA Auth] Slow Firebase function detected [${a}]:`,{duration:f,function:Ft.FIREBASE_FUNCTION,possibleTimeout:f>15e3})}catch(u){const p=Date.now()-l;throw console.error(`❌ [GTA Auth] Firebase function error [${a}]:`,{error:u.message,code:u.code,duration:p,function:Ft.FIREBASE_FUNCTION}),u}if(console.debug(`📋 [GTA Auth] Raw Firebase response [${a}]:`,d),console.log(`🔍 [GTA Auth] Detailed API response analysis [${a}]:`,{hasData:!!d.data,hasToken:!!d.data?.token,hasUser:!!d.data?.user,success:d.data?.success,dataKeys:d.data?Object.keys(d.data):[],userDataKeys:d.data?.user?Object.keys(d.data.user):[],userData:d.data?.user,hasCharacterField:!!d.data?.user?.character,hasCharactersField:!!d.data?.user?.characters,charactersCount:(d.data?.user?.character||d.data?.user?.characters)?.length||0,charactersData:d.data?.user?.character||d.data?.user?.characters||"no character data found",userFields:{name:d.data?.user?.name,username:d.data?.user?.username,firstname:d.data?.user?.firstname,lastname:d.data?.user?.lastname,id:d.data?.user?.id,email:d.data?.user?.email}}),d.data?.success&&d.data?.token&&d.data?.user)return{success:!0,accessToken:d.data.token.access_token,refreshToken:d.data.token.refresh_token,tokenType:d.data.token.token_type||"Bearer",expiresIn:d.data.token.expires_in,scope:d.data.token.scope,userData:d.data.user,tokenData:d.data.token,timestamp:d.data.timestamp};throw new Error("Invalid response from token exchange")}catch(o){throw console.error("[GTA Auth] Inner token exchange error:",o),o}})();nr={key:n,promise:r,timestamp:Date.now()},setTimeout(()=>{nr&&nr.key===n&&(console.warn("[GTA Auth] OAuth request timeout reached, clearing active request"),nr=null)},Hf);const s=await r;return nr&&nr.key===n&&(nr=null),s}catch(n){if(console.error("[GTA Auth] Token exchange failed:",n),console.error("[GTA Auth] Error details:",{code:n.code,message:n.message,details:n.details,stack:n.stack}),n.code&&n.message){let r=n.message,s={};switch(n.code){case"functions/internal":case"internal":r="Server configuration error. Please check that Firebase Functions are properly deployed and configured.",s={hint:"Check Firebase Functions region configuration and deployment status",region:"us-central1",functionName:Ft.FIREBASE_FUNCTION};break;case"functions/not-found":case"not-found":r="Authentication service not found. Please contact support.",s={hint:"Firebase Function not deployed or wrong function name",functionName:Ft.FIREBASE_FUNCTION};break;case"functions/unauthenticated":case"unauthenticated":r="Authentication required. Please refresh the page and try again.";break;case"functions/permission-denied":case"permission-denied":r="Permission denied. Please contact support.";break;case"functions/unavailable":case"unavailable":r="Authentication service temporarily unavailable. Please try again.";break;case"functions/invalid-argument":case"invalid-argument":r="Invalid request parameters. Please try logging in again.";break;case"functions/deadline-exceeded":case"deadline-exceeded":r="Request timed out. Please try again.";break;default:r="An internal error occurred. Please try again or contact support.",s={originalCode:n.code,originalMessage:n.message};break}return{success:!1,error:r,errorCode:n.code,details:n.details,originalMessage:n.message,debugInfo:s}}return{success:!1,error:n.message||"Token exchange failed",errorCode:"unknown",debugInfo:{errorType:typeof n,errorName:n.name,hasStack:!!n.stack}}}},qf=()=>{try{const t=sessionStorage.getItem(St.USER_DATA),e=sessionStorage.getItem(St.ACCESS_TOKEN);if(!t||!e)return console.debug("[GTA Auth] No complete session data found for restoration"),null;const n=JSON.parse(t);return!n.id||!n.username?(console.warn("[GTA Auth] Incomplete user data found, cannot restore session"),null):(console.info("[GTA Auth] Successfully restored session for user:",{username:n.username,characterId:n.id,isFactionMember:n.isFactionMember,accessLevel:n.accessLevel}),{user:n,accessToken:e,restored:!0,restoredAt:Date.now()})}catch(t){return console.error("[GTA Auth] Failed to restore session from stored data:",t),sessionStorage.removeItem(St.USER_DATA),sessionStorage.removeItem(St.ACCESS_TOKEN),null}},_s=()=>{try{const t=sessionStorage.getItem(St.USER_DATA);return t?JSON.parse(t):null}catch(t){return console.error("[GTA Auth] Failed to get current user:",t),null}},Ps=()=>_s(),lr=()=>{try{const t=sessionStorage.getItem("google-admin-user");if(t){const n=JSON.parse(t);return n&&n.email}const e=sessionStorage.getItem("admin-auth-context");if(e){const n=JSON.parse(e);return n&&n.isAdminAuthenticated&&n.adminUserEmail}return!1}catch(t){return console.warn("[GTA Auth] Error checking Google authentication:",t),!1}},Td=()=>{try{const t=sessionStorage.getItem("google-admin-user");if(t)return JSON.parse(t);const e=sessionStorage.getItem("admin-auth-context");if(e){const n=JSON.parse(e);if(n&&n.isAdminAuthenticated)return{email:n.adminUserEmail,isAdmin:!0}}return null}catch(t){return console.warn("[GTA Auth] Error getting Google user:",t),null}},Rd=()=>sessionStorage.getItem(St.ACCESS_TOKEN),ji=()=>!!(_s()&&Rd()),ja=()=>{console.info("[GTA Auth] Logging out user"),Object.values(St).forEach(t=>{sessionStorage.removeItem(t)}),console.debug("[GTA Auth] User logged out successfully")},oN=async(t,e={})=>{try{const n=Rd();if(!n)throw new Error("No access token available");const r=t.startsWith("http")?t:t.startsWith("/")?`https://ucp.gta.world/api${t}`:`https://ucp.gta.world/api/${t}`,s=await fetch(r,{...e,headers:{Authorization:`Bearer ${n}`,"Content-Type":"application/json",...e.headers}});if(!s.ok)throw new Error(`API request failed: ${s.status} ${s.statusText}`);return await s.json()}catch(n){throw console.error("[GTA Auth] API request failed:",n),Ze(n,{extra:{context:"GTA World API Request",endpoint:t}}),n}},Oc=async()=>{try{if(!ji())return{valid:!1,error:"Not authenticated"};const t=_s();return t&&t.id&&t.username?(console.debug("[GTA Auth] Session validated using stored user data."),{valid:!0,userData:t}):(console.warn("[GTA Auth] Stored user data is incomplete or invalid, session considered invalid."),ja(),{valid:!1,error:"Incomplete user data in session"})}catch(t){return console.error("[GTA Auth] Session validation failed:",t),ja(),{valid:!1,error:t.message||"Session validation failed"}}},aN=()=>{const t={hasClientId:!0,clientId:`${Ft.CLIENT_ID.substring(0,8)}...`,functionName:Ft.FIREBASE_FUNCTION,authorizeUrl:Ft.AUTHORIZE_URL,tokenUrl:Ft.TOKEN_URL,userApiUrl:Ft.USER_API_URL},e=[];return console.info("[GTA Auth] Configuration validation:",{config:t,issues:e}),{valid:e.length===0,config:t,issues:e}},cN=t=>{if(lr())return!0;const e=Ps();return!e||!e.permissions?!1:e.permissions.includes(t)},lN=t=>{if(lr())return!0;const e=Ps();if(!e||!e.isFactionMember)return!1;const r={admin_panel:["admin_full_access","admin_limited_access"],faction_upload:["upload_faction_data"],database_editor:["database_access"],webhook_management:["manage_webhooks"],all_reports:["manage_all_reports"],department_reports:["manage_department_reports","manage_all_reports"],own_reports:["view_own_reports","manage_own_reports","manage_department_reports","manage_all_reports"],create_reports:["create_reports","create_basic_reports"],view_members:["view_all_members","view_department_members","view_team_members"],audit_logs:["access_audit_logs","view_audit_logs"]}[t];return r?r.some(s=>e.permissions.includes(s)):(console.warn(`Unknown feature: ${t}`),!1)},dN=()=>lr()?{characterName:Td()?.email?.split("@")[0]||"Admin",scriptRank:15,isGoogleAdmin:!0}:Ps()?.faction||null,uN=()=>lr()?"president":Ps()?.accessLevel||"none",hN=()=>lr()?["admin_panel","faction_upload","database_editor","webhook_management","all_reports","department_reports","own_reports","create_reports","view_members","audit_logs","manage_users","system_settings"]:Ps()?.permissions||[],Vf=()=>lr()?!0:Ps()?.isFactionMember||!1,Yf=async t=>{const e=Ps();if(!e)throw new Error("No authenticated user found");const n=e.faction?.characterId||e.id;try{const r=Qr(Cr,"checkFactionMembership"),s=Date.now()+"-"+Math.random().toString(36).substr(2,5),o=Date.now();console.log(`🔥 [GTA Auth] Refreshing faction data Firebase call [${s}]:`,{function:"checkFactionMembership",characterId:parseInt(n),factionId:364,timestamp:o,source:t?"explicit":e.faction?.characterId?"session_faction":"session_user_id"});const a=await r({characterId:parseInt(n),factionId:364}),l=Date.now()-o;console.log(`✅ [GTA Auth] Faction refresh completed [${s}]:`,{duration:l,isMember:a.data?.isMember,hasPermissions:a.data?.permissions?.length>0});const d={...e,faction:a.data.isMember?a.data.character:null,permissions:a.data.permissions||[],accessLevel:a.data.accessLevel||"none",factionInfo:a.data.factionInfo||null,isFactionMember:a.data.isMember};return sessionStorage.setItem(St.USER_DATA,JSON.stringify(d)),console.log("[GTA Auth] Faction data refreshed:",{isFactionMember:d.isFactionMember,accessLevel:d.accessLevel,permissionCount:d.permissions.length}),d}catch(r){throw console.error("[GTA Auth] Failed to refresh faction data:",r),r}},mN=t=>{if(!t)return!1;const e=[/timeout/i,/network/i,/connection/i,/fetch/i,/ENOTFOUND/i,/ECONNREFUSED/i,/ETIMEDOUT/i,/AbortError/i,/502|503|504/,/deadline.{0,10}exceeded/i,/unavailable/i],n=t.message||t.toString(),r=t.code||"";return e.some(s=>s.test(n)||s.test(r))},pN=t=>{if(!t)return"An unknown error occurred during authentication.";const e=t.message||t.toString();return e.includes("timeout")||e.includes("AbortError")?"Authentication timed out. The GTA World servers may be busy. Please try again.":e.includes("network")||e.includes("fetch")||e.includes("ENOTFOUND")?"Network connection error. Please check your internet connection and try again.":e.includes("invalid_request")||e.includes("revoked")?"This login session has expired or was already used. Please start the login process again.":e.includes("invalid_grant")?"The login session has expired. Please try logging in again.":e.includes("invalid_client")?"Authentication service configuration error. Please notify the Maintainer in the PHMC Discord.":e.includes("502")||e.includes("503")||e.includes("504")?"GTA World servers are temporarily unavailable. Please try again in a few moments.":e.includes("deadline")||e.includes("unavailable")?"Authentication service is temporarily unavailable. Please try again.":"Something went wrong during authentication. Please notify the Maintainer in the PHMC Discord"},xh=()=>{try{const t=[];for(let s=0;s<sessionStorage.length;s++){const o=sessionStorage.key(s);o?.startsWith("factionData_")&&t.push(o)}const e=Date.now(),n=1800*1e3;t.forEach(s=>{try{const o=JSON.parse(sessionStorage.getItem(s)||"{}");o.timestamp&&e-o.timestamp>n&&(sessionStorage.removeItem(s),console.log(`[Storage Cleanup] Removed expired cache: ${s}`))}catch{sessionStorage.removeItem(s)}}),Object.keys(sessionStorage).reduce((s,o)=>s+(sessionStorage.getItem(o)?.length||0),0)>1024*1024&&console.warn("[Storage Cleanup] Session storage size exceeding 1MB, consider clearing old data")}catch(t){console.warn("[Storage Cleanup] Error during cleanup:",t)}};typeof window<"u"&&(xh(),setInterval(xh,600*1e3));const Ah=t=>{try{const e="oauth_performance_metrics",r=[...JSON.parse(sessionStorage.getItem(e)||"[]"),t].slice(-10);sessionStorage.setItem(e,JSON.stringify(r));const s=r.reduce((a,l)=>a+(l.totalDuration||0),0)/r.length,o=r.filter(a=>a.success).length/r.length*100;console.log(`[Perf Summary] Last ${r.length} OAuth attempts: avg ${s.toFixed(0)}ms, ${o.toFixed(0)}% success`),t.totalDuration>15e3&&console.warn(`[Perf Alert] Slow OAuth detected: ${t.totalDuration}ms - investigate bottlenecks`)}catch(e){console.warn("[Perf] Failed to store performance metrics:",e)}},ur=()=>{const[t,e]=b.useState(()=>ji()?_s():null),[n,r]=b.useState(()=>!t),[s,o]=b.useState(null),[a,l]=b.useState(!1),[d,u]=b.useState(null);b.useEffect(()=>{t&&t.isFactionMember?d&&t.allFactionCharacters?.find($=>$.character.characterId===d.characterId)||u(t.faction):u(null)},[t,d]);const p=b.useCallback(R=>{if(!t){console.error("Cannot swap character, no user found.");return}const $=[t.allFactionCharacters,t.character,t.characters].filter(Array.isArray);let O=null;for(const E of $){const y=E.find(N=>N?.character?.characterId===R);if(y){O=y.character;break}const w=E.find(N=>N?.id===R);if(w){const N=t.allFactionCharacters?.find(v=>v?.character?.characterId===w.id)?.character;N?O=N:O={characterId:w.id,characterName:w.name||`${w.firstname||""} ${w.lastname||""}`.trim()};break}}O?(u(O),console.log(`Swapped active character to: ${O.characterName}`)):console.error(`Character with ID ${R} not found for this user.`)},[t]),f=b.useCallback(R=>{u(R),e($=>({...$,faction:R}))},[]),g=t?.character||t?.characters||[];b.useEffect(()=>{(async()=>{try{if(t){r(!1);try{l(!0);const O=await Oc();l(!1),O.valid||(e(null),o("Session expired. Please log in again."))}catch{l(!1)}return}r(!0),o(null);const $=qf();if($){e($.user),r(!1),Yf().then(O=>{e(O)}),l(!0);try{const O=await Oc();l(!1),O.valid||(e(null),o("Session expired. Please log in again."))}catch{l(!1)}return}if(ji()){const O=_s();e(O),l(!0);const E=await Oc();l(!1),E.valid||(e(null),o("Session expired. Please log in again."))}else e(null)}catch($){o($.message||"Failed to initialize authentication"),e(null)}finally{r(!1)}})()},[t]);const S=b.useCallback((R={})=>{o(null);const $={...R,onSuccess:(O,E)=>{e(O),R.onSuccess&&R.onSuccess(O,E)},onError:O=>{o(O),R.onError&&R.onError(O)}};sN($)},[]),_=b.useCallback(async(R,$)=>{Date.now()+""+Math.random().toString(36).substr(2,5);try{return r(!0),o(null),await new Promise((E,y)=>{const w=Date.now();zf(R,$,(N,v)=>{const A=Date.now()-w;console.log("🎯 [useGtaWorldAuth] handleOAuthCallback onSuccess called:",{duration:A,hasUserData:!!N,username:N?.username,returnPath:v}),e(N),r(!1),E({userData:N,returnPath:v})},N=>{const v=Date.now()-w;console.error("❌ [useGtaWorldAuth] handleOAuthCallback onError called:",{duration:v,errorMessage:N}),o(N),r(!1),y(new Error(N))})})}catch(O){throw o(O.message||"Authentication failed"),r(!1),O}},[]),I=b.useCallback(()=>{ja(),e(null),o(null)},[]),F=b.useCallback(async(R,$={})=>{try{if(!ji())throw new Error("Not authenticated");return await oN(R,$)}catch(O){throw(O.message.includes("401")||O.message.includes("unauthorized"))&&(I(),o("Session expired. Please log in again.")),O}},[I]),P=b.useCallback(async()=>{try{l(!0);const R=await F("/user");return e(R.user||R),R}catch(R){throw R}finally{l(!1)}},[F]),k=b.useCallback(()=>{o(null)},[]),D=b.useCallback(R=>{if(!R)return;const $={username:R.username,id:R.userId,isFactionMember:R.isFactionMember,faction:R.faction,allFactionCharacters:R.swappableCharacters,character:R.swappableCharacters,characters:R.swappableCharacters,accessLevel:R.accessLevel,permissions:R.permissions};e($),u(R.faction),r(!1)},[]);return{user:t,isAuthenticated:!!t,isLoading:n,error:s,isValidatingSession:a,accessToken:Rd(),login:S,logout:I,processCallback:_,refreshUser:P,apiRequest:F,clearError:k,getUserData:_s,hasValidSession:ji(),isFactionMember:Vf(),isPhmcMember:t?.isFactionMember||!1,factionData:d,factionRank:d?.scriptRank||0,characterName:d?.characterName||null,swappableCharacters:g,swapCharacter:p,canSwapCharacters:g.length>0,updateFactionData:f,loadFromSavedProfile:D}},bl=({variant:t="primary",size:e="md",className:n="",children:r,returnPath:s,onError:o,onInitiate:a,onSuccess:l,disabled:d=!1,...u})=>{const{login:p,isLoading:f,isAuthenticated:g,user:S}=ur(),_=b.useRef(0),I=500,F=b.useCallback(()=>{const P=Date.now(),k=P-_.current;if(k<I){console.warn("[GTA Login Button] Click ignored - too soon after last click:",{timeSinceLastClick:k,debounceMs:I,remainingMs:I-k});return}if(g&&S){console.info("[GTA Login Button] User already authenticated, calling onSuccess callback:",{username:S.username,characterId:S.id}),l&&l(S);return}_.current=P,console.log("[GTA Login Button] Initiating login..."),a&&a(),p({returnPath:s,onSuccess:(D,R)=>{console.info("[GTA Login Button] Login successful:",D),l&&l(D,R)},onError:D=>{console.error("[GTA Login Button] Login error:",D),o&&o(D)}})},[p,s,o,a,l,I,g,S]);return i.jsx(de,{variant:t,size:e,className:n,onClick:F,disabled:d||f,...u,children:f?i.jsxs(i.Fragment,{children:[i.jsx("span",{className:"spinner-border spinner-border-sm me-2",role:"status","aria-hidden":"true"}),"Connecting..."]}):r||i.jsxs(i.Fragment,{children:[i.jsx("i",{className:"fas fa-sign-in-alt me-2"}),"Login with GTA World"]})})},fN=()=>{const[t,e]=b.useState(""),[n,r]=b.useState(""),[s,o]=b.useState(""),a=Ua(),{user:l}=Id(),{isAuthenticated:d,user:u,isLoading:p}=ur();if(b.useEffect(()=>{l?(console.log("[GtaLogin] Firebase user authenticated, redirecting to admin:",l.email),a("/forms")):d&&u&&(console.log("[GtaLogin] GTA World user authenticated, redirecting to home:",{username:u.username,characterId:u.id}),a("/forms"))},[l,d,u,a]),p)return i.jsx("div",{style:{maxWidth:"400px",margin:"auto",paddingTop:"50px",textAlign:"center"},children:i.jsxs("div",{style:{padding:"20px"},children:[i.jsx("div",{className:"spinner-border",role:"status",children:i.jsx("span",{className:"visually-hidden",children:"Loading..."})}),i.jsx("p",{style:{marginTop:"10px"},children:"Checking authentication..."})]})});const f=g=>{g.preventDefault(),o(""),Hp(si,t,n).catch(S=>{o(S.message)})};return i.jsx("div",{style:{maxWidth:"400px",margin:"auto",paddingTop:"50px"},children:i.jsxs("form",{onSubmit:f,children:[i.jsx("button",{type:"button",onClick:()=>a("/"),style:{width:"25%",padding:"10px",backgroundColor:"#6c757d",color:"white",border:"pink",marginTop:"10px"},children:"Home"}),i.jsx("h2",{children:"Login"}),s&&i.jsx("p",{style:{color:"red"},children:s}),i.jsxs("div",{style:{marginBottom:"10px"},children:[i.jsx("label",{children:"Email"}),i.jsx("input",{type:"email",value:t,onChange:g=>e(g.target.value),style:{width:"100%",padding:"8px"}})]}),i.jsxs("div",{style:{marginBottom:"10px"},children:[i.jsx("label",{children:"Password"}),i.jsx("input",{type:"password",value:n,onChange:g=>r(g.target.value),style:{width:"100%",padding:"8px"}})]}),i.jsxs("div",{style:{display:"flex",gap:"10px",marginBottom:"10px"},children:[i.jsx("button",{type:"submit",style:{flex:1,padding:"10px",backgroundColor:"blue",color:"white",border:"none"},children:"Login"}),i.jsx(bl,{returnPath:"/",style:{flex:1,padding:"10px",backgroundColor:"#ff8c00",color:"white",border:"none"},onError:g=>o(`GTA World Login Error: ${g}`),onInitiate:()=>o(""),onSuccess:g=>{console.log("[GtaLogin] GTA World login successful:",g),a("/")},children:"Login with GTA World OAuth"})]}),i.jsx("button",{type:"button",onClick:()=>a("/"),style:{width:"100%",padding:"10px",backgroundColor:"#6c757d",color:"white",border:"none",marginTop:"10px"},children:"Home"})]})})},gN=()=>{const[t,e]=b.useState("processing"),[n,r]=b.useState(null),s=hg(),o=Ua(),{processCallback:a}=ur();return b.useEffect(()=>{const l=new URLSearchParams(s.search),d=new URLSearchParams(s.hash.split("?")[1]||""),u=l.get("code")||d.get("code"),p=l.get("state")||d.get("state"),f=l.get("error")||d.get("error"),g=l.get("error_description");if(f){e("error"),r(g||f);return}if(!u){e("error"),r("No authorization code received");return}(async()=>{try{console.log("🎯 [UnifiedGtaCallback] Starting processCallback with:",{code:u?.substring(0,10)+"...",state:p}),await a(u,p),console.log("✅ [UnifiedGtaCallback] processCallback completed successfully"),e("success");try{const S=sessionStorage.getItem("gta-user-data")||sessionStorage.getItem("gtaworld_user_data"),_=S?JSON.parse(S):null;if(_){const I=_.faction||null,F=I?.characterName||null,P=I?.characterId||null,k=I?.rank||I?.scriptRank||null,D={username:_.username||null,userId:_.id||null,isFactionMember:!!_.isFactionMember,faction:I?{characterName:I.characterName||null,characterId:I.characterId||null,rank:I.rank||null,scriptRank:I.scriptRank||null}:null,preferredEmployee:{name:F||null,badge:P||null,rank:k||null,discord:_.username||null,phNumber:"50056"},accessLevel:_.accessLevel||"none",permissions:Array.isArray(_.permissions)?_.permissions:[],savedAt:Date.now(),version:1};sessionStorage.setItem("phmc_gtaw_oauth_latest",JSON.stringify(D));const R=localStorage.getItem("phmc_gtaw_oauth_persist_enabled")==="true";R&&localStorage.setItem("phmc_gtaw_oauth_profile",JSON.stringify(D)),console.log("[UnifiedGtaCallback] Prepared compact OAuth profile for persistence.",{hasUser:!!_,wroteSessionKey:"phmc_gtaw_oauth_latest",persistedToLocalStorage:R})}else console.warn("[UnifiedGtaCallback] No user data found in sessionStorage to prepare persistence profile.")}catch(S){console.warn("[UnifiedGtaCallback] Failed to prepare/persist compact OAuth profile:",S)}console.log("🔄 [UnifiedGtaCallback] Setting up navigation to homepage in 800ms"),setTimeout(()=>{console.log("🚀 [UnifiedGtaCallback] Navigating to homepage (preserving sessionStorage)"),console.log("📦 [UnifiedGtaCallback] SessionStorage before navigation:",{userData:!!sessionStorage.getItem("gtaworld_user_data"),accessToken:!!sessionStorage.getItem("gtaworld_access_token"),storageKeys:Object.keys(sessionStorage)}),o("/",{replace:!0})},800)}catch(S){console.error("❌ [UnifiedGtaCallback] processCallback failed:",S),e("error"),r(S.message||"Authentication failed")}})()},[s.search,s.hash,a]),t==="processing"?i.jsx("div",{className:"d-flex justify-content-center align-items-center",style:{height:"100vh"},children:i.jsxs("div",{className:"text-center",children:[i.jsx("div",{className:"spinner-border text-primary",role:"status",style:{width:"3rem",height:"3rem"},children:i.jsx("span",{className:"visually-hidden",children:"Processing..."})}),i.jsx("h4",{className:"mt-3",children:"GTA World Authentication"}),i.jsx("p",{className:"text-muted",children:"Processing authentication..."})]})}):t==="success"?i.jsx("div",{className:"d-flex justify-content-center align-items-center",style:{height:"100vh"},children:i.jsxs("div",{className:"text-center",children:[i.jsx("div",{className:"text-success mb-3",children:i.jsx("i",{className:"fas fa-check-circle",style:{fontSize:"4rem"}})}),i.jsx("h4",{className:"text-success",children:"Authentication Successful!"}),i.jsx("p",{className:"text-muted",children:"Redirecting to homepage..."}),i.jsx("div",{className:"spinner-border spinner-border-sm text-primary mt-2",children:i.jsx("span",{className:"visually-hidden",children:"Redirecting..."})})]})}):t==="error"?i.jsx("div",{className:"d-flex justify-content-center align-items-center",style:{height:"100vh"},children:i.jsx("div",{className:"text-center",children:i.jsxs("div",{className:"alert alert-danger",role:"alert",style:{maxWidth:"500px"},children:[i.jsxs("h4",{className:"alert-heading",children:[i.jsx("i",{className:"fas fa-exclamation-triangle me-2"}),"Authentication Error"]}),i.jsx("p",{className:"mb-3",children:n}),i.jsx("hr",{}),i.jsxs("div",{className:"d-flex gap-2 justify-content-center",children:[i.jsxs("button",{className:"btn btn-primary",onClick:()=>o("/",{replace:!0}),children:[i.jsx("i",{className:"fas fa-home me-2"}),"Return to Homepage"]}),i.jsxs("button",{className:"btn btn-outline-secondary",onClick:()=>window.location.reload(),children:[i.jsx("i",{className:"fas fa-redo me-2"}),"Try Again"]})]})]})})}):null},bN=()=>{const[t,e]=b.useState(null);return b.useEffect(()=>{const n={timestamp:new Date().toISOString(),fullUrl:window.location.href,origin:window.location.origin,pathname:window.location.pathname,search:window.location.search,hash:window.location.hash,searchParams:Object.fromEntries(new URLSearchParams(window.location.search)),hashParams:Object.fromEntries(new URLSearchParams(window.location.hash.split("?")[1]||"")),hasCode:!!(new URLSearchParams(window.location.search).get("code")||new URLSearchParams(window.location.hash.split("?")[1]||"").get("code")),hasState:!!(new URLSearchParams(window.location.search).get("state")||new URLSearchParams(window.location.hash.split("?")[1]||"").get("state")),hasError:!!(new URLSearchParams(window.location.search).get("error")||new URLSearchParams(window.location.hash.split("?")[1]||"").get("error")),code:new URLSearchParams(window.location.search).get("code")||new URLSearchParams(window.location.hash.split("?")[1]||"").get("code"),state:new URLSearchParams(window.location.search).get("state")||new URLSearchParams(window.location.hash.split("?")[1]||"").get("state"),error:new URLSearchParams(window.location.search).get("error")||new URLSearchParams(window.location.hash.split("?")[1]||"").get("error")};e(n),console.log("[OAuth URL Diagnostic]",n),sessionStorage.setItem("oauth-url-diagnostic",JSON.stringify(n))},[]),t?i.jsxs("div",{style:{padding:"20px",fontFamily:"monospace",fontSize:"12px"},children:[i.jsx("h2",{children:"OAuth URL Diagnostic"}),i.jsxs("div",{style:{backgroundColor:"#f5f5f5",padding:"10px",borderRadius:"4px"},children:[i.jsx("h3",{children:"URL Components:"}),i.jsxs("p",{children:[i.jsx("strong",{children:"Full URL:"})," ",t.fullUrl]}),i.jsxs("p",{children:[i.jsx("strong",{children:"Search:"})," ",t.search||"(empty)"]}),i.jsxs("p",{children:[i.jsx("strong",{children:"Hash:"})," ",t.hash||"(empty)"]}),i.jsx("h3",{children:"Parameters Found:"}),i.jsxs("p",{children:[i.jsx("strong",{children:"Search Params:"})," ",JSON.stringify(t.searchParams)]}),i.jsxs("p",{children:[i.jsx("strong",{children:"Hash Params:"})," ",JSON.stringify(t.hashParams)]}),i.jsx("h3",{children:"OAuth Parameters:"}),i.jsxs("p",{children:[i.jsx("strong",{children:"Code:"})," ",t.code?`${t.code.substring(0,20)}...`:"NOT FOUND"]}),i.jsxs("p",{children:[i.jsx("strong",{children:"State:"})," ",t.state?`${t.state.substring(0,20)}...`:"NOT FOUND"]}),i.jsxs("p",{children:[i.jsx("strong",{children:"Error:"})," ",t.error||"NOT FOUND"]}),i.jsx("h3",{children:"Status:"}),i.jsxs("p",{style:{color:t.hasCode?"green":"red"},children:["✓ Has Code: ",t.hasCode?"YES":"NO"]}),i.jsxs("p",{style:{color:t.hasState?"green":"red"},children:["✓ Has State: ",t.hasState?"YES":"NO"]}),i.jsxs("p",{style:{color:t.hasError?"red":"green"},children:["✓ Has Error: ",t.hasError?"YES":"NO"]})]}),i.jsxs("div",{style:{marginTop:"20px"},children:[i.jsx("button",{onClick:()=>window.location.href="/#/",children:"Continue to Homepage"}),i.jsx("button",{onClick:()=>navigator.clipboard.writeText(JSON.stringify(t,null,2)),style:{marginLeft:"10px"},children:"Copy Diagnostic Data"})]})]}):i.jsx("div",{children:"Loading URL diagnostic..."})},yN=({children:t})=>{const{user:e}=Id(),{isAuthenticated:n}=ur();return!e&&!n?i.jsx(Lh,{to:"/login"}):t},vN=t=>{let e=`[h1]Developer Testing Form[/h1]
`;e+=`[b]This form is for developer testing purposes only.[/b]

`;for(const[n,r]of Object.entries(t))e+=`[b]${n}:[/b] ${r}
`;return e},_N=t=>{const{coronerRank:e,placeOfDeath:n,department:r,dateTime:s,coronerEmployee:o,coronerBadge:a,decedentName:l,decedentOOC:d,pronouncedTimeOfDeath:u,synopsis:p,probableCauseOfDeath:f,mannerOfDeath:g,typeOfDeath:S,scenePhotos:_,agencyDataStore:I,additionalImages:F,evidenceLockerID:P,morgueStatus:k}=t,{decedentAttributes:D,decedentPlaceholder:R}=t,$=j=>I&&I[j]?I[j].fullName:j,O=(_||"").split(",").map(j=>j.trim()).filter(j=>j),E=(F||"").split(",").map(j=>j.trim()).filter(j=>j),y=(D||"").split(",").map(j=>j.trim()).filter(j=>j);(R||"").split(",").map(j=>j.trim()).filter(j=>j);const w=O.length>0?O.map(j=>`[img]${j}[/img]`).join(`
`):"[i]No scene photos provided.[/i]",N=E.length>0?E.map(j=>`[img]${j}[/img]`).join(`
`):"[i]No additional images provided.[/i]",v=y.length>0?`[b]Decedent /attributes:[/b]
${y.map(j=>`[img]${j}[/img]`).join(`
`)}`:"";let A="No",C="";P&&P.trim()!==""&&(A="Yes",C=`[list][*] ${P.trim()} - ${l} (( ${d} ))[/list]`);const M=k==="true"||k===!0?`[bold][color=red]The Morgue Screen Photo is currently unavailable. [/color][/bold]
`:"";return`[divbox=transparent][center][img]https://i.ibb.co/0pgw9hHm/phmc.png[/img][/center][/divbox]

[divbox=transparent][br][/br][center]DEATH INVESTIGATION REPORT[/center]
[hr][/hr]

[center][bold]A. WRITTEN REPORT[/bold][/center]

The County Coroner's Office has been called regarding the decease that occurred at the location of [bold]${n||"Unknown Location"}[/bold]. Upon receiving the call from[bold] ${$(r)||"Unknown Department"}[/bold], Coroner's Office dispatched a ${e||"Coroner"} to the crime scene to conduct an investigation on the [bold]${s||"Unknown Date/Time"}[/bold].

The ${e||"Coroner"}, [bold]${o||"Unknown Coroner"}[/bold], Serial Number [bold]${a||"N/A"}[/bold], arrived at the scene and identified the individual as [bold]${l||"Unidentified Decedent"}[/bold], who is estimated to have died at [bold]${u||"Unknown Time"}[/bold]. Following an initial investigation, The ${e||"Coroner"} came up with the following [bold]synopsis[/bold]: ${p||"No synopsis provided."}

Based on the information gathered from the scene investigation and the decedent's medical history (if available), the probable cause of death was determined to be [bold]${f||"Undetermined"}[/bold]. The manner of death was classified as [bold]${g||"Undetermined"}[/bold].
[/divbox]
[divbox=transparent][center][bold]B. PHOTOGRAPHIC DOCUMENTARY RECORD[/center]
[hr][/hr]
[center][size=85][bold][u]SCENE PHOTOGRAPHY[/u][/bold][/size][/center]
${w}
[/divbox]

[divbox=transparent]
[center][bold]C. STATEMENT[/bold][/center]
[hr][/hr]
[size=85]As a ${e||"Coroner"}, I have made detailed notes of my findings and conclusions, and these notes are available for review if necessary. However, I must note that these notes do not contain any personal opinions and are solely based on the evidence and facts available to me.

In conclusion, I hope that this report provides the necessary information required for the agency to move forward with any necessary actions. Please let me know if you require any additional information or if I can be of further assistance.

I certify that the information contained in this report is true and accurate to the best of my knowledge and belief. I have reviewed the report and ensured that all information included is complete and accurate. [/size][/divbox]

[divbox=transparent][center][bold]D. PRIVACY AND CONFIDENTIALITY[/bold][/center]
[hr][/hr]
[center][size=85]This document from the Forensic Medicine and Pathology Department of Pillbox Hill Medical Center certifies the authenticity of the information contained within. Any unauthorized distribution or use of this information is in violation of the Health Insurance Portability and Accountability Act (HIPAA), as well as state and federal privacy laws, including but not limited to the San Andreas Confidentiality of Medical Information Act (CMIA) and the San Andreas Information Practices Act (IPA).

It is imperative that all parties handling this document respect the privacy and confidentiality of the decedent and their family. Any violation of these laws may result in legal action being taken against the responsible parties.

This document is provided for official purposes only and is not to be construed as legal advice or medical diagnosis. If additional information or clarification is needed, please contact the Forensic Medicine and Pathology Department of Pillbox Hill Medical Center.[/size][/divbox]

[divbox=transparent][center][bold][u](( OUT OF CHARACTER IMAGES ))[/u][/bold][/center][hr][/hr]

This section clarifies whether or not if the player was character killed or player killed.
In this case the player was; ${S||"Unknown"}
Player OOC Name: ${d||"Unknown"}
Morgue screen, cinjuries, cdna links: ${M||""}
[size=85][u] THESE IMAGES ARE [bold]OUT OF CHARACTER[/bold] FOR INTERNAL RECORDS, DO NOT USE THESE AS EVIDENCE. [/u][/size]
${N}

${v}

${e||"Coroner"} ${o||"Unknown Coroner"} has added something to the evidence locker: ${A}
${C}

[/divbox]
`},CN=t=>{const{requestingOfficer:e,department:n,coronerEmployee:r,coronerRank:s,coronerDiscord:o,coronerPHNumber:a,deathReport:l,additionalReports:d,agencyDataStore:u}=t,p=g=>u&&u[g]?u[g].fullName:g;return`[center][img]https://i.ibb.co/GfSHbMMj/ItaoQkO.webp[/img][/center]
[hr][/hr]

TO: ${e} - ${p(n)}
FROM: ${r} @ phmc.health
SUBJECT: Death Report Paperwork

For the attention of: [b]${p(n)}[/b] - [b]${e}[/b]

This Coroner Report has been written by ${s} ${r} you can find the enclosed documents attached to this email. 

[b]AUTOPSY INFORMATION / REQUEST(S)[/B] 
If you require an autopsy, please follow this link and follow the instructions: [url=https://phmc.gta.world/viewforum.php?f=265]Autopsy Portal[/url].


[altspoiler=Request a Autopsy FAQ]
1) How do I request an autopsy report and/or a death certificate?
Autopsies and death certificates can aid in various situations, especially whenever the cause of death plays a vital role in. Our professionals attempt to handle each and every request in a timely manner. However, given the fact that the effort of documentation is immense, a request fee is associated along with it. Upon its payment, the report or certificate will be sent to you directly.


2) Is there a fee associated with the request process?
Yes, there is a $2,000 fee associated with the request. This fee covers administrative costs related to processing and maintaining your requested report/certificate securely within our systems. It ensures the continued improvement of our services, maintaining the highest standards in healthcare data management.


3) How do I pay the $2,000 request fee?
To pay your $2,000 request fee, please log into the banking website and navigate to the "Payment" section. Select your preferred payment method (e.g., credit card, debit card), insert our routing number (020000062), enter the required payment details, review the transaction, and confirm your payment. (( Type /transfer 2000 020000062 ))

(( Autopsies for Player Kills (PK) and Character Kills (CK) will only be accepted if they are deemed strictly necessary and relevant to an important case or investigation. Prior to making a request for such an autopsy, a member of the Medical-Examiners must be notified and consulted with. Furthermore, it is mandatory to provide information about /cdamages and /cexamine. In the event that this information is not available, please do not hesitate to contact an administrator in-game, who can provide it. If these steps are not followed, an automatic denial will cause your request to be archived.

Also if it is a PK, please be sure to use John/Jane Doe with their character name in OOC brackets . Ex: John Doe (( James Smith ))

[url=https://phmc.gta.world/ucp.php?i=pm&mode=compose&g=50]Click here to contact a Medical-Examiner to get the green light![/url] ))
[/altspoiler]
If you have further enquiries, feel free to reach out to the following individual:
[list] ${r}
[*] Phone Number: ${a}
[*] (( Discord: ${o} ))[/list]

[altspoiler=Coroner Report]
${l}
[code]
${l}

[/code]
[/altspoiler]
${d&&d.length>0?d.filter(g=>g.trim()).map((g,S)=>`
[altspoiler=Coroner Report - Additional ${S+1}]
${g}
[code]
${g}
[/code]
[/altspoiler]`).join(`

`):""}

Kind regards
${s} ${r}
Pillbox Hill Medical Center - Pathology  and Forensic Medicine

[size=75]The content of this email is intended for the person or entity to which it is addressed only. This email may contain confidential information. If you are not the person to whom this message is addressed, be aware that any use, reproduction, or distribution of this message is strictly prohibited. If you received this in error, please contact the sender and immediately delete this email and any attachments.[/size]`},SN=t=>{const{phmcEmployee:e,extraStaff:n,patientID:r,patientSummaryConsultation:s,patientAddress:o,phmcRank:a,date:l,patientSummary:d,lastName:u,surgeryProcedures:p}=t;return Array.isArray(n)&&n.join(", "),`[divbox=white][table][tr][td][center][br][/br][br][/br][b]SURGICAL REPORT[/b]

PATIENT ${r}

Date: ${l}
Signed: ${a} ${u}

[/center][td][center][img]https://i.ibb.co/0pgw9hHm/phmc.png[/img][/center][td][center][br][/br][br][/br][size=100][b]PILLBOX HILL MEDICAL CENTER[/b]
ELGIN AVE. / STRAWBERRY AVE.
PO BOX 742
LOS SANTOS, SAN ANDREAS
P: 50056[/size][/center][/table][/divbox]
[divboxcolor=black][center][color=#FF0000]>[/color] [color=#FFFFFF][b]Personnel[/b][/color][/center][/divboxcolor]
[table][tr][td]Lead Surgeon[/td][td]
${e}
[/td][/tr]
[tr][td]Additional Staff [i](leave empty if none)[/i][/td][td]
${n}
[/td][/tr][/table]
[divboxcolor=black][center][color=#FF0000]>[/color] [color=#FFFFFF][b]Surgical Inquiry[/b][/color][/center][/divboxcolor]
[table]

[tr][td]Name of the procedure[/td][td]
${p}

[tr][td]Did the patient or their family consent, or did they have a life threatening or severe injury that requires immediate surgical intervention?[/td][td]
[cb${t.patientConsentOption==="Yes"?"c":""}] Yes
[cb${t.patientConsentOption==="No"?"c":""}] No


[/td][/tr]

[tr][td]Did any medical complications occur during the surgery?[/td][td]
[cb${t.patientComplicationOptions==="Yes"?"c":""}] Yes
[cb${t.patientComplicationOptions==="No"?"c":""}] No
[/td][/tr]

[tr][td]Was the procedure completed successfully, and did it result in the desired clinical outcome?[/td][td]
[cb${t.procedureGoodOptions==="Yes"?"c":""}] Yes
[cb${t.procedureGoodOptions==="No"?"c":""}] No
[/td][/tr]
[/table]

[divboxcolor=black][center][color=#FF0000]>[/color] [color=#FFFFFF][b]Post-Anesthesia Report[/b][/color][/center][/divboxcolor]
[table]

[tr][td]Type & Dosage of Anesthesia Administered[/td][td] ${s}
[/td][/tr]

[tr][td]Post-Operative Anesthesia Details[/td][td]${o}
[/td][/tr]

[/table]

[divboxcolor=black][center][color=#FF0000]>[/color] [color=#FFFFFF][b]Summary of Surgical Procedure[/b][/color][/center][/divboxcolor]
[table]

[tr][td]
${d}

[/table]`},wN=t=>{const{patientName:e,patientAddress:n,patientRace:r,patientGender:s,patientPH:o,patientDiscord:a,patientEmergencyContact:l,patientEmergencyContactNumber:d,patientEmergencyContactRelation:u,patientEmergencyContactDiscord:p,patientTitle:f,patientAllergies:g,patientCurrentMedicine:S,patientChronicDiseases:_,patientNotes:I,paymentProofPhotos:F,patientDateOfBirth:P,patientID:k,formType:D,patientTherapy:R,patientTriggers:$,patientSupport:O,patientHarm:E,patientFam:y,patientGenetic:w,patientMental:N,patientFamSocial:v,patientReligion:A,attorneyName:C,attorneyRelation:M,attorneyPH:B,patientSmoker:j,patientAlcohol:V,patientDrugs:q,patientExercise:Y,patientDiet:ue,patientSleep:te,patientSexLife:se,patientJobRisks:X,patientHazards:Z,patientOther:re,dnrOther:he,date:be}=t;let ge="";t.isExempt===!0||t.isExempt==="true"?ge="I am exempt from paying this service in accordance with the PHMC policies.":F&&(ge=`[url=${F}]Proof Of Payment [/url]`);const Re=`[table][tr][td][center][br][/br][br][/br][b]Patient Information[/b]

[size=110]PATIENT ${k}

${e}
[/size]

[/center][td][center][img]https://i.ibb.co/0pgw9hHm/phmc.png[/img][img]https://i.ibb.co/fdGgxDH1/LkRKav2.png[/img]
[b][size=150]BASIC PATIENT INFORMATION[/size][/center][/table]
[divboxcolor=black][center][size=115][color=#FF0000]>[/color] [color=#FFFFFF][b]General Information[/b][/color][/size][/center][/divboxcolor]
[table][tr][td] Title: ${f}[/td][td] Full Name: ${e}
[tr][td] Date of Birth: ${P}  [/td][td] Home Address: ${n}
[tr][td] Gender Identity: ${s} [/td][td] Ethnicity: ${r}
[tr][td] Phone Number: ${o} [/td][td] (( Discord ID: ${a}))
[/table]
[divboxcolor=black][center][size=115][color=#FF0000]>[/color] [color=#FFFFFF][b]Emergency Contact[/b][/color][/size][/center][/divboxcolor]
[table][tr][td] Full Name: ${l} [/td][td] Relationship: ${u}
[tr][td] Phone Number: ${d} [/td][td] (( Discord ID: ${p}))
[/table]
[divboxcolor=black][center][size=115][color=#FF0000]>[/color] [color=#FFFFFF][b]Medical History[/b][/color][/size][/center][/divboxcolor]
[table][tr][td][b][size=105]Past History[/size][/b][color=transparent]youarecool[/color][/td][td][color=transparent]ifyoureadthisyouareawesomebutdontdeletemeplease![/color]
[tr][td] Blood Type: [/td][td] [cb${t.patientBloodType==="A+"?"c":""}] A+ [cb${t.patientBloodType==="A-"?"c":""}] A- [cb${t.patientBloodType==="B+"?"c":""}] B+ [cb${t.patientBloodType==="B-"?"c":""}] B- [cb${t.patientBloodType==="O+"?"c":""}] O+ [cb${t.patientBloodType==="O-"?"c":""}] O- [cb${t.patientBloodType==="AB+"?"c":""}] AB+ [cb${t.patientBloodType==="AB-"?"c":""}] AB-
[tr][td] Known Allergies: [/td][td] ${g}
[tr][td] Current Medications: [/td][td] ${S}
[tr][td] Chronic Conditions: [/td][td] ${_}
[tr][td] Traumas & Injuries: [/td][td] ${I}
[/table] 

[divboxcolor=black][center][size=115][color=#FF0000]>[/color] [color=#FFFFFF][b]Payment[/b][/color][/size][/center][/divboxcolor]
[table][tr][td] Please attach an unedited confirmation of your payment, unless you are exempt. [size=70](see question 14 in the FAQ thread on how to pay)[/size][/td][td]
    ${ge}
[/table]

`,Pe=`[table][tr][td][center][br][/br][br][/br][b]Patient Information[/b]

[size=110]PATIENT ${k}

${e}
[/size]

[/center][td][center][img]https://i.ibb.co/0pgw9hHm/phmc.png[/img][img]https://i.ibb.co/fdGgxDH1/LkRKav2.png[/img]
[b][size=150]ADVANCED PATIENT INFORMATION[/size][/center][/table]
[divboxcolor=black][center][size=115][color=#FF0000]>[/color] [color=#FFFFFF][b]General Information[/b][/color][/size][/center][/divboxcolor]
[table][tr][td] Title: ${f}[/td][td] Full Name: ${e}
[tr][td] Date of Birth: ${P} [/td][td] Home Address: ${n}
[tr][td] Gender Identity: ${s} [/td][td] Ethnicity: ${r}
[tr][td] Phone Number: ${o} [/td][td] (( Discord ID: ${a}))
[/table]
    [divboxcolor=black][center][size=115][color=#FF0000]>[/color] [color=#FFFFFF][b]Emergency Contact[/b][/color][/size][/center][/divboxcolor]
    [table][tr][td] Full Name: ${l} [/td][td] Relationship: ${u}
    [tr][td] Phone Number: ${d} [/td][td] (( Discord ID: ${p}))
[/table]
[divboxcolor=black][center][size=115][color=#FF0000]>[/color] [color=#FFFFFF][b]Medical History[/b][/color][/size][/center][/divboxcolor]
[table][tr][td][b][size=105]Past History[/size][/b][color=transparent]youarecool[/color][/td][td][color=transparent]ifyoureadthisyouareawesomebutdontdeletemeplease![/color]
[tr][td] Blood Type: [/td][td] [cb${t.patientBloodType==="A+"?"c":""}] A+ [cb${t.patientBloodType==="A-"?"c":""}] A- [cb${t.patientBloodType==="B+"?"c":""}] B+ [cb${t.patientBloodType==="B-"?"c":""}] B- [cb${t.patientBloodType==="O+"?"c":""}] O+ [cb${t.patientBloodType==="O-"?"c":""}] O- [cb${t.patientBloodType==="AB+"?"c":""}] AB+ [cb${t.patientBloodType==="AB-"?"c":""}] AB-
[tr][td] Known Allergies: [/td][td] ${g}
[tr][td] Current Medications: [/td][td] ${S}
[tr][td] Chronic Conditions: [/td][td] ${_}
[tr][td] Traumas & Injuries: [/td][td] ${I}
[/table]
[divboxcolor=black][center][size=115][color=#FF0000]>[/color] [color=#FFFFFF][b]Mental Health History[/b][/color][/size][/center][/divboxcolor]
[table][tr][td][b][size=105]Past History[/size][/b][color=transparent]youarecool[/color][/td][td][color=transparent]ifyoureadthisyouareawesomebutdontdeletemeplease![/color]
[tr][td] Diagnosed Mental Health Conditions: [/td][td] ${N}
[tr][td] Therapies & Counseling: [/td][td] ${R}
[tr][td] Triggers or Sensors: [/td][td] ${$}
[tr][td] Support & Coping Systems: [/td][td] ${O}
[tr][td] Self-Harm History or Tendencies: [/td][td] ${E}
[/table]
[divboxcolor=black][center][size=115][color=#FF0000]>[/color] [color=#FFFFFF][b]Family Medical History[/b][/color][/size][/center][/divboxcolor]
[table][tr][td][b][size=105]Past History[/size][/b][color=transparent]youarecool[/color][/td][td][color=transparent]ifyoureadthisyouareawesomebutdontdeletemeplease![/color]
[tr][td] Immediate Family Members: [/td][td] ${y}
[tr][td] Known Genetic Conditions: [/td][td] ${w}
[tr][td] Family Social History: [/td][td] ${v}
[/table]
[divboxcolor=black][center][size=115][color=#FF0000]>[/color] [color=#FFFFFF][b]Social Information[/b][/color][/size][/center][/divboxcolor]
[table][tr][td] Marital Status: [cb${t.maritalStatus==="Single"?"c":""}] Single [cb${t.maritalStatus==="Married"?"c":""}] Married [cb${t.maritalStatus==="Divorced"?"c":""}] Divorced/Widowed [/td][td] Number of Children: [cb${t.numberChildren==="0"?"c":""}] 0 [cb${t.numberChildren==="1"?"c":""}] 1 or more
[tr][td] Cultural and/or Religious Considerations: ${A} [/td][td] Financial Status: [cb${t.financialStatus==="LowIncome"?"c":""}] Low Income [cb${t.financialStatus==="MiddleIncome"?"c":""}] Average Income [cb${t.financialStatus==="HighIncome"?"c":""}] High Income
[/table]
[divboxcolor=black][center][size=115][color=#FF0000]>[/color] [color=#FFFFFF][b]Lifestyle Information[/b][/color][/size][/center][/divboxcolor]
[table][tr][td] Smoking Status: ${j} [/td][td] Alcohol Use: ${V}[/td][td] Other Substances: ${q}
[tr][td] Exercise Habits: ${Y}[/td][td] Dietary Information: ${ue}[/td][td] Sleep Patterns: ${te}
[tr][td] Sexual Health: ${se}[/td][td] Occupational Hazards: ${X}[/td][td] Environmental Hazards: ${Z}[/table]
[table][tr][td] Other Information & Preferences: ${re}
[/table]
[divboxcolor=black][center][size=115][color=#FF0000]>[/color] [color=#FFFFFF][b]Advanced Directives[/b][/color][/size][/center][/divboxcolor]
[divbox=transparent][list=none]I, ${e}, hereby provide the following advance directives regarding my healthcare, to be followed in the event that I become unable to make decisions about my medical treatment.

[list=1][*] [size=110]Living Will[/size]: In the event I am unable to communicate, I direct the following regarding life-sustaining treatments:
[cb${t.dnr==="ProlongLife"?"c":""}][/cb${t.dnr==="ProlongLife"?"c":""}]I want all available measures taken to prolong my life.
[cb${t.dnr==="ComfortOfLife"?"c":""}][/cb${t.dnr==="ComfortOfLife"?"c":""}]I want only treatments focused on comfort and quality of life, even if it means not prolonging life.
[cb${t.dnr==="other"?"c":""}][/cb${t.dnr==="other"?"c":""}]Other instructions: ${he}

[*][size=110]Healthcare Power of Attorney[/size]:
[cb${t.attorney==="Yes"?"c":""}][/cb${t.attorney==="Yes"?"c":""}]have appointed the following person as my Healthcare Proxy/Agent to make medical decisions on my behalf:
[list=none]Full Name: ${C}
Relationship to Patient: ${M}
Phone Number: ${B}[/list]

[cb${t.attorney==="No"?"c":""}][/cb${t.attorney==="No"?"c":""}]I have not appointed a Healthcare Proxy/Agent at this time.
[*] [size=110]Do Not Resuscitate (DNR) Order[/size]:
[cb${t.dnrOrder==="Yes"?"c":""}][/cb${t.dnrOrder==="Yes"?"c":""}]I have a DNR order in place, instructing medical staff not to perform CPR or other life-saving measures if my heart stops.
[cb${t.dnrOrder==="No"?"c":""}][/cb${t.dnrOrder==="No"?"c":""}]I do not have a DNR order in place at this time.

[*] [size=110]Consent to Share Advance Directives[/size]:
I authorize Pillbox Hill Medical Center to keep a copy of my advance directives in my medical record and to share this information with medical staff and emergency personnel as needed to ensure my healthcare wishes are respected.[/list]
I understand that I may revise or revoke these directives at any time by providing written notice.

Signature: [i][u]${e}[/u][/i]
Date: ${be}[/divbox]
[divboxcolor=black][center][size=115][color=#FF0000]>[/color] [color=#FFFFFF][b]Disclaimer[/b][/color][/size][/center][/divboxcolor]
[divbox=transparent][list=none]I, ${e}, hereby declare that the information provided in this medical history form is true, accurate, and complete to the best of my knowledge. I understand that this information will be stored securely within the systems of Pillbox Hill Medical Center and may be accessed by authorized healthcare professionals involved in my care.

I, ${e}, upon submitting this form, consent to the sharing of my medical information among healthcare professionals within Pillbox Hill Medical Center for the purpose of providing comprehensive and coordinated healthcare services. I acknowledge that this information may be used for diagnosis, treatment, and other healthcare-related activities in accordance with applicable laws and regulations, including the Health Insurance Portability and Accountability Act (HIPAA).

I, ${e}, retain the right to revoke this consent at any time by notifying Pillbox Hill Medical Center in writing. However, I also understand that revoking consent may limit the ability of healthcare professionals to provide me with optimal and coordinated care.[/list][/divbox]
    [divboxcolor=black][center][size=115][color=#FF0000]>[/color] [color=#FFFFFF][b]Payment[/b][/color][/size][/center][/divboxcolor]
    [table][tr][td] Please attach an unedited confirmation of your payment, unless you are exempt. [size=70](see question 14 in the FAQ thread on how to pay)[/size][/td][td]
    ${ge}
    [/table]`;return D==="advanced"?Pe:Re},EN=t=>{const{patientID:e,date:n,phmcEmployee:r,patientHeight:s,patientWeight:o,phmcRank:a,careerRisks:l,patientAllergies:d,patientMedicine:u,patientcareerNo:p,patientSummary:f,patientCareer:g,patientImpairments:S}=t,_=r&&r!=="N/A"?r:"",F=(_?_.split(" ").pop():"")||"[Signature Required]";return`[divbox=white][table][tr][td][center][br][/br][br][/br][b]PHYSICAL EXAMINATION[/b]

PATIENT ${e}

Date: ${n}
Signed: ${a&&a!=="N/A"?a:"[Rank Required]"} ${F}
[/center][td][center][img]https://i.ibb.co/0pgw9hHm/phmc.png[/img][/center][td][center][br][/br][br][/br][size=100][b]PILLBOX HILL MEDICAL CENTER[/b]
ELGIN AVE. / STRAWBERRY AVE.
PO BOX 742
LOS SANTOS, SAN ANDREAS
P: 50056[/size][/center][/table][/divbox]
[divboxcolor=black][center][color=#FF0000]>[/color] [color=#FFFFFF][b]Patient Measurements[/b][/color][/center][/divboxcolor]
[table][tr][td][list=none][br][/br]Height: ${s}
[br][/br]
Weight: ${o}
[/list][td]
[list=none][u]Body Mass Index: [/u][br][/br]
[cb${t.BodyMassIndex==="Underweight"?"c":""}][/cb${t.BodyMassIndex==="Underweight"?"c":""}] Underweight
[cb${t.BodyMassIndex==="Normal"?"c":""}][/cb${t.BodyMassIndex==="Normal"?"c":""}] Normal
[cb${t.BodyMassIndex==="Overweight"?"c":""}][/cb${t.BodyMassIndex==="Overweight"?"c":""}] Overweight
[cb${t.BodyMassIndex==="Obese"?"c":""}][/cb${t.BodyMassIndex==="Obese"?"c":""}] Obese
[cb${t.BodyMassIndex==="ExtremeObese"?"c":""}][/cb${t.BodyMassIndex==="ExtremeObese"?"c":""}] Extremely Obese
[/table]
[divboxcolor=black][center][color=#FF0000]>[/color] [color=#FFFFFF][b]Vitals[/b][/color][/center][/divboxcolor]
[table][tr][td][center]Temperature: [cb${t.temperature==="patientTempNormal"?"c":""}] Normal [cb${t.temperature==="patientHypothermic"?"c":""}] Hypothermic [cb${t.temperature==="patientHyperthermic"?"c":""}] Hyperthermic[/center]
[td][center]Heart Rate: [cb${t.heartRate==="patientHeartRateNormal"?"c":""}] Normal [cb${t.heartRate==="patientHeartRateBradycardia"?"c":""}] Bradycardia [cb${t.heartRate==="patientHeartRateTachycardia"?"c":""}] Tachycardia[/center][/table]
[table][tr][td][center]Breathing: [cb${t.breathing==="patientBreathingNormal"?"c":""}] Normal [cb${t.breathing==="patientBreathingSlow"?"c":""}] Slow [cb${t.breathing==="patientBreathingFast"?"c":""}] Fast [cb${t.breathing==="patientBreathingObstructed"?"c":""}] Obstructed[/center]
[td][center]Blood Pressure: [cb${t.bloodPressure==="patientBloodPressureNormal"?"c":""}] Normal [cb${t.bloodPressure==="patientBloodPressureHypotension"?"c":""}] Hypotension [cb${t.bloodPressure==="patientBloodPressureHypertension"?"c":""}] Hypertension [/center][/table]
[divboxcolor=black][center][color=#FF0000]>[/color] [color=#FFFFFF][b]Anamnesis[/b][/color][/center][/divboxcolor]
[table][tr][td][list=none][u]Does the patient have a job? [/u][br][/br]
[cb${t.patientJob==="Yes"?"c":""}][/cb${t.patientJob==="Yes"?"c":""}] Yes: ${g}
[cb${t.patientJob==="No"?"c":""}][/cb${t.patientJob==="No"?"c":""}] No: ${p} [/list]
[td][list=none][u]If yes, are harmful risk factors present? [/u][br][/br]
[cb${t.patientJobRisks==="Yes"?"c":""}][/cb${t.patientJobRisks==="Yes"?"c":""}] Yes: ${l}
[cb${t.patientJobRisks==="No"?"c":""}][/cb${t.patientJobRisks==="No"?"c":""}] No [/list]
[/td][/tr]
[tr][td][list=none][u]Are allergies or risks (implants, case of incompatibility, pacemaker, etc.) present?[/u][br][/br]
[cb${t.patientAllergiesRisk==="Yes"?"c":""}][/cb${t.patientAllergiesRisk==="Yes"?"c":""}] Yes: ${d}
[cb${t.patientAllergiesRisk==="No"?"c":""}][/cb${t.patientAllergiesRisk==="No"?"c":""}] No [/list]
[td][list=none][u]Does the patient take medications on a regular basis? [/u][br][/br]
[cb${t.patientMedicineRegular==="Yes"?"c":""}][/cb${t.patientMedicineRegular==="Yes"?"c":""}] Yes: ${u}
[cb${t.patientMedicineRegular==="No"?"c":""}][/cb${t.patientMedicineRegular==="No"?"c":""}] No[/list]
[/td][/tr]
[tr][td][list=none][u]Does the patient have other medical condition(s) or physical impairments?[/u][br][/br]
[cb${t.patientOther==="Yes"?"c":""}][/cb${t.patientOther==="Yes"?"c":""}] Yes: ${S}
[cb${t.patientOther==="No"?"c":""}][/cb${t.patientOther==="No"?"c":""}] No [/list]
[td][list=none][u]Genetic Predisposition[/u][br][/br]
[cb${t.predisposition==="Existing"?"c":""}][/cb${t.predisposition==="Existing"?"c":""}] Existing
[cb${t.predisposition==="NonExisting"?"c":""}][/cb${t.predisposition==="NonExisting"?"c":""}] Non-existing [/list]
[/td][/tr][/table]
[divboxcolor=black][center][color=#FF0000]>[/color] [color=#FFFFFF][b]Evaluation Summary[/b][/color][/center][/divboxcolor]
[table][tr][td][left][list=none][u]Assessment Statement: [/u][br][/br]
${f}
[br][/br][/left][/list][/table]

`},NN=t=>{const{patientID:e,date:n,lastName:r,patientHeight:s,patientWeight:o,phmcRank:a,careerRisks:l,patientAllergies:d,patientMedicine:u,patientcareerNo:p,patientSummary:f,patientCareer:g,patientImpairments:S}=t;return`[divbox=white][table][tr][td][center][br][/br][br][/br][b]PHYSICAL EXAMINATION[/b]

PATIENT ${e}

Date: ${n}
Signed: ${a} ${r}
[/center][td][center][img]https://i.ibb.co/fdGgxDH1/LkRKav2.png[/img][/center][td][center][br][/br][br][/br][size=100][b]PALETO BAY CLINIC[/b]
PALETO BAY BLVD.
PO BOX 685
PALETO BAY, SAN ANDREAS
P: 50056[/size][/center][/table][/divbox]
[divboxcolor=black][center][color=#FF0000]>[/color] [color=#FFFFFF][b]Patient Measurements[/b][/color][/center][/divboxcolor]
[table][tr][td][list=none][br][/br]Height: ${s}
[br][/br]
Weight: ${o}
[/list][td]
[list=none][u]Body Mass Index: [/u][br][/br]
[cb${t.BodyMassIndex==="Underweight"?"c":""}][/cb${t.BodyMassIndex==="Underweight"?"c":""}] Underweight
[cb${t.BodyMassIndex==="Normal"?"c":""}][/cb${t.BodyMassIndex==="Normal"?"c":""}] Normal
[cb${t.BodyMassIndex==="Overweight"?"c":""}][/cb${t.BodyMassIndex==="Overweight"?"c":""}] Overweight
[cb${t.BodyMassIndex==="Obese"?"c":""}][/cb${t.BodyMassIndex==="Obese"?"c":""}] Obese
[cb${t.BodyMassIndex==="ExtremeObese"?"c":""}][/cb${t.BodyMassIndex==="ExtremeObese"?"c":""}] Extremely Obese
[/table]
[divboxcolor=black][center][color=#0080FF]>[/color] [color=#FFFFFF][b]Vitals[/b][/color][/center][/divboxcolor]
[table][tr][td][center]Temperature: [cb${t.temperature==="patientTempNormal"?"c":""}] Normal [cb${t.temperature==="patientHypothermic"?"c":""}] Hypothermic [cb${t.temperature==="patientHyperthermic"?"c":""}] Hyperthermic[/center]
[td][center]Heart Rate: [cb${t.heartRate==="patientHeartRateNormal"?"c":""}] Normal [cb${t.heartRate==="patientHeartRateBradycardia"?"c":""}] Bradycardia [cb${t.heartRate==="patientHeartRateTachycardia"?"c":""}] Tachycardia[/center][/table]
[table][tr][td][center]Breathing: [cb${t.breathing==="patientBreathingNormal"?"c":""}] Normal [cb${t.breathing==="patientBreathingSlow"?"c":""}] Slow [cb${t.breathing==="patientBreathingFast"?"c":""}] Fast [cb${t.breathing==="patientBreathingObstructed"?"c":""}] Obstructed[/center]
[td][center]Blood Pressure: [cb${t.bloodPressure==="patientBloodPressureNormal"?"c":""}] Normal [cb${t.bloodPressure==="patientBloodPressureHypotension"?"c":""}] Hypotension [cb${t.bloodPressure==="patientBloodPressureHypertension"?"c":""}] Hypertension [/center][/table]
[divboxcolor=black][center][color=#FF0000]>[/color] [color=#FFFFFF][b]Anamnesis[/b][/color][/center][/divboxcolor]
[table][tr][td][list=none][u]Does the patient have a job? [/u][br][/br]
[cb${t.patientJob==="Yes"?"c":""}][/cb${t.patientJob==="Yes"?"c":""}] Yes: ${g}
[cb${t.patientJob==="No"?"c":""}][/cb${t.patientJob==="No"?"c":""}] No: ${p} [/list]
[td][list=none][u]If yes, are harmful risk factors present? [/u][br][/br]
[cb${t.patientJobRisks==="Yes"?"c":""}][/cb${t.patientJobRisks==="Yes"?"c":""}] Yes: ${l}
[cb${t.patientJobRisks==="No"?"c":""}][/cb${t.patientJobRisks==="No"?"c":""}] No [/list]
[/td][/tr]
[tr][td][list=none][u]Are allergies or risks (implants, case of incompatibility, pacemaker, etc.) present?[/u][br][/br]
[cb${t.patientAllergiesRisk==="Yes"?"c":""}][/cb${t.patientAllergiesRisk==="Yes"?"c":""}] Yes: ${d}
[cb${t.patientAllergiesRisk==="No"?"c":""}][/cb${t.patientAllergiesRisk==="No"?"c":""}] No [/list]
[td][list=none][u]Does the patient take medications on a regular basis? [/u][br][/br]
[cb${t.patientMedicineRegular==="Yes"?"c":""}][/cb${t.patientMedicineRegular==="Yes"?"c":""}] Yes: ${u}
[cb${t.patientMedicineRegular==="No"?"c":""}][/cb${t.patientMedicineRegular==="No"?"c":""}] No[/list]
[/td][/tr]
[tr][td][list=none][u]Does the patient have other medical condition(s) or physical impairments?[/u][br][/br]
[cb${t.patientOther==="Yes"?"c":""}][/cb${t.patientOther==="Yes"?"c":""}] Yes: ${S}
[cb${t.patientOther==="No"?"c":""}][/cb${t.patientOther==="No"?"c":""}] No [/list]
[td][list=none][u]Genetic Predisposition[/u][br][/br]
[cb${t.predisposition==="Existing"?"c":""}][/cb${t.predisposition==="Existing"?"c":""}] Existing
[cb${t.predisposition==="NonExisting"?"c":""}][/cb${t.predisposition==="NonExisting"?"c":""}] Non-existing [/list]
[/td][/tr][/table]
[divboxcolor=black][center][color=#FF0000]>[/color] [color=#FFFFFF][b]Evaluation Summary[/b][/color][/center][/divboxcolor]
[table][tr][td][left][list=none][u]Assessment Statement: [/u][br][/br]
${f}
[br][/br][/left][/list][/table]

`},xN=t=>{const{lastName:e,patientID:n,date:r,patientChiefComplaint:s,phmcRank:o,patientNotes:a,patientDiagnosis:l,patientMedicine:d,patientProcedure:u}=t;return`[divbox=white][table][tr][td][center][br][/br][br][/br][b]Session Notes[/b]

PATIENT ${n}

Date: ${r}
Signed: ${o} ${e}
[/center][td][center][img]https://i.ibb.co/0pgw9hHm/phmc.png[/img][/center][td][center][br][/br][br][/br][size=100][b]PILLBOX HILL MEDICAL CENTER[/b]
ELGIN AVE. / STRAWBERRY AVE.
PO BOX 742
LOS SANTOS, SAN ANDREAS
P: 50056[/size][/center][/table][/divbox]
[divboxcolor=black][center][color=#FF0000]>[/color] [color=#FFFFFF][b]Anamnesis[/b][/color][/center][/divboxcolor]
[table][tr][td][left][list=none][u]Chief Complaint: [/u][br][/br]
${s}
[br][/br]
[u]Assigned Department: [/u][br][/br]
[cbc] Mental Health
[br][/br][/left]
[/table]
[divboxcolor=black][center][color=#FF0000]>[/color] [color=#FFFFFF][b]Findings[/b][/color][/center][/divboxcolor]
[table][tr][td][list=none]Notes: ${a}[/list][/table]
[divboxcolor=black][center][color=#FF0000]>[/color] [color=#FFFFFF][b]Discharge Diagnosis[/b][/color][/center][/divboxcolor]
[table][tr][td][left][list=none][u]Primary Diagnosis: [/u][br][/br]
${l}[/list][/table]
[divboxcolor=black][center][color=#FF0000]>[/color] [color=#FFFFFF][b]Therapy[/b][/color][/center][/divboxcolor]
[table][tr][td][left][list=none][u]Admission: [/u][br][/br]
[cb${t.admission==="Yes"?"c":""}] Yes
[cb${t.admission==="No"?"c":""}] No
[br][/br]
[u]Procedure: [/u][br][/br]
${u}
[br][/br]
[u]Medication: [/u][br][/br]
${d}
[br][/br]
[u]Follow-Up: [/u][br][/br]
[cb${t.followup==="AsNeeded"?"c":""}] As needed
[cb${t.followup==="Recommended"?"c":""}] Recommended
[cb${t.followup==="ElectiveProcedure"?"c":""}] Elective procedure 
[/left][/list][/table]
`},AN=t=>{const{phmcEmployee:e,patientID:n,phmcRank:r,date:s,patientChiefComplaint:o,patientNotes:a,patientDiagnosis:l,patientMedicine:d,patientProcedure:u}=t,p=e&&e!=="N/A"?e:"",g=(p?p.split(" ").pop():"")||"[Signature Required]";return`[divbox=white][table][tr][td][center][br][/br][br][/br][b]Session Notes[/b]

PATIENT ${n}

Date: ${s}
Signed: ${r&&r!=="N/A"?r:"[Rank Required]"} ${g}
[/center][td][center][img]https://i.ibb.co/fdGgxDH1/LkRKav2.png[/img][/center][td][center][br][/br][br][/br][size=100][b]PALETO BAY CLINIC[/b]
PALETO BAY BLVD.
PO BOX 685
PALETO BAY, SAN ANDREAS
P: 50056[/size][/center][/table][/divbox]
[divboxcolor=black][center][color=#0080FF]>[/color] [color=#FFFFFF][b]Anamnesis[/b][/color][/center][/divboxcolor]
[table][tr][td][left][list=none][u]Chief Complaint: [/u][br][/br]
${o}
[br][/br]
[u]Assigned Department: [/u][br][/br]
[cbc] Mental Health
[br][/br][/left]
[/table]
[divboxcolor=black][center][color=#0080FF]>[/color] [color=#FFFFFF][b]Findings[/b][/color][/center][/divboxcolor]
[table][tr][td][list=none]Notes: ${a}[/list][/table]
[divboxcolor=black][center][color=#0080FF]>[/color] [color=#FFFFFF][b]Discharge Diagnosis[/b][/color][/center][/divboxcolor]
[table][tr][td][left][list=none][u]Primary Diagnosis: [/u][br][/br]
${l}[/list][/table]
[divboxcolor=black][center][color=#0080FF]>[/color] [color=#FFFFFF][b]Therapy[/b][/color][/center][/divboxcolor]
[table][tr][td][left][list=none][u]Admission: [/u][br][/br]
[cb${t.admission==="Yes"?"c":""}] Yes
[cb${t.admission==="No"?"c":""}] No
[br][/br]
[u]Procedure: [/u][br][/br]
${u}
[br][/br]
[u]Medication: [/u][br][/br]
${d}
[br][/br]
[u]Follow-Up: [/u][br][/br]
[cb${t.followup==="AsNeeded"?"c":""}] As needed
[cb${t.followup==="Recommended"?"c":""}] Recommended
[cb${t.followup==="ElectiveProcedure"?"c":""}] Elective procedure 
[/left][/list][/table]
`},IN=t=>{const{phmcEmployee:e,phmcRank:n,patientID:r,date:s,patientDiagnosis:o,patientSecondaryDiagnosis:a,patientProcedure:l,patientChiefComplaint:d,scenePhotos:u}=t,p=e&&e!=="N/A"?e:"",g=(p?p.split(" ").pop():"")||"[Signature Required]",S=n&&n!=="N/A"?n:"[Rank Required]";let _="[i]No medication details provided.[/i]";if(u&&u.trim()){const F=u.split(",").map(P=>P.trim()).filter(P=>P);F.length>0&&(_=F.map(P=>P.startsWith("https://")||/\.(jpg|jpeg|png|gif)$/i.test(P)?`[img]${P}[/img]`:P).join(`
`))}return`[divbox=white][table][tr][td][center][br][/br][br][/br][b]Consultation Notes[/b]

PATIENT ID: ${r||"N/A"}

Date: ${s||"N/A"}

Signed: ${S} ${g}
[/center][td][center][img]https://i.ibb.co/0pgw9hHm/phmc.png[/img][/center][td][center][br][/br][br][/br][size=100][b]PILLBOX HILL MEDICAL CENTER[/b]
ELGIN AVE. / STRAWBERRY AVE.
PO BOX 742
LOS SANTOS, SAN ANDREAS
P: 50056[/size][/center][/table][/divbox]
[divboxcolor=black][center][color=#FF0000]>[/color] [color=#FFFFFF][b]Anamnesis[/b][/color][/center][/divboxcolor]
[table][tr][td][left][list=none][u]Reason for Visit: [/u][br][/br]
${d||"N/A"}
[br][/br]
[u]Assigned Department: [/u][br][/br]
[cb${t.assignedDepartment==="InternalMedicine"?"c":""}] Internal Medicine
[cb${t.assignedDepartment==="SurgicalDepartment"?"c":""}] Surgical Department
[cb${t.assignedDepartment==="Midwifery"?"c":""}] Midwifery
[cb${t.assignedDepartment==="Dialysis"?"c":""}] Dialysis
[/list][/td][/tr][/table]
[divboxcolor=black][center][color=#FF0000]>[/color] [color=#FFFFFF][b]Vitals[/b][/color][/center][/divboxcolor]
[table][tr][td][center]Temperature: [cb${t.temperature==="patientTempNormal"?"c":""}] Normal [cb${t.temperature==="patientHypothermic"?"c":""}] Hypothermic [cb${t.temperature==="patientHyperthermic"?"c":""}] Hyperthermic[/center]
[td][center]Heart Rate: [cb${t.heartRate==="patientHeartRateNormal"?"c":""}] Normal [cb${t.heartRate==="patientHeartRateBradycardia"?"c":""}] Bradycardia [cb${t.heartRate==="patientHeartRateTachycardia"?"c":""}] Tachycardia[/center][/table]
[table][tr][td][center]Breathing: [cb${t.breathing==="patientBreathingNormal"?"c":""}] Normal [cb${t.breathing==="patientBreathingSlow"?"c":""}] Slow [cb${t.breathing==="patientBreathingFast"?"c":""}] Fast [cb${t.breathing==="patientBreathingObstructed"?"c":""}] Obstructed[/center]
[td][center]Blood Pressure: [cb${t.bloodPressure==="patientBloodPressureNormal"?"c":""}] Normal [cb${t.bloodPressure==="patientBloodPressureHypotension"?"c":""}] Hypotension [cb${t.bloodPressure==="patientBloodPressureHypertension"?"c":""}] Hypertension [/center][/table]
[divboxcolor=black][center][color=#FF0000]>[/color] [color=#FFFFFF][b]Findings[/b][/color][/center][/divboxcolor]
[table][tr][td][center]General Health Condition (GHC): [cb${t.findings==="patientNormal"?"c":""}] Normal [cb${t.findings==="patientImpared"?"c":""}] Impaired[/center]
[td][center]Lungs (Auscultation): [cb${t.lungs==="patientNormal"?"c":""}] Normal [cb${t.findings==="patientRhonchi"?"c":""}] Rhonchi [cb${t.findings==="patientCrack"?"c":""}] Crackles [/center][/table]
[table][tr][td][center]Pupils: [cb${t.pupils==="patientPupilsNormal"?"c":""}] Normal [cb${t.pupils==="patientPupilsAbnormal"?"c":""}] Abnormal [/center]
[td][center]Wounds: [cb${t.wounds==="patientFractures"?"c":""}] Fracture(s) [cb${t.wounds==="patientBleeding"?"c":""}] Bleeding [cb${t.wounds==="patientHematoma"?"c":""}] Hematoma [cb${t.wounds==="patientNoWounds"?"c":""}] None [/center][/table]
[table][tr][td][center]ECG: [cb${t.ecg==="patientSinusRhythm"?"c":""}] Sinus rhythm [cb${t.ecg==="patientArrhythmia"?"c":""}] Arrhythmia [cb${t.ecg==="patientInfaction"?"c":""}] Infarct [/center]
[td][center]Sono: [cb${t.sono==="patientNormal"?"c":""}] Normal [cb${t.sono==="patientFluids"?"c":""}] Fluids [cb${t.sono==="patientTissue"?"c":""}] Tissue Change[/center][/table]
[table][tr][td][center]Lab: [cb${t.lab?.includes("WNL")?"c":""}] WNL  [cb${t.lab?.includes("Anemia")?"c":""}] Anemia [cb${t.lab?.includes("Inflammation/Infection")?"c":""}] Inflammation/Infection [cb${t.lab?.includes("Dysfunction")?"c":""}] Dysfunction/Disorder [cb${t.lab?.includes("ElectrolyteImbalance")?"c":""}] Electrolyte Imbalance [cb${t.lab?.includes("Infarct")?"c":""}] Infarct/Embolism [cb${t.lab?.includes("Tumor")?"c":""}] Tumor [/center][/table]
[divboxcolor=black][center][color=#FF0000]>[/color] [color=#FFFFFF][b]Preliminary Diagnosis[/b][/color][/center][/divboxcolor]
[table][tr][td][left][list=none][u]Primary Diagnosis: [/u][br][/br]
${o||"N/A"}
[br][/br][u]Secondary Diagnosis: [/u][br][/br]
${a||"N/A"}[/left][/list][/table]
[divboxcolor=black][center][color=#FF0000]>[/color] [color=#FFFFFF][b]Therapy[/b][/color][/center][/divboxcolor]
[table][tr][td][left][list=none][u]Admission: [/u][br][/br]
[cb${t.admission==="Yes"?"c":""}] Yes
[cb${t.admission==="No"?"c":""}] No
[br][/br]
[u]Treatment plan/Free Text: [/u][br][/br]
${l||"N/A"}
[br][/br]
[u]Medication: [/u][br][/br]
${_} 
[br][/br]
[u]Follow-Up: [/u][br][/br]
[cb${t.followup==="AsNeeded"?"c":""}] As needed
[cb${t.followup==="Recommended"?"c":""}] Recommended
[cb${t.followup==="ElectiveProcedure"?"c":""}] Elective procedure
[/left][/list][/table]`},TN=t=>{const{phmcEmployee:e,phmcRank:n,patientID:r,date:s,patientDiagnosis:o,patientSecondaryDiagnosis:a,patientMedicine:l,patientProcedure:d,patientChiefComplaint:u,Imaging:p,XrayResults:f,ctResults:g,mriResults:S,ultrasoundResults:_,patientInjuryMechanism:I,prescriptionImage:F}=t,P=e&&e!=="N/A"?e:"",D=(P?P.split(" ").pop():"")||"[Signature Required]",R=n&&n!=="N/A"?n:"[Rank Required]";let $="";if(p&&Array.isArray(p)&&p.length>0){const y=p.join(", ");let w="";const N=[];f&&f.length>0&&N.push(`X-Ray: ${f.join(", ")}`),g&&g.length>0&&N.push(`CT: ${g.join(", ")}`),S&&S.length>0&&N.push(`MRI: ${S.join(", ")}`),_&&_.length>0&&N.push(`Ultrasound: ${_.join(", ")}`),w=N.length>0?N.join("; "):"Results pending or N/A",$=`
[table][tr][td][center]Imaging Performed: ${y}[/center]
[td][center]Imaging Results: ${w}[/center][/tr][/table]`}let O="";return F&&F.trim()!==""?F.trim().toLowerCase().startsWith("http://")||F.trim().toLowerCase().startsWith("https://")?O=`[img]${F.trim()}[/img]`:O=F.trim():O="N/A",`[divbox=white][table][tr][td][center][br][/br][br][/br][b]EMERGENCY PROTOCOL[/b]

PATIENT ID: ${r||"N/A"}

Date: ${s||"N/A"}

Signed: ${R} ${D}
[/center][td][center][img]https://i.ibb.co/0pgw9hHm/phmc.png[/img][/center][td][center][br][/br][br][/br][size=100][b]PILLBOX HILL MEDICAL CENTER[/b]
ELGIN AVE. / STRAWBERRY AVE.
PO BOX 742
LOS SANTOS, SAN ANDREAS
P: 50056[/size][/center][/table][/divbox]
[divboxcolor=black][center][color=#FF0000]>[/color] [color=#FFFFFF][b]Anamnesis[/b][/color][/center][/divboxcolor]
[table][tr][td][left][list=none][u]Chief Complaint: [/u][br][/br]
${u||"N/A"}

[u] Patient Mechanism of Injury: [/u][br][/br]
${t.patientInjuryMechanism||"N/A"}
[br][/br]
[u]Pain Level/Emergency Severity Index (ESI): [/u][br][/br]
[cb${t.painLevel==="patientNoPain"?"c":""}] [color=#0040FF]Level 5: no pain/non-urgent[/color] [cb${t.painLevel==="patientNormalPain"?"c":""}] [color=#00BF00]Level 4: normal pain/less urgent[/color] [cb${t.painLevel==="patientMildPain"?"c":""}] [color=#FFFF00]Level 3: mild pain/urgent[/color] [cb${t.painLevel==="patientSeverePain"?"c":""}] [color=#FF8040]Level 2: Severe pain/very urgent [/color][cb${t.painLevel==="patientCritical"?"c":""}] [color=#FF0000]Level 1: Critical/Emergent [/color][/left]
[/table]
[divboxcolor=black][center][color=#FF0000]>[/color] [color=#FFFFFF][b]Vitals[/b][/color][/center][/divboxcolor]
[table][tr][td][center]Temperature: [cb${t.temperature==="patientTempNormal"?"c":""}] Normal [cb${t.temperature==="patientHypothermic"?"c":""}] Hypothermic [cb${t.temperature==="patientHyperthermic"?"c":""}] Hyperthermic[/center]
[td][center]Heart Rate: [cb${t.heartRate==="patientHeartRateNormal"?"c":""}] Normal [cb${t.heartRate==="patientHeartRateBradycardia"?"c":""}] Bradycardia [cb${t.heartRate==="patientHeartRateTachycardia"?"c":""}] Tachycardia[/center][/table]
[table][tr][td][center]Breathing: [cb${t.breathing==="patientBreathingNormal"?"c":""}] Normal [cb${t.breathing==="patientBreathingSlow"?"c":""}] Slow [cb${t.breathing==="patientBreathingFast"?"c":""}] Fast [cb${t.breathing==="patientBreathingObstructed"?"c":""}] Obstructed[/center]
[td][center]Blood Pressure: [cb${t.bloodPressure==="patientBloodPressureNormal"?"c":""}] Normal [cb${t.bloodPressure==="patientBloodPressureHypotension"?"c":""}] Hypotension [cb${t.bloodPressure==="patientBloodPressureHypertension"?"c":""}] Hypertension [/center][/table]
[divboxcolor=black][center][color=#FF0000]>[/color] [color=#FFFFFF][b]Findings[/b][/color][/center][/divboxcolor]
[table][tr][td][center]General Health Condition (GHC): [cb${t.findings==="patientNormal"?"c":""}] Normal [cb${t.findings==="patientImpared"?"c":""}] Impaired[/center]
[td][center]Lungs (Auscultation): [cb${t.lungs==="patientNormal"?"c":""}] Normal [cb${t.findings==="patientRhonchi"?"c":""}] Rhonchi [cb${t.findings==="patientCrack"?"c":""}] Crackles [/center][/table]
[table][tr][td][center]Pupils: [cb${t.pupils==="patientPupilsNormal"?"c":""}] Normal [cb${t.pupils==="patientPupilsAbnormal"?"c":""}] Abnormal [/center]
[td][center]Wounds: [cb${t.wounds==="patientFractures"?"c":""}] Fracture(s) [cb${t.wounds==="patientBleeding"?"c":""}] Bleeding [cb${t.wounds==="patientHematoma"?"c":""}] Hematoma [cb${t.wounds==="patientNoWounds"?"c":""}] None [/center][/table]${$}
[table][tr][td][center]ECG: [cb${t.ecg==="patientSinusRhythm"?"c":""}] Sinus rhythm [cb${t.ecg==="patientArrhythmia"?"c":""}] Arrhythmia [cb${t.ecg==="patientInfaction"?"c":""}] Infarct [/center]
[td][center]Sono: [cb${t.sono==="patientNormal"?"c":""}] Normal [cb${t.sono==="patientFluids"?"c":""}] Fluids [cb${t.sono==="patientTissue"?"c":""}] Tissue Change[/center][/table]
[table][tr][td][center]Lab: [cb${t.lab?.includes("WNL")?"c":""}] WNL  [cb${t.lab?.includes("Anemia")?"c":""}] Anemia [cb${t.lab?.includes("Inflammation/Infection")?"c":""}] Inflammation/Infection [cb${t.lab?.includes("Dysfunction")?"c":""}] Dysfunction/Disorder [cb${t.lab?.includes("ElectrolyteImbalance")?"c":""}] Electrolyte Imbalance [cb${t.lab?.includes("Infarct")?"c":""}] Infarct/Embolism [cb${t.lab?.includes("Tumor")?"c":""}] Tumor [/center][/table]
[divboxcolor=black][center][color=#FF0000]>[/color] [color=#FFFFFF][b]Preliminary Diagnosis[/b][/color][/center][/divboxcolor]
[table][tr][td][left][list=none][u]Primary Diagnosis: [/u][br][/br]
${o||"N/A"}
[br][/br][u]Secondary Diagnosis: [/u][br][/br]
${a||"N/A"}[/left][/list][/table]
[divboxcolor=black][center][color=#FF0000]>[/color] [color=#FFFFFF][b]Therapy[/b][/color][/center][/divboxcolor]
[table][tr][td][left][list=none][u]Admission: [/u][br][/br]
[cb${t.admission==="Yes"?"c":""}] Yes
[cb${t.admission==="No"?"c":""}] No
[br][/br]
[u]Procedure/Free Text: [/u][br][/br]
${d||"N/A"}
[br][/br]
[u]Medication: [/u][br][/br]
${l||"N/A"}
${O}
[u]Follow-Up: [/u][br][/br]
[cb${t.followup==="AsNeeded"?"c":""}] As needed
[cb${t.followup==="Recommended"?"c":""}] Recommended
    
[/left][/list][/table]`},RN=t=>{const{phmcEmployee:e,date:n,patientNotes:r,patientID:s}=t;return`[divbox=white][table][tr][td][center][br][/br][br][/br][b]Session Notes[/b]

PATIENT ID: ${s}

Date: ${n}

[/center][td][center][img]https://i.ibb.co/0pgw9hHm/phmc.png[/img][/center][td][center][br][/br][br][/br][size=100][b]PILLBOX HILL MEDICAL CENTER[/b]
ELGIN AVE. / STRAWBERRY AVE.
PO BOX 742
LOS SANTOS, SAN ANDREAS
P: 50056[/size][/center][/table][/divbox]
[divboxcolor=black][center][color=#FF0000]>[/color] [color=#FFFFFF][b]Commentary Note[/b][/color][/center][/divboxcolor]
[table][tr][td][left][list=none][u]Firstname Lastname: [/u][br][/br]
${e}
[br][/br]
[u]Patient Notes: [/u]
${r}
[br][/br]
[u]Department: [/u][br][/br]
[cb${t.departmentLarge==="EmergencyMedicine"?"c":""}] Emergency Medicine
[cb${t.departmentLarge==="InternalMedicine"?"c":""}] Internal Medicine
[cb${t.departmentLarge==="Surgical"?"c":""}] Surgical Department
[cb${t.departmentLarge==="Midwifery"?"c":""}] Midwifery
[cb${t.departmentLarge==="PhysicalTherapy"?"c":""}] Physical Therapy
[cb${t.departmentLarge==="Dentistry"?"c":""}] Dentistry
[cb${t.departmentLarge==="MentalHealth"?"c":""}] Mental Health
[cb${t.departmentLarge==="Administration"?"c":""}] Administration
[br][/br][/left]
[/table]
`},kN=t=>{const{phmcEmployee:e,date:n,patientID:r,patientNotes:s}=t;return`[divbox=white][table][tr][td][center][br][/br][br][/br][b]Session Notes[/b]

PATIENT ID: ${r}

Date: ${n}

[/center][td][center][img]https://i.ibb.co/fdGgxDH1/LkRKav2.png[/img][/center][td][center][br][/br][br][/br][size=100][b]PALETO BAY CLINIC[/b]
PALETO BAY BLVD.
PO BOX 685
PALETO BAY, SAN ANDREAS
P: 50056[/size][/center][/table][/divbox]
[divboxcolor=black][center][color=#0080FF]>[/color] [color=#FFFFFF][b]Commentary Note[/b][/color][/center][/divboxcolor]
[table][tr][td][left][list=none][u]Firstname Lastname: [/u][br][/br]
${e}
[br][/br]
[u]Patient Notes: [/u]
${s}
[br][/br]
[u]Department: [/u][br][/br]
[cb${t.departmentLarge==="EmergencyMedicine"?"c":""}] Emergency Medicine
[cb${t.departmentLarge==="InternalMedicine"?"c":""}] Internal Medicine
[cb${t.departmentLarge==="Surgical"?"c":""}] Surgical Department
[cb${t.departmentLarge==="Midwifery"?"c":""}] Midwifery
[cb${t.departmentLarge==="PhysicalTherapy"?"c":""}] Physical Therapy
[cb${t.departmentLarge==="Dentistry"?"c":""}] Dentistry
[cb${t.departmentLarge==="MentalHealth"?"c":""}] Mental Health
[cb${t.departmentLarge==="Administration"?"c":""}] Administration
[br][/br][/left]
[/table]
    `},FN=t=>{const{formType:e,patientFirstName:n,patientMiddleName:r,patientLastName:s,patientName:o,patientPH:a,patientDateOfBirth:l,patientAddress:d,patientZIP:u,patientEmail:p,patientMedInfoReleaseOther:f,phmcEmployee:g,MedicalRecordsReleaseOther:S,patientMedInfoFormatOther:_,StupidDateFrom:I,StupidDateTo:F,SubmitDate:P,paymentProofPhotos:k,MedicalRecordsRelease:D,payNow:R,patientAddress:$,patientRace:O,patientGender:E,patientDiscord:y,patientEmergencyContact:w,patientEmergencyContactNumber:N,patientEmergencyContactRelation:v,patientEmergencyContactDiscord:A,patientTitle:C,patientAllergies:M,patientCurrentMedicine:B,patientChronicDiseases:j,patientNotes:V,date:q,patientID:Y,patientTherapy:ue,patientTriggers:te,patientSupport:se,patientHarm:X,patientFam:Z,patientGenetic:re,patientMental:he,patientFamSocial:be,patientReligion:ge,attorneyName:Re,attorneyRelation:Pe,attorneyPH:Je,patientDateOfBirth:we,patientSmoker:Ge,patientAlcohol:bt,patientDrugs:Jt,patientExercise:zt,patientDiet:L,patientSleep:ne,patientSexLife:W,patientJobRisks:oe,patientHazards:ae,patientOther:Ne,dnrOther:Se,scenePhotos:ye,UpdateMedicalFile:Ae,patientBloodType:G,patientTitleNew:Xe,patientNameNew:Le,patientDateOfBirthNew:Pt,patientAddressNew:Me,patientPHNew:K,patientDiscordNew:Ue,patientGenderNew:We,patientRaceNew:He}=t;if(e==="release"){const De=(()=>{const Ut=D?.length||0;return Ut===0?0:Ut*5e3})(),st=(k||"").split(",")[0].trim(),yt=`${n||""} ${r||""} ${s||""}`.replace(/\s+/g," ").trim();return`[divbox=white] [center] [img]https://i.ibb.co/0pgw9hHm/phmc.png[/img] [/center] [/divbox]
[divbox=white]
[br][/br][color=#800000][size=150][b]I. PATIENT INFORMATION[/b][/size][/color][hr][/hr]
[list=none][b]Title:[/b] [i](select one)[/i]
[list=none][${t.patientTitle==="Mr"?"x":""}] Mr.
[*][${t.patientTitle==="Mrs"?"x":""}] Mrs.
[*][${t.patientTitle==="Ms"?"x":""}] Ms.
[*][${t.patientTitle==="Other"?"x":""}] Other[/list]
[b]First Name:[/b]
[i]${n}[/i][br][/br]
[b]Middle Name:[/b] [i](optional)[/i]
[i]${r}[/i][br][/br]
[b]Last Name:[/b]
[i]${s}[/i][br][/br]
[b]Gender:[/b] [i](select one)[/i]
[list=none]
[*][${t.patientGender==="Male"?"X":""}] Male
[*][${t.patientGender==="Female"?"X":""}] Female[/list]
[b]Date of Birth:[/b]
[i]${l}[/i][br][/br]
[b]Address:[/b]
[i]${d}[/i][br][/br]
[b]ZIP / Postal Code:[/b]
[i]${u}[/i][br][/br][/list]
[br][/br][color=#800000][size=150][b]II. CONTACT INFORMATION[/b][/size][/color][hr][/hr]
[list=none]
[b]Phone Type:[/b] [i](select one)[/i]
[list=none]
[*][${t.patientPhoneType==="Mobile"?"X":""}] Mobile
[*][${t.patientPhoneType==="Home"?"X":""}] Home
[*][${t.patientPhoneType==="Work"?"X":""}] Work
[*][${t.patientPhoneType==="Other"?"X":""}] Other[/list][b]Phone Number:[/b]
[i]${a}[/i][br][/br]
[b]Email:[/b]
[i]${p}[/i][br][/br][/list]
[br][/br][color=#800000][size=150][b]III. RELEASE INFORMATION[/b][/size][/color][hr][/hr]
[list=none][b]Purpose of Medical Information Release:[/b]
[list=none]
[*][${t.CarePurposeMedicalInformationRelease==="Further Treatment"?"X":""}] Further Treatment / Continued
[*][${t.CarePurposeMedicalInformationRelease==="Personal"?"X":""}] Personal Use
[*][${t.CarePurposeMedicalInformationRelease==="Attorney"?"X":""}] Attorney / Client
[*][${t.CarePurposeMedicalInformationRelease==="Other"?"X":""}] Other: ${f}[/list][/list]
[list=none][b]Format of Medical Information Release:[/b]
[list=none]
[*][${t.PurposeMedicalInformationReleaseFormat==="CopyofRecords"?"X":""}] Copy of Record to be picked up
[*][${t.PurposeMedicalInformationReleaseFormat==="VerbalRelease"?"X":""}] Verbal Release (e.g. phone conversation)
[*][${t.PurposeMedicalInformationReleaseFormat==="ElectronicRelease"?"X":""}] Electronical Release (sent via email)
[*][${t.PurposeMedicalInformationReleaseFormat==="Other"?"X":""}] Other: ${_}[/list][/list]
[list=none][b]Date Range:[/b]
[i]I authorize the release of information covering the period(s) of treatment:[/i]
[list=none]
[*][b]From:[/b] [i]${I}[/i]
[*][b]To:[/b] [i]${F}[/i][/list][/list]
[list=none][b]Medical Records to be Released:[/b] [i](check all that apply)[/i]
[list=none]
[*][${t.MedicalRecordsRelease?.includes("ERVisit")?"X":""}] [b]Emergency Room Visit[/b] (ER notes, progress notes, consultations, procedure notes, test results)
[*][${t.MedicalRecordsRelease?.includes("HospitalStay")?"X":""}] [b]Hospital Stay[/b] (History and physical, progress notes, consultations, operative reports, discharge summary, test results)
[*][${t.MedicalRecordsRelease?.includes("Outpatient")?"X":""}] [b]Outpatient Surgery/Procedure[/b] (History and physical, progress notes, consultations, procedure notes, test results)
[*][${t.MedicalRecordsRelease?.includes("OfficeClinic")?"X":""}] [b]Clinic, Office Visit or Immediate Care[/b] (Office notes, progress notes, procedure notes, test results)
[*][${t.MedicalRecordsRelease?.includes("PsychologyVisits")?"X":""}] [b]Psychology Visits[/b] (Office notes, progress notes, procedure notes, evaluation results)
[*][${t.MedicalRecordsRelease?.includes("Other")?"X":""}] [b]Other Records:[/b] ${S}[/list][/list]
[list=none][b]Practitioner's name seen by:[/b]
[i]${g}[/i]
[br][/br][/list]
[color=#800000][size=150][b]IV. AUTHORIZATION FOR RELEASE INFORMATION[/b][/size][/color][hr][/hr][br][/br]
[list=none]I, ${n} ${r} ${s}, hereby authorize Pillbox Hill Medical Center to disclose my individually identifiable health information. I understand that this authorization is voluntary and I may refuse to sign this authorization. I further understand that my health care will not be affected if I do not sign this form.

I, ${n} ${r} ${s}, understand that if the recipient authorized to receive the information is not a covered entity, the released information may no longer be protected by federal and state privacy regulations.

I, ${n} ${r} ${s}, further understand that I may revoke this authorization at any time by notifying, in writing, the Pillbox Hill Medical Center facility where this authorization is being signed. I also understand the revocation must be signed and dated with a date that is later than the date on this authorization. The revocation will not affect any releases made prior to the receipt of the written revocation.

I, ${n} ${r} ${s}, understand the record might not be complete, if it is a recent visit, and additional documentation could be added after submitting this request.

By typing my name below, I, ${n} ${r} ${s}, certify that this information can be used for the purpose of processing my Authorization for Medical Records Release request. I consider this as my electronic signature for this request.
[br][/br]
[/list]
[list=none][b]Signature:[/b]
[i]${n} ${r} ${s}[/i][br][/br]
[b]Date:[/b]
[i]${P}[/i]
${(R===!0||R==="true")&&De>0?`
    I, ${yt||"the undersigned"}, enclose this payment of $${De.toLocaleString()} for the Medical Records Release Fees. ${st?`[url=${st}]Enclosed Image[/url]`:"i[/i]"}`:""}[/list]
    [/divbox]`}else{let Ie=`[table][tr][td][center][br][/br][br][/br][b]Patient Information[/b]

[size=110]PATIENT ${Y}

${o}
[/size]

[/center][td][center][img]https://i.ibb.co/0pgw9hHm/phmc.png[/img][img]https://i.ibb.co/fdGgxDH1/LkRKav2.png[/img]
[b][size=150]PATIENT INFORMATION UPDATE[/size][/center][/table]
[divboxcolor=black][center][size=115][color=#FF0000]>[/color] [color=#FFFFFF][b]Patient Information[/b][/color][/size][/center][/divboxcolor]
[table][tr][td] Title: ${C}[/td][td] Full Name: ${o}
[tr][td] Date of Birth: ${we} [/td][td] Home Address: ${$}
[tr][td] Phone Number: ${a} [/td][td] (( Discord ID: ${y}))
[/table]
[divboxcolor=black][center][size=115][color=#FF0000]>[/color] [color=#FFFFFF][b]Updated Information[/b][/color][/size][/center][/divboxcolor]
[u]I hereby request the following information to be updated:[/u]
[i](Tick relevant fields by updating the prefix [cb] to [cbc] and provide the new information within. Please provide the information in full for the requested (ticked!) categories, including non-updated information. Do not add information in categories you haven't ticked![/i]

`;return Ae?.includes("GeneralInformation")&&(Ie+=`[cbc][color=#FF0000]>[/color] [bold] General Information[/bold]
[altspoiler=New General Information]
[table][tr][td] Title: ${Xe}[/td][td] Full Name: ${Le}
[tr][td] Date of Birth: ${Pt} [/td][td] Home Address: ${Me}
[tr][td] Gender Identity: ${We} [/td][td] Ethnicity: ${He}
[tr][td] Phone Number: ${K} [/td][td] (( Discord ID: ${Ue}))
[/table][/altspoiler]`),Ae?.includes("EmergencyContact")&&(Ie+=`[cbc][color=#FF0000]>[/color] [bold] Emergency Contact[/bold]
[altspoiler=New Emergency Contact Details]
[table][tr][td] Full Name: ${w} [/td][td] Relationship: ${v}
[tr][td] Phone Number: ${N} [/td][td] (( Discord ID: ${A}))
[/table][/altspoiler]`),Ae?.includes("MedicalHistory")&&(Ie+=`[cbc][color=#FF0000]>[/color] [bold] Medical History[/bold]
        [altspoiler=New Medical History]

[table][tr][td][b][size=105]Past History[/size][/b][color=transparent]youarecool[/color][/td][td][color=transparent]ifyoureadthisyouareawesomebutdontdeletemeplease![/color]
[tr][td] Blood Type: [/td][td] [cb${G==="A+"?"c":""}] A+ [cb${G==="A-"?"c":""}] A- [cb${G==="B+"?"c":""}] B+ [cb${G==="B-"?"c":""}] B- [cb${G==="O+"?"c":""}] O+ [cb${G==="O-"?"c":""}] O- [cb${G==="AB+"?"c":""}] AB+ [cb${G==="AB-"?"c":""}] AB-
[tr][td] Known Allergies: [/td][td] ${M}
[tr][td] Current Medications: [/td][td] ${B}
[tr][td] Chronic Conditions: [/td][td] ${j}
[tr][td] Traumas & Injuries: [/td][td] ${V}
[/table][/altspoiler]`),Ae?.includes("MentalHealth")&&(Ie+=`[cbc][color=#FF0000]>[/color] [bold] Mental History[/bold]
        [altspoiler=New Mental Health History]
[table][tr][td] Diagnosed Mental Health Conditions: [/td][td] ${he}
[tr][td] Therapies & Counseling: [/td][td] ${ue}
[tr][td] Triggers or Sensors: [/td][td] ${te}
[tr][td] Support & Coping Systems: [/td][td] ${se}
[tr][td] Self-Harm History or Tendencies: [/td][td] ${X}
[/table][/altspoiler]`),Ae?.includes("FamilyMedicalHistory")&&(Ie+=`[cbc][color=#FF0000]>[/color] [bold] Family Medical History[/bold]
        [altspoiler=New Family Medical  History]
[table][tr][td][b][size=105]Past History[/size][/b][color=transparent]youarecool[/color][/td][td][color=transparent]ifyoureadthisyouareawesomebutdontdeletemeplease![/color]
[tr][td] Immediate Family Members: [/td][td] ${Z}
[tr][td] Known Genetic Conditions: [/td][td] ${re}
[tr][td] Family Social History: [/td][td] ${be}
[/table][/altspoiler]`),Ae?.includes("SocialInformation")&&(Ie+=`[cbc][color=#FF0000]>[/color] [bold]Social Information[/bold]
        [altspoiler=New Social Information]
[table][tr][td] Marital Status: [cb${t.maritalStatus==="Single"?"c":""}] Single [cb${t.maritalStatus==="Married"?"c":""}] Married [cb${t.maritalStatus==="Divorced"?"c":""}] Divorced/Widowed [/td][td] Number of Children: [cb${t.numberChildren==="0"?"c":""}] 0 [cb${t.numberChildren==="1"?"c":""}] 1 or more
[tr][td] Cultural and/or Religious Considerations: ${ge} [/td][td] Financial Status: [cb${t.financialStatus==="LowIncome"?"c":""}] Low Income [cb${t.financialStatus==="MiddleIncome"?"c":""}] Average Income [cb${t.financialStatus==="HighIncome"?"c":""}] High Income
[/table][/altspoiler]`),Ae?.includes("LifestyleInformation")&&(Ie+=`[cbc][color=#FF0000]>[/color] [bold] Lifestyle Information[/bold]
        [altspoiler=New Lifestyle Information]
[table][tr][td] Smoking Status: ${Ge} [/td][td] Alcohol Use: ${bt}[/td][td] Other Substances: ${Jt}
[tr][td] Exercise Habits: ${zt}[/td][td] Dietary Information: ${L}[/td][td] Sleep Patterns: ${ne}
[tr][td] Sexual Health: ${W}[/td][td] Occupational Hazards: ${oe}[/td][td] Environmental Hazards: ${ae}[/table]
[table][tr][td] Other Information & Preferences: ${Ne}
[/table][/altspoiler]`),Ae?.includes("AdvancedDirectives")&&(Ie+=`[cbc][color=#FF0000]>[/color] [bold] Advanced Directives [/bold]
        [altspoiler=New Advanced Directives]
[divbox=transparent][list=none]I, ${o}, hereby provide the following advance directives regarding my healthcare, to be followed in the event that I become unable to make decisions about my medical treatment:

[list=1][*] [size=110]Living Will[/size]: In the event I am unable to communicate, I direct the following regarding life-sustaining treatments:
[cb${t.dnr==="ProlongLife"?"c":""}][/cb${t.dnr==="ProlongLife"?"c":""}]I want all available measures taken to prolong my life.
[cb${t.dnr==="ComfortOfLife"?"c":""}][/cb${t.dnr==="ComfortOfLife"?"c":""}]I want only treatments focused on comfort and quality of life, even if it means not prolonging life.
[cb${t.dnr==="other"?"c":""}][/cb${t.dnr==="other"?"c":""}]Other instructions: ${Se}

[*][size=110]Healthcare Power of Attorney[/size]:
[cb${t.attorney==="Yes"?"c":""}][/cb${t.attorney==="Yes"?"c":""}]have appointed the following person as my Healthcare Proxy/Agent to make medical decisions on my behalf:
[list=none]Full Name: ${Re}
Relationship to Patient: ${Pe}
Phone Number: ${Je}[/list]

[cb${t.attorney==="No"?"c":""}][/cb${t.attorney==="No"?"c":""}]I have not appointed a Healthcare Proxy/Agent at this time.
[*] [size=110]Do Not Resuscitate (DNR) Order[/size]:
[cb${t.dnrOrder==="Yes"?"c":""}][/cb${t.dnrOrder==="Yes"?"c":""}]I have a DNR order in place, instructing medical staff not to perform CPR or other life-saving measures if my heart stops.
[cb${t.dnrOrder==="No"?"c":""}][/cb${t.dnrOrder==="No"?"c":""}]I do not have a DNR order in place at this time.

[*][size=110]Consent to Share Advance Directives[/size]:
I authorize Pillbox Hill Medical Center to keep a copy of my advance directives in my medical record and to share this information with medical staff and emergency personnel as needed to ensure my healthcare wishes are respected.[/list]
I understand that I may revise or revoke these directives at any time by providing written notice.

Signature: [i][u]${o}[/u][/i]
Date: ${q}[/divbox][/altspoiler]`),Ie+=`
[divboxcolor=black][center][size=115][color=#FF0000]>[/color] [color=#FFFFFF][b]Disclaimer[/b][/color][/size][/center][/divboxcolor]
[divbox=transparent][list=none]I, ${o}, hereby declare that the information provided in this medical history form is true, accurate, and complete to the best of my knowledge. I understand that this information will be stored securely within the systems of Pillbox Hill Medical Center and may be accessed by authorized healthcare professionals involved in my care.

I, ${o}, upon submitting this form, consent to the sharing of my medical information among healthcare professionals within Pillbox Hill Medical Center for the purpose of providing comprehensive and coordinated healthcare services. I acknowledge that this information may be used for diagnosis, treatment, and other healthcare-related activities in accordance with applicable laws and regulations, including the Health Insurance Portability and Accountability Act (HIPAA).

I, ${o}, retain the right to revoke this consent at any time by notifying Pillbox Hill Medical Center in writing. However, I also understand that revoking consent may limit the ability of healthcare professionals to provide me with optimal and coordinated care.[/list][/divbox]
[divboxcolor=black][center][size=115][color=#FF0000]>[/color] [color=#FFFFFF][b]Payment[/b][/color][/size][/center][/divboxcolor]
[table][tr][td] Please attach an unedited confirmation of your payment, unless you are exempt. [size=70](see question 14 in the FAQ thread on how to pay)[/size][/td][td]
${ye?`[url=${ye}]Proof Of Payment [/url]`:"No proof of payment provided"}
[/table]`,Ie}},PN=t=>{const{scenePhotos:e,decedentName:n,patientNotes:r,synopsis:s,phmcEmployee:o,decedentOOC:a,patientCareer:l}=t,d=(e||"").split(",").map(p=>`[img]${p.trim()}[/img]`).join(`
`);return`[divbox=na][br][/br][imageleft]https://i.ibb.co/nMgfpMcv/phmc-curve.png[/imageleft] [b][size=110]Pillbox Hill Medical Center[/size][/b] 
[center][/center][br][/br]
[center][size=130][/center][/size]
[center][size=150][b]RE: ${r} [/b][/size][/center]

[hr][/hr][br][/br][list=none]
Dear ${n},

${s}


Respectfully submitted,
${d} 
[/list][hr][/hr][list=none]
[b][size=105]${o}[/size][/b]
[size=85]${a}
${l}
[/size]

[b]Pillbox Hill Medical Center[/b]
[size=85]Elgin Avenue/Strawberry Avenue, Pillbox Hill, Los Santos, SA
Phone: 50056
Mail: [url=https://phmc.gta.world/ucp.php?i=pm&mode=compose&g=40]info@phmc.health[/url]
Website: [url=https://phmc.gta.world/index.php]www.phmc.health[/url]

Follow us on Facebrowser: [url=https://face.gta.world/pages/PHMC?ref=qs]Pillbox Hill Medical Center[/url][/size]

[size=70][i]The contents of this message and any attachments are confidential. They are intended for the named recipient(s) only.  If you have received this email by mistake, please notify the sender immediately and do not disclose the contents to anyone or make copies thereof.[/i][/size][/divbox] 
`},$N=t=>{const{phmcEmployee:e,phmcRank:n,patientID:r,date:s,patientDiagnosis:o,patientSecondaryDiagnosis:a,patientMedicine:l,patientProcedure:d,patientChiefComplaint:u,patientNotes:p}=t,f=e&&e!=="N/A"?e:"",S=(f?f.split(" ").pop():"")||"[Signature Required]";return`[divbox=white][table][tr][td][center][br][/br][br][/br][b]Consultation Notes[/b]
    
PATIENT ID: ${r}

Date: ${s}

Signed: ${n&&n!=="N/A"?n:"[Rank Required]"} ${S}
[/center][td][center][img]https://i.ibb.co/fdGgxDH1/LkRKav2.png[/img][/center][td][center][br][/br][br][/br][size=100][b]PALETO BAY CLINIC[/b]
PALETO BAY BLVD.
PO BOX 685
PALETO BAY, SAN ANDREAS
P: 50056[/size][/center][/table][/divbox]
[divboxcolor=black][center][color=#0080FF]>[/color] [color=#FFFFFF][b]Anamnesis[/b][/color][/center][/divboxcolor]
[table][tr][td][left][list=none][u]Reason for Visit: [/u][br][/br]
${u}
[br][/br]
[u]Assigned Department: [/u][br][/br]
[cb${t.paletoClinicDepartment==="InternalMedicine"?"c":""}] Internal Medicine 
[cb${t.paletoClinicDepartment==="SurgicalDepartment"?"c":""}] Surgical Department
[/table]
[divboxcolor=black][center][color=#0080FF]>[/color] [color=#FFFFFF][b]Vitals[/b][/color][/center][/divboxcolor]
[table][tr][td][center]Temperature: [cb${t.temperature==="patientTempNormal"?"c":""}] Normal [cb${t.temperature==="patientHypothermic"?"c":""}] Hypothermic [cb${t.temperature==="patientHyperthermic"?"c":""}] Hyperthermic[/center]
[td][center]Heart Rate: [cb${t.heartRate==="patientHeartRateNormal"?"c":""}] Normal [cb${t.heartRate==="patientHeartRateBradycardia"?"c":""}] Bradycardia [cb${t.heartRate==="patientHeartRateTachycardia"?"c":""}] Tachycardia[/center][/table]
[table][tr][td][center]Breathing: [cb${t.breathing==="patientBreathingNormal"?"c":""}] Normal [cb${t.breathing==="patientBreathingSlow"?"c":""}] Slow [cb${t.breathing==="patientBreathingFast"?"c":""}] Fast [cb${t.breathing==="patientBreathingObstructed"?"c":""}] Obstructed[/center]
[td][center]Blood Pressure: [cb${t.bloodPressure==="patientBloodPressureNormal"?"c":""}] Normal [cb${t.bloodPressure==="patientBloodPressureHypotension"?"c":""}] Hypotension [cb${t.bloodPressure==="patientBloodPressureHypertension"?"c":""}] Hypertension [/center][/table]
[divboxcolor=black][center][color=#0080FF]>[/color] [color=#FFFFFF][b]Findings[/b][/color][/center][/divboxcolor]
[table][tr][td][center]General Health Condition (GHC): [cb${t.findings==="patientNormal"?"c":""}] Normal [cb${t.findings==="patientImpared"?"c":""}] Impaired[/center]
[td][center]Lungs (Auscultation): [cb${t.lungs==="patientNormal"?"c":""}] Normal [cb${t.findings==="patientRhonchi"?"c":""}] Rhonchi [cb${t.findings==="patientCrack"?"c":""}] Crackles [/center][/table]
[table][tr][td][center]Pupils: [cb${t.pupils==="patientPupilsNormal"?"c":""}] Normal [cb${t.pupils==="patientPupilsAbnormal"?"c":""}] Abnormal [/center]
[td][center]Wounds: [cb${t.wounds==="patientFractures"?"c":""}] Fracture(s) [cb${t.wounds==="patientBleeding"?"c":""}] Bleeding [cb${t.wounds==="patientHematoma"?"c":""}] Hematoma [cb${t.wounds==="patientNoWounds"?"c":""}] None [/center][/table]
[table][tr][td][center]ECG: [cb${t.ecg==="patientSinusRhythm"?"c":""}] Sinus rhythm [cb${t.ecg==="patientArrhythmia"?"c":""}] Arrhythmia [cb${t.ecg==="patientInfaction"?"c":""}] Infarct [/center]
[td][center]Sono: [cb${t.sono==="patientNormal"?"c":""}] Normal [cb${t.sono==="patientFluids"?"c":""}] Fluids [cb${t.sono==="patientTissue"?"c":""}] Tissue Change[/center][/table]
[table][tr][td][center]Lab: [cb${t.lab.includes("WNL")?"c":""}] WNL  [cb${t.lab.includes("Anemia")?"c":""}] Anemia [cb${t.lab.includes("Inflammation/Infection")?"c":""}] Inflammation/Infection [cb${t.lab.includes("Dysfunction")?"c":""}] Dysfunction/Disorder [cb${t.lab.includes("ElectrolyteImbalance")?"c":""}] Electrolyte Imbalance [cb${t.lab.includes("Infarct")?"c":""}] Infarct/Embolism [cb${t.lab.includes("Tumor")?"c":""}] Tumor [/center][/table]
[divboxcolor=black][center][color=#0080FF]>[/color] [color=#FFFFFF][b]Discharge Diagnosis[/b][/color][/center][/divboxcolor]
[table][tr][td][left][list=none][u]Primary Diagnosis: [/u][br][/br]
${o}
[br][/br][u]Secondary Diagnosis: [/u][br][/br]
${a}[/left][/list][/table]
[divboxcolor=black][center][color=#0080FF]>[/color] [color=#FFFFFF][b]Therapy[/b][/color][/center][/divboxcolor]
[table][tr][td][left][list=none][u]Admission: [/u][br][/br]
[cb${t.admission==="Yes"?"c":""}] Yes
[cb${t.admission==="No"?"c":""}] No
[br][/br]
[u]Treatment plan/Free Text: [/u][br][/br]
${d}
[br][/br]
[u]Additional Notes: [/u][br][/br]
${p}
[br][/br]
[u]Medication: [/u][br][/br]
${l}
[br][/br]
[u]Follow-Up: [/u][br][/br]
[cb${t.followup==="AsNeeded"?"c":""}] As needed
[cb${t.followup==="Recommended"?"c":""}] Recommended
[cb${t.followup==="ElectiveProcedure"?"c":""}] Elective procedure 
[/left][/list][/table]`},DN=t=>{const{patientID:e,date:n,phmcRank:r,phmcEmployee:s,patientChiefComplaint:o,patientTriggers:a,patientStress:l,patientTreatment:d,patientFamily:u,patientJobRisks:p,patientMedicalRecord:f,patientAllergies:g,patientChronicDiseases:S,patientVisitReason:_,patientSymptoms:I,patientCondition:F,patientDrugs:P,patientDrugsUsage:k,patientMental:D,patientJob:R,patientFam:$,patientLegal:O,patientRelationship:E,patientFindings:y,patientTreatmentPlan:w,patientSafety:N,patientFollowUp:v,patientTreatmentMedicine:A,patientDiagnosis:C,patientTherapy:M,patientRiskAssessment:B,patientTherapyMedicine:j}=t,V=s&&s!=="N/A"?s:"",Y=(V?V.split(" ").pop():"")||"[Signature Required]";return`[divbox=white][table][tr][td][center][br][/br][br][/br][b]Session Notes[/b]
PATIENT ${e}
Date: ${n}
Signed: ${r&&r!=="N/A"?r:"[Rank Required]"} ${Y}
[/center][td][center][img]https://i.ibb.co/0pgw9hHm/phmc.png[/img][/center][td][center][br][/br][br][/br][size=100][b]PILLBOX HILL MEDICAL CENTER[/b]
ELGIN AVE. / STRAWBERRY AVE.
PO BOX 742
LOS SANTOS, SAN ANDREAS
P: 50056[/size][/center][/table][/divbox]

[divboxcolor=black][center][color=#FF0000]>[/color] [color=#FFFFFF][b]Anamnesis[/b][/color][/center][/divboxcolor]
[table][tr][td][left][list=none][u]Chief Complaint: [/u][br][/br]
${o}
[br][/br]
[u]Assigned Department: [/u][br][/br]
[cbc] Mental Health
[br][/br][/list][/td][/tr][/table]

[divboxcolor=black][center][color=#FF0000]>[/color] [color=#FFFFFF][b]Presenting Problem[/b][/color][/center][/divboxcolor]
[table][tr][td][left][list=none][u]Description of the issue (e.g., anxiety, depression, psychosis): [/u][br][/br]
${_}
[br][/br]
[u]Onset and duration of symptoms: [/u][br][/br]
${I}
[br][/br]
[u]Triggers or stressors: [/u][br][/br]
${a}
[br][/br]
[u]Impact on daily life: [/u][br][/br]
${l}
[/list][/td][/tr][/table]

[divboxcolor=black][center][color=#FF0000]>[/color] [color=#FFFFFF][b]Mental Status Examination (MSE)[/b][/color][/center][/divboxcolor]
[table][tr][td][left][list=none]
[u]Appearance: [/u][br][/br]
[cb${t.Appearance==="Good"?"c":""}] Well-groomed [cb${t.Appearance==="Disheveled"?"c":""}] Disheveled [cb${t.Appearance==="Inappropriate"?"c":""}] Inappropriate
[br][/br]
[u]Behavior: [/u][br][/br]
[cb${t.Behavior==="Cooperative"?"c":""}] Cooperative [cb${t.Behavior==="Agitated"?"c":""}] Agitated [cb${t.Behavior==="Withdrawn"?"c":""}] Withdrawn
[br][/br]
[u]Speech: [/u][br][/br]
[cb${t.Speech==="Normal"?"c":""}] Normal [cb${t.Speech==="Pressured"?"c":""}] Pressured [cb${t.Speech==="Slurred"?"c":""}] Slurred [cbcb${t.Speech==="Slow"?"c":""}] Slow
[br][/br]
[u]Mood: [/u][br][/br]
[cb${t.Mood==="Euthymic"?"c":""}] Euthymic [cb${t.Mood==="Depressed"?"c":""}] Depressed [cb${t.Mood==="Anxious"?"c":""}] Anxious [cb${t.Mood==="Angry"?"c":""}] Angry
[br][/br]
[u]Affect: [/u][br][/br]
[cb${t.Affect==="Congruent"?"c":""}] Congruent [cb${t.Affect==="Flat"?"c":""}] Flat [cb${t.Affect==="Inappropriate"?"c":""}] Inappropriate
[br][/br]
[u]Thought Process: [/u][br][/br]
[cb${t.ThoughtProcess==="Logical"?"c":""}] Logical [cb${t.ThoughtProcess==="Organized"?"c":""}] Organized [cb${t.ThoughtProcess==="Tangential"?"c":""}] Tangential [cb${t.ThoughtProcess==="Disorganized"?"c":""}] Disorganized
[br][/br]
[u]Thought Content: [/u][br][/br]
[cb${t.ThoughtContent==="Nodelusions"?"c":""}] No delusions [cb${t.ThoughtContent==="Delusions"?"c":""}] Delusions [cb${t.ThoughtContent==="Hallucinations"?"c":""}] Hallucinations [cb${t.ThoughtContent==="Suicidal"?"c":""}] Suicidal thoughts [cb${t.ThoughtContent==="Homicidal"?"c":""}] Homicidal thoughts
[br][/br]
[u]Insight and Judgment: [/u][br][/br]
[cb${t.Insight==="Intact"?"c":""}] Intact [cb${t.Insight==="Limited"?"c":""}] Limited [cb${t.Insight==="Poor"?"c":""}] Poor
[br][/br]
[u]Cognition: [/u][br][/br]
[cb${t.Cognition==="Oriented"?"c":""}] Oriented to time, place, person [cb${t.Cognition==="Memory"?"c":""}] Memory intact [cb${t.Cognition==="Attention"?"c":""}] Attention intact
[/list][/td][/tr][/table]

[divboxcolor=black][center][color=#FF0000]>[/color] [color=#FFFFFF][b]Psychiatric History[/b][/color][/center][/divboxcolor]
[table][tr][td][left][list=none]
[u]Past psychiatric diagnoses and treatments: [/u][br][/br]
${d}
[br][/br]
[u]Hospitalizations: [/u][br][/br]
${f}
[br][/br]
[u]Family psychiatric history: [/u][br][/br]
${u}
[br][/br]
[u]History of self-harm or suicide attempts: [/u][br][/br]
${p}
[/list][/td][/tr][/table]

[divboxcolor=black][center][color=#FF0000]>[/color] [color=#FFFFFF][b]Medical History[/b][/color][/center][/divboxcolor]
[table][tr][td][left][list=none]
[u]Current and past medical conditions: [/u][br][/br]
${F}
[br][/br]
[u]Medications (including psychiatric and non-psychiatric): [/u][br][/br]
${S}
[br][/br]
[u]Allergies: [/u][br][/br]
${g}
[/list][/td][/tr][/table]

[divboxcolor=black][center][color=#FF0000]>[/color] [color=#FFFFFF][b]Substance Use History[/b][/color][/center][/divboxcolor]
[table][tr][td][left][list=none]
[u]Use of alcohol, drugs, nicotine, and other substances: [/u][br][/br]
${P}
[br][/br]
[u]Frequency and duration of use: [/u][br][/br]
${k}
[br][/br]
[u]Impact on mental health: [/u][br][/br]
${D}
[/list][/td][/tr][/table]

[divboxcolor=black][center][color=#FF0000]>[/color] [color=#FFFFFF][b]Psychosocial History[/b][/color][/center][/divboxcolor]
[table][tr][td][left][list=none]
[u]Childhood and family background: [/u][br][/br]
${$}
[br][/br]
[u]Education and employment history: [/u][br][/br]
${R}
[br][/br]
[u]Relationships and support system: [/u][br][/br]
${E}
[br][/br]
[u]Legal issues: [/u][br][/br]
${O}
[/list][/td][/tr][/table]

[divboxcolor=black][center][color=#FF0000]>[/color] [color=#FFFFFF][b]Risk Assessment[/b][/color][/center][/divboxcolor]
[table][tr][td][left][list=none]
[cb${t.Risk==="Suicidal"?"c":""}] Suicidal ideation or attempts [cb${t.Risk==="Homicidal"?"c":""}] Homicidal thoughts or violent behavior [cb${t.Risk==="Self"?"c":""}] Self-injury or harm to others
[br][/br]
[u]Details: [/u][br][/br]
${B}
[/list][/td][/tr][/table]

[divboxcolor=black][center][color=#FF0000]>[/color] [color=#FFFFFF][b]Findings[/b][/color][/center][/divboxcolor]
[table][tr][td][list=none]
Notes: ${y}
[/list][/td][/tr][/table]

[divboxcolor=black][center][color=#FF0000]>[/color] [color=#FFFFFF][b]Discharge Diagnosis[/b][/color][/center][/divboxcolor]
[table][tr][td][left][list=none]
[u]Primary Diagnosis: [/u][br][/br]
${C}
[/list][/td][/tr][/table]

[divboxcolor=black][center][color=#FF0000]>[/color] [color=#FFFFFF][b]Therapy[/b][/color][/center][/divboxcolor]
[table][tr][td][left][list=none][u]Admission: [/u][br][/br]
[cb${t.admission==="Yes"?"c":""}] Yes [cb${t.admission==="No"?"c":""}] No
[br][/br]
[u]Treatment Plan: [/u][br][/br]
${w}
[br][/br]
[u]Medication: [/u][br][/br]
${j}
[br][/br]
[u]Follow-Up: [/u][br][/br]
[cb${t.followup==="AsNeeded"?"c":""}] As needed [cb${t.followup==="Recommended"?"c":""}] Recommended

[/list][/td][/tr][/table]

[divboxcolor=black][center][color=#FF0000]>[/color] [color=#FFFFFF][b]Treatment Plan/Recommendations[/b][/color][/center][/divboxcolor]
[table][tr][td][left][list=none]
[u]Medications: [/u][br][/br]
${A}
[br][/br]
[u]Therapy (e.g., CBT, DBT): [/u][br][/br]
${M}
[br][/br]
[u]Follow-up appointments: [/u][br][/br]
${v}
[br][/br]
[u]Safety planning (if at risk): [/u][br][/br]
${N}
[/list][/td][/tr][/table]`},ON=t=>{const{patientID:e,date:n,Affect:r,phmcRank:s,phmcEmployee:o,patientChiefComplaint:a,patientTriggers:l,patientStress:d,patientTreatment:u,patientFamily:p,patientJobRisks:f,patientMedicalRecord:g,patientAllergies:S,patientChronicDiseases:_,patientVisitReason:I,patientSymptoms:F,patientCondition:P,patientDrugs:k,patientDrugsUsage:D,patientMental:R,patientJob:$,patientFam:O,patientLegal:E,patientRelationship:y,patientFindings:w,patientTreatmentPlan:N,patientSafety:v,patientFollowUp:A,patientTreatmentMedicine:C,patientDiagnosis:M,patientTherapy:B,patientRiskAssessment:j,patientTherapyMedicine:V}=t,q=o&&o!=="N/A"?o:"",ue=(q?q.split(" ").pop():"")||"[Signature Required]";return`[divbox=white][table][tr][td][center][br][/br][br][/br][b]Session Notes[/b]
PATIENT ${e}
Date: ${n}
Signed: ${s&&s!=="N/A"?s:"[Rank Required]"} ${ue}
[/center][td][center][img]https://i.ibb.co/fdGgxDH1/LkRKav2.png[/img][/center][td][center][br][/br][br][/br][size=100][b]PALETO BAY CLINIC[/b]
PALETO BAY BLVD.
PO BOX 685
PALETO BAY, SAN ANDREAS
P: 50056[/size][/center][/table][/divbox]

[divboxcolor=black][center][color=#0080FF]>[/color] [color=#FFFFFF][b]Anamnesis[/b][/color][/center][/divboxcolor]
[table][tr][td][left][list=none][u]Chief Complaint: [/u][br][/br]
${a}
[br][/br]
[u]Assigned Department: [/u][br][/br]
[cbc] Mental Health
[br][/br][/list][/td][/tr][/table]

[divboxcolor=black][center][color=#0080FF]>[/color] [color=#FFFFFF][b]Presenting Problem[/b][/color][/center][/divboxcolor]
[table][tr][td][left][list=none][u]Description of the issue (e.g., anxiety, depression, psychosis): [/u][br][/br]
${I}
[br][/br]
[u]Onset and duration of symptoms: [/u][br][/br]
${F}
[br][/br]
[u]Triggers or stressors: [/u][br][/br]
${l}
[br][/br]
[u]Impact on daily life: [/u][br][/br]
${d}
[/list][/td][/tr][/table]

[divboxcolor=black][center][color=#0080FF]>[/color] [color=#FFFFFF][b]Mental Status Examination (MSE)[/b][/color][/center][/divboxcolor]
[table][tr][td][left][list=none]
[u]Appearance: [/u][br][/br]
[cb${t.Appearance==="Good"?"c":""}] Well-groomed [cb${t.Appearance==="Disheveled"?"c":""}] Disheveled [cb${t.Appearance==="Inappropriate"?"c":""}] Inappropriate
[br][/br]
[u]Behavior: [/u][br][/br]
[cb${t.Behavior==="Cooperative"?"c":""}] Cooperative [cb${t.Behavior==="Agitated"?"c":""}] Agitated [cb${t.Behavior==="Withdrawn"?"c":""}] Withdrawn
[br][/br]
[u]Speech: [/u][br][/br]
[cb${t.Speech==="Normal"?"c":""}] Normal [cb${t.Speech==="Pressured"?"c":""}] Pressured [cb${t.Speech==="Slurred"?"c":""}] Slurred [cbcb${t.Speech==="Slow"?"c":""}] Slow
[br][/br]
[u]Mood: [/u][br][/br]
[cb${t.Mood==="Euthymic"?"c":""}] Euthymic [cb${t.Mood==="Depressed"?"c":""}] Depressed [cb${t.Mood==="Anxious"?"c":""}] Anxious [cb${t.Mood==="Angry"?"c":""}] Angry
[br][/br]
[u]Affect: [/u][br][/br]
[cb${t.Affect==="Congruent"?"c":""}] Congruent [cb${t.Affect==="Flat"?"c":""}] Flat [cb${t.Affect==="Inappropriate"?"c":""}] Inappropriate
[br][/br]
[u]Thought Process: [/u][br][/br]
[cb${t.ThoughtProcess==="Logical"?"c":""}] Logical [cb${t.ThoughtProcess==="Organized"?"c":""}] Organized [cb${t.ThoughtProcess==="Tangential"?"c":""}] Tangential [cb${t.ThoughtProcess==="Disorganized"?"c":""}] Disorganized
[br][/br]
[u]Thought Content: [/u][br][/br]
[cb${t.ThoughtContent==="Nodelusions"?"c":""}] No delusions [cb${t.ThoughtContent==="Delusions"?"c":""}] Delusions [cb${t.ThoughtContent==="Hallucinations"?"c":""}] Hallucinations [cb${t.ThoughtContent==="Suicidal"?"c":""}] Suicidal thoughts [cb${t.ThoughtContent==="Homicidal"?"c":""}] Homicidal thoughts
[br][/br]
[u]Insight and Judgment: [/u][br][/br]
[cb${t.Insight==="Intact"?"c":""}] Intact [cb${t.Insight==="Limited"?"c":""}] Limited [cb${t.Insight==="Poor"?"c":""}] Poor
[br][/br]
[u]Cognition: [/u][br][/br]
[cb${t.Cognition==="Oriented"?"c":""}] Oriented to time, place, person [cb${t.Cognition==="Memory"?"c":""}] Memory intact [cb${t.Cognition==="Attention"?"c":""}] Attention intact
[/list][/td][/tr][/table]

[divboxcolor=black][center][color=#0080FF]>[/color] [color=#FFFFFF][b]Psychiatric History[/b][/color][/center][/divboxcolor]
[table][tr][td][left][list=none]
[u]Past psychiatric diagnoses and treatments: [/u][br][/br]
${u}
[br][/br]
[u]Hospitalizations: [/u][br][/br]
${g}
[br][/br]
[u]Family psychiatric history: [/u][br][/br]
${p}
[br][/br]
[u]History of self-harm or suicide attempts: [/u][br][/br]
${f}
[/list][/td][/tr][/table]

[divboxcolor=black][center][color=#0080FF]>[/color] [color=#FFFFFF][b]Medical History[/b][/color][/center][/divboxcolor]
[table][tr][td][left][list=none]
[u]Current and past medical conditions: [/u][br][/br]
${P}
[br][/br]
[u]Medications (including psychiatric and non-psychiatric): [/u][br][/br]
${_}
[br][/br]
[u]Allergies: [/u][br][/br]
${S}
[/list][/td][/tr][/table]

[divboxcolor=black][center][color=#0080FF]>[/color] [color=#FFFFFF][b]Substance Use History[/b][/color][/center][/divboxcolor]
[table][tr][td][left][list=none]
[u]Use of alcohol, drugs, nicotine, and other substances: [/u][br][/br]
${k}
[br][/br]
[u]Frequency and duration of use: [/u][br][/br]
${D}
[br][/br]
[u]Impact on mental health: [/u][br][/br]
${R}
[/list][/td][/tr][/table]

[divboxcolor=black][center][color=#0080FF]>[/color] [color=#FFFFFF][b]Psychosocial History[/b][/color][/center][/divboxcolor]
[table][tr][td][left][list=none]
[u]Childhood and family background: [/u][br][/br]
${O}
[br][/br]
[u]Education and employment history: [/u][br][/br]
${$}
[br][/br]
[u]Relationships and support system: [/u][br][/br]
${y}
[br][/br]
[u]Legal issues: [/u][br][/br]
${E}
[/list][/td][/tr][/table]

[divboxcolor=black][center][color=#0080FF]>[/color] [color=#FFFFFF][b]Risk Assessment[/b][/color][/center][/divboxcolor]
[table][tr][td][left][list=none]
[cb${t.Risk==="Suicidal"?"c":""}] Suicidal ideation or attempts [cb${t.Risk==="Homicidal"?"c":""}] Homicidal thoughts or violent behavior [cb${t.Risk==="Self"?"c":""}] Self-injury or harm to others
[br][/br]
[u]Details: [/u][br][/br]
${j}
[/list][/td][/tr][/table]

[divboxcolor=black][center][color=#0080FF]>[/color] [color=#FFFFFF][b]Findings[/b][/color][/center][/divboxcolor]
[table][tr][td][list=none]
Notes: ${w}
[/list][/td][/tr][/table]

[divboxcolor=black][center][color=#0080FF]>[/color] [color=#FFFFFF][b]Discharge Diagnosis[/b][/color][/center][/divboxcolor]
[table][tr][td][left][list=none]
[u]Primary Diagnosis: [/u][br][/br]
${M}
[/list][/td][/tr][/table]

[divboxcolor=black][center][color=#0080FF]>[/color] [color=#FFFFFF][b]Therapy[/b][/color][/center][/divboxcolor]
[table][tr][td][left][list=none][u]Admission: [/u][br][/br]
[cb${t.admission==="Yes"?"c":""}] Yes [cb${t.admission==="No"?"c":""}] No
[br][/br]
[u]Treatment Plan: [/u][br][/br]
${N}
[br][/br]
[u]Medication: [/u][br][/br]
${V}
[br][/br]
[u]Follow-Up: [/u][br][/br]
[cb${t.followup==="AsNeeded"?"c":""}] As needed [cb${t.followup==="Recommended"?"c":""}] Recommended

[/list][/td][/tr][/table]

[divboxcolor=black][center][color=#0080FF]>[/color] [color=#FFFFFF][b]Treatment Plan/Recommendations[/b][/color][/center][/divboxcolor]
[table][tr][td][left][list=none]
[u]Medications: [/u][br][/br]
${C}
[br][/br]
[u]Therapy (e.g., CBT, DBT): [/u][br][/br]
${B}
[br][/br]
[u]Follow-up appointments: [/u][br][/br]
${A}
[br][/br]
[u]Safety planning (if at risk): [/u][br][/br]
${v}
[/list][/td][/tr][/table]`},MN=t=>{const{coronerRank:e,coronerEmployee:n,synopsis:r,decedentName:s,externalExamination:o,decedentOOC:a,autopsyDeathCauses:l,deathType:d,causeOfDeath:u,autopsyAnatomicSummaryItems:p,autopsyAlbumUrl:f,autopsyPhotosUnavailable:g,RadiologyResult:S,autopsyDate:_,autopsyTime:I,autopsyDiagramImgurUrl:F}=t;let P="[list=a][*]N/A[/list]";if(l&&Array.isArray(l)){const y=l.map(w=>(w||"").trim()).filter(w=>w);y.length>0&&(P=`[list=a]${y[0]}`,y.length>1&&(P+=`
${y.slice(1).map(w=>`[*]${w}`).join(`
`)}`),P+=`
[/list]`)}let k="[list=1][*]N/A[/list]";if(p&&Array.isArray(p)){const y=p.map(w=>(w||"").trim()).filter(w=>w);y.length>0&&(k=`[list=1]${y[0]}`,y.length>1&&(k+=`
${y.slice(1).map(w=>`[*]${w}`).join(`
`)}`),k+=`
[/list]`)}let D="";F&&F.trim()!==""?D=`[b]Autopsy Diagram[/b]:
[img]${F.trim()}[/img]
`:D=`[b]Autopsy Diagram[/b]: N/A
`;let R="";if(g)R="Photographs are unavailable for this autopsy.";else if(f&&f.trim()!==""){const y=f.split(",").map(w=>w.trim()).filter(w=>w);y.length>0?R=`At scene photos are available: ${y.map((w,N)=>`[url=${w}]Photo ${N+1}[/url]`).join(" | ")} Photographs have been taken prior to and during course of the autopsy.`:R="No valid photo URLs provided."}else R="No photographs provided for this autopsy.";let $="DD/MMM/YYYY";if(_){const y=_.split("-");y.length===3&&($=new Date(y[0],parseInt(y[1],10)-1,y[2]).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"}))}return`[divbox=white][center][img]https://i.ibb.co/0pgw9hHm/phmc.png[/img][/center][/divbox]

[divbox=white][b][size=150][br][/br][center]DEPARTMENT OF PATHOLOGY AND FORENSIC MEDICINE[/size][/b][/center]
[center][size=120]Autopsy Report by Medical Examiner[/size][/center][hr][/hr][justify][br][/br]I performed an autopsy on the body of [b]${s||"John Doe"} ((${a||"OOC Name"}))[/b] at PHMC's Department of Pathology and Forensic Medicine on ${$}, ${I||"HH:MM"}.
From the anatomic findings and pertinent history, I ascribe the death to:
${P}
[b]MANNER OF DEATH:[/b] ${d||"Undetermined"}
[b]HOW INJURY OCCURRED:[/b] ${u||"Unknown"}
${D} 
[b]Anatomic Summary:[/b]
${k}
[b]External Examination:[/b]
${o||"No external examination details provided."}[br][/br]
[b]Clothing:[/b]
The body was not clothed and the clothing was not available at the time of autopsy.[br][/br]
[b]Initial Incision:[/b]
The body cavities are entered through the standard coronal and the standard Y-shaped incisions.[br][/br]
[b]Internal Examination:[/b]
Consistent with the stated cause of death, nothing out of the ordinary was observed.[br][/br]
[b]Histologic Sections:[/b]
Representative sections from various organs are preserved in one storage jar in %10 formalin.[br][/br]
[b]Toxicology:[/b]
Chest blood, femoral blood, EDTA blood, urine, stomach contents and vitreous have been submitted to the lab. A comprehensive screen was requested.[br][/br]
[b]Photography:[/b]
${R}[br][/br]
[b]Radiology:[/b]
The body is fluoroscoped and two x-rays were taken; ${S||"No specific radiology results noted."}[br][/br]
[b]Opinion:[/b]
${r||"No opinion provided."}[br][/br]
[b]Performed by:[/b]
${e||"Medical Examiner"} ${n||"Unknown Coroner"} [br][/br]
[b]Approved by:[/b]
Chief Medical Examiner-Coroner Anne Carter[/justify][/divbox]`},jN=t=>{const{emailPurpose:e,emailRecipient:n,patientName:r,dateOfVisit:s,sicknessStartDate:o,sicknessEndDate:a,reasonForSickness:l,illnessCondition:d,confirmationPurpose:u,phmcEmployee:p,phmcRank:f,phmcEmployeeDepartment:g,phmcEmployeeSignatureImage:S,attachedReportSummary:_}=t;let I="",F="";const P=s?new Date(s).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}):"N/A";e==="Sickness Note"?(I=`RE: Sickness Note for ${r||"Patient"}`,F=`Dear ${n||"Recipient"},

This email serves as a sickness note for ${r||"the patient"} from ${o||"N/A"} to ${a||"N/A"}.

${r||"The patient"} was seen at Pillbox Hill Medical Center on ${P} and was advised to rest due to ${l||"a medical condition"}.

We anticipate ${r||"they"} will be able to resume normal activities after the specified period.

Please do not hesitate to contact us if you require further information.`):e==="Illness Confirmation"?(I=`RE: Illness Confirmation for ${r||"Patient"}`,F=`Dear ${n||"Recipient"},

This email confirms that ${r||"the patient"} was seen at Pillbox Hill Medical Center on ${P}.

${r||"The patient"} was diagnosed with ${d||"a medical condition"}. This confirmation is provided for ${u||"their records"}.

Please do not hesitate to contact us if you require further information.`):(I="PHMC Email - Subject Missing",F="Please select an email purpose (Sickness Note or Illness Confirmation).");const k=_?`

[b]Attached Medical Report Summary:[/b]
[altspoiler=Medical Report Summary][quote]${_}[/quote][/altspoiler]`:"",D=S?`[img]${S.trim()}[/img]`:"";return`[divbox=na][br][/br][imageleft]https://i.ibb.co/nMgfpMcv/phmc-curve.png[/imageleft] [b][size=110]Pillbox Hill Medical Center[/size][/b] 
[center][/center][br][/br]
[center][size=130][/center][/size]
[center][size=150][b]${I}[/b][/size][/center]

[hr][/hr][br][/br][list=none]
${F}

${k}

Respectfully submitted,
${D} 
[/list][hr][/hr][list=none]
[b][size=105]${p||"PHMC Employee"}[/size][/b]
[size=85]${f||"N/A"}
[/size]

[b]Pillbox Hill Medical Center[/b]
[size=85]Elgin Avenue/Strawberry Avenue, Pillbox Hill, Los Santos, SA
Phone: 50056
Mail: [url=https://phmc.gta.world/ucp.php?i=pm&mode=compose&g=40]info@phmc.health[/url]
Website: [url=https://phmc.gta.world/index.php]www.phmc.health[/url]

Follow us on Facebrowser: [url=https://face.gta.world/pages/PHMC?ref=qs]Pillbox Hill Medical Center[/url][/size]

[size=70][i]The contents of this message and any attachments are confidential. They are intended for the named recipient(s) only.  If you have received this email by mistake, please notify the sender immediately and do not disclose the contents to anyone or make copies thereof.[/i][/size][/divbox]`},LN=t=>{const{scenePhotos:e,decedentName:n,patientAge:r,probableCauseOfDeath:s,patientDateOfBirth:o,dateofdeath:a,TimeofDeath:l,witnessName:d,coronerEmployee:u,date:p}=t;return(e||"").split(",").map(g=>`[img]${g.trim()}[/img]`).join(`
`),`[divbox=#E8E8E8][br][/br][center][img]https://i.ibb.co/0pgw9hHm/phmc.png[/img][/center][br][/br]


[hr][/hr]
[center][size=125][b]DEPARTMENT OF PATHOLOGY AND FORENSIC MEDICINE ISSUED
CERTIFICATE OF DEATH[/center][/b][/size]
[hr][/hr][br]

[center]I, [b]${u}[/b], on behalf of the Department of Pathology and Forensic Medicine of Pillbox Hill Medical Center, in the State of San Andreas, document, record, seal and hereby certify the death of [b]${n}[/b]. I confirm the following information is factual to the best of my abilities:[/center][br][/br]

[table][tr][td]NAME[/td][td]
${n||"INSERT DECEDENT NAME HERE"}

[tr][td]AGE[/td][td]
${r}	

[tr][td]DATE OF BIRTH[/td][td]
${o||"INSERT DATE OF BIRTH HERE"}	

[tr][td]CAUSE OF DEATH[/td][td]
${s||"INSERT CAUSE OF DEATH HERE"}	

[tr][td]TIME OF DEATH[/td][td]
${l||"INSERT TIME OF DEATH HERE"}	

[tr][td]DATE OF DEATH[/td][td]
${a||"INSERT DATE OF DEATH HERE"}	
[/table][br][/br]
[list=none][left]
SIGNATURE OF MEDICAL-EXAMINER:
PRINT NAME: Dr. Anne Carter

SIGNATURE OF WITNESS:
PRINT NAME: ${d||"INSERT WITNESS NAME HERE"}

DATE CERTIFICATE ISSUED: ${p}
[/list]

[br][hr][/hr]
[center]Note: This is the master copy of the death certificate. Additional copies can be requested at an additional fee[/center][br][/br]`},UN=t=>{const{coronerRank:e,placeOfDeath:n,department:r,dateTime:s,requestingOfficer:o,coronerEmployee:a,coronerBadge:l,synopsis:d,showRequestingOfficerInput:u,decedents:p=[],agencyDataStore:f}=t,g=I=>f&&f[I]?f[I].fullName:I,S=I=>{const F=["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten"];return I>=0&&I<=10?F[I]:I.toString()};let _=`[divbox=transparent][center][img]https://i.ibb.co/0pgw9hHm/phmc.png[/img][/center][/divbox]

[divbox=transparent][br][/br][center]MASS FATALITY REPORT[/center]
[hr][/hr]

[center][bold]A. WRITTEN REPORT[/bold][/center]

The County Coroner's Office has been called regarding a Mass Fatality Incident that occurred at the location of [bold]${n||"Unknown Location"}[/bold]. Upon receiving the call from[bold] ${g(r)||"Unknown Department"}[/bold], Coroner's Office dispatched a ${e||"Coroner"} to the crime scene to conduct an investigation on the [bold]${s||"Unknown Date/Time"}[/bold].

The ${e||"Coroner"}, [bold]${a||"Unknown Coroner"}[/bold], Serial Number [bold]${l||"N/A"}[/bold], arrived at the scene and identified a total of [bold]${S(Array.isArray(p)?p.length:0)} Decedents.[/bold]. Following an initial investigation, The ${e||"Coroner"} came up with the following [bold]synopsis[/bold]: ${d||"No synopsis provided."}

${u?`
An official from the ${g(r)||"Unknown Department"} has requested the report be forwarded via Secure Intranet to [b]${o}[/b], it has since been sent to the officer for further processing and review.`:""}
[/divbox]
`;return Array.isArray(p)&&p.forEach((I,F)=>{const P=(I.scenePhotos||"").split(",").map(y=>y.trim()).filter(y=>y),k=(I.additionalImages||"").split(",").map(y=>y.trim()).filter(y=>y),D=P.length>0?P.map(y=>`[img]${y}[/img]`).join(`
`):"[i]No scene photos provided.[/i]",R=k.length>0?k.map(y=>`[img]${y}[/img]`).join(`
`):"[i]No additional images provided.[/i]";let $="No",O="";I.evidenceLockerID&&I.evidenceLockerID.trim()!==""&&($="Yes",O=`[list][*] ${I.evidenceLockerID.trim()} - ${I.decedentName} (( ${I.decedentOOC} ))[/list]`);const E=I.morgueStatus==="true"||I.morgueStatus===!0?`[bold][color=red]The Morgue Screen Photo is currently unavailable. [/color][/bold]
`:"";_+=`
[divbox=transparent][altspoiler=${F+1} - ${I.decedentName} - OOC ${I.decedentOOC||"Unknown"}]
[divbox=transparent][center][bold]DECEDENT INFORMATION[/bold][/center]
[b] DECEDENT NAME: [/b] ${I.decedentName||"Unidentified Decedent"}
[b] DECEDENT OOC NAME: [/b] (( ${I.decedentOOC||"Unknown"} ))
[b] PRONOUNCED TIME OF DEATH: [/b] ${I.pronouncedTimeOfDeath||"Unknown Time"}
[b] PROBABLE CAUSE OF DEATH: [/b] ${I.probableCauseOfDeath||"Unknown Cause"}
[b] MANNER OF DEATH: [/b] ${I.mannerOfDeath||"Unknown Manner"}
[b] TYPE OF DEATH: [/b] ${I.typeOfDeath||"Unknown Type"}
[b]Decedent Injuries / Things of Note: [/b] ${I.synopsis||"No Synopsis Provided"}

[hr][/hr]
[/divbox]
[divbox=transparent][center][bold]DECEDENT DOCUMENTARY RECORD[/center]
[hr][/hr]
[center][size=85][bold][u]SCENE PHOTOGRAPHY[/u][/bold][/size][/center]
${D}
[/divbox]
[divbox=transparent][center][bold][u](( OUT OF CHARACTER IMAGES ))[/u][/bold][/center][hr][/hr]

This section clarifies whether or not if the player was character killed or player killed.
In this case the player was; ${I.typeOfDeath||"Unknown"}
Morgue screen, cinjuries, cdna links: ${E||""}
[size=85][u] THESE IMAGES ARE [bold]OUT OF CHARACTER[/bold] FOR INTERNAL RECORDS, DO NOT USE THESE AS EVIDENCE. [/u][/size]
${R}

${e||"Coroner"} ${a||"Unknown Coroner"} has added something to the evidence locker: ${$}
${O}

[/divbox][/divbox]
`}),_+=`
[divbox=transparent]
[center][bold]C. STATEMENT[/bold][/center]
[hr][/hr]
[size=85]As a ${e||"Coroner"}, I have made detailed notes of my findings and conclusions, and these notes are available for review if necessary. However, I must note that these notes do not contain any personal opinions and are solely based on the evidence and facts available to me.

In conclusion, I hope that this report provides the necessary information required for the agency to move forward with any necessary actions. Please let me know if you require any additional information or if I can be of further assistance.

I certify that the information contained in this report is true and accurate to the best of my knowledge and belief. I have reviewed the report and ensured that all information included is complete and accurate. [/size][/divbox]

[divbox=transparent][center][bold]D. PRIVACY AND CONFIDENTIALITY[/bold][/center]
[hr][/hr]
[center][size=85]This document from the Forensic Medicine and Pathology Department of Pillbox Hill Medical Center certifies the authenticity of the information contained within. Any unauthorized distribution or use of this information is in violation of the Health Insurance Portability and Accountability Act (HIPAA), as well as state and federal privacy laws, including but not limited to the San Andreas Confidentiality of Medical Information Act (CMIA) and the San Andreas Information Practices Act (IPA).

It is imperative that all parties handling this document respect the privacy and confidentiality of the decedent and their family. Any violation of these laws may result in legal action being taken against the responsible parties.

This document is provided for official purposes only and is not to be construed as legal advice or medical diagnosis. If additional information or clarification is needed, please contact the Forensic Medicine and Pathology Department of Pillbox Hill Medical Center.[/size][/divbox]
`,_},BN=t=>{const{caseNumber:e,caseStatus:n,bodyStatus:r,sex:s,ethnicity:o,placeOfDeath:a,manner:l,coronerEmployee:d,chiefMedicalExaminer:u,causeA:p,causeB:f,causeC:g,causeD:S,otherSignificantConditions:_,deathRecordType:I,hairColor:F,eyeColor:P,weight:k,height:D,tattoos:R,jewelry:$,comments:O,decedentName:E,dateOfDeath:y,age:w,deathReportPostId:N}=t;let v;I==="Unidentified"?v=`[table]
[tr]
[td bgcolor=#E6E6E6][bold]Hair Color[/bold]: ${F||"N/A"}[/td]
[td bgcolor=#E6E6E6][bold]Eye Color[/bold]: ${P||"N/A"}[/td]
[/tr]
[tr]
[td bgcolor=#E6E6E6][bold]Weight[/bold]: ${k||"N/A"}[/td]
[td bgcolor=#E6E6E6][bold]Height[/bold]: ${D||"N/A"}[/td]
[/tr]
[tr]
[td bgcolor=#E6E6E6][bold]Tattoos[/bold]: ${R||"None"}[/td]
[td bgcolor=#E6E6E6][bold]Jewelry[/bold]: ${$||"None"}[/td]
[/tr]
[tr]
[td bgcolor=#E6E6E6][bold]Comments[/bold]: ${O||"None"}[/td]
[/tr]
[/table]`:v=`[table]
[tr]
[td bgcolor=#E6E6E6][bold]Cause A[/bold]: ${p||""}[/td]
[td bgcolor=#E6E6E6][bold]Cause B[/bold]: ${f||""}[/td]
[/tr]
[tr]
[td bgcolor=#E6E6E6][bold]Cause C[/bold]: ${g||""}[/td]
[td bgcolor=#E6E6E6][bold]Cause D[/bold]: ${S||""}[/td]
[/tr]
[tr]
[td bgcolor=#E6E6E6][bold]Other Significant Conditions[/bold]: ${_||"None"}[/td]
[/tr]
[/table]`;const A=N?`[url=${N}]${e}[/url]`:e||"";let C="[DATE HERE]";return y&&(C=new Date(y+"T00:00:00").toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})),`[divbox=#FFFFFF]
[center][img]https://i.ibb.co/Rk5bRDxX/image.png[/img][/center]
[/divbox]

[divbox=#4D4D4D][center][bold][size=150]PUBLIC DECEDENT RECORD[/size][/bold][/center][/divbox]

[divbox=#000000][center][size=130]${E||"FULL NAME HERE"}[/size][/center]
[center]Date of Death: ${C}[/center]
[center]${I==="Unidentified"?"Approx Age":"Age"}: ${w||"[AGE HERE]"}[/center][/divbox]

[table]
[tr]
[td bgcolor=#E6E6E6][bold]Case Number[/bold]: ${A}[/td]
[td bgcolor=#E6E6E6][bold]Case Status[/bold]: ${n||""}[/td]
[td bgcolor=#E6E6E6][bold]Body Status[/bold]: ${r||""}[/td]
[/tr]
[tr]
[td bgcolor=#E6E6E6][bold]Sex[/bold]: ${s||""}[/td]
[td bgcolor=#E6E6E6][bold]Ethnicity[/bold]: ${o||""}[/td]
[/tr]
[/table]

[table]
[tr]
[td bgcolor=#E6E6E6][bold]Place of Death[/bold]: ${a||""}[/td]
[td bgcolor=#E6E6E6][bold]Manner[/bold]: ${l||""}[/td]
[/tr]
[tr]
[td bgcolor=#E6E6E6][bold]Investigator[/bold]: ${d||""}[/td]
[td bgcolor=#E6E6E6][bold]Chief Medical Examiner[/bold]: ${u||""}[/td]
[/tr]
[/table]

${v}

[divbox=#4D4D4D][center][b]These public records are of disclosed cases involving a Medical Examiner from the Department of Pathology & Forensic Medicine only. 
These are not records of every death that occurs in Los Santos County.

For further inquiries into any cases or for further documentation:
The Chief/Deputy Chief Medical Examiner-Coroner can be emailed through PHMC's online portal [url=https://phmc.gta.world/ucp.php?i=pm&mode=compose]HERE[/url].
PHMC's landline can be reached through the number 50056 for any physical records or the next-of-kin process.[/b][/center][/divbox]`},HN=t=>{const{recruitmentPosition:e,applicantTitleAndFullName:n,applicantGenderOtherText:r,applicantAddress:s,applicantContactDetails:o,applicantMedicalConditions:a,applicantSchoolName:l,applicantEnrollmentTerm:d,applicantMajor:u,applicantLanguages:p,applicantPrevEmployment:f,applicantPrevDuties:g,applicantPrevDismissalReason:S,applicantMotivationLetter:_,oocUcpName:I,oocForumName:F,oocDiscord:P,oocTimezone:k,oocMedicalExperience:D,oocAdminRecordLink:R,oocStatsLink:$,charBackground:O,positionDetailsData:E,genderMale:y,genderFemale:w,genderOther:N,locationPHMC:v,locationPBC:A,citizenUS:C,citizenPermanent:M,citizenNone:B,eduHighSchool:j,eduCertificate:V,eduDiploma:q,eduAssociate:Y,eduBachelor:ue,eduMaster:te,eduDoctorate:se,applicantDOB:X,applicantBirthPlace:Z}=t,re=E||{};let he="Position (Please Select)",be="https://phmc.gta.world/viewforum.php?f=14";if(t.recruitmentPosition&&Object.keys(re).length>0){const Re=t.recruitmentPosition;re[Re]?(he=re[Re].displayName,be=re[Re].url):(he=Re,console.warn(`Position "${Re}" not found in positionDetailsData from Firebase. Using default URL.`))}else t.recruitmentPosition&&(he=t.recruitmentPosition,console.warn(`positionDetailsData is empty or not provided. Using default URL for "${t.recruitmentPosition}".`));return`[imageleft]https://i.ibb.co/nMgfpMcv/phmc-curve.png[/imageleft] [b][size=110]Pillbox Hill Medical Center[/size][/b] 
Career Center [center][/center]
[center]Applying as:[/center]
[center][size=150][b]${he}[/b][/size][/center]
[divboxcolor=black][url=${be}][color=#FF0000]>[/color] [color=#FFFFFF]Back to the job posting[/color][/url][/divboxcolor]
[br][/br]
[divbox=na][list=none][b][size=110][color=#FF0000]1[/color].  Personal Information[/size][/b][/list]
[hr][/hr]
[list=none][b][color=#FF0000]1.1[/color]  Title & Full Name:[/b] [i]${n||"ANSWER"}[/i]
[b][color=#FF0000]1.2[/color]  Gender:[/b] [i](add a c, where applicable like so cb[color=#FF0000][u][b]c[/b][/u][/color]) [/i]
[list=none][cb${y?"c":""}] Male
[cb${w?"c":""}] Female
[cb${N?"c":""}] Other: ${N&&r?r:""}
[/list]
[b][color=#FF0000]1.3[/color] Date & Place of Birth:[/b] [i]${X||"DD/MMM/YYYY"} in ${Z||"Birth Place"}[/i]
[b][color=#FF0000]1.4[/color]  Address:[/b] [i]${s||"ANSWER"}[/i]
[b][color=#FF0000]1.5[/color]  Contact Details:[/b] [i]${o||"ANSWER"}[/i]
[b][color=#FF0000]1.6[/color]  Desired Employment Location:[/b] [i](add a c, where applicable like so cb[color=#FF0000][u][b]c[/b][/u][/color]) [/i]
[list=none][cb${v?"c":""}] Pillbox Hill Medical Center (City of Los Santos)
[cb${A?"c":""}] PHMC Paleto Bay Clinic (Paleto Bay)
[/list]
[b][color=#FF0000]1.7[/color] Have you been diagnosed with a medical condition, allergies, or prescribed any medication:[/b] [i]${a||"ANSWER"}[/i]
[b][color=#FF0000]1.8[/color]  Citizenship:[/b] [i](add a c, where applicable like so cb[color=#FF0000][u][b]c[/b][/u][/color]) [/i]
[list=none][cb${C?"c":""}] United States Citizen
[cb${M?"c":""}] Permanent resident alien status and applied for U.S. Citizenship
[cb${B?"c":""}] None of the above
[br][/br][/list][/list][/divbox]
[br][/br]
[divbox=na][list=none][b][size=110][color=#FF0000]2[/color].  Educational Background[/size][/b][/list]
[hr][/hr]
[list=none][b][color=#FF0000]2.1[/color] Highest Level of Education:[/b] [i](add a c, where applicable like so cb[color=#FF0000][u][b]c[/b][/u][/color]) [/i]
[list=none]
[cb${j?"c":""}] High School Diploma
[cb${V?"c":""}] Certificate (Sub-bachelor or vocational)
[cb${q?"c":""}] Diploma (Sub-bachelor or vocational)
[cb${Y?"c":""}] Associate Degree
[cb${ue?"c":""}] Bachelor's Degree
[cb${te?"c":""}] Master's Degree
[cb${se?"c":""}] Doctorate
[/list]
[b][color=#FF0000]2.2[/color] School of Attendance:[/b] 
[list=none][color=#FF0000][b]2.2.1[/color] School Name:[/b]  [i]${l||"ANSWER"}[/i]
[color=#FF0000][b]2.2.2[/color] Enrollment Term:[/b]  [i]${d||"DD/MMM/YYYY to DD/MMM/YYYY"}[/i]
[color=#FF0000][b]2.2.3[/color] Major Course of Study:[/b] [i]${u||"ANSWER"}[/i]
[/list]
[b][color=#FF0000]2.3[/color] Additional Languages:[/b] [i]${p||"ANSWER"}[/i][/list]
[br][/br][/divbox]
[divbox=na][list=none][b][size=110][color=#FF0000]3[/color].  Employment History[/size][/b][/list]
[hr][/hr]
[list=none][b][color=#FF0000]3.1[/color] Previous Employment:[/b] [i]${f||"ROLE at COMPANY between DD/MMM/YYYY to DD/MMM/YYYY"}[/i]
[b][color=#FF0000]3.2[/color] Duties:[/b] [i]${g||"ANSWER"}[/i]
[b][color=#FF0000]3.3[/color] Reason for Dismissal:[/b] [i]${S||"ANSWER"}[/i][/list]
[br][/br][/divbox]
[divbox=na][list=none][b][size=110][color=#FF0000]4[/color].  Motivational Letter[/size][/b][/list]
[hr][/hr]
[list=none][b][color=#FF0000]4.1[/color] Submit your motivational letter, describing why you wish to join us, why we should choose you rather than someone else, and why the qualities required from this job correspond to you :[/b] i[/i]
[quote][i]${_||"ANSWER HERE"}[/i][/quote][/list]
[br][/br][/divbox]
[divbox=na][list=none][b][size=110][color=#FF0000]5[/color].  (( Out of Character information ))[/size][/b][/list]
[hr][/hr]
[list=none][b][color=#FF0000]5.1[/color] User Control Panel (UCP) Username:[/b] [i]${I||"ANSWER"}[/i]
[b][color=#FF0000]5.2[/color] GTA:W Forum Account Name:[/b] [i]${F||"ANSWER"}[/i]
[b][color=#FF0000]5.3[/color] Discord Name:[/b] [i]${P||"ANSWER"}[/i]
[b][color=#FF0000]5.4[/color] Timezone:[/b] [i]${k||"ANSWER"}[/i]
[b][color=#FF0000]5.5[/color] Do you have any real life medical experience or have you roleplayed in medical factions in the past?:[/b] [i]${D||"ANSWER"}[/i]
[b][color=#FF0000]5.6[/color] [u]Unedited[/u] Screenshot of your Admin Record with the current date & time displayed:[/b]
[list=none][altspoiler=Admin Record][img]${R||"LINK"}[/img][/altspoiler][/list]
[b][color=#FF0000]5.7[/color] Provide a screenshot of your character's statistics (/stats) which you're applying with:[/b] 
[list=none][altspoiler=Stats][img]${$||"LINK"}[/img][/altspoiler][/list]
[b][color=#FF0000]5.8[/color] Provide your character's background story:[/b]
[quote][i]${O||"ANSWER HERE"}[/i][/quote][/list][/divbox]
[divboxcolor=black][center][url=https://phmc.gta.world/viewforum.php?f=18][color=#FF0000]>[/color] [color=#FFFFFF]Medical Faculty[/url] |[/color]  [url=https://phmc.gta.world/viewtopic.php?t=14][color=#FF0000]>[/color] [color=#FFFFFF]Employment Information[/url] |[/color] [url=https://phmc.gta.world/viewforum.php?f=111][color=#FF0000]>[/color]  [color=#FFFFFF]Visitor Guidelines[/color][/url][/center][/divboxcolor]`},GN=t=>{const{recruitmentPosition:e,applicantTitleAndFullName:n,applicantGenderOtherText:r,applicantDOBAndPlace:s,applicantAddress:o,applicantContactDetails:a,applicantMedicalConditions:l,applicantSchoolName:d,applicantEnrollmentTerm:u,applicantMajor:p,applicantLanguages:f,applicantPrevEmployment:g,applicantPrevDuties:S,applicantPrevDismissalReason:_,applicantMotivationLetter:I,oocUcpName:F,oocForumName:P,oocDiscord:k,oocTimezone:D,oocMedicalExperience:R,oocAdminRecordLink:$,oocStatsLink:O,charBackground:E,genderMale:y,genderFemale:w,genderOther:N,locationPHMC:v,locationPBC:A,citizenUS:C,citizenPermanent:M,citizenNone:B,eduHighSchool:j,eduCertificate:V,eduDiploma:q,eduAssociate:Y,eduBachelor:ue,eduMaster:te,eduDoctorate:se}=t,X=t.positionDetailsData||{};let Z="Position (Please Select)",re="https://phmc.gta.world/viewforum.php?f=14";if(t.recruitmentPosition&&Object.keys(X).length>0){const Pe=t.recruitmentPosition;X[Pe]?(Z=X[Pe].displayName,re=X[Pe].url):(Z=Pe,console.warn(`Position "${Pe}" not found in positionDetailsData from Firebase. Using default URL.`))}else t.recruitmentPosition&&(Z=t.recruitmentPosition,console.warn(`positionDetailsData is empty or not provided. Using default URL for "${t.recruitmentPosition}".`));const he=Z!=="Position (Please Select)"?Z:"Psych Application";let be="";return t.recruitmentPosition==="Counseling Psychologist"||t.recruitmentPosition==="Psychologist"?be=`[b][color=#FF0000]1.6[/color] Have you been diagnosed with a medical condition, allergies, or prescribed any medication:[/b] [i]${l||"ANSWER"}[/i]
[b][color=#FF0000]1.7[/color]  Citizenship:[/b] [i](add a c, where applicable like so cb[color=#FF0000][u][b]c[/b][/u][/color]) [/i]
[list=none][cb${C?"c":""}] United States Citizen
[cb${M?"c":""}] Permanent resident alien status and applied for U.S. Citizenship 
[cb${B?"c":""}] None of the above
[br][/br][/list]`:be=`[b][color=#FF0000]1.6[/color]  Desired Employment Location:[/b] [i](add a c, where applicable like so cb[color=#FF0000][u][b]c[/b][/u][/color]) [/i]
[list=none][cb${v?"c":""}] Pillbox Hill Medical Center (City of Los Santos)
[cb${A?"c":""}] PHMC Paleto Bay Clinic (Paleto Bay)
[/list]`,`[imageleft]https://i.ibb.co/nMgfpMcv/phmc-curve.png[/imageleft] [b][size=110]Pillbox Hill Medical Center[/size][/b] 
Career Center [center][/center]
[center]Applying as:[/center]
[center][size=150][b]${he}[/b][/size][/center]
[divboxcolor=black][url=${re}][color=#FF0000]>[/color] [color=#FFFFFF]Back to the job posting[/color][/url][/divboxcolor]
[br][/br]
[divbox=na][list=none][b][size=110][color=#FF0000]1[/color].  Personal Information[/size][/b][/list]
[hr][/hr]
[list=none][b][color=#FF0000]1.1[/color]  Title & Full Name:[/b] [i]${n||"ANSWER"}[/i]
[b][color=#FF0000]1.2[/color]  Gender:[/b] [i](add a c, where applicable like so cb[color=#FF0000][u][b]c[/b][/u][/color]) [/i]
[list=none][cb${y?"c":""}] Male
[cb${w?"c":""}] Female
[cb${N?"c":""}] Other: ${N&&r?r:""}
[/list]
[b][color=#FF0000]1.3[/color] Date & Place of Birth:[/b] [i]${s||"DD/MMM/YYYY in CITY"}[/i]
[b][color=#FF0000]1.4[/color]  Address:[/b] [i]${o||"ANSWER"}[/i]
[b][color=#FF0000]1.5[/color]  Contact Details:[/b] [i]${a||"ANSWER"}[/i]
${be}
[/list][/divbox]
[br][/br]
[divbox=na][list=none][b][size=110][color=#FF0000]2[/color].  Educational Background[/size][/b][/list]
[hr][/hr]
[list=none][b][color=#FF0000]2.1[/color] Highest Level of Education:[/b] [i](add a c, where applicable like so cb[color=#FF0000][u][b]c[/b][/u][/color]) [/i]
[list=none]
[cb${j?"c":""}] High School Diploma
[cb${V?"c":""}] Certificate (Sub-bachelor or vocational)
[cb${q?"c":""}] Diploma (Sub-bachelor or vocational)
[cb${Y?"c":""}] Associate Degree
[cb${ue?"c":""}] Bachelor's Degree
[cb${te?"c":""}] Master's Degree
[cb${se?"c":""}] Doctorate
[/list]
[b][color=#FF0000]2.2[/color] School of Attendance:[/b] 
[list=none][color=#FF0000][b]2.2.1[/color] School Name:[/b]  [i]${d||"ANSWER"}[/i]
[color=#FF0000][b]2.2.2[/color] Enrollment Term:[/b]  [i]${u||"DD/MMM/YYYY to DD/MMM/YYYY"}[/i]
[color=#FF0000][b]2.2.3[/color] Major Course of Study:[/b] [i]${p||"ANSWER"}[/i]
[/list]
[b][color=#FF0000]2.3[/color] Additional Languages:[/b] [i]${f||"ANSWER"}[/i][/list]
[br][/br][/divbox]
[divbox=na][list=none][b][size=110][color=#FF0000]3[/color].  Employment History[/size][/b][/list]
[hr][/hr]
[list=none][b][color=#FF0000]3.1[/color] Previous Employment:[/b] [i]${g||"ROLE at COMPANY between DD/MMM/YYYY to DD/MMM/YYYY"}[/i]
[b][color=#FF0000]3.2[/color] Duties:[/b] [i]${S||"ANSWER"}[/i]
[b][color=#FF0000]3.3[/color] Reason for Dismissal:[/b] [i]${_||"ANSWER"}[/i][/list]
[br][/br][/divbox]
[divbox=na][list=none][b][size=110][color=#FF0000]4[/color].  Motivational Letter[/size][/b][/list]
[hr][/hr]
[list=none][b][color=#FF0000]4.1[/color] Submit your motivational letter, describing why you wish to join us, why we should choose you rather than someone else, and why the qualities required from this job correspond to you :[/b] i[/i]
[quote][i]${I||"ANSWER HERE"}[/i][/quote][/list]
[br][/br][/divbox]
[divbox=na][list=none][b][size=110][color=#FF0000]5[/color].  (( Out of Character information ))[/size][/b][/list]
[hr][/hr]
[list=none][b][color=#FF0000]5.1[/color] User Control Panel (UCP) Username:[/b] [i]${F||"ANSWER"}[/i]
[b][color=#FF0000]5.2[/color] GTA:W Forum Account Name:[/b] [i]${P||"ANSWER"}[/i]
[b][color=#FF0000]5.3[/color] Discord Name:[/b] [i]${k||"ANSWER"}[/i]
[b][color=#FF0000]5.4[/color] Timezone:[/b] [i]${D||"ANSWER"}[/i]
[b][color=#FF0000]5.5[/color] Do you have any real life medical experience or have you roleplayed in medical factions in the past?:[/b] [i]${R||"ANSWER"}[/i]
[b][color=#FF0000]5.6[/color] [u]Unedited[/u] Screenshot of your Admin Record with the current date & time displayed:[/b]
[list=none][altspoiler=Admin Record][img]${$||"LINK"}[/img][/altspoiler][/list]
[b][color=#FF0000]5.7[/color] Provide a screenshot of your character's statistics (/stats) which you're applying with:[/b] 
[list=none][altspoiler=Stats][img]${O||"LINK"}[/img][/altspoiler][/list]
[b][color=#FF0000]5.8[/color] Provide your character's background story:[/b]
[quote][i]${E||"ANSWER HERE"}[/i][/quote][/list][/divbox]
[divboxcolor=black][center][url=https://phmc.gta.world/viewforum.php?f=19][color=#FF0000]>[/color] [color=#FFFFFF]Mental Health Department[/url] |[/color]  [url=https://phmc.gta.world/viewtopic.php?t=14][color=#FF0000]>[/color] [color=#FFFFFF]Employment Information[/url] |[/color] [url=https://phmc.gta.world/viewforum.php?f=111][color=#FF0000]>[/color]  [color=#FFFFFF]Visitor Guidelines[/color][/url][/center][/divboxcolor]`},WN=t=>{const{recruitmentPosition:e,applicantTitleAndFullName:n,applicantGenderOtherText:r,applicantDOBAndPlace:s,applicantAddress:o,applicantContactDetails:a,applicantMedicalConditions:l,citizenUS:d,citizenPermanent:u,citizenNone:p,genderMale:f,genderFemale:g,genderOther:S,eduHighSchool:_,eduCertificate:I,eduDiploma:F,eduAssociate:P,eduBachelor:k,eduMaster:D,eduDoctorate:R,applicantSchoolName:$,applicantEnrollmentTerm:O,applicantMajor:E,applicantLanguages:y,applicantPrevEmployment:w,applicantPrevDuties:N,applicantPrevDismissalReason:v,applicantMotivationLetter:A,oocUcpName:C,oocForumName:M,oocDiscord:B,oocTimezone:j,oocAdminRecordLink:V,oocStatsLink:q,charBackground:Y,positionDetailsData:ue}=t,te=ue||{};let se="Position (Please Select)",X="https://phmc.gta.world/viewforum.php?f=14";if(e&&Object.keys(te).length>0){const re=e;te[re]?(se=te[re].displayName||re,X=te[re].url||X):(se=re,console.warn(`Admin Position "${re}" not found in adminPositionDetailsData. Using default URL and position key as display name.`))}else e&&(se=e,console.warn(`adminPositionDetailsData is empty or not provided. Using default URL for "${e}".`));return`[imageleft]https://i.ibb.co/nMgfpMcv/phmc-curve.png[/imageleft] [b][size=110]Pillbox Hill Medical Center[/size][/b] 
Career Center [center][/center]
[center]Applying as:[/center]
[center][size=150][b]${se}[/b][/size][/center]
[divboxcolor=black][url=${X}][color=#FF0000]>[/color] [color=#FFFFFF]Back to the job posting[/color][/url][/divboxcolor]
[br][/br]
[divbox=na][list=none][b][size=110][color=#FF0000]1[/color].  Personal Information[/size][/b][/list]
[hr][/hr]
[list=none][b][color=#FF0000]1.1[/color]  Title & Full Name:[/b] [i]${n||"ANSWER"}[/i]
[b][color=#FF0000]1.2[/color]  Gender:[/b] [i](add a c, where applicable like so cb[color=#FF0000][u][b]c[/b][/u][/color]) [/i]
[list=none][cb${f?"c":""}] Male
[cb${g?"c":""}] Female
[cb${S?"c":""}] Other: ${S&&r?r:"N/A"}
[/list]
[b][color=#FF0000]1.3[/color] Date & Place of Birth:[/b] [i]${s||"DD/MMM/YYYY in CITY"}[/i]
[b][color=#FF0000]1.4[/color]  Address:[/b] [i]${o||"ANSWER"}[/i]
[b][color=#FF0000]1.5[/color]  Contact Details:[/b] [i]${a||"ANSWER"}[/i]
[b][color=#FF0000]1.6[/color] Do you have a diagnosed medical condition?:[/b] [i]${l||"ANSWER"}[/i]
[b][color=#FF0000]1.7[/color]  Citizenship:[/b] [i](add a c, where applicable like so cb[color=#FF0000][u][b]c[/b][/u][/color]) [/i]
[list=none][cb${d?"c":""}] United States Citizen
[cb${u?"c":""}] Permanent resident alien status and applied for U.S. Citizenship 
[cb${p?"c":""}] None of the above
[br][/br][/list][/list][/divbox]
[br][/br]
[divbox=na][list=none][b][size=110][color=#FF0000]2[/color].  Educational Background[/size][/b][/list]
[hr][/hr]
[list=none][b][color=#FF0000]2.1[/color] Highest Level of Education:[/b] [i](add a c, where applicable like so cb[color=#FF0000][u][b]c[/b][/u][/color]) [/i]
[list=none]
[cb${_?"c":""}] High School Diploma
[cb${I?"c":""}] Certificate (Sub-bachelor or vocational)
[cb${F?"c":""}] Diploma (Sub-bachelor or vocational)
[cb${P?"c":""}] Associate Degree
[cb${k?"c":""}] Bachelor's Degree
[cb${D?"c":""}] Master's Degree
[cb${R?"c":""}] Doctorate
[/list]
[b][color=#FF0000]2.2[/color] School of Attendance:[/b] 
[list=none][color=#FF0000][b]2.2.1[/color] School Name:[/b]  [i]${$||"ANSWER"}[/i]
[color=#FF0000][b]2.2.2[/color] Enrollment Term:[/b]  [i]${O||"DD/MMM/YYYY to DD/MMM/YYYY"}[/i]
[color=#FF0000][b]2.2.3[/color] Major Course of Study:[/b] [i]${E||"ANSWER"}[/i]
[/list]
[b][color=#FF0000]2.3[/color] Additional Languages:[/b] [i]${y||"ANSWER"}[/i][/list]
[br][/br][/divbox]
[divbox=na][list=none][b][size=110][color=#FF0000]3[/color].  Employment History[/size][/b][/list]
[hr][/hr]
[list=none][b][color=#FF0000]3.1[/color] Previous Employment:[/b] [i]${w||"ROLE at COMPANY between DD/MMM/YYYY to DD/MMM/YYYY"}[/i]
[b][color=#FF0000]3.2[/color] Duties:[/b] [i]${N||"ANSWER"}[/i]
[b][color=#FF0000]3.3[/color] Reason for Dismissal:[/b] [i]${v||"ANSWER"}[/i][/list]
[br][/br][/divbox]
[divbox=na][list=none][b][size=110][color=#FF0000]4[/color].  Motivational Letter[/size][/b][/list]
[hr][/hr]
[list=none][b][color=#FF0000]4.1[/color] Submit your motivational letter, describing why you wish to join us, why we should choose you rather than someone else, and why the qualities required from this job correspond to you :[/b] i[/i]
[quote][i]${A||"ANSWER HERE"}[/i][/quote][/list]
[br][/br][/divbox]
[divbox=na][list=none][b][size=110][color=#FF0000]5[/color].  (( Out of Character information ))[/size][/b][/list]
[hr][/hr]
[list=none][b][color=#FF0000]5.1[/color] User Control Panel (UCP) Username:[/b] [i]${C||"ANSWER"}[/i]
[b][color=#FF0000]5.2[/color] GTA:W Forum Account Name:[/b] [i]${M||"ANSWER"}[/i]
[b][color=#FF0000]5.3[/color] Discord Name:[/b] [i]${B||"ANSWER"}[/i]
[b][color=#FF0000]5.4[/color] Timezone:[/b] [i]${j||"ANSWER"}[/i]
[b][color=#FF0000]5.5[/color] [u]Unedited[/u] Screenshot of your Admin Record with the current date & time displayed:[/b]
[list=none][altspoiler=Admin Record][img]${V||"LINK"}[/img][/altspoiler][/list]
[b][color=#FF0000]5.6[/color] Provide a screenshot of your character's statistics (/stats) which you're applying with:[/b] 
[list=none][altspoiler=Stats][img]${q||"LINK"}[/img][/altspoiler][/list]
[b][color=#FF0000]5.7[/color] Provide your character's background story:[/b]
[quote][i]${Y||"ANSWER HERE"}[/i][/quote][/list][/divbox]
[divboxcolor=black][center][url=${X}][color=#FF0000]>[/color] [color=#FFFFFF]${se}[/url]  |[/color]  [url=https://phmc.gta.world/viewtopic.php?t=14][color=#FF0000]>[/color] [color=#FFFFFF]Employment Information[/url] |[/color] [url=https://phmc.gta.world/viewforum.php?f=111][color=#FF0000]>[/color]  [color=#FFFFFF]Visitor Guidelines[/color][/url][/center][/divboxcolor]`},zN=t=>{const{recruitmentPosition:e,applicantTitleAndFullName:n,applicantGenderOtherText:r,applicantDOBAndPlace:s,applicantAddress:o,applicantContactDetails:a,applicantMedicalConditions:l,applicantSchoolName:d,applicantEnrollmentTerm:u,applicantMajor:p,applicantLanguages:f,applicantPrevEmployment:g,applicantPrevDuties:S,applicantPrevDismissalReason:_,applicantMotivationLetter:I,oocUcpName:F,oocForumName:P,oocDiscord:k,oocTimezone:D,oocMedicalExperience:R,oocAdminRecordLink:$,oocStatsLink:O,charBackground:E,genderMale:y,genderFemale:w,genderOther:N,locationPHMC:v,locationPBC:A,citizenUS:C,citizenPermanent:M,citizenNone:B,eduHighSchool:j,eduCertificate:V,eduDiploma:q,eduAssociate:Y,eduBachelor:ue,eduMaster:te,eduDoctorate:se,positionDetailsData:X}=t,Z=X||{};let re="Position (Please Select)",he="https://phmc.gta.world/viewforum.php?f=17";if(e&&Object.keys(Z).length>0){const Je=e;Z[Je]?(re=Z[Je].displayName||Je,he=Z[Je].url||he):(re=Je,console.warn(`Nursing Position "${Je}" not found in nursePositionDetailsData. Using default URL.`))}else e&&(re=e,console.warn(`nursePositionDetailsData is empty or not provided. Using default URL for "${e}".`));let be="";e==="Registered Nurse"||e==="Nurse Practitioner"?be=`[b][color=#FF0000]1.6[/color]  Desired Employment Location:[/b] [i](add a c, where applicable like so cb[color=#FF0000][u][b]c[/b][/u][/color]) [/i]
[list=none][cb${v?"c":""}] Pillbox Hill Medical Center (City of Los Santos)
[cb${A?"c":""}] PHMC Paleto Bay Clinic (Paleto Bay)
[/list]
[b][color=#FF0000]1.7[/color] Have you been diagnosed with a medical condition, allergies, or prescribed any medication:[/b] [i]${l||"ANSWER"}[/i]
[b][color=#FF0000]1.8[/color]  Citizenship:[/b] [i](add a c, where applicable like so cb[color=#FF0000][u][b]c[/b][/u][/color]) [/i]
[list=none][cb${C?"c":""}] United States Citizen
[cb${M?"c":""}] Permanent resident alien status and applied for U.S. Citizenship 
[cb${B?"c":""}] None of the above
[br][/br][/list]`:be=`[b][color=#FF0000]1.6[/color] Have you been diagnosed with a medical condition, allergies, or prescribed any medication:[/b] [i]${l||"ANSWER"}[/i]
[b][color=#FF0000]1.7[/color]  Citizenship:[/b] [i](add a c, where applicable like so cb[color=#FF0000][u][b]c[/b][/u][/color]) [/i]
[list=none][cb${C?"c":""}] United States Citizen
[cb${M?"c":""}] Permanent resident alien status and applied for U.S. Citizenship 
[cb${B?"c":""}] None of the above
[br][/br][/list]`;const Re=Je=>Je?"c":"";return`[imageleft]https://i.ibb.co/nMgfpMcv/phmc-curve.png[/imageleft] [b][size=110]Pillbox Hill Medical Center[/size][/b] 
Career Center [center][/center]
[center]Applying as:[/center]
[center][size=150][b]${re}[/b][/size][/center]
[divboxcolor=black][url=${he}][color=#FF0000]>[/color] [color=#FFFFFF]Back to the job posting[/color][/url][/divboxcolor]
[br][/br]
[divbox=na][list=none][b][size=110][color=#FF0000]1[/color].  Personal Information[/size][/b][/list]
[hr][/hr]
[list=none][b][color=#FF0000]1.1[/color]  Title & Full Name:[/b] [i]${n||"ANSWER"}[/i]
[b][color=#FF0000]1.2[/color]  Gender:[/b] [i](add a c, where applicable like so cb[color=#FF0000][u][b]c[/b][/u][/color]) [/i]
[list=none][cb${y?"c":""}] Male
[cb${w?"c":""}] Female
[cb${N?"c":""}] Other: ${N&&r?r:""}
[/list]
[b][color=#FF0000]1.3[/color] Date & Place of Birth:[/b] [i]${s||"DD/MMM/YYYY in CITY"}[/i]
[b][color=#FF0000]1.4[/color]  Address:[/b] [i]${o||"ANSWER"}[/i]
[b][color=#FF0000]1.5[/color]  Contact Details:[/b] [i]${a||"ANSWER"}[/i]
${be}
[/list][/divbox]
[br][/br]
[divbox=na][list=none][b][size=110][color=#FF0000]2[/color].  Educational Background[/size][/b][/list]
[hr][/hr]
[list=none][b][color=#FF0000]2.1[/color] Highest Level of Education:[/b] [i](add a c, where applicable like so cb[color=#FF0000][u][b]c[/b][/u][/color]) [/i]
[list=none]
[cb${Re(j)}] High School Diploma
[cb${Re(V)}] Certificate (Sub-bachelor or vocational)
[cb${Re(q)}] Diploma (Sub-bachelor or vocational)
[cb${Re(Y)}] Associate Degree
[cb${Re(ue)}] Bachelor's Degree
[cb${Re(te)}] Master's Degree
[cb${Re(se)}] Doctorate
[/list]
[b][color=#FF0000]2.2[/color] School of Attendance:[/b] 
[list=none][color=#FF0000][b]2.2.1[/color] School Name:[/b]  [i]${d||"ANSWER"}[/i]
[color=#FF0000][b]2.2.2[/color] Enrollment Term:[/b]  [i]${u||"DD/MMM/YYYY to DD/MMM/YYYY"}[/i]
[color=#FF0000][b]2.2.3[/color] Major Course of Study:[/b] [i]${p||"ANSWER"}[/i]
[/list]
[b][color=#FF0000]2.3[/color] Additional Languages:[/b] [i]${f||"ANSWER"}[/i][/list]
[br][/br][/divbox]
[divbox=na][list=none][b][size=110][color=#FF0000]3[/color].  Employment History[/size][/b][/list]
[hr][/hr]
[list=none][b][color=#FF0000]3.1[/color] Previous Employment:[/b] [i]${g||"ROLE at COMPANY between DD/MMM/YYYY to DD/MMM/YYYY"}[/i]
[b][color=#FF0000]3.2[/color] Duties:[/b] [i]${S||"ANSWER"}[/i]
[b][color=#FF0000]3.3[/color] Reason for Dismissal:[/b] [i]${_||"ANSWER"}[/i][/list]
[br][/br][/divbox]
[divbox=na][list=none][b][size=110][color=#FF0000]4[/color].  Motivational Letter[/size][/b][/list]
[hr][/hr]
[list=none][b][color=#FF0000]4.1[/color] Submit your motivational letter, describing why you wish to join us, why we should choose you rather than someone else, and why the qualities required from this job correspond to you :[/b] i[/i]
[quote][i]${I||"ANSWER HERE"}[/i][/quote][/list]
[br][/br][/divbox]
[divbox=na][list=none][b][size=110][color=#FF0000]5[/color].  (( Out of Character information ))[/size][/b][/list]
[hr][/hr]
[list=none][b][color=#FF0000]5.1[/color] User Control Panel (UCP) Username:[/b] [i]${F||"ANSWER"}[/i]
[b][color=#FF0000]5.2[/color] GTA:W Forum Account Name:[/b] [i]${P||"ANSWER"}[/i]
[b][color=#FF0000]5.3[/color] Discord Name:[/b] [i]${k||"ANSWER"}[/i]
[b][color=#FF0000]5.4[/color] Timezone:[/b] [i]${D||"ANSWER"}[/i]
[b][color=#FF0000]5.5[/color] Do you have any real life medical experience or have you roleplayed in medical factions in the past? Describe in detail:[/b] [i]${R||"ANSWER"}[/i]
[b][color=#FF0000]5.6[/color] [u]Unedited[/u] Screenshot of your Admin Record with the current date & time displayed:[/b]
[list=none][altspoiler=Admin Record][img]${$||"LINK"}[/img][/altspoiler][/list]
[b][color=#FF0000]5.7[/color] Provide a screenshot of your character's statistics (/stats) which you're applying with:[/b] 
[list=none][altspoiler=Stats][img]${O||"LINK"}[/img][/altspoiler][/list]
[b][color=#FF0000]5.8[/color] Provide your character's background story:[/b]
[quote][i]${E||"ANSWER HERE"}[/i][/quote][/list][/divbox]
[divboxcolor=black][center][url=https://phmc.gta.world/viewforum.php?f=17][color=#FF0000]>[/color] [color=#FFFFFF]Nursing Department[/url] |[/color]  [url=https://phmc.gta.world/viewtopic.php?t=14][color=#FF0000]>[/color] [color=#FFFFFF]Employment Information[/url] |[/color] [url=https://phmc.gta.world/viewforum.php?f=111][color=#FF0000]>[/color]  [color=#FFFFFF]Visitor Guidelines[/color][/url][/center][/divboxcolor]`},qN=t=>{const{recruitmentPosition:e,applicantTitleAndFullName:n,applicantGenderOtherText:r,applicantDOBAndPlace:s,applicantAddress:o,applicantContactDetails:a,applicantMedicalConditions:l,citizenUS:d,citizenPermanent:u,citizenNone:p,genderMale:f,genderFemale:g,genderOther:S,eduHighSchool:_,eduCertificate:I,eduDiploma:F,eduAssociate:P,eduBachelor:k,eduMaster:D,eduDoctorate:R,applicantSchoolName:$,applicantEnrollmentTerm:O,applicantMajor:E,applicantLanguages:y,applicantPrevEmployment:w,applicantPrevDuties:N,applicantPrevDismissalReason:v,applicantMotivationLetter:A,oocUcpName:C,oocForumName:M,oocDiscord:B,oocTimezone:j,oocMedicalExperience:V,oocAdminRecordLink:q,oocStatsLink:Y,charBackground:ue,positionDetailsData:te}=t,se=te||{};let X="Position (Please Select)",Z="https://phmc.gta.world/viewforum.php?f=262";if(e&&Object.keys(se).length>0){const be=e;se[be]?(X=se[be].displayName||be,Z=se[be].url||Z):(X=be,console.warn(`Coroner Position "${be}" not found in coronerPositionDetailsData. Using default URL and position key as display name.`))}else e&&(X=e,console.warn(`coronerPositionDetailsData is empty or not provided. Using default URL for "${e}".`));const re=be=>be?"c":"";return`[imageleft]https://i.ibb.co/nMgfpMcv/phmc-curve.png[/imageleft] [b][size=110]Pillbox Hill Medical Center[/size][/b] 
Career Center [center][/center]
[center]Applying as:[/center]
[center][size=150][b]${X}[/b][/size][/center]
[divboxcolor=black][url=${Z}][color=#FF0000]>[/color] [color=#FFFFFF]Back to the job posting[/color][/url][/divboxcolor]
[br][/br]
[divbox=na][list=none][b][size=110][color=#FF0000]1[/color].  Personal Information[/size][/b][/list]
[hr][/hr]
[list=none][b][color=#FF0000]1.1[/color]  Title & Full Name:[/b] [i]${n||"ANSWER"}[/i]
[b][color=#FF0000]1.2[/color]  Gender:[/b] [i](add a c, where applicable like so cb[color=#FF0000][u][b]c[/b][/u][/color]) [/i]
[list=none][cb${re(f)}] Male
[cb${re(g)}] Female
[cb${re(S)}] Other: ${S&&r?r:""}
[/list]
[b][color=#FF0000]1.3[/color] Date & Place of Birth:[/b] [i]${s||"DD/MMM/YYYY in CITY"}[/i]
[b][color=#FF0000]1.4[/color]  Address:[/b] [i]${o||"ANSWER"}[/i]
[b][color=#FF0000]1.5[/color]  Contact Details:[/b] [i]${a||"ANSWER"}[/i]
[b][color=#FF0000]1.6[/color] Do you have a diagnosed medical condition?:[/b] [i]${l||"ANSWER"}[/i]
[b][color=#FF0000]1.7[/color]  Citizenship:[/b] [i](add a c, where applicable like so cb[color=#FF0000][u][b]c[/b][/u][/color]) [/i]
[list=none][cb${re(d)}] United States Citizen
[cb${re(u)}] Permanent resident alien status and applied for U.S. Citizenship 
[cb${re(p)}] None of the above
[br][/br][/list][/list][/divbox]
[br][/br]
[divbox=na][list=none][b][size=110][color=#FF0000]2[/color].  Educational Background[/size][/b][/list]
[hr][/hr]
[list=none][b][color=#FF0000]2.1[/color] Highest Level of Education:[/b] [i](add a c, where applicable like so cb[color=#FF0000][u][b]c[/b][/u][/color]) [/i]
[list=none]
[cb${re(_)}] High School Diploma
[cb${re(I)}] Certificate (Sub-bachelor or vocational)
[cb${re(F)}] Diploma (Sub-bachelor or vocational)
[cb${re(P)}] Associate Degree
[cb${re(k)}] Bachelor's Degree
[cb${re(D)}] Master's Degree
[cb${re(R)}] Doctorate
[/list]
[b][color=#FF0000]2.2[/color] School of Attendance:[/b] 
[list=none][color=#FF0000][b]2.2.1[/color] School Name:[/b]  [i]${$||"ANSWER"}[/i]
[color=#FF0000][b]2.2.2[/color] Enrollment Term:[/b]  [i]${O||"DD/MMM/YYYY to DD/MMM/YYYY"}[/i]
[color=#FF0000][b]2.2.3[/color] Major Course of Study:[/b] [i]${E||"ANSWER"}[/i]
[/list]
[b][color=#FF0000]2.3[/color] Additional Languages:[/b] [i]${y||"ANSWER"}[/i][/list]
[br][/br][/divbox]
[divbox=na][list=none][b][size=110][color=#FF0000]3[/color].  Employment History[/size][/b][/list]
[hr][/hr]
[list=none][b][color=#FF0000]3.1[/color] Previous Employment:[/b] [i]${w||"ROLE at COMPANY between DD/MMM/YYYY to DD/MMM/YYYY"}[/i]
[b][color=#FF0000]3.2[/color] Duties:[/b] [i]${N||"ANSWER"}[/i]
[b][color=#FF0000]3.3[/color] Reason for Dismissal:[/b] [i]${v||"ANSWER"}[/i][/list]
[br][/br][/divbox]
[divbox=na][list=none][b][size=110][color=#FF0000]4[/color].  Motivational Letter[/size][/b][/list]
[hr][/hr]
[list=none][b][color=#FF0000]4.1[/color] Submit your motivational letter, describing why you wish to join us, why we should choose you rather than someone else, and why the qualities required from this job correspond to you :[/b] i[/i]
[quote][i]${A||"ANSWER HERE"}[/i][/quote][/list]
[br][/br][/divbox]
[divbox=na][list=none][b][size=110][color=#FF0000]5[/color].  (( Out of Character information ))[/size][/b][/list]
[hr][/hr]
[list=none][b][color=#FF0000]5.1[/color] User Control Panel (UCP) Username:[/b] [i]${C||"ANSWER"}[/i]
[b][color=#FF0000]5.2[/color] GTA:W Forum Account Name:[/b] [i]${M||"ANSWER"}[/i]
[b][color=#FF0000]5.3[/color] Discord Name:[/b] [i]${B||"ANSWER"}[/i]
[b][color=#FF0000]5.4[/color] Timezone:[/b] [i]${j||"ANSWER"}[/i]
[b][color=#FF0000]5.5[/color] Do you have any real life medical experience or have you roleplayed in medical factions in the past?:[/b] [i]${V||"ANSWER"}[/i]
[b][color=#FF0000]5.6[/color] [u]Unedited[/u] Screenshot of your Admin Record with the current date & time displayed:[/b]
[list=none][altspoiler=Admin Record][img]${q||"LINK"}[/img][/altspoiler][/list]
[b][color=#FF0000]5.7[/color] Provide a screenshot of your character's statistics (/stats) which you're applying with:[/b] 
[list=none][altspoiler=Stats][img]${Y||"LINK"}[/img][/altspoiler][/list]
[b][color=#FF0000]5.8[/color] Provide your character's background story:[/b]
[quote][i]${ue||"ANSWER HERE"}[/i][/quote][/list][/divbox]
[divboxcolor=black][center][url=https://phmc.gta.world/viewforum.php?f=262][color=#FF0000]>[/color] [color=#FFFFFF]Department of Forensic Medicine & Pathology[/url]  |[/color]  [url=https://phmc.gta.world/viewtopic.php?t=14][color=#FF0000]>[/color] [color=#FFFFFF]Employment Information[/url] |[/color] [url=https://phmc.gta.world/viewforum.php?f=111][color=#FF0000]>[/color]  [color=#FFFFFF]Visitor Guidelines[/color][/url][/center][/divboxcolor]`},VN=t=>{const{recruitmentPosition:e,applicantTitleAndFullName:n,applicantGenderOtherText:r,applicantDOBAndPlace:s,applicantAddress:o,applicantContactDetails:a,applicantMedicalConditions:l,applicantSchoolName:d,applicantEnrollmentTerm:u,applicantMajor:p,applicantLanguages:f,applicantPrevEmployment:g,applicantPrevDuties:S,applicantPrevDismissalReason:_,applicantMotivationLetter:I,oocUcpName:F,oocForumName:P,oocDiscord:k,oocTimezone:D,oocMedicalExperience:R,oocAdminRecordLink:$,oocStatsLink:O,charBackground:E,genderMale:y,genderFemale:w,genderOther:N,citizenUS:v,citizenPermanent:A,citizenNone:C,eduHighSchool:M,eduCertificate:B,eduDiploma:j,eduAssociate:V,eduBachelor:q,eduMaster:Y,eduDoctorate:ue,selectOptions:te,emsLicenseLink:se,emsPartTimeReason:X,oocOtherFactionDfpLfm:Z}=t,re=te?.emsPositionDetailsData||{};console.log("DEBUG: positionDetailsMap in generateEMS.js:",re);let he="Position (Please Select)",be="https://phmc.gta.world/viewforum.php?f=168";if(e&&Object.keys(re).length>0){const we=e.toUpperCase();re[we]?(console.log(`positionDetailsMap[${we}]`,re[we]),he=re[we].displayName||we,be=re[we].url||be):(he=we,console.warn(`EMS Position "${we}" not found in positionDetailsMap. Using default URL.`))}else e&&(he=e,console.warn(`positionDetailsMap is empty or not provided. Using default URL for "${e}".`));const ge=we=>we?"c":"";let Re="";const Pe=`[divbox=na][list=none][b][size=110][color=#FF0000]3[/color].  Employment History[/size][/b][/list]
[hr][/hr]
[list=none][b][color=#FF0000]3.1[/color] Previous Employment:[/b] [i]${g||"ROLE at COMPANY between DD/MMM/YYYY to DD/MMM/YYYY"}[/i]
[b][color=#FF0000]3.2[/color] Duties:[/b] [i]${S||"ANSWER"}[/i]
[b][color=#FF0000]3.3[/color] Reason for Dismissal:[/b] [i]${_||"ANSWER"}[/i][/list]
[br][/br][/divbox]
[divbox=na][list=none][b][size=110][color=#FF0000]4[/color].  Motivational Letter[/size][/b][/list]
[hr][/hr]
[list=none][b][color=#FF0000]4.1[/color] Submit your motivational letter, describing why you wish to join us, why we should choose you rather than someone else, and why the qualities required from this job correspond to you :[/b] i[/i]
[quote][i]${I||"ANSWER HERE"}[/i][/quote][/list]
[br][/br][/divbox]`;if(e==="Paramedic")Re=Pe+`[divbox=na][list=none][b][size=110][color=#FF0000]5[/color].  (( Out of Character information ))[/size][/b][/list]
[hr][/hr]
[list=none][b][color=#FF0000]5.1[/color] User Control Panel (UCP) Username:[/b] [i]${F||"ANSWER"}[/i]
[b][color=#FF0000]5.2[/color] GTA:W Forum Account Name:[/b] [i]${P||"ANSWER"}[/i]
[b][color=#FF0000]5.3[/color] Discord Name:[/b] [i]${k||"ANSWER"}[/i]
[b][color=#FF0000]5.4[/color] Timezone:[/b] [i]${D||"ANSWER"}[/i]
[b][color=#FF0000]5.5[/color] Do you have any real life medical experience or have you roleplayed in medical factions in the past?:[/b] [i]${R||"ANSWER"}[/i]
[b][color=#FF0000]5.6[/color] [u]Unedited[/u] Screenshot of your Admin Record with the current date & time displayed:[/b]
[list=none][altspoiler=Admin Record][img]${$||"LINK"}[/img][/altspoiler][/list]
[b][color=#FF0000]5.7[/color] Provide a screenshot of your character's statistics (/stats) which you're applying with:[/b] 
[list=none][altspoiler=Stats][img]${O||"LINK"}[/img][/altspoiler][/list]
[b][color=#FF0000]5.8[/color] Provide your character's background story:[/b]
[quote][i]${E||"ANSWER HERE"}[/i][/quote][/list][/divbox]`;else if(e==="EMT"){const we=`[b][color=#FF0000]5.1[/color] User Control Panel (UCP) Username:[/b] [i]${F||"ANSWER"}[/i]
[b][color=#FF0000]5.2[/color] [u]Unedited[/u] Screenshot of your Admin Record:[/b]
[list=none][altspoiler=Admin Record][img]${$||"LINK"}[/img][/altspoiler][/list]
[b][color=#FF0000]5.3[/color] GTA:W Forum Account Name:[/b] [i]${P||"ANSWER"}[/i]
[b][color=#FF0000]5.4[/color] Discord Name:[/b] [i]${k||"ANSWER"}[/i]
[b][color=#FF0000]5.5[/color] Timezone:[/b] [i]${D||"ANSWER"}[/i]
[b][color=#FF0000]5.6[/color] Do you have any real life medical experience or have you roleplayed in medical factions in the past?:[/b] [i]${R||"ANSWER"}[/i]
[b][color=#FF0000]5.7[/color] Provide a screenshot of your character's statistics (/stats) which you're applying with:[/b] 
[list=none][altspoiler=Stats][img]${O||"LINK"}[/img][/altspoiler][/list]
[b][color=#FF0000]5.8[/color] Provide your character's background story:[/b]
[quote][i]${E||"ANSWER HERE"}[/i][/quote]`;Re=Pe+`[divbox=na][list=none][b][size=110][color=#FF0000]5[/color].  (( Out of Character information ))[/size][/b][/list]
[hr][/hr]
[list=none]${we}[/list][/divbox]`}else if(e==="EMT Trainee")Re=`[divbox=na][list=none][b][size=110][color=#FF0000]4[/color].  (( Out of Character information ))[/size][/b][/list]
[hr][/hr]
[list=none][b][color=#FF0000]4.1[/color] User Control Panel (UCP) Username:[/b] [i]${F||"ANSWER"}[/i]
[b][color=#FF0000]4.2[/color] GTA:W Forum Account Name:[/b] [i]${P||"ANSWER"}[/i]
[b][color=#FF0000]4.3[/color] Discord Name:[/b] [i]${k||"ANSWER"}[/i]
[b][color=#FF0000]4.4[/color] Timezone:[/b] [i]${D||"ANSWER"}[/i]
[b][color=#FF0000]4.5[/color] Do you have any real life medical experience or have you roleplayed in medical factions in the past?:[/b] [i]${R||"ANSWER"}[/i]
[b][color=#FF0000]4.6[/color] [u]Unedited[/u] Screenshot of your Admin Record with the current date & time displayed:[/b]
[list=none][altspoiler=Admin Record][img]${$||"LINK"}[/img][/altspoiler][/list]
[b][color=#FF0000]4.7[/color] Provide a screenshot of your character's statistics (/stats) which you're applying with:[/b] 
[list=none][altspoiler=Stats][img]${O||"LINK"}[/img][/altspoiler][/list]
[b][color=#FF0000]4.8[/color] If you are a part of another official faction, please post a link to your DFP request from both [b]Pillbox Hill Medical Center[/b] [u]and[/u] your current faction. If utilizing the same character, permissions from LFM must be acquired and provided as well:[/b] [i]${Z||"ANSWER"}[/i]
[b][color=#FF0000]4.9[/color] Provide your character's background story:[/b]
[quote][i]${E||"ANSWER HERE"}[/i][/quote][/list][/divbox]`;else{const we=`[divbox=na][list=none][b][size=110][color=#FF0000]3[/color].  Licensing & Request Information[/size][/b][/list]
[hr][/hr]
[list=none][b][color=#FF0000]3.1[/color] Provide a copy of your Emergency Medical Technician license (( /licenses )):[/b] [i]${se||"ANSWER/LINK"}[/i]
[b][color=#FF0000]3.2[/color][/color] Please write a short paragraph about why you believe you should be offered a slot with our part-time program:
[quote][i]${X||"ANSWER HERE"}[/i][/quote][/list]
[br][/br][/divbox]`,Ge=`[divbox=na][list=none][b][size=110][color=#FF0000]4[/color].  (( Out of Character information ))[/size][/b][/list]
[hr][/hr]
[list=none][b][color=#FF0000]4.1[/color] User Control Panel (UCP) Username:[/b] [i]${F||"ANSWER"}[/i]
[b][color=#FF0000]4.2[/color] GTA:W Forum Account Name:[/b] [i]${P||"ANSWER"}[/i]
[b][color=#FF0000]4.3[/color] Discord Name:[/b] [i]${k||"ANSWER"}[/i]
[b][color=#FF0000]4.4[/color] Timezone:[/b] [i]${D||"ANSWER"}[/i]
[b][color=#FF0000]4.5[/color] Do you have any real life medical experience or have you roleplayed in medical factions in the past?:[/b] [i]${R||"ANSWER"}[/i]
[b][color=#FF0000]4.6[/color] [u]Unedited[/u] Screenshot of your Admin Record with the current date & time displayed:[/b]
[list=none][altspoiler=Admin Record][img]${$||"LINK"}[/img][/altspoiler][/list]
[b][color=#FF0000]4.7[/color] Provide a screenshot of your character's statistics (/stats) which you're applying with:[/b] 
[list=none][altspoiler=Stats][img]${O||"LINK"}[/img][/altspoiler][/list]
[b][color=#FF0000]4.8[/color] If you are a part of another official faction, please post a link to your DFP request from both [b]Pillbox Hill Medical Center[/b] [u]and[/u] your current faction. If utilizing the same character, permissions from LFM must be acquired and provided as well:[/b] [i]${Z||"ANSWER"}[/i]
[b][color=#FF0000]4.9[/color] Provide your character's background story:[/b]
[quote][i]${E||"ANSWER HERE"}[/i][/quote][/list][/divbox]`;Re=we+Ge}return`[imageleft]https://i.ibb.co/nMgfpMcv/phmc-curve.png[/imageleft] [b][size=110]Pillbox Hill Medical Center[/size][/b] 
Career Center [center][/center]
[center]Applying as:[/center]
[center][size=150][b]${he}[/b][/size][/center]
[divboxcolor=black][url=${be}][color=#FF0000]>[/color] [color=#FFFFFF]Back to the job posting[/color][/url][/divboxcolor]
[br][/br]
[divbox=na][list=none][b][size=110][color=#FF0000]1[/color].  Personal Information[/size][/b][/list]
[hr][/hr]
[list=none][b][color=#FF0000]1.1[/color]  Title & Full Name:[/b] [i]${n||"ANSWER"}[/i]
[b][color=#FF0000]1.2[/color]  Gender:[/b] [i](add a c, where applicable like so cb[color=#FF0000][u][b]c[/b][/u][/color]) [/i]
[list=none][cb${y?"c":""}] Male
[cb${w?"c":""}] Female
[cb${N?"c":""}] Other: ${N&&r?r:""}
[/list]
[b][color=#FF0000]1.3[/color] Date & Place of Birth:[/b] [i]${s||"DD/MMM/YYYY in CITY"}[/i]
[b][color=#FF0000]1.4[/color]  Address:[/b] [i]${o||"ANSWER"}[/i]
[b][color=#FF0000]1.5[/color]  Contact Details:[/b] [i]${a||"ANSWER"}[/i]
[b][color=#FF0000]1.6[/color] Have you been diagnosed with a medical condition, allergies, or prescribed any medication:[/b] [i]${l||"ANSWER"}[/i]
[b][color=#FF0000]1.7[/color]  Citizenship:[/b] [i](add a c, where applicable like so cb[color=#FF0000][u][b]c[/b][/u][/color]) [/i]
[list=none][cb${v?"c":""}] United States Citizen
[cb${A?"c":""}] Permanent resident alien status and applied for U.S. Citizenship 
[cb${C?"c":""}] None of the above
[br][/br][/list][/list][/divbox]
[br][/br]
[divbox=na][list=none][b][size=110][color=#FF0000]2[/color].  Educational Background[/size][/b][/list]
[hr][/hr]
[list=none][b][color=#FF0000]2.1[/color] Highest Level of Education:[/b] [i](add a c, where applicable like so cb[color=#FF0000][u][b]c[/b][/u][/color]) [/i]
[list=none]
[cb${ge(M)}] High School Diploma
[cb${ge(B)}] Certificate (Sub-bachelor or vocational)
[cb${ge(j)}] Diploma (Sub-bachelor or vocational)
[cb${ge(V)}] Associate Degree
[cb${ge(q)}] Bachelor's Degree
[cb${ge(Y)}] Master's Degree
[cb${ge(ue)}] Doctorate
[/list]
[b][color=#FF0000]2.2[/color] School of Attendance:[/b] 
[list=none][color=#FF0000][b]2.2.1[/color] School Name:[/b]  [i]${d||"ANSWER"}[/i]
[color=#FF0000][b]2.2.2[/color] Enrollment Term:[/b]  [i]${u||"DD/MMM/YYYY to DD/MMM/YYYY"}[/i]
[color=#FF0000][b]2.2.3[/color] Major Course of Study:[/b] [i]${p||"ANSWER"}[/i]
[/list]
[b][color=#FF0000]2.3[/color] Additional Languages:[/b] [i]${f||"ANSWER"}[/i][/list]
[br][/br][/divbox]
${Re}
[divboxcolor=black][center][url=https://phmc.gta.world/viewforum.php?f=168][color=#FF0000]>[/color] [color=#FFFFFF]Emergency Medical Services[/url] |[/color]  [url=https://phmc.gta.world/viewtopic.php?t=14][color=#FF0000]>[/color] [color=#FFFFFF]Employment Information[/url] |[/color] [url=https://phmc.gta.world/viewforum.php?f=111][color=#FF0000]>[/color]  [color=#FFFFFF]Visitor Guidelines[/color][/url][/center][/divboxcolor]`},YN="/phmc-code-archive/assets/folder-Bytub8vY.png",KN="/phmc-code-archive/assets/autopsy-cxd7SxPi.png",JN="/phmc-code-archive/assets/death-certificate-CzAnqITX.png",XN="/phmc-code-archive/assets/graveyard-ta_-99m3.png",QN="/phmc-code-archive/assets/conference-BsP_lkN7.png",aa="/phmc-code-archive/assets/email-DiWyWy-0.png",La="/phmc-code-archive/assets/Civilian-RpOgk0lt.png",ir="/phmc-code-archive/assets/phmcpaletobaylogo-lvwgepZe.png",ZN="/phmc-code-archive/assets/surgeon-D4DT8NuI.png",yl="/phmc-code-archive/assets/nurse-CoI-SZVM.png",ex="/phmc-code-archive/assets/emergency-CvZTa-Sv.png",tx="/phmc-code-archive/assets/empathy-C8KzlbJi.png",nx="/phmc-code-archive/assets/paperwork-8x2pto45.png",Ih="/phmc-code-archive/assets/psychology-vfcGOYrG.png",Or="/phmc-code-archive/assets/application-D9yhp4QZ.png",rx=t=>({physician:"Physician",psych:"Psych",admin:"Admin",nursing:"Nurse",ems:"EMS",coroner:"Coroner",saaa:"SAAA"})[t]||(t?t.charAt(0).toUpperCase()+t.slice(1):"Unknown"),sx=(t="")=>({displayName:"",group:t,status:"OPEN",poc:"",shortCode:"",url:"",Overview:"",skill1:"",skill2:"",skill3:"",EduRequirement:""}),ix={position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.65)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1040},ox={position:"relative",backgroundColor:"#2a2a2e",color:"#e1e1e1",padding:"25px 30px",borderRadius:"10px",boxShadow:"0 7px 20px rgba(0,0,0,0.5)",zIndex:1050,width:"90%",maxWidth:"750px",maxHeight:"88vh",display:"flex",flexDirection:"column",border:"1px solid #444"},ax={display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #444",paddingBottom:"15px",marginBottom:"20px",color:"#ffffff"},cx={margin:0,fontSize:"1.4rem",fontWeight:"500"},lx={overflowY:"auto",flexGrow:1,scrollbarWidth:"thin",scrollbarColor:"#555 #333"},dx={display:"flex",justifyContent:"flex-end",borderTop:"1px solid #444",paddingTop:"20px",marginTop:"25px"},ux=({show:t,onHide:e,categoryKey:n,categoryConfig:r,showNotification:s,onRoleSaved:o,roleToEdit:a})=>{const l=b.useMemo(()=>sx(r?.displayName||""),[r?.displayName]),[d,u]=b.useState(()=>a?{...l,...a}:l),[p,f]=b.useState(!1),[g,S]=b.useState("");b.useEffect(()=>{t&&(u(a?{...l,...a}:l),S(""))},[t,a,l]);const _=b.useMemo(()=>["displayName","group","shortCode","poc","url","Overview","skill1","skill2","skill3","EduRequirement"],[]),[I,F]=b.useState(!1);b.useEffect(()=>{F(_.every(y=>d.hasOwnProperty(y)&&String(d[y]).trim()!==""))},[d,_]);const P=b.useCallback(E=>{const{name:y,value:w}=E.target;u(N=>({...N,[y]:w}))},[]),k=b.useCallback(()=>{u(l),S(""),e()},[e,l]),D=b.useCallback(async E=>{if(E.preventDefault(),S(""),!I){S("All fields marked with * are required, and others must also be filled."),s&&s("Please fill out all fields in the form.","warning");return}const y=a?.originalKey||d.displayName.trim().replace(/[.#$[\]/]/g,"_").replace(/\s+/g,"_");if(!y){S("Display Name cannot be empty or invalid for key generation."),s&&s("Display Name is invalid for key.","warning");return}if(f(!0),!r||!r.path){S("Category configuration is missing or invalid."),s&&s("Category configuration error.","error"),f(!1);return}const w=`${r.path}/${y}`;try{if(!a){const v=fe(Ee,w);if((await ze(v)).exists()){S(`A role with the key "${y}" already exists.`),s&&s(`Role key "${y}" already exists.`,"error"),f(!1);return}}const N={...d};N.group=rx(n),await At(fe(Ee,w),N),o&&o({...N,originalKey:y},a?"edited":"added"),k()}catch(N){S(`Failed to ${a?"edit":"add"} role: ${N.message}`),s&&s(`Failed to ${a?"edit":"add"} role. ${N.message}`,"error")}f(!1)},[d,n,r,s,o,k,I,a]);if(b.useEffect(()=>{const E=y=>{y.key==="Escape"&&k()};return t&&document.addEventListener("keydown",E),()=>document.removeEventListener("keydown",E)},[t,k]),!t)return null;const R=a?`Edit Role: ${a.displayName||a.originalKey}`:`Add New Role to ${r?.displayName||"Category"}`,$=a?p?"Saving...":"Save Changes":p?"Saving...":"Save Role",O=i.jsx("div",{style:ix,onClick:k,children:i.jsxs("div",{style:ox,onClick:E=>E.stopPropagation(),children:[i.jsxs("div",{style:ax,children:[i.jsx("h5",{style:cx,children:R}),i.jsx(de,{variant:"link",onClick:k,"aria-label":"Close",style:{color:"#aaa",textDecoration:"none",fontSize:"1.5rem",padding:"0 .5rem",lineHeight:1},children:"×"})]}),i.jsx("div",{style:lx,children:i.jsxs(pe,{onSubmit:D,children:[i.jsxs(pe.Group,{className:"mb-3",children:[i.jsx(pe.Label,{children:"Display Name *"}),i.jsx(pe.Control,{type:"text",name:"displayName",value:d.displayName||"",onChange:P,required:!0,placeholder:"e.g., Senior Paramedic"})]}),i.jsxs(pe.Group,{className:"mb-3",children:[i.jsx(pe.Label,{children:"Group (Category) *"}),i.jsx(pe.Control,{type:"text",name:"group",value:d.group||"",onChange:P,required:!0,readOnly:!0})]}),i.jsxs(pe.Group,{className:"mb-3",children:[i.jsx(pe.Label,{children:"Status *"}),i.jsxs(pe.Select,{name:"status",value:d.status||"OPEN",onChange:P,required:!0,children:[i.jsx("option",{value:"OPEN",children:"OPEN"}),i.jsx("option",{value:"CLOSED",children:"CLOSED"})]})]}),i.jsxs(pe.Group,{className:"mb-3",children:[i.jsx(pe.Label,{children:"Point of Contact (POC) *"}),i.jsx(pe.Control,{type:"text",name:"poc",value:d.poc||"",onChange:P,required:!0,placeholder:"e.g., John Doe (johndoe#1234)"})]}),i.jsxs(pe.Group,{className:"mb-3",children:[i.jsx(pe.Label,{children:"Short Code *"}),i.jsx(pe.Control,{type:"text",name:"shortCode",value:d.shortCode||"",onChange:P,required:!0,placeholder:"e.g., SRPARA"})]}),i.jsxs(pe.Group,{className:"mb-3",children:[i.jsx(pe.Label,{children:"Application URL *"}),i.jsx(pe.Control,{type:"url",name:"url",value:d.url||"",onChange:P,required:!0,placeholder:"https://forum.example.com/link"})]}),i.jsxs(pe.Group,{className:"mb-3",children:[i.jsx(pe.Label,{children:"Overview *"}),i.jsx(pe.Control,{as:"textarea",rows:3,name:"Overview",value:d.Overview||"",onChange:P,required:!0,placeholder:"Brief role overview..."})]}),i.jsxs(pe.Group,{className:"mb-3",children:[i.jsx(pe.Label,{children:"Skill Requirement 1 *"}),i.jsx(pe.Control,{type:"text",name:"skill1",value:d.skill1||"",onChange:P,required:!0,placeholder:"e.g., Advanced Life Support"})]}),i.jsxs(pe.Group,{className:"mb-3",children:[i.jsx(pe.Label,{children:"Skill Requirement 2 *"}),i.jsx(pe.Control,{type:"text",name:"skill2",value:d.skill2||"",onChange:P,required:!0,placeholder:"e.g., Emergency Driving"})]}),i.jsxs(pe.Group,{className:"mb-3",children:[i.jsx(pe.Label,{children:"Skill Requirement 3 *"}),i.jsx(pe.Control,{type:"text",name:"skill3",value:d.skill3||"",onChange:P,required:!0,placeholder:"e.g., Patient Assessment"})]}),i.jsxs(pe.Group,{className:"mb-3",children:[i.jsx(pe.Label,{children:"Education Requirement *"}),i.jsx(pe.Control,{type:"text",name:"EduRequirement",value:d.EduRequirement||"",onChange:P,required:!0,placeholder:"e.g., EMT-P Certification"})]}),g&&i.jsx("p",{className:"text-danger mt-2 mb-0",children:g}),i.jsxs("div",{style:dx,children:[i.jsx(de,{variant:"secondary",onClick:k,disabled:p,children:"Cancel"}),i.jsx(de,{variant:"primary",type:"submit",disabled:p||!I,style:{minWidth:"120px",marginLeft:"10px"},children:p?i.jsx(Qe,{as:"span",animation:"border",size:"sm"}):$})]})]})})]})});return vl.createPortal(O,document.getElementById("modal-root"))},hx={},mx={},px={},fx={},gx={},bx={},yx={},vx=({show:t,onHide:e,categoryConfig:n,currentRoleKey:r,currentRoleData:s,showInAppNotification:o,onKeyRenamed:a,sendAdminActionWebhook:l,adminUserEmail:d})=>{const[u,p]=b.useState(""),[f,g]=b.useState(!1),[S,_]=b.useState("");b.useEffect(()=>{t&&(p(""),_(""))},[t]);const I=P=>{let k=P.target.value.replace(/\s+/g,"_");k=k.replace(/[.#$[\]/]/g,""),p(k)},F=async P=>{if(P.preventDefault(),_(""),!u.trim()){_("New key cannot be empty."),o&&o("New key cannot be empty.","warning");return}if(u===r){_("New key cannot be the same as the current key."),o&&o("New key is the same as the current one.","info");return}g(!0);const k=n.path,D=`${k}/${r}`,R=`${k}/${u}`;try{const $=fe(Ee,R);if((await ze($)).exists()){_(`The key "${u}" already exists in this category. Please choose a different key.`),o&&o(`Key "${u}" already exists.`,"error"),g(!1);return}await At(fe(Ee,R),s),await Gn(fe(Ee,D)),o&&o(`Role key "${r}" successfully renamed to "${u}".`,"check-circle"),l&&d&&l(d,"Renamed Role Key",`Category: ${n.displayName}
Old Key: ${r}
New Key: ${u}
Role Display Name: ${s.displayName||"N/A"}`,n.displayName),a&&a(),e()}catch($){_(`Failed to rename key: ${$.message}`),o&&o(`Failed to rename key. ${$.message}`,"error"),Ze($,{extra:{context:"RenameRoleKeyModal Firebase Ops",oldPath:D,newPath:R}})}finally{g(!1)}};return t?i.jsx("div",{style:hx,onClick:e,children:i.jsxs("div",{style:mx,onClick:P=>P.stopPropagation(),children:[i.jsxs(_t.Header,{style:px,closeButton:!1,children:[" ",i.jsxs(_t.Title,{style:fx,children:["Rename Role Key: ",s?.displayName||r]}),i.jsx("button",{onClick:e,style:yx,"aria-label":"Close modal",children:"×"})]}),i.jsxs(_t.Body,{style:gx,children:[i.jsxs("p",{children:["Current Key: ",i.jsx("strong",{children:r})]}),i.jsx("p",{className:"text-warning small",children:'Warning: Renaming the key changes its identifier in the database. This is a technical change and does not affect the "Display Name" shown to users unless you also edit the role. Ensure the new key is unique and does not contain spaces or Firebase-invalid characters (e.g., ., $, #, [, ], /).'}),i.jsxs(pe,{onSubmit:F,children:[i.jsxs(pe.Group,{className:"mb-3",children:[i.jsx(pe.Label,{children:"New Role Key *"}),i.jsx(pe.Control,{type:"text",value:u,onChange:I,required:!0,placeholder:"Enter new unique key (no spaces/invalid chars)",disabled:f}),i.jsx(pe.Text,{className:"text-muted",children:"Spaces will be replaced with underscores. Invalid characters will be removed."})]}),S&&i.jsx("p",{className:"text-danger mt-2 mb-0",children:S})]})]}),i.jsxs(_t.Footer,{style:bx,children:[i.jsx(de,{variant:"secondary",onClick:e,disabled:f,children:"Cancel"}),i.jsx(de,{variant:"warning",onClick:F,disabled:f||!u.trim()||u===r,children:f?i.jsx(Qe,{as:"span",animation:"border",size:"sm"}):"Rename Key"})]})]})}):null},_x=({show:t,onHide:e,showNotification:n,commitInfo:r,sendAdminActionWebhook:s,adminUserEmail:o,bingoType:a})=>{const[l,d]=b.useState(""),[u,p]=b.useState(!0),[f,g]=b.useState(!1),[S,_]=b.useState(""),I=b.useCallback(async()=>{if(!a?.path){console.error("[EditBingoPhrasesModal] fetchPhrases: No bingoType or path provided."),_("Cannot load phrases: No Bingo Type selected."),p(!1);return}const P=fe(Ee,`bingo/phrases/${a.path}`);console.log(`[EditBingoPhrasesModal] fetchPhrases: Starting fetch for ${a.name}...`),p(!0),_("");try{const k=await ze(P);if(console.log(`[EditBingoPhrasesModal] fetchPhrases: Firebase get() call resolved for ${a.name}.`),k.exists()){const D=k.val();console.log(`[EditBingoPhrasesModal] fetchPhrases: Data exists for ${a.name}.`,D);const R=Array.isArray(D)?D:typeof D=="object"&&D!==null?Object.values(D).map($=>typeof $=="object"?$.phrase:$).filter(Boolean):[];d(R.filter($=>$).join(`
`)),console.log(`[EditBingoPhrasesModal] fetchPhrases: Phrases set for ${a.name}.`)}else d(""),n(`No master phrases found for ${a.name}. You can add them here.`,"info-circle"),console.log(`[EditBingoPhrasesModal] fetchPhrases: No data found for ${a.name}.`)}catch(k){console.error(`[EditBingoPhrasesModal] fetchPhrases: Error during fetch for ${a.name}:`,k),_("Failed to load phrases: "+k.message),n("Failed to load phrases.","error"),Ze(k,{extra:{context:`EditBingoPhrasesModal Fetch for ${a?.name}`}})}finally{p(!1),console.log(`[EditBingoPhrasesModal] fetchPhrases: Finished fetch for ${a.name}. isLoading set to false.`)}},[a,n]);b.useEffect(()=>{t&&a?I():t||(p(!0),d(""),_(""),g(!1))},[t,a,I]);const F=async()=>{if(!a?.path){_("Cannot save phrases: No Bingo Type selected."),n("Cannot save: No Bingo Type selected.","error");return}const P=fe(Ee,`bingo/phrases/${a.path}`);g(!0),_("");try{const k=l.split(`
`).map(D=>D.trim()).filter(D=>D.length>0);if(k.length<24){_("You need at least 24 unique phrases for a full bingo card."),n("Not enough phrases (min 24 required).","warning"),g(!1);return}await At(P,k),n(`Master ${a.name} phrases updated successfully!`,"check-circle"),s&&o&&s(o,`Edited Master ${a.name} Bingo Phrases`,`Updated ${k.length} phrases.`,`Bingo Master Phrases (${a.name})`),e()}catch(k){console.error("Error saving master phrases:",k),_("Failed to save phrases: "+k.message),n("Failed to save phrases.","error"),Ze(k,{extra:{context:`EditBingoPhrasesModal Save for ${a?.name}`}})}finally{g(!1)}};return i.jsxs(_t,{show:t,onHide:e,size:"lg",dialogClassName:"bingo-modal-dialog",children:[i.jsx(_t.Header,{closeButton:!0,closeVariant:"white",children:i.jsxs(_t.Title,{children:["Edit Master ",a?.name||""," Bingo Phrases"]})}),i.jsx(_t.Body,{children:u?i.jsxs("div",{className:"text-center",children:[i.jsx(Qe,{animation:"border"})," Loading phrases..."]}):i.jsxs(pe,{children:[i.jsxs(pe.Group,{className:"mb-3",children:[i.jsx(pe.Label,{children:"One phrase per line. Minimum 24 phrases required."}),i.jsx(pe.Control,{as:"textarea",rows:15,value:l,onChange:P=>d(P.target.value),placeholder:"Enter your bingo phrases here, one per line.",disabled:f,className:"bingo-phrases-textarea"})]}),S&&i.jsx("p",{className:"text-danger",children:S})]})}),i.jsxs(_t.Footer,{children:[i.jsx(de,{variant:"secondary",onClick:e,disabled:f,children:"Cancel"}),i.jsx(de,{variant:"primary",onClick:F,disabled:f||u,children:f?i.jsx(Qe,{as:"span",animation:"border",size:"sm"}):"Save Phrases"})]})]})},Cx=[{id:"er",name:"Emergency Room",path:"ER"},{id:"ems",name:"EMS",path:"EMS"},{id:"coroner",name:"Coroner",path:"Coroner"}],Sx=({show:t,onHide:e,showNotification:n,sendAdminActionWebhook:r,adminUserEmail:s})=>{const[o,a]=b.useState([]),[l,d]=b.useState(!0),[u,p]=b.useState(null),f=b.useCallback(async()=>{d(!0);const _=fe(Ee,"bingo/phraseRequests");try{const I=await ze(_);if(I.exists()){const F=I.val();let P=Object.entries(F).map(([k,D])=>({id:k,...D})).filter(k=>k.status==="pending").sort((k,D)=>k.timestamp-D.timestamp);a(P)}else a([])}catch(I){console.error("Error fetching phrase requests:",I),n("Failed to load phrase requests.","error"),Ze(I,{extra:{context:"ReviewPhraseRequestsModal Fetch"}})}finally{d(!1)}},[n]);b.useEffect(()=>{t&&f()},[t,f]);const g=async _=>{p(_.id);const I=Cx.find(k=>k.name===_.bingoType);if(!I){n(`Error: Unknown Bingo Type "${_.bingoType}" for phrase approval.`,"error"),console.error(`Could not find a matching bingo type for name: ${_.bingoType}`),await S(_,"Denied (Invalid Type)"),p(null);return}const F=fe(Ee,`bingo/phrases/${I.path}`),P=fe(Ee,`bingo/phraseRequests/${_.id}`);try{const k=await ze(F),D=k.val(),R=k.exists()?Array.isArray(D)?D:typeof D=="object"&&D!==null?Object.values(D).map(E=>typeof E=="object"?E.phrase:E).filter(Boolean):[]:[],$=_.phrase.split(`
`).map(E=>E.trim()).filter(E=>E);for(const E of $)if(R.some(y=>y.toLowerCase()===E.toLowerCase())){n(`Phrase "${E}" already exists in ${I.name} list. Denying request.`,"warning"),await S(_,"Denied (Duplicate)");return}let O=[...R,...$];if(O=O.filter(E=>E!=null&&E!==""),await At(F,O),await wr(P,{status:"approved",processedBy:s,processedAt:new Date().toISOString()}),n(`Phrase(s) added to ${I.name} list!`,"check-circle"),r){const E=$.map(y=>`"${y}"`).join(`
`);r(s,"Approved Bingo Phrase Request",`Phrases:
${E}
Requested by: ${_.requestedBy}
For Bingo: ${_.bingoType||"General"}`,"Bingo Phrase Requests")}f()}catch(k){console.error("Error approving phrase:",k),n("Failed to approve phrase.","error"),Ze(k,{extra:{context:"ReviewPhraseRequestsModal Approve"}})}finally{p(null)}},S=async(_,I="Denied")=>{p(_.id);const F=fe(Ee,`bingo/phraseRequests/${_.id}`);try{await wr(F,{status:I,processedBy:s,processedAt:new Date().toISOString()}),n("Request for phrase(s) has been denied.","info-circle"),r&&r(s,"Denied Bingo Phrase Request",`Phrase: "${_.phrase}"
Requested by: ${_.requestedBy}
For Bingo: ${_.bingoType||"General"}
Reason: ${I}`,"Bingo Phrase Requests"),f()}catch(P){console.error("Error denying phrase:",P),n("Failed to deny phrase.","error"),Ze(P,{extra:{context:"ReviewPhraseRequestsModal Deny"}})}finally{p(null)}};return i.jsxs(_t,{show:t,onHide:e,size:"lg",dialogClassName:"bingo-modal-dialog",children:[i.jsx(_t.Header,{closeButton:!0,closeVariant:"white",children:i.jsx(_t.Title,{children:"Review Pending Bingo Phrases"})}),i.jsxs(_t.Body,{style:{overflowY:"auto"},children:[" ",l?i.jsxs("div",{className:"text-center",children:[i.jsx(Qe,{animation:"border"})," Loading requests..."]}):o.length>0?i.jsx(Pd,{variant:"flush",children:o.map(_=>i.jsxs(Pd.Item,{className:"d-flex justify-content-between align-items-center bg-transparent text-light",children:[i.jsxs("div",{children:[i.jsx("p",{className:"mb-0",children:i.jsx("strong",{children:"Phrase(s):"})}),_.phrase.split(`
`).map((I,F)=>i.jsxs("p",{className:"mb-1",children:['"',I.trim(),'"']},F)),_.bingoType&&i.jsx("p",{className:"mb-1",style:{color:"#0dcaf0"},children:i.jsxs("small",{children:["For: ",i.jsxs("strong",{children:[_.bingoType," Bingo"]})]})}),i.jsxs("small",{className:"text-muted",children:["Requested by: ",_.requestedBy," on ",new Date(_.timestamp).toLocaleString()]})]}),i.jsx("div",{children:u===_.id?i.jsx(Qe,{animation:"border",size:"sm"}):i.jsxs(i.Fragment,{children:[i.jsx(de,{variant:"outline-success",size:"sm",className:"me-2",onClick:()=>g(_),children:"Approve"}),i.jsx(de,{variant:"outline-danger",size:"sm",onClick:()=>S(_),children:"Deny"})]})})]},_.id))}):i.jsx("p",{className:"text-center text-muted",children:"No pending phrase requests."})]}),i.jsx(_t.Footer,{children:i.jsx(de,{variant:"secondary",onClick:e,children:"Close"})})]})},Kf=({show:t,onHide:e,showNotification:n,commitInfo:r,formData:s})=>{const{user:o,isAuthenticated:a,factionData:l,swappableCharacters:d,swapCharacter:u,login:p}=ur(),f=()=>{sessionStorage.setItem("showCctvModalAfterLogin","true"),p()},[g,S]=b.useState(""),[_,I]=b.useState(""),[F,P]=b.useState(""),[k,D]=b.useState(""),[R,$]=b.useState(""),[O,E]=b.useState(""),[y,w]=b.useState(!1),[N,v]=b.useState(""),[A,C]=b.useState(""),[M,B]=b.useState(""),[j,V]=b.useState(""),[q,Y]=b.useState(null);b.useEffect(()=>{t||(S(""),I(""),P(""),D(""),$(""),E(""),w(!1),v(""),B(""),V(""),C(""),Y(null))},[t]),b.useEffect(()=>{a&&l&&!q&&Y(l.characterId)},[a,l,q]),b.useEffect(()=>{if(a){let X="";if(q&&d){const Z=d.find(re=>re.character&&re.character.characterId?re.character.characterId==q:re.id?re.id==q:!1);Z&&(Z.character&&Z.character.characterName?X=Z.character.characterName:Z.name?X=Z.name:Z.firstname&&Z.lastname&&(X=`${Z.firstname} ${Z.lastname}`.trim()))}!X&&l?.characterName&&(X=l.characterName),X&&I(X)}},[a,q,d,l]);const ue=X=>{if(Y(X),d){const Z=d.find(re=>re.character&&re.character.characterId?re.character.characterId==X:re.id?re.id==X:!1);if(Z){let re="";Z.character&&Z.character.characterName?re=Z.character.characterName:Z.name?re=Z.name:Z.firstname&&Z.lastname&&(re=`${Z.firstname} ${Z.lastname}`.trim()),re&&I(re)}}if(d){const Z=d.find(re=>re.character&&re.character.characterId?re.character.characterId==X:re.id?re.id==X:!1);Z&&Z.character&&Z.character.characterId&&u(X)}},te=async()=>{if(!a||!o){n("GTAW OAuth authentication is required to submit CCTV requests. Please log in with your GTAW account.","warning");return}if(!_.trim()||!k.trim()||!R.trim()||!O.trim()||!M.trim()||!j.trim()){n("Please fill out all required fields.","warning");return}w(!0);const X={rank:g,officer:_,officerPH:F,department:k,location:R,description:O,discordUsername:N,oocNotes:A,incidentDateTime:M,requestReason:j,DEBUG:{gtawUser:{id:o.id,username:o.username,isFactionMember:o.isFactionMember},selectedCharacter:q?(()=>{const we=d?.find(Ge=>Ge.character&&Ge.character.characterId?Ge.character.characterId==q:Ge.id?Ge.id==q:!1);if(we){if(we.character&&we.character.characterId)return{characterId:we.character.characterId,characterName:we.character.characterName,rank:we.character.rank,scriptRank:we.character.scriptRank,isFactionMember:!0};if(we.id)return{characterId:we.id,characterName:we.name||`${we.firstname||""} ${we.lastname||""}`.trim(),isFactionMember:!1}}return null})():null,timestamp:new Date().toISOString(),userAgent:navigator.userAgent,environment:void 0}};sn("CCTV Request Submitted",{level:"info",extra:{officer:X.officer,department:X.department,location:X.location,reason:X.requestReason,submitter:o.username||"Unknown App User"},tags:{webhook_type:"cctv_request",environment:void 0}}),_d(Ff,"cctv_request",{officer:X.officer,department:X.department,location:X.location,reason:X.requestReason,submitter:o.username||"Unknown App User",environment:void 0});const Z="https://discord.com/api/webhooks/1430314470902599680/o_JoPsW9jNgKICL9StKxgORICn3cOzu41FheUsJFsPkRAX-Xt9LKTulXhWCaQsU5Cfxw",re="https://discord.com/api/webhooks/1389963771082051674/lv0Fg6YGzz64byQDLCikXrxuZT0IT5m38Wo976TRWIZOJZraQbDNTWv0ENfXYSdy-LqY",he={title:"📹 CCTV Footage Request",color:31743,fields:[{name:"Requesting Officer Rank",value:X.rank||"N/A",inline:!0},{name:"Requesting Officer",value:X.officer||"N/A",inline:!0},{name:"Officer Phone Number",value:X.officerPH||"N/A",inline:!0},{name:"Requesting Department",value:X.department||"N/A",inline:!0},...X.discordUsername?[{name:"Discord Username",value:X.discordUsername,inline:!0}]:[],{name:"Date/Time of Incident",value:X.incidentDateTime||"N/A",inline:!0},{name:"Reason for Request",value:X.requestReason||"N/A",inline:!1},{name:"CCTV Location",value:X.location||"N/A",inline:!1},{name:"Description of Events",value:`

${X.description||"N/A"}

`,inline:!1},...X.oocNotes?[{name:"OOC Notes",value:`

${X.oocNotes}

`,inline:!1}]:[],{name:"Anti Abuse Filtering - Submitted User GTAW UCP Data Output: ",value:`\`\`\`json
${JSON.stringify(X.DEBUG,null,2)}
\`\`\``,inline:!1}],timestamp:new Date().toISOString(),footer:{text:"PHMC CCTV Bot"}},be=JSON.stringify({username:"CCTV Bot",avatar_url:"https://i.ibb.co/0pgw9hHm/phmc.png",content:"A new CCTV request has been generated by a Law Enforcement Officer, details enclosed.",embeds:[he]}),ge=[];ge.push({name:"Dev",url:Z}),ge.push({name:"LEO",url:re});const Re=ge.map(we=>fetch(we.url,{method:"POST",headers:{"Content-Type":"application/json"},body:be}).then(async Ge=>{if(!Ge.ok){const bt=await Ge.text();throw new Error(`Request to ${we.name} failed with status ${Ge.status}: ${bt}`)}return{name:we.name,status:"fulfilled"}})),Pe=await Promise.allSettled(Re);let Je=0;Pe.forEach((we,Ge)=>{const bt=ge[Ge].name;we.status==="fulfilled"?(console.log(`Successfully sent CCTV webhook to ${bt}.`),Je++):(console.error(`Failed to send CCTV webhook to ${bt}:`,we.reason.message),sn(`CCTV Webhook to ${bt} failed`,{level:"error",extra:{reason:we.reason.message}}))}),Je===ge.length?(n("CCTV Request sent successfully!","check-circle"),e()):Je>0?(n("CCTV Request sent, but some destinations failed.","warning"),e()):n("Failed to send CCTV request to any destination.","error"),w(!1)};if(!t)return null;const se=i.jsx("div",{className:"modal-overlay",onClick:e,children:i.jsxs("div",{className:"cctv-modal-dialog",onClick:X=>X.stopPropagation(),children:[i.jsxs("div",{className:"cctv-modal-header",children:[i.jsx("h4",{className:"cctv-title",children:"CCTV Request"}),i.jsx("button",{className:"modal-close-btn",onClick:e,"aria-label":"Close modal",children:"×"})]}),i.jsxs("div",{className:"cctv-modal-body",children:[i.jsxs("div",{className:"cctv-danger-text",children:[i.jsx("strong",{children:"⚠️ Important Notice:"})," This form is sent directly to PHMC supervisors to request CCTV Footage. It will be handled within the next 24 hours and you'll be contacted via Cell Phone or Departmental. ",i.jsx("strong",{children:"Abuse of this form will be reported to Legal Faction Management."})]}),i.jsxs("div",{className:`cctv-form-section ${a?"auth-success":"auth-required"}`,children:[i.jsxs("h5",{children:[i.jsx("i",{className:`fas ${a?"fa-shield-alt":"fa-exclamation-triangle"}`}),a?"Authenticated":"Authentication Required"]}),a?i.jsxs("div",{className:"auth-details",children:[i.jsxs("div",{children:[i.jsx("strong",{children:"UCP User:"})," ",o.username]}),d&&d.length>0&&i.jsxs("div",{className:"character-selector",children:[i.jsx("label",{className:"character-label",children:i.jsx("strong",{children:"Select Character:"})}),i.jsx("select",{className:"cctv-form-label required",value:q||l?.characterId||"",onChange:X=>ue(X.target.value),disabled:y,children:d.map(X=>{let Z,re;if(X.character&&X.character.characterId)Z=X.character.characterId,re=X.character.characterName;else if(X.id)Z=X.id,re=X.name||`${X.firstname||""} ${X.lastname||""}`.trim();else return null;return i.jsxs("option",{value:Z,children:[re," (ID: ",Z,")"]},Z)})})]})]}):i.jsxs("div",{className:"auth-warning",children:[i.jsx("i",{className:"fas fa-info-circle"}),i.jsx("span",{children:"GTAW OAuth authentication is required to submit CCTV requests. Please log in with your GTAW account."}),i.jsxs("button",{className:"cctv-btn cctv-btn-primary auth-login-btn",onClick:f,children:[i.jsx("i",{className:"fas fa-sign-in-alt"})," Login with GTA World"]})]})]}),i.jsx("div",{className:"cctv-warning-text",children:i.jsx("strong",{children:"⚠️ Important Notice: For the purpose of logging and avoiding abuse of this form, UCP Data you have used to submit this request may be reviewed by PHMC Supervisors."})}),i.jsxs("div",{className:"cctv-form-section",children:[i.jsx("h5",{children:"Officer Information"}),i.jsxs("div",{className:"cctv-form-row",children:[i.jsxs("div",{className:"cctv-form-group",children:[i.jsx("label",{className:"cctv-form-label",children:"Requesting Officer Rank"}),i.jsx("input",{type:"text",className:"form-control",value:g,onChange:X=>S(X.target.value),placeholder:"e.g., Sergeant I",disabled:y})]}),i.jsxs("div",{className:"cctv-form-group",children:[i.jsx("label",{className:"cctv-form-label required",children:"Requesting Officer"}),i.jsx("input",{type:"text",className:"form-control",value:_,onChange:X=>I(X.target.value),placeholder:a?"Auto-filled from selected character":"e.g., John Smith",required:!0,disabled:y,readOnly:a})]}),i.jsxs("div",{className:"cctv-form-group",children:[i.jsx("label",{className:"cctv-form-label",children:"Officer Phone Number"}),i.jsx("input",{type:"text",className:"form-control",value:F,onChange:X=>P(X.target.value),placeholder:"(Optional)",disabled:y})]})]}),i.jsxs("div",{className:"cctv-form-row",children:[i.jsxs("div",{className:"cctv-form-group",children:[i.jsx("label",{className:"cctv-form-label required",children:"Requesting Department"}),i.jsx("input",{type:"text",className:"form-control",value:k,onChange:X=>D(X.target.value),placeholder:"e.g., LSPD, LSSD",required:!0,disabled:y})]}),i.jsxs("div",{className:"cctv-form-group",children:[i.jsx("label",{className:"cctv-form-label",children:"Discord Username"}),i.jsx("input",{type:"text",className:"form-control",value:N,onChange:X=>v(X.target.value),placeholder:"e.g., frosty.js",disabled:y})]})]})]}),i.jsxs("div",{className:"cctv-form-section",children:[i.jsx("h5",{children:"Incident Details"}),i.jsxs("div",{className:"cctv-form-row",children:[i.jsxs("div",{className:"cctv-form-group",children:[i.jsx("label",{className:"cctv-form-label required",children:"Date & Time of Incident"}),i.jsx("input",{type:"text",className:"form-control",value:M,onChange:X=>B(X.target.value),placeholder:"e.g., 15/JAN/2024 around 23:00",required:!0,disabled:y})]}),i.jsxs("div",{className:"cctv-form-group",children:[i.jsx("label",{className:"cctv-form-label required",children:"Reason for Request"}),i.jsxs("select",{className:"form-control",value:j,onChange:X=>V(X.target.value),required:!0,disabled:y,children:[i.jsx("option",{value:"",children:"Select a reason..."}),i.jsx("option",{value:"Criminal Investigation",children:"Criminal Investigation"}),i.jsx("option",{value:"Internal Affairs Investigation",children:"Internal Affairs Investigation"}),i.jsx("option",{value:"Traffic Incident Review",children:"Traffic Incident Review"}),i.jsx("option",{value:"General Security Review",children:"General Security Review"}),i.jsx("option",{value:"Other",children:"Other (Specify in Description)"})]})]})]}),i.jsx("div",{className:"cctv-form-row",children:i.jsxs("div",{className:"cctv-form-group full-width",children:[i.jsx("label",{className:"cctv-form-label required",children:"CCTV Location"}),i.jsx("input",{type:"text",className:"form-control",value:R,onChange:X=>$(X.target.value),placeholder:"e.g., Pillbox Hill Medical Center - Main Entrance",required:!0,disabled:y})]})})]}),i.jsxs("div",{className:"cctv-form-section",children:[i.jsx("h5",{children:"Description & Notes"}),i.jsx("div",{className:"cctv-form-row",children:i.jsxs("div",{className:"cctv-form-group full-width",children:[i.jsx("label",{className:"cctv-form-label required",children:"Requesting Description & OOC Information"}),i.jsx("textarea",{className:"form-control cctv-textarea",value:O,onChange:X=>E(X.target.value),placeholder:"Provide a brief description of the events and the timeframe for the footage request.",required:!0,disabled:y})]})}),i.jsx("div",{className:"cctv-form-row",children:i.jsxs("div",{className:"cctv-form-group full-width",children:[i.jsx("label",{className:"cctv-form-label",children:"OOC Notes"}),i.jsx("textarea",{className:"form-control cctv-textarea",value:A,onChange:X=>C(X.target.value),placeholder:"(( If you know names (or masked names) involved, as this will help us narrow our search of CCTV Logs (which can be very large) ))",disabled:y})]})})]})]}),i.jsxs("div",{className:"cctv-modal-footer",children:[i.jsx("button",{className:"cctv-btn cctv-btn-secondary",onClick:e,disabled:y,children:"Cancel"}),i.jsxs("button",{className:"cctv-btn cctv-btn-primary",onClick:te,disabled:y||!a,title:a?"":"GTAW OAuth authentication required",children:[y?i.jsx("div",{className:"cctv-spinner"}):null,"Send CCTV Request"]})]})]})});return vl.createPortal(se,document.getElementById("modal-root"))},wx=Object.freeze(Object.defineProperty({__proto__:null,default:Kf},Symbol.toStringTag,{value:"Module"})),Ex=async(t,e,n,r)=>{try{const s=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(s.ok)return!0;{const o=await s.text();return console.error(`Failed to send ${n} webhook embed. Status: ${s.status} ${s.statusText}`,o),sn(`Discord webhook embed failed for ${n}: ${s.status}`,{level:"error",extra:{statusText:s.statusText,responseBody:o}}),!1}}catch(s){return console.error(`Error sending ${n} webhook embed:`,s),Ze(s,{extra:{context:`${n} Webhook Embed Submission Fetch`}}),!1}},Nx=({show:t,onHide:e,database:n,showNotification:r})=>{const[s,o]=b.useState([]),[a,l]=b.useState(""),[d,u]=b.useState(""),[p,f]=b.useState(!1),[g,S]=b.useState(""),_=R=>{if(!R)return"";let $=R.trim().replace(/[.#$[\/ \]]+/g,"_");return $=$.replace(/_{2,}/g,"_"),$=$.replace(/^_+|_+$/g,""),$};b.useEffect(()=>{t&&(async()=>{try{const $=fe(n,"savedReports"),O=await ze($);O.exists()?o(Object.keys(O.val())):o([])}catch($){console.error("Error fetching users:",$),S("Failed to fetch users.")}})()},[t,n]);const I=R=>R.replace(/[.#$[\/ \]]/g,"_"),F=async(R,$,O)=>{const E="https://discord.com/api/webhooks/1430314470902599680/o_JoPsW9jNgKICL9StKxgORICn3cOzu41FheUsJFsPkRAX-Xt9LKTulXhWCaQsU5Cfxw",y={embeds:[{title:"User Data Migration",description:`Successfully migrated ${O} reports from **${R}** to **${$}**.**This is a test notification.**`,color:65280,timestamp:new Date().toISOString()}]};await Ex(E,y,"User Data Migration",null)},P=async()=>{if(!window.confirm("Are you sure you want to sanitize all usernames? This will clean up spaces and multiple underscores. This is a one-time operation and cannot be undone."))return;const R=fe(n,"savedReports");try{const $=await ze(R);if(!$.exists()){r("No saved reports found to sanitize.","info");return}const O=$.val(),E={};let y=0;for(const N in O){const v=_(N);if(N!==v){const A=O[N],C=O[v]||{};for(const M in A)C[M]||(C[M]=A[M]);E[`savedReports/${v}`]=C,E[`savedReports/${N}`]=null,y++}}y>0?(await wr(fe(n),E),r(`Successfully sanitized ${y} usernames.`,"success")):r("No usernames found that required sanitization.","info");const w=await ze(R);w.exists()?o(Object.keys(w.val())):o([])}catch($){console.error("Error sanitizing all usernames:",$),r(`Error sanitizing usernames: ${$.message}`,"error")}},k=async()=>{if(!window.confirm("Are you sure you want to migrate all usernames with spaces to use underscores? This is a one-time operation and cannot be undone."))return;const R=fe(n,"savedReports");try{const $=await ze(R);if(!$.exists()){r("No saved reports found to migrate.","info");return}const O=$.val(),E={};let y=0;for(const N in O)if(N.includes(" ")){const v=N.replace(/ /g,"_"),A=O[N],C=O[v]||{};for(const M in A)C[M]||(C[M]=A[M]);E[`savedReports/${v}`]=C,E[`savedReports/${N}`]=null,y++}y>0?(await wr(fe(n),E),r(`Successfully migrated ${y} usernames.`,"success")):r("No usernames with spaces found to migrate.","info");const w=await ze(R);w.exists()?o(Object.keys(w.val())):o([])}catch($){console.error("Error migrating all usernames:",$),r(`Error migrating usernames: ${$.message}`,"error")}},D=async()=>{if(!a||!d||!p){S("Please select both users and confirm the migration.");return}if(a===d){S("Source and destination users cannot be the same.");return}S("");const R=fe(n,`savedReports/${a}`),$=fe(n,`savedReports/${d}`),O=new Date().toISOString().replace(/:/g,"-").replace(/\./g,"-"),E=I(d),y=fe(n,`migrationBackups/${E}_${O}`);let w=null;try{const N=await ze(R);if(!N.exists()){r("Source user has no data to migrate.","warning");return}const v=await ze($);v.exists()&&(w=v.val(),await At(y,w));const A=N.val(),C=w||{},M=[];let B=0;Object.keys(A).forEach(j=>{C[j]?M.push(j):(C[j]=A[j],B++)}),await At($,C),await Gn(R),M.length>0?r(`Migration complete, but ${M.length} reports were not migrated due to conflicts.`,"warning"):r("User data migrated successfully.","success"),B>0&&await F(a,d,B),e()}catch(N){console.error("Error migrating data:",N),r(`Error migrating data: ${N.message}`,"error"),w&&(await At($,w),r("Migration failed. Destination user's original data has been restored.","info"))}};return i.jsxs(_t,{show:t,onHide:e,className:"user-management-modal",children:[i.jsx(_t.Header,{closeButton:!0,children:i.jsx(_t.Title,{children:"User Management"})}),i.jsxs(_t.Body,{children:[g&&i.jsx(Et,{variant:"danger",children:g}),i.jsx("p",{children:"Migrate saved reports from one user to another."}),i.jsxs(pe,{children:[i.jsxs(pe.Group,{className:"mb-3",children:[i.jsx(pe.Label,{children:"Select User to Migrate From"}),i.jsxs(pe.Control,{as:"select",value:a,onChange:R=>l(R.target.value),children:[i.jsx("option",{value:"",children:"Select User"}),s.map(R=>i.jsx("option",{value:R,children:R},R))]})]}),i.jsxs(pe.Group,{className:"mb-3",children:[i.jsx(pe.Label,{children:"Select User to Migrate To"}),i.jsxs(pe.Control,{as:"select",value:d,onChange:R=>u(R.target.value),children:[i.jsx("option",{value:"",children:"Select User"}),s.map(R=>i.jsx("option",{value:R,children:R},R))]})]}),i.jsx(pe.Group,{className:"mb-3",controlId:"formBasicCheckbox",children:i.jsx(pe.Check,{type:"checkbox",label:"I confirm I want to migrate the data.",checked:p,onChange:R=>f(R.target.checked)})})]})]}),i.jsxs(_t.Footer,{children:[i.jsx(de,{variant:"secondary",onClick:e,children:"Close"}),i.jsx(de,{variant:"success",onClick:P,children:"Sanitize All Usernames"}),i.jsx(de,{variant:"warning",onClick:k,children:"Migrate All Usernames"}),i.jsx(de,{variant:"primary",onClick:D,disabled:!a||!d||!p,children:"Migrate Data"})]})]})},xx=({showNotification:t})=>{const[e,n]=b.useState("/agencies"),[r,s]=b.useState(""),[o,a]=b.useState(!1),[l,d]=b.useState(null),u=async()=>{if(!e){t("Please enter a database path.","warning");return}a(!0),d(null);try{const f=fe(Ee,e),g=await ze(f);g.exists()?s(JSON.stringify(g.val(),null,2)):(s(""),t("No data at this path.","info"))}catch(f){d(f.message),t(`Error fetching data: ${f.message}`,"error")}finally{a(!1)}},p=async()=>{if(!e){t("Please enter a database path.","warning");return}let f;try{f=JSON.parse(r)}catch{d("Invalid JSON format."),t("Invalid JSON format. Please correct it before saving.","error");return}a(!0),d(null);try{const g=fe(Ee,e);await At(g,f),t("Data saved successfully!","check-circle")}catch(g){d(g.message),t(`Error saving data: ${g.message}`,"error")}finally{a(!1)}};return i.jsxs(vn,{children:[i.jsx(vn.Header,{children:"Firebase Realtime Database Editor"}),i.jsxs(vn.Body,{children:[i.jsxs(pe.Group,{className:"mb-3",children:[i.jsx(pe.Label,{children:"Database Path"}),i.jsx(pe.Control,{type:"text",value:e,onChange:f=>n(f.target.value),placeholder:"e.g., /agencies/LSSD"})]}),i.jsx(de,{onClick:u,disabled:o,className:"me-2",children:o?i.jsx(Qe,{as:"span",animation:"border",size:"sm"}):"Fetch Data"}),i.jsx("hr",{}),i.jsxs(pe.Group,{className:"mb-3",children:[i.jsx(pe.Label,{children:"JSON Data"}),i.jsx(pe.Control,{as:"textarea",rows:20,value:r,onChange:f=>s(f.target.value),placeholder:"JSON data will appear here..."})]}),l&&i.jsx(Et,{variant:"danger",children:l}),i.jsx(de,{onClick:p,disabled:o,children:o?i.jsx(Qe,{as:"span",animation:"border",size:"sm"}):"Save Data"})]})]})},Ax=t=>{if(!t)return"";let e=t.trim().replace(/[.#$[\/ \]]+/g,"_");return e=e.replace(/_{2,}/g,"_"),e=e.replace(/^_+|_+$/g,""),e},Ix=({currentUser:t})=>{const[e,n]=b.useState([]),[r,s]=b.useState(""),[o,a]=b.useState(0),[l,d]=b.useState([]),[u,p]=b.useState(!1);b.useEffect(()=>{(async()=>{p(!0);const S=Qs(),_=fe(S,"savedReports"),I=await ze(_);if(I.exists()){const P=Object.keys(I.val()).map(k=>({uid:k,character_name:k.replace(/_/g," ")}));n(P)}p(!1)})()},[]);const f=async()=>{if(!r){console.log("[handleSearch] No employee selected.");return}p(!0),console.log(`[handleSearch] Starting search for: "${r}"`);const g=Ax(r);console.log(`[handleSearch] Sanitized name: "${g}"`);const S=Qs(),_=fe(S,`savedReports/${g}`);console.log(`[handleSearch] Querying Firebase path: ${_.toString()}`);try{const I=await ze(_);if(console.log("[handleSearch] Firebase snapshot received:",I),I.exists()){const F=I.val();console.log("[handleSearch] Reports data:",F);const P=Object.keys(F).length;console.log(`[handleSearch] Found ${P} reports.`),a(P)}else console.log("[handleSearch] No data exists at this path."),a(0)}catch(I){console.error("[handleSearch] Error fetching reports:",I),a(0)}p(!1)};return b.useEffect(()=>{(async()=>{p(!0);const S=Qs(),_=fe(S,"savedReports"),I=await ze(_);if(I.exists()){const F=I.val(),D=Object.keys(F).map(R=>({name:R.replace(/_/g," "),count:Object.keys(F[R]).length})).sort((R,$)=>$.count-R.count).slice(0,10);d(D)}p(!1)})()},[]),i.jsxs("div",{children:[i.jsxs("div",{className:"card",children:[i.jsx("div",{className:"card-header",children:"User Stats"}),i.jsxs("div",{className:"card-body",children:[i.jsxs("div",{className:"form-group mt-3",children:[i.jsx("label",{children:"Select Employee"}),i.jsxs("select",{className:"form-control",value:r,onChange:g=>s(g.target.value),children:[i.jsx("option",{value:"",children:"Select an employee"}),e.map(g=>i.jsx("option",{value:g.character_name,children:g.character_name},g.uid))]})]}),i.jsx("button",{className:"btn btn-primary mt-3",onClick:f,disabled:u,children:u?"Searching...":"Search Reports"}),o>0&&i.jsxs("p",{className:"mt-3",children:["Total Reports: ",o]})]})]}),i.jsxs("div",{className:"card mt-4",children:[i.jsx("div",{className:"card-header",children:"Top 5 Users by Reports"}),i.jsx("div",{className:"card-body",children:u?i.jsx("p",{children:"Loading..."}):i.jsx("ul",{className:"list-group",children:l.map(g=>i.jsxs("li",{className:"list-group-item d-flex justify-content-between align-items-center",children:[g.name,i.jsx("span",{className:"badge bg-primary rounded-pill",children:g.count})]},g.name))})})]})]})},Tx=({refreshTrigger:t,onRefresh:e})=>{const[n,r]=b.useState([]),[s,o]=b.useState(!1),a=async()=>{o(!0);try{const d=Qs(),u=fe(d,"webhook_logs"),p=await ze(u);if(p.exists()){const f=p.val(),g=Object.keys(f).map(S=>({id:S,...f[S]})).sort((S,_)=>_.timestamp-S.timestamp);r(g)}else r([])}catch(d){console.error("Error loading webhook logs:",d)}finally{o(!1)}};b.useEffect(()=>{a()},[t]);const l=()=>{a(),e&&e()};return i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"d-flex justify-content-between align-items-center p-3 border-bottom",children:[i.jsxs("h6",{className:"mb-0",children:[i.jsx("i",{className:"fas fa-history me-2"}),"Webhook Activity Logs (",n.length,")"]}),i.jsxs(de,{variant:"outline-primary",size:"sm",onClick:l,disabled:s,title:"Refresh webhook logs",children:[s?i.jsx(Qe,{as:"span",animation:"border",size:"sm"}):i.jsx("i",{className:"fas fa-sync-alt"})," Refresh"]})]}),i.jsx("div",{style:{maxHeight:"500px",overflowY:"auto"},className:"p-3",children:s&&n.length===0?i.jsxs("div",{className:"text-center text-muted py-4",children:[i.jsx(Qe,{animation:"border",size:"sm",className:"me-2"}),"Loading webhook logs..."]}):n.length>0?i.jsx(Vo,{children:n.map((d,u)=>i.jsxs(Vo.Item,{eventKey:u.toString(),children:[i.jsx(Vo.Header,{children:i.jsxs("div",{className:"d-flex justify-content-between align-items-center w-100 me-3",children:[i.jsx("span",{children:i.jsx("strong",{children:new Date(d.timestamp).toLocaleString()})}),i.jsx("span",{className:`badge ${d.type==="dev"?"bg-warning":d.type==="coronerAlerts"?"bg-danger":"bg-primary"}`,children:d.type})]})}),i.jsx(Vo.Body,{children:i.jsxs("div",{className:"row",children:[i.jsxs("div",{className:"col-md-6",children:[i.jsx("h6",{children:"Request Details"}),i.jsxs("p",{children:[i.jsx("strong",{children:"Timestamp:"})," ",new Date(d.timestamp).toLocaleString()]}),i.jsxs("p",{children:[i.jsx("strong",{children:"Type:"})," ",d.type]}),d.webhookUrl&&i.jsxs("p",{children:[i.jsx("strong",{children:"Webhook URL:"})," ",i.jsx("small",{className:"text-muted",children:d.webhookUrl})]})]}),i.jsxs("div",{className:"col-md-6",children:[i.jsx("h6",{children:"Payload"}),i.jsx("pre",{style:{fontSize:"12px",maxHeight:"200px",overflow:"auto"},children:JSON.stringify(d.payload,null,2)})]})]})})]},d.id))}):i.jsxs("div",{className:"text-center text-muted py-4",children:[i.jsx("i",{className:"fas fa-inbox fa-2x mb-2"}),i.jsx("p",{children:"No webhook activity yet. Webhook requests will appear here."})]})})]})},Rx=({showNotification:t})=>{const[e,n]=b.useState("idle"),[r,s]=b.useState(null),[o,a]=b.useState(null),[l,d]=b.useState(null),[u,p]=b.useState(null),[f,g]=b.useState(null),[S,_]=b.useState(!1),[I,F]=b.useState("upload"),[P,k]=b.useState(null),D=b.useCallback(M=>new Promise((B,j)=>{const V=new FileReader;V.onload=q=>{try{const Y=q.target.result;let ue=JSON.parse(Y),te=!1;if(ue&&typeof ue=="object"&&ue.data&&Array.isArray(ue.data)&&(te=!0,ue=ue.data),!Array.isArray(ue)){j(new Error('JSON file must contain an array of faction members, or be a UCP export with a "data" property.'));return}const se=[],X=[];ue.forEach((Z,re)=>{let he,be,ge,Re,Pe,Je,we;if(te){const Ge=Z.id?String(Z.id).match(/\/(\d+)/):null;he=Ge?Ge[1]:null,be=Z.firstname&&Z.lastname?`${Z.firstname} ${Z.lastname}`:null,ge=Z.rank,Re=Z.scriptrank,Pe=Z.lastduty,Je=Z.lastonline,we=Z.abas}else he=Z.characterId,be=Z.characterName,ge=Z.rank,Re=Z.scriptRank,Pe=Z.lastDuty,Je=Z.lastOnline,we=Z.activity;if(!he||!be||!ge||Re===void 0||Re===null){X.push(`Row ${re+1}: Missing or invalid data - ID: ${he}, Name: ${be}, Rank: ${ge}, ScriptRank: ${Re}`);return}se.push({characterId:parseInt(he),characterName:be,rank:ge,scriptRank:parseInt(Re),lastDuty:Pe||null,lastOnline:Je||null,activity:we||null,lineNumber:re+1})}),B({totalRows:ue.length,validRows:se.length,errors:X,data:se,fileName:M.name,fileSize:M.size,uploadTime:new Date().toISOString()})}catch(Y){j(new Error(`Failed to parse JSON: ${Y.message}`))}},V.onerror=()=>j(new Error("Failed to read file")),V.readAsText(M)}),[]),R=b.useCallback(M=>new Promise((B,j)=>{const V=new FileReader;V.onload=q=>{try{const ue=q.target.result.split(`
`).filter(ge=>ge.trim());if(ue.length<2){j(new Error("CSV file must contain at least a header and one data row"));return}const te=ue[0].split(",").map(ge=>ge.replace(/"/g,"").trim());console.log("[CSV Parser] Header:",te);const se=1,X=2,Z=3,re=4,he=[],be=[];for(let ge=1;ge<ue.length;ge++){const Re=ue[ge];if(!Re.trim())continue;const Pe=[];let Je="",we=!1;for(let ne=0;ne<Re.length;ne++){const W=Re[ne];W==='"'?we=!we:W===","&&!we?(Pe.push(Je.trim()),Je=""):Je+=W}Pe.push(Je.trim());const Ge=Pe[se]?.replace(/"/g,"").trim(),bt=Pe[X]?.replace(/"/g,"").trim(),Jt=Pe[Z]?.replace(/"/g,"").trim(),zt=Pe[re]?.replace(/"/g,"").trim(),L=parseInt(zt);if(!Ge||!bt||!Jt||isNaN(L)){be.push(`Line ${ge+1}: Missing or invalid data - ID: ${Ge}, Name: ${bt}, Rank: ${Jt}, ScriptRank: ${zt}`);continue}he.push({characterId:parseInt(Ge),characterName:bt,rank:Jt,scriptRank:L,lastDuty:Pe[5]?.replace(/"/g,"").trim()||null,lastOnline:Pe[6]?.replace(/"/g,"").trim()||null,activity:Pe[7]?.replace(/"/g,"").trim()||null,lineNumber:ge+1})}B({totalRows:ue.length-1,validRows:he.length,errors:be,data:he,fileName:M.name,fileSize:M.size,uploadTime:new Date().toISOString()})}catch(Y){j(new Error(`Failed to parse CSV: ${Y.message}`))}},V.onerror=()=>j(new Error("Failed to read file")),V.readAsText(M)}),[]),$=b.useCallback(async()=>{_(!0),p(null);try{const B=fe(Ee,"factions/364"),j=await ze(B);if(j.exists()){const V=j.val(),q=V.members||{},Y=V.metadata||{};if(Object.keys(q).length===0){g([]),k(Y.lastUpdated?{uploadTime:Y.lastUpdated,uploadedBy:Y.uploadedBy,fileName:Y.fileName,statistics:Y.statistics}:null),t&&t("No faction members found in database","warning");return}const ue=Object.entries(q).map(([te,se])=>({characterId:parseInt(te),...se}));ue.sort((te,se)=>se.scriptRank!==te.scriptRank?se.scriptRank-te.scriptRank:te.characterName.localeCompare(se.characterName)),g(ue),k({uploadTime:Y.lastUpdated,uploadedBy:Y.uploadedBy,fileName:Y.fileName,statistics:Y.statistics}),t&&t(`Loaded ${ue.length} faction members from database`,"success")}else g([]),k(null),t&&t("No faction data found in database","info")}catch(M){console.error("[Faction Data] Error loading stored data:",M),p(`Failed to load stored data: ${M.message}`),g(null),t&&t(`Failed to load stored data: ${M.message}`,"error")}finally{_(!1)}},[t]);b.useEffect(()=>{if(!S)if(I==="stored")(f===null||u&&f===null)&&(console.log("[Faction Data] Loading stored data due to tab switch to stored"),$());else{const M=async()=>{try{const j=(await ze(fe(Ee,"factions/364/metadata"))).val();j&&j.statistics&&j.statistics.validRecords?g(new Array(j.statistics.validRecords)):g([])}catch(B){console.error("[Faction Data] Error loading count:",B),g([])}};f===null&&(console.log("[Faction Data] Loading count metadata for non-stored tab"),M())}},[I,$]),b.useEffect(()=>{if(I==="stored"&&f===null&&!S)console.log("[Faction Data] Initial load for stored tab"),$();else if(I!=="stored"&&f===null&&!S){const M=async()=>{try{const j=(await ze(fe(Ee,"factions/364/metadata"))).val();j&&j.statistics&&j.statistics.validRecords?g(new Array(j.statistics.validRecords)):g([])}catch(B){console.error("[Faction Data] Error loading initial count:",B),g([])}};console.log("[Faction Data] Initial count load for upload tab"),M()}},[]);const O=b.useCallback(async M=>{const B=M[0];if(B){n("uploading"),p(null),s(B);try{let j;const V=B.type==="application/json"||B.name.toLowerCase().endsWith(".json");V?(console.log("[Faction Upload] Processing JSON file:",B.name),j=await D(B)):(console.log("[Faction Upload] Processing CSV file:",B.name),j=await R(B)),console.log("[Faction Upload] Parsed data:",{totalRows:j.totalRows,validRows:j.validRows,errorCount:j.errors.length}),a(j),n("preview");const q=V?"JSON":"CSV";j.errors.length>0?t&&t(`${q} parsed with ${j.errors.length} errors. Please review before uploading.`,"warning"):t&&t(`Successfully parsed ${j.validRows} faction members from ${q}`,"success")}catch(j){console.error("[Faction Upload] Parse error:",j),p(j.message),n("error"),t&&t(`Failed to parse file: ${j.message}`,"error")}}},[R,D,t]),{getRootProps:E,getInputProps:y,isDragActive:w}=mg({onDrop:O,accept:{"text/csv":[".csv"],"application/vnd.ms-excel":[".csv"],"application/json":[".json"]},multiple:!1,disabled:e==="uploading"}),N=async()=>{if(o){n("uploading"),p(null);try{console.log("[Faction Upload] Uploading to Firebase...");try{t&&t("Clearing previous faction member records…","info"),await At(fe(Ee,"factions/364/members"),null),console.log("[Faction Upload] Cleared existing factions/364/members")}catch(j){console.warn("[Faction Upload] Failed to clear existing members before upload:",j),t&&t("Warning: Could not clear previous records. Proceeding with upload.","warning")}const B=await Qr(Cr,"uploadFactionData")({factionData:o.data,metadata:{fileName:o.fileName,totalRows:o.totalRows,validRows:o.validRows,uploadTime:o.uploadTime,factionId:364}});console.log("[Faction Upload] Upload result:",B.data),d(B.data),n("success"),t&&t(`Successfully uploaded ${o.validRows} faction members to database`,"success")}catch(M){console.error("[Faction Upload] Upload error:",M),Ze(M,{extra:{context:"Faction Data Upload"}}),p(M.message),n("error"),t&&t(`Upload failed: ${M.message}`,"error")}}},v=()=>{n("idle"),s(null),a(null),d(null),p(null)},A=()=>i.jsxs("div",{...E(),className:`border-2 border-dashed p-4 text-center cursor-pointer transition-colors ${w?"border-primary bg-light":"border-secondary"} ${e==="uploading"?"opacity-50":""}`,style:{minHeight:"150px",display:"flex",alignItems:"center",justifyContent:"center"},children:[i.jsx("input",{...y()}),i.jsx("div",{children:e==="uploading"?i.jsxs(i.Fragment,{children:[i.jsx(Qe,{animation:"border",className:"mb-3"}),i.jsx("p",{className:"mb-0",children:"Processing file..."})]}):i.jsxs(i.Fragment,{children:[i.jsx("i",{className:"fas fa-cloud-upload-alt fa-3x text-muted mb-3"}),i.jsx("p",{className:"mb-2",children:w?"Drop the file here":"Drag & drop faction CSV or JSON file here, or click to select"}),i.jsx("p",{className:"text-muted small mb-0",children:"Supports CSV files from GTA World UCP or a custom JSON array."})]})})]}),C=()=>i.jsxs("div",{className:"mt-4",children:[i.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-3",children:[i.jsx("h5",{children:"Data Preview"}),i.jsxs("div",{className:"d-flex gap-2",children:[i.jsx(de,{variant:"outline-secondary",size:"sm",onClick:v,children:"Upload Different File"}),i.jsxs(de,{variant:"success",size:"sm",onClick:N,disabled:o?.errors?.length>0,children:[i.jsx("i",{className:"fas fa-upload me-2"}),"Upload to Database"]})]})]}),i.jsxs("div",{className:"row mb-3",children:[i.jsx("div",{className:"col-md-3",children:i.jsx(vn,{className:"text-center",children:i.jsxs(vn.Body,{children:[i.jsx("h4",{className:"text-primary",children:o?.validRows||0}),i.jsx("small",{className:"text-muted",children:"Valid Records"})]})})}),i.jsx("div",{className:"col-md-3",children:i.jsx(vn,{className:"text-center",children:i.jsxs(vn.Body,{children:[i.jsx("h4",{className:"text-danger",children:o?.errors?.length||0}),i.jsx("small",{className:"text-muted",children:"Errors"})]})})}),i.jsx("div",{className:"col-md-3",children:i.jsx(vn,{className:"text-center",children:i.jsxs(vn.Body,{children:[i.jsx("h4",{className:"text-info",children:Math.max(...o?.data?.map(M=>M.scriptRank)||[0])}),i.jsx("small",{className:"text-muted",children:"Highest Rank"})]})})}),i.jsx("div",{className:"col-md-3",children:i.jsx(vn,{className:"text-center",children:i.jsxs(vn.Body,{children:[i.jsx("h4",{className:"text-success",children:o?.fileName}),i.jsx("small",{className:"text-muted",children:"File Name"})]})})})]}),o?.errors?.length>0&&i.jsxs(Et,{variant:"warning",children:[i.jsx(Et.Heading,{children:"Data Parsing Errors"}),i.jsxs("ul",{className:"mb-0",children:[o.errors.slice(0,10).map((M,B)=>i.jsx("li",{children:M},B)),o.errors.length>10&&i.jsx("li",{children:i.jsxs("em",{children:["...and ",o.errors.length-10," more errors"]})})]})]}),i.jsxs(ea,{striped:!0,bordered:!0,hover:!0,responsive:!0,size:"sm",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"Character ID"}),i.jsx("th",{children:"Character Name"}),i.jsx("th",{children:"Rank"}),i.jsx("th",{children:"Script Rank"}),i.jsx("th",{children:"Last Online"}),i.jsx("th",{children:"Activity"})]})}),i.jsx("tbody",{children:o?.data?.slice(0,20).map((M,B)=>i.jsxs("tr",{children:[i.jsx("td",{children:M.characterId}),i.jsx("td",{children:M.characterName}),i.jsx("td",{children:M.rank}),i.jsx("td",{children:i.jsx(fr,{bg:M.scriptRank>=13?"danger":M.scriptRank>=10?"warning":M.scriptRank>=7?"info":"secondary",children:M.scriptRank})}),i.jsx("td",{className:"small",children:M.lastOnline}),i.jsx("td",{className:"small",children:M.activity})]},B))})]}),o?.data?.length>20&&i.jsxs("p",{className:"text-muted text-center",children:["Showing first 20 of ",o.data.length," records"]})]});return i.jsxs(vn,{className:"mb-4",children:[i.jsx(vn.Header,{children:i.jsxs("h5",{className:"mb-0",children:[i.jsx("i",{className:"fas fa-users me-2"}),"Faction Data Management"]})}),i.jsx(vn.Body,{children:i.jsxs(dg,{activeKey:I,onSelect:M=>F(M),className:"mb-3",children:[i.jsxs($d,{eventKey:"upload",title:i.jsxs("span",{children:[i.jsx("i",{className:"fas fa-upload me-2"}),"Upload File"]}),children:["Hello! Please grab a copy of the faction CSV from the GTAWorld UCP and upload it here to manage faction data. ",i.jsx("a",{href:"https://ucp.gta.world/view/faction/364/populate?draw=2&columns%5B0%5D%5Bdata%5D=actions&columns%5B0%5D%5Bname%5D=actions&columns%5B0%5D%5Bsearchable%5D=true&columns%5B0%5D%5Borderable%5D=true&columns%5B0%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B0%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B1%5D%5Bdata%5D=id&columns%5B1%5D%5Bname%5D=characters.id&columns%5B1%5D%5Bsearchable%5D=true&columns%5B1%5D%5Borderable%5D=true&columns%5B1%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B1%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B2%5D%5Bdata%5D=name&columns%5B2%5D%5Bname%5D=name&columns%5B2%5D%5Bsearchable%5D=true&columns%5B2%5D%5Borderable%5D=true&columns%5B2%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B2%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B3%5D%5Bdata%5D=rank&columns%5B3%5D%5Bname%5D=rank&columns%5B3%5D%5Bsearchable%5D=true&columns%5B3%5D%5Borderable%5D=true&columns%5B3%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B3%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B4%5D%5Bdata%5D=scriptrank&columns%5B4%5D%5Bname%5D=scriptrank&columns%5B4%5D%5Bsearchable%5D=true&columns%5B4%5D%5Borderable%5D=true&columns%5B4%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B4%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B5%5D%5Bdata%5D=lastduty&columns%5B5%5D%5Bname%5D=lastduty&columns%5B5%5D%5Bsearchable%5D=true&columns%5B5%5D%5Borderable%5D=true&columns%5B5%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B5%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B6%5D%5Bdata%5D=lastonline&columns%5B6%5D%5Bname%5D=lastonline&columns%5B6%5D%5Bsearchable%5D=true&columns%5B6%5D%5Borderable%5D=true&columns%5B6%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B6%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B7%5D%5Bdata%5D=abas&columns%5B7%5D%5Bname%5D=abas&columns%5B7%5D%5Bsearchable%5D=true&columns%5B7%5D%5Borderable%5D=true&columns%5B7%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B7%5D%5Bsearch%5D%5Bregex%5D=false&order%5B0%5D%5Bcolumn%5D=3&order%5B0%5D%5Bdir%5D=desc&start=0&length=500&search%5Bvalue%5D=&search%5Bregex%5D=false&type=members&filters=&searchTerm=&_=1762736428879",children:"Expand by 'all' and then get CSV."})," Alternatively, you can upload a JSON file with an array of member objects.",I==="upload"&&i.jsxs(i.Fragment,{children:[e==="idle"&&A(),e==="uploading"&&A(),e==="preview"&&C(),e==="success"&&i.jsxs(Et,{variant:"success",children:[i.jsx(Et.Heading,{children:"Upload Successful!"}),i.jsx("p",{children:"Faction data has been successfully uploaded to the database."}),i.jsx("hr",{}),i.jsxs("div",{className:"d-flex justify-content-between",children:[i.jsx(de,{variant:"outline-success",onClick:v,children:"Upload Another File"}),i.jsx(de,{variant:"primary",onClick:()=>F("stored"),children:"View Stored Data"})]})]}),u&&i.jsxs(Et,{variant:"danger",children:[i.jsx(Et.Heading,{children:"Upload Error"}),i.jsx("p",{children:u}),i.jsx("hr",{}),i.jsx(de,{variant:"outline-danger",onClick:v,children:"Try Again"})]})]})]}),i.jsx($d,{eventKey:"stored",title:i.jsxs("span",{children:[i.jsx("i",{className:"fas fa-database me-2"}),"Stored Data (",f?.length||0,")"]}),children:I==="stored"&&i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-3",children:[i.jsxs("div",{children:[i.jsx("h6",{className:"mb-1",children:"Current Faction Database - Hit 'Refresh' to get the latest data"}),P&&P.uploadTime&&i.jsxs("small",{className:"text-muted",children:["Last updated: ",new Date(P.uploadTime).toLocaleString(),P.uploadedBy&&` by ${P.uploadedBy}`,P.fileName&&` (${P.fileName})`,P.statistics&&i.jsxs(i.Fragment,{children:[" • ",P.statistics.validRecords," members"]})]})]}),i.jsx(de,{variant:"outline-primary",size:"sm",onClick:$,disabled:S,children:S?i.jsxs(i.Fragment,{children:[i.jsx(Qe,{animation:"border",size:"sm",className:"me-2"}),"Loading..."]}):i.jsxs(i.Fragment,{children:[i.jsx("i",{className:"fas fa-refresh me-2"}),"Refresh"]})})]}),S&&!f&&i.jsxs("div",{className:"text-center py-4",children:[i.jsx(Qe,{animation:"border"}),i.jsx("p",{className:"mt-2",children:"Loading stored faction data..."})]}),f&&f.length>0&&i.jsxs(i.Fragment,{children:[(()=>{const M=f.filter(j=>parseFloat(j.activity||"0")<.25),B=f.filter(j=>parseFloat(j.activity||"0")>=.25);return i.jsxs(i.Fragment,{children:[i.jsx(Et,{variant:"info",children:i.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[i.jsxs("div",{children:[i.jsxs("strong",{children:[f.length," faction members"]})," currently stored in database.",i.jsx("br",{}),i.jsx("small",{children:"Data is used for authentication and permission management throughout the system."})]}),i.jsxs("div",{className:"text-end",children:[i.jsxs(fr,{bg:"success",className:"me-2",children:["Active: ",B.length]}),M.length>0&&i.jsxs(fr,{bg:"warning",children:["Inactive: ",M.length]})]})]})}),(()=>{const j=M.filter(V=>V.scriptRank>=14);return j.length>0?i.jsxs(Et,{variant:"danger",className:"mb-3",children:[i.jsxs(Et.Heading,{children:[i.jsx("i",{className:"fas fa-crown me-2"}),"High-Priority Admin Alert"]}),i.jsxs("p",{className:"mb-2",children:[i.jsxs("strong",{children:[j.length," high-ranking administrator(s)"]})," (Rank 14+) are inactive and require immediate attention:"]}),i.jsx("ul",{className:"mb-2",children:j.map(V=>i.jsxs("li",{children:[i.jsx("strong",{children:V.characterName})," -",V.scriptRank>=15?" Hospital President":" Executive Leadership","(Rank ",V.scriptRank,", ABAS: ",parseFloat(V.activity||"0").toFixed(2),")"]},V.characterId))}),i.jsxs("small",{className:"text-muted",children:[i.jsx("i",{className:"fas fa-info-circle me-1"}),"High-ranking inactive administrators may impact department operations and require priority intervention."]})]}):null})(),M.length>0&&i.jsxs(Et,{variant:"warning",className:"mb-3",children:[i.jsxs(Et.Heading,{children:[i.jsx("i",{className:"fas fa-exclamation-triangle me-2"}),"Inactivity Warning"]}),i.jsxs("p",{className:"mb-2",children:[i.jsxs("strong",{children:[M.length," members"]})," have an ABAS below 0.25 and are considered inactive."]}),i.jsxs("details",{children:[i.jsxs("summary",{className:"fw-bold",style:{cursor:"pointer"},children:["View Inactive Members (",M.length,")"]}),i.jsxs(ea,{striped:!0,size:"sm",className:"mt-2 mb-0",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"Character Name"}),i.jsx("th",{children:"Rank"}),i.jsx("th",{children:"Script Rank"}),i.jsx("th",{children:"ABAS"}),i.jsx("th",{children:"Status"})]})}),i.jsx("tbody",{children:M.sort((j,V)=>parseFloat(j.activity||"0")-parseFloat(V.activity||"0")).map(j=>{const V=parseFloat(j.activity||"0");let q="danger",Y="Critical";return j.scriptRank>=15?(q="danger",Y=V>=.15?"Presidential Alert":V>=.05?"Presidential Critical":"Presidential Emergency"):j.scriptRank>=14?(q="warning",Y=V>=.15?"Executive Alert":V>=.05?"Executive Critical":"Executive Emergency"):V>=.15?(q="warning",Y="At Risk"):V>=.05?(q="danger",Y="Inactive"):(q="dark",Y="Very Inactive"),i.jsxs("tr",{className:"table-warning",children:[i.jsx("td",{children:i.jsx("strong",{children:j.characterName})}),i.jsx("td",{children:j.rank}),i.jsx("td",{children:i.jsx(fr,{bg:"secondary",children:j.scriptRank})}),i.jsx("td",{children:i.jsx(fr,{bg:V===0?"dark":"warning",children:V.toFixed(2)})}),i.jsx("td",{children:i.jsx(fr,{bg:q,children:Y})})]},j.characterId)})})]})]})]})]})})(),i.jsxs(ea,{striped:!0,bordered:!0,hover:!0,responsive:!0,children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"#"}),i.jsx("th",{children:"Character Name"}),i.jsx("th",{children:"Rank"}),i.jsx("th",{children:"Script Rank"}),i.jsx("th",{children:"ABAS"}),i.jsx("th",{children:"Access Level"}),i.jsx("th",{children:"Permissions"})]})}),i.jsx("tbody",{children:f.map((M,B)=>{const j=parseFloat(M.activity||"0");let V="Member",q="secondary",Y=[];M.scriptRank>=15?(V="Leadership",q="danger",Y=["All Permissions","Executive Control","Strategic Oversight"]):M.scriptRank>=14?(V="Leadership",q="warning",Y=["Admin","Department Management","All Reports","Webhooks","Faction Upload"]):M.scriptRank>=13?(V="Senior Management",q="info",Y=["Limited Admin","Department Reports","Audit Logs"]):M.scriptRank>=12?(V="Middle Management",q="primary",Y=["Limited Admin","Own Reports","View Members"]):M.scriptRank>=11?(V="Supervisor",q="info",Y=["Admin","Webhooks","Faction Upload"]):M.scriptRank>=10?(V="Attending",q="primary",Y=["Admin","Faction Upload"]):M.scriptRank>=9?(V="Resident",q="success",Y=["Basic Access"]):M.scriptRank>=8?(V="Upper Level",q="success",Y=["Basic Access"]):M.scriptRank>=7?(V="Mid Level",q="secondary",Y=["Basic Access"]):M.scriptRank>=6?(V="Administration",q="secondary",Y=["Basic Access"]):M.scriptRank>=5&&(V="Entry Level",q="light",Y=["Basic Access"]);let ue="success",te=!1;return j<.25?(ue="danger",te=!0):j<.35?ue="warning":j<.5&&(ue="info"),i.jsxs("tr",{className:te?"table-danger":"",children:[i.jsx("td",{children:M.characterId}),i.jsxs("td",{children:[i.jsx("strong",{children:M.characterName}),te&&i.jsx("i",{className:"fas fa-exclamation-triangle text-danger ms-2",title:"Inactive member (ABAS < 0.25)"})]}),i.jsx("td",{children:M.rank}),i.jsx("td",{children:i.jsx(fr,{bg:q,children:M.scriptRank})}),i.jsx("td",{children:i.jsxs(fr,{bg:ue,title:te?"Inactive - ABAS below 0.25 threshold":`Active - ABAS ${j.toFixed(2)}`,children:[j.toFixed(2),te&&" (INACTIVE)"]})}),i.jsx("td",{children:i.jsx(fr,{bg:q,children:V})}),i.jsx("td",{children:i.jsx("small",{className:"text-muted",children:Y.join(", ")})})]},M.characterId)})})]})]}),f&&f.length===0&&i.jsxs(Et,{variant:"warning",children:[i.jsx(Et.Heading,{children:"No Faction Data"}),i.jsx("p",{children:"No faction member data is currently stored in the database."}),i.jsx("hr",{}),i.jsx(de,{variant:"primary",onClick:()=>F("upload"),children:"Upload CSV Data"})]}),u&&i.jsxs(Et,{variant:"danger",children:[i.jsx(Et.Heading,{children:"Database Error"}),i.jsx("p",{children:u}),i.jsx("hr",{}),i.jsx(de,{variant:"outline-danger",onClick:$,children:"Retry Loading"})]})]})})]})})]})},kx=()=>{const[t,e]=b.useState(null),[n,r]=b.useState([]),[s,o]=b.useState("none"),[a,l]=b.useState(!1),[d,u]=b.useState(null),p=b.useCallback(()=>{try{const k=_s();k&&k.faction?(e(k.faction),r(k.permissions||[]),o(k.accessLevel||"none")):(e(null),r([]),o("none")),u(null)}catch(k){console.error("[Faction Hook] Error loading faction data:",k),u(k.message),e(null),r([]),o("none")}},[]);b.useEffect(()=>{p()},[p]);const f=b.useCallback(async()=>{l(!0),u(null);try{await Yf(),p()}catch(k){console.error("[Faction Hook] Refresh failed:",k),u(k.message)}finally{l(!1)}},[p]),g=b.useCallback(k=>{try{return cN(k)}catch(D){return console.warn("[Faction Hook] Permission check failed:",D),!1}},[]),S=b.useCallback(k=>{try{return lN(k)}catch(D){return console.warn("[Faction Hook] Feature access check failed:",D),!1}},[]);let _=!1,I=null,F="none",P=[];try{_=Vf(),I=dN(),F=uN(),P=hN()}catch(k){console.warn("[Faction Hook] Error getting faction status:",k)}return{factionData:t,factionInfo:I,isMember:_,permissions:P,accessLevel:F,hasPermission:g,canAccessFeature:S,isLoading:a,error:d,refresh:f,canAccessAdmin:S("admin_panel"),canUploadFactionData:S("faction_upload"),canAccessDatabase:S("database_editor"),canManageWebhooks:S("webhook_management"),canViewAllReports:S("all_reports"),canViewDepartmentReports:S("department_reports"),canViewOwnReports:S("own_reports"),canCreateReports:S("create_reports"),canViewMembers:S("view_members"),canAccessAuditLogs:S("audit_logs"),isLeadership:F==="Leadership",isSeniorManagement:F==="Senior Management",isMiddleManagement:F==="Middle Management",isSupervisor:F==="Supervisor",isAttending:F==="Attending",isResident:F==="Resident",isUpperLevel:F==="Upper Level",isMidLevel:F==="Mid Level",isAdministration:F==="Administration",isEntryLevel:F==="Entry Level",isPresident:F==="Leadership",isExecutive:F==="Leadership",isChief:F==="Senior Management",isDeputyChief:F==="Middle Management",isManager:F==="Supervisor",isSeniorStaff:F==="Attending",isRegularStaff:F==="Mid Level",isTrainee:F==="Entry Level"}},Fx=async()=>{console.info("[Firebase Test] Starting connectivity test...");try{const t=aN();if(!t.valid)return{success:!1,error:"Configuration validation failed",details:t.issues};console.info("[Firebase Test] Functions instance created:",{app:!!Cr.app,region:"us-central1 (configured)",customDomain:Cr._delegate?._url?.includes("cloudfunctions.net"),functionsUrl:Cr._delegate?._url||"unknown"});const e=Qr(Cr,"exchangeAuthCodeForToken");console.info("[Firebase Test] Function callable created");try{await e({code:"test",redirectUri:"test",clientId:"test"})}catch(n){return console.info("[Firebase Test] Expected error received:",{code:n.code,message:n.message?.substring(0,100)+"..."}),n.code==="invalid-argument"||n.code==="functions/invalid-argument"||n.message?.includes("invalid-argument")?{success:!0,message:"Firebase Functions connectivity confirmed",functionReachable:!0,expectedError:n.code}:n.code==="functions/internal"||n.code==="internal"?{success:!1,error:"Firebase Function internal error",details:{code:n.code,message:n.message,suggestion:"Check Firebase Functions deployment and logs"}}:n.code==="functions/not-found"?{success:!1,error:"Firebase Function not found",details:{code:n.code,suggestion:"Deploy the exchangeAuthCodeForToken function"}}:{success:!1,error:"Unexpected error during connectivity test",details:{code:n.code,message:n.message}}}return{success:!1,error:"Unexpected success during test call",details:"Expected a validation error but got success"}}catch(t){return console.error("[Firebase Test] Connectivity test failed:",t),{success:!1,error:"Failed to initialize Firebase Functions",details:{message:t.message,code:t.code,stack:t.stack?.split(`
`).slice(0,3)}}}},Px=async()=>{console.info("[Profile Test] Starting profile retrieval test...");try{const t=sessionStorage.getItem("gta-access-token"),e=sessionStorage.getItem("gta-user-data"),n=e?JSON.parse(e):null;if(console.info("[Profile Test] Session check:",{hasToken:!!t,tokenPrefix:t?`${t.substring(0,10)}...`:"none",hasUser:!!n,username:n?.username||"unknown",userId:n?.id||"unknown"}),!t){const r=sessionStorage.getItem("gta-access-token"),s=sessionStorage.getItem("gtaworld-access-token");return{success:!1,error:"No authenticated session found",details:"User must be logged in to test profile retrieval",suggestion:"Complete OAuth login first",debugInfo:{properStorageKey:!!r,legacyStorageKey:!!s,allSessionKeys:Object.keys(sessionStorage)}}}console.info("[Profile Test] Found access token, testing profile API...");try{console.info("[Profile Test] Using Firebase Function to get live API data...");const{httpsCallable:r}=require("firebase/functions"),{functions:s}=require("../firebase"),a=await r(s,"getGtaWorldProfile")({accessToken:t});if(console.info("[Profile Test] Firebase Function result:",a.data),!a.data.success)throw new Error(`Profile retrieval failed: ${a.data.error||"Unknown error"}`);const l={message:"Live API data from GTA World /api/user endpoint",liveApiData:a.data.userData,storedSessionData:n,comparison:{liveApiKeys:a.data.metadata.dataKeys,storedDataKeys:n?Object.keys(n):[],dataSize:a.data.metadata.dataSize,timestamp:a.data.metadata.timestamp},analysis:{hasFactionsData:!!(a.data.userData?.user?.factions||a.data.userData?.factions),hasRoleData:!!(a.data.userData?.user?.role||a.data.userData?.role),hasCharacterData:!!(a.data.userData?.user?.character||a.data.userData?.character),userStructure:a.data.userData?.user?Object.keys(a.data.userData.user):"No user object found"}};return{success:!0,message:"Profile retrieval successful",rawProfileData:l,dataStructure:{keys:Object.keys(l||{}),hasUsername:!!(l?.username||l?.name),hasId:!!(l?.id||l?.user_id||l?.uid),dataType:typeof l,isArray:Array.isArray(l),dataSize:JSON.stringify(l||{}).length},currentSession:{storedUser:n,tokenPresent:!!t}}}catch(r){return console.error("[Profile Test] API call failed:",r),{success:!1,error:"Profile API call failed",details:{message:r.message,code:r.code,suggestion:"Check if access token is valid and API endpoint is correct"}}}}catch(t){return console.error("[Profile Test] Profile test failed:",t),{success:!1,error:"Profile retrieval test failed",details:t.message}}},$x=()=>{console.group("[OAuth Environment Info]"),console.info("Environment Variables:",{hasClientId:!0,clientIdPrefix:"82".substring(0,8)+"...",nodeEnv:void 0,publicUrl:void 0}),console.info("Firebase Config:",{hasApiKey:!0,authDomain:"gtaw-forms.firebaseapp.com",projectId:"gtaw-forms"}),console.info("Browser Environment:",{origin:window.location.origin,hostname:window.location.hostname,protocol:window.location.protocol,userAgent:navigator.userAgent}),console.groupEnd()},Jf=(t,e,n)=>{const r=async(d,u)=>{const f=fe(Ee,"webhook_logs"),g=xa(f);await At(g,{type:d,payload:u,timestamp:Date.now()})},s=async(d="normal")=>{const u="https://discord.com/api/webhooks/1430314470902599680/o_JoPsW9jNgKICL9StKxgORICn3cOzu41FheUsJFsPkRAX-Xt9LKTulXhWCaQsU5Cfxw",p=t.coronerEmployee||t.phmcEmployee||t.patientName||t.decedentName||"Someone";let f="🎉 Easter Egg Found! 🎉",g=`Hey! **${p}** just found the normal easter egg! 🥚`,S=7506394,_="Triggered during report save";d==="rare"&&(f="✨ Rare Easter Egg Found! ✨",g=`Wow! **${p}** just triggered the 1% rare easter egg! 🥚🎉`,S=16766720),window.location.hostname==="localhost"&&d==="rare"&&(f+=" (Manual Trigger)",g=`Debug: **${p}** just triggered the rare easter egg manually! 🥚🎉`,_="Triggered via Debug Button");const F={title:f,description:g,color:S,timestamp:new Date().toISOString(),footer:{text:`PHMC Tools Tool | ${_}`}};try{const P=await fetch(u,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({embeds:[F]})});P.ok?(console.log(`${d} easter egg notification sent successfully.`),await r(d,{embeds:[F]})):console.error(`Error sending ${d} easter egg webhook: ${P.status} ${P.statusText}`)}catch(P){console.error(`Failed to send ${d} easter egg webhook:`,P),Ze(P,{extra:{context:`sendEasterEggNotification (${d})`}})}},o=async(d,u,p,f,g)=>{if(!d)return console.error(`Discord webhook URL not configured for ${f}.`),sn(`Discord webhook URL is missing for ${f} submission.`,"error"),g("Configuration error: Unable to send message.","exclamation-triangle"),!1;try{const S=await fetch(d,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(u)});if(S.ok)return g(p,"check-circle"),!0;{const _=await S.text();return console.error(`Failed to send ${f} webhook embed. Status: ${S.status} ${S.statusText}`,_),sn(`Discord webhook embed failed for ${f}: ${S.status}`,{level:"error",extra:{statusText:S.statusText,responseBody:_}}),g(`Failed to send embed to ${f}. Status: ${S.status}`,"exclamation-triangle"),!1}}catch(S){return console.error(`Error sending ${f} webhook embed:`,S),Ze(S,{extra:{context:`${f} Webhook Embed Submission Fetch`}}),g(`A network error occurred sending to ${f}. Please try again.`,"exclamation-triangle"),!1}};return{logWebhookToFirebase:r,sendEasterEggNotification:s,handlePhmcWebhookSubmit:async d=>{if(!d)return;await o("https://discord.com/api/webhooks/1384933696330534952/lmq9IrXtH_t3-KKXOi_D4R2Bii5yrVjx-swSaZd9Hh18QGD5bZQb6VcxfcGSVtH3IQXI",d,"PHMC webhook embed sent successfully!","PHMC",n)},handleWebhookSubmit:async d=>{if(!d)return;await o("https://discord.com/api/webhooks/1430314470902599680/o_JoPsW9jNgKICL9StKxgORICn3cOzu41FheUsJFsPkRAX-Xt9LKTulXhWCaQsU5Cfxw",d,"Dev webhook embed sent successfully!","Dev",n)}}},Xf=(t,e)=>{const[n,r]=b.useState(!1);return{isUploading:n,handleImageUpload:async(o,a)=>{r(!0);let l=[];try{const d="bc8a1a6273ac8d229eef458de4a31d2d";let u=[];typeof o=="string"?u.push(o):o.target&&o.target.files?u=Array.from(o.target.files):u.push(o);for(const p of u){const f=new FormData;let g;typeof p=="string"?g=p.split(",")[1]:g=await new Promise((I,F)=>{const P=new FileReader;P.onload=()=>I(P.result.split(",")[1]),P.onerror=F,P.readAsDataURL(p)}),f.append("image",g);const _=await(await fetch(`https://api.imgbb.com/1/upload?key=${d}`,{method:"POST",body:f})).json();_.success?l.push(_.data.url):(console.error("ImgBB upload failed:",_.error.message),t(`ImgBB upload failed for one of the images: ${_.error.message}`,"exclamation-circle"))}if(l.length>0&&(t(`${l.length} image(s) uploaded successfully!`,"check-circle"),a))if(a.includes("-")){const[p,f]=a.split("-"),g=parseInt(f,10);e(S=>{const _=[...S.decedents],I=_[g],F=I[p]||"",P=F?`${F}, ${l.join(", ")}`:l.join(", ");return _[g]={...I,[p]:P},{...S,decedents:_}})}else e(p=>{const f=p[a]||"",g=f?`${f}, ${l.join(", ")}`:l.join(", ");return{...p,[a]:g}})}catch(d){console.error("Upload failed:",d),Ze(d,{extra:{context:"handleImageUpload"}}),t("Upload failed!","exclamation-circle")}finally{return r(!1),l}}}},Qf=b.createContext(),Dx=()=>{const t=b.useContext(Qf);if(!t)throw new Error("useWebhook must be used within a WebhookProvider");return t},Ox=({children:t,commitInfo:e})=>{const[n,r]=b.useState(""),[s,o]=b.useState(""),[a,l]=b.useState([]),[d,u]=b.useState(!1),{showNotification:p}=To(),{handlePhmcWebhookSubmit:f,handleWebhookSubmit:g}=Jf({},e,p),{handleImageUpload:S}=Xf(p),_=async R=>{const $=R.target.files;if(!(!$||$.length===0)){u(!0);try{const O=await S(R);O&&O.length>0?(l(E=>[...E,...O]),p(`${O.length} image(s) uploaded successfully!`,"check-circle")):p("Image upload returned no URLs.","warning")}catch(O){console.error("Error during image upload in WebhookManager:",O),Ze(O,{extra:{context:"WebhookManager handleLocalImageUpload"}}),p("An unexpected error occurred during upload.","exclamation-circle")}finally{u(!1),R.target&&(R.target.value=null)}}},I=R=>{const $=R.trim();if(!$){p("Please enter a URL.","warning");return}if(!$.startsWith("http://")&&!$.startsWith("https://")){p("Invalid URL format. Must start with http:// or https://","warning");return}if(a.includes($)){p("This URL has already been added.","info-circle");return}l(O=>[...O,$]),p("URL added successfully!","check-circle")},F=()=>{l([])},P=b.useCallback(()=>{const R=n.trim(),$=s.trim();if(!R&&!$&&a.length===0)return p("Please enter a title, message, or add media (image/URL).","warning"),null;if(R.length>256)return p("Embed title cannot exceed 256 characters.","warning"),null;let O=$||"",E=null;for(const v of a)if(/".(jpg|jpeg|png|gif)$/i.test(v)||v.includes("ibb.co")){E=v;break}const y=`PHMC Form Generator - v${e?.sha||"N/A"}`;if(O.length>4096)return p("Embed body (message content) cannot exceed 4096 characters.","warning"),null;const w=[{name:"[Delayed Updates] Form Generator Link",value:"https://phmc-tools.gta.world/",inline:!1},{name:"Alternative Form Generator Link",value:"https://gtaw-forms.github.io/forms/",inline:!1}],N={title:R||"PHMC Form Generator Notification",url:"https://phmc-tools.gta.world/",description:O.trim()||void 0,color:7506394,timestamp:new Date().toISOString(),image:E?{url:E}:void 0,fields:w,footer:{text:y}};return!$&&!R&&a.length>0&&(N.description=`Media submitted via PHMC Form Generator - v${e?.sha||"N/A"}`,N.description+=`

**Media:**
`,a.forEach((v,A)=>{const C=v.includes("streamable.com")?"Video":/".(jpg|jpeg|png|gif)$/i.test(v)||v.includes("ibb.co")?"Image":"Link";N.description+=`- ${C} ${A+1}: ${v}
`}),N.description.length>4096)?(p("Embed body (including media links) cannot exceed 4096 characters.","warning"),null):{username:"PHMC",avatar_url:"https://i.ibb.co/0pgw9hHm/phmc.png",embeds:[N]}},[n,s,a,e,p]),D={webhookTitle:n,setWebhookTitle:r,webhookMessage:s,setWebhookMessage:o,mediaUrls:a,addMediaUrl:I,clearMedia:F,handleLocalImageUpload:_,isUploading:d,sendWebhook:R=>{const $=P();$&&(R==="primary"?g($):R==="secondary"&&f($))}};return i.jsx(Qf.Provider,{value:D,children:t})},Mx=()=>{const{webhookTitle:t,setWebhookTitle:e,webhookMessage:n,setWebhookMessage:r,mediaUrls:s,addMediaUrl:o,clearMedia:a,handleLocalImageUpload:l,isUploading:d,sendWebhook:u,isSending:p,sendResult:f}=Dx(),[g,S]=b.useState(""),[_,I]=b.useState([]),[F,P]=b.useState(""),[k,D]=b.useState(!1),[R,$]=b.useState(null);b.useEffect(()=>{(async()=>{try{const j=Qs(),V=fe(j,"webhooks"),q=await ze(V);if(q.exists()){const Y=q.val(),ue=Object.keys(Y).map(te=>({id:te,...Y[te]}));I(ue)}}catch(j){console.error("Error loading webhooks:",j)}})()},[]);const O=()=>{g.trim()&&(o(g.trim()),S(""))},E=async()=>{F?await y():await u("primary")},y=async()=>{const B=_.find(j=>j.id===F);if(!B){$({success:!1,message:"Please select a webhook destination"});return}if(!t.trim()&&!n.trim()&&s.length===0){$({success:!1,message:"Please enter a title, message, or add media"});return}D(!0),$(null);try{const j=t.trim()||"PHMC Form Generator Notification",V=n.trim()||void 0;let q=null;for(const se of s)if(/\.(jpg|jpeg|png|gif)$/i.test(se)||se.includes("ibb.co")){q=se;break}const Y={title:j,url:"https://phmc-tools.gta.world/",description:V,color:7506394,timestamp:new Date().toISOString(),image:q?{url:q}:void 0,footer:{text:"PHMC Form Generator - Admin Panel"}};!V&&s.length>0&&(Y.description=`Media submitted via PHMC Form Generator

**Media:**
`,s.forEach((se,X)=>{const Z=se.includes("streamable.com")?"Video":/\.(jpg|jpeg|png|gif)$/i.test(se)||se.includes("ibb.co")?"Image":"Link";Y.description+=`- ${Z} ${X+1}: ${se}
`}));const ue={username:"PHMC",avatar_url:"https://i.ibb.co/0pgw9hHm/phmc.png",embeds:[Y]},te=await fetch(B.url,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ue)});te.ok?($({success:!0,message:`Webhook sent successfully to ${B.name}!`}),e(""),r(""),a()):$({success:!1,message:`Failed to send webhook: ${te.status}`})}catch(j){console.error("Error sending webhook:",j),$({success:!1,message:"Network error occurred. Please try again."})}finally{D(!1)}},w=B=>/\.(jpg|jpeg|png|gif)$/i.test(B)||B.includes("ibb.co"),N=B=>B.includes("streamable.com"),v="Major Update / Minor Update / Hotfix",A=`- Added: 
- Fixed: 
- Updated: `,C=t.trim()||n.trim()||s.length>0,M=R||f;return i.jsxs("div",{className:"webhook-manager-container",children:[M&&i.jsxs(Et,{variant:M.success?"success":"danger",className:"mb-3",children:[i.jsx("i",{className:`fas ${M.success?"fa-check":"fa-exclamation-triangle"} me-2`}),M.message]}),i.jsxs("div",{className:"form-group mb-3",children:[i.jsxs("label",{className:"form-label",children:[i.jsx("i",{className:"fas fa-bullhorn me-2"}),"Select Webhook Destination"]}),i.jsxs(pe.Select,{value:F,onChange:B=>P(B.target.value),children:[i.jsx("option",{value:"",children:"Default Webhooks (Dev/PHMC)"}),_.map(B=>i.jsxs("option",{value:B.id,children:[B.name," (",B.type,")"]},B.id))]}),i.jsx("small",{className:"form-text text-muted",children:F?"Sending to selected custom webhook":"Sending to default environment webhooks"})]}),i.jsxs("div",{className:"webhook-form",children:[i.jsxs("div",{className:"form-group mb-3",children:[i.jsxs("label",{className:"form-label",htmlFor:"webhookEmbedTitle",children:[i.jsx("i",{className:"fas fa-heading me-2"}),"Embed Title"]}),i.jsx(pe.Control,{type:"text",id:"webhookEmbedTitle",placeholder:v,value:t,onChange:B=>e(B.target.value),autoComplete:"off"})]}),i.jsxs("div",{className:"form-group mb-3",children:[i.jsxs("label",{className:"form-label",htmlFor:"webhookMessageTextarea",children:[i.jsx("i",{className:"fas fa-align-left me-2"}),"Embed Body"]}),i.jsx(pe.Control,{as:"textarea",id:"webhookMessageTextarea",rows:4,placeholder:A,value:n,onChange:B=>r(B.target.value),autoComplete:"off"}),i.jsx("small",{className:"form-text text-muted",children:"Supports basic Markdown. Media links will be appended automatically."})]}),i.jsxs("div",{className:"form-group mb-3",children:[i.jsxs("label",{className:"form-label",htmlFor:"webhookUrlInput",children:[i.jsx("i",{className:"fas fa-link me-2"}),"Add Media URL"]}),i.jsxs("div",{className:"input-group",children:[i.jsx("input",{type:"url",id:"webhookUrlInput",className:"form-control",placeholder:"Paste Image or Streamable URL...",value:g,onChange:B=>S(B.target.value),onKeyDown:B=>{B.key==="Enter"&&(B.preventDefault(),O())},autoComplete:"off"}),i.jsx("button",{type:"button",className:"btn btn-outline-secondary",onClick:O,disabled:!g.trim(),children:i.jsx("i",{className:"fas fa-plus"})})]})]}),i.jsxs("div",{className:"form-group mb-3",children:[i.jsxs("label",{className:"form-label",children:[i.jsx("i",{className:"fas fa-upload me-2"}),"Upload Images"]}),i.jsxs("div",{className:"d-grid",children:[i.jsxs("button",{type:"button",className:`btn btn-outline-primary ${d?"disabled":""}`,disabled:d,onClick:()=>document.getElementById("webhook-image-input-manager").click(),children:[i.jsx("i",{className:`fas ${d?"fa-spinner fa-spin":"fa-upload"} me-2`}),d?"Uploading...":"Upload Image(s)"]}),i.jsx("input",{id:"webhook-image-input-manager",type:"file",accept:"image/*",multiple:!0,style:{display:"none"},onChange:l})]}),i.jsx("small",{className:"form-text text-muted",children:"Upload one or more images. Hosted by ImgBB."})]}),s.length>0&&i.jsxs("div",{className:"form-group mb-3",children:[i.jsxs("label",{className:"form-label",children:[i.jsx("i",{className:"fas fa-images me-2"}),"Added Media (",s.length,")"]}),i.jsx("div",{className:"webhook-media-preview d-flex flex-wrap gap-2 mb-2",children:s.map((B,j)=>i.jsx("div",{className:"webhook-media-item",children:w(B)?i.jsx("img",{src:B,alt:`Preview ${j+1}`,className:"webhook-media-image rounded",title:B,onClick:()=>window.open(B,"_blank"),style:{cursor:"pointer",width:"60px",height:"60px",objectFit:"cover"}}):N(B)?i.jsxs("div",{className:"webhook-media-link btn btn-outline-info btn-sm",title:B,onClick:()=>window.open(B,"_blank"),style:{cursor:"pointer"},children:[i.jsx("i",{className:"fas fa-video me-1"}),"Video"]}):i.jsxs("div",{className:"webhook-media-link btn btn-outline-secondary btn-sm",title:B,onClick:()=>window.open(B,"_blank"),style:{cursor:"pointer"},children:[i.jsx("i",{className:"fas fa-link me-1"}),"Link"]})},j))}),i.jsxs("button",{type:"button",className:"btn btn-sm btn-outline-danger",onClick:a,title:"Clear All Media",children:[i.jsx("i",{className:"fas fa-trash me-1"}),"Clear All (",s.length,")"]})]}),i.jsx("div",{className:"d-grid mt-4",children:i.jsx(de,{variant:"primary",size:"lg",onClick:E,disabled:!C||p||k,children:p||k?i.jsxs(i.Fragment,{children:[i.jsx("span",{className:"spinner-border spinner-border-sm me-2",role:"status","aria-hidden":"true"}),"Sending Webhook..."]}):i.jsxs(i.Fragment,{children:[i.jsx("i",{className:"fas fa-paper-plane me-2"}),"Send to ",F?_.find(B=>B.id===F)?.name||"Selected":"Default"," Webhook"]})})}),!C&&i.jsx("small",{className:"text-muted text-center d-block mt-2",children:"Add a title, message, or media to enable sending"})]})]})},hr=async(t,e)=>{const n=Qr(Cr,t);try{return(await n(e)).data}catch(r){throw console.error(`Error calling ${t}:`,r),r}},jx=t=>hr("exchangeAuthCodeForToken",t),Lx=t=>hr("getTokenForSecrets",t),Ux=()=>hr("getManagedGtaWorldToken"),Bx=()=>hr("getProfileWithManagedToken"),Hx=t=>hr("validateGtaWorldToken",t),Gx=t=>hr("getCachedGtaWorldProfile",t),Wx=t=>hr("getGtaWorldProfile",t),zx=t=>hr("uploadFactionData",t),qx=t=>hr("batchCheckFactionMembership",t),Vx=t=>hr("checkFactionMembership",t),Yx=({showInAppNotification:t})=>{const[e,n]=b.useState(!1),[r,s]=b.useState(null),[o,a]=b.useState(""),[l,d]=b.useState(""),[u,p]=b.useState(""),[f,g]=b.useState(""),[S,_]=b.useState("364"),[I,F]=b.useState(""),[P,k]=b.useState(""),[D,R]=b.useState(""),$=async(O,...E)=>{n(!0),s(null);try{const y=await O(...E);s(y),t("Function triggered successfully. Check console for details.","success")}catch(y){s({error:y.message}),t(`Error triggering function: ${y.message}`,"error")}n(!1)};return i.jsxs("div",{className:"card",children:[i.jsx("div",{className:"card-header",children:i.jsx("h6",{className:"mb-0",children:"Firebase Functions Remote Trigger"})}),i.jsxs("div",{className:"card-body",children:[i.jsx("p",{className:"text-muted small",children:"Scheduled functions (dailyTaskHandler, weeklyDuplicateReportsCleanup) cannot be triggered directly from the client. Use Firebase Console or CLI for manual triggers."}),i.jsx("h7",{className:"mt-3",children:"OAuth & Token Management"}),i.jsxs("div",{className:"d-flex flex-wrap gap-2 mb-3",children:[i.jsx(pe.Control,{type:"text",placeholder:"Auth Code",value:o,onChange:O=>a(O.target.value),className:"w-auto"}),i.jsx(pe.Control,{type:"text",placeholder:"Redirect URI",value:l,onChange:O=>d(O.target.value),className:"w-auto"}),i.jsx(de,{variant:"primary",size:"sm",onClick:()=>$(jx,{code:o,redirectUri:l}),disabled:e||!o||!l,children:e?i.jsx(Qe,{as:"span",animation:"border",size:"sm"}):"exchangeAuthCodeForToken"}),i.jsx(de,{variant:"primary",size:"sm",onClick:()=>$(Lx,{code:o,redirectUri:l}),disabled:e||!o||!l,children:e?i.jsx(Qe,{as:"span",animation:"border",size:"sm"}):"getTokenForSecrets"}),i.jsx(de,{variant:"primary",size:"sm",onClick:()=>$(Ux),disabled:e,children:e?i.jsx(Qe,{as:"span",animation:"border",size:"sm"}):"getManagedGtaWorldToken"}),i.jsx(de,{variant:"primary",size:"sm",onClick:()=>$(Bx),disabled:e,children:e?i.jsx(Qe,{as:"span",animation:"border",size:"sm"}):"getProfileWithManagedToken"})]}),i.jsx("h7",{className:"mt-3",children:"Profile & Validation"}),i.jsxs("div",{className:"d-flex flex-wrap gap-2 mb-3",children:[i.jsx(pe.Control,{type:"text",placeholder:"Access Token",value:u,onChange:O=>p(O.target.value),className:"w-auto"}),i.jsx(de,{variant:"primary",size:"sm",onClick:()=>$(Hx,{accessToken:u}),disabled:e||!u,children:e?i.jsx(Qe,{as:"span",animation:"border",size:"sm"}):"validateGtaWorldToken"}),i.jsx(de,{variant:"primary",size:"sm",onClick:()=>$(Gx,{accessToken:u}),disabled:e||!u,children:e?i.jsx(Qe,{as:"span",animation:"border",size:"sm"}):"getCachedGtaWorldProfile"}),i.jsx(de,{variant:"primary",size:"sm",onClick:()=>$(Wx,{accessToken:u}),disabled:e||!u,children:e?i.jsx(Qe,{as:"span",animation:"border",size:"sm"}):"getGtaWorldProfile"})]}),i.jsx("h7",{className:"mt-3",children:"Faction Data Management"}),i.jsxs("div",{className:"d-flex flex-wrap gap-2 mb-3",children:[i.jsx(pe.Control,{type:"text",placeholder:"Character ID (single)",value:f,onChange:O=>g(O.target.value),className:"w-auto"}),i.jsx(pe.Control,{type:"text",placeholder:"Faction ID (default: 364)",value:S,onChange:O=>_(O.target.value),className:"w-auto"}),i.jsx(de,{variant:"primary",size:"sm",onClick:()=>$(Vx,{characterId:parseInt(f),factionId:parseInt(S),accessToken:u}),disabled:e||!f||!S,children:e?i.jsx(Qe,{as:"span",animation:"border",size:"sm"}):"checkFactionMembership"}),i.jsx(pe.Control,{type:"text",placeholder:"Character IDs (comma-separated)",value:D,onChange:O=>R(O.target.value),className:"w-auto"}),i.jsx(de,{variant:"primary",size:"sm",onClick:()=>$(qx,{characterIds:D.split(",").map(O=>parseInt(O.trim())),factionId:parseInt(S),accessToken:u}),disabled:e||!D||!S,children:e?i.jsx(Qe,{as:"span",animation:"border",size:"sm"}):"batchCheckFactionMembership"}),i.jsx(pe.Control,{type:"text",placeholder:"Faction Data (JSON array)",value:I,onChange:O=>F(O.target.value),className:"w-auto"}),i.jsx(pe.Control,{type:"text",placeholder:"Metadata (JSON object)",value:P,onChange:O=>k(O.target.value),className:"w-auto"}),i.jsx(de,{variant:"primary",size:"sm",onClick:()=>$(zx,{factionData:JSON.parse(I),metadata:JSON.parse(P)}),disabled:e||!I||!P,children:e?i.jsx(Qe,{as:"span",animation:"border",size:"sm"}):"uploadFactionData"})]}),r&&i.jsx(Et,{variant:r.error?"danger":"success",className:"mt-3",children:i.jsx("pre",{style:{maxHeight:"300px",overflowY:"scroll",fontSize:"0.8em"},children:JSON.stringify(r,null,2)})})]})]})},Kx=()=>{const[t,e]=b.useState([]),[n,r]=b.useState(!1),[s,o]=b.useState(null),[a,l]=b.useState(!1),[d,u]=b.useState(!1),[p,f]=b.useState(null),g=b.useCallback(async()=>{l(!0),console.log("[Debug] Fetching employees from Nursing_Records...");try{const k=fe(Ee,"Nursing_Records"),D=await ze(k);if(D.exists()){const R=D.val(),$=Object.keys(R).map(O=>({id:O,...R[O]}));console.log("[Debug] Fetched employees:",$),e($)}else console.log("[Debug] No employees found in Nursing_Records."),e([])}catch(k){f("Failed to fetch employees."),console.error(k)}finally{l(!1)}},[]),S=k=>{const{name:D,value:R}=k.target;s&&o($=>({...$,[D]:R}))},_=async()=>{if(!s||!s.name||!s.surname){f("Name and surname are required.");return}l(!0);try{const k=fe(Ee,`Nursing_Records/${s.id}`);await wr(k,s),e(D=>D.map(R=>R.id===s.id?s:R)),r(!1),o(null)}catch(k){f("Failed to update employee."),console.error(k)}finally{l(!1)}},I=k=>{o(k),r(!0)},F=()=>{r(!1),o(null)},P=async()=>{u(!0),f(null),console.log("[Debug] Starting sync process...");try{const k=fe(Ee,"factions/364/members"),D=await ze(k);if(!D.exists())throw new Error("Faction members data not found in Realtime Database.");const R=D.val();console.log("[Debug] Fetched all faction members:",R);const $=Object.values(R).filter(v=>v.rank.includes("Nurse")||v.rank.includes("Nursing"));console.log("[Debug] Filtered nursing staff:",$);const O=new Set($.map(v=>v.characterId)),E=fe(Ee,"Nursing_Records"),y=await ze(E),w=y.exists()?y.val():{};console.log("[Debug] Fetched existing RTDB employees:",w);const N=Object.fromEntries(Object.entries(w).map(([v,A])=>[A.characterId,{...A,id:v}]));console.log("[Debug] Mapped RTDB employees by char ID:",N),console.log("[Debug] Checking for new or updated employees...");for(const v of $){const[A,C]=v.characterName.split(" "),M=N[v.characterId];if(M){if(M.factionRank!==v.rank){console.log(`[Debug] Updating rank for ${v.characterName} from ${M.factionRank} to ${v.rank}`);const B=fe(Ee,`Nursing_Records/${M.id}`);await wr(B,{factionRank:v.rank})}}else{console.log(`[Debug] Adding new employee: ${v.characterName}`);const B=fe(Ee,`Nursing_Records/char_${v.characterId}`);await At(B,{characterId:v.characterId,name:A||"",surname:C||"",factionRank:v.rank,family:"",closeFamily:"",address:"",phoneNumber:"",createdAt:new Date().toISOString()})}}console.log("[Debug] Checking for employees to remove...");for(const v in w){const A=w[v];if(A.characterId&&!O.has(A.characterId)){console.log(`[Debug] Removing employee: ${A.name} ${A.surname} (ID: ${A.characterId})`);const C=fe(Ee,`Nursing_Records/${v}`);await Gn(C)}}console.log("[Debug] Sync process complete. Refreshing employee list."),g()}catch(k){f("Failed to synchronize faction staff."),console.error(k)}finally{u(!1)}};return i.jsxs("div",{children:[i.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-3",children:[i.jsx("h3",{children:"Employee Records"}),i.jsx(de,{variant:"success",onClick:P,disabled:d,className:"d-flex align-items-center",children:d?i.jsxs(i.Fragment,{children:[i.jsx(Qe,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true",className:"me-2"}),"Syncing..."]}):i.jsxs(i.Fragment,{children:[i.jsx("i",{className:"fas fa-sync-alt me-2"})," Load Employees"]})})]}),p&&i.jsx(Et,{variant:"danger",onClose:()=>f(null),dismissible:!0,children:p}),a&&!t.length?i.jsx("div",{className:"text-center",children:i.jsx(Qe,{animation:"border"})}):i.jsxs(ea,{striped:!0,bordered:!0,hover:!0,responsive:!0,children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsxs("th",{children:[i.jsx("i",{className:"fas fa-user me-2"}),"Name"]}),i.jsxs("th",{children:[i.jsx("i",{className:"fas fa-user me-2"}),"Surname"]}),i.jsxs("th",{children:[i.jsx("i",{className:"fas fa-briefcase me-2"}),"Rank"]}),i.jsxs("th",{children:[i.jsx("i",{className:"fas fa-users me-2"}),"Family"]}),i.jsxs("th",{children:[i.jsx("i",{className:"fas fa-user-friends me-2"}),"Close Family"]}),i.jsxs("th",{children:[i.jsx("i",{className:"fas fa-map-marker-alt me-2"}),"Address"]}),i.jsxs("th",{children:[i.jsx("i",{className:"fas fa-phone me-2"}),"Phone Number"]}),i.jsxs("th",{children:[i.jsx("i",{className:"fas fa-cogs me-2"}),"Actions"]})]})}),i.jsx("tbody",{children:t.map(k=>i.jsxs("tr",{children:[i.jsx("td",{children:k.name}),i.jsx("td",{children:k.surname}),i.jsx("td",{children:k.factionRank}),i.jsx("td",{children:k.family}),i.jsx("td",{children:k.closeFamily}),i.jsx("td",{children:k.address}),i.jsx("td",{children:k.phoneNumber}),i.jsx("td",{children:i.jsx(de,{variant:"outline-primary",size:"sm",onClick:()=>I(k),children:i.jsx("i",{className:"fas fa-edit"})})})]},k.id))})]}),n&&vl.createPortal(i.jsx("div",{className:"modal-overlay",onClick:F,children:i.jsxs("div",{className:"cctv-modal-dialog",onClick:k=>k.stopPropagation(),children:[i.jsxs("div",{className:"cctv-modal-header",children:[i.jsx("h4",{className:"cctv-title",children:"Edit Employee Record"}),i.jsx("button",{type:"button",className:"modal-close-btn",onClick:F,"aria-label":"Close",children:"×"})]}),i.jsx("div",{className:"cctv-modal-body",children:s&&i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"cctv-form-section",children:[i.jsxs("h5",{children:[i.jsx("i",{className:"fas fa-user me-2"}),"Personal Information"]}),i.jsxs("div",{className:"cctv-form-row",children:[i.jsxs("div",{className:"cctv-form-group",children:[i.jsx("label",{className:"cctv-form-label required",children:"Name"}),i.jsx("input",{type:"text",className:"form-control",name:"name",value:s.name,onChange:S,placeholder:"Enter first name",disabled:!0,title:"Name cannot be modified"})]}),i.jsxs("div",{className:"cctv-form-group",children:[i.jsx("label",{className:"cctv-form-label required",children:"Surname"}),i.jsx("input",{type:"text",className:"form-control",name:"surname",value:s.surname,onChange:S,placeholder:"Enter last name",disabled:!0,title:"Surname cannot be modified"})]})]}),i.jsxs("div",{className:"cctv-form-row",children:[i.jsxs("div",{className:"cctv-form-group",children:[i.jsx("label",{className:"cctv-form-label",children:"Family"}),i.jsx("input",{type:"text",className:"form-control",name:"family",value:s.family,onChange:S,placeholder:"Extended family connections",disabled:a})]}),i.jsxs("div",{className:"cctv-form-group",children:[i.jsx("label",{className:"cctv-form-label",children:"Close Family"}),i.jsx("input",{type:"text",className:"form-control",name:"closeFamily",value:s.closeFamily,onChange:S,placeholder:"Immediate family members",disabled:a})]})]})]}),i.jsxs("div",{className:"cctv-form-section",children:[i.jsxs("h5",{children:[i.jsx("i",{className:"fas fa-address-card me-2"}),"Contact & Location Information"]}),i.jsx("div",{className:"cctv-form-row",children:i.jsxs("div",{className:"cctv-form-group full-width",children:[i.jsx("label",{className:"cctv-form-label",children:"Address"}),i.jsx("input",{type:"text",className:"form-control",name:"address",value:s.address,onChange:S,placeholder:"Residential address",disabled:a})]})}),i.jsx("div",{className:"cctv-form-row",children:i.jsxs("div",{className:"cctv-form-group",children:[i.jsx("label",{className:"cctv-form-label",children:"Phone Number"}),i.jsx("input",{type:"text",className:"form-control",name:"phoneNumber",value:s.phoneNumber,onChange:S,placeholder:"Contact phone number",disabled:a})]})})]})]})}),i.jsxs("div",{className:"cctv-modal-footer",children:[i.jsx("button",{className:"cctv-btn cctv-btn-secondary",onClick:F,disabled:a,children:"Cancel"}),i.jsx("button",{className:"cctv-btn cctv-btn-primary",onClick:_,disabled:a,children:a?i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"cctv-spinner"}),"Saving..."]}):i.jsxs(i.Fragment,{children:[i.jsx("i",{className:"fas fa-save"}),"Save Changes"]})})]})]})}),document.getElementById("modal-root"))]})},Jx=({currentUser:t,desktopNotificationPermission:e,handleEnableDesktopNotifications:n,isUpdatingDb:r,selectedRecruitmentCategory:s,setSelectedRecruitmentCategory:o,recruitmentCategories:a,handleAddRoleClick:l,isLoadingRecruitmentData:d,currentRecruitmentData:u,handleRenameRoleKeyClick:p,handleEditRoleClick:f,handleTogglePositionStatus:g,selectedAdminBingoType:S,setSelectedAdminBingoType:_,BINGO_TYPES:I,handleManualResetAllBingoCards:F,handleGenerateNewBingoCard:P,handleClearBingoActivity:k,handleDisableBingoCard:D,setShowEditBingoPhrasesModal:R,selectedTypeForEdit:$,setShowReviewPhrasesModal:O,setShowUserManagementModal:E,setShowCctvWebhookModal:y,handleLogout:w,Sentry:N,showInAppNotification:v,setShowOAuthTokenExchangeModal:A,setShowUserDataExchangeModal:C,lockdownConfig:M,setLockdownConfig:B,handleUpdateLockdownStatus:j,webhooks:V,newWebhook:q,setNewWebhook:Y,handleAddWebhook:ue,handleDeleteWebhook:te,isUpdatingWebhooks:se,customWebhookChannel:X,setCustomWebhookChannel:Z,customWebhookTitle:re,setCustomWebhookTitle:he,customWebhookMessage:be,setCustomWebhookMessage:ge,customWebhookUrl:Re,setCustomWebhookUrl:Pe,customWebhookSending:Je,customWebhookResult:we,handleSendCustomWebhook:Ge,logRefreshTrigger:bt,setLogRefreshTrigger:Jt,handleScanDuplicateReports:zt,handleDeleteDuplicateReports:L,duplicateReports:ne,isScanningDuplicates:W,isDeletingDuplicates:oe})=>{const[ae,Ne]=b.useState("serviceStatus"),[Se,ye]=b.useState(null),[Ae,G]=b.useState(!1),[Xe,Le]=b.useState(!1),Pt=Ua(),{user:Me,isAuthenticated:K,error:Ue,isLoading:We}=ur(),{isMember:He,factionData:Ie,accessLevel:De,canAccessAdmin:st,canUploadFactionData:yt,canAccessDatabase:pn,canManageWebhooks:Ut,refresh:Dt,isLoading:ot}=kx(),Fn=lr();Td();const[Tt,Pn]=b.useState(!1),on=(Fn||Tt)&&t,Ot=t&&!t.isGtaAuth&&!t.isGoogleAuth,Xt=Me?.faction?.scriptRank,$s=Xt>=13,$n=Xt>=14,Sn=Xt>=15,Zr=Xt>=11,$e=on||$n,fn=on||$n,rt=on||$n,Bt=on||Sn,gn=on||$s,mr=Ot,Xn=on||st,Dn=on||yt||Xt>=10,On=on||pn||Xt>=12,bn=on||Ut||Zr,Mt=async()=>{try{const ee=await Fx();v&&v(ee.success?"Firebase Functions test passed":`Test failed: ${ee.error}`,ee.success?"success":"error"),console.info("Firebase test result:",ee)}catch(ee){v&&v(`Test error: ${ee.message}`,"error")}},es=async()=>{try{const ee=await Px();v&&v(ee.success?"Profile retrieval successful - check console for raw data":`Profile test failed: ${ee.error}`,ee.success?"success":"error"),console.info("Profile test result:",ee),ee.success&&ee.rawProfileData&&(console.group("🔍 RAW PROFILE DATA"),console.log("Full API Response:",ee.rawProfileData),console.log("Data Structure:",ee.dataStructure),console.groupEnd())}catch(ee){v&&v(`Profile test error: ${ee.message}`,"error")}},kr=async ee=>{try{const Oe={username:"PHMC Test",avatar_url:"https://i.ibb.co/0pgw9hHm/phmc.png",embeds:[{title:"🧪 Webhook Test",description:`This is a test message for the webhook: **${ee.name}**

Webhook Type: ${ee.type}
Test Time: ${new Date().toLocaleString()}`,color:65280,timestamp:new Date().toISOString(),footer:{text:"PHMC Form Generator - Admin Panel Test"}}]},vt=await fetch(ee.url,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Oe)});vt.ok?v&&v(`Test webhook sent successfully to ${ee.name}!`,"success"):v&&v(`Failed to send test webhook: ${vt.status}`,"error")}catch(Oe){console.error("Error sending test webhook:",Oe),v&&v("Error sending test webhook","error")}},an=async()=>{if(window.confirm("Are you sure you want to run the report migration? This operation cannot be undone.")){Le(!0),v&&v("Starting report migration...","info");try{const ee=Sd(),vt=await Qr(ee,"migrateReportsToNewStructure")();vt.data.success?(v&&v(`Migration complete: ${vt.data.migratedCount} reports migrated.`,"success"),console.log("Migration result:",vt.data)):(v&&v(`Migration failed: ${vt.data.message||"Unknown error"}`,"error"),console.error("Migration failed:",vt.data))}catch(ee){console.error("Error calling migrateReportsToNewStructure:",ee),v&&v(`Error during migration: ${ee.message}`,"error"),N.captureException(ee,{extra:{context:"handleMigrateReports"}})}finally{Le(!1)}}};return i.jsx("div",{className:"admin-dashboard-container",children:i.jsxs("div",{className:"admin-dashboard-layout",children:[i.jsxs("div",{className:"sidebar",children:[i.jsxs("div",{className:"sidebar-header",children:[i.jsx("h5",{children:"Admin Panel"}),i.jsxs("p",{children:["Logged in as: ",K&&Me?Me.username:t?.email||"Unknown"]}),Me&&i.jsxs("p",{className:"text-info",children:[i.jsx("i",{className:"fas fa-user me-1"}),"GTA World: ",Me.username]}),t&&mr&&i.jsxs("div",{className:"mt-3",children:[i.jsxs("div",{className:"form-check form-switch",children:[i.jsx("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"googleAdminToggle",checked:Tt,onChange:ee=>Pn(ee.target.checked)}),i.jsx("label",{className:"form-check-label",htmlFor:"googleAdminToggle",children:i.jsx("small",{children:"Enable Google Admin Override"})})]}),i.jsx("small",{className:"text-muted d-block mt-1",children:"Toggle to test faction permission restrictions"})]})]}),i.jsxs("div",{className:"nav-pills-flex-column",children:[$e&&i.jsxs("button",{className:`nav-link ${ae==="lockdown"?"active":""}`,onClick:()=>Ne("lockdown"),children:[i.jsx("i",{className:"fas fa-lock me-2"}),"Lockdown"]}),i.jsxs("button",{className:`nav-link ${ae==="recruitment"?"active":""}`,onClick:()=>Ne("recruitment"),children:[i.jsx("i",{className:"fas fa-user-plus me-2"}),"Recruitment"]}),fn&&i.jsxs("button",{className:`nav-link ${ae==="bingo"?"active":""}`,onClick:()=>Ne("bingo"),children:[i.jsx("i",{className:"fas fa-dice me-2"}),"Bingo"]}),rt&&i.jsxs("button",{className:`nav-link ${ae==="users"?"active":""}`,onClick:()=>Ne("users"),children:[i.jsx("i",{className:"fas fa-users-cog me-2"}),"Users"]}),gn&&i.jsxs("button",{className:`nav-link ${ae==="employeeManager"?"active":""}`,onClick:()=>Ne("employeeManager"),children:[i.jsx("i",{className:"fas fa-users me-2"}),"Employee Manager"]}),i.jsxs("button",{className:`nav-link ${ae==="webhooks"?"active":""}`,onClick:()=>Ne("webhooks"),children:[i.jsx("i",{className:"fas fa-bullhorn me-2"}),"Webhooks"]}),i.jsxs("button",{className:`nav-link ${ae==="factions"?"active":""}`,onClick:()=>Ne("factions"),children:[i.jsx("i",{className:"fas fa-users me-2"}),"Faction Data"]}),i.jsxs("button",{className:`nav-link ${ae==="dev"?"active":""}`,onClick:()=>Ne("dev"),children:[i.jsx("i",{className:"fas fa-code me-2"}),"Developer"]}),i.jsxs("button",{className:`nav-link ${ae==="database"?"active":""}`,onClick:()=>Ne("database"),children:[i.jsx("i",{className:"fas fa-database me-2"}),"Database"]}),Bt&&i.jsxs("button",{className:`nav-link ${ae==="rankPermissions"?"active":""}`,onClick:()=>Ne("rankPermissions"),children:[i.jsx("i",{className:"fas fa-user-shield me-2"}),"Rank Permissions"]})]}),i.jsxs("div",{className:"sidebar-footer",children:[e==="default"&&i.jsxs(de,{variant:"outline-info",size:"sm",onClick:n,className:"w-100 mb-2",title:"Click to allow desktop notifications for status updates",children:[i.jsx("i",{className:"fas fa-bell"})," Enable Notifications"]}),i.jsxs(de,{variant:"warning",onClick:w,className:"w-100",children:[i.jsx("i",{className:"fas fa-sign-out-alt me-2"}),"Sign Out ",Me?"(GTA World)":Fn?"(Google Admin)":"(Firebase)"]}),i.jsxs(de,{type:"button",variant:"secondary",className:"changelog-button",onClick:()=>Pt("/"),title:"Go to Home",children:[" ",i.jsx("i",{className:"fas fa-home"}),"Home"]})]})]}),i.jsxs("div",{className:"main-content",children:[K&&He&&Ie&&i.jsxs("div",{className:"card mb-4",children:[i.jsx("div",{className:"card-header bg-primary text-white",children:i.jsxs("h5",{className:"mb-0",children:[i.jsx("i",{className:"fas fa-user-shield me-2"}),"Welcome to PHMC Admin Panel"]})}),i.jsxs("div",{className:"card-body",children:[i.jsxs("div",{className:"row",children:[i.jsxs("div",{className:"col-md-6",children:[i.jsx("h6",{className:"text-primary",children:"Character Information"}),i.jsxs("p",{className:"mb-1",children:[i.jsx("strong",{children:"Character Name:"})," ",Ie.characterName]}),i.jsxs("p",{className:"mb-1",children:[i.jsx("strong",{children:"Character ID:"})," ",Ie.characterId]}),i.jsxs("p",{className:"mb-1",children:[i.jsx("strong",{children:"UCP User:"})," ",Me.username]})]}),i.jsxs("div",{className:"col-md-6",children:[i.jsx("h6",{className:"text-primary",children:"PHMC Status"}),i.jsxs("p",{className:"mb-1",children:[i.jsx("strong",{children:"Rank:"})," ",Ie.rank]}),i.jsxs("p",{className:"mb-1",children:[i.jsx("strong",{children:"Script Rank:"})," ",Ie.scriptRank]}),i.jsxs("p",{className:"mb-1",children:[i.jsx("strong",{children:"Access Level:"})," ",i.jsx("span",{className:"badge bg-success",children:De})]}),Ie.activity&&i.jsxs("p",{className:"mb-1",children:[i.jsx("strong",{children:"Activity:"})," ",Ie.activity]})]})]}),Ie.lastOnline&&i.jsx("div",{className:"mt-2",children:i.jsxs("small",{className:"text-muted",children:[i.jsx("i",{className:"fas fa-clock me-1"}),"Last online: ",Ie.lastOnline]})})]})]}),ae==="lockdown"&&i.jsxs("div",{className:"card",children:[i.jsx("div",{className:"card-header",children:"Site Lockdown"}),i.jsx("div",{className:"card-body",children:$e?i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"form-check form-switch mb-3",children:[i.jsx("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"lockdownSwitch",checked:M.enabled,onChange:ee=>B(Oe=>({...Oe,enabled:ee.target.checked}))}),i.jsx("label",{className:"form-check-label",htmlFor:"lockdownSwitch",children:"Enable Site Lockdown"})]}),i.jsxs("div",{className:"form-group mb-3",children:[i.jsx("label",{children:"Notification Message"}),i.jsx("input",{type:"text",value:M.notification,onChange:ee=>B(Oe=>({...Oe,notification:ee.target.value})),placeholder:"e.g., The site is currently undergoing maintenance.",className:"form-control"})]}),i.jsxs("div",{className:"form-group mb-3",children:[i.jsx("label",{children:"Popup Dialog Text"}),i.jsx("textarea",{value:M.dialog,onChange:ee=>B(Oe=>({...Oe,dialog:ee.target.value})),placeholder:"e.g., The BBCode generator is temporarily disabled.",className:"form-control",rows:"3"})]}),i.jsxs("div",{className:"form-group mb-3",children:[i.jsx("label",{children:"Affected Deployments"}),i.jsx("div",{children:["all","phmc-tools","github-pages","local"].map(ee=>i.jsxs("div",{className:"form-check form-check-inline",children:[i.jsx("input",{className:"form-check-input",type:"checkbox",id:`deployment-${ee}`,value:ee,checked:M.affectedDeployments.includes(ee),onChange:Oe=>{const{value:vt,checked:Ht}=Oe.target;B(Mn=>{let pr;return Ht?pr=[...Mn.affectedDeployments,vt]:pr=Mn.affectedDeployments.filter(Fr=>Fr!==vt),{...Mn,affectedDeployments:pr}})}}),i.jsx("label",{className:"form-check-label",htmlFor:`deployment-${ee}`,children:ee.charAt(0).toUpperCase()+ee.slice(1)})]},ee))})]}),i.jsx(de,{variant:"primary",onClick:j,disabled:r,children:r?i.jsx(Qe,{as:"span",animation:"border",size:"sm"}):"Update Lockdown Status"})]}):i.jsxs("div",{className:"alert alert-danger",children:[i.jsx("i",{className:"fas fa-exclamation-triangle me-2"}),i.jsx("strong",{children:"Access Denied:"})," Your current faction rank (",Ie?.scriptRank||"N/A",") does not have permission to manage site lockdown.",i.jsx("br",{}),i.jsx("small",{children:"Required: Script Rank 14 or higher, or Google Admin access"})]})})]}),ae==="recruitment"&&i.jsxs("div",{className:"card",children:[i.jsx("div",{className:"card-header",children:"Recruitment Management"}),i.jsxs("div",{className:"card-body",children:[i.jsxs("div",{className:"form-group mb-3",children:[i.jsx("label",{htmlFor:"selectRecruitmentCategory",children:"Select Recruitment Option"}),i.jsxs("select",{id:"selectRecruitmentCategory",value:s,onChange:ee=>o(ee.target.value),className:"form-select",children:[i.jsx("option",{value:"",children:"-- Select an Option --"}),Object.entries(a).map(([ee,Oe])=>i.jsx("option",{value:ee,children:Oe.displayName},ee))]})]}),s&&a[s]?i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-2",children:[i.jsxs("h5",{children:["Manage ",a[s]?.displayName]}),i.jsxs(de,{variant:"success",size:"sm",onClick:l,children:[i.jsx("i",{className:"fas fa-plus-circle"})," Add Role"]})]}),d?i.jsx(Qe,{animation:"border"}):Object.keys(u).length>0?i.jsx("div",{className:"list-group mb-3",children:Object.entries(u).map(([ee,Oe])=>i.jsxs("div",{className:"list-group-item d-flex justify-content-between align-items-center",children:[i.jsxs("div",{children:[Oe.displayName||Oe.name||ee,": ",i.jsx("strong",{style:{color:Oe.status==="OPEN"?"green":"red"},children:Oe.status||"N/A"}),i.jsx("br",{}),i.jsxs("small",{className:"text-muted",children:["DB Key: ",ee]})]}),i.jsxs("div",{className:"d-flex gap-2",children:[i.jsxs(de,{variant:"outline-warning",size:"sm",onClick:()=>p(ee,Oe),disabled:r,title:`Rename Database Key for ${Oe.displayName||Oe.name||ee}`,children:[i.jsx("i",{className:"fas fa-key"})," Rename Key"]}),i.jsxs(de,{variant:"outline-secondary",size:"sm",onClick:()=>f(ee,Oe),disabled:r,title:`Edit ${Oe.displayName||Oe.name||ee}`,children:[i.jsx("i",{className:"fas fa-edit"})," Edit"]}),i.jsxs(de,{variant:Oe.status==="OPEN"?"outline-danger":"outline-success",size:"sm",onClick:()=>g(ee,Oe.status),disabled:r,style:{minWidth:"120px"},children:[r&&i.jsx(Qe,{as:"span",animation:"border",size:"sm"}),Oe.status==="OPEN"?"Set CLOSED":"Set OPEN"]})]})]},ee))}):i.jsxs("p",{children:["No positions loaded for ",a[s]?.displayName,"."]})]}):i.jsx("p",{children:"Select a recruitment category to manage positions."})]})]}),ae==="bingo"&&i.jsxs("div",{className:"card",children:[i.jsx("div",{className:"card-header",children:"Bingo Management"}),i.jsx("div",{className:"card-body",children:fn?i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"form-group mb-3",children:[i.jsx("label",{children:"Select Bingo Type:"}),i.jsx("select",{value:S,onChange:ee=>_(ee.target.value),disabled:r,className:"form-select",children:I.map(ee=>i.jsx("option",{value:ee.id,children:ee.name},ee.id))})]}),i.jsx("p",{className:"text-info small mt-1",children:"The daily reset now runs automatically on the server at 09:00 UTC."}),i.jsx(de,{variant:"secondary",onClick:F,disabled:r,className:"mt-2 me-2",title:"Manually run the daily reset for all active bingo cards.",children:r?i.jsx(Qe,{as:"span",animation:"border",size:"sm"}):i.jsxs(i.Fragment,{children:[i.jsx("i",{className:"fas fa-bomb"})," Reset All Cards"]})}),i.jsx(de,{variant:"primary",onClick:P,disabled:r,className:"mt-2 me-2",children:r?i.jsx(Qe,{as:"span",animation:"border",size:"sm"}):i.jsxs(i.Fragment,{children:[i.jsx("i",{className:"fas fa-sync-alt"})," Generate New Card"]})}),i.jsx(de,{variant:"danger",onClick:k,disabled:r,className:"mt-2 me-2",children:r?i.jsx(Qe,{as:"span",animation:"border",size:"sm"}):i.jsxs(i.Fragment,{children:[i.jsx("i",{className:"fas fa-trash-alt"})," Clear Activity Log"]})}),i.jsx(de,{variant:"warning",onClick:D,disabled:r,className:"mt-2 me-2",title:"This will remove the current card and log, effectively disabling the game until a new card is generated.",children:r?i.jsx(Qe,{as:"span",animation:"border",size:"sm"}):i.jsxs(i.Fragment,{children:[i.jsx("i",{className:"fas fa-power-off"})," Disable Card"]})}),i.jsxs(de,{variant:"info",onClick:()=>R(!0),disabled:r||!S,className:"mt-2 me-2",children:[i.jsx("i",{className:"fas fa-edit"})," Edit ",$?.name||"Master"," Phrases"]}),i.jsxs(de,{variant:"warning",onClick:()=>O(!0),disabled:r,className:"mt-2",children:[i.jsx("i",{className:"fas fa-inbox"})," Review Phrase Requests"]})]}):i.jsxs("div",{className:"alert alert-danger",children:[i.jsx("i",{className:"fas fa-exclamation-triangle me-2"}),i.jsx("strong",{children:"Access Denied:"})," Your current faction rank (",Ie?.scriptRank||"N/A",") does not have permission to manage bingo activities.",i.jsx("br",{}),i.jsx("small",{children:"Required: Script Rank 14 or higher, or Google Admin access"})]})})]}),ae==="users"&&i.jsxs("div",{className:"card",children:[i.jsx("div",{className:"card-header",children:"User Management"}),i.jsx("div",{className:"card-body",children:rt?i.jsxs(i.Fragment,{children:[i.jsxs(de,{variant:"primary",onClick:()=>E(!0),children:[i.jsx("i",{className:"fas fa-users-cog"})," Manage Users"]}),i.jsx(Ix,{currentUser:t})]}):i.jsxs("div",{className:"alert alert-danger",children:[i.jsx("i",{className:"fas fa-exclamation-triangle me-2"}),i.jsx("strong",{children:"Access Denied:"})," Your current faction rank (",Ie?.scriptRank||"N/A",") does not have permission to manage users.",i.jsx("br",{}),i.jsx("small",{children:"Required: Script Rank 14 or higher, or Google Admin access"})]})})]}),ae==="employeeManager"&&i.jsx("div",{className:"card",children:i.jsx("div",{className:"card-body",children:gn?i.jsx(Kx,{}):i.jsxs("div",{className:"alert alert-danger",children:[i.jsx("i",{className:"fas fa-exclamation-triangle me-2"}),i.jsx("strong",{children:"Access Denied:"})," Your current faction rank (",Ie?.scriptRank||"N/A",") does not have permission to manage employees.",i.jsx("br",{}),i.jsx("small",{children:"Required: Script Rank 13 or higher, or Google Admin access"})]})})}),ae==="webhooks"&&i.jsxs("div",{className:"card",children:[i.jsx("div",{className:"card-header",children:i.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[i.jsx("h5",{className:"mb-0",children:"Webhook Management"}),i.jsx("h5",{className:"mb-0",children:"This area is VERY Dangerous - Don't use "}),i.jsxs("div",{className:"badge bg-secondary",children:[V.length," webhook",V.length!==1?"s":""," configured"]})]})}),i.jsxs("div",{className:"card-body",children:[K||t?bn?i.jsxs("div",{className:"row",children:[i.jsx("div",{className:"col-md-6",children:i.jsxs("div",{className:"card h-100",children:[i.jsx("div",{className:"card-header bg-primary text-white",children:i.jsxs("h6",{className:"mb-0",children:[i.jsx("i",{className:"fas fa-paper-plane me-2"}),"Send Webhook"]})}),i.jsx("div",{className:"card-body",children:i.jsx(Ox,{children:i.jsx(Mx,{})})})]})}),i.jsx("div",{className:"col-md-6",children:i.jsxs("div",{className:"card h-100",children:[i.jsx("div",{className:"card-header bg-success text-white",children:i.jsxs("h6",{className:"mb-0",children:[i.jsx("i",{className:"fas fa-cogs me-2"}),q.id?"Edit Webhook":"Add New Webhook"]})}),i.jsxs("div",{className:"card-body",children:[q.id&&i.jsxs("div",{className:"alert alert-info py-2 mb-3",children:[i.jsx("i",{className:"fas fa-info-circle me-2"}),"Editing: ",i.jsx("strong",{children:q.name}),i.jsx("button",{type:"button",className:"btn btn-sm btn-outline-secondary ms-2",onClick:()=>Y({name:"",url:"",type:"coronerAlerts"}),children:"Cancel"})]}),i.jsxs("div",{className:"form-group mb-3",children:[i.jsx("label",{className:"form-label",children:"Webhook Name"}),i.jsx("input",{type:"text",className:"form-control",placeholder:"e.g., Discord Notifications",value:q.name,onChange:ee=>Y(Oe=>({...Oe,name:ee.target.value}))})]}),i.jsxs("div",{className:"form-group mb-3",children:[i.jsx("label",{className:"form-label",children:"Webhook URL"}),i.jsx("input",{type:"url",className:"form-control",placeholder:"https://discord.com/api/webhooks/...",value:q.url,onChange:ee=>Y(Oe=>({...Oe,url:ee.target.value}))})]}),i.jsxs("div",{className:"form-group mb-3",children:[i.jsx("label",{className:"form-label",children:"Event Type"}),i.jsxs("select",{className:"form-select",value:q.type,onChange:ee=>Y(Oe=>({...Oe,type:ee.target.value})),children:[i.jsx("option",{value:"coronerAlerts",children:"Coroner Alerts"}),i.jsx("option",{value:"phmcAlerts",children:"PHMC Alerts"}),i.jsx("option",{value:"dev",children:"local dev discord"})]})]}),i.jsxs("div",{className:"d-flex gap-2",children:[i.jsx(de,{variant:q.id?"warning":"primary",onClick:ue,disabled:se||!q.name||!q.url,children:se?i.jsx(Qe,{as:"span",animation:"border",size:"sm"}):i.jsxs(i.Fragment,{children:[i.jsx("i",{className:`fas ${q.id?"fa-save":"fa-plus"} me-2`}),q.id?"Update":"Add"," Webhook"]})}),q.id&&i.jsx(de,{variant:"secondary",onClick:()=>Y({name:"",url:"",type:"coronerAlerts"}),disabled:se,children:"Cancel"})]})]})]})})]}):i.jsxs("div",{className:"alert alert-warning",children:[i.jsx("i",{className:"fas fa-exclamation-triangle me-2"}),i.jsx("strong",{children:"Access Denied:"})," Your current faction rank (",Ie?.scriptRank||"N/A",") does not have webhook management permissions.",i.jsx("br",{}),i.jsx("small",{children:"Required: Script Rank 11 or higher"})]}):i.jsxs("div",{className:"alert alert-info",children:[i.jsx("i",{className:"fas fa-info-circle me-2"}),"Please log in with your GTA World account to access webhook management features."]}),(K||t)&&bn&&i.jsx("div",{className:"mt-4",children:i.jsxs("div",{className:"card",children:[i.jsx("div",{className:"card-header bg-info text-white",children:i.jsxs("h6",{className:"mb-0",children:[i.jsx("i",{className:"fas fa-list me-2"}),"Existing Webhooks (",V.length,")"]})}),i.jsx("div",{className:"card-body",children:V.length>0?i.jsx("div",{className:"table-responsive",children:i.jsxs("table",{className:"table table-sm table-hover",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"Name"}),i.jsx("th",{children:"Type"}),i.jsx("th",{children:"URL"}),i.jsx("th",{children:"Actions"})]})}),i.jsx("tbody",{children:V.map(ee=>i.jsxs("tr",{children:[i.jsx("td",{children:i.jsx("strong",{children:ee.name})}),i.jsx("td",{children:i.jsx("span",{className:`badge ${ee.type==="dev"?"bg-warning":ee.type==="coronerAlerts"?"bg-danger":"bg-primary"}`,children:ee.type})}),i.jsx("td",{children:i.jsx("small",{className:"text-muted",title:ee.url,children:ee.url.length>40?`${ee.url.substring(0,40)}...`:ee.url})}),i.jsx("td",{children:i.jsxs("div",{className:"btn-group btn-group-sm",children:[i.jsx("button",{className:"btn btn-outline-primary",onClick:()=>kr(ee),disabled:se,title:"Test this webhook",children:i.jsx("i",{className:"fas fa-paper-plane"})}),i.jsx("button",{className:"btn btn-outline-warning",onClick:()=>Y(ee),disabled:se,title:"Edit this webhook",children:i.jsx("i",{className:"fas fa-edit"})}),i.jsx("button",{className:"btn btn-outline-danger",onClick:()=>te(ee.id),disabled:se,title:"Delete this webhook",children:i.jsx("i",{className:"fas fa-trash"})})]})})]},ee.id))})]})}):i.jsxs("div",{className:"text-center text-muted py-3",children:[i.jsx("i",{className:"fas fa-inbox fa-2x mb-2"}),i.jsx("p",{children:"No webhooks configured yet. Add one above to get started."})]})})]})}),(K||t)&&bn&&i.jsx("div",{className:"mt-4",children:i.jsx("div",{className:"card",children:i.jsx("div",{className:"card-body p-0",children:i.jsx(Tx,{refreshTrigger:bt,onRefresh:()=>Jt(ee=>ee+1)})})})})]})]}),ae==="dev"&&i.jsxs("div",{className:"card",children:[i.jsx("div",{className:"card-header",children:"Developer Tools"}),i.jsxs("div",{className:"card-body",children:[i.jsx("div",{className:"mb-3",children:i.jsxs("div",{className:"card",children:[i.jsx("div",{className:"card-header",children:i.jsx("h6",{className:"mb-0",children:"GTA World Authentication & Faction Status"})}),i.jsxs("div",{className:"card-body",children:[K||t?i.jsxs("div",{children:[i.jsxs("div",{className:"alert alert-success d-flex align-items-center mb-3",children:[i.jsx("i",{className:"fas fa-check-circle me-2"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Connected as:"})," ",(()=>{if(Me?.isFactionMember&&Me?.faction){const ee=Me.faction.firstname&&Me.faction.lastname?`${Me.faction.firstname} ${Me.faction.lastname}`:Me.faction.characterName;return ee?`${ee} (${Me.username})`:Me.username}return Me?.username||Me?.name||t?.email||"Unknown"})(),i.jsx("br",{}),i.jsxs("small",{className:"text-muted",children:["User ID: ",Me?.id||t?.uid," |",Me?.isFactionMember&&Me?.faction?.scriptRank!==void 0?` Script Rank: ${Me.faction.scriptRank} |`:"","Last login: ",new Date().toLocaleDateString()]})]})]}),"                                                    ",i.jsxs("div",{className:"card border",children:[i.jsx("div",{className:"card-header",children:i.jsx("h6",{className:"mb-0",children:"Faction Permissions"})}),i.jsx("div",{className:"card-body",children:ot?i.jsxs("div",{className:"d-flex align-items-center",children:[i.jsx(Qe,{animation:"border",size:"sm",className:"me-2"}),"Loading faction data..."]}):He?i.jsxs("div",{children:[t&&i.jsxs("div",{className:`alert ${Tt?"alert-success":"alert-secondary"} py-2 mb-3`,children:[i.jsx("i",{className:`fas ${Tt?"fa-crown":"fa-toggle-off"} me-2`}),i.jsxs("strong",{children:["Google Admin Override: ",Tt?"ACTIVE":"DISABLED"]}),Tt?i.jsx("span",{children:" - Full administrative privileges granted"}):i.jsx("span",{children:" - Testing with normal permissions"}),i.jsx("br",{}),i.jsx("small",{children:Tt?"All faction restrictions bypassed • Script Rank 15 equivalent":"Use toggle in sidebar to enable override for testing"})]}),i.jsxs("div",{className:"alert alert-success py-2",children:[i.jsx("i",{className:"fas fa-users me-2"}),i.jsx("strong",{children:"PHMC Member"})," - Access granted"]}),Ie&&i.jsxs("div",{className:"row",children:[i.jsxs("div",{className:"col-md-6",children:[i.jsxs("p",{children:[i.jsx("strong",{children:"Character:"})," ",Ie.characterName]}),i.jsxs("p",{children:[i.jsx("strong",{children:"Script Rank:"})," ",Ie.scriptRank]}),i.jsxs("p",{children:[i.jsx("strong",{children:"Access Level:"})," ",De]})]}),i.jsxs("div",{className:"col-md-6",children:[i.jsx("p",{children:i.jsx("strong",{children:"Permissions:"})}),i.jsxs("ul",{className:"list-unstyled",children:[i.jsxs("li",{children:[i.jsx("i",{className:`fas ${st?"fa-check text-success":"fa-times text-danger"}`})," Admin Access"]}),i.jsxs("li",{children:[i.jsx("i",{className:`fas ${pn?"fa-check text-success":"fa-times text-danger"}`})," Database Access"]}),i.jsxs("li",{children:[i.jsx("i",{className:`fas ${yt?"fa-check text-success":"fa-times text-danger"}`})," Faction Upload"]}),i.jsxs("li",{children:[i.jsx("i",{className:`fas ${Ut?"fa-check text-success":"fa-times text-danger"}`})," Webhook Management"]})]})]})]}),i.jsxs(de,{variant:"outline-primary",size:"sm",onClick:Dt,disabled:ot,children:[i.jsx("i",{className:"fas fa-refresh me-2"}),"Refresh Faction Data"]})]}):i.jsxs("div",{children:[t&&i.jsxs("div",{className:`alert ${Tt?"alert-success":"alert-secondary"} py-2 mb-3`,children:[i.jsx("i",{className:`fas ${Tt?"fa-crown":"fa-toggle-off"} me-2`}),i.jsxs("strong",{children:["Google Admin Override: ",Tt?"ACTIVE":"DISABLED"]}),Tt?i.jsx("span",{children:" - Full administrative privileges granted"}):i.jsx("span",{children:" - Testing with normal permissions"}),i.jsx("br",{}),i.jsx("small",{children:Tt?"All faction restrictions bypassed • Script Rank 15 equivalent":"Use toggle in sidebar to enable override for testing"})]}),!t&&i.jsxs("div",{className:"alert alert-warning py-2",children:[i.jsx("i",{className:"fas fa-exclamation-triangle me-2"}),i.jsx("strong",{children:"Not a PHMC Member"})," - Limited access"]})]})})]})]}):i.jsxs("div",{children:[i.jsx("p",{className:"text-muted mb-3",children:"Connect your GTA World account for enhanced admin features and OAuth testing."}),i.jsx(bl,{variant:"primary",returnPath:"/admin",disabled:We||ot,onError:ee=>v&&v(`Login failed: ${ee}`,"error"),onSuccess:()=>{console.log("Login successful"),Dt()},onInitiate:()=>{sessionStorage.setItem("oauth-exchange-in-progress","true")},title:We?"Checking authentication...":"Connect your GTA World account",children:We?i.jsxs(i.Fragment,{children:[i.jsx("span",{className:"spinner-border spinner-border-sm me-2",role:"status","aria-hidden":"true"}),"Checking authentication..."]}):i.jsxs(i.Fragment,{children:[i.jsx("i",{className:"fas fa-sign-in-alt me-2"}),"Connect GTA World Account"]})})]}),Ue&&i.jsxs("div",{className:"alert alert-warning mt-2",children:[i.jsx("i",{className:"fas fa-exclamation-triangle me-2"}),Ue]})]})]})}),i.jsxs("div",{className:"mb-3",children:[i.jsx("h6",{children:"Firebase Functions Diagnostics"}),i.jsxs("div",{className:"d-flex gap-2 mb-3",children:[i.jsxs(de,{variant:"info",size:"sm",onClick:Mt,disabled:!On,title:On?"Test Firebase Functions connectivity":"Requires database access permission",children:[i.jsx("i",{className:"fas fa-network-wired me-2"}),"Test Firebase Functions"]}),i.jsxs(de,{variant:"danger",size:"sm",onClick:an,disabled:Xe||!Xn,title:Xn?"Migrate old report data to new structure":"Requires admin access permission",children:[Xe?i.jsx(Qe,{as:"span",animation:"border",size:"sm"}):i.jsx("i",{className:"fas fa-database me-2"}),"Migrate Reports"]}),i.jsxs(de,{variant:"success",size:"sm",onClick:es,title:"Get raw profile data from GTA World API",children:[i.jsx("i",{className:"fas fa-user-circle me-2"}),"Get Raw Profile"]}),i.jsx(bl,{variant:"warning",size:"sm",returnPath:"/admin",disabled:We||ot,onError:ee=>v&&v(`OAuth Login Test Failed: ${ee}`,"error"),onSuccess:()=>{console.log("OAuth Login Test successful"),v&&v("OAuth Login Test completed successfully!","success"),Dt()},onInitiate:()=>{console.log("OAuth Login Test initiated"),v&&v("Testing OAuth login flow...","info")},title:We?"Checking authentication...":"Test OAuth login flow from this section",children:We?i.jsxs(i.Fragment,{children:[i.jsx("span",{className:"spinner-border spinner-border-sm me-2",role:"status","aria-hidden":"true"}),"Checking auth..."]}):i.jsxs(i.Fragment,{children:[i.jsx("i",{className:"fas fa-sign-in-alt me-2"}),"Test OAuth Login"]})}),i.jsxs(de,{variant:"secondary",size:"sm",onClick:$x,title:"Log environment information to console",children:[i.jsx("i",{className:"fas fa-info-circle me-2"}),"Log Environment Info"]})]}),Se&&i.jsxs("div",{className:"card",children:[i.jsx("div",{className:"card-header",children:i.jsxs("h6",{className:"mb-0",children:["Diagnostics Results",i.jsx("span",{className:`badge ms-2 ${Se.summary?.allTestsPassed?"bg-success":"bg-danger"}`,children:Se.summary?.allTestsPassed?"All Tests Passed":"Issues Found"})]})}),i.jsxs("div",{className:"card-body",children:[Se.summary&&i.jsxs("div",{className:"mb-3",children:[i.jsxs("p",{children:[i.jsx("strong",{children:"Tests:"})," ",Se.summary.passedTests,"/",Se.summary.totalTests," passed"]}),Se.summary.criticalIssues.length>0&&i.jsxs(Et,{variant:"danger",children:[i.jsx("strong",{children:"Critical Issues:"}),i.jsx("ul",{className:"mb-0 mt-2",children:Se.summary.criticalIssues.map((ee,Oe)=>i.jsxs("li",{children:[i.jsxs("strong",{children:[ee.test,":"]})," ",ee.error]},Oe))})]})]}),i.jsxs("details",{children:[i.jsx("summary",{children:"View Detailed Results"}),i.jsx("pre",{className:"mt-2",style:{fontSize:"12px",maxHeight:"300px",overflow:"auto"},children:JSON.stringify(Se,null,2)})]})]})]})]}),i.jsx("div",{className:"mb-3",children:i.jsxs(de,{variant:"secondary",onClick:()=>y(!0),title:bn?"Send a test webhook simulating a CCTV request":"Requires webhook management permission",disabled:!bn,children:[i.jsx("i",{className:"fas fa-video me-2"}),"CCTV Request Test"]})}),i.jsxs(de,{variant:"danger",onClick:()=>{try{null.throwError()}catch(ee){throw N.captureException(ee,{extra:{context:"Test Error Button Clicked"}}),v&&v("Test error sent to Sentry!","check-circle"),ee}},children:[i.jsx("i",{className:"fas fa-bug"})," Test Sentry Error"]}),i.jsx("div",{className:"mt-3",children:i.jsx(Yx,{showInAppNotification:v})})]})]}),ae==="factions"&&i.jsxs("div",{className:"card",children:[i.jsx("div",{className:"card-header",children:i.jsx("h3",{children:"Faction Data Management"})}),i.jsx("div",{className:"card-body",children:K||t?Dn?i.jsxs("div",{children:[i.jsx("p",{className:"text-muted mb-4",children:"Upload and manage faction member data for access control and reporting."}),i.jsx(Rx,{showNotification:v})]}):i.jsxs("div",{className:"alert alert-warning",children:[i.jsx("i",{className:"fas fa-exclamation-triangle me-2"}),i.jsx("strong",{children:"Access Denied:"})," Your current faction rank (",Ie?.scriptRank||"N/A",") does not have permission to upload faction data.",i.jsx("br",{}),i.jsx("small",{children:"Required: Script Rank 10 or higher"})]}):i.jsxs("div",{className:"alert alert-info",children:[i.jsx("i",{className:"fas fa-info-circle me-2"}),"Please log in with your GTA World account to access faction management features."]})})]}),ae==="database"&&i.jsxs("div",{className:"card",children:[i.jsx("div",{className:"card-header",children:"Database Editor"}),i.jsx("div",{className:"card-body",children:K||t?On?i.jsx(xx,{showNotification}):i.jsxs("div",{className:"alert alert-warning",children:[i.jsx("i",{className:"fas fa-exclamation-triangle me-2"}),i.jsx("strong",{children:"Access Denied:"})," Your current faction rank (",Ie?.scriptRank||"N/A",") does not have database access permissions.",i.jsx("br",{}),i.jsx("small",{children:"Required: Script Rank 12 or higher"})]}):i.jsxs("div",{className:"alert alert-info",children:[i.jsx("i",{className:"fas fa-info-circle me-2"}),"Please log in with your GTA World account to access database management features."]})})]}),ae==="rankPermissions"&&i.jsxs("div",{className:"card",children:[i.jsxs("div",{className:"card-header",children:[i.jsx("i",{className:"fas fa-user-shield me-2"}),"Rank Permissions Management"]}),i.jsx("div",{className:"card-body",children:Bt?i.jsxs("div",{children:[i.jsxs("div",{className:"alert alert-info",children:[i.jsx("i",{className:"fas fa-info-circle me-2"}),i.jsx("strong",{children:"Rank Permissions Editor"}),i.jsx("p",{className:"mb-0 mt-2",children:"Configure which ranks have access to different admin panel sections."})]}),i.jsxs("div",{className:"row",children:[i.jsxs("div",{className:"col-md-6",children:[i.jsx("h6",{children:"Current Permission Levels"}),i.jsxs("div",{className:"list-group",children:[i.jsxs("div",{className:"list-group-item",children:[i.jsx("strong",{children:"Faction Data Upload:"})," Rank 10+"]}),i.jsxs("div",{className:"list-group-item",children:[i.jsx("strong",{children:"Database Editor:"})," Rank 12+"]}),i.jsxs("div",{className:"list-group-item",children:[i.jsx("strong",{children:"Bingo Management:"})," Rank 14+"]}),i.jsxs("div",{className:"list-group-item",children:[i.jsx("strong",{children:"User Management:"})," Rank 14+"]}),i.jsxs("div",{className:"list-group-item",children:[i.jsx("strong",{children:"Rank Permissions:"})," Rank 15+"]}),i.jsxs("div",{className:"list-group-item",children:[i.jsx("strong",{children:"Google Admin Override:"})," Email Login Only"]})]})]}),i.jsxs("div",{className:"col-md-6",children:[i.jsx("h6",{children:"Permission Configuration"}),i.jsxs("div",{className:"alert alert-warning",children:[i.jsx("i",{className:"fas fa-construction me-2"}),i.jsx("strong",{children:"Coming Soon"}),i.jsx("p",{className:"mb-0 mt-2",children:"Dynamic permission configuration interface will be available in a future update."})]})]})]})]}):i.jsxs("div",{className:"alert alert-danger",children:[i.jsx("i",{className:"fas fa-exclamation-triangle me-2"}),i.jsx("strong",{children:"Access Denied:"})," Your current faction rank (",Ie?.scriptRank||"N/A",") does not have permission to manage rank permissions.",i.jsx("br",{}),i.jsx("small",{children:"Required: Script Rank 15 or higher, or Google Admin access"})]})})]})]})]})})},nn={physician:{displayName:"Physician Recruitment",path:"selectOptions/physicianRecruitmentDetails"},psych:{displayName:"Psychologist/Psychiatrist Recruitment",path:"selectOptions/psychPositionDetailsData"},admin:{displayName:"Admin Recruitment",path:"selectOptions/adminPositionDetailsData"},nursing:{displayName:"Nursing Recruitment",path:"selectOptions/nursePositionDetailsData"},ems:{displayName:"EMS Recruitment",path:"selectOptions/emsPositionDetailsData"},coroner:{displayName:"Coroner Recruitment",path:"selectOptions/coronerPositionDetailsData"}},us=[{id:"er",name:"Emergency Room",path:"ER"},{id:"ems",name:"EMS",path:"EMS"},{id:"coroner",name:"Coroner",path:"Coroner"}],Xx=async()=>{if(console.log("[Desktop Notify] Requesting permission..."),"Notification"in window){if(Notification.permission==="granted")return console.log("[Desktop Notify] Permission already granted."),!0;if(Notification.permission!=="denied"){console.log("[Desktop Notify] Permission is default, prompting user.");const t=await Notification.requestPermission();return console.log("[Desktop Notify] User responded with permission:",t),t==="granted"}}else return console.warn("[Desktop Notify] This browser does not support desktop notification."),!1;return console.log("[Desktop Notify] Permission is denied."),!1},Zo=(t,e)=>{if(console.log("[Desktop Notify] Attempting to show notification. Current permission:",Notification.permission),Notification.permission==="granted")try{const n=new Notification(t,e);console.log("[Desktop Notify] Notification created:",n),n.onclick=()=>{console.log("[Desktop Notify] Notification clicked."),window.focus(),n.close()},n.onerror=r=>{console.error("[Desktop Notify] Error displaying notification:",r)},n.onshow=()=>{console.log("[Desktop Notify] Notification shown successfully.")}}catch(n){console.error("[Desktop Notify] Error creating Notification object:",n)}else console.warn("[Desktop Notify] Permission not granted, cannot show notification.")},Vt=()=>{const t=navigator.userAgent||"N/A";let e="N/A";try{e=Intl.DateTimeFormat().resolvedOptions().timeZone}catch(n){console.warn("Could not determine user timezone:",n)}return{userAgent:t,timeZone:e}},ut=async(t,e,n,r=null,s="N/A",o="N/A",a=null,l=null)=>{const d="https://discord.com/api/webhooks/1384194105944445038/n5fEy-fruWhtCygpT3wn6p5ciffKNhnQRo34Q09Vity_t8U4JEgCOhZgeZhluVqWNYtG",u=a?`${a} (${t})`:t||"Unknown";let p=r?`**Action:** ${e||"Unknown Action"}
**Admin:** ${u}
**Category:** ${r}`:`**Action:** ${e||"Unknown Action"}
**Admin:** ${u}`;if(l&&l.debugInfo){const{debugInfo:S}=l;if(S.foundMember&&S.charactersChecked?.length>0){const _=l.faction;p+=`
**Primary Character:** ${_?.characterName||"Unknown"} (ID: ${_?.characterId||"N/A"}) - Rank ${_?.scriptRank||"N/A"}`,S.charactersChecked.length>1&&(p+=`
**All Characters:** ${S.charactersChecked.length} total`)}}const f=[{name:"Details",value:`\`\`\`${n.substring(0,1e3)}\`\`\``,inline:!1}];if(l&&l.debugInfo?.charactersChecked?.length>0){const S=l.debugInfo.charactersChecked.map((I,F)=>`${F+1}. ${I.name||"Unknown"} (ID: ${I.id||"N/A"})`).join(`
`);l.debugInfo.charactersChecked.filter(I=>l.faction&&I.id===l.faction.characterId);let _=`**All Characters (${l.debugInfo.charactersChecked.length}):**
${S}`;l.debugInfo.foundMember?(_+=`

**PHMC Member:** ${l.faction?.characterName||"Unknown"} (Rank ${l.faction?.scriptRank||"N/A"})`,_+=`
**Access Level:** ${l.accessLevel||"none"}`):_+=`

**PHMC Status:** Not a faction member`,f.push({name:"Character Information",value:_.substring(0,1024),inline:!1})}const g={title:"Admin Action Logged",color:16753920,description:p,fields:f,timestamp:new Date().toISOString(),footer:{text:`PHMC Tools | ${o}`}};try{const S=await fetch(d,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({embeds:[g]})});S.ok?console.log(`Admin action logged to Discord: ${e}`):(console.error(`Failed to send admin action webhook. Status: ${S.status}`),sn(`Admin Action Discord webhook failed: ${S.status}`,"error"))}catch(S){console.error("Error sending admin action webhook:",S),Ze(S,{extra:{context:"Admin Action Webhook Submission"}})}},Qx=({formData:t,setFormData:e,showNotification:n,showNotification:r,commitInfo:s})=>{const[o,a]=b.useState(""),[l,d]=b.useState(""),[u,p]=b.useState(""),[f,g]=b.useState(""),[S,_]=b.useState(!1),[I,F]=b.useState(null),[P,k]=b.useState(""),[D,R]=b.useState(""),[$,O]=b.useState(""),[E,y]=b.useState(null),[w,N]=b.useState(!0),[v,A]=b.useState(!1),{user:C,isAuthenticated:M,isLoading:B,username:j}=ur(),[V,q]=b.useState(""),[Y,ue]=b.useState({}),[te,se]=b.useState(!1),[X,Z]=b.useState(!1),[re,he]=b.useState(us[0].id),[be,ge]=b.useState(!1),[Re,Pe]=b.useState(!1),[Je,we]=b.useState(!1),[Ge,bt]=b.useState(null),[Jt,zt]=b.useState(!1),[L,ne]=b.useState(null),[W,oe]=b.useState(()=>typeof Notification<"u"&&"permission"in Notification?Notification.permission:"unsupported"),[ae,Ne]=b.useState(!1);b.useEffect(()=>{sessionStorage.getItem("showCctvModalAfterLogin")==="true"&&(Ne(!0),sessionStorage.removeItem("showCctvModalAfterLogin"))},[]);const[Se,ye]=b.useState([]),[Ae,G]=b.useState({name:"",url:"",type:"all"}),[Xe,Le]=b.useState(!1),[Pt,Me]=b.useState(0),[K,Ue]=b.useState(!1),[We,He]=b.useState(""),[Ie,De]=b.useState(""),[st,yt]=b.useState(""),[pn,Ut]=b.useState(!0),[Dt,ot]=b.useState({enabled:!1,notification:"",dialog:"",affectedDeployments:[]}),Fn=b.useRef(null),Tt=async(H,Q)=>{const ve=fe(Ee,"webhook_logs"),_e=xa(ve);await At(_e,{type:H,payload:Q,timestamp:Date.now()})};b.useEffect(()=>{E&&Bt()},[E]),b.useEffect(()=>{const H=fe(Ee,"adminSettings/lockdownConfig"),Q=qi(H,ve=>{const _e=ve.val();_e&&ot({enabled:_e.enabled||!1,notification:_e.notification||"",dialog:_e.dialog||"",affectedDeployments:_e.affectedDeployments||[]})});return()=>Q()},[]);const Pn=async()=>{Z(!0);const H=fe(Ee,"adminSettings/lockdownConfig"),{userAgent:Q,timeZone:ve}=Vt();try{await wr(H,Dt),r("Lockdown status updated.","check-circle"),ut(wt?.email||"Unknown User","Updated Lockdown Status",`Enabled: ${Dt.enabled}Notification: ${Dt.notification}Dialog: ${Dt.dialog}Affected Deployments: ${Dt.affectedDeployments.join(", ")}`,"Lockdown Status",Q,ve)}catch(_e){console.error("Error updating lockdown status:",_e),r("Failed to update lockdown status.","error"),ut(wt?.email||"Unknown User","Failed to Update Lockdown Status",`Error: ${_e.message}`,"Lockdown Status",Q,ve)}finally{Z(!1)}},on=async H=>{const Q="https://discord.com/api/webhooks/1430314470902599680/o_JoPsW9jNgKICL9StKxgORICn3cOzu41FheUsJFsPkRAX-Xt9LKTulXhWCaQsU5Cfxw",{userAgent:ve,timeZone:_e}=Vt(),Ce={title:"(( 📹 Alert from the System Administrator )) ",color:5793266,fields:[{name:"Notes:",value:H.rank||"N/A",inline:!0},{name:"Requesting Officer",value:H.officer||"N/A",inline:!0},{name:"Officer Phone Number",value:H.officerPH||"N/A",inline:!0},{name:"Requesting Department",value:H.department||"N/A",inline:!0},...H.discordUsername?[{name:"Discord Username",value:H.discordUsername,inline:!0}]:[],{name:"Date/Time of Incident",value:H.incidentDateTime||"N/A",inline:!0},{name:"Reason for Request",value:H.requestReason||"N/A",inline:!0},{name:"CCTV Location",value:H.location||"N/A",inline:!1},{name:"Description of Events",value:""`${H.description||"N/A"}```,inline:!1},...H.oocNotes?[{name:"OOC Notes",value:""`${H.oocNotes}```,inline:!1}]:[],...H.DEBUG?[{name:"DEBUG",value:`\`\`\`json
${JSON.stringify(H.DEBUG,null,2)}
\`\`\``,inline:!1}]:[]],timestamp:new Date().toISOString(),footer:{text:"PHMC Tools - Developer Notification Service"}};try{const me=await fetch(Q,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({embeds:[Ce]})});if(me.ok)return r&&r("CCTV Test Webhook sent successfully!","check-circle"),ut(E?.email,"Sent CCTV Test Webhook","Sent a test webhook for a CCTV request to the dev channel.","Developer Testing",ve,_e,j),!0;{const je=await me.text();return console.error(`Failed to send CCTV test webhook. Status: ${me.status}`,je),sn(`CCTV Test Webhook failed: ${me.status}`,{level:"error",extra:{responseBody:je}}),r&&r(`Failed to send test webhook. Status: ${me.status}`,"error"),!1}}catch(me){return console.error("Error sending CCTV test webhook:",me),Ze(me,{extra:{context:"CCTV Test Webhook Submission"}}),r&&r("A network error occurred sending the test webhook.","error"),!1}};b.useEffect(()=>{const H=()=>{console.log("[Desktop Notify] Permission status changed to:",typeof Notification<"u"?Notification.permission:"unsupported"),oe(typeof Notification<"u"?Notification.permission:"unsupported")};return"permissions"in navigator&&typeof navigator.permissions.query=="function"?navigator.permissions.query({name:"notifications"}).then(function(Q){console.log("[Desktop Notify] Initial permission status (via query):",Q.state),oe(Q.state),Q.onchange=H}).catch(Q=>{console.warn("[Desktop Notify] Error querying notification permissions, falling back to Notification.permission:",Q),oe(typeof Notification<"u"?Notification.permission:"unsupported")}):(console.log("[Desktop Notify] navigator.permissions.query not supported, using Notification.permission directly. Initial status:",typeof Notification<"u"?Notification.permission:"unsupported"),oe(typeof Notification<"u"?Notification.permission:"unsupported")),()=>{"permissions"in navigator&&typeof navigator.permissions.query=="function"&&navigator.permissions.query({name:"notifications"}).then(function(Q){Q.onchange=null}).catch(()=>{})}},[]);const Ot=b.useCallback(async H=>{if(!H||!nn[H]){ue({}),e(Ce=>({...Ce,adminDisplayData:null,adminSelectedCategoryName:H?"Invalid Category":null})),r&&r("Invalid recruitment category selected.","error");return}se(!0);const Q=nn[H];let ve=0;const _e=3;for(;ve<_e;)try{console.log(`[Recruitment Data] Fetching data for ${Q.displayName} (attempt ${ve+1}/${_e})`);const Ce=fe(Ee,Q.path),me=await ze(Ce);if(me.exists()){const je=me.val();console.log(`[Recruitment Data] Successfully loaded ${Object.keys(je).length} positions for ${Q.displayName}`),ue(je),e(at=>({...at,adminDisplayData:je,adminSelectedCategoryName:Q.displayName}));break}else{console.warn(`[Recruitment Data] No data found at path: ${Q.path}`),ue({}),e(je=>({...je,adminDisplayData:null,adminSelectedCategoryName:Q.displayName})),r&&r(`No positions found for ${Q.displayName}. The database may be empty or the path may be incorrect.`,"warning");break}}catch(Ce){ve++,console.error(`[Recruitment Data] Error fetching data for ${Q.displayName} (attempt ${ve}/${_e}):`,Ce),ve>=_e?(r&&r(`Failed to load recruitment data for ${Q.displayName} after ${_e} attempts. Please check your internet connection and try again.`,"error"),ue({}),e(me=>({...me,adminDisplayData:null,adminSelectedCategoryName:Q.displayName}))):await new Promise(me=>setTimeout(me,1e3*ve))}se(!1)},[e,r]),[Xt,$s]=b.useState("");b.useEffect(()=>{N(!0);const H=bS(si,Q=>{const ve=Fn.current!==null,_e=Q!==null,{userAgent:Ce,timeZone:me}=Vt();if(_e&&!ve){y(Q),e(at=>({...at,isAdminAuthenticated:!0,adminUserEmail:Q.email,adminDisplayData:null,adminSelectedCategoryName:null}));const je={email:Q.email,uid:Q.uid,isAdmin:!0,loginTime:new Date().toISOString()};sessionStorage.setItem("google-admin-user",JSON.stringify(je)),sessionStorage.setItem("admin-auth-context",JSON.stringify({isAdminAuthenticated:!0,adminUserEmail:Q.email})),ut(Q.email,"Admin Login","User successfully logged in to the Admin Panel.",null,Ce,me,j,C),r&&r(`Welcome, ${Q.email}!`,"check-circle")}else if(!_e&&ve){const je=E?.email||"Unknown User";y(null),e(at=>({...at,isAdminAuthenticated:!1,adminUserEmail:null,adminDisplayData:null,adminSelectedCategoryName:null})),ue({}),q(""),sessionStorage.removeItem("google-admin-user"),sessionStorage.removeItem("admin-auth-context"),ut(je,"Admin Logout","User successfully logged out from the Admin Panel.",null,Ce,me,j,C),r&&r("Logged out from Admin Panel.","info-circle")}else if(_e&&ve){if(y(Q),e(at=>({...at,isAdminAuthenticated:!0,adminUserEmail:Q.email})),!sessionStorage.getItem("google-admin-user")){const at={email:Q.email,uid:Q.uid,isAdmin:!0,loginTime:new Date().toISOString()};sessionStorage.setItem("google-admin-user",JSON.stringify(at)),sessionStorage.setItem("admin-auth-context",JSON.stringify({isAdminAuthenticated:!0,adminUserEmail:Q.email}))}}else y(null),e(je=>({...je,isAdminAuthenticated:!1,adminUserEmail:null})),sessionStorage.removeItem("google-admin-user"),sessionStorage.removeItem("admin-auth-context");Fn.current=Q?Q.uid:null,N(!1)});return()=>H()},[e,r]);const $n=b.useRef(null);b.useEffect(()=>{const H=$n.current,Q=M&&C,{userAgent:ve,timeZone:_e}=Vt();if(Q&&!H&&!B){console.log("[GTA OAuth Login] User successfully authenticated via GTA World OAuth");const Ce=C.username,me=C.faction?.characterName||C.username,je=C.faction?.scriptRank;ut(Ce,"Admin OAuth Login",`GTA World OAuth user successfully logged in to Admin Panel.
Character: ${me}
${je?`Script Rank: ${je}`:"No rank data"}`,null,ve,_e,j),r&&r(`Welcome, ${C.username}! OAuth login successful.`,"check-circle")}if(!Q&&H&&!B){console.log("[GTA OAuth Logout] User logged out from GTA World OAuth");const Ce=$n.current?.username||"Unknown OAuth User";ut(Ce,"Admin OAuth Logout","GTA World OAuth user logged out from Admin Panel.",null,ve,_e,Ce),r&&r("OAuth logout completed.","info-circle")}$n.current=Q?C:null},[M,C,B,j,r]),b.useEffect(()=>{E&&V&&nn[V]?Ot(V):E&&!V&&(ue({}),e(H=>({...H,adminDisplayData:null,adminSelectedCategoryName:null})))},[E,V,Ot,e]);const Sn=async()=>{O(""),N(!0);const{userAgent:H,timeZone:Q}=Vt();try{await Hp(si,P,D)}catch(ve){O(ve.message||"Failed to login."),N(!1),Ze(ve,{level:"warning",extra:{email:P,context:"Admin Login Attempt"},tags:{login_result:"failure"}}),ut(P,"Admin Login Failed",`Attempted login with email: ${P}. Error: ${ve.message}`,null,H,Q,j),r&&r(`Login failed: ${ve.message}`,"error")}},Zr=H=>{H.key==="Enter"&&(H.preventDefault(),Sn())},$e=async()=>{O(""),A(!0);const{userAgent:H,timeZone:Q}=Vt(),ve=M?"GTA World OAuth":lr()?"Google Admin":"Firebase Email",_e=wt?.email||wt?.displayName||"Unknown User";try{console.log(`[Admin Logout] Logging out ${ve} user: ${_e}`),E&&(await yS(si),console.log("[Admin Logout] Firebase auth signed out")),(M||lr())&&(ja(),console.log("[Admin Logout] GTA World session cleared")),y(null),O(""),k(""),R(""),console.log("[Admin Logout] Local admin state cleared"),ut(_e,"Admin Logout Successful",`Successfully logged out from ${ve} authentication.`,null,H,Q),r&&r(`Successfully logged out from ${ve}`,"check-circle"),console.log("[Admin Logout] Initiating immediate redirect to home page"),setTimeout(()=>{window.location.href="/forms"},500)}catch(Ce){console.error("[Admin Logout] Error during logout:",Ce),O(Ce.message||"Failed to logout."),ut(_e,"Admin Logout Failed",`Failed to log out from ${ve}. Error: ${Ce.message}`,null,H,Q),r&&r(`Logout failed: ${Ce.message}`,"error"),console.log("[Admin Logout] Logout failed, but redirecting for security"),setTimeout(()=>{window.location.href="/"},1e3)}},fn=async()=>{if(!Ae.name||!Ae.url||!Ae.type){r&&r("Please fill in all webhook fields","error");return}Le(!0);try{const H=fe(Ee,"webhooks"),Q=xa(H);await At(Q,{...Ae,createdAt:Date.now(),createdBy:wt?.email||"Unknown User"}),G({name:"",url:"",type:"all"}),r&&r("Webhook added successfully!","check-circle"),await Bt()}catch(H){console.error("Error adding webhook:",H),r&&r("Failed to add webhook","error")}finally{Le(!1)}},rt=async H=>{if(window.confirm("Are you sure you want to delete this webhook?")){Le(!0);try{const Q=fe(Ee,`webhooks/${H}`);await Gn(Q),r&&r("Webhook deleted successfully!","check-circle"),await Bt()}catch(Q){console.error("Error deleting webhook:",Q),r&&r("Failed to delete webhook","error")}finally{Le(!1)}}},Bt=async()=>{try{const H=fe(Ee,"webhooks"),Q=await ze(H);if(Q.exists()){const ve=Q.val(),_e=Object.keys(ve).map(Ce=>({id:Ce,...ve[Ce]}));ye(_e)}else ye([])}catch(H){console.error("Error loading webhooks:",H)}},gn=async(H,Q)=>{if(!E||!V||!nn[V])return;const ve=Y[H];if(!ve){console.error("Position details not found for key:",H),r("Error: Position details missing.","error");return}const _e=ve.displayName||ve.name||H,Ce=Q==="OPEN"?"CLOSED":"OPEN",me=nn[V],je=`${me.path}/${H}/status`,{userAgent:at,timeZone:yn}=Vt();Z(!0);try{await wr(fe(Ee),{[je]:Ce});const Ye=`${_e} status updated to ${Ce} for ${me.displayName}.`;r(Ye,"check-circle"),ut(wt?.email||"Unknown User","Toggled Recruitment Status",`Position: ${_e}New Status: ${Ce}`,me.displayName,at,yn),W==="granted"&&Zo(`Recruitment Status Updated: ${me.displayName}`,{body:`${_e} is now ${Ce}.`,icon:"/phmc512.png",tag:`status-update-${V}-${H}`}),Ot(V)}catch(Ye){console.error(`Error updating status for ${H}:`,Ye),r(`Failed to update status for ${H}.`,"error"),ut(E?.email||"Unknown User","Failed to Toggle Recruitment Status",`Position: ${_e}Attempted Status: ${Ce}Error: ${Ye.message}`,me.displayName,at,yn)}finally{Z(!1)}},mr=(H,Q)=>{V&&Ot(V);const{userAgent:ve,timeZone:_e}=Vt();if(wt?.email&&H){const Ce=nn[V],me=Q==="edited"?"Edited Role":"Added New Role";if(ut(wt.email,me,`Role Name: ${H.displayName||H.originalKey}Short Code: ${H.shortCode||"N/A"}Status: ${H.status||"N/A"}Key: ${H.originalKey}`,Ce?.displayName||"Unknown Category",ve,_e),W==="granted"&&H?.displayName){const je=Q==="edited"?`Role Updated: ${Ce?.displayName||"Recruitment"}`:`New Role Added: ${Ce?.displayName||"Recruitment"}`,at=Q==="edited"?`Role "${H.displayName}" (${H.shortCode||"N/A"}) has been updated.`:`Role "${H.displayName}" (${H.shortCode||"N/A"}) has been added.`;Zo(je,{body:at,icon:"/phmc512.png",tag:`${Q}-role-${V}-${H.originalKey}`})}}},Xn=()=>{bt(null),we(!0);const{userAgent:H,timeZone:Q}=Vt();ut(E?.email||"Unknown User","Opened Add Role Modal","Admin opened the modal to add a new role.",nn[V]?.displayName,H,Q,j)},Dn=(H,Q)=>{bt({...Q,originalKey:H}),we(!0);const{userAgent:ve,timeZone:_e}=Vt();ut(E?.email||"Unknown User","Opened Edit Role Modal",`Admin opened the modal to edit role: ${Q.displayName||H}`,nn[V]?.displayName,ve,_e,j)},On=()=>{we(!1),bt(null);const{userAgent:H,timeZone:Q}=Vt();ut(E?.email||"Unknown User","Closed Role Modal","Admin closed the role add/edit modal.",nn[V]?.displayName,H,Q,j)},bn=(H,Q)=>{ne({key:H,data:Q}),zt(!0);const{userAgent:ve,timeZone:_e}=Vt();ut(E?.email||"Unknown User","Opened Rename Role Key Modal",`Admin opened the modal to rename key for role: ${Q.displayName||H}`,nn[V]?.displayName,ve,_e,j)},Mt=()=>{if(V&&Ot(V),E?.email&&L&&W==="granted"){const H=nn[V];Zo(`Role Key Renamed: ${H?.displayName||"Recruitment"}`,{body:`Key for "${L.data.displayName||L.key}" has been changed.`,icon:"/phmc512.png",tag:`rename-key-${V}-${L.key}`})}ne(null)},es=async()=>{console.log("[Desktop Notify] 'Enable Desktop Notifications' button clicked.");const H=await Xx(),Q=typeof Notification<"u"?Notification.permission:"unsupported";console.log("[Desktop Notify] Permission after request:",Q,"(Granted flag:",H,")"),oe(Q);const{userAgent:ve,timeZone:_e}=Vt();E?.email&&ut(wt?.email||"Unknown User","Desktop Notification Preference Changed",`Permission status: ${Q}${H?" (Granted by user)":" (Not granted or dismissed)"}`,null,ve,_e,j),H?(r&&r("Desktop notifications enabled for this site! Please ensure your OS settings also allow notifications from your browser.","check-circle",7e3),Zo("PHMC Tools: Notifications Enabled",{body:"You will now receive desktop notifications for important admin actions. Ensure your OS allows browser notifications.",icon:"/phmc512.png"})):Q==="denied"?r&&r("Desktop notifications are blocked. Please enable them in your browser settings.","warning"):r&&r("Desktop notifications were not enabled.","warning")},kr=H=>!H||H.length===0?[]:[...H].sort(()=>.5-Math.random()),an=async()=>{const H=us.find(Ce=>Ce.id===re);if(!H||!window.confirm(`Are you sure you want to clear ALL ${H.name} Bingo activity logs? This action cannot be undone.`))return;Z(!0);const Q=fe(Ee,`bingo/logs/${H.path}/activityLog`),{userAgent:ve,timeZone:_e}=Vt();try{await Gn(Q),r(`${H.name} Bingo activity log has been cleared.`,"check-circle"),ut(wt?.email||"Unknown User",`Cleared ${H.name} Bingo Activity`,`The 'bingo/logs/${H.path}/activityLog' path was deleted from Firebase.`,`${H.name} Bingo`,ve,_e)}catch(Ce){console.error("Error clearing bingo activity log:",Ce),r(`Failed to clear ${H.name} bingo activity log.`,"error"),ut(wt?.email||"Unknown User",`Failed to Clear ${H.name} Bingo Activity`,`Error: ${Ce.message}`,`${H.name} Bingo`,ve,_e)}finally{Z(!1)}},ee=async()=>{const H=us.find(je=>je.id===re);if(!H||!window.confirm(`Are you sure you want to generate a NEW ${H.name} Bingo card? This will clear the current game and activity log for ALL users.`))return;Z(!0);const Q=fe(Ee,`bingo/phrases/${H.path}`),ve=fe(Ee,`bingo/cards/${H.path}/phrases`),_e=fe(Ee,`bingo/logs/${H.path}/activityLog`),{userAgent:Ce,timeZone:me}=Vt();try{const je=await ze(Q);if(!je.exists()){r(`Error: Master phrases for ${H.name} not found. Cannot generate new card.`,"error"),ut(E.email,`Failed to Generate New ${H.name} Bingo Card`,`Master phrases not found in Firebase at 'bingo/phrases/${H.path}'.`,`${H.name} Bingo`,Ce,me),Z(!1);return}const at=je.val(),yn=Array.isArray(at)?at:typeof at=="object"&&at!==null?Object.values(at).map(Qt=>typeof Qt=="object"?Qt.phrase:Qt).filter(Boolean):[];if(yn.length<24){r(`Error: Not enough master phrases for ${H.name} (need at least 24).`,"error"),ut(E.email,`Failed to Generate New ${H.name} Bingo Card`,`Not enough master phrases (${yn.length} found, need 24).`,`${H.name} Bingo`,Ce,me),Z(!1);return}const Ye=kr(yn).slice(0,24);await At(ve,Ye),await Gn(_e),r(`New ${H.name} Bingo card generated and activity log cleared!`,"check-circle"),ut(wt?.email||"Unknown User",`Generated New ${H.name} Bingo Card`,"A new card was generated and the activity log cleared for all users.",`${H.name} Bingo`,Ce,me)}catch(je){console.error("Error generating new bingo card:",je),r("Failed to generate new bingo card.","error"),ut(wt?.email||"Unknown User",`Failed to Generate New ${H.name} Bingo Card`,`Error: ${je.message}`,`${H.name} Bingo`,Ce,me)}finally{Z(!1)}},Oe=async()=>{const H=us.find(me=>me.id===re);if(!H||!window.confirm(`Are you sure you want to DISABLE the ${H.name} Bingo card? This will remove the current card and clear all progress. The game will be unavailable until a new card is generated.`))return;Z(!0);const Q=fe(Ee,`bingo/cards/${H.path}`),ve=fe(Ee,`bingo/logs/${H.path}`),{userAgent:_e,timeZone:Ce}=Vt();try{await Gn(Q),await Gn(ve),r(`${H.name} Bingo has been disabled and all data cleared.`,"check-circle"),ut(wt?.email||"Unknown User",`Disabled ${H.name} Bingo Card`,`The card and activity log for '${H.name}' were deleted from Firebase.`,`${H.name} Bingo`,_e,Ce)}catch(me){console.error("Error disabling bingo card:",me),r(`Failed to disable ${H.name} bingo card.`,"error"),ut(wt?.email||"Unknown User",`Failed to Disable ${H.name} Bingo Card`,`Error: ${me.message}`,`${H.name} Bingo`,_e,Ce)}finally{Z(!1)}},vt=async()=>{if(!window.confirm("Are you sure you want to manually reset all active Bingo cards? This will clear their current progress."))return;const H=fe(Ee,"bingo/meta");await wr(H,{lastManualRegenTimestamp:bC()}),r("Manual daily bingo reset initiated...","sync-alt",5e3);const Q={success:[],noCard:[],notEnoughPhrases:[],errors:[]};await Promise.all(us.map(async me=>{const je=fe(Ee,`bingo/cards/${me.path}/phrases`);if(!(await ze(je)).exists()){Q.noCard.push(me.name);return}const yn=fe(Ee,`bingo/phrases/${me.path}`),Ye=await ze(yn);if(!Ye.exists()){Q.notEnoughPhrases.push(`${me.name} (no master list)`);return}const Qt=Ye.val(),jn=Array.isArray(Qt)?Qt.filter(Boolean):typeof Qt=="object"&&Qt!==null?Object.values(Qt).map(Zt=>typeof Zt=="object"?Zt.phrase:Zt).filter(Boolean):[];if(jn.length<24){Q.notEnoughPhrases.push(`${me.name} (${jn.length}/24)`);return}try{const Zt=kr(jn).slice(0,24),Ci=fe(Ee,`bingo/logs/${me.path}/activityLog`);await At(je,Zt),await Gn(Ci),Q.success.push(me.name)}catch(Zt){console.error(`Error manually regenerating ${me.name} card:`,Zt),Q.errors.push(`${me.name}: ${Zt.message}`)}}));const{userAgent:ve,timeZone:_e}=Vt();let Ce="";Q.success.length>0&&(Ce+=`✅ Regenerated: ${Q.success.join(", ")}`),Q.noCard.length>0&&(Ce+=`➖ Skipped (Disabled): ${Q.noCard.join(", ")}`),Q.notEnoughPhrases.length>0&&(Ce+=`⚠️ Skipped (Not Enough Phrases): ${Q.notEnoughPhrases.join(", ")}`),Q.errors.length>0&&(Ce+=`❌ Errors: ${Q.errors.join(", ")}`),ut(wt?.email||"Unknown User","Manual Bingo Reset",Ce.trim(),"Bingo Management",ve,_e),r("Manual bingo reset complete!","check-circle")},[Ht,Mn]=b.useState(!1);if(v)return i.jsx("div",{className:"container mt-5 text-center",children:i.jsx("div",{className:"card",children:i.jsxs("div",{className:"card-body",children:[i.jsx("i",{className:"fas fa-sign-out-alt fa-3x text-warning mb-3"}),i.jsx("h4",{children:"Signing Out..."}),i.jsx("p",{children:"You are being logged out for security. Redirecting to home page..."}),i.jsx("div",{className:"spinner-border text-primary",role:"status",children:i.jsx("span",{className:"visually-hidden",children:"Loading..."})})]})})});if(w||B)return i.jsx("p",{children:"Verifying authentication..."});const pr=lr(),Fr=E||M||pr,wt=E||(M&&C?{email:C.username,uid:C.id?.toString()||"gta-user",displayName:C.username,isGtaAuth:!0,...C}:null)||(pr?{email:Td()?.email||"admin@google.auth",uid:"google-admin",displayName:"Google Admin",isGoogleAuth:!0}:null);if(!Fr)return i.jsx("div",{className:"container mt-5",children:i.jsx("div",{className:"row justify-content-center",children:i.jsx("div",{className:"col-md-6 col-lg-4",children:i.jsx("div",{className:"card",children:i.jsxs("div",{className:"card-body",children:[i.jsx("h3",{className:"card-title text-center mb-4",children:"Admin Login"}),i.jsxs(pe.Group,{className:"mb-3",controlId:"adminAuthEmail",children:[i.jsx(pe.Label,{children:"Email address"}),i.jsx(pe.Control,{type:"email",value:P,onChange:H=>k(H.target.value),required:!0,placeholder:"Enter email"})]}),i.jsxs(pe.Group,{className:"mb-3",controlId:"adminAuthPassword",children:[i.jsx(pe.Label,{children:"Password"}),i.jsx(pe.Control,{type:"password",value:D,onChange:H=>R(H.target.value),onKeyDown:Zr,required:!0,placeholder:"Password"})]}),$&&i.jsx("p",{className:"text-danger text-center",children:$}),i.jsx("div",{className:"d-grid",children:i.jsx(de,{variant:"primary",type:"button",onClick:Sn,children:"Login"})})]})})})})});const ts=us.find(H=>H.id===re),ns=(H,Q,ve="")=>{const _e="https://phmc-tools.gta.world/",Ce="https://gtaw-forms.github.io/forms/",me="https://i.ibb.co/0pgw9hHm/phmc.png",je=[];je.push({name:"[Delayed Updates] Form Generator Link",value:_e,inline:!1}),je.push({name:"Alternative Form Generator Link",value:Ce,inline:!1}),ve&&ve.trim()&&je.push({name:"Related Link",value:ve.trim(),inline:!1});const at={title:H||"PHMC Admin Notification",url:ve&&ve.trim()?ve.trim():_e,description:Q||void 0,color:7506394,timestamp:new Date().toISOString(),fields:je,footer:{text:`PHMC Form Generator v${s?.sha||"N/A"}`}};return{username:"PHMC Admin",avatar_url:me,embeds:[at]}},rs=async H=>{H.preventDefault(),_(!0),F(null);const Q=Se.find(me=>me.id===o);if(!Q){console.error("No webhook selected or webhook not found"),F("error"),_(!1);return}const ve=ns(l,u,f);let _e=!1,Ce=null;try{const me=await fetch(Q.url,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ve)});_e=me.ok,Ce=me.status,_e||console.error("Webhook send failed:",me.status,me.statusText)}catch(me){console.error("Error sending custom webhook:",me),_e=!1}try{await Tt("custom_webhook",{webhook:{id:Q.id,name:Q.name,type:Q.type,url:Q.url},title:l,message:u,customUrl:f,adminUser:E?.email||"Unknown Admin",success:_e,responseStatus:Ce,timestamp:new Date().toISOString()}),Me(me=>me+1)}catch(me){console.error("Failed to log custom webhook to Firebase:",me)}F(_e?"success":"error"),_(!1),_e&&(d(""),p(""),g(""))};return i.jsxs(i.Fragment,{children:[i.jsx(Jx,{currentUser:wt,gtaWorldUser:C,desktopNotificationPermission:W,handleEnableDesktopNotifications:es,isLoadingStatus:pn,formGeneratorStatus:We,setFormGeneratorStatus:He,alternativeFormGeneratorStatus:Ie,setAlternativeFormGeneratorStatus:De,localHostStatus:st,setLocalHostStatus:yt,isUpdatingDb:X,selectedRecruitmentCategory:V,setSelectedRecruitmentCategory:q,recruitmentCategories:nn,handleAddRoleClick:Xn,isLoadingRecruitmentData:te,currentRecruitmentData:Y,handleRenameRoleKeyClick:bn,handleEditRoleClick:Dn,handleTogglePositionStatus:gn,selectedAdminBingoType:re,setSelectedAdminBingoType:he,BINGO_TYPES:us,handleManualResetAllBingoCards:vt,handleGenerateNewBingoCard:ee,handleClearBingoActivity:an,handleDisableBingoCard:Oe,setShowEditBingoPhrasesModal:ge,selectedTypeForEdit:ts,setShowReviewPhrasesModal:Pe,setShowUserManagementModal:Ue,setShowCctvWebhookModal:Ne,setShowMarkdownModal:Mn,handleLogout:$e,Sentry:jh,showInAppNotification:r,lockdownConfig:Dt,setLockdownConfig:ot,handleUpdateLockdownStatus:Pn,webhooks:Se,newWebhook:Ae,setNewWebhook:G,handleAddWebhook:fn,handleDeleteWebhook:rt,isUpdatingWebhooks:Xe,customWebhookChannel:o,setCustomWebhookChannel:a,customWebhookTitle:l,setCustomWebhookTitle:d,customWebhookMessage:u,setCustomWebhookMessage:p,customWebhookUrl:f,setCustomWebhookUrl:g,customWebhookSending:S,customWebhookResult:I,handleSendCustomWebhook:rs,logRefreshTrigger:Pt,setLogRefreshTrigger:Me}),V&&nn[V]&&i.jsx(ux,{show:Je,onHide:On,categoryKey:V,categoryConfig:nn[V],showNotification:r,onRoleSaved:mr,roleToEdit:Ge}),L&&V&&nn[V]&&i.jsx(vx,{show:Jt,onHide:()=>{zt(!1),ne(null)},categoryConfig:nn[V],currentRoleKey:L.key,currentRoleData:L.data,showInAppNotification:r,onKeyRenamed:Mt,sendAdminActionWebhook:ut,adminUserEmail:E?.email}),i.jsx(_x,{show:be,onHide:()=>ge(!1),showNotification:r,commitInfo:s,sendAdminActionWebhook:ut,adminUserEmail:E?.email,bingoType:ts}),i.jsx(Sx,{show:Re,onHide:()=>Pe(!1),showNotification:r,sendAdminActionWebhook:ut,adminUserEmail:E?.email}),i.jsx(Kf,{show:ae,onHide:()=>Ne(!1),onSubmit:on,showNotification:r}),i.jsx(Nx,{show:K,onHide:()=>Ue(!1),database:Ee,showNotification:r}),"        "]})},mt={DeathReport:()=>Te(()=>import("./deathReport-CXcHNuTI.js"),__vite__mapDeps([0,1,2,3,4,5])),CoronerEmail:()=>Te(()=>import("./CoronerEmail-BqNouftK.js"),__vite__mapDeps([6,1,2,4,5])),PhysEval:()=>Te(()=>import("./PhysEvalPHMC-CpgtK-4A.js"),__vite__mapDeps([7,1,2,4,5])),GeneralConsult:()=>Te(()=>import("./GeneralConsult-C-SqmLEe.js"),__vite__mapDeps([8,1,2,5,3,4])),EmergencyForm:()=>Te(()=>import("./EmergencyForm-Ihzsdswy.js"),__vite__mapDeps([9,1,2,5,4])),DevTest:()=>Te(()=>import("./devTest-B8FvJgpu.js"),__vite__mapDeps([10,1,2])),CommNotePHMC:()=>Te(()=>import("./CommNotePHMC-DSg3gK5A.js"),__vite__mapDeps([11,1,2,5,4])),CommNotePBC:()=>Te(()=>import("./CommNotePBC-DGWqtbrV.js"),__vite__mapDeps([12,1,2,5,4])),PatientFile:()=>Te(()=>import("./PatientFile-CFdHdHU5.js"),__vite__mapDeps([13,1,2,3,14,5,15])),MentalHealth:()=>Te(()=>import("./MentalHealth-BGG0qvGn.js"),__vite__mapDeps([16,1,2,5,4])),EmailInternal:()=>Te(()=>import("./EmailInternal-BZ_q_tdr.js"),__vite__mapDeps([17,1,2,3,4,5])),Surgical:()=>Te(()=>import("./Surgical-C9TPgSKT.js"),__vite__mapDeps([18,1,2,5,4])),MedicalRecords:()=>Te(()=>import("./MedicalRecords-CgaGV8g3.js"),__vite__mapDeps([19,1,2,5,14,4])),Shrink:()=>Te(()=>import("./Shrink-DyY7vFGe.js"),__vite__mapDeps([20,1,2,4,5])),Autopsy:()=>Te(()=>import("./Autopsy-9yNNXopr.js"),__vite__mapDeps([21,1,2,4,5])),Certificate:()=>Te(()=>import("./Certificate-C3Dl_XhM.js"),__vite__mapDeps([22,1,2,4,5])),MassFatality:()=>Te(()=>import("./MassFatality-BhBcPb6W.js"),__vite__mapDeps([23,1,2,3,4,5])),DeathRecord:()=>Te(()=>import("./DeathRecord-6PSFompa.js"),__vite__mapDeps([24,1,2,5,4])),SicknessEmail:()=>Te(()=>import("./SicknessEmail-Bg6QUPre.js"),__vite__mapDeps([25,1,2,4,5,3])),PhysicianFields:()=>Te(()=>import("./Physician-ClZmVcH7.js"),__vite__mapDeps([26,1,2])),PsychFields:()=>Te(()=>import("./Psych-BXot0KJo.js"),__vite__mapDeps([27,1,2])),AdminFields:()=>Te(()=>import("./Admin-Bn9o3FDR.js"),__vite__mapDeps([28,1,2])),NursingFields:()=>Te(()=>import("./Nursing-BcLdDMF1.js"),__vite__mapDeps([29,1,2])),Coroner:()=>Te(()=>import("./Coroner-BbdZlVEI.js"),__vite__mapDeps([30,1,2])),Ems:()=>Te(()=>import("./Ems-_U9Ul6Qp.js"),__vite__mapDeps([31,1,2]))},Zx=t=>{if(!t.isAdminAuthenticated)return"Please log in using the form fields to view admin controls.";const e=t.adminSelectedCategoryName||"Selected Category";let n=`[b]${e} Recruitment Statuses:[/b]
`;if(t.adminDisplayData&&typeof t.adminDisplayData=="object"&&Object.keys(t.adminDisplayData).length>0){const r=Object.entries(t.adminDisplayData).map(([s,o])=>{const a=o.displayName||o.name||s,l=o.status||"N/A";return`${a}: [color=${l==="OPEN"?"green":"red"}]${l}[/color]`});n+=r.join(" | ")}else t.adminDisplayData===null&&t.adminSelectedCategoryName?n+=`Data for ${e} not found or failed to load.`:t.adminSelectedCategoryName?n+=`Loading data for ${e}...`:t.isAdminAuthenticated&&!t.adminSelectedCategoryName?n+="Please select a recruitment category in the panel to view statuses.":n+="No recruitment data to display. Please select a category or check logs if issues persist.";return n},gr=[{version:24,name:"[Civilian] Medical Records",group:"PHMC",icon:La,generator:FN,componentLoader:mt.MedicalRecords,titleKey:"medicalRecords",sortOrder:1,hasCustomTitle:!0,titleGenerator:t=>t.formType==="release"?`[RELEASE REQUEST] ${t.patientFirstName||""} ${t.patientLastName||""} `.trim():`[Medical Information Update] -  ${t.patientName||"N/A"}`,userTypes:["civilian","other"],primaryFor:["civilian"]},{version:25,name:"[Civilian] Patient Files",group:"PHMC",icon:La,generator:wN,componentLoader:mt.PatientFile,titleKey:"patientFile",sortOrder:2,hasCustomTitle:!0,titleGenerator:t=>`[Medical Information Registration] -  ${t.patientName||"N/A"}`,userTypes:["civilian","other"],primaryFor:["civilian"]},{version:1,name:"Forensic Services ",group:"PHMC",icon:YN,generator:_N,componentLoader:mt.DeathReport,titleKey:"deathReport",sortOrder:10,hasCustomTitle:!0,titleGenerator:t=>{const{typeOfDeath:e,decedentName:n,decedentOOC:r,dateTime:s}=t,o=s?new Date(s).toLocaleDateString("en-US"):"N/A";return`[${e||"N/A"}] ${n||"N/A"} ((${r||"N/A"})) - ${o}`},userTypes:["phmcStaff","coroner","other"],primaryFor:["coroner"],requiredFaction:["PHMC"],requiredRank:1,isPHMC:!0},{version:4,name:"Autopsy Report",group:"PHMC",icon:KN,generator:MN,componentLoader:mt.Autopsy,titleKey:"autopsyReport",sortOrder:11,isHiddenInSelector:!0,hasCustomTitle:!0,titleGenerator:t=>{const{decedentName:e,decedentOOC:n}=t;return`CASE ## ${e||"N/A"} ((${n||"N/A"})) | SENT/COMPLETED/PENDING`},userTypes:["phmcStaff","coroner","other"],primaryFor:["coroner"],requiredFaction:["PHMC"],requiredRank:1,isPHMC:!0},{version:2,name:"Coroner Email",group:"PHMC",icon:aa,generator:CN,componentLoader:mt.CoronerEmail,titleKey:"coronerEmail",sortOrder:12,isHiddenInSelector:!0,hasCustomTitle:!0,titleGenerator:t=>{const{decedentName:e,decedentOOC:n,paperworkType:r}=t;if(r&&r.toLowerCase().includes("mass fatality"))return`Coroner Report - ${e||"N/A"} | (MASS FATALITY)`;const s=(e||"").split(", ").filter(Boolean),o=(n||"").split(", ").filter(Boolean);let a=[];for(let l=0;l<s.length;l++){const d=s[l],u=o[l]?`((${o[l]}))`:"";a.push(`${d} ${u}`.trim())}return a.length>0?`Coroner Report - ${a.join(", ")}`:"Coroner Report - N/A"},userTypes:["phmcStaff","coroner","other"],primaryFor:["coroner"],requiredFaction:["PHMC"],requiredRank:1,isPHMC:!0},{version:8,name:"Certificate of Death",group:"PHMC",icon:JN,generator:LN,componentLoader:mt.Certificate,titleKey:"certificateOfDeath",sortOrder:13,isHiddenInSelector:!0,hasCustomTitle:!0,titleGenerator:t=>`[Death Certificate] -  ${t.decedentOOC||"N/A"}`,userTypes:["phmcStaff","coroner","other"],primaryFor:["coroner"],requiredFaction:["PHMC"],requiredRank:1,isPHMC:!0},{version:5,name:"Surgical Ops",group:"PHMC",icon:ZN,generator:SN,componentLoader:mt.Surgical,titleKey:"surgicalOps",sortOrder:20,titleGenerator:t=>`Surgical Ops: ${t.patientName||"Unknown"}`,userTypes:["phmcStaff","other"],primaryFor:["phmcStaff"],requiredFaction:["PHMC"],requiredRank:1,isPHMC:!0},{version:6,name:"Physical Evaluation",group:"PHMC",icon:yl,generator:EN,componentLoader:mt.PhysEval,titleKey:"physEvalPHMC",sortOrder:21,titleGenerator:t=>`Physical Evaluation: ${t.patientName||"Unknown"}`,userTypes:["phmcStaff","other"],primaryFor:["phmcStaff"],requiredFaction:["PHMC"],requiredRank:1,isPHMC:!0},{version:11,name:"Mass Fatality Report",group:"PHMC",icon:XN,generator:UN,componentLoader:mt.MassFatality,titleKey:"massFatalityReport",sortOrder:14,isHiddenInSelector:!0,hasCustomTitle:!0,titleGenerator:t=>{const{decedents:e,dateTime:n}=t;let r="No Date";if(n){const s=n.split("T")[0],[o,a,l]=s.split("-");r=`${a}/${l}/${o}`}return e&&e.length>0?`[Mass Fatality Report] - ${e.map(o=>o.decedentName).filter(o=>o).join(", ")||"N/A"} - ${r}`:`[Mass Fatality Report] - N/A - ${r}`},userTypes:["phmcStaff","coroner","other"],primaryFor:["coroner"],requiredFaction:["PHMC"],requiredRank:1,isPHMC:!0},{version:7,name:"Physical Evaluation (PBC)",group:"PHMC",icon:ir,generator:NN,componentLoader:mt.PhysEval,titleKey:"physEvalPBC",sortOrder:22,isHiddenInSelector:!0,titleGenerator:t=>`Physical Evaluation: ${t.patientName||"Unknown"}`,userTypes:["phmcStaff","other"],primaryFor:["phmcStaff"],requiredFaction:["PHMC"],requiredRank:1,isPHMC:!0},{version:14,name:"Mental Health",group:"PHMC",icon:Ih,generator:xN,componentLoader:mt.MentalHealth,titleKey:"mentalHealthPHMC",sortOrder:23,hasCustomTitle:!0,titleGenerator:t=>{const e=t.dateTime?new Date(t.date).toLocaleDateString("en-US"):"N/A";return`${t.patientID||"Unknown"} - ${e}`},userTypes:["phmcStaff","other"],primaryFor:["phmcStaff"],requiredFaction:["PHMC"],requiredRank:1,isPHMC:!0},{version:16,name:"Mental Health (PBC)",group:"PHMC",icon:ir,generator:AN,componentLoader:mt.MentalHealth,titleKey:"mentalHealthPBC",sortOrder:24,isHiddenInSelector:!0,hasCustomTitle:!0,titleGenerator:t=>{const e=t.patientID?new Date(t.date).toLocaleDateString("en-US"):"N/A";return`${t.patientName||"Unknown"} - ${e}`},userTypes:["phmcStaff","other"],primaryFor:["phmcStaff"],requiredFaction:["PHMC"],requiredRank:1,isPHMC:!0},{version:19,name:"ER Protocol",group:"PHMC",icon:ex,generator:TN,componentLoader:mt.EmergencyForm,titleKey:"erProtocol",sortOrder:25,titleGenerator:t=>`ER Protocol: ${t.patientName||"Unknown"}`,userTypes:["phmcStaff","other"],primaryFor:["phmcStaff"],requiredFaction:["PHMC"],requiredRank:1,isPHMC:!0},{version:20,name:"General Consultation",group:"PHMC",icon:tx,generator:IN,componentLoader:mt.GeneralConsult,titleKey:"generalConsultPHMC",sortOrder:26,titleGenerator:t=>`General Consultation: ${t.patientName||"Unknown"}`,userTypes:["phmcStaff","other"],primaryFor:["phmcStaff"],requiredFaction:["PHMC"],requiredRank:1,isPHMC:!0},{version:21,name:"General Consultation (PBC)",group:"PHMC",icon:ir,generator:$N,componentLoader:mt.GeneralConsult,titleKey:"generalConsultPBC",sortOrder:27,isHiddenInSelector:!0,titleGenerator:t=>`General Consultation: ${t.patientName||"Unknown"}`,userTypes:["phmcStaff","other"],primaryFor:["phmcStaff"],requiredFaction:["PHMC"],requiredRank:1,isPHMC:!0},{version:22,name:"Commentary Notes",group:"PHMC",icon:nx,generator:RN,componentLoader:mt.CommNotePHMC,titleKey:"commNotePHMC",sortOrder:28,titleGenerator:t=>`Commentary Note: ${t.patientName||"Unknown"}`,userTypes:["phmcStaff","other"],primaryFor:["phmcStaff"],requiredFaction:["PHMC"],requiredRank:1,isPHMC:!0},{version:23,name:"Commentary Notes (PBC)",group:"PHMC",icon:ir,generator:kN,componentLoader:mt.CommNotePBC,titleKey:"commNotePBC",sortOrder:29,isHiddenInSelector:!0,titleGenerator:t=>`Commentary Note: ${t.patientName||"Unknown"}`,userTypes:["phmcStaff","other"],primaryFor:["phmcStaff"],requiredFaction:["PHMC"],requiredRank:1,isPHMC:!0},{version:27,name:"PHMC Internal Email",group:"PHMC",icon:aa,generator:PN,componentLoader:mt.EmailInternal,titleKey:"internalEmail",sortOrder:30,titleGenerator:t=>`Internal Email: ${t.subject||"No Subject"}`,userTypes:["phmcStaff","other"],primaryFor:["phmcStaff"],requiredFaction:["PHMC"],requiredRank:1,isPHMC:!0},{version:28,name:"Psychological Evaluation",group:"PHMC",icon:Ih,generator:DN,componentLoader:mt.Shrink,titleKey:"psychEvalPHMC",sortOrder:31,titleGenerator:t=>`Psychological Evaluation: ${t.patientName||"Unknown"}`,userTypes:["phmcStaff","other"],primaryFor:["phmcStaff"],requiredFaction:["PHMC"],requiredRank:1,isPHMC:!0},{version:29,name:"Psychological Evaluation (PBC)",group:"PHMC",icon:ir,generator:ON,componentLoader:mt.Shrink,titleKey:"psychEvalPBC",sortOrder:32,isHiddenInSelector:!0,titleGenerator:t=>`Psychological Evaluation: ${t.patientName||"Unknown"}`,userTypes:["phmcStaff","other"],primaryFor:["phmcStaff"],requiredFaction:["PHMC"],requiredRank:1,isPHMC:!0},{version:35,name:"Medical Sickness Email",group:"PHMC",icon:aa,generator:jN,componentLoader:mt.SicknessEmail,titleKey:"sicknessEmail",sortOrder:33,isHiddenInSelector:!0,titleGenerator:t=>`Sickness Email: ${t.phmcEmployee||"Unknown"}`,userTypes:["phmcStaff","other"],primaryFor:["phmcStaff"],requiredFaction:["PHMC"],requiredRank:1,isPHMC:!0},{version:50,name:"Physician Careers",group:"PHMC Recruitment",icon:Or,generator:HN,componentLoader:mt.PhysicianFields,titleKey:"phmcGeneralApplication",sortOrder:200,hasCustomTitle:!0,titleGenerator:t=>`Application: ${t.characterName||"Unknown"}`,userTypes:["recruitment","other"],primaryFor:["recruitment"],requiredFaction:["PHMC"],requiredRank:1,isPHMC:!0},{version:51,name:"Psychologist/Psychiatrist Careers",group:"PHMC Recruitment",icon:Or,generator:GN,componentLoader:mt.PsychFields,titleKey:"phmcPsychApplication",sortOrder:201,hasCustomTitle:!0,titleGenerator:t=>`Application: ${t.characterName||"Unknown"}`,userTypes:["recruitment","other"],primaryFor:["recruitment"],requiredFaction:["PHMC"],requiredRank:1,isPHMC:!0},{version:52,name:"Admin Careers",group:"PHMC Recruitment",icon:Or,generator:WN,componentLoader:mt.AdminFields,titleKey:"phmcAdminApplication",sortOrder:202,hasCustomTitle:!0,titleGenerator:t=>`Application: ${t.characterName||"Unknown"}`,userTypes:["recruitment","other"],primaryFor:["recruitment"],requiredFaction:["PHMC"],requiredRank:1,isPHMC:!0},{version:53,name:"Nursing Careers",group:"PHMC Recruitment",icon:Or,generator:zN,componentLoader:mt.NursingFields,titleKey:"phmcNursingApplication",sortOrder:203,hasCustomTitle:!0,titleGenerator:t=>`Application: ${t.characterName||"Unknown"}`,userTypes:["recruitment","other"],primaryFor:["recruitment"],requiredFaction:["PHMC"],requiredRank:1,isPHMC:!0},{version:54,name:"Coroner Careers",group:"PHMC Recruitment",icon:Or,generator:qN,componentLoader:mt.Coroner,titleKey:"phmcCoronerRecruitmentApplication",sortOrder:204,hasCustomTitle:!0,titleGenerator:t=>`Application: ${t.characterName||"Unknown"}`,userTypes:["recruitment","other"],primaryFor:["recruitment"],requiredFaction:["PHMC"],requiredRank:1,isPHMC:!0},{version:55,name:"EMS Careers",group:"PHMC Recruitment",icon:Or,generator:VN,componentLoader:mt.Ems,titleKey:"phmcEMSApplication",sortOrder:205,hasCustomTitle:!0,titleGenerator:t=>`Application: ${t.characterName||"Unknown"}`,userTypes:["recruitment","other"],primaryFor:["recruitment"],requiredFaction:["PHMC"],requiredRank:1,isPHMC:!0},{version:999,name:"Admin Control Panel",group:"Admin",icon:Or,componentLoader:null,generator:Zx,titleKey:"adminControlPanel",sortOrder:999,titleGenerator:()=>"Admin Control Panel",userTypes:["other"],primaryFor:["other"]},{version:37,name:"Death Record",group:"PHMC",icon:QN,generator:BN,componentLoader:mt.DeathRecord,titleKey:"deathRecord",sortOrder:15,hasCustomTitle:!0,isHiddenInSelector:!0,titleGenerator:t=>{const{caseNumber:e,decedentName:n,decedentOOC:r,dateOfDeath:s}=t,o=new Date().getFullYear();let a="N/A";if(s){const d=new Date(s+"T00:00:00"),p=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"][d.getMonth()],f=String(d.getDate()).padStart(2,"0"),g=d.getFullYear();a=`${p}-${f}-${g}`}const l=n||(t.deathRecordType==="Unidentified"?"JANE/JOHN DOE":"JOHN/JANE DOE");return`[CASE #${o}-${e||"(( DEATH REPORT POST ID ))"}] ${l} ((${r||"OOC NAME"})) | [${a}]`},userTypes:["phmcStaff","coroner","other"],primaryFor:["coroner"],requiredFaction:["PHMC"],requiredRank:1,isPHMC:!0},{version:1e3,name:"dev-testing",group:"PHMC",icon:Or,generator:vN,componentLoader:mt.DevTest,titleKey:"devTesting",sortOrder:1e3,hasCustomTitle:!0,titleGenerator:t=>`Dev Test: ${t.test_field_1||"Unknown"}`,userTypes:["phmcStaff","other"],requiredFaction:["PHMC"],requiredRank:1,isPHMC:!0}],Hn=t=>gr.find(e=>e.version===t),lI=t=>gr.filter(e=>e.primaryFor&&e.primaryFor.includes(t)),Mc=t=>{if(!t)return"";let e=t.trim().replace(/[.#$[\/ \]]+/g,"_");return e=e.replace(/_{2,}/g,"_"),e=e.replace(/^_+|_+$/g,""),e},eA=t=>{if(!t)return"";const e=t.match(/\d+$/);return e?e[0]:""},tA=(t,e,n,r,s,o,a,l,d,u,p,f,g,S,_,I,F,P,k)=>{const{factionsData:D,coronerListData:R,phmcListData:$}=Mf(),O=L=>{if(D&&D[364]&&D[364].members){const ae=Object.values(D[364].members).find(Ne=>Ne.characterName&&Ne.characterName===L||Ne.name&&Ne.name===L);if(ae)return ae}const ne=R.find(oe=>oe.name===L);return ne||$.find(oe=>oe.name===L)||null},{user:E,isAuthenticated:y}=ur(),[w,N]=b.useState([]),[v,A]=b.useState(!1),[C,M]=b.useState(!1),[B,j]=b.useState(null),[V,q]=b.useState(null),Y=b.useRef(null),[ue,te]=b.useState(null),[se,X]=b.useState(!1),[Z,re]=b.useState(null),he=async(L,ne)=>{const W=fe(Ee,"webhook_logs/"+Date.now());try{await At(W,{type:L,payload:ne,timestamp:Date.now()})}catch(oe){console.error("Error logging webhook:",oe),Ze(oe,{extra:{context:"logWebhook"}})}};async function be(){let L="";const ne=s(),W=o(t);if(n===1){if(!t.decedentOOC||!t.dateTime){const K="Please fill in Decedent OOC and Date/Time fields.";return d(K,"exclamation-circle"),{success:!1,error:K}}L=`[DEATH-REPORT] ${t.decedentOOC} - ${t.dateTime}`}else if(n===4){if(!t.decedentName||!t.decedentOOC||!t.autopsyDate){const K="Please fill in Decedent IC Name, OOC Name, and Autopsy Date fields.";return d(K,"exclamation-circle"),{success:!1,error:K}}L=`[Autopsy] ${t.decedentName} (${t.decedentOOC}) - ${t.autopsyDate}`}else if(n===3){if(!t.patientName||!t.patientDateOfBirth){const K="Please fill in Patient Name and Date of Birth fields.";return d(K,"exclamation-circle"),{success:!1,error:K}}L=`${t.patientID||"NO_ID"} - ${t.patientName||"NO_NAME"} - ${t.patientDateOfBirth||"NO_DATE"}`}else if(n>3&&n<=7&&n!==4){let K=!t.patientID,Ue=!t.date,We=!1;if(n!==5&&(We=!t.patientName),K||Ue||We){let He=[];if(K&&He.push("Patient ID"),We&&He.push("Patient Name"),Ue&&He.push("Date"),He.length>0){const Ie=`Please fill in ${He.join(", ")} fields.`;return d(Ie,"exclamation-circle"),{success:!1,error:Ie}}}L=`${t.patientID||"NO_ID"} - ${t.patientName||"NO_NAME"} - ${t.date||"NO_DATE"}`}else if(n===19){if(!t.patientID||!t.date){const K="Please fill in Patient ID, and Date fields.";return d(K,"exclamation-circle"),{success:!1,error:K}}L=`${t.patientID} - ${t.lastName} - ${t.date}`}else if(n===25){if(!t.patientName||!t.patientDateOfBirth){const K="Please fill in Patient Name and Date of Birth fields.";return d(K,"exclamation-circle"),{success:!1,error:K}}L=`${t.patientName} - ${t.patientDateOfBirth}`}else if(n===24){if(!t.registrantFullName||!t.dateOfRequest){const K="Please fill in Registrant Full Name and Date of Request fields.";return d(K,"exclamation-circle"),{success:!1,error:K}}L=`[Medical Release] ${t.registrantFullName} - ${t.dateOfRequest}`}else if(n===2){if(!t.coronerEmployee||!t.requestingOfficer||!t.decedentName&&!t.decedentOOC){const K="Please fill in Coroner, Requesting Officer, and Decedent Name/OOC for Coroner Email.";return d(K,"exclamation-circle"),{success:!1,error:K}}L=`[Email] ${t.requestingOfficer} re: ${t.decedentName||t.decedentOOC} - ${new Date().toISOString().split("T")[0]}`}else if(n===18){if(!t.department||!t.dateTime||!t.synopsis){const K="Please fill in Department, Date/Time, and Synopsis for Agency Feedback.";return d(K,"exclamation-circle"),{success:!1,error:K}}L=`[Feedback] ${t.department} - ${t.dateTime}`}else{if(Hn(n)?.group==="PHMC Recruitment")return{success:!1,error:"PHMC Recruitment forms cannot be saved to Firebase."};if(n===11){const{decedents:K,dateTime:Ue}=t;if(!K||K.length===0){const Ie="Please add at least one decedent to the report.";return d(Ie,"exclamation-circle"),{success:!1,error:Ie}}if(!K[0].decedentName||!Ue){const Ie="The first decedent must have a name and the main date/time must be set.";return d(Ie,"exclamation-circle"),{success:!1,error:Ie}}L=`[Mass Fatality Report] - ${K.map(Ie=>Ie.decedentName).filter(Ie=>Ie).join(", ")} - ${Ue&&Ue.split("T")[0]||"No Date"}`}else if(n===37){if(!t.deathReportPostId||!t.decedentName||!t.dateOfDeath){const We="Please fill in Case Number, Decedent Name, and Date of Death fields.";return d(We,"exclamation-circle"),{success:!1,error:We}}const K=eA(t.deathReportPostId),Ue=t.dateOfDeath?new Date(t.dateOfDeath).toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric"}).toUpperCase().replace(/,/g,""):"NO_DATE";L=`[CASE #${K}] ${t.decedentName} (( ${t.decedentOOC||"N/A"} )) | [${Ue}]`}else{Hn(n);const K=_[n]||`FormV${n}`;let Ue=t.decedentName||t.patientName||"Unnamed Report";Array.isArray(Ue)&&(Ue=Ue.join(", "));const We=t.date||t.dateTime||t.autopsyDate||"No Date";L=`[${K}] ${Ue} - ${We}`}}if(!L){const K="Could not generate a report key. Save aborted.";return d(K,"error"),{success:!1,error:K}}if(!W){const K="Cannot determine report author. Please ensure an employee is selected or patient name is filled if applicable for this form type.";return d(K,"error"),{success:!1,error:K}}const oe=Mc(W),ae=L.trim().replace(/[.#$[\/ \]]+/g,"_")+"_"+Date.now(),Ne=w.filter(K=>K.authorName===W).length,Se=localStorage.getItem("easterEggShown")==="true";let ye=!1,Ae=!1;Ne===4&&!Se?ye=!0:Ne>4&&!Se?ye=Math.random()<.05:Se&&(Ae=Math.random()<.01),ye?(p(!0),f("normal"),localStorage.setItem("easterEggShown","true"),g("normal")):Ae&&(p(!0),f("rare"),g("rare"));const G={bbCodeVersion:n,data:a(t,n),timestamp:Date.now(),originalKey:L,authorName:W};let Xe=!1,Le=null;if(y&&E)Xe=!0,Le=E;else{const K=localStorage.getItem("phmc_gtaw_oauth_profile");if(K)try{const Ue=JSON.parse(K);Ue&&(Xe=!0,Le=Ue)}catch(Ue){console.error("Error parsing stored GTAW profile:",Ue),Ze(Ue,{extra:{context:"saveReport - parsing stored profile"}})}}Xe&&Le&&(G.gtawUsername=Le.username,G.gtawCharacterId=gl(Le),G.gtawCharacterName=fl(Le),G.gtawSyncTimestamp=new Date().toISOString(),G.gtawSyncVersion="1.2-local",console.log("📄 [Report Save] Added GTAW data to saved report:",{username:G.gtawUsername,characterId:G.gtawCharacterId,characterName:G.gtawCharacterName,author:W,source:y?"live":"local"}));const Pt=`savedReports/${oe}/${ae}`,Me=`savedReportBBCode/${oe}/${ae}`;try{const K=fe(Ee,Pt),Ue=fe(Ee,Me);await Promise.all([At(K,G),At(Ue,{bbCode:ne})]);const We=Xe?`Report "${L}" saved for ${W} to Firebase with GTAW data!`:`Report "${L}" saved for ${W} to Firebase!`;d(We,"save");const He={author:W,reportKey:ae,originalKey:L,bbCodeVersion:n,hasGtawData:Xe};return Xe&&Le&&(He.gtawUsername=Le.username,He.gtawCharacterId=gl(Le),He.gtawCharacterName=fl(Le)),await he(`report_saved by ${W}`,He),{success:!0}}catch(K){console.error("Error saving report to Firebase:",K),Ze(K,{extra:{context:"Firebase set report"}});const Ue="Something unexpected went wrong, report copied to clipboard!";return d(Ue,"error"),{success:!1,error:Ue}}}const ge=b.useCallback(async L=>{if(!L){N([]),j(null);return}M(!0),j(L);const ne=d(`Loading reports for ${L}...`,"info-circle",0);try{const W=Sd(),ae=await Qr(W,"getSavedReports")({userId:L});if(u(ne),ae.data.success){const Ne=ae.data.reports||[];Ne.sort((Se,ye)=>ye.timestamp-Se.timestamp),N(Ne),Ne.length>0?d(`Loaded ${Ne.length} report(s) for ${L}.`,"check-circle"):d(`No active reports found for ${L}.`,"info-circle")}else throw new Error(ae.data.message||"Failed to load reports.")}catch(W){u(ne),console.error(`Error loading reports for user ${L}:`,W),Ze(W,{extra:{context:"loadUserSavedReports",userId:L}}),d(`Failed to load reports for ${L}.`,"error"),N([])}finally{M(!1)}},[d,u,N,j,M]),Re=b.useCallback(async(L,ne,W=!1)=>{if(!ne||!L)return W||d("Cannot load report: User ID or Report Key is missing.","error"),{success:!1,message:"User ID or Report Key is missing."};const oe=Mc(ne),ae=`savedReports/${oe}/${L}`,Ne=`savedReportBBCode/${oe}/${L}`,Se=fe(Ee,ae),ye=fe(Ee,Ne);let Ae;W||(Ae=d(`Loading report: ${L} for ${ne}...`,"info-circle",0));try{const[G,Xe]=await Promise.all([ze(Se),ze(ye)]);if(G.exists()){const Le=G.val();Le.bbCode=Xe.exists()?Xe.val().bbCode:"";const Pt=Le.bbCodeVersion;let Me=Le.bbCode||"",K=Le.data||{};if(W){const De=(Me.match(/\[bold\]/gi)||[]).length;De>0&&(console.log(`[useReportManagement] Found ${De} [bold] tags. Converting to [b].`),Me=Me.replace(/\[bold\]/gi,"[b]").replace(/\[\/bold\]/gi,"[/b]"),console.log("[useReportManagement] Conversion complete."))}else Me=Me.replace(/\[bold\]/gi,"[b]").replace(/\[\/bold\]/gi,"[/b]");const Ue=K.coronerEmployee,We=K.phmcEmployee,He=Date.now().toString();if(Ue){const De=O(Ue);De?(K.coronerEmployee=Ue,K.coronerBadge=De.badge||"",K.coronerRank=De.rank||"",K.coronerDiscord=De.discord||"",K.coronerPHNumber=De.phNumber||"50056",W||(localStorage.setItem("coronerEmployee",K.coronerEmployee),localStorage.setItem("coronerEmployee_timestamp",He),localStorage.setItem("coronerBadge",K.coronerBadge),localStorage.setItem("coronerBadge_timestamp",He),localStorage.setItem("coronerRank",K.coronerRank),localStorage.setItem("coronerRank_timestamp",He),localStorage.setItem("coronerDiscord",K.coronerDiscord),localStorage.setItem("coronerDiscord_timestamp",He),localStorage.setItem("coronerPHNumber",K.coronerPHNumber),localStorage.setItem("coronerPHNumber_timestamp",He))):(W||d(`Coroner "${Ue}" not found in current staff list. Using data from saved report.`,"warning",7e3),W||(K.coronerEmployee&&localStorage.setItem("coronerEmployee_timestamp",He),K.coronerBadge&&localStorage.setItem("coronerBadge_timestamp",He),K.coronerRank&&localStorage.setItem("coronerRank_timestamp",He),K.coronerDiscord&&localStorage.setItem("coronerDiscord_timestamp",He),K.coronerPHNumber&&localStorage.setItem("coronerPHNumber_timestamp",He)))}else W||["coronerEmployee","coronerBadge","coronerRank","coronerDiscord","coronerPHNumber"].forEach(st=>{localStorage.removeItem(st),localStorage.removeItem(`${st}_timestamp`)});if(We){const De=O(We);De?(K.phmcEmployee=We,K.phmcEmployeeLastName=De.lastName||"",K.phmcRank=De.category||De.rank||"",W||(localStorage.setItem("phmcEmployee",K.phmcEmployee),localStorage.setItem("phmcEmployee_timestamp",He),localStorage.setItem("phmcEmployeeLastName",K.phmcEmployeeLastName),localStorage.setItem("phmcEmployeeLastName_timestamp",He),localStorage.setItem("phmcRank",K.phmcRank),localStorage.setItem("phmcRank_timestamp",He))):(W||d(`PHMC Staff "${We}" not found in current staff list. Using data from saved report.`,"warning",7e3),W||(K.phmcEmployee&&localStorage.setItem("phmcEmployee_timestamp",He),K.phmcEmployeeLastName&&localStorage.setItem("phmcEmployeeLastName_timestamp",He),K.phmcRank&&localStorage.setItem("phmcRank_timestamp",He)))}else W||["phmcEmployee","phmcEmployeeLastName","phmcRank"].forEach(st=>{localStorage.removeItem(st),localStorage.removeItem(`${st}_timestamp`)});if(["placeOfDeath","pronouncedTimeOfDeath","dateTime","department","mannerOfDeath"].forEach(De=>{K.hasOwnProperty(De)&&K[De]&&(W||(localStorage.setItem(De,K[De]),localStorage.setItem(`${De}_timestamp`,He)))}),!W){if(Pt===11){const De=Array.isArray(K.decedents)?K.decedents.map(st=>({...st,decedentName:st.decedentName||st.DecedentName,decedentOOC:st.decedentOOC||st.DecedentOOC})):[];e(st=>({...st,...K,decedents:De,coronerEmployee:K.coronerEmployee||st.coronerEmployee,phmcEmployee:K.phmcEmployee||st.phmcEmployee})),r(Pt),d("Mass Fatality Report loaded.","upload")}else if(n===2&&Pt===1){const De=!t.deathReport||t.deathReport.trim()==="";let st="";e(yt=>{let pn=yt.decedentName||"",Ut=yt.decedentOOC||"",Dt=yt.deathReport||"",ot=yt.additionalReports||[];return yt.decedentName&&K.decedentName?pn=`${yt.decedentName}, ${K.decedentName}`:pn=K.decedentName||yt.decedentName||"",yt.decedentOOC&&K.decedentOOC?Ut=`${yt.decedentOOC}, ${K.decedentOOC}`:Ut=K.decedentOOC||yt.decedentOOC||"",De?(Dt=Me,st=`Loaded report for ${K.decedentName||Le.originalKey} into main Death Report field.`):(ot=[...ot,Me],st=`Added report for ${K.decedentName||Le.originalKey} as an additional report.`),{...yt,...K,decedentName:pn,decedentOOC:Ut,deathReport:Dt,additionalReports:ot}}),d(st,"plus-circle")}else e(De=>({...De,...K,coronerEmployee:K.coronerEmployee||De.coronerEmployee,phmcEmployee:K.phmcEmployee||De.phmcEmployee})),r(Pt),d(`Report "${Le.originalKey||L}" loaded.`,"upload");A(!1)}return{success:!0,reportData:{...Le,data:K,bbCode:Me}}}else return W||d(`Report not found in Firebase: ${L}`,"error"),{success:!1,message:`Report not found in Firebase: ${L}`}}catch(G){return console.error(`[loadReportForUser] Error loading report ${L} for user ${ne}:`,G),Ze(G,{extra:{context:"loadReportForUser",userId:ne,reportFirebaseKey:L}}),W||d(`Failed to load report: ${G.message}`,"error"),{success:!1,message:`Failed to load report: ${G.message}`}}finally{!W&&Ae&&u(Ae)}},[n,D,R,$,u,r,e,d]),Pe=b.useCallback(async(L,ne)=>{S.current&&clearTimeout(S.current);const W=d("Attaching report...","info-circle",0),oe=await Re(L,ne,!0);if(u(W),oe.success&&Y.current){const ae=oe.reportData,Ne=ae.data||{},Se=ae.bbCodeVersion;e(ye=>{if(n===2&&Se===11){const G=Ne.decedents;if(G&&G.length>0){const Xe=G[0];let Le=Xe.decedentName||Xe.DecedentName||"",Pt=Xe.decedentOOC||Xe.DecedentOOC||"";G.length>1&&(Le+=` (x${G.length})`,Pt+=` (x${G.length})`);const Me=!ye.deathReport||ye.deathReport.trim()==="";let K={...ye};return K.decedentName=Le,K.decedentOOC=Pt,K.paperworkType="Mass Fatality",Me?K.deathReport=ae.bbCode:K.additionalReports=[...ye.additionalReports||[],ae.bbCode],K}return ye}if(Se===11){const G=!ye.deathReport||ye.deathReport.trim()==="";let Xe={...ye};return G?Xe.deathReport=ae.bbCode:Xe.additionalReports=[...ye.additionalReports||[],ae.bbCode],Array.isArray(Ne.decedents)&&(Xe.decedents=[...ye.decedents||[],...Ne.decedents]),Xe}const Ae={decedentName:Ne.decedentName,decedentOOC:Ne.decedentOOC,requestingOfficer:Ne.requestingOfficer,department:Ne.department};if(n===2){let G={...ye};return G.decedentName=ye.decedentName&&Ae.decedentName?`${ye.decedentName}, ${Ae.decedentName}`:Ae.decedentName||ye.decedentName||"",G.decedentOOC=ye.decedentOOC&&Ae.decedentOOC?`${ye.decedentOOC}, ${Ae.decedentOOC}`:Ae.decedentOOC||ye.decedentOOC||"",G.requestingOfficer=Ae.requestingOfficer||ye.requestingOfficer,G.department=Ae.department||ye.department,Se===1&&n===2&&(!ye.deathReport||ye.deathReport.trim()===""?G.deathReport=ae.bbCode:G.additionalReports=[...ye.additionalReports||[],ae.bbCode]),G}else{let G={...ye};return G.decedentName=Ae.decedentName||ye.decedentName,G.decedentOOC=Ae.decedentOOC||ye.decedentOOC,G.requestingOfficer=Ae.requestingOfficer||ye.requestingOfficer,G.department=Ae.department||ye.department,G}}),Y.current(ae),d(`Report "${ae.originalKey}" attached successfully.`,"check-circle")}else oe.success?Y.current||(d("Attachment process could not be completed (no callback).","error"),sn("handleReportSelectedForAttachment was called but pendingReportAttachmentCallback.current was null.")):d("Failed to load the selected report.","error");S.current=setTimeout(()=>{te(null),q(null),A(!1)},1e3)},[n,Re,S,u,e,d]),Je=b.useCallback(L=>{if(!o(t)){d("Please select a PHMC employee in the form before attaching a report.","warning");return}Y.current=L,te([I,F,P]),q("PHMC"),A(!0)},[I,P,F,o,t,te,q,A,d]),we=b.useCallback(L=>{if(!o(t)){d("Please select a Coroner employee in the form before parsing decedent reports.","warning");return}Y.current=L,te([1,4]),q("Coroner"),A(!0)},[o,t,te,q,A,d]),Ge=b.useCallback(async(L,ne)=>{if(!ne||!L){d("Cannot delete report: User ID or Report Key is missing.","error");return}const W=Mc(ne),oe=`savedReports/${W}/${L}`,ae=`savedReportBBCode/${W}/${L}`,Ne=fe(Ee,oe),Se=fe(Ee,ae);try{await Promise.all([Gn(Ne),Gn(Se)]),d("Report deleted successfully from Firebase.","trash"),B===ne&&ge(ne)}catch(ye){console.error(`Error deleting report ${L} for user ${ne}:`,ye),Ze(ye,{extra:{context:"deleteReportForUser",userId:ne,reportFirebaseKey:L}}),d(`Failed to delete report: ${ye.message}`,"error")}},[ge,B,d]),bt=b.useCallback(()=>{p(!0),f("rare"),window.location.hostname==="localhost"&&g("rare")},[g,f,p]),Jt=b.useCallback((L=null,ne=null,W=null)=>{if(v){A(!1),q(null),te(null),Y.current=null;return}o(t)?(A(!0),q(ne),te(L),Y.current=W):d("Please select an employee in the form before viewing saved reports.","warning")},[o,t,q,te,A,d,v]),zt=b.useCallback(L=>{let ne=null;const W=Hn(n);if(!L){d("Please select a position first.","warning");return}k==="PHMC Recruitment"&&(W?.titleKey==="phmcGeneralApplication"&&l?.physicianRecruitmentDetails?ne=l.physicianRecruitmentDetails[L]:W?.titleKey==="phmcPsychApplication"&&l?.psychPositionDetailsData?ne=l.psychPositionDetailsData[L]:W?.titleKey==="phmcAdminApplication"&&l?.adminPositionDetailsData?ne=l.adminPositionDetailsData[L]:W?.titleKey==="phmcNursingApplication"&&l?.nursePositionDetailsData?ne=l.nursePositionDetailsData[L]:W?.titleKey==="phmcEMSApplication"&&l?.emsPositionDetailsData?ne=l.emsPositionDetailsData[L]:W?.titleKey==="phmcCoronerRecruitmentApplication"&&l?.coronerPositionDetailsData&&(ne=l.coronerPositionDetailsData[L])),ne?(re(ne),X(!0)):d("Detailed information for this position is not available.","warning")},[n,l,k,d]);return{saveReport:be,savedReports:w,setSavedReports:N,showSavedReports:v,setShowSavedReports:A,isLoadingUserReports:C,setIsLoadingUserReports:M,selectedUserForSavedReports:B,setSelectedUserForSavedReports:j,preselectedEmployeeType:V,setPreselectedEmployeeType:q,loadUserSavedReports:ge,loadReportForUser:Re,handleReportSelectedForAttachment:Pe,onAttachReportSummaryRequest:Je,onParseDecedentRequest:we,deleteReportForUser:Ge,showRareEasterEggDirectly:bt,toggleSavedReports:Jt,showPositionInfoModal:se,setShowPositionInfoModal:X,currentPositionInfo:Z,setCurrentPositionInfo:re,handleShowPositionInfo:zt,pendingReportAttachmentCallback:Y,reportSelectionFilter:ue,setReportSelectionFilter:te}},nA=({show:t,onHide:e,characters:n,onCharacterSelect:r,currentSelection:s,title:o="Select Character"})=>{const[a,l]=b.useState(s?.id||(n&&n.length>0?n[0].id:null)),d=()=>{const u=n.find(p=>p.id===parseInt(a));u&&r(u),e()};return!n||n.length===0?null:i.jsxs(_t,{show:t,onHide:e,centered:!0,backdrop:"static",children:[i.jsx(_t.Header,{closeButton:!0,style:{backgroundColor:"#1a1a1a",borderBottom:"1px solid #444"},children:i.jsxs(_t.Title,{style:{color:"#e0e0e0"},children:[i.jsx("i",{className:"fas fa-users"})," ",o]})}),i.jsxs(_t.Body,{style:{backgroundColor:"#2a2a2a",color:"#e0e0e0"},children:[i.jsx("p",{className:"mb-3",children:"You have multiple PHMC characters. Please select which character to use as the employee name:"}),i.jsx(pe,{children:n.map((u,p)=>{const f=u.name||`${u.firstname||""} ${u.lastname||""}`.trim(),g=u.id===parseInt(a);return i.jsx("div",{className:"mb-2",children:i.jsx(pe.Check,{type:"radio",id:`character-${u.id}`,name:"character-selection",label:i.jsxs("div",{className:"d-flex justify-content-between align-items-center w-100",children:[i.jsxs("div",{children:[i.jsx("strong",{children:f}),i.jsx("br",{}),i.jsxs("small",{className:"text-muted",children:["Character ID: ",u.id]})]}),u.scriptRank&&i.jsx("div",{className:"text-end",children:i.jsxs("span",{className:"badge bg-primary",children:["Rank ",u.scriptRank]})})]}),checked:g,onChange:S=>{S.target.checked&&l(u.id)},style:{color:"#e0e0e0"}})},u.id)})}),i.jsx("div",{className:"mt-3 p-2 rounded",style:{backgroundColor:"#1a1a1a",border:"1px solid #444"},children:i.jsxs("small",{className:"text-muted",children:[i.jsx("i",{className:"fas fa-info-circle"})," This selection will be used to auto-fill employee name fields in forms. You can change this selection at any time."]})})]}),i.jsxs(_t.Footer,{style:{backgroundColor:"#1a1a1a",borderTop:"1px solid #444"},children:[i.jsx(de,{variant:"secondary",onClick:e,children:"Cancel"}),i.jsxs(de,{variant:"primary",onClick:d,disabled:!a,children:[i.jsx("i",{className:"fas fa-check"})," Select Character"]})]})]})},Zf=t=>{switch(t){case 1:return["coronerRank","placeOfDeath","department","dateTime","coronerEmployee","coronerBadge","decedentName","decedentOOC","pronouncedTimeOfDeath","synopsis","probableCauseOfDeath","mannerOfDeath","typeOfDeath","scenePhotos","additionalImages","requestingOfficer","time"];case 2:return["requestingOfficer","department","coronerEmployee","coronerRank","coronerDiscord","coronerPHNumber","deathReport","additionalReports"];case 3:return["patientName","patientAddress","patientRace","patientGender","patientPH","patientDiscord","patientEmergencyContact","patientEmergencyContactNumber","patientEmergencyContactRelation","patientEmergencyContactDiscord","patientTitle","patientAllergies","patientCurrentMedicine","patientChronicDiseases","patientNotes","date","patientID","patientTherapy","patientTriggers","patientSupport","patientHarm","patientFam","patientGenetic","patientMental","patientFamSocial","patientReligion","attorneyName","attorneyRelation","attorneyPH","patientDateOfBirth","patientSmoker","patientAlcohol","patientDrugs","patientExercise","patientDiet","patientSleep","patientSexLife","patientJobRisks","patientHazards","patientOther","dnrOther","decedentOOC","maritalStatus","numberChildren","financialStatus","dnr","dnrOrder","attorney"];case 4:return["coronerEmployee","coronerRank","coronerBadge","decedentName","decedentOOC","autopsyDate","autopsyTime","placeOfDeath","causeOfDeath","deathType","autopsyDeathCauses","externalExamination","internalExamination","evidenceRecovered","autopsyAnatomicSummaryItems","autopsyAlbumUrl","autopsyPhotosUnavailable","additionalNotes","synopsis","RadiologyResult","autopsyDiagramImgurUrl","autopsyDiagramMarkers"];case 5:return["phmcEmployee","lastName","extraStaff","patientID","patientSummaryConsultation","patientAddress","rank","date","patientSummary","lastName","surgeryProcedures","patientConsentOption","patientComplicationOptions","procedureGoodOptions"];case 6:return["phmcEmployee","lastName","patientName","patientID","date","lastName","patientHeight","patientWeight","phmcRank","careerRisks","patientAllergies","patientMedicine","patientcareerNo","patientSummary","patientCareer","patientImpairments","BodyMassIndex","temperature","heartRate","breathing","bloodPressure","patientJob","patientJobRisks","patientOther","predisposition"];case 7:return["phmcEmployee","lastName","patientName","patientID","date","lastName","patientHeight","patientWeight","phmcRank","careerRisks","patientAllergies","patientMedicine","patientcareerNo","patientSummary","patientCareer","patientImpairments","BodyMassIndex","temperature","heartRate","breathing","bloodPressure","patientJob","patientJobRisks","patientOther","predisposition"];case 9:return["phmcEmployee","lastName","patientName","patientMedicalRecord","patientJob","patientPartnerPH","patientDateofBirth","patientPartnerName","patientJobTasks","patientLivingHabits","patientPreHealth","patientBaggageofParents","patientTemperature","patientBP","patientWeight","patientSummaryConsultation","patientBPM","patientResperation","patientOxi","patientDateofPregnancy","patientFetalMeasurements","patientWellWomanExam","patientPapResults","patientSTI","patientSTIResults","patientHeight","patientBloodAnalysis","patientBloodAnalysisResults","patientUrine","patientUrineResults","date","patientPap","patientPartnerDiscord","phmcSignature","patientAdditionalPregnancy","patientPregProblems","oneFetus","twoFetuses","threeFetuses","fourFetuses"];case 10:return["phmcEmployee","lastName","patientName","patientMedicalRecord","patientContractions","patientBleeding","patientDateofBirth","patientDiscomfort","patientFatter","patientBabyGender","patientKnowBabyGender","patientTemperature","patientBP","patientWeight","patientSummaryConsultation","patientBPM","patientResperation","patientOxi","patientDateofPregnancy","patientFetalMeasurements","patientBloodAnalysis","patientBloodAnalysisResults","patientUrine","patientUrineResults","date","patientUltraSummary","phmcSignature"];case 11:return["decedents","coronerRank","placeOfDeath","department","dateTime","coronerEmployee","coronerBadge","synopsis","requestingOfficer","decedentName","decedentOOC"];case 12:return["phmcEmployee","lastName","patientName","patientMedicalRecord","patientJob","patientPartnerPH","patientDateofBirth","patientPartnerName","patientJobTasks","patientLivingHabits","patientBaggageofParents","patientTemperature","patientBP","patientWeight","patientSummaryConsultation","patientBPM","patientResperation","patientOxi","patientNotes","patientWellWomanExam","patientPapResults","patientSTI","patientSTIResults","patientHeight","patientBloodAnalysis","patientBloodAnalysisResults","patientUrine","patientUrineResults","date","patientPap","patientPartnerDiscord","phmcSignature","patientAdditionalPregnancy","patientPregProblems"];case 13:return["phmcEmployee","lastName","patientName","patientMedicalRecord","patientBleeding","patientDateofBirth","patientDiscomfort","patientFatter","patientTemperature","patientBP","patientWeight","patientSummaryConsultation","patientBPM","patientResperation","patientOxi","patientBloodAnalysis","patientBloodAnalysisResults","patientUrine","patientUrineResults","date","patientUltraSummary","phmcSignature"];case 14:return["phmcEmployee","lastName","patientName","lastName","patientID","date","patientChiefComplaint","rank","patientNotes","patientDiagnosis","patientMedicine","patientProcedure"];case 16:return["phmcEmployee","lastName","patientName","lastName","patientID","rank","date","patientChiefComplaint","patientNotes","patientDiagnosis","patientMedicine","patientProcedure"];case 18:return["coronerRank","coronerEmployee","placeOfDeath","department","dateTime","decedentName","synopsis","scenePhotos"];case 19:return["lastName","phmcRank","patientID","date","patientDiagnosis","patientSecondaryDiagnosis","patientMedicine","patientProcedure","patientChiefComplaint","painLevel","temperature","heartRate","breathing","bloodPressure","findings","lungs","pupils","wounds","ecg","sono","lab","admission"];case 20:return["lastName","phmcRank","patientID","date","patientDiagnosis","patientSecondaryDiagnosis","patientMedicine","patientProcedure","patientChiefComplaint","temperature","heartRate","breathing","bloodPressure","findings","lungs","pupils","wounds","ecg","sono","lab","admission","assignedDepartment"];case 21:return["lastName","phmcRank","patientID","date","patientDiagnosis","patientSecondaryDiagnosis","patientMedicine","patientProcedure","patientChiefComplaint","temperature","heartRate","breathing","bloodPressure","findings","lungs","pupils","wounds","ecg","sono","lab","admission","paletoClinicDepartment","patientNotes"];case 22:return["phmcEmployee","lastName","date","patientID","departmentLarge"];case 23:return["phmcEmployee","lastName","date","patientID","departmentLarge"];case 24:return["patientFirstName","patientMiddleName","patientLastName","patientPH","patientDateOfBirth","patientAddress","patientZIP","patientEmail","patientMedInfoReleaseOther","phmcEmployee","lastName","MedicalRecordsReleaseOther","patientMedInfoFormatOther","StupidDateFrom","StupidDateTo","SubmitDate","MedicalRecordsRelease","CarePurposeMedicalInformationRelease","PurposeMedicalInformationReleaseFormat","payNow","paymentProofPhotos"];case 25:return["patientName","patientAddress","patientRace","patientGender","patientPH","patientDiscord","patientEmergencyContact","patientEmergencyContactNumber","patientEmergencyContactRelation","patientEmergencyContactDiscord","patientTitle","patientAllergies","patientCurrentMedicine","patientChronicDiseases","patientNotes","date","patientID","patientBloodType"];case 26:return["patientName","patientAddress","patientRace","patientGender","patientPH","patientDiscord","patientEmergencyContact","patientEmergencyContactNumber","patientEmergencyContactRelation","patientEmergencyContactDiscord","patientTitle","patientAllergies","patientCurrentMedicine","patientChronicDiseases","patientNotes","date","patientID","patientBloodType"];case 27:return["scenePhotos","decedentName","patientNotes","synopsis","phmcEmployee","lastName","decedentOOC","patientCareer"];case 28:return["patientID","date","phmcRank","lastName","patientChiefComplaint","patientTriggers","patientStress","patientTreatment","patientFamily","patientJobRisks","patientMedicalRecord","patientAllergies","patientChronicDiseases","patientVisitReason","patientSymptoms","patientCondition","patientDrugs","patientDrugsUsage","patientMental","patientJob","patientFam","patientLegal","patientRelationship","patientFindings","patientTreatmentPlan","patientSafety","patientFollowUp","patientTreatmentMedicine","patientDiagnosis","patientTherapy","patientRiskAssessment","patientTherapyMedicine","Speech","Behavior","Appearance","Mood","Affect","Risk","ThoughtProcess","ThoughtContent","Insight","Cognition","admission","followup"];case 29:return["patientID","date","phmcRank","lastName","patientChiefComplaint","patientTriggers","patientStress","patientTreatment","patientFamily","patientJobRisks","patientMedicalRecord","patientAllergies","patientChronicDiseases","patientVisitReason","patientSymptoms","patientCondition","patientDrugs","patientDrugsUsage","patientMental","patientJob","patientFam","patientLegal","patientRelationship","patientFindings","patientTreatmentPlan","patientSafety","patientFollowUp","patientTreatmentMedicine","patientDiagnosis","patientTherapy","patientRiskAssessment","patientTherapyMedicine","Speech","Behavior","Appearance","Mood","Affect","Risk","ThoughtProcess","ThoughtContent","Insight","Cognition","admission","followup"];default:return[]}},Th="/phmc-code-archive/assets/christmas-CGO1ZSet.png",Rh="/phmc-code-archive/assets/easteregg-Coj4K1bV.png",kh="/phmc-code-archive/assets/easter-BgPjTMVs.png",Fh="/phmc-code-archive/assets/halloween-rip-BxLpo6Sx.png",Ph="/phmc-code-archive/assets/Generic-CSL5_TGf.png",eg="/phmc-code-archive/assets/tombstone-B7abGloc.png",ac=document.createElement("img");ac.src=eg;ac.width=32;ac.height=32;const rA=()=>i.jsx(Uh,{style:{position:"fixed",width:"100vw",height:"100vh",top:0,left:0,zIndex:25},snowflakeCount:50,images:[ac],radius:[10,30]}),$h={deathReport:{Christmas:Th,AprilFools:Rh,Easter:kh,Halloween:Fh,Default:Ph},civilianPaperwork:{Christmas:Th,AprilFools:Rh,Easter:kh,Halloween:Fh,Default:Ph}};function sA(){const t=new Date,e=t.getMonth(),n=t.getDate();return e===9?"Halloween":e===3&&n>=1&&n<=2?"AprilFools":e===3&&n>=3&&n<=30?"Easter":e===11&&n>=1||e===0&&n<=1?"Christmas":"Default"}function Dh({imageType:t,season:e}){const n=e||sA(),r=$h[t]?.[n]||$h[t]?.Default;let s="",o=null;return n==="AprilFools"?s="april-fools":n==="Easter"?s="easter-bounce":n==="Halloween"?o=i.jsx(rA,{}):n==="Christmas"&&(o=i.jsx(Uh,{snowflakeCount:75})),{imageSource:r,className:s,season:n,effect:o}}const iA=({bbCodeVersion:t,openSwitchableModal:e,formGroups:n})=>{const{coronerFormsSubGroup:r,physicalEvalFormsSubGroup:s,psychEvalFormsSubGroup:o,generalConsultFormsSubGroup:a,commentaryNoteFormsSubGroup:l,mentalHealthFormsSubGroup:d,civilianFormsSubGroup:u,phmcInternalEmails:p}=n,g=[{versions:[1,2,4,8,11,37],text:"Coroner Forms",icon:"fa fa-laptop",modalArgs:["Coroner Forms",r]},{versions:[6,7],text:"Switch Physical Evaluation Forms",icon:"fas fa-exchange-alt",modalArgs:["Select Physical Evaluation Form",s]},{versions:[28,29],text:"Switch Psychological Evaluation Form",icon:"fas fa-exchange-alt",modalArgs:["Select Psychological Evaluation Form",o]},{versions:[20,21],text:"Switch General Consultation Forms",icon:"fas fa-exchange-alt",modalArgs:["Select General Consultation Form",a]},{versions:[22,23],text:"Switch Commentary Note Form",icon:"fas fa-exchange-alt",modalArgs:["Select Commentary Note Form",l]},{versions:[14,16],text:"Switch Mental Health Form",icon:"fas fa-exchange-alt",modalArgs:["Select Mental Health Form",d]},{versions:[3,24,25,26],text:"Change Civilian Hospital Forms",icon:"fas fa-exchange-alt",modalArgs:["Select Civilian Forms",u]},{versions:[27,35],text:"Change Email Forms",icon:"fas fa-exchange-alt",modalArgs:["Select Email Form",p]}].find(S=>S.versions.includes(t));return g?i.jsxs(de,{className:"changelog-button",variant:"secondary",onClick:()=>e(...g.modalArgs),children:[i.jsx("i",{className:g.icon}),i.jsxs("span",{children:[" ",g.text]})]}):null},Li=t=>t?String(t).replace(/-/g," ").replace(/\s+/g," ").trim():"",oA="https://phmc-tools.gta.world/",aA="https://gtaw-forms.github.io/forms/",Xi=t=>{if(!t)return"";let e=t.trim().replace(/[.#$[\\/ \]]+/g,"_");return e=e.replace(/_{2,}/g,"_"),e=e.replace(/^_+|_+$/g,""),e},tg=()=>{const t=window.location.href,e=window.location.hostname;return t.startsWith(aA)?"Alternative Form Generator":t.startsWith(oA)?"Form Generator":e==="localhost"||e==="127.0.0.1"||e.startsWith("192.168.")||e.startsWith("10.")||e.startsWith("172.")&&parseInt(e.split(".")[1],10)>=16&&parseInt(e.split(".")[1],10)<=31?"Dev Staging":"Unknown Source"},ng=async(t,e)=>{const r=fe(Ee,"webhook_logs"),s=xa(r);await At(s,{type:t,payload:e,timestamp:Date.now()})},rg=async(t,e,n)=>{if(!navigator.clipboard)return e("Clipboard API not available in this browser.","error"),sn("Clipboard API not available."),!1;if(!window.isSecureContext)return e("Clipboard access is only available on secure sites (HTTPS).","error"),sn("Attempted to use clipboard in a non-secure context."),!1;try{return await navigator.clipboard.writeText(t),e(n,"clipboard"),!0}catch(r){console.error("Failed to copy text: ",r),Ze(r,{extra:{context:"copyToClipboard helper"}});let s="Failed to copy text automatically.";return r.name==="NotAllowedError"?s="Clipboard permission was denied. Please keep the webpage in focus and try again.":r.message.includes("Document is not focused")?s="Could not copy. Please click on the page and try the copy button again.":s+=" Please try again or copy manually.",e(s,"error"),!1}},cc=async(t,e,n={},r="")=>{const{title:s,description:o,color:a,fields:l=[],footerText:d="Forms Tool"}=e,u=tg();l.push({name:"Source",value:u,inline:!0});const p={title:s||"Notification",description:o||"",color:a||7506394,fields:l,timestamp:new Date().toISOString(),footer:{text:`${d} | gh-pages ${n.sha||"N/A"}`}};try{const f=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...r&&{content:r},embeds:[p]})});if(!f.ok){const g=await f.text();return console.error(`Failed to send Discord webhook. Status: ${f.status} ${f.statusText}`,g),sn(`Discord webhook send failed: ${f.status}`,{level:"error",extra:{statusText:f.statusText,responseBody:g,webhookTitle:s}}),!1}return await ng(s,{embeds:[p]}),!0}catch(f){return console.error("Error sending Discord webhook:",f),Ze(f,{extra:{context:"sendDiscordWebhookInternal Fetch Error",webhookTitle:s}}),!1}},cA=async({scorer:t,bingoType:e,phrase:n,lineName:r,commitInfo:s,marked:o})=>{const a="https://discord.com/api/webhooks/1430314470902599680/o_JoPsW9jNgKICL9StKxgORICn3cOzu41FheUsJFsPkRAX-Xt9LKTulXhWCaQsU5Cfxw";let l={};o?l={title:`📍 Marker Placed by ${t||"A player"}`,description:"A marker was placed on the bingo board.",color:3447003,fields:[{name:"Game",value:e||"Unknown",inline:!0},{name:"Phrase",value:n||"Unknown",inline:!0}],footerText:"PHMC Bingo - Marker Placed"}:l={title:"🎉 BINGO! 🎉",description:`**${t||"A player"}** just scored a BINGO!`,color:16766720,fields:[{name:"Game",value:e||"Unknown",inline:!0},{name:"Line",value:r||"Unknown",inline:!0}],footerText:"PHMC Bingo - BINGO!"},await cc(a,l,s)},lA=async(t,e,n,r,s,o,a,l,d,u,p,f,g)=>{try{const S="https://discord.com/api/webhooks/1430314470902599680/o_JoPsW9jNgKICL9StKxgORICn3cOzu41FheUsJFsPkRAX-Xt9LKTulXhWCaQsU5Cfxw";let _={},I=!1,F="",P="";if(t==="addEmployee"){const k=e==="coroner";P=`⬆️ Missing ${k?"Coroner":"Hospital Staff"} Addition Request`;let D=[];k?D=["coronerName","coronerDiscord","coronerRank","coronerBadge"]:D=["coronerName","employeeLastName","coronerRank"];const R=D.filter(O=>!d[O]?.trim());if(R.length>0){p(`Please fill in all required fields for adding staff. Missing: ${R.join(", ")}`,"exclamation-circle");return}_={title:P,color:k?9109504:139,fields:[{name:"Requested By",value:k?f:g,inline:!1},{name:"Name to Add",value:d.coronerName||"N/A",inline:!0},{name:k?"Discord Tag":"Department/Discord",value:d.coronerDiscord||"N/A",inline:!0},{name:"Rank/Position",value:d.coronerRank||"N/A",inline:!0}],timestamp:new Date().toISOString(),footer:{text:`Submitted via PHMC Tools Tool - v${u.sha||"N/A"}`}};let $="";k?(_.fields.push({name:"Badge",value:d.coronerBadge,inline:!0}),$=`{ name: '${d.coronerName||"MISSING_NAME"}', badge: '${d.coronerBadge||"MISSING_BADGE"}', rank: '${d.coronerRank||"MISSING_RANK"}', discord: '${d.coronerDiscord||"MISSING_DISCORD"}', category: '${d.coronerRank||"MISSING_CATEGORY"}' },`):$=`{ name: '${d.coronerName||"MISSING_NAME"}', lastName: '${d.employeeLastName||"MISSING_LAST_NAME"}', rank: '${d.coronerRank||"MISSING_RANK"}', category: '${d.coronerRank||"MISSING_CATEGORY"}' },`,_.fields.push({name:"Google Firebase Debug String: ",value:`
${$}
`,inline:!1}),I=!0}else if(t==="removeStaff"){if(P="⬆️ Staff Removal Request",!a||a.length===0){p("Please select at least one staff member to remove.","warning");return}if(!l?.trim()){p('Please enter your name in the "Authorized By" field.',"warning");return}const k=a.map(R=>{let $=s.find(O=>O.name===R);return $||($=o.find(O=>O.name===R)),$||{name:R}}),D=`
${JSON.stringify(k,null,2)}
`;_={title:P,color:16753920,fields:[{name:"Authorized By",value:l,inline:!1},{name:`Staff to Remove (${a.length})`,value:a.join(`
`)||"None selected",inline:!1},{name:"Firebase Debug (Removed Staff)",value:D,inline:!1}],timestamp:new Date().toISOString(),footer:{text:`Submitted via PHMC Tools Tool - v${u.sha||"N/A"}`}},I=!0,F="Processed! Any abuse of the forms will be reported to PHMC Leadership"}else if(t==="editUser"){if(P="⬆️ Employee Information Update Request",!n){p("Please select an employee to update.","warning");return}let k=[],D="",R;if(e==="hospitalStaff"?(R=o.find($=>$.name===n),console.log("selectedEmployeeName:",n),console.log("originalData:",R),d.coronerName!==R?.name&&k.push({name:"First Name",value:`
 -> 
`,inline:!1}),d.employeeLastName!==R?.lastName&&k.push({name:"Last Name",value:`
 -> 
`,inline:!1}),d.coronerRank!==R?.rank&&k.push({name:"Rank",value:`
 -> 
`,inline:!1}),D=`
{ name: '${d.coronerName||"MISSING_NAME"}', lastName: '${d.employeeLastName||"MISSING_LAST_NAME"}', rank: '${d.coronerRank||"MISSING_RANK"}' }
`):(R=s.find($=>$.name===n),d.coronerName!==R?.name&&k.push({name:"Name",value:`
 -> 
`,inline:!1}),d.coronerDiscord!==R?.discord&&k.push({name:"Discord",value:`
 -> 
`,inline:!1}),d.coronerRank!==R?.rank&&k.push({name:"Rank",value:`
 -> 
`,inline:!1}),d.coronerBadge!==R?.badge&&k.push({name:"Badge",value:`
 -> 
`,inline:!1}),d.coronerPHNumber!==R?.phNumber&&k.push({name:"PH Number",value:`
 -> 
`,inline:!1}),D=`
{ name: '${d.coronerName||"MISSING_NAME"}', discord: '${d.coronerDiscord||"MISSING_DISCORD"}', rank: '${d.coronerRank||"MISSING_RANK"}', badge: '${d.coronerBadge||"MISSING_BADGE"}', phNumber: '${d.coronerPHNumber||"MISSING_PHNUMBER"}' }
`),k.length===0){p("No changes detected.","info"),I=!1;return}_={title:P,color:31743,fields:[{name:"Employee Name",value:n,inline:!0},{name:"Employee Type",value:e,inline:!0},...k,{name:"Firebase Debug String",value:D,inline:!1}],timestamp:new Date().toISOString(),footer:{text:`Submitted via PHMC Tools Tool - v${u.sha||"N/A"}`}},I=!0,F=`Successfully updated information for ${n}.`}if(I){const D={content:`New Employee Management Request: ${P}`,embeds:[_]};await cc(S,_,u,`Employee Management: ${P}`)&&p(F,"check-circle")}}catch(S){console.error("Error in sendMissingEmployeeNotification:",S),Ze(S,{extra:{context:"sendMissingEmployeeNotification"}}),p("An unexpected error occurred. Please try again.","error")}},dA=async({requester:t,phrase:e,bingoType:n,commitInfo:r})=>{const s="https://discord.com/api/webhooks/1430314470902599680/o_JoPsW9jNgKICL9StKxgORICn3cOzu41FheUsJFsPkRAX-Xt9LKTulXhWCaQsU5Cfxw",o=e.split(`
`);let a=[];o.forEach((d,u)=>{a.push({name:`Phrase Line ${u+1}`,value:`
`,inline:!1})}),a.push({name:"Requested For",value:n||"Unknown Game",inline:!0}),a.push({name:"Requested By",value:t||"Anonymous",inline:!0}),await cc(s,{title:"📝 New Bingo Phrase Request",description:"A new phrase has been requested for review.",color:7506394,fields:a,footerText:"PHMC Bingo"},r)},uA=async({webhookUrl:t,formData:e,commitInfo:n,actionMessage:r,selectOptions:s,formDefinition:o})=>{const{applicantTitleAndFullName:a,recruitmentPosition:l,applicantContactDetails:d,oocUcpName:u,oocDiscord:p}=e;let f=null;if(o)switch(o.titleKey){case"phmcGeneralApplication":f=s.physicianRecruitmentDetails;break;case"phmcPsychApplication":f=s.psychPositionDetailsData;break;case"phmcAdminApplication":f=s.adminPositionDetailsData;break;case"phmcNursingApplication":f=s.nursePositionDetailsData;break;case"phmcCoronerRecruitmentApplication":f=s.coronerPositionDetailsData;break;case"phmcEMSApplication":f=s.emsPositionDetailsData;break;default:console.warn(`No specific positionDetailsSource mapping for PHMC Recruitment form: ${o.titleKey} in webhook.`)}const g=f?.[l]?.displayName||l||"N/A",S=o?.name||"PHMC Recruitment Application",_=[{name:"Applicant Name",value:a||"N/A",inline:!0},{name:"Position Applied For",value:g,inline:!0},{name:"Contact Details",value:d||"N/A",inline:!1},{name:"OOC UCP Name",value:u||"N/A",inline:!0},{name:"Discord Name",value:p||"N/A",inline:!0},{name:"Timestamp",value:new Date().toLocaleString(),inline:!1},{name:"Action",value:r||"Application Processed",inline:!1}],I={title:`${S} Notification`,color:31743,fields:_,footerText:"PHMC Recruitment Forms"};await cc(t,I,n)},hA=async({formData:t,getBBCodeContent:e,showNotification:n,commitInfo:r,selectOptions:s,formDefinition:o})=>{const a=e(),l=o?.name||"PHMC Recruitment Application";if(!a){n(`Failed to generate ${l} BBCode. Copying skipped.`,"error"),sn(`getBBCodeContent returned null/undefined for ${l}`,"error");return}await rg(a,n,`${l} BBCode copied to clipboard!`)&&await uA({webhookUrl:"https://discord.com/api/webhooks/1430314470902599680/o_JoPsW9jNgKICL9StKxgORICn3cOzu41FheUsJFsPkRAX-Xt9LKTulXhWCaQsU5Cfxw",formData:t,commitInfo:r,actionMessage:`${l} BBCode Copied`,selectOptions:s,formDefinition:o})},mA=async({webhookUrl:t,formData:e,versionName:n,bbCodeVersion:r,selectedAgencyGroup:s,statusTitle:o,statusColor:a,actionMessage:l,commitInfo:d,firebaseSavedCount:u,errorMessage:p,userSavedCount:f,savedReports:g,coronerListData:S=[],phmcListData:_=[]})=>{const{phmcEmployee:I,coronerEmployee:F,coronerRank:P,patientFirstName:k,patientLastName:D,patientName:R,decedentName:$,patientID:O,decedentOOC:E,requestingOfficer:y,registrantFullName:w,ceoFullName:N,autopsyDiagramImgurUrl:v}=e;let A="Unknown User";const C=[1,2,4,8,11,18],M=[5,6,7,9,10,12,13,14,16,19,20,21,22,23,27,28,29,35],B=[3,24,25,26],j=C.includes(r),V=M.includes(r);if(B.includes(r))R?A=R:k||D?A=`${k||""} ${D||""}`.trim():A="Civilian";else if(V)if(I){const he=_.find(ge=>ge.name===I);A=`${Li(he?.category||"Hospital Staff")} ${I}`}else R?A=R:(k||D)&&(A=`${k||""} ${D||""}`.trim());else if(j){if(F){const he=S.find(ge=>ge.name===F);A=`${Li(he?.category||P||"Coroner")} ${F}`}}else if(F){const he=S.find(ge=>ge.name===F);A=`${Li(he?.category||P||"Coroner")} ${F}`}else if(I){const he=_.find(ge=>ge.name===I);A=`${Li(he?.category||"Hospital Staff")} ${I}`}else k||D?A=`${k||""} ${D||""}`.trim():R&&(A=R);const Y=R||$||O||w||N||(s==="SAAA"?e.aircraftType||e.companyName||"SAAA Record":"N/A"),ue=[{name:"User",value:A,inline:!0},{name:"Form Type",value:n,inline:!0},{name:"Primary Identifier",value:Y,inline:!0},...s!=="SAAA"||e.decedentOOC?[{name:"OOC Name",value:E||R||"N/A",inline:!0}]:[],...s!=="SAAA"||e.requestingOfficer?[{name:"Requesting Officer",value:y||"N/A",inline:!0}]:[],{name:"Timestamp",value:new Date().toLocaleString(),inline:!1},{name:"Action",value:l,inline:!1}],te=tg();ue.push({name:"Source",value:te,inline:!0});let se=f;if(Array.isArray(g)&&e){const he=e.coronerEmployee||e.phmcEmployee||e.patientName||e.decedentName,be=Xi(he);se=g.filter(ge=>Xi(ge.authorName)===be).length,console.log("[Discord Webhook] Calculating user saved reports:",{currentAuthor:he,sanitizedAuthorId:be,savedReports:g.map(ge=>({authorName:ge.authorName,sanitized:Xi(ge.authorName)})),actualUserSavedCount:se})}typeof se=="number"&&ue.push({name:"Saved Reports (User)",value:se.toString(),inline:!0}),u!==void 0&&ue.push({name:"Total Saved Reports (Firebase)",value:u.toString(),inline:!0}),p&&ue.push({name:"Error Details",value:p,inline:!1});const Z=(he=>he.filter(be=>!be.name||!be.value?(console.warn("Invalid field detected:",be),!1):typeof be.value!="string"||be.value.trim()===""?(console.warn("Field value must be a non-empty string:",be),!1):!0))(ue),re={title:o,description:l,color:a,fields:Z,timestamp:new Date().toISOString(),footer:{text:`Forms Tool | gh-pages ${d.sha||"N/A"}`}};if(n==="Autopsy Report"&&v){const he=Array.isArray(v)?v[0]:v;he&&typeof he=="string"&&(re.image={url:he})}console.log("[Discord Webhook] Validated payload:",{webhookUrl:t,embed:re,fields:Z});try{const he=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({embeds:[re]})});if(!he.ok){const be=await he.text();console.error(`Failed to send Discord webhook. Status: ${he.status} ${he.statusText}`,be),sn(`Discord webhook send failed: ${he.status}`,{level:"error",extra:{statusText:he.statusText,responseBody:be,webhookTitle:o}})}}catch(he){console.error("Error sending Discord webhook:",he),Ze(he,{extra:{context:"sendFormInteractionWebhookInternal Fetch Error",webhookTitle:o}})}},pA=(t,e)=>{const n=Zf(e),r={};return n.forEach(s=>{t.hasOwnProperty(s)&&(r[s]=t[s])}),r},fA=async({formData:t,bbCodeVersion:e,selectedAgencyGroup:n,getBBCodeContent:r,getFormDefinition:s,saveReport:o,showNotification:a,removeNotification:l,handleAgencySelect:d,setLastWebhookIdentifier:u,lastWebhookIdentifier:p,commitInfo:f,database:g,getCurrentReportAuthor:S,isGtaAuthenticated:_=!1,gtaWorldUser:I=null,coronerListData:F=[],phmcListData:P=[]})=>{const k=r(),D=s(e),R=D?D.name:"Unknown Form";if(!k){a(`Failed to generate BBCode for ${R}. Please check form data.`,"error"),sn(`getBBCodeContent returned null/undefined for bbCodeVersion: ${e}`,"error");return}let $={success:!1},O=!1;if([3,24,25,26].includes(e)){O=!0;const y=r(),w=`[CIVILIAN-REPORT] - ${t.patientName||""} ${t.patientFirstName||""} ${t.patientLastName||""} - ${new Date().toISOString()}`,N=Xi(w),v={bbCodeVersion:e,data:pA(t,e),bbCode:y,timestamp:Date.now(),originalKey:w,authorName:"CIVILIAN"};_&&I&&(v.gtawUsername=I.username,v.gtawCharacterId=I.id,v.gtawCharacterName=I.faction?I.faction.firstname&&I.faction.lastname?`${I.faction.firstname} ${I.faction.lastname}`:I.faction.characterName||I.username:I.username,v.gtawSyncTimestamp=new Date().toISOString(),v.gtawSyncVersion="1.1",console.log("📄 [Civilian Report Save] Automatically added GTAW data to civilian report:",{username:v.gtawUsername,characterId:v.gtawCharacterId,characterName:v.gtawCharacterName,reportType:"CIVILIAN"}));try{const A=fe(g,`savedReports/CIVILIAN/${N}`);await At(A,v);const C={reportKey:N,originalKey:w,bbCodeVersion:e,hasGtawData:_&&!!I};_&&I&&(C.gtawUsername=I.username,C.gtawCharacterId=I.id,C.gtawCharacterName=v.gtawCharacterName),await ng("report_saved_civilian",C),$={success:!0}}catch(A){console.error("Error saving Civilian report to Firebase:",A),Ze(A,{extra:{context:"Firebase set report"}}),$={success:!1,error:"Failed to save Civilian report to Firebase."}}}else $=await o();if(!$.success&&!O){const y=$.error||"Report failed to save. Copying and webhook notification will be skipped.";a(y,"error");return}if(!await rg(k,a,`${R} copied to clipboard!`)){a("BBCode could not be copied. Webhook notification will be skipped.","warning");return}try{let y="https://discord.com/api/webhooks/1430314470902599680/o_JoPsW9jNgKICL9StKxgORICn3cOzu41FheUsJFsPkRAX-Xt9LKTulXhWCaQsU5Cfxw";if(y){let w;if(e===11){const{decedents:C}=t;w=C.map(M=>`${M.decedentName||""}|${M.decedentOOC||""}`).join(",")}else{const{decedentName:C,decedentOOC:M}=t;w=`${C||""}|${M||""}`}let N=0,v;try{const C=fe(g,"savedReports"),M=await ze(C);if(M.exists()){const B=M.val();N=Object.values(B).reduce((j,V)=>j+Object.keys(V).length,0)}}catch(C){console.error("Error fetching total saved reports count from Firebase:",C),Ze(C,{extra:{context:"Firebase Total Saved Reports Count"}})}try{let C;O?C="CIVILIAN":(C=S(t),C||(C="UNKNOWN")),C=Xi(C);let M=fe(g,`savedReports/${C}`),B=await ze(M);if(!B.exists()&&C.includes("_")){const j=C.replace(/_/g," ");M=fe(g,`savedReports/${j}`),B=await ze(M)}if(B.exists()){const j=B.val();v=Object.keys(j).length}else v=0}catch(C){console.error("Error fetching user saved reports count from Firebase:",C),Ze(C,{extra:{context:"Firebase User Saved Reports Count"}})}let A="BBCode Copied";if($.success&&(A="BBCode Copied & Report Saved to Firebase"),await mA({webhookUrl:y,formData:t,versionName:R,bbCodeVersion:e,selectedAgencyGroup:n,statusTitle:"Someone has used your generator!",statusColor:65280,actionMessage:A,commitInfo:f,firebaseSavedCount:N,userSavedCount:v,coronerListData:F,phmcListData:P}),u(w),e===1&&t.showRequestingOfficerInput===!0){const C=i.jsx("button",{onClick:M=>{M.stopPropagation(),typeof d=="function"?d(2):(console.error("handleFormCopyAndNotify: Cannot switch form, the component may have unmounted."),a("Action failed: The context was lost. Please navigate to the form manually.","error"))},style:{marginLeft:"10px",cursor:"pointer",padding:"0.25rem 0.5rem",fontSize:"0.875rem",border:"1px solid #0dcaf0",background:"#0dcaf0",color:"white",borderRadius:"0.25rem"},children:"Switch to Coroner Email Form"});a(i.jsxs(i.Fragment,{children:["A Coroner Email was requested for this report. ",C]}),"info-circle",15e3)}}}catch(y){console.error("Error during webhook notification in service: ",y),Ze(y,{extra:{context:"handleFormCopyAndNotify Webhook Error",errorName:y.name,errorMessage:y.message}}),a("Report processed, but failed to send Discord notification.","warning")}},sg=b.createContext(),gA=()=>b.useContext(sg),bA=({children:t})=>{const[e,n]=b.useState(!1),[r,s]=b.useState(!1),[o,a]=b.useState(!1),[l,d]=b.useState(null),[u,p]=b.useState(!1),[f,g]=b.useState(!1),[S,_]=b.useState(!1),[I,F]=b.useState(!1),[P,k]=b.useState(!1),[D,R]=b.useState(!1),[$,O]=b.useState(!1),[E,y]=b.useState(!1),[w,N]=b.useState(""),[v,A]=b.useState([]),[C,M]=b.useState(!1),[B,j]=b.useState(!1),V={showEmsBingoModal:e,setShowEmsBingoModal:n,showGtaCallback:r,setShowGtaCallback:s,showEasterEggModal:o,setShowEasterEggModal:a,easterEggType:l,setEasterEggType:d,showAgencySelector:u,setShowAgencySelector:p,hideAgencySelector:f,setHideAgencySelector:g,showEmployeeModal:S,setShowEmployeeModal:_,showEmsAmaModal:I,setShowEmsAmaModal:F,showBusinessCard:P,setShowBusinessCard:k,showAgencyGroupSelectorModal:D,setShowAgencyGroupSelectorModal:R,showCctvRequestModal:$,setShowCctvRequestModal:O,showPHMCModal:E,setShowPHMCModal:y,switchableModalTitle:w,setSwitchableModalTitle:N,switchableFormsList:v,setSwitchableFormsList:A,showFeatureRequestModal:C,setShowFeatureRequestModal:M,showPrivacyPolicyModal:B,setShowPrivacyPolicyModal:j};return i.jsx(sg.Provider,{value:V,children:t})},ig=b.createContext(),yA=()=>b.useContext(ig),vA=({children:t})=>{const[e,n]=b.useState(()=>localStorage.getItem("seasonalEffectsEnabled")!=="false"),s={seasonalEffectsEnabled:e,toggleSeasonalEffects:()=>{const o=!e;n(o),localStorage.setItem("seasonalEffectsEnabled",String(o))}};return i.jsx(ig.Provider,{value:s,children:t})},og=b.createContext(),_A="https://phmc-tools.gta.world/",CA="https://gtaw-forms.github.io/forms/",SA=()=>{const t=b.useContext(og);if(!t)throw new Error("useLockdown must be used within a LockdownProvider");return t},wA=({children:t})=>{const[e,n]=b.useState({enabled:!1,notification:"",dialog:"",affectedDeployments:[]}),[r,s]=b.useState(""),[o,a]=b.useState(!1);b.useEffect(()=>{const u=window.location.href;u.startsWith(_A)?s("phmc-tools"):u.startsWith(CA)?s("github-pages"):s("local")},[]),b.useEffect(()=>{const u=fe(Ee,"adminSettings/lockdownConfig"),p=qi(u,f=>{const g=f.val(),S={enabled:!1,notification:"",dialog:"",affectedDeployments:[]};g&&(S.enabled=!!g.enabled,S.notification=g.notification||"",S.dialog=g.dialog||"",S.affectedDeployments=Array.isArray(g.affectedDeployments)?g.affectedDeployments:[]),n(S);const _=S.enabled&&(S.affectedDeployments.includes("all")||S.affectedDeployments.includes(r));a(_)});return()=>p()},[r]);const l=()=>{a(!1)},d=!!e.enabled&&Array.isArray(e.affectedDeployments)&&(e.affectedDeployments.includes("all")||e.affectedDeployments.includes(r));return i.jsx(og.Provider,{value:{lockdownConfig:e,currentDeployment:r,showDialog:o,hideDialog:l,isLockdownActive:d},children:t})};function EA({notification:t,show:e}){return e?i.jsx(Et,{variant:"danger",className:"mb-0 text-center",style:{borderRadius:0,position:"sticky",top:0,zIndex:1030},children:t}):null}const NA=({isOpen:t,onClose:e,title:n,children:r,className:s="",showCloseButton:o=!0,closeOnOverlayClick:a=!0,modalSize:l="medium",zIndex:d=1050})=>{const u=b.useRef(null),p=b.useRef(null);if(b.useEffect(()=>{if(t){p.current=document.activeElement,document.body.style.overflow="hidden",u.current?.focus();const S=_=>{_.key==="Escape"&&e&&e()};return window.addEventListener("keydown",S),()=>{document.body.style.overflow="",window.removeEventListener("keydown",S),p.current?.focus()}}},[t,e]),!t)return null;const f=S=>{a&&S.target===S.currentTarget&&e&&e()},g=i.jsx("div",{className:"modal-overlay",onClick:f,style:{zIndex:d},role:"presentation",children:i.jsxs("div",{ref:u,className:`modal-container ${s} modal-size-${l}`,role:"dialog","aria-modal":"true","aria-labelledby":"modal-title",tabIndex:-1,children:[i.jsxs("div",{className:"modal-header",children:[i.jsx("h2",{id:"modal-title",className:"modal-title",children:n}),o&&i.jsx("button",{type:"button",className:"modal-close-button",onClick:e,"aria-label":"Close modal",children:"×"})]}),i.jsx("div",{className:"modal-content",children:r})]})});return ug.createPortal(g,document.body)};function xA({show:t,onHide:e,message:n}){return i.jsx(NA,{isOpen:t,onClose:e,title:"System Notice",showCloseButton:!1,closeOnOverlayClick:!1,className:"lockdown-dialog",modalSize:"small",children:i.jsxs("div",{className:"lockdown-content",children:[i.jsx("div",{className:"lockdown-message",children:n}),i.jsx("div",{className:"lockdown-footer",children:i.jsx("button",{className:"lockdown-button",onClick:e,children:"Acknowledge"})})]})})}const jc=new Set,AA=(t,e="unknown")=>{if(jc.has(e))return Promise.resolve();const n=()=>(jc.add(e),t().catch(r=>{console.warn(`Failed to preload ${e}:`,r),jc.delete(e)}));return"requestIdleCallback"in window?new Promise(r=>{window.requestIdleCallback(()=>{n().then(r)},{timeout:2e3})}):new Promise(r=>{setTimeout(()=>{n().then(r)},0)})},IA=async t=>{for(const{importFn:e,name:n}of t)await AA(e,n)},Vs="/phmc-code-archive/assets/phmc-CpbfyLq2.png",Lc="/phmc-code-archive/assets/corpse--7j0dJhB.png",TA=b.lazy(()=>Te(()=>import("./SavedReportsModal-DYUrP8rS.js"),__vite__mapDeps([32,1,2,5]))),RA=b.lazy(()=>Te(()=>import("./AgencyGroupSelectorModal-yMTRceUv.js"),__vite__mapDeps([33,1,2,5]))),kA=b.lazy(()=>Te(()=>import("./AgencySelector-DH7HcNSp.js"),__vite__mapDeps([34,1,2,5]))),FA=b.lazy(()=>Te(()=>import("./OnboardingModal-muyZHJXS.js"),__vite__mapDeps([35,1,2,5]))),PA=b.lazy(()=>Te(()=>import("./Footer-l6YCAUm-.js"),__vite__mapDeps([36,1,2,37]))),$A=b.lazy(()=>Te(()=>import("./HeaderInfo-DjHLAOcr.js"),__vite__mapDeps([38,1,2,5]))),DA=b.lazy(()=>Te(()=>import("./BusinessCardModal-DK4GJOIE.js"),__vite__mapDeps([39,1,2,5,40]))),OA=b.lazy(()=>Te(()=>import("./EmsAmaModal-BbYKrKH1.js"),__vite__mapDeps([41,1,2,5,42]))),MA=b.lazy(()=>Te(()=>import("./EasterEggModal-JHUKQqi1.js"),__vite__mapDeps([43,1,2]))),Oh=b.lazy(()=>Te(()=>import("./SwitchableFormsModal-BTq0PSbo.js"),__vite__mapDeps([44,1,2,5]))),jA=b.lazy(()=>Te(()=>import("./EmployeeModal-1q74J87s.js"),__vite__mapDeps([45,1,2,5]))),LA=b.lazy(()=>Te(()=>import("./RecruitmentStatusDisplay-5tM6x_43.js"),__vite__mapDeps([46,1,2]))),UA=b.lazy(()=>Te(()=>Promise.resolve().then(()=>wx),void 0)),BA=b.lazy(()=>Te(()=>import("./FeatureRequestModal-Dg-yyQux.js"),__vite__mapDeps([47,1,2,5,48]))),HA=b.lazy(()=>Te(()=>import("./FormImageLink-Do24PBOW.js"),__vite__mapDeps([49,1,2]))),GA=b.lazy(()=>Te(()=>import("./EmsBingoModal-LPI1WfEY.js"),__vite__mapDeps([50,1,2,5,4,51]))),WA=b.lazy(()=>Te(()=>import("./EmployeeDetailsModal-BHit1Zcx.js"),__vite__mapDeps([52,1,2,5])));function zA({formData:t,setFormData:e,lastWebhookIdentifier:n,setLastWebhookIdentifier:r,initialFormData:s,showNotification:o,removeNotification:a}){const l=Ua(),d=b.useCallback(T=>Li(T),[]),{showEmsBingoModal:u,setShowEmsBingoModal:p,showEasterEggModal:f,setShowEasterEggModal:g,easterEggType:S,setEasterEggType:_,showAgencySelector:I,setShowAgencySelector:F,hideAgencySelector:P,setHideAgencySelector:k,showEmployeeModal:D,setShowEmployeeModal:R,showEmsAmaModal:$,setShowEmsAmaModal:O,showBusinessCard:E,setShowBusinessCard:y,showAgencyGroupSelectorModal:w,setShowAgencyGroupSelectorModal:N,showCctvRequestModal:v,setShowCctvRequestModal:A,showPHMCModal:C,setShowPHMCModal:M,switchableModalTitle:B,setSwitchableModalTitle:j,switchableFormsList:V,setSwitchableFormsList:q,showFeatureRequestModal:Y,setShowFeatureRequestModal:ue}=gA(),{user:te,isAuthenticated:se,login:X,logout:Z,isLoading:re,isPhmcMember:he}=ur(),[be,ge]=b.useState(!1),[Re,Pe]=b.useState(!1),[Je,we]=b.useState(!1),[Ge,bt]=b.useState(!1),[Jt,zt]=b.useState(null),[L,ne]=b.useState(!1),[W,oe]=b.useState(null),[ae,Ne]=b.useState([]),{phmcListData:Se,coronerListData:ye,agencyDataStore:Ae,selectOptions:G,physicianRecruitmentDetails:Xe,psychRecruitmentDetails:Le,adminRecruitmentDetails:Pt,emsRecruitmentDetails:Me,nurseRecruitmentDetails:K,coronerRecruitmentDetails:Ue,isLoadingData:We,refreshSegments:He,phmcGroupedOptions:Ie,coronerGroupedOptions:De}=Mf(),st=()=>{o("Please wait, this may take a moment...","info-circle",1e4);const T=window.location.hash||"#/",J=T==="#/"||T==="#",le=T.startsWith("#/admin"),xe=T.startsWith("#/form"),lt=T.includes("/auth/")||T.includes("/callback");console.log("🧭 [GTAW Login] Redirect Path Analysis:",{currentPath:T,fullUrl:window.location.href,pathname:window.location.pathname,search:window.location.search,hash:window.location.hash,isOnHomepage:J,isOnAdminPage:le,isOnFormPage:xe,isOnAuthPage:lt,userAgent:navigator.userAgent.substring(0,100),timestamp:new Date().toISOString()});let qt=T;T.includes("/auth/")||T.includes("/callback"),qt="#/",X({returnPath:qt})};b.useEffect(()=>{if(se&&te&&te.username&&!be){let T=`Welcome back, ${te.username}!`;if(te.isFactionMember&&te.faction){const J=te.faction.firstname&&te.faction.lastname?`${te.faction.firstname} ${te.faction.lastname}`:te.faction.name||te.username,le=te.faction.rank;J&&le!==void 0?T=`Welcome back, ${J}! (Script Rank: ${le})`:J&&(T=`Welcome back, ${J}!`)}o(T,"check-circle",5e3),ge(!0)}!se&&be&&ge(!1)},[se,te,be,o]),b.useEffect(()=>{if(se&&te&&!Je){const T=te.faction?.rank||"";(T.includes("Nurse")||T.includes("Nursing"))&&(async()=>{try{const le=te.faction?.characterId||te.characterArray?.[0]?.id||te.id,xe=le?`char_${le}`:null;if(xe){const lt=fe(Ee,`Nursing_Records/${xe}`),qt=await ze(lt);if(qt.exists()){const cn=qt.val();cn.name&&cn.surname&&cn.discord&&cn.phoneNumber&&cn.family&&cn.closeFamily&&cn.address?o("Your Employee Record is complete. Would you like to update it?","info-circle",0,[{label:"Update Record",handler:()=>Pe(!0),variant:"outline-primary"}]):Pe(!0)}else Pe(!0)}else Pe(!0)}catch(le){console.error("Error checking nursing employee record:",le),Pe(!0)}finally{we(!0)}})()}},[se,te,Je,o]);const yt=T=>{const J=T.name||`${T.firstname||""} ${T.lastname||""}`.trim();oe(T),e(le=>({...le,phmcEmployee:J})),console.log("[Character Selection] User selected character:",{characterName:J,characterId:T.id,username:te?.username}),o(`Selected character: ${J}`,"check-circle",3e3)};b.useEffect(()=>{if(se&&he&&te&&(Se.length>0||ye.length>0)){const T=te.faction?.characterName||(te.faction?.firstname&&te.faction?.lastname?`${te.faction.firstname} ${te.faction.lastname}`:null);if(T&&!t.phmcEmployee&&!t.coronerEmployee){let J=Se.find(le=>le.name&&le.name.toLowerCase()===T.toLowerCase());if(J){e(le=>({...le,phmcEmployee:J.name,phmcEmployeeLastName:J.lastName||"",phmcRank:d(J.category||J.rank||"")})),console.log("[Auto-fill] Auto-populated PHMC employee field:",{characterName:T,matchedName:J.name,username:te.username,rank:te.faction?.scriptRank,category:J.category}),setTimeout(()=>{o(`Auto-filled PHMC employee: ${J.name}`,"check-circle",3e3)},1e3);return}if(J=ye.find(le=>le.name&&le.name.toLowerCase()===T.toLowerCase()),J){e(le=>({...le,coronerEmployee:J.name,coronerBadge:J.badge||"",coronerRank:d(J.rank||J.category||""),coronerDiscord:J.discord||"",coronerPHNumber:J.phNumber||"50056"})),console.log("[Auto-fill] Auto-populated Coroner employee field:",{characterName:T,matchedName:J.name,username:te.username,rank:te.faction?.scriptRank,coronerRank:J.rank}),setTimeout(()=>{o(`Auto-filled Coroner employee: ${J.name}`,"check-circle",3e3)},1e3);return}console.log("[Auto-fill] No employee match found for character:",{characterName:T,username:te.username,availablePhmcStaff:Se.length,availableCoronerStaff:ye.length}),setTimeout(()=>{o(`Character "${T}" not found in employee database. Please select manually.`,"info-circle",4e3)},1e3)}}},[se,he,te,Se,ye,t.phmcEmployee,t.coronerEmployee,e,o,d]),b.useEffect(()=>{const T=localStorage.getItem("onboardingComplete"),J=localStorage.getItem("userOnboardingPreferences"),le=localStorage.getItem("onboardingProgress");if(J)try{const xe=JSON.parse(J);Oe(xe),Ht(!0)}catch(xe){console.warn("Failed to parse user onboarding preferences:",xe),localStorage.removeItem("userOnboardingPreferences")}if(le&&!T)try{const xe=JSON.parse(le);if(xe.awaitingGtawOAuth&&se){an(!0),Ht(!1);return}if(xe.currentStep){an(!0),Ht(!1);return}}catch(xe){console.warn("Failed to parse onboarding progress:",xe),localStorage.removeItem("onboardingProgress")}!T&&!J?an(!0):Ht(!0)},[se]);const pn=T=>{console.log(`[ONBOARDING_LOG] handleOnboardingComplete called - UserType: ${T.userType}, NotificationType: ${T.userType==="leo"?"SKIPPED_LEO":"GENERIC_WELCOME"}`),Oe(T),Ht(!0),an(!1),T.allowedCategories?.length===1&&(Bt(T.allowedCategories[0]),localStorage.setItem("selectedAgencyGroup",T.allowedCategories[0])),T.defaultForm&&(fn(T.defaultForm),localStorage.setItem("selectedForm",T.defaultForm.toString())),T.userType==="leo"&&!T.quickAccess?(console.log(`[ONBOARDING_LOG] Showing notification - UserType: LEO, NotificationType: LEO_ACCESS_CONFIGURED, Message: "LEO access granted! Sign in with GTA World and click the 'CCTV Request' button in the Tools menu."`),o("LEO access granted! Sign in with GTA World and click the 'CCTV Request' top menu.","shield-alt",8e3)):T.userType!=="leo"&&(console.log(`[ONBOARDING_LOG] Showing notification - UserType: ${T.userType}, NotificationType: GENERIC_WELCOME, Message: "Welcome! Your interface has been customized for ${T.userType} users."`),o(`Welcome! Your interface has been customized for ${T.userType} users.`,"check-circle"))},Ut=()=>{an(!1),Ht(!0),o("Onboarding skipped. You can restart it anytime from the Tools menu.","info-circle")},Dt=()=>{localStorage.removeItem("onboardingComplete"),localStorage.removeItem("onboardingSkipped"),localStorage.removeItem("userOnboardingPreferences"),Oe(null),Ht(!1),an(!0)},[ot,Fn]=b.useState(!1),[Tt,Pn]=b.useState(!0),[on,Ot]=b.useState(!1),Xt=b.useRef(null),[$s,$n]=b.useState(!1),[Sn,Zr]=b.useState(!1),[$e,fn]=b.useState(()=>{const T=localStorage.getItem("bbCodeVersion");return T?parseInt(T,10):gr[0]?.version||1}),[rt,Bt]=b.useState(null),[gn,mr]=b.useState(!1),[Xn,Dn]=b.useState(!1),[On,bn]=b.useState(!1),[Mt,es]=b.useState({sha:"",date:null,error:null}),[kr,an]=b.useState(!1),[ee,Oe]=b.useState(null),[vt,Ht]=b.useState(!1),[Mn,pr]=b.useState(!1),[Fr,wt]=b.useState(""),[ts,ns]=b.useState(""),rs=19,H=20,Q=21,[ve,_e]=b.useState(!1),[Ce,me]=b.useState({coronerName:"",coronerDiscord:"",employeeLastName:"",coronerRank:"",coronerPHNumber:"",coronerEmployee:"",coronerBadge:"",phmcEmployee:"",staffToRemove:[],authorizedBy:""}),[je,at]=b.useState([]),[yn,Ye]=b.useState(!1),[Qt,jn]=b.useState(""),[Zt,Ci]=b.useState(""),[Ro,lc]=b.useState(""),[kd,Fd]=b.useState(()=>localStorage.getItem("phmcRecruitmentOptIn")==="true"),{seasonalEffectsEnabled:ss,toggleSeasonalEffects:is}=yA(),{lockdownConfig:Qn,showDialog:ko,hideDialog:Fo,isLockdownActive:Zn}=SA(),{sendEasterEggNotification:Po}=Jf(t,Mt,o),{isUploading:$o,handleImageUpload:er}=Xf(o,e),dc=T=>{Bt(T),localStorage.setItem("selectedAgencyGroup",T),N(!1),F(!0)},os=b.useCallback(T=>{fn(T),F(!1),M(!1)},[fn,F,M]),uc=T=>{mr(T),localStorage.setItem("hideAgencyGroupSelectorPreference",T)},tr=()=>{Bt("PHMC"),F(!0)},hc=T=>{const{name:J,value:le,type:xe,checked:lt}=T.target,qt=xe==="checkbox"?lt:le;e(cn=>{const Bn={...cn,[J]:qt};return localStorage.setItem("formData",JSON.stringify(Bn)),Bn})},Si=(T,J)=>{const le=typeof J=="string"?J:J.name;e(xe=>{let lt;return le==="coronerEmployee"&&T?lt={...xe,coronerEmployee:T.value,coronerBadge:T.badge,coronerRank:d(T.rank),coronerDiscord:T.discord}:le==="coronerEmployee"&&!T?lt={...xe,coronerEmployee:"",coronerBadge:"",coronerRank:"",coronerDiscord:""}:lt={...xe,[le]:T?T.value:""},localStorage.setItem("formData",JSON.stringify(lt)),lt})},Ds=()=>{o("Coroner phone filled (placeholder)","info")},Do=()=>{e(T=>({...T,additionalReports:[...T.additionalReports||[],""]}))},as=T=>{e(J=>({...J,additionalReports:(J.additionalReports||[]).filter((le,xe)=>xe!==T)}))},cs=(T,J)=>{e(le=>{const xe=[...le.additionalReports||[]];return xe[T]=J,{...le,additionalReports:xe}})},Oo=()=>{const T=Os();navigator.clipboard.writeText(T),o("Title copied to clipboard!","check-circle")},Os=()=>{const T=Hn($e);return T&&T.titleGenerator?T.titleGenerator(t):"Untitled Report"};b.useEffect(()=>{const T=setTimeout(()=>{Pn(!1)},5e3);return()=>clearTimeout(T)},[]);const ct=()=>{const T=Hn($e);if(T&&T.generator){if($e===999)return T.generator({isAdminAuthenticated:t.isAdminAuthenticated,adminUserEmail:t.adminUserEmail,adminDisplayData:t.adminDisplayData,adminSelectedCategoryName:t.adminSelectedCategoryName});{let J={};T.group==="PHMC Recruitment"&&(T.titleKey==="phmcGeneralApplication"?J=Xe||{}:T.titleKey==="phmcPsychApplication"?J=Le||{}:T.titleKey==="phmcAdminApplication"?J=G.adminPositionDetailsData||{}:T.titleKey==="phmcNursingApplication"?J=G.nursePositionDetailsData||{}:T.titleKey==="phmcCoronerRecruitmentApplication"?J=G.coronerPositionDetailsData||{}:T.titleKey==="phmcEMSApplication"&&(J=G.emsPositionDetailsData||{}));const le={...t,positionDetailsData:J||{},agencyDataStore:Ae,isLoadingData:We};return T.generator(le)}}else return sn(`No BBCode generator found for version: ${$e}`),`BBCode generation for form "${(Hn($e)||{}).name||`Form v${$e}`}" is not implemented.`};b.useEffect(()=>{["phmcEmployee","phmcEmployeeLastName","phmcRank","coronerEmployee","coronerBadge","coronerRank","coronerDiscord","coronerPHNumber","pronouncedTimeOfDeath","department","dateTime","placeOfDeath","mannerOfDeath"].forEach(xe=>{t[xe]?localStorage.setItem(xe,t[xe]):localStorage.removeItem(xe)});const{evidenceLockerID:J,...le}=t;localStorage.setItem("formData",JSON.stringify(le))},[t]);const mc=()=>rt==="PHMC Recruitment"?"Copy Recruitment BBCode":"Copy BBCode",Ms=b.useCallback(T=>{const J=[1,2,4,8,11,18,37],le=[5,6,7,9,10,12,13,14,16,19,20,21,22,23,27,28,29,35];if(J.includes($e))return T.coronerEmployee||null;if(le.includes($e))return T.phmcEmployee||null;if(T.coronerEmployee)return T.coronerEmployee;if(T.phmcEmployee)return T.phmcEmployee;if($e===25||$e===3||$e===24){if(T.patientName)return T.patientName;if(T.patientFirstName&&T.patientLastName)return`${T.patientFirstName} ${T.patientLastName}`;if(T.patientFirstName)return T.patientFirstName;if(T.patientLastName)return T.patientLastName}return null},[$e]),Mo=(T,J)=>{const le=Zf(J),xe={};return le.forEach(lt=>{T.hasOwnProperty(lt)&&(xe[lt]=T[lt])}),xe},{saveReport:wi,savedReports:Ei,showSavedReports:js,setShowSavedReports:Ln,loadUserSavedReports:jo,loadReportForUser:Lo,handleReportSelectedForAttachment:ls,onAttachReportSummaryRequest:Uo,onParseDecedentRequest:Ni,deleteReportForUser:Ls,toggleSavedReports:xi,pendingReportAttachmentCallback:Us,reportSelectionFilter:pc,preselectedEmployeeType:Bo}=tA(t,e,$e,fn,ct,Ms,Mo,G,o,a,g,_,Po,Xt,rs,H,Q,Xe,Le),ds=()=>{e(J=>({...s,coronerEmployee:J.coronerEmployee,phmcEmployee:J.phmcEmployee,coronerBadge:J.coronerBadge,coronerRank:J.coronerRank,coronerDiscord:J.coronerDiscord,SubmitDate:new Date().toISOString().split("T")[0]})),["dateTime","department","pronouncedTimeOfDeath","placeOfDeath","mannerOfDeath"].forEach(J=>{localStorage.removeItem(J),localStorage.removeItem(`${J}_timestamp`)}),r(null),o("Form cleared! Employee selections preserved.","check-circle")},Bs=()=>{N(!1),A(!0)};b.useEffect(()=>{const T=()=>{Fn(window.innerWidth<=768)};return T(),window.addEventListener("resize",T),()=>window.removeEventListener("resize",T)},[]);const{imageSource:Ho,className:Ai,effect:Ii}=ss?Dh({imageType:"deathReport"}):{},{imageSource:Go,className:Hs}=ss?Dh({imageType:"civilianPaperwork"}):{},Ti=b.useCallback(()=>{rt==="PHMC Recruitment"?hA({formData:t,getBBCodeContent:ct,showNotification:o,commitInfo:Mt,selectOptions:G,formDefinition:Hn($e)}):fA({formData:t,bbCodeVersion:$e,selectedAgencyGroup:rt,getBBCodeContent:ct,getFormDefinition:Hn,saveReport:wi,showNotification:o,removeNotification:a,handleAgencySelect:os,setLastWebhookIdentifier:r,lastWebhookIdentifier:n,commitInfo:Mt,database:Ee,getCurrentReportAuthor:Ms,isGtaAuthenticated:se,gtaWorldUser:te,coronerListData:ye,phmcListData:Se})},[rt,t,ct,o,Mt,G,$e,wi,a,os,r,n,Ee,Ms,ye,Se,se,te]),en=b.useMemo(()=>Hn($e),[$e]),[Un,Gs]=b.useState(null),[Wo,Ws]=b.useState(!1);b.useEffect(()=>{en?.componentLoader?(Ws(!0),console.log("[Component Loading] Loading component for version:",$e,"definition:",en.name),en.componentLoader().then(T=>{console.log("[Component Loading] Successfully loaded component for version:",$e),Gs(()=>T.default||T),Ws(!1)}).catch(T=>{console.error("[Component Loading] Error loading component for version:",$e,T),Gs(null),Ws(!1)})):(console.log("[Component Loading] No component loader for version:",$e),Gs(null))},[en]);const Ri=b.useMemo(()=>{if(!en)return!0;const{requiredFaction:T,requiredRank:J,isPHMC:le}=en;if(!T&&!J&&!le)return!0;const lt=(()=>{try{const Bn=localStorage.getItem("phmc_gtaw_oauth_profile");if(Bn){const $r=JSON.parse(Bn);return console.log("[Auth Debug] Found stored GTAW profile:",{isFactionMember:$r.isFactionMember,rank:$r.rank,hasFactionData:!!$r.faction}),{isFactionMember:$r.isFactionMember===!0,rank:$r.rank||$r.faction?.rank||0}}}catch(Bn){console.error("Error reading or parsing localStorage item 'phmc_gtaw_oauth_profile':",Bn)}return{isFactionMember:!1,rank:0}})(),qt=he||lt.isFactionMember,cn=te?.faction?.rank||lt.rank||0;return!(T&&T.includes("PHMC")&&!qt||J&&cn<J||le&&!qt)},[$e,he,te]),tn=b.useMemo(()=>{if(se&&te)return!0;try{const T=localStorage.getItem("phmc_gtaw_oauth_profile");if(T)return JSON.parse(T).isFactionMember===!0}catch(T){console.error("Error reading stored GTAW profile for auth check:",T)}return!1},[se,te]),zo=b.useMemo(()=>tn?gr:gr.filter(T=>T.primaryFor&&T.primaryFor.includes("civilian")),[gr,tn]);if(rt&&!Un&&!We&&!Wo){const T=`No componentLoader found for bbCodeVersion: ${$e} in group: ${rt}.`;console.warn(`[App.js] ${T}`,{bbCodeVersion:$e,selectedAgencyGroup:rt,hasCurrentFormDefinition:!!en,formName:en?.name,hasComponentLoader:!!en?.componentLoader,isLoadingData:We}),sn(T,{level:"warning",extra:{bbCodeVersion:$e,selectedAgencyGroup:rt,hasCurrentFormDefinition:!!en,formName:en?.name,hasComponentLoader:!!en?.componentLoader,isLoadingData:We}})}const qo=[{version:1,name:"Decedent Services",icon:Lc},{version:2,name:"Email Generator",icon:aa},{version:4,name:"Autopsy Report",icon:Lc},{version:8,name:"Death Certificate",icon:Vs},{version:11,name:"Mass Fatality Report",icon:Lc},{version:37,name:"Public Death Record ",icon:eg}],Pr=[{version:6,name:"Physical Evaluation PHMC",icon:Vs},{version:7,name:"Physical Evaluation PBC",icon:ir}],c=[{version:28,name:"Psychological Evaluation | PHMC",icon:Vs},{version:29,name:"Psychological Evaluation | PBC",icon:ir}],h=[{version:20,name:"General Consultation | PHMC",icon:Vs},{version:21,name:"General Consultation | PBC",icon:ir}],m=[{version:22,name:"Commentary Note | PHMC",icon:Vs},{version:23,name:"Commentary Note | PBC",icon:ir}],x=[{version:14,name:"Mental Health - PHMC",icon:Vs},{version:16,name:"Mental Health | PBC",icon:ir}],U=[{version:24,name:"Medical Records",icon:La},{version:25,name:"Patient Files",icon:yl}],z=[{version:24,name:"Internal Email",icon:La},{version:35,name:"Sick Note",icon:yl}],ce=(T,J)=>{j(T),q(J),M(!0)};b.useEffect(()=>{rt&&localStorage.setItem("bbCodeVersion",$e.toString())},[$e,rt]);const Be=async(T,J,le,xe,lt,qt,cn,Bn)=>{await lA(T,J,le,xe,ye,Se,lt,qt,cn,Mt,o,t.coronerEmployee,t.phmcEmployee),T==="updateRank"&&o("Refreshing staff data...","info-circle",2e3),T==="updateRank"&&o("Staff data refreshed.","check-circle",3e3)};b.useEffect(()=>{const T=sessionStorage.getItem("redirectPath");T&&(sessionStorage.removeItem("redirectPath"),window.history.replaceState(null,"",T));const J=window.location.pathname;window.location.hash==="#bingo"||J.endsWith("/bingo")?(console.log("Bingo route detected. Opening Bingo modal."),p(!0)):J.endsWith("/cctv")&&(console.log("CCTV route detected. Opening CCTV modal."),Bs())},[]);const Rt=b.useCallback(()=>{p(!1);const T=new URL(window.location.href);T.hash==="#bingo"&&(T.hash=""),T.pathname.endsWith("/bingo")&&(T.pathname=T.pathname.replace(/bingo$/,"")||"/"),window.history.replaceState({},document.title,T.href)},[]),ht=b.useCallback(()=>{A(!1);const T=new URL(window.location.href);T.pathname.endsWith("/cctv")&&(T.pathname=T.pathname.replace(/cctv$/,"")||"/",window.history.replaceState({},document.title,T.href))},[]);b.useEffect(()=>{const J=new URLSearchParams(window.location.search).get("p"),le=window.location.pathname;if(window.location.hash==="#bingo"||le.endsWith("/bingo")||J&&J.endsWith("/bingo")?p(!0):(le.endsWith("/cctv")||J&&J.endsWith("/cctv"))&&Bs(),J){const lt=new URL(window.location.href);lt.searchParams.delete("p"),window.history.replaceState({},document.title,lt.href)}},[]);const kt=T=>J=>{const le=J.target.checked;le&&e(xe=>({...xe,massFatality:!1})),le&&(_e(!1),me(xe=>({...xe,staffToRemove:[],employeeLastName:"",authorizedBy:""}))),T==="john"?(Dn(le),le?(bn(!1),e(xe=>({...xe,decedentName:"John Doe"}))):t.decedentName==="John Doe"&&e(xe=>({...xe,decedentName:""}))):T==="jane"&&(bn(le),le?(Dn(!1),e(xe=>({...xe,decedentName:"Jane Doe"}))):t.decedentName==="Jane Doe"&&e(xe=>({...xe,decedentName:""})))};b.useEffect(()=>{const T=()=>{const le=new Date,xe=lg=>lg.toString().padStart(2,"0"),lt=xe(le.getUTCDate()),qt=le.toLocaleString("en-US",{timeZone:"UTC",month:"long"}),cn=le.getUTCFullYear(),Bn=xe(le.getUTCHours()),$r=xe(le.getUTCMinutes()),ag=xe(le.getUTCSeconds()),cg=`${lt}/${qt}/${cn} ${Bn}:${$r}:${ag} UTC`;lc(cg)};T();const J=setInterval(T,1e3);return()=>clearInterval(J)},[]);const xn=[{label:"Coroners",options:ye.map(T=>({value:T.name,label:`${T.name} (${T.rank||"Coroner"})`}))},{label:"PHMC Staff",options:Se.map(T=>({value:T.name,label:`${T.name} (${T.category||"PHMC"})`}))}].filter(T=>T.options.length>0);return b.useEffect(()=>{if(!rt)return;const J={Coroner:[{importFn:()=>Te(()=>import("./deathReport-CXcHNuTI.js"),__vite__mapDeps([0,1,2,3,4,5])),name:"DeathReport"},{importFn:()=>Te(()=>import("./CoronerEmail-BqNouftK.js"),__vite__mapDeps([6,1,2,4,5])),name:"CoronerEmail"},{importFn:()=>Te(()=>import("./Autopsy-9yNNXopr.js"),__vite__mapDeps([21,1,2,4,5])),name:"Autopsy"}],PHMC:[{importFn:()=>Te(()=>import("./PhysEvalPHMC-CpgtK-4A.js"),__vite__mapDeps([7,1,2,4,5])),name:"PhysEval"},{importFn:()=>Te(()=>import("./GeneralConsult-C-SqmLEe.js"),__vite__mapDeps([8,1,2,5,3,4])),name:"GeneralConsult"},{importFn:()=>Te(()=>import("./EmergencyForm-Ihzsdswy.js"),__vite__mapDeps([9,1,2,5,4])),name:"EmergencyForm"}],"PHMC Recruitment":[{importFn:()=>Te(()=>import("./Physician-ClZmVcH7.js"),__vite__mapDeps([26,1,2])),name:"PhysicianFields"},{importFn:()=>Te(()=>import("./Nursing-BcLdDMF1.js"),__vite__mapDeps([29,1,2])),name:"NursingFields"},{importFn:()=>Te(()=>import("./Ems-_U9Ul6Qp.js"),__vite__mapDeps([31,1,2])),name:"EmsFields"}],"Civilian Paperwork":[{importFn:()=>Te(()=>import("./BasicPatientFile-sInl949D.js"),__vite__mapDeps([53,1,2,3,14,5,15])),name:"BasicPatientFile"},{importFn:()=>Te(()=>import("./MedicalRecords-CgaGV8g3.js"),__vite__mapDeps([19,1,2,5,14,4])),name:"MedicalRecords"}]}[rt];J&&IA(J).then(()=>{console.log(`[Prefetch] Preloaded ${J.length} components for ${rt}`)}),"requestIdleCallback"in window&&window.requestIdleCallback(()=>{Hn($e)?.componentLoader&&console.log("[Prefetch] Current form component loader ready:",$e)},{timeout:2e3})},[rt,$e]),b.useEffect(()=>{if(!vt)return;const T=localStorage.getItem("selectedAgencyGroup"),J=localStorage.getItem("hideAgencyGroupSelectorPreference")==="true";if(mr(J),ee?.allowedCategories?.length===1){const le=ee.allowedCategories[0];Bt(le),N(!1);return}T&&J?(Bt(T),N(!1)):vt&&N(!0)},[vt,ee]),b.useEffect(()=>{localStorage.setItem("bbCodeVersion",$e.toString());const T=Hn($e);T?(rt!==T.group&&Bt(T.group),localStorage.setItem("selectedAgencyGroup",T.group)):(rt!==null&&Bt(null),localStorage.removeItem("selectedAgencyGroup"))},[$e]),i.jsx(b.Suspense,{fallback:i.jsx(pl,{}),children:i.jsxs("div",{className:"App",children:[i.jsx(EA,{notification:Qn.notification,show:Zn}),i.jsx(xA,{show:ko,onHide:Fo,message:Qn.dialog}),"                ",i.jsx(FA,{show:kr,onComplete:pn,onSkip:Ut,formDefinitions:gr,showNotification:o}),i.jsx(RA,{show:w&&!rt&&vt,onSelectGroup:dc,onHideSelectorPreference:uc,physicianRecruitmentDetails:G.physicianRecruitmentDetails||{},psychRecruitmentDetails:G.psychPositionDetailsData||{},adminRecruitmentDetails:G.adminPositionDetailsData||{},emsRecruitmentDetails:G.emsPositionDetailsData||{},handleFormSelect:os,nurseRecruitmentDetails:G.nursePositionDetailsData||{},coronerRecruitmentDetails:G.coronerPositionDetailsData||{},onShowCctvRequest:Bs,onShowBusinessCardModal:()=>y(!0)}),i.jsx(Oh,{show:C,onHide:()=>M(!1),title:B,forms:V,handleFormSelect:T=>{fn(T),M(!1)},isMobile:ot,physicianRecruitmentDetails:G.physicianRecruitmentDetails,psychRecruitmentStatus:G.psychPositionDetailsData,adminRecruitmentDetails:G.adminPositionDetailsData,emsRecruitmentDetails:G.emsPositionDetailsData,nurseRecruitmentDetails:G.nursePositionDetailsData,coronerRecruitmentDetails:G.coronerPositionDetailsData,formDefinitions:gr,userPreferences:ee}),i.jsx(UA,{show:v,onHide:ht,showNotification:o,commitInfo:Mt,formData:t}),i.jsx(MA,{show:f,type:S,onHide:()=>{g(!1),_(null)}}),ss&&Ii,i.jsx(OA,{show:$,onHide:()=>O(!1),showNotification:o,commitInfo:Mt,handleImageUpload:er}),I&&i.jsx(kA,{showAgencySelector:I,setShowAgencySelector:F,handleAgencySelect:os,isMobile:ot,hideAgencySelector:P,setHideAgencySelector:k,selectedAgencyGroup:rt,formDefinitions:zo,physicianRecruitmentDetails:Xe,psychRecruitmentDetails:Le,adminRecruitmentDetails:Pt,emsRecruitmentDetails:Me,nurseRecruitmentDetails:K,coronerRecruitmentDetails:Ue,userPreferences:ee}),i.jsx("div",{className:"header-info-wrapper",children:i.jsx($A,{commitInfo:Mt})}),i.jsxs("div",{className:"container-fluid",children:[i.jsxs("div",{className:"form-container",children:[i.jsxs("div",{className:"button-group",children:[i.jsx("div",{className:"floating-tools-container",children:i.jsxs(An,{drop:"up",show:on,onToggle:T=>Ot(T),children:[i.jsxs(An.Toggle,{variant:"secondary",id:"dropdown-tools",children:[i.jsx("i",{className:"fas fa-tools"})," Tools"]}),i.jsxs(An.Menu,{children:[i.jsxs(An.Item,{onClick:()=>{R(!0),Ot(!1)},children:[i.jsx("i",{className:"fas fa-users-cog"})," Manage PHMC Staff"]}),i.jsxs(An.Item,{onClick:()=>{ue(!0),Ot(!1)},children:[i.jsx("i",{className:"fas fa-bug"})," Report Bug/Feature"]}),i.jsxs(An.Item,{onClick:()=>{xi(),Ot(!1)},children:[i.jsx("i",{className:"fas fa-save"})," Saved Reports"]}),i.jsxs(An.Item,{onClick:()=>{O(T=>!T),Ot(!1)},children:[i.jsx("i",{className:"fa-solid fa-truck-medical"})," EMS AMA"]}),i.jsxs(An.Item,{onClick:()=>{A(!0),Ot(!1)},children:[i.jsx("i",{className:"fas fa-video"})," LEO Access"]}),i.jsxs(An.Item,{onClick:()=>{is(),Ot(!1)},children:[i.jsx("i",{className:`fas ${ss?"fa-snowflake":"fa-sun"}`}),ss?"Disable":"Enable"," Seasonal Effects"]}),i.jsxs(An.Item,{onClick:()=>{Dt(),Ot(!1)},children:[i.jsx("i",{className:"fas fa-play-circle"})," Restart Setup Guide"]}),i.jsx(An.Divider,{}),i.jsxs(An.Item,{onClick:()=>{localStorage.removeItem("selectedAgencyGroup"),Bt(null),N(!0),Ot(!1)},children:[i.jsx("i",{className:"fas fa-users"})," Switch Form Type"]})]})]})}),i.jsx(BA,{show:Y,onClose:()=>ue(!1),featureRequest:Fr,setFeatureRequest:wt,discordName:ts,setDiscordName:ns,isBbcodeRequest:yn,setIsBbcodeRequest:Ye,bbcodeTitleRequest:Qt,setBbcodeTitleRequest:jn,bbcodeRequestText:Zt,setBbcodeRequestText:Ci,bbCodeVersion:$e,commitInfo:Mt,setShowFeatureRequestModal:ue}),i.jsxs(de,{variant:"secondary",type:"button",className:"changelog-button",onClick:()=>y(T=>!T),disabled:(()=>{if(Zn)return!0;if(se)return!1;try{const T=localStorage.getItem("phmc_gtaw_oauth_profile");if(T)return JSON.parse(T).isFactionMember!==!0}catch(T){console.error("Error reading stored GTAW profile for auth check:",T)}return!0})(),title:se?"Generate a digital business card for PHMC/LSFD staff":"Login with GTAW to access Business Card Tool",children:[i.jsx("i",{className:"fa-solid fa-address-card"}),"Business Card Tool"]})]}),i.jsxs("div",{className:"button-group",children:[i.jsxs(de,{type:"button",variant:"phmc",className:"changelog-button",onClick:()=>window.open("https://phmc.gta.world/","_blank"),children:[i.jsx("i",{className:"fas fa-hospital"}),"PHMC"]}),i.jsxs(de,{className:"changelog-button",variant:"secondary",onClick:tr,children:[i.jsx("i",{className:"fas fa-exchange-alt"}),"PHMC Forms"]}),i.jsx(iA,{bbCodeVersion:$e,openSwitchableModal:ce,formGroups:{coronerFormsSubGroup:qo,physicalEvalFormsSubGroup:Pr,psychEvalFormsSubGroup:c,generalConsultFormsSubGroup:h,commentaryNoteFormsSubGroup:m,mentalHealthFormsSubGroup:x,civilianFormsSubGroup:U,phmcInternalEmails:z}})]}),i.jsxs("form",{children:[i.jsx(b.Suspense,{fallback:i.jsx(pl,{}),children:Un?Ri?i.jsx(Un,{formData:t,handleChange:hc,commitInfo:Mt,setFormData:e,agencyDataStore:Ae,isLoadingData:We,typeOfDeathOptions:G.typeOfDeathOptions||[],mannerOfDeathOptions:G.mannerOfDeathOptions||[],requestingAgencyOptions:G.requestingAgenciesOptions||[],phmcGroupedOptions:Ie,coronerGroupedOptions:De,setShowEmployeeModal:R,handleSelectChange:Si,isUploading:$o,handleImageUpload:er,removeNotification:a,patientTitleOptions:G.patientTitle||[],patientPhoneOptions:G.patientPhone||[],purposeOptions:G.PurposeMedicalInformationRelease||[],formatOptions:G.PurposeMedicalInformationReleaseFormat||[],medicalRecordOptions:G.MedicalRecordsRelease||[],phmcRank:G.phmcRank||[],patientConsent:G.patientConsent||[],complications:G.complications||[],procedureGood:G.procedureGood||[],BodyMassIndex:G.BodyMassIndex||[],temperature:G.temperature||[],heartRate:G.heartRate||[],breathing:G.breathing||[],bloodPressure:G.bloodPressure||[],patientJob:G.patientJob||[],patientJobRisks:G.patientJobRisks||[],patientAllergiesRisk:G.patientAllergiesRisk||[],patientMedicineRegular:G.patientMedicineRegular||[],patientOther:G.patientOther||[],predisposition:G.predisposition||[],admission:G.admission||[],followup:G.followup||[],painLevel:G.painLevel||[],findings:G.findings||[],lungs:G.lungs||[],pupils:G.pupils||[],wounds:G.wounds||[],ecg:G.ecg||[],sono:G.sono||[],lab:G.lab||[],bloodOxy:G.bloodOxy||[],assignedDepartment:G.assignedDepartment||[],departmentLarge:en?.version===23&&rt==="PHMC"?G.paletoClinicDepartment||[]:G.departmentLarge||[],Appearance:G.Appearance||[],Behavior:G.Behavior||[],Speech:G.Speech||[],Mood:G.Mood||[],Affect:G.Affect||[],ThoughtProcess:G.ThoughtProcess||[],ThoughtContent:G.ThoughtContent||[],Insight:G.Insight||[],Cognition:G.Cognition||[],Risk:G.Risk||[],fillPhoneChecked:$s,setFillPhoneChecked:$n,handleFillCoronerPhone:Ds,addReport:Do,removeReport:as,handleReportChange:cs,toggleSavedReports:xi,dnr:G.dnr||[],attorney:G.attorney||[],dnrOrder:G.dnrOrder||[],isJohnDoe:Xn,isJaneDoe:On,handleDoeChange:kt,currentUtcTime:Ro,UpdateMedicalFile:G.UpdateMedicalFile||[],Imaging:G.Imaging||[],patientTitleNew:G.patientTitleNew||[],XrayResults:G.XrayResults||[],ctResults:G.ctResults||[],mriResults:G.mriResults||[],ultrasoundResults:G.ultrasoundResults||[],patientBloodType:G.patientBloodType||[],selectOptions:G,maritalStatus:G.maritalStatus||[],numberChildren:G.numberChildren||[],financialStatus:G.financialStatus||[],physicianRecruitmentDetails:Xe,psychRecruitmentDetails:Le,adminRecruitmentDetails:Pt,emsRecruitmentDetails:Me,nurseRecruitmentDetails:K,coronerRecruitmentDetails:Ue,showNotification:o,onAttachReportSummaryRequest:Uo,onParseDecedentRequest:Ni}):i.jsx("div",{className:"alert alert-danger",role:"alert",children:"You must be a logged-in PHMC employee to access this form."}):i.jsx("p",{children:"Please select an agency group and then a form type."})}),i.jsx("div",{className:"button-group",children:i.jsxs(de,{type:"button",onClick:ds,className:"remove-report-button",children:[i.jsx("i",{className:"fas fa-trash-alt"}),"Clear Form"]})})]})]}),i.jsxs("div",{className:"output-container",children:[i.jsxs("div",{className:"floating-admin-button-container",children:[se?i.jsx(i.Fragment,{children:i.jsxs(de,{type:"button",variant:"success",className:"changelog-button",onClick:Z,title:`Logged in as ${te?.username||"Unknown"}. Click to logout.`,children:[i.jsx("i",{className:"fas fa-user-check"}),te?.username||"GTAW User"]})}):i.jsxs(de,{type:"button",variant:"primary",className:"changelog-button",onClick:st,disabled:re,title:"Login with GTA World",children:[i.jsx("i",{className:re?"fas fa-spinner fa-spin":"fab fa-steam"}),re?"Connecting...":"Login with GTAW"]}),ee?.userType==="leo"&&i.jsxs(de,{type:"button",variant:"info",className:"changelog-button",onClick:()=>A(!0),title:"Request CCTV footage access",children:[i.jsx("i",{className:"fas fa-video"}),"CCTV Request"]}),i.jsxs(de,{type:"button",variant:"warning",className:"changelog-button",onClick:()=>p(!0),title:"Open Bingo Night!",children:[i.jsx("i",{className:"fas fa-trophy"}),"Bingo Night!"]}),i.jsxs(de,{type:"button",variant:"danger",className:"changelog-button",onClick:()=>l("/admin"),title:"Open Admin Control Panel",children:[i.jsx("i",{className:"fas fa-user-shield"}),"Admin Panel"]})]}),i.jsx(LA,{selectedAgencyGroup:rt,bbCodeVersion:$e,physicianRecruitmentDetails:Xe,psychRecruitmentDetails:Le,adminRecruitmentDetails:G.adminPositionDetailsData||{},emsRecruitmentDetails:G.emsPositionDetailsData||{},nurseRecruitmentDetails:G.nursePositionDetailsData||{},coronerRecruitmentDetails:G.coronerPositionDetailsData||{}}),i.jsx(GA,{show:u,onHide:Rt,currentPhmcEmployee:t.phmcEmployee,showNotification:o,setShowEmployeeModal:R,isAdmin:t.isAdminAuthenticated,sendBingoWebhook:({scorer:T,bingoType:J,phrase:le,lineName:xe,marked:lt,commitInfo:qt})=>cA({scorer:T,bingoType:J,phrase:le,lineName:xe,marked:lt,commitInfo:qt||Mt}),sendPhraseRequestWebhook:({requester:T,phrase:J,bingoType:le})=>dA({requester:T,phrase:J,bingoType:le,commitInfo:Mt})}),i.jsx(jA,{show:D,onHide:()=>{R(!1),Dn(!1),bn(!1),_e(!1)},isJohnDoe:Xn,coronerList:ye,phmcList:Se,isRemoveStaff:ve,showNotification:o,handleDoeChange:kt,handleRemoveStaffChange:T=>{at(T?T.map(J=>J.value):[])},missingEmployeeData:Ce,handleMissingEmployeeChange:T=>{me({...Ce,[T.target.name]:T.target.value})},phmcGroupedOptions:Ie,coronerGroupedOptions:De,employeeOptions:xn,onSubmit:Be}),Ri&&i.jsxs("div",{className:"bbcode-section",children:[ct()?.length>3e4&&i.jsxs("div",{className:`char-counter ${ct()?.length>6e4?"char-counter-warning":""}`,children:["Character Count: ",ct()?.length??"Error"," / 60000",ct()?.length>6e4&&i.jsx("div",{className:"char-counter-warning-message",children:"Warning: PHPBB forums often have a character limit around 60,000. You may need to split this form."})]}),(()=>{(()=>{try{const T=localStorage.getItem("phmc_gtaw_oauth_profile");if(T)return JSON.parse(T).isFactionMember===!0}catch(T){console.error("Error reading stored GTAW profile for auth check:",T)}return!1})()})(),i.jsxs("div",{className:"modern-output-controls",children:[i.jsxs(de,{type:"button",onClick:()=>Zr(T=>!T),className:"control-button",disabled:(()=>{if(Zn)return!0;if(se)return!1;try{const T=localStorage.getItem("phmc_gtaw_oauth_profile");if(T)return JSON.parse(T).isFactionMember!==!0}catch(T){console.error("Error reading stored GTAW profile for auth check:",T)}return!0})(),children:[i.jsx("i",{className:`fas ${Sn?"fa-eye-slash":"fa-eye"}`}),Sn?"Hide BBCode":"Show BBCode"]}),i.jsxs(de,{type:"button",onClick:Ti,className:"control-button",disabled:(()=>{if(Zn)return!0;if(se)return!1;try{const T=localStorage.getItem("phmc_gtaw_oauth_profile");if(T)return JSON.parse(T).isFactionMember!==!0}catch(T){console.error("Error reading stored GTAW profile for auth check:",T)}return!0})(),children:[i.jsx("i",{className:"fas fa-save"}),"Save Report"]})]}),i.jsx("p",{className:"generated-title-label",children:"Generated Title"}),i.jsx("p",{className:"generated-title-string",children:Os()}),Sn&&i.jsx("div",{className:"generated-title-container"}),i.jsxs("div",{className:"modern-copy-controls",children:[i.jsxs(de,{type:"button",onClick:Oo,className:"copy-button-modern",disabled:(()=>{if(Zn)return!0;if(se)return!1;try{const T=localStorage.getItem("phmc_gtaw_oauth_profile");if(T)return JSON.parse(T).isFactionMember!==!0}catch(T){console.error("Error reading stored GTAW profile for auth check:",T)}return!0})(),children:[i.jsx("i",{className:"fas fa-copy"}),"Copy Title"]}),i.jsxs(de,{type:"button",onClick:Ti,className:"copy-button-modern",disabled:(()=>{if(Zn)return!0;if(se)return!1;try{const T=localStorage.getItem("phmc_gtaw_oauth_profile");if(T)return JSON.parse(T).isFactionMember!==!0}catch(T){console.error("Error reading stored GTAW profile for auth check:",T)}return!0})(),title:Zn?"BBCode copying is disabled during site lockdown":"",children:[i.jsx("i",{className:"fas fa-copy"}),mc()]})]}),se?null:i.jsx("div",{children:"Please ensure you are logged in with GTA World to use copy functionality."}),Sn&&i.jsx("pre",{className:"bbcode-output",children:ct()}),$e===2&&t.department&&Ae&&Ae[t.department]&&Ae[t.department].logo&&Ae[t.department].url&&i.jsxs("div",{className:"agency-buttons",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"8px",margin:"18px 0 0 0",flexWrap:"wrap"},children:[i.jsx("button",{className:"agency-button",style:{background:"none",border:"none",padding:0,cursor:"pointer"},onClick:()=>window.open(Ae[t.department].url,"_blank"),title:Ae[t.department].fullName||t.department,children:i.jsx("img",{src:Ae[t.department].logo,alt:Ae[t.department].fullName||t.department,style:{height:"100px",width:"auto",borderRadius:"6px",border:"1px solid #30363d",background:"#16202c",padding:"4px",marginBottom:"2px"}})}),i.jsx("div",{style:{color:"#eeeeeeb0",fontWeight:600,fontSize:"1.1rem",textAlign:"center",marginTop:"2px"},children:Ae[t.department].fullName||t.department})]}),i.jsx(HA,{bbCodeVersion:$e,selectedAgencyGroup:rt,deathReportClass:Ai,civilianPaperworkClass:Hs,deathReportImage:Ho,civilianPaperworkImage:Go})]}),rt==="PHMC"&&i.jsx(DA,{show:E,onHide:()=>y(!1),showNotification:o,commitInfo:Mt,handleImageUpload:er}),i.jsx(Oh,{show:C,onHide:()=>M(!1),title:B,forms:V,handleFormSelect:os,isMobile:ot,physicianRecruitmentDetails:G.physicianRecruitmentDetails,psychRecruitmentStatus:Le,formDefinitions:gr,adminRecruitmentDetails:G.adminPositionDetailsData||{},nurseRecruitmentDetails:G.nursePositionDetailsData||{},coronerRecruitmentDetails:G.coronerPositionDetailsData||{},emsRecruitmentDetails:G.emsPositionDetailsData||{},userPreferences:ee}),i.jsx(TA,{show:js,onHide:()=>Ln(!1),onClose:()=>Ln(!1),savedReports:Ei,reportsForSelectedUser:Ei,loadReport:Lo,loadReportForUser:Lo,deleteReportForUser:Ls,author:Ms(t),isLoadingReports:Mn,handleReportSelectedForAttachment:ls,reportSelectionFilter:pc,pendingReportAttachmentCallback:Us,showNotification:o,currentCoronerEmployee:t.coronerEmployee,currentPhmcEmployee:t.phmcEmployee,preselectedEmployeeType:Bo,bbCodeVersion:$e,onEmployeeSelect:T=>{T&&jo(T)},employeeOptions:[{label:"PHMC Staff",options:Se.map(T=>({value:T.name,label:`${T.name} (${T.category||"PHMC"})`})).sort((T,J)=>T.label.localeCompare(J.label))},{label:"Coroners",options:ye.map(T=>({value:T.name,label:`${T.name} (${T.rank||"Coroner"})`})).sort((T,J)=>T.label.localeCompare(J.label))}],removeNotification:a})]})]}),i.jsx(PA,{}),i.jsx(nA,{show:L,onHide:()=>ne(!1),characters:ae,onCharacterSelect:yt,currentSelection:W,title:"Select PHMC Character"}),i.jsx(b.Suspense,{fallback:null,children:i.jsx(WA,{show:Re,onHide:()=>Pe(!1),user:te,phmcListData:Se,showNotification:o})})]})})}new Date().toISOString().split("T")[0];function qA(){const t={phmcEmployee:"",coronerEmployee:"",coronerBadge:"",coronerRank:"Forensic Attendant",coronerDiscord:"",coronerPHNumber:"50056",lastName:"",phmcRank:"",department:"",dateTime:"",date:"",decedentName:"",decedentOOC:"",synopsis:"",scenePhotos:"",additionalImages:"",patientID:"",patientName:"",patientAddress:"",massFatality:!1,patientRace:"",patientGender:"",patientPH:"",patientDiscord:"",patientEmergencyContact:"",patientEmergencyContactNumber:"",patientEmergencyContactRelation:"",decedents:[],patientEmergencyContactDiscord:"",patientTitle:"",patientTitleOptions:"",patientAllergies:"",patientCurrentMedicine:"",patientChronicDiseases:"",patientNotes:"",patientDateOfBirth:"",patientBloodType:"",patientChiefComplaint:"",patientProcedure:"",patientDiagnosis:"",patientSecondaryDiagnosis:"",patientMedicine:"",admission:"",followup:"",SubmitDate:new Date().toISOString().split("T")[0],patientExercise:"",placeOfDeath:"",evidenceLockerID:"",evidenceLocker:"",pronouncedTimeOfDeath:"",mannerOfDeath:"",typeOfDeath:"",showRequestingOfficerInput:!1,requestingOfficer:"",deathReport:"",additionalReports:[],autopsyDate:"",autopsyTime:"",autopsyDeathCauses:[""],autopsyAnatomicSummaryItems:[""],autopsyAlbumUrl:"",autopsyPhotosUnavailable:!1,autopsyDiagramMarkers:[],autopsyDiagramImgurUrl:"",externalExamination:"",RadiologyResult:"",deathType:"",causeOfDeath:"",extraStaff:[],patientSummaryConsultation:"",patientSummary:"",surgeryProcedures:"",patientConsentOption:"",patientComplicationOptions:"",procedureGoodOptions:"",patientHeight:"",patientWeight:"",BodyMassIndex:"",temperature:"",heartRate:"",breathing:"",bloodPressure:"",patientJob:"",patientJobRisks:"",patientAllergiesRisk:"",patientMedicineRegular:"",patientOther:"",predisposition:"",patientCareer:"",patientImpairments:"",patientTriggers:"",patientFamily:"",patientFam:"",patientMedicalRecord:"",patientVisitReason:"",patientSymptoms:"",patientDrugs:"",patientDrugsUsage:"",patientMental:"",patientFamSocial:"",patientLegal:"",patientRelationship:"",patientFindings:"",patientTreatmentPlan:"",patientSafety:"",patientFollowUp:"",patientTreatmentMedicine:"",patientTherapy:"",patientRiskAssessment:"",Speech:"",Behavior:"",Appearance:"",Mood:"",Affect:"",Risk:"",ThoughtProcess:"",ThoughtContent:"",Insight:"",Cognition:"",painLevel:"",findings:"",lungs:"",pupils:"",wounds:"",ecg:"",sono:"",lab:[],bloodOxy:"",assignedDepartment:"",departmentLarge:"",paletoClinicDepartment:"",MedicalRecordsRelease:[],payNow:!1,paymentProofPhotos:"",PurposeMedicalInformationReleaseFormat:"",CarePurposeMedicalInformationRelease:"",patientMedInfoReleaseOther:"",MedicalRecordsReleaseOther:"",patientMedInfoFormatOther:"",StupidDateFrom:"",StupidDateTo:"",patientFirstName:"",patientMiddleName:"",patientLastName:"",patientEmail:"",patientPhoneType:"",patientZIP:"",dnr:"",dnrOrder:"",attorney:"",dnrOther:"",attorneyName:"",attorneyRelation:"",attorneyPH:"",maritalStatus:"",numberChildren:"",financialStatus:"",patientSupport:"",patientHarm:"",patientGenetic:"",patientReligion:"",patientSmoker:"",patientAlcohol:"",patientDiet:"",patientSleep:"",patientSexLife:"",patientHazards:"",prescriptionImage:"",attachedReportSummary:"",emailPurpose:"",emailRecipient:"",dateOfVisit:"",sicknessStartDate:"",sicknessEndDate:"",reasonForSickness:"",illnessCondition:"",confirmationPurpose:"",phmcEmployeeSignatureImage:"",recruitmentPosition:"",applicantContactDetails:"",locationPHMC:!1,locationPBC:!1,applicantMedicalConditions:"",citizenUS:!1,citizenPermanent:!1,citizenNone:!1,eduHighSchool:!1,eduCertificate:!1,eduDiploma:!1,eduAssociate:!1,eduBachelor:!1,eduMaster:!1,eduDoctorate:!1,applicantSchoolName:"",applicantEnrollmentTerm:"",applicantMajor:"",applicantLanguages:"",applicantPrevEmployment:"",applicantPrevDuties:"",applicantPrevDismissalReason:"",applicantMotivationLetter:"",exemptCheckbox:!1,oocMedicalExperience:"",oocAdminRecordLink:"",oocStatsLink:"",applicantTitleAndFullName:"",genderMale:"",genderFemale:"",genderOther:"",applicantGenderOtherText:"",applicantDOBAndPlace:"",applicantAddress:"",emsLicenseLink:"",emsPartTimeReason:"",oocUcpName:"",oocForumName:"",oocDiscord:"",oocTimezone:"",charBackground:"",oocOtherCharLicenseProof:"",dfpSanFireLink:"",dfpPhmcLink:"",dfpLegalFactionLink:"",Imaging:[],XrayResults:[],ctResults:[],mriResults:[],ultrasoundResults:[],patientTitleNew:"",patientNameNew:"",patientDateOfBirthNew:"",patientAddressNew:"",patientPHNew:"",patientDiscordNew:"",patientGenderNew:"",patientRaceNew:"",deathRecordType:""},[e,n]=b.useState(()=>{const d=localStorage.getItem("formData");return d?JSON.parse(d):t}),[r,s]=b.useState(null),{showNotification:o,removeNotification:a,NotificationContainer:l}=To();return b.useEffect(()=>{Object.keys(e).length>0&&localStorage.setItem("formData",JSON.stringify(e))},[e]),i.jsx(zA,{formData:e,setFormData:n,lastWebhookIdentifier:r,setLastWebhookIdentifier:s,initialFormData:t,showNotification:o,removeNotification:a})}const VA=({formData:t,setFormData:e,showNotification:n})=>{const[r,s]=b.useState({sha:"",date:null,error:null}),[o,a]=b.useState(!1),{currentUser:l}=Id(),{user:d,isAuthenticated:u,isLoading:p,username:f}=ur(),[g,S]=b.useState(!1);b.useEffect(()=>{if(u&&d&&d.username&&!g){let P=`Welcome back, ${d.username}! 🎮`;if(d.isFactionMember&&d.faction){const k=d.faction.firstname&&d.faction.lastname?`${d.faction.firstname} ${d.faction.lastname}`:d.faction.name||d.faction.characterName||d.username,D=d.faction.scriptRank,R=d.faction.rankName;k&&D!==void 0&&R?P=`Welcome back, ${k}! (${R} - Script Rank: ${D}) 🏥`:k&&D!==void 0?P=`Welcome back, ${k}! (Script Rank: ${D}) 🏥`:k&&(P=`Welcome back, ${k}! 🏥`),console.log("[Admin Welcome] PHMC member detected:",{username:d.username,characterName:k,scriptRank:D,rankName:R,factionData:d.faction})}else console.log("[Admin Welcome] Non-PHMC user:",{username:d.username,isFactionMember:d.isFactionMember,hasFactionData:!!d.faction,fullUserObject:d,hasCharacters:!!(d.character||d.characters),charactersCount:(d.character||d.characters)?.length||0,characterNames:(d.character||d.characters)?.map(k=>({id:k.id,name:k.name,firstname:k.firstname,lastname:k.lastname,fullName:`${k.firstname||""} ${k.lastname||""}`.trim(),memberid:k.memberid}))||"no characters data",hasName:!!d.name,hasFirstname:!!d.firstname,hasLastname:!!d.lastname,apiDataKeys:Object.keys(d),nestedCharacterData:{user:d.user,character:d.character,profile:d.profile}});n(P,"check-circle",5e3),S(!0)}!u&&g&&S(!1)},[u,d,g,n]),b.useEffect(()=>{const P="githubCommitInfo";(()=>{try{const R=localStorage.getItem(P);if(R){const $=JSON.parse(R);if(Date.now()-$.timestamp<9e5){s($.info);return}}}catch(R){console.error("Error reading commit info from cache:",R)}fetch("https://api.github.com/repos/GTAW-PHMC/forms/commits/gh-pages").then(R=>{if(!R.ok)throw new Error(`GitHub API responded with status: ${R.status}`);return R.json()}).then(R=>{const $=new Date(R.commit.author.date),O={sha:R.sha.substring(0,7),date:$.toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",timeZoneName:"short"}),error:null};s(O);try{localStorage.setItem(P,JSON.stringify({timestamp:Date.now(),info:O}))}catch(E){console.error("Error writing commit info to cache:",E)}}).catch(R=>{console.error("Error fetching commit:",R),s($=>({...$,error:"Could not fetch latest update information."}))})})()},[]);const _=l?.email?.endsWith("@gmail.com");return!(d?.isFactionMember&&d?.faction||_)&&u&&!p?(o||(async()=>{if(!o)try{const k="https://discord.com/api/webhooks/1384194105944445038/n5fEy-fruWhtCygpT3wn6p5ciffKNhnQRo34Q09Vity_t8U4JEgCOhZgeZhluVqWNYtG";if(k){const D={title:"⚠️ Unauthorized Admin Access Attempt",color:16711680,description:`**User:** ${f||"Unknown"} (${l?.email||"Unknown"})
**Reason:** Not a PHMC member`,timestamp:new Date().toISOString(),footer:{text:"PHMC Security Alert"}};await fetch(k,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({embeds:[D]})}),a(!0)}}catch(k){console.error("Failed to log unauthorized access:",k)}})(),i.jsxs("div",{style:{textAlign:"center",padding:"2rem"},children:[i.jsx("h2",{children:"Access Denied"}),i.jsx("p",{children:"This admin panel is restricted to PHMC members only."}),i.jsx("p",{children:"Please contact a PHMC administrator if you believe this is an error."}),i.jsxs("div",{style:{marginTop:"2rem",display:"flex",gap:"1rem",justifyContent:"center"},children:[i.jsx("button",{className:"btn btn-primary",onClick:()=>window.location.href="/forms",style:{minWidth:"120px"},children:"Go to Home"}),i.jsx("button",{className:"btn btn-outline-secondary",onClick:()=>{sessionStorage.clear(),localStorage.clear(),window.location.href="/"},style:{minWidth:"120px"},children:"Sign Out"})]})]})):i.jsx("div",{children:i.jsx(Qx,{formData:t,setFormData:e,showNotification:n,commitInfo:r})})};function YA(){const[t,e]=b.useState({}),[n,r]=b.useState(null),[s]=b.useState(!1),{showNotification:o,removeNotification:a}=To();return i.jsx(pg,{fallback:({error:l,componentStack:d})=>i.jsxs("div",{style:{padding:"20px",fontFamily:"monospace"},children:[i.jsx("h2",{children:"An unexpected fatal error occurred"}),i.jsx("p",{children:i.jsx("strong",{children:"Please post this error information in the PHMC Discord server:"})}),i.jsxs("div",{style:{backgroundColor:"#114170ff",border:"1px solid #dee2e6",borderRadius:"4px",padding:"15px",marginTop:"10px",whiteSpace:"pre-wrap",fontSize:"12px",maxHeight:"400px",overflow:"auto"},children:[i.jsx("strong",{children:"Error:"})," ",l?.message||"Unknown error",l?.stack&&i.jsxs(i.Fragment,{children:[i.jsx("br",{}),i.jsx("br",{}),i.jsx("strong",{children:"Stack Trace:"}),i.jsx("br",{}),l.stack]}),d&&i.jsxs(i.Fragment,{children:[i.jsx("br",{}),i.jsx("br",{}),i.jsx("strong",{children:"Component Stack:"}),i.jsx("br",{}),d]})]}),i.jsx("button",{onClick:()=>window.location.reload(),style:{marginTop:"15px",padding:"10px 20px",backgroundColor:"#007bff",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Reload Page"})]}),onError:(l,d)=>{Uf({message:l.message,stack:d,source:"React ErrorBoundary",isButtonClickError:!1})},children:i.jsx(jf,{children:i.jsx(tN,{setFormData:e,setLastWebhookIdentifier:r,showNotification:o,children:i.jsx(Df,{children:i.jsx(J0,{children:i.jsx(fg,{children:i.jsx(b.Suspense,{fallback:i.jsx(pl,{}),children:i.jsxs(gg,{children:[i.jsx(zs,{path:"/",element:i.jsx(qA,{formData:t,setFormData:e,lastWebhookIdentifier:n,setLastWebhookIdentifier:r,showNotification:o,removeNotification:a,setShowAdblockNotification:s})}),i.jsx(zs,{path:"/login",element:i.jsx(fN,{})}),i.jsx(zs,{path:"/auth/gta/callback",element:i.jsx(gN,{})}),i.jsx(zs,{path:"/auth/gta/diagnostic",element:i.jsx(bN,{})}),i.jsx(zs,{path:"/admin",element:i.jsx(yN,{children:i.jsx(VA,{formData:t,setFormData:e,showNotification:o})})}),i.jsx(zs,{path:"*",element:i.jsx(Lh,{to:"/",replace:!0})})]})})})})})})})})}const KA={position:"fixed",top:"20px",right:"20px",padding:"15px",backgroundColor:"#f85149",color:"white",borderRadius:"5px",zIndex:9999,display:"flex",alignItems:"center",gap:"15px",boxShadow:"0 4px 8px rgba(0,0,0,0.2)"},JA={fontSize:"1.5em"},XA={backgroundColor:"transparent",color:"white",border:"1px solid white",borderRadius:"3px",padding:"5px 10px",cursor:"pointer",fontWeight:"bold"};class QA extends b.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,n){console.error("Uncaught error:",e,n),Ze(e,{extra:n})}handleOkClick=()=>{this.setState({hasError:!1,error:null})};render(){return this.state.hasError?i.jsxs(i.Fragment,{children:[i.jsxs("div",{style:KA,children:[i.jsx("div",{style:JA,children:i.jsx("i",{className:"fas fa-exclamation-triangle"})}),i.jsx("span",{children:"FATAL ERROR! Please ping Alyson in the PHMC Discord or post a Bug Report!"}),i.jsx("button",{onClick:this.handleOkClick,style:XA,children:"OK"})]}),this.props.children]}):this.props.children}}const Uc=new Map,Bc=2,ZA=t=>{const e=/Loading chunk [\d]+ failed/;if(t?.message&&e.test(t.message)){const r=t.message.match(/Loading chunk ([\d]+) failed/)?.[1],s=Uc.get(r)||0;return s<Bc?(Uc.set(r,s+1),console.warn(`Chunk ${r} failed to load. Retry attempt ${s+1}/${Bc}. Reloading page...`),setTimeout(()=>{window.location.reload()},1e3),!0):(console.error(`Chunk ${r} failed to load after ${Bc} retries. This may indicate a deployment issue or network problem.`),Uc.delete(r),window.confirm(`Unable to load part of the application. This might be due to a recent update.

Click OK to clear your cache and reload, or Cancel to continue (not recommended).`)&&("caches"in window?caches.keys().then(o=>{o.forEach(a=>caches.delete(a))}).finally(()=>{window.location.reload(!0)}):window.location.reload(!0)),!0)}return!1};window.addEventListener("unhandledrejection",t=>{ZA(t.reason)&&t.preventDefault()});let eI=null,ca=!1;const Mh=()=>{try{const t=localStorage.getItem("bbCodeVersion");if(!t)return"Unknown";const e=parseInt(t,10);return{1:"Death Report",2:"Coroner Email",3:"Patient File - Advanced",4:"Autopsy Report",5:"Surgery Report",6:"Physical Evaluation (PHMC)",7:"Physical Evaluation (PBC)",8:"Death Certificate",9:"Obs Main File",10:"Obs Follow Up",11:"Mass Fatality Report",12:"Gynecology - Main File",13:"Gynecology - Add Reply",14:"Mental Health - PHMC",16:"Mental Health | PBC",18:"Agency Feedback",19:"Emergency Room Protocols",20:"Consultation Notes (PHMC)",21:"Consultation Notes (PBC)",22:"Commentary Note (PHMC)",23:"Commentary Note (PBC)",24:"Medical Record Release",25:"Patient File - Basic",26:"Medical Record Update",27:"Email Forms",28:"Psychological Evaluation PHMC",29:"Psychological Evaluation PBC",35:"PHMC - Email Generator",50:"PHMC - Physician Careers",51:"PHMC - Psych Careers",52:"PHMC - Admin Careers",53:"PHMC - Nursing Careers",54:"PHMC - Coroner Careers",55:"PHMC - EMS Careers"}[e]||`Form v${e}`}catch(t){return console.warn("Error determining form type:",t),"Unknown"}};bg({dsn:"https://5dfa5683e8dc9adbc7f30e44757995c7@o4509126124765184.ingest.de.sentry.io/4509126125813840",sendDefaultPii:!0,integrations:[yg(),vg({maskAllText:!1,blockAllMedia:!1})],tracesSampleRate:1,replaysSessionSampleRate:.1,replaysOnErrorSampleRate:1,tracePropagationTargets:["localhost","https://forms.phmc.io",/^\//]});console.log("Sentry has been initialized.");window.onerror=(t,e,n,r,s)=>{if(typeof t=="string"&&(t.includes("ResizeObserver loop limit exceeded")||t.includes("Loading chunk")&&t.includes("failed")))return!0;let o=!1,a=!1,l="Unknown";if(s&&typeof s.stack=="string"){const u=s.stack;(u.includes("onClick")||u.includes("handleClick"))&&(o=!0),(u.includes("onChange")||u.includes("handleChange")||u.includes("onInput")||u.includes("handleInput")||u.includes("onBlur")||u.includes("handleBlur"))&&(a=!0,u.includes("Select")||u.includes("react-select")?l="Select/Dropdown":u.includes("textarea")||u.includes("Textarea")?l="Textarea":u.includes("checkbox")||u.includes("Checkbox")?l="Checkbox":u.includes("radio")||u.includes("Radio")?l="Radio":l="Text/Input")}_d(Ff,"exception",{description:t,fatal:!0,is_button_error:o,is_input_error:a,error_message:String(t).substring(0,100),stack:s&&s.stack?String(s.stack).substring(0,100):void 0,source:e||void 0,lineno:n||void 0,colno:r||void 0,form_type:Mh(),input_field_type:l});const d={message:t,source:e,lineno:n,colno:r,stack:s?s.stack:"N/A",isButtonClickError:o,isInputFieldError:a,inputFieldType:l,currentFormType:Mh(),lastInputInteraction:eI};return Uf(d,ca),!1};const tI=()=>{const{showNotification:t,removeNotification:e}=To();return b.useEffect(()=>{(async()=>{await new Promise(a=>setTimeout(a,100));const r=Cg();if(!r||!r.getDsn()){console.error("Sentry client or DSN not found. Sentry reporting will fail."),ca=!0;return}const s=r.getDsn(),o=`${s.protocol}://${s.host}/api/${s.projectId}/envelope/`;try{await fetch(o,{method:"HEAD",mode:"no-cors"}),console.log("Sentry connectivity check successful. Discord reports will show Sentry as 'Active'."),ca=!1}catch(a){console.warn("Sentry connectivity check failed. Sentry may be blocked. Discord reports will reflect this. Notification dispatched to User",a),ca=!0;const l=t("It looks like you have an adblocker enabled. While we understand your preference, adblockers can sometimes interfere with the functionality of this site, especially with our error tracking tools. To help us track down bugs and improve the site, please consider disabling your adblocker for this domain. Your cooperation is greatly appreciated!","exclamation-triangle",0,[{label:"Dismiss",handler:()=>e(l)}])}})()},[]),i.jsx(YA,{})},nI=document.getElementById("root"),rI=_g.createRoot(nI);rI.render(i.jsx(QA,{children:i.jsx(Df,{children:i.jsx(jf,{children:i.jsx(bA,{children:i.jsx(vA,{children:i.jsx(wA,{children:i.jsx(tI,{})})})})})})}));export{bl as G,Jf as a,kx as b,rg as c,To as d,Ee as e,gr as f,lI as g,xa as h,ze as i,qi as j,Gn as k,At as l,wr as m,cI as n,aI as o,Vs as p,fl as q,fe as r,bC as s,Li as t,ur as u,gl as v,Yf as w,Id as x};
//# sourceMappingURL=index-134ytugi.js.map
