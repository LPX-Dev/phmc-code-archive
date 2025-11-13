const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/deathReport-BtAm2t4_.js","assets/bootstrap-BmKVvN9Q.js","assets/react-7MU6i0XA.js","assets/ImagePreview-Dm01e4sS.js","assets/EmployeeCredentialsSection-B_7rDo0X.js","assets/vendor-URVEFS8n.js","assets/CoronerEmail-BbPugudr.js","assets/PhysEvalPHMC-CXqNdp-n.js","assets/GeneralConsult-IfV8f5st.js","assets/EmergencyForm-DfeME4N_.js","assets/devTest-B8FvJgpu.js","assets/CommNotePHMC-B2RIYRKa.js","assets/CommNotePBC-BYUbqeQa.js","assets/PatientFile-DhzUlckh.js","assets/CharacterSelector-CoXG60gL.js","assets/phmc-tooltips-DSm5XPCd.css","assets/MentalHealth-CD8TOnGW.js","assets/EmailInternal-BIs1ga2f.js","assets/Surgical-CknbbMXf.js","assets/MedicalRecords-Cjm2ipXA.js","assets/Shrink-B6QF0Pns.js","assets/Autopsy-D84Z_G4J.js","assets/Certificate-DBb_ECBa.js","assets/MassFatality-BvlWSO6j.js","assets/DeathRecord-CKaZBSMl.js","assets/SicknessEmail-BdgktYdD.js","assets/Physician-ClZmVcH7.js","assets/Psych-BXot0KJo.js","assets/Admin-Bn9o3FDR.js","assets/Nursing-BcLdDMF1.js","assets/Coroner-BbdZlVEI.js","assets/Ems-_U9Ul6Qp.js","assets/SavedReportsModal-DTjJTW77.js","assets/AgencyGroupSelectorModal-C0ozLdBW.js","assets/AgencySelector-C79PUIAM.js","assets/OnboardingModal-CoRjqixI.js","assets/Footer-l6YCAUm-.js","assets/Footer-R0gwHjSw.css","assets/HeaderInfo-Bgg7_NBI.js","assets/BusinessCardModal-DVka2cUK.js","assets/BusinessCardModal-46kiWjjW.css","assets/EmsAmaModal-BzArq0Fr.js","assets/EmsAmaModal-JuhzJSqW.css","assets/EasterEggModal-JHUKQqi1.js","assets/SwitchableFormsModal-DQ4Aavmz.js","assets/EmployeeModal-BaETqt5l.js","assets/RecruitmentStatusDisplay-5tM6x_43.js","assets/FeatureRequestModal-wsSFun6f.js","assets/FeatureRequestModal-DBP6z2ga.css","assets/FormImageLink-Do24PBOW.js","assets/EmsBingoModal-DzV7g_bg.js","assets/EmsBingoModal-CZNfhoO9.css","assets/EmployeeDetailsModal-Dbv0UGV4.js","assets/BasicPatientFile-CPaBP31S.js"])))=>i.map(i=>d[i]);
import{r as b,j as i,B as ce,F as he,S as tt,e as _l,M as Ct,L as Od,A as Nt,C as pn,f as Yo,T as yg,g as Md,h as yr,i as ta,d as vg,D as Fn}from"./bootstrap-BmKVvN9Q.js";import{S as Hh,l as jd,c as nt,u as Ga,a as _g,N as Gh,b as en,d as Cg,_ as Pe,e as Wh,E as Sg,H as wg,R as Eg,f as Vs,i as Ng,g as xg,r as Ag,h as Ig,j as Tg}from"./vendor-URVEFS8n.js";import"./react-7MU6i0XA.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const Rg=()=>{};var Ld={};/**
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
 */const zh={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const oe=function(t,e){if(!t)throw fi(e)},fi=function(t){return new Error("Firebase Database ("+zh.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const qh=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},kg=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=t[n++];e[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=t[n++],a=t[n++],l=t[n++],d=((s&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(d>>10)),e[r++]=String.fromCharCode(56320+(d&1023))}else{const o=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return e.join("")},Cl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const o=t[s],a=s+1<t.length,l=a?t[s+1]:0,d=s+2<t.length,u=d?t[s+2]:0,g=o>>2,f=(o&3)<<4|l>>4;let p=(l&15)<<2|u>>6,S=u&63;d||(S=64,a||(p=64)),r.push(n[g],n[f],n[p],n[S])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(qh(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):kg(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const o=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,o==null||l==null||u==null||f==null)throw new Fg;const p=o<<2|l>>4;if(r.push(p),u!==64){const S=l<<4&240|u>>2;if(r.push(S),f!==64){const _=u<<6&192|f;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Fg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Vh=function(t){const e=qh(t);return Cl.encodeByteArray(e,!0)},da=function(t){return Vh(t).replace(/\./g,"")},ua=function(t){try{return Cl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Pg(t){return Yh(void 0,t)}function Yh(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!$g(n)||(t[n]=Yh(t[n],e[n]));return t}function $g(t){return t!=="__proto__"}/**
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
 */function Dg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Og=()=>Dg().__FIREBASE_DEFAULTS__,Mg=()=>{if(typeof process>"u"||typeof Ld>"u")return;const t=Ld.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},jg=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ua(t[1]);return e&&JSON.parse(e)},Sl=()=>{try{return Rg()||Og()||Mg()||jg()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Kh=t=>Sl()?.emulatorHosts?.[t],Jh=t=>{const e=Kh(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Xh=()=>Sl()?.config,Qh=t=>Sl()?.[`_${t}`];/**
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
 */class lo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function es(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function wl(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function Lg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...t};return[da(JSON.stringify(n)),da(JSON.stringify(a)),""].join(".")}const ji={};function Ug(){const t={prod:[],emulator:[]};for(const e of Object.keys(ji))ji[e]?t.emulator.push(e):t.prod.push(e);return t}function Bg(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Ud=!1;function El(t,e){if(typeof window>"u"||typeof document>"u"||!es(window.location.host)||ji[t]===e||ji[t]||Ud)return;ji[t]=e;function n(p){return`__firebase__banner__${p}`}const r="__firebase__banner",o=Ug().prod.length>0;function a(){const p=document.getElementById(r);p&&p.remove()}function l(p){p.style.display="flex",p.style.background="#7faaf0",p.style.position="fixed",p.style.bottom="5px",p.style.left="5px",p.style.padding=".5em",p.style.borderRadius="5px",p.style.alignItems="center"}function d(p,S){p.setAttribute("width","24"),p.setAttribute("id",S),p.setAttribute("height","24"),p.setAttribute("viewBox","0 0 24 24"),p.setAttribute("fill","none"),p.style.marginLeft="-6px"}function u(){const p=document.createElement("span");return p.style.cursor="pointer",p.style.marginLeft="16px",p.style.fontSize="24px",p.innerHTML=" &times;",p.onclick=()=>{Ud=!0,a()},p}function g(p,S){p.setAttribute("id",S),p.innerText="Learn more",p.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",p.setAttribute("target","__blank"),p.style.paddingLeft="5px",p.style.textDecoration="underline"}function f(){const p=Bg(r),S=n("text"),_=document.getElementById(S)||document.createElement("span"),I=n("learnmore"),F=document.getElementById(I)||document.createElement("a"),P=n("preprendIcon"),k=document.getElementById(P)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(p.created){const D=p.element;l(D),g(F,I);const R=u();d(k,P),D.append(k,_,F,R),document.body.appendChild(D)}o?(_.innerText="Preview backend disconnected.",k.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function ln(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Nl(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ln())}function Hg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Zh(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function em(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Gg(){const t=ln();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Wg(){return zh.NODE_ADMIN===!0}function tm(){try{return typeof indexedDB=="object"}catch{return!1}}function nm(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(n){e(n)}})}function zg(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const qg="FirebaseError";class On extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=qg,Object.setPrototypeOf(this,On.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Rs.prototype.create)}}class Rs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,o=this.errors[e],a=o?Vg(o,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new On(s,l,r)}}function Vg(t,e){return t.replace(Yg,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Yg=/\{\$([^}]+)}/g;/**
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
 */function Ji(t){return JSON.parse(t)}function Ut(t){return JSON.stringify(t)}/**
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
 */const rm=function(t){let e={},n={},r={},s="";try{const o=t.split(".");e=Ji(ua(o[0])||""),n=Ji(ua(o[1])||""),s=o[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},Kg=function(t){const e=rm(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Jg=function(t){const e=rm(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function lr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ai(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Wc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ha(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function Kr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const o=t[s],a=e[s];if(Bd(o)&&Bd(a)){if(!Kr(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Bd(t){return t!==null&&typeof t=="object"}/**
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
 */function gi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function $i(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,o]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(o)}}),e}function Di(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class Xg{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const p=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(p<<1|p>>>31)&4294967295}let s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],d=this.chain_[4],u,g;for(let f=0;f<80;f++){f<40?f<20?(u=l^o&(a^l),g=1518500249):(u=o^a^l,g=1859775393):f<60?(u=o&a|l&(o|a),g=2400959708):(u=o^a^l,g=3395469782);const p=(s<<5|s>>>27)+u+d+g+r[f]&4294967295;d=l,l=a,a=(o<<30|o>>>2)&4294967295,o=s,s=p}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+d&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const o=this.buf_;let a=this.inbuf_;for(;s<n;){if(a===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(o[a]=e.charCodeAt(s),++a,++s,a===this.blockSize){this.compress_(o),a=0;break}}else for(;s<n;)if(o[a]=e[s],++a,++s,a===this.blockSize){this.compress_(o),a=0;break}}this.inbuf_=a,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let o=24;o>=0;o-=8)e[r]=this.chain_[s]>>o&255,++r;return e}}function Qg(t,e){const n=new Zg(t,e);return n.subscribe.bind(n)}class Zg{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");eb(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=bc),s.error===void 0&&(s.error=bc),s.complete===void 0&&(s.complete=bc);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function eb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function bc(){}function Wa(t,e){return`${t} failed: ${e} argument `}/**
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
 */const tb=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const o=s-55296;r++,oe(r<t.length,"Surrogate pair missing trail surrogate.");const a=t.charCodeAt(r)-56320;s=65536+(o<<10)+a}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},za=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const nb=1e3,rb=2,sb=14400*1e3,ib=.5;function Hd(t,e=nb,n=rb){const r=e*Math.pow(n,t),s=Math.round(ib*r*(Math.random()-.5)*2);return Math.min(sb,r+s)}/**
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
 */function Tt(t){return t&&t._delegate?t._delegate:t}class wn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ps="[DEFAULT]";/**
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
 */class ob{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new lo;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cb(e))try{this.getOrInitializeService({instanceIdentifier:ps})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(e=ps){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ps){return this.instances.has(e)}getOptions(e=ps){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&a.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ab(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ps){return this.component?this.component.multipleInstances?e:ps:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ab(t){return t===ps?void 0:t}function cb(t){return t.instantiationMode==="EAGER"}/**
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
 */class lb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ob(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var dt;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(dt||(dt={}));const db={debug:dt.DEBUG,verbose:dt.VERBOSE,info:dt.INFO,warn:dt.WARN,error:dt.ERROR,silent:dt.SILENT},ub=dt.INFO,hb={[dt.DEBUG]:"log",[dt.VERBOSE]:"log",[dt.INFO]:"info",[dt.WARN]:"warn",[dt.ERROR]:"error"},mb=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=hb[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class uo{constructor(e){this.name=e,this._logLevel=ub,this._logHandler=mb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in dt))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?db[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,dt.DEBUG,...e),this._logHandler(this,dt.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,dt.VERBOSE,...e),this._logHandler(this,dt.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,dt.INFO,...e),this._logHandler(this,dt.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,dt.WARN,...e),this._logHandler(this,dt.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,dt.ERROR,...e),this._logHandler(this,dt.ERROR,...e)}}const pb=(t,e)=>e.some(n=>t instanceof n);let Gd,Wd;function fb(){return Gd||(Gd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gb(){return Wd||(Wd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sm=new WeakMap,zc=new WeakMap,im=new WeakMap,yc=new WeakMap,xl=new WeakMap;function bb(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",o),t.removeEventListener("error",a)},o=()=>{n(Wr(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",o),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&sm.set(n,t)}).catch(()=>{}),xl.set(e,t),e}function yb(t){if(zc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",a),t.removeEventListener("abort",a)},o=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",o),t.addEventListener("error",a),t.addEventListener("abort",a)});zc.set(t,e)}let qc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return zc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||im.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Wr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function vb(t){qc=t(qc)}function _b(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(vc(this),e,...n);return im.set(r,e.sort?e.sort():[e]),Wr(r)}:gb().includes(t)?function(...e){return t.apply(vc(this),e),Wr(sm.get(this))}:function(...e){return Wr(t.apply(vc(this),e))}}function Cb(t){return typeof t=="function"?_b(t):(t instanceof IDBTransaction&&yb(t),pb(t,fb())?new Proxy(t,qc):t)}function Wr(t){if(t instanceof IDBRequest)return bb(t);if(yc.has(t))return yc.get(t);const e=Cb(t);return e!==t&&(yc.set(t,e),xl.set(e,t)),e}const vc=t=>xl.get(t);function om(t,e,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(t,e),l=Wr(a);return r&&a.addEventListener("upgradeneeded",d=>{r(Wr(a.result),d.oldVersion,d.newVersion,Wr(a.transaction),d)}),n&&a.addEventListener("blocked",d=>n(d.oldVersion,d.newVersion,d)),l.then(d=>{o&&d.addEventListener("close",()=>o()),s&&d.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const Sb=["get","getKey","getAll","getAllKeys","count"],wb=["put","add","delete","clear"],_c=new Map;function zd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(_c.get(e))return _c.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=wb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Sb.includes(n)))return;const o=async function(a,...l){const d=this.transaction(a,s?"readwrite":"readonly");let u=d.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&d.done]))[0]};return _c.set(e,o),o}vb(t=>({...t,get:(e,n,r)=>zd(e,n)||t.get(e,n,r),has:(e,n)=>!!zd(e,n)||t.has(e,n)}));/**
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
 */class Eb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Nb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Nb(t){return t.getComponent()?.type==="VERSION"}const Vc="@firebase/app",qd="0.14.5";/**
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
 */const Ar=new uo("@firebase/app"),xb="@firebase/app-compat",Ab="@firebase/analytics-compat",Ib="@firebase/analytics",Tb="@firebase/app-check-compat",Rb="@firebase/app-check",kb="@firebase/auth",Fb="@firebase/auth-compat",Pb="@firebase/database",$b="@firebase/data-connect",Db="@firebase/database-compat",Ob="@firebase/functions",Mb="@firebase/functions-compat",jb="@firebase/installations",Lb="@firebase/installations-compat",Ub="@firebase/messaging",Bb="@firebase/messaging-compat",Hb="@firebase/performance",Gb="@firebase/performance-compat",Wb="@firebase/remote-config",zb="@firebase/remote-config-compat",qb="@firebase/storage",Vb="@firebase/storage-compat",Yb="@firebase/firestore",Kb="@firebase/ai",Jb="@firebase/firestore-compat",Xb="firebase",Qb="12.5.0";/**
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
 */const Yc="[DEFAULT]",Zb={[Vc]:"fire-core",[xb]:"fire-core-compat",[Ib]:"fire-analytics",[Ab]:"fire-analytics-compat",[Rb]:"fire-app-check",[Tb]:"fire-app-check-compat",[kb]:"fire-auth",[Fb]:"fire-auth-compat",[Pb]:"fire-rtdb",[$b]:"fire-data-connect",[Db]:"fire-rtdb-compat",[Ob]:"fire-fn",[Mb]:"fire-fn-compat",[jb]:"fire-iid",[Lb]:"fire-iid-compat",[Ub]:"fire-fcm",[Bb]:"fire-fcm-compat",[Hb]:"fire-perf",[Gb]:"fire-perf-compat",[Wb]:"fire-rc",[zb]:"fire-rc-compat",[qb]:"fire-gcs",[Vb]:"fire-gcs-compat",[Yb]:"fire-fst",[Jb]:"fire-fst-compat",[Kb]:"fire-vertex","fire-js":"fire-js",[Xb]:"fire-js-all"};/**
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
 */const ma=new Map,ey=new Map,Kc=new Map;function Vd(t,e){try{t.container.addComponent(e)}catch(n){Ar.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function $n(t){const e=t.name;if(Kc.has(e))return Ar.debug(`There were multiple attempts to register component ${e}.`),!1;Kc.set(e,t);for(const n of ma.values())Vd(n,t);for(const n of ey.values())Vd(n,t);return!0}function ts(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Cn(t){return t==null?!1:t.settings!==void 0}/**
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
 */const ty={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},zr=new Rs("app","Firebase",ty);/**
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
 */class ny{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new wn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw zr.create("app-deleted",{appName:this._name})}}/**
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
 */const ks=Qb;function am(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Yc,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw zr.create("bad-app-name",{appName:String(s)});if(n||(n=Xh()),!n)throw zr.create("no-options");const o=ma.get(s);if(o){if(Kr(n,o.options)&&Kr(r,o.config))return o;throw zr.create("duplicate-app",{appName:s})}const a=new lb(s);for(const d of Kc.values())a.addComponent(d);const l=new ny(n,r,a);return ma.set(s,l),l}function qa(t=Yc){const e=ma.get(t);if(!e&&t===Yc&&Xh())return am();if(!e)throw zr.create("no-app",{appName:t});return e}function Zt(t,e,n){let r=Zb[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ar.warn(a.join(" "));return}$n(new wn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const ry="firebase-heartbeat-database",sy=1,Xi="firebase-heartbeat-store";let Cc=null;function cm(){return Cc||(Cc=om(ry,sy,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Xi)}catch(n){console.warn(n)}}}}).catch(t=>{throw zr.create("idb-open",{originalErrorMessage:t.message})})),Cc}async function iy(t){try{const n=(await cm()).transaction(Xi),r=await n.objectStore(Xi).get(lm(t));return await n.done,r}catch(e){if(e instanceof On)Ar.warn(e.message);else{const n=zr.create("idb-get",{originalErrorMessage:e?.message});Ar.warn(n.message)}}}async function Yd(t,e){try{const r=(await cm()).transaction(Xi,"readwrite");await r.objectStore(Xi).put(e,lm(t)),await r.done}catch(n){if(n instanceof On)Ar.warn(n.message);else{const r=zr.create("idb-set",{originalErrorMessage:n?.message});Ar.warn(r.message)}}}function lm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const oy=1024,ay=30;class cy{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new dy(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Kd();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>ay){const s=uy(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Ar.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Kd(),{heartbeatsToSend:n,unsentEntries:r}=ly(this._heartbeatsCache.heartbeats),s=da(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return Ar.warn(e),""}}}function Kd(){return new Date().toISOString().substring(0,10)}function ly(t,e=oy){const n=[];let r=t.slice();for(const s of t){const o=n.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),Jd(n)>e){o.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Jd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class dy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return tm()?nm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await iy(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Yd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Yd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Jd(t){return da(JSON.stringify({version:2,heartbeats:t})).length}function uy(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function hy(t){$n(new wn("platform-logger",e=>new Eb(e),"PRIVATE")),$n(new wn("heartbeat",e=>new cy(e),"PRIVATE")),Zt(Vc,qd,t),Zt(Vc,qd,"esm2020"),Zt("fire-js","")}hy("");var my="firebase",py="12.5.0";/**
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
 */Zt(my,py,"app");var Xd={};const Qd="@firebase/database",Zd="1.1.0";/**
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
 */let dm="";function fy(t){dm=t}/**
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
 */class gy{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ut(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ji(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class by{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return lr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const um=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new gy(e)}}catch{}return new by},bs=um("localStorage"),yy=um("sessionStorage");/**
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
 */const Qs=new uo("@firebase/database"),vy=(function(){let t=1;return function(){return t++}})(),hm=function(t){const e=tb(t),n=new Xg;n.update(e);const r=n.digest();return Cl.encodeByteArray(r)},ho=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=ho.apply(null,r):typeof r=="object"?e+=Ut(r):e+=r,e+=" "}return e};let Li=null,eu=!0;const _y=function(t,e){oe(!0,"Can't turn on custom loggers persistently."),Qs.logLevel=dt.VERBOSE,Li=Qs.log.bind(Qs)},Vt=function(...t){if(eu===!0&&(eu=!1,Li===null&&yy.get("logging_enabled")===!0&&_y()),Li){const e=ho.apply(null,t);Li(e)}},mo=function(t){return function(...e){Vt(t,...e)}},Jc=function(...t){const e="FIREBASE INTERNAL ERROR: "+ho(...t);Qs.error(e)},Ir=function(...t){const e=`FIREBASE FATAL ERROR: ${ho(...t)}`;throw Qs.error(e),new Error(e)},an=function(...t){const e="FIREBASE WARNING: "+ho(...t);Qs.warn(e)},Cy=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&an("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Al=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Sy=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ci="[MIN_NAME]",ws="[MAX_NAME]",Fs=function(t,e){if(t===e)return 0;if(t===ci||e===ws)return-1;if(e===ci||t===ws)return 1;{const n=tu(t),r=tu(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},wy=function(t,e){return t===e?0:t<e?-1:1},Ti=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ut(e))},Il=function(t){if(typeof t!="object"||t===null)return Ut(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Ut(e[r]),n+=":",n+=Il(t[e[r]]);return n+="}",n},mm=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function Yt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const pm=function(t){oe(!Al(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,o,a,l,d;t===0?(o=0,a=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),o=l+r,a=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(o=0,a=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(d=n;d;d-=1)u.push(a%2?1:0),a=Math.floor(a/2);for(d=e;d;d-=1)u.push(o%2?1:0),o=Math.floor(o/2);u.push(s?1:0),u.reverse();const g=u.join("");let f="";for(d=0;d<64;d+=8){let p=parseInt(g.substr(d,8),2).toString(16);p.length===1&&(p="0"+p),f=f+p}return f.toLowerCase()},Ey=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Ny=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function xy(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const Ay=new RegExp("^-?(0*)\\d{1,10}$"),Iy=-2147483648,Ty=2147483647,tu=function(t){if(Ay.test(t)){const e=Number(t);if(e>=Iy&&e<=Ty)return e}return null},bi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw an("Exception was thrown by user callback.",n),e},Math.floor(0))}},Ry=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ui=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class ky{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Cn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n?.getImmediate({optional:!0}),this.appCheck||n?.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(n=>n.addTokenListener(e))}notifyForInvalidToken(){an(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Fy{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Vt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',an(e)}}class na{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}na.OWNER="owner";/**
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
 */const Tl="5",fm="v",gm="s",bm="r",ym="f",vm=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,_m="ls",Cm="p",Xc="ac",Sm="websocket",wm="long_polling";/**
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
 */class Em{constructor(e,n,r,s,o=!1,a="",l=!1,d=!1,u=null){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=o,this.persistenceKey=a,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=d,this.emulatorOptions=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=bs.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&bs.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Py(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Nm(t,e,n){oe(typeof e=="string","typeof type must == string"),oe(typeof n=="object","typeof params must == object");let r;if(e===Sm)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===wm)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Py(t)&&(n.ns=t.namespace);const s=[];return Yt(n,(o,a)=>{s.push(o+"="+a)}),r+s.join("&")}/**
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
 */class $y{constructor(){this.counters_={}}incrementCounter(e,n=1){lr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Pg(this.counters_)}}/**
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
 */const Sc={},wc={};function Rl(t){const e=t.toString();return Sc[e]||(Sc[e]=new $y),Sc[e]}function Dy(t,e){const n=t.toString();return wc[n]||(wc[n]=e()),wc[n]}/**
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
 */class Oy{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&bi(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const nu="start",My="close",jy="pLPCommand",Ly="pRTLPCB",xm="id",Am="pw",Im="ser",Uy="cb",By="seg",Hy="ts",Gy="d",Wy="dframe",Tm=1870,Rm=30,zy=Tm-Rm,qy=25e3,Vy=3e4;class Js{constructor(e,n,r,s,o,a,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=o,this.transportSessionId=a,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=mo(e),this.stats_=Rl(n),this.urlFn=d=>(this.appCheckToken&&(d[Xc]=this.appCheckToken),Nm(n,wm,d))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Oy(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Vy)),Sy(()=>{if(this.isClosed_)return;this.scriptTagHolder=new kl((...o)=>{const[a,l,d,u,g]=o;if(this.incrementIncomingBytes_(o),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,a===nu)this.id=l,this.password=d;else if(a===My)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+a)},(...o)=>{const[a,l]=o;this.incrementIncomingBytes_(o),this.myPacketOrderer.handleResponse(a,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[nu]="t",r[Im]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[Uy]=this.scriptTagHolder.uniqueCallbackIdentifier),r[fm]=Tl,this.transportSessionId&&(r[gm]=this.transportSessionId),this.lastSessionId&&(r[_m]=this.lastSessionId),this.applicationId&&(r[Cm]=this.applicationId),this.appCheckToken&&(r[Xc]=this.appCheckToken),typeof location<"u"&&location.hostname&&vm.test(location.hostname)&&(r[bm]=ym);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Js.forceAllow_=!0}static forceDisallow(){Js.forceDisallow_=!0}static isAvailable(){return Js.forceAllow_?!0:!Js.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Ey()&&!Ny()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ut(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Vh(n),s=mm(r,zy);for(let o=0;o<s.length;o++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[o]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[Wy]="t",r[xm]=e,r[Am]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ut(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class kl{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=vy(),window[jy+this.uniqueCallbackIdentifier]=e,window[Ly+this.uniqueCallbackIdentifier]=n,this.myIFrame=kl.createIFrame_();let o="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(o='<script>document.domain="'+document.domain+'";<\/script>');const a="<html><body>"+o+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(a),this.myIFrame.doc.close()}catch(l){Vt("frame writing exception"),l.stack&&Vt(l.stack),Vt(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Vt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[xm]=this.myID,e[Am]=this.myPW,e[Im]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Rm+r.length<=Tm;){const a=this.pendingSegs.shift();r=r+"&"+By+s+"="+a.seg+"&"+Hy+s+"="+a.ts+"&"+Gy+s+"="+a.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(qy)),o=()=>{clearTimeout(s),r()};this.addTag(e,o)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Vt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const Yy=16384,Ky=45e3;let pa=null;typeof MozWebSocket<"u"?pa=MozWebSocket:typeof WebSocket<"u"&&(pa=WebSocket);class Wn{constructor(e,n,r,s,o,a,l){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=o,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=mo(this.connId),this.stats_=Rl(n),this.connURL=Wn.connectionURL_(n,a,l,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,o){const a={};return a[fm]=Tl,typeof location<"u"&&location.hostname&&vm.test(location.hostname)&&(a[bm]=ym),n&&(a[gm]=n),r&&(a[_m]=r),s&&(a[Xc]=s),o&&(a[Cm]=o),Nm(e,Sm,a)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,bs.set("previous_websocket_failure",!0);try{let r;Wg(),this.mySock=new pa(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Wn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&pa!==null&&!Wn.forceDisallow_}static previouslyFailed(){return bs.isInMemoryStorage||bs.get("previous_websocket_failure")===!0}markConnectionHealthy(){bs.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Ji(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(oe(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Ut(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=mm(n,Yy);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Ky))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Wn.responsesRequiredToBeHealthy=2;Wn.healthyTimeout=3e4;/**
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
 */class Qi{static get ALL_TRANSPORTS(){return[Js,Wn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Wn&&Wn.isAvailable();let r=n&&!Wn.previouslyFailed();if(e.webSocketOnly&&(n||an("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Wn];else{const s=this.transports_=[];for(const o of Qi.ALL_TRANSPORTS)o&&o.isAvailable()&&s.push(o);Qi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Qi.globalTransportInitialized_=!1;/**
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
 */const Jy=6e4,Xy=5e3,Qy=10*1024,Zy=100*1024,Ec="t",ru="d",ev="s",su="r",tv="e",iu="o",ou="a",au="n",cu="p",nv="h";class rv{constructor(e,n,r,s,o,a,l,d,u,g){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=o,this.onMessage_=a,this.onReady_=l,this.onDisconnect_=d,this.onKill_=u,this.lastSessionId=g,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=mo("c:"+this.id+":"),this.transportManager_=new Qi(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Ui(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Zy?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Qy?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ec in e){const n=e[Ec];n===ou?this.upgradeIfSecondaryHealthy_():n===su?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===iu&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ti("t",e),r=Ti("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:cu,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ou,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:au,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ti("t",e),r=Ti("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ti(Ec,e);if(ru in e){const r=e[ru];if(n===nv){const s={...r};this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===au){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===ev?this.onConnectionShutdown_(r):n===su?this.onReset_(r):n===tv?Jc("Server Error: "+r):n===iu?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Jc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Tl!==r&&an("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ui(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Jy))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ui(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Xy))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:cu,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(bs.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class km{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Fm{constructor(e){this.allowedEvents_=e,this.listeners_={},oe(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let o=0;o<s.length;o++)if(s[o].callback===n&&(!r||r===s[o].context)){s.splice(o,1);return}}validateEventType_(e){oe(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class fa extends Fm{static getInstance(){return new fa}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Nl()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return oe(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const lu=32,du=768;class pt{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function st(){return new pt("")}function Ve(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Jr(t){return t.pieces_.length-t.pieceNum_}function bt(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new pt(t.pieces_,e)}function Fl(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function sv(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Zi(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Pm(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new pt(e,0)}function xt(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof pt)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new pt(n,0)}function Xe(t){return t.pieceNum_>=t.pieces_.length}function on(t,e){const n=Ve(t),r=Ve(e);if(n===null)return e;if(n===r)return on(bt(t),bt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function iv(t,e){const n=Zi(t,0),r=Zi(e,0);for(let s=0;s<n.length&&s<r.length;s++){const o=Fs(n[s],r[s]);if(o!==0)return o}return n.length===r.length?0:n.length<r.length?-1:1}function Pl(t,e){if(Jr(t)!==Jr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Pn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Jr(t)>Jr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class ov{constructor(e,n){this.errorPrefix_=n,this.parts_=Zi(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=za(this.parts_[r]);$m(this)}}function av(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=za(e),$m(t)}function cv(t){const e=t.parts_.pop();t.byteLength_-=za(e),t.parts_.length>0&&(t.byteLength_-=1)}function $m(t){if(t.byteLength_>du)throw new Error(t.errorPrefix_+"has a key path longer than "+du+" bytes ("+t.byteLength_+").");if(t.parts_.length>lu)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+lu+") or object contains a cycle "+fs(t))}function fs(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class $l extends Fm{static getInstance(){return new $l}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return oe(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Ri=1e3,lv=300*1e3,uu=30*1e3,dv=1.3,uv=3e4,hv="server_kill",hu=3;class Nr extends km{constructor(e,n,r,s,o,a,l,d){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=o,this.authTokenProvider_=a,this.appCheckTokenProvider_=l,this.authOverride_=d,this.id=Nr.nextPersistentConnectionId_++,this.log_=mo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ri,this.maxReconnectDelay_=lv,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,d)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");$l.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&fa.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,o={r:s,a:e,b:n};this.log_(Ut(o)),oe(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(o),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new lo,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:a=>{const l=a.d;a.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const o=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(o),n.promise}listen(e,n,r,s){this.initConnection_();const o=e._queryIdentifier,a=e._path.toString();this.log_("Listen called for "+a+" "+o),this.listens.has(a)||this.listens.set(a,new Map),oe(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),oe(!this.listens.get(a).has(o),"listen() called twice for same path/queryId.");const l={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(a).set(o,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const o={p:r},a="q";e.tag&&(o.q=n._queryObject,o.t=e.tag),o.h=e.hashFn(),this.sendRequest(a,o,l=>{const d=l.d,u=l.s;Nr.warnOnListenWarnings_(d,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(u,d))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&lr(e,"w")){const r=ai(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',o=n._path.toString();an(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${o} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Jg(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=uu)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Kg(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const o=s.s,a=s.d||"error";this.authToken_===e&&(o==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(o,a))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),oe(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const o={p:e},a="n";s&&(o.q=r,o.t=s),this.sendRequest(a,o)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const o={p:n,d:r};this.log_("onDisconnect "+e,o),this.sendRequest(e,o,a=>{s&&setTimeout(()=>{s(a.s,a.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,o){this.initConnection_();const a={p:n,d:r};o!==void 0&&(a.h=o),this.outstandingPuts_.push({action:e,request:a,onComplete:s}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,o=>{this.log_(n+" response",o),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(o.s,o.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const o=r.d;this.log_("reportStats","Error sending stats: "+o)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ut(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Jc("Unrecognized action received from server: "+Ut(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){oe(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ri,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ri,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>uv&&(this.reconnectDelay_=Ri),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*dv)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Nr.nextConnectionId_++,o=this.lastSessionId;let a=!1,l=null;const d=function(){l?l.close():(a=!0,r())},u=function(f){oe(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(f)};this.realtime_={close:d,sendRequest:u};const g=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,p]=await Promise.all([this.authTokenProvider_.getToken(g),this.appCheckTokenProvider_.getToken(g)]);a?Vt("getToken() completed but was canceled"):(Vt("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=p&&p.token,l=new rv(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,S=>{an(S+" ("+this.repoInfo_.toString()+")"),this.interrupt(hv)},o))}catch(f){this.log_("Failed to get token: "+f),a||(this.repoInfo_.nodeAdmin&&an(f),d())}}}interrupt(e){Vt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Vt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Wc(this.interruptReasons_)&&(this.reconnectDelay_=Ri,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(o=>Il(o)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new pt(e).toString();let s;if(this.listens.has(r)){const o=this.listens.get(r);s=o.get(n),o.delete(n),o.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){Vt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=hu&&(this.reconnectDelay_=uu,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Vt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=hu&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+dm.replace(/\./g,"-")]=1,Nl()?e["framework.cordova"]=1:em()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=fa.getInstance().currentlyOnline();return Wc(this.interruptReasons_)&&e}}Nr.nextPersistentConnectionId_=0;Nr.nextConnectionId_=0;/**
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
 */class Ye{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Ye(e,n)}}/**
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
 */class Va{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new Ye(ci,e),s=new Ye(ci,n);return this.compare(r,s)!==0}minPost(){return Ye.MIN}}/**
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
 */let Ko;class Dm extends Va{static get __EMPTY_NODE(){return Ko}static set __EMPTY_NODE(e){Ko=e}compare(e,n){return Fs(e.name,n.name)}isDefinedOn(e){throw fi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Ye.MIN}maxPost(){return new Ye(ws,Ko)}makePost(e,n){return oe(typeof e=="string","KeyIndex indexValue must always be a string."),new Ye(e,Ko)}toString(){return".key"}}const Zs=new Dm;/**
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
 */class Jo{constructor(e,n,r,s,o=null){this.isReverse_=s,this.resultGenerator_=o,this.nodeStack_=[];let a=1;for(;!e.isEmpty();)if(e=e,a=n?r(e.key,n):1,s&&(a*=-1),a<0)this.isReverse_?e=e.left:e=e.right;else if(a===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ht{constructor(e,n,r,s,o){this.key=e,this.value=n,this.color=r??Ht.RED,this.left=s??fn.EMPTY_NODE,this.right=o??fn.EMPTY_NODE}copy(e,n,r,s,o){return new Ht(e??this.key,n??this.value,r??this.color,s??this.left,o??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const o=r(e,s.key);return o<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):o===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return fn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return fn.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ht.RED=!0;Ht.BLACK=!1;class mv{copy(e,n,r,s,o){return this}insert(e,n,r){return new Ht(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class fn{constructor(e,n=fn.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new fn(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ht.BLACK,null,null))}remove(e){return new fn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ht.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Jo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Jo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Jo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Jo(this.root_,null,this.comparator_,!0,e)}}fn.EMPTY_NODE=new mv;/**
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
 */function pv(t,e){return Fs(t.name,e.name)}function Dl(t,e){return Fs(t,e)}/**
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
 */let Qc;function fv(t){Qc=t}const Om=function(t){return typeof t=="number"?"number:"+pm(t):"string:"+t},Mm=function(t){if(t.isLeafNode()){const e=t.val();oe(typeof e=="string"||typeof e=="number"||typeof e=="object"&&lr(e,".sv"),"Priority must be a string or number.")}else oe(t===Qc||t.isEmpty(),"priority of unexpected type.");oe(t===Qc||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let mu;class Bt{static set __childrenNodeConstructor(e){mu=e}static get __childrenNodeConstructor(){return mu}constructor(e,n=Bt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,oe(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Mm(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Bt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Bt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Xe(e)?this:Ve(e)===".priority"?this.priorityNode_:Bt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Bt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=Ve(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(oe(r!==".priority"||Jr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Bt.__childrenNodeConstructor.EMPTY_NODE.updateChild(bt(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Om(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=pm(this.value_):e+=this.value_,this.lazyHash_=hm(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Bt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Bt.__childrenNodeConstructor?-1:(oe(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=Bt.VALUE_TYPE_ORDER.indexOf(n),o=Bt.VALUE_TYPE_ORDER.indexOf(r);return oe(s>=0,"Unknown leaf type: "+n),oe(o>=0,"Unknown leaf type: "+r),s===o?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:o-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Bt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let jm,Lm;function gv(t){jm=t}function bv(t){Lm=t}class yv extends Va{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),o=r.compareTo(s);return o===0?Fs(e.name,n.name):o}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Ye.MIN}maxPost(){return new Ye(ws,new Bt("[PRIORITY-POST]",Lm))}makePost(e,n){const r=jm(e);return new Ye(n,new Bt("[PRIORITY-POST]",r))}toString(){return".priority"}}const At=new yv;/**
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
 */const vv=Math.log(2);class _v{constructor(e){const n=o=>parseInt(Math.log(o)/vv,10),r=o=>parseInt(Array(o+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ga=function(t,e,n,r){t.sort(e);const s=function(d,u){const g=u-d;let f,p;if(g===0)return null;if(g===1)return f=t[d],p=n?n(f):f,new Ht(p,f.node,Ht.BLACK,null,null);{const S=parseInt(g/2,10)+d,_=s(d,S),I=s(S+1,u);return f=t[S],p=n?n(f):f,new Ht(p,f.node,Ht.BLACK,_,I)}},o=function(d){let u=null,g=null,f=t.length;const p=function(_,I){const F=f-_,P=f;f-=_;const k=s(F+1,P),D=t[F],R=n?n(D):D;S(new Ht(R,D.node,I,null,k))},S=function(_){u?(u.left=_,u=_):(g=_,u=_)};for(let _=0;_<d.count;++_){const I=d.nextBitIsOne(),F=Math.pow(2,d.count-(_+1));I?p(F,Ht.BLACK):(p(F,Ht.BLACK),p(F,Ht.RED))}return g},a=new _v(t.length),l=o(a);return new fn(r||e,l)};/**
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
 */let Nc;const Ys={};class Cr{static get Default(){return oe(Ys&&At,"ChildrenNode.ts has not been loaded"),Nc=Nc||new Cr({".priority":Ys},{".priority":At}),Nc}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=ai(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof fn?n:null}hasIndex(e){return lr(this.indexSet_,e.toString())}addIndex(e,n){oe(e!==Zs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const o=n.getIterator(Ye.Wrap);let a=o.getNext();for(;a;)s=s||e.isDefinedOn(a.node),r.push(a),a=o.getNext();let l;s?l=ga(r,e.getCompare()):l=Ys;const d=e.toString(),u={...this.indexSet_};u[d]=e;const g={...this.indexes_};return g[d]=l,new Cr(g,u)}addToIndexes(e,n){const r=ha(this.indexes_,(s,o)=>{const a=ai(this.indexSet_,o);if(oe(a,"Missing index implementation for "+o),s===Ys)if(a.isDefinedOn(e.node)){const l=[],d=n.getIterator(Ye.Wrap);let u=d.getNext();for(;u;)u.name!==e.name&&l.push(u),u=d.getNext();return l.push(e),ga(l,a.getCompare())}else return Ys;else{const l=n.get(e.name);let d=s;return l&&(d=d.remove(new Ye(e.name,l))),d.insert(e,e.node)}});return new Cr(r,this.indexSet_)}removeFromIndexes(e,n){const r=ha(this.indexes_,s=>{if(s===Ys)return s;{const o=n.get(e.name);return o?s.remove(new Ye(e.name,o)):s}});return new Cr(r,this.indexSet_)}}/**
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
 */let ki;class je{static get EMPTY_NODE(){return ki||(ki=new je(new fn(Dl),null,Cr.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Mm(this.priorityNode_),this.children_.isEmpty()&&oe(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ki}updatePriority(e){return this.children_.isEmpty()?this:new je(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ki:n}}getChild(e){const n=Ve(e);return n===null?this:this.getImmediateChild(n).getChild(bt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(oe(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new Ye(e,n);let s,o;n.isEmpty()?(s=this.children_.remove(e),o=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),o=this.indexMap_.addToIndexes(r,this.children_));const a=s.isEmpty()?ki:this.priorityNode_;return new je(s,a,o)}}updateChild(e,n){const r=Ve(e);if(r===null)return n;{oe(Ve(e)!==".priority"||Jr(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(bt(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,o=!0;if(this.forEachChild(At,(a,l)=>{n[a]=l.val(e),r++,o&&je.INTEGER_REGEXP_.test(a)?s=Math.max(s,Number(a)):o=!1}),!e&&o&&s<2*r){const a=[];for(const l in n)a[l]=n[l];return a}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Om(this.getPriority().val())+":"),this.forEachChild(At,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":hm(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const o=s.getPredecessorKey(new Ye(e,n));return o?o.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Ye(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Ye(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,Ye.Wrap);let o=s.peek();for(;o!=null&&n.compare(o,e)<0;)s.getNext(),o=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,Ye.Wrap);let o=s.peek();for(;o!=null&&n.compare(o,e)>0;)s.getNext(),o=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===po?-1:0}withIndex(e){if(e===Zs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new je(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Zs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(At),s=n.getIterator(At);let o=r.getNext(),a=s.getNext();for(;o&&a;){if(o.name!==a.name||!o.node.equals(a.node))return!1;o=r.getNext(),a=s.getNext()}return o===null&&a===null}else return!1;else return!1}}resolveIndex_(e){return e===Zs?null:this.indexMap_.get(e.toString())}}je.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Cv extends je{constructor(){super(new fn(Dl),je.EMPTY_NODE,Cr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return je.EMPTY_NODE}isEmpty(){return!1}}const po=new Cv;Object.defineProperties(Ye,{MIN:{value:new Ye(ci,je.EMPTY_NODE)},MAX:{value:new Ye(ws,po)}});Dm.__EMPTY_NODE=je.EMPTY_NODE;Bt.__childrenNodeConstructor=je;fv(po);bv(po);/**
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
 */const Sv=!0;function Lt(t,e=null){if(t===null)return je.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),oe(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Bt(n,Lt(e))}if(!(t instanceof Array)&&Sv){const n=[];let r=!1;if(Yt(t,(a,l)=>{if(a.substring(0,1)!=="."){const d=Lt(l);d.isEmpty()||(r=r||!d.getPriority().isEmpty(),n.push(new Ye(a,d)))}}),n.length===0)return je.EMPTY_NODE;const o=ga(n,pv,a=>a.name,Dl);if(r){const a=ga(n,At.getCompare());return new je(o,Lt(e),new Cr({".priority":a},{".priority":At}))}else return new je(o,Lt(e),Cr.Default)}else{let n=je.EMPTY_NODE;return Yt(t,(r,s)=>{if(lr(t,r)&&r.substring(0,1)!=="."){const o=Lt(s);(o.isLeafNode()||!o.isEmpty())&&(n=n.updateImmediateChild(r,o))}}),n.updatePriority(Lt(e))}}gv(Lt);/**
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
 */class wv extends Va{constructor(e){super(),this.indexPath_=e,oe(!Xe(e)&&Ve(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),o=r.compareTo(s);return o===0?Fs(e.name,n.name):o}makePost(e,n){const r=Lt(e),s=je.EMPTY_NODE.updateChild(this.indexPath_,r);return new Ye(n,s)}maxPost(){const e=je.EMPTY_NODE.updateChild(this.indexPath_,po);return new Ye(ws,e)}toString(){return Zi(this.indexPath_,0).join("/")}}/**
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
 */class Ev extends Va{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Fs(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Ye.MIN}maxPost(){return Ye.MAX}makePost(e,n){const r=Lt(e);return new Ye(n,r)}toString(){return".value"}}const Nv=new Ev;/**
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
 */function Um(t){return{type:"value",snapshotNode:t}}function li(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function eo(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function to(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function xv(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Ol{constructor(e){this.index_=e}updateChild(e,n,r,s,o,a){oe(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(s).equals(r.getChild(s))&&l.isEmpty()===r.isEmpty()||(a!=null&&(r.isEmpty()?e.hasChild(n)?a.trackChildChange(eo(n,l)):oe(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?a.trackChildChange(li(n,r)):a.trackChildChange(to(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(At,(s,o)=>{n.hasChild(s)||r.trackChildChange(eo(s,o))}),n.isLeafNode()||n.forEachChild(At,(s,o)=>{if(e.hasChild(s)){const a=e.getImmediateChild(s);a.equals(o)||r.trackChildChange(to(s,o,a))}else r.trackChildChange(li(s,o))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?je.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class no{constructor(e){this.indexedFilter_=new Ol(e.getIndex()),this.index_=e.getIndex(),this.startPost_=no.getStartPost_(e),this.endPost_=no.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,s,o,a){return this.matches(new Ye(n,r))||(r=je.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,s,o,a)}updateFullNode(e,n,r){n.isLeafNode()&&(n=je.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(je.EMPTY_NODE);const o=this;return n.forEachChild(At,(a,l)=>{o.matches(new Ye(a,l))||(s=s.updateImmediateChild(a,je.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class Av{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new no(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,s,o,a){return this.rangedFilter_.matches(new Ye(n,r))||(r=je.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,s,o,a):this.fullLimitUpdateChild_(e,n,r,o,a)}updateFullNode(e,n,r){let s;if(n.isLeafNode()||n.isEmpty())s=je.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=je.EMPTY_NODE.withIndex(this.index_);let o;this.reverse_?o=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):o=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let a=0;for(;o.hasNext()&&a<this.limit_;){const l=o.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))s=s.updateImmediateChild(l.name,l.node),a++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(je.EMPTY_NODE);let o;this.reverse_?o=s.getReverseIterator(this.index_):o=s.getIterator(this.index_);let a=0;for(;o.hasNext();){const l=o.getNext();a<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?a++:s=s.updateImmediateChild(l.name,je.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,s,o){let a;if(this.reverse_){const f=this.index_.getCompare();a=(p,S)=>f(S,p)}else a=this.index_.getCompare();const l=e;oe(l.numChildren()===this.limit_,"");const d=new Ye(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),g=this.rangedFilter_.matches(d);if(l.hasChild(n)){const f=l.getImmediateChild(n);let p=s.getChildAfterChild(this.index_,u,this.reverse_);for(;p!=null&&(p.name===n||l.hasChild(p.name));)p=s.getChildAfterChild(this.index_,p,this.reverse_);const S=p==null?1:a(p,d);if(g&&!r.isEmpty()&&S>=0)return o?.trackChildChange(to(n,r,f)),l.updateImmediateChild(n,r);{o?.trackChildChange(eo(n,f));const I=l.updateImmediateChild(n,je.EMPTY_NODE);return p!=null&&this.rangedFilter_.matches(p)?(o?.trackChildChange(li(p.name,p.node)),I.updateImmediateChild(p.name,p.node)):I}}else return r.isEmpty()?e:g&&a(u,d)>=0?(o!=null&&(o.trackChildChange(eo(u.name,u.node)),o.trackChildChange(li(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,je.EMPTY_NODE)):e}}/**
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
 */class Ml{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=At}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return oe(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return oe(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ci}hasEnd(){return this.endSet_}getIndexEndValue(){return oe(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return oe(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ws}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return oe(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===At}copy(){const e=new Ml;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Iv(t){return t.loadsAllData()?new Ol(t.getIndex()):t.hasLimit()?new Av(t):new no(t)}function pu(t){const e={};if(t.isDefault())return e;let n;if(t.index_===At?n="$priority":t.index_===Nv?n="$value":t.index_===Zs?n="$key":(oe(t.index_ instanceof wv,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ut(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Ut(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Ut(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Ut(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Ut(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function fu(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==At&&(e.i=t.index_.toString()),e}/**
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
 */class ba extends km{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(oe(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=mo("p:rest:"),this.listens_={}}listen(e,n,r,s){const o=e._path.toString();this.log_("Listen called for "+o+" "+e._queryIdentifier);const a=ba.getListenId_(e,r),l={};this.listens_[a]=l;const d=pu(e._queryParams);this.restRequest_(o+".json",d,(u,g)=>{let f=g;if(u===404&&(f=null,u=null),u===null&&this.onDataUpdate_(o,f,!1,r),ai(this.listens_,a)===l){let p;u?u===401?p="permission_denied":p="rest_error:"+u:p="ok",s(p,null)}})}unlisten(e,n){const r=ba.getListenId_(e,n);delete this.listens_[r]}get(e){const n=pu(e._queryParams),r=e._path.toString(),s=new lo;return this.restRequest_(r+".json",n,(o,a)=>{let l=a;o===404&&(l=null,o=null),o===null?(this.onDataUpdate_(r,l,!1,null),s.resolve(l)):s.reject(new Error(l))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,o])=>{s&&s.accessToken&&(n.auth=s.accessToken),o&&o.token&&(n.ac=o.token);const a=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+gi(n);this.log_("Sending REST request for "+a);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+a+" received. status:",l.status,"response:",l.responseText);let d=null;if(l.status>=200&&l.status<300){try{d=Ji(l.responseText)}catch{an("Failed to parse JSON response for "+a+": "+l.responseText)}r(null,d)}else l.status!==401&&l.status!==404&&an("Got unsuccessful REST response for "+a+" Status: "+l.status),r(l.status);r=null}},l.open("GET",a,!0),l.send()})}}/**
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
 */class Tv{constructor(){this.rootNode_=je.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function ya(){return{value:null,children:new Map}}function Bm(t,e,n){if(Xe(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=Ve(e);t.children.has(r)||t.children.set(r,ya());const s=t.children.get(r);e=bt(e),Bm(s,e,n)}}function Zc(t,e,n){t.value!==null?n(e,t.value):Rv(t,(r,s)=>{const o=new pt(e.toString()+"/"+r);Zc(s,o,n)})}function Rv(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class kv{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&Yt(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
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
 */const gu=10*1e3,Fv=30*1e3,Pv=300*1e3;class $v{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new kv(e);const r=gu+(Fv-gu)*Math.random();Ui(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Yt(e,(s,o)=>{o>0&&lr(this.statsToReport_,s)&&(n[s]=o,r=!0)}),r&&this.server_.reportStats(n),Ui(this.reportStats_.bind(this),Math.floor(Math.random()*2*Pv))}}/**
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
 */var zn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(zn||(zn={}));function jl(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ll(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ul(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class va{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=zn.ACK_USER_WRITE,this.source=jl()}operationForChild(e){if(Xe(this.path)){if(this.affectedTree.value!=null)return oe(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new pt(e));return new va(st(),n,this.revert)}}else return oe(Ve(this.path)===e,"operationForChild called for unrelated child."),new va(bt(this.path),this.affectedTree,this.revert)}}/**
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
 */class ro{constructor(e,n){this.source=e,this.path=n,this.type=zn.LISTEN_COMPLETE}operationForChild(e){return Xe(this.path)?new ro(this.source,st()):new ro(this.source,bt(this.path))}}/**
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
 */class Es{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=zn.OVERWRITE}operationForChild(e){return Xe(this.path)?new Es(this.source,st(),this.snap.getImmediateChild(e)):new Es(this.source,bt(this.path),this.snap)}}/**
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
 */class di{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=zn.MERGE}operationForChild(e){if(Xe(this.path)){const n=this.children.subtree(new pt(e));return n.isEmpty()?null:n.value?new Es(this.source,st(),n.value):new di(this.source,st(),n)}else return oe(Ve(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new di(this.source,bt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Xr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Xe(e))return this.isFullyInitialized()&&!this.filtered_;const n=Ve(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Dv{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Ov(t,e,n,r){const s=[],o=[];return e.forEach(a=>{a.type==="child_changed"&&t.index_.indexedValueChanged(a.oldSnap,a.snapshotNode)&&o.push(xv(a.childName,a.snapshotNode))}),Fi(t,s,"child_removed",e,r,n),Fi(t,s,"child_added",e,r,n),Fi(t,s,"child_moved",o,r,n),Fi(t,s,"child_changed",e,r,n),Fi(t,s,"value",e,r,n),s}function Fi(t,e,n,r,s,o){const a=r.filter(l=>l.type===n);a.sort((l,d)=>jv(t,l,d)),a.forEach(l=>{const d=Mv(t,l,o);s.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(d,t.query_))})})}function Mv(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function jv(t,e,n){if(e.childName==null||n.childName==null)throw fi("Should only compare child_ events.");const r=new Ye(e.childName,e.snapshotNode),s=new Ye(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
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
 */function Ya(t,e){return{eventCache:t,serverCache:e}}function Bi(t,e,n,r){return Ya(new Xr(e,n,r),t.serverCache)}function Hm(t,e,n,r){return Ya(t.eventCache,new Xr(e,n,r))}function _a(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ns(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let xc;const Lv=()=>(xc||(xc=new fn(wy)),xc);class gt{static fromObject(e){let n=new gt(null);return Yt(e,(r,s)=>{n=n.set(new pt(r),s)}),n}constructor(e,n=Lv()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:st(),value:this.value};if(Xe(e))return null;{const r=Ve(e),s=this.children.get(r);if(s!==null){const o=s.findRootMostMatchingPathAndValue(bt(e),n);return o!=null?{path:xt(new pt(r),o.path),value:o.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Xe(e))return this;{const n=Ve(e),r=this.children.get(n);return r!==null?r.subtree(bt(e)):new gt(null)}}set(e,n){if(Xe(e))return new gt(n,this.children);{const r=Ve(e),o=(this.children.get(r)||new gt(null)).set(bt(e),n),a=this.children.insert(r,o);return new gt(this.value,a)}}remove(e){if(Xe(e))return this.children.isEmpty()?new gt(null):new gt(null,this.children);{const n=Ve(e),r=this.children.get(n);if(r){const s=r.remove(bt(e));let o;return s.isEmpty()?o=this.children.remove(n):o=this.children.insert(n,s),this.value===null&&o.isEmpty()?new gt(null):new gt(this.value,o)}else return this}}get(e){if(Xe(e))return this.value;{const n=Ve(e),r=this.children.get(n);return r?r.get(bt(e)):null}}setTree(e,n){if(Xe(e))return n;{const r=Ve(e),o=(this.children.get(r)||new gt(null)).setTree(bt(e),n);let a;return o.isEmpty()?a=this.children.remove(r):a=this.children.insert(r,o),new gt(this.value,a)}}fold(e){return this.fold_(st(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,o)=>{r[s]=o.fold_(xt(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,st(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(Xe(e))return null;{const o=Ve(e),a=this.children.get(o);return a?a.findOnPath_(bt(e),xt(n,o),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,st(),n)}foreachOnPath_(e,n,r){if(Xe(e))return this;{this.value&&r(n,this.value);const s=Ve(e),o=this.children.get(s);return o?o.foreachOnPath_(bt(e),xt(n,s),r):new gt(null)}}foreach(e){this.foreach_(st(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(xt(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class Yn{constructor(e){this.writeTree_=e}static empty(){return new Yn(new gt(null))}}function Hi(t,e,n){if(Xe(e))return new Yn(new gt(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let o=r.value;const a=on(s,e);return o=o.updateChild(a,n),new Yn(t.writeTree_.set(s,o))}else{const s=new gt(n),o=t.writeTree_.setTree(e,s);return new Yn(o)}}}function el(t,e,n){let r=t;return Yt(n,(s,o)=>{r=Hi(r,xt(e,s),o)}),r}function bu(t,e){if(Xe(e))return Yn.empty();{const n=t.writeTree_.setTree(e,new gt(null));return new Yn(n)}}function tl(t,e){return Ps(t,e)!=null}function Ps(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(on(n.path,e)):null}function yu(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(At,(r,s)=>{e.push(new Ye(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new Ye(r,s.value))}),e}function qr(t,e){if(Xe(e))return t;{const n=Ps(t,e);return n!=null?new Yn(new gt(n)):new Yn(t.writeTree_.subtree(e))}}function nl(t){return t.writeTree_.isEmpty()}function ui(t,e){return Gm(st(),t.writeTree_,e)}function Gm(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,o)=>{s===".priority"?(oe(o.value!==null,"Priority writes must always be leaf nodes"),r=o.value):n=Gm(xt(t,s),o,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(xt(t,".priority"),r)),n}}/**
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
 */function Ka(t,e){return Vm(e,t)}function Uv(t,e,n,r,s){oe(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=Hi(t.visibleWrites,e,n)),t.lastWriteId=r}function Bv(t,e,n,r){oe(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=el(t.visibleWrites,e,n),t.lastWriteId=r}function Hv(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function Gv(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);oe(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,o=!1,a=t.allWrites.length-1;for(;s&&a>=0;){const l=t.allWrites[a];l.visible&&(a>=n&&Wv(l,r.path)?s=!1:Pn(r.path,l.path)&&(o=!0)),a--}if(s){if(o)return zv(t),!0;if(r.snap)t.visibleWrites=bu(t.visibleWrites,r.path);else{const l=r.children;Yt(l,d=>{t.visibleWrites=bu(t.visibleWrites,xt(r.path,d))})}return!0}else return!1}function Wv(t,e){if(t.snap)return Pn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Pn(xt(t.path,n),e))return!0;return!1}function zv(t){t.visibleWrites=Wm(t.allWrites,qv,st()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function qv(t){return t.visible}function Wm(t,e,n){let r=Yn.empty();for(let s=0;s<t.length;++s){const o=t[s];if(e(o)){const a=o.path;let l;if(o.snap)Pn(n,a)?(l=on(n,a),r=Hi(r,l,o.snap)):Pn(a,n)&&(l=on(a,n),r=Hi(r,st(),o.snap.getChild(l)));else if(o.children){if(Pn(n,a))l=on(n,a),r=el(r,l,o.children);else if(Pn(a,n))if(l=on(a,n),Xe(l))r=el(r,st(),o.children);else{const d=ai(o.children,Ve(l));if(d){const u=d.getChild(bt(l));r=Hi(r,st(),u)}}}else throw fi("WriteRecord should have .snap or .children")}}return r}function zm(t,e,n,r,s){if(!r&&!s){const o=Ps(t.visibleWrites,e);if(o!=null)return o;{const a=qr(t.visibleWrites,e);if(nl(a))return n;if(n==null&&!tl(a,st()))return null;{const l=n||je.EMPTY_NODE;return ui(a,l)}}}else{const o=qr(t.visibleWrites,e);if(!s&&nl(o))return n;if(!s&&n==null&&!tl(o,st()))return null;{const a=function(u){return(u.visible||s)&&(!r||!~r.indexOf(u.writeId))&&(Pn(u.path,e)||Pn(e,u.path))},l=Wm(t.allWrites,a,e),d=n||je.EMPTY_NODE;return ui(l,d)}}}function Vv(t,e,n){let r=je.EMPTY_NODE;const s=Ps(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(At,(o,a)=>{r=r.updateImmediateChild(o,a)}),r;if(n){const o=qr(t.visibleWrites,e);return n.forEachChild(At,(a,l)=>{const d=ui(qr(o,new pt(a)),l);r=r.updateImmediateChild(a,d)}),yu(o).forEach(a=>{r=r.updateImmediateChild(a.name,a.node)}),r}else{const o=qr(t.visibleWrites,e);return yu(o).forEach(a=>{r=r.updateImmediateChild(a.name,a.node)}),r}}function Yv(t,e,n,r,s){oe(r||s,"Either existingEventSnap or existingServerSnap must exist");const o=xt(e,n);if(tl(t.visibleWrites,o))return null;{const a=qr(t.visibleWrites,o);return nl(a)?s.getChild(n):ui(a,s.getChild(n))}}function Kv(t,e,n,r){const s=xt(e,n),o=Ps(t.visibleWrites,s);if(o!=null)return o;if(r.isCompleteForChild(n)){const a=qr(t.visibleWrites,s);return ui(a,r.getNode().getImmediateChild(n))}else return null}function Jv(t,e){return Ps(t.visibleWrites,e)}function Xv(t,e,n,r,s,o,a){let l;const d=qr(t.visibleWrites,e),u=Ps(d,st());if(u!=null)l=u;else if(n!=null)l=ui(d,n);else return[];if(l=l.withIndex(a),!l.isEmpty()&&!l.isLeafNode()){const g=[],f=a.getCompare(),p=o?l.getReverseIteratorFrom(r,a):l.getIteratorFrom(r,a);let S=p.getNext();for(;S&&g.length<s;)f(S,r)!==0&&g.push(S),S=p.getNext();return g}else return[]}function Qv(){return{visibleWrites:Yn.empty(),allWrites:[],lastWriteId:-1}}function Ca(t,e,n,r){return zm(t.writeTree,t.treePath,e,n,r)}function Bl(t,e){return Vv(t.writeTree,t.treePath,e)}function vu(t,e,n,r){return Yv(t.writeTree,t.treePath,e,n,r)}function Sa(t,e){return Jv(t.writeTree,xt(t.treePath,e))}function Zv(t,e,n,r,s,o){return Xv(t.writeTree,t.treePath,e,n,r,s,o)}function Hl(t,e,n){return Kv(t.writeTree,t.treePath,e,n)}function qm(t,e){return Vm(xt(t.treePath,e),t.writeTree)}function Vm(t,e){return{treePath:t,writeTree:e}}/**
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
 */class e_{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;oe(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),oe(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const o=s.type;if(n==="child_added"&&o==="child_removed")this.changeMap.set(r,to(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&o==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&o==="child_changed")this.changeMap.set(r,eo(r,s.oldSnap));else if(n==="child_changed"&&o==="child_added")this.changeMap.set(r,li(r,e.snapshotNode));else if(n==="child_changed"&&o==="child_changed")this.changeMap.set(r,to(r,e.snapshotNode,s.oldSnap));else throw fi("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class t_{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Ym=new t_;class Gl{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Xr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Hl(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ns(this.viewCache_),o=Zv(this.writes_,s,n,1,r,e);return o.length===0?null:o[0]}}/**
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
 */function n_(t){return{filter:t}}function r_(t,e){oe(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),oe(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function s_(t,e,n,r,s){const o=new e_;let a,l;if(n.type===zn.OVERWRITE){const u=n;u.source.fromUser?a=rl(t,e,u.path,u.snap,r,s,o):(oe(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!Xe(u.path),a=wa(t,e,u.path,u.snap,r,s,l,o))}else if(n.type===zn.MERGE){const u=n;u.source.fromUser?a=o_(t,e,u.path,u.children,r,s,o):(oe(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),a=sl(t,e,u.path,u.children,r,s,l,o))}else if(n.type===zn.ACK_USER_WRITE){const u=n;u.revert?a=l_(t,e,u.path,r,s,o):a=a_(t,e,u.path,u.affectedTree,r,s,o)}else if(n.type===zn.LISTEN_COMPLETE)a=c_(t,e,n.path,r,o);else throw fi("Unknown operation type: "+n.type);const d=o.getChanges();return i_(e,a,d),{viewCache:a,changes:d}}function i_(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),o=_a(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(o)||!r.getNode().getPriority().equals(o.getPriority()))&&n.push(Um(_a(e)))}}function Km(t,e,n,r,s,o){const a=e.eventCache;if(Sa(r,n)!=null)return e;{let l,d;if(Xe(n))if(oe(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Ns(e),g=u instanceof je?u:je.EMPTY_NODE,f=Bl(r,g);l=t.filter.updateFullNode(e.eventCache.getNode(),f,o)}else{const u=Ca(r,Ns(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,o)}else{const u=Ve(n);if(u===".priority"){oe(Jr(n)===1,"Can't have a priority with additional path components");const g=a.getNode();d=e.serverCache.getNode();const f=vu(r,n,g,d);f!=null?l=t.filter.updatePriority(g,f):l=a.getNode()}else{const g=bt(n);let f;if(a.isCompleteForChild(u)){d=e.serverCache.getNode();const p=vu(r,n,a.getNode(),d);p!=null?f=a.getNode().getImmediateChild(u).updateChild(g,p):f=a.getNode().getImmediateChild(u)}else f=Hl(r,u,e.serverCache);f!=null?l=t.filter.updateChild(a.getNode(),u,f,g,s,o):l=a.getNode()}}return Bi(e,l,a.isFullyInitialized()||Xe(n),t.filter.filtersNodes())}}function wa(t,e,n,r,s,o,a,l){const d=e.serverCache;let u;const g=a?t.filter:t.filter.getIndexedFilter();if(Xe(n))u=g.updateFullNode(d.getNode(),r,null);else if(g.filtersNodes()&&!d.isFiltered()){const S=d.getNode().updateChild(n,r);u=g.updateFullNode(d.getNode(),S,null)}else{const S=Ve(n);if(!d.isCompleteForPath(n)&&Jr(n)>1)return e;const _=bt(n),F=d.getNode().getImmediateChild(S).updateChild(_,r);S===".priority"?u=g.updatePriority(d.getNode(),F):u=g.updateChild(d.getNode(),S,F,_,Ym,null)}const f=Hm(e,u,d.isFullyInitialized()||Xe(n),g.filtersNodes()),p=new Gl(s,f,o);return Km(t,f,n,s,p,l)}function rl(t,e,n,r,s,o,a){const l=e.eventCache;let d,u;const g=new Gl(s,e,o);if(Xe(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,a),d=Bi(e,u,!0,t.filter.filtersNodes());else{const f=Ve(n);if(f===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),d=Bi(e,u,l.isFullyInitialized(),l.isFiltered());else{const p=bt(n),S=l.getNode().getImmediateChild(f);let _;if(Xe(p))_=r;else{const I=g.getCompleteChild(f);I!=null?Fl(p)===".priority"&&I.getChild(Pm(p)).isEmpty()?_=I:_=I.updateChild(p,r):_=je.EMPTY_NODE}if(S.equals(_))d=e;else{const I=t.filter.updateChild(l.getNode(),f,_,p,g,a);d=Bi(e,I,l.isFullyInitialized(),t.filter.filtersNodes())}}}return d}function _u(t,e){return t.eventCache.isCompleteForChild(e)}function o_(t,e,n,r,s,o,a){let l=e;return r.foreach((d,u)=>{const g=xt(n,d);_u(e,Ve(g))&&(l=rl(t,l,g,u,s,o,a))}),r.foreach((d,u)=>{const g=xt(n,d);_u(e,Ve(g))||(l=rl(t,l,g,u,s,o,a))}),l}function Cu(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function sl(t,e,n,r,s,o,a,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let d=e,u;Xe(n)?u=r:u=new gt(null).setTree(n,r);const g=e.serverCache.getNode();return u.children.inorderTraversal((f,p)=>{if(g.hasChild(f)){const S=e.serverCache.getNode().getImmediateChild(f),_=Cu(t,S,p);d=wa(t,d,new pt(f),_,s,o,a,l)}}),u.children.inorderTraversal((f,p)=>{const S=!e.serverCache.isCompleteForChild(f)&&p.value===null;if(!g.hasChild(f)&&!S){const _=e.serverCache.getNode().getImmediateChild(f),I=Cu(t,_,p);d=wa(t,d,new pt(f),I,s,o,a,l)}}),d}function a_(t,e,n,r,s,o,a){if(Sa(s,n)!=null)return e;const l=e.serverCache.isFiltered(),d=e.serverCache;if(r.value!=null){if(Xe(n)&&d.isFullyInitialized()||d.isCompleteForPath(n))return wa(t,e,n,d.getNode().getChild(n),s,o,l,a);if(Xe(n)){let u=new gt(null);return d.getNode().forEachChild(Zs,(g,f)=>{u=u.set(new pt(g),f)}),sl(t,e,n,u,s,o,l,a)}else return e}else{let u=new gt(null);return r.foreach((g,f)=>{const p=xt(n,g);d.isCompleteForPath(p)&&(u=u.set(g,d.getNode().getChild(p)))}),sl(t,e,n,u,s,o,l,a)}}function c_(t,e,n,r,s){const o=e.serverCache,a=Hm(e,o.getNode(),o.isFullyInitialized()||Xe(n),o.isFiltered());return Km(t,a,n,r,Ym,s)}function l_(t,e,n,r,s,o){let a;if(Sa(r,n)!=null)return e;{const l=new Gl(r,e,s),d=e.eventCache.getNode();let u;if(Xe(n)||Ve(n)===".priority"){let g;if(e.serverCache.isFullyInitialized())g=Ca(r,Ns(e));else{const f=e.serverCache.getNode();oe(f instanceof je,"serverChildren would be complete if leaf node"),g=Bl(r,f)}g=g,u=t.filter.updateFullNode(d,g,o)}else{const g=Ve(n);let f=Hl(r,g,e.serverCache);f==null&&e.serverCache.isCompleteForChild(g)&&(f=d.getImmediateChild(g)),f!=null?u=t.filter.updateChild(d,g,f,bt(n),l,o):e.eventCache.getNode().hasChild(g)?u=t.filter.updateChild(d,g,je.EMPTY_NODE,bt(n),l,o):u=d,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(a=Ca(r,Ns(e)),a.isLeafNode()&&(u=t.filter.updateFullNode(u,a,o)))}return a=e.serverCache.isFullyInitialized()||Sa(r,st())!=null,Bi(e,u,a,t.filter.filtersNodes())}}/**
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
 */class d_{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new Ol(r.getIndex()),o=Iv(r);this.processor_=n_(o);const a=n.serverCache,l=n.eventCache,d=s.updateFullNode(je.EMPTY_NODE,a.getNode(),null),u=o.updateFullNode(je.EMPTY_NODE,l.getNode(),null),g=new Xr(d,a.isFullyInitialized(),s.filtersNodes()),f=new Xr(u,l.isFullyInitialized(),o.filtersNodes());this.viewCache_=Ya(f,g),this.eventGenerator_=new Dv(this.query_)}get query(){return this.query_}}function u_(t){return t.viewCache_.serverCache.getNode()}function h_(t){return _a(t.viewCache_)}function m_(t,e){const n=Ns(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Xe(e)&&!n.getImmediateChild(Ve(e)).isEmpty())?n.getChild(e):null}function Su(t){return t.eventRegistrations_.length===0}function p_(t,e){t.eventRegistrations_.push(e)}function wu(t,e,n){const r=[];if(n){oe(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(o=>{const a=o.createCancelEvent(n,s);a&&r.push(a)})}if(e){let s=[];for(let o=0;o<t.eventRegistrations_.length;++o){const a=t.eventRegistrations_[o];if(!a.matches(e))s.push(a);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(o+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return r}function Eu(t,e,n,r){e.type===zn.MERGE&&e.source.queryId!==null&&(oe(Ns(t.viewCache_),"We should always have a full cache before handling merges"),oe(_a(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,o=s_(t.processor_,s,e,n,r);return r_(t.processor_,o.viewCache),oe(o.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=o.viewCache,Jm(t,o.changes,o.viewCache.eventCache.getNode(),null)}function f_(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(At,(o,a)=>{r.push(li(o,a))}),n.isFullyInitialized()&&r.push(Um(n.getNode())),Jm(t,r,n.getNode(),e)}function Jm(t,e,n,r){const s=r?[r]:t.eventRegistrations_;return Ov(t.eventGenerator_,e,n,s)}/**
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
 */let Ea;class Xm{constructor(){this.views=new Map}}function g_(t){oe(!Ea,"__referenceConstructor has already been defined"),Ea=t}function b_(){return oe(Ea,"Reference.ts has not been loaded"),Ea}function y_(t){return t.views.size===0}function Wl(t,e,n,r){const s=e.source.queryId;if(s!==null){const o=t.views.get(s);return oe(o!=null,"SyncTree gave us an op for an invalid query."),Eu(o,e,n,r)}else{let o=[];for(const a of t.views.values())o=o.concat(Eu(a,e,n,r));return o}}function Qm(t,e,n,r,s){const o=e._queryIdentifier,a=t.views.get(o);if(!a){let l=Ca(n,s?r:null),d=!1;l?d=!0:r instanceof je?(l=Bl(n,r),d=!1):(l=je.EMPTY_NODE,d=!1);const u=Ya(new Xr(l,d,!1),new Xr(r,s,!1));return new d_(e,u)}return a}function v_(t,e,n,r,s,o){const a=Qm(t,e,r,s,o);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,a),p_(a,n),f_(a,n)}function __(t,e,n,r){const s=e._queryIdentifier,o=[];let a=[];const l=Qr(t);if(s==="default")for(const[d,u]of t.views.entries())a=a.concat(wu(u,n,r)),Su(u)&&(t.views.delete(d),u.query._queryParams.loadsAllData()||o.push(u.query));else{const d=t.views.get(s);d&&(a=a.concat(wu(d,n,r)),Su(d)&&(t.views.delete(s),d.query._queryParams.loadsAllData()||o.push(d.query)))}return l&&!Qr(t)&&o.push(new(b_())(e._repo,e._path)),{removed:o,events:a}}function Zm(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Vr(t,e){let n=null;for(const r of t.views.values())n=n||m_(r,e);return n}function ep(t,e){if(e._queryParams.loadsAllData())return Ja(t);{const r=e._queryIdentifier;return t.views.get(r)}}function tp(t,e){return ep(t,e)!=null}function Qr(t){return Ja(t)!=null}function Ja(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Na;function C_(t){oe(!Na,"__referenceConstructor has already been defined"),Na=t}function S_(){return oe(Na,"Reference.ts has not been loaded"),Na}let w_=1;class Nu{constructor(e){this.listenProvider_=e,this.syncPointTree_=new gt(null),this.pendingWriteTree_=Qv(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function np(t,e,n,r,s){return Uv(t.pendingWriteTree_,e,n,r,s),s?yi(t,new Es(jl(),e,n)):[]}function E_(t,e,n,r){Bv(t.pendingWriteTree_,e,n,r);const s=gt.fromObject(n);return yi(t,new di(jl(),e,s))}function Gr(t,e,n=!1){const r=Hv(t.pendingWriteTree_,e);if(Gv(t.pendingWriteTree_,e)){let o=new gt(null);return r.snap!=null?o=o.set(st(),!0):Yt(r.children,a=>{o=o.set(new pt(a),!0)}),yi(t,new va(r.path,o,n))}else return[]}function fo(t,e,n){return yi(t,new Es(Ll(),e,n))}function N_(t,e,n){const r=gt.fromObject(n);return yi(t,new di(Ll(),e,r))}function x_(t,e){return yi(t,new ro(Ll(),e))}function A_(t,e,n){const r=ql(t,n);if(r){const s=Vl(r),o=s.path,a=s.queryId,l=on(o,e),d=new ro(Ul(a),l);return Yl(t,o,d)}else return[]}function xa(t,e,n,r,s=!1){const o=e._path,a=t.syncPointTree_.get(o);let l=[];if(a&&(e._queryIdentifier==="default"||tp(a,e))){const d=__(a,e,n,r);y_(a)&&(t.syncPointTree_=t.syncPointTree_.remove(o));const u=d.removed;if(l=d.events,!s){const g=u.findIndex(p=>p._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(o,(p,S)=>Qr(S));if(g&&!f){const p=t.syncPointTree_.subtree(o);if(!p.isEmpty()){const S=R_(p);for(let _=0;_<S.length;++_){const I=S[_],F=I.query,P=op(t,I);t.listenProvider_.startListening(Gi(F),so(t,F),P.hashFn,P.onComplete)}}}!f&&u.length>0&&!r&&(g?t.listenProvider_.stopListening(Gi(e),null):u.forEach(p=>{const S=t.queryToTagMap.get(Xa(p));t.listenProvider_.stopListening(Gi(p),S)}))}k_(t,u)}return l}function rp(t,e,n,r){const s=ql(t,r);if(s!=null){const o=Vl(s),a=o.path,l=o.queryId,d=on(a,e),u=new Es(Ul(l),d,n);return Yl(t,a,u)}else return[]}function I_(t,e,n,r){const s=ql(t,r);if(s){const o=Vl(s),a=o.path,l=o.queryId,d=on(a,e),u=gt.fromObject(n),g=new di(Ul(l),d,u);return Yl(t,a,g)}else return[]}function il(t,e,n,r=!1){const s=e._path;let o=null,a=!1;t.syncPointTree_.foreachOnPath(s,(p,S)=>{const _=on(p,s);o=o||Vr(S,_),a=a||Qr(S)});let l=t.syncPointTree_.get(s);l?(a=a||Qr(l),o=o||Vr(l,st())):(l=new Xm,t.syncPointTree_=t.syncPointTree_.set(s,l));let d;o!=null?d=!0:(d=!1,o=je.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((S,_)=>{const I=Vr(_,st());I&&(o=o.updateImmediateChild(S,I))}));const u=tp(l,e);if(!u&&!e._queryParams.loadsAllData()){const p=Xa(e);oe(!t.queryToTagMap.has(p),"View does not exist, but we have a tag");const S=F_();t.queryToTagMap.set(p,S),t.tagToQueryMap.set(S,p)}const g=Ka(t.pendingWriteTree_,s);let f=v_(l,e,n,g,o,d);if(!u&&!a&&!r){const p=ep(l,e);f=f.concat(P_(t,e,p))}return f}function zl(t,e,n){const s=t.pendingWriteTree_,o=t.syncPointTree_.findOnPath(e,(a,l)=>{const d=on(a,e),u=Vr(l,d);if(u)return u});return zm(s,e,o,n,!0)}function T_(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,g)=>{const f=on(u,n);r=r||Vr(g,f)});let s=t.syncPointTree_.get(n);s?r=r||Vr(s,st()):(s=new Xm,t.syncPointTree_=t.syncPointTree_.set(n,s));const o=r!=null,a=o?new Xr(r,!0,!1):null,l=Ka(t.pendingWriteTree_,e._path),d=Qm(s,e,l,o?a.getNode():je.EMPTY_NODE,o);return h_(d)}function yi(t,e){return sp(e,t.syncPointTree_,null,Ka(t.pendingWriteTree_,st()))}function sp(t,e,n,r){if(Xe(t.path))return ip(t,e,n,r);{const s=e.get(st());n==null&&s!=null&&(n=Vr(s,st()));let o=[];const a=Ve(t.path),l=t.operationForChild(a),d=e.children.get(a);if(d&&l){const u=n?n.getImmediateChild(a):null,g=qm(r,a);o=o.concat(sp(l,d,u,g))}return s&&(o=o.concat(Wl(s,t,r,n))),o}}function ip(t,e,n,r){const s=e.get(st());n==null&&s!=null&&(n=Vr(s,st()));let o=[];return e.children.inorderTraversal((a,l)=>{const d=n?n.getImmediateChild(a):null,u=qm(r,a),g=t.operationForChild(a);g&&(o=o.concat(ip(g,l,d,u)))}),s&&(o=o.concat(Wl(s,t,r,n))),o}function op(t,e){const n=e.query,r=so(t,n);return{hashFn:()=>(u_(e)||je.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?A_(t,n._path,r):x_(t,n._path);{const o=xy(s,n);return xa(t,n,null,o)}}}}function so(t,e){const n=Xa(e);return t.queryToTagMap.get(n)}function Xa(t){return t._path.toString()+"$"+t._queryIdentifier}function ql(t,e){return t.tagToQueryMap.get(e)}function Vl(t){const e=t.indexOf("$");return oe(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new pt(t.substr(0,e))}}function Yl(t,e,n){const r=t.syncPointTree_.get(e);oe(r,"Missing sync point for query tag that we're tracking");const s=Ka(t.pendingWriteTree_,e);return Wl(r,n,s,null)}function R_(t){return t.fold((e,n,r)=>{if(n&&Qr(n))return[Ja(n)];{let s=[];return n&&(s=Zm(n)),Yt(r,(o,a)=>{s=s.concat(a)}),s}})}function Gi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(S_())(t._repo,t._path):t}function k_(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const s=Xa(r),o=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(o)}}}function F_(){return w_++}function P_(t,e,n){const r=e._path,s=so(t,e),o=op(t,n),a=t.listenProvider_.startListening(Gi(e),s,o.hashFn,o.onComplete),l=t.syncPointTree_.subtree(r);if(s)oe(!Qr(l.value),"If we're adding a query, it shouldn't be shadowed");else{const d=l.fold((u,g,f)=>{if(!Xe(u)&&g&&Qr(g))return[Ja(g).query];{let p=[];return g&&(p=p.concat(Zm(g).map(S=>S.query))),Yt(f,(S,_)=>{p=p.concat(_)}),p}});for(let u=0;u<d.length;++u){const g=d[u];t.listenProvider_.stopListening(Gi(g),so(t,g))}}return a}/**
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
 */class Kl{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Kl(n)}node(){return this.node_}}class Jl{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=xt(this.path_,e);return new Jl(this.syncTree_,n)}node(){return zl(this.syncTree_,this.path_)}}const $_=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},xu=function(t,e,n){if(!t||typeof t!="object")return t;if(oe(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return D_(t[".sv"],e,n);if(typeof t[".sv"]=="object")return O_(t[".sv"],e);oe(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},D_=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:oe(!1,"Unexpected server value: "+t)}},O_=function(t,e,n){t.hasOwnProperty("increment")||oe(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&oe(!1,"Unexpected increment value: "+r);const s=e.node();if(oe(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const a=s.getValue();return typeof a!="number"?r:a+r},ap=function(t,e,n,r){return Xl(e,new Jl(n,t),r)},cp=function(t,e,n){return Xl(t,new Kl(e),n)};function Xl(t,e,n){const r=t.getPriority().val(),s=xu(r,e.getImmediateChild(".priority"),n);let o;if(t.isLeafNode()){const a=t,l=xu(a.getValue(),e,n);return l!==a.getValue()||s!==a.getPriority().val()?new Bt(l,Lt(s)):t}else{const a=t;return o=a,s!==a.getPriority().val()&&(o=o.updatePriority(new Bt(s))),a.forEachChild(At,(l,d)=>{const u=Xl(d,e.getImmediateChild(l),n);u!==d&&(o=o.updateImmediateChild(l,u))}),o}}/**
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
 */class Ql{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Zl(t,e){let n=e instanceof pt?e:new pt(e),r=t,s=Ve(n);for(;s!==null;){const o=ai(r.node.children,s)||{children:{},childCount:0};r=new Ql(s,r,o),n=bt(n),s=Ve(n)}return r}function vi(t){return t.node.value}function lp(t,e){t.node.value=e,ol(t)}function dp(t){return t.node.childCount>0}function M_(t){return vi(t)===void 0&&!dp(t)}function Qa(t,e){Yt(t.node.children,(n,r)=>{e(new Ql(n,t,r))})}function up(t,e,n,r){n&&e(t),Qa(t,s=>{up(s,e,!0)})}function j_(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function go(t){return new pt(t.parent===null?t.name:go(t.parent)+"/"+t.name)}function ol(t){t.parent!==null&&L_(t.parent,t.name,t)}function L_(t,e,n){const r=M_(n),s=lr(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,ol(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,ol(t))}/**
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
 */const U_=/[\[\].#$\/\u0000-\u001F\u007F]/,B_=/[\[\].#$\u0000-\u001F\u007F]/,Ac=10*1024*1024,ed=function(t){return typeof t=="string"&&t.length!==0&&!U_.test(t)},hp=function(t){return typeof t=="string"&&t.length!==0&&!B_.test(t)},H_=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),hp(t)},G_=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Al(t)||t&&typeof t=="object"&&lr(t,".sv")},mp=function(t,e,n,r){r&&e===void 0||Za(Wa(t,"value"),e,n)},Za=function(t,e,n){const r=n instanceof pt?new ov(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+fs(r));if(typeof e=="function")throw new Error(t+"contains a function "+fs(r)+" with contents = "+e.toString());if(Al(e))throw new Error(t+"contains "+e.toString()+" "+fs(r));if(typeof e=="string"&&e.length>Ac/3&&za(e)>Ac)throw new Error(t+"contains a string greater than "+Ac+" utf8 bytes "+fs(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,o=!1;if(Yt(e,(a,l)=>{if(a===".value")s=!0;else if(a!==".priority"&&a!==".sv"&&(o=!0,!ed(a)))throw new Error(t+" contains an invalid key ("+a+") "+fs(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);av(r,a),Za(t,l,r),cv(r)}),s&&o)throw new Error(t+' contains ".value" child '+fs(r)+" in addition to actual children.")}},W_=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const o=Zi(r);for(let a=0;a<o.length;a++)if(!(o[a]===".priority"&&a===o.length-1)){if(!ed(o[a]))throw new Error(t+"contains an invalid key ("+o[a]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(iv);let s=null;for(n=0;n<e.length;n++){if(r=e[n],s!==null&&Pn(s,r))throw new Error(t+"contains a path "+s.toString()+" that is ancestor of another path "+r.toString());s=r}},z_=function(t,e,n,r){const s=Wa(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const o=[];Yt(e,(a,l)=>{const d=new pt(a);if(Za(s,l,xt(n,d)),Fl(d)===".priority"&&!G_(l))throw new Error(s+"contains an invalid value for '"+d.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");o.push(d)}),W_(s,o)},pp=function(t,e,n,r){if(!hp(n))throw new Error(Wa(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},q_=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),pp(t,e,n)},td=function(t,e){if(Ve(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},V_=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ed(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!H_(n))throw new Error(Wa(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Y_{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ec(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],o=s.getPath();n!==null&&!Pl(o,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:o}),n.events.push(s)}n&&t.eventLists_.push(n)}function fp(t,e,n){ec(t,n),gp(t,r=>Pl(r,e))}function Dn(t,e,n){ec(t,n),gp(t,r=>Pn(r,e)||Pn(e,r))}function gp(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const o=s.path;e(o)?(K_(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function K_(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Li&&Vt("event: "+n.toString()),bi(r)}}}/**
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
 */const J_="repo_interrupt",X_=25;class Q_{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Y_,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ya(),this.transactionQueueTree_=new Ql,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Z_(t,e,n){if(t.stats_=Rl(t.repoInfo_),t.forceRestClient_||Ry())t.server_=new ba(t.repoInfo_,(r,s,o,a)=>{Au(t,r,s,o,a)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Iu(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ut(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Nr(t.repoInfo_,e,(r,s,o,a)=>{Au(t,r,s,o,a)},r=>{Iu(t,r)},r=>{eC(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=Dy(t.repoInfo_,()=>new $v(t.stats_,t.server_)),t.infoData_=new Tv,t.infoSyncTree_=new Nu({startListening:(r,s,o,a)=>{let l=[];const d=t.infoData_.getNode(r._path);return d.isEmpty()||(l=fo(t.infoSyncTree_,r._path,d),setTimeout(()=>{a("ok")},0)),l},stopListening:()=>{}}),nd(t,"connected",!1),t.serverSyncTree_=new Nu({startListening:(r,s,o,a)=>(t.server_.listen(r,o,s,(l,d)=>{const u=a(l,d);Dn(t.eventQueue_,r._path,u)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function bp(t){const n=t.infoData_.getNode(new pt(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function tc(t){return $_({timestamp:bp(t)})}function Au(t,e,n,r,s){t.dataUpdateCount++;const o=new pt(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let a=[];if(s)if(r){const d=ha(n,u=>Lt(u));a=I_(t.serverSyncTree_,o,d,s)}else{const d=Lt(n);a=rp(t.serverSyncTree_,o,d,s)}else if(r){const d=ha(n,u=>Lt(u));a=N_(t.serverSyncTree_,o,d)}else{const d=Lt(n);a=fo(t.serverSyncTree_,o,d)}let l=o;a.length>0&&(l=hi(t,o)),Dn(t.eventQueue_,l,a)}function Iu(t,e){nd(t,"connected",e),e===!1&&sC(t)}function eC(t,e){Yt(e,(n,r)=>{nd(t,n,r)})}function nd(t,e,n){const r=new pt("/.info/"+e),s=Lt(n);t.infoData_.updateSnapshot(r,s);const o=fo(t.infoSyncTree_,r,s);Dn(t.eventQueue_,r,o)}function rd(t){return t.nextWriteId_++}function tC(t,e,n){const r=T_(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(s=>{const o=Lt(s).withIndex(e._queryParams.getIndex());il(t.serverSyncTree_,e,n,!0);let a;if(e._queryParams.loadsAllData())a=fo(t.serverSyncTree_,e._path,o);else{const l=so(t.serverSyncTree_,e);a=rp(t.serverSyncTree_,e._path,o,l)}return Dn(t.eventQueue_,e._path,a),xa(t.serverSyncTree_,e,n,null,!0),o},s=>(bo(t,"get for query "+Ut(e)+" failed: "+s),Promise.reject(new Error(s))))}function nC(t,e,n,r,s){bo(t,"set",{path:e.toString(),value:n,priority:r});const o=tc(t),a=Lt(n,r),l=zl(t.serverSyncTree_,e),d=cp(a,l,o),u=rd(t),g=np(t.serverSyncTree_,e,d,u,!0);ec(t.eventQueue_,g),t.server_.put(e.toString(),a.val(!0),(p,S)=>{const _=p==="ok";_||an("set at "+e+" failed: "+p);const I=Gr(t.serverSyncTree_,u,!_);Dn(t.eventQueue_,e,I),al(t,s,p,S)});const f=id(t,e);hi(t,f),Dn(t.eventQueue_,f,[])}function rC(t,e,n,r){bo(t,"update",{path:e.toString(),value:n});let s=!0;const o=tc(t),a={};if(Yt(n,(l,d)=>{s=!1,a[l]=ap(xt(e,l),Lt(d),t.serverSyncTree_,o)}),s)Vt("update() called with empty data.  Don't do anything."),al(t,r,"ok",void 0);else{const l=rd(t),d=E_(t.serverSyncTree_,e,a,l);ec(t.eventQueue_,d),t.server_.merge(e.toString(),n,(u,g)=>{const f=u==="ok";f||an("update at "+e+" failed: "+u);const p=Gr(t.serverSyncTree_,l,!f),S=p.length>0?hi(t,e):e;Dn(t.eventQueue_,S,p),al(t,r,u,g)}),Yt(n,u=>{const g=id(t,xt(e,u));hi(t,g)}),Dn(t.eventQueue_,e,[])}}function sC(t){bo(t,"onDisconnectEvents");const e=tc(t),n=ya();Zc(t.onDisconnect_,st(),(s,o)=>{const a=ap(s,o,t.serverSyncTree_,e);Bm(n,s,a)});let r=[];Zc(n,st(),(s,o)=>{r=r.concat(fo(t.serverSyncTree_,s,o));const a=id(t,s);hi(t,a)}),t.onDisconnect_=ya(),Dn(t.eventQueue_,st(),r)}function iC(t,e,n){let r;Ve(e._path)===".info"?r=il(t.infoSyncTree_,e,n):r=il(t.serverSyncTree_,e,n),fp(t.eventQueue_,e._path,r)}function yp(t,e,n){let r;Ve(e._path)===".info"?r=xa(t.infoSyncTree_,e,n):r=xa(t.serverSyncTree_,e,n),fp(t.eventQueue_,e._path,r)}function oC(t){t.persistentConnection_&&t.persistentConnection_.interrupt(J_)}function bo(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Vt(n,...e)}function al(t,e,n,r){e&&bi(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let o=s;r&&(o+=": "+r);const a=new Error(o);a.code=s,e(a)}})}function vp(t,e,n){return zl(t.serverSyncTree_,e,n)||je.EMPTY_NODE}function sd(t,e=t.transactionQueueTree_){if(e||nc(t,e),vi(e)){const n=Cp(t,e);oe(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&aC(t,go(e),n)}else dp(e)&&Qa(e,n=>{sd(t,n)})}function aC(t,e,n){const r=n.map(u=>u.currentWriteId),s=vp(t,e,r);let o=s;const a=s.hash();for(let u=0;u<n.length;u++){const g=n[u];oe(g.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),g.status=1,g.retryCount++;const f=on(e,g.path);o=o.updateChild(f,g.currentOutputSnapshotRaw)}const l=o.val(!0),d=e;t.server_.put(d.toString(),l,u=>{bo(t,"transaction put response",{path:d.toString(),status:u});let g=[];if(u==="ok"){const f=[];for(let p=0;p<n.length;p++)n[p].status=2,g=g.concat(Gr(t.serverSyncTree_,n[p].currentWriteId)),n[p].onComplete&&f.push(()=>n[p].onComplete(null,!0,n[p].currentOutputSnapshotResolved)),n[p].unwatcher();nc(t,Zl(t.transactionQueueTree_,e)),sd(t,t.transactionQueueTree_),Dn(t.eventQueue_,e,g);for(let p=0;p<f.length;p++)bi(f[p])}else{if(u==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{an("transaction at "+d.toString()+" failed: "+u);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=u}hi(t,e)}},a)}function hi(t,e){const n=_p(t,e),r=go(n),s=Cp(t,n);return cC(t,s,r),r}function cC(t,e,n){if(e.length===0)return;const r=[];let s=[];const a=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const d=e[l],u=on(n,d.path);let g=!1,f;if(oe(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),d.status===4)g=!0,f=d.abortReason,s=s.concat(Gr(t.serverSyncTree_,d.currentWriteId,!0));else if(d.status===0)if(d.retryCount>=X_)g=!0,f="maxretry",s=s.concat(Gr(t.serverSyncTree_,d.currentWriteId,!0));else{const p=vp(t,d.path,a);d.currentInputSnapshot=p;const S=e[l].update(p.val());if(S!==void 0){Za("transaction failed: Data returned ",S,d.path);let _=Lt(S);typeof S=="object"&&S!=null&&lr(S,".priority")||(_=_.updatePriority(p.getPriority()));const F=d.currentWriteId,P=tc(t),k=cp(_,p,P);d.currentOutputSnapshotRaw=_,d.currentOutputSnapshotResolved=k,d.currentWriteId=rd(t),a.splice(a.indexOf(F),1),s=s.concat(np(t.serverSyncTree_,d.path,k,d.currentWriteId,d.applyLocally)),s=s.concat(Gr(t.serverSyncTree_,F,!0))}else g=!0,f="nodata",s=s.concat(Gr(t.serverSyncTree_,d.currentWriteId,!0))}Dn(t.eventQueue_,n,s),s=[],g&&(e[l].status=2,(function(p){setTimeout(p,Math.floor(0))})(e[l].unwatcher),e[l].onComplete&&(f==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(f),!1,null))))}nc(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)bi(r[l]);sd(t,t.transactionQueueTree_)}function _p(t,e){let n,r=t.transactionQueueTree_;for(n=Ve(e);n!==null&&vi(r)===void 0;)r=Zl(r,n),e=bt(e),n=Ve(e);return r}function Cp(t,e){const n=[];return Sp(t,e,n),n.sort((r,s)=>r.order-s.order),n}function Sp(t,e,n){const r=vi(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);Qa(e,s=>{Sp(t,s,n)})}function nc(t,e){const n=vi(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,lp(e,n.length>0?n:void 0)}Qa(e,r=>{nc(t,r)})}function id(t,e){const n=go(_p(t,e)),r=Zl(t.transactionQueueTree_,e);return j_(r,s=>{Ic(t,s)}),Ic(t,r),up(r,s=>{Ic(t,s)}),n}function Ic(t,e){const n=vi(e);if(n){const r=[];let s=[],o=-1;for(let a=0;a<n.length;a++)n[a].status===3||(n[a].status===1?(oe(o===a-1,"All SENT items should be at beginning of queue."),o=a,n[a].status=3,n[a].abortReason="set"):(oe(n[a].status===0,"Unexpected transaction status in abort"),n[a].unwatcher(),s=s.concat(Gr(t.serverSyncTree_,n[a].currentWriteId,!0)),n[a].onComplete&&r.push(n[a].onComplete.bind(null,new Error("set"),!1,null))));o===-1?lp(e,void 0):n.length=o+1,Dn(t.eventQueue_,go(e),s);for(let a=0;a<r.length;a++)bi(r[a])}}/**
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
 */function lC(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function dC(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):an(`Invalid query segment '${n}' in query '${t}'`)}return e}const Tu=function(t,e){const n=uC(t),r=n.namespace;n.domain==="firebase.com"&&Ir(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Ir("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Cy();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Em(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new pt(n.pathString)}},uC=function(t){let e="",n="",r="",s="",o="",a=!0,l="https",d=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let g=t.indexOf("/");g===-1&&(g=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(g,f)),g<f&&(s=lC(t.substring(g,f)));const p=dC(t.substring(Math.min(t.length,f)));u=e.indexOf(":"),u>=0?(a=l==="https"||l==="wss",d=parseInt(e.substring(u+1),10)):u=e.length;const S=e.slice(0,u);if(S.toLowerCase()==="localhost")n="localhost";else if(S.split(".").length<=2)n=S;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),o=r}"ns"in p&&(o=p.ns)}return{host:e,port:d,domain:n,subdomain:r,secure:a,scheme:l,pathString:s,namespace:o}};/**
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
 */const Ru="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",hC=(function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let s;const o=new Array(8);for(s=7;s>=0;s--)o[s]=Ru.charAt(n%64),n=Math.floor(n/64);oe(n===0,"Cannot push at time == 0");let a=o.join("");if(r){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)a+=Ru.charAt(e[s]);return oe(a.length===20,"nextPushId: Length should be 20."),a}})();/**
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
 */class mC{constructor(e,n,r,s){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ut(this.snapshot.exportVal())}}class pC{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class od{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return oe(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class ad{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return Xe(this._path)?null:Fl(this._path)}get ref(){return new Rr(this._repo,this._path)}get _queryIdentifier(){const e=fu(this._queryParams),n=Il(e);return n==="{}"?"default":n}get _queryObject(){return fu(this._queryParams)}isEqual(e){if(e=Tt(e),!(e instanceof ad))return!1;const n=this._repo===e._repo,r=Pl(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+sv(this._path)}}class Rr extends ad{constructor(e,n){super(e,n,new Ml,!1)}get parent(){const e=Pm(this._path);return e===null?null:new Rr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class io{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new pt(e),r=oo(this.ref,e);return new io(this._node.getChild(n),r,At)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new io(s,oo(this.ref,r),At)))}hasChild(e){const n=new pt(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function me(t,e){return t=Tt(t),t._checkNotDeleted("ref"),e!==void 0?oo(t._root,e):t._root}function oo(t,e){return t=Tt(t),Ve(t._path)===null?q_("child","path",e):pp("child","path",e),new Rr(t._repo,xt(t._path,e))}function Aa(t,e){t=Tt(t),td("push",t._path),mp("push",e,t._path,!0);const n=bp(t._repo),r=hC(n),s=oo(t,r),o=oo(t,r);let a;return e!=null?a=It(o,e).then(()=>o):a=Promise.resolve(o),s.then=a.then.bind(a),s.catch=a.then.bind(a,void 0),s}function Hn(t){return td("remove",t._path),It(t,null)}function It(t,e){t=Tt(t),td("set",t._path),mp("set",e,t._path,!1);const n=new lo;return nC(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function xr(t,e){z_("update",e,t._path);const n=new lo;return rC(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function qe(t){t=Tt(t);const e=new od(()=>{}),n=new yo(e);return tC(t._repo,t,n).then(r=>new io(r,new Rr(t._repo,t._path),t._queryParams.getIndex()))}class yo{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new mC("value",this,new io(e.snapshotNode,new Rr(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new pC(this,e,n):null}matches(e){return e instanceof yo?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function fC(t,e,n,r,s){const o=new od(n,void 0),a=new yo(o);return iC(t._repo,t,a),()=>yp(t._repo,t,a)}function Wi(t,e,n,r){return fC(t,"value",e)}function mI(t,e,n){let r=null;const s=n?new od(n):null;r=new yo(s),yp(t._repo,t,r)}g_(Rr);C_(Rr);/**
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
 */const gC="FIREBASE_DATABASE_EMULATOR_HOST",cl={};let bC=!1;function yC(t,e,n,r){const s=e.lastIndexOf(":"),o=e.substring(0,s),a=es(o);t.repoInfo_=new Em(e,a,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(t.authTokenProvider_=r)}function vC(t,e,n,r,s){let o=r||t.options.databaseURL;o===void 0&&(t.options.projectId||Ir("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Vt("Using default host for project ",t.options.projectId),o=`${t.options.projectId}-default-rtdb.firebaseio.com`);let a=Tu(o,s),l=a.repoInfo,d;typeof process<"u"&&Xd&&(d=Xd[gC]),d?(o=`http://${d}?ns=${l.namespace}`,a=Tu(o,s),l=a.repoInfo):a.repoInfo.secure;const u=new Fy(t.name,t.options,e);V_("Invalid Firebase Database URL",a),Xe(a.path)||Ir("Database URL must point to the root of a Firebase Database (not including a child path).");const g=CC(l,t,u,new ky(t,n));return new SC(g,t)}function _C(t,e){const n=cl[e];(!n||n[t.key]!==t)&&Ir(`Database ${e}(${t.repoInfo_}) has already been deleted.`),oC(t),delete n[t.key]}function CC(t,e,n,r){let s=cl[e.name];s||(s={},cl[e.name]=s);let o=s[t.toURLString()];return o&&Ir("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),o=new Q_(t,bC,n,r),s[t.toURLString()]=o,o}class SC{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Z_(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Rr(this._repo,st())),this._rootInternal}_delete(){return this._rootInternal!==null&&(_C(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ir("Cannot call "+e+" on a deleted database.")}}function ei(t=qa(),e){const n=ts(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Jh("database");r&&wC(n,...r)}return n}function wC(t,e,n,r={}){t=Tt(t),t._checkNotDeleted("useEmulator");const s=`${e}:${n}`,o=t._repoInternal;if(t._instanceStarted){if(s===t._repoInternal.repoInfo_.host&&Kr(r,o.repoInfo_.emulatorOptions))return;Ir("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let a;if(o.repoInfo_.nodeAdmin)r.mockUserToken&&Ir('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),a=new na(na.OWNER);else if(r.mockUserToken){const l=typeof r.mockUserToken=="string"?r.mockUserToken:Lg(r.mockUserToken,t.app.options.projectId);a=new na(l)}es(e)&&(wl(e),El("Database",!0)),yC(o,s,r,a)}/**
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
 */function EC(t){fy(ks),$n(new wn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),o=e.getProvider("app-check-internal");return vC(r,s,o,n)},"PUBLIC").setMultipleInstances(!0)),Zt(Qd,Zd,t),Zt(Qd,Zd,"esm2020")}/**
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
 */const NC={".sv":"timestamp"};function xC(){return NC}Nr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Nr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};EC();function wp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const AC=wp,Ep=new Rs("auth","Firebase",wp());/**
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
 */const Ia=new uo("@firebase/auth");function IC(t,...e){Ia.logLevel<=dt.WARN&&Ia.warn(`Auth (${ks}): ${t}`,...e)}function ra(t,...e){Ia.logLevel<=dt.ERROR&&Ia.error(`Auth (${ks}): ${t}`,...e)}/**
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
 */function Kn(t,...e){throw cd(t,...e)}function or(t,...e){return cd(t,...e)}function Np(t,e,n){const r={...AC(),[e]:n};return new Rs("auth","Firebase",r).create(e,{appName:t.name})}function Yr(t){return Np(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function cd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ep.create(t,...e)}function Me(t,e,...n){if(!t)throw cd(e,...n)}function Sr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ra(e),new Error(e)}function Tr(t,e){t||Sr(e)}/**
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
 */function ll(){return typeof self<"u"&&self.location?.href||""}function TC(){return ku()==="http:"||ku()==="https:"}function ku(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function RC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(TC()||Zh()||"connection"in navigator)?navigator.onLine:!0}function kC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class vo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Tr(n>e,"Short delay should be less than long delay!"),this.isMobile=Nl()||em()}get(){return RC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ld(t,e){Tr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class xp{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Sr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Sr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Sr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const FC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const PC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],$C=new vo(3e4,6e4);function $s(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function ns(t,e,n,r,s={}){return Ap(t,s,async()=>{let o={},a={};r&&(e==="GET"?a=r:o={body:JSON.stringify(r)});const l=gi({key:t.config.apiKey,...a}).slice(1),d=await t._getAdditionalHeaders();d["Content-Type"]="application/json",t.languageCode&&(d["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:d,...o};return Hg()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&es(t.emulatorConfig.host)&&(u.credentials="include"),xp.fetch()(await Ip(t,t.config.apiHost,n,l),u)})}async function Ap(t,e,n){t._canInitEmulator=!1;const r={...FC,...e};try{const s=new OC(t),o=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw Xo(t,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const l=o.ok?a.errorMessage:a.error.message,[d,u]=l.split(" : ");if(d==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xo(t,"credential-already-in-use",a);if(d==="EMAIL_EXISTS")throw Xo(t,"email-already-in-use",a);if(d==="USER_DISABLED")throw Xo(t,"user-disabled",a);const g=r[d]||d.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Np(t,g,u);Kn(t,g)}}catch(s){if(s instanceof On)throw s;Kn(t,"network-request-failed",{message:String(s)})}}async function rc(t,e,n,r,s={}){const o=await ns(t,e,n,r,s);return"mfaPendingCredential"in o&&Kn(t,"multi-factor-auth-required",{_serverResponse:o}),o}async function Ip(t,e,n,r){const s=`${e}${n}?${r}`,o=t,a=o.config.emulator?ld(t.config,s):`${t.config.apiScheme}://${s}`;return PC.includes(n)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(a).toString():a}function DC(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class OC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(or(this.auth,"network-request-failed")),$C.get())})}}function Xo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=or(t,e,r);return s.customData._tokenResponse=n,s}function Fu(t){return t!==void 0&&t.enterprise!==void 0}class MC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return DC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function jC(t,e){return ns(t,"GET","/v2/recaptchaConfig",$s(t,e))}/**
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
 */async function LC(t,e){return ns(t,"POST","/v1/accounts:delete",e)}async function Ta(t,e){return ns(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function zi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function UC(t,e=!1){const n=Tt(t),r=await n.getIdToken(e),s=dd(r);Me(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o=typeof s.firebase=="object"?s.firebase:void 0,a=o?.sign_in_provider;return{claims:s,token:r,authTime:zi(Tc(s.auth_time)),issuedAtTime:zi(Tc(s.iat)),expirationTime:zi(Tc(s.exp)),signInProvider:a||null,signInSecondFactor:o?.sign_in_second_factor||null}}function Tc(t){return Number(t)*1e3}function dd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ra("JWT malformed, contained fewer than 3 sections"),null;try{const s=ua(n);return s?JSON.parse(s):(ra("Failed to decode base64 JWT payload"),null)}catch(s){return ra("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Pu(t){const e=dd(t);return Me(e,"internal-error"),Me(typeof e.exp<"u","internal-error"),Me(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ao(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof On&&BC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function BC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class HC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class dl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=zi(this.lastLoginAt),this.creationTime=zi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ra(t){const e=t.auth,n=await t.getIdToken(),r=await ao(t,Ta(e,{idToken:n}));Me(r?.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=s.providerUserInfo?.length?Tp(s.providerUserInfo):[],a=WC(t.providerData,o),l=t.isAnonymous,d=!(t.email&&s.passwordHash)&&!a?.length,u=l?d:!1,g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new dl(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,g)}async function GC(t){const e=Tt(t);await Ra(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function WC(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Tp(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function zC(t,e){const n=await Ap(t,{},async()=>{const r=gi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:o}=t.config,a=await Ip(t,s,"/v1/token",`key=${o}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const d={method:"POST",headers:l,body:r};return t.emulatorConfig&&es(t.emulatorConfig.host)&&(d.credentials="include"),xp.fetch()(a,d)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function qC(t,e){return ns(t,"POST","/v2/accounts:revokeToken",$s(t,e))}/**
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
 */class ti{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Me(e.idToken,"internal-error"),Me(typeof e.idToken<"u","internal-error"),Me(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Pu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Me(e.length!==0,"internal-error");const n=Pu(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Me(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:o}=await zC(e,n);this.updateTokensAndExpiration(r,s,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:o}=n,a=new ti;return r&&(Me(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(Me(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),o&&(Me(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ti,this.toJSON())}_performRefresh(){return Sr("not implemented")}}/**
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
 */function Mr(t,e){Me(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class qn{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new HC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new dl(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ao(this,this.stsTokenManager.getToken(this.auth,e));return Me(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return UC(this,e)}reload(){return GC(this)}_assign(e){this!==e&&(Me(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new qn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Me(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ra(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Cn(this.auth.app))return Promise.reject(Yr(this.auth));const e=await this.getIdToken();return await ao(this,LC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,o=n.phoneNumber??void 0,a=n.photoURL??void 0,l=n.tenantId??void 0,d=n._redirectEventId??void 0,u=n.createdAt??void 0,g=n.lastLoginAt??void 0,{uid:f,emailVerified:p,isAnonymous:S,providerData:_,stsTokenManager:I}=n;Me(f&&I,e,"internal-error");const F=ti.fromJSON(this.name,I);Me(typeof f=="string",e,"internal-error"),Mr(r,e.name),Mr(s,e.name),Me(typeof p=="boolean",e,"internal-error"),Me(typeof S=="boolean",e,"internal-error"),Mr(o,e.name),Mr(a,e.name),Mr(l,e.name),Mr(d,e.name),Mr(u,e.name),Mr(g,e.name);const P=new qn({uid:f,auth:e,email:s,emailVerified:p,displayName:r,isAnonymous:S,photoURL:a,phoneNumber:o,tenantId:l,stsTokenManager:F,createdAt:u,lastLoginAt:g});return _&&Array.isArray(_)&&(P.providerData=_.map(k=>({...k}))),d&&(P._redirectEventId=d),P}static async _fromIdTokenResponse(e,n,r=!1){const s=new ti;s.updateFromServerResponse(n);const o=new qn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ra(o),o}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];Me(s.localId!==void 0,"internal-error");const o=s.providerUserInfo!==void 0?Tp(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!o?.length,l=new ti;l.updateFromIdToken(r);const d=new qn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new dl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!o?.length};return Object.assign(d,u),d}}/**
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
 */const $u=new Map;function wr(t){Tr(t instanceof Function,"Expected a class definition");let e=$u.get(t);return e?(Tr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,$u.set(t,e),e)}/**
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
 */class Rp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Rp.type="NONE";const Du=Rp;/**
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
 */function sa(t,e,n){return`firebase:${t}:${e}:${n}`}class ni{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:o}=this.auth;this.fullUserKey=sa(this.userKey,s.apiKey,o),this.fullPersistenceKey=sa("persistence",s.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ta(this.auth,{idToken:e}).catch(()=>{});return n?qn._fromGetAccountInfoResponse(this.auth,n,e):null}return qn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ni(wr(Du),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=s[0]||wr(Du);const a=sa(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const g=await u._get(a);if(g){let f;if(typeof g=="string"){const p=await Ta(e,{idToken:g}).catch(()=>{});if(!p)break;f=await qn._fromGetAccountInfoResponse(e,p,g)}else f=qn._fromJSON(e,g);u!==o&&(l=f),o=u;break}}catch{}const d=s.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!d.length?new ni(o,e,r):(o=d[0],l&&await o._set(a,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(a)}catch{}})),new ni(o,e,r))}}/**
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
 */function Ou(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if($p(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(kp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Op(e))return"Blackberry";if(Mp(e))return"Webos";if(Fp(e))return"Safari";if((e.includes("chrome/")||Pp(e))&&!e.includes("edge/"))return"Chrome";if(Dp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function kp(t=ln()){return/firefox\//i.test(t)}function Fp(t=ln()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Pp(t=ln()){return/crios\//i.test(t)}function $p(t=ln()){return/iemobile/i.test(t)}function Dp(t=ln()){return/android/i.test(t)}function Op(t=ln()){return/blackberry/i.test(t)}function Mp(t=ln()){return/webos/i.test(t)}function ud(t=ln()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function VC(t=ln()){return ud(t)&&!!window.navigator?.standalone}function YC(){return Gg()&&document.documentMode===10}function jp(t=ln()){return ud(t)||Dp(t)||Mp(t)||Op(t)||/windows phone/i.test(t)||$p(t)}/**
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
 */function Lp(t,e=[]){let n;switch(t){case"Browser":n=Ou(ln());break;case"Worker":n=`${Ou(ln())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ks}/${r}`}/**
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
 */class KC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((a,l)=>{try{const d=e(o);a(d)}catch(d){l(d)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function JC(t,e={}){return ns(t,"GET","/v2/passwordPolicy",$s(t,e))}/**
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
 */const XC=6;class QC{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??XC,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
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
 */class ZC{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Mu(this),this.idTokenSubscription=new Mu(this),this.beforeStateQueue=new KC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ep,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=wr(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await ni.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ta(this,{idToken:e}),r=await qn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Cn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=this.redirectUser?._redirectEventId,a=r?._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&l?.user&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Me(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ra(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=kC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Cn(this.app))return Promise.reject(Yr(this));const n=e?Tt(e):null;return n&&Me(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Me(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Cn(this.app)?Promise.reject(Yr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Cn(this.app)?Promise.reject(Yr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(wr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await JC(this),n=new QC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Rs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await qC(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&wr(e)||this._popupRedirectResolver;Me(n,this,"argument-error"),this.redirectPersistenceManager=await ni.create(this,[wr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Me(l,this,"internal-error"),l.then(()=>{a||o(this.currentUser)}),typeof n=="function"){const d=e.addObserver(n,r,s);return()=>{a=!0,d()}}else{const d=e.addObserver(n);return()=>{a=!0,d()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Me(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Lp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(Cn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&IC(`Error while retrieving App Check token: ${e.error}`),e?.token}}function _i(t){return Tt(t)}class Mu{constructor(e){this.auth=e,this.observer=null,this.addObserver=Qg(n=>this.observer=n)}get next(){return Me(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let sc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function eS(t){sc=t}function Up(t){return sc.loadJS(t)}function tS(){return sc.recaptchaEnterpriseScript}function nS(){return sc.gapiScript}function rS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class sS{constructor(){this.enterprise=new iS}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class iS{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const oS="recaptcha-enterprise",Bp="NO_RECAPTCHA";class aS{constructor(e){this.type=oS,this.auth=_i(e)}async verify(e="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(a,l)=>{jC(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(d=>{if(d.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new MC(d);return o.tenantId==null?o._agentRecaptchaConfig=u:o._tenantRecaptchaConfigs[o.tenantId]=u,a(u.siteKey)}}).catch(d=>{l(d)})})}function s(o,a,l){const d=window.grecaptcha;Fu(d)?d.enterprise.ready(()=>{d.enterprise.execute(o,{action:e}).then(u=>{a(u)}).catch(()=>{a(Bp)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new sS().execute("siteKey",{action:"verify"}):new Promise((o,a)=>{r(this.auth).then(l=>{if(!n&&Fu(window.grecaptcha))s(l,o,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let d=tS();d.length!==0&&(d+=l),Up(d).then(()=>{s(l,o,a)}).catch(u=>{a(u)})}}).catch(l=>{a(l)})})}}async function ju(t,e,n,r=!1,s=!1){const o=new aS(t);let a;if(s)a=Bp;else try{a=await o.verify(n)}catch{a=await o.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const d=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:d,recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const d=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:a}):Object.assign(l,{captchaResponse:a}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Lu(t,e,n,r,s){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await ju(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await ju(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
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
 */function cS(t,e){const n=ts(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),o=n.getOptions();if(Kr(o,e??{}))return s;Kn(s,"already-initialized")}return n.initialize({options:e})}function lS(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(wr);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function dS(t,e,n){const r=_i(t);Me(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,o=Hp(e),{host:a,port:l}=uS(e),d=l===null?"":`:${l}`,u={url:`${o}//${a}${d}/`},g=Object.freeze({host:a,port:l,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){Me(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Me(Kr(u,r.config.emulator)&&Kr(g,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=g,r.settings.appVerificationDisabledForTesting=!0,es(a)?(wl(`${o}//${a}${d}`),El("Auth",!0)):hS()}function Hp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function uS(t){const e=Hp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const o=s[1];return{host:o,port:Uu(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:Uu(a)}}}function Uu(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function hS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class hd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Sr("not implemented")}_getIdTokenResponse(e){return Sr("not implemented")}_linkToIdToken(e,n){return Sr("not implemented")}_getReauthenticationResolver(e){return Sr("not implemented")}}async function mS(t,e){return ns(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function pS(t,e){return rc(t,"POST","/v1/accounts:signInWithPassword",$s(t,e))}/**
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
 */async function fS(t,e){return rc(t,"POST","/v1/accounts:signInWithEmailLink",$s(t,e))}async function gS(t,e){return rc(t,"POST","/v1/accounts:signInWithEmailLink",$s(t,e))}/**
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
 */class co extends hd{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new co(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new co(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Lu(e,n,"signInWithPassword",pS);case"emailLink":return fS(e,{email:this._email,oobCode:this._password});default:Kn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Lu(e,r,"signUpPassword",mS);case"emailLink":return gS(e,{idToken:n,email:this._email,oobCode:this._password});default:Kn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ri(t,e){return rc(t,"POST","/v1/accounts:signInWithIdp",$s(t,e))}/**
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
 */const bS="http://localhost";class xs extends hd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new xs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Kn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...o}=n;if(!r||!s)return null;const a=new xs(r,s);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return ri(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ri(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ri(e,n)}buildRequest(){const e={requestUri:bS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=gi(n)}return e}}/**
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
 */function yS(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function vS(t){const e=$i(Di(t)).link,n=e?$i(Di(e)).deep_link_id:null,r=$i(Di(t)).deep_link_id;return(r?$i(Di(r)).link:null)||r||n||e||t}class md{constructor(e){const n=$i(Di(e)),r=n.apiKey??null,s=n.oobCode??null,o=yS(n.mode??null);Me(r&&s&&o,"argument-error"),this.apiKey=r,this.operation=o,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=vS(e);try{return new md(n)}catch{return null}}}/**
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
 */class Ci{constructor(){this.providerId=Ci.PROVIDER_ID}static credential(e,n){return co._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=md.parseLink(n);return Me(r,"argument-error"),co._fromEmailAndCode(e,r.code,r.tenantId)}}Ci.PROVIDER_ID="password";Ci.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ci.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Gp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class _o extends Gp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Lr extends _o{constructor(){super("facebook.com")}static credential(e){return xs._fromParams({providerId:Lr.PROVIDER_ID,signInMethod:Lr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Lr.credentialFromTaggedObject(e)}static credentialFromError(e){return Lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Lr.credential(e.oauthAccessToken)}catch{return null}}}Lr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Lr.PROVIDER_ID="facebook.com";/**
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
 */class Ur extends _o{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return xs._fromParams({providerId:Ur.PROVIDER_ID,signInMethod:Ur.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ur.credentialFromTaggedObject(e)}static credentialFromError(e){return Ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ur.credential(n,r)}catch{return null}}}Ur.GOOGLE_SIGN_IN_METHOD="google.com";Ur.PROVIDER_ID="google.com";/**
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
 */class Br extends _o{constructor(){super("github.com")}static credential(e){return xs._fromParams({providerId:Br.PROVIDER_ID,signInMethod:Br.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Br.credentialFromTaggedObject(e)}static credentialFromError(e){return Br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Br.credential(e.oauthAccessToken)}catch{return null}}}Br.GITHUB_SIGN_IN_METHOD="github.com";Br.PROVIDER_ID="github.com";/**
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
 */class Hr extends _o{constructor(){super("twitter.com")}static credential(e,n){return xs._fromParams({providerId:Hr.PROVIDER_ID,signInMethod:Hr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Hr.credentialFromTaggedObject(e)}static credentialFromError(e){return Hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Hr.credential(n,r)}catch{return null}}}Hr.TWITTER_SIGN_IN_METHOD="twitter.com";Hr.PROVIDER_ID="twitter.com";/**
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
 */class mi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const o=await qn._fromIdTokenResponse(e,r,s),a=Bu(r);return new mi({user:o,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Bu(r);return new mi({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Bu(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ka extends On{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ka.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ka(e,n,r,s)}}function Wp(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?ka._fromErrorAndOperation(t,o,e,r):o})}async function _S(t,e,n=!1){const r=await ao(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return mi._forOperation(t,"link",r)}/**
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
 */async function CS(t,e,n=!1){const{auth:r}=t;if(Cn(r.app))return Promise.reject(Yr(r));const s="reauthenticate";try{const o=await ao(t,Wp(r,s,e,t),n);Me(o.idToken,r,"internal-error");const a=dd(o.idToken);Me(a,r,"internal-error");const{sub:l}=a;return Me(t.uid===l,r,"user-mismatch"),mi._forOperation(t,s,o)}catch(o){throw o?.code==="auth/user-not-found"&&Kn(r,"user-mismatch"),o}}/**
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
 */async function zp(t,e,n=!1){if(Cn(t.app))return Promise.reject(Yr(t));const r="signIn",s=await Wp(t,r,e),o=await mi._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(o.user),o}async function SS(t,e){return zp(_i(t),e)}/**
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
 */async function wS(t){const e=_i(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function qp(t,e,n){return Cn(t.app)?Promise.reject(Yr(t)):SS(Tt(t),Ci.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&wS(t),r})}function ES(t,e,n,r){return Tt(t).onIdTokenChanged(e,n,r)}function NS(t,e,n){return Tt(t).beforeAuthStateChanged(e,n)}function xS(t,e,n,r){return Tt(t).onAuthStateChanged(e,n,r)}function AS(t){return Tt(t).signOut()}const Fa="__sak";/**
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
 */class Vp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Fa,"1"),this.storage.removeItem(Fa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const IS=1e3,TS=10;class Yp extends Vp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=jp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,l,d)=>{this.notifyListeners(a,d)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);YC()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,TS):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},IS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Yp.type="LOCAL";const RS=Yp;/**
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
 */class Kp extends Vp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Kp.type="SESSION";const Jp=Kp;/**
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
 */function kS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ic{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ic(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:o}=n.data,a=this.handlersMap[s];if(!a?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async u=>u(n.origin,o)),d=await kS(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:d})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ic.receivers=[];/**
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
 */function pd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class FS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let o,a;return new Promise((l,d)=>{const u=pd("",20);s.port1.start();const g=setTimeout(()=>{d(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(f){const p=f;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(g),o=setTimeout(()=>{d(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),l(p.data.response);break;default:clearTimeout(g),clearTimeout(o),d(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function ar(){return window}function PS(t){ar().location.href=t}/**
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
 */function Xp(){return typeof ar().WorkerGlobalScope<"u"&&typeof ar().importScripts=="function"}async function $S(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function DS(){return navigator?.serviceWorker?.controller||null}function OS(){return Xp()?self:null}/**
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
 */const Qp="firebaseLocalStorageDb",MS=1,Pa="firebaseLocalStorage",Zp="fbase_key";class Co{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function oc(t,e){return t.transaction([Pa],e?"readwrite":"readonly").objectStore(Pa)}function jS(){const t=indexedDB.deleteDatabase(Qp);return new Co(t).toPromise()}function ul(){const t=indexedDB.open(Qp,MS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Pa,{keyPath:Zp})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Pa)?e(r):(r.close(),await jS(),e(await ul()))})})}async function Hu(t,e,n){const r=oc(t,!0).put({[Zp]:e,value:n});return new Co(r).toPromise()}async function LS(t,e){const n=oc(t,!1).get(e),r=await new Co(n).toPromise();return r===void 0?null:r.value}function Gu(t,e){const n=oc(t,!0).delete(e);return new Co(n).toPromise()}const US=800,BS=3;class ef{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ul(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>BS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ic._getInstance(OS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await $S(),!this.activeServiceWorker)return;this.sender=new FS(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||DS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ul();return await Hu(e,Fa,"1"),await Gu(e,Fa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Hu(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>LS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Gu(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const o=oc(s,!1).getAll();return new Co(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:o}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(o)&&(this.notifyListeners(s,o),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),US)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ef.type="LOCAL";const HS=ef;new vo(3e4,6e4);/**
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
 */function GS(t,e){return e?wr(e):(Me(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class fd extends hd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ri(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ri(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ri(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function WS(t){return zp(t.auth,new fd(t),t.bypassAuthState)}function zS(t){const{auth:e,user:n}=t;return Me(n,e,"internal-error"),CS(n,new fd(t),t.bypassAuthState)}async function qS(t){const{auth:e,user:n}=t;return Me(n,e,"internal-error"),_S(n,new fd(t),t.bypassAuthState)}/**
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
 */class tf{constructor(e,n,r,s,o=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:o,error:a,type:l}=e;if(a){this.reject(a);return}const d={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(d))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return WS;case"linkViaPopup":case"linkViaRedirect":return qS;case"reauthViaPopup":case"reauthViaRedirect":return zS;default:Kn(this.auth,"internal-error")}}resolve(e){Tr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Tr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const VS=new vo(2e3,1e4);class Xs extends tf{constructor(e,n,r,s,o){super(e,n,s,o),this.provider=r,this.authWindow=null,this.pollId=null,Xs.currentPopupAction&&Xs.currentPopupAction.cancel(),Xs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Me(e,this.auth,"internal-error"),e}async onExecution(){Tr(this.filter.length===1,"Popup operations only handle one event");const e=pd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(or(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(or(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xs.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(or(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,VS.get())};e()}}Xs.currentPopupAction=null;/**
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
 */const YS="pendingRedirect",ia=new Map;class KS extends tf{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ia.get(this.auth._key());if(!e){try{const r=await JS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ia.set(this.auth._key(),e)}return this.bypassAuthState||ia.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function JS(t,e){const n=ZS(e),r=QS(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function XS(t,e){ia.set(t._key(),e)}function QS(t){return wr(t._redirectPersistence)}function ZS(t){return sa(YS,t.config.apiKey,t.name)}async function ew(t,e,n=!1){if(Cn(t.app))return Promise.reject(Yr(t));const r=_i(t),s=GS(r,e),a=await new KS(r,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const tw=600*1e3;class nw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!rw(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!nf(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";n.onError(or(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=tw&&this.cachedEventUids.clear(),this.cachedEventUids.has(Wu(e))}saveEventToCache(e){this.cachedEventUids.add(Wu(e)),this.lastProcessedEventTime=Date.now()}}function Wu(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function nf({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function rw(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return nf(t);default:return!1}}/**
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
 */async function sw(t,e={}){return ns(t,"GET","/v1/projects",e)}/**
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
 */const iw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ow=/^https?/;async function aw(t){if(t.config.emulator)return;const{authorizedDomains:e}=await sw(t);for(const n of e)try{if(cw(n))return}catch{}Kn(t,"unauthorized-domain")}function cw(t){const e=ll(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!ow.test(n))return!1;if(iw.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const lw=new vo(3e4,6e4);function zu(){const t=ar().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function dw(t){return new Promise((e,n)=>{function r(){zu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zu(),n(or(t,"network-request-failed"))},timeout:lw.get()})}if(ar().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(ar().gapi?.load)r();else{const s=rS("iframefcb");return ar()[s]=()=>{gapi.load?r():n(or(t,"network-request-failed"))},Up(`${nS()}?onload=${s}`).catch(o=>n(o))}}).catch(e=>{throw oa=null,e})}let oa=null;function uw(t){return oa=oa||dw(t),oa}/**
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
 */const hw=new vo(5e3,15e3),mw="__/auth/iframe",pw="emulator/auth/iframe",fw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},gw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function bw(t){const e=t.config;Me(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ld(e,pw):`https://${t.config.authDomain}/${mw}`,r={apiKey:e.apiKey,appName:t.name,v:ks},s=gw.get(t.config.apiHost);s&&(r.eid=s);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${gi(r).slice(1)}`}async function yw(t){const e=await uw(t),n=ar().gapi;return Me(n,t,"internal-error"),e.open({where:document.body,url:bw(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fw,dontclear:!0},r=>new Promise(async(s,o)=>{await r.restyle({setHideOnLeave:!1});const a=or(t,"network-request-failed"),l=ar().setTimeout(()=>{o(a)},hw.get());function d(){ar().clearTimeout(l),s(r)}r.ping(d).then(d,()=>{o(a)})}))}/**
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
 */const vw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_w=500,Cw=600,Sw="_blank",ww="http://localhost";class qu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ew(t,e,n,r=_w,s=Cw){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const d={...vw,width:r.toString(),height:s.toString(),top:o,left:a},u=ln().toLowerCase();n&&(l=Pp(u)?Sw:n),kp(u)&&(e=e||ww,d.scrollbars="yes");const g=Object.entries(d).reduce((p,[S,_])=>`${p}${S}=${_},`,"");if(VC(u)&&l!=="_self")return Nw(e||"",l),new qu(null);const f=window.open(e||"",l,g);Me(f,t,"popup-blocked");try{f.focus()}catch{}return new qu(f)}function Nw(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const xw="__/auth/handler",Aw="emulator/auth/handler",Iw=encodeURIComponent("fac");async function Vu(t,e,n,r,s,o){Me(t.config.authDomain,t,"auth-domain-config-required"),Me(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ks,eventId:s};if(e instanceof Gp){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",Wc(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[g,f]of Object.entries({}))a[g]=f}if(e instanceof _o){const g=e.getScopes().filter(f=>f!=="");g.length>0&&(a.scopes=g.join(","))}t.tenantId&&(a.tid=t.tenantId);const l=a;for(const g of Object.keys(l))l[g]===void 0&&delete l[g];const d=await t._getAppCheckToken(),u=d?`#${Iw}=${encodeURIComponent(d)}`:"";return`${Tw(t)}?${gi(l).slice(1)}${u}`}function Tw({config:t}){return t.emulator?ld(t,Aw):`https://${t.authDomain}/${xw}`}/**
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
 */const Rc="webStorageSupport";class Rw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Jp,this._completeRedirectFn=ew,this._overrideRedirectResult=XS}async _openPopup(e,n,r,s){Tr(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const o=await Vu(e,n,r,ll(),s);return Ew(e,o,pd())}async _openRedirect(e,n,r,s){await this._originValidation(e);const o=await Vu(e,n,r,ll(),s);return PS(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:o}=this.eventManagers[n];return s?Promise.resolve(s):(Tr(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await yw(e),r=new nw(e);return n.register("authEvent",s=>(Me(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Rc,{type:Rc},s=>{const o=s?.[0]?.[Rc];o!==void 0&&n(!!o),Kn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=aw(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return jp()||Fp()||ud()}}const kw=Rw;var Yu="@firebase/auth",Ku="1.11.1";/**
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
 */class Fw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Me(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Pw(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function $w(t){$n(new wn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;Me(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const d={apiKey:a,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Lp(t)},u=new ZC(r,s,o,d);return lS(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),$n(new wn("auth-internal",e=>{const n=_i(e.getProvider("auth").getImmediate());return(r=>new Fw(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zt(Yu,Ku,Pw(t)),Zt(Yu,Ku,"esm2020")}/**
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
 */const Dw=300,Ow=Qh("authIdTokenMaxAge")||Dw;let Ju=null;const Mw=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Ow)return;const s=n?.token;Ju!==s&&(Ju=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function jw(t=qa()){const e=ts(t,"auth");if(e.isInitialized())return e.getImmediate();const n=cS(t,{popupRedirectResolver:kw,persistence:[HS,RS,Jp]}),r=Qh("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const a=Mw(o.toString());NS(n,a,()=>a(n.currentUser)),ES(n,l=>a(l))}}const s=Kh("auth");return s&&dS(n,`http://${s}`),n}function Lw(){return document.getElementsByTagName("head")?.[0]??document}eS({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const o=or("internal-error");o.customData=s,n(o)},r.type="text/javascript",r.charset="UTF-8",Lw().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});$w("Browser");const rf="@firebase/installations",gd="0.6.19";/**
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
 */const sf=1e4,of=`w:${gd}`,af="FIS_v2",Uw="https://firebaseinstallations.googleapis.com/v1",Bw=3600*1e3,Hw="installations",Gw="Installations";/**
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
 */const Ww={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},As=new Rs(Hw,Gw,Ww);function cf(t){return t instanceof On&&t.code.includes("request-failed")}/**
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
 */function lf({projectId:t}){return`${Uw}/projects/${t}/installations`}function df(t){return{token:t.token,requestStatus:2,expiresIn:qw(t.expiresIn),creationTime:Date.now()}}async function uf(t,e){const r=(await e.json()).error;return As.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function hf({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function zw(t,{refreshToken:e}){const n=hf(t);return n.append("Authorization",Vw(e)),n}async function mf(t){const e=await t();return e.status>=500&&e.status<600?t():e}function qw(t){return Number(t.replace("s","000"))}function Vw(t){return`${af} ${t}`}/**
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
 */async function Yw({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=lf(t),s=hf(t),o=e.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const a={fid:n,authVersion:af,appId:t.appId,sdkVersion:of},l={method:"POST",headers:s,body:JSON.stringify(a)},d=await mf(()=>fetch(r,l));if(d.ok){const u=await d.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:df(u.authToken)}}else throw await uf("Create Installation",d)}/**
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
 */function pf(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function Kw(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Jw=/^[cdef][\w-]{21}$/,hl="";function Xw(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Qw(t);return Jw.test(n)?n:hl}catch{return hl}}function Qw(t){return Kw(t).substr(0,22)}/**
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
 */function ac(t){return`${t.appName}!${t.appId}`}/**
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
 */const ff=new Map;function gf(t,e){const n=ac(t);bf(n,e),Zw(n,e)}function bf(t,e){const n=ff.get(t);if(n)for(const r of n)r(e)}function Zw(t,e){const n=eE();n&&n.postMessage({key:t,fid:e}),tE()}let ys=null;function eE(){return!ys&&"BroadcastChannel"in self&&(ys=new BroadcastChannel("[Firebase] FID Change"),ys.onmessage=t=>{bf(t.data.key,t.data.fid)}),ys}function tE(){ff.size===0&&ys&&(ys.close(),ys=null)}/**
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
 */const nE="firebase-installations-database",rE=1,Is="firebase-installations-store";let kc=null;function bd(){return kc||(kc=om(nE,rE,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Is)}}})),kc}async function $a(t,e){const n=ac(t),s=(await bd()).transaction(Is,"readwrite"),o=s.objectStore(Is),a=await o.get(n);return await o.put(e,n),await s.done,(!a||a.fid!==e.fid)&&gf(t,e.fid),e}async function yf(t){const e=ac(t),r=(await bd()).transaction(Is,"readwrite");await r.objectStore(Is).delete(e),await r.done}async function cc(t,e){const n=ac(t),s=(await bd()).transaction(Is,"readwrite"),o=s.objectStore(Is),a=await o.get(n),l=e(a);return l===void 0?await o.delete(n):await o.put(l,n),await s.done,l&&(!a||a.fid!==l.fid)&&gf(t,l.fid),l}/**
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
 */async function yd(t){let e;const n=await cc(t.appConfig,r=>{const s=sE(r),o=iE(t,s);return e=o.registrationPromise,o.installationEntry});return n.fid===hl?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function sE(t){const e=t||{fid:Xw(),registrationStatus:0};return vf(e)}function iE(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(As.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=oE(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:aE(t)}:{installationEntry:e}}async function oE(t,e){try{const n=await Yw(t,e);return $a(t.appConfig,n)}catch(n){throw cf(n)&&n.customData.serverCode===409?await yf(t.appConfig):await $a(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function aE(t){let e=await Xu(t.appConfig);for(;e.registrationStatus===1;)await pf(100),e=await Xu(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await yd(t);return r||n}return e}function Xu(t){return cc(t,e=>{if(!e)throw As.create("installation-not-found");return vf(e)})}function vf(t){return cE(t)?{fid:t.fid,registrationStatus:0}:t}function cE(t){return t.registrationStatus===1&&t.registrationTime+sf<Date.now()}/**
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
 */async function lE({appConfig:t,heartbeatServiceProvider:e},n){const r=dE(t,n),s=zw(t,n),o=e.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const a={installation:{sdkVersion:of,appId:t.appId}},l={method:"POST",headers:s,body:JSON.stringify(a)},d=await mf(()=>fetch(r,l));if(d.ok){const u=await d.json();return df(u)}else throw await uf("Generate Auth Token",d)}function dE(t,{fid:e}){return`${lf(t)}/${e}/authTokens:generate`}/**
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
 */async function vd(t,e=!1){let n;const r=await cc(t.appConfig,o=>{if(!_f(o))throw As.create("not-registered");const a=o.authToken;if(!e&&mE(a))return o;if(a.requestStatus===1)return n=uE(t,e),o;{if(!navigator.onLine)throw As.create("app-offline");const l=fE(o);return n=hE(t,l),l}});return n?await n:r.authToken}async function uE(t,e){let n=await Qu(t.appConfig);for(;n.authToken.requestStatus===1;)await pf(100),n=await Qu(t.appConfig);const r=n.authToken;return r.requestStatus===0?vd(t,e):r}function Qu(t){return cc(t,e=>{if(!_f(e))throw As.create("not-registered");const n=e.authToken;return gE(n)?{...e,authToken:{requestStatus:0}}:e})}async function hE(t,e){try{const n=await lE(t,e),r={...e,authToken:n};return await $a(t.appConfig,r),n}catch(n){if(cf(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await yf(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await $a(t.appConfig,r)}throw n}}function _f(t){return t!==void 0&&t.registrationStatus===2}function mE(t){return t.requestStatus===2&&!pE(t)}function pE(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Bw}function fE(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function gE(t){return t.requestStatus===1&&t.requestTime+sf<Date.now()}/**
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
 */async function bE(t){const e=t,{installationEntry:n,registrationPromise:r}=await yd(e);return r?r.catch(console.error):vd(e).catch(console.error),n.fid}/**
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
 */async function yE(t,e=!1){const n=t;return await vE(n),(await vd(n,e)).token}async function vE(t){const{registrationPromise:e}=await yd(t);e&&await e}/**
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
 */function _E(t){if(!t||!t.options)throw Fc("App Configuration");if(!t.name)throw Fc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Fc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Fc(t){return As.create("missing-app-config-values",{valueName:t})}/**
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
 */const Cf="installations",CE="installations-internal",SE=t=>{const e=t.getProvider("app").getImmediate(),n=_E(e),r=ts(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},wE=t=>{const e=t.getProvider("app").getImmediate(),n=ts(e,Cf).getImmediate();return{getId:()=>bE(n),getToken:s=>yE(n,s)}};function EE(){$n(new wn(Cf,SE,"PUBLIC")),$n(new wn(CE,wE,"PRIVATE"))}EE();Zt(rf,gd);Zt(rf,gd,"esm2020");/**
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
 */const Da="analytics",NE="firebase_id",xE="origin",AE=60*1e3,IE="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",_d="https://www.googletagmanager.com/gtag/js";/**
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
 */const cn=new uo("@firebase/analytics");/**
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
 */const TE={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Sn=new Rs("analytics","Analytics",TE);/**
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
 */function RE(t){if(!t.startsWith(_d)){const e=Sn.create("invalid-gtag-resource",{gtagURL:t});return cn.warn(e.message),""}return t}function Sf(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function kE(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function FE(t,e){const n=kE("firebase-js-sdk-policy",{createScriptURL:RE}),r=document.createElement("script"),s=`${_d}?l=${t}&id=${e}`;r.src=n?n?.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function PE(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function $E(t,e,n,r,s,o){const a=r[s];try{if(a)await e[a];else{const d=(await Sf(n)).find(u=>u.measurementId===s);d&&await e[d.appId]}}catch(l){cn.error(l)}t("config",s,o)}async function DE(t,e,n,r,s){try{let o=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const l=await Sf(n);for(const d of a){const u=l.find(f=>f.measurementId===d),g=u&&e[u.appId];if(g)o.push(g);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),t("event",r,s||{})}catch(o){cn.error(o)}}function OE(t,e,n,r){async function s(o,...a){try{if(o==="event"){const[l,d]=a;await DE(t,e,n,l,d)}else if(o==="config"){const[l,d]=a;await $E(t,e,n,r,l,d)}else if(o==="consent"){const[l,d]=a;t("consent",l,d)}else if(o==="get"){const[l,d,u]=a;t("get",l,d,u)}else if(o==="set"){const[l]=a;t("set",l)}else t(o,...a)}catch(l){cn.error(l)}}return s}function ME(t,e,n,r,s){let o=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(o=window[s]),window[s]=OE(o,t,e,n),{gtagCore:o,wrappedGtag:window[s]}}function jE(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(_d)&&n.src.includes(t))return n;return null}/**
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
 */const LE=30,UE=1e3;class BE{constructor(e={},n=UE){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const wf=new BE;function HE(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function GE(t){const{appId:e,apiKey:n}=t,r={method:"GET",headers:HE(n)},s=IE.replace("{app-id}",e),o=await fetch(s,r);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();l.error?.message&&(a=l.error.message)}catch{}throw Sn.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function WE(t,e=wf,n){const{appId:r,apiKey:s,measurementId:o}=t.options;if(!r)throw Sn.create("no-app-id");if(!s){if(o)return{measurementId:o,appId:r};throw Sn.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new VE;return setTimeout(async()=>{l.abort()},AE),Ef({appId:r,apiKey:s,measurementId:o},a,l,e)}async function Ef(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=wf){const{appId:o,measurementId:a}=t;try{await zE(r,e)}catch(l){if(a)return cn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l?.message}]`),{appId:o,measurementId:a};throw l}try{const l=await GE(t);return s.deleteThrottleMetadata(o),l}catch(l){const d=l;if(!qE(d)){if(s.deleteThrottleMetadata(o),a)return cn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${d?.message}]`),{appId:o,measurementId:a};throw l}const u=Number(d?.customData?.httpStatus)===503?Hd(n,s.intervalMillis,LE):Hd(n,s.intervalMillis),g={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(o,g),cn.debug(`Calling attemptFetch again in ${u} millis`),Ef(t,g,r,s)}}function zE(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),o=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(o),r(Sn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function qE(t){if(!(t instanceof On)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class VE{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function YE(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const o=await e,a={...r,send_to:o};t("event",n,a)}}async function KE(t,e,n,r){if(r&&r.global){const s={};for(const o of Object.keys(n))s[`user_properties.${o}`]=n[o];return t("set",s),Promise.resolve()}else{const s=await e;t("config",s,{update:!0,user_properties:n})}}/**
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
 */async function JE(){if(tm())try{await nm()}catch(t){return cn.warn(Sn.create("indexeddb-unavailable",{errorInfo:t?.toString()}).message),!1}else return cn.warn(Sn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function XE(t,e,n,r,s,o,a){const l=WE(t);l.then(p=>{n[p.measurementId]=p.appId,t.options.measurementId&&p.measurementId!==t.options.measurementId&&cn.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>cn.error(p)),e.push(l);const d=JE().then(p=>{if(p)return r.getId()}),[u,g]=await Promise.all([l,d]);jE(o)||FE(o,u.measurementId),s("js",new Date);const f=a?.config??{};return f[xE]="firebase",f.update=!0,g!=null&&(f[NE]=g),s("config",u.measurementId,f),u.measurementId}/**
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
 */class QE{constructor(e){this.app=e}_delete(){return delete si[this.app.options.appId],Promise.resolve()}}let si={},Zu=[];const eh={};let Pc="dataLayer",ZE="gtag",th,Cd,nh=!1;function e0(){const t=[];if(Zh()&&t.push("This is a browser extension environment."),zg()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Sn.create("invalid-analytics-context",{errorInfo:e});cn.warn(n.message)}}function t0(t,e,n){e0();const r=t.options.appId;if(!r)throw Sn.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)cn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Sn.create("no-api-key");if(si[r]!=null)throw Sn.create("already-exists",{id:r});if(!nh){PE(Pc);const{wrappedGtag:o,gtagCore:a}=ME(si,Zu,eh,Pc,ZE);Cd=o,th=a,nh=!0}return si[r]=XE(t,Zu,eh,e,th,Pc,n),new QE(t)}function n0(t=qa()){t=Tt(t);const e=ts(t,Da);return e.isInitialized()?e.getImmediate():r0(t)}function r0(t,e={}){const n=ts(t,Da);if(n.isInitialized()){const s=n.getImmediate();if(Kr(e,n.getOptions()))return s;throw Sn.create("already-initialized")}return n.initialize({options:e})}function s0(t,e,n){t=Tt(t),KE(Cd,si[t.app.options.appId],e,n).catch(r=>cn.error(r))}function Sd(t,e,n,r){t=Tt(t),YE(Cd,si[t.app.options.appId],e,n,r).catch(s=>cn.error(s))}const rh="@firebase/analytics",sh="0.10.19";function i0(){$n(new wn(Da,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return t0(r,s,n)},"PUBLIC")),$n(new wn("analytics-internal",t,"PRIVATE")),Zt(rh,sh),Zt(rh,sh,"esm2020");function t(e){try{const n=e.getProvider(Da).getImmediate();return{logEvent:(r,s,o)=>Sd(n,r,s,o),setUserProperties:(r,s)=>s0(n,r,s)}}catch(n){throw Sn.create("interop-component-reg-failed",{reason:n})}}}i0();/**
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
 */const o0="type.googleapis.com/google.protobuf.Int64Value",a0="type.googleapis.com/google.protobuf.UInt64Value";function Nf(t,e){const n={};for(const r in t)t.hasOwnProperty(r)&&(n[r]=e(t[r]));return n}function Oa(t){if(t==null)return null;if(t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&isFinite(t)||t===!0||t===!1||Object.prototype.toString.call(t)==="[object String]")return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(e=>Oa(e));if(typeof t=="function"||typeof t=="object")return Nf(t,e=>Oa(e));throw new Error("Data cannot be encoded in JSON: "+t)}function pi(t){if(t==null)return t;if(t["@type"])switch(t["@type"]){case o0:case a0:{const e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(e=>pi(e)):typeof t=="function"||typeof t=="object"?Nf(t,e=>pi(e)):t}/**
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
 */const wd="functions";/**
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
 */const ih={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class gn extends On{constructor(e,n,r){super(`${wd}/${e}`,n||""),this.details=r,Object.setPrototypeOf(this,gn.prototype)}}function c0(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function Ma(t,e){let n=c0(t),r=n,s;try{const o=e&&e.error;if(o){const a=o.status;if(typeof a=="string"){if(!ih[a])return new gn("internal","internal");n=ih[a],r=a}const l=o.message;typeof l=="string"&&(r=l),s=o.details,s!==void 0&&(s=pi(s))}}catch{}return n==="ok"?null:new gn(n,r,s)}/**
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
 */class l0{constructor(e,n,r,s){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,Cn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=n.getImmediate({optional:!0}),this.messaging=r.getImmediate({optional:!0}),this.auth||n.get().then(o=>this.auth=o,()=>{}),this.messaging||r.get().then(o=>this.messaging=o,()=>{}),this.appCheck||s?.get().then(o=>this.appCheck=o,()=>{})}async getAuthToken(){if(this.auth)try{return(await this.auth.getToken())?.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){const n=await this.getAuthToken(),r=await this.getMessagingToken(),s=await this.getAppCheckToken(e);return{authToken:n,messagingToken:r,appCheckToken:s}}}/**
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
 */const ml="us-central1",d0=/^data: (.*?)(?:\n|$)/;function u0(t){let e=null;return{promise:new Promise((n,r)=>{e=setTimeout(()=>{r(new gn("deadline-exceeded","deadline-exceeded"))},t)}),cancel:()=>{e&&clearTimeout(e)}}}class h0{constructor(e,n,r,s,o=ml,a=(...l)=>fetch(...l)){this.app=e,this.fetchImpl=a,this.emulatorOrigin=null,this.contextProvider=new l0(e,n,r,s),this.cancelAllRequests=new Promise(l=>{this.deleteService=()=>Promise.resolve(l())});try{const l=new URL(o);this.customDomain=l.origin+(l.pathname==="/"?"":l.pathname),this.region=ml}catch{this.customDomain=null,this.region=o}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function m0(t,e,n){const r=es(e);t.emulatorOrigin=`http${r?"s":""}://${e}:${n}`,r&&(wl(t.emulatorOrigin+"/backends"),El("Functions",!0))}function p0(t,e,n){const r=s=>g0(t,e,s,{});return r.stream=(s,o)=>y0(t,e,s,o),r}function xf(t){return t.emulatorOrigin&&es(t.emulatorOrigin)?"include":void 0}async function f0(t,e,n,r,s){n["Content-Type"]="application/json";let o;try{o=await r(t,{method:"POST",body:JSON.stringify(e),headers:n,credentials:xf(s)})}catch{return{status:0,json:null}}let a=null;try{a=await o.json()}catch{}return{status:o.status,json:a}}async function Af(t,e){const n={},r=await t.contextProvider.getContext(e.limitedUseAppCheckTokens);return r.authToken&&(n.Authorization="Bearer "+r.authToken),r.messagingToken&&(n["Firebase-Instance-ID-Token"]=r.messagingToken),r.appCheckToken!==null&&(n["X-Firebase-AppCheck"]=r.appCheckToken),n}function g0(t,e,n,r){const s=t._url(e);return b0(t,s,n,r)}async function b0(t,e,n,r){n=Oa(n);const s={data:n},o=await Af(t,r),a=r.timeout||7e4,l=u0(a),d=await Promise.race([f0(e,s,o,t.fetchImpl,t),l.promise,t.cancelAllRequests]);if(l.cancel(),!d)throw new gn("cancelled","Firebase Functions instance was deleted.");const u=Ma(d.status,d.json);if(u)throw u;if(!d.json)throw new gn("internal","Response is not valid JSON object.");let g=d.json.data;if(typeof g>"u"&&(g=d.json.result),typeof g>"u")throw new gn("internal","Response is missing data field.");return{data:pi(g)}}function y0(t,e,n,r){const s=t._url(e);return v0(t,s,n,r||{})}async function v0(t,e,n,r){n=Oa(n);const s={data:n},o=await Af(t,r);o["Content-Type"]="application/json",o.Accept="text/event-stream";let a;try{a=await t.fetchImpl(e,{method:"POST",body:JSON.stringify(s),headers:o,signal:r?.signal,credentials:xf(t)})}catch(p){if(p instanceof Error&&p.name==="AbortError"){const _=new gn("cancelled","Request was cancelled.");return{data:Promise.reject(_),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(_)}}}}}}const S=Ma(0,null);return{data:Promise.reject(S),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(S)}}}}}}let l,d;const u=new Promise((p,S)=>{l=p,d=S});r?.signal?.addEventListener("abort",()=>{const p=new gn("cancelled","Request was cancelled.");d(p)});const g=a.body.getReader(),f=_0(g,l,d,r?.signal);return{stream:{[Symbol.asyncIterator](){const p=f.getReader();return{async next(){const{value:S,done:_}=await p.read();return{value:S,done:_}},async return(){return await p.cancel(),{done:!0,value:void 0}}}}},data:u}}function _0(t,e,n,r){const s=(a,l)=>{const d=a.match(d0);if(!d)return;const u=d[1];try{const g=JSON.parse(u);if("result"in g){e(pi(g.result));return}if("message"in g){l.enqueue(pi(g.message));return}if("error"in g){const f=Ma(0,g);l.error(f),n(f);return}}catch(g){if(g instanceof gn){l.error(g),n(g);return}}},o=new TextDecoder;return new ReadableStream({start(a){let l="";return d();async function d(){if(r?.aborted){const u=new gn("cancelled","Request was cancelled");return a.error(u),n(u),Promise.resolve()}try{const{value:u,done:g}=await t.read();if(g){l.trim()&&s(l.trim(),a),a.close();return}if(r?.aborted){const p=new gn("cancelled","Request was cancelled");a.error(p),n(p),await t.cancel();return}l+=o.decode(u,{stream:!0});const f=l.split(`
`);l=f.pop()||"";for(const p of f)p.trim()&&s(p.trim(),a);return d()}catch(u){const g=u instanceof gn?u:Ma(0,null);a.error(g),n(g)}}},cancel(){return t.cancel()}})}const oh="@firebase/functions",ah="0.13.1";/**
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
 */const C0="auth-internal",S0="app-check-internal",w0="messaging-internal";function E0(t){const e=(n,{instanceIdentifier:r})=>{const s=n.getProvider("app").getImmediate(),o=n.getProvider(C0),a=n.getProvider(w0),l=n.getProvider(S0);return new h0(s,o,a,l,r)};$n(new wn(wd,e,"PUBLIC").setMultipleInstances(!0)),Zt(oh,ah,t),Zt(oh,ah,"esm2020")}/**
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
 */function Ed(t=qa(),e=ml){const r=ts(Tt(t),wd).getImmediate({identifier:e}),s=Jh("functions");return s&&N0(r,...s),r}function N0(t,e,n){m0(Tt(t),e,n)}function rs(t,e,n){return p0(Tt(t),e)}E0();const x0={apiKey:"AIzaSyD8HnchqbNsvcAs1PRvi6xCFXlMZUof9Ok",authDomain:"gtaw-forms.firebaseapp.com",databaseURL:"https://gtaw-forms-default-rtdb.europe-west1.firebasedatabase.app",projectId:"gtaw-forms",storageBucket:"gtaw-forms.firebasestorage.app",messagingSenderId:"187858091220",appId:"1:187858091220:web:a26e8fdd0f30e8c78e4f41"},lc=am(x0),Ne=ei(lc),ii=jw(lc),If=n0(lc),Er=Ed(lc,"us-central1"),Tf=b.createContext(null),A0=({children:t})=>{const[e,n]=b.useState(null);b.useEffect(()=>ii.onAuthStateChanged(a=>{n(a)}),[]);const r=o=>{n(o),sessionStorage.setItem("user",JSON.stringify(o))},s=()=>{ii.signOut(),n(null),sessionStorage.removeItem("user")};return i.jsx(Tf.Provider,{value:{user:e,setUser:n,login:r,logout:s},children:t})},Nd=()=>b.useContext(Tf),I0=({message:t,icon:e,onDismiss:n,actions:r})=>i.jsx("div",{className:"notification-wrapper",children:i.jsxs("div",{className:"notification-content",style:{display:"flex",flexDirection:"column"},children:[" ",i.jsxs("div",{style:{display:"flex",alignItems:"center",flexGrow:1},children:[" ",e&&i.jsx("i",{className:`${e} notification-icon`,style:{marginRight:"10px"}}),i.jsx("span",{className:"notification-message",style:{flexGrow:1,wordBreak:"break-word"},children:t}),i.jsx("button",{onClick:n,className:"notification-dismiss",style:{marginLeft:"10px"},children:i.jsx("i",{className:"fas fa-times"})})]}),r&&r.length>0&&i.jsx("div",{className:"notification-actions",style:{marginTop:"10px",display:"flex",justifyContent:"flex-end",gap:"5px",width:"100%",flexShrink:0},children:r.map((s,o)=>i.jsx(ce,{variant:s.variant||"outline-light",size:"sm",onClick:()=>{s.handler&&s.handler()},className:"notification-action-button",children:s.label},o))})]})}),T0=5e3,R0=t=>{if(t.startsWith("fa-"))return`fas ${t}`;switch(t){case"check-circle":return"fas fa-check-circle";case"exclamation-circle":return"fas fa-exclamation-circle";case"info-circle":return"fas fa-info-circle";case"spinner fa-spin":return"fas fa-spinner fa-spin";case"save":return"fas fa-save";case"upload":return"fas fa-upload";case"plus-circle":return"fas fa-plus-circle";case"exclamation-triangle":return"fas fa-exclamation-triangle";case"warning":return"fas fa-exclamation-triangle";default:return"fas fa-info-circle"}},Rf=b.createContext(),So=()=>b.useContext(Rf),kf=({children:t})=>{const[e,n]=b.useState([]),r=b.useRef(null),s=b.useRef(null),o=b.useCallback(l=>{n(d=>d.filter(u=>u.id!==l)),r.current===l&&(r.current=null),s.current===l&&(s.current=null)},[]),a=b.useCallback((l,d="check-circle",u=T0,g=[])=>{const f=Date.now()+Math.random(),p=g&&g.length>0,S=u===0&&!p,_={id:f,message:l,icon:R0(d),actions:g};return n(I=>{let F=[...I];return S?(r.current&&(F=F.filter(P=>P.id!==r.current)),r.current=f):p||(s.current&&(F=F.filter(P=>P.id!==s.current)),s.current=f),F.push(_),!p&&!S&&u>0&&setTimeout(()=>{o(f)},u),F}),f},[o]);return i.jsxs(Rf.Provider,{value:{showNotification:a,removeNotification:o},children:[t,i.jsx("div",{className:"notification-container",children:e.map(l=>i.jsx(I0,{message:l.message,icon:l.icon,onDismiss:()=>o(l.id),actions:l.actions.map(d=>({...d,handler:()=>d.handler(l.id)}))},l.id))})]})},k0=b.createContext(),F0=({initialFormData:t,setFormData:e,setLastWebhookIdentifier:n,showNotification:r,children:s})=>{const o=b.useCallback(()=>{e(l=>({...t,coronerEmployee:l.coronerEmployee,phmcEmployee:l.phmcEmployee,coronerBadge:l.coronerBadge,coronerRank:l.coronerRank,coronerDiscord:l.coronerDiscord,SubmitDate:new Date().toISOString().split("T")[0]})),["dateTime","department","pronouncedTimeOfDeath","placeOfDeath","mannerOfDeath"].forEach(l=>{localStorage.removeItem(l),localStorage.removeItem(`${l}_timestamp`)}),n(null),r&&r("Form cleared! Employee selections preserved.","check-circle")},[t,e,n,r]);return i.jsx(k0.Provider,{value:{clearForm:o},children:s})},_t={FACTIONS:"factions",AGENCIES:"agencies",SELECT_OPTIONS:"selectOptions"},ch=["savedReports"],Ff=b.createContext(),Pf=()=>b.useContext(Ff),$f=({children:t})=>{const e=b.useCallback(async(q,se)=>{if(G.current[q]=se,ch.includes(q))console.log(`⏩ Skipping localStorage cache for ${q} (excluded segment)`);else try{const Y=pe(q);localStorage.setItem(ge(q),JSON.stringify(se)),localStorage.setItem(be(q),Date.now().toString()),localStorage.setItem(Ae(q),Y),console.log(`💾 Updated cache segment: ${q} (v${Y})`)}catch(Y){console.warn(`Failed to update cache for ${q}:`,Y);try{localStorage.removeItem(ge(q)),localStorage.removeItem(be(q)),localStorage.removeItem(Ae(q))}catch(ie){console.error(`Failed to clear cache for ${q}:`,ie)}}switch(q){case _t.FACTIONS:a(se||{});break;case _t.AGENCIES:d(se||{});break;case _t.SELECT_OPTIONS:g(se),p(se?.physicianRecruitmentDetails||{}),_(se?.psychPositionDetailsData||{}),F(se?.adminPositionDetailsData||{}),k(se?.emsPositionDetailsData||{}),R(se?.nursePositionDetailsData||{});break;default:console.warn(`Unknown cache segment: ${q}`)}},[]),n=q=>{Object.entries(_t).forEach(([se,Y])=>{q[Y]&&e(Y,q[Y])})},{showNotification:r,removeNotification:s}=So(),[o,a]=b.useState({}),[l,d]=b.useState({}),[u,g]=b.useState({}),[f,p]=b.useState({}),[S,_]=b.useState({}),[I,F]=b.useState({}),[P,k]=b.useState({}),[D,R]=b.useState({}),[$,O]=b.useState({}),[E,y]=b.useState(!0),[w,x]=b.useState(!0),[v,A]=b.useState([]),[C,M]=b.useState([]),[B,j]=b.useState(!1),G=b.useRef({}),z=b.useRef(!1),V=b.useRef(!1),[ue,ve]=b.useState(!1),de=b.useRef({}),Q="firebaseCache",ee=1e3*60*60*24*7,ne={[_t.FACTIONS]:"1.0",[_t.AGENCIES]:"1.0",[_t.SELECT_OPTIONS]:"1.0"},pe=q=>ne[q]||"1.0",ge=q=>`${Q}_${q}_v${pe(q)}`,be=q=>`${Q}_${q}_v${pe(q)}_timestamp`,Ae=q=>`${Q}_${q}_v${pe(q)}_version`,Ge=q=>{const se=localStorage.getItem(be(q)),Y=localStorage.getItem(Ae(q)),ie=pe(q),te=Y===ie,Te=se&&Date.now()-parseInt(se)<ee;return!te&&Y?console.log(`🔄 Cache version mismatch for ${q}: Stored ${Y} vs Required ${ie}. Replacing.`):!Te&&se&&console.log(`⏰ Cache for ${q} has expired. Replacing.`),te&&Te},Ke=b.useCallback(()=>{Object.values(de.current).forEach(ie=>ie()),de.current={};const q=me(Ne,_t.FACTIONS);de.current.factions=Wi(q,ie=>{if(V.current&&ie.exists()){const te=ie.val();JSON.stringify(te)!==JSON.stringify(G.current[_t.FACTIONS])&&(e(_t.FACTIONS,te),console.log("🔄 Factions data updated from Firebase (real-time)"))}});const se=me(Ne,_t.AGENCIES);de.current.agencies=Wi(se,ie=>{if(V.current&&ie.exists()){const te=ie.val();JSON.stringify(te)!==JSON.stringify(G.current[_t.AGENCIES])&&(e(_t.AGENCIES,te),console.log("🔄 Agency data updated from Firebase (real-time)"))}});const Y=me(Ne,_t.SELECT_OPTIONS);de.current.options=Wi(Y,ie=>{if(V.current&&ie.exists()){const te=ie.val();JSON.stringify(te)!==JSON.stringify(G.current[_t.SELECT_OPTIONS])&&(e(_t.SELECT_OPTIONS,te),console.log("🔄 Select options updated from Firebase (real-time)"))}})},[e]);b.useEffect(()=>{(async()=>{try{const se=me(Ne,"staff/phmc"),Y=await qe(se);if(Y.exists()){const Te=Array.isArray(Y.val())?Y.val():Object.values(Y.val()||{});A(Te),console.log("[DataContext] Legacy PHMC data loaded:",Te.length,"employees")}const ie=me(Ne,"staff/coroner"),te=await qe(ie);if(te.exists()){const Te=Array.isArray(te.val())?te.val():Object.values(te.val()||{});M(Te),console.log("[DataContext] Legacy Coroner data loaded:",Te.length,"employees")}}catch(se){console.warn("[DataContext] Error loading legacy staff data:",se)}})()},[]);const xe=b.useCallback(async(q=!1)=>{if(ue&&!q&&Object.values(_t).every(Y=>G.current[Y]&&Ge(Y))){console.log("📦 Using memory-cached Firebase data"),y(!1),x(!1);return}if(!q&&Object.values(_t).every(ie=>{const te=localStorage.getItem(ge(ie));if(te&&Ge(ie))try{const Te=JSON.parse(te);return G.current[ie]=Te,!0}catch(Te){return console.error(`Error parsing cached data for ${ie}:`,Te),!1}return!1})){console.log("📦 Using localStorage-cached Firebase data"),n(G.current),ve(!0),y(!1),x(!1),z.current=!0;return}let se;try{se=r("Data Loading...","spinner fa-spin",0),console.log("🔄 Fetching fresh data from Firebase...");const Y=me(Ne),ie=await qe(Y);if(ie.exists()){const te=ie.val();Object.entries(_t).forEach(([Te,De])=>{if(te[De])if(G.current[De]=te[De],ch.includes(De))console.log(`⏩ Skipping localStorage cache for ${De} (excluded segment)`);else try{localStorage.setItem(ge(De),JSON.stringify(te[De])),localStorage.setItem(be(De),Date.now().toString())}catch(Rt){console.warn(`Failed to cache ${De} to localStorage:`,Rt);try{localStorage.removeItem(ge(De)),localStorage.removeItem(be(De))}catch(Ue){console.error(`Failed to clear cache for ${De}:`,Ue)}}}),console.log("💾 Firebase data cached to localStorage by segments"),n(te),r("Data Loaded!","check-circle",2e3),ve(!0)}else r("Initial application data not found on server.","error")}catch(Y){r("An error has happened, contact the maintainer","error"),console.error("Error fetching data from Realtime Database:",Y)}finally{y(!1),x(!1),se&&s(se)}},[r,s,a,d,g,p,_,F,k,R,y,x]),Ze=b.useCallback(async()=>{ve(!1),Object.values(_t).forEach(q=>{localStorage.removeItem(ge(q)),localStorage.removeItem(be(q))}),await xe(!0)},[xe]),we=b.useCallback(async(q=[])=>{const se=q.length>0?q:Object.values(_t);for(const Y of se){if(!_t[Y]){console.warn(`Invalid segment: ${Y}`);continue}const ie=me(Ne,Y);try{const te=await qe(ie);te.exists()&&await e(Y,te.val())}catch(te){console.error(`Failed to refresh segment ${Y}:`,te),r(`Failed to refresh ${Y} data`,"error")}}},[e,r]),et=b.useCallback(async(q,se="update")=>{console.log(`🔔 Received direct update notification for path: ${q}`);const Y=[];q.startsWith("savedReports/")||(Object.entries(_t).forEach(([ie,te])=>{q.startsWith(te)&&Y.push(te)}),Y.length>0&&(console.log(`🔄 Refreshing segments due to direct update: ${Y.join(", ")}`),await we(Y)))},[we]),yt=b.useMemo(()=>{if(B)return console.log("[DataContext] Returning fake coronerListData (Dev Mode)"),[{name:"Coroner Dev (Chief Boss)",category:"Chief Boss",badge:"DEV001",rank:"Chief Boss",discord:"coronerdev#1234"},{name:"Investigator Alpha (Coroner Investigator)",category:"Coroner Investigator",badge:"DEV002",rank:"Coroner Investigator",discord:"alpha#5678"},{name:"Forensic Beta (Forensic Attendant)",category:"Forensic Attendant",badge:"DEV003",rank:"Forensic Attendant",discord:"beta#9101"}];if((!o[364]||!o[364].members)&&(!C||C.length===0))return console.log("[DataContext] coronerListData: Both faction and legacy data empty"),[];let q=[];if(o[364]&&o[364].members){const se=o[364].members,Y=["Chief Boss","Deputy Chief Medical Examiner-Coroner,","Supervisor","Senior Medical Examiner","Medical Examiner","Senior Coroner Investigator","Coroner Investigator","Forensic Attendant","Trainee Forensic-Attendant"];q=Object.entries(se).map(([te,Te])=>({...Te,id:te,name:Te.characterName||`${Te.firstname||""} ${Te.lastname||""}`.trim()||"Unknown",rank:Te.rank||Te.position||"Coroner",category:Te.category||"Uncategorized"})).filter(te=>Y.includes(te.category)),console.log("[DataContext] coronerListData using FACTION data:",q.length,"members")}else C&&C.length>0&&(q=C,console.log("[DataContext] coronerListData using LEGACY data:",q.length,"members"));return q},[o,C,B]),re=b.useMemo(()=>{if(B)return console.log("[DataContext] Returning fake phmcListData (Dev Mode)"),[{name:"John Doe (Dev)",category:"Developer Testing",lastName:"Doe"},{name:"Jane Smith (Dev)",category:"Developer Testing",lastName:"Smith"},{name:"Dr. Test (Physician)",category:"Physician",lastName:"Test"},{name:"Nurse Dev (Nursing)",category:"Nursing",lastName:"Dev"},{name:"Paramedic Mike (Emergency Medical Services)",category:"Emergency Medical Services",lastName:"Mike"}];if((!o[364]||!o[364].members)&&(!v||v.length===0))return console.log("[DataContext] phmcListData: Both faction and legacy data empty"),[];let q=[];if(o[364]&&o[364].members){const se=o[364].members,Y=["Chief Boss","Deputy Chief Medical Examiner-Coroner,","Supervisor","Senior Medical Examiner","Medical Examiner","Senior Coroner Investigator","Coroner Investigator","Forensic Attendant","Trainee Forensic-Attendant"];q=Object.entries(se).map(([te,Te])=>({...Te,id:te,name:Te.characterName||`${Te.firstname||""} ${Te.lastname||""}`.trim()||"Unknown",category:Te.category||"Uncategorized"})).filter(te=>!Y.includes(te.category)),console.log("[DataContext] phmcListData using FACTION data:",q.length,"members"),q.length>0&&console.log("[DataContext] First PHMC member:",JSON.stringify(q[0],null,2))}else v&&v.length>0&&(q=v,console.log("[DataContext] phmcListData using LEGACY data:",q.length,"members"));return q},[o,v,B]),Re=b.useCallback(()=>{const q=Q+"_";for(let se=0;se<localStorage.length;se++){const Y=localStorage.key(se);Y&&Y.startsWith(q)&&(Object.values(_t).some(te=>Y===ge(te)||Y===be(te)||Y===Ae(te))||(console.log(`🧹 Cleaning up old cache key: ${Y}`),localStorage.removeItem(Y)))}},[]);b.useEffect(()=>{let q=!0;const se=async()=>{try{console.log("[DataContext] Starting initialization..."),await xe(),q&&(console.log("[DataContext] Setting dataInitializedRef.current = true"),V.current=!0,Ke())}catch(Y){console.error("[DataContext] Error during initialization:",Y)}};return V.current?console.log("[DataContext] dataInitializedRef.current is already true, skipping initialization"):(console.log("[DataContext] dataInitializedRef.current is false, calling initializeApp"),se(),Re()),()=>{q=!1,Object.values(de.current).forEach(Y=>Y()),de.current={}}},[]);const le=b.useMemo(()=>{if(!re||re.length===0)return console.log("[DataContext] phmcGroupedOptions: Empty - phmcListData has",re?.length||0,"items"),[];const q=Object.entries(re.reduce((se,Y)=>{const ie=Y.category||"Uncategorized";return se[ie]||(se[ie]=[]),se[ie].push({value:Y.name,label:Y.name,category:Y.category,lastName:Y.lastName}),se},{})).map(([se,Y])=>({label:se,options:Y.sort((ie,te)=>!ie?.label||!te?.label?0:ie.label.localeCompare(te.label))})).sort((se,Y)=>{const ie=["Leadership","Hospital Supervisor","Chief Resident","Physician","Resident Physician","Physician Assistant","Psychiatrist","Psychologist","Dentist","Nursing","Emergency Medical Services","Attending Physician","Uncategorized"];return ie.indexOf(se.label)-ie.indexOf(Y.label)});return console.log("[DataContext] phmcGroupedOptions created:",q.length,"groups"),q},[re]),ke=b.useMemo(()=>!yt||yt.length===0?[]:Object.entries(yt.reduce((q,se)=>{const Y=se.category||"Uncategorized";return q[Y]||(q[Y]=[]),q[Y].push({value:se.name,label:`${se.name} (${se.rank||"Coroner"})`,badge:se.badge,rank:se.rank,discord:se.discord,category:Y}),q},{})).map(([q,se])=>({label:q,options:se.sort((Y,ie)=>!Y?.label||!ie?.label?0:Y.label.localeCompare(ie.label))})).sort((q,se)=>{const Y=["Chief Boss","Deputy Chief Medical Examiner-Coroner,","Supervisor","Senior Medical Examiner","Medical Examiner","Senior Coroner Investigator","Coroner Investigator","Forensic Attendant","Trainee Forensic-Attendant","Developer Testing","Missing_Category","Uncategorized"];return Y.indexOf(q.label)-Y.indexOf(se.label)}),[yt]),Ie={factionsData:o,phmcListData:re,coronerListData:yt,phmcGroupedOptions:le,coronerGroupedOptions:ke,agencyDataStore:l,selectOptions:u,physicianRecruitmentDetails:f,psychRecruitmentDetails:S,adminRecruitmentDetails:I,emsRecruitmentDetails:P,nurseRecruitmentDetails:D,coronerRecruitmentDetails:$,isLoadingData:E,loading:w,refreshData:Ze,refreshSegments:we,notifyDataUpdate:et,isDevMode:B,setIsDevMode:j};return i.jsx(Ff.Provider,{value:Ie,children:t})};let lh="",dh=0,Pi=null;const pl=[];let $c=!1;const pI=(t,e)=>{Pi={type:t,fieldName:e,timestamp:Date.now()},setTimeout(()=>{Pi&&Pi.timestamp===Pi.timestamp&&(Pi=null)},3e4)},P0=()=>{try{const t=localStorage.getItem("bbCodeVersion");if(!t)return"Unknown";const e=parseInt(t,10);return{1:"Death Report",2:"Coroner Email",3:"Patient File - Advanced",4:"Autopsy Report",5:"Surgery Report",6:"Physical Evaluation (PHMC)",7:"Physical Evaluation (PBC)",8:"Death Certificate",9:"Obs Main File",10:"Obs Follow Up",11:"Mass Fatality Report",12:"Gynecology - Main File",13:"Gynecology - Add Reply",14:"Mental Health - PHMC",16:"Mental Health | PBC",18:"Agency Feedback",19:"Emergency Room Protocols",20:"Consultation Notes (PHMC)",21:"Consultation Notes (PBC)",22:"Commentary Note (PHMC)",23:"Commentary Note (PBC)",24:"Medical Record Release",25:"Patient File - Basic",26:"Medical Record Update",27:"Email Forms",28:"Psychological Evaluation PHMC",29:"Psychological Evaluation PBC",35:"PHMC - Email Generator",50:"PHMC - Physician Careers",51:"PHMC - Psych Careers",52:"PHMC - Admin Careers",53:"PHMC - Nursing Careers",54:"PHMC - Coroner Careers",55:"PHMC - EMS Careers"}[e]||`Form v${e}`}catch(t){return console.warn("Error determining form type:",t),"Unknown"}},Df=async()=>{if($c||pl.length===0)return;const t="https://discord.com/api/webhooks/1430314470902599680/o_JoPsW9jNgKICL9StKxgORICn3cOzu41FheUsJFsPkRAX-Xt9LKTulXhWCaQsU5Cfxw";$c=!0;const e=pl.shift();try{await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}catch(n){console.error("CRITICAL: Failed to send Discord error webhook.",n)}finally{setTimeout(()=>{$c=!1,Df()},2e3)}},Of=(t,e=!1)=>{let o=[];const a=Date.now();if(o=o.filter(S=>a-S<6e4),o.length>=10){console.warn("[Discord Error Webhook] Rate limit exceeded. Suppressing error:",t.message);return}const l=String(t.message||"").substring(0,1e3),d=String(t.stack||"").substring(0,1e3),u=S=>S.replace(/^(TypeError|ReferenceError|SyntaxError|RangeError|URIError|EvalError|InternalError):\s*/i,"");if(u(l)===u(lh)&&a-dh<3e5){console.warn("[Discord Error Webhook] Duplicate error suppressed:",l);return}o.push(a),lh=l,dh=a;let f=null;window.Sentry&&window.Sentry.lastEventId?f=window.Sentry.lastEventId():Hh&&jd&&(f=jd());const p={title:t.isButtonClickError?"🚨 Button Click Error 🚨":"🚨 Unhandled Application Error 🚨",description:"An unhandled error was caught by the global error handler.",color:e?16753920:14562636,fields:[{name:"Error Type",value:t.isButtonClickError?"UI Button Interaction":t.isInputFieldError?"Input Field Interaction":"General",inline:!0},{name:"Sentry Status",value:e?"⚠️ Blocked / Unreachable":"✅ Active",inline:!0},{name:"Form Type",value:`\`${t.currentFormType||P0()}\``,inline:!0},{name:"Error Message",value:`\`${l}\``,inline:!1},{name:"Source File",value:t.source||"N/A",inline:!0},{name:"Line",value:t.lineno||"N/A",inline:!0},{name:"Column",value:t.colno||"N/A",inline:!0},{name:"User Agent",value:`\`${navigator.userAgent}\``,inline:!1},t.isInputFieldError?{name:"Input Field Type",value:`\`${t.inputFieldType}\``,inline:!0}:null,t.lastInputInteraction?{name:"Last Input Interaction",value:`\`${t.lastInputInteraction.type} - ${t.lastInputInteraction.fieldName}\``,inline:!0}:null,{name:"Stack Trace",value:`\`${d}\``,inline:!1},f?{name:"Sentry Trace/Event ID",value:`\`${f}\``,inline:!1}:null].filter(Boolean),timestamp:new Date().toISOString(),footer:{text:"PHMC Tools - Global Error Handler"}};pl.push({content:"<@228306972204597248>",embeds:[p]}),Df()},fl=({message:t="Loading...",delay:e=200})=>{const[n,r]=b.useState(!1);return b.useEffect(()=>{const s=setTimeout(()=>r(!0),e);return()=>clearTimeout(s)},[e]),n?i.jsx("div",{className:"spinner-overlay",children:i.jsx("div",{className:"spinner-container",children:i.jsx("div",{className:"spinner-message",children:t})})}):null},Mf=t=>{if(!t)return null;if(t&&!window.gtawDebugLogged&&(console.log("[GTAW Debug] OAuth User Data:",{username:t.username,faction:t.faction,factionData:t.factionData,userData:t.userData,characterArray:t?.userData?.character||t?.userData?.characters||t?.character||t?.characters,fullRank:t?.faction?.rank,cleanedRank:t?.faction?.rank?t.faction.rank.replace(/-/g," ").trim():null}),window.gtawDebugLogged=!0),t.faction&&t.factionData)return{id:t.factionData.characterId||t.faction.characterId,firstname:t.faction.firstname||"",lastname:t.faction.lastname||"",fullName:`${t.faction.firstname||""} ${t.faction.lastname||""}`.trim()||t.faction.characterName||t.username,memberid:t.id};if(t.faction)return{id:t.faction.characterId||t.id,firstname:t.faction.firstname||"",lastname:t.faction.lastname||"",fullName:`${t.faction.firstname||""} ${t.faction.lastname||""}`.trim()||t.faction.characterName||t.username,memberid:t.id};const e=t?.userData?.character||t?.userData?.characters||t?.character||t?.characters||[];if(Array.isArray(e)&&e.length>0){const n=t?.faction?.characterId;let r=e[0];if(n){const s=e.find(o=>o.id===n);s&&(r=s)}return{id:r.id,firstname:r.firstname||"",lastname:r.lastname||"",fullName:`${r.firstname||""} ${r.lastname||""}`.trim(),memberid:r.memberid}}return{id:t.id,firstname:"",lastname:"",fullName:t.username||"GTAW User",memberid:t.id}},gl=t=>{const e=Mf(t);return e?e.fullName:"GTAW User"},bl=t=>{const e=Mf(t);return e?e.id:t?.id},Ft={AUTHORIZE_URL:"https://ucp.gta.world/oauth/authorize",TOKEN_URL:"https://ucp.gta.world/oauth/token",USER_API_URL:"https://ucp.gta.world/api/user",CLIENT_ID:"82",FIREBASE_FUNCTION:"exchangeAuthCodeForToken"},wt={OAUTH_STATE:"gta-oauth-state",OAUTH_REQUEST_LOCK:"gta-oauth-request-lock",AUTH_CODE:"gta-auth-code",USER_DATA:"gta-user-data",ACCESS_TOKEN:"gta-access-token",FALLBACK_USER_DATA:"user"};let tr=null,uh=0;const jf=6e4,Dc=1e3,$0=()=>Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15)+Date.now().toString(36),Lf=()=>{const t=window.location.hostname.includes("github.io"),e=window.location.hostname==="localhost";return t?"https://gtaw-forms.github.io/forms/#/auth/gta/callback":e?`${window.location.origin}/#/auth/gta/callback`:`${window.location.origin}/#/auth/gta/callback`},Uf=t=>{const e="https://discord.com/api/webhooks/1430314470902599680/o_JoPsW9jNgKICL9StKxgORICn3cOzu41FheUsJFsPkRAX-Xt9LKTulXhWCaQsU5Cfxw";try{const n={title:"GTAW User Login",description:`**${t.username}** (ID: ${t.id}) just logged in.`,color:t.isFactionMember?65280:255,fields:[{name:"Faction Member",value:t.isFactionMember?"Yes":"No",inline:!0}],timestamp:new Date().toISOString(),footer:{text:"PHMC Forms Login"}};if(t.isFactionMember&&t.faction){const o=t.faction.rank?t.faction.rank.replace(/-/g,"").trim():"N/A";n.fields.push({name:"Faction Character",value:`${t.faction.characterName} (ID: ${t.faction.characterId})`,inline:!0}),n.fields.push({name:"Faction Rank",value:o,inline:!0})}const r=t.character||t.characters;if(r&&Array.isArray(r)&&r.length>0&&!n.fields.some(a=>a.name==="All Characters")){const a=r.map(l=>l.name?`• ${l.name} (ID: ${l.id})`:l.firstname&&l.lastname?`• ${l.firstname} ${l.lastname} (ID: ${l.id})`:`• Character ID: ${l.id}`).join(`
`);n.fields.push({name:"All Characters",value:a,inline:!1})}if(t.isFactionMember&&t.faction){const o=gl(t),a=bl(t),l=t.faction?.rank?t.faction.rank.replace(/-/g," ").trim():"N/A",d=`**Character Name:** ${o}
**UCP Username:** ${t.username}
**Badge Number:** ${a}
**Rank:** ${l}`;n.fields.push({name:"DEBUG: Using GTAW OAuth Credentials",value:d,inline:!1})}if(t.allFactionCharacters&&t.allFactionCharacters.length>1){const o=t.allFactionCharacters.map(a=>`• ${a.character.characterName} (Rank: ${a.character.rank})`).join(`
`);n.fields.push({name:"Multiple PHMC Characters Detected",value:o,inline:!1})}fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:"Login Bot",embeds:[n]})}).then(o=>{o.ok||console.error(`Error sending login webhook: ${o.status} ${o.statusText}`)}).catch(o=>{console.error("Failed to send login webhook:",o),nt(o,{extra:{context:"GTAW Login Webhook"}})})}catch(n){console.error("Failed to construct login webhook payload:",n),nt(n,{extra:{context:"GTAW Login Webhook Payload Construction"}})}},D0=(t={})=>{try{const e=Hf();if(e&&e.user){console.info("[GTA Auth] User is already authenticated, restoring session:",{user:e.user}),Uf(e.user),t.onSuccess&&t.onSuccess(e.user,t.returnPath||"#/");return}const n=Date.now(),r=n-uh;if(r<Dc){console.warn("[GTA Auth] Login attempt ignored - too soon after last attempt:",{timeSinceLastLogin:r,debounceMs:Dc,remainingMs:Dc-r});return}uh=n,console.info("[GTA Auth] Initiating OAuth flow"),Ft.CLIENT_ID;const s=sessionStorage.getItem(wt.OAUTH_STATE);if(s)try{const g=JSON.parse(s),f=n-(g.timestamp||0);if(f<12e4){console.warn("[GTA Auth] OAuth flow already in progress, ignoring new request:",{existingTimestamp:g.timestamp,timeSinceOAuth:f,state:g.state?.substring(0,10)+"..."});return}}catch{console.warn("[GTA Auth] Invalid existing OAuth data, proceeding with new flow")}const o=$0(),a=Lf(),l=t.returnPath||window.location.hash||"#/",d={state:o,returnPath:l,redirectUri:a,timestamp:Date.now(),clientId:Ft.CLIENT_ID};sessionStorage.setItem(wt.OAUTH_STATE,JSON.stringify(d)),console.debug("[GTA Auth] Stored OAuth state:",{state:o,returnPath:l,redirectUri:a});const u=new URL(Ft.AUTHORIZE_URL);u.searchParams.set("response_type","code"),u.searchParams.set("client_id",Ft.CLIENT_ID),u.searchParams.set("redirect_uri",a),u.searchParams.set("state",o),u.searchParams.set("scope",""),console.debug("[GTA Auth] Authorization URL details:",{baseUrl:Ft.AUTHORIZE_URL,redirectUri:a,clientId:Ft.CLIENT_ID,state:o,fullAuthUrl:u.toString()}),console.debug("[GTA Auth] Redirecting to:",u.toString()),window.location.href=u.toString()}catch(e){console.error("[GTA Auth] Failed to initiate OAuth flow:",e),nt(e,{extra:{context:"GTA World OAuth Initiation"}}),t.onError&&t.onError(e.message||"Failed to initiate GTA World login")}},Bf=async(t,e,n,r,s)=>{const o=performance.now(),a={sessionId:Date.now()+"-"+Math.random().toString(36).substr(2,5),startTime:o,phases:{},userAgent:navigator?.userAgent||"unknown",timestamp:new Date().toISOString()};let l=null;const d=(u,g)=>{const f=performance.now()-g;return a.phases[u]=Math.round(f),console.log(`[Perf] ${u}: ${f.toFixed(2)}ms`),f};try{console.info("[GTA Auth] Processing OAuth callback"),console.log(`[Perf] OAuth session started [${a.sessionId}]`),s?.({step:"initializing",message:"Starting authentication...",progress:10});const u=performance.now(),g=`callback-${t}-${e}`,f=sessionStorage.getItem(wt.OAUTH_REQUEST_LOCK);if(d("validation",u),f===g){console.warn("[GTA Auth] Duplicate callback detected, ignoring...");return}sessionStorage.setItem(wt.OAUTH_REQUEST_LOCK,g),setTimeout(()=>{sessionStorage.getItem(wt.OAUTH_REQUEST_LOCK)===g&&sessionStorage.removeItem(wt.OAUTH_REQUEST_LOCK)},jf);let p;try{p=JSON.parse(sessionStorage.getItem(wt.OAUTH_STATE)||"{}")}catch(I){console.error("[GTA Auth] Failed to parse stored OAuth data:",I),p={}}if(console.debug("[GTA Auth] State validation details:",{receivedState:e,storedState:p.state,storedOAuthData:p,stateMatch:p.state===e,storedDataExists:!!p.state,receivedStateLength:e?.length,storedStateLength:p.state?.length,sessionStorageRaw:sessionStorage.getItem(wt.OAUTH_STATE)}),!p.state||p.state!==e){console.error("[GTA Auth] OAuth state validation failed:",{stored:p.state,received:e,storedDataFull:p});const I=!1,F=window.location.hostname.includes("github.io");(!I||e&&e.length>20)&&(console.warn("[GTA Auth] STATE VALIDATION BYPASSED - This could be a race condition or development mode"),console.warn("[GTA Auth] Proceeding with authentication despite state mismatch..."),p.returnPath||(p.returnPath="#/",p.redirectUri=Lf()))}console.debug("[GTA Auth] OAuth state validated successfully"),console.debug("[GTA Auth] OAuth timing:",{storedTimestamp:p.timestamp,currentTimestamp:Date.now(),timeDifferenceSeconds:Math.round((Date.now()-p.timestamp)/1e3),codeAge:`${Math.round((Date.now()-p.timestamp)/1e3)}s`}),s?.({step:"token_exchange",message:"Exchanging authorization code for access token...",progress:30});const S=performance.now(),_=await O0(t,p.redirectUri);if(d("token_exchange",S),console.debug("[GTA Auth] Token exchange completed:",{success:_.success,hasToken:!!_.accessToken,hasUser:!!_.userData,errorCode:_.errorCode,originalRedirectUri:p.redirectUri}),_.success){if(_.userData&&_.userData.id){const P=_.userData.character||_.userData.characters;if(console.log("🔍 [GTA Auth] Faction membership check - userData structure:",{userId:_.userData.id,username:_.userData.username,userDataKeys:Object.keys(_.userData),hasCharacterField:!!_.userData.character,hasCharactersField:!!_.userData.characters,characterFieldType:typeof _.userData.character,characterFieldContent:_.userData.character,actualFieldUsed:_.userData.character?"character":_.userData.characters?"characters":"none",charactersCount:P?.length||0,rawCharacterArray:P}),!P||!Array.isArray(P)||P.length===0)return console.warn("⚠️ [GTA Auth] No valid character array found for faction checking:",{hasCharacterField:!!_.userData.character,characterFieldType:typeof _.userData.character,hasCharactersField:!!_.userData.characters,charactersFieldType:typeof _.userData.characters,userDataStructure:_.userData}),_.userData={..._.userData,faction:null,permissions:[],accessLevel:"none",factionInfo:null,isFactionMember:!1,debugInfo:{charactersChecked:[],foundMember:!1,factionCheckDuration:0,error:"No character array found in userData"}},_;s?.({step:"character_processing",message:"Processing character information...",progress:60});const k=performance.now();let D=[];try{const R=rs(Er,"batchCheckFactionMembership"),$=Date.now()+"-"+Math.random().toString(36).substr(2,5),O=Date.now(),E=performance.now(),y=[];for(const z of P)z&&z.id&&(D.push(parseInt(z.id)),y.push(z.name||`${z.firstname||""} ${z.lastname||""}`.trim()));console.log("🔍 [GTA Auth] Main user info:",{userId:_.userData.id,username:_.userData.username,note:"This is the memberid, not used for faction lookup - we need individual character IDs"}),console.log("📝 [GTA Auth] Processing character array for BATCH faction check:",{arrayLength:P.length,validCharacters:D.length,characterIds:D,characterNames:y});const w=`factionData_364_${D.join("_")}`,x=sessionStorage.getItem(w);let v=!1;if(x)try{const z=JSON.parse(x),V=Date.now()-z.timestamp,ue=1800*1e3;if(V<ue){s?.({step:"faction_check",message:"Using cached faction data...",progress:80});const ve=performance.now();d("faction_cache_hit",ve),console.log(`💾 [GTA Auth] Using cached faction data [${$}]:`,{cacheKey:w,cacheAge:`${Math.round(V/1e3)}s`,cacheValidFor:`${Math.round((ue-V)/1e3)}s more`,characterIds:D,cachedMembersCount:z.data?.summary?.totalMembers||0}),l=z,v=!0}else console.log(`�️ [GTA Auth] Cached faction data expired [${$}]:`,{cacheKey:w,cacheAge:`${Math.round(V/1e3)}s`,expiredBy:`${Math.round((V-ue)/1e3)}s`,note:"Will fetch fresh data"}),sessionStorage.removeItem(w)}catch(z){console.warn(`⚠️ [GTA Auth] Invalid cached data, removing [${$}]:`,z.message),sessionStorage.removeItem(w)}if(!l&&(console.log(`�🔥 [GTA Auth] BATCH checking faction membership [${$}]:`,{function:"batchCheckFactionMembership",factionId:364,characterIds:D,characterCount:D.length,timestamp:O,cacheStatus:"cache miss - fetching fresh data"}),l=await R({characterIds:D,factionId:364}),d("faction_api_call",E),l.data?.success)){const z={data:{success:l.data.success,results:l.data.results?.map(V=>({characterId:V.characterId,isMember:V.isMember,character:V.isMember?{characterId:V.character?.characterId,characterName:V.character?.characterName,scriptRank:V.character?.scriptRank,rank:V.character?.rank}:null,permissions:V.permissions,accessLevel:V.accessLevel}))||[],summary:l.data.summary},timestamp:Date.now()};sessionStorage.setItem(w,JSON.stringify(z)),console.log(`💾 [GTA Auth] Cached faction data [${$}]:`,{cacheKey:w,cachedMembersCount:l.data?.summary?.totalMembers||0,validUntil:new Date(Date.now()+1800*1e3).toLocaleTimeString()})}let A={data:{isMember:!1,character:null}},C=!1;if(l.data?.success&&l.data?.results){const z=l.data.results.filter(V=>V.isMember);if(z.length>0){C=!0;const V=l.data.summary?.highestRankingMember;V?(A={data:V},console.log("🏆 [GTA Auth] Selected highest-ranking character from batch:",{characterId:V.character.characterId,characterName:V.character.characterName,scriptRank:V.character.scriptRank,rank:V.character.rank,accessLevel:V.accessLevel,totalFactionMembers:z.length})):A={data:z[0]}}}const B=Date.now()-O,j=A.data;_.userData={..._.userData,faction:j.isMember?j.character:null,permissions:j.permissions||[],accessLevel:j.accessLevel||"none",factionInfo:j.factionInfo||null,isFactionMember:j.isMember,debugInfo:{charactersChecked:D.length,characterIds:D,foundMember:C,factionCheckDuration:B}},console.log(`📊 [GTA Auth] Enhanced user data with faction info [${$}]:`,{username:_.userData.username,mainCharacterId:_.userData.id,isFactionMember:_.userData.isFactionMember,accessLevel:_.userData.accessLevel,permissionCount:_.userData.permissions.length,factionCharacter:_.userData.faction,charactersChecked:D.length,debugInfo:_.userData.debugInfo});const G=l.data?.results?.filter(z=>z.isMember).map(z=>({character:{characterId:z.character?.characterId,characterName:z.character?.characterName,scriptRank:z.character?.scriptRank,rank:z.character?.rank}}))||[];_.userData.allFactionCharacters=G,Uf(_.userData),console.log(`⏱️ [GTA Auth] BATCH faction membership check completed [${$}]:`,{duration:`${B}ms`,durationSeconds:`${(B/1e3).toFixed(2)}s`,foundMember:C,totalCharactersChecked:D.length,factionMembersFound:l.data?.summary?.totalMembers||0,selectedResult:C?{characterId:A.data?.character?.characterId,rank:A.data?.character?.rank,scriptRank:A.data?.character?.scriptRank,accessLevel:A.data?.accessLevel}:null,note:C?"Member access granted":"No faction membership found",dataSource:v?"cached data (no API call)":"fresh API call",batchOptimization:"Single batch call instead of individual character checks"}),sessionStorage.setItem("factionResult",JSON.stringify({m:C,d:A.data?.character?{id:A.data.character.characterId,name:A.data.character.characterName,rank:A.data.character.scriptRank,access:A.data.accessLevel}:null,t:Date.now(),c:v,dur:Math.round(B)}))}catch(R){console.warn("[GTA Auth] BATCH faction check failed, continuing without faction data:",{error:R.message,code:R.code,details:R.details,characterIds:D,batchFunction:"batchCheckFactionMembership"}),_.userData.faction=null,_.userData.permissions=[],_.userData.accessLevel="none",_.userData.isFactionMember=!1,_.userData.factionError=R.message}}const I={..._.userData,debugInfo:void 0,character:_.userData.character?_.userData.character.map(P=>({id:P.id,firstname:P.firstname,lastname:P.lastname})):void 0,allFactionCharacters:l.data?.results?.filter(P=>P.isMember).map(P=>({character:{characterId:P.character?.characterId,characterName:P.character?.characterName,scriptRank:P.character?.scriptRank,rank:P.character?.rank}}))||[]};sessionStorage.setItem(wt.USER_DATA,JSON.stringify(I)),sessionStorage.setItem(wt.ACCESS_TOKEN,_.accessToken),console.info("[GTA Auth] Authentication successful");const F=performance.now()-o;a.totalDuration=Math.round(F),a.success=!0,console.log(`[Perf] OAuth completed successfully [${a.sessionId}]:`,{totalDuration:`${F.toFixed(2)}ms`,phases:a.phases,efficiency:F<1e4?"excellent":F<2e4?"good":"needs improvement",cacheUsed:_.userData?.debugInfo?.usedCache||!1}),s?.({step:"complete",message:"Authentication successful!",progress:100,metrics:{totalTime:Math.round(F),phases:a.phases}}),mh(a),sessionStorage.removeItem(wt.OAUTH_STATE),sessionStorage.removeItem(wt.OAUTH_REQUEST_LOCK),n&&n(_.userData,p.returnPath)}else throw new Error(_.error||"Token exchange failed")}catch(u){const g=performance.now()-o;a.totalDuration=Math.round(g),a.success=!1,a.error=u.message,console.error("[GTA Auth] OAuth callback error:",u),console.log(`[Perf] OAuth failed [${a.sessionId}]:`,{totalDuration:`${g.toFixed(2)}ms`,phases:a.phases,error:u.message}),mh(a);const f=W0(u),p=sessionStorage.getItem("oauth_retry_count")||"0",S=2;if(f&&parseInt(p)<S){const I=parseInt(p)+1;sessionStorage.setItem("oauth_retry_count",I.toString()),console.log(`[GTA Auth] Retryable error detected, attempt ${I}/${S}:`,u.message),setTimeout(()=>{Bf(t,e,n,r,s)},1e3*I);return}else sessionStorage.removeItem("oauth_retry_count");nt(u,{extra:{context:"GTA World OAuth Callback",code:t?.substring(0,10)+"...",state:e,retryAttempts:parseInt(p),isRetryable:f}}),sessionStorage.removeItem(wt.OAUTH_STATE),sessionStorage.removeItem(wt.AUTH_CODE),sessionStorage.removeItem(wt.OAUTH_REQUEST_LOCK);const _=z0(u);r&&r(_,{originalError:u.message,isRetryable:f,retryAttempts:parseInt(p),canRetryManually:f})}},O0=async(t,e)=>{try{const n=`${t}-${e}`;if(tr&&tr.key===n)return console.warn("[GTA Auth] Duplicate OAuth request detected, waiting for existing request..."),await tr.promise;const r=(async()=>{try{console.debug("[GTA Auth] Calling Firebase function for token exchange"),console.debug("[GTA Auth] Configuration:",{functionName:Ft.FIREBASE_FUNCTION,hasClientId:!!Ft.CLIENT_ID,redirectUri:e,codeLength:t?.length,functionsRegion:"us-central1",requestKey:n.substring(0,50)+"..."});const o=rs(Er,Ft.FIREBASE_FUNCTION),a=Date.now()+"-"+Math.random().toString(36).substr(2,5),l=Date.now();console.log(`🔥 [GTA Auth] Calling Firebase function [${a}]:`,{function:Ft.FIREBASE_FUNCTION,callId:a,codeLength:t?.length,redirectUri:e,clientId:Ft.CLIENT_ID?"present":"missing",timestamp:l});let d;try{const u=new Promise((p,S)=>setTimeout(()=>S(new Error("Firebase function call timed out after 20 seconds")),2e4)),g=o({code:t,redirectUri:e,clientId:Ft.CLIENT_ID});d=await Promise.race([g,u]);const f=Date.now()-l;console.log(`✅ [GTA Auth] Firebase function completed [${a}]:`,{duration:f,hasData:!!d.data,success:d.data?.success,slowCall:f>3e3,verySlowCall:f>1e4}),f>5e3&&console.warn(`⚠️ [GTA Auth] Slow Firebase function detected [${a}]:`,{duration:f,function:Ft.FIREBASE_FUNCTION,possibleTimeout:f>15e3})}catch(u){const g=Date.now()-l;throw console.error(`❌ [GTA Auth] Firebase function error [${a}]:`,{error:u.message,code:u.code,duration:g,function:Ft.FIREBASE_FUNCTION}),u}if(console.debug(`📋 [GTA Auth] Raw Firebase response [${a}]:`,d),console.log(`🔍 [GTA Auth] Detailed API response analysis [${a}]:`,{hasData:!!d.data,hasToken:!!d.data?.token,hasUser:!!d.data?.user,success:d.data?.success,dataKeys:d.data?Object.keys(d.data):[],userDataKeys:d.data?.user?Object.keys(d.data.user):[],userData:d.data?.user,hasCharacterField:!!d.data?.user?.character,hasCharactersField:!!d.data?.user?.characters,charactersCount:(d.data?.user?.character||d.data?.user?.characters)?.length||0,charactersData:d.data?.user?.character||d.data?.user?.characters||"no character data found",userFields:{name:d.data?.user?.name,username:d.data?.user?.username,firstname:d.data?.user?.firstname,lastname:d.data?.user?.lastname,id:d.data?.user?.id,email:d.data?.user?.email}}),d.data?.success&&d.data?.token&&d.data?.user)return{success:!0,accessToken:d.data.token.access_token,refreshToken:d.data.token.refresh_token,tokenType:d.data.token.token_type||"Bearer",expiresIn:d.data.token.expires_in,scope:d.data.token.scope,userData:d.data.user,tokenData:d.data.token,timestamp:d.data.timestamp};throw new Error("Invalid response from token exchange")}catch(o){throw console.error("[GTA Auth] Inner token exchange error:",o),o}})();tr={key:n,promise:r,timestamp:Date.now()},setTimeout(()=>{tr&&tr.key===n&&(console.warn("[GTA Auth] OAuth request timeout reached, clearing active request"),tr=null)},jf);const s=await r;return tr&&tr.key===n&&(tr=null),s}catch(n){if(console.error("[GTA Auth] Token exchange failed:",n),console.error("[GTA Auth] Error details:",{code:n.code,message:n.message,details:n.details,stack:n.stack}),n.code&&n.message){let r=n.message,s={};switch(n.code){case"functions/internal":case"internal":r="Server configuration error. Please check that Firebase Functions are properly deployed and configured.",s={hint:"Check Firebase Functions region configuration and deployment status",region:"us-central1",functionName:Ft.FIREBASE_FUNCTION};break;case"functions/not-found":case"not-found":r="Authentication service not found. Please contact support.",s={hint:"Firebase Function not deployed or wrong function name",functionName:Ft.FIREBASE_FUNCTION};break;case"functions/unauthenticated":case"unauthenticated":r="Authentication required. Please refresh the page and try again.";break;case"functions/permission-denied":case"permission-denied":r="Permission denied. Please contact support.";break;case"functions/unavailable":case"unavailable":r="Authentication service temporarily unavailable. Please try again.";break;case"functions/invalid-argument":case"invalid-argument":r="Invalid request parameters. Please try logging in again.";break;case"functions/deadline-exceeded":case"deadline-exceeded":r="Request timed out. Please try again.";break;default:r="An internal error occurred. Please try again or contact support.",s={originalCode:n.code,originalMessage:n.message};break}return{success:!1,error:r,errorCode:n.code,details:n.details,originalMessage:n.message,debugInfo:s}}return{success:!1,error:n.message||"Token exchange failed",errorCode:"unknown",debugInfo:{errorType:typeof n,errorName:n.name,hasStack:!!n.stack}}}},Hf=()=>{try{const t=sessionStorage.getItem(wt.USER_DATA),e=sessionStorage.getItem(wt.ACCESS_TOKEN);if(!t||!e)return console.debug("[GTA Auth] No complete session data found for restoration"),null;const n=JSON.parse(t);return!n.id||!n.username?(console.warn("[GTA Auth] Incomplete user data found, cannot restore session"),null):(console.info("[GTA Auth] Successfully restored session for user:",{username:n.username,characterId:n.id,isFactionMember:n.isFactionMember,accessLevel:n.accessLevel}),{user:n,accessToken:e,restored:!0,restoredAt:Date.now()})}catch(t){return console.error("[GTA Auth] Failed to restore session from stored data:",t),sessionStorage.removeItem(wt.USER_DATA),sessionStorage.removeItem(wt.ACCESS_TOKEN),null}},_s=()=>{try{const t=sessionStorage.getItem(wt.USER_DATA);return t?JSON.parse(t):null}catch(t){return console.error("[GTA Auth] Failed to get current user:",t),null}},Ds=()=>_s(),cr=()=>{try{const t=sessionStorage.getItem("google-admin-user");if(t){const n=JSON.parse(t);return n&&n.email}const e=sessionStorage.getItem("admin-auth-context");if(e){const n=JSON.parse(e);return n&&n.isAdminAuthenticated&&n.adminUserEmail}return!1}catch(t){return console.warn("[GTA Auth] Error checking Google authentication:",t),!1}},xd=()=>{try{const t=sessionStorage.getItem("google-admin-user");if(t)return JSON.parse(t);const e=sessionStorage.getItem("admin-auth-context");if(e){const n=JSON.parse(e);if(n&&n.isAdminAuthenticated)return{email:n.adminUserEmail,isAdmin:!0}}return null}catch(t){return console.warn("[GTA Auth] Error getting Google user:",t),null}},Ad=()=>sessionStorage.getItem(wt.ACCESS_TOKEN),Oi=()=>!!(_s()&&Ad()),ja=()=>{console.info("[GTA Auth] Logging out user"),Object.values(wt).forEach(t=>{sessionStorage.removeItem(t)}),console.debug("[GTA Auth] User logged out successfully")},M0=async(t,e={})=>{try{const n=Ad();if(!n)throw new Error("No access token available");const r=t.startsWith("http")?t:t.startsWith("/")?`https://ucp.gta.world/api${t}`:`https://ucp.gta.world/api/${t}`,s=await fetch(r,{...e,headers:{Authorization:`Bearer ${n}`,"Content-Type":"application/json",...e.headers}});if(!s.ok)throw new Error(`API request failed: ${s.status} ${s.statusText}`);return await s.json()}catch(n){throw console.error("[GTA Auth] API request failed:",n),nt(n,{extra:{context:"GTA World API Request",endpoint:t}}),n}},Oc=async()=>{try{if(!Oi())return{valid:!1,error:"Not authenticated"};const t=_s();return t&&t.id&&t.username?(console.debug("[GTA Auth] Session validated using stored user data."),{valid:!0,userData:t}):(console.warn("[GTA Auth] Stored user data is incomplete or invalid, session considered invalid."),ja(),{valid:!1,error:"Incomplete user data in session"})}catch(t){return console.error("[GTA Auth] Session validation failed:",t),ja(),{valid:!1,error:t.message||"Session validation failed"}}},j0=()=>{const t={hasClientId:!0,clientId:`${Ft.CLIENT_ID.substring(0,8)}...`,functionName:Ft.FIREBASE_FUNCTION,authorizeUrl:Ft.AUTHORIZE_URL,tokenUrl:Ft.TOKEN_URL,userApiUrl:Ft.USER_API_URL},e=[];return console.info("[GTA Auth] Configuration validation:",{config:t,issues:e}),{valid:e.length===0,config:t,issues:e}},L0=t=>{if(cr())return!0;const e=Ds();return!e||!e.permissions?!1:e.permissions.includes(t)},U0=t=>{if(cr())return!0;const e=Ds();if(!e||!e.isFactionMember)return!1;const r={admin_panel:["admin_full_access","admin_limited_access"],faction_upload:["upload_faction_data"],database_editor:["database_access"],webhook_management:["manage_webhooks"],all_reports:["manage_all_reports"],department_reports:["manage_department_reports","manage_all_reports"],own_reports:["view_own_reports","manage_own_reports","manage_department_reports","manage_all_reports"],create_reports:["create_reports","create_basic_reports"],view_members:["view_all_members","view_department_members","view_team_members"],audit_logs:["access_audit_logs","view_audit_logs"]}[t];return r?r.some(s=>e.permissions.includes(s)):(console.warn(`Unknown feature: ${t}`),!1)},B0=()=>cr()?{characterName:xd()?.email?.split("@")[0]||"Admin",scriptRank:15,isGoogleAdmin:!0}:Ds()?.faction||null,H0=()=>cr()?"president":Ds()?.accessLevel||"none",G0=()=>cr()?["admin_panel","faction_upload","database_editor","webhook_management","all_reports","department_reports","own_reports","create_reports","view_members","audit_logs","manage_users","system_settings"]:Ds()?.permissions||[],Gf=()=>cr()?!0:Ds()?.isFactionMember||!1,Wf=async t=>{const e=Ds();if(!e)throw new Error("No authenticated user found");const n=e.faction?.characterId||e.id;try{const r=rs(Er,"checkFactionMembership"),s=Date.now()+"-"+Math.random().toString(36).substr(2,5),o=Date.now();console.log(`🔥 [GTA Auth] Refreshing faction data Firebase call [${s}]:`,{function:"checkFactionMembership",characterId:parseInt(n),factionId:364,timestamp:o,source:t?"explicit":e.faction?.characterId?"session_faction":"session_user_id"});const a=await r({characterId:parseInt(n),factionId:364}),l=Date.now()-o;console.log(`✅ [GTA Auth] Faction refresh completed [${s}]:`,{duration:l,isMember:a.data?.isMember,hasPermissions:a.data?.permissions?.length>0});const d={...e,faction:a.data.isMember?a.data.character:null,permissions:a.data.permissions||[],accessLevel:a.data.accessLevel||"none",factionInfo:a.data.factionInfo||null,isFactionMember:a.data.isMember};return sessionStorage.setItem(wt.USER_DATA,JSON.stringify(d)),console.log("[GTA Auth] Faction data refreshed:",{isFactionMember:d.isFactionMember,accessLevel:d.accessLevel,permissionCount:d.permissions.length}),d}catch(r){throw console.error("[GTA Auth] Failed to refresh faction data:",r),r}},W0=t=>{if(!t)return!1;const e=[/timeout/i,/network/i,/connection/i,/fetch/i,/ENOTFOUND/i,/ECONNREFUSED/i,/ETIMEDOUT/i,/AbortError/i,/502|503|504/,/deadline.{0,10}exceeded/i,/unavailable/i],n=t.message||t.toString(),r=t.code||"";return e.some(s=>s.test(n)||s.test(r))},z0=t=>{if(!t)return"An unknown error occurred during authentication.";const e=t.message||t.toString();return e.includes("timeout")||e.includes("AbortError")?"Authentication timed out. The GTA World servers may be busy. Please try again.":e.includes("network")||e.includes("fetch")||e.includes("ENOTFOUND")?"Network connection error. Please check your internet connection and try again.":e.includes("invalid_request")||e.includes("revoked")?"This login session has expired or was already used. Please start the login process again.":e.includes("invalid_grant")?"The login session has expired. Please try logging in again.":e.includes("invalid_client")?"Authentication service configuration error. Please notify the Maintainer in the PHMC Discord.":e.includes("502")||e.includes("503")||e.includes("504")?"GTA World servers are temporarily unavailable. Please try again in a few moments.":e.includes("deadline")||e.includes("unavailable")?"Authentication service is temporarily unavailable. Please try again.":"Something went wrong during authentication. Please notify the Maintainer in the PHMC Discord"},hh=()=>{try{const t=[];for(let s=0;s<sessionStorage.length;s++){const o=sessionStorage.key(s);o?.startsWith("factionData_")&&t.push(o)}const e=Date.now(),n=1800*1e3;t.forEach(s=>{try{const o=JSON.parse(sessionStorage.getItem(s)||"{}");o.timestamp&&e-o.timestamp>n&&(sessionStorage.removeItem(s),console.log(`[Storage Cleanup] Removed expired cache: ${s}`))}catch{sessionStorage.removeItem(s)}}),Object.keys(sessionStorage).reduce((s,o)=>s+(sessionStorage.getItem(o)?.length||0),0)>1024*1024&&console.warn("[Storage Cleanup] Session storage size exceeding 1MB, consider clearing old data")}catch(t){console.warn("[Storage Cleanup] Error during cleanup:",t)}};typeof window<"u"&&(hh(),setInterval(hh,600*1e3));const mh=t=>{try{const e="oauth_performance_metrics",r=[...JSON.parse(sessionStorage.getItem(e)||"[]"),t].slice(-10);sessionStorage.setItem(e,JSON.stringify(r));const s=r.reduce((a,l)=>a+(l.totalDuration||0),0)/r.length,o=r.filter(a=>a.success).length/r.length*100;console.log(`[Perf Summary] Last ${r.length} OAuth attempts: avg ${s.toFixed(0)}ms, ${o.toFixed(0)}% success`),t.totalDuration>15e3&&console.warn(`[Perf Alert] Slow OAuth detected: ${t.totalDuration}ms - investigate bottlenecks`)}catch(e){console.warn("[Perf] Failed to store performance metrics:",e)}},dr=()=>{const[t,e]=b.useState(()=>Oi()?_s():null),[n,r]=b.useState(()=>!t),[s,o]=b.useState(null),[a,l]=b.useState(!1),[d,u]=b.useState(null);b.useEffect(()=>{t&&t.isFactionMember?d&&t.allFactionCharacters?.find($=>$.character.characterId===d.characterId)||u(t.faction):u(null)},[t,d]);const g=b.useCallback(R=>{if(!t){console.error("Cannot swap character, no user found.");return}const $=[t.allFactionCharacters,t.character,t.characters].filter(Array.isArray);let O=null;for(const E of $){const y=E.find(x=>x?.character?.characterId===R);if(y){O=y.character;break}const w=E.find(x=>x?.id===R);if(w){const x=t.allFactionCharacters?.find(v=>v?.character?.characterId===w.id)?.character;x?O=x:O={characterId:w.id,characterName:w.name||`${w.firstname||""} ${w.lastname||""}`.trim()};break}}O?(u(O),console.log(`Swapped active character to: ${O.characterName}`)):console.error(`Character with ID ${R} not found for this user.`)},[t]),f=b.useCallback(R=>{u(R),e($=>({...$,faction:R}))},[]),p=t?.character||t?.characters||[];b.useEffect(()=>{(async()=>{try{if(t){r(!1);try{l(!0);const O=await Oc();l(!1),O.valid||(e(null),o("Session expired. Please log in again."))}catch{l(!1)}return}r(!0),o(null);const $=Hf();if($){e($.user),r(!1),Wf().then(O=>{e(O)}),l(!0);try{const O=await Oc();l(!1),O.valid||(e(null),o("Session expired. Please log in again."))}catch{l(!1)}return}if(Oi()){const O=_s();e(O),l(!0);const E=await Oc();l(!1),E.valid||(e(null),o("Session expired. Please log in again."))}else e(null)}catch($){o($.message||"Failed to initialize authentication"),e(null)}finally{r(!1)}})()},[t]);const S=b.useCallback((R={})=>{o(null);const $={...R,onSuccess:(O,E)=>{e(O),R.onSuccess&&R.onSuccess(O,E)},onError:O=>{o(O),R.onError&&R.onError(O)}};D0($)},[]),_=b.useCallback(async(R,$)=>{Date.now()+""+Math.random().toString(36).substr(2,5);try{return r(!0),o(null),await new Promise((E,y)=>{const w=Date.now();Bf(R,$,(x,v)=>{const A=Date.now()-w;console.log("🎯 [useGtaWorldAuth] handleOAuthCallback onSuccess called:",{duration:A,hasUserData:!!x,username:x?.username,returnPath:v}),e(x),r(!1),E({userData:x,returnPath:v})},x=>{const v=Date.now()-w;console.error("❌ [useGtaWorldAuth] handleOAuthCallback onError called:",{duration:v,errorMessage:x}),o(x),r(!1),y(new Error(x))})})}catch(O){throw o(O.message||"Authentication failed"),r(!1),O}},[]),I=b.useCallback(()=>{ja(),e(null),o(null)},[]),F=b.useCallback(async(R,$={})=>{try{if(!Oi())throw new Error("Not authenticated");return await M0(R,$)}catch(O){throw(O.message.includes("401")||O.message.includes("unauthorized"))&&(I(),o("Session expired. Please log in again.")),O}},[I]),P=b.useCallback(async()=>{try{l(!0);const R=await F("/user");return e(R.user||R),R}catch(R){throw R}finally{l(!1)}},[F]),k=b.useCallback(()=>{o(null)},[]),D=b.useCallback(R=>{if(!R)return;const $={username:R.username,id:R.userId,isFactionMember:R.isFactionMember,faction:R.faction,allFactionCharacters:R.swappableCharacters,character:R.swappableCharacters,characters:R.swappableCharacters,accessLevel:R.accessLevel,permissions:R.permissions};e($),u(R.faction),r(!1)},[]);return{user:t,isAuthenticated:!!t,isLoading:n,error:s,isValidatingSession:a,accessToken:Ad(),login:S,logout:I,processCallback:_,refreshUser:P,apiRequest:F,clearError:k,getUserData:_s,hasValidSession:Oi(),isFactionMember:Gf(),isPhmcMember:t?.isFactionMember||!1,factionData:d,factionRank:d?.scriptRank||0,characterName:d?.characterName||null,swappableCharacters:p,swapCharacter:g,canSwapCharacters:p.length>0,updateFactionData:f,loadFromSavedProfile:D}},yl=({variant:t="primary",size:e="md",className:n="",children:r,returnPath:s,onError:o,onInitiate:a,onSuccess:l,disabled:d=!1,...u})=>{const{login:g,isLoading:f,isAuthenticated:p,user:S}=dr(),_=b.useRef(0),I=500,F=b.useCallback(()=>{const P=Date.now(),k=P-_.current;if(k<I){console.warn("[GTA Login Button] Click ignored - too soon after last click:",{timeSinceLastClick:k,debounceMs:I,remainingMs:I-k});return}if(p&&S){console.info("[GTA Login Button] User already authenticated, calling onSuccess callback:",{username:S.username,characterId:S.id}),l&&l(S);return}_.current=P,console.log("[GTA Login Button] Initiating login..."),a&&a(),g({returnPath:s,onSuccess:(D,R)=>{console.info("[GTA Login Button] Login successful:",D),l&&l(D,R)},onError:D=>{console.error("[GTA Login Button] Login error:",D),o&&o(D)}})},[g,s,o,a,l,I,p,S]);return i.jsx(ce,{variant:t,size:e,className:n,onClick:F,disabled:d||f,...u,children:f?i.jsxs(i.Fragment,{children:[i.jsx("span",{className:"spinner-border spinner-border-sm me-2",role:"status","aria-hidden":"true"}),"Connecting..."]}):r||i.jsxs(i.Fragment,{children:[i.jsx("i",{className:"fas fa-sign-in-alt me-2"}),"Login with GTA World"]})})},q0=()=>{const[t,e]=b.useState(""),[n,r]=b.useState(""),[s,o]=b.useState(""),a=Ga(),{user:l}=Nd(),{isAuthenticated:d,user:u,isLoading:g}=dr();if(b.useEffect(()=>{l?(console.log("[GtaLogin] Firebase user authenticated, redirecting to admin:",l.email),a("/forms")):d&&u&&(console.log("[GtaLogin] GTA World user authenticated, redirecting to home:",{username:u.username,characterId:u.id}),a("/forms"))},[l,d,u,a]),g)return i.jsx("div",{style:{maxWidth:"400px",margin:"auto",paddingTop:"50px",textAlign:"center"},children:i.jsxs("div",{style:{padding:"20px"},children:[i.jsx("div",{className:"spinner-border",role:"status",children:i.jsx("span",{className:"visually-hidden",children:"Loading..."})}),i.jsx("p",{style:{marginTop:"10px"},children:"Checking authentication..."})]})});const f=p=>{p.preventDefault(),o(""),qp(ii,t,n).catch(S=>{o(S.message)})};return i.jsx("div",{style:{maxWidth:"400px",margin:"auto",paddingTop:"50px"},children:i.jsxs("form",{onSubmit:f,children:[i.jsx("button",{type:"button",onClick:()=>a("/"),style:{width:"25%",padding:"10px",backgroundColor:"#6c757d",color:"white",border:"pink",marginTop:"10px"},children:"Home"}),i.jsx("h2",{children:"Login"}),s&&i.jsx("p",{style:{color:"red"},children:s}),i.jsxs("div",{style:{marginBottom:"10px"},children:[i.jsx("label",{children:"Email"}),i.jsx("input",{type:"email",value:t,onChange:p=>e(p.target.value),style:{width:"100%",padding:"8px"}})]}),i.jsxs("div",{style:{marginBottom:"10px"},children:[i.jsx("label",{children:"Password"}),i.jsx("input",{type:"password",value:n,onChange:p=>r(p.target.value),style:{width:"100%",padding:"8px"}})]}),i.jsxs("div",{style:{display:"flex",gap:"10px",marginBottom:"10px"},children:[i.jsx("button",{type:"submit",style:{flex:1,padding:"10px",backgroundColor:"blue",color:"white",border:"none"},children:"Login"}),i.jsx(yl,{returnPath:"/",style:{flex:1,padding:"10px",backgroundColor:"#ff8c00",color:"white",border:"none"},onError:p=>o(`GTA World Login Error: ${p}`),onInitiate:()=>o(""),onSuccess:p=>{console.log("[GtaLogin] GTA World login successful:",p),a("/")},children:"Login with GTA World OAuth"})]}),i.jsx("button",{type:"button",onClick:()=>a("/"),style:{width:"100%",padding:"10px",backgroundColor:"#6c757d",color:"white",border:"none",marginTop:"10px"},children:"Home"})]})})},V0=()=>{const[t,e]=b.useState("processing"),[n,r]=b.useState(null),s=_g(),o=Ga(),{processCallback:a}=dr();return b.useEffect(()=>{const l=new URLSearchParams(s.search),d=new URLSearchParams(s.hash.split("?")[1]||""),u=l.get("code")||d.get("code"),g=l.get("state")||d.get("state"),f=l.get("error")||d.get("error"),p=l.get("error_description");if(f){e("error"),r(p||f);return}if(!u){e("error"),r("No authorization code received");return}(async()=>{try{console.log("🎯 [UnifiedGtaCallback] Starting processCallback with:",{code:u?.substring(0,10)+"...",state:g}),await a(u,g),console.log("✅ [UnifiedGtaCallback] processCallback completed successfully"),e("success");try{const S=sessionStorage.getItem("gta-user-data")||sessionStorage.getItem("gtaworld_user_data"),_=S?JSON.parse(S):null;if(_){const I=_.faction||null,F=I?.characterName||null,P=I?.characterId||null,k=I?.rank||I?.scriptRank||null,D={username:_.username||null,userId:_.id||null,isFactionMember:!!_.isFactionMember,faction:I?{characterName:I.characterName||null,characterId:I.characterId||null,rank:I.rank||null,scriptRank:I.scriptRank||null}:null,preferredEmployee:{name:F||null,badge:P||null,rank:k||null,discord:_.username||null,phNumber:"50056"},accessLevel:_.accessLevel||"none",permissions:Array.isArray(_.permissions)?_.permissions:[],savedAt:Date.now(),version:1};sessionStorage.setItem("phmc_gtaw_oauth_latest",JSON.stringify(D));const R=localStorage.getItem("phmc_gtaw_oauth_persist_enabled")==="true";R&&localStorage.setItem("phmc_gtaw_oauth_profile",JSON.stringify(D)),console.log("[UnifiedGtaCallback] Prepared compact OAuth profile for persistence.",{hasUser:!!_,wroteSessionKey:"phmc_gtaw_oauth_latest",persistedToLocalStorage:R})}else console.warn("[UnifiedGtaCallback] No user data found in sessionStorage to prepare persistence profile.")}catch(S){console.warn("[UnifiedGtaCallback] Failed to prepare/persist compact OAuth profile:",S)}console.log("🔄 [UnifiedGtaCallback] Setting up navigation to homepage in 800ms"),setTimeout(()=>{console.log("🚀 [UnifiedGtaCallback] Navigating to homepage (preserving sessionStorage)"),console.log("📦 [UnifiedGtaCallback] SessionStorage before navigation:",{userData:!!sessionStorage.getItem("gtaworld_user_data"),accessToken:!!sessionStorage.getItem("gtaworld_access_token"),storageKeys:Object.keys(sessionStorage)}),o("/",{replace:!0})},800)}catch(S){console.error("❌ [UnifiedGtaCallback] processCallback failed:",S),e("error"),r(S.message||"Authentication failed")}})()},[s.search,s.hash,a]),t==="processing"?i.jsx("div",{className:"d-flex justify-content-center align-items-center",style:{height:"100vh"},children:i.jsxs("div",{className:"text-center",children:[i.jsx("div",{className:"spinner-border text-primary",role:"status",style:{width:"3rem",height:"3rem"},children:i.jsx("span",{className:"visually-hidden",children:"Processing..."})}),i.jsx("h4",{className:"mt-3",children:"GTA World Authentication"}),i.jsx("p",{className:"text-muted",children:"Processing authentication..."})]})}):t==="success"?i.jsx("div",{className:"d-flex justify-content-center align-items-center",style:{height:"100vh"},children:i.jsxs("div",{className:"text-center",children:[i.jsx("div",{className:"text-success mb-3",children:i.jsx("i",{className:"fas fa-check-circle",style:{fontSize:"4rem"}})}),i.jsx("h4",{className:"text-success",children:"Authentication Successful!"}),i.jsx("p",{className:"text-muted",children:"Redirecting to homepage..."}),i.jsx("div",{className:"spinner-border spinner-border-sm text-primary mt-2",children:i.jsx("span",{className:"visually-hidden",children:"Redirecting..."})})]})}):t==="error"?i.jsx("div",{className:"d-flex justify-content-center align-items-center",style:{height:"100vh"},children:i.jsx("div",{className:"text-center",children:i.jsxs("div",{className:"alert alert-danger",role:"alert",style:{maxWidth:"500px"},children:[i.jsxs("h4",{className:"alert-heading",children:[i.jsx("i",{className:"fas fa-exclamation-triangle me-2"}),"Authentication Error"]}),i.jsx("p",{className:"mb-3",children:n}),i.jsx("hr",{}),i.jsxs("div",{className:"d-flex gap-2 justify-content-center",children:[i.jsxs("button",{className:"btn btn-primary",onClick:()=>o("/",{replace:!0}),children:[i.jsx("i",{className:"fas fa-home me-2"}),"Return to Homepage"]}),i.jsxs("button",{className:"btn btn-outline-secondary",onClick:()=>window.location.reload(),children:[i.jsx("i",{className:"fas fa-redo me-2"}),"Try Again"]})]})]})})}):null},Y0=()=>{const[t,e]=b.useState(null);return b.useEffect(()=>{const n={timestamp:new Date().toISOString(),fullUrl:window.location.href,origin:window.location.origin,pathname:window.location.pathname,search:window.location.search,hash:window.location.hash,searchParams:Object.fromEntries(new URLSearchParams(window.location.search)),hashParams:Object.fromEntries(new URLSearchParams(window.location.hash.split("?")[1]||"")),hasCode:!!(new URLSearchParams(window.location.search).get("code")||new URLSearchParams(window.location.hash.split("?")[1]||"").get("code")),hasState:!!(new URLSearchParams(window.location.search).get("state")||new URLSearchParams(window.location.hash.split("?")[1]||"").get("state")),hasError:!!(new URLSearchParams(window.location.search).get("error")||new URLSearchParams(window.location.hash.split("?")[1]||"").get("error")),code:new URLSearchParams(window.location.search).get("code")||new URLSearchParams(window.location.hash.split("?")[1]||"").get("code"),state:new URLSearchParams(window.location.search).get("state")||new URLSearchParams(window.location.hash.split("?")[1]||"").get("state"),error:new URLSearchParams(window.location.search).get("error")||new URLSearchParams(window.location.hash.split("?")[1]||"").get("error")};e(n),console.log("[OAuth URL Diagnostic]",n),sessionStorage.setItem("oauth-url-diagnostic",JSON.stringify(n))},[]),t?i.jsxs("div",{style:{padding:"20px",fontFamily:"monospace",fontSize:"12px"},children:[i.jsx("h2",{children:"OAuth URL Diagnostic"}),i.jsxs("div",{style:{backgroundColor:"#f5f5f5",padding:"10px",borderRadius:"4px"},children:[i.jsx("h3",{children:"URL Components:"}),i.jsxs("p",{children:[i.jsx("strong",{children:"Full URL:"})," ",t.fullUrl]}),i.jsxs("p",{children:[i.jsx("strong",{children:"Search:"})," ",t.search||"(empty)"]}),i.jsxs("p",{children:[i.jsx("strong",{children:"Hash:"})," ",t.hash||"(empty)"]}),i.jsx("h3",{children:"Parameters Found:"}),i.jsxs("p",{children:[i.jsx("strong",{children:"Search Params:"})," ",JSON.stringify(t.searchParams)]}),i.jsxs("p",{children:[i.jsx("strong",{children:"Hash Params:"})," ",JSON.stringify(t.hashParams)]}),i.jsx("h3",{children:"OAuth Parameters:"}),i.jsxs("p",{children:[i.jsx("strong",{children:"Code:"})," ",t.code?`${t.code.substring(0,20)}...`:"NOT FOUND"]}),i.jsxs("p",{children:[i.jsx("strong",{children:"State:"})," ",t.state?`${t.state.substring(0,20)}...`:"NOT FOUND"]}),i.jsxs("p",{children:[i.jsx("strong",{children:"Error:"})," ",t.error||"NOT FOUND"]}),i.jsx("h3",{children:"Status:"}),i.jsxs("p",{style:{color:t.hasCode?"green":"red"},children:["✓ Has Code: ",t.hasCode?"YES":"NO"]}),i.jsxs("p",{style:{color:t.hasState?"green":"red"},children:["✓ Has State: ",t.hasState?"YES":"NO"]}),i.jsxs("p",{style:{color:t.hasError?"red":"green"},children:["✓ Has Error: ",t.hasError?"YES":"NO"]})]}),i.jsxs("div",{style:{marginTop:"20px"},children:[i.jsx("button",{onClick:()=>window.location.href="/#/",children:"Continue to Homepage"}),i.jsx("button",{onClick:()=>navigator.clipboard.writeText(JSON.stringify(t,null,2)),style:{marginLeft:"10px"},children:"Copy Diagnostic Data"})]})]}):i.jsx("div",{children:"Loading URL diagnostic..."})},K0=({children:t})=>{const{user:e}=Nd(),{isAuthenticated:n}=dr();return!e&&!n?i.jsx(Gh,{to:"/login"}):t},J0=t=>{let e=`[h1]Developer Testing Form[/h1]
`;e+=`[b]This form is for developer testing purposes only.[/b]

`;for(const[n,r]of Object.entries(t))e+=`[b]${n}:[/b] ${r}
`;return e},X0=t=>{const{coronerRank:e,placeOfDeath:n,department:r,dateTime:s,coronerEmployee:o,coronerBadge:a,decedentName:l,decedentOOC:d,pronouncedTimeOfDeath:u,synopsis:g,probableCauseOfDeath:f,mannerOfDeath:p,typeOfDeath:S,scenePhotos:_,agencyDataStore:I,additionalImages:F,evidenceLockerID:P,morgueStatus:k}=t,{decedentAttributes:D,decedentPlaceholder:R}=t,$=j=>I&&I[j]?I[j].fullName:j,O=(_||"").split(",").map(j=>j.trim()).filter(j=>j),E=(F||"").split(",").map(j=>j.trim()).filter(j=>j),y=(D||"").split(",").map(j=>j.trim()).filter(j=>j);(R||"").split(",").map(j=>j.trim()).filter(j=>j);const w=O.length>0?O.map(j=>`[img]${j}[/img]`).join(`
`):"[i]No scene photos provided.[/i]",x=E.length>0?E.map(j=>`[img]${j}[/img]`).join(`
`):"[i]No additional images provided.[/i]",v=y.length>0?`[b]Decedent /attributes:[/b]
${y.map(j=>`[img]${j}[/img]`).join(`
`)}`:"";let A="No",C="";P&&P.trim()!==""&&(A="Yes",C=`[list][*] ${P.trim()} - ${l} (( ${d} ))[/list]`);const M=k==="true"||k===!0?`[bold][color=red]The Morgue Screen Photo is currently unavailable. [/color][/bold]
`:"";return`[divbox=transparent][center][img]https://i.ibb.co/0pgw9hHm/phmc.png[/img][/center][/divbox]

[divbox=transparent][br][/br][center]DEATH INVESTIGATION REPORT[/center]
[hr][/hr]

[center][bold]A. WRITTEN REPORT[/bold][/center]

The County Coroner's Office has been called regarding the decease that occurred at the location of [bold]${n||"Unknown Location"}[/bold]. Upon receiving the call from[bold] ${$(r)||"Unknown Department"}[/bold], Coroner's Office dispatched a ${e||"Coroner"} to the crime scene to conduct an investigation on the [bold]${s||"Unknown Date/Time"}[/bold].

The ${e||"Coroner"}, [bold]${o||"Unknown Coroner"}[/bold], Serial Number [bold]${a||"N/A"}[/bold], arrived at the scene and identified the individual as [bold]${l||"Unidentified Decedent"}[/bold], who is estimated to have died at [bold]${u||"Unknown Time"}[/bold]. Following an initial investigation, The ${e||"Coroner"} came up with the following [bold]synopsis[/bold]: ${g||"No synopsis provided."}

Based on the information gathered from the scene investigation and the decedent's medical history (if available), the probable cause of death was determined to be [bold]${f||"Undetermined"}[/bold]. The manner of death was classified as [bold]${p||"Undetermined"}[/bold].
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
${x}

${v}

${e||"Coroner"} ${o||"Unknown Coroner"} has added something to the evidence locker: ${A}
${C}

[/divbox]
`},Q0=t=>{const{requestingOfficer:e,department:n,coronerEmployee:r,coronerRank:s,coronerDiscord:o,coronerPHNumber:a,deathReport:l,additionalReports:d,agencyDataStore:u}=t,g=p=>u&&u[p]?u[p].fullName:p;return`[center][img]https://i.ibb.co/GfSHbMMj/ItaoQkO.webp[/img][/center]
[hr][/hr]

TO: ${e} - ${g(n)}
FROM: ${r} @ phmc.health
SUBJECT: Death Report Paperwork

For the attention of: [b]${g(n)}[/b] - [b]${e}[/b]

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
${d&&d.length>0?d.filter(p=>p.trim()).map((p,S)=>`
[altspoiler=Coroner Report - Additional ${S+1}]
${p}
[code]
${p}
[/code]
[/altspoiler]`).join(`

`):""}

Kind regards
${s} ${r}
Pillbox Hill Medical Center - Pathology  and Forensic Medicine

[size=75]The content of this email is intended for the person or entity to which it is addressed only. This email may contain confidential information. If you are not the person to whom this message is addressed, be aware that any use, reproduction, or distribution of this message is strictly prohibited. If you received this in error, please contact the sender and immediately delete this email and any attachments.[/size]`},Z0=t=>{const{phmcEmployee:e,extraStaff:n,patientID:r,patientSummaryConsultation:s,patientAddress:o,phmcRank:a,date:l,patientSummary:d,lastName:u,surgeryProcedures:g}=t;return Array.isArray(n)&&n.join(", "),`[divbox=white][table][tr][td][center][br][/br][br][/br][b]SURGICAL REPORT[/b]

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
${g}

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

[/table]`},eN=t=>{const{patientName:e,patientAddress:n,patientRace:r,patientGender:s,patientPH:o,patientDiscord:a,patientEmergencyContact:l,patientEmergencyContactNumber:d,patientEmergencyContactRelation:u,patientEmergencyContactDiscord:g,patientTitle:f,patientAllergies:p,patientCurrentMedicine:S,patientChronicDiseases:_,patientNotes:I,paymentProofPhotos:F,patientDateOfBirth:P,patientID:k,formType:D,patientTherapy:R,patientTriggers:$,patientSupport:O,patientHarm:E,patientFam:y,patientGenetic:w,patientMental:x,patientFamSocial:v,patientReligion:A,attorneyName:C,attorneyRelation:M,attorneyPH:B,patientSmoker:j,patientAlcohol:G,patientDrugs:z,patientExercise:V,patientDiet:ue,patientSleep:ve,patientSexLife:de,patientJobRisks:Q,patientHazards:ee,patientOther:ne,dnrOther:pe,date:ge}=t;let be="";t.isExempt===!0||t.isExempt==="true"?be="I am exempt from paying this service in accordance with the PHMC policies.":F&&(be=`[url=${F}]Proof Of Payment [/url]`);const Ae=`[table][tr][td][center][br][/br][br][/br][b]Patient Information[/b]

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
[tr][td] Phone Number: ${d} [/td][td] (( Discord ID: ${g}))
[/table]
[divboxcolor=black][center][size=115][color=#FF0000]>[/color] [color=#FFFFFF][b]Medical History[/b][/color][/size][/center][/divboxcolor]
[table][tr][td][b][size=105]Past History[/size][/b][color=transparent]youarecool[/color][/td][td][color=transparent]ifyoureadthisyouareawesomebutdontdeletemeplease![/color]
[tr][td] Blood Type: [/td][td] [cb${t.patientBloodType==="A+"?"c":""}] A+ [cb${t.patientBloodType==="A-"?"c":""}] A- [cb${t.patientBloodType==="B+"?"c":""}] B+ [cb${t.patientBloodType==="B-"?"c":""}] B- [cb${t.patientBloodType==="O+"?"c":""}] O+ [cb${t.patientBloodType==="O-"?"c":""}] O- [cb${t.patientBloodType==="AB+"?"c":""}] AB+ [cb${t.patientBloodType==="AB-"?"c":""}] AB-
[tr][td] Known Allergies: [/td][td] ${p}
[tr][td] Current Medications: [/td][td] ${S}
[tr][td] Chronic Conditions: [/td][td] ${_}
[tr][td] Traumas & Injuries: [/td][td] ${I}
[/table] 

[divboxcolor=black][center][size=115][color=#FF0000]>[/color] [color=#FFFFFF][b]Payment[/b][/color][/size][/center][/divboxcolor]
[table][tr][td] Please attach an unedited confirmation of your payment, unless you are exempt. [size=70](see question 14 in the FAQ thread on how to pay)[/size][/td][td]
    ${be}
[/table]

`,Ge=`[table][tr][td][center][br][/br][br][/br][b]Patient Information[/b]

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
    [tr][td] Phone Number: ${d} [/td][td] (( Discord ID: ${g}))
[/table]
[divboxcolor=black][center][size=115][color=#FF0000]>[/color] [color=#FFFFFF][b]Medical History[/b][/color][/size][/center][/divboxcolor]
[table][tr][td][b][size=105]Past History[/size][/b][color=transparent]youarecool[/color][/td][td][color=transparent]ifyoureadthisyouareawesomebutdontdeletemeplease![/color]
[tr][td] Blood Type: [/td][td] [cb${t.patientBloodType==="A+"?"c":""}] A+ [cb${t.patientBloodType==="A-"?"c":""}] A- [cb${t.patientBloodType==="B+"?"c":""}] B+ [cb${t.patientBloodType==="B-"?"c":""}] B- [cb${t.patientBloodType==="O+"?"c":""}] O+ [cb${t.patientBloodType==="O-"?"c":""}] O- [cb${t.patientBloodType==="AB+"?"c":""}] AB+ [cb${t.patientBloodType==="AB-"?"c":""}] AB-
[tr][td] Known Allergies: [/td][td] ${p}
[tr][td] Current Medications: [/td][td] ${S}
[tr][td] Chronic Conditions: [/td][td] ${_}
[tr][td] Traumas & Injuries: [/td][td] ${I}
[/table]
[divboxcolor=black][center][size=115][color=#FF0000]>[/color] [color=#FFFFFF][b]Mental Health History[/b][/color][/size][/center][/divboxcolor]
[table][tr][td][b][size=105]Past History[/size][/b][color=transparent]youarecool[/color][/td][td][color=transparent]ifyoureadthisyouareawesomebutdontdeletemeplease![/color]
[tr][td] Diagnosed Mental Health Conditions: [/td][td] ${x}
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
[table][tr][td] Smoking Status: ${j} [/td][td] Alcohol Use: ${G}[/td][td] Other Substances: ${z}
[tr][td] Exercise Habits: ${V}[/td][td] Dietary Information: ${ue}[/td][td] Sleep Patterns: ${ve}
[tr][td] Sexual Health: ${de}[/td][td] Occupational Hazards: ${Q}[/td][td] Environmental Hazards: ${ee}[/table]
[table][tr][td] Other Information & Preferences: ${ne}
[/table]
[divboxcolor=black][center][size=115][color=#FF0000]>[/color] [color=#FFFFFF][b]Advanced Directives[/b][/color][/size][/center][/divboxcolor]
[divbox=transparent][list=none]I, ${e}, hereby provide the following advance directives regarding my healthcare, to be followed in the event that I become unable to make decisions about my medical treatment.

[list=1][*] [size=110]Living Will[/size]: In the event I am unable to communicate, I direct the following regarding life-sustaining treatments:
[cb${t.dnr==="ProlongLife"?"c":""}][/cb${t.dnr==="ProlongLife"?"c":""}]I want all available measures taken to prolong my life.
[cb${t.dnr==="ComfortOfLife"?"c":""}][/cb${t.dnr==="ComfortOfLife"?"c":""}]I want only treatments focused on comfort and quality of life, even if it means not prolonging life.
[cb${t.dnr==="other"?"c":""}][/cb${t.dnr==="other"?"c":""}]Other instructions: ${pe}

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
Date: ${ge}[/divbox]
[divboxcolor=black][center][size=115][color=#FF0000]>[/color] [color=#FFFFFF][b]Disclaimer[/b][/color][/size][/center][/divboxcolor]
[divbox=transparent][list=none]I, ${e}, hereby declare that the information provided in this medical history form is true, accurate, and complete to the best of my knowledge. I understand that this information will be stored securely within the systems of Pillbox Hill Medical Center and may be accessed by authorized healthcare professionals involved in my care.

I, ${e}, upon submitting this form, consent to the sharing of my medical information among healthcare professionals within Pillbox Hill Medical Center for the purpose of providing comprehensive and coordinated healthcare services. I acknowledge that this information may be used for diagnosis, treatment, and other healthcare-related activities in accordance with applicable laws and regulations, including the Health Insurance Portability and Accountability Act (HIPAA).

I, ${e}, retain the right to revoke this consent at any time by notifying Pillbox Hill Medical Center in writing. However, I also understand that revoking consent may limit the ability of healthcare professionals to provide me with optimal and coordinated care.[/list][/divbox]
    [divboxcolor=black][center][size=115][color=#FF0000]>[/color] [color=#FFFFFF][b]Payment[/b][/color][/size][/center][/divboxcolor]
    [table][tr][td] Please attach an unedited confirmation of your payment, unless you are exempt. [size=70](see question 14 in the FAQ thread on how to pay)[/size][/td][td]
    ${be}
    [/table]`;return D==="advanced"?Ge:Ae},tN=t=>{const{patientID:e,date:n,phmcEmployee:r,patientHeight:s,patientWeight:o,phmcRank:a,careerRisks:l,patientAllergies:d,patientMedicine:u,patientcareerNo:g,patientSummary:f,patientCareer:p,patientImpairments:S}=t,_=r&&r!=="N/A"?r:"",F=(_?_.split(" ").pop():"")||"[Signature Required]";return`[divbox=white][table][tr][td][center][br][/br][br][/br][b]PHYSICAL EXAMINATION[/b]

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
[cb${t.patientJob==="Yes"?"c":""}][/cb${t.patientJob==="Yes"?"c":""}] Yes: ${p}
[cb${t.patientJob==="No"?"c":""}][/cb${t.patientJob==="No"?"c":""}] No: ${g} [/list]
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

`},nN=t=>{const{patientID:e,date:n,lastName:r,patientHeight:s,patientWeight:o,phmcRank:a,careerRisks:l,patientAllergies:d,patientMedicine:u,patientcareerNo:g,patientSummary:f,patientCareer:p,patientImpairments:S}=t;return`[divbox=white][table][tr][td][center][br][/br][br][/br][b]PHYSICAL EXAMINATION[/b]

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
[cb${t.patientJob==="Yes"?"c":""}][/cb${t.patientJob==="Yes"?"c":""}] Yes: ${p}
[cb${t.patientJob==="No"?"c":""}][/cb${t.patientJob==="No"?"c":""}] No: ${g} [/list]
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

`},rN=t=>{const{lastName:e,patientID:n,date:r,patientChiefComplaint:s,phmcRank:o,patientNotes:a,patientDiagnosis:l,patientMedicine:d,patientProcedure:u}=t;return`[divbox=white][table][tr][td][center][br][/br][br][/br][b]Session Notes[/b]

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
`},sN=t=>{const{phmcEmployee:e,patientID:n,phmcRank:r,date:s,patientChiefComplaint:o,patientNotes:a,patientDiagnosis:l,patientMedicine:d,patientProcedure:u}=t,g=e&&e!=="N/A"?e:"",p=(g?g.split(" ").pop():"")||"[Signature Required]";return`[divbox=white][table][tr][td][center][br][/br][br][/br][b]Session Notes[/b]

PATIENT ${n}

Date: ${s}
Signed: ${r&&r!=="N/A"?r:"[Rank Required]"} ${p}
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
`},iN=t=>{const{phmcEmployee:e,phmcRank:n,patientID:r,date:s,patientDiagnosis:o,patientSecondaryDiagnosis:a,patientProcedure:l,patientChiefComplaint:d,scenePhotos:u}=t,g=e&&e!=="N/A"?e:"",p=(g?g.split(" ").pop():"")||"[Signature Required]",S=n&&n!=="N/A"?n:"[Rank Required]";let _="[i]No medication details provided.[/i]";if(u&&u.trim()){const F=u.split(",").map(P=>P.trim()).filter(P=>P);F.length>0&&(_=F.map(P=>P.startsWith("https://")||/\.(jpg|jpeg|png|gif)$/i.test(P)?`[img]${P}[/img]`:P).join(`
`))}return`[divbox=white][table][tr][td][center][br][/br][br][/br][b]Consultation Notes[/b]

PATIENT ID: ${r||"N/A"}

Date: ${s||"N/A"}

Signed: ${S} ${p}
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
[/left][/list][/table]`},oN=t=>{const{phmcEmployee:e,phmcRank:n,patientID:r,date:s,patientDiagnosis:o,patientSecondaryDiagnosis:a,patientMedicine:l,patientProcedure:d,patientChiefComplaint:u,Imaging:g,XrayResults:f,ctResults:p,mriResults:S,ultrasoundResults:_,patientInjuryMechanism:I,prescriptionImage:F}=t,P=e&&e!=="N/A"?e:"",D=(P?P.split(" ").pop():"")||"[Signature Required]",R=n&&n!=="N/A"?n:"[Rank Required]";let $="";if(g&&Array.isArray(g)&&g.length>0){const y=g.join(", ");let w="";const x=[];f&&f.length>0&&x.push(`X-Ray: ${f.join(", ")}`),p&&p.length>0&&x.push(`CT: ${p.join(", ")}`),S&&S.length>0&&x.push(`MRI: ${S.join(", ")}`),_&&_.length>0&&x.push(`Ultrasound: ${_.join(", ")}`),w=x.length>0?x.join("; "):"Results pending or N/A",$=`
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
    
[/left][/list][/table]`},aN=t=>{const{phmcEmployee:e,date:n,patientNotes:r,patientID:s}=t;return`[divbox=white][table][tr][td][center][br][/br][br][/br][b]Session Notes[/b]

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
`},cN=t=>{const{phmcEmployee:e,date:n,patientID:r,patientNotes:s}=t;return`[divbox=white][table][tr][td][center][br][/br][br][/br][b]Session Notes[/b]

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
    `},lN=t=>{const{formType:e,patientFirstName:n,patientMiddleName:r,patientLastName:s,patientName:o,patientPH:a,patientDateOfBirth:l,patientAddress:d,patientZIP:u,patientEmail:g,patientMedInfoReleaseOther:f,phmcEmployee:p,MedicalRecordsReleaseOther:S,patientMedInfoFormatOther:_,StupidDateFrom:I,StupidDateTo:F,SubmitDate:P,paymentProofPhotos:k,MedicalRecordsRelease:D,payNow:R,patientAddress:$,patientRace:O,patientGender:E,patientDiscord:y,patientEmergencyContact:w,patientEmergencyContactNumber:x,patientEmergencyContactRelation:v,patientEmergencyContactDiscord:A,patientTitle:C,patientAllergies:M,patientCurrentMedicine:B,patientChronicDiseases:j,patientNotes:G,date:z,patientID:V,patientTherapy:ue,patientTriggers:ve,patientSupport:de,patientHarm:Q,patientFam:ee,patientGenetic:ne,patientMental:pe,patientFamSocial:ge,patientReligion:be,attorneyName:Ae,attorneyRelation:Ge,attorneyPH:Ke,patientDateOfBirth:xe,patientSmoker:Ze,patientAlcohol:we,patientDrugs:et,patientExercise:yt,patientDiet:re,patientSleep:Re,patientSexLife:le,patientJobRisks:ke,patientHazards:Ie,patientOther:q,dnrOther:se,scenePhotos:Y,UpdateMedicalFile:ie,patientBloodType:te,patientTitleNew:Te,patientNameNew:De,patientDateOfBirthNew:Rt,patientAddressNew:Ue,patientPHNew:J,patientDiscordNew:ze,patientGenderNew:Be,patientRaceNew:Oe}=t;if(e==="release"){const W=(()=>{const Mt=D?.length||0;return Mt===0?0:Mt*5e3})(),Qe=(k||"").split(",")[0].trim(),ut=`${n||""} ${r||""} ${s||""}`.replace(/\s+/g," ").trim();return`[divbox=white] [center] [img]https://i.ibb.co/0pgw9hHm/phmc.png[/img] [/center] [/divbox]
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
[i]${g}[/i][br][/br][/list]
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
[i]${p}[/i]
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
${(R===!0||R==="true")&&W>0?`
    I, ${ut||"the undersigned"}, enclose this payment of $${W.toLocaleString()} for the Medical Records Release Fees. ${Qe?`[url=${Qe}]Enclosed Image[/url]`:"i[/i]"}`:""}[/list]
    [/divbox]`}else{let Ee=`[table][tr][td][center][br][/br][br][/br][b]Patient Information[/b]

[size=110]PATIENT ${V}

${o}
[/size]

[/center][td][center][img]https://i.ibb.co/0pgw9hHm/phmc.png[/img][img]https://i.ibb.co/fdGgxDH1/LkRKav2.png[/img]
[b][size=150]PATIENT INFORMATION UPDATE[/size][/center][/table]
[divboxcolor=black][center][size=115][color=#FF0000]>[/color] [color=#FFFFFF][b]Patient Information[/b][/color][/size][/center][/divboxcolor]
[table][tr][td] Title: ${C}[/td][td] Full Name: ${o}
[tr][td] Date of Birth: ${xe} [/td][td] Home Address: ${$}
[tr][td] Phone Number: ${a} [/td][td] (( Discord ID: ${y}))
[/table]
[divboxcolor=black][center][size=115][color=#FF0000]>[/color] [color=#FFFFFF][b]Updated Information[/b][/color][/size][/center][/divboxcolor]
[u]I hereby request the following information to be updated:[/u]
[i](Tick relevant fields by updating the prefix [cb] to [cbc] and provide the new information within. Please provide the information in full for the requested (ticked!) categories, including non-updated information. Do not add information in categories you haven't ticked![/i]

`;return ie?.includes("GeneralInformation")&&(Ee+=`[cbc][color=#FF0000]>[/color] [bold] General Information[/bold]
[altspoiler=New General Information]
[table][tr][td] Title: ${Te}[/td][td] Full Name: ${De}
[tr][td] Date of Birth: ${Rt} [/td][td] Home Address: ${Ue}
[tr][td] Gender Identity: ${Be} [/td][td] Ethnicity: ${Oe}
[tr][td] Phone Number: ${J} [/td][td] (( Discord ID: ${ze}))
[/table][/altspoiler]`),ie?.includes("EmergencyContact")&&(Ee+=`[cbc][color=#FF0000]>[/color] [bold] Emergency Contact[/bold]
[altspoiler=New Emergency Contact Details]
[table][tr][td] Full Name: ${w} [/td][td] Relationship: ${v}
[tr][td] Phone Number: ${x} [/td][td] (( Discord ID: ${A}))
[/table][/altspoiler]`),ie?.includes("MedicalHistory")&&(Ee+=`[cbc][color=#FF0000]>[/color] [bold] Medical History[/bold]
        [altspoiler=New Medical History]

[table][tr][td][b][size=105]Past History[/size][/b][color=transparent]youarecool[/color][/td][td][color=transparent]ifyoureadthisyouareawesomebutdontdeletemeplease![/color]
[tr][td] Blood Type: [/td][td] [cb${te==="A+"?"c":""}] A+ [cb${te==="A-"?"c":""}] A- [cb${te==="B+"?"c":""}] B+ [cb${te==="B-"?"c":""}] B- [cb${te==="O+"?"c":""}] O+ [cb${te==="O-"?"c":""}] O- [cb${te==="AB+"?"c":""}] AB+ [cb${te==="AB-"?"c":""}] AB-
[tr][td] Known Allergies: [/td][td] ${M}
[tr][td] Current Medications: [/td][td] ${B}
[tr][td] Chronic Conditions: [/td][td] ${j}
[tr][td] Traumas & Injuries: [/td][td] ${G}
[/table][/altspoiler]`),ie?.includes("MentalHealth")&&(Ee+=`[cbc][color=#FF0000]>[/color] [bold] Mental History[/bold]
        [altspoiler=New Mental Health History]
[table][tr][td] Diagnosed Mental Health Conditions: [/td][td] ${pe}
[tr][td] Therapies & Counseling: [/td][td] ${ue}
[tr][td] Triggers or Sensors: [/td][td] ${ve}
[tr][td] Support & Coping Systems: [/td][td] ${de}
[tr][td] Self-Harm History or Tendencies: [/td][td] ${Q}
[/table][/altspoiler]`),ie?.includes("FamilyMedicalHistory")&&(Ee+=`[cbc][color=#FF0000]>[/color] [bold] Family Medical History[/bold]
        [altspoiler=New Family Medical  History]
[table][tr][td][b][size=105]Past History[/size][/b][color=transparent]youarecool[/color][/td][td][color=transparent]ifyoureadthisyouareawesomebutdontdeletemeplease![/color]
[tr][td] Immediate Family Members: [/td][td] ${ee}
[tr][td] Known Genetic Conditions: [/td][td] ${ne}
[tr][td] Family Social History: [/td][td] ${ge}
[/table][/altspoiler]`),ie?.includes("SocialInformation")&&(Ee+=`[cbc][color=#FF0000]>[/color] [bold]Social Information[/bold]
        [altspoiler=New Social Information]
[table][tr][td] Marital Status: [cb${t.maritalStatus==="Single"?"c":""}] Single [cb${t.maritalStatus==="Married"?"c":""}] Married [cb${t.maritalStatus==="Divorced"?"c":""}] Divorced/Widowed [/td][td] Number of Children: [cb${t.numberChildren==="0"?"c":""}] 0 [cb${t.numberChildren==="1"?"c":""}] 1 or more
[tr][td] Cultural and/or Religious Considerations: ${be} [/td][td] Financial Status: [cb${t.financialStatus==="LowIncome"?"c":""}] Low Income [cb${t.financialStatus==="MiddleIncome"?"c":""}] Average Income [cb${t.financialStatus==="HighIncome"?"c":""}] High Income
[/table][/altspoiler]`),ie?.includes("LifestyleInformation")&&(Ee+=`[cbc][color=#FF0000]>[/color] [bold] Lifestyle Information[/bold]
        [altspoiler=New Lifestyle Information]
[table][tr][td] Smoking Status: ${Ze} [/td][td] Alcohol Use: ${we}[/td][td] Other Substances: ${et}
[tr][td] Exercise Habits: ${yt}[/td][td] Dietary Information: ${re}[/td][td] Sleep Patterns: ${Re}
[tr][td] Sexual Health: ${le}[/td][td] Occupational Hazards: ${ke}[/td][td] Environmental Hazards: ${Ie}[/table]
[table][tr][td] Other Information & Preferences: ${q}
[/table][/altspoiler]`),ie?.includes("AdvancedDirectives")&&(Ee+=`[cbc][color=#FF0000]>[/color] [bold] Advanced Directives [/bold]
        [altspoiler=New Advanced Directives]
[divbox=transparent][list=none]I, ${o}, hereby provide the following advance directives regarding my healthcare, to be followed in the event that I become unable to make decisions about my medical treatment:

[list=1][*] [size=110]Living Will[/size]: In the event I am unable to communicate, I direct the following regarding life-sustaining treatments:
[cb${t.dnr==="ProlongLife"?"c":""}][/cb${t.dnr==="ProlongLife"?"c":""}]I want all available measures taken to prolong my life.
[cb${t.dnr==="ComfortOfLife"?"c":""}][/cb${t.dnr==="ComfortOfLife"?"c":""}]I want only treatments focused on comfort and quality of life, even if it means not prolonging life.
[cb${t.dnr==="other"?"c":""}][/cb${t.dnr==="other"?"c":""}]Other instructions: ${se}

[*][size=110]Healthcare Power of Attorney[/size]:
[cb${t.attorney==="Yes"?"c":""}][/cb${t.attorney==="Yes"?"c":""}]have appointed the following person as my Healthcare Proxy/Agent to make medical decisions on my behalf:
[list=none]Full Name: ${Ae}
Relationship to Patient: ${Ge}
Phone Number: ${Ke}[/list]

[cb${t.attorney==="No"?"c":""}][/cb${t.attorney==="No"?"c":""}]I have not appointed a Healthcare Proxy/Agent at this time.
[*] [size=110]Do Not Resuscitate (DNR) Order[/size]:
[cb${t.dnrOrder==="Yes"?"c":""}][/cb${t.dnrOrder==="Yes"?"c":""}]I have a DNR order in place, instructing medical staff not to perform CPR or other life-saving measures if my heart stops.
[cb${t.dnrOrder==="No"?"c":""}][/cb${t.dnrOrder==="No"?"c":""}]I do not have a DNR order in place at this time.

[*][size=110]Consent to Share Advance Directives[/size]:
I authorize Pillbox Hill Medical Center to keep a copy of my advance directives in my medical record and to share this information with medical staff and emergency personnel as needed to ensure my healthcare wishes are respected.[/list]
I understand that I may revise or revoke these directives at any time by providing written notice.

Signature: [i][u]${o}[/u][/i]
Date: ${z}[/divbox][/altspoiler]`),Ee+=`
[divboxcolor=black][center][size=115][color=#FF0000]>[/color] [color=#FFFFFF][b]Disclaimer[/b][/color][/size][/center][/divboxcolor]
[divbox=transparent][list=none]I, ${o}, hereby declare that the information provided in this medical history form is true, accurate, and complete to the best of my knowledge. I understand that this information will be stored securely within the systems of Pillbox Hill Medical Center and may be accessed by authorized healthcare professionals involved in my care.

I, ${o}, upon submitting this form, consent to the sharing of my medical information among healthcare professionals within Pillbox Hill Medical Center for the purpose of providing comprehensive and coordinated healthcare services. I acknowledge that this information may be used for diagnosis, treatment, and other healthcare-related activities in accordance with applicable laws and regulations, including the Health Insurance Portability and Accountability Act (HIPAA).

I, ${o}, retain the right to revoke this consent at any time by notifying Pillbox Hill Medical Center in writing. However, I also understand that revoking consent may limit the ability of healthcare professionals to provide me with optimal and coordinated care.[/list][/divbox]
[divboxcolor=black][center][size=115][color=#FF0000]>[/color] [color=#FFFFFF][b]Payment[/b][/color][/size][/center][/divboxcolor]
[table][tr][td] Please attach an unedited confirmation of your payment, unless you are exempt. [size=70](see question 14 in the FAQ thread on how to pay)[/size][/td][td]
${Y?`[url=${Y}]Proof Of Payment [/url]`:"No proof of payment provided"}
[/table]`,Ee}},dN=t=>{const{scenePhotos:e,decedentName:n,patientNotes:r,synopsis:s,phmcEmployee:o,decedentOOC:a,patientCareer:l}=t,d=(e||"").split(",").map(g=>`[img]${g.trim()}[/img]`).join(`
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
`},uN=t=>{const{phmcEmployee:e,phmcRank:n,patientID:r,date:s,patientDiagnosis:o,patientSecondaryDiagnosis:a,patientMedicine:l,patientProcedure:d,patientChiefComplaint:u,patientNotes:g}=t,f=e&&e!=="N/A"?e:"",S=(f?f.split(" ").pop():"")||"[Signature Required]";return`[divbox=white][table][tr][td][center][br][/br][br][/br][b]Consultation Notes[/b]
    
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
${g}
[br][/br]
[u]Medication: [/u][br][/br]
${l}
[br][/br]
[u]Follow-Up: [/u][br][/br]
[cb${t.followup==="AsNeeded"?"c":""}] As needed
[cb${t.followup==="Recommended"?"c":""}] Recommended
[cb${t.followup==="ElectiveProcedure"?"c":""}] Elective procedure 
[/left][/list][/table]`},hN=t=>{const{patientID:e,date:n,phmcRank:r,phmcEmployee:s,patientChiefComplaint:o,patientTriggers:a,patientStress:l,patientTreatment:d,patientFamily:u,patientJobRisks:g,patientMedicalRecord:f,patientAllergies:p,patientChronicDiseases:S,patientVisitReason:_,patientSymptoms:I,patientCondition:F,patientDrugs:P,patientDrugsUsage:k,patientMental:D,patientJob:R,patientFam:$,patientLegal:O,patientRelationship:E,patientFindings:y,patientTreatmentPlan:w,patientSafety:x,patientFollowUp:v,patientTreatmentMedicine:A,patientDiagnosis:C,patientTherapy:M,patientRiskAssessment:B,patientTherapyMedicine:j}=t,G=s&&s!=="N/A"?s:"",V=(G?G.split(" ").pop():"")||"[Signature Required]";return`[divbox=white][table][tr][td][center][br][/br][br][/br][b]Session Notes[/b]
PATIENT ${e}
Date: ${n}
Signed: ${r&&r!=="N/A"?r:"[Rank Required]"} ${V}
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
${g}
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
${p}
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
${x}
[/list][/td][/tr][/table]`},mN=t=>{const{patientID:e,date:n,Affect:r,phmcRank:s,phmcEmployee:o,patientChiefComplaint:a,patientTriggers:l,patientStress:d,patientTreatment:u,patientFamily:g,patientJobRisks:f,patientMedicalRecord:p,patientAllergies:S,patientChronicDiseases:_,patientVisitReason:I,patientSymptoms:F,patientCondition:P,patientDrugs:k,patientDrugsUsage:D,patientMental:R,patientJob:$,patientFam:O,patientLegal:E,patientRelationship:y,patientFindings:w,patientTreatmentPlan:x,patientSafety:v,patientFollowUp:A,patientTreatmentMedicine:C,patientDiagnosis:M,patientTherapy:B,patientRiskAssessment:j,patientTherapyMedicine:G}=t,z=o&&o!=="N/A"?o:"",ue=(z?z.split(" ").pop():"")||"[Signature Required]";return`[divbox=white][table][tr][td][center][br][/br][br][/br][b]Session Notes[/b]
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
${p}
[br][/br]
[u]Family psychiatric history: [/u][br][/br]
${g}
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
${x}
[br][/br]
[u]Medication: [/u][br][/br]
${G}
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
[/list][/td][/tr][/table]`},pN=t=>{const{coronerRank:e,coronerEmployee:n,synopsis:r,decedentName:s,externalExamination:o,decedentOOC:a,autopsyDeathCauses:l,deathType:d,causeOfDeath:u,autopsyAnatomicSummaryItems:g,autopsyAlbumUrl:f,autopsyPhotosUnavailable:p,RadiologyResult:S,autopsyDate:_,autopsyTime:I,autopsyDiagramImgurUrl:F}=t;let P="[list=a][*]N/A[/list]";if(l&&Array.isArray(l)){const y=l.map(w=>(w||"").trim()).filter(w=>w);y.length>0&&(P=`[list=a]${y[0]}`,y.length>1&&(P+=`
${y.slice(1).map(w=>`[*]${w}`).join(`
`)}`),P+=`
[/list]`)}let k="[list=1][*]N/A[/list]";if(g&&Array.isArray(g)){const y=g.map(w=>(w||"").trim()).filter(w=>w);y.length>0&&(k=`[list=1]${y[0]}`,y.length>1&&(k+=`
${y.slice(1).map(w=>`[*]${w}`).join(`
`)}`),k+=`
[/list]`)}let D="";F&&F.trim()!==""?D=`[b]Autopsy Diagram[/b]:
[img]${F.trim()}[/img]
`:D=`[b]Autopsy Diagram[/b]: N/A
`;let R="";if(p)R="Photographs are unavailable for this autopsy.";else if(f&&f.trim()!==""){const y=f.split(",").map(w=>w.trim()).filter(w=>w);y.length>0?R=`At scene photos are available: ${y.map((w,x)=>`[url=${w}]Photo ${x+1}[/url]`).join(" | ")} Photographs have been taken prior to and during course of the autopsy.`:R="No valid photo URLs provided."}else R="No photographs provided for this autopsy.";let $="DD/MMM/YYYY";if(_){const y=_.split("-");y.length===3&&($=new Date(y[0],parseInt(y[1],10)-1,y[2]).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"}))}return`[divbox=white][center][img]https://i.ibb.co/0pgw9hHm/phmc.png[/img][/center][/divbox]

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
Chief Medical Examiner-Coroner Anne Carter[/justify][/divbox]`},fN=t=>{const{emailPurpose:e,emailRecipient:n,patientName:r,dateOfVisit:s,sicknessStartDate:o,sicknessEndDate:a,reasonForSickness:l,illnessCondition:d,confirmationPurpose:u,phmcEmployee:g,phmcRank:f,phmcEmployeeDepartment:p,phmcEmployeeSignatureImage:S,attachedReportSummary:_}=t;let I="",F="";const P=s?new Date(s).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}):"N/A";e==="Sickness Note"?(I=`RE: Sickness Note for ${r||"Patient"}`,F=`Dear ${n||"Recipient"},

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
[b][size=105]${g||"PHMC Employee"}[/size][/b]
[size=85]${f||"N/A"}
[/size]

[b]Pillbox Hill Medical Center[/b]
[size=85]Elgin Avenue/Strawberry Avenue, Pillbox Hill, Los Santos, SA
Phone: 50056
Mail: [url=https://phmc.gta.world/ucp.php?i=pm&mode=compose&g=40]info@phmc.health[/url]
Website: [url=https://phmc.gta.world/index.php]www.phmc.health[/url]

Follow us on Facebrowser: [url=https://face.gta.world/pages/PHMC?ref=qs]Pillbox Hill Medical Center[/url][/size]

[size=70][i]The contents of this message and any attachments are confidential. They are intended for the named recipient(s) only.  If you have received this email by mistake, please notify the sender immediately and do not disclose the contents to anyone or make copies thereof.[/i][/size][/divbox]`},gN=t=>{const{scenePhotos:e,decedentName:n,patientAge:r,probableCauseOfDeath:s,patientDateOfBirth:o,dateofdeath:a,TimeofDeath:l,witnessName:d,coronerEmployee:u,date:g}=t;return(e||"").split(",").map(p=>`[img]${p.trim()}[/img]`).join(`
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

DATE CERTIFICATE ISSUED: ${g}
[/list]

[br][hr][/hr]
[center]Note: This is the master copy of the death certificate. Additional copies can be requested at an additional fee[/center][br][/br]`},bN=t=>{const{coronerRank:e,placeOfDeath:n,department:r,dateTime:s,requestingOfficer:o,coronerEmployee:a,coronerBadge:l,synopsis:d,showRequestingOfficerInput:u,decedents:g=[],agencyDataStore:f}=t,p=I=>f&&f[I]?f[I].fullName:I,S=I=>{const F=["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten"];return I>=0&&I<=10?F[I]:I.toString()};let _=`[divbox=transparent][center][img]https://i.ibb.co/0pgw9hHm/phmc.png[/img][/center][/divbox]

[divbox=transparent][br][/br][center]MASS FATALITY REPORT[/center]
[hr][/hr]

[center][bold]A. WRITTEN REPORT[/bold][/center]

The County Coroner's Office has been called regarding a Mass Fatality Incident that occurred at the location of [bold]${n||"Unknown Location"}[/bold]. Upon receiving the call from[bold] ${p(r)||"Unknown Department"}[/bold], Coroner's Office dispatched a ${e||"Coroner"} to the crime scene to conduct an investigation on the [bold]${s||"Unknown Date/Time"}[/bold].

The ${e||"Coroner"}, [bold]${a||"Unknown Coroner"}[/bold], Serial Number [bold]${l||"N/A"}[/bold], arrived at the scene and identified a total of [bold]${S(Array.isArray(g)?g.length:0)} Decedents.[/bold]. Following an initial investigation, The ${e||"Coroner"} came up with the following [bold]synopsis[/bold]: ${d||"No synopsis provided."}

${u?`
An official from the ${p(r)||"Unknown Department"} has requested the report be forwarded via Secure Intranet to [b]${o}[/b], it has since been sent to the officer for further processing and review.`:""}
[/divbox]
`;return Array.isArray(g)&&g.forEach((I,F)=>{const P=(I.scenePhotos||"").split(",").map(y=>y.trim()).filter(y=>y),k=(I.additionalImages||"").split(",").map(y=>y.trim()).filter(y=>y),D=P.length>0?P.map(y=>`[img]${y}[/img]`).join(`
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
`,_},yN=t=>{const{caseNumber:e,caseStatus:n,bodyStatus:r,sex:s,ethnicity:o,placeOfDeath:a,manner:l,coronerEmployee:d,chiefMedicalExaminer:u,causeA:g,causeB:f,causeC:p,causeD:S,otherSignificantConditions:_,deathRecordType:I,hairColor:F,eyeColor:P,weight:k,height:D,tattoos:R,jewelry:$,comments:O,decedentName:E,dateOfDeath:y,age:w,deathReportPostId:x}=t;let v;I==="Unidentified"?v=`[table]
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
[td bgcolor=#E6E6E6][bold]Cause A[/bold]: ${g||""}[/td]
[td bgcolor=#E6E6E6][bold]Cause B[/bold]: ${f||""}[/td]
[/tr]
[tr]
[td bgcolor=#E6E6E6][bold]Cause C[/bold]: ${p||""}[/td]
[td bgcolor=#E6E6E6][bold]Cause D[/bold]: ${S||""}[/td]
[/tr]
[tr]
[td bgcolor=#E6E6E6][bold]Other Significant Conditions[/bold]: ${_||"None"}[/td]
[/tr]
[/table]`;const A=x?`[url=${x}]${e}[/url]`:e||"";let C="[DATE HERE]";return y&&(C=new Date(y+"T00:00:00").toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})),`[divbox=#FFFFFF]
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
PHMC's landline can be reached through the number 50056 for any physical records or the next-of-kin process.[/b][/center][/divbox]`},vN=t=>{const{recruitmentPosition:e,applicantTitleAndFullName:n,applicantGenderOtherText:r,applicantAddress:s,applicantContactDetails:o,applicantMedicalConditions:a,applicantSchoolName:l,applicantEnrollmentTerm:d,applicantMajor:u,applicantLanguages:g,applicantPrevEmployment:f,applicantPrevDuties:p,applicantPrevDismissalReason:S,applicantMotivationLetter:_,oocUcpName:I,oocForumName:F,oocDiscord:P,oocTimezone:k,oocMedicalExperience:D,oocAdminRecordLink:R,oocStatsLink:$,charBackground:O,positionDetailsData:E,genderMale:y,genderFemale:w,genderOther:x,locationPHMC:v,locationPBC:A,citizenUS:C,citizenPermanent:M,citizenNone:B,eduHighSchool:j,eduCertificate:G,eduDiploma:z,eduAssociate:V,eduBachelor:ue,eduMaster:ve,eduDoctorate:de,applicantDOB:Q,applicantBirthPlace:ee}=t,ne=E||{};let pe="Position (Please Select)",ge="https://phmc.gta.world/viewforum.php?f=14";if(t.recruitmentPosition&&Object.keys(ne).length>0){const Ae=t.recruitmentPosition;ne[Ae]?(pe=ne[Ae].displayName,ge=ne[Ae].url):(pe=Ae,console.warn(`Position "${Ae}" not found in positionDetailsData from Firebase. Using default URL.`))}else t.recruitmentPosition&&(pe=t.recruitmentPosition,console.warn(`positionDetailsData is empty or not provided. Using default URL for "${t.recruitmentPosition}".`));return`[imageleft]https://i.ibb.co/nMgfpMcv/phmc-curve.png[/imageleft] [b][size=110]Pillbox Hill Medical Center[/size][/b] 
Career Center [center][/center]
[center]Applying as:[/center]
[center][size=150][b]${pe}[/b][/size][/center]
[divboxcolor=black][url=${ge}][color=#FF0000]>[/color] [color=#FFFFFF]Back to the job posting[/color][/url][/divboxcolor]
[br][/br]
[divbox=na][list=none][b][size=110][color=#FF0000]1[/color].  Personal Information[/size][/b][/list]
[hr][/hr]
[list=none][b][color=#FF0000]1.1[/color]  Title & Full Name:[/b] [i]${n||"ANSWER"}[/i]
[b][color=#FF0000]1.2[/color]  Gender:[/b] [i](add a c, where applicable like so cb[color=#FF0000][u][b]c[/b][/u][/color]) [/i]
[list=none][cb${y?"c":""}] Male
[cb${w?"c":""}] Female
[cb${x?"c":""}] Other: ${x&&r?r:""}
[/list]
[b][color=#FF0000]1.3[/color] Date & Place of Birth:[/b] [i]${Q||"DD/MMM/YYYY"} in ${ee||"Birth Place"}[/i]
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
[cb${G?"c":""}] Certificate (Sub-bachelor or vocational)
[cb${z?"c":""}] Diploma (Sub-bachelor or vocational)
[cb${V?"c":""}] Associate Degree
[cb${ue?"c":""}] Bachelor's Degree
[cb${ve?"c":""}] Master's Degree
[cb${de?"c":""}] Doctorate
[/list]
[b][color=#FF0000]2.2[/color] School of Attendance:[/b] 
[list=none][color=#FF0000][b]2.2.1[/color] School Name:[/b]  [i]${l||"ANSWER"}[/i]
[color=#FF0000][b]2.2.2[/color] Enrollment Term:[/b]  [i]${d||"DD/MMM/YYYY to DD/MMM/YYYY"}[/i]
[color=#FF0000][b]2.2.3[/color] Major Course of Study:[/b] [i]${u||"ANSWER"}[/i]
[/list]
[b][color=#FF0000]2.3[/color] Additional Languages:[/b] [i]${g||"ANSWER"}[/i][/list]
[br][/br][/divbox]
[divbox=na][list=none][b][size=110][color=#FF0000]3[/color].  Employment History[/size][/b][/list]
[hr][/hr]
[list=none][b][color=#FF0000]3.1[/color] Previous Employment:[/b] [i]${f||"ROLE at COMPANY between DD/MMM/YYYY to DD/MMM/YYYY"}[/i]
[b][color=#FF0000]3.2[/color] Duties:[/b] [i]${p||"ANSWER"}[/i]
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
[divboxcolor=black][center][url=https://phmc.gta.world/viewforum.php?f=18][color=#FF0000]>[/color] [color=#FFFFFF]Medical Faculty[/url] |[/color]  [url=https://phmc.gta.world/viewtopic.php?t=14][color=#FF0000]>[/color] [color=#FFFFFF]Employment Information[/url] |[/color] [url=https://phmc.gta.world/viewforum.php?f=111][color=#FF0000]>[/color]  [color=#FFFFFF]Visitor Guidelines[/color][/url][/center][/divboxcolor]`},_N=t=>{const{recruitmentPosition:e,applicantTitleAndFullName:n,applicantGenderOtherText:r,applicantDOBAndPlace:s,applicantAddress:o,applicantContactDetails:a,applicantMedicalConditions:l,applicantSchoolName:d,applicantEnrollmentTerm:u,applicantMajor:g,applicantLanguages:f,applicantPrevEmployment:p,applicantPrevDuties:S,applicantPrevDismissalReason:_,applicantMotivationLetter:I,oocUcpName:F,oocForumName:P,oocDiscord:k,oocTimezone:D,oocMedicalExperience:R,oocAdminRecordLink:$,oocStatsLink:O,charBackground:E,genderMale:y,genderFemale:w,genderOther:x,locationPHMC:v,locationPBC:A,citizenUS:C,citizenPermanent:M,citizenNone:B,eduHighSchool:j,eduCertificate:G,eduDiploma:z,eduAssociate:V,eduBachelor:ue,eduMaster:ve,eduDoctorate:de}=t,Q=t.positionDetailsData||{};let ee="Position (Please Select)",ne="https://phmc.gta.world/viewforum.php?f=14";if(t.recruitmentPosition&&Object.keys(Q).length>0){const Ge=t.recruitmentPosition;Q[Ge]?(ee=Q[Ge].displayName,ne=Q[Ge].url):(ee=Ge,console.warn(`Position "${Ge}" not found in positionDetailsData from Firebase. Using default URL.`))}else t.recruitmentPosition&&(ee=t.recruitmentPosition,console.warn(`positionDetailsData is empty or not provided. Using default URL for "${t.recruitmentPosition}".`));const pe=ee!=="Position (Please Select)"?ee:"Psych Application";let ge="";return t.recruitmentPosition==="Counseling Psychologist"||t.recruitmentPosition==="Psychologist"?ge=`[b][color=#FF0000]1.6[/color] Have you been diagnosed with a medical condition, allergies, or prescribed any medication:[/b] [i]${l||"ANSWER"}[/i]
[b][color=#FF0000]1.7[/color]  Citizenship:[/b] [i](add a c, where applicable like so cb[color=#FF0000][u][b]c[/b][/u][/color]) [/i]
[list=none][cb${C?"c":""}] United States Citizen
[cb${M?"c":""}] Permanent resident alien status and applied for U.S. Citizenship 
[cb${B?"c":""}] None of the above
[br][/br][/list]`:ge=`[b][color=#FF0000]1.6[/color]  Desired Employment Location:[/b] [i](add a c, where applicable like so cb[color=#FF0000][u][b]c[/b][/u][/color]) [/i]
[list=none][cb${v?"c":""}] Pillbox Hill Medical Center (City of Los Santos)
[cb${A?"c":""}] PHMC Paleto Bay Clinic (Paleto Bay)
[/list]`,`[imageleft]https://i.ibb.co/nMgfpMcv/phmc-curve.png[/imageleft] [b][size=110]Pillbox Hill Medical Center[/size][/b] 
Career Center [center][/center]
[center]Applying as:[/center]
[center][size=150][b]${pe}[/b][/size][/center]
[divboxcolor=black][url=${ne}][color=#FF0000]>[/color] [color=#FFFFFF]Back to the job posting[/color][/url][/divboxcolor]
[br][/br]
[divbox=na][list=none][b][size=110][color=#FF0000]1[/color].  Personal Information[/size][/b][/list]
[hr][/hr]
[list=none][b][color=#FF0000]1.1[/color]  Title & Full Name:[/b] [i]${n||"ANSWER"}[/i]
[b][color=#FF0000]1.2[/color]  Gender:[/b] [i](add a c, where applicable like so cb[color=#FF0000][u][b]c[/b][/u][/color]) [/i]
[list=none][cb${y?"c":""}] Male
[cb${w?"c":""}] Female
[cb${x?"c":""}] Other: ${x&&r?r:""}
[/list]
[b][color=#FF0000]1.3[/color] Date & Place of Birth:[/b] [i]${s||"DD/MMM/YYYY in CITY"}[/i]
[b][color=#FF0000]1.4[/color]  Address:[/b] [i]${o||"ANSWER"}[/i]
[b][color=#FF0000]1.5[/color]  Contact Details:[/b] [i]${a||"ANSWER"}[/i]
${ge}
[/list][/divbox]
[br][/br]
[divbox=na][list=none][b][size=110][color=#FF0000]2[/color].  Educational Background[/size][/b][/list]
[hr][/hr]
[list=none][b][color=#FF0000]2.1[/color] Highest Level of Education:[/b] [i](add a c, where applicable like so cb[color=#FF0000][u][b]c[/b][/u][/color]) [/i]
[list=none]
[cb${j?"c":""}] High School Diploma
[cb${G?"c":""}] Certificate (Sub-bachelor or vocational)
[cb${z?"c":""}] Diploma (Sub-bachelor or vocational)
[cb${V?"c":""}] Associate Degree
[cb${ue?"c":""}] Bachelor's Degree
[cb${ve?"c":""}] Master's Degree
[cb${de?"c":""}] Doctorate
[/list]
[b][color=#FF0000]2.2[/color] School of Attendance:[/b] 
[list=none][color=#FF0000][b]2.2.1[/color] School Name:[/b]  [i]${d||"ANSWER"}[/i]
[color=#FF0000][b]2.2.2[/color] Enrollment Term:[/b]  [i]${u||"DD/MMM/YYYY to DD/MMM/YYYY"}[/i]
[color=#FF0000][b]2.2.3[/color] Major Course of Study:[/b] [i]${g||"ANSWER"}[/i]
[/list]
[b][color=#FF0000]2.3[/color] Additional Languages:[/b] [i]${f||"ANSWER"}[/i][/list]
[br][/br][/divbox]
[divbox=na][list=none][b][size=110][color=#FF0000]3[/color].  Employment History[/size][/b][/list]
[hr][/hr]
[list=none][b][color=#FF0000]3.1[/color] Previous Employment:[/b] [i]${p||"ROLE at COMPANY between DD/MMM/YYYY to DD/MMM/YYYY"}[/i]
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
[divboxcolor=black][center][url=https://phmc.gta.world/viewforum.php?f=19][color=#FF0000]>[/color] [color=#FFFFFF]Mental Health Department[/url] |[/color]  [url=https://phmc.gta.world/viewtopic.php?t=14][color=#FF0000]>[/color] [color=#FFFFFF]Employment Information[/url] |[/color] [url=https://phmc.gta.world/viewforum.php?f=111][color=#FF0000]>[/color]  [color=#FFFFFF]Visitor Guidelines[/color][/url][/center][/divboxcolor]`},CN=t=>{const{recruitmentPosition:e,applicantTitleAndFullName:n,applicantGenderOtherText:r,applicantDOBAndPlace:s,applicantAddress:o,applicantContactDetails:a,applicantMedicalConditions:l,citizenUS:d,citizenPermanent:u,citizenNone:g,genderMale:f,genderFemale:p,genderOther:S,eduHighSchool:_,eduCertificate:I,eduDiploma:F,eduAssociate:P,eduBachelor:k,eduMaster:D,eduDoctorate:R,applicantSchoolName:$,applicantEnrollmentTerm:O,applicantMajor:E,applicantLanguages:y,applicantPrevEmployment:w,applicantPrevDuties:x,applicantPrevDismissalReason:v,applicantMotivationLetter:A,oocUcpName:C,oocForumName:M,oocDiscord:B,oocTimezone:j,oocAdminRecordLink:G,oocStatsLink:z,charBackground:V,positionDetailsData:ue}=t,ve=ue||{};let de="Position (Please Select)",Q="https://phmc.gta.world/viewforum.php?f=14";if(e&&Object.keys(ve).length>0){const ne=e;ve[ne]?(de=ve[ne].displayName||ne,Q=ve[ne].url||Q):(de=ne,console.warn(`Admin Position "${ne}" not found in adminPositionDetailsData. Using default URL and position key as display name.`))}else e&&(de=e,console.warn(`adminPositionDetailsData is empty or not provided. Using default URL for "${e}".`));return`[imageleft]https://i.ibb.co/nMgfpMcv/phmc-curve.png[/imageleft] [b][size=110]Pillbox Hill Medical Center[/size][/b] 
Career Center [center][/center]
[center]Applying as:[/center]
[center][size=150][b]${de}[/b][/size][/center]
[divboxcolor=black][url=${Q}][color=#FF0000]>[/color] [color=#FFFFFF]Back to the job posting[/color][/url][/divboxcolor]
[br][/br]
[divbox=na][list=none][b][size=110][color=#FF0000]1[/color].  Personal Information[/size][/b][/list]
[hr][/hr]
[list=none][b][color=#FF0000]1.1[/color]  Title & Full Name:[/b] [i]${n||"ANSWER"}[/i]
[b][color=#FF0000]1.2[/color]  Gender:[/b] [i](add a c, where applicable like so cb[color=#FF0000][u][b]c[/b][/u][/color]) [/i]
[list=none][cb${f?"c":""}] Male
[cb${p?"c":""}] Female
[cb${S?"c":""}] Other: ${S&&r?r:"N/A"}
[/list]
[b][color=#FF0000]1.3[/color] Date & Place of Birth:[/b] [i]${s||"DD/MMM/YYYY in CITY"}[/i]
[b][color=#FF0000]1.4[/color]  Address:[/b] [i]${o||"ANSWER"}[/i]
[b][color=#FF0000]1.5[/color]  Contact Details:[/b] [i]${a||"ANSWER"}[/i]
[b][color=#FF0000]1.6[/color] Do you have a diagnosed medical condition?:[/b] [i]${l||"ANSWER"}[/i]
[b][color=#FF0000]1.7[/color]  Citizenship:[/b] [i](add a c, where applicable like so cb[color=#FF0000][u][b]c[/b][/u][/color]) [/i]
[list=none][cb${d?"c":""}] United States Citizen
[cb${u?"c":""}] Permanent resident alien status and applied for U.S. Citizenship 
[cb${g?"c":""}] None of the above
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
[b][color=#FF0000]3.2[/color] Duties:[/b] [i]${x||"ANSWER"}[/i]
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
[list=none][altspoiler=Admin Record][img]${G||"LINK"}[/img][/altspoiler][/list]
[b][color=#FF0000]5.6[/color] Provide a screenshot of your character's statistics (/stats) which you're applying with:[/b] 
[list=none][altspoiler=Stats][img]${z||"LINK"}[/img][/altspoiler][/list]
[b][color=#FF0000]5.7[/color] Provide your character's background story:[/b]
[quote][i]${V||"ANSWER HERE"}[/i][/quote][/list][/divbox]
[divboxcolor=black][center][url=${Q}][color=#FF0000]>[/color] [color=#FFFFFF]${de}[/url]  |[/color]  [url=https://phmc.gta.world/viewtopic.php?t=14][color=#FF0000]>[/color] [color=#FFFFFF]Employment Information[/url] |[/color] [url=https://phmc.gta.world/viewforum.php?f=111][color=#FF0000]>[/color]  [color=#FFFFFF]Visitor Guidelines[/color][/url][/center][/divboxcolor]`},SN=t=>{const{recruitmentPosition:e,applicantTitleAndFullName:n,applicantGenderOtherText:r,applicantDOBAndPlace:s,applicantAddress:o,applicantContactDetails:a,applicantMedicalConditions:l,applicantSchoolName:d,applicantEnrollmentTerm:u,applicantMajor:g,applicantLanguages:f,applicantPrevEmployment:p,applicantPrevDuties:S,applicantPrevDismissalReason:_,applicantMotivationLetter:I,oocUcpName:F,oocForumName:P,oocDiscord:k,oocTimezone:D,oocMedicalExperience:R,oocAdminRecordLink:$,oocStatsLink:O,charBackground:E,genderMale:y,genderFemale:w,genderOther:x,locationPHMC:v,locationPBC:A,citizenUS:C,citizenPermanent:M,citizenNone:B,eduHighSchool:j,eduCertificate:G,eduDiploma:z,eduAssociate:V,eduBachelor:ue,eduMaster:ve,eduDoctorate:de,positionDetailsData:Q}=t,ee=Q||{};let ne="Position (Please Select)",pe="https://phmc.gta.world/viewforum.php?f=17";if(e&&Object.keys(ee).length>0){const Ke=e;ee[Ke]?(ne=ee[Ke].displayName||Ke,pe=ee[Ke].url||pe):(ne=Ke,console.warn(`Nursing Position "${Ke}" not found in nursePositionDetailsData. Using default URL.`))}else e&&(ne=e,console.warn(`nursePositionDetailsData is empty or not provided. Using default URL for "${e}".`));let ge="";e==="Registered Nurse"||e==="Nurse Practitioner"?ge=`[b][color=#FF0000]1.6[/color]  Desired Employment Location:[/b] [i](add a c, where applicable like so cb[color=#FF0000][u][b]c[/b][/u][/color]) [/i]
[list=none][cb${v?"c":""}] Pillbox Hill Medical Center (City of Los Santos)
[cb${A?"c":""}] PHMC Paleto Bay Clinic (Paleto Bay)
[/list]
[b][color=#FF0000]1.7[/color] Have you been diagnosed with a medical condition, allergies, or prescribed any medication:[/b] [i]${l||"ANSWER"}[/i]
[b][color=#FF0000]1.8[/color]  Citizenship:[/b] [i](add a c, where applicable like so cb[color=#FF0000][u][b]c[/b][/u][/color]) [/i]
[list=none][cb${C?"c":""}] United States Citizen
[cb${M?"c":""}] Permanent resident alien status and applied for U.S. Citizenship 
[cb${B?"c":""}] None of the above
[br][/br][/list]`:ge=`[b][color=#FF0000]1.6[/color] Have you been diagnosed with a medical condition, allergies, or prescribed any medication:[/b] [i]${l||"ANSWER"}[/i]
[b][color=#FF0000]1.7[/color]  Citizenship:[/b] [i](add a c, where applicable like so cb[color=#FF0000][u][b]c[/b][/u][/color]) [/i]
[list=none][cb${C?"c":""}] United States Citizen
[cb${M?"c":""}] Permanent resident alien status and applied for U.S. Citizenship 
[cb${B?"c":""}] None of the above
[br][/br][/list]`;const Ae=Ke=>Ke?"c":"";return`[imageleft]https://i.ibb.co/nMgfpMcv/phmc-curve.png[/imageleft] [b][size=110]Pillbox Hill Medical Center[/size][/b] 
Career Center [center][/center]
[center]Applying as:[/center]
[center][size=150][b]${ne}[/b][/size][/center]
[divboxcolor=black][url=${pe}][color=#FF0000]>[/color] [color=#FFFFFF]Back to the job posting[/color][/url][/divboxcolor]
[br][/br]
[divbox=na][list=none][b][size=110][color=#FF0000]1[/color].  Personal Information[/size][/b][/list]
[hr][/hr]
[list=none][b][color=#FF0000]1.1[/color]  Title & Full Name:[/b] [i]${n||"ANSWER"}[/i]
[b][color=#FF0000]1.2[/color]  Gender:[/b] [i](add a c, where applicable like so cb[color=#FF0000][u][b]c[/b][/u][/color]) [/i]
[list=none][cb${y?"c":""}] Male
[cb${w?"c":""}] Female
[cb${x?"c":""}] Other: ${x&&r?r:""}
[/list]
[b][color=#FF0000]1.3[/color] Date & Place of Birth:[/b] [i]${s||"DD/MMM/YYYY in CITY"}[/i]
[b][color=#FF0000]1.4[/color]  Address:[/b] [i]${o||"ANSWER"}[/i]
[b][color=#FF0000]1.5[/color]  Contact Details:[/b] [i]${a||"ANSWER"}[/i]
${ge}
[/list][/divbox]
[br][/br]
[divbox=na][list=none][b][size=110][color=#FF0000]2[/color].  Educational Background[/size][/b][/list]
[hr][/hr]
[list=none][b][color=#FF0000]2.1[/color] Highest Level of Education:[/b] [i](add a c, where applicable like so cb[color=#FF0000][u][b]c[/b][/u][/color]) [/i]
[list=none]
[cb${Ae(j)}] High School Diploma
[cb${Ae(G)}] Certificate (Sub-bachelor or vocational)
[cb${Ae(z)}] Diploma (Sub-bachelor or vocational)
[cb${Ae(V)}] Associate Degree
[cb${Ae(ue)}] Bachelor's Degree
[cb${Ae(ve)}] Master's Degree
[cb${Ae(de)}] Doctorate
[/list]
[b][color=#FF0000]2.2[/color] School of Attendance:[/b] 
[list=none][color=#FF0000][b]2.2.1[/color] School Name:[/b]  [i]${d||"ANSWER"}[/i]
[color=#FF0000][b]2.2.2[/color] Enrollment Term:[/b]  [i]${u||"DD/MMM/YYYY to DD/MMM/YYYY"}[/i]
[color=#FF0000][b]2.2.3[/color] Major Course of Study:[/b] [i]${g||"ANSWER"}[/i]
[/list]
[b][color=#FF0000]2.3[/color] Additional Languages:[/b] [i]${f||"ANSWER"}[/i][/list]
[br][/br][/divbox]
[divbox=na][list=none][b][size=110][color=#FF0000]3[/color].  Employment History[/size][/b][/list]
[hr][/hr]
[list=none][b][color=#FF0000]3.1[/color] Previous Employment:[/b] [i]${p||"ROLE at COMPANY between DD/MMM/YYYY to DD/MMM/YYYY"}[/i]
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
[divboxcolor=black][center][url=https://phmc.gta.world/viewforum.php?f=17][color=#FF0000]>[/color] [color=#FFFFFF]Nursing Department[/url] |[/color]  [url=https://phmc.gta.world/viewtopic.php?t=14][color=#FF0000]>[/color] [color=#FFFFFF]Employment Information[/url] |[/color] [url=https://phmc.gta.world/viewforum.php?f=111][color=#FF0000]>[/color]  [color=#FFFFFF]Visitor Guidelines[/color][/url][/center][/divboxcolor]`},wN=t=>{const{recruitmentPosition:e,applicantTitleAndFullName:n,applicantGenderOtherText:r,applicantDOBAndPlace:s,applicantAddress:o,applicantContactDetails:a,applicantMedicalConditions:l,citizenUS:d,citizenPermanent:u,citizenNone:g,genderMale:f,genderFemale:p,genderOther:S,eduHighSchool:_,eduCertificate:I,eduDiploma:F,eduAssociate:P,eduBachelor:k,eduMaster:D,eduDoctorate:R,applicantSchoolName:$,applicantEnrollmentTerm:O,applicantMajor:E,applicantLanguages:y,applicantPrevEmployment:w,applicantPrevDuties:x,applicantPrevDismissalReason:v,applicantMotivationLetter:A,oocUcpName:C,oocForumName:M,oocDiscord:B,oocTimezone:j,oocMedicalExperience:G,oocAdminRecordLink:z,oocStatsLink:V,charBackground:ue,positionDetailsData:ve}=t,de=ve||{};let Q="Position (Please Select)",ee="https://phmc.gta.world/viewforum.php?f=262";if(e&&Object.keys(de).length>0){const ge=e;de[ge]?(Q=de[ge].displayName||ge,ee=de[ge].url||ee):(Q=ge,console.warn(`Coroner Position "${ge}" not found in coronerPositionDetailsData. Using default URL and position key as display name.`))}else e&&(Q=e,console.warn(`coronerPositionDetailsData is empty or not provided. Using default URL for "${e}".`));const ne=ge=>ge?"c":"";return`[imageleft]https://i.ibb.co/nMgfpMcv/phmc-curve.png[/imageleft] [b][size=110]Pillbox Hill Medical Center[/size][/b] 
Career Center [center][/center]
[center]Applying as:[/center]
[center][size=150][b]${Q}[/b][/size][/center]
[divboxcolor=black][url=${ee}][color=#FF0000]>[/color] [color=#FFFFFF]Back to the job posting[/color][/url][/divboxcolor]
[br][/br]
[divbox=na][list=none][b][size=110][color=#FF0000]1[/color].  Personal Information[/size][/b][/list]
[hr][/hr]
[list=none][b][color=#FF0000]1.1[/color]  Title & Full Name:[/b] [i]${n||"ANSWER"}[/i]
[b][color=#FF0000]1.2[/color]  Gender:[/b] [i](add a c, where applicable like so cb[color=#FF0000][u][b]c[/b][/u][/color]) [/i]
[list=none][cb${ne(f)}] Male
[cb${ne(p)}] Female
[cb${ne(S)}] Other: ${S&&r?r:""}
[/list]
[b][color=#FF0000]1.3[/color] Date & Place of Birth:[/b] [i]${s||"DD/MMM/YYYY in CITY"}[/i]
[b][color=#FF0000]1.4[/color]  Address:[/b] [i]${o||"ANSWER"}[/i]
[b][color=#FF0000]1.5[/color]  Contact Details:[/b] [i]${a||"ANSWER"}[/i]
[b][color=#FF0000]1.6[/color] Do you have a diagnosed medical condition?:[/b] [i]${l||"ANSWER"}[/i]
[b][color=#FF0000]1.7[/color]  Citizenship:[/b] [i](add a c, where applicable like so cb[color=#FF0000][u][b]c[/b][/u][/color]) [/i]
[list=none][cb${ne(d)}] United States Citizen
[cb${ne(u)}] Permanent resident alien status and applied for U.S. Citizenship 
[cb${ne(g)}] None of the above
[br][/br][/list][/list][/divbox]
[br][/br]
[divbox=na][list=none][b][size=110][color=#FF0000]2[/color].  Educational Background[/size][/b][/list]
[hr][/hr]
[list=none][b][color=#FF0000]2.1[/color] Highest Level of Education:[/b] [i](add a c, where applicable like so cb[color=#FF0000][u][b]c[/b][/u][/color]) [/i]
[list=none]
[cb${ne(_)}] High School Diploma
[cb${ne(I)}] Certificate (Sub-bachelor or vocational)
[cb${ne(F)}] Diploma (Sub-bachelor or vocational)
[cb${ne(P)}] Associate Degree
[cb${ne(k)}] Bachelor's Degree
[cb${ne(D)}] Master's Degree
[cb${ne(R)}] Doctorate
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
[b][color=#FF0000]3.2[/color] Duties:[/b] [i]${x||"ANSWER"}[/i]
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
[b][color=#FF0000]5.5[/color] Do you have any real life medical experience or have you roleplayed in medical factions in the past?:[/b] [i]${G||"ANSWER"}[/i]
[b][color=#FF0000]5.6[/color] [u]Unedited[/u] Screenshot of your Admin Record with the current date & time displayed:[/b]
[list=none][altspoiler=Admin Record][img]${z||"LINK"}[/img][/altspoiler][/list]
[b][color=#FF0000]5.7[/color] Provide a screenshot of your character's statistics (/stats) which you're applying with:[/b] 
[list=none][altspoiler=Stats][img]${V||"LINK"}[/img][/altspoiler][/list]
[b][color=#FF0000]5.8[/color] Provide your character's background story:[/b]
[quote][i]${ue||"ANSWER HERE"}[/i][/quote][/list][/divbox]
[divboxcolor=black][center][url=https://phmc.gta.world/viewforum.php?f=262][color=#FF0000]>[/color] [color=#FFFFFF]Department of Forensic Medicine & Pathology[/url]  |[/color]  [url=https://phmc.gta.world/viewtopic.php?t=14][color=#FF0000]>[/color] [color=#FFFFFF]Employment Information[/url] |[/color] [url=https://phmc.gta.world/viewforum.php?f=111][color=#FF0000]>[/color]  [color=#FFFFFF]Visitor Guidelines[/color][/url][/center][/divboxcolor]`},EN=t=>{const{recruitmentPosition:e,applicantTitleAndFullName:n,applicantGenderOtherText:r,applicantDOBAndPlace:s,applicantAddress:o,applicantContactDetails:a,applicantMedicalConditions:l,applicantSchoolName:d,applicantEnrollmentTerm:u,applicantMajor:g,applicantLanguages:f,applicantPrevEmployment:p,applicantPrevDuties:S,applicantPrevDismissalReason:_,applicantMotivationLetter:I,oocUcpName:F,oocForumName:P,oocDiscord:k,oocTimezone:D,oocMedicalExperience:R,oocAdminRecordLink:$,oocStatsLink:O,charBackground:E,genderMale:y,genderFemale:w,genderOther:x,citizenUS:v,citizenPermanent:A,citizenNone:C,eduHighSchool:M,eduCertificate:B,eduDiploma:j,eduAssociate:G,eduBachelor:z,eduMaster:V,eduDoctorate:ue,selectOptions:ve,emsLicenseLink:de,emsPartTimeReason:Q,oocOtherFactionDfpLfm:ee}=t,ne=ve?.emsPositionDetailsData||{};console.log("DEBUG: positionDetailsMap in generateEMS.js:",ne);let pe="Position (Please Select)",ge="https://phmc.gta.world/viewforum.php?f=168";if(e&&Object.keys(ne).length>0){const xe=e.toUpperCase();ne[xe]?(console.log(`positionDetailsMap[${xe}]`,ne[xe]),pe=ne[xe].displayName||xe,ge=ne[xe].url||ge):(pe=xe,console.warn(`EMS Position "${xe}" not found in positionDetailsMap. Using default URL.`))}else e&&(pe=e,console.warn(`positionDetailsMap is empty or not provided. Using default URL for "${e}".`));const be=xe=>xe?"c":"";let Ae="";const Ge=`[divbox=na][list=none][b][size=110][color=#FF0000]3[/color].  Employment History[/size][/b][/list]
[hr][/hr]
[list=none][b][color=#FF0000]3.1[/color] Previous Employment:[/b] [i]${p||"ROLE at COMPANY between DD/MMM/YYYY to DD/MMM/YYYY"}[/i]
[b][color=#FF0000]3.2[/color] Duties:[/b] [i]${S||"ANSWER"}[/i]
[b][color=#FF0000]3.3[/color] Reason for Dismissal:[/b] [i]${_||"ANSWER"}[/i][/list]
[br][/br][/divbox]
[divbox=na][list=none][b][size=110][color=#FF0000]4[/color].  Motivational Letter[/size][/b][/list]
[hr][/hr]
[list=none][b][color=#FF0000]4.1[/color] Submit your motivational letter, describing why you wish to join us, why we should choose you rather than someone else, and why the qualities required from this job correspond to you :[/b] i[/i]
[quote][i]${I||"ANSWER HERE"}[/i][/quote][/list]
[br][/br][/divbox]`;if(e==="Paramedic")Ae=Ge+`[divbox=na][list=none][b][size=110][color=#FF0000]5[/color].  (( Out of Character information ))[/size][/b][/list]
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
[quote][i]${E||"ANSWER HERE"}[/i][/quote][/list][/divbox]`;else if(e==="EMT"){const xe=`[b][color=#FF0000]5.1[/color] User Control Panel (UCP) Username:[/b] [i]${F||"ANSWER"}[/i]
[b][color=#FF0000]5.2[/color] [u]Unedited[/u] Screenshot of your Admin Record:[/b]
[list=none][altspoiler=Admin Record][img]${$||"LINK"}[/img][/altspoiler][/list]
[b][color=#FF0000]5.3[/color] GTA:W Forum Account Name:[/b] [i]${P||"ANSWER"}[/i]
[b][color=#FF0000]5.4[/color] Discord Name:[/b] [i]${k||"ANSWER"}[/i]
[b][color=#FF0000]5.5[/color] Timezone:[/b] [i]${D||"ANSWER"}[/i]
[b][color=#FF0000]5.6[/color] Do you have any real life medical experience or have you roleplayed in medical factions in the past?:[/b] [i]${R||"ANSWER"}[/i]
[b][color=#FF0000]5.7[/color] Provide a screenshot of your character's statistics (/stats) which you're applying with:[/b] 
[list=none][altspoiler=Stats][img]${O||"LINK"}[/img][/altspoiler][/list]
[b][color=#FF0000]5.8[/color] Provide your character's background story:[/b]
[quote][i]${E||"ANSWER HERE"}[/i][/quote]`;Ae=Ge+`[divbox=na][list=none][b][size=110][color=#FF0000]5[/color].  (( Out of Character information ))[/size][/b][/list]
[hr][/hr]
[list=none]${xe}[/list][/divbox]`}else if(e==="EMT Trainee")Ae=`[divbox=na][list=none][b][size=110][color=#FF0000]4[/color].  (( Out of Character information ))[/size][/b][/list]
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
[b][color=#FF0000]4.8[/color] If you are a part of another official faction, please post a link to your DFP request from both [b]Pillbox Hill Medical Center[/b] [u]and[/u] your current faction. If utilizing the same character, permissions from LFM must be acquired and provided as well:[/b] [i]${ee||"ANSWER"}[/i]
[b][color=#FF0000]4.9[/color] Provide your character's background story:[/b]
[quote][i]${E||"ANSWER HERE"}[/i][/quote][/list][/divbox]`;else{const xe=`[divbox=na][list=none][b][size=110][color=#FF0000]3[/color].  Licensing & Request Information[/size][/b][/list]
[hr][/hr]
[list=none][b][color=#FF0000]3.1[/color] Provide a copy of your Emergency Medical Technician license (( /licenses )):[/b] [i]${de||"ANSWER/LINK"}[/i]
[b][color=#FF0000]3.2[/color][/color] Please write a short paragraph about why you believe you should be offered a slot with our part-time program:
[quote][i]${Q||"ANSWER HERE"}[/i][/quote][/list]
[br][/br][/divbox]`,Ze=`[divbox=na][list=none][b][size=110][color=#FF0000]4[/color].  (( Out of Character information ))[/size][/b][/list]
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
[b][color=#FF0000]4.8[/color] If you are a part of another official faction, please post a link to your DFP request from both [b]Pillbox Hill Medical Center[/b] [u]and[/u] your current faction. If utilizing the same character, permissions from LFM must be acquired and provided as well:[/b] [i]${ee||"ANSWER"}[/i]
[b][color=#FF0000]4.9[/color] Provide your character's background story:[/b]
[quote][i]${E||"ANSWER HERE"}[/i][/quote][/list][/divbox]`;Ae=xe+Ze}return`[imageleft]https://i.ibb.co/nMgfpMcv/phmc-curve.png[/imageleft] [b][size=110]Pillbox Hill Medical Center[/size][/b] 
Career Center [center][/center]
[center]Applying as:[/center]
[center][size=150][b]${pe}[/b][/size][/center]
[divboxcolor=black][url=${ge}][color=#FF0000]>[/color] [color=#FFFFFF]Back to the job posting[/color][/url][/divboxcolor]
[br][/br]
[divbox=na][list=none][b][size=110][color=#FF0000]1[/color].  Personal Information[/size][/b][/list]
[hr][/hr]
[list=none][b][color=#FF0000]1.1[/color]  Title & Full Name:[/b] [i]${n||"ANSWER"}[/i]
[b][color=#FF0000]1.2[/color]  Gender:[/b] [i](add a c, where applicable like so cb[color=#FF0000][u][b]c[/b][/u][/color]) [/i]
[list=none][cb${y?"c":""}] Male
[cb${w?"c":""}] Female
[cb${x?"c":""}] Other: ${x&&r?r:""}
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
[cb${be(M)}] High School Diploma
[cb${be(B)}] Certificate (Sub-bachelor or vocational)
[cb${be(j)}] Diploma (Sub-bachelor or vocational)
[cb${be(G)}] Associate Degree
[cb${be(z)}] Bachelor's Degree
[cb${be(V)}] Master's Degree
[cb${be(ue)}] Doctorate
[/list]
[b][color=#FF0000]2.2[/color] School of Attendance:[/b] 
[list=none][color=#FF0000][b]2.2.1[/color] School Name:[/b]  [i]${d||"ANSWER"}[/i]
[color=#FF0000][b]2.2.2[/color] Enrollment Term:[/b]  [i]${u||"DD/MMM/YYYY to DD/MMM/YYYY"}[/i]
[color=#FF0000][b]2.2.3[/color] Major Course of Study:[/b] [i]${g||"ANSWER"}[/i]
[/list]
[b][color=#FF0000]2.3[/color] Additional Languages:[/b] [i]${f||"ANSWER"}[/i][/list]
[br][/br][/divbox]
${Ae}
[divboxcolor=black][center][url=https://phmc.gta.world/viewforum.php?f=168][color=#FF0000]>[/color] [color=#FFFFFF]Emergency Medical Services[/url] |[/color]  [url=https://phmc.gta.world/viewtopic.php?t=14][color=#FF0000]>[/color] [color=#FFFFFF]Employment Information[/url] |[/color] [url=https://phmc.gta.world/viewforum.php?f=111][color=#FF0000]>[/color]  [color=#FFFFFF]Visitor Guidelines[/color][/url][/center][/divboxcolor]`},NN="/forms/assets/folder-Bytub8vY.png",xN="/forms/assets/autopsy-cxd7SxPi.png",AN="/forms/assets/death-certificate-CzAnqITX.png",IN="/forms/assets/graveyard-ta_-99m3.png",TN="/forms/assets/conference-BsP_lkN7.png",aa="/forms/assets/email-DiWyWy-0.png",La="/forms/assets/Civilian-RpOgk0lt.png",sr="/forms/assets/phmcpaletobaylogo-lvwgepZe.png",RN="/forms/assets/surgeon-D4DT8NuI.png",vl="/forms/assets/nurse-CoI-SZVM.png",kN="/forms/assets/emergency-CvZTa-Sv.png",FN="/forms/assets/empathy-C8KzlbJi.png",PN="/forms/assets/paperwork-8x2pto45.png",ph="/forms/assets/psychology-vfcGOYrG.png",jr="/forms/assets/application-D9yhp4QZ.png";var fh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Id;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,y){function w(){}w.prototype=y.prototype,E.F=y.prototype,E.prototype=new w,E.prototype.constructor=E,E.D=function(x,v,A){for(var C=Array(arguments.length-2),M=2;M<arguments.length;M++)C[M-2]=arguments[M];return y.prototype[v].apply(x,C)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,y,w){w||(w=0);const x=Array(16);if(typeof y=="string")for(var v=0;v<16;++v)x[v]=y.charCodeAt(w++)|y.charCodeAt(w++)<<8|y.charCodeAt(w++)<<16|y.charCodeAt(w++)<<24;else for(v=0;v<16;++v)x[v]=y[w++]|y[w++]<<8|y[w++]<<16|y[w++]<<24;y=E.g[0],w=E.g[1],v=E.g[2];let A=E.g[3],C;C=y+(A^w&(v^A))+x[0]+3614090360&4294967295,y=w+(C<<7&4294967295|C>>>25),C=A+(v^y&(w^v))+x[1]+3905402710&4294967295,A=y+(C<<12&4294967295|C>>>20),C=v+(w^A&(y^w))+x[2]+606105819&4294967295,v=A+(C<<17&4294967295|C>>>15),C=w+(y^v&(A^y))+x[3]+3250441966&4294967295,w=v+(C<<22&4294967295|C>>>10),C=y+(A^w&(v^A))+x[4]+4118548399&4294967295,y=w+(C<<7&4294967295|C>>>25),C=A+(v^y&(w^v))+x[5]+1200080426&4294967295,A=y+(C<<12&4294967295|C>>>20),C=v+(w^A&(y^w))+x[6]+2821735955&4294967295,v=A+(C<<17&4294967295|C>>>15),C=w+(y^v&(A^y))+x[7]+4249261313&4294967295,w=v+(C<<22&4294967295|C>>>10),C=y+(A^w&(v^A))+x[8]+1770035416&4294967295,y=w+(C<<7&4294967295|C>>>25),C=A+(v^y&(w^v))+x[9]+2336552879&4294967295,A=y+(C<<12&4294967295|C>>>20),C=v+(w^A&(y^w))+x[10]+4294925233&4294967295,v=A+(C<<17&4294967295|C>>>15),C=w+(y^v&(A^y))+x[11]+2304563134&4294967295,w=v+(C<<22&4294967295|C>>>10),C=y+(A^w&(v^A))+x[12]+1804603682&4294967295,y=w+(C<<7&4294967295|C>>>25),C=A+(v^y&(w^v))+x[13]+4254626195&4294967295,A=y+(C<<12&4294967295|C>>>20),C=v+(w^A&(y^w))+x[14]+2792965006&4294967295,v=A+(C<<17&4294967295|C>>>15),C=w+(y^v&(A^y))+x[15]+1236535329&4294967295,w=v+(C<<22&4294967295|C>>>10),C=y+(v^A&(w^v))+x[1]+4129170786&4294967295,y=w+(C<<5&4294967295|C>>>27),C=A+(w^v&(y^w))+x[6]+3225465664&4294967295,A=y+(C<<9&4294967295|C>>>23),C=v+(y^w&(A^y))+x[11]+643717713&4294967295,v=A+(C<<14&4294967295|C>>>18),C=w+(A^y&(v^A))+x[0]+3921069994&4294967295,w=v+(C<<20&4294967295|C>>>12),C=y+(v^A&(w^v))+x[5]+3593408605&4294967295,y=w+(C<<5&4294967295|C>>>27),C=A+(w^v&(y^w))+x[10]+38016083&4294967295,A=y+(C<<9&4294967295|C>>>23),C=v+(y^w&(A^y))+x[15]+3634488961&4294967295,v=A+(C<<14&4294967295|C>>>18),C=w+(A^y&(v^A))+x[4]+3889429448&4294967295,w=v+(C<<20&4294967295|C>>>12),C=y+(v^A&(w^v))+x[9]+568446438&4294967295,y=w+(C<<5&4294967295|C>>>27),C=A+(w^v&(y^w))+x[14]+3275163606&4294967295,A=y+(C<<9&4294967295|C>>>23),C=v+(y^w&(A^y))+x[3]+4107603335&4294967295,v=A+(C<<14&4294967295|C>>>18),C=w+(A^y&(v^A))+x[8]+1163531501&4294967295,w=v+(C<<20&4294967295|C>>>12),C=y+(v^A&(w^v))+x[13]+2850285829&4294967295,y=w+(C<<5&4294967295|C>>>27),C=A+(w^v&(y^w))+x[2]+4243563512&4294967295,A=y+(C<<9&4294967295|C>>>23),C=v+(y^w&(A^y))+x[7]+1735328473&4294967295,v=A+(C<<14&4294967295|C>>>18),C=w+(A^y&(v^A))+x[12]+2368359562&4294967295,w=v+(C<<20&4294967295|C>>>12),C=y+(w^v^A)+x[5]+4294588738&4294967295,y=w+(C<<4&4294967295|C>>>28),C=A+(y^w^v)+x[8]+2272392833&4294967295,A=y+(C<<11&4294967295|C>>>21),C=v+(A^y^w)+x[11]+1839030562&4294967295,v=A+(C<<16&4294967295|C>>>16),C=w+(v^A^y)+x[14]+4259657740&4294967295,w=v+(C<<23&4294967295|C>>>9),C=y+(w^v^A)+x[1]+2763975236&4294967295,y=w+(C<<4&4294967295|C>>>28),C=A+(y^w^v)+x[4]+1272893353&4294967295,A=y+(C<<11&4294967295|C>>>21),C=v+(A^y^w)+x[7]+4139469664&4294967295,v=A+(C<<16&4294967295|C>>>16),C=w+(v^A^y)+x[10]+3200236656&4294967295,w=v+(C<<23&4294967295|C>>>9),C=y+(w^v^A)+x[13]+681279174&4294967295,y=w+(C<<4&4294967295|C>>>28),C=A+(y^w^v)+x[0]+3936430074&4294967295,A=y+(C<<11&4294967295|C>>>21),C=v+(A^y^w)+x[3]+3572445317&4294967295,v=A+(C<<16&4294967295|C>>>16),C=w+(v^A^y)+x[6]+76029189&4294967295,w=v+(C<<23&4294967295|C>>>9),C=y+(w^v^A)+x[9]+3654602809&4294967295,y=w+(C<<4&4294967295|C>>>28),C=A+(y^w^v)+x[12]+3873151461&4294967295,A=y+(C<<11&4294967295|C>>>21),C=v+(A^y^w)+x[15]+530742520&4294967295,v=A+(C<<16&4294967295|C>>>16),C=w+(v^A^y)+x[2]+3299628645&4294967295,w=v+(C<<23&4294967295|C>>>9),C=y+(v^(w|~A))+x[0]+4096336452&4294967295,y=w+(C<<6&4294967295|C>>>26),C=A+(w^(y|~v))+x[7]+1126891415&4294967295,A=y+(C<<10&4294967295|C>>>22),C=v+(y^(A|~w))+x[14]+2878612391&4294967295,v=A+(C<<15&4294967295|C>>>17),C=w+(A^(v|~y))+x[5]+4237533241&4294967295,w=v+(C<<21&4294967295|C>>>11),C=y+(v^(w|~A))+x[12]+1700485571&4294967295,y=w+(C<<6&4294967295|C>>>26),C=A+(w^(y|~v))+x[3]+2399980690&4294967295,A=y+(C<<10&4294967295|C>>>22),C=v+(y^(A|~w))+x[10]+4293915773&4294967295,v=A+(C<<15&4294967295|C>>>17),C=w+(A^(v|~y))+x[1]+2240044497&4294967295,w=v+(C<<21&4294967295|C>>>11),C=y+(v^(w|~A))+x[8]+1873313359&4294967295,y=w+(C<<6&4294967295|C>>>26),C=A+(w^(y|~v))+x[15]+4264355552&4294967295,A=y+(C<<10&4294967295|C>>>22),C=v+(y^(A|~w))+x[6]+2734768916&4294967295,v=A+(C<<15&4294967295|C>>>17),C=w+(A^(v|~y))+x[13]+1309151649&4294967295,w=v+(C<<21&4294967295|C>>>11),C=y+(v^(w|~A))+x[4]+4149444226&4294967295,y=w+(C<<6&4294967295|C>>>26),C=A+(w^(y|~v))+x[11]+3174756917&4294967295,A=y+(C<<10&4294967295|C>>>22),C=v+(y^(A|~w))+x[2]+718787259&4294967295,v=A+(C<<15&4294967295|C>>>17),C=w+(A^(v|~y))+x[9]+3951481745&4294967295,E.g[0]=E.g[0]+y&4294967295,E.g[1]=E.g[1]+(v+(C<<21&4294967295|C>>>11))&4294967295,E.g[2]=E.g[2]+v&4294967295,E.g[3]=E.g[3]+A&4294967295}r.prototype.v=function(E,y){y===void 0&&(y=E.length);const w=y-this.blockSize,x=this.C;let v=this.h,A=0;for(;A<y;){if(v==0)for(;A<=w;)s(this,E,A),A+=this.blockSize;if(typeof E=="string"){for(;A<y;)if(x[v++]=E.charCodeAt(A++),v==this.blockSize){s(this,x),v=0;break}}else for(;A<y;)if(x[v++]=E[A++],v==this.blockSize){s(this,x),v=0;break}}this.h=v,this.o+=y},r.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var y=1;y<E.length-8;++y)E[y]=0;y=this.o*8;for(var w=E.length-8;w<E.length;++w)E[w]=y&255,y/=256;for(this.v(E),E=Array(16),y=0,w=0;w<4;++w)for(let x=0;x<32;x+=8)E[y++]=this.g[w]>>>x&255;return E};function o(E,y){var w=l;return Object.prototype.hasOwnProperty.call(w,E)?w[E]:w[E]=y(E)}function a(E,y){this.h=y;const w=[];let x=!0;for(let v=E.length-1;v>=0;v--){const A=E[v]|0;x&&A==y||(w[v]=A,x=!1)}this.g=w}var l={};function d(E){return-128<=E&&E<128?o(E,function(y){return new a([y|0],y<0?-1:0)}):new a([E|0],E<0?-1:0)}function u(E){if(isNaN(E)||!isFinite(E))return f;if(E<0)return F(u(-E));const y=[];let w=1;for(let x=0;E>=w;x++)y[x]=E/w|0,w*=4294967296;return new a(y,0)}function g(E,y){if(E.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(E.charAt(0)=="-")return F(g(E.substring(1),y));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const w=u(Math.pow(y,8));let x=f;for(let A=0;A<E.length;A+=8){var v=Math.min(8,E.length-A);const C=parseInt(E.substring(A,A+v),y);v<8?(v=u(Math.pow(y,v)),x=x.j(v).add(u(C))):(x=x.j(w),x=x.add(u(C)))}return x}var f=d(0),p=d(1),S=d(16777216);t=a.prototype,t.m=function(){if(I(this))return-F(this).m();let E=0,y=1;for(let w=0;w<this.g.length;w++){const x=this.i(w);E+=(x>=0?x:4294967296+x)*y,y*=4294967296}return E},t.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(_(this))return"0";if(I(this))return"-"+F(this).toString(E);const y=u(Math.pow(E,6));var w=this;let x="";for(;;){const v=R(w,y).g;w=P(w,v.j(y));let A=((w.g.length>0?w.g[0]:w.h)>>>0).toString(E);if(w=v,_(w))return A+x;for(;A.length<6;)A="0"+A;x=A+x}},t.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function _(E){if(E.h!=0)return!1;for(let y=0;y<E.g.length;y++)if(E.g[y]!=0)return!1;return!0}function I(E){return E.h==-1}t.l=function(E){return E=P(this,E),I(E)?-1:_(E)?0:1};function F(E){const y=E.g.length,w=[];for(let x=0;x<y;x++)w[x]=~E.g[x];return new a(w,~E.h).add(p)}t.abs=function(){return I(this)?F(this):this},t.add=function(E){const y=Math.max(this.g.length,E.g.length),w=[];let x=0;for(let v=0;v<=y;v++){let A=x+(this.i(v)&65535)+(E.i(v)&65535),C=(A>>>16)+(this.i(v)>>>16)+(E.i(v)>>>16);x=C>>>16,A&=65535,C&=65535,w[v]=C<<16|A}return new a(w,w[w.length-1]&-2147483648?-1:0)};function P(E,y){return E.add(F(y))}t.j=function(E){if(_(this)||_(E))return f;if(I(this))return I(E)?F(this).j(F(E)):F(F(this).j(E));if(I(E))return F(this.j(F(E)));if(this.l(S)<0&&E.l(S)<0)return u(this.m()*E.m());const y=this.g.length+E.g.length,w=[];for(var x=0;x<2*y;x++)w[x]=0;for(x=0;x<this.g.length;x++)for(let v=0;v<E.g.length;v++){const A=this.i(x)>>>16,C=this.i(x)&65535,M=E.i(v)>>>16,B=E.i(v)&65535;w[2*x+2*v]+=C*B,k(w,2*x+2*v),w[2*x+2*v+1]+=A*B,k(w,2*x+2*v+1),w[2*x+2*v+1]+=C*M,k(w,2*x+2*v+1),w[2*x+2*v+2]+=A*M,k(w,2*x+2*v+2)}for(E=0;E<y;E++)w[E]=w[2*E+1]<<16|w[2*E];for(E=y;E<2*y;E++)w[E]=0;return new a(w,0)};function k(E,y){for(;(E[y]&65535)!=E[y];)E[y+1]+=E[y]>>>16,E[y]&=65535,y++}function D(E,y){this.g=E,this.h=y}function R(E,y){if(_(y))throw Error("division by zero");if(_(E))return new D(f,f);if(I(E))return y=R(F(E),y),new D(F(y.g),F(y.h));if(I(y))return y=R(E,F(y)),new D(F(y.g),y.h);if(E.g.length>30){if(I(E)||I(y))throw Error("slowDivide_ only works with positive integers.");for(var w=p,x=y;x.l(E)<=0;)w=$(w),x=$(x);var v=O(w,1),A=O(x,1);for(x=O(x,2),w=O(w,2);!_(x);){var C=A.add(x);C.l(E)<=0&&(v=v.add(w),A=C),x=O(x,1),w=O(w,1)}return y=P(E,v.j(y)),new D(v,y)}for(v=f;E.l(y)>=0;){for(w=Math.max(1,Math.floor(E.m()/y.m())),x=Math.ceil(Math.log(w)/Math.LN2),x=x<=48?1:Math.pow(2,x-48),A=u(w),C=A.j(y);I(C)||C.l(E)>0;)w-=x,A=u(w),C=A.j(y);_(A)&&(A=p),v=v.add(A),E=P(E,C)}return new D(v,E)}t.B=function(E){return R(this,E).h},t.and=function(E){const y=Math.max(this.g.length,E.g.length),w=[];for(let x=0;x<y;x++)w[x]=this.i(x)&E.i(x);return new a(w,this.h&E.h)},t.or=function(E){const y=Math.max(this.g.length,E.g.length),w=[];for(let x=0;x<y;x++)w[x]=this.i(x)|E.i(x);return new a(w,this.h|E.h)},t.xor=function(E){const y=Math.max(this.g.length,E.g.length),w=[];for(let x=0;x<y;x++)w[x]=this.i(x)^E.i(x);return new a(w,this.h^E.h)};function $(E){const y=E.g.length+1,w=[];for(let x=0;x<y;x++)w[x]=E.i(x)<<1|E.i(x-1)>>>31;return new a(w,E.h)}function O(E,y){const w=y>>5;y%=32;const x=E.g.length-w,v=[];for(let A=0;A<x;A++)v[A]=y>0?E.i(A+w)>>>y|E.i(A+w+1)<<32-y:E.i(A+w);return new a(v,E.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=u,a.fromString=g,Id=a}).apply(typeof fh<"u"?fh:typeof self<"u"?self:typeof window<"u"?window:{});var Qo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var t,e=Object.defineProperty;function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Qo=="object"&&Qo];for(var h=0;h<c.length;++h){var m=c[h];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function s(c,h){if(h)e:{var m=r;c=c.split(".");for(var N=0;N<c.length-1;N++){var L=c[N];if(!(L in m))break e;m=m[L]}c=c[c.length-1],N=m[c],h=h(N),h!=N&&h!=null&&e(m,c,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(c){return c||function(h){var m=[],N;for(N in h)Object.prototype.hasOwnProperty.call(h,N)&&m.push([N,h[N]]);return m}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(c){var h=typeof c;return h=="object"&&c!=null||h=="function"}function d(c,h,m){return c.call.apply(c.bind,arguments)}function u(c,h,m){return u=d,u.apply(null,arguments)}function g(c,h){var m=Array.prototype.slice.call(arguments,1);return function(){var N=m.slice();return N.push.apply(N,arguments),c.apply(this,N)}}function f(c,h){function m(){}m.prototype=h.prototype,c.Z=h.prototype,c.prototype=new m,c.prototype.constructor=c,c.Ob=function(N,L,H){for(var ae=Array(arguments.length-2),We=2;We<arguments.length;We++)ae[We-2]=arguments[We];return h.prototype[L].apply(N,ae)}}var p=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function S(c){const h=c.length;if(h>0){const m=Array(h);for(let N=0;N<h;N++)m[N]=c[N];return m}return[]}function _(c,h){for(let N=1;N<arguments.length;N++){const L=arguments[N];var m=typeof L;if(m=m!="object"?m:L?Array.isArray(L)?"array":m:"null",m=="array"||m=="object"&&typeof L.length=="number"){m=c.length||0;const H=L.length||0;c.length=m+H;for(let ae=0;ae<H;ae++)c[m+ae]=L[ae]}else c.push(L)}}class I{constructor(h,m){this.i=h,this.j=m,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function F(c){a.setTimeout(()=>{throw c},0)}function P(){var c=E;let h=null;return c.g&&(h=c.g,c.g=c.g.next,c.g||(c.h=null),h.next=null),h}class k{constructor(){this.h=this.g=null}add(h,m){const N=D.get();N.set(h,m),this.h?this.h.next=N:this.g=N,this.h=N}}var D=new I(()=>new R,c=>c.reset());class R{constructor(){this.next=this.g=this.h=null}set(h,m){this.h=h,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let $,O=!1,E=new k,y=()=>{const c=Promise.resolve(void 0);$=()=>{c.then(w)}};function w(){for(var c;c=P();){try{c.h.call(c.g)}catch(m){F(m)}var h=D;h.j(c),h.h<100&&(h.h++,c.next=h.g,h.g=c)}O=!1}function x(){this.u=this.u,this.C=this.C}x.prototype.u=!1,x.prototype.dispose=function(){this.u||(this.u=!0,this.N())},x.prototype[Symbol.dispose]=function(){this.dispose()},x.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function v(c,h){this.type=c,this.g=this.target=h,this.defaultPrevented=!1}v.prototype.h=function(){this.defaultPrevented=!0};var A=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var c=!1,h=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const m=()=>{};a.addEventListener("test",m,h),a.removeEventListener("test",m,h)}catch{}return c})();function C(c){return/^[\s\xa0]*$/.test(c)}function M(c,h){v.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,h)}f(M,v),M.prototype.init=function(c,h){const m=this.type=c.type,N=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=h,h=c.relatedTarget,h||(m=="mouseover"?h=c.fromElement:m=="mouseout"&&(h=c.toElement)),this.relatedTarget=h,N?(this.clientX=N.clientX!==void 0?N.clientX:N.pageX,this.clientY=N.clientY!==void 0?N.clientY:N.pageY,this.screenX=N.screenX||0,this.screenY=N.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&M.Z.h.call(this)},M.prototype.h=function(){M.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var B="closure_listenable_"+(Math.random()*1e6|0),j=0;function G(c,h,m,N,L){this.listener=c,this.proxy=null,this.src=h,this.type=m,this.capture=!!N,this.ha=L,this.key=++j,this.da=this.fa=!1}function z(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function V(c,h,m){for(const N in c)h.call(m,c[N],N,c)}function ue(c,h){for(const m in c)h.call(void 0,c[m],m,c)}function ve(c){const h={};for(const m in c)h[m]=c[m];return h}const de="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Q(c,h){let m,N;for(let L=1;L<arguments.length;L++){N=arguments[L];for(m in N)c[m]=N[m];for(let H=0;H<de.length;H++)m=de[H],Object.prototype.hasOwnProperty.call(N,m)&&(c[m]=N[m])}}function ee(c){this.src=c,this.g={},this.h=0}ee.prototype.add=function(c,h,m,N,L){const H=c.toString();c=this.g[H],c||(c=this.g[H]=[],this.h++);const ae=pe(c,h,N,L);return ae>-1?(h=c[ae],m||(h.fa=!1)):(h=new G(h,this.src,H,!!N,L),h.fa=m,c.push(h)),h};function ne(c,h){const m=h.type;if(m in c.g){var N=c.g[m],L=Array.prototype.indexOf.call(N,h,void 0),H;(H=L>=0)&&Array.prototype.splice.call(N,L,1),H&&(z(h),c.g[m].length==0&&(delete c.g[m],c.h--))}}function pe(c,h,m,N){for(let L=0;L<c.length;++L){const H=c[L];if(!H.da&&H.listener==h&&H.capture==!!m&&H.ha==N)return L}return-1}var ge="closure_lm_"+(Math.random()*1e6|0),be={};function Ae(c,h,m,N,L){if(Array.isArray(h)){for(let H=0;H<h.length;H++)Ae(c,h[H],m,N,L);return null}return m=Re(m),c&&c[B]?c.J(h,m,l(N)?!!N.capture:!1,L):Ge(c,h,m,!1,N,L)}function Ge(c,h,m,N,L,H){if(!h)throw Error("Invalid event type");const ae=l(L)?!!L.capture:!!L;let We=yt(c);if(We||(c[ge]=We=new ee(c)),m=We.add(h,m,N,ae,H),m.proxy)return m;if(N=Ke(),m.proxy=N,N.src=c,N.listener=m,c.addEventListener)A||(L=ae),L===void 0&&(L=!1),c.addEventListener(h.toString(),N,L);else if(c.attachEvent)c.attachEvent(we(h.toString()),N);else if(c.addListener&&c.removeListener)c.addListener(N);else throw Error("addEventListener and attachEvent are unavailable.");return m}function Ke(){function c(m){return h.call(c.src,c.listener,m)}const h=et;return c}function xe(c,h,m,N,L){if(Array.isArray(h))for(var H=0;H<h.length;H++)xe(c,h[H],m,N,L);else N=l(N)?!!N.capture:!!N,m=Re(m),c&&c[B]?(c=c.i,H=String(h).toString(),H in c.g&&(h=c.g[H],m=pe(h,m,N,L),m>-1&&(z(h[m]),Array.prototype.splice.call(h,m,1),h.length==0&&(delete c.g[H],c.h--)))):c&&(c=yt(c))&&(h=c.g[h.toString()],c=-1,h&&(c=pe(h,m,N,L)),(m=c>-1?h[c]:null)&&Ze(m))}function Ze(c){if(typeof c!="number"&&c&&!c.da){var h=c.src;if(h&&h[B])ne(h.i,c);else{var m=c.type,N=c.proxy;h.removeEventListener?h.removeEventListener(m,N,c.capture):h.detachEvent?h.detachEvent(we(m),N):h.addListener&&h.removeListener&&h.removeListener(N),(m=yt(h))?(ne(m,c),m.h==0&&(m.src=null,h[ge]=null)):z(c)}}}function we(c){return c in be?be[c]:be[c]="on"+c}function et(c,h){if(c.da)c=!0;else{h=new M(h,this);const m=c.listener,N=c.ha||c.src;c.fa&&Ze(c),c=m.call(N,h)}return c}function yt(c){return c=c[ge],c instanceof ee?c:null}var re="__closure_events_fn_"+(Math.random()*1e9>>>0);function Re(c){return typeof c=="function"?c:(c[re]||(c[re]=function(h){return c.handleEvent(h)}),c[re])}function le(){x.call(this),this.i=new ee(this),this.M=this,this.G=null}f(le,x),le.prototype[B]=!0,le.prototype.removeEventListener=function(c,h,m,N){xe(this,c,h,m,N)};function ke(c,h){var m,N=c.G;if(N)for(m=[];N;N=N.G)m.push(N);if(c=c.M,N=h.type||h,typeof h=="string")h=new v(h,c);else if(h instanceof v)h.target=h.target||c;else{var L=h;h=new v(N,c),Q(h,L)}L=!0;let H,ae;if(m)for(ae=m.length-1;ae>=0;ae--)H=h.g=m[ae],L=Ie(H,N,!0,h)&&L;if(H=h.g=c,L=Ie(H,N,!0,h)&&L,L=Ie(H,N,!1,h)&&L,m)for(ae=0;ae<m.length;ae++)H=h.g=m[ae],L=Ie(H,N,!1,h)&&L}le.prototype.N=function(){if(le.Z.N.call(this),this.i){var c=this.i;for(const h in c.g){const m=c.g[h];for(let N=0;N<m.length;N++)z(m[N]);delete c.g[h],c.h--}}this.G=null},le.prototype.J=function(c,h,m,N){return this.i.add(String(c),h,!1,m,N)},le.prototype.K=function(c,h,m,N){return this.i.add(String(c),h,!0,m,N)};function Ie(c,h,m,N){if(h=c.i.g[String(h)],!h)return!0;h=h.concat();let L=!0;for(let H=0;H<h.length;++H){const ae=h[H];if(ae&&!ae.da&&ae.capture==m){const We=ae.listener,Et=ae.ha||ae.src;ae.fa&&ne(c.i,ae),L=We.call(Et,N)!==!1&&L}}return L&&!N.defaultPrevented}function q(c,h){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=u(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:a.setTimeout(c,h||0)}function se(c){c.g=q(()=>{c.g=null,c.i&&(c.i=!1,se(c))},c.l);const h=c.h;c.h=null,c.m.apply(null,h)}class Y extends x{constructor(h,m){super(),this.m=h,this.l=m,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:se(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ie(c){x.call(this),this.h=c,this.g={}}f(ie,x);var te=[];function Te(c){V(c.g,function(h,m){this.g.hasOwnProperty(m)&&Ze(h)},c),c.g={}}ie.prototype.N=function(){ie.Z.N.call(this),Te(this)},ie.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var De=a.JSON.stringify,Rt=a.JSON.parse,Ue=class{stringify(c){return a.JSON.stringify(c,void 0)}parse(c){return a.JSON.parse(c,void 0)}};function J(){}function ze(){}var Be={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Oe(){v.call(this,"d")}f(Oe,v);function Ee(){v.call(this,"c")}f(Ee,v);var W={},Qe=null;function ut(){return Qe=Qe||new le}W.Ia="serverreachability";function tn(c){v.call(this,W.Ia,c)}f(tn,v);function Mt(c){const h=ut();ke(h,new tn(h))}W.STAT_EVENT="statevent";function Pt(c,h){v.call(this,W.STAT_EVENT,c),this.stat=h}f(Pt,v);function ct(c){const h=ut();ke(h,new Pt(h,c))}W.Ja="timingevent";function nn(c,h){v.call(this,W.Ja,c),this.size=h}f(nn,v);function kt(c,h){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){c()},h)}function En(){this.g=!0}En.prototype.ua=function(){this.g=!1};function Kt(c,h,m,N,L,H){c.info(function(){if(c.g)if(H){var ae="",We=H.split("&");for(let ht=0;ht<We.length;ht++){var Et=We[ht].split("=");if(Et.length>1){const Dt=Et[0];Et=Et[1];const kn=Dt.split("_");ae=kn.length>=2&&kn[1]=="type"?ae+(Dt+"="+Et+"&"):ae+(Dt+"=redacted&")}}}else ae=null;else ae=H;return"XMLHTTP REQ ("+N+") [attempt "+L+"]: "+h+`
`+m+`
`+ae})}function Nn(c,h,m,N,L,H,ae){c.info(function(){return"XMLHTTP RESP ("+N+") [ attempt "+L+"]: "+h+`
`+m+`
`+H+" "+ae})}function Gt(c,h,m,N){c.info(function(){return"XMLHTTP TEXT ("+h+"): "+Mn(c,m)+(N?" "+N:"")})}function Os(c,h){c.info(function(){return"TIMEOUT: "+h})}En.prototype.info=function(){};function Mn(c,h){if(!c.g)return h;if(!h)return null;try{const H=JSON.parse(h);if(H){for(c=0;c<H.length;c++)if(Array.isArray(H[c])){var m=H[c];if(!(m.length<2)){var N=m[1];if(Array.isArray(N)&&!(N.length<1)){var L=N[0];if(L!="noop"&&L!="stop"&&L!="close")for(let ae=1;ae<N.length;ae++)N[ae]=""}}}}return De(H)}catch{return h}}var Jn={NO_ERROR:0,TIMEOUT:8},ss={},hr;function xn(){}f(xn,J),xn.prototype.g=function(){return new XMLHttpRequest},hr=new xn;function An(c){return encodeURIComponent(String(c))}function mr(c){var h=1;c=c.split(":");const m=[];for(;h>0&&c.length;)m.push(c.shift()),h--;return c.length&&m.push(c.join(":")),m}function rn(c,h,m,N){this.j=c,this.i=h,this.l=m,this.S=N||1,this.V=new ie(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new kr}function kr(){this.i=null,this.g="",this.h=!1}var Wt={},pr={};function jn(c,h,m){c.M=1,c.A=Jt(fe(h)),c.u=m,c.R=!0,In(c,null)}function In(c,h){c.F=Date.now(),dn(c),c.B=fe(c.A);var m=c.B,N=c.S;Array.isArray(N)||(N=[String(N)]),ko(m.i,"t",N),c.C=0,m=c.j.L,c.h=new kr,c.g=zo(c.j,m?h:null,!c.u),c.P>0&&(c.O=new Y(u(c.Y,c,c.g),c.P)),h=c.V,m=c.g,N=c.ba;var L="readystatechange";Array.isArray(L)||(L&&(te[0]=L.toString()),L=te);for(let H=0;H<L.length;H++){const ae=Ae(m,L[H],N||h.handleEvent,!1,h.h||h);if(!ae)break;h.g[ae.key]=ae}h=c.J?ve(c.J):{},c.u?(c.v||(c.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,h)):(c.v="GET",c.g.ea(c.B,c.v,null,h)),Mt(),Kt(c.i,c.v,c.B,c.l,c.S,c.u)}rn.prototype.ba=function(c){c=c.target;const h=this.O;h&&Qn(c)==3?h.j():this.Y(c)},rn.prototype.Y=function(c){try{if(c==this.g)e:{const We=Qn(this.g),Et=this.g.ya(),ht=this.g.ca();if(!(We<3)&&(We!=3||this.g&&(this.h.h||this.g.la()||jo(this.g)))){this.K||We!=4||Et==7||(Et==8||ht<=0?Mt(3):Mt(2)),$e(this);var h=this.g.ca();this.X=h;var m=Xn(this);if(this.o=h==200,Nn(this.i,this.v,this.B,this.l,this.S,We,h),this.o){if(this.U&&!this.L){t:{if(this.g){var N,L=this.g;if((N=L.g?L.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C(N)){var H=N;break t}}H=null}if(c=H)Gt(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Tn(this,c);else{this.o=!1,this.m=3,ct(12),bn(this),$t(this);break e}}if(this.R){c=!0;let Dt;for(;!this.K&&this.C<m.length;)if(Dt=Le(this,m),Dt==pr){We==4&&(this.m=4,ct(14),c=!1),Gt(this.i,this.l,null,"[Incomplete Response]");break}else if(Dt==Wt){this.m=4,ct(15),Gt(this.i,this.l,m,"[Invalid Chunk]"),c=!1;break}else Gt(this.i,this.l,Dt,null),Tn(this,Dt);if(Fr(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),We!=4||m.length!=0||this.h.h||(this.m=1,ct(16),c=!1),this.o=this.o&&c,!c)Gt(this.i,this.l,m,"[Invalid Chunked Response]"),bn(this),$t(this);else if(m.length>0&&!this.W){this.W=!0;var ae=this.j;ae.g==this&&ae.aa&&!ae.P&&(ae.j.info("Great, no buffering proxy detected. Bytes received: "+m.length),xi(ae),ae.P=!0,ct(11))}}else Gt(this.i,this.l,m,null),Tn(this,m);We==4&&bn(this),this.o&&!this.K&&(We==4?Ho(this.j,this):(this.o=!1,dn(this)))}else gc(this.g),h==400&&m.indexOf("Unknown SID")>0?(this.m=3,ct(12)):(this.m=0,ct(13)),bn(this),$t(this)}}}catch{}finally{}};function Xn(c){if(!Fr(c))return c.g.la();const h=jo(c.g);if(h==="")return"";let m="";const N=h.length,L=Qn(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return bn(c),$t(c),"";c.h.i=new a.TextDecoder}for(let H=0;H<N;H++)c.h.h=!0,m+=c.h.i.decode(h[H],{stream:!(L&&H==N-1)});return h.length=0,c.h.g+=m,c.C=0,c.h.g}function Fr(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function Le(c,h){var m=c.C,N=h.indexOf(`
`,m);return N==-1?pr:(m=Number(h.substring(m,N)),isNaN(m)?Wt:(N+=1,N+m>h.length?pr:(h=h.slice(N,N+m),c.C=N+m,h)))}rn.prototype.cancel=function(){this.K=!0,bn(this)};function dn(c){c.T=Date.now()+c.H,K(c,c.H)}function K(c,h){if(c.D!=null)throw Error("WatchDog timer not null");c.D=kt(u(c.aa,c),h)}function $e(c){c.D&&(a.clearTimeout(c.D),c.D=null)}rn.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(Os(this.i,this.B),this.M!=2&&(Mt(),ct(17)),bn(this),this.m=2,$t(this)):K(this,this.T-c)};function $t(c){c.j.I==0||c.K||Ho(c.j,c)}function bn(c){$e(c);var h=c.O;h&&typeof h.dispose=="function"&&h.dispose(),c.O=null,Te(c.V),c.g&&(h=c.g,c.g=null,h.abort(),h.dispose())}function Tn(c,h){try{var m=c.j;if(m.I!=0&&(m.g==c||Ms(m.h,c))){if(!c.L&&Ms(m.h,c)&&m.I==3){try{var N=m.Ba.g.parse(h)}catch{N=null}if(Array.isArray(N)&&N.length==3){var L=N;if(L[0]==0){e:if(!m.v){if(m.g)if(m.g.F+3e3<c.F)Ws(m),Bs(m);else break e;Gs(m),ct(18)}}else m.xa=L[1],0<m.xa-m.K&&L[2]<37500&&m.F&&m.A==0&&!m.C&&(m.C=kt(u(m.Va,m),6e3));jt(m.h)<=1&&m.ta&&(m.ta=void 0)}else gr(m,11)}else if((c.L||m.g==c)&&Ws(m),!C(h))for(L=m.Ba.g.parse(h),h=0;h<L.length;h++){let ht=L[h];const Dt=ht[0];if(!(Dt<=m.K))if(m.K=Dt,ht=ht[1],m.I==2)if(ht[0]=="c"){m.M=ht[1],m.ba=ht[2];const kn=ht[3];kn!=null&&(m.ka=kn,m.j.info("VER="+m.ka));const br=ht[4];br!=null&&(m.za=br,m.j.info("SVER="+m.za));const Zn=ht[5];Zn!=null&&typeof Zn=="number"&&Zn>0&&(N=1.5*Zn,m.O=N,m.j.info("backChannelRequestTimeoutMs_="+N)),N=m;const er=c.g;if(er){const qs=er.g?er.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(qs){var H=N.h;H.g||qs.indexOf("spdy")==-1&&qs.indexOf("quic")==-1&&qs.indexOf("h2")==-1||(H.j=H.l,H.g=new Set,H.h&&(is(H,H.h),H.h=null))}if(N.G){const Ii=er.g?er.g.getResponseHeader("X-HTTP-Session-Id"):null;Ii&&(N.wa=Ii,Je(N.J,N.G,Ii))}}m.I=3,m.l&&m.l.ra(),m.aa&&(m.T=Date.now()-c.F,m.j.info("Handshake RTT: "+m.T+"ms")),N=m;var ae=c;if(N.na=Wo(N,N.L?N.ba:null,N.W),ae.L){U(N.h,ae);var We=ae,Et=N.O;Et&&(We.H=Et),We.D&&($e(We),dn(We)),N.g=ae}else Uo(N);m.i.length>0&&Hs(m)}else ht[0]!="stop"&&ht[0]!="close"||gr(m,7);else m.I==3&&(ht[0]=="stop"||ht[0]=="close"?ht[0]=="stop"?gr(m,7):vn(m):ht[0]!="noop"&&m.l&&m.l.qa(ht),m.A=0)}}Mt(4)}catch{}}var Rn=class{constructor(c,h){this.g=c,this.map=h}};function Pr(c){this.l=c||10,a.PerformanceNavigationTiming?(c=a.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function vt(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function jt(c){return c.h?1:c.g?c.g.size:0}function Ms(c,h){return c.h?c.h==h:c.g?c.g.has(h):!1}function is(c,h){c.g?c.g.add(h):c.h=h}function U(c,h){c.h&&c.h==h?c.h=null:c.g&&c.g.has(h)&&c.g.delete(h)}Pr.prototype.cancel=function(){if(this.i=X(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function X(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let h=c.i;for(const m of c.g.values())h=h.concat(m.G);return h}return S(c.i)}var _e=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Se(c,h){if(c){c=c.split("&");for(let m=0;m<c.length;m++){const N=c[m].indexOf("=");let L,H=null;N>=0?(L=c[m].substring(0,N),H=c[m].substring(N+1)):L=c[m],h(L,H?decodeURIComponent(H.replace(/\+/g," ")):"")}}}function ye(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;c instanceof ye?(this.l=c.l,He(this,c.j),this.o=c.o,this.g=c.g,it(this,c.u),this.h=c.h,un(this,Fo(c.i)),this.m=c.m):c&&(h=String(c).match(_e))?(this.l=!1,He(this,h[1]||"",!0),this.o=Ln(h[2]||""),this.g=Ln(h[3]||"",!0),it(this,h[4]),this.h=Ln(h[5]||"",!0),un(this,h[6]||"",!0),this.m=Ln(h[7]||"")):(this.l=!1,this.i=new os(null,this.l))}ye.prototype.toString=function(){const c=[];var h=this.j;h&&c.push(Xt(h,Eo,!0),":");var m=this.g;return(m||h=="file")&&(c.push("//"),(h=this.o)&&c.push(Xt(h,Eo,!0),"@"),c.push(An(m).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.u,m!=null&&c.push(":",String(m))),(m=this.h)&&(this.g&&m.charAt(0)!="/"&&c.push("/"),c.push(Xt(m,m.charAt(0)=="/"?xo:No,!0))),(m=this.i.toString())&&c.push("?",m),(m=this.m)&&c.push("#",Xt(m,Fd)),c.join("")},ye.prototype.resolve=function(c){const h=fe(this);let m=!!c.j;m?He(h,c.j):m=!!c.o,m?h.o=c.o:m=!!c.g,m?h.g=c.g:m=c.u!=null;var N=c.h;if(m)it(h,c.u);else if(m=!!c.h){if(N.charAt(0)!="/")if(this.g&&!this.h)N="/"+N;else{var L=h.h.lastIndexOf("/");L!=-1&&(N=h.h.slice(0,L+1)+N)}if(L=N,L==".."||L==".")N="";else if(L.indexOf("./")!=-1||L.indexOf("/.")!=-1){N=L.lastIndexOf("/",0)==0,L=L.split("/");const H=[];for(let ae=0;ae<L.length;){const We=L[ae++];We=="."?N&&ae==L.length&&H.push(""):We==".."?((H.length>1||H.length==1&&H[0]!="")&&H.pop(),N&&ae==L.length&&H.push("")):(H.push(We),N=!0)}N=H.join("/")}else N=L}return m?h.h=N:m=c.i.toString()!=="",m?un(h,Fo(c.i)):m=!!c.m,m&&(h.m=c.m),h};function fe(c){return new ye(c)}function He(c,h,m){c.j=m?Ln(h,!0):h,c.j&&(c.j=c.j.replace(/:$/,""))}function it(c,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);c.u=h}else c.u=null}function un(c,h,m){h instanceof os?(c.i=h,mc(c.i,c.l)):(m||(h=Xt(h,Ao)),c.i=new os(h,c.l))}function Je(c,h,m){c.i.set(h,m)}function Jt(c){return Je(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function Ln(c,h){return c?h?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Xt(c,h,m){return typeof c=="string"?(c=encodeURI(c).replace(h,Si),m&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Si(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Eo=/[#\/\?@]/g,No=/[#\?:]/g,xo=/[#\?]/g,Ao=/[#\?@]/g,Fd=/#/g;function os(c,h){this.h=this.g=null,this.i=c||null,this.j=!!h}function fr(c){c.g||(c.g=new Map,c.h=0,c.i&&Se(c.i,function(h,m){c.add(decodeURIComponent(h.replace(/\+/g," ")),m)}))}t=os.prototype,t.add=function(c,h){fr(this),this.i=null,c=$r(this,c);let m=this.g.get(c);return m||this.g.set(c,m=[]),m.push(h),this.h+=1,this};function Io(c,h){fr(c),h=$r(c,h),c.g.has(h)&&(c.i=null,c.h-=c.g.get(h).length,c.g.delete(h))}function To(c,h){return fr(c),h=$r(c,h),c.g.has(h)}t.forEach=function(c,h){fr(this),this.g.forEach(function(m,N){m.forEach(function(L){c.call(h,L,N,this)},this)},this)};function Ro(c,h){fr(c);let m=[];if(typeof h=="string")To(c,h)&&(m=m.concat(c.g.get($r(c,h))));else for(c=Array.from(c.g.values()),h=0;h<c.length;h++)m=m.concat(c[h]);return m}t.set=function(c,h){return fr(this),this.i=null,c=$r(this,c),To(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[h]),this.h+=1,this},t.get=function(c,h){return c?(c=Ro(this,c),c.length>0?String(c[0]):h):h};function ko(c,h,m){Io(c,h),m.length>0&&(c.i=null,c.g.set($r(c,h),S(m)),c.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],h=Array.from(this.g.keys());for(let N=0;N<h.length;N++){var m=h[N];const L=An(m);m=Ro(this,m);for(let H=0;H<m.length;H++){let ae=L;m[H]!==""&&(ae+="="+An(m[H])),c.push(ae)}}return this.i=c.join("&")};function Fo(c){const h=new os;return h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),h}function $r(c,h){return h=String(h),c.j&&(h=h.toLowerCase()),h}function mc(c,h){h&&!c.j&&(fr(c),c.i=null,c.g.forEach(function(m,N){const L=N.toLowerCase();N!=L&&(Io(this,N),ko(this,L,m))},c)),c.j=h}function Pd(c,h){const m=new En;if(a.Image){const N=new Image;N.onload=g(hn,m,"TestLoadImage: loaded",!0,h,N),N.onerror=g(hn,m,"TestLoadImage: error",!1,h,N),N.onabort=g(hn,m,"TestLoadImage: abort",!1,h,N),N.ontimeout=g(hn,m,"TestLoadImage: timeout",!1,h,N),a.setTimeout(function(){N.ontimeout&&N.ontimeout()},1e4),N.src=c}else h(!1)}function $d(c,h){const m=new En,N=new AbortController,L=setTimeout(()=>{N.abort(),hn(m,"TestPingServer: timeout",!1,h)},1e4);fetch(c,{signal:N.signal}).then(H=>{clearTimeout(L),H.ok?hn(m,"TestPingServer: ok",!0,h):hn(m,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(L),hn(m,"TestPingServer: error",!1,h)})}function hn(c,h,m,N,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),N(m)}catch{}}function pc(){this.g=new Ue}function js(c){this.i=c.Sb||null,this.h=c.ab||!1}f(js,J),js.prototype.g=function(){return new Ls(this.i,this.h)};function Ls(c,h){le.call(this),this.H=c,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}f(Ls,le),t=Ls.prototype,t.open=function(c,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=h,this.readyState=1,as(this)},t.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(h.body=c),(this.H||a).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,yn(this)),this.readyState=0},t.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,as(this)),this.g&&(this.readyState=3,as(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Po(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function Po(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}t.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var h=c.value?c.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!c.done}))&&(this.response=this.responseText+=h)}c.done?yn(this):as(this),this.readyState==3&&Po(this)}},t.Oa=function(c){this.g&&(this.response=this.responseText=c,yn(this))},t.Na=function(c){this.g&&(this.response=c,yn(this))},t.ga=function(){this.g&&yn(this)};function yn(c){c.readyState=4,c.l=null,c.j=null,c.B=null,as(c)}t.setRequestHeader=function(c,h){this.A.append(c,h)},t.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],h=this.h.entries();for(var m=h.next();!m.done;)m=m.value,c.push(m[0]+": "+m[1]),m=h.next();return c.join(`\r
`)};function as(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Ls.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function $o(c){let h="";return V(c,function(m,N){h+=N,h+=":",h+=m,h+=`\r
`}),h}function cs(c,h,m){e:{for(N in m){var N=!1;break e}N=!0}N||(m=$o(m),typeof c=="string"?m!=null&&An(m):Je(c,h,m))}function St(c){le.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}f(St,le);var ls=/^https?$/i,fc=["POST","PUT"];t=St.prototype,t.Fa=function(c){this.H=c},t.ea=function(c,h,m,N){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);h=h?h.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():hr.g(),this.g.onreadystatechange=p(u(this.Ca,this));try{this.B=!0,this.g.open(h,String(c),!0),this.B=!1}catch(H){Do(this,H);return}if(c=m||"",m=new Map(this.headers),N)if(Object.getPrototypeOf(N)===Object.prototype)for(var L in N)m.set(L,N[L]);else if(typeof N.keys=="function"&&typeof N.get=="function")for(const H of N.keys())m.set(H,N.get(H));else throw Error("Unknown input type for opt_headers: "+String(N));N=Array.from(m.keys()).find(H=>H.toLowerCase()=="content-type"),L=a.FormData&&c instanceof a.FormData,!(Array.prototype.indexOf.call(fc,h,void 0)>=0)||N||L||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[H,ae]of m)this.g.setRequestHeader(H,ae);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(H){Do(this,H)}};function Do(c,h){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=h,c.o=5,Oo(c),Us(c)}function Oo(c){c.A||(c.A=!0,ke(c,"complete"),ke(c,"error"))}t.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,ke(this,"complete"),ke(this,"abort"),Us(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Us(this,!0)),St.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Mo(this):this.Xa())},t.Xa=function(){Mo(this)};function Mo(c){if(c.h&&typeof o<"u"){if(c.v&&Qn(c)==4)setTimeout(c.Ca.bind(c),0);else if(ke(c,"readystatechange"),Qn(c)==4){c.h=!1;try{const H=c.ca();e:switch(H){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var m;if(!(m=h)){var N;if(N=H===0){let ae=String(c.D).match(_e)[1]||null;!ae&&a.self&&a.self.location&&(ae=a.self.location.protocol.slice(0,-1)),N=!ls.test(ae?ae.toLowerCase():"")}m=N}if(m)ke(c,"complete"),ke(c,"success");else{c.o=6;try{var L=Qn(c)>2?c.g.statusText:""}catch{L=""}c.l=L+" ["+c.ca()+"]",Oo(c)}}finally{Us(c)}}}}function Us(c,h){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const m=c.g;c.g=null,h||ke(c,"ready");try{m.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Qn(c){return c.g?c.g.readyState:0}t.ca=function(){try{return Qn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(c){if(this.g){var h=this.g.responseText;return c&&h.indexOf(c)==0&&(h=h.substring(c.length)),Rt(h)}};function jo(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function gc(c){const h={};c=(c.g&&Qn(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let N=0;N<c.length;N++){if(C(c[N]))continue;var m=mr(c[N]);const L=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const H=h[L]||[];h[L]=H,H.push(m)}ue(h,function(N){return N.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ds(c,h,m){return m&&m.internalChannelParams&&m.internalChannelParams[c]||h}function wi(c){this.za=0,this.i=[],this.j=new En,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ds("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ds("baseRetryDelayMs",5e3,c),this.Za=ds("retryDelaySeedMs",1e4,c),this.Ta=ds("forwardChannelMaxRetries",2,c),this.va=ds("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new Pr(c&&c.concurrentRequestLimit),this.Ba=new pc,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=wi.prototype,t.ka=8,t.I=1,t.connect=function(c,h,m,N){ct(0),this.W=c,this.H=h||{},m&&N!==void 0&&(this.H.OSID=m,this.H.OAID=N),this.F=this.X,this.J=Wo(this,null,this.W),Hs(this)};function vn(c){if(us(c),c.I==3){var h=c.V++,m=fe(c.J);if(Je(m,"SID",c.M),Je(m,"RID",h),Je(m,"TYPE","terminate"),hs(c,m),h=new rn(c,c.j,h),h.M=2,h.A=Jt(fe(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(h.A.toString(),"")}catch{}!m&&a.Image&&(new Image().src=h.A,m=!0),m||(h.g=zo(h.j,null),h.g.ea(h.A)),h.F=Date.now(),dn(h)}Go(c)}function Bs(c){c.g&&(xi(c),c.g.cancel(),c.g=null)}function us(c){Bs(c),c.v&&(a.clearTimeout(c.v),c.v=null),Ws(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&a.clearTimeout(c.m),c.m=null)}function Hs(c){if(!vt(c.h)&&!c.m){c.m=!0;var h=c.Ea;$||y(),O||($(),O=!0),E.add(h,c),c.D=0}}function Lo(c,h){return jt(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=h.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=kt(u(c.Ea,c,h),Ai(c,c.D)),c.D++,!0)}t.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const L=new rn(this,this.j,c);let H=this.o;if(this.U&&(H?(H=ve(H),Q(H,this.U)):H=this.U),this.u!==null||this.R||(L.J=H,H=null),this.S)e:{for(var h=0,m=0;m<this.i.length;m++){t:{var N=this.i[m];if("__data__"in N.map&&(N=N.map.__data__,typeof N=="string")){N=N.length;break t}N=void 0}if(N===void 0)break;if(h+=N,h>4096){h=m;break e}if(h===4096||m===this.i.length-1){h=m+1;break e}}h=1e3}else h=1e3;h=Ni(this,L,h),m=fe(this.J),Je(m,"RID",c),Je(m,"CVER",22),this.G&&Je(m,"X-HTTP-Session-Id",this.G),hs(this,m),H&&(this.R?h="headers="+An($o(H))+"&"+h:this.u&&cs(m,this.u,H)),is(this.h,L),this.Ra&&Je(m,"TYPE","init"),this.S?(Je(m,"$req",h),Je(m,"SID","null"),L.U=!0,jn(L,m,null)):jn(L,m,h),this.I=2}}else this.I==3&&(c?Ei(this,c):this.i.length==0||vt(this.h)||Ei(this))};function Ei(c,h){var m;h?m=h.l:m=c.V++;const N=fe(c.J);Je(N,"SID",c.M),Je(N,"RID",m),Je(N,"AID",c.K),hs(c,N),c.u&&c.o&&cs(N,c.u,c.o),m=new rn(c,c.j,m,c.D+1),c.u===null&&(m.J=c.o),h&&(c.i=h.G.concat(c.i)),h=Ni(c,m,1e3),m.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),is(c.h,m),jn(m,N,h)}function hs(c,h){c.H&&V(c.H,function(m,N){Je(h,N,m)}),c.l&&V({},function(m,N){Je(h,N,m)})}function Ni(c,h,m){m=Math.min(c.i.length,m);const N=c.l?u(c.l.Ka,c.l,c):null;e:{var L=c.i;let We=-1;for(;;){const Et=["count="+m];We==-1?m>0?(We=L[0].g,Et.push("ofs="+We)):We=0:Et.push("ofs="+We);let ht=!0;for(let Dt=0;Dt<m;Dt++){var H=L[Dt].g;const kn=L[Dt].map;if(H-=We,H<0)We=Math.max(0,L[Dt].g-100),ht=!1;else try{H="req"+H+"_"||"";try{var ae=kn instanceof Map?kn:Object.entries(kn);for(const[br,Zn]of ae){let er=Zn;l(Zn)&&(er=De(Zn)),Et.push(H+br+"="+encodeURIComponent(er))}}catch(br){throw Et.push(H+"type="+encodeURIComponent("_badmap")),br}}catch{N&&N(kn)}}if(ht){ae=Et.join("&");break e}}ae=void 0}return c=c.i.splice(0,m),h.G=c,ae}function Uo(c){if(!c.g&&!c.v){c.Y=1;var h=c.Da;$||y(),O||($(),O=!0),E.add(h,c),c.A=0}}function Gs(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=kt(u(c.Da,c),Ai(c,c.A)),c.A++,!0)}t.Da=function(){if(this.v=null,Bo(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=kt(u(this.Wa,this),c)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ct(10),Bs(this),Bo(this))};function xi(c){c.B!=null&&(a.clearTimeout(c.B),c.B=null)}function Bo(c){c.g=new rn(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var h=fe(c.na);Je(h,"RID","rpc"),Je(h,"SID",c.M),Je(h,"AID",c.K),Je(h,"CI",c.F?"0":"1"),!c.F&&c.ia&&Je(h,"TO",c.ia),Je(h,"TYPE","xmlhttp"),hs(c,h),c.u&&c.o&&cs(h,c.u,c.o),c.O&&(c.g.H=c.O);var m=c.g;c=c.ba,m.M=1,m.A=Jt(fe(h)),m.u=null,m.R=!0,In(m,c)}t.Va=function(){this.C!=null&&(this.C=null,Bs(this),Gs(this),ct(19))};function Ws(c){c.C!=null&&(a.clearTimeout(c.C),c.C=null)}function Ho(c,h){var m=null;if(c.g==h){Ws(c),xi(c),c.g=null;var N=2}else if(Ms(c.h,h))m=h.G,U(c.h,h),N=1;else return;if(c.I!=0){if(h.o)if(N==1){m=h.u?h.u.length:0,h=Date.now()-h.F;var L=c.D;N=ut(),ke(N,new nn(N,m)),Hs(c)}else Uo(c);else if(L=h.m,L==3||L==0&&h.X>0||!(N==1&&Lo(c,h)||N==2&&Gs(c)))switch(m&&m.length>0&&(h=c.h,h.i=h.i.concat(m)),L){case 1:gr(c,5);break;case 4:gr(c,10);break;case 3:gr(c,6);break;default:gr(c,2)}}}function Ai(c,h){let m=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(m*=2),m*h}function gr(c,h){if(c.j.info("Error code "+h),h==2){var m=u(c.bb,c),N=c.Ua;const L=!N;N=new ye(N||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||He(N,"https"),Jt(N),L?Pd(N.toString(),m):$d(N.toString(),m)}else ct(2);c.I=0,c.l&&c.l.pa(h),Go(c),us(c)}t.bb=function(c){c?(this.j.info("Successfully pinged google.com"),ct(2)):(this.j.info("Failed to ping google.com"),ct(1))};function Go(c){if(c.I=0,c.ja=[],c.l){const h=X(c.h);(h.length!=0||c.i.length!=0)&&(_(c.ja,h),_(c.ja,c.i),c.h.i.length=0,S(c.i),c.i.length=0),c.l.oa()}}function Wo(c,h,m){var N=m instanceof ye?fe(m):new ye(m);if(N.g!="")h&&(N.g=h+"."+N.g),it(N,N.u);else{var L=a.location;N=L.protocol,h=h?h+"."+L.hostname:L.hostname,L=+L.port;const H=new ye(null);N&&He(H,N),h&&(H.g=h),L&&it(H,L),m&&(H.h=m),N=H}return m=c.G,h=c.wa,m&&h&&Je(N,m,h),Je(N,"VER",c.ka),hs(c,N),N}function zo(c,h,m){if(h&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=c.Aa&&!c.ma?new St(new js({ab:m})):new St(c.ma),h.Fa(c.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function zs(){}t=zs.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function mn(c,h){le.call(this),this.g=new wi(h),this.l=c,this.h=h&&h.messageUrlParams||null,c=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(c?c["X-WebChannel-Content-Type"]=h.messageContentType:c={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(c?c["X-WebChannel-Client-Profile"]=h.sa:c={"X-WebChannel-Client-Profile":h.sa}),this.g.U=c,(c=h&&h.Qb)&&!C(c)&&(this.g.u=c),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!C(h)&&(this.g.G=h,c=this.h,c!==null&&h in c&&(c=this.h,h in c&&delete c[h])),this.j=new Dr(this)}f(mn,le),mn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},mn.prototype.close=function(){vn(this.g)},mn.prototype.o=function(c){var h=this.g;if(typeof c=="string"){var m={};m.__data__=c,c=m}else this.v&&(m={},m.__data__=De(c),c=m);h.i.push(new Rn(h.Ya++,c)),h.I==3&&Hs(h)},mn.prototype.N=function(){this.g.l=null,delete this.j,vn(this.g),delete this.g,mn.Z.N.call(this)};function qo(c){Oe.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var h=c.__sm__;if(h){e:{for(const m in h){c=m;break e}c=void 0}(this.i=c)&&(c=this.i,h=h!==null&&c in h?h[c]:void 0),this.data=h}else this.data=c}f(qo,Oe);function Vo(){Ee.call(this),this.status=1}f(Vo,Ee);function Dr(c){this.g=c}f(Dr,zs),Dr.prototype.ra=function(){ke(this.g,"a")},Dr.prototype.qa=function(c){ke(this.g,new qo(c))},Dr.prototype.pa=function(c){ke(this.g,new Vo)},Dr.prototype.oa=function(){ke(this.g,"b")},mn.prototype.send=mn.prototype.o,mn.prototype.open=mn.prototype.m,mn.prototype.close=mn.prototype.close,Jn.NO_ERROR=0,Jn.TIMEOUT=8,Jn.HTTP_ERROR=6,ss.COMPLETE="complete",ze.EventType=Be,Be.OPEN="a",Be.CLOSE="b",Be.ERROR="c",Be.MESSAGE="d",le.prototype.listen=le.prototype.J,St.prototype.listenOnce=St.prototype.K,St.prototype.getLastError=St.prototype.Ha,St.prototype.getLastErrorCode=St.prototype.ya,St.prototype.getStatus=St.prototype.ca,St.prototype.getResponseJson=St.prototype.La,St.prototype.getResponseText=St.prototype.la,St.prototype.send=St.prototype.ea,St.prototype.setWithCredentials=St.prototype.Fa}).apply(typeof Qo<"u"?Qo:typeof self<"u"?self:typeof window<"u"?window:{});const gh="@firebase/firestore",bh="4.9.2";/**
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
 */class _n{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}_n.UNAUTHENTICATED=new _n(null),_n.GOOGLE_CREDENTIALS=new _n("google-credentials-uid"),_n.FIRST_PARTY=new _n("first-party-uid"),_n.MOCK_USER=new _n("mock-user");/**
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
 */let dc="12.3.0";/**
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
 */const Ua=new uo("@firebase/firestore");function Vn(t,...e){if(Ua.logLevel<=dt.DEBUG){const n=e.map(qf);Ua.debug(`Firestore (${dc}): ${t}`,...n)}}function zf(t,...e){if(Ua.logLevel<=dt.ERROR){const n=e.map(qf);Ua.error(`Firestore (${dc}): ${t}`,...n)}}function qf(t){if(typeof t=="string")return t;try{/**
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
 */function Ba(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Vf(t,r,n)}function Vf(t,e,n){let r=`FIRESTORE (${dc}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw zf(r),new Error(r)}function qi(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Vf(e,s,r)}/**
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
 */const ot={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class at extends On{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Vi{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
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
 */class $N{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class DN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(_n.UNAUTHENTICATED)))}shutdown(){}}class ON{constructor(e){this.t=e,this.currentUser=_n.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){qi(this.o===void 0,42304);let r=this.i;const s=d=>this.i!==r?(r=this.i,n(d)):Promise.resolve();let o=new Vi;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Vi,e.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const d=o;e.enqueueRetryable((async()=>{await d.promise,await s(this.currentUser)}))},l=d=>{Vn("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((d=>l(d))),setTimeout((()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?l(d):(Vn("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Vi)}}),0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(Vn("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(qi(typeof r.accessToken=="string",31837,{l:r}),new $N(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return qi(e===null||typeof e=="string",2055,{h:e}),new _n(e)}}class MN{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=_n.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class jN{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new MN(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(_n.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class yh{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class LN{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Cn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){qi(this.o===void 0,3512);const r=o=>{o.error!=null&&Vn("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,Vn("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable((()=>r(o)))};const s=o=>{Vn("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>s(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):Vn("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new yh(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(qi(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new yh(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function UN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class BN{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=UN(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<n&&(r+=e.charAt(s[o]%62))}return r}}function Zr(t,e){return t<e?-1:t>e?1:0}function HN(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),o=e.charAt(r);if(s!==o)return Mc(s)===Mc(o)?Zr(s,o):Mc(s)?1:-1}return Zr(t.length,e.length)}const GN=55296,WN=57343;function Mc(t){const e=t.charCodeAt(0);return e>=GN&&e<=WN}/**
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
 */const vh="__name__";class nr{constructor(e,n,r){n===void 0?n=0:n>e.length&&Ba(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Ba(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return nr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof nr?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const o=nr.compareSegments(e.get(s),n.get(s));if(o!==0)return o}return Zr(e.length,n.length)}static compareSegments(e,n){const r=nr.isNumericId(e),s=nr.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?nr.extractNumericId(e).compare(nr.extractNumericId(n)):HN(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Id.fromString(e.substring(4,e.length-2))}}class Gn extends nr{construct(e,n,r){return new Gn(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new at(ot.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new Gn(n)}static emptyPath(){return new Gn([])}}const zN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class gs extends nr{construct(e,n,r){return new gs(e,n,r)}static isValidIdentifier(e){return zN.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),gs.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===vh}static keyField(){return new gs([vh])}static fromServerFormat(e){const n=[];let r="",s=0;const o=()=>{if(r.length===0)throw new at(ot.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new at(ot.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const d=e[s+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new at(ot.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=d,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(o(),s++)}if(o(),a)throw new at(ot.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new gs(n)}static emptyPath(){return new gs([])}}/**
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
 */class vs{constructor(e){this.path=e}static fromPath(e){return new vs(Gn.fromString(e))}static fromName(e){return new vs(Gn.fromString(e).popFirst(5))}static empty(){return new vs(Gn.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Gn.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Gn.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new vs(new Gn(e.slice()))}}function qN(t,e,n,r){if(e===!0&&r===!0)throw new at(ot.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function VN(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}/**
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
 */function Ot(t,e){const n={typeString:t};return e&&(n.value=e),n}function wo(t,e){if(!VN(t))throw new at(ot.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,o="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const a=t[r];if(s&&typeof a!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(o!==void 0&&a!==o.value){n=`Expected '${r}' field to equal '${o.value}'`;break}}if(n)throw new at(ot.INVALID_ARGUMENT,n);return!0}/**
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
 */const _h=-62135596800,Ch=1e6;class rr{static now(){return rr.fromMillis(Date.now())}static fromDate(e){return rr.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Ch);return new rr(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new at(ot.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new at(ot.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<_h)throw new at(ot.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new at(ot.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ch}_compareTo(e){return this.seconds===e.seconds?Zr(this.nanoseconds,e.nanoseconds):Zr(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:rr._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(wo(e,rr._jsonSchema))return new rr(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-_h;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}rr._jsonSchemaVersion="firestore/timestamp/1.0",rr._jsonSchema={type:Ot("string",rr._jsonSchemaVersion),seconds:Ot("number"),nanoseconds:Ot("number")};function YN(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class KN extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ts{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new KN("Invalid base64 string: "+o):o}})(e);return new Ts(n)}static fromUint8Array(e){const n=(function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o})(e);return new Ts(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Zr(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ts.EMPTY_BYTE_STRING=new Ts("");const Sh="(default)";class Ha{constructor(e,n){this.projectId=e,this.database=n||Sh}static empty(){return new Ha("","")}get isDefaultDatabase(){return this.database===Sh}isEqual(e){return e instanceof Ha&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */class JN{constructor(e,n=null,r=[],s=[],o=null,a="F",l=null,d=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=d,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function XN(t){return new JN(t)}/**
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
 */var wh,rt;(rt=wh||(wh={}))[rt.OK=0]="OK",rt[rt.CANCELLED=1]="CANCELLED",rt[rt.UNKNOWN=2]="UNKNOWN",rt[rt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",rt[rt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",rt[rt.NOT_FOUND=5]="NOT_FOUND",rt[rt.ALREADY_EXISTS=6]="ALREADY_EXISTS",rt[rt.PERMISSION_DENIED=7]="PERMISSION_DENIED",rt[rt.UNAUTHENTICATED=16]="UNAUTHENTICATED",rt[rt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",rt[rt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",rt[rt.ABORTED=10]="ABORTED",rt[rt.OUT_OF_RANGE=11]="OUT_OF_RANGE",rt[rt.UNIMPLEMENTED=12]="UNIMPLEMENTED",rt[rt.INTERNAL=13]="INTERNAL",rt[rt.UNAVAILABLE=14]="UNAVAILABLE",rt[rt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Id([4294967295,4294967295],0);/**
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
 */const QN=41943040;/**
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
 */const ZN=1048576;function jc(){return typeof document<"u"?document:null}/**
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
 */class ex{constructor(e,n,r=1e3,s=1.5,o=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=o,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&Vn("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */class Td{constructor(e,n,r,s,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new Vi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,o){const a=Date.now()+r,l=new Td(e,n,a,s,o);return l.start(r),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new at(ot.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Eh,Nh;(Nh=Eh||(Eh={})).Ma="default",Nh.Cache="cache";/**
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
 */function tx(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const xh=new Map;/**
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
 */const nx="firestore.googleapis.com",Ah=!0;class Ih{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new at(ot.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=nx,this.ssl=Ah}else this.host=e.host,this.ssl=e.ssl??Ah;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=QN;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<ZN)throw new at(ot.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}qN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=tx(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new at(ot.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new at(ot.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new at(ot.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class rx{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ih({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new at(ot.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new at(ot.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ih(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new DN;switch(r.type){case"firstParty":return new jN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new at(ot.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=xh.get(n);r&&(Vn("ComponentProvider","Removing Datastore"),xh.delete(n),r.terminate())})(this),Promise.resolve()}}/**
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
 */class Rd{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Rd(this.firestore,e,this._query)}}class ir{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new kd(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ir(this.firestore,e,this._key)}toJSON(){return{type:ir._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(wo(n,ir._jsonSchema))return new ir(e,r||null,new vs(Gn.fromString(n.referencePath)))}}ir._jsonSchemaVersion="firestore/documentReference/1.0",ir._jsonSchema={type:Ot("string",ir._jsonSchemaVersion),referencePath:Ot("string")};class kd extends Rd{constructor(e,n,r){super(e,n,XN(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ir(this.firestore,null,new vs(e))}withConverter(e){return new kd(this.firestore,e,this._path)}}/**
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
 */const Th="AsyncQueue";class Rh{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new ex(this,"async_queue_retry"),this._c=()=>{const r=jc();r&&Vn(Th,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=jc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=jc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new Vi;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!YN(e))throw e;Vn(Th,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,zf("INTERNAL UNHANDLED ERROR: ",kh(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Td.createAndSchedule(this,e,n,r,(o=>this.hc(o)));return this.tc.push(s),s}uc(){this.nc&&Ba(47125,{Pc:kh(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function kh(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class sx extends rx{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Rh,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Rh(e),this._firestoreClient=void 0,await e}}}/**
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
 */class _r{constructor(e){this._byteString=e}static fromBase64String(e){try{return new _r(Ts.fromBase64String(e))}catch(n){throw new at(ot.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new _r(Ts.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:_r._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(wo(e,_r._jsonSchema))return _r.fromBase64String(e.bytes)}}_r._jsonSchemaVersion="firestore/bytes/1.0",_r._jsonSchema={type:Ot("string",_r._jsonSchemaVersion),bytes:Ot("string")};/**
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
 */class Yf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new at(ot.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new gs(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Cs{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new at(ot.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new at(ot.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Zr(this._lat,e._lat)||Zr(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Cs._jsonSchemaVersion}}static fromJSON(e){if(wo(e,Cs._jsonSchema))return new Cs(e.latitude,e.longitude)}}Cs._jsonSchemaVersion="firestore/geoPoint/1.0",Cs._jsonSchema={type:Ot("string",Cs._jsonSchemaVersion),latitude:Ot("number"),longitude:Ot("number")};/**
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
 */class Ss{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Ss._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(wo(e,Ss._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Ss(e.vectorValues);throw new at(ot.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ss._jsonSchemaVersion="firestore/vectorValue/1.0",Ss._jsonSchema={type:Ot("string",Ss._jsonSchemaVersion),vectorValues:Ot("object")};const ix=new RegExp("[~\\*/\\[\\]]");function ox(t,e,n){if(e.search(ix)>=0)throw Fh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t);try{return new Yf(...e.split("."))._internalPath}catch{throw Fh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t)}}function Fh(t,e,n,r,s){let o=`Function ${e}() called with invalid data`;o+=". ";let a="";return new at(ot.INVALID_ARGUMENT,o+t+a)}/**
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
 */class Kf{constructor(e,n,r,s,o){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new ir(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ax(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Jf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ax extends Kf{data(){return super.data()}}function Jf(t,e){return typeof e=="string"?ox(t,e):e instanceof Yf?e._internalPath:e._delegate._internalPath}class Zo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class oi extends Kf{constructor(e,n,r,s,o,a){super(e,n,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ca(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Jf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new at(ot.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=oi._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}oi._jsonSchemaVersion="firestore/documentSnapshot/1.0",oi._jsonSchema={type:Ot("string",oi._jsonSchemaVersion),bundleSource:Ot("string","DocumentSnapshot"),bundleName:Ot("string"),bundle:Ot("string")};class ca extends oi{data(e={}){return super.data(e)}}class Yi{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Zo(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new ca(this._firestore,this._userDataWriter,r.key,r,new Zo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new at(ot.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((l=>{const d=new ca(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Zo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:d,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((l=>o||l.type!==3)).map((l=>{const d=new ca(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Zo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,g=-1;return l.type!==0&&(u=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),g=a.indexOf(l.doc.key)),{type:cx(l.type),doc:d,oldIndex:u,newIndex:g}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new at(ot.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Yi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=BN.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((o=>{o._document!==null&&(n.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function cx(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ba(61501,{type:t})}}Yi._jsonSchemaVersion="firestore/querySnapshot/1.0",Yi._jsonSchema={type:Ot("string",Yi._jsonSchemaVersion),bundleSource:Ot("string","QuerySnapshot"),bundleName:Ot("string"),bundle:Ot("string")};(function(e,n=!0){(function(s){dc=s})(ks),$n(new wn("firestore",((r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),l=new sx(new ON(r.getProvider("auth-internal")),new LN(a,r.getProvider("app-check-internal")),(function(u,g){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new at(ot.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ha(u.options.projectId,g)})(a,s),a);return o={useFetchStreams:n,...o},l._setSettings(o),l}),"PUBLIC").setMultipleInstances(!0)),Zt(gh,bh,e),Zt(gh,bh,"esm2020")})();const lx=t=>({physician:"Physician",psych:"Psych",admin:"Admin",nursing:"Nurse",ems:"EMS",coroner:"Coroner",saaa:"SAAA"})[t]||(t?t.charAt(0).toUpperCase()+t.slice(1):"Unknown"),dx=(t="")=>({displayName:"",group:t,status:"OPEN",poc:"",shortCode:"",url:"",Overview:"",skill1:"",skill2:"",skill3:"",EduRequirement:""}),ux={position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.65)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1040},hx={position:"relative",backgroundColor:"#2a2a2e",color:"#e1e1e1",padding:"25px 30px",borderRadius:"10px",boxShadow:"0 7px 20px rgba(0,0,0,0.5)",zIndex:1050,width:"90%",maxWidth:"750px",maxHeight:"88vh",display:"flex",flexDirection:"column",border:"1px solid #444"},mx={display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #444",paddingBottom:"15px",marginBottom:"20px",color:"#ffffff"},px={margin:0,fontSize:"1.4rem",fontWeight:"500"},fx={overflowY:"auto",flexGrow:1,scrollbarWidth:"thin",scrollbarColor:"#555 #333"},gx={display:"flex",justifyContent:"flex-end",borderTop:"1px solid #444",paddingTop:"20px",marginTop:"25px"},bx=({show:t,onHide:e,categoryKey:n,categoryConfig:r,showNotification:s,onRoleSaved:o,roleToEdit:a})=>{const l=b.useMemo(()=>dx(r?.displayName||""),[r?.displayName]),[d,u]=b.useState(()=>a?{...l,...a}:l),[g,f]=b.useState(!1),[p,S]=b.useState("");b.useEffect(()=>{t&&(u(a?{...l,...a}:l),S(""))},[t,a,l]);const _=b.useMemo(()=>["displayName","group","shortCode","poc","url","Overview","skill1","skill2","skill3","EduRequirement"],[]),[I,F]=b.useState(!1);b.useEffect(()=>{F(_.every(y=>d.hasOwnProperty(y)&&String(d[y]).trim()!==""))},[d,_]);const P=b.useCallback(E=>{const{name:y,value:w}=E.target;u(x=>({...x,[y]:w}))},[]),k=b.useCallback(()=>{u(l),S(""),e()},[e,l]),D=b.useCallback(async E=>{if(E.preventDefault(),S(""),!I){S("All fields marked with * are required, and others must also be filled."),s&&s("Please fill out all fields in the form.","warning");return}const y=a?.originalKey||d.displayName.trim().replace(/[.#$[\]/]/g,"_").replace(/\s+/g,"_");if(!y){S("Display Name cannot be empty or invalid for key generation."),s&&s("Display Name is invalid for key.","warning");return}if(f(!0),!r||!r.path){S("Category configuration is missing or invalid."),s&&s("Category configuration error.","error"),f(!1);return}const w=`${r.path}/${y}`;try{if(!a){const v=me(Ne,w);if((await qe(v)).exists()){S(`A role with the key "${y}" already exists.`),s&&s(`Role key "${y}" already exists.`,"error"),f(!1);return}}const x={...d};x.group=lx(n),await It(me(Ne,w),x),o&&o({...x,originalKey:y},a?"edited":"added"),k()}catch(x){S(`Failed to ${a?"edit":"add"} role: ${x.message}`),s&&s(`Failed to ${a?"edit":"add"} role. ${x.message}`,"error")}f(!1)},[d,n,r,s,o,k,I,a]);if(b.useEffect(()=>{const E=y=>{y.key==="Escape"&&k()};return t&&document.addEventListener("keydown",E),()=>document.removeEventListener("keydown",E)},[t,k]),!t)return null;const R=a?`Edit Role: ${a.displayName||a.originalKey}`:`Add New Role to ${r?.displayName||"Category"}`,$=a?g?"Saving...":"Save Changes":g?"Saving...":"Save Role",O=i.jsx("div",{style:ux,onClick:k,children:i.jsxs("div",{style:hx,onClick:E=>E.stopPropagation(),children:[i.jsxs("div",{style:mx,children:[i.jsx("h5",{style:px,children:R}),i.jsx(ce,{variant:"link",onClick:k,"aria-label":"Close",style:{color:"#aaa",textDecoration:"none",fontSize:"1.5rem",padding:"0 .5rem",lineHeight:1},children:"×"})]}),i.jsx("div",{style:fx,children:i.jsxs(he,{onSubmit:D,children:[i.jsxs(he.Group,{className:"mb-3",children:[i.jsx(he.Label,{children:"Display Name *"}),i.jsx(he.Control,{type:"text",name:"displayName",value:d.displayName||"",onChange:P,required:!0,placeholder:"e.g., Senior Paramedic"})]}),i.jsxs(he.Group,{className:"mb-3",children:[i.jsx(he.Label,{children:"Group (Category) *"}),i.jsx(he.Control,{type:"text",name:"group",value:d.group||"",onChange:P,required:!0,readOnly:!0})]}),i.jsxs(he.Group,{className:"mb-3",children:[i.jsx(he.Label,{children:"Status *"}),i.jsxs(he.Select,{name:"status",value:d.status||"OPEN",onChange:P,required:!0,children:[i.jsx("option",{value:"OPEN",children:"OPEN"}),i.jsx("option",{value:"CLOSED",children:"CLOSED"})]})]}),i.jsxs(he.Group,{className:"mb-3",children:[i.jsx(he.Label,{children:"Point of Contact (POC) *"}),i.jsx(he.Control,{type:"text",name:"poc",value:d.poc||"",onChange:P,required:!0,placeholder:"e.g., John Doe (johndoe#1234)"})]}),i.jsxs(he.Group,{className:"mb-3",children:[i.jsx(he.Label,{children:"Short Code *"}),i.jsx(he.Control,{type:"text",name:"shortCode",value:d.shortCode||"",onChange:P,required:!0,placeholder:"e.g., SRPARA"})]}),i.jsxs(he.Group,{className:"mb-3",children:[i.jsx(he.Label,{children:"Application URL *"}),i.jsx(he.Control,{type:"url",name:"url",value:d.url||"",onChange:P,required:!0,placeholder:"https://forum.example.com/link"})]}),i.jsxs(he.Group,{className:"mb-3",children:[i.jsx(he.Label,{children:"Overview *"}),i.jsx(he.Control,{as:"textarea",rows:3,name:"Overview",value:d.Overview||"",onChange:P,required:!0,placeholder:"Brief role overview..."})]}),i.jsxs(he.Group,{className:"mb-3",children:[i.jsx(he.Label,{children:"Skill Requirement 1 *"}),i.jsx(he.Control,{type:"text",name:"skill1",value:d.skill1||"",onChange:P,required:!0,placeholder:"e.g., Advanced Life Support"})]}),i.jsxs(he.Group,{className:"mb-3",children:[i.jsx(he.Label,{children:"Skill Requirement 2 *"}),i.jsx(he.Control,{type:"text",name:"skill2",value:d.skill2||"",onChange:P,required:!0,placeholder:"e.g., Emergency Driving"})]}),i.jsxs(he.Group,{className:"mb-3",children:[i.jsx(he.Label,{children:"Skill Requirement 3 *"}),i.jsx(he.Control,{type:"text",name:"skill3",value:d.skill3||"",onChange:P,required:!0,placeholder:"e.g., Patient Assessment"})]}),i.jsxs(he.Group,{className:"mb-3",children:[i.jsx(he.Label,{children:"Education Requirement *"}),i.jsx(he.Control,{type:"text",name:"EduRequirement",value:d.EduRequirement||"",onChange:P,required:!0,placeholder:"e.g., EMT-P Certification"})]}),p&&i.jsx("p",{className:"text-danger mt-2 mb-0",children:p}),i.jsxs("div",{style:gx,children:[i.jsx(ce,{variant:"secondary",onClick:k,disabled:g,children:"Cancel"}),i.jsx(ce,{variant:"primary",type:"submit",disabled:g||!I,style:{minWidth:"120px",marginLeft:"10px"},children:g?i.jsx(tt,{as:"span",animation:"border",size:"sm"}):$})]})]})})]})});return _l.createPortal(O,document.getElementById("modal-root"))},yx={},vx={},_x={},Cx={},Sx={},wx={},Ex={},Nx=({show:t,onHide:e,categoryConfig:n,currentRoleKey:r,currentRoleData:s,showInAppNotification:o,onKeyRenamed:a,sendAdminActionWebhook:l,adminUserEmail:d})=>{const[u,g]=b.useState(""),[f,p]=b.useState(!1),[S,_]=b.useState("");b.useEffect(()=>{t&&(g(""),_(""))},[t]);const I=P=>{let k=P.target.value.replace(/\s+/g,"_");k=k.replace(/[.#$[\]/]/g,""),g(k)},F=async P=>{if(P.preventDefault(),_(""),!u.trim()){_("New key cannot be empty."),o&&o("New key cannot be empty.","warning");return}if(u===r){_("New key cannot be the same as the current key."),o&&o("New key is the same as the current one.","info");return}p(!0);const k=n.path,D=`${k}/${r}`,R=`${k}/${u}`;try{const $=me(Ne,R);if((await qe($)).exists()){_(`The key "${u}" already exists in this category. Please choose a different key.`),o&&o(`Key "${u}" already exists.`,"error"),p(!1);return}await It(me(Ne,R),s),await Hn(me(Ne,D)),o&&o(`Role key "${r}" successfully renamed to "${u}".`,"check-circle"),l&&d&&l(d,"Renamed Role Key",`Category: ${n.displayName}
Old Key: ${r}
New Key: ${u}
Role Display Name: ${s.displayName||"N/A"}`,n.displayName),a&&a(),e()}catch($){_(`Failed to rename key: ${$.message}`),o&&o(`Failed to rename key. ${$.message}`,"error"),nt($,{extra:{context:"RenameRoleKeyModal Firebase Ops",oldPath:D,newPath:R}})}finally{p(!1)}};return t?i.jsx("div",{style:yx,onClick:e,children:i.jsxs("div",{style:vx,onClick:P=>P.stopPropagation(),children:[i.jsxs(Ct.Header,{style:_x,closeButton:!1,children:[" ",i.jsxs(Ct.Title,{style:Cx,children:["Rename Role Key: ",s?.displayName||r]}),i.jsx("button",{onClick:e,style:Ex,"aria-label":"Close modal",children:"×"})]}),i.jsxs(Ct.Body,{style:Sx,children:[i.jsxs("p",{children:["Current Key: ",i.jsx("strong",{children:r})]}),i.jsx("p",{className:"text-warning small",children:'Warning: Renaming the key changes its identifier in the database. This is a technical change and does not affect the "Display Name" shown to users unless you also edit the role. Ensure the new key is unique and does not contain spaces or Firebase-invalid characters (e.g., ., $, #, [, ], /).'}),i.jsxs(he,{onSubmit:F,children:[i.jsxs(he.Group,{className:"mb-3",children:[i.jsx(he.Label,{children:"New Role Key *"}),i.jsx(he.Control,{type:"text",value:u,onChange:I,required:!0,placeholder:"Enter new unique key (no spaces/invalid chars)",disabled:f}),i.jsx(he.Text,{className:"text-muted",children:"Spaces will be replaced with underscores. Invalid characters will be removed."})]}),S&&i.jsx("p",{className:"text-danger mt-2 mb-0",children:S})]})]}),i.jsxs(Ct.Footer,{style:wx,children:[i.jsx(ce,{variant:"secondary",onClick:e,disabled:f,children:"Cancel"}),i.jsx(ce,{variant:"warning",onClick:F,disabled:f||!u.trim()||u===r,children:f?i.jsx(tt,{as:"span",animation:"border",size:"sm"}):"Rename Key"})]})]})}):null},xx=({show:t,onHide:e,showNotification:n,commitInfo:r,sendAdminActionWebhook:s,adminUserEmail:o,bingoType:a})=>{const[l,d]=b.useState(""),[u,g]=b.useState(!0),[f,p]=b.useState(!1),[S,_]=b.useState(""),I=b.useCallback(async()=>{if(!a?.path){console.error("[EditBingoPhrasesModal] fetchPhrases: No bingoType or path provided."),_("Cannot load phrases: No Bingo Type selected."),g(!1);return}const P=me(Ne,`bingo/phrases/${a.path}`);console.log(`[EditBingoPhrasesModal] fetchPhrases: Starting fetch for ${a.name}...`),g(!0),_("");try{const k=await qe(P);if(console.log(`[EditBingoPhrasesModal] fetchPhrases: Firebase get() call resolved for ${a.name}.`),k.exists()){const D=k.val();console.log(`[EditBingoPhrasesModal] fetchPhrases: Data exists for ${a.name}.`,D);const R=Array.isArray(D)?D:typeof D=="object"&&D!==null?Object.values(D).map($=>typeof $=="object"?$.phrase:$).filter(Boolean):[];d(R.filter($=>$).join(`
`)),console.log(`[EditBingoPhrasesModal] fetchPhrases: Phrases set for ${a.name}.`)}else d(""),n(`No master phrases found for ${a.name}. You can add them here.`,"info-circle"),console.log(`[EditBingoPhrasesModal] fetchPhrases: No data found for ${a.name}.`)}catch(k){console.error(`[EditBingoPhrasesModal] fetchPhrases: Error during fetch for ${a.name}:`,k),_("Failed to load phrases: "+k.message),n("Failed to load phrases.","error"),nt(k,{extra:{context:`EditBingoPhrasesModal Fetch for ${a?.name}`}})}finally{g(!1),console.log(`[EditBingoPhrasesModal] fetchPhrases: Finished fetch for ${a.name}. isLoading set to false.`)}},[a,n]);b.useEffect(()=>{t&&a?I():t||(g(!0),d(""),_(""),p(!1))},[t,a,I]);const F=async()=>{if(!a?.path){_("Cannot save phrases: No Bingo Type selected."),n("Cannot save: No Bingo Type selected.","error");return}const P=me(Ne,`bingo/phrases/${a.path}`);p(!0),_("");try{const k=l.split(`
`).map(D=>D.trim()).filter(D=>D.length>0);if(k.length<24){_("You need at least 24 unique phrases for a full bingo card."),n("Not enough phrases (min 24 required).","warning"),p(!1);return}await It(P,k),n(`Master ${a.name} phrases updated successfully!`,"check-circle"),s&&o&&s(o,`Edited Master ${a.name} Bingo Phrases`,`Updated ${k.length} phrases.`,`Bingo Master Phrases (${a.name})`),e()}catch(k){console.error("Error saving master phrases:",k),_("Failed to save phrases: "+k.message),n("Failed to save phrases.","error"),nt(k,{extra:{context:`EditBingoPhrasesModal Save for ${a?.name}`}})}finally{p(!1)}};return i.jsxs(Ct,{show:t,onHide:e,size:"lg",dialogClassName:"bingo-modal-dialog",children:[i.jsx(Ct.Header,{closeButton:!0,closeVariant:"white",children:i.jsxs(Ct.Title,{children:["Edit Master ",a?.name||""," Bingo Phrases"]})}),i.jsx(Ct.Body,{children:u?i.jsxs("div",{className:"text-center",children:[i.jsx(tt,{animation:"border"})," Loading phrases..."]}):i.jsxs(he,{children:[i.jsxs(he.Group,{className:"mb-3",children:[i.jsx(he.Label,{children:"One phrase per line. Minimum 24 phrases required."}),i.jsx(he.Control,{as:"textarea",rows:15,value:l,onChange:P=>d(P.target.value),placeholder:"Enter your bingo phrases here, one per line.",disabled:f,className:"bingo-phrases-textarea"})]}),S&&i.jsx("p",{className:"text-danger",children:S})]})}),i.jsxs(Ct.Footer,{children:[i.jsx(ce,{variant:"secondary",onClick:e,disabled:f,children:"Cancel"}),i.jsx(ce,{variant:"primary",onClick:F,disabled:f||u,children:f?i.jsx(tt,{as:"span",animation:"border",size:"sm"}):"Save Phrases"})]})]})},Ax=[{id:"er",name:"Emergency Room",path:"ER"},{id:"ems",name:"EMS",path:"EMS"},{id:"coroner",name:"Coroner",path:"Coroner"}],Ix=({show:t,onHide:e,showNotification:n,sendAdminActionWebhook:r,adminUserEmail:s})=>{const[o,a]=b.useState([]),[l,d]=b.useState(!0),[u,g]=b.useState(null),f=b.useCallback(async()=>{d(!0);const _=me(Ne,"bingo/phraseRequests");try{const I=await qe(_);if(I.exists()){const F=I.val();let P=Object.entries(F).map(([k,D])=>({id:k,...D})).filter(k=>k.status==="pending").sort((k,D)=>k.timestamp-D.timestamp);a(P)}else a([])}catch(I){console.error("Error fetching phrase requests:",I),n("Failed to load phrase requests.","error"),nt(I,{extra:{context:"ReviewPhraseRequestsModal Fetch"}})}finally{d(!1)}},[n]);b.useEffect(()=>{t&&f()},[t,f]);const p=async _=>{g(_.id);const I=Ax.find(k=>k.name===_.bingoType);if(!I){n(`Error: Unknown Bingo Type "${_.bingoType}" for phrase approval.`,"error"),console.error(`Could not find a matching bingo type for name: ${_.bingoType}`),await S(_,"Denied (Invalid Type)"),g(null);return}const F=me(Ne,`bingo/phrases/${I.path}`),P=me(Ne,`bingo/phraseRequests/${_.id}`);try{const k=await qe(F),D=k.val(),R=k.exists()?Array.isArray(D)?D:typeof D=="object"&&D!==null?Object.values(D).map(E=>typeof E=="object"?E.phrase:E).filter(Boolean):[]:[],$=_.phrase.split(`
`).map(E=>E.trim()).filter(E=>E);for(const E of $)if(R.some(y=>y.toLowerCase()===E.toLowerCase())){n(`Phrase "${E}" already exists in ${I.name} list. Denying request.`,"warning"),await S(_,"Denied (Duplicate)");return}let O=[...R,...$];if(O=O.filter(E=>E!=null&&E!==""),await It(F,O),await xr(P,{status:"approved",processedBy:s,processedAt:new Date().toISOString()}),n(`Phrase(s) added to ${I.name} list!`,"check-circle"),r){const E=$.map(y=>`"${y}"`).join(`
`);r(s,"Approved Bingo Phrase Request",`Phrases:
${E}
Requested by: ${_.requestedBy}
For Bingo: ${_.bingoType||"General"}`,"Bingo Phrase Requests")}f()}catch(k){console.error("Error approving phrase:",k),n("Failed to approve phrase.","error"),nt(k,{extra:{context:"ReviewPhraseRequestsModal Approve"}})}finally{g(null)}},S=async(_,I="Denied")=>{g(_.id);const F=me(Ne,`bingo/phraseRequests/${_.id}`);try{await xr(F,{status:I,processedBy:s,processedAt:new Date().toISOString()}),n("Request for phrase(s) has been denied.","info-circle"),r&&r(s,"Denied Bingo Phrase Request",`Phrase: "${_.phrase}"
Requested by: ${_.requestedBy}
For Bingo: ${_.bingoType||"General"}
Reason: ${I}`,"Bingo Phrase Requests"),f()}catch(P){console.error("Error denying phrase:",P),n("Failed to deny phrase.","error"),nt(P,{extra:{context:"ReviewPhraseRequestsModal Deny"}})}finally{g(null)}};return i.jsxs(Ct,{show:t,onHide:e,size:"lg",dialogClassName:"bingo-modal-dialog",children:[i.jsx(Ct.Header,{closeButton:!0,closeVariant:"white",children:i.jsx(Ct.Title,{children:"Review Pending Bingo Phrases"})}),i.jsxs(Ct.Body,{style:{overflowY:"auto"},children:[" ",l?i.jsxs("div",{className:"text-center",children:[i.jsx(tt,{animation:"border"})," Loading requests..."]}):o.length>0?i.jsx(Od,{variant:"flush",children:o.map(_=>i.jsxs(Od.Item,{className:"d-flex justify-content-between align-items-center bg-transparent text-light",children:[i.jsxs("div",{children:[i.jsx("p",{className:"mb-0",children:i.jsx("strong",{children:"Phrase(s):"})}),_.phrase.split(`
`).map((I,F)=>i.jsxs("p",{className:"mb-1",children:['"',I.trim(),'"']},F)),_.bingoType&&i.jsx("p",{className:"mb-1",style:{color:"#0dcaf0"},children:i.jsxs("small",{children:["For: ",i.jsxs("strong",{children:[_.bingoType," Bingo"]})]})}),i.jsxs("small",{className:"text-muted",children:["Requested by: ",_.requestedBy," on ",new Date(_.timestamp).toLocaleString()]})]}),i.jsx("div",{children:u===_.id?i.jsx(tt,{animation:"border",size:"sm"}):i.jsxs(i.Fragment,{children:[i.jsx(ce,{variant:"outline-success",size:"sm",className:"me-2",onClick:()=>p(_),children:"Approve"}),i.jsx(ce,{variant:"outline-danger",size:"sm",onClick:()=>S(_),children:"Deny"})]})})]},_.id))}):i.jsx("p",{className:"text-center text-muted",children:"No pending phrase requests."})]}),i.jsx(Ct.Footer,{children:i.jsx(ce,{variant:"secondary",onClick:e,children:"Close"})})]})},Xf=({show:t,onHide:e,showNotification:n,commitInfo:r,formData:s})=>{const{user:o,isAuthenticated:a,factionData:l,swappableCharacters:d,swapCharacter:u,login:g}=dr(),f=()=>{sessionStorage.setItem("showCctvModalAfterLogin","true"),g()},[p,S]=b.useState(""),[_,I]=b.useState(""),[F,P]=b.useState(""),[k,D]=b.useState(""),[R,$]=b.useState(""),[O,E]=b.useState(""),[y,w]=b.useState(!1),[x,v]=b.useState(""),[A,C]=b.useState(""),[M,B]=b.useState(""),[j,G]=b.useState(""),[z,V]=b.useState(null);b.useEffect(()=>{t||(S(""),I(""),P(""),D(""),$(""),E(""),w(!1),v(""),B(""),G(""),C(""),V(null))},[t]),b.useEffect(()=>{a&&l&&!z&&V(l.characterId)},[a,l,z]),b.useEffect(()=>{if(a){let Q="";if(z&&d){const ee=d.find(ne=>ne.character&&ne.character.characterId?ne.character.characterId==z:ne.id?ne.id==z:!1);ee&&(ee.character&&ee.character.characterName?Q=ee.character.characterName:ee.name?Q=ee.name:ee.firstname&&ee.lastname&&(Q=`${ee.firstname} ${ee.lastname}`.trim()))}!Q&&l?.characterName&&(Q=l.characterName),Q&&I(Q)}},[a,z,d,l]);const ue=Q=>{if(V(Q),d){const ee=d.find(ne=>ne.character&&ne.character.characterId?ne.character.characterId==Q:ne.id?ne.id==Q:!1);if(ee){let ne="";ee.character&&ee.character.characterName?ne=ee.character.characterName:ee.name?ne=ee.name:ee.firstname&&ee.lastname&&(ne=`${ee.firstname} ${ee.lastname}`.trim()),ne&&I(ne)}}if(d){const ee=d.find(ne=>ne.character&&ne.character.characterId?ne.character.characterId==Q:ne.id?ne.id==Q:!1);ee&&ee.character&&ee.character.characterId&&u(Q)}},ve=async()=>{if(!a||!o){n("GTAW OAuth authentication is required to submit CCTV requests. Please log in with your GTAW account.","warning");return}if(!_.trim()||!k.trim()||!R.trim()||!O.trim()||!M.trim()||!j.trim()){n("Please fill out all required fields.","warning");return}w(!0);const Q={rank:p,officer:_,officerPH:F,department:k,location:R,description:O,discordUsername:x,oocNotes:A,incidentDateTime:M,requestReason:j,DEBUG:{gtawUser:{id:o.id,username:o.username,isFactionMember:o.isFactionMember},selectedCharacter:z?(()=>{const xe=d?.find(Ze=>Ze.character&&Ze.character.characterId?Ze.character.characterId==z:Ze.id?Ze.id==z:!1);if(xe){if(xe.character&&xe.character.characterId)return{characterId:xe.character.characterId,characterName:xe.character.characterName,rank:xe.character.rank,scriptRank:xe.character.scriptRank,isFactionMember:!0};if(xe.id)return{characterId:xe.id,characterName:xe.name||`${xe.firstname||""} ${xe.lastname||""}`.trim(),isFactionMember:!1}}return null})():null,timestamp:new Date().toISOString(),userAgent:navigator.userAgent,environment:void 0}};en("CCTV Request Submitted",{level:"info",extra:{officer:Q.officer,department:Q.department,location:Q.location,reason:Q.requestReason,submitter:o.username||"Unknown App User"},tags:{webhook_type:"cctv_request",environment:void 0}}),Sd(If,"cctv_request",{officer:Q.officer,department:Q.department,location:Q.location,reason:Q.requestReason,submitter:o.username||"Unknown App User",environment:void 0});const ee="https://discord.com/api/webhooks/1430314470902599680/o_JoPsW9jNgKICL9StKxgORICn3cOzu41FheUsJFsPkRAX-Xt9LKTulXhWCaQsU5Cfxw",ne="https://discord.com/api/webhooks/1389963771082051674/lv0Fg6YGzz64byQDLCikXrxuZT0IT5m38Wo976TRWIZOJZraQbDNTWv0ENfXYSdy-LqY",pe={title:"📹 CCTV Footage Request",color:31743,fields:[{name:"Requesting Officer Rank",value:Q.rank||"N/A",inline:!0},{name:"Requesting Officer",value:Q.officer||"N/A",inline:!0},{name:"Officer Phone Number",value:Q.officerPH||"N/A",inline:!0},{name:"Requesting Department",value:Q.department||"N/A",inline:!0},...Q.discordUsername?[{name:"Discord Username",value:Q.discordUsername,inline:!0}]:[],{name:"Date/Time of Incident",value:Q.incidentDateTime||"N/A",inline:!0},{name:"Reason for Request",value:Q.requestReason||"N/A",inline:!1},{name:"CCTV Location",value:Q.location||"N/A",inline:!1},{name:"Description of Events",value:`

${Q.description||"N/A"}

`,inline:!1},...Q.oocNotes?[{name:"OOC Notes",value:`

${Q.oocNotes}

`,inline:!1}]:[],{name:"Anti Abuse Filtering - Submitted User GTAW UCP Data Output: ",value:`\`\`\`json
${JSON.stringify(Q.DEBUG,null,2)}
\`\`\``,inline:!1}],timestamp:new Date().toISOString(),footer:{text:"PHMC CCTV Bot"}},ge=JSON.stringify({username:"CCTV Bot",avatar_url:"https://i.ibb.co/0pgw9hHm/phmc.png",content:"A new CCTV request has been generated by a Law Enforcement Officer, details enclosed.",embeds:[pe]}),be=[];be.push({name:"Dev",url:ee}),be.push({name:"LEO",url:ne});const Ae=be.map(xe=>fetch(xe.url,{method:"POST",headers:{"Content-Type":"application/json"},body:ge}).then(async Ze=>{if(!Ze.ok){const we=await Ze.text();throw new Error(`Request to ${xe.name} failed with status ${Ze.status}: ${we}`)}return{name:xe.name,status:"fulfilled"}})),Ge=await Promise.allSettled(Ae);let Ke=0;Ge.forEach((xe,Ze)=>{const we=be[Ze].name;xe.status==="fulfilled"?(console.log(`Successfully sent CCTV webhook to ${we}.`),Ke++):(console.error(`Failed to send CCTV webhook to ${we}:`,xe.reason.message),en(`CCTV Webhook to ${we} failed`,{level:"error",extra:{reason:xe.reason.message}}))}),Ke===be.length?(n("CCTV Request sent successfully!","check-circle"),e()):Ke>0?(n("CCTV Request sent, but some destinations failed.","warning"),e()):n("Failed to send CCTV request to any destination.","error"),w(!1)};if(!t)return null;const de=i.jsx("div",{className:"modal-overlay",onClick:e,children:i.jsxs("div",{className:"cctv-modal-dialog",onClick:Q=>Q.stopPropagation(),children:[i.jsxs("div",{className:"cctv-modal-header",children:[i.jsx("h4",{className:"cctv-title",children:"CCTV Request"}),i.jsx("button",{className:"modal-close-btn",onClick:e,"aria-label":"Close modal",children:"×"})]}),i.jsxs("div",{className:"cctv-modal-body",children:[i.jsxs("div",{className:"cctv-danger-text",children:[i.jsx("strong",{children:"⚠️ Important Notice:"})," This form is sent directly to PHMC supervisors to request CCTV Footage. It will be handled within the next 24 hours and you'll be contacted via Cell Phone or Departmental. ",i.jsx("strong",{children:"Abuse of this form will be reported to Legal Faction Management."})]}),i.jsxs("div",{className:`cctv-form-section ${a?"auth-success":"auth-required"}`,children:[i.jsxs("h5",{children:[i.jsx("i",{className:`fas ${a?"fa-shield-alt":"fa-exclamation-triangle"}`}),a?"Authenticated":"Authentication Required"]}),a?i.jsxs("div",{className:"auth-details",children:[i.jsxs("div",{children:[i.jsx("strong",{children:"UCP User:"})," ",o.username]}),d&&d.length>0&&i.jsxs("div",{className:"character-selector",children:[i.jsx("label",{className:"character-label",children:i.jsx("strong",{children:"Select Character:"})}),i.jsx("select",{className:"cctv-form-label required",value:z||l?.characterId||"",onChange:Q=>ue(Q.target.value),disabled:y,children:d.map(Q=>{let ee,ne;if(Q.character&&Q.character.characterId)ee=Q.character.characterId,ne=Q.character.characterName;else if(Q.id)ee=Q.id,ne=Q.name||`${Q.firstname||""} ${Q.lastname||""}`.trim();else return null;return i.jsxs("option",{value:ee,children:[ne," (ID: ",ee,")"]},ee)})})]})]}):i.jsxs("div",{className:"auth-warning",children:[i.jsx("i",{className:"fas fa-info-circle"}),i.jsx("span",{children:"GTAW OAuth authentication is required to submit CCTV requests. Please log in with your GTAW account."}),i.jsxs("button",{className:"cctv-btn cctv-btn-primary auth-login-btn",onClick:f,children:[i.jsx("i",{className:"fas fa-sign-in-alt"})," Login with GTA World"]})]})]}),i.jsx("div",{className:"cctv-warning-text",children:i.jsx("strong",{children:"⚠️ Important Notice: For the purpose of logging and avoiding abuse of this form, UCP Data you have used to submit this request may be reviewed by PHMC Supervisors."})}),i.jsxs("div",{className:"cctv-form-section",children:[i.jsx("h5",{children:"Officer Information"}),i.jsxs("div",{className:"cctv-form-row",children:[i.jsxs("div",{className:"cctv-form-group",children:[i.jsx("label",{className:"cctv-form-label",children:"Requesting Officer Rank"}),i.jsx("input",{type:"text",className:"form-control",value:p,onChange:Q=>S(Q.target.value),placeholder:"e.g., Sergeant I",disabled:y})]}),i.jsxs("div",{className:"cctv-form-group",children:[i.jsx("label",{className:"cctv-form-label required",children:"Requesting Officer"}),i.jsx("input",{type:"text",className:"form-control",value:_,onChange:Q=>I(Q.target.value),placeholder:a?"Auto-filled from selected character":"e.g., John Smith",required:!0,disabled:y,readOnly:a})]}),i.jsxs("div",{className:"cctv-form-group",children:[i.jsx("label",{className:"cctv-form-label",children:"Officer Phone Number"}),i.jsx("input",{type:"text",className:"form-control",value:F,onChange:Q=>P(Q.target.value),placeholder:"(Optional)",disabled:y})]})]}),i.jsxs("div",{className:"cctv-form-row",children:[i.jsxs("div",{className:"cctv-form-group",children:[i.jsx("label",{className:"cctv-form-label required",children:"Requesting Department"}),i.jsx("input",{type:"text",className:"form-control",value:k,onChange:Q=>D(Q.target.value),placeholder:"e.g., LSPD, LSSD",required:!0,disabled:y})]}),i.jsxs("div",{className:"cctv-form-group",children:[i.jsx("label",{className:"cctv-form-label",children:"Discord Username"}),i.jsx("input",{type:"text",className:"form-control",value:x,onChange:Q=>v(Q.target.value),placeholder:"e.g., frosty.js",disabled:y})]})]})]}),i.jsxs("div",{className:"cctv-form-section",children:[i.jsx("h5",{children:"Incident Details"}),i.jsxs("div",{className:"cctv-form-row",children:[i.jsxs("div",{className:"cctv-form-group",children:[i.jsx("label",{className:"cctv-form-label required",children:"Date & Time of Incident"}),i.jsx("input",{type:"text",className:"form-control",value:M,onChange:Q=>B(Q.target.value),placeholder:"e.g., 15/JAN/2024 around 23:00",required:!0,disabled:y})]}),i.jsxs("div",{className:"cctv-form-group",children:[i.jsx("label",{className:"cctv-form-label required",children:"Reason for Request"}),i.jsxs("select",{className:"form-control",value:j,onChange:Q=>G(Q.target.value),required:!0,disabled:y,children:[i.jsx("option",{value:"",children:"Select a reason..."}),i.jsx("option",{value:"Criminal Investigation",children:"Criminal Investigation"}),i.jsx("option",{value:"Internal Affairs Investigation",children:"Internal Affairs Investigation"}),i.jsx("option",{value:"Traffic Incident Review",children:"Traffic Incident Review"}),i.jsx("option",{value:"General Security Review",children:"General Security Review"}),i.jsx("option",{value:"Other",children:"Other (Specify in Description)"})]})]})]}),i.jsx("div",{className:"cctv-form-row",children:i.jsxs("div",{className:"cctv-form-group full-width",children:[i.jsx("label",{className:"cctv-form-label required",children:"CCTV Location"}),i.jsx("input",{type:"text",className:"form-control",value:R,onChange:Q=>$(Q.target.value),placeholder:"e.g., Pillbox Hill Medical Center - Main Entrance",required:!0,disabled:y})]})})]}),i.jsxs("div",{className:"cctv-form-section",children:[i.jsx("h5",{children:"Description & Notes"}),i.jsx("div",{className:"cctv-form-row",children:i.jsxs("div",{className:"cctv-form-group full-width",children:[i.jsx("label",{className:"cctv-form-label required",children:"Requesting Description & OOC Information"}),i.jsx("textarea",{className:"form-control cctv-textarea",value:O,onChange:Q=>E(Q.target.value),placeholder:"Provide a brief description of the events and the timeframe for the footage request.",required:!0,disabled:y})]})}),i.jsx("div",{className:"cctv-form-row",children:i.jsxs("div",{className:"cctv-form-group full-width",children:[i.jsx("label",{className:"cctv-form-label",children:"OOC Notes"}),i.jsx("textarea",{className:"form-control cctv-textarea",value:A,onChange:Q=>C(Q.target.value),placeholder:"(( If you know names (or masked names) involved, as this will help us narrow our search of CCTV Logs (which can be very large) ))",disabled:y})]})})]})]}),i.jsxs("div",{className:"cctv-modal-footer",children:[i.jsx("button",{className:"cctv-btn cctv-btn-secondary",onClick:e,disabled:y,children:"Cancel"}),i.jsxs("button",{className:"cctv-btn cctv-btn-primary",onClick:ve,disabled:y||!a,title:a?"":"GTAW OAuth authentication required",children:[y?i.jsx("div",{className:"cctv-spinner"}):null,"Send CCTV Request"]})]})]})});return _l.createPortal(de,document.getElementById("modal-root"))},Tx=Object.freeze(Object.defineProperty({__proto__:null,default:Xf},Symbol.toStringTag,{value:"Module"})),Rx=async(t,e,n,r)=>{try{const s=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(s.ok)return!0;{const o=await s.text();return console.error(`Failed to send ${n} webhook embed. Status: ${s.status} ${s.statusText}`,o),en(`Discord webhook embed failed for ${n}: ${s.status}`,{level:"error",extra:{statusText:s.statusText,responseBody:o}}),!1}}catch(s){return console.error(`Error sending ${n} webhook embed:`,s),nt(s,{extra:{context:`${n} Webhook Embed Submission Fetch`}}),!1}},kx=({show:t,onHide:e,database:n,showNotification:r})=>{const[s,o]=b.useState([]),[a,l]=b.useState(""),[d,u]=b.useState(""),[g,f]=b.useState(!1),[p,S]=b.useState(""),_=R=>{if(!R)return"";let $=R.trim().replace(/[.#$[\/ \]]+/g,"_");return $=$.replace(/_{2,}/g,"_"),$=$.replace(/^_+|_+$/g,""),$};b.useEffect(()=>{t&&(async()=>{try{const $=me(n,"savedReports"),O=await qe($);O.exists()?o(Object.keys(O.val())):o([])}catch($){console.error("Error fetching users:",$),S("Failed to fetch users.")}})()},[t,n]);const I=R=>R.replace(/[.#$[\/ \]]/g,"_"),F=async(R,$,O)=>{const E="https://discord.com/api/webhooks/1430314470902599680/o_JoPsW9jNgKICL9StKxgORICn3cOzu41FheUsJFsPkRAX-Xt9LKTulXhWCaQsU5Cfxw",y={embeds:[{title:"User Data Migration",description:`Successfully migrated ${O} reports from **${R}** to **${$}**.**This is a test notification.**`,color:65280,timestamp:new Date().toISOString()}]};await Rx(E,y,"User Data Migration",null)},P=async()=>{if(!window.confirm("Are you sure you want to sanitize all usernames? This will clean up spaces and multiple underscores. This is a one-time operation and cannot be undone."))return;const R=me(n,"savedReports");try{const $=await qe(R);if(!$.exists()){r("No saved reports found to sanitize.","info");return}const O=$.val(),E={};let y=0;for(const x in O){const v=_(x);if(x!==v){const A=O[x],C=O[v]||{};for(const M in A)C[M]||(C[M]=A[M]);E[`savedReports/${v}`]=C,E[`savedReports/${x}`]=null,y++}}y>0?(await xr(me(n),E),r(`Successfully sanitized ${y} usernames.`,"success")):r("No usernames found that required sanitization.","info");const w=await qe(R);w.exists()?o(Object.keys(w.val())):o([])}catch($){console.error("Error sanitizing all usernames:",$),r(`Error sanitizing usernames: ${$.message}`,"error")}},k=async()=>{if(!window.confirm("Are you sure you want to migrate all usernames with spaces to use underscores? This is a one-time operation and cannot be undone."))return;const R=me(n,"savedReports");try{const $=await qe(R);if(!$.exists()){r("No saved reports found to migrate.","info");return}const O=$.val(),E={};let y=0;for(const x in O)if(x.includes(" ")){const v=x.replace(/ /g,"_"),A=O[x],C=O[v]||{};for(const M in A)C[M]||(C[M]=A[M]);E[`savedReports/${v}`]=C,E[`savedReports/${x}`]=null,y++}y>0?(await xr(me(n),E),r(`Successfully migrated ${y} usernames.`,"success")):r("No usernames with spaces found to migrate.","info");const w=await qe(R);w.exists()?o(Object.keys(w.val())):o([])}catch($){console.error("Error migrating all usernames:",$),r(`Error migrating usernames: ${$.message}`,"error")}},D=async()=>{if(!a||!d||!g){S("Please select both users and confirm the migration.");return}if(a===d){S("Source and destination users cannot be the same.");return}S("");const R=me(n,`savedReports/${a}`),$=me(n,`savedReports/${d}`),O=new Date().toISOString().replace(/:/g,"-").replace(/\./g,"-"),E=I(d),y=me(n,`migrationBackups/${E}_${O}`);let w=null;try{const x=await qe(R);if(!x.exists()){r("Source user has no data to migrate.","warning");return}const v=await qe($);v.exists()&&(w=v.val(),await It(y,w));const A=x.val(),C=w||{},M=[];let B=0;Object.keys(A).forEach(j=>{C[j]?M.push(j):(C[j]=A[j],B++)}),await It($,C),await Hn(R),M.length>0?r(`Migration complete, but ${M.length} reports were not migrated due to conflicts.`,"warning"):r("User data migrated successfully.","success"),B>0&&await F(a,d,B),e()}catch(x){console.error("Error migrating data:",x),r(`Error migrating data: ${x.message}`,"error"),w&&(await It($,w),r("Migration failed. Destination user's original data has been restored.","info"))}};return i.jsxs(Ct,{show:t,onHide:e,className:"user-management-modal",children:[i.jsx(Ct.Header,{closeButton:!0,children:i.jsx(Ct.Title,{children:"User Management"})}),i.jsxs(Ct.Body,{children:[p&&i.jsx(Nt,{variant:"danger",children:p}),i.jsx("p",{children:"Migrate saved reports from one user to another."}),i.jsxs(he,{children:[i.jsxs(he.Group,{className:"mb-3",children:[i.jsx(he.Label,{children:"Select User to Migrate From"}),i.jsxs(he.Control,{as:"select",value:a,onChange:R=>l(R.target.value),children:[i.jsx("option",{value:"",children:"Select User"}),s.map(R=>i.jsx("option",{value:R,children:R},R))]})]}),i.jsxs(he.Group,{className:"mb-3",children:[i.jsx(he.Label,{children:"Select User to Migrate To"}),i.jsxs(he.Control,{as:"select",value:d,onChange:R=>u(R.target.value),children:[i.jsx("option",{value:"",children:"Select User"}),s.map(R=>i.jsx("option",{value:R,children:R},R))]})]}),i.jsx(he.Group,{className:"mb-3",controlId:"formBasicCheckbox",children:i.jsx(he.Check,{type:"checkbox",label:"I confirm I want to migrate the data.",checked:g,onChange:R=>f(R.target.checked)})})]})]}),i.jsxs(Ct.Footer,{children:[i.jsx(ce,{variant:"secondary",onClick:e,children:"Close"}),i.jsx(ce,{variant:"success",onClick:P,children:"Sanitize All Usernames"}),i.jsx(ce,{variant:"warning",onClick:k,children:"Migrate All Usernames"}),i.jsx(ce,{variant:"primary",onClick:D,disabled:!a||!d||!g,children:"Migrate Data"})]})]})},Fx=({showNotification:t})=>{const[e,n]=b.useState("/agencies"),[r,s]=b.useState(""),[o,a]=b.useState(!1),[l,d]=b.useState(null),u=async()=>{if(!e){t("Please enter a database path.","warning");return}a(!0),d(null);try{const f=me(Ne,e),p=await qe(f);p.exists()?s(JSON.stringify(p.val(),null,2)):(s(""),t("No data at this path.","info"))}catch(f){d(f.message),t(`Error fetching data: ${f.message}`,"error")}finally{a(!1)}},g=async()=>{if(!e){t("Please enter a database path.","warning");return}let f;try{f=JSON.parse(r)}catch{d("Invalid JSON format."),t("Invalid JSON format. Please correct it before saving.","error");return}a(!0),d(null);try{const p=me(Ne,e);await It(p,f),t("Data saved successfully!","check-circle")}catch(p){d(p.message),t(`Error saving data: ${p.message}`,"error")}finally{a(!1)}};return i.jsxs(pn,{children:[i.jsx(pn.Header,{children:"Firebase Realtime Database Editor"}),i.jsxs(pn.Body,{children:[i.jsxs(he.Group,{className:"mb-3",children:[i.jsx(he.Label,{children:"Database Path"}),i.jsx(he.Control,{type:"text",value:e,onChange:f=>n(f.target.value),placeholder:"e.g., /agencies/LSSD"})]}),i.jsx(ce,{onClick:u,disabled:o,className:"me-2",children:o?i.jsx(tt,{as:"span",animation:"border",size:"sm"}):"Fetch Data"}),i.jsx("hr",{}),i.jsxs(he.Group,{className:"mb-3",children:[i.jsx(he.Label,{children:"JSON Data"}),i.jsx(he.Control,{as:"textarea",rows:20,value:r,onChange:f=>s(f.target.value),placeholder:"JSON data will appear here..."})]}),l&&i.jsx(Nt,{variant:"danger",children:l}),i.jsx(ce,{onClick:g,disabled:o,children:o?i.jsx(tt,{as:"span",animation:"border",size:"sm"}):"Save Data"})]})]})},Px=t=>{if(!t)return"";let e=t.trim().replace(/[.#$[\/ \]]+/g,"_");return e=e.replace(/_{2,}/g,"_"),e=e.replace(/^_+|_+$/g,""),e},$x=({currentUser:t})=>{const[e,n]=b.useState([]),[r,s]=b.useState(""),[o,a]=b.useState(0),[l,d]=b.useState([]),[u,g]=b.useState(!1);b.useEffect(()=>{(async()=>{g(!0);const S=ei(),_=me(S,"savedReports"),I=await qe(_);if(I.exists()){const P=Object.keys(I.val()).map(k=>({uid:k,character_name:k.replace(/_/g," ")}));n(P)}g(!1)})()},[]);const f=async()=>{if(!r){console.log("[handleSearch] No employee selected.");return}g(!0),console.log(`[handleSearch] Starting search for: "${r}"`);const p=Px(r);console.log(`[handleSearch] Sanitized name: "${p}"`);const S=ei(),_=me(S,`savedReports/${p}`);console.log(`[handleSearch] Querying Firebase path: ${_.toString()}`);try{const I=await qe(_);if(console.log("[handleSearch] Firebase snapshot received:",I),I.exists()){const F=I.val();console.log("[handleSearch] Reports data:",F);const P=Object.keys(F).length;console.log(`[handleSearch] Found ${P} reports.`),a(P)}else console.log("[handleSearch] No data exists at this path."),a(0)}catch(I){console.error("[handleSearch] Error fetching reports:",I),a(0)}g(!1)};return b.useEffect(()=>{(async()=>{g(!0);const S=ei(),_=me(S,"savedReports"),I=await qe(_);if(I.exists()){const F=I.val(),D=Object.keys(F).map(R=>({name:R.replace(/_/g," "),count:Object.keys(F[R]).length})).sort((R,$)=>$.count-R.count).slice(0,10);d(D)}g(!1)})()},[]),i.jsxs("div",{children:[i.jsxs("div",{className:"card",children:[i.jsx("div",{className:"card-header",children:"User Stats"}),i.jsxs("div",{className:"card-body",children:[i.jsxs("div",{className:"form-group mt-3",children:[i.jsx("label",{children:"Select Employee"}),i.jsxs("select",{className:"form-control",value:r,onChange:p=>s(p.target.value),children:[i.jsx("option",{value:"",children:"Select an employee"}),e.map(p=>i.jsx("option",{value:p.character_name,children:p.character_name},p.uid))]})]}),i.jsx("button",{className:"btn btn-primary mt-3",onClick:f,disabled:u,children:u?"Searching...":"Search Reports"}),o>0&&i.jsxs("p",{className:"mt-3",children:["Total Reports: ",o]})]})]}),i.jsxs("div",{className:"card mt-4",children:[i.jsx("div",{className:"card-header",children:"Top 5 Users by Reports"}),i.jsx("div",{className:"card-body",children:u?i.jsx("p",{children:"Loading..."}):i.jsx("ul",{className:"list-group",children:l.map(p=>i.jsxs("li",{className:"list-group-item d-flex justify-content-between align-items-center",children:[p.name,i.jsx("span",{className:"badge bg-primary rounded-pill",children:p.count})]},p.name))})})]})]})},Dx=({refreshTrigger:t,onRefresh:e})=>{const[n,r]=b.useState([]),[s,o]=b.useState(!1),a=async()=>{o(!0);try{const d=ei(),u=me(d,"webhook_logs"),g=await qe(u);if(g.exists()){const f=g.val(),p=Object.keys(f).map(S=>({id:S,...f[S]})).sort((S,_)=>_.timestamp-S.timestamp);r(p)}else r([])}catch(d){console.error("Error loading webhook logs:",d)}finally{o(!1)}};b.useEffect(()=>{a()},[t]);const l=()=>{a(),e&&e()};return i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"d-flex justify-content-between align-items-center p-3 border-bottom",children:[i.jsxs("h6",{className:"mb-0",children:[i.jsx("i",{className:"fas fa-history me-2"}),"Webhook Activity Logs (",n.length,")"]}),i.jsxs(ce,{variant:"outline-primary",size:"sm",onClick:l,disabled:s,title:"Refresh webhook logs",children:[s?i.jsx(tt,{as:"span",animation:"border",size:"sm"}):i.jsx("i",{className:"fas fa-sync-alt"})," Refresh"]})]}),i.jsx("div",{style:{maxHeight:"500px",overflowY:"auto"},className:"p-3",children:s&&n.length===0?i.jsxs("div",{className:"text-center text-muted py-4",children:[i.jsx(tt,{animation:"border",size:"sm",className:"me-2"}),"Loading webhook logs..."]}):n.length>0?i.jsx(Yo,{children:n.map((d,u)=>i.jsxs(Yo.Item,{eventKey:u.toString(),children:[i.jsx(Yo.Header,{children:i.jsxs("div",{className:"d-flex justify-content-between align-items-center w-100 me-3",children:[i.jsx("span",{children:i.jsx("strong",{children:new Date(d.timestamp).toLocaleString()})}),i.jsx("span",{className:`badge ${d.type==="dev"?"bg-warning":d.type==="coronerAlerts"?"bg-danger":"bg-primary"}`,children:d.type})]})}),i.jsx(Yo.Body,{children:i.jsxs("div",{className:"row",children:[i.jsxs("div",{className:"col-md-6",children:[i.jsx("h6",{children:"Request Details"}),i.jsxs("p",{children:[i.jsx("strong",{children:"Timestamp:"})," ",new Date(d.timestamp).toLocaleString()]}),i.jsxs("p",{children:[i.jsx("strong",{children:"Type:"})," ",d.type]}),d.webhookUrl&&i.jsxs("p",{children:[i.jsx("strong",{children:"Webhook URL:"})," ",i.jsx("small",{className:"text-muted",children:d.webhookUrl})]})]}),i.jsxs("div",{className:"col-md-6",children:[i.jsx("h6",{children:"Payload"}),i.jsx("pre",{style:{fontSize:"12px",maxHeight:"200px",overflow:"auto"},children:JSON.stringify(d.payload,null,2)})]})]})})]},d.id))}):i.jsxs("div",{className:"text-center text-muted py-4",children:[i.jsx("i",{className:"fas fa-inbox fa-2x mb-2"}),i.jsx("p",{children:"No webhook activity yet. Webhook requests will appear here."})]})})]})},Ox=({showNotification:t})=>{const[e,n]=b.useState("idle"),[r,s]=b.useState(null),[o,a]=b.useState(null),[l,d]=b.useState(null),[u,g]=b.useState(null),[f,p]=b.useState(null),[S,_]=b.useState(!1),[I,F]=b.useState("upload"),[P,k]=b.useState(null),D=b.useCallback(M=>new Promise((B,j)=>{const G=new FileReader;G.onload=z=>{try{const V=z.target.result;let ue=JSON.parse(V),ve=!1;if(ue&&typeof ue=="object"&&ue.data&&Array.isArray(ue.data)&&(ve=!0,ue=ue.data),!Array.isArray(ue)){j(new Error('JSON file must contain an array of faction members, or be a UCP export with a "data" property.'));return}const de=[],Q=[];ue.forEach((ee,ne)=>{let pe,ge,be,Ae,Ge,Ke,xe;if(ve){const Ze=ee.id?String(ee.id).match(/\/(\d+)/):null;pe=Ze?Ze[1]:null,ge=ee.firstname&&ee.lastname?`${ee.firstname} ${ee.lastname}`:null,be=ee.rank,Ae=ee.scriptrank,Ge=ee.lastduty,Ke=ee.lastonline,xe=ee.abas}else pe=ee.characterId,ge=ee.characterName,be=ee.rank,Ae=ee.scriptRank,Ge=ee.lastDuty,Ke=ee.lastOnline,xe=ee.activity;if(!pe||!ge||!be||Ae===void 0||Ae===null){Q.push(`Row ${ne+1}: Missing or invalid data - ID: ${pe}, Name: ${ge}, Rank: ${be}, ScriptRank: ${Ae}`);return}de.push({characterId:parseInt(pe),characterName:ge,rank:be,scriptRank:parseInt(Ae),lastDuty:Ge||null,lastOnline:Ke||null,activity:xe||null,lineNumber:ne+1})}),B({totalRows:ue.length,validRows:de.length,errors:Q,data:de,fileName:M.name,fileSize:M.size,uploadTime:new Date().toISOString()})}catch(V){j(new Error(`Failed to parse JSON: ${V.message}`))}},G.onerror=()=>j(new Error("Failed to read file")),G.readAsText(M)}),[]),R=b.useCallback(M=>new Promise((B,j)=>{const G=new FileReader;G.onload=z=>{try{const ue=z.target.result.split(`
`).filter(be=>be.trim());if(ue.length<2){j(new Error("CSV file must contain at least a header and one data row"));return}const ve=ue[0].split(",").map(be=>be.replace(/"/g,"").trim());console.log("[CSV Parser] Header:",ve);const de=1,Q=2,ee=3,ne=4,pe=[],ge=[];for(let be=1;be<ue.length;be++){const Ae=ue[be];if(!Ae.trim())continue;const Ge=[];let Ke="",xe=!1;for(let Re=0;Re<Ae.length;Re++){const le=Ae[Re];le==='"'?xe=!xe:le===","&&!xe?(Ge.push(Ke.trim()),Ke=""):Ke+=le}Ge.push(Ke.trim());const Ze=Ge[de]?.replace(/"/g,"").trim(),we=Ge[Q]?.replace(/"/g,"").trim(),et=Ge[ee]?.replace(/"/g,"").trim(),yt=Ge[ne]?.replace(/"/g,"").trim(),re=parseInt(yt);if(!Ze||!we||!et||isNaN(re)){ge.push(`Line ${be+1}: Missing or invalid data - ID: ${Ze}, Name: ${we}, Rank: ${et}, ScriptRank: ${yt}`);continue}pe.push({characterId:parseInt(Ze),characterName:we,rank:et,scriptRank:re,lastDuty:Ge[5]?.replace(/"/g,"").trim()||null,lastOnline:Ge[6]?.replace(/"/g,"").trim()||null,activity:Ge[7]?.replace(/"/g,"").trim()||null,lineNumber:be+1})}B({totalRows:ue.length-1,validRows:pe.length,errors:ge,data:pe,fileName:M.name,fileSize:M.size,uploadTime:new Date().toISOString()})}catch(V){j(new Error(`Failed to parse CSV: ${V.message}`))}},G.onerror=()=>j(new Error("Failed to read file")),G.readAsText(M)}),[]),$=b.useCallback(async()=>{_(!0),g(null);try{const B=me(Ne,"factions/364"),j=await qe(B);if(j.exists()){const G=j.val(),z=G.members||{},V=G.metadata||{};if(Object.keys(z).length===0){p([]),k(V.lastUpdated?{uploadTime:V.lastUpdated,uploadedBy:V.uploadedBy,fileName:V.fileName,statistics:V.statistics}:null),t&&t("No faction members found in database","warning");return}const ue=Object.entries(z).map(([ve,de])=>({characterId:parseInt(ve),...de}));ue.sort((ve,de)=>de.scriptRank!==ve.scriptRank?de.scriptRank-ve.scriptRank:ve.characterName.localeCompare(de.characterName)),p(ue),k({uploadTime:V.lastUpdated,uploadedBy:V.uploadedBy,fileName:V.fileName,statistics:V.statistics}),t&&t(`Loaded ${ue.length} faction members from database`,"success")}else p([]),k(null),t&&t("No faction data found in database","info")}catch(M){console.error("[Faction Data] Error loading stored data:",M),g(`Failed to load stored data: ${M.message}`),p(null),t&&t(`Failed to load stored data: ${M.message}`,"error")}finally{_(!1)}},[t]);b.useEffect(()=>{if(!S)if(I==="stored")(f===null||u&&f===null)&&(console.log("[Faction Data] Loading stored data due to tab switch to stored"),$());else{const M=async()=>{try{const j=(await qe(me(Ne,"factions/364/metadata"))).val();j&&j.statistics&&j.statistics.validRecords?p(new Array(j.statistics.validRecords)):p([])}catch(B){console.error("[Faction Data] Error loading count:",B),p([])}};f===null&&(console.log("[Faction Data] Loading count metadata for non-stored tab"),M())}},[I,$]),b.useEffect(()=>{if(I==="stored"&&f===null&&!S)console.log("[Faction Data] Initial load for stored tab"),$();else if(I!=="stored"&&f===null&&!S){const M=async()=>{try{const j=(await qe(me(Ne,"factions/364/metadata"))).val();j&&j.statistics&&j.statistics.validRecords?p(new Array(j.statistics.validRecords)):p([])}catch(B){console.error("[Faction Data] Error loading initial count:",B),p([])}};console.log("[Faction Data] Initial count load for upload tab"),M()}},[]);const O=b.useCallback(async M=>{const B=M[0];if(B){n("uploading"),g(null),s(B);try{let j;const G=B.type==="application/json"||B.name.toLowerCase().endsWith(".json");G?(console.log("[Faction Upload] Processing JSON file:",B.name),j=await D(B)):(console.log("[Faction Upload] Processing CSV file:",B.name),j=await R(B)),console.log("[Faction Upload] Parsed data:",{totalRows:j.totalRows,validRows:j.validRows,errorCount:j.errors.length}),a(j),n("preview");const z=G?"JSON":"CSV";j.errors.length>0?t&&t(`${z} parsed with ${j.errors.length} errors. Please review before uploading.`,"warning"):t&&t(`Successfully parsed ${j.validRows} faction members from ${z}`,"success")}catch(j){console.error("[Faction Upload] Parse error:",j),g(j.message),n("error"),t&&t(`Failed to parse file: ${j.message}`,"error")}}},[R,D,t]),{getRootProps:E,getInputProps:y,isDragActive:w}=Cg({onDrop:O,accept:{"text/csv":[".csv"],"application/vnd.ms-excel":[".csv"],"application/json":[".json"]},multiple:!1,disabled:e==="uploading"}),x=async()=>{if(o){n("uploading"),g(null);try{console.log("[Faction Upload] Uploading to Firebase...");try{t&&t("Clearing previous faction member records…","info"),await It(me(Ne,"factions/364/members"),null),console.log("[Faction Upload] Cleared existing factions/364/members")}catch(j){console.warn("[Faction Upload] Failed to clear existing members before upload:",j),t&&t("Warning: Could not clear previous records. Proceeding with upload.","warning")}const B=await rs(Er,"uploadFactionData")({factionData:o.data,metadata:{fileName:o.fileName,totalRows:o.totalRows,validRows:o.validRows,uploadTime:o.uploadTime,factionId:364}});console.log("[Faction Upload] Upload result:",B.data),d(B.data),n("success"),t&&t(`Successfully uploaded ${o.validRows} faction members to database`,"success")}catch(M){console.error("[Faction Upload] Upload error:",M),nt(M,{extra:{context:"Faction Data Upload"}}),g(M.message),n("error"),t&&t(`Upload failed: ${M.message}`,"error")}}},v=()=>{n("idle"),s(null),a(null),d(null),g(null)},A=()=>i.jsxs("div",{...E(),className:`border-2 border-dashed p-4 text-center cursor-pointer transition-colors ${w?"border-primary bg-light":"border-secondary"} ${e==="uploading"?"opacity-50":""}`,style:{minHeight:"150px",display:"flex",alignItems:"center",justifyContent:"center"},children:[i.jsx("input",{...y()}),i.jsx("div",{children:e==="uploading"?i.jsxs(i.Fragment,{children:[i.jsx(tt,{animation:"border",className:"mb-3"}),i.jsx("p",{className:"mb-0",children:"Processing file..."})]}):i.jsxs(i.Fragment,{children:[i.jsx("i",{className:"fas fa-cloud-upload-alt fa-3x text-muted mb-3"}),i.jsx("p",{className:"mb-2",children:w?"Drop the file here":"Drag & drop faction CSV or JSON file here, or click to select"}),i.jsx("p",{className:"text-muted small mb-0",children:"Supports CSV files from GTA World UCP or a custom JSON array."})]})})]}),C=()=>i.jsxs("div",{className:"mt-4",children:[i.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-3",children:[i.jsx("h5",{children:"Data Preview"}),i.jsxs("div",{className:"d-flex gap-2",children:[i.jsx(ce,{variant:"outline-secondary",size:"sm",onClick:v,children:"Upload Different File"}),i.jsxs(ce,{variant:"success",size:"sm",onClick:x,disabled:o?.errors?.length>0,children:[i.jsx("i",{className:"fas fa-upload me-2"}),"Upload to Database"]})]})]}),i.jsxs("div",{className:"row mb-3",children:[i.jsx("div",{className:"col-md-3",children:i.jsx(pn,{className:"text-center",children:i.jsxs(pn.Body,{children:[i.jsx("h4",{className:"text-primary",children:o?.validRows||0}),i.jsx("small",{className:"text-muted",children:"Valid Records"})]})})}),i.jsx("div",{className:"col-md-3",children:i.jsx(pn,{className:"text-center",children:i.jsxs(pn.Body,{children:[i.jsx("h4",{className:"text-danger",children:o?.errors?.length||0}),i.jsx("small",{className:"text-muted",children:"Errors"})]})})}),i.jsx("div",{className:"col-md-3",children:i.jsx(pn,{className:"text-center",children:i.jsxs(pn.Body,{children:[i.jsx("h4",{className:"text-info",children:Math.max(...o?.data?.map(M=>M.scriptRank)||[0])}),i.jsx("small",{className:"text-muted",children:"Highest Rank"})]})})}),i.jsx("div",{className:"col-md-3",children:i.jsx(pn,{className:"text-center",children:i.jsxs(pn.Body,{children:[i.jsx("h4",{className:"text-success",children:o?.fileName}),i.jsx("small",{className:"text-muted",children:"File Name"})]})})})]}),o?.errors?.length>0&&i.jsxs(Nt,{variant:"warning",children:[i.jsx(Nt.Heading,{children:"Data Parsing Errors"}),i.jsxs("ul",{className:"mb-0",children:[o.errors.slice(0,10).map((M,B)=>i.jsx("li",{children:M},B)),o.errors.length>10&&i.jsx("li",{children:i.jsxs("em",{children:["...and ",o.errors.length-10," more errors"]})})]})]}),i.jsxs(ta,{striped:!0,bordered:!0,hover:!0,responsive:!0,size:"sm",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"Character ID"}),i.jsx("th",{children:"Character Name"}),i.jsx("th",{children:"Rank"}),i.jsx("th",{children:"Script Rank"}),i.jsx("th",{children:"Last Online"}),i.jsx("th",{children:"Activity"})]})}),i.jsx("tbody",{children:o?.data?.slice(0,20).map((M,B)=>i.jsxs("tr",{children:[i.jsx("td",{children:M.characterId}),i.jsx("td",{children:M.characterName}),i.jsx("td",{children:M.rank}),i.jsx("td",{children:i.jsx(yr,{bg:M.scriptRank>=13?"danger":M.scriptRank>=10?"warning":M.scriptRank>=7?"info":"secondary",children:M.scriptRank})}),i.jsx("td",{className:"small",children:M.lastOnline}),i.jsx("td",{className:"small",children:M.activity})]},B))})]}),o?.data?.length>20&&i.jsxs("p",{className:"text-muted text-center",children:["Showing first 20 of ",o.data.length," records"]})]});return i.jsxs(pn,{className:"mb-4",children:[i.jsx(pn.Header,{children:i.jsxs("h5",{className:"mb-0",children:[i.jsx("i",{className:"fas fa-users me-2"}),"Faction Data Management"]})}),i.jsx(pn.Body,{children:i.jsxs(yg,{activeKey:I,onSelect:M=>F(M),className:"mb-3",children:[i.jsxs(Md,{eventKey:"upload",title:i.jsxs("span",{children:[i.jsx("i",{className:"fas fa-upload me-2"}),"Upload File"]}),children:["Hello! Please grab a copy of the faction CSV from the GTAWorld UCP and upload it here to manage faction data. ",i.jsx("a",{href:"https://ucp.gta.world/view/faction/364/populate?draw=2&columns%5B0%5D%5Bdata%5D=actions&columns%5B0%5D%5Bname%5D=actions&columns%5B0%5D%5Bsearchable%5D=true&columns%5B0%5D%5Borderable%5D=true&columns%5B0%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B0%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B1%5D%5Bdata%5D=id&columns%5B1%5D%5Bname%5D=characters.id&columns%5B1%5D%5Bsearchable%5D=true&columns%5B1%5D%5Borderable%5D=true&columns%5B1%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B1%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B2%5D%5Bdata%5D=name&columns%5B2%5D%5Bname%5D=name&columns%5B2%5D%5Bsearchable%5D=true&columns%5B2%5D%5Borderable%5D=true&columns%5B2%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B2%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B3%5D%5Bdata%5D=rank&columns%5B3%5D%5Bname%5D=rank&columns%5B3%5D%5Bsearchable%5D=true&columns%5B3%5D%5Borderable%5D=true&columns%5B3%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B3%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B4%5D%5Bdata%5D=scriptrank&columns%5B4%5D%5Bname%5D=scriptrank&columns%5B4%5D%5Bsearchable%5D=true&columns%5B4%5D%5Borderable%5D=true&columns%5B4%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B4%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B5%5D%5Bdata%5D=lastduty&columns%5B5%5D%5Bname%5D=lastduty&columns%5B5%5D%5Bsearchable%5D=true&columns%5B5%5D%5Borderable%5D=true&columns%5B5%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B5%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B6%5D%5Bdata%5D=lastonline&columns%5B6%5D%5Bname%5D=lastonline&columns%5B6%5D%5Bsearchable%5D=true&columns%5B6%5D%5Borderable%5D=true&columns%5B6%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B6%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B7%5D%5Bdata%5D=abas&columns%5B7%5D%5Bname%5D=abas&columns%5B7%5D%5Bsearchable%5D=true&columns%5B7%5D%5Borderable%5D=true&columns%5B7%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B7%5D%5Bsearch%5D%5Bregex%5D=false&order%5B0%5D%5Bcolumn%5D=3&order%5B0%5D%5Bdir%5D=desc&start=0&length=500&search%5Bvalue%5D=&search%5Bregex%5D=false&type=members&filters=&searchTerm=&_=1762736428879",children:"Expand by 'all' and then get CSV."})," Alternatively, you can upload a JSON file with an array of member objects.",I==="upload"&&i.jsxs(i.Fragment,{children:[e==="idle"&&A(),e==="uploading"&&A(),e==="preview"&&C(),e==="success"&&i.jsxs(Nt,{variant:"success",children:[i.jsx(Nt.Heading,{children:"Upload Successful!"}),i.jsx("p",{children:"Faction data has been successfully uploaded to the database."}),i.jsx("hr",{}),i.jsxs("div",{className:"d-flex justify-content-between",children:[i.jsx(ce,{variant:"outline-success",onClick:v,children:"Upload Another File"}),i.jsx(ce,{variant:"primary",onClick:()=>F("stored"),children:"View Stored Data"})]})]}),u&&i.jsxs(Nt,{variant:"danger",children:[i.jsx(Nt.Heading,{children:"Upload Error"}),i.jsx("p",{children:u}),i.jsx("hr",{}),i.jsx(ce,{variant:"outline-danger",onClick:v,children:"Try Again"})]})]})]}),i.jsx(Md,{eventKey:"stored",title:i.jsxs("span",{children:[i.jsx("i",{className:"fas fa-database me-2"}),"Stored Data (",f?.length||0,")"]}),children:I==="stored"&&i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-3",children:[i.jsxs("div",{children:[i.jsx("h6",{className:"mb-1",children:"Current Faction Database - Hit 'Refresh' to get the latest data"}),P&&P.uploadTime&&i.jsxs("small",{className:"text-muted",children:["Last updated: ",new Date(P.uploadTime).toLocaleString(),P.uploadedBy&&` by ${P.uploadedBy}`,P.fileName&&` (${P.fileName})`,P.statistics&&i.jsxs(i.Fragment,{children:[" • ",P.statistics.validRecords," members"]})]})]}),i.jsx(ce,{variant:"outline-primary",size:"sm",onClick:$,disabled:S,children:S?i.jsxs(i.Fragment,{children:[i.jsx(tt,{animation:"border",size:"sm",className:"me-2"}),"Loading..."]}):i.jsxs(i.Fragment,{children:[i.jsx("i",{className:"fas fa-refresh me-2"}),"Refresh"]})})]}),S&&!f&&i.jsxs("div",{className:"text-center py-4",children:[i.jsx(tt,{animation:"border"}),i.jsx("p",{className:"mt-2",children:"Loading stored faction data..."})]}),f&&f.length>0&&i.jsxs(i.Fragment,{children:[(()=>{const M=f.filter(j=>parseFloat(j.activity||"0")<.25),B=f.filter(j=>parseFloat(j.activity||"0")>=.25);return i.jsxs(i.Fragment,{children:[i.jsx(Nt,{variant:"info",children:i.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[i.jsxs("div",{children:[i.jsxs("strong",{children:[f.length," faction members"]})," currently stored in database.",i.jsx("br",{}),i.jsx("small",{children:"Data is used for authentication and permission management throughout the system."})]}),i.jsxs("div",{className:"text-end",children:[i.jsxs(yr,{bg:"success",className:"me-2",children:["Active: ",B.length]}),M.length>0&&i.jsxs(yr,{bg:"warning",children:["Inactive: ",M.length]})]})]})}),(()=>{const j=M.filter(G=>G.scriptRank>=14);return j.length>0?i.jsxs(Nt,{variant:"danger",className:"mb-3",children:[i.jsxs(Nt.Heading,{children:[i.jsx("i",{className:"fas fa-crown me-2"}),"High-Priority Admin Alert"]}),i.jsxs("p",{className:"mb-2",children:[i.jsxs("strong",{children:[j.length," high-ranking administrator(s)"]})," (Rank 14+) are inactive and require immediate attention:"]}),i.jsx("ul",{className:"mb-2",children:j.map(G=>i.jsxs("li",{children:[i.jsx("strong",{children:G.characterName})," -",G.scriptRank>=15?" Hospital President":" Executive Leadership","(Rank ",G.scriptRank,", ABAS: ",parseFloat(G.activity||"0").toFixed(2),")"]},G.characterId))}),i.jsxs("small",{className:"text-muted",children:[i.jsx("i",{className:"fas fa-info-circle me-1"}),"High-ranking inactive administrators may impact department operations and require priority intervention."]})]}):null})(),M.length>0&&i.jsxs(Nt,{variant:"warning",className:"mb-3",children:[i.jsxs(Nt.Heading,{children:[i.jsx("i",{className:"fas fa-exclamation-triangle me-2"}),"Inactivity Warning"]}),i.jsxs("p",{className:"mb-2",children:[i.jsxs("strong",{children:[M.length," members"]})," have an ABAS below 0.25 and are considered inactive."]}),i.jsxs("details",{children:[i.jsxs("summary",{className:"fw-bold",style:{cursor:"pointer"},children:["View Inactive Members (",M.length,")"]}),i.jsxs(ta,{striped:!0,size:"sm",className:"mt-2 mb-0",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"Character Name"}),i.jsx("th",{children:"Rank"}),i.jsx("th",{children:"Script Rank"}),i.jsx("th",{children:"ABAS"}),i.jsx("th",{children:"Status"})]})}),i.jsx("tbody",{children:M.sort((j,G)=>parseFloat(j.activity||"0")-parseFloat(G.activity||"0")).map(j=>{const G=parseFloat(j.activity||"0");let z="danger",V="Critical";return j.scriptRank>=15?(z="danger",V=G>=.15?"Presidential Alert":G>=.05?"Presidential Critical":"Presidential Emergency"):j.scriptRank>=14?(z="warning",V=G>=.15?"Executive Alert":G>=.05?"Executive Critical":"Executive Emergency"):G>=.15?(z="warning",V="At Risk"):G>=.05?(z="danger",V="Inactive"):(z="dark",V="Very Inactive"),i.jsxs("tr",{className:"table-warning",children:[i.jsx("td",{children:i.jsx("strong",{children:j.characterName})}),i.jsx("td",{children:j.rank}),i.jsx("td",{children:i.jsx(yr,{bg:"secondary",children:j.scriptRank})}),i.jsx("td",{children:i.jsx(yr,{bg:G===0?"dark":"warning",children:G.toFixed(2)})}),i.jsx("td",{children:i.jsx(yr,{bg:z,children:V})})]},j.characterId)})})]})]})]})]})})(),i.jsxs(ta,{striped:!0,bordered:!0,hover:!0,responsive:!0,children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"#"}),i.jsx("th",{children:"Character Name"}),i.jsx("th",{children:"Rank"}),i.jsx("th",{children:"Script Rank"}),i.jsx("th",{children:"ABAS"}),i.jsx("th",{children:"Access Level"}),i.jsx("th",{children:"Permissions"})]})}),i.jsx("tbody",{children:f.map((M,B)=>{const j=parseFloat(M.activity||"0");let G="Member",z="secondary",V=[];M.scriptRank>=15?(G="Leadership",z="danger",V=["All Permissions","Executive Control","Strategic Oversight"]):M.scriptRank>=14?(G="Leadership",z="warning",V=["Admin","Department Management","All Reports","Webhooks","Faction Upload"]):M.scriptRank>=13?(G="Senior Management",z="info",V=["Limited Admin","Department Reports","Audit Logs"]):M.scriptRank>=12?(G="Middle Management",z="primary",V=["Limited Admin","Own Reports","View Members"]):M.scriptRank>=11?(G="Supervisor",z="info",V=["Admin","Webhooks","Faction Upload"]):M.scriptRank>=10?(G="Attending",z="primary",V=["Admin","Faction Upload"]):M.scriptRank>=9?(G="Resident",z="success",V=["Basic Access"]):M.scriptRank>=8?(G="Upper Level",z="success",V=["Basic Access"]):M.scriptRank>=7?(G="Mid Level",z="secondary",V=["Basic Access"]):M.scriptRank>=6?(G="Administration",z="secondary",V=["Basic Access"]):M.scriptRank>=5&&(G="Entry Level",z="light",V=["Basic Access"]);let ue="success",ve=!1;return j<.25?(ue="danger",ve=!0):j<.35?ue="warning":j<.5&&(ue="info"),i.jsxs("tr",{className:ve?"table-danger":"",children:[i.jsx("td",{children:M.characterId}),i.jsxs("td",{children:[i.jsx("strong",{children:M.characterName}),ve&&i.jsx("i",{className:"fas fa-exclamation-triangle text-danger ms-2",title:"Inactive member (ABAS < 0.25)"})]}),i.jsx("td",{children:M.rank}),i.jsx("td",{children:i.jsx(yr,{bg:z,children:M.scriptRank})}),i.jsx("td",{children:i.jsxs(yr,{bg:ue,title:ve?"Inactive - ABAS below 0.25 threshold":`Active - ABAS ${j.toFixed(2)}`,children:[j.toFixed(2),ve&&" (INACTIVE)"]})}),i.jsx("td",{children:i.jsx(yr,{bg:z,children:G})}),i.jsx("td",{children:i.jsx("small",{className:"text-muted",children:V.join(", ")})})]},M.characterId)})})]})]}),f&&f.length===0&&i.jsxs(Nt,{variant:"warning",children:[i.jsx(Nt.Heading,{children:"No Faction Data"}),i.jsx("p",{children:"No faction member data is currently stored in the database."}),i.jsx("hr",{}),i.jsx(ce,{variant:"primary",onClick:()=>F("upload"),children:"Upload CSV Data"})]}),u&&i.jsxs(Nt,{variant:"danger",children:[i.jsx(Nt.Heading,{children:"Database Error"}),i.jsx("p",{children:u}),i.jsx("hr",{}),i.jsx(ce,{variant:"outline-danger",onClick:$,children:"Retry Loading"})]})]})})]})})]})},Mx=()=>{const[t,e]=b.useState(null),[n,r]=b.useState([]),[s,o]=b.useState("none"),[a,l]=b.useState(!1),[d,u]=b.useState(null),g=b.useCallback(()=>{try{const k=_s();k&&k.faction?(e(k.faction),r(k.permissions||[]),o(k.accessLevel||"none")):(e(null),r([]),o("none")),u(null)}catch(k){console.error("[Faction Hook] Error loading faction data:",k),u(k.message),e(null),r([]),o("none")}},[]);b.useEffect(()=>{g()},[g]);const f=b.useCallback(async()=>{l(!0),u(null);try{await Wf(),g()}catch(k){console.error("[Faction Hook] Refresh failed:",k),u(k.message)}finally{l(!1)}},[g]),p=b.useCallback(k=>{try{return L0(k)}catch(D){return console.warn("[Faction Hook] Permission check failed:",D),!1}},[]),S=b.useCallback(k=>{try{return U0(k)}catch(D){return console.warn("[Faction Hook] Feature access check failed:",D),!1}},[]);let _=!1,I=null,F="none",P=[];try{_=Gf(),I=B0(),F=H0(),P=G0()}catch(k){console.warn("[Faction Hook] Error getting faction status:",k)}return{factionData:t,factionInfo:I,isMember:_,permissions:P,accessLevel:F,hasPermission:p,canAccessFeature:S,isLoading:a,error:d,refresh:f,canAccessAdmin:S("admin_panel"),canUploadFactionData:S("faction_upload"),canAccessDatabase:S("database_editor"),canManageWebhooks:S("webhook_management"),canViewAllReports:S("all_reports"),canViewDepartmentReports:S("department_reports"),canViewOwnReports:S("own_reports"),canCreateReports:S("create_reports"),canViewMembers:S("view_members"),canAccessAuditLogs:S("audit_logs"),isLeadership:F==="Leadership",isSeniorManagement:F==="Senior Management",isMiddleManagement:F==="Middle Management",isSupervisor:F==="Supervisor",isAttending:F==="Attending",isResident:F==="Resident",isUpperLevel:F==="Upper Level",isMidLevel:F==="Mid Level",isAdministration:F==="Administration",isEntryLevel:F==="Entry Level",isPresident:F==="Leadership",isExecutive:F==="Leadership",isChief:F==="Senior Management",isDeputyChief:F==="Middle Management",isManager:F==="Supervisor",isSeniorStaff:F==="Attending",isRegularStaff:F==="Mid Level",isTrainee:F==="Entry Level"}},jx=async()=>{console.info("[Firebase Test] Starting connectivity test...");try{const t=j0();if(!t.valid)return{success:!1,error:"Configuration validation failed",details:t.issues};console.info("[Firebase Test] Functions instance created:",{app:!!Er.app,region:"us-central1 (configured)",customDomain:Er._delegate?._url?.includes("cloudfunctions.net"),functionsUrl:Er._delegate?._url||"unknown"});const e=rs(Er,"exchangeAuthCodeForToken");console.info("[Firebase Test] Function callable created");try{await e({code:"test",redirectUri:"test",clientId:"test"})}catch(n){return console.info("[Firebase Test] Expected error received:",{code:n.code,message:n.message?.substring(0,100)+"..."}),n.code==="invalid-argument"||n.code==="functions/invalid-argument"||n.message?.includes("invalid-argument")?{success:!0,message:"Firebase Functions connectivity confirmed",functionReachable:!0,expectedError:n.code}:n.code==="functions/internal"||n.code==="internal"?{success:!1,error:"Firebase Function internal error",details:{code:n.code,message:n.message,suggestion:"Check Firebase Functions deployment and logs"}}:n.code==="functions/not-found"?{success:!1,error:"Firebase Function not found",details:{code:n.code,suggestion:"Deploy the exchangeAuthCodeForToken function"}}:{success:!1,error:"Unexpected error during connectivity test",details:{code:n.code,message:n.message}}}return{success:!1,error:"Unexpected success during test call",details:"Expected a validation error but got success"}}catch(t){return console.error("[Firebase Test] Connectivity test failed:",t),{success:!1,error:"Failed to initialize Firebase Functions",details:{message:t.message,code:t.code,stack:t.stack?.split(`
`).slice(0,3)}}}},Lx=async()=>{console.info("[Profile Test] Starting profile retrieval test...");try{const t=sessionStorage.getItem("gta-access-token"),e=sessionStorage.getItem("gta-user-data"),n=e?JSON.parse(e):null;if(console.info("[Profile Test] Session check:",{hasToken:!!t,tokenPrefix:t?`${t.substring(0,10)}...`:"none",hasUser:!!n,username:n?.username||"unknown",userId:n?.id||"unknown"}),!t){const r=sessionStorage.getItem("gta-access-token"),s=sessionStorage.getItem("gtaworld-access-token");return{success:!1,error:"No authenticated session found",details:"User must be logged in to test profile retrieval",suggestion:"Complete OAuth login first",debugInfo:{properStorageKey:!!r,legacyStorageKey:!!s,allSessionKeys:Object.keys(sessionStorage)}}}console.info("[Profile Test] Found access token, testing profile API...");try{console.info("[Profile Test] Using Firebase Function to get live API data...");const{httpsCallable:r}=require("firebase/functions"),{functions:s}=require("../firebase"),a=await r(s,"getGtaWorldProfile")({accessToken:t});if(console.info("[Profile Test] Firebase Function result:",a.data),!a.data.success)throw new Error(`Profile retrieval failed: ${a.data.error||"Unknown error"}`);const l={message:"Live API data from GTA World /api/user endpoint",liveApiData:a.data.userData,storedSessionData:n,comparison:{liveApiKeys:a.data.metadata.dataKeys,storedDataKeys:n?Object.keys(n):[],dataSize:a.data.metadata.dataSize,timestamp:a.data.metadata.timestamp},analysis:{hasFactionsData:!!(a.data.userData?.user?.factions||a.data.userData?.factions),hasRoleData:!!(a.data.userData?.user?.role||a.data.userData?.role),hasCharacterData:!!(a.data.userData?.user?.character||a.data.userData?.character),userStructure:a.data.userData?.user?Object.keys(a.data.userData.user):"No user object found"}};return{success:!0,message:"Profile retrieval successful",rawProfileData:l,dataStructure:{keys:Object.keys(l||{}),hasUsername:!!(l?.username||l?.name),hasId:!!(l?.id||l?.user_id||l?.uid),dataType:typeof l,isArray:Array.isArray(l),dataSize:JSON.stringify(l||{}).length},currentSession:{storedUser:n,tokenPresent:!!t}}}catch(r){return console.error("[Profile Test] API call failed:",r),{success:!1,error:"Profile API call failed",details:{message:r.message,code:r.code,suggestion:"Check if access token is valid and API endpoint is correct"}}}}catch(t){return console.error("[Profile Test] Profile test failed:",t),{success:!1,error:"Profile retrieval test failed",details:t.message}}},Ux=()=>{console.group("[OAuth Environment Info]"),console.info("Environment Variables:",{hasClientId:!0,clientIdPrefix:"82".substring(0,8)+"...",nodeEnv:void 0,publicUrl:void 0}),console.info("Firebase Config:",{hasApiKey:!0,authDomain:"gtaw-forms.firebaseapp.com",projectId:"gtaw-forms"}),console.info("Browser Environment:",{origin:window.location.origin,hostname:window.location.hostname,protocol:window.location.protocol,userAgent:navigator.userAgent}),console.groupEnd()},Qf=(t,e,n)=>{const r=async(d,u)=>{const f=me(Ne,"webhook_logs"),p=Aa(f);await It(p,{type:d,payload:u,timestamp:Date.now()})},s=async(d="normal")=>{const u="https://discord.com/api/webhooks/1430314470902599680/o_JoPsW9jNgKICL9StKxgORICn3cOzu41FheUsJFsPkRAX-Xt9LKTulXhWCaQsU5Cfxw",g=t.coronerEmployee||t.phmcEmployee||t.patientName||t.decedentName||"Someone";let f="🎉 Easter Egg Found! 🎉",p=`Hey! **${g}** just found the normal easter egg! 🥚`,S=7506394,_="Triggered during report save";d==="rare"&&(f="✨ Rare Easter Egg Found! ✨",p=`Wow! **${g}** just triggered the 1% rare easter egg! 🥚🎉`,S=16766720),window.location.hostname==="localhost"&&d==="rare"&&(f+=" (Manual Trigger)",p=`Debug: **${g}** just triggered the rare easter egg manually! 🥚🎉`,_="Triggered via Debug Button");const F={title:f,description:p,color:S,timestamp:new Date().toISOString(),footer:{text:`PHMC Tools Tool | ${_}`}};try{const P=await fetch(u,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({embeds:[F]})});P.ok?(console.log(`${d} easter egg notification sent successfully.`),await r(d,{embeds:[F]})):console.error(`Error sending ${d} easter egg webhook: ${P.status} ${P.statusText}`)}catch(P){console.error(`Failed to send ${d} easter egg webhook:`,P),nt(P,{extra:{context:`sendEasterEggNotification (${d})`}})}},o=async(d,u,g,f,p)=>{if(!d)return console.error(`Discord webhook URL not configured for ${f}.`),en(`Discord webhook URL is missing for ${f} submission.`,"error"),p("Configuration error: Unable to send message.","exclamation-triangle"),!1;try{const S=await fetch(d,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(u)});if(S.ok)return p(g,"check-circle"),!0;{const _=await S.text();return console.error(`Failed to send ${f} webhook embed. Status: ${S.status} ${S.statusText}`,_),en(`Discord webhook embed failed for ${f}: ${S.status}`,{level:"error",extra:{statusText:S.statusText,responseBody:_}}),p(`Failed to send embed to ${f}. Status: ${S.status}`,"exclamation-triangle"),!1}}catch(S){return console.error(`Error sending ${f} webhook embed:`,S),nt(S,{extra:{context:`${f} Webhook Embed Submission Fetch`}}),p(`A network error occurred sending to ${f}. Please try again.`,"exclamation-triangle"),!1}};return{logWebhookToFirebase:r,sendEasterEggNotification:s,handlePhmcWebhookSubmit:async d=>{if(!d)return;await o("https://discord.com/api/webhooks/1384933696330534952/lmq9IrXtH_t3-KKXOi_D4R2Bii5yrVjx-swSaZd9Hh18QGD5bZQb6VcxfcGSVtH3IQXI",d,"PHMC webhook embed sent successfully!","PHMC",n)},handleWebhookSubmit:async d=>{if(!d)return;await o("https://discord.com/api/webhooks/1430314470902599680/o_JoPsW9jNgKICL9StKxgORICn3cOzu41FheUsJFsPkRAX-Xt9LKTulXhWCaQsU5Cfxw",d,"Dev webhook embed sent successfully!","Dev",n)}}},Zf=(t,e)=>{const[n,r]=b.useState(!1);return{isUploading:n,handleImageUpload:async(o,a)=>{r(!0);let l=[];try{const d="bc8a1a6273ac8d229eef458de4a31d2d";let u=[];typeof o=="string"?u.push(o):o.target&&o.target.files?u=Array.from(o.target.files):u.push(o);for(const g of u){const f=new FormData;let p;typeof g=="string"?p=g.split(",")[1]:p=await new Promise((I,F)=>{const P=new FileReader;P.onload=()=>I(P.result.split(",")[1]),P.onerror=F,P.readAsDataURL(g)}),f.append("image",p);const _=await(await fetch(`https://api.imgbb.com/1/upload?key=${d}`,{method:"POST",body:f})).json();_.success?l.push(_.data.url):(console.error("ImgBB upload failed:",_.error.message),t(`ImgBB upload failed for one of the images: ${_.error.message}`,"exclamation-circle"))}if(l.length>0&&(t(`${l.length} image(s) uploaded successfully!`,"check-circle"),a))if(a.includes("-")){const[g,f]=a.split("-"),p=parseInt(f,10);e(S=>{const _=[...S.decedents],I=_[p],F=I[g]||"",P=F?`${F}, ${l.join(", ")}`:l.join(", ");return _[p]={...I,[g]:P},{...S,decedents:_}})}else e(g=>{const f=g[a]||"",p=f?`${f}, ${l.join(", ")}`:l.join(", ");return{...g,[a]:p}})}catch(d){console.error("Upload failed:",d),nt(d,{extra:{context:"handleImageUpload"}}),t("Upload failed!","exclamation-circle")}finally{return r(!1),l}}}},eg=b.createContext(),Bx=()=>{const t=b.useContext(eg);if(!t)throw new Error("useWebhook must be used within a WebhookProvider");return t},Hx=({children:t,commitInfo:e})=>{const[n,r]=b.useState(""),[s,o]=b.useState(""),[a,l]=b.useState([]),[d,u]=b.useState(!1),{showNotification:g}=So(),{handlePhmcWebhookSubmit:f,handleWebhookSubmit:p}=Qf({},e,g),{handleImageUpload:S}=Zf(g),_=async R=>{const $=R.target.files;if(!(!$||$.length===0)){u(!0);try{const O=await S(R);O&&O.length>0?(l(E=>[...E,...O]),g(`${O.length} image(s) uploaded successfully!`,"check-circle")):g("Image upload returned no URLs.","warning")}catch(O){console.error("Error during image upload in WebhookManager:",O),nt(O,{extra:{context:"WebhookManager handleLocalImageUpload"}}),g("An unexpected error occurred during upload.","exclamation-circle")}finally{u(!1),R.target&&(R.target.value=null)}}},I=R=>{const $=R.trim();if(!$){g("Please enter a URL.","warning");return}if(!$.startsWith("http://")&&!$.startsWith("https://")){g("Invalid URL format. Must start with http:// or https://","warning");return}if(a.includes($)){g("This URL has already been added.","info-circle");return}l(O=>[...O,$]),g("URL added successfully!","check-circle")},F=()=>{l([])},P=b.useCallback(()=>{const R=n.trim(),$=s.trim();if(!R&&!$&&a.length===0)return g("Please enter a title, message, or add media (image/URL).","warning"),null;if(R.length>256)return g("Embed title cannot exceed 256 characters.","warning"),null;let O=$||"",E=null;for(const v of a)if(/".(jpg|jpeg|png|gif)$/i.test(v)||v.includes("ibb.co")){E=v;break}const y=`PHMC Form Generator - v${e?.sha||"N/A"}`;if(O.length>4096)return g("Embed body (message content) cannot exceed 4096 characters.","warning"),null;const w=[{name:"[Delayed Updates] Form Generator Link",value:"https://phmc-tools.gta.world/",inline:!1},{name:"Alternative Form Generator Link",value:"https://gtaw-forms.github.io/forms/",inline:!1}],x={title:R||"PHMC Form Generator Notification",url:"https://phmc-tools.gta.world/",description:O.trim()||void 0,color:7506394,timestamp:new Date().toISOString(),image:E?{url:E}:void 0,fields:w,footer:{text:y}};return!$&&!R&&a.length>0&&(x.description=`Media submitted via PHMC Form Generator - v${e?.sha||"N/A"}`,x.description+=`

**Media:**
`,a.forEach((v,A)=>{const C=v.includes("streamable.com")?"Video":/".(jpg|jpeg|png|gif)$/i.test(v)||v.includes("ibb.co")?"Image":"Link";x.description+=`- ${C} ${A+1}: ${v}
`}),x.description.length>4096)?(g("Embed body (including media links) cannot exceed 4096 characters.","warning"),null):{username:"PHMC",avatar_url:"https://i.ibb.co/0pgw9hHm/phmc.png",embeds:[x]}},[n,s,a,e,g]),D={webhookTitle:n,setWebhookTitle:r,webhookMessage:s,setWebhookMessage:o,mediaUrls:a,addMediaUrl:I,clearMedia:F,handleLocalImageUpload:_,isUploading:d,sendWebhook:R=>{const $=P();$&&(R==="primary"?p($):R==="secondary"&&f($))}};return i.jsx(eg.Provider,{value:D,children:t})},Gx=()=>{const{webhookTitle:t,setWebhookTitle:e,webhookMessage:n,setWebhookMessage:r,mediaUrls:s,addMediaUrl:o,clearMedia:a,handleLocalImageUpload:l,isUploading:d,sendWebhook:u,isSending:g,sendResult:f}=Bx(),[p,S]=b.useState(""),[_,I]=b.useState([]),[F,P]=b.useState(""),[k,D]=b.useState(!1),[R,$]=b.useState(null);b.useEffect(()=>{(async()=>{try{const j=ei(),G=me(j,"webhooks"),z=await qe(G);if(z.exists()){const V=z.val(),ue=Object.keys(V).map(ve=>({id:ve,...V[ve]}));I(ue)}}catch(j){console.error("Error loading webhooks:",j)}})()},[]);const O=()=>{p.trim()&&(o(p.trim()),S(""))},E=async()=>{F?await y():await u("primary")},y=async()=>{const B=_.find(j=>j.id===F);if(!B){$({success:!1,message:"Please select a webhook destination"});return}if(!t.trim()&&!n.trim()&&s.length===0){$({success:!1,message:"Please enter a title, message, or add media"});return}D(!0),$(null);try{const j=t.trim()||"PHMC Form Generator Notification",G=n.trim()||void 0;let z=null;for(const de of s)if(/\.(jpg|jpeg|png|gif)$/i.test(de)||de.includes("ibb.co")){z=de;break}const V={title:j,url:"https://phmc-tools.gta.world/",description:G,color:7506394,timestamp:new Date().toISOString(),image:z?{url:z}:void 0,footer:{text:"PHMC Form Generator - Admin Panel"}};!G&&s.length>0&&(V.description=`Media submitted via PHMC Form Generator

**Media:**
`,s.forEach((de,Q)=>{const ee=de.includes("streamable.com")?"Video":/\.(jpg|jpeg|png|gif)$/i.test(de)||de.includes("ibb.co")?"Image":"Link";V.description+=`- ${ee} ${Q+1}: ${de}
`}));const ue={username:"PHMC",avatar_url:"https://i.ibb.co/0pgw9hHm/phmc.png",embeds:[V]},ve=await fetch(B.url,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ue)});ve.ok?($({success:!0,message:`Webhook sent successfully to ${B.name}!`}),e(""),r(""),a()):$({success:!1,message:`Failed to send webhook: ${ve.status}`})}catch(j){console.error("Error sending webhook:",j),$({success:!1,message:"Network error occurred. Please try again."})}finally{D(!1)}},w=B=>/\.(jpg|jpeg|png|gif)$/i.test(B)||B.includes("ibb.co"),x=B=>B.includes("streamable.com"),v="Major Update / Minor Update / Hotfix",A=`- Added: 
- Fixed: 
- Updated: `,C=t.trim()||n.trim()||s.length>0,M=R||f;return i.jsxs("div",{className:"webhook-manager-container",children:[M&&i.jsxs(Nt,{variant:M.success?"success":"danger",className:"mb-3",children:[i.jsx("i",{className:`fas ${M.success?"fa-check":"fa-exclamation-triangle"} me-2`}),M.message]}),i.jsxs("div",{className:"form-group mb-3",children:[i.jsxs("label",{className:"form-label",children:[i.jsx("i",{className:"fas fa-bullhorn me-2"}),"Select Webhook Destination"]}),i.jsxs(he.Select,{value:F,onChange:B=>P(B.target.value),children:[i.jsx("option",{value:"",children:"Default Webhooks (Dev/PHMC)"}),_.map(B=>i.jsxs("option",{value:B.id,children:[B.name," (",B.type,")"]},B.id))]}),i.jsx("small",{className:"form-text text-muted",children:F?"Sending to selected custom webhook":"Sending to default environment webhooks"})]}),i.jsxs("div",{className:"webhook-form",children:[i.jsxs("div",{className:"form-group mb-3",children:[i.jsxs("label",{className:"form-label",htmlFor:"webhookEmbedTitle",children:[i.jsx("i",{className:"fas fa-heading me-2"}),"Embed Title"]}),i.jsx(he.Control,{type:"text",id:"webhookEmbedTitle",placeholder:v,value:t,onChange:B=>e(B.target.value),autoComplete:"off"})]}),i.jsxs("div",{className:"form-group mb-3",children:[i.jsxs("label",{className:"form-label",htmlFor:"webhookMessageTextarea",children:[i.jsx("i",{className:"fas fa-align-left me-2"}),"Embed Body"]}),i.jsx(he.Control,{as:"textarea",id:"webhookMessageTextarea",rows:4,placeholder:A,value:n,onChange:B=>r(B.target.value),autoComplete:"off"}),i.jsx("small",{className:"form-text text-muted",children:"Supports basic Markdown. Media links will be appended automatically."})]}),i.jsxs("div",{className:"form-group mb-3",children:[i.jsxs("label",{className:"form-label",htmlFor:"webhookUrlInput",children:[i.jsx("i",{className:"fas fa-link me-2"}),"Add Media URL"]}),i.jsxs("div",{className:"input-group",children:[i.jsx("input",{type:"url",id:"webhookUrlInput",className:"form-control",placeholder:"Paste Image or Streamable URL...",value:p,onChange:B=>S(B.target.value),onKeyDown:B=>{B.key==="Enter"&&(B.preventDefault(),O())},autoComplete:"off"}),i.jsx("button",{type:"button",className:"btn btn-outline-secondary",onClick:O,disabled:!p.trim(),children:i.jsx("i",{className:"fas fa-plus"})})]})]}),i.jsxs("div",{className:"form-group mb-3",children:[i.jsxs("label",{className:"form-label",children:[i.jsx("i",{className:"fas fa-upload me-2"}),"Upload Images"]}),i.jsxs("div",{className:"d-grid",children:[i.jsxs("button",{type:"button",className:`btn btn-outline-primary ${d?"disabled":""}`,disabled:d,onClick:()=>document.getElementById("webhook-image-input-manager").click(),children:[i.jsx("i",{className:`fas ${d?"fa-spinner fa-spin":"fa-upload"} me-2`}),d?"Uploading...":"Upload Image(s)"]}),i.jsx("input",{id:"webhook-image-input-manager",type:"file",accept:"image/*",multiple:!0,style:{display:"none"},onChange:l})]}),i.jsx("small",{className:"form-text text-muted",children:"Upload one or more images. Hosted by ImgBB."})]}),s.length>0&&i.jsxs("div",{className:"form-group mb-3",children:[i.jsxs("label",{className:"form-label",children:[i.jsx("i",{className:"fas fa-images me-2"}),"Added Media (",s.length,")"]}),i.jsx("div",{className:"webhook-media-preview d-flex flex-wrap gap-2 mb-2",children:s.map((B,j)=>i.jsx("div",{className:"webhook-media-item",children:w(B)?i.jsx("img",{src:B,alt:`Preview ${j+1}`,className:"webhook-media-image rounded",title:B,onClick:()=>window.open(B,"_blank"),style:{cursor:"pointer",width:"60px",height:"60px",objectFit:"cover"}}):x(B)?i.jsxs("div",{className:"webhook-media-link btn btn-outline-info btn-sm",title:B,onClick:()=>window.open(B,"_blank"),style:{cursor:"pointer"},children:[i.jsx("i",{className:"fas fa-video me-1"}),"Video"]}):i.jsxs("div",{className:"webhook-media-link btn btn-outline-secondary btn-sm",title:B,onClick:()=>window.open(B,"_blank"),style:{cursor:"pointer"},children:[i.jsx("i",{className:"fas fa-link me-1"}),"Link"]})},j))}),i.jsxs("button",{type:"button",className:"btn btn-sm btn-outline-danger",onClick:a,title:"Clear All Media",children:[i.jsx("i",{className:"fas fa-trash me-1"}),"Clear All (",s.length,")"]})]}),i.jsx("div",{className:"d-grid mt-4",children:i.jsx(ce,{variant:"primary",size:"lg",onClick:E,disabled:!C||g||k,children:g||k?i.jsxs(i.Fragment,{children:[i.jsx("span",{className:"spinner-border spinner-border-sm me-2",role:"status","aria-hidden":"true"}),"Sending Webhook..."]}):i.jsxs(i.Fragment,{children:[i.jsx("i",{className:"fas fa-paper-plane me-2"}),"Send to ",F?_.find(B=>B.id===F)?.name||"Selected":"Default"," Webhook"]})})}),!C&&i.jsx("small",{className:"text-muted text-center d-block mt-2",children:"Add a title, message, or media to enable sending"})]})]})},ur=async(t,e)=>{const n=rs(Er,t);try{return(await n(e)).data}catch(r){throw console.error(`Error calling ${t}:`,r),r}},Wx=t=>ur("exchangeAuthCodeForToken",t),zx=t=>ur("getTokenForSecrets",t),qx=()=>ur("getManagedGtaWorldToken"),Vx=()=>ur("getProfileWithManagedToken"),Yx=t=>ur("validateGtaWorldToken",t),Kx=t=>ur("getCachedGtaWorldProfile",t),Jx=t=>ur("getGtaWorldProfile",t),Xx=t=>ur("uploadFactionData",t),Qx=t=>ur("batchCheckFactionMembership",t),Zx=t=>ur("checkFactionMembership",t),eA=({showInAppNotification:t})=>{const[e,n]=b.useState(!1),[r,s]=b.useState(null),[o,a]=b.useState(""),[l,d]=b.useState(""),[u,g]=b.useState(""),[f,p]=b.useState(""),[S,_]=b.useState("364"),[I,F]=b.useState(""),[P,k]=b.useState(""),[D,R]=b.useState(""),$=async(O,...E)=>{n(!0),s(null);try{const y=await O(...E);s(y),t("Function triggered successfully. Check console for details.","success")}catch(y){s({error:y.message}),t(`Error triggering function: ${y.message}`,"error")}n(!1)};return i.jsxs("div",{className:"card",children:[i.jsx("div",{className:"card-header",children:i.jsx("h6",{className:"mb-0",children:"Firebase Functions Remote Trigger"})}),i.jsxs("div",{className:"card-body",children:[i.jsx("p",{className:"text-muted small",children:"Scheduled functions (dailyTaskHandler, weeklyDuplicateReportsCleanup) cannot be triggered directly from the client. Use Firebase Console or CLI for manual triggers."}),i.jsx("h7",{className:"mt-3",children:"OAuth & Token Management"}),i.jsxs("div",{className:"d-flex flex-wrap gap-2 mb-3",children:[i.jsx(he.Control,{type:"text",placeholder:"Auth Code",value:o,onChange:O=>a(O.target.value),className:"w-auto"}),i.jsx(he.Control,{type:"text",placeholder:"Redirect URI",value:l,onChange:O=>d(O.target.value),className:"w-auto"}),i.jsx(ce,{variant:"primary",size:"sm",onClick:()=>$(Wx,{code:o,redirectUri:l}),disabled:e||!o||!l,children:e?i.jsx(tt,{as:"span",animation:"border",size:"sm"}):"exchangeAuthCodeForToken"}),i.jsx(ce,{variant:"primary",size:"sm",onClick:()=>$(zx,{code:o,redirectUri:l}),disabled:e||!o||!l,children:e?i.jsx(tt,{as:"span",animation:"border",size:"sm"}):"getTokenForSecrets"}),i.jsx(ce,{variant:"primary",size:"sm",onClick:()=>$(qx),disabled:e,children:e?i.jsx(tt,{as:"span",animation:"border",size:"sm"}):"getManagedGtaWorldToken"}),i.jsx(ce,{variant:"primary",size:"sm",onClick:()=>$(Vx),disabled:e,children:e?i.jsx(tt,{as:"span",animation:"border",size:"sm"}):"getProfileWithManagedToken"})]}),i.jsx("h7",{className:"mt-3",children:"Profile & Validation"}),i.jsxs("div",{className:"d-flex flex-wrap gap-2 mb-3",children:[i.jsx(he.Control,{type:"text",placeholder:"Access Token",value:u,onChange:O=>g(O.target.value),className:"w-auto"}),i.jsx(ce,{variant:"primary",size:"sm",onClick:()=>$(Yx,{accessToken:u}),disabled:e||!u,children:e?i.jsx(tt,{as:"span",animation:"border",size:"sm"}):"validateGtaWorldToken"}),i.jsx(ce,{variant:"primary",size:"sm",onClick:()=>$(Kx,{accessToken:u}),disabled:e||!u,children:e?i.jsx(tt,{as:"span",animation:"border",size:"sm"}):"getCachedGtaWorldProfile"}),i.jsx(ce,{variant:"primary",size:"sm",onClick:()=>$(Jx,{accessToken:u}),disabled:e||!u,children:e?i.jsx(tt,{as:"span",animation:"border",size:"sm"}):"getGtaWorldProfile"})]}),i.jsx("h7",{className:"mt-3",children:"Faction Data Management"}),i.jsxs("div",{className:"d-flex flex-wrap gap-2 mb-3",children:[i.jsx(he.Control,{type:"text",placeholder:"Character ID (single)",value:f,onChange:O=>p(O.target.value),className:"w-auto"}),i.jsx(he.Control,{type:"text",placeholder:"Faction ID (default: 364)",value:S,onChange:O=>_(O.target.value),className:"w-auto"}),i.jsx(ce,{variant:"primary",size:"sm",onClick:()=>$(Zx,{characterId:parseInt(f),factionId:parseInt(S),accessToken:u}),disabled:e||!f||!S,children:e?i.jsx(tt,{as:"span",animation:"border",size:"sm"}):"checkFactionMembership"}),i.jsx(he.Control,{type:"text",placeholder:"Character IDs (comma-separated)",value:D,onChange:O=>R(O.target.value),className:"w-auto"}),i.jsx(ce,{variant:"primary",size:"sm",onClick:()=>$(Qx,{characterIds:D.split(",").map(O=>parseInt(O.trim())),factionId:parseInt(S),accessToken:u}),disabled:e||!D||!S,children:e?i.jsx(tt,{as:"span",animation:"border",size:"sm"}):"batchCheckFactionMembership"}),i.jsx(he.Control,{type:"text",placeholder:"Faction Data (JSON array)",value:I,onChange:O=>F(O.target.value),className:"w-auto"}),i.jsx(he.Control,{type:"text",placeholder:"Metadata (JSON object)",value:P,onChange:O=>k(O.target.value),className:"w-auto"}),i.jsx(ce,{variant:"primary",size:"sm",onClick:()=>$(Xx,{factionData:JSON.parse(I),metadata:JSON.parse(P)}),disabled:e||!I||!P,children:e?i.jsx(tt,{as:"span",animation:"border",size:"sm"}):"uploadFactionData"})]}),r&&i.jsx(Nt,{variant:r.error?"danger":"success",className:"mt-3",children:i.jsx("pre",{style:{maxHeight:"300px",overflowY:"scroll",fontSize:"0.8em"},children:JSON.stringify(r,null,2)})})]})]})},tA=()=>{const[t,e]=b.useState([]),[n,r]=b.useState(!1),[s,o]=b.useState(null),[a,l]=b.useState(!1),[d,u]=b.useState(!1),[g,f]=b.useState(null),p=b.useCallback(async()=>{l(!0),console.log("[Debug] Fetching employees from Nursing_Records...");try{const k=me(Ne,"Nursing_Records"),D=await qe(k);if(D.exists()){const R=D.val(),$=Object.keys(R).map(O=>({id:O,...R[O]}));console.log("[Debug] Fetched employees:",$),e($)}else console.log("[Debug] No employees found in Nursing_Records."),e([])}catch(k){f("Failed to fetch employees."),console.error(k)}finally{l(!1)}},[]),S=k=>{const{name:D,value:R}=k.target;s&&o($=>({...$,[D]:R}))},_=async()=>{if(!s||!s.name||!s.surname){f("Name and surname are required.");return}l(!0);try{const k=me(Ne,`Nursing_Records/${s.id}`);await xr(k,s),e(D=>D.map(R=>R.id===s.id?s:R)),r(!1),o(null)}catch(k){f("Failed to update employee."),console.error(k)}finally{l(!1)}},I=k=>{o(k),r(!0)},F=()=>{r(!1),o(null)},P=async()=>{u(!0),f(null),console.log("[Debug] Starting sync process...");try{const k=me(Ne,"factions/364/members"),D=await qe(k);if(!D.exists())throw new Error("Faction members data not found in Realtime Database.");const R=D.val();console.log("[Debug] Fetched all faction members:",R);const $=Object.values(R).filter(v=>v.rank.includes("Nurse")||v.rank.includes("Nursing"));console.log("[Debug] Filtered nursing staff:",$);const O=new Set($.map(v=>v.characterId)),E=me(Ne,"Nursing_Records"),y=await qe(E),w=y.exists()?y.val():{};console.log("[Debug] Fetched existing RTDB employees:",w);const x=Object.fromEntries(Object.entries(w).map(([v,A])=>[A.characterId,{...A,id:v}]));console.log("[Debug] Mapped RTDB employees by char ID:",x),console.log("[Debug] Checking for new or updated employees...");for(const v of $){const[A,C]=v.characterName.split(" "),M=x[v.characterId];if(M){if(M.factionRank!==v.rank){console.log(`[Debug] Updating rank for ${v.characterName} from ${M.factionRank} to ${v.rank}`);const B=me(Ne,`Nursing_Records/${M.id}`);await xr(B,{factionRank:v.rank})}}else{console.log(`[Debug] Adding new employee: ${v.characterName}`);const B=me(Ne,`Nursing_Records/char_${v.characterId}`);await It(B,{characterId:v.characterId,name:A||"",surname:C||"",factionRank:v.rank,family:"",closeFamily:"",address:"",phoneNumber:"",createdAt:new Date().toISOString()})}}console.log("[Debug] Checking for employees to remove...");for(const v in w){const A=w[v];if(A.characterId&&!O.has(A.characterId)){console.log(`[Debug] Removing employee: ${A.name} ${A.surname} (ID: ${A.characterId})`);const C=me(Ne,`Nursing_Records/${v}`);await Hn(C)}}console.log("[Debug] Sync process complete. Refreshing employee list."),p()}catch(k){f("Failed to synchronize faction staff."),console.error(k)}finally{u(!1)}};return i.jsxs("div",{children:[i.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-3",children:[i.jsx("h3",{children:"Employee Records"}),i.jsx(ce,{variant:"success",onClick:P,disabled:d,className:"d-flex align-items-center",children:d?i.jsxs(i.Fragment,{children:[i.jsx(tt,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true",className:"me-2"}),"Syncing..."]}):i.jsxs(i.Fragment,{children:[i.jsx("i",{className:"fas fa-sync-alt me-2"})," Load Employees"]})})]}),g&&i.jsx(Nt,{variant:"danger",onClose:()=>f(null),dismissible:!0,children:g}),a&&!t.length?i.jsx("div",{className:"text-center",children:i.jsx(tt,{animation:"border"})}):i.jsxs(ta,{striped:!0,bordered:!0,hover:!0,responsive:!0,children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsxs("th",{children:[i.jsx("i",{className:"fas fa-user me-2"}),"Name"]}),i.jsxs("th",{children:[i.jsx("i",{className:"fas fa-user me-2"}),"Surname"]}),i.jsxs("th",{children:[i.jsx("i",{className:"fas fa-briefcase me-2"}),"Rank"]}),i.jsxs("th",{children:[i.jsx("i",{className:"fas fa-users me-2"}),"Family"]}),i.jsxs("th",{children:[i.jsx("i",{className:"fas fa-user-friends me-2"}),"Close Family"]}),i.jsxs("th",{children:[i.jsx("i",{className:"fas fa-map-marker-alt me-2"}),"Address"]}),i.jsxs("th",{children:[i.jsx("i",{className:"fas fa-phone me-2"}),"Phone Number"]}),i.jsxs("th",{children:[i.jsx("i",{className:"fas fa-cogs me-2"}),"Actions"]})]})}),i.jsx("tbody",{children:t.map(k=>i.jsxs("tr",{children:[i.jsx("td",{children:k.name}),i.jsx("td",{children:k.surname}),i.jsx("td",{children:k.factionRank}),i.jsx("td",{children:k.family}),i.jsx("td",{children:k.closeFamily}),i.jsx("td",{children:k.address}),i.jsx("td",{children:k.phoneNumber}),i.jsx("td",{children:i.jsx(ce,{variant:"outline-primary",size:"sm",onClick:()=>I(k),children:i.jsx("i",{className:"fas fa-edit"})})})]},k.id))})]}),n&&_l.createPortal(i.jsx("div",{className:"modal-overlay",onClick:F,children:i.jsxs("div",{className:"cctv-modal-dialog",onClick:k=>k.stopPropagation(),children:[i.jsxs("div",{className:"cctv-modal-header",children:[i.jsx("h4",{className:"cctv-title",children:"Edit Employee Record"}),i.jsx("button",{type:"button",className:"modal-close-btn",onClick:F,"aria-label":"Close",children:"×"})]}),i.jsx("div",{className:"cctv-modal-body",children:s&&i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"cctv-form-section",children:[i.jsxs("h5",{children:[i.jsx("i",{className:"fas fa-user me-2"}),"Personal Information"]}),i.jsxs("div",{className:"cctv-form-row",children:[i.jsxs("div",{className:"cctv-form-group",children:[i.jsx("label",{className:"cctv-form-label required",children:"Name"}),i.jsx("input",{type:"text",className:"form-control",name:"name",value:s.name,onChange:S,placeholder:"Enter first name",disabled:!0,title:"Name cannot be modified"})]}),i.jsxs("div",{className:"cctv-form-group",children:[i.jsx("label",{className:"cctv-form-label required",children:"Surname"}),i.jsx("input",{type:"text",className:"form-control",name:"surname",value:s.surname,onChange:S,placeholder:"Enter last name",disabled:!0,title:"Surname cannot be modified"})]})]}),i.jsxs("div",{className:"cctv-form-row",children:[i.jsxs("div",{className:"cctv-form-group",children:[i.jsx("label",{className:"cctv-form-label",children:"Family"}),i.jsx("input",{type:"text",className:"form-control",name:"family",value:s.family,onChange:S,placeholder:"Extended family connections",disabled:a})]}),i.jsxs("div",{className:"cctv-form-group",children:[i.jsx("label",{className:"cctv-form-label",children:"Close Family"}),i.jsx("input",{type:"text",className:"form-control",name:"closeFamily",value:s.closeFamily,onChange:S,placeholder:"Immediate family members",disabled:a})]})]})]}),i.jsxs("div",{className:"cctv-form-section",children:[i.jsxs("h5",{children:[i.jsx("i",{className:"fas fa-address-card me-2"}),"Contact & Location Information"]}),i.jsx("div",{className:"cctv-form-row",children:i.jsxs("div",{className:"cctv-form-group full-width",children:[i.jsx("label",{className:"cctv-form-label",children:"Address"}),i.jsx("input",{type:"text",className:"form-control",name:"address",value:s.address,onChange:S,placeholder:"Residential address",disabled:a})]})}),i.jsx("div",{className:"cctv-form-row",children:i.jsxs("div",{className:"cctv-form-group",children:[i.jsx("label",{className:"cctv-form-label",children:"Phone Number"}),i.jsx("input",{type:"text",className:"form-control",name:"phoneNumber",value:s.phoneNumber,onChange:S,placeholder:"Contact phone number",disabled:a})]})})]})]})}),i.jsxs("div",{className:"cctv-modal-footer",children:[i.jsx("button",{className:"cctv-btn cctv-btn-secondary",onClick:F,disabled:a,children:"Cancel"}),i.jsx("button",{className:"cctv-btn cctv-btn-primary",onClick:_,disabled:a,children:a?i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"cctv-spinner"}),"Saving..."]}):i.jsxs(i.Fragment,{children:[i.jsx("i",{className:"fas fa-save"}),"Save Changes"]})})]})]})}),document.getElementById("modal-root"))]})},nA=({currentUser:t,desktopNotificationPermission:e,handleEnableDesktopNotifications:n,isUpdatingDb:r,selectedRecruitmentCategory:s,setSelectedRecruitmentCategory:o,recruitmentCategories:a,handleAddRoleClick:l,isLoadingRecruitmentData:d,currentRecruitmentData:u,handleRenameRoleKeyClick:g,handleEditRoleClick:f,handleTogglePositionStatus:p,selectedAdminBingoType:S,setSelectedAdminBingoType:_,BINGO_TYPES:I,handleManualResetAllBingoCards:F,handleGenerateNewBingoCard:P,handleClearBingoActivity:k,handleDisableBingoCard:D,setShowEditBingoPhrasesModal:R,selectedTypeForEdit:$,setShowReviewPhrasesModal:O,setShowUserManagementModal:E,setShowCctvWebhookModal:y,handleLogout:w,Sentry:x,showInAppNotification:v,setShowOAuthTokenExchangeModal:A,setShowUserDataExchangeModal:C,lockdownConfig:M,setLockdownConfig:B,handleUpdateLockdownStatus:j,webhooks:G,newWebhook:z,setNewWebhook:V,handleAddWebhook:ue,handleDeleteWebhook:ve,isUpdatingWebhooks:de,customWebhookChannel:Q,setCustomWebhookChannel:ee,customWebhookTitle:ne,setCustomWebhookTitle:pe,customWebhookMessage:ge,setCustomWebhookMessage:be,customWebhookUrl:Ae,setCustomWebhookUrl:Ge,customWebhookSending:Ke,customWebhookResult:xe,handleSendCustomWebhook:Ze,logRefreshTrigger:we,setLogRefreshTrigger:et,handleScanDuplicateReports:yt,handleDeleteDuplicateReports:re,duplicateReports:Re,isScanningDuplicates:le,isDeletingDuplicates:ke})=>{const[Ie,q]=b.useState("serviceStatus"),[se,Y]=b.useState(null),[ie,te]=b.useState(!1),[Te,De]=b.useState(!1),Rt=Ga(),{user:Ue,isAuthenticated:J,error:ze,isLoading:Be}=dr(),{isMember:Oe,factionData:Ee,accessLevel:W,canAccessAdmin:Qe,canUploadFactionData:ut,canAccessDatabase:tn,canManageWebhooks:Mt,refresh:Pt,isLoading:ct}=Mx(),nn=cr();xd();const[kt,En]=b.useState(!1),Kt=(nn||kt)&&t,Nn=t&&!t.isGtaAuth&&!t.isGoogleAuth,Gt=Ue?.faction?.scriptRank,Os=Gt>=13,Mn=Gt>=14,Jn=Gt>=15,ss=Gt>=11,hr=Kt||Mn,xn=Kt||Mn,An=Kt||Mn,mr=Kt||Jn,rn=Kt||Os,kr=Nn,Wt=Kt||Qe,pr=Kt||ut||Gt>=10,jn=Kt||tn||Gt>=12,In=Kt||Mt||ss,Xn=async()=>{try{const K=await jx();v&&v(K.success?"Firebase Functions test passed":`Test failed: ${K.error}`,K.success?"success":"error"),console.info("Firebase test result:",K)}catch(K){v&&v(`Test error: ${K.message}`,"error")}},Fr=async()=>{try{const K=await Lx();v&&v(K.success?"Profile retrieval successful - check console for raw data":`Profile test failed: ${K.error}`,K.success?"success":"error"),console.info("Profile test result:",K),K.success&&K.rawProfileData&&(console.group("🔍 RAW PROFILE DATA"),console.log("Full API Response:",K.rawProfileData),console.log("Data Structure:",K.dataStructure),console.groupEnd())}catch(K){v&&v(`Profile test error: ${K.message}`,"error")}},Le=async K=>{try{const $e={username:"PHMC Test",avatar_url:"https://i.ibb.co/0pgw9hHm/phmc.png",embeds:[{title:"🧪 Webhook Test",description:`This is a test message for the webhook: **${K.name}**

Webhook Type: ${K.type}
Test Time: ${new Date().toLocaleString()}`,color:65280,timestamp:new Date().toISOString(),footer:{text:"PHMC Form Generator - Admin Panel Test"}}]},$t=await fetch(K.url,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify($e)});$t.ok?v&&v(`Test webhook sent successfully to ${K.name}!`,"success"):v&&v(`Failed to send test webhook: ${$t.status}`,"error")}catch($e){console.error("Error sending test webhook:",$e),v&&v("Error sending test webhook","error")}},dn=async()=>{if(window.confirm("Are you sure you want to run the report migration? This operation cannot be undone.")){De(!0),v&&v("Starting report migration...","info");try{const K=Ed(),$t=await rs(K,"migrateReportsToNewStructure")();$t.data.success?(v&&v(`Migration complete: ${$t.data.migratedCount} reports migrated.`,"success"),console.log("Migration result:",$t.data)):(v&&v(`Migration failed: ${$t.data.message||"Unknown error"}`,"error"),console.error("Migration failed:",$t.data))}catch(K){console.error("Error calling migrateReportsToNewStructure:",K),v&&v(`Error during migration: ${K.message}`,"error"),x.captureException(K,{extra:{context:"handleMigrateReports"}})}finally{De(!1)}}};return i.jsx("div",{className:"admin-dashboard-container",children:i.jsxs("div",{className:"admin-dashboard-layout",children:[i.jsxs("div",{className:"sidebar",children:[i.jsxs("div",{className:"sidebar-header",children:[i.jsx("h5",{children:"Admin Panel"}),i.jsxs("p",{children:["Logged in as: ",J&&Ue?Ue.username:t?.email||"Unknown"]}),Ue&&i.jsxs("p",{className:"text-info",children:[i.jsx("i",{className:"fas fa-user me-1"}),"GTA World: ",Ue.username]}),t&&kr&&i.jsxs("div",{className:"mt-3",children:[i.jsxs("div",{className:"form-check form-switch",children:[i.jsx("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"googleAdminToggle",checked:kt,onChange:K=>En(K.target.checked)}),i.jsx("label",{className:"form-check-label",htmlFor:"googleAdminToggle",children:i.jsx("small",{children:"Enable Google Admin Override"})})]}),i.jsx("small",{className:"text-muted d-block mt-1",children:"Toggle to test faction permission restrictions"})]})]}),i.jsxs("div",{className:"nav-pills-flex-column",children:[hr&&i.jsxs("button",{className:`nav-link ${Ie==="lockdown"?"active":""}`,onClick:()=>q("lockdown"),children:[i.jsx("i",{className:"fas fa-lock me-2"}),"Lockdown"]}),i.jsxs("button",{className:`nav-link ${Ie==="recruitment"?"active":""}`,onClick:()=>q("recruitment"),children:[i.jsx("i",{className:"fas fa-user-plus me-2"}),"Recruitment"]}),xn&&i.jsxs("button",{className:`nav-link ${Ie==="bingo"?"active":""}`,onClick:()=>q("bingo"),children:[i.jsx("i",{className:"fas fa-dice me-2"}),"Bingo"]}),An&&i.jsxs("button",{className:`nav-link ${Ie==="users"?"active":""}`,onClick:()=>q("users"),children:[i.jsx("i",{className:"fas fa-users-cog me-2"}),"Users"]}),rn&&i.jsxs("button",{className:`nav-link ${Ie==="employeeManager"?"active":""}`,onClick:()=>q("employeeManager"),children:[i.jsx("i",{className:"fas fa-users me-2"}),"Employee Manager"]}),i.jsxs("button",{className:`nav-link ${Ie==="webhooks"?"active":""}`,onClick:()=>q("webhooks"),children:[i.jsx("i",{className:"fas fa-bullhorn me-2"}),"Webhooks"]}),i.jsxs("button",{className:`nav-link ${Ie==="factions"?"active":""}`,onClick:()=>q("factions"),children:[i.jsx("i",{className:"fas fa-users me-2"}),"Faction Data"]}),i.jsxs("button",{className:`nav-link ${Ie==="dev"?"active":""}`,onClick:()=>q("dev"),children:[i.jsx("i",{className:"fas fa-code me-2"}),"Developer"]}),i.jsxs("button",{className:`nav-link ${Ie==="database"?"active":""}`,onClick:()=>q("database"),children:[i.jsx("i",{className:"fas fa-database me-2"}),"Database"]}),mr&&i.jsxs("button",{className:`nav-link ${Ie==="rankPermissions"?"active":""}`,onClick:()=>q("rankPermissions"),children:[i.jsx("i",{className:"fas fa-user-shield me-2"}),"Rank Permissions"]})]}),i.jsxs("div",{className:"sidebar-footer",children:[e==="default"&&i.jsxs(ce,{variant:"outline-info",size:"sm",onClick:n,className:"w-100 mb-2",title:"Click to allow desktop notifications for status updates",children:[i.jsx("i",{className:"fas fa-bell"})," Enable Notifications"]}),i.jsxs(ce,{variant:"warning",onClick:w,className:"w-100",children:[i.jsx("i",{className:"fas fa-sign-out-alt me-2"}),"Sign Out ",Ue?"(GTA World)":nn?"(Google Admin)":"(Firebase)"]}),i.jsxs(ce,{type:"button",variant:"secondary",className:"changelog-button",onClick:()=>Rt("/"),title:"Go to Home",children:[" ",i.jsx("i",{className:"fas fa-home"}),"Home"]})]})]}),i.jsxs("div",{className:"main-content",children:[J&&Oe&&Ee&&i.jsxs("div",{className:"card mb-4",children:[i.jsx("div",{className:"card-header bg-primary text-white",children:i.jsxs("h5",{className:"mb-0",children:[i.jsx("i",{className:"fas fa-user-shield me-2"}),"Welcome to PHMC Admin Panel"]})}),i.jsxs("div",{className:"card-body",children:[i.jsxs("div",{className:"row",children:[i.jsxs("div",{className:"col-md-6",children:[i.jsx("h6",{className:"text-primary",children:"Character Information"}),i.jsxs("p",{className:"mb-1",children:[i.jsx("strong",{children:"Character Name:"})," ",Ee.characterName]}),i.jsxs("p",{className:"mb-1",children:[i.jsx("strong",{children:"Character ID:"})," ",Ee.characterId]}),i.jsxs("p",{className:"mb-1",children:[i.jsx("strong",{children:"UCP User:"})," ",Ue.username]})]}),i.jsxs("div",{className:"col-md-6",children:[i.jsx("h6",{className:"text-primary",children:"PHMC Status"}),i.jsxs("p",{className:"mb-1",children:[i.jsx("strong",{children:"Rank:"})," ",Ee.rank]}),i.jsxs("p",{className:"mb-1",children:[i.jsx("strong",{children:"Script Rank:"})," ",Ee.scriptRank]}),i.jsxs("p",{className:"mb-1",children:[i.jsx("strong",{children:"Access Level:"})," ",i.jsx("span",{className:"badge bg-success",children:W})]}),Ee.activity&&i.jsxs("p",{className:"mb-1",children:[i.jsx("strong",{children:"Activity:"})," ",Ee.activity]})]})]}),Ee.lastOnline&&i.jsx("div",{className:"mt-2",children:i.jsxs("small",{className:"text-muted",children:[i.jsx("i",{className:"fas fa-clock me-1"}),"Last online: ",Ee.lastOnline]})})]})]}),Ie==="lockdown"&&i.jsxs("div",{className:"card",children:[i.jsx("div",{className:"card-header",children:"Site Lockdown"}),i.jsx("div",{className:"card-body",children:hr?i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"form-check form-switch mb-3",children:[i.jsx("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"lockdownSwitch",checked:M.enabled,onChange:K=>B($e=>({...$e,enabled:K.target.checked}))}),i.jsx("label",{className:"form-check-label",htmlFor:"lockdownSwitch",children:"Enable Site Lockdown"})]}),i.jsxs("div",{className:"form-group mb-3",children:[i.jsx("label",{children:"Notification Message"}),i.jsx("input",{type:"text",value:M.notification,onChange:K=>B($e=>({...$e,notification:K.target.value})),placeholder:"e.g., The site is currently undergoing maintenance.",className:"form-control"})]}),i.jsxs("div",{className:"form-group mb-3",children:[i.jsx("label",{children:"Popup Dialog Text"}),i.jsx("textarea",{value:M.dialog,onChange:K=>B($e=>({...$e,dialog:K.target.value})),placeholder:"e.g., The BBCode generator is temporarily disabled.",className:"form-control",rows:"3"})]}),i.jsxs("div",{className:"form-group mb-3",children:[i.jsx("label",{children:"Affected Deployments"}),i.jsx("div",{children:["all","phmc-tools","github-pages","local"].map(K=>i.jsxs("div",{className:"form-check form-check-inline",children:[i.jsx("input",{className:"form-check-input",type:"checkbox",id:`deployment-${K}`,value:K,checked:M.affectedDeployments.includes(K),onChange:$e=>{const{value:$t,checked:bn}=$e.target;B(Tn=>{let Rn;return bn?Rn=[...Tn.affectedDeployments,$t]:Rn=Tn.affectedDeployments.filter(Pr=>Pr!==$t),{...Tn,affectedDeployments:Rn}})}}),i.jsx("label",{className:"form-check-label",htmlFor:`deployment-${K}`,children:K.charAt(0).toUpperCase()+K.slice(1)})]},K))})]}),i.jsx(ce,{variant:"primary",onClick:j,disabled:r,children:r?i.jsx(tt,{as:"span",animation:"border",size:"sm"}):"Update Lockdown Status"})]}):i.jsxs("div",{className:"alert alert-danger",children:[i.jsx("i",{className:"fas fa-exclamation-triangle me-2"}),i.jsx("strong",{children:"Access Denied:"})," Your current faction rank (",Ee?.scriptRank||"N/A",") does not have permission to manage site lockdown.",i.jsx("br",{}),i.jsx("small",{children:"Required: Script Rank 14 or higher, or Google Admin access"})]})})]}),Ie==="recruitment"&&i.jsxs("div",{className:"card",children:[i.jsx("div",{className:"card-header",children:"Recruitment Management"}),i.jsxs("div",{className:"card-body",children:[i.jsxs("div",{className:"form-group mb-3",children:[i.jsx("label",{htmlFor:"selectRecruitmentCategory",children:"Select Recruitment Option"}),i.jsxs("select",{id:"selectRecruitmentCategory",value:s,onChange:K=>o(K.target.value),className:"form-select",children:[i.jsx("option",{value:"",children:"-- Select an Option --"}),Object.entries(a).map(([K,$e])=>i.jsx("option",{value:K,children:$e.displayName},K))]})]}),s&&a[s]?i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-2",children:[i.jsxs("h5",{children:["Manage ",a[s]?.displayName]}),i.jsxs(ce,{variant:"success",size:"sm",onClick:l,children:[i.jsx("i",{className:"fas fa-plus-circle"})," Add Role"]})]}),d?i.jsx(tt,{animation:"border"}):Object.keys(u).length>0?i.jsx("div",{className:"list-group mb-3",children:Object.entries(u).map(([K,$e])=>i.jsxs("div",{className:"list-group-item d-flex justify-content-between align-items-center",children:[i.jsxs("div",{children:[$e.displayName||$e.name||K,": ",i.jsx("strong",{style:{color:$e.status==="OPEN"?"green":"red"},children:$e.status||"N/A"}),i.jsx("br",{}),i.jsxs("small",{className:"text-muted",children:["DB Key: ",K]})]}),i.jsxs("div",{className:"d-flex gap-2",children:[i.jsxs(ce,{variant:"outline-warning",size:"sm",onClick:()=>g(K,$e),disabled:r,title:`Rename Database Key for ${$e.displayName||$e.name||K}`,children:[i.jsx("i",{className:"fas fa-key"})," Rename Key"]}),i.jsxs(ce,{variant:"outline-secondary",size:"sm",onClick:()=>f(K,$e),disabled:r,title:`Edit ${$e.displayName||$e.name||K}`,children:[i.jsx("i",{className:"fas fa-edit"})," Edit"]}),i.jsxs(ce,{variant:$e.status==="OPEN"?"outline-danger":"outline-success",size:"sm",onClick:()=>p(K,$e.status),disabled:r,style:{minWidth:"120px"},children:[r&&i.jsx(tt,{as:"span",animation:"border",size:"sm"}),$e.status==="OPEN"?"Set CLOSED":"Set OPEN"]})]})]},K))}):i.jsxs("p",{children:["No positions loaded for ",a[s]?.displayName,"."]})]}):i.jsx("p",{children:"Select a recruitment category to manage positions."})]})]}),Ie==="bingo"&&i.jsxs("div",{className:"card",children:[i.jsx("div",{className:"card-header",children:"Bingo Management"}),i.jsx("div",{className:"card-body",children:xn?i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"form-group mb-3",children:[i.jsx("label",{children:"Select Bingo Type:"}),i.jsx("select",{value:S,onChange:K=>_(K.target.value),disabled:r,className:"form-select",children:I.map(K=>i.jsx("option",{value:K.id,children:K.name},K.id))})]}),i.jsx("p",{className:"text-info small mt-1",children:"The daily reset now runs automatically on the server at 09:00 UTC."}),i.jsx(ce,{variant:"secondary",onClick:F,disabled:r,className:"mt-2 me-2",title:"Manually run the daily reset for all active bingo cards.",children:r?i.jsx(tt,{as:"span",animation:"border",size:"sm"}):i.jsxs(i.Fragment,{children:[i.jsx("i",{className:"fas fa-bomb"})," Reset All Cards"]})}),i.jsx(ce,{variant:"primary",onClick:P,disabled:r,className:"mt-2 me-2",children:r?i.jsx(tt,{as:"span",animation:"border",size:"sm"}):i.jsxs(i.Fragment,{children:[i.jsx("i",{className:"fas fa-sync-alt"})," Generate New Card"]})}),i.jsx(ce,{variant:"danger",onClick:k,disabled:r,className:"mt-2 me-2",children:r?i.jsx(tt,{as:"span",animation:"border",size:"sm"}):i.jsxs(i.Fragment,{children:[i.jsx("i",{className:"fas fa-trash-alt"})," Clear Activity Log"]})}),i.jsx(ce,{variant:"warning",onClick:D,disabled:r,className:"mt-2 me-2",title:"This will remove the current card and log, effectively disabling the game until a new card is generated.",children:r?i.jsx(tt,{as:"span",animation:"border",size:"sm"}):i.jsxs(i.Fragment,{children:[i.jsx("i",{className:"fas fa-power-off"})," Disable Card"]})}),i.jsxs(ce,{variant:"info",onClick:()=>R(!0),disabled:r||!S,className:"mt-2 me-2",children:[i.jsx("i",{className:"fas fa-edit"})," Edit ",$?.name||"Master"," Phrases"]}),i.jsxs(ce,{variant:"warning",onClick:()=>O(!0),disabled:r,className:"mt-2",children:[i.jsx("i",{className:"fas fa-inbox"})," Review Phrase Requests"]})]}):i.jsxs("div",{className:"alert alert-danger",children:[i.jsx("i",{className:"fas fa-exclamation-triangle me-2"}),i.jsx("strong",{children:"Access Denied:"})," Your current faction rank (",Ee?.scriptRank||"N/A",") does not have permission to manage bingo activities.",i.jsx("br",{}),i.jsx("small",{children:"Required: Script Rank 14 or higher, or Google Admin access"})]})})]}),Ie==="users"&&i.jsxs("div",{className:"card",children:[i.jsx("div",{className:"card-header",children:"User Management"}),i.jsx("div",{className:"card-body",children:An?i.jsxs(i.Fragment,{children:[i.jsxs(ce,{variant:"primary",onClick:()=>E(!0),children:[i.jsx("i",{className:"fas fa-users-cog"})," Manage Users"]}),i.jsx($x,{currentUser:t})]}):i.jsxs("div",{className:"alert alert-danger",children:[i.jsx("i",{className:"fas fa-exclamation-triangle me-2"}),i.jsx("strong",{children:"Access Denied:"})," Your current faction rank (",Ee?.scriptRank||"N/A",") does not have permission to manage users.",i.jsx("br",{}),i.jsx("small",{children:"Required: Script Rank 14 or higher, or Google Admin access"})]})})]}),Ie==="employeeManager"&&i.jsx("div",{className:"card",children:i.jsx("div",{className:"card-body",children:rn?i.jsx(tA,{}):i.jsxs("div",{className:"alert alert-danger",children:[i.jsx("i",{className:"fas fa-exclamation-triangle me-2"}),i.jsx("strong",{children:"Access Denied:"})," Your current faction rank (",Ee?.scriptRank||"N/A",") does not have permission to manage employees.",i.jsx("br",{}),i.jsx("small",{children:"Required: Script Rank 13 or higher, or Google Admin access"})]})})}),Ie==="webhooks"&&i.jsxs("div",{className:"card",children:[i.jsx("div",{className:"card-header",children:i.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[i.jsx("h5",{className:"mb-0",children:"Webhook Management"}),i.jsx("h5",{className:"mb-0",children:"This area is VERY Dangerous - Don't use "}),i.jsxs("div",{className:"badge bg-secondary",children:[G.length," webhook",G.length!==1?"s":""," configured"]})]})}),i.jsxs("div",{className:"card-body",children:[J||t?In?i.jsxs("div",{className:"row",children:[i.jsx("div",{className:"col-md-6",children:i.jsxs("div",{className:"card h-100",children:[i.jsx("div",{className:"card-header bg-primary text-white",children:i.jsxs("h6",{className:"mb-0",children:[i.jsx("i",{className:"fas fa-paper-plane me-2"}),"Send Webhook"]})}),i.jsx("div",{className:"card-body",children:i.jsx(Hx,{children:i.jsx(Gx,{})})})]})}),i.jsx("div",{className:"col-md-6",children:i.jsxs("div",{className:"card h-100",children:[i.jsx("div",{className:"card-header bg-success text-white",children:i.jsxs("h6",{className:"mb-0",children:[i.jsx("i",{className:"fas fa-cogs me-2"}),z.id?"Edit Webhook":"Add New Webhook"]})}),i.jsxs("div",{className:"card-body",children:[z.id&&i.jsxs("div",{className:"alert alert-info py-2 mb-3",children:[i.jsx("i",{className:"fas fa-info-circle me-2"}),"Editing: ",i.jsx("strong",{children:z.name}),i.jsx("button",{type:"button",className:"btn btn-sm btn-outline-secondary ms-2",onClick:()=>V({name:"",url:"",type:"coronerAlerts"}),children:"Cancel"})]}),i.jsxs("div",{className:"form-group mb-3",children:[i.jsx("label",{className:"form-label",children:"Webhook Name"}),i.jsx("input",{type:"text",className:"form-control",placeholder:"e.g., Discord Notifications",value:z.name,onChange:K=>V($e=>({...$e,name:K.target.value}))})]}),i.jsxs("div",{className:"form-group mb-3",children:[i.jsx("label",{className:"form-label",children:"Webhook URL"}),i.jsx("input",{type:"url",className:"form-control",placeholder:"https://discord.com/api/webhooks/...",value:z.url,onChange:K=>V($e=>({...$e,url:K.target.value}))})]}),i.jsxs("div",{className:"form-group mb-3",children:[i.jsx("label",{className:"form-label",children:"Event Type"}),i.jsxs("select",{className:"form-select",value:z.type,onChange:K=>V($e=>({...$e,type:K.target.value})),children:[i.jsx("option",{value:"coronerAlerts",children:"Coroner Alerts"}),i.jsx("option",{value:"phmcAlerts",children:"PHMC Alerts"}),i.jsx("option",{value:"dev",children:"local dev discord"})]})]}),i.jsxs("div",{className:"d-flex gap-2",children:[i.jsx(ce,{variant:z.id?"warning":"primary",onClick:ue,disabled:de||!z.name||!z.url,children:de?i.jsx(tt,{as:"span",animation:"border",size:"sm"}):i.jsxs(i.Fragment,{children:[i.jsx("i",{className:`fas ${z.id?"fa-save":"fa-plus"} me-2`}),z.id?"Update":"Add"," Webhook"]})}),z.id&&i.jsx(ce,{variant:"secondary",onClick:()=>V({name:"",url:"",type:"coronerAlerts"}),disabled:de,children:"Cancel"})]})]})]})})]}):i.jsxs("div",{className:"alert alert-warning",children:[i.jsx("i",{className:"fas fa-exclamation-triangle me-2"}),i.jsx("strong",{children:"Access Denied:"})," Your current faction rank (",Ee?.scriptRank||"N/A",") does not have webhook management permissions.",i.jsx("br",{}),i.jsx("small",{children:"Required: Script Rank 11 or higher"})]}):i.jsxs("div",{className:"alert alert-info",children:[i.jsx("i",{className:"fas fa-info-circle me-2"}),"Please log in with your GTA World account to access webhook management features."]}),(J||t)&&In&&i.jsx("div",{className:"mt-4",children:i.jsxs("div",{className:"card",children:[i.jsx("div",{className:"card-header bg-info text-white",children:i.jsxs("h6",{className:"mb-0",children:[i.jsx("i",{className:"fas fa-list me-2"}),"Existing Webhooks (",G.length,")"]})}),i.jsx("div",{className:"card-body",children:G.length>0?i.jsx("div",{className:"table-responsive",children:i.jsxs("table",{className:"table table-sm table-hover",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"Name"}),i.jsx("th",{children:"Type"}),i.jsx("th",{children:"URL"}),i.jsx("th",{children:"Actions"})]})}),i.jsx("tbody",{children:G.map(K=>i.jsxs("tr",{children:[i.jsx("td",{children:i.jsx("strong",{children:K.name})}),i.jsx("td",{children:i.jsx("span",{className:`badge ${K.type==="dev"?"bg-warning":K.type==="coronerAlerts"?"bg-danger":"bg-primary"}`,children:K.type})}),i.jsx("td",{children:i.jsx("small",{className:"text-muted",title:K.url,children:K.url.length>40?`${K.url.substring(0,40)}...`:K.url})}),i.jsx("td",{children:i.jsxs("div",{className:"btn-group btn-group-sm",children:[i.jsx("button",{className:"btn btn-outline-primary",onClick:()=>Le(K),disabled:de,title:"Test this webhook",children:i.jsx("i",{className:"fas fa-paper-plane"})}),i.jsx("button",{className:"btn btn-outline-warning",onClick:()=>V(K),disabled:de,title:"Edit this webhook",children:i.jsx("i",{className:"fas fa-edit"})}),i.jsx("button",{className:"btn btn-outline-danger",onClick:()=>ve(K.id),disabled:de,title:"Delete this webhook",children:i.jsx("i",{className:"fas fa-trash"})})]})})]},K.id))})]})}):i.jsxs("div",{className:"text-center text-muted py-3",children:[i.jsx("i",{className:"fas fa-inbox fa-2x mb-2"}),i.jsx("p",{children:"No webhooks configured yet. Add one above to get started."})]})})]})}),(J||t)&&In&&i.jsx("div",{className:"mt-4",children:i.jsx("div",{className:"card",children:i.jsx("div",{className:"card-body p-0",children:i.jsx(Dx,{refreshTrigger:we,onRefresh:()=>et(K=>K+1)})})})})]})]}),Ie==="dev"&&i.jsxs("div",{className:"card",children:[i.jsx("div",{className:"card-header",children:"Developer Tools"}),i.jsxs("div",{className:"card-body",children:[i.jsx("div",{className:"mb-3",children:i.jsxs("div",{className:"card",children:[i.jsx("div",{className:"card-header",children:i.jsx("h6",{className:"mb-0",children:"GTA World Authentication & Faction Status"})}),i.jsxs("div",{className:"card-body",children:[J||t?i.jsxs("div",{children:[i.jsxs("div",{className:"alert alert-success d-flex align-items-center mb-3",children:[i.jsx("i",{className:"fas fa-check-circle me-2"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Connected as:"})," ",(()=>{if(Ue?.isFactionMember&&Ue?.faction){const K=Ue.faction.firstname&&Ue.faction.lastname?`${Ue.faction.firstname} ${Ue.faction.lastname}`:Ue.faction.characterName;return K?`${K} (${Ue.username})`:Ue.username}return Ue?.username||Ue?.name||t?.email||"Unknown"})(),i.jsx("br",{}),i.jsxs("small",{className:"text-muted",children:["User ID: ",Ue?.id||t?.uid," |",Ue?.isFactionMember&&Ue?.faction?.scriptRank!==void 0?` Script Rank: ${Ue.faction.scriptRank} |`:"","Last login: ",new Date().toLocaleDateString()]})]})]}),"                                                    ",i.jsxs("div",{className:"card border",children:[i.jsx("div",{className:"card-header",children:i.jsx("h6",{className:"mb-0",children:"Faction Permissions"})}),i.jsx("div",{className:"card-body",children:ct?i.jsxs("div",{className:"d-flex align-items-center",children:[i.jsx(tt,{animation:"border",size:"sm",className:"me-2"}),"Loading faction data..."]}):Oe?i.jsxs("div",{children:[t&&i.jsxs("div",{className:`alert ${kt?"alert-success":"alert-secondary"} py-2 mb-3`,children:[i.jsx("i",{className:`fas ${kt?"fa-crown":"fa-toggle-off"} me-2`}),i.jsxs("strong",{children:["Google Admin Override: ",kt?"ACTIVE":"DISABLED"]}),kt?i.jsx("span",{children:" - Full administrative privileges granted"}):i.jsx("span",{children:" - Testing with normal permissions"}),i.jsx("br",{}),i.jsx("small",{children:kt?"All faction restrictions bypassed • Script Rank 15 equivalent":"Use toggle in sidebar to enable override for testing"})]}),i.jsxs("div",{className:"alert alert-success py-2",children:[i.jsx("i",{className:"fas fa-users me-2"}),i.jsx("strong",{children:"PHMC Member"})," - Access granted"]}),Ee&&i.jsxs("div",{className:"row",children:[i.jsxs("div",{className:"col-md-6",children:[i.jsxs("p",{children:[i.jsx("strong",{children:"Character:"})," ",Ee.characterName]}),i.jsxs("p",{children:[i.jsx("strong",{children:"Script Rank:"})," ",Ee.scriptRank]}),i.jsxs("p",{children:[i.jsx("strong",{children:"Access Level:"})," ",W]})]}),i.jsxs("div",{className:"col-md-6",children:[i.jsx("p",{children:i.jsx("strong",{children:"Permissions:"})}),i.jsxs("ul",{className:"list-unstyled",children:[i.jsxs("li",{children:[i.jsx("i",{className:`fas ${Qe?"fa-check text-success":"fa-times text-danger"}`})," Admin Access"]}),i.jsxs("li",{children:[i.jsx("i",{className:`fas ${tn?"fa-check text-success":"fa-times text-danger"}`})," Database Access"]}),i.jsxs("li",{children:[i.jsx("i",{className:`fas ${ut?"fa-check text-success":"fa-times text-danger"}`})," Faction Upload"]}),i.jsxs("li",{children:[i.jsx("i",{className:`fas ${Mt?"fa-check text-success":"fa-times text-danger"}`})," Webhook Management"]})]})]})]}),i.jsxs(ce,{variant:"outline-primary",size:"sm",onClick:Pt,disabled:ct,children:[i.jsx("i",{className:"fas fa-refresh me-2"}),"Refresh Faction Data"]})]}):i.jsxs("div",{children:[t&&i.jsxs("div",{className:`alert ${kt?"alert-success":"alert-secondary"} py-2 mb-3`,children:[i.jsx("i",{className:`fas ${kt?"fa-crown":"fa-toggle-off"} me-2`}),i.jsxs("strong",{children:["Google Admin Override: ",kt?"ACTIVE":"DISABLED"]}),kt?i.jsx("span",{children:" - Full administrative privileges granted"}):i.jsx("span",{children:" - Testing with normal permissions"}),i.jsx("br",{}),i.jsx("small",{children:kt?"All faction restrictions bypassed • Script Rank 15 equivalent":"Use toggle in sidebar to enable override for testing"})]}),!t&&i.jsxs("div",{className:"alert alert-warning py-2",children:[i.jsx("i",{className:"fas fa-exclamation-triangle me-2"}),i.jsx("strong",{children:"Not a PHMC Member"})," - Limited access"]})]})})]})]}):i.jsxs("div",{children:[i.jsx("p",{className:"text-muted mb-3",children:"Connect your GTA World account for enhanced admin features and OAuth testing."}),i.jsx(yl,{variant:"primary",returnPath:"/admin",disabled:Be||ct,onError:K=>v&&v(`Login failed: ${K}`,"error"),onSuccess:()=>{console.log("Login successful"),Pt()},onInitiate:()=>{sessionStorage.setItem("oauth-exchange-in-progress","true")},title:Be?"Checking authentication...":"Connect your GTA World account",children:Be?i.jsxs(i.Fragment,{children:[i.jsx("span",{className:"spinner-border spinner-border-sm me-2",role:"status","aria-hidden":"true"}),"Checking authentication..."]}):i.jsxs(i.Fragment,{children:[i.jsx("i",{className:"fas fa-sign-in-alt me-2"}),"Connect GTA World Account"]})})]}),ze&&i.jsxs("div",{className:"alert alert-warning mt-2",children:[i.jsx("i",{className:"fas fa-exclamation-triangle me-2"}),ze]})]})]})}),i.jsxs("div",{className:"mb-3",children:[i.jsx("h6",{children:"Firebase Functions Diagnostics"}),i.jsxs("div",{className:"d-flex gap-2 mb-3",children:[i.jsxs(ce,{variant:"info",size:"sm",onClick:Xn,disabled:!jn,title:jn?"Test Firebase Functions connectivity":"Requires database access permission",children:[i.jsx("i",{className:"fas fa-network-wired me-2"}),"Test Firebase Functions"]}),i.jsxs(ce,{variant:"danger",size:"sm",onClick:dn,disabled:Te||!Wt,title:Wt?"Migrate old report data to new structure":"Requires admin access permission",children:[Te?i.jsx(tt,{as:"span",animation:"border",size:"sm"}):i.jsx("i",{className:"fas fa-database me-2"}),"Migrate Reports"]}),i.jsxs(ce,{variant:"success",size:"sm",onClick:Fr,title:"Get raw profile data from GTA World API",children:[i.jsx("i",{className:"fas fa-user-circle me-2"}),"Get Raw Profile"]}),i.jsx(yl,{variant:"warning",size:"sm",returnPath:"/admin",disabled:Be||ct,onError:K=>v&&v(`OAuth Login Test Failed: ${K}`,"error"),onSuccess:()=>{console.log("OAuth Login Test successful"),v&&v("OAuth Login Test completed successfully!","success"),Pt()},onInitiate:()=>{console.log("OAuth Login Test initiated"),v&&v("Testing OAuth login flow...","info")},title:Be?"Checking authentication...":"Test OAuth login flow from this section",children:Be?i.jsxs(i.Fragment,{children:[i.jsx("span",{className:"spinner-border spinner-border-sm me-2",role:"status","aria-hidden":"true"}),"Checking auth..."]}):i.jsxs(i.Fragment,{children:[i.jsx("i",{className:"fas fa-sign-in-alt me-2"}),"Test OAuth Login"]})}),i.jsxs(ce,{variant:"secondary",size:"sm",onClick:Ux,title:"Log environment information to console",children:[i.jsx("i",{className:"fas fa-info-circle me-2"}),"Log Environment Info"]})]}),se&&i.jsxs("div",{className:"card",children:[i.jsx("div",{className:"card-header",children:i.jsxs("h6",{className:"mb-0",children:["Diagnostics Results",i.jsx("span",{className:`badge ms-2 ${se.summary?.allTestsPassed?"bg-success":"bg-danger"}`,children:se.summary?.allTestsPassed?"All Tests Passed":"Issues Found"})]})}),i.jsxs("div",{className:"card-body",children:[se.summary&&i.jsxs("div",{className:"mb-3",children:[i.jsxs("p",{children:[i.jsx("strong",{children:"Tests:"})," ",se.summary.passedTests,"/",se.summary.totalTests," passed"]}),se.summary.criticalIssues.length>0&&i.jsxs(Nt,{variant:"danger",children:[i.jsx("strong",{children:"Critical Issues:"}),i.jsx("ul",{className:"mb-0 mt-2",children:se.summary.criticalIssues.map((K,$e)=>i.jsxs("li",{children:[i.jsxs("strong",{children:[K.test,":"]})," ",K.error]},$e))})]})]}),i.jsxs("details",{children:[i.jsx("summary",{children:"View Detailed Results"}),i.jsx("pre",{className:"mt-2",style:{fontSize:"12px",maxHeight:"300px",overflow:"auto"},children:JSON.stringify(se,null,2)})]})]})]})]}),i.jsx("div",{className:"mb-3",children:i.jsxs(ce,{variant:"secondary",onClick:()=>y(!0),title:In?"Send a test webhook simulating a CCTV request":"Requires webhook management permission",disabled:!In,children:[i.jsx("i",{className:"fas fa-video me-2"}),"CCTV Request Test"]})}),i.jsxs(ce,{variant:"danger",onClick:()=>{try{null.throwError()}catch(K){throw x.captureException(K,{extra:{context:"Test Error Button Clicked"}}),v&&v("Test error sent to Sentry!","check-circle"),K}},children:[i.jsx("i",{className:"fas fa-bug"})," Test Sentry Error"]}),i.jsx("div",{className:"mt-3",children:i.jsx(eA,{showInAppNotification:v})})]})]}),Ie==="factions"&&i.jsxs("div",{className:"card",children:[i.jsx("div",{className:"card-header",children:i.jsx("h3",{children:"Faction Data Management"})}),i.jsx("div",{className:"card-body",children:J||t?pr?i.jsxs("div",{children:[i.jsx("p",{className:"text-muted mb-4",children:"Upload and manage faction member data for access control and reporting."}),i.jsx(Ox,{showNotification:v})]}):i.jsxs("div",{className:"alert alert-warning",children:[i.jsx("i",{className:"fas fa-exclamation-triangle me-2"}),i.jsx("strong",{children:"Access Denied:"})," Your current faction rank (",Ee?.scriptRank||"N/A",") does not have permission to upload faction data.",i.jsx("br",{}),i.jsx("small",{children:"Required: Script Rank 10 or higher"})]}):i.jsxs("div",{className:"alert alert-info",children:[i.jsx("i",{className:"fas fa-info-circle me-2"}),"Please log in with your GTA World account to access faction management features."]})})]}),Ie==="database"&&i.jsxs("div",{className:"card",children:[i.jsx("div",{className:"card-header",children:"Database Editor"}),i.jsx("div",{className:"card-body",children:J||t?jn?i.jsx(Fx,{showNotification}):i.jsxs("div",{className:"alert alert-warning",children:[i.jsx("i",{className:"fas fa-exclamation-triangle me-2"}),i.jsx("strong",{children:"Access Denied:"})," Your current faction rank (",Ee?.scriptRank||"N/A",") does not have database access permissions.",i.jsx("br",{}),i.jsx("small",{children:"Required: Script Rank 12 or higher"})]}):i.jsxs("div",{className:"alert alert-info",children:[i.jsx("i",{className:"fas fa-info-circle me-2"}),"Please log in with your GTA World account to access database management features."]})})]}),Ie==="rankPermissions"&&i.jsxs("div",{className:"card",children:[i.jsxs("div",{className:"card-header",children:[i.jsx("i",{className:"fas fa-user-shield me-2"}),"Rank Permissions Management"]}),i.jsx("div",{className:"card-body",children:mr?i.jsxs("div",{children:[i.jsxs("div",{className:"alert alert-info",children:[i.jsx("i",{className:"fas fa-info-circle me-2"}),i.jsx("strong",{children:"Rank Permissions Editor"}),i.jsx("p",{className:"mb-0 mt-2",children:"Configure which ranks have access to different admin panel sections."})]}),i.jsxs("div",{className:"row",children:[i.jsxs("div",{className:"col-md-6",children:[i.jsx("h6",{children:"Current Permission Levels"}),i.jsxs("div",{className:"list-group",children:[i.jsxs("div",{className:"list-group-item",children:[i.jsx("strong",{children:"Faction Data Upload:"})," Rank 10+"]}),i.jsxs("div",{className:"list-group-item",children:[i.jsx("strong",{children:"Database Editor:"})," Rank 12+"]}),i.jsxs("div",{className:"list-group-item",children:[i.jsx("strong",{children:"Bingo Management:"})," Rank 14+"]}),i.jsxs("div",{className:"list-group-item",children:[i.jsx("strong",{children:"User Management:"})," Rank 14+"]}),i.jsxs("div",{className:"list-group-item",children:[i.jsx("strong",{children:"Rank Permissions:"})," Rank 15+"]}),i.jsxs("div",{className:"list-group-item",children:[i.jsx("strong",{children:"Google Admin Override:"})," Email Login Only"]})]})]}),i.jsxs("div",{className:"col-md-6",children:[i.jsx("h6",{children:"Permission Configuration"}),i.jsxs("div",{className:"alert alert-warning",children:[i.jsx("i",{className:"fas fa-construction me-2"}),i.jsx("strong",{children:"Coming Soon"}),i.jsx("p",{className:"mb-0 mt-2",children:"Dynamic permission configuration interface will be available in a future update."})]})]})]})]}):i.jsxs("div",{className:"alert alert-danger",children:[i.jsx("i",{className:"fas fa-exclamation-triangle me-2"}),i.jsx("strong",{children:"Access Denied:"})," Your current faction rank (",Ee?.scriptRank||"N/A",") does not have permission to manage rank permissions.",i.jsx("br",{}),i.jsx("small",{children:"Required: Script Rank 15 or higher, or Google Admin access"})]})})]})]})]})})},Qt={physician:{displayName:"Physician Recruitment",path:"selectOptions/physicianRecruitmentDetails"},psych:{displayName:"Psychologist/Psychiatrist Recruitment",path:"selectOptions/psychPositionDetailsData"},admin:{displayName:"Admin Recruitment",path:"selectOptions/adminPositionDetailsData"},nursing:{displayName:"Nursing Recruitment",path:"selectOptions/nursePositionDetailsData"},ems:{displayName:"EMS Recruitment",path:"selectOptions/emsPositionDetailsData"},coroner:{displayName:"Coroner Recruitment",path:"selectOptions/coronerPositionDetailsData"}},ms=[{id:"er",name:"Emergency Room",path:"ER"},{id:"ems",name:"EMS",path:"EMS"},{id:"coroner",name:"Coroner",path:"Coroner"}],rA=async()=>{if(console.log("[Desktop Notify] Requesting permission..."),"Notification"in window){if(Notification.permission==="granted")return console.log("[Desktop Notify] Permission already granted."),!0;if(Notification.permission!=="denied"){console.log("[Desktop Notify] Permission is default, prompting user.");const t=await Notification.requestPermission();return console.log("[Desktop Notify] User responded with permission:",t),t==="granted"}}else return console.warn("[Desktop Notify] This browser does not support desktop notification."),!1;return console.log("[Desktop Notify] Permission is denied."),!1},ea=(t,e)=>{if(console.log("[Desktop Notify] Attempting to show notification. Current permission:",Notification.permission),Notification.permission==="granted")try{const n=new Notification(t,e);console.log("[Desktop Notify] Notification created:",n),n.onclick=()=>{console.log("[Desktop Notify] Notification clicked."),window.focus(),n.close()},n.onerror=r=>{console.error("[Desktop Notify] Error displaying notification:",r)},n.onshow=()=>{console.log("[Desktop Notify] Notification shown successfully.")}}catch(n){console.error("[Desktop Notify] Error creating Notification object:",n)}else console.warn("[Desktop Notify] Permission not granted, cannot show notification.")},qt=()=>{const t=navigator.userAgent||"N/A";let e="N/A";try{e=Intl.DateTimeFormat().resolvedOptions().timeZone}catch(n){console.warn("Could not determine user timezone:",n)}return{userAgent:t,timeZone:e}},lt=async(t,e,n,r=null,s="N/A",o="N/A",a=null,l=null)=>{const d="https://discord.com/api/webhooks/1384194105944445038/n5fEy-fruWhtCygpT3wn6p5ciffKNhnQRo34Q09Vity_t8U4JEgCOhZgeZhluVqWNYtG",u=a?`${a} (${t})`:t||"Unknown";let g=r?`**Action:** ${e||"Unknown Action"}
**Admin:** ${u}
**Category:** ${r}`:`**Action:** ${e||"Unknown Action"}
**Admin:** ${u}`;if(l&&l.debugInfo){const{debugInfo:S}=l;if(S.foundMember&&S.charactersChecked?.length>0){const _=l.faction;g+=`
**Primary Character:** ${_?.characterName||"Unknown"} (ID: ${_?.characterId||"N/A"}) - Rank ${_?.scriptRank||"N/A"}`,S.charactersChecked.length>1&&(g+=`
**All Characters:** ${S.charactersChecked.length} total`)}}const f=[{name:"Details",value:`\`\`\`${n.substring(0,1e3)}\`\`\``,inline:!1}];if(l&&l.debugInfo?.charactersChecked?.length>0){const S=l.debugInfo.charactersChecked.map((I,F)=>`${F+1}. ${I.name||"Unknown"} (ID: ${I.id||"N/A"})`).join(`
`);l.debugInfo.charactersChecked.filter(I=>l.faction&&I.id===l.faction.characterId);let _=`**All Characters (${l.debugInfo.charactersChecked.length}):**
${S}`;l.debugInfo.foundMember?(_+=`

**PHMC Member:** ${l.faction?.characterName||"Unknown"} (Rank ${l.faction?.scriptRank||"N/A"})`,_+=`
**Access Level:** ${l.accessLevel||"none"}`):_+=`

**PHMC Status:** Not a faction member`,f.push({name:"Character Information",value:_.substring(0,1024),inline:!1})}const p={title:"Admin Action Logged",color:16753920,description:g,fields:f,timestamp:new Date().toISOString(),footer:{text:`PHMC Tools | ${o}`}};try{const S=await fetch(d,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({embeds:[p]})});S.ok?console.log(`Admin action logged to Discord: ${e}`):(console.error(`Failed to send admin action webhook. Status: ${S.status}`),en(`Admin Action Discord webhook failed: ${S.status}`,"error"))}catch(S){console.error("Error sending admin action webhook:",S),nt(S,{extra:{context:"Admin Action Webhook Submission"}})}},sA=({formData:t,setFormData:e,showNotification:n,showNotification:r,commitInfo:s})=>{const[o,a]=b.useState(""),[l,d]=b.useState(""),[u,g]=b.useState(""),[f,p]=b.useState(""),[S,_]=b.useState(!1),[I,F]=b.useState(null),[P,k]=b.useState(""),[D,R]=b.useState(""),[$,O]=b.useState(""),[E,y]=b.useState(null),[w,x]=b.useState(!0),[v,A]=b.useState(!1),{user:C,isAuthenticated:M,isLoading:B,username:j}=dr(),[G,z]=b.useState(""),[V,ue]=b.useState({}),[ve,de]=b.useState(!1),[Q,ee]=b.useState(!1),[ne,pe]=b.useState(ms[0].id),[ge,be]=b.useState(!1),[Ae,Ge]=b.useState(!1),[Ke,xe]=b.useState(!1),[Ze,we]=b.useState(null),[et,yt]=b.useState(!1),[re,Re]=b.useState(null),[le,ke]=b.useState(()=>typeof Notification<"u"&&"permission"in Notification?Notification.permission:"unsupported"),[Ie,q]=b.useState(!1);b.useEffect(()=>{sessionStorage.getItem("showCctvModalAfterLogin")==="true"&&(q(!0),sessionStorage.removeItem("showCctvModalAfterLogin"))},[]);const[se,Y]=b.useState([]),[ie,te]=b.useState({name:"",url:"",type:"all"}),[Te,De]=b.useState(!1),[Rt,Ue]=b.useState(0),[J,ze]=b.useState(!1),[Be,Oe]=b.useState(""),[Ee,W]=b.useState(""),[Qe,ut]=b.useState(""),[tn,Mt]=b.useState(!0),[Pt,ct]=b.useState({enabled:!1,notification:"",dialog:"",affectedDeployments:[]}),nn=b.useRef(null),kt=async(U,X)=>{const _e=me(Ne,"webhook_logs"),Se=Aa(_e);await It(Se,{type:U,payload:X,timestamp:Date.now()})};b.useEffect(()=>{E&&mr()},[E]),b.useEffect(()=>{const U=me(Ne,"adminSettings/lockdownConfig"),X=Wi(U,_e=>{const Se=_e.val();Se&&ct({enabled:Se.enabled||!1,notification:Se.notification||"",dialog:Se.dialog||"",affectedDeployments:Se.affectedDeployments||[]})});return()=>X()},[]);const En=async()=>{ee(!0);const U=me(Ne,"adminSettings/lockdownConfig"),{userAgent:X,timeZone:_e}=qt();try{await xr(U,Pt),r("Lockdown status updated.","check-circle"),lt(vt?.email||"Unknown User","Updated Lockdown Status",`Enabled: ${Pt.enabled}Notification: ${Pt.notification}Dialog: ${Pt.dialog}Affected Deployments: ${Pt.affectedDeployments.join(", ")}`,"Lockdown Status",X,_e)}catch(Se){console.error("Error updating lockdown status:",Se),r("Failed to update lockdown status.","error"),lt(vt?.email||"Unknown User","Failed to Update Lockdown Status",`Error: ${Se.message}`,"Lockdown Status",X,_e)}finally{ee(!1)}},Kt=async U=>{const X="https://discord.com/api/webhooks/1430314470902599680/o_JoPsW9jNgKICL9StKxgORICn3cOzu41FheUsJFsPkRAX-Xt9LKTulXhWCaQsU5Cfxw",{userAgent:_e,timeZone:Se}=qt(),ye={title:"(( 📹 Alert from the System Administrator )) ",color:5793266,fields:[{name:"Notes:",value:U.rank||"N/A",inline:!0},{name:"Requesting Officer",value:U.officer||"N/A",inline:!0},{name:"Officer Phone Number",value:U.officerPH||"N/A",inline:!0},{name:"Requesting Department",value:U.department||"N/A",inline:!0},...U.discordUsername?[{name:"Discord Username",value:U.discordUsername,inline:!0}]:[],{name:"Date/Time of Incident",value:U.incidentDateTime||"N/A",inline:!0},{name:"Reason for Request",value:U.requestReason||"N/A",inline:!0},{name:"CCTV Location",value:U.location||"N/A",inline:!1},{name:"Description of Events",value:""`${U.description||"N/A"}```,inline:!1},...U.oocNotes?[{name:"OOC Notes",value:""`${U.oocNotes}```,inline:!1}]:[],...U.DEBUG?[{name:"DEBUG",value:`\`\`\`json
${JSON.stringify(U.DEBUG,null,2)}
\`\`\``,inline:!1}]:[]],timestamp:new Date().toISOString(),footer:{text:"PHMC Tools - Developer Notification Service"}};try{const fe=await fetch(X,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({embeds:[ye]})});if(fe.ok)return r&&r("CCTV Test Webhook sent successfully!","check-circle"),lt(E?.email,"Sent CCTV Test Webhook","Sent a test webhook for a CCTV request to the dev channel.","Developer Testing",_e,Se,j),!0;{const He=await fe.text();return console.error(`Failed to send CCTV test webhook. Status: ${fe.status}`,He),en(`CCTV Test Webhook failed: ${fe.status}`,{level:"error",extra:{responseBody:He}}),r&&r(`Failed to send test webhook. Status: ${fe.status}`,"error"),!1}}catch(fe){return console.error("Error sending CCTV test webhook:",fe),nt(fe,{extra:{context:"CCTV Test Webhook Submission"}}),r&&r("A network error occurred sending the test webhook.","error"),!1}};b.useEffect(()=>{const U=()=>{console.log("[Desktop Notify] Permission status changed to:",typeof Notification<"u"?Notification.permission:"unsupported"),ke(typeof Notification<"u"?Notification.permission:"unsupported")};return"permissions"in navigator&&typeof navigator.permissions.query=="function"?navigator.permissions.query({name:"notifications"}).then(function(X){console.log("[Desktop Notify] Initial permission status (via query):",X.state),ke(X.state),X.onchange=U}).catch(X=>{console.warn("[Desktop Notify] Error querying notification permissions, falling back to Notification.permission:",X),ke(typeof Notification<"u"?Notification.permission:"unsupported")}):(console.log("[Desktop Notify] navigator.permissions.query not supported, using Notification.permission directly. Initial status:",typeof Notification<"u"?Notification.permission:"unsupported"),ke(typeof Notification<"u"?Notification.permission:"unsupported")),()=>{"permissions"in navigator&&typeof navigator.permissions.query=="function"&&navigator.permissions.query({name:"notifications"}).then(function(X){X.onchange=null}).catch(()=>{})}},[]);const Nn=b.useCallback(async U=>{if(!U||!Qt[U]){ue({}),e(ye=>({...ye,adminDisplayData:null,adminSelectedCategoryName:U?"Invalid Category":null})),r&&r("Invalid recruitment category selected.","error");return}de(!0);const X=Qt[U];let _e=0;const Se=3;for(;_e<Se;)try{console.log(`[Recruitment Data] Fetching data for ${X.displayName} (attempt ${_e+1}/${Se})`);const ye=me(Ne,X.path),fe=await qe(ye);if(fe.exists()){const He=fe.val();console.log(`[Recruitment Data] Successfully loaded ${Object.keys(He).length} positions for ${X.displayName}`),ue(He),e(it=>({...it,adminDisplayData:He,adminSelectedCategoryName:X.displayName}));break}else{console.warn(`[Recruitment Data] No data found at path: ${X.path}`),ue({}),e(He=>({...He,adminDisplayData:null,adminSelectedCategoryName:X.displayName})),r&&r(`No positions found for ${X.displayName}. The database may be empty or the path may be incorrect.`,"warning");break}}catch(ye){_e++,console.error(`[Recruitment Data] Error fetching data for ${X.displayName} (attempt ${_e}/${Se}):`,ye),_e>=Se?(r&&r(`Failed to load recruitment data for ${X.displayName} after ${Se} attempts. Please check your internet connection and try again.`,"error"),ue({}),e(fe=>({...fe,adminDisplayData:null,adminSelectedCategoryName:X.displayName}))):await new Promise(fe=>setTimeout(fe,1e3*_e))}de(!1)},[e,r]),[Gt,Os]=b.useState("");b.useEffect(()=>{x(!0);const U=xS(ii,X=>{const _e=nn.current!==null,Se=X!==null,{userAgent:ye,timeZone:fe}=qt();if(Se&&!_e){y(X),e(it=>({...it,isAdminAuthenticated:!0,adminUserEmail:X.email,adminDisplayData:null,adminSelectedCategoryName:null}));const He={email:X.email,uid:X.uid,isAdmin:!0,loginTime:new Date().toISOString()};sessionStorage.setItem("google-admin-user",JSON.stringify(He)),sessionStorage.setItem("admin-auth-context",JSON.stringify({isAdminAuthenticated:!0,adminUserEmail:X.email})),lt(X.email,"Admin Login","User successfully logged in to the Admin Panel.",null,ye,fe,j,C),r&&r(`Welcome, ${X.email}!`,"check-circle")}else if(!Se&&_e){const He=E?.email||"Unknown User";y(null),e(it=>({...it,isAdminAuthenticated:!1,adminUserEmail:null,adminDisplayData:null,adminSelectedCategoryName:null})),ue({}),z(""),sessionStorage.removeItem("google-admin-user"),sessionStorage.removeItem("admin-auth-context"),lt(He,"Admin Logout","User successfully logged out from the Admin Panel.",null,ye,fe,j,C),r&&r("Logged out from Admin Panel.","info-circle")}else if(Se&&_e){if(y(X),e(it=>({...it,isAdminAuthenticated:!0,adminUserEmail:X.email})),!sessionStorage.getItem("google-admin-user")){const it={email:X.email,uid:X.uid,isAdmin:!0,loginTime:new Date().toISOString()};sessionStorage.setItem("google-admin-user",JSON.stringify(it)),sessionStorage.setItem("admin-auth-context",JSON.stringify({isAdminAuthenticated:!0,adminUserEmail:X.email}))}}else y(null),e(He=>({...He,isAdminAuthenticated:!1,adminUserEmail:null})),sessionStorage.removeItem("google-admin-user"),sessionStorage.removeItem("admin-auth-context");nn.current=X?X.uid:null,x(!1)});return()=>U()},[e,r]);const Mn=b.useRef(null);b.useEffect(()=>{const U=Mn.current,X=M&&C,{userAgent:_e,timeZone:Se}=qt();if(X&&!U&&!B){console.log("[GTA OAuth Login] User successfully authenticated via GTA World OAuth");const ye=C.username,fe=C.faction?.characterName||C.username,He=C.faction?.scriptRank;lt(ye,"Admin OAuth Login",`GTA World OAuth user successfully logged in to Admin Panel.
Character: ${fe}
${He?`Script Rank: ${He}`:"No rank data"}`,null,_e,Se,j),r&&r(`Welcome, ${C.username}! OAuth login successful.`,"check-circle")}if(!X&&U&&!B){console.log("[GTA OAuth Logout] User logged out from GTA World OAuth");const ye=Mn.current?.username||"Unknown OAuth User";lt(ye,"Admin OAuth Logout","GTA World OAuth user logged out from Admin Panel.",null,_e,Se,ye),r&&r("OAuth logout completed.","info-circle")}Mn.current=X?C:null},[M,C,B,j,r]),b.useEffect(()=>{E&&G&&Qt[G]?Nn(G):E&&!G&&(ue({}),e(U=>({...U,adminDisplayData:null,adminSelectedCategoryName:null})))},[E,G,Nn,e]);const Jn=async()=>{O(""),x(!0);const{userAgent:U,timeZone:X}=qt();try{await qp(ii,P,D)}catch(_e){O(_e.message||"Failed to login."),x(!1),nt(_e,{level:"warning",extra:{email:P,context:"Admin Login Attempt"},tags:{login_result:"failure"}}),lt(P,"Admin Login Failed",`Attempted login with email: ${P}. Error: ${_e.message}`,null,U,X,j),r&&r(`Login failed: ${_e.message}`,"error")}},ss=U=>{U.key==="Enter"&&(U.preventDefault(),Jn())},hr=async()=>{O(""),A(!0);const{userAgent:U,timeZone:X}=qt(),_e=M?"GTA World OAuth":cr()?"Google Admin":"Firebase Email",Se=vt?.email||vt?.displayName||"Unknown User";try{console.log(`[Admin Logout] Logging out ${_e} user: ${Se}`),E&&(await AS(ii),console.log("[Admin Logout] Firebase auth signed out")),(M||cr())&&(ja(),console.log("[Admin Logout] GTA World session cleared")),y(null),O(""),k(""),R(""),console.log("[Admin Logout] Local admin state cleared"),lt(Se,"Admin Logout Successful",`Successfully logged out from ${_e} authentication.`,null,U,X),r&&r(`Successfully logged out from ${_e}`,"check-circle"),console.log("[Admin Logout] Initiating immediate redirect to home page"),setTimeout(()=>{window.location.href="/forms"},500)}catch(ye){console.error("[Admin Logout] Error during logout:",ye),O(ye.message||"Failed to logout."),lt(Se,"Admin Logout Failed",`Failed to log out from ${_e}. Error: ${ye.message}`,null,U,X),r&&r(`Logout failed: ${ye.message}`,"error"),console.log("[Admin Logout] Logout failed, but redirecting for security"),setTimeout(()=>{window.location.href="/"},1e3)}},xn=async()=>{if(!ie.name||!ie.url||!ie.type){r&&r("Please fill in all webhook fields","error");return}De(!0);try{const U=me(Ne,"webhooks"),X=Aa(U);await It(X,{...ie,createdAt:Date.now(),createdBy:vt?.email||"Unknown User"}),te({name:"",url:"",type:"all"}),r&&r("Webhook added successfully!","check-circle"),await mr()}catch(U){console.error("Error adding webhook:",U),r&&r("Failed to add webhook","error")}finally{De(!1)}},An=async U=>{if(window.confirm("Are you sure you want to delete this webhook?")){De(!0);try{const X=me(Ne,`webhooks/${U}`);await Hn(X),r&&r("Webhook deleted successfully!","check-circle"),await mr()}catch(X){console.error("Error deleting webhook:",X),r&&r("Failed to delete webhook","error")}finally{De(!1)}}},mr=async()=>{try{const U=me(Ne,"webhooks"),X=await qe(U);if(X.exists()){const _e=X.val(),Se=Object.keys(_e).map(ye=>({id:ye,..._e[ye]}));Y(Se)}else Y([])}catch(U){console.error("Error loading webhooks:",U)}},rn=async(U,X)=>{if(!E||!G||!Qt[G])return;const _e=V[U];if(!_e){console.error("Position details not found for key:",U),r("Error: Position details missing.","error");return}const Se=_e.displayName||_e.name||U,ye=X==="OPEN"?"CLOSED":"OPEN",fe=Qt[G],He=`${fe.path}/${U}/status`,{userAgent:it,timeZone:un}=qt();ee(!0);try{await xr(me(Ne),{[He]:ye});const Je=`${Se} status updated to ${ye} for ${fe.displayName}.`;r(Je,"check-circle"),lt(vt?.email||"Unknown User","Toggled Recruitment Status",`Position: ${Se}New Status: ${ye}`,fe.displayName,it,un),le==="granted"&&ea(`Recruitment Status Updated: ${fe.displayName}`,{body:`${Se} is now ${ye}.`,icon:"/phmc512.png",tag:`status-update-${G}-${U}`}),Nn(G)}catch(Je){console.error(`Error updating status for ${U}:`,Je),r(`Failed to update status for ${U}.`,"error"),lt(E?.email||"Unknown User","Failed to Toggle Recruitment Status",`Position: ${Se}Attempted Status: ${ye}Error: ${Je.message}`,fe.displayName,it,un)}finally{ee(!1)}},kr=(U,X)=>{G&&Nn(G);const{userAgent:_e,timeZone:Se}=qt();if(vt?.email&&U){const ye=Qt[G],fe=X==="edited"?"Edited Role":"Added New Role";if(lt(vt.email,fe,`Role Name: ${U.displayName||U.originalKey}Short Code: ${U.shortCode||"N/A"}Status: ${U.status||"N/A"}Key: ${U.originalKey}`,ye?.displayName||"Unknown Category",_e,Se),le==="granted"&&U?.displayName){const He=X==="edited"?`Role Updated: ${ye?.displayName||"Recruitment"}`:`New Role Added: ${ye?.displayName||"Recruitment"}`,it=X==="edited"?`Role "${U.displayName}" (${U.shortCode||"N/A"}) has been updated.`:`Role "${U.displayName}" (${U.shortCode||"N/A"}) has been added.`;ea(He,{body:it,icon:"/phmc512.png",tag:`${X}-role-${G}-${U.originalKey}`})}}},Wt=()=>{we(null),xe(!0);const{userAgent:U,timeZone:X}=qt();lt(E?.email||"Unknown User","Opened Add Role Modal","Admin opened the modal to add a new role.",Qt[G]?.displayName,U,X,j)},pr=(U,X)=>{we({...X,originalKey:U}),xe(!0);const{userAgent:_e,timeZone:Se}=qt();lt(E?.email||"Unknown User","Opened Edit Role Modal",`Admin opened the modal to edit role: ${X.displayName||U}`,Qt[G]?.displayName,_e,Se,j)},jn=()=>{xe(!1),we(null);const{userAgent:U,timeZone:X}=qt();lt(E?.email||"Unknown User","Closed Role Modal","Admin closed the role add/edit modal.",Qt[G]?.displayName,U,X,j)},In=(U,X)=>{Re({key:U,data:X}),yt(!0);const{userAgent:_e,timeZone:Se}=qt();lt(E?.email||"Unknown User","Opened Rename Role Key Modal",`Admin opened the modal to rename key for role: ${X.displayName||U}`,Qt[G]?.displayName,_e,Se,j)},Xn=()=>{if(G&&Nn(G),E?.email&&re&&le==="granted"){const U=Qt[G];ea(`Role Key Renamed: ${U?.displayName||"Recruitment"}`,{body:`Key for "${re.data.displayName||re.key}" has been changed.`,icon:"/phmc512.png",tag:`rename-key-${G}-${re.key}`})}Re(null)},Fr=async()=>{console.log("[Desktop Notify] 'Enable Desktop Notifications' button clicked.");const U=await rA(),X=typeof Notification<"u"?Notification.permission:"unsupported";console.log("[Desktop Notify] Permission after request:",X,"(Granted flag:",U,")"),ke(X);const{userAgent:_e,timeZone:Se}=qt();E?.email&&lt(vt?.email||"Unknown User","Desktop Notification Preference Changed",`Permission status: ${X}${U?" (Granted by user)":" (Not granted or dismissed)"}`,null,_e,Se,j),U?(r&&r("Desktop notifications enabled for this site! Please ensure your OS settings also allow notifications from your browser.","check-circle",7e3),ea("PHMC Tools: Notifications Enabled",{body:"You will now receive desktop notifications for important admin actions. Ensure your OS allows browser notifications.",icon:"/phmc512.png"})):X==="denied"?r&&r("Desktop notifications are blocked. Please enable them in your browser settings.","warning"):r&&r("Desktop notifications were not enabled.","warning")},Le=U=>!U||U.length===0?[]:[...U].sort(()=>.5-Math.random()),dn=async()=>{const U=ms.find(ye=>ye.id===ne);if(!U||!window.confirm(`Are you sure you want to clear ALL ${U.name} Bingo activity logs? This action cannot be undone.`))return;ee(!0);const X=me(Ne,`bingo/logs/${U.path}/activityLog`),{userAgent:_e,timeZone:Se}=qt();try{await Hn(X),r(`${U.name} Bingo activity log has been cleared.`,"check-circle"),lt(vt?.email||"Unknown User",`Cleared ${U.name} Bingo Activity`,`The 'bingo/logs/${U.path}/activityLog' path was deleted from Firebase.`,`${U.name} Bingo`,_e,Se)}catch(ye){console.error("Error clearing bingo activity log:",ye),r(`Failed to clear ${U.name} bingo activity log.`,"error"),lt(vt?.email||"Unknown User",`Failed to Clear ${U.name} Bingo Activity`,`Error: ${ye.message}`,`${U.name} Bingo`,_e,Se)}finally{ee(!1)}},K=async()=>{const U=ms.find(He=>He.id===ne);if(!U||!window.confirm(`Are you sure you want to generate a NEW ${U.name} Bingo card? This will clear the current game and activity log for ALL users.`))return;ee(!0);const X=me(Ne,`bingo/phrases/${U.path}`),_e=me(Ne,`bingo/cards/${U.path}/phrases`),Se=me(Ne,`bingo/logs/${U.path}/activityLog`),{userAgent:ye,timeZone:fe}=qt();try{const He=await qe(X);if(!He.exists()){r(`Error: Master phrases for ${U.name} not found. Cannot generate new card.`,"error"),lt(E.email,`Failed to Generate New ${U.name} Bingo Card`,`Master phrases not found in Firebase at 'bingo/phrases/${U.path}'.`,`${U.name} Bingo`,ye,fe),ee(!1);return}const it=He.val(),un=Array.isArray(it)?it:typeof it=="object"&&it!==null?Object.values(it).map(Jt=>typeof Jt=="object"?Jt.phrase:Jt).filter(Boolean):[];if(un.length<24){r(`Error: Not enough master phrases for ${U.name} (need at least 24).`,"error"),lt(E.email,`Failed to Generate New ${U.name} Bingo Card`,`Not enough master phrases (${un.length} found, need 24).`,`${U.name} Bingo`,ye,fe),ee(!1);return}const Je=Le(un).slice(0,24);await It(_e,Je),await Hn(Se),r(`New ${U.name} Bingo card generated and activity log cleared!`,"check-circle"),lt(vt?.email||"Unknown User",`Generated New ${U.name} Bingo Card`,"A new card was generated and the activity log cleared for all users.",`${U.name} Bingo`,ye,fe)}catch(He){console.error("Error generating new bingo card:",He),r("Failed to generate new bingo card.","error"),lt(vt?.email||"Unknown User",`Failed to Generate New ${U.name} Bingo Card`,`Error: ${He.message}`,`${U.name} Bingo`,ye,fe)}finally{ee(!1)}},$e=async()=>{const U=ms.find(fe=>fe.id===ne);if(!U||!window.confirm(`Are you sure you want to DISABLE the ${U.name} Bingo card? This will remove the current card and clear all progress. The game will be unavailable until a new card is generated.`))return;ee(!0);const X=me(Ne,`bingo/cards/${U.path}`),_e=me(Ne,`bingo/logs/${U.path}`),{userAgent:Se,timeZone:ye}=qt();try{await Hn(X),await Hn(_e),r(`${U.name} Bingo has been disabled and all data cleared.`,"check-circle"),lt(vt?.email||"Unknown User",`Disabled ${U.name} Bingo Card`,`The card and activity log for '${U.name}' were deleted from Firebase.`,`${U.name} Bingo`,Se,ye)}catch(fe){console.error("Error disabling bingo card:",fe),r(`Failed to disable ${U.name} bingo card.`,"error"),lt(vt?.email||"Unknown User",`Failed to Disable ${U.name} Bingo Card`,`Error: ${fe.message}`,`${U.name} Bingo`,Se,ye)}finally{ee(!1)}},$t=async()=>{if(!window.confirm("Are you sure you want to manually reset all active Bingo cards? This will clear their current progress."))return;const U=me(Ne,"bingo/meta");await xr(U,{lastManualRegenTimestamp:xC()}),r("Manual daily bingo reset initiated...","sync-alt",5e3);const X={success:[],noCard:[],notEnoughPhrases:[],errors:[]};await Promise.all(ms.map(async fe=>{const He=me(Ne,`bingo/cards/${fe.path}/phrases`);if(!(await qe(He)).exists()){X.noCard.push(fe.name);return}const un=me(Ne,`bingo/phrases/${fe.path}`),Je=await qe(un);if(!Je.exists()){X.notEnoughPhrases.push(`${fe.name} (no master list)`);return}const Jt=Je.val(),Ln=Array.isArray(Jt)?Jt.filter(Boolean):typeof Jt=="object"&&Jt!==null?Object.values(Jt).map(Xt=>typeof Xt=="object"?Xt.phrase:Xt).filter(Boolean):[];if(Ln.length<24){X.notEnoughPhrases.push(`${fe.name} (${Ln.length}/24)`);return}try{const Xt=Le(Ln).slice(0,24),Si=me(Ne,`bingo/logs/${fe.path}/activityLog`);await It(He,Xt),await Hn(Si),X.success.push(fe.name)}catch(Xt){console.error(`Error manually regenerating ${fe.name} card:`,Xt),X.errors.push(`${fe.name}: ${Xt.message}`)}}));const{userAgent:_e,timeZone:Se}=qt();let ye="";X.success.length>0&&(ye+=`✅ Regenerated: ${X.success.join(", ")}`),X.noCard.length>0&&(ye+=`➖ Skipped (Disabled): ${X.noCard.join(", ")}`),X.notEnoughPhrases.length>0&&(ye+=`⚠️ Skipped (Not Enough Phrases): ${X.notEnoughPhrases.join(", ")}`),X.errors.length>0&&(ye+=`❌ Errors: ${X.errors.join(", ")}`),lt(vt?.email||"Unknown User","Manual Bingo Reset",ye.trim(),"Bingo Management",_e,Se),r("Manual bingo reset complete!","check-circle")},[bn,Tn]=b.useState(!1);if(v)return i.jsx("div",{className:"container mt-5 text-center",children:i.jsx("div",{className:"card",children:i.jsxs("div",{className:"card-body",children:[i.jsx("i",{className:"fas fa-sign-out-alt fa-3x text-warning mb-3"}),i.jsx("h4",{children:"Signing Out..."}),i.jsx("p",{children:"You are being logged out for security. Redirecting to home page..."}),i.jsx("div",{className:"spinner-border text-primary",role:"status",children:i.jsx("span",{className:"visually-hidden",children:"Loading..."})})]})})});if(w||B)return i.jsx("p",{children:"Verifying authentication..."});const Rn=cr(),Pr=E||M||Rn,vt=E||(M&&C?{email:C.username,uid:C.id?.toString()||"gta-user",displayName:C.username,isGtaAuth:!0,...C}:null)||(Rn?{email:xd()?.email||"admin@google.auth",uid:"google-admin",displayName:"Google Admin",isGoogleAuth:!0}:null);if(!Pr)return i.jsx("div",{className:"container mt-5",children:i.jsx("div",{className:"row justify-content-center",children:i.jsx("div",{className:"col-md-6 col-lg-4",children:i.jsx("div",{className:"card",children:i.jsxs("div",{className:"card-body",children:[i.jsx("h3",{className:"card-title text-center mb-4",children:"Admin Login"}),i.jsxs(he.Group,{className:"mb-3",controlId:"adminAuthEmail",children:[i.jsx(he.Label,{children:"Email address"}),i.jsx(he.Control,{type:"email",value:P,onChange:U=>k(U.target.value),required:!0,placeholder:"Enter email"})]}),i.jsxs(he.Group,{className:"mb-3",controlId:"adminAuthPassword",children:[i.jsx(he.Label,{children:"Password"}),i.jsx(he.Control,{type:"password",value:D,onChange:U=>R(U.target.value),onKeyDown:ss,required:!0,placeholder:"Password"})]}),$&&i.jsx("p",{className:"text-danger text-center",children:$}),i.jsx("div",{className:"d-grid",children:i.jsx(ce,{variant:"primary",type:"button",onClick:Jn,children:"Login"})})]})})})})});const jt=ms.find(U=>U.id===ne),Ms=(U,X,_e="")=>{const Se="https://phmc-tools.gta.world/",ye="https://gtaw-forms.github.io/forms/",fe="https://i.ibb.co/0pgw9hHm/phmc.png",He=[];He.push({name:"[Delayed Updates] Form Generator Link",value:Se,inline:!1}),He.push({name:"Alternative Form Generator Link",value:ye,inline:!1}),_e&&_e.trim()&&He.push({name:"Related Link",value:_e.trim(),inline:!1});const it={title:U||"PHMC Admin Notification",url:_e&&_e.trim()?_e.trim():Se,description:X||void 0,color:7506394,timestamp:new Date().toISOString(),fields:He,footer:{text:`PHMC Form Generator v${s?.sha||"N/A"}`}};return{username:"PHMC Admin",avatar_url:fe,embeds:[it]}},is=async U=>{U.preventDefault(),_(!0),F(null);const X=se.find(fe=>fe.id===o);if(!X){console.error("No webhook selected or webhook not found"),F("error"),_(!1);return}const _e=Ms(l,u,f);let Se=!1,ye=null;try{const fe=await fetch(X.url,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_e)});Se=fe.ok,ye=fe.status,Se||console.error("Webhook send failed:",fe.status,fe.statusText)}catch(fe){console.error("Error sending custom webhook:",fe),Se=!1}try{await kt("custom_webhook",{webhook:{id:X.id,name:X.name,type:X.type,url:X.url},title:l,message:u,customUrl:f,adminUser:E?.email||"Unknown Admin",success:Se,responseStatus:ye,timestamp:new Date().toISOString()}),Ue(fe=>fe+1)}catch(fe){console.error("Failed to log custom webhook to Firebase:",fe)}F(Se?"success":"error"),_(!1),Se&&(d(""),g(""),p(""))};return i.jsxs(i.Fragment,{children:[i.jsx(nA,{currentUser:vt,gtaWorldUser:C,desktopNotificationPermission:le,handleEnableDesktopNotifications:Fr,isLoadingStatus:tn,formGeneratorStatus:Be,setFormGeneratorStatus:Oe,alternativeFormGeneratorStatus:Ee,setAlternativeFormGeneratorStatus:W,localHostStatus:Qe,setLocalHostStatus:ut,isUpdatingDb:Q,selectedRecruitmentCategory:G,setSelectedRecruitmentCategory:z,recruitmentCategories:Qt,handleAddRoleClick:Wt,isLoadingRecruitmentData:ve,currentRecruitmentData:V,handleRenameRoleKeyClick:In,handleEditRoleClick:pr,handleTogglePositionStatus:rn,selectedAdminBingoType:ne,setSelectedAdminBingoType:pe,BINGO_TYPES:ms,handleManualResetAllBingoCards:$t,handleGenerateNewBingoCard:K,handleClearBingoActivity:dn,handleDisableBingoCard:$e,setShowEditBingoPhrasesModal:be,selectedTypeForEdit:jt,setShowReviewPhrasesModal:Ge,setShowUserManagementModal:ze,setShowCctvWebhookModal:q,setShowMarkdownModal:Tn,handleLogout:hr,Sentry:Hh,showInAppNotification:r,lockdownConfig:Pt,setLockdownConfig:ct,handleUpdateLockdownStatus:En,webhooks:se,newWebhook:ie,setNewWebhook:te,handleAddWebhook:xn,handleDeleteWebhook:An,isUpdatingWebhooks:Te,customWebhookChannel:o,setCustomWebhookChannel:a,customWebhookTitle:l,setCustomWebhookTitle:d,customWebhookMessage:u,setCustomWebhookMessage:g,customWebhookUrl:f,setCustomWebhookUrl:p,customWebhookSending:S,customWebhookResult:I,handleSendCustomWebhook:is,logRefreshTrigger:Rt,setLogRefreshTrigger:Ue}),G&&Qt[G]&&i.jsx(bx,{show:Ke,onHide:jn,categoryKey:G,categoryConfig:Qt[G],showNotification:r,onRoleSaved:kr,roleToEdit:Ze}),re&&G&&Qt[G]&&i.jsx(Nx,{show:et,onHide:()=>{yt(!1),Re(null)},categoryConfig:Qt[G],currentRoleKey:re.key,currentRoleData:re.data,showInAppNotification:r,onKeyRenamed:Xn,sendAdminActionWebhook:lt,adminUserEmail:E?.email}),i.jsx(xx,{show:ge,onHide:()=>be(!1),showNotification:r,commitInfo:s,sendAdminActionWebhook:lt,adminUserEmail:E?.email,bingoType:jt}),i.jsx(Ix,{show:Ae,onHide:()=>Ge(!1),showNotification:r,sendAdminActionWebhook:lt,adminUserEmail:E?.email}),i.jsx(Xf,{show:Ie,onHide:()=>q(!1),onSubmit:Kt,showNotification:r}),i.jsx(kx,{show:J,onHide:()=>ze(!1),database:Ne,showNotification:r}),"        "]})},mt={DeathReport:()=>Pe(()=>import("./deathReport-BtAm2t4_.js"),__vite__mapDeps([0,1,2,3,4,5])),CoronerEmail:()=>Pe(()=>import("./CoronerEmail-BbPugudr.js"),__vite__mapDeps([6,1,2,4,5])),PhysEval:()=>Pe(()=>import("./PhysEvalPHMC-CXqNdp-n.js"),__vite__mapDeps([7,1,2,4,5])),GeneralConsult:()=>Pe(()=>import("./GeneralConsult-IfV8f5st.js"),__vite__mapDeps([8,1,2,5,3,4])),EmergencyForm:()=>Pe(()=>import("./EmergencyForm-DfeME4N_.js"),__vite__mapDeps([9,1,2,5,4])),DevTest:()=>Pe(()=>import("./devTest-B8FvJgpu.js"),__vite__mapDeps([10,1,2])),CommNotePHMC:()=>Pe(()=>import("./CommNotePHMC-B2RIYRKa.js"),__vite__mapDeps([11,1,2,5,4])),CommNotePBC:()=>Pe(()=>import("./CommNotePBC-BYUbqeQa.js"),__vite__mapDeps([12,1,2,5,4])),PatientFile:()=>Pe(()=>import("./PatientFile-DhzUlckh.js"),__vite__mapDeps([13,1,2,3,14,5,15])),MentalHealth:()=>Pe(()=>import("./MentalHealth-CD8TOnGW.js"),__vite__mapDeps([16,1,2,5,4])),EmailInternal:()=>Pe(()=>import("./EmailInternal-BIs1ga2f.js"),__vite__mapDeps([17,1,2,3,4,5])),Surgical:()=>Pe(()=>import("./Surgical-CknbbMXf.js"),__vite__mapDeps([18,1,2,5,4])),MedicalRecords:()=>Pe(()=>import("./MedicalRecords-Cjm2ipXA.js"),__vite__mapDeps([19,1,2,5,14,4])),Shrink:()=>Pe(()=>import("./Shrink-B6QF0Pns.js"),__vite__mapDeps([20,1,2,4,5])),Autopsy:()=>Pe(()=>import("./Autopsy-D84Z_G4J.js"),__vite__mapDeps([21,1,2,4,5])),Certificate:()=>Pe(()=>import("./Certificate-DBb_ECBa.js"),__vite__mapDeps([22,1,2,4,5])),MassFatality:()=>Pe(()=>import("./MassFatality-BvlWSO6j.js"),__vite__mapDeps([23,1,2,3,4,5])),DeathRecord:()=>Pe(()=>import("./DeathRecord-CKaZBSMl.js"),__vite__mapDeps([24,1,2,5,4])),SicknessEmail:()=>Pe(()=>import("./SicknessEmail-BdgktYdD.js"),__vite__mapDeps([25,1,2,4,5,3])),PhysicianFields:()=>Pe(()=>import("./Physician-ClZmVcH7.js"),__vite__mapDeps([26,1,2])),PsychFields:()=>Pe(()=>import("./Psych-BXot0KJo.js"),__vite__mapDeps([27,1,2])),AdminFields:()=>Pe(()=>import("./Admin-Bn9o3FDR.js"),__vite__mapDeps([28,1,2])),NursingFields:()=>Pe(()=>import("./Nursing-BcLdDMF1.js"),__vite__mapDeps([29,1,2])),Coroner:()=>Pe(()=>import("./Coroner-BbdZlVEI.js"),__vite__mapDeps([30,1,2])),Ems:()=>Pe(()=>import("./Ems-_U9Ul6Qp.js"),__vite__mapDeps([31,1,2]))},iA=t=>{if(!t.isAdminAuthenticated)return"Please log in using the form fields to view admin controls.";const e=t.adminSelectedCategoryName||"Selected Category";let n=`[b]${e} Recruitment Statuses:[/b]
`;if(t.adminDisplayData&&typeof t.adminDisplayData=="object"&&Object.keys(t.adminDisplayData).length>0){const r=Object.entries(t.adminDisplayData).map(([s,o])=>{const a=o.displayName||o.name||s,l=o.status||"N/A";return`${a}: [color=${l==="OPEN"?"green":"red"}]${l}[/color]`});n+=r.join(" | ")}else t.adminDisplayData===null&&t.adminSelectedCategoryName?n+=`Data for ${e} not found or failed to load.`:t.adminSelectedCategoryName?n+=`Loading data for ${e}...`:t.isAdminAuthenticated&&!t.adminSelectedCategoryName?n+="Please select a recruitment category in the panel to view statuses.":n+="No recruitment data to display. Please select a category or check logs if issues persist.";return n},vr=[{version:24,name:"[Civilian] Medical Records",group:"PHMC",icon:La,generator:lN,componentLoader:mt.MedicalRecords,titleKey:"medicalRecords",sortOrder:1,hasCustomTitle:!0,titleGenerator:t=>t.formType==="release"?`[RELEASE REQUEST] ${t.patientFirstName||""} ${t.patientLastName||""} `.trim():`[Medical Information Update] -  ${t.patientName||"N/A"}`,userTypes:["civilian","other"],primaryFor:["civilian"]},{version:25,name:"[Civilian] Patient Files",group:"PHMC",icon:La,generator:eN,componentLoader:mt.PatientFile,titleKey:"patientFile",sortOrder:2,hasCustomTitle:!0,titleGenerator:t=>`[Medical Information Registration] -  ${t.patientName||"N/A"}`,userTypes:["civilian","other"],primaryFor:["civilian"]},{version:1,name:"Forensic Services ",group:"PHMC",icon:NN,generator:X0,componentLoader:mt.DeathReport,titleKey:"deathReport",sortOrder:10,hasCustomTitle:!0,titleGenerator:t=>{const{typeOfDeath:e,decedentName:n,decedentOOC:r,dateTime:s}=t,o=s?new Date(s).toLocaleDateString("en-US"):"N/A";return`[${e||"N/A"}] ${n||"N/A"} ((${r||"N/A"})) - ${o}`},userTypes:["phmcStaff","coroner","other"],primaryFor:["coroner"],requiredFaction:["PHMC"],requiredRank:1,isPHMC:!0},{version:4,name:"Autopsy Report",group:"PHMC",icon:xN,generator:pN,componentLoader:mt.Autopsy,titleKey:"autopsyReport",sortOrder:11,isHiddenInSelector:!0,hasCustomTitle:!0,titleGenerator:t=>{const{decedentName:e,decedentOOC:n}=t;return`CASE ## ${e||"N/A"} ((${n||"N/A"})) | SENT/COMPLETED/PENDING`},userTypes:["phmcStaff","coroner","other"],primaryFor:["coroner"],requiredFaction:["PHMC"],requiredRank:1,isPHMC:!0},{version:2,name:"Coroner Email",group:"PHMC",icon:aa,generator:Q0,componentLoader:mt.CoronerEmail,titleKey:"coronerEmail",sortOrder:12,isHiddenInSelector:!0,hasCustomTitle:!0,titleGenerator:t=>{const{decedentName:e,decedentOOC:n,paperworkType:r}=t;if(r&&r.toLowerCase().includes("mass fatality"))return`Coroner Report - ${e||"N/A"} | (MASS FATALITY)`;const s=(e||"").split(", ").filter(Boolean),o=(n||"").split(", ").filter(Boolean);let a=[];for(let l=0;l<s.length;l++){const d=s[l],u=o[l]?`((${o[l]}))`:"";a.push(`${d} ${u}`.trim())}return a.length>0?`Coroner Report - ${a.join(", ")}`:"Coroner Report - N/A"},userTypes:["phmcStaff","coroner","other"],primaryFor:["coroner"],requiredFaction:["PHMC"],requiredRank:1,isPHMC:!0},{version:8,name:"Certificate of Death",group:"PHMC",icon:AN,generator:gN,componentLoader:mt.Certificate,titleKey:"certificateOfDeath",sortOrder:13,isHiddenInSelector:!0,hasCustomTitle:!0,titleGenerator:t=>`[Death Certificate] -  ${t.decedentOOC||"N/A"}`,userTypes:["phmcStaff","coroner","other"],primaryFor:["coroner"],requiredFaction:["PHMC"],requiredRank:1,isPHMC:!0},{version:5,name:"Surgical Ops",group:"PHMC",icon:RN,generator:Z0,componentLoader:mt.Surgical,titleKey:"surgicalOps",sortOrder:20,titleGenerator:t=>`Surgical Ops: ${t.patientName||"Unknown"}`,userTypes:["phmcStaff","other"],primaryFor:["phmcStaff"],requiredFaction:["PHMC"],requiredRank:1,isPHMC:!0},{version:6,name:"Physical Evaluation",group:"PHMC",icon:vl,generator:tN,componentLoader:mt.PhysEval,titleKey:"physEvalPHMC",sortOrder:21,titleGenerator:t=>`Physical Evaluation: ${t.patientName||"Unknown"}`,userTypes:["phmcStaff","other"],primaryFor:["phmcStaff"],requiredFaction:["PHMC"],requiredRank:1,isPHMC:!0},{version:11,name:"Mass Fatality Report",group:"PHMC",icon:IN,generator:bN,componentLoader:mt.MassFatality,titleKey:"massFatalityReport",sortOrder:14,isHiddenInSelector:!0,hasCustomTitle:!0,titleGenerator:t=>{const{decedents:e,dateTime:n}=t;let r="No Date";if(n){const s=n.split("T")[0],[o,a,l]=s.split("-");r=`${a}/${l}/${o}`}return e&&e.length>0?`[Mass Fatality Report] - ${e.map(o=>o.decedentName).filter(o=>o).join(", ")||"N/A"} - ${r}`:`[Mass Fatality Report] - N/A - ${r}`},userTypes:["phmcStaff","coroner","other"],primaryFor:["coroner"],requiredFaction:["PHMC"],requiredRank:1,isPHMC:!0},{version:7,name:"Physical Evaluation (PBC)",group:"PHMC",icon:sr,generator:nN,componentLoader:mt.PhysEval,titleKey:"physEvalPBC",sortOrder:22,isHiddenInSelector:!0,titleGenerator:t=>`Physical Evaluation: ${t.patientName||"Unknown"}`,userTypes:["phmcStaff","other"],primaryFor:["phmcStaff"],requiredFaction:["PHMC"],requiredRank:1,isPHMC:!0},{version:14,name:"Mental Health",group:"PHMC",icon:ph,generator:rN,componentLoader:mt.MentalHealth,titleKey:"mentalHealthPHMC",sortOrder:23,hasCustomTitle:!0,titleGenerator:t=>{const e=t.dateTime?new Date(t.date).toLocaleDateString("en-US"):"N/A";return`${t.patientID||"Unknown"} - ${e}`},userTypes:["phmcStaff","other"],primaryFor:["phmcStaff"],requiredFaction:["PHMC"],requiredRank:1,isPHMC:!0},{version:16,name:"Mental Health (PBC)",group:"PHMC",icon:sr,generator:sN,componentLoader:mt.MentalHealth,titleKey:"mentalHealthPBC",sortOrder:24,isHiddenInSelector:!0,hasCustomTitle:!0,titleGenerator:t=>{const e=t.patientID?new Date(t.date).toLocaleDateString("en-US"):"N/A";return`${t.patientName||"Unknown"} - ${e}`},userTypes:["phmcStaff","other"],primaryFor:["phmcStaff"],requiredFaction:["PHMC"],requiredRank:1,isPHMC:!0},{version:19,name:"ER Protocol",group:"PHMC",icon:kN,generator:oN,componentLoader:mt.EmergencyForm,titleKey:"erProtocol",sortOrder:25,titleGenerator:t=>`ER Protocol: ${t.patientName||"Unknown"}`,userTypes:["phmcStaff","other"],primaryFor:["phmcStaff"],requiredFaction:["PHMC"],requiredRank:1,isPHMC:!0},{version:20,name:"General Consultation",group:"PHMC",icon:FN,generator:iN,componentLoader:mt.GeneralConsult,titleKey:"generalConsultPHMC",sortOrder:26,titleGenerator:t=>`General Consultation: ${t.patientName||"Unknown"}`,userTypes:["phmcStaff","other"],primaryFor:["phmcStaff"],requiredFaction:["PHMC"],requiredRank:1,isPHMC:!0},{version:21,name:"General Consultation (PBC)",group:"PHMC",icon:sr,generator:uN,componentLoader:mt.GeneralConsult,titleKey:"generalConsultPBC",sortOrder:27,isHiddenInSelector:!0,titleGenerator:t=>`General Consultation: ${t.patientName||"Unknown"}`,userTypes:["phmcStaff","other"],primaryFor:["phmcStaff"],requiredFaction:["PHMC"],requiredRank:1,isPHMC:!0},{version:22,name:"Commentary Notes",group:"PHMC",icon:PN,generator:aN,componentLoader:mt.CommNotePHMC,titleKey:"commNotePHMC",sortOrder:28,titleGenerator:t=>`Commentary Note: ${t.patientName||"Unknown"}`,userTypes:["phmcStaff","other"],primaryFor:["phmcStaff"],requiredFaction:["PHMC"],requiredRank:1,isPHMC:!0},{version:23,name:"Commentary Notes (PBC)",group:"PHMC",icon:sr,generator:cN,componentLoader:mt.CommNotePBC,titleKey:"commNotePBC",sortOrder:29,isHiddenInSelector:!0,titleGenerator:t=>`Commentary Note: ${t.patientName||"Unknown"}`,userTypes:["phmcStaff","other"],primaryFor:["phmcStaff"],requiredFaction:["PHMC"],requiredRank:1,isPHMC:!0},{version:27,name:"PHMC Internal Email",group:"PHMC",icon:aa,generator:dN,componentLoader:mt.EmailInternal,titleKey:"internalEmail",sortOrder:30,titleGenerator:t=>`Internal Email: ${t.subject||"No Subject"}`,userTypes:["phmcStaff","other"],primaryFor:["phmcStaff"],requiredFaction:["PHMC"],requiredRank:1,isPHMC:!0},{version:28,name:"Psychological Evaluation",group:"PHMC",icon:ph,generator:hN,componentLoader:mt.Shrink,titleKey:"psychEvalPHMC",sortOrder:31,titleGenerator:t=>`Psychological Evaluation: ${t.patientName||"Unknown"}`,userTypes:["phmcStaff","other"],primaryFor:["phmcStaff"],requiredFaction:["PHMC"],requiredRank:1,isPHMC:!0},{version:29,name:"Psychological Evaluation (PBC)",group:"PHMC",icon:sr,generator:mN,componentLoader:mt.Shrink,titleKey:"psychEvalPBC",sortOrder:32,isHiddenInSelector:!0,titleGenerator:t=>`Psychological Evaluation: ${t.patientName||"Unknown"}`,userTypes:["phmcStaff","other"],primaryFor:["phmcStaff"],requiredFaction:["PHMC"],requiredRank:1,isPHMC:!0},{version:35,name:"Medical Sickness Email",group:"PHMC",icon:aa,generator:fN,componentLoader:mt.SicknessEmail,titleKey:"sicknessEmail",sortOrder:33,isHiddenInSelector:!0,titleGenerator:t=>`Sickness Email: ${t.phmcEmployee||"Unknown"}`,userTypes:["phmcStaff","other"],primaryFor:["phmcStaff"],requiredFaction:["PHMC"],requiredRank:1,isPHMC:!0},{version:50,name:"Physician Careers",group:"PHMC Recruitment",icon:jr,generator:vN,componentLoader:mt.PhysicianFields,titleKey:"phmcGeneralApplication",sortOrder:200,hasCustomTitle:!0,titleGenerator:t=>`Application: ${t.characterName||"Unknown"}`,userTypes:["recruitment","other"],primaryFor:["recruitment"],requiredFaction:["PHMC"],requiredRank:1,isPHMC:!0},{version:51,name:"Psychologist/Psychiatrist Careers",group:"PHMC Recruitment",icon:jr,generator:_N,componentLoader:mt.PsychFields,titleKey:"phmcPsychApplication",sortOrder:201,hasCustomTitle:!0,titleGenerator:t=>`Application: ${t.characterName||"Unknown"}`,userTypes:["recruitment","other"],primaryFor:["recruitment"],requiredFaction:["PHMC"],requiredRank:1,isPHMC:!0},{version:52,name:"Admin Careers",group:"PHMC Recruitment",icon:jr,generator:CN,componentLoader:mt.AdminFields,titleKey:"phmcAdminApplication",sortOrder:202,hasCustomTitle:!0,titleGenerator:t=>`Application: ${t.characterName||"Unknown"}`,userTypes:["recruitment","other"],primaryFor:["recruitment"],requiredFaction:["PHMC"],requiredRank:1,isPHMC:!0},{version:53,name:"Nursing Careers",group:"PHMC Recruitment",icon:jr,generator:SN,componentLoader:mt.NursingFields,titleKey:"phmcNursingApplication",sortOrder:203,hasCustomTitle:!0,titleGenerator:t=>`Application: ${t.characterName||"Unknown"}`,userTypes:["recruitment","other"],primaryFor:["recruitment"],requiredFaction:["PHMC"],requiredRank:1,isPHMC:!0},{version:54,name:"Coroner Careers",group:"PHMC Recruitment",icon:jr,generator:wN,componentLoader:mt.Coroner,titleKey:"phmcCoronerRecruitmentApplication",sortOrder:204,hasCustomTitle:!0,titleGenerator:t=>`Application: ${t.characterName||"Unknown"}`,userTypes:["recruitment","other"],primaryFor:["recruitment"],requiredFaction:["PHMC"],requiredRank:1,isPHMC:!0},{version:55,name:"EMS Careers",group:"PHMC Recruitment",icon:jr,generator:EN,componentLoader:mt.Ems,titleKey:"phmcEMSApplication",sortOrder:205,hasCustomTitle:!0,titleGenerator:t=>`Application: ${t.characterName||"Unknown"}`,userTypes:["recruitment","other"],primaryFor:["recruitment"],requiredFaction:["PHMC"],requiredRank:1,isPHMC:!0},{version:999,name:"Admin Control Panel",group:"Admin",icon:jr,componentLoader:null,generator:iA,titleKey:"adminControlPanel",sortOrder:999,titleGenerator:()=>"Admin Control Panel",userTypes:["other"],primaryFor:["other"]},{version:37,name:"Death Record",group:"PHMC",icon:TN,generator:yN,componentLoader:mt.DeathRecord,titleKey:"deathRecord",sortOrder:15,hasCustomTitle:!0,isHiddenInSelector:!0,titleGenerator:t=>{const{caseNumber:e,decedentName:n,decedentOOC:r,dateOfDeath:s}=t,o=new Date().getFullYear();let a="N/A";if(s){const d=new Date(s+"T00:00:00"),g=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"][d.getMonth()],f=String(d.getDate()).padStart(2,"0"),p=d.getFullYear();a=`${g}-${f}-${p}`}const l=n||(t.deathRecordType==="Unidentified"?"JANE/JOHN DOE":"JOHN/JANE DOE");return`[CASE #${o}-${e||"(( DEATH REPORT POST ID ))"}] ${l} ((${r||"OOC NAME"})) | [${a}]`},userTypes:["phmcStaff","coroner","other"],primaryFor:["coroner"],requiredFaction:["PHMC"],requiredRank:1,isPHMC:!0},{version:1e3,name:"dev-testing",group:"PHMC",icon:jr,generator:J0,componentLoader:mt.DevTest,titleKey:"devTesting",sortOrder:1e3,hasCustomTitle:!0,titleGenerator:t=>`Dev Test: ${t.test_field_1||"Unknown"}`,userTypes:["phmcStaff","other"],requiredFaction:["PHMC"],requiredRank:1,isPHMC:!0}],Bn=t=>vr.find(e=>e.version===t),fI=t=>vr.filter(e=>e.primaryFor&&e.primaryFor.includes(t)),Lc=t=>{if(!t)return"";let e=t.trim().replace(/[.#$[\/ \]]+/g,"_");return e=e.replace(/_{2,}/g,"_"),e=e.replace(/^_+|_+$/g,""),e},oA=t=>{if(!t)return"";const e=t.match(/\d+$/);return e?e[0]:""},aA=(t,e,n,r,s,o,a,l,d,u,g,f,p,S,_,I,F,P,k)=>{const{factionsData:D,coronerListData:R,phmcListData:$}=Pf(),O=re=>{if(D&&D[364]&&D[364].members){const Ie=Object.values(D[364].members).find(q=>q.characterName&&q.characterName===re||q.name&&q.name===re);if(Ie)return Ie}const Re=R.find(ke=>ke.name===re);return Re||$.find(ke=>ke.name===re)||null},{user:E,isAuthenticated:y}=dr(),[w,x]=b.useState([]),[v,A]=b.useState(!1),[C,M]=b.useState(!1),[B,j]=b.useState(null),[G,z]=b.useState(null),V=b.useRef(null),[ue,ve]=b.useState(null),[de,Q]=b.useState(!1),[ee,ne]=b.useState(null),pe=async(re,Re)=>{const le=me(Ne,"webhook_logs/"+Date.now());try{await It(le,{type:re,payload:Re,timestamp:Date.now()})}catch(ke){console.error("Error logging webhook:",ke),nt(ke,{extra:{context:"logWebhook"}})}};async function ge(){let re="";const Re=s(),le=o(t);if(n===1){if(!t.decedentOOC||!t.dateTime){const J="Please fill in Decedent OOC and Date/Time fields.";return d(J,"exclamation-circle"),{success:!1,error:J}}re=`[DEATH-REPORT] ${t.decedentOOC} - ${t.dateTime}`}else if(n===4){if(!t.decedentName||!t.decedentOOC||!t.autopsyDate){const J="Please fill in Decedent IC Name, OOC Name, and Autopsy Date fields.";return d(J,"exclamation-circle"),{success:!1,error:J}}re=`[Autopsy] ${t.decedentName} (${t.decedentOOC}) - ${t.autopsyDate}`}else if(n===3){if(!t.patientName||!t.patientDateOfBirth){const J="Please fill in Patient Name and Date of Birth fields.";return d(J,"exclamation-circle"),{success:!1,error:J}}re=`${t.patientID||"NO_ID"} - ${t.patientName||"NO_NAME"} - ${t.patientDateOfBirth||"NO_DATE"}`}else if(n>3&&n<=7&&n!==4){let J=!t.patientID,ze=!t.date,Be=!1;if(n!==5&&(Be=!t.patientName),J||ze||Be){let Oe=[];if(J&&Oe.push("Patient ID"),Be&&Oe.push("Patient Name"),ze&&Oe.push("Date"),Oe.length>0){const Ee=`Please fill in ${Oe.join(", ")} fields.`;return d(Ee,"exclamation-circle"),{success:!1,error:Ee}}}re=`${t.patientID||"NO_ID"} - ${t.patientName||"NO_NAME"} - ${t.date||"NO_DATE"}`}else if(n===19){if(!t.patientID||!t.date){const J="Please fill in Patient ID, and Date fields.";return d(J,"exclamation-circle"),{success:!1,error:J}}re=`${t.patientID} - ${t.lastName} - ${t.date}`}else if(n===25){if(!t.patientName||!t.patientDateOfBirth){const J="Please fill in Patient Name and Date of Birth fields.";return d(J,"exclamation-circle"),{success:!1,error:J}}re=`${t.patientName} - ${t.patientDateOfBirth}`}else if(n===24){if(!t.registrantFullName||!t.dateOfRequest){const J="Please fill in Registrant Full Name and Date of Request fields.";return d(J,"exclamation-circle"),{success:!1,error:J}}re=`[Medical Release] ${t.registrantFullName} - ${t.dateOfRequest}`}else if(n===2){if(!t.coronerEmployee||!t.requestingOfficer||!t.decedentName&&!t.decedentOOC){const J="Please fill in Coroner, Requesting Officer, and Decedent Name/OOC for Coroner Email.";return d(J,"exclamation-circle"),{success:!1,error:J}}re=`[Email] ${t.requestingOfficer} re: ${t.decedentName||t.decedentOOC} - ${new Date().toISOString().split("T")[0]}`}else if(n===18){if(!t.department||!t.dateTime||!t.synopsis){const J="Please fill in Department, Date/Time, and Synopsis for Agency Feedback.";return d(J,"exclamation-circle"),{success:!1,error:J}}re=`[Feedback] ${t.department} - ${t.dateTime}`}else{if(Bn(n)?.group==="PHMC Recruitment")return{success:!1,error:"PHMC Recruitment forms cannot be saved to Firebase."};if(n===11){const{decedents:J,dateTime:ze}=t;if(!J||J.length===0){const Ee="Please add at least one decedent to the report.";return d(Ee,"exclamation-circle"),{success:!1,error:Ee}}if(!J[0].decedentName||!ze){const Ee="The first decedent must have a name and the main date/time must be set.";return d(Ee,"exclamation-circle"),{success:!1,error:Ee}}re=`[Mass Fatality Report] - ${J.map(Ee=>Ee.decedentName).filter(Ee=>Ee).join(", ")} - ${ze&&ze.split("T")[0]||"No Date"}`}else if(n===37){if(!t.deathReportPostId||!t.decedentName||!t.dateOfDeath){const Be="Please fill in Case Number, Decedent Name, and Date of Death fields.";return d(Be,"exclamation-circle"),{success:!1,error:Be}}const J=oA(t.deathReportPostId),ze=t.dateOfDeath?new Date(t.dateOfDeath).toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric"}).toUpperCase().replace(/,/g,""):"NO_DATE";re=`[CASE #${J}] ${t.decedentName} (( ${t.decedentOOC||"N/A"} )) | [${ze}]`}else{Bn(n);const J=_[n]||`FormV${n}`;let ze=t.decedentName||t.patientName||"Unnamed Report";Array.isArray(ze)&&(ze=ze.join(", "));const Be=t.date||t.dateTime||t.autopsyDate||"No Date";re=`[${J}] ${ze} - ${Be}`}}if(!re){const J="Could not generate a report key. Save aborted.";return d(J,"error"),{success:!1,error:J}}if(!le){const J="Cannot determine report author. Please ensure an employee is selected or patient name is filled if applicable for this form type.";return d(J,"error"),{success:!1,error:J}}const ke=Lc(le),Ie=re.trim().replace(/[.#$[\/ \]]+/g,"_")+"_"+Date.now(),q=w.filter(J=>J.authorName===le).length,se=localStorage.getItem("easterEggShown")==="true";let Y=!1,ie=!1;q===4&&!se?Y=!0:q>4&&!se?Y=Math.random()<.05:se&&(ie=Math.random()<.01),Y?(g(!0),f("normal"),localStorage.setItem("easterEggShown","true"),p("normal")):ie&&(g(!0),f("rare"),p("rare"));const te={bbCodeVersion:n,data:a(t,n),timestamp:Date.now(),originalKey:re,authorName:le};let Te=!1,De=null;if(y&&E)Te=!0,De=E;else{const J=localStorage.getItem("phmc_gtaw_oauth_profile");if(J)try{const ze=JSON.parse(J);ze&&(Te=!0,De=ze)}catch(ze){console.error("Error parsing stored GTAW profile:",ze),nt(ze,{extra:{context:"saveReport - parsing stored profile"}})}}Te&&De&&(te.gtawUsername=De.username,te.gtawCharacterId=bl(De),te.gtawCharacterName=gl(De),te.gtawSyncTimestamp=new Date().toISOString(),te.gtawSyncVersion="1.2-local",console.log("📄 [Report Save] Added GTAW data to saved report:",{username:te.gtawUsername,characterId:te.gtawCharacterId,characterName:te.gtawCharacterName,author:le,source:y?"live":"local"}));const Rt=`savedReports/${ke}/${Ie}`,Ue=`savedReportBBCode/${ke}/${Ie}`;try{const J=me(Ne,Rt),ze=me(Ne,Ue);await Promise.all([It(J,te),It(ze,{bbCode:Re})]);const Be=Te?`Report "${re}" saved for ${le} to Firebase with GTAW data!`:`Report "${re}" saved for ${le} to Firebase!`;d(Be,"save");const Oe={author:le,reportKey:Ie,originalKey:re,bbCodeVersion:n,hasGtawData:Te};return Te&&De&&(Oe.gtawUsername=De.username,Oe.gtawCharacterId=bl(De),Oe.gtawCharacterName=gl(De)),await pe(`report_saved by ${le}`,Oe),{success:!0}}catch(J){console.error("Error saving report to Firebase:",J),nt(J,{extra:{context:"Firebase set report"}});const ze="Something unexpected went wrong, report copied to clipboard!";return d(ze,"error"),{success:!1,error:ze}}}const be=b.useCallback(async re=>{if(!re){x([]),j(null);return}M(!0),j(re);const Re=d(`Loading reports for ${re}...`,"info-circle",0);try{const le=Ed(),Ie=await rs(le,"getSavedReports")({userId:re});if(u(Re),Ie.data.success){const q=Ie.data.reports||[];q.sort((se,Y)=>Y.timestamp-se.timestamp),x(q),q.length>0?d(`Loaded ${q.length} report(s) for ${re}.`,"check-circle"):d(`No active reports found for ${re}.`,"info-circle")}else throw new Error(Ie.data.message||"Failed to load reports.")}catch(le){u(Re),console.error(`Error loading reports for user ${re}:`,le),nt(le,{extra:{context:"loadUserSavedReports",userId:re}}),d(`Failed to load reports for ${re}.`,"error"),x([])}finally{M(!1)}},[d,u,x,j,M]),Ae=b.useCallback(async(re,Re,le=!1)=>{if(!Re||!re)return le||d("Cannot load report: User ID or Report Key is missing.","error"),{success:!1,message:"User ID or Report Key is missing."};const ke=Lc(Re),Ie=`savedReports/${ke}/${re}`,q=`savedReportBBCode/${ke}/${re}`,se=me(Ne,Ie),Y=me(Ne,q);let ie;le||(ie=d(`Loading report: ${re} for ${Re}...`,"info-circle",0));try{const[te,Te]=await Promise.all([qe(se),qe(Y)]);if(te.exists()){const De=te.val();De.bbCode=Te.exists()?Te.val().bbCode:"";const Rt=De.bbCodeVersion;let Ue=De.bbCode||"",J=De.data||{};if(le){const W=(Ue.match(/\[bold\]/gi)||[]).length;W>0&&(console.log(`[useReportManagement] Found ${W} [bold] tags. Converting to [b].`),Ue=Ue.replace(/\[bold\]/gi,"[b]").replace(/\[\/bold\]/gi,"[/b]"),console.log("[useReportManagement] Conversion complete."))}else Ue=Ue.replace(/\[bold\]/gi,"[b]").replace(/\[\/bold\]/gi,"[/b]");const ze=J.coronerEmployee,Be=J.phmcEmployee,Oe=Date.now().toString();if(ze){const W=O(ze);W?(J.coronerEmployee=ze,J.coronerBadge=W.badge||"",J.coronerRank=W.rank||"",J.coronerDiscord=W.discord||"",J.coronerPHNumber=W.phNumber||"50056",le||(localStorage.setItem("coronerEmployee",J.coronerEmployee),localStorage.setItem("coronerEmployee_timestamp",Oe),localStorage.setItem("coronerBadge",J.coronerBadge),localStorage.setItem("coronerBadge_timestamp",Oe),localStorage.setItem("coronerRank",J.coronerRank),localStorage.setItem("coronerRank_timestamp",Oe),localStorage.setItem("coronerDiscord",J.coronerDiscord),localStorage.setItem("coronerDiscord_timestamp",Oe),localStorage.setItem("coronerPHNumber",J.coronerPHNumber),localStorage.setItem("coronerPHNumber_timestamp",Oe))):(le||d(`Coroner "${ze}" not found in current staff list. Using data from saved report.`,"warning",7e3),le||(J.coronerEmployee&&localStorage.setItem("coronerEmployee_timestamp",Oe),J.coronerBadge&&localStorage.setItem("coronerBadge_timestamp",Oe),J.coronerRank&&localStorage.setItem("coronerRank_timestamp",Oe),J.coronerDiscord&&localStorage.setItem("coronerDiscord_timestamp",Oe),J.coronerPHNumber&&localStorage.setItem("coronerPHNumber_timestamp",Oe)))}else le||["coronerEmployee","coronerBadge","coronerRank","coronerDiscord","coronerPHNumber"].forEach(Qe=>{localStorage.removeItem(Qe),localStorage.removeItem(`${Qe}_timestamp`)});if(Be){const W=O(Be);W?(J.phmcEmployee=Be,J.phmcEmployeeLastName=W.lastName||"",J.phmcRank=W.category||W.rank||"",le||(localStorage.setItem("phmcEmployee",J.phmcEmployee),localStorage.setItem("phmcEmployee_timestamp",Oe),localStorage.setItem("phmcEmployeeLastName",J.phmcEmployeeLastName),localStorage.setItem("phmcEmployeeLastName_timestamp",Oe),localStorage.setItem("phmcRank",J.phmcRank),localStorage.setItem("phmcRank_timestamp",Oe))):(le||d(`PHMC Staff "${Be}" not found in current staff list. Using data from saved report.`,"warning",7e3),le||(J.phmcEmployee&&localStorage.setItem("phmcEmployee_timestamp",Oe),J.phmcEmployeeLastName&&localStorage.setItem("phmcEmployeeLastName_timestamp",Oe),J.phmcRank&&localStorage.setItem("phmcRank_timestamp",Oe)))}else le||["phmcEmployee","phmcEmployeeLastName","phmcRank"].forEach(Qe=>{localStorage.removeItem(Qe),localStorage.removeItem(`${Qe}_timestamp`)});if(["placeOfDeath","pronouncedTimeOfDeath","dateTime","department","mannerOfDeath"].forEach(W=>{J.hasOwnProperty(W)&&J[W]&&(le||(localStorage.setItem(W,J[W]),localStorage.setItem(`${W}_timestamp`,Oe)))}),!le){if(Rt===11){const W=Array.isArray(J.decedents)?J.decedents.map(Qe=>({...Qe,decedentName:Qe.decedentName||Qe.DecedentName,decedentOOC:Qe.decedentOOC||Qe.DecedentOOC})):[];e(Qe=>({...Qe,...J,decedents:W,coronerEmployee:J.coronerEmployee||Qe.coronerEmployee,phmcEmployee:J.phmcEmployee||Qe.phmcEmployee})),r(Rt),d("Mass Fatality Report loaded.","upload")}else if(n===2&&Rt===1){const W=!t.deathReport||t.deathReport.trim()==="";let Qe="";e(ut=>{let tn=ut.decedentName||"",Mt=ut.decedentOOC||"",Pt=ut.deathReport||"",ct=ut.additionalReports||[];return ut.decedentName&&J.decedentName?tn=`${ut.decedentName}, ${J.decedentName}`:tn=J.decedentName||ut.decedentName||"",ut.decedentOOC&&J.decedentOOC?Mt=`${ut.decedentOOC}, ${J.decedentOOC}`:Mt=J.decedentOOC||ut.decedentOOC||"",W?(Pt=Ue,Qe=`Loaded report for ${J.decedentName||De.originalKey} into main Death Report field.`):(ct=[...ct,Ue],Qe=`Added report for ${J.decedentName||De.originalKey} as an additional report.`),{...ut,...J,decedentName:tn,decedentOOC:Mt,deathReport:Pt,additionalReports:ct}}),d(Qe,"plus-circle")}else e(W=>({...W,...J,coronerEmployee:J.coronerEmployee||W.coronerEmployee,phmcEmployee:J.phmcEmployee||W.phmcEmployee})),r(Rt),d(`Report "${De.originalKey||re}" loaded.`,"upload");A(!1)}return{success:!0,reportData:{...De,data:J,bbCode:Ue}}}else return le||d(`Report not found in Firebase: ${re}`,"error"),{success:!1,message:`Report not found in Firebase: ${re}`}}catch(te){return console.error(`[loadReportForUser] Error loading report ${re} for user ${Re}:`,te),nt(te,{extra:{context:"loadReportForUser",userId:Re,reportFirebaseKey:re}}),le||d(`Failed to load report: ${te.message}`,"error"),{success:!1,message:`Failed to load report: ${te.message}`}}finally{!le&&ie&&u(ie)}},[n,D,R,$,u,r,e,d]),Ge=b.useCallback(async(re,Re)=>{S.current&&clearTimeout(S.current);const le=d("Attaching report...","info-circle",0),ke=await Ae(re,Re,!0);if(u(le),ke.success&&V.current){const Ie=ke.reportData,q=Ie.data||{},se=Ie.bbCodeVersion;e(Y=>{if(n===2&&se===11){const te=q.decedents;if(te&&te.length>0){const Te=te[0];let De=Te.decedentName||Te.DecedentName||"",Rt=Te.decedentOOC||Te.DecedentOOC||"";te.length>1&&(De+=` (x${te.length})`,Rt+=` (x${te.length})`);const Ue=!Y.deathReport||Y.deathReport.trim()==="";let J={...Y};return J.decedentName=De,J.decedentOOC=Rt,J.paperworkType="Mass Fatality",Ue?J.deathReport=Ie.bbCode:J.additionalReports=[...Y.additionalReports||[],Ie.bbCode],J}return Y}if(se===11){const te=!Y.deathReport||Y.deathReport.trim()==="";let Te={...Y};return te?Te.deathReport=Ie.bbCode:Te.additionalReports=[...Y.additionalReports||[],Ie.bbCode],Array.isArray(q.decedents)&&(Te.decedents=[...Y.decedents||[],...q.decedents]),Te}const ie={decedentName:q.decedentName,decedentOOC:q.decedentOOC,requestingOfficer:q.requestingOfficer,department:q.department};if(n===2){let te={...Y};return te.decedentName=Y.decedentName&&ie.decedentName?`${Y.decedentName}, ${ie.decedentName}`:ie.decedentName||Y.decedentName||"",te.decedentOOC=Y.decedentOOC&&ie.decedentOOC?`${Y.decedentOOC}, ${ie.decedentOOC}`:ie.decedentOOC||Y.decedentOOC||"",te.requestingOfficer=ie.requestingOfficer||Y.requestingOfficer,te.department=ie.department||Y.department,se===1&&n===2&&(!Y.deathReport||Y.deathReport.trim()===""?te.deathReport=Ie.bbCode:te.additionalReports=[...Y.additionalReports||[],Ie.bbCode]),te}else{let te={...Y};return te.decedentName=ie.decedentName||Y.decedentName,te.decedentOOC=ie.decedentOOC||Y.decedentOOC,te.requestingOfficer=ie.requestingOfficer||Y.requestingOfficer,te.department=ie.department||Y.department,te}}),V.current(Ie),d(`Report "${Ie.originalKey}" attached successfully.`,"check-circle")}else ke.success?V.current||(d("Attachment process could not be completed (no callback).","error"),en("handleReportSelectedForAttachment was called but pendingReportAttachmentCallback.current was null.")):d("Failed to load the selected report.","error");S.current=setTimeout(()=>{ve(null),z(null),A(!1)},1e3)},[n,Ae,S,u,e,d]),Ke=b.useCallback(re=>{if(!o(t)){d("Please select a PHMC employee in the form before attaching a report.","warning");return}V.current=re,ve([I,F,P]),z("PHMC"),A(!0)},[I,P,F,o,t,ve,z,A,d]),xe=b.useCallback(re=>{if(!o(t)){d("Please select a Coroner employee in the form before parsing decedent reports.","warning");return}V.current=re,ve([1,4]),z("Coroner"),A(!0)},[o,t,ve,z,A,d]),Ze=b.useCallback(async(re,Re)=>{if(!Re||!re){d("Cannot delete report: User ID or Report Key is missing.","error");return}const le=Lc(Re),ke=`savedReports/${le}/${re}`,Ie=`savedReportBBCode/${le}/${re}`,q=me(Ne,ke),se=me(Ne,Ie);try{await Promise.all([Hn(q),Hn(se)]),d("Report deleted successfully from Firebase.","trash"),B===Re&&be(Re)}catch(Y){console.error(`Error deleting report ${re} for user ${Re}:`,Y),nt(Y,{extra:{context:"deleteReportForUser",userId:Re,reportFirebaseKey:re}}),d(`Failed to delete report: ${Y.message}`,"error")}},[be,B,d]),we=b.useCallback(()=>{g(!0),f("rare"),window.location.hostname==="localhost"&&p("rare")},[p,f,g]),et=b.useCallback((re=null,Re=null,le=null)=>{if(v){A(!1),z(null),ve(null),V.current=null;return}o(t)?(A(!0),z(Re),ve(re),V.current=le):d("Please select an employee in the form before viewing saved reports.","warning")},[o,t,z,ve,A,d,v]),yt=b.useCallback(re=>{let Re=null;const le=Bn(n);if(!re){d("Please select a position first.","warning");return}k==="PHMC Recruitment"&&(le?.titleKey==="phmcGeneralApplication"&&l?.physicianRecruitmentDetails?Re=l.physicianRecruitmentDetails[re]:le?.titleKey==="phmcPsychApplication"&&l?.psychPositionDetailsData?Re=l.psychPositionDetailsData[re]:le?.titleKey==="phmcAdminApplication"&&l?.adminPositionDetailsData?Re=l.adminPositionDetailsData[re]:le?.titleKey==="phmcNursingApplication"&&l?.nursePositionDetailsData?Re=l.nursePositionDetailsData[re]:le?.titleKey==="phmcEMSApplication"&&l?.emsPositionDetailsData?Re=l.emsPositionDetailsData[re]:le?.titleKey==="phmcCoronerRecruitmentApplication"&&l?.coronerPositionDetailsData&&(Re=l.coronerPositionDetailsData[re])),Re?(ne(Re),Q(!0)):d("Detailed information for this position is not available.","warning")},[n,l,k,d]);return{saveReport:ge,savedReports:w,setSavedReports:x,showSavedReports:v,setShowSavedReports:A,isLoadingUserReports:C,setIsLoadingUserReports:M,selectedUserForSavedReports:B,setSelectedUserForSavedReports:j,preselectedEmployeeType:G,setPreselectedEmployeeType:z,loadUserSavedReports:be,loadReportForUser:Ae,handleReportSelectedForAttachment:Ge,onAttachReportSummaryRequest:Ke,onParseDecedentRequest:xe,deleteReportForUser:Ze,showRareEasterEggDirectly:we,toggleSavedReports:et,showPositionInfoModal:de,setShowPositionInfoModal:Q,currentPositionInfo:ee,setCurrentPositionInfo:ne,handleShowPositionInfo:yt,pendingReportAttachmentCallback:V,reportSelectionFilter:ue,setReportSelectionFilter:ve}},cA=({show:t,onHide:e,characters:n,onCharacterSelect:r,currentSelection:s,title:o="Select Character"})=>{const[a,l]=b.useState(s?.id||(n&&n.length>0?n[0].id:null)),d=()=>{const u=n.find(g=>g.id===parseInt(a));u&&r(u),e()};return!n||n.length===0?null:i.jsxs(Ct,{show:t,onHide:e,centered:!0,backdrop:"static",children:[i.jsx(Ct.Header,{closeButton:!0,style:{backgroundColor:"#1a1a1a",borderBottom:"1px solid #444"},children:i.jsxs(Ct.Title,{style:{color:"#e0e0e0"},children:[i.jsx("i",{className:"fas fa-users"})," ",o]})}),i.jsxs(Ct.Body,{style:{backgroundColor:"#2a2a2a",color:"#e0e0e0"},children:[i.jsx("p",{className:"mb-3",children:"You have multiple PHMC characters. Please select which character to use as the employee name:"}),i.jsx(he,{children:n.map((u,g)=>{const f=u.name||`${u.firstname||""} ${u.lastname||""}`.trim(),p=u.id===parseInt(a);return i.jsx("div",{className:"mb-2",children:i.jsx(he.Check,{type:"radio",id:`character-${u.id}`,name:"character-selection",label:i.jsxs("div",{className:"d-flex justify-content-between align-items-center w-100",children:[i.jsxs("div",{children:[i.jsx("strong",{children:f}),i.jsx("br",{}),i.jsxs("small",{className:"text-muted",children:["Character ID: ",u.id]})]}),u.scriptRank&&i.jsx("div",{className:"text-end",children:i.jsxs("span",{className:"badge bg-primary",children:["Rank ",u.scriptRank]})})]}),checked:p,onChange:S=>{S.target.checked&&l(u.id)},style:{color:"#e0e0e0"}})},u.id)})}),i.jsx("div",{className:"mt-3 p-2 rounded",style:{backgroundColor:"#1a1a1a",border:"1px solid #444"},children:i.jsxs("small",{className:"text-muted",children:[i.jsx("i",{className:"fas fa-info-circle"})," This selection will be used to auto-fill employee name fields in forms. You can change this selection at any time."]})})]}),i.jsxs(Ct.Footer,{style:{backgroundColor:"#1a1a1a",borderTop:"1px solid #444"},children:[i.jsx(ce,{variant:"secondary",onClick:e,children:"Cancel"}),i.jsxs(ce,{variant:"primary",onClick:d,disabled:!a,children:[i.jsx("i",{className:"fas fa-check"})," Select Character"]})]})]})},tg=t=>{switch(t){case 1:return["coronerRank","placeOfDeath","department","dateTime","coronerEmployee","coronerBadge","decedentName","decedentOOC","pronouncedTimeOfDeath","synopsis","probableCauseOfDeath","mannerOfDeath","typeOfDeath","scenePhotos","additionalImages","requestingOfficer","time"];case 2:return["requestingOfficer","department","coronerEmployee","coronerRank","coronerDiscord","coronerPHNumber","deathReport","additionalReports"];case 3:return["patientName","patientAddress","patientRace","patientGender","patientPH","patientDiscord","patientEmergencyContact","patientEmergencyContactNumber","patientEmergencyContactRelation","patientEmergencyContactDiscord","patientTitle","patientAllergies","patientCurrentMedicine","patientChronicDiseases","patientNotes","date","patientID","patientTherapy","patientTriggers","patientSupport","patientHarm","patientFam","patientGenetic","patientMental","patientFamSocial","patientReligion","attorneyName","attorneyRelation","attorneyPH","patientDateOfBirth","patientSmoker","patientAlcohol","patientDrugs","patientExercise","patientDiet","patientSleep","patientSexLife","patientJobRisks","patientHazards","patientOther","dnrOther","decedentOOC","maritalStatus","numberChildren","financialStatus","dnr","dnrOrder","attorney"];case 4:return["coronerEmployee","coronerRank","coronerBadge","decedentName","decedentOOC","autopsyDate","autopsyTime","placeOfDeath","causeOfDeath","deathType","autopsyDeathCauses","externalExamination","internalExamination","evidenceRecovered","autopsyAnatomicSummaryItems","autopsyAlbumUrl","autopsyPhotosUnavailable","additionalNotes","synopsis","RadiologyResult","autopsyDiagramImgurUrl","autopsyDiagramMarkers"];case 5:return["phmcEmployee","lastName","extraStaff","patientID","patientSummaryConsultation","patientAddress","rank","date","patientSummary","lastName","surgeryProcedures","patientConsentOption","patientComplicationOptions","procedureGoodOptions"];case 6:return["phmcEmployee","lastName","patientName","patientID","date","lastName","patientHeight","patientWeight","phmcRank","careerRisks","patientAllergies","patientMedicine","patientcareerNo","patientSummary","patientCareer","patientImpairments","BodyMassIndex","temperature","heartRate","breathing","bloodPressure","patientJob","patientJobRisks","patientOther","predisposition"];case 7:return["phmcEmployee","lastName","patientName","patientID","date","lastName","patientHeight","patientWeight","phmcRank","careerRisks","patientAllergies","patientMedicine","patientcareerNo","patientSummary","patientCareer","patientImpairments","BodyMassIndex","temperature","heartRate","breathing","bloodPressure","patientJob","patientJobRisks","patientOther","predisposition"];case 9:return["phmcEmployee","lastName","patientName","patientMedicalRecord","patientJob","patientPartnerPH","patientDateofBirth","patientPartnerName","patientJobTasks","patientLivingHabits","patientPreHealth","patientBaggageofParents","patientTemperature","patientBP","patientWeight","patientSummaryConsultation","patientBPM","patientResperation","patientOxi","patientDateofPregnancy","patientFetalMeasurements","patientWellWomanExam","patientPapResults","patientSTI","patientSTIResults","patientHeight","patientBloodAnalysis","patientBloodAnalysisResults","patientUrine","patientUrineResults","date","patientPap","patientPartnerDiscord","phmcSignature","patientAdditionalPregnancy","patientPregProblems","oneFetus","twoFetuses","threeFetuses","fourFetuses"];case 10:return["phmcEmployee","lastName","patientName","patientMedicalRecord","patientContractions","patientBleeding","patientDateofBirth","patientDiscomfort","patientFatter","patientBabyGender","patientKnowBabyGender","patientTemperature","patientBP","patientWeight","patientSummaryConsultation","patientBPM","patientResperation","patientOxi","patientDateofPregnancy","patientFetalMeasurements","patientBloodAnalysis","patientBloodAnalysisResults","patientUrine","patientUrineResults","date","patientUltraSummary","phmcSignature"];case 11:return["decedents","coronerRank","placeOfDeath","department","dateTime","coronerEmployee","coronerBadge","synopsis","requestingOfficer","decedentName","decedentOOC"];case 12:return["phmcEmployee","lastName","patientName","patientMedicalRecord","patientJob","patientPartnerPH","patientDateofBirth","patientPartnerName","patientJobTasks","patientLivingHabits","patientBaggageofParents","patientTemperature","patientBP","patientWeight","patientSummaryConsultation","patientBPM","patientResperation","patientOxi","patientNotes","patientWellWomanExam","patientPapResults","patientSTI","patientSTIResults","patientHeight","patientBloodAnalysis","patientBloodAnalysisResults","patientUrine","patientUrineResults","date","patientPap","patientPartnerDiscord","phmcSignature","patientAdditionalPregnancy","patientPregProblems"];case 13:return["phmcEmployee","lastName","patientName","patientMedicalRecord","patientBleeding","patientDateofBirth","patientDiscomfort","patientFatter","patientTemperature","patientBP","patientWeight","patientSummaryConsultation","patientBPM","patientResperation","patientOxi","patientBloodAnalysis","patientBloodAnalysisResults","patientUrine","patientUrineResults","date","patientUltraSummary","phmcSignature"];case 14:return["phmcEmployee","lastName","patientName","lastName","patientID","date","patientChiefComplaint","rank","patientNotes","patientDiagnosis","patientMedicine","patientProcedure"];case 16:return["phmcEmployee","lastName","patientName","lastName","patientID","rank","date","patientChiefComplaint","patientNotes","patientDiagnosis","patientMedicine","patientProcedure"];case 18:return["coronerRank","coronerEmployee","placeOfDeath","department","dateTime","decedentName","synopsis","scenePhotos"];case 19:return["lastName","phmcRank","patientID","date","patientDiagnosis","patientSecondaryDiagnosis","patientMedicine","patientProcedure","patientChiefComplaint","painLevel","temperature","heartRate","breathing","bloodPressure","findings","lungs","pupils","wounds","ecg","sono","lab","admission"];case 20:return["lastName","phmcRank","patientID","date","patientDiagnosis","patientSecondaryDiagnosis","patientMedicine","patientProcedure","patientChiefComplaint","temperature","heartRate","breathing","bloodPressure","findings","lungs","pupils","wounds","ecg","sono","lab","admission","assignedDepartment"];case 21:return["lastName","phmcRank","patientID","date","patientDiagnosis","patientSecondaryDiagnosis","patientMedicine","patientProcedure","patientChiefComplaint","temperature","heartRate","breathing","bloodPressure","findings","lungs","pupils","wounds","ecg","sono","lab","admission","paletoClinicDepartment","patientNotes"];case 22:return["phmcEmployee","lastName","date","patientID","departmentLarge"];case 23:return["phmcEmployee","lastName","date","patientID","departmentLarge"];case 24:return["patientFirstName","patientMiddleName","patientLastName","patientPH","patientDateOfBirth","patientAddress","patientZIP","patientEmail","patientMedInfoReleaseOther","phmcEmployee","lastName","MedicalRecordsReleaseOther","patientMedInfoFormatOther","StupidDateFrom","StupidDateTo","SubmitDate","MedicalRecordsRelease","CarePurposeMedicalInformationRelease","PurposeMedicalInformationReleaseFormat","payNow","paymentProofPhotos"];case 25:return["patientName","patientAddress","patientRace","patientGender","patientPH","patientDiscord","patientEmergencyContact","patientEmergencyContactNumber","patientEmergencyContactRelation","patientEmergencyContactDiscord","patientTitle","patientAllergies","patientCurrentMedicine","patientChronicDiseases","patientNotes","date","patientID","patientBloodType"];case 26:return["patientName","patientAddress","patientRace","patientGender","patientPH","patientDiscord","patientEmergencyContact","patientEmergencyContactNumber","patientEmergencyContactRelation","patientEmergencyContactDiscord","patientTitle","patientAllergies","patientCurrentMedicine","patientChronicDiseases","patientNotes","date","patientID","patientBloodType"];case 27:return["scenePhotos","decedentName","patientNotes","synopsis","phmcEmployee","lastName","decedentOOC","patientCareer"];case 28:return["patientID","date","phmcRank","lastName","patientChiefComplaint","patientTriggers","patientStress","patientTreatment","patientFamily","patientJobRisks","patientMedicalRecord","patientAllergies","patientChronicDiseases","patientVisitReason","patientSymptoms","patientCondition","patientDrugs","patientDrugsUsage","patientMental","patientJob","patientFam","patientLegal","patientRelationship","patientFindings","patientTreatmentPlan","patientSafety","patientFollowUp","patientTreatmentMedicine","patientDiagnosis","patientTherapy","patientRiskAssessment","patientTherapyMedicine","Speech","Behavior","Appearance","Mood","Affect","Risk","ThoughtProcess","ThoughtContent","Insight","Cognition","admission","followup"];case 29:return["patientID","date","phmcRank","lastName","patientChiefComplaint","patientTriggers","patientStress","patientTreatment","patientFamily","patientJobRisks","patientMedicalRecord","patientAllergies","patientChronicDiseases","patientVisitReason","patientSymptoms","patientCondition","patientDrugs","patientDrugsUsage","patientMental","patientJob","patientFam","patientLegal","patientRelationship","patientFindings","patientTreatmentPlan","patientSafety","patientFollowUp","patientTreatmentMedicine","patientDiagnosis","patientTherapy","patientRiskAssessment","patientTherapyMedicine","Speech","Behavior","Appearance","Mood","Affect","Risk","ThoughtProcess","ThoughtContent","Insight","Cognition","admission","followup"];default:return[]}},Ph="/forms/assets/christmas-CGO1ZSet.png",$h="/forms/assets/easteregg-Coj4K1bV.png",Dh="/forms/assets/easter-BgPjTMVs.png",Oh="/forms/assets/halloween-rip-BxLpo6Sx.png",Mh="/forms/assets/Generic-CSL5_TGf.png",ng="/forms/assets/tombstone-B7abGloc.png",uc=document.createElement("img");uc.src=ng;uc.width=32;uc.height=32;const lA=()=>i.jsx(Wh,{style:{position:"fixed",width:"100vw",height:"100vh",top:0,left:0,zIndex:25},snowflakeCount:50,images:[uc],radius:[10,30]}),jh={deathReport:{Christmas:Ph,AprilFools:$h,Easter:Dh,Halloween:Oh,Default:Mh},civilianPaperwork:{Christmas:Ph,AprilFools:$h,Easter:Dh,Halloween:Oh,Default:Mh}};function dA(){const t=new Date,e=t.getMonth(),n=t.getDate();return e===9?"Halloween":e===3&&n>=1&&n<=2?"AprilFools":e===3&&n>=3&&n<=30?"Easter":e===11&&n>=1||e===0&&n<=1?"Christmas":"Default"}function Lh({imageType:t,season:e}){const n=e||dA(),r=jh[t]?.[n]||jh[t]?.Default;let s="",o=null;return n==="AprilFools"?s="april-fools":n==="Easter"?s="easter-bounce":n==="Halloween"?o=i.jsx(lA,{}):n==="Christmas"&&(o=i.jsx(Wh,{snowflakeCount:75})),{imageSource:r,className:s,season:n,effect:o}}const uA=({bbCodeVersion:t,openSwitchableModal:e,formGroups:n})=>{const{coronerFormsSubGroup:r,physicalEvalFormsSubGroup:s,psychEvalFormsSubGroup:o,generalConsultFormsSubGroup:a,commentaryNoteFormsSubGroup:l,mentalHealthFormsSubGroup:d,civilianFormsSubGroup:u,phmcInternalEmails:g}=n,p=[{versions:[1,2,4,8,11,37],text:"Coroner Forms",icon:"fa fa-laptop",modalArgs:["Coroner Forms",r]},{versions:[6,7],text:"Switch Physical Evaluation Forms",icon:"fas fa-exchange-alt",modalArgs:["Select Physical Evaluation Form",s]},{versions:[28,29],text:"Switch Psychological Evaluation Form",icon:"fas fa-exchange-alt",modalArgs:["Select Psychological Evaluation Form",o]},{versions:[20,21],text:"Switch General Consultation Forms",icon:"fas fa-exchange-alt",modalArgs:["Select General Consultation Form",a]},{versions:[22,23],text:"Switch Commentary Note Form",icon:"fas fa-exchange-alt",modalArgs:["Select Commentary Note Form",l]},{versions:[14,16],text:"Switch Mental Health Form",icon:"fas fa-exchange-alt",modalArgs:["Select Mental Health Form",d]},{versions:[3,24,25,26],text:"Change Civilian Hospital Forms",icon:"fas fa-exchange-alt",modalArgs:["Select Civilian Forms",u]},{versions:[27,35],text:"Change Email Forms",icon:"fas fa-exchange-alt",modalArgs:["Select Email Form",g]}].find(S=>S.versions.includes(t));return p?i.jsxs(ce,{className:"changelog-button",variant:"secondary",onClick:()=>e(...p.modalArgs),children:[i.jsx("i",{className:p.icon}),i.jsxs("span",{children:[" ",p.text]})]}):null},Mi=t=>t?String(t).replace(/-/g," ").replace(/\s+/g," ").trim():"",hA="https://phmc-tools.gta.world/",mA="https://gtaw-forms.github.io/forms/",Ki=t=>{if(!t)return"";let e=t.trim().replace(/[.#$[\\/ \]]+/g,"_");return e=e.replace(/_{2,}/g,"_"),e=e.replace(/^_+|_+$/g,""),e},rg=()=>{const t=window.location.href,e=window.location.hostname;return t.startsWith(mA)?"Alternative Form Generator":t.startsWith(hA)?"Form Generator":e==="localhost"||e==="127.0.0.1"||e.startsWith("192.168.")||e.startsWith("10.")||e.startsWith("172.")&&parseInt(e.split(".")[1],10)>=16&&parseInt(e.split(".")[1],10)<=31?"Dev Staging":"Unknown Source"},sg=async(t,e)=>{const r=me(Ne,"webhook_logs"),s=Aa(r);await It(s,{type:t,payload:e,timestamp:Date.now()})},ig=async(t,e,n)=>{if(!navigator.clipboard)return e("Clipboard API not available in this browser.","error"),en("Clipboard API not available."),!1;if(!window.isSecureContext)return e("Clipboard access is only available on secure sites (HTTPS).","error"),en("Attempted to use clipboard in a non-secure context."),!1;try{return await navigator.clipboard.writeText(t),e(n,"clipboard"),!0}catch(r){console.error("Failed to copy text: ",r),nt(r,{extra:{context:"copyToClipboard helper"}});let s="Failed to copy text automatically.";return r.name==="NotAllowedError"?s="Clipboard permission was denied. Please keep the webpage in focus and try again.":r.message.includes("Document is not focused")?s="Could not copy. Please click on the page and try the copy button again.":s+=" Please try again or copy manually.",e(s,"error"),!1}},hc=async(t,e,n={},r="")=>{const{title:s,description:o,color:a,fields:l=[],footerText:d="Forms Tool"}=e,u=rg();l.push({name:"Source",value:u,inline:!0});const g={title:s||"Notification",description:o||"",color:a||7506394,fields:l,timestamp:new Date().toISOString(),footer:{text:`${d} | gh-pages ${n.sha||"N/A"}`}};try{const f=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...r&&{content:r},embeds:[g]})});if(!f.ok){const p=await f.text();return console.error(`Failed to send Discord webhook. Status: ${f.status} ${f.statusText}`,p),en(`Discord webhook send failed: ${f.status}`,{level:"error",extra:{statusText:f.statusText,responseBody:p,webhookTitle:s}}),!1}return await sg(s,{embeds:[g]}),!0}catch(f){return console.error("Error sending Discord webhook:",f),nt(f,{extra:{context:"sendDiscordWebhookInternal Fetch Error",webhookTitle:s}}),!1}},pA=async({scorer:t,bingoType:e,phrase:n,lineName:r,commitInfo:s,marked:o})=>{const a="https://discord.com/api/webhooks/1430314470902599680/o_JoPsW9jNgKICL9StKxgORICn3cOzu41FheUsJFsPkRAX-Xt9LKTulXhWCaQsU5Cfxw";let l={};o?l={title:`📍 Marker Placed by ${t||"A player"}`,description:"A marker was placed on the bingo board.",color:3447003,fields:[{name:"Game",value:e||"Unknown",inline:!0},{name:"Phrase",value:n||"Unknown",inline:!0}],footerText:"PHMC Bingo - Marker Placed"}:l={title:"🎉 BINGO! 🎉",description:`**${t||"A player"}** just scored a BINGO!`,color:16766720,fields:[{name:"Game",value:e||"Unknown",inline:!0},{name:"Line",value:r||"Unknown",inline:!0}],footerText:"PHMC Bingo - BINGO!"},await hc(a,l,s)},fA=async(t,e,n,r,s,o,a,l,d,u,g,f,p)=>{try{const S="https://discord.com/api/webhooks/1430314470902599680/o_JoPsW9jNgKICL9StKxgORICn3cOzu41FheUsJFsPkRAX-Xt9LKTulXhWCaQsU5Cfxw";let _={},I=!1,F="",P="";if(t==="addEmployee"){const k=e==="coroner";P=`⬆️ Missing ${k?"Coroner":"Hospital Staff"} Addition Request`;let D=[];k?D=["coronerName","coronerDiscord","coronerRank","coronerBadge"]:D=["coronerName","employeeLastName","coronerRank"];const R=D.filter(O=>!d[O]?.trim());if(R.length>0){g(`Please fill in all required fields for adding staff. Missing: ${R.join(", ")}`,"exclamation-circle");return}_={title:P,color:k?9109504:139,fields:[{name:"Requested By",value:k?f:p,inline:!1},{name:"Name to Add",value:d.coronerName||"N/A",inline:!0},{name:k?"Discord Tag":"Department/Discord",value:d.coronerDiscord||"N/A",inline:!0},{name:"Rank/Position",value:d.coronerRank||"N/A",inline:!0}],timestamp:new Date().toISOString(),footer:{text:`Submitted via PHMC Tools Tool - v${u.sha||"N/A"}`}};let $="";k?(_.fields.push({name:"Badge",value:d.coronerBadge,inline:!0}),$=`{ name: '${d.coronerName||"MISSING_NAME"}', badge: '${d.coronerBadge||"MISSING_BADGE"}', rank: '${d.coronerRank||"MISSING_RANK"}', discord: '${d.coronerDiscord||"MISSING_DISCORD"}', category: '${d.coronerRank||"MISSING_CATEGORY"}' },`):$=`{ name: '${d.coronerName||"MISSING_NAME"}', lastName: '${d.employeeLastName||"MISSING_LAST_NAME"}', rank: '${d.coronerRank||"MISSING_RANK"}', category: '${d.coronerRank||"MISSING_CATEGORY"}' },`,_.fields.push({name:"Google Firebase Debug String: ",value:`
${$}
`,inline:!1}),I=!0}else if(t==="removeStaff"){if(P="⬆️ Staff Removal Request",!a||a.length===0){g("Please select at least one staff member to remove.","warning");return}if(!l?.trim()){g('Please enter your name in the "Authorized By" field.',"warning");return}const k=a.map(R=>{let $=s.find(O=>O.name===R);return $||($=o.find(O=>O.name===R)),$||{name:R}}),D=`
${JSON.stringify(k,null,2)}
`;_={title:P,color:16753920,fields:[{name:"Authorized By",value:l,inline:!1},{name:`Staff to Remove (${a.length})`,value:a.join(`
`)||"None selected",inline:!1},{name:"Firebase Debug (Removed Staff)",value:D,inline:!1}],timestamp:new Date().toISOString(),footer:{text:`Submitted via PHMC Tools Tool - v${u.sha||"N/A"}`}},I=!0,F="Processed! Any abuse of the forms will be reported to PHMC Leadership"}else if(t==="editUser"){if(P="⬆️ Employee Information Update Request",!n){g("Please select an employee to update.","warning");return}let k=[],D="",R;if(e==="hospitalStaff"?(R=o.find($=>$.name===n),console.log("selectedEmployeeName:",n),console.log("originalData:",R),d.coronerName!==R?.name&&k.push({name:"First Name",value:`
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
`),k.length===0){g("No changes detected.","info"),I=!1;return}_={title:P,color:31743,fields:[{name:"Employee Name",value:n,inline:!0},{name:"Employee Type",value:e,inline:!0},...k,{name:"Firebase Debug String",value:D,inline:!1}],timestamp:new Date().toISOString(),footer:{text:`Submitted via PHMC Tools Tool - v${u.sha||"N/A"}`}},I=!0,F=`Successfully updated information for ${n}.`}if(I){const D={content:`New Employee Management Request: ${P}`,embeds:[_]};await hc(S,_,u,`Employee Management: ${P}`)&&g(F,"check-circle")}}catch(S){console.error("Error in sendMissingEmployeeNotification:",S),nt(S,{extra:{context:"sendMissingEmployeeNotification"}}),g("An unexpected error occurred. Please try again.","error")}},gA=async({requester:t,phrase:e,bingoType:n,commitInfo:r})=>{const s="https://discord.com/api/webhooks/1430314470902599680/o_JoPsW9jNgKICL9StKxgORICn3cOzu41FheUsJFsPkRAX-Xt9LKTulXhWCaQsU5Cfxw",o=e.split(`
`);let a=[];o.forEach((d,u)=>{a.push({name:`Phrase Line ${u+1}`,value:`
`,inline:!1})}),a.push({name:"Requested For",value:n||"Unknown Game",inline:!0}),a.push({name:"Requested By",value:t||"Anonymous",inline:!0}),await hc(s,{title:"📝 New Bingo Phrase Request",description:"A new phrase has been requested for review.",color:7506394,fields:a,footerText:"PHMC Bingo"},r)},bA=async({webhookUrl:t,formData:e,commitInfo:n,actionMessage:r,selectOptions:s,formDefinition:o})=>{const{applicantTitleAndFullName:a,recruitmentPosition:l,applicantContactDetails:d,oocUcpName:u,oocDiscord:g}=e;let f=null;if(o)switch(o.titleKey){case"phmcGeneralApplication":f=s.physicianRecruitmentDetails;break;case"phmcPsychApplication":f=s.psychPositionDetailsData;break;case"phmcAdminApplication":f=s.adminPositionDetailsData;break;case"phmcNursingApplication":f=s.nursePositionDetailsData;break;case"phmcCoronerRecruitmentApplication":f=s.coronerPositionDetailsData;break;case"phmcEMSApplication":f=s.emsPositionDetailsData;break;default:console.warn(`No specific positionDetailsSource mapping for PHMC Recruitment form: ${o.titleKey} in webhook.`)}const p=f?.[l]?.displayName||l||"N/A",S=o?.name||"PHMC Recruitment Application",_=[{name:"Applicant Name",value:a||"N/A",inline:!0},{name:"Position Applied For",value:p,inline:!0},{name:"Contact Details",value:d||"N/A",inline:!1},{name:"OOC UCP Name",value:u||"N/A",inline:!0},{name:"Discord Name",value:g||"N/A",inline:!0},{name:"Timestamp",value:new Date().toLocaleString(),inline:!1},{name:"Action",value:r||"Application Processed",inline:!1}],I={title:`${S} Notification`,color:31743,fields:_,footerText:"PHMC Recruitment Forms"};await hc(t,I,n)},yA=async({formData:t,getBBCodeContent:e,showNotification:n,commitInfo:r,selectOptions:s,formDefinition:o})=>{const a=e(),l=o?.name||"PHMC Recruitment Application";if(!a){n(`Failed to generate ${l} BBCode. Copying skipped.`,"error"),en(`getBBCodeContent returned null/undefined for ${l}`,"error");return}await ig(a,n,`${l} BBCode copied to clipboard!`)&&await bA({webhookUrl:"https://discord.com/api/webhooks/1430314470902599680/o_JoPsW9jNgKICL9StKxgORICn3cOzu41FheUsJFsPkRAX-Xt9LKTulXhWCaQsU5Cfxw",formData:t,commitInfo:r,actionMessage:`${l} BBCode Copied`,selectOptions:s,formDefinition:o})},vA=async({webhookUrl:t,formData:e,versionName:n,bbCodeVersion:r,selectedAgencyGroup:s,statusTitle:o,statusColor:a,actionMessage:l,commitInfo:d,firebaseSavedCount:u,errorMessage:g,userSavedCount:f,savedReports:p,coronerListData:S=[],phmcListData:_=[]})=>{const{phmcEmployee:I,coronerEmployee:F,coronerRank:P,patientFirstName:k,patientLastName:D,patientName:R,decedentName:$,patientID:O,decedentOOC:E,requestingOfficer:y,registrantFullName:w,ceoFullName:x,autopsyDiagramImgurUrl:v}=e;let A="Unknown User";const C=[1,2,4,8,11,18],M=[5,6,7,9,10,12,13,14,16,19,20,21,22,23,27,28,29,35],B=[3,24,25,26],j=C.includes(r),G=M.includes(r);if(B.includes(r))R?A=R:k||D?A=`${k||""} ${D||""}`.trim():A="Civilian";else if(G)if(I){const pe=_.find(be=>be.name===I);A=`${Mi(pe?.category||"Hospital Staff")} ${I}`}else R?A=R:(k||D)&&(A=`${k||""} ${D||""}`.trim());else if(j){if(F){const pe=S.find(be=>be.name===F);A=`${Mi(pe?.category||P||"Coroner")} ${F}`}}else if(F){const pe=S.find(be=>be.name===F);A=`${Mi(pe?.category||P||"Coroner")} ${F}`}else if(I){const pe=_.find(be=>be.name===I);A=`${Mi(pe?.category||"Hospital Staff")} ${I}`}else k||D?A=`${k||""} ${D||""}`.trim():R&&(A=R);const V=R||$||O||w||x||(s==="SAAA"?e.aircraftType||e.companyName||"SAAA Record":"N/A"),ue=[{name:"User",value:A,inline:!0},{name:"Form Type",value:n,inline:!0},{name:"Primary Identifier",value:V,inline:!0},...s!=="SAAA"||e.decedentOOC?[{name:"OOC Name",value:E||R||"N/A",inline:!0}]:[],...s!=="SAAA"||e.requestingOfficer?[{name:"Requesting Officer",value:y||"N/A",inline:!0}]:[],{name:"Timestamp",value:new Date().toLocaleString(),inline:!1},{name:"Action",value:l,inline:!1}],ve=rg();ue.push({name:"Source",value:ve,inline:!0});let de=f;if(Array.isArray(p)&&e){const pe=e.coronerEmployee||e.phmcEmployee||e.patientName||e.decedentName,ge=Ki(pe);de=p.filter(be=>Ki(be.authorName)===ge).length,console.log("[Discord Webhook] Calculating user saved reports:",{currentAuthor:pe,sanitizedAuthorId:ge,savedReports:p.map(be=>({authorName:be.authorName,sanitized:Ki(be.authorName)})),actualUserSavedCount:de})}typeof de=="number"&&ue.push({name:"Saved Reports (User)",value:de.toString(),inline:!0}),u!==void 0&&ue.push({name:"Total Saved Reports (Firebase)",value:u.toString(),inline:!0}),g&&ue.push({name:"Error Details",value:g,inline:!1});const ee=(pe=>pe.filter(ge=>!ge.name||!ge.value?(console.warn("Invalid field detected:",ge),!1):typeof ge.value!="string"||ge.value.trim()===""?(console.warn("Field value must be a non-empty string:",ge),!1):!0))(ue),ne={title:o,description:l,color:a,fields:ee,timestamp:new Date().toISOString(),footer:{text:`Forms Tool | gh-pages ${d.sha||"N/A"}`}};if(n==="Autopsy Report"&&v){const pe=Array.isArray(v)?v[0]:v;pe&&typeof pe=="string"&&(ne.image={url:pe})}console.log("[Discord Webhook] Validated payload:",{webhookUrl:t,embed:ne,fields:ee});try{const pe=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({embeds:[ne]})});if(!pe.ok){const ge=await pe.text();console.error(`Failed to send Discord webhook. Status: ${pe.status} ${pe.statusText}`,ge),en(`Discord webhook send failed: ${pe.status}`,{level:"error",extra:{statusText:pe.statusText,responseBody:ge,webhookTitle:o}})}}catch(pe){console.error("Error sending Discord webhook:",pe),nt(pe,{extra:{context:"sendFormInteractionWebhookInternal Fetch Error",webhookTitle:o}})}},_A=(t,e)=>{const n=tg(e),r={};return n.forEach(s=>{t.hasOwnProperty(s)&&(r[s]=t[s])}),r},CA=async({formData:t,bbCodeVersion:e,selectedAgencyGroup:n,getBBCodeContent:r,getFormDefinition:s,saveReport:o,showNotification:a,removeNotification:l,handleAgencySelect:d,setLastWebhookIdentifier:u,lastWebhookIdentifier:g,commitInfo:f,database:p,getCurrentReportAuthor:S,isGtaAuthenticated:_=!1,gtaWorldUser:I=null,coronerListData:F=[],phmcListData:P=[]})=>{const k=r(),D=s(e),R=D?D.name:"Unknown Form";if(!k){a(`Failed to generate BBCode for ${R}. Please check form data.`,"error"),en(`getBBCodeContent returned null/undefined for bbCodeVersion: ${e}`,"error");return}let $={success:!1},O=!1;if([3,24,25,26].includes(e)){O=!0;const y=r(),w=`[CIVILIAN-REPORT] - ${t.patientName||""} ${t.patientFirstName||""} ${t.patientLastName||""} - ${new Date().toISOString()}`,x=Ki(w),v={bbCodeVersion:e,data:_A(t,e),bbCode:y,timestamp:Date.now(),originalKey:w,authorName:"CIVILIAN"};_&&I&&(v.gtawUsername=I.username,v.gtawCharacterId=I.id,v.gtawCharacterName=I.faction?I.faction.firstname&&I.faction.lastname?`${I.faction.firstname} ${I.faction.lastname}`:I.faction.characterName||I.username:I.username,v.gtawSyncTimestamp=new Date().toISOString(),v.gtawSyncVersion="1.1",console.log("📄 [Civilian Report Save] Automatically added GTAW data to civilian report:",{username:v.gtawUsername,characterId:v.gtawCharacterId,characterName:v.gtawCharacterName,reportType:"CIVILIAN"}));try{const A=me(p,`savedReports/CIVILIAN/${x}`);await It(A,v);const C={reportKey:x,originalKey:w,bbCodeVersion:e,hasGtawData:_&&!!I};_&&I&&(C.gtawUsername=I.username,C.gtawCharacterId=I.id,C.gtawCharacterName=v.gtawCharacterName),await sg("report_saved_civilian",C),$={success:!0}}catch(A){console.error("Error saving Civilian report to Firebase:",A),nt(A,{extra:{context:"Firebase set report"}}),$={success:!1,error:"Failed to save Civilian report to Firebase."}}}else $=await o();if(!$.success&&!O){const y=$.error||"Report failed to save. Copying and webhook notification will be skipped.";a(y,"error");return}if(!await ig(k,a,`${R} copied to clipboard!`)){a("BBCode could not be copied. Webhook notification will be skipped.","warning");return}try{let y="https://discord.com/api/webhooks/1430314470902599680/o_JoPsW9jNgKICL9StKxgORICn3cOzu41FheUsJFsPkRAX-Xt9LKTulXhWCaQsU5Cfxw";if(y){let w;if(e===11){const{decedents:C}=t;w=C.map(M=>`${M.decedentName||""}|${M.decedentOOC||""}`).join(",")}else{const{decedentName:C,decedentOOC:M}=t;w=`${C||""}|${M||""}`}let x=0,v;try{const C=me(p,"savedReports"),M=await qe(C);if(M.exists()){const B=M.val();x=Object.values(B).reduce((j,G)=>j+Object.keys(G).length,0)}}catch(C){console.error("Error fetching total saved reports count from Firebase:",C),nt(C,{extra:{context:"Firebase Total Saved Reports Count"}})}try{let C;O?C="CIVILIAN":(C=S(t),C||(C="UNKNOWN")),C=Ki(C);let M=me(p,`savedReports/${C}`),B=await qe(M);if(!B.exists()&&C.includes("_")){const j=C.replace(/_/g," ");M=me(p,`savedReports/${j}`),B=await qe(M)}if(B.exists()){const j=B.val();v=Object.keys(j).length}else v=0}catch(C){console.error("Error fetching user saved reports count from Firebase:",C),nt(C,{extra:{context:"Firebase User Saved Reports Count"}})}let A="BBCode Copied";if($.success&&(A="BBCode Copied & Report Saved to Firebase"),await vA({webhookUrl:y,formData:t,versionName:R,bbCodeVersion:e,selectedAgencyGroup:n,statusTitle:"Someone has used your generator!",statusColor:65280,actionMessage:A,commitInfo:f,firebaseSavedCount:x,userSavedCount:v,coronerListData:F,phmcListData:P}),u(w),e===1&&t.showRequestingOfficerInput===!0){const C=i.jsx("button",{onClick:M=>{M.stopPropagation(),typeof d=="function"?d(2):(console.error("handleFormCopyAndNotify: Cannot switch form, the component may have unmounted."),a("Action failed: The context was lost. Please navigate to the form manually.","error"))},style:{marginLeft:"10px",cursor:"pointer",padding:"0.25rem 0.5rem",fontSize:"0.875rem",border:"1px solid #0dcaf0",background:"#0dcaf0",color:"white",borderRadius:"0.25rem"},children:"Switch to Coroner Email Form"});a(i.jsxs(i.Fragment,{children:["A Coroner Email was requested for this report. ",C]}),"info-circle",15e3)}}}catch(y){console.error("Error during webhook notification in service: ",y),nt(y,{extra:{context:"handleFormCopyAndNotify Webhook Error",errorName:y.name,errorMessage:y.message}}),a("Report processed, but failed to send Discord notification.","warning")}},og=b.createContext(),SA=()=>b.useContext(og),wA=({children:t})=>{const[e,n]=b.useState(!1),[r,s]=b.useState(!1),[o,a]=b.useState(!1),[l,d]=b.useState(null),[u,g]=b.useState(!1),[f,p]=b.useState(!1),[S,_]=b.useState(!1),[I,F]=b.useState(!1),[P,k]=b.useState(!1),[D,R]=b.useState(!1),[$,O]=b.useState(!1),[E,y]=b.useState(!1),[w,x]=b.useState(""),[v,A]=b.useState([]),[C,M]=b.useState(!1),[B,j]=b.useState(!1),G={showEmsBingoModal:e,setShowEmsBingoModal:n,showGtaCallback:r,setShowGtaCallback:s,showEasterEggModal:o,setShowEasterEggModal:a,easterEggType:l,setEasterEggType:d,showAgencySelector:u,setShowAgencySelector:g,hideAgencySelector:f,setHideAgencySelector:p,showEmployeeModal:S,setShowEmployeeModal:_,showEmsAmaModal:I,setShowEmsAmaModal:F,showBusinessCard:P,setShowBusinessCard:k,showAgencyGroupSelectorModal:D,setShowAgencyGroupSelectorModal:R,showCctvRequestModal:$,setShowCctvRequestModal:O,showPHMCModal:E,setShowPHMCModal:y,switchableModalTitle:w,setSwitchableModalTitle:x,switchableFormsList:v,setSwitchableFormsList:A,showFeatureRequestModal:C,setShowFeatureRequestModal:M,showPrivacyPolicyModal:B,setShowPrivacyPolicyModal:j};return i.jsx(og.Provider,{value:G,children:t})},ag=b.createContext(),EA=()=>b.useContext(ag),NA=({children:t})=>{const[e,n]=b.useState(()=>localStorage.getItem("seasonalEffectsEnabled")!=="false"),s={seasonalEffectsEnabled:e,toggleSeasonalEffects:()=>{const o=!e;n(o),localStorage.setItem("seasonalEffectsEnabled",String(o))}};return i.jsx(ag.Provider,{value:s,children:t})},cg=b.createContext(),xA="https://phmc-tools.gta.world/",AA="https://gtaw-forms.github.io/forms/",IA=()=>{const t=b.useContext(cg);if(!t)throw new Error("useLockdown must be used within a LockdownProvider");return t},TA=({children:t})=>{const[e,n]=b.useState({enabled:!1,notification:"",dialog:"",affectedDeployments:[]}),[r,s]=b.useState(""),[o,a]=b.useState(!1);b.useEffect(()=>{const u=window.location.href;u.startsWith(xA)?s("phmc-tools"):u.startsWith(AA)?s("github-pages"):s("local")},[]),b.useEffect(()=>{const u=me(Ne,"adminSettings/lockdownConfig"),g=Wi(u,f=>{const p=f.val(),S={enabled:!1,notification:"",dialog:"",affectedDeployments:[]};p&&(S.enabled=!!p.enabled,S.notification=p.notification||"",S.dialog=p.dialog||"",S.affectedDeployments=Array.isArray(p.affectedDeployments)?p.affectedDeployments:[]),n(S);const _=S.enabled&&(S.affectedDeployments.includes("all")||S.affectedDeployments.includes(r));a(_)});return()=>g()},[r]);const l=()=>{a(!1)},d=!!e.enabled&&Array.isArray(e.affectedDeployments)&&(e.affectedDeployments.includes("all")||e.affectedDeployments.includes(r));return i.jsx(cg.Provider,{value:{lockdownConfig:e,currentDeployment:r,showDialog:o,hideDialog:l,isLockdownActive:d},children:t})};function RA({notification:t,show:e}){return e?i.jsx(Nt,{variant:"danger",className:"mb-0 text-center",style:{borderRadius:0,position:"sticky",top:0,zIndex:1030},children:t}):null}const kA=({isOpen:t,onClose:e,title:n,children:r,className:s="",showCloseButton:o=!0,closeOnOverlayClick:a=!0,modalSize:l="medium",zIndex:d=1050})=>{const u=b.useRef(null),g=b.useRef(null);if(b.useEffect(()=>{if(t){g.current=document.activeElement,document.body.style.overflow="hidden",u.current?.focus();const S=_=>{_.key==="Escape"&&e&&e()};return window.addEventListener("keydown",S),()=>{document.body.style.overflow="",window.removeEventListener("keydown",S),g.current?.focus()}}},[t,e]),!t)return null;const f=S=>{a&&S.target===S.currentTarget&&e&&e()},p=i.jsx("div",{className:"modal-overlay",onClick:f,style:{zIndex:d},role:"presentation",children:i.jsxs("div",{ref:u,className:`modal-container ${s} modal-size-${l}`,role:"dialog","aria-modal":"true","aria-labelledby":"modal-title",tabIndex:-1,children:[i.jsxs("div",{className:"modal-header",children:[i.jsx("h2",{id:"modal-title",className:"modal-title",children:n}),o&&i.jsx("button",{type:"button",className:"modal-close-button",onClick:e,"aria-label":"Close modal",children:"×"})]}),i.jsx("div",{className:"modal-content",children:r})]})});return vg.createPortal(p,document.body)};function FA({show:t,onHide:e,message:n}){return i.jsx(kA,{isOpen:t,onClose:e,title:"System Notice",showCloseButton:!1,closeOnOverlayClick:!1,className:"lockdown-dialog",modalSize:"small",children:i.jsxs("div",{className:"lockdown-content",children:[i.jsx("div",{className:"lockdown-message",children:n}),i.jsx("div",{className:"lockdown-footer",children:i.jsx("button",{className:"lockdown-button",onClick:e,children:"Acknowledge"})})]})})}const Uc=new Set,PA=(t,e="unknown")=>{if(Uc.has(e))return Promise.resolve();const n=()=>(Uc.add(e),t().catch(r=>{console.warn(`Failed to preload ${e}:`,r),Uc.delete(e)}));return"requestIdleCallback"in window?new Promise(r=>{window.requestIdleCallback(()=>{n().then(r)},{timeout:2e3})}):new Promise(r=>{setTimeout(()=>{n().then(r)},0)})},$A=async t=>{for(const{importFn:e,name:n}of t)await PA(e,n)},Ks="/forms/assets/phmc-CpbfyLq2.png",Bc="/forms/assets/corpse--7j0dJhB.png",DA=b.lazy(()=>Pe(()=>import("./SavedReportsModal-DTjJTW77.js"),__vite__mapDeps([32,1,2,5]))),OA=b.lazy(()=>Pe(()=>import("./AgencyGroupSelectorModal-C0ozLdBW.js"),__vite__mapDeps([33,1,2,5]))),MA=b.lazy(()=>Pe(()=>import("./AgencySelector-C79PUIAM.js"),__vite__mapDeps([34,1,2,5]))),jA=b.lazy(()=>Pe(()=>import("./OnboardingModal-CoRjqixI.js"),__vite__mapDeps([35,1,2,5]))),LA=b.lazy(()=>Pe(()=>import("./Footer-l6YCAUm-.js"),__vite__mapDeps([36,1,2,37]))),UA=b.lazy(()=>Pe(()=>import("./HeaderInfo-Bgg7_NBI.js"),__vite__mapDeps([38,1,2,5]))),BA=b.lazy(()=>Pe(()=>import("./BusinessCardModal-DVka2cUK.js"),__vite__mapDeps([39,1,2,5,40]))),HA=b.lazy(()=>Pe(()=>import("./EmsAmaModal-BzArq0Fr.js"),__vite__mapDeps([41,1,2,5,42]))),GA=b.lazy(()=>Pe(()=>import("./EasterEggModal-JHUKQqi1.js"),__vite__mapDeps([43,1,2]))),Uh=b.lazy(()=>Pe(()=>import("./SwitchableFormsModal-DQ4Aavmz.js"),__vite__mapDeps([44,1,2,5]))),WA=b.lazy(()=>Pe(()=>import("./EmployeeModal-BaETqt5l.js"),__vite__mapDeps([45,1,2,5]))),zA=b.lazy(()=>Pe(()=>import("./RecruitmentStatusDisplay-5tM6x_43.js"),__vite__mapDeps([46,1,2]))),qA=b.lazy(()=>Pe(()=>Promise.resolve().then(()=>Tx),void 0)),VA=b.lazy(()=>Pe(()=>import("./FeatureRequestModal-wsSFun6f.js"),__vite__mapDeps([47,1,2,5,48]))),YA=b.lazy(()=>Pe(()=>import("./FormImageLink-Do24PBOW.js"),__vite__mapDeps([49,1,2]))),KA=b.lazy(()=>Pe(()=>import("./EmsBingoModal-DzV7g_bg.js"),__vite__mapDeps([50,1,2,5,4,51]))),JA=b.lazy(()=>Pe(()=>import("./EmployeeDetailsModal-Dbv0UGV4.js"),__vite__mapDeps([52,1,2,5])));function XA({formData:t,setFormData:e,lastWebhookIdentifier:n,setLastWebhookIdentifier:r,initialFormData:s,showNotification:o,removeNotification:a}){const l=Ga(),d=b.useCallback(T=>Mi(T),[]),{showEmsBingoModal:u,setShowEmsBingoModal:g,showEasterEggModal:f,setShowEasterEggModal:p,easterEggType:S,setEasterEggType:_,showAgencySelector:I,setShowAgencySelector:F,hideAgencySelector:P,setHideAgencySelector:k,showEmployeeModal:D,setShowEmployeeModal:R,showEmsAmaModal:$,setShowEmsAmaModal:O,showBusinessCard:E,setShowBusinessCard:y,showAgencyGroupSelectorModal:w,setShowAgencyGroupSelectorModal:x,showCctvRequestModal:v,setShowCctvRequestModal:A,showPHMCModal:C,setShowPHMCModal:M,switchableModalTitle:B,setSwitchableModalTitle:j,switchableFormsList:G,setSwitchableFormsList:z,showFeatureRequestModal:V,setShowFeatureRequestModal:ue}=SA(),{user:ve,isAuthenticated:de,login:Q,logout:ee,isLoading:ne,isPhmcMember:pe,factionData:ge,characterName:be}=dr(),[Ae,Ge]=b.useState(!1),[Ke,xe]=b.useState(null),Ze=()=>{xe({username:"DevModeUser",id:"dev-123",isFactionMember:!0,faction:{characterId:"dev-char-456",characterName:"Dev Character",firstname:"Dev",lastname:"Character",rank:"Developer",scriptRank:999},allFactionCharacters:[],character:[],characters:[],accessLevel:5,permissions:{}}),Ge(!0),Gt(!0),o("Bypass Login Activated!","info-circle",3e3)},we=Ae?Ke:ve,et=Ae||de,yt=Ae?!0:pe;Ae&&Ke?.faction,Ae&&Ke?.faction?.characterName;const[re,Re]=b.useState(!1),[le,ke]=b.useState(!1),[Ie,q]=b.useState(!1),[se,Y]=b.useState(!1),[ie,te]=b.useState(null),[Te,De]=b.useState(!1),[Rt,Ue]=b.useState(null),[J,ze]=b.useState([]),{phmcListData:Be,coronerListData:Oe,agencyDataStore:Ee,selectOptions:W,physicianRecruitmentDetails:Qe,psychRecruitmentDetails:ut,adminRecruitmentDetails:tn,emsRecruitmentDetails:Mt,nurseRecruitmentDetails:Pt,coronerRecruitmentDetails:ct,isLoadingData:nn,refreshSegments:kt,phmcGroupedOptions:En,coronerGroupedOptions:Kt,isDevMode:Nn,setIsDevMode:Gt}=Pf(),Os=()=>{o("Please wait, this may take a moment...","info-circle",1e4);const T=window.location.hash||"#/",Z=T==="#/"||T==="#",Ce=T.startsWith("#/admin"),Fe=T.startsWith("#/form"),ft=T.includes("/auth/")||T.includes("/callback");console.log("🧭 [GTAW Login] Redirect Path Analysis:",{currentPath:T,fullUrl:window.location.href,pathname:window.location.pathname,search:window.location.search,hash:window.location.hash,isOnHomepage:Z,isOnAdminPage:Ce,isOnFormPage:Fe,isOnAuthPage:ft,userAgent:navigator.userAgent.substring(0,100),timestamp:new Date().toISOString()});let zt=T;T.includes("/auth/")||T.includes("/callback"),zt="#/",Q({returnPath:zt})};b.useEffect(()=>{if(et&&we&&we.username&&!re){let T=`Welcome back, ${we.username}!`;if(we.isFactionMember&&we.faction){const Z=we.faction.firstname&&we.faction.lastname?`${we.faction.firstname} ${we.faction.lastname}`:we.faction.name||we.username,Ce=we.faction.rank;Z&&Ce!==void 0?T=`Welcome back, ${Z}! (Script Rank: ${Ce})`:Z&&(T=`Welcome back, ${Z}!`)}o(T,"check-circle",5e3),Re(!0)}!et&&re&&Re(!1)},[et,we,re,o]),b.useEffect(()=>{if(et&&we&&!Ie){const T=we.faction?.rank||"";(T.includes("Nurse")||T.includes("Nursing"))&&(async()=>{try{const Ce=we.faction?.characterId||we.characterArray?.[0]?.id||we.id,Fe=Ce?`char_${Ce}`:null;if(Fe){const ft=me(Ne,`Nursing_Records/${Fe}`),zt=await qe(ft);if(zt.exists()){const sn=zt.val();sn.name&&sn.surname&&sn.discord&&sn.phoneNumber&&sn.family&&sn.closeFamily&&sn.address?o("Your Employee Record is complete. Would you like to update it?","info-circle",0,[{label:"Update Record",handler:()=>ke(!0),variant:"outline-primary"}]):ke(!0)}else ke(!0)}else ke(!0)}catch(Ce){console.error("Error checking nursing employee record:",Ce),ke(!0)}finally{q(!0)}})()}},[et,we,Ie,o]);const Mn=T=>{const Z=T.name||`${T.firstname||""} ${T.lastname||""}`.trim();Ue(T),e(Ce=>({...Ce,phmcEmployee:Z})),console.log("[Character Selection] User selected character:",{characterName:Z,characterId:T.id,username:we?.username}),o(`Selected character: ${Z}`,"check-circle",3e3)};b.useEffect(()=>{if(et&&yt&&we&&(Be.length>0||Oe.length>0)){const T=we.faction?.characterName||(we.faction?.firstname&&we.faction?.lastname?`${we.faction.firstname} ${we.faction.lastname}`:null);if(T&&!t.phmcEmployee&&!t.coronerEmployee){let Z=Be.find(Ce=>Ce.name&&Ce.name.toLowerCase()===T.toLowerCase());if(Z){e(Ce=>({...Ce,phmcEmployee:Z.name,phmcEmployeeLastName:Z.lastName||"",phmcRank:d(Z.category||Z.rank||"")})),console.log("[Auto-fill] Auto-populated PHMC employee field:",{characterName:T,matchedName:Z.name,username:we.username,rank:we.faction?.scriptRank,category:Z.category}),setTimeout(()=>{o(`Auto-filled PHMC employee: ${Z.name}`,"check-circle",3e3)},1e3);return}if(Z=Oe.find(Ce=>Ce.name&&Ce.name.toLowerCase()===T.toLowerCase()),Z){e(Ce=>({...Ce,coronerEmployee:Z.name,coronerBadge:Z.badge||"",coronerRank:d(Z.rank||Z.category||""),coronerDiscord:Z.discord||"",coronerPHNumber:Z.phNumber||"50056"})),console.log("[Auto-fill] Auto-populated Coroner employee field:",{characterName:T,matchedName:Z.name,username:we.username,rank:we.faction?.scriptRank,coronerRank:Z.rank}),setTimeout(()=>{o(`Auto-filled Coroner employee: ${Z.name}`,"check-circle",3e3)},1e3);return}console.log("[Auto-fill] No employee match found for character:",{characterName:T,username:we.username,availablePhmcStaff:Be.length,availableCoronerStaff:Oe.length}),setTimeout(()=>{o(`Character "${T}" not found in employee database. Please select manually.`,"info-circle",4e3)},1e3)}}},[et,yt,we,Be,Oe,t.phmcEmployee,t.coronerEmployee,e,o,d]),b.useEffect(()=>{const T=localStorage.getItem("onboardingComplete"),Z=localStorage.getItem("userOnboardingPreferences"),Ce=localStorage.getItem("onboardingProgress");if(Z)try{const Fe=JSON.parse(Z);_e(Fe),ye(!0)}catch(Fe){console.warn("Failed to parse user onboarding preferences:",Fe),localStorage.removeItem("userOnboardingPreferences")}if(Ce&&!T)try{const Fe=JSON.parse(Ce);if(Fe.awaitingGtawOAuth&&et){U(!0),ye(!1);return}if(Fe.currentStep){U(!0),ye(!1);return}}catch(Fe){console.warn("Failed to parse onboarding progress:",Fe),localStorage.removeItem("onboardingProgress")}!T&&!Z?U(!0):ye(!0)},[et]);const Jn=T=>{console.log(`[ONBOARDING_LOG] handleOnboardingComplete called - UserType: ${T.userType}, NotificationType: ${T.userType==="leo"?"SKIPPED_LEO":"GENERIC_WELCOME"}`),_e(T),ye(!0),U(!1),T.allowedCategories?.length===1&&($e(T.allowedCategories[0]),localStorage.setItem("selectedAgencyGroup",T.allowedCategories[0])),T.defaultForm&&(dn(T.defaultForm),localStorage.setItem("selectedForm",T.defaultForm.toString())),T.userType==="leo"&&!T.quickAccess?(console.log(`[ONBOARDING_LOG] Showing notification - UserType: LEO, NotificationType: LEO_ACCESS_CONFIGURED, Message: "LEO access granted! Sign in with GTA World and click the 'CCTV Request' button in the Tools menu."`),o("LEO access granted! Sign in with GTA World and click the 'CCTV Request' top menu.","shield-alt",8e3)):T.userType!=="leo"&&(console.log(`[ONBOARDING_LOG] Showing notification - UserType: ${T.userType}, NotificationType: GENERIC_WELCOME, Message: "Welcome! Your interface has been customized for ${T.userType} users."`),o(`Welcome! Your interface has been customized for ${T.userType} users.`,"check-circle"))},ss=()=>{U(!1),ye(!0),o("Onboarding skipped. You can restart it anytime from the Tools menu.","info-circle")},hr=()=>{localStorage.removeItem("onboardingComplete"),localStorage.removeItem("onboardingSkipped"),localStorage.removeItem("userOnboardingPreferences"),_e(null),ye(!1),U(!0)},[xn,An]=b.useState(!1),[mr,rn]=b.useState(!0),[kr,Wt]=b.useState(!1),pr=b.useRef(null),[jn,In]=b.useState(!1),[Xn,Fr]=b.useState(!1),[Le,dn]=b.useState(()=>{const T=localStorage.getItem("bbCodeVersion");return T?parseInt(T,10):vr[0]?.version||1}),[K,$e]=b.useState(null),[$t,bn]=b.useState(!1),[Tn,Rn]=b.useState(!1),[Pr,vt]=b.useState(!1),[jt,Ms]=b.useState({sha:"",date:null,error:null}),[is,U]=b.useState(!1),[X,_e]=b.useState(null),[Se,ye]=b.useState(!1),[fe,He]=b.useState(!1),[it,un]=b.useState(""),[Je,Jt]=b.useState(""),Ln=19,Xt=20,Si=21,[Eo,No]=b.useState(!1),[xo,Ao]=b.useState({coronerName:"",coronerDiscord:"",employeeLastName:"",coronerRank:"",coronerPHNumber:"",coronerEmployee:"",coronerBadge:"",phmcEmployee:"",staffToRemove:[],authorizedBy:""}),[Fd,os]=b.useState([]),[fr,Io]=b.useState(!1),[To,Ro]=b.useState(""),[ko,Fo]=b.useState(""),[$r,mc]=b.useState(""),[Pd,$d]=b.useState(()=>localStorage.getItem("phmcRecruitmentOptIn")==="true"),{seasonalEffectsEnabled:hn,toggleSeasonalEffects:pc}=EA(),{lockdownConfig:js,showDialog:Ls,hideDialog:Po,isLockdownActive:yn}=IA(),{sendEasterEggNotification:as}=Qf(t,jt,o),{isUploading:$o,handleImageUpload:cs}=Zf(o,e),St=T=>{$e(T),localStorage.setItem("selectedAgencyGroup",T),x(!1),F(!0)},ls=b.useCallback(T=>{dn(T),F(!1),M(!1)},[dn,F,M]),fc=T=>{bn(T),localStorage.setItem("hideAgencyGroupSelectorPreference",T)},Do=()=>{$e("PHMC"),F(!0)},Oo=T=>{const{name:Z,value:Ce,type:Fe,checked:ft}=T.target,zt=Fe==="checkbox"?ft:Ce;e(sn=>{const Un={...sn,[Z]:zt};return localStorage.setItem("formData",JSON.stringify(Un)),Un})},Mo=(T,Z)=>{const Ce=typeof Z=="string"?Z:Z.name;e(Fe=>{let ft;return Ce==="coronerEmployee"&&T?ft={...Fe,coronerEmployee:T.value,coronerBadge:T.badge,coronerRank:d(T.rank),coronerDiscord:T.discord}:Ce==="coronerEmployee"&&!T?ft={...Fe,coronerEmployee:"",coronerBadge:"",coronerRank:"",coronerDiscord:""}:ft={...Fe,[Ce]:T?T.value:""},localStorage.setItem("formData",JSON.stringify(ft)),ft})},Us=()=>{o("Coroner phone filled (placeholder)","info")},Qn=()=>{e(T=>({...T,additionalReports:[...T.additionalReports||[],""]}))},jo=T=>{e(Z=>({...Z,additionalReports:(Z.additionalReports||[]).filter((Ce,Fe)=>Fe!==T)}))},gc=(T,Z)=>{e(Ce=>{const Fe=[...Ce.additionalReports||[]];return Fe[T]=Z,{...Ce,additionalReports:Fe}})},ds=()=>{const T=wi();navigator.clipboard.writeText(T),o("Title copied to clipboard!","check-circle")},wi=()=>{const T=Bn(Le);return T&&T.titleGenerator?T.titleGenerator(t):"Untitled Report"};b.useEffect(()=>{const T=setTimeout(()=>{rn(!1)},5e3);return()=>clearTimeout(T)},[]);const vn=()=>{const T=Bn(Le);if(T&&T.generator){if(Le===999)return T.generator({isAdminAuthenticated:t.isAdminAuthenticated,adminUserEmail:t.adminUserEmail,adminDisplayData:t.adminDisplayData,adminSelectedCategoryName:t.adminSelectedCategoryName});{let Z={};T.group==="PHMC Recruitment"&&(T.titleKey==="phmcGeneralApplication"?Z=Qe||{}:T.titleKey==="phmcPsychApplication"?Z=ut||{}:T.titleKey==="phmcAdminApplication"?Z=W.adminPositionDetailsData||{}:T.titleKey==="phmcNursingApplication"?Z=W.nursePositionDetailsData||{}:T.titleKey==="phmcCoronerRecruitmentApplication"?Z=W.coronerPositionDetailsData||{}:T.titleKey==="phmcEMSApplication"&&(Z=W.emsPositionDetailsData||{}));const Ce={...t,positionDetailsData:Z||{},agencyDataStore:Ee,isLoadingData:nn};return T.generator(Ce)}}else return en(`No BBCode generator found for version: ${Le}`),`BBCode generation for form "${(Bn(Le)||{}).name||`Form v${Le}`}" is not implemented.`};b.useEffect(()=>{["phmcEmployee","phmcEmployeeLastName","phmcRank","coronerEmployee","coronerBadge","coronerRank","coronerDiscord","coronerPHNumber","pronouncedTimeOfDeath","department","dateTime","placeOfDeath","mannerOfDeath"].forEach(Fe=>{t[Fe]?localStorage.setItem(Fe,t[Fe]):localStorage.removeItem(Fe)});const{evidenceLockerID:Z,...Ce}=t;localStorage.setItem("formData",JSON.stringify(Ce))},[t]);const Bs=()=>K==="PHMC Recruitment"?"Copy Recruitment BBCode":"Copy BBCode",us=b.useCallback(T=>{const Z=[1,2,4,8,11,18,37],Ce=[5,6,7,9,10,12,13,14,16,19,20,21,22,23,27,28,29,35];if(Z.includes(Le))return T.coronerEmployee||null;if(Ce.includes(Le))return T.phmcEmployee||null;if(T.coronerEmployee)return T.coronerEmployee;if(T.phmcEmployee)return T.phmcEmployee;if(Le===25||Le===3||Le===24){if(T.patientName)return T.patientName;if(T.patientFirstName&&T.patientLastName)return`${T.patientFirstName} ${T.patientLastName}`;if(T.patientFirstName)return T.patientFirstName;if(T.patientLastName)return T.patientLastName}return null},[Le]),Hs=(T,Z)=>{const Ce=tg(Z),Fe={};return Ce.forEach(ft=>{T.hasOwnProperty(ft)&&(Fe[ft]=T[ft])}),Fe},{saveReport:Lo,savedReports:Ei,showSavedReports:hs,setShowSavedReports:Ni,loadUserSavedReports:Uo,loadReportForUser:Gs,handleReportSelectedForAttachment:xi,onAttachReportSummaryRequest:Bo,onParseDecedentRequest:Ws,deleteReportForUser:Ho,toggleSavedReports:Ai,pendingReportAttachmentCallback:gr,reportSelectionFilter:Go,preselectedEmployeeType:Wo}=aA(t,e,Le,dn,vn,us,Hs,W,o,a,p,_,as,pr,Ln,Xt,Si,Qe,ut),zo=()=>{e(Z=>({...s,coronerEmployee:Z.coronerEmployee,phmcEmployee:Z.phmcEmployee,coronerBadge:Z.coronerBadge,coronerRank:Z.coronerRank,coronerDiscord:Z.coronerDiscord,SubmitDate:new Date().toISOString().split("T")[0]})),["dateTime","department","pronouncedTimeOfDeath","placeOfDeath","mannerOfDeath"].forEach(Z=>{localStorage.removeItem(Z),localStorage.removeItem(`${Z}_timestamp`)}),r(null),o("Form cleared! Employee selections preserved.","check-circle")},zs=()=>{x(!1),A(!0)};b.useEffect(()=>{const T=()=>{An(window.innerWidth<=768)};return T(),window.addEventListener("resize",T),()=>window.removeEventListener("resize",T)},[]);const{imageSource:mn,className:qo,effect:Vo}=hn?Lh({imageType:"deathReport"}):{},{imageSource:Dr,className:c}=hn?Lh({imageType:"civilianPaperwork"}):{},h=b.useCallback(()=>{K==="PHMC Recruitment"?yA({formData:t,getBBCodeContent:vn,showNotification:o,commitInfo:jt,selectOptions:W,formDefinition:Bn(Le)}):CA({formData:t,bbCodeVersion:Le,selectedAgencyGroup:K,getBBCodeContent:vn,getFormDefinition:Bn,saveReport:Lo,showNotification:o,removeNotification:a,handleAgencySelect:ls,setLastWebhookIdentifier:r,lastWebhookIdentifier:n,commitInfo:jt,database:Ne,getCurrentReportAuthor:us,isGtaAuthenticated:et,gtaWorldUser:we,coronerListData:Oe,phmcListData:Be})},[K,t,vn,o,jt,W,Le,Lo,a,ls,r,n,Ne,us,Oe,Be,et,we]),m=b.useMemo(()=>Bn(Le),[Le]),[N,L]=b.useState(null),[H,ae]=b.useState(!1);b.useEffect(()=>{m?.componentLoader?(ae(!0),console.log("[Component Loading] Loading component for version:",Le,"definition:",m.name),m.componentLoader().then(T=>{console.log("[Component Loading] Successfully loaded component for version:",Le),L(()=>T.default||T),ae(!1)}).catch(T=>{console.error("[Component Loading] Error loading component for version:",Le,T),L(null),ae(!1)})):(console.log("[Component Loading] No component loader for version:",Le),L(null))},[m]);const We=b.useMemo(()=>{if(!m)return!0;const{requiredFaction:T,requiredRank:Z,isPHMC:Ce}=m;if(!T&&!Z&&!Ce)return!0;const ft=(()=>{try{const Un=localStorage.getItem("phmc_gtaw_oauth_profile");if(Un){const Or=JSON.parse(Un);return console.log("[Auth Debug] Found stored GTAW profile:",{isFactionMember:Or.isFactionMember,rank:Or.rank,hasFactionData:!!Or.faction}),{isFactionMember:Or.isFactionMember===!0,rank:Or.rank||Or.faction?.rank||0}}}catch(Un){console.error("Error reading or parsing localStorage item 'phmc_gtaw_oauth_profile':",Un)}return{isFactionMember:!1,rank:0}})(),zt=yt||ft.isFactionMember,sn=we?.faction?.rank||ft.rank||0;return!(T&&T.includes("PHMC")&&!zt||Z&&sn<Z||Ce&&!zt)},[Le,yt,we]),Et=b.useMemo(()=>{if(et&&we)return!0;try{const T=localStorage.getItem("phmc_gtaw_oauth_profile");if(T)return JSON.parse(T).isFactionMember===!0}catch(T){console.error("Error reading stored GTAW profile for auth check:",T)}return!1},[et,we]),ht=b.useMemo(()=>Et?vr:vr.filter(T=>T.primaryFor&&T.primaryFor.includes("civilian")),[vr,Et]);if(K&&!N&&!nn&&!H){const T=`No componentLoader found for bbCodeVersion: ${Le} in group: ${K}.`;console.warn(`[App.js] ${T}`,{bbCodeVersion:Le,selectedAgencyGroup:K,hasCurrentFormDefinition:!!m,formName:m?.name,hasComponentLoader:!!m?.componentLoader,isLoadingData:nn}),en(T,{level:"warning",extra:{bbCodeVersion:Le,selectedAgencyGroup:K,hasCurrentFormDefinition:!!m,formName:m?.name,hasComponentLoader:!!m?.componentLoader,isLoadingData:nn}})}const Dt=[{version:1,name:"Decedent Services",icon:Bc},{version:2,name:"Email Generator",icon:aa},{version:4,name:"Autopsy Report",icon:Bc},{version:8,name:"Death Certificate",icon:Ks},{version:11,name:"Mass Fatality Report",icon:Bc},{version:37,name:"Public Death Record ",icon:ng}],kn=[{version:6,name:"Physical Evaluation PHMC",icon:Ks},{version:7,name:"Physical Evaluation PBC",icon:sr}],br=[{version:28,name:"Psychological Evaluation | PHMC",icon:Ks},{version:29,name:"Psychological Evaluation | PBC",icon:sr}],Zn=[{version:20,name:"General Consultation | PHMC",icon:Ks},{version:21,name:"General Consultation | PBC",icon:sr}],er=[{version:22,name:"Commentary Note | PHMC",icon:Ks},{version:23,name:"Commentary Note | PBC",icon:sr}],qs=[{version:14,name:"Mental Health - PHMC",icon:Ks},{version:16,name:"Mental Health | PBC",icon:sr}],Ii=[{version:24,name:"Medical Records",icon:La},{version:25,name:"Patient Files",icon:vl}],lg=[{version:24,name:"Internal Email",icon:La},{version:35,name:"Sick Note",icon:vl}],dg=(T,Z)=>{j(T),z(Z),M(!0)};b.useEffect(()=>{K&&localStorage.setItem("bbCodeVersion",Le.toString())},[Le,K]);const ug=async(T,Z,Ce,Fe,ft,zt,sn,Un)=>{await fA(T,Z,Ce,Fe,Oe,Be,ft,zt,sn,jt,o,t.coronerEmployee,t.phmcEmployee),T==="updateRank"&&o("Refreshing staff data...","info-circle",2e3),T==="updateRank"&&o("Staff data refreshed.","check-circle",3e3)};b.useEffect(()=>{const T=sessionStorage.getItem("redirectPath");T&&(sessionStorage.removeItem("redirectPath"),window.history.replaceState(null,"",T));const Z=window.location.pathname;window.location.hash==="#bingo"||Z.endsWith("/bingo")?(console.log("Bingo route detected. Opening Bingo modal."),g(!0)):Z.endsWith("/cctv")&&(console.log("CCTV route detected. Opening CCTV modal."),zs())},[]);const hg=b.useCallback(()=>{g(!1);const T=new URL(window.location.href);T.hash==="#bingo"&&(T.hash=""),T.pathname.endsWith("/bingo")&&(T.pathname=T.pathname.replace(/bingo$/,"")||"/"),window.history.replaceState({},document.title,T.href)},[]),mg=b.useCallback(()=>{A(!1);const T=new URL(window.location.href);T.pathname.endsWith("/cctv")&&(T.pathname=T.pathname.replace(/cctv$/,"")||"/",window.history.replaceState({},document.title,T.href))},[]);b.useEffect(()=>{const Z=new URLSearchParams(window.location.search).get("p"),Ce=window.location.pathname;if(window.location.hash==="#bingo"||Ce.endsWith("/bingo")||Z&&Z.endsWith("/bingo")?g(!0):(Ce.endsWith("/cctv")||Z&&Z.endsWith("/cctv"))&&zs(),Z){const ft=new URL(window.location.href);ft.searchParams.delete("p"),window.history.replaceState({},document.title,ft.href)}},[]);const Dd=T=>Z=>{const Ce=Z.target.checked;Ce&&e(Fe=>({...Fe,massFatality:!1})),Ce&&(No(!1),Ao(Fe=>({...Fe,staffToRemove:[],employeeLastName:"",authorizedBy:""}))),T==="john"?(Rn(Ce),Ce?(vt(!1),e(Fe=>({...Fe,decedentName:"John Doe"}))):t.decedentName==="John Doe"&&e(Fe=>({...Fe,decedentName:""}))):T==="jane"&&(vt(Ce),Ce?(Rn(!1),e(Fe=>({...Fe,decedentName:"Jane Doe"}))):t.decedentName==="Jane Doe"&&e(Fe=>({...Fe,decedentName:""})))};b.useEffect(()=>{const T=()=>{const Ce=new Date,Fe=bg=>bg.toString().padStart(2,"0"),ft=Fe(Ce.getUTCDate()),zt=Ce.toLocaleString("en-US",{timeZone:"UTC",month:"long"}),sn=Ce.getUTCFullYear(),Un=Fe(Ce.getUTCHours()),Or=Fe(Ce.getUTCMinutes()),fg=Fe(Ce.getUTCSeconds()),gg=`${ft}/${zt}/${sn} ${Un}:${Or}:${fg} UTC`;mc(gg)};T();const Z=setInterval(T,1e3);return()=>clearInterval(Z)},[]);const pg=[{label:"Coroners",options:Oe.map(T=>({value:T.name,label:`${T.name} (${T.rank||"Coroner"})`}))},{label:"PHMC Staff",options:Be.map(T=>({value:T.name,label:`${T.name} (${T.category||"PHMC"})`}))}].filter(T=>T.options.length>0);return b.useEffect(()=>{if(!K)return;const Z={Coroner:[{importFn:()=>Pe(()=>import("./deathReport-BtAm2t4_.js"),__vite__mapDeps([0,1,2,3,4,5])),name:"DeathReport"},{importFn:()=>Pe(()=>import("./CoronerEmail-BbPugudr.js"),__vite__mapDeps([6,1,2,4,5])),name:"CoronerEmail"},{importFn:()=>Pe(()=>import("./Autopsy-D84Z_G4J.js"),__vite__mapDeps([21,1,2,4,5])),name:"Autopsy"}],PHMC:[{importFn:()=>Pe(()=>import("./PhysEvalPHMC-CXqNdp-n.js"),__vite__mapDeps([7,1,2,4,5])),name:"PhysEval"},{importFn:()=>Pe(()=>import("./GeneralConsult-IfV8f5st.js"),__vite__mapDeps([8,1,2,5,3,4])),name:"GeneralConsult"},{importFn:()=>Pe(()=>import("./EmergencyForm-DfeME4N_.js"),__vite__mapDeps([9,1,2,5,4])),name:"EmergencyForm"}],"PHMC Recruitment":[{importFn:()=>Pe(()=>import("./Physician-ClZmVcH7.js"),__vite__mapDeps([26,1,2])),name:"PhysicianFields"},{importFn:()=>Pe(()=>import("./Nursing-BcLdDMF1.js"),__vite__mapDeps([29,1,2])),name:"NursingFields"},{importFn:()=>Pe(()=>import("./Ems-_U9Ul6Qp.js"),__vite__mapDeps([31,1,2])),name:"EmsFields"}],"Civilian Paperwork":[{importFn:()=>Pe(()=>import("./BasicPatientFile-CPaBP31S.js"),__vite__mapDeps([53,1,2,3,14,5,15])),name:"BasicPatientFile"},{importFn:()=>Pe(()=>import("./MedicalRecords-Cjm2ipXA.js"),__vite__mapDeps([19,1,2,5,14,4])),name:"MedicalRecords"}]}[K];Z&&$A(Z).then(()=>{console.log(`[Prefetch] Preloaded ${Z.length} components for ${K}`)}),"requestIdleCallback"in window&&window.requestIdleCallback(()=>{Bn(Le)?.componentLoader&&console.log("[Prefetch] Current form component loader ready:",Le)},{timeout:2e3})},[K,Le]),b.useEffect(()=>{if(!Se)return;const T=localStorage.getItem("selectedAgencyGroup"),Z=localStorage.getItem("hideAgencyGroupSelectorPreference")==="true";if(bn(Z),X?.allowedCategories?.length===1){const Ce=X.allowedCategories[0];$e(Ce),x(!1);return}T&&Z?($e(T),x(!1)):Se&&x(!0)},[Se,X]),b.useEffect(()=>{localStorage.setItem("bbCodeVersion",Le.toString());const T=Bn(Le);T?(K!==T.group&&$e(T.group),localStorage.setItem("selectedAgencyGroup",T.group)):(K!==null&&$e(null),localStorage.removeItem("selectedAgencyGroup"))},[Le]),i.jsx(b.Suspense,{fallback:i.jsx(fl,{}),children:i.jsxs("div",{className:"App",children:[i.jsx(RA,{notification:js.notification,show:yn}),i.jsx(FA,{show:Ls,onHide:Po,message:js.dialog}),"                ",i.jsx(jA,{show:is,onComplete:Jn,onSkip:ss,formDefinitions:vr,showNotification:o}),i.jsx(OA,{show:w&&!K&&Se,onSelectGroup:St,onHideSelectorPreference:fc,physicianRecruitmentDetails:W.physicianRecruitmentDetails||{},psychRecruitmentDetails:W.psychPositionDetailsData||{},adminRecruitmentDetails:W.adminPositionDetailsData||{},emsRecruitmentDetails:W.emsPositionDetailsData||{},handleFormSelect:ls,nurseRecruitmentDetails:W.nursePositionDetailsData||{},coronerRecruitmentDetails:W.coronerPositionDetailsData||{},onShowCctvRequest:zs,onShowBusinessCardModal:()=>y(!0)}),i.jsx(Uh,{show:C,onHide:()=>M(!1),title:B,forms:G,handleFormSelect:T=>{dn(T),M(!1)},isMobile:xn,physicianRecruitmentDetails:W.physicianRecruitmentDetails,psychRecruitmentStatus:W.psychPositionDetailsData,adminRecruitmentDetails:W.adminPositionDetailsData,emsRecruitmentDetails:W.emsPositionDetailsData,nurseRecruitmentDetails:W.nursePositionDetailsData,coronerRecruitmentDetails:W.coronerPositionDetailsData,formDefinitions:vr,userPreferences:X}),i.jsx(qA,{show:v,onHide:mg,showNotification:o,commitInfo:jt,formData:t}),i.jsx(GA,{show:f,type:S,onHide:()=>{p(!1),_(null)}}),hn&&Vo,i.jsx(HA,{show:$,onHide:()=>O(!1),showNotification:o,commitInfo:jt,handleImageUpload:cs}),I&&i.jsx(MA,{showAgencySelector:I,setShowAgencySelector:F,handleAgencySelect:ls,isMobile:xn,hideAgencySelector:P,setHideAgencySelector:k,selectedAgencyGroup:K,formDefinitions:ht,physicianRecruitmentDetails:Qe,psychRecruitmentDetails:ut,adminRecruitmentDetails:tn,emsRecruitmentDetails:Mt,nurseRecruitmentDetails:Pt,coronerRecruitmentDetails:ct,userPreferences:X}),i.jsx("div",{className:"header-info-wrapper",children:i.jsx(UA,{commitInfo:jt})}),i.jsxs("div",{className:"container-fluid",children:[i.jsxs("div",{className:"form-container",children:[i.jsxs("div",{className:"button-group",children:[i.jsx("div",{className:"floating-tools-container",children:i.jsxs(Fn,{drop:"up",show:kr,onToggle:T=>Wt(T),children:[i.jsxs(Fn.Toggle,{variant:"secondary",id:"dropdown-tools",children:[i.jsx("i",{className:"fas fa-tools"})," Tools"]}),i.jsxs(Fn.Menu,{children:[i.jsxs(Fn.Item,{onClick:()=>{R(!0),Wt(!1)},children:[i.jsx("i",{className:"fas fa-users-cog"})," Manage PHMC Staff"]}),i.jsxs(Fn.Item,{onClick:()=>{ue(!0),Wt(!1)},children:[i.jsx("i",{className:"fas fa-bug"})," Report Bug/Feature"]}),i.jsxs(Fn.Item,{onClick:()=>{Ai(),Wt(!1)},children:[i.jsx("i",{className:"fas fa-save"})," Saved Reports"]}),i.jsxs(Fn.Item,{onClick:()=>{O(T=>!T),Wt(!1)},children:[i.jsx("i",{className:"fa-solid fa-truck-medical"})," EMS AMA"]}),i.jsxs(Fn.Item,{onClick:()=>{A(!0),Wt(!1)},children:[i.jsx("i",{className:"fas fa-video"})," LEO Access"]}),i.jsxs(Fn.Item,{onClick:()=>{pc(),Wt(!1)},children:[i.jsx("i",{className:`fas ${hn?"fa-snowflake":"fa-sun"}`}),hn?"Disable":"Enable"," Seasonal Effects"]}),i.jsxs(Fn.Item,{onClick:()=>{hr(),Wt(!1)},children:[i.jsx("i",{className:"fas fa-play-circle"})," Restart Setup Guide"]}),i.jsx(Fn.Divider,{}),i.jsxs(Fn.Item,{onClick:()=>{localStorage.removeItem("selectedAgencyGroup"),$e(null),x(!0),Wt(!1)},children:[i.jsx("i",{className:"fas fa-users"})," Switch Form Type"]})]})]})}),i.jsx(VA,{show:V,onClose:()=>ue(!1),featureRequest:it,setFeatureRequest:un,discordName:Je,setDiscordName:Jt,isBbcodeRequest:fr,setIsBbcodeRequest:Io,bbcodeTitleRequest:To,setBbcodeTitleRequest:Ro,bbcodeRequestText:ko,setBbcodeRequestText:Fo,bbCodeVersion:Le,commitInfo:jt,setShowFeatureRequestModal:ue}),i.jsxs(ce,{variant:"secondary",type:"button",className:"changelog-button",onClick:()=>y(T=>!T),disabled:(()=>{if(yn)return!0;if(et)return!1;try{const T=localStorage.getItem("phmc_gtaw_oauth_profile");if(T)return JSON.parse(T).isFactionMember!==!0}catch(T){console.error("Error reading stored GTAW profile for auth check:",T)}return!0})(),title:et?"Generate a digital business card for PHMC/LSFD staff":"Login with GTAW to access Business Card Tool",children:[i.jsx("i",{className:"fa-solid fa-address-card"}),"Business Card Tool"]})]}),i.jsxs("div",{className:"button-group",children:[i.jsxs(ce,{type:"button",variant:"phmc",className:"changelog-button",onClick:()=>window.open("https://phmc.gta.world/","_blank"),children:[i.jsx("i",{className:"fas fa-hospital"}),"PHMC"]}),i.jsxs(ce,{className:"changelog-button",variant:"secondary",onClick:Do,children:[i.jsx("i",{className:"fas fa-exchange-alt"}),"PHMC Forms"]}),i.jsx(uA,{bbCodeVersion:Le,openSwitchableModal:dg,formGroups:{coronerFormsSubGroup:Dt,physicalEvalFormsSubGroup:kn,psychEvalFormsSubGroup:br,generalConsultFormsSubGroup:Zn,commentaryNoteFormsSubGroup:er,mentalHealthFormsSubGroup:qs,civilianFormsSubGroup:Ii,phmcInternalEmails:lg}})]}),i.jsxs("form",{children:[i.jsx(b.Suspense,{fallback:i.jsx(fl,{}),children:N?We?i.jsx(N,{formData:t,handleChange:Oo,commitInfo:jt,setFormData:e,agencyDataStore:Ee,isLoadingData:nn,typeOfDeathOptions:W.typeOfDeathOptions||[],mannerOfDeathOptions:W.mannerOfDeathOptions||[],requestingAgencyOptions:W.requestingAgenciesOptions||[],phmcGroupedOptions:En,coronerGroupedOptions:Kt,setShowEmployeeModal:R,handleSelectChange:Mo,isUploading:$o,handleImageUpload:cs,removeNotification:a,patientTitleOptions:W.patientTitle||[],patientPhoneOptions:W.patientPhone||[],purposeOptions:W.PurposeMedicalInformationRelease||[],formatOptions:W.PurposeMedicalInformationReleaseFormat||[],medicalRecordOptions:W.MedicalRecordsRelease||[],phmcRank:W.phmcRank||[],patientConsent:W.patientConsent||[],complications:W.complications||[],procedureGood:W.procedureGood||[],BodyMassIndex:W.BodyMassIndex||[],temperature:W.temperature||[],heartRate:W.heartRate||[],breathing:W.breathing||[],bloodPressure:W.bloodPressure||[],patientJob:W.patientJob||[],patientJobRisks:W.patientJobRisks||[],patientAllergiesRisk:W.patientAllergiesRisk||[],patientMedicineRegular:W.patientMedicineRegular||[],patientOther:W.patientOther||[],predisposition:W.predisposition||[],admission:W.admission||[],followup:W.followup||[],painLevel:W.painLevel||[],findings:W.findings||[],lungs:W.lungs||[],pupils:W.pupils||[],wounds:W.wounds||[],ecg:W.ecg||[],sono:W.sono||[],lab:W.lab||[],bloodOxy:W.bloodOxy||[],assignedDepartment:W.assignedDepartment||[],departmentLarge:m?.version===23&&K==="PHMC"?W.paletoClinicDepartment||[]:W.departmentLarge||[],Appearance:W.Appearance||[],Behavior:W.Behavior||[],Speech:W.Speech||[],Mood:W.Mood||[],Affect:W.Affect||[],ThoughtProcess:W.ThoughtProcess||[],ThoughtContent:W.ThoughtContent||[],Insight:W.Insight||[],Cognition:W.Cognition||[],Risk:W.Risk||[],fillPhoneChecked:jn,setFillPhoneChecked:In,handleFillCoronerPhone:Us,addReport:Qn,removeReport:jo,handleReportChange:gc,toggleSavedReports:Ai,dnr:W.dnr||[],attorney:W.attorney||[],dnrOrder:W.dnrOrder||[],isJohnDoe:Tn,isJaneDoe:Pr,handleDoeChange:Dd,currentUtcTime:$r,UpdateMedicalFile:W.UpdateMedicalFile||[],Imaging:W.Imaging||[],patientTitleNew:W.patientTitleNew||[],XrayResults:W.XrayResults||[],ctResults:W.ctResults||[],mriResults:W.mriResults||[],ultrasoundResults:W.ultrasoundResults||[],patientBloodType:W.patientBloodType||[],selectOptions:W,maritalStatus:W.maritalStatus||[],numberChildren:W.numberChildren||[],financialStatus:W.financialStatus||[],physicianRecruitmentDetails:Qe,psychRecruitmentDetails:ut,adminRecruitmentDetails:tn,emsRecruitmentDetails:Mt,nurseRecruitmentDetails:Pt,coronerRecruitmentDetails:ct,showNotification:o,onAttachReportSummaryRequest:Bo,onParseDecedentRequest:Ws}):i.jsx("div",{className:"alert alert-danger",role:"alert",children:"You must be a logged-in PHMC employee to access this form."}):i.jsx("p",{children:"Please select an agency group and then a form type."})}),i.jsx("div",{className:"button-group",children:i.jsxs(ce,{type:"button",onClick:zo,className:"remove-report-button",children:[i.jsx("i",{className:"fas fa-trash-alt"}),"Clear Form"]})})]})]}),i.jsxs("div",{className:"output-container",children:[i.jsxs("div",{className:"floating-admin-button-container",children:[et?i.jsx(i.Fragment,{children:i.jsxs(ce,{type:"button",variant:"success",className:"changelog-button",onClick:()=>{Ae?(Ge(!1),Gt(!1),o("Bypass Login Deactivated!","info-circle",3e3)):ee()},title:Ae?"Bypass Active. Click to deactivate.":`Logged in as ${we?.username||"Unknown"}. Click to logout.`,children:[i.jsx("i",{className:"fas fa-user-check"}),we?.username||"GTAW User"]})}):i.jsxs(i.Fragment,{children:[i.jsxs(ce,{type:"button",variant:"primary",className:"changelog-button",onClick:Os,disabled:ne,title:"Login with GTA World",children:[i.jsx("i",{className:ne?"fas fa-spinner fa-spin":"fab fa-steam"}),ne?"Connecting...":"Login with GTAW"]}),i.jsxs(ce,{type:"button",variant:"info",className:"changelog-button",onClick:Ze,title:"Bypass Login for Development/Testing",children:[i.jsx("i",{className:"fas fa-user-secret"}),"Bypass Login"]})]}),X?.userType==="leo"&&i.jsxs(ce,{type:"button",variant:"info",className:"changelog-button",onClick:()=>A(!0),title:"Request CCTV footage access",children:[i.jsx("i",{className:"fas fa-video"}),"CCTV Request"]}),i.jsxs(ce,{type:"button",variant:"warning",className:"changelog-button",onClick:()=>g(!0),title:"Open Bingo Night!",children:[i.jsx("i",{className:"fas fa-trophy"}),"Bingo Night!"]}),i.jsxs(ce,{type:"button",variant:"danger",className:"changelog-button",onClick:()=>l("/admin"),title:"Open Admin Control Panel",children:[i.jsx("i",{className:"fas fa-user-shield"}),"Admin Panel"]})]}),i.jsx(zA,{selectedAgencyGroup:K,bbCodeVersion:Le,physicianRecruitmentDetails:Qe,psychRecruitmentDetails:ut,adminRecruitmentDetails:W.adminPositionDetailsData||{},emsRecruitmentDetails:W.emsPositionDetailsData||{},nurseRecruitmentDetails:W.nursePositionDetailsData||{},coronerRecruitmentDetails:W.coronerPositionDetailsData||{}}),i.jsx(KA,{show:u,onHide:hg,currentPhmcEmployee:t.phmcEmployee,showNotification:o,setShowEmployeeModal:R,isAdmin:t.isAdminAuthenticated,sendBingoWebhook:({scorer:T,bingoType:Z,phrase:Ce,lineName:Fe,marked:ft,commitInfo:zt})=>pA({scorer:T,bingoType:Z,phrase:Ce,lineName:Fe,marked:ft,commitInfo:zt||jt}),sendPhraseRequestWebhook:({requester:T,phrase:Z,bingoType:Ce})=>gA({requester:T,phrase:Z,bingoType:Ce,commitInfo:jt})}),i.jsx(WA,{show:D,onHide:()=>{R(!1),Rn(!1),vt(!1),No(!1)},isJohnDoe:Tn,coronerList:Oe,phmcList:Be,isRemoveStaff:Eo,showNotification:o,handleDoeChange:Dd,handleRemoveStaffChange:T=>{os(T?T.map(Z=>Z.value):[])},missingEmployeeData:xo,handleMissingEmployeeChange:T=>{Ao({...xo,[T.target.name]:T.target.value})},phmcGroupedOptions:En,coronerGroupedOptions:Kt,employeeOptions:pg,onSubmit:ug}),We&&i.jsxs("div",{className:"bbcode-section",children:[vn()?.length>3e4&&i.jsxs("div",{className:`char-counter ${vn()?.length>6e4?"char-counter-warning":""}`,children:["Character Count: ",vn()?.length??"Error"," / 60000",vn()?.length>6e4&&i.jsx("div",{className:"char-counter-warning-message",children:"Warning: PHPBB forums often have a character limit around 60,000. You may need to split this form."})]}),(()=>{(()=>{try{const T=localStorage.getItem("phmc_gtaw_oauth_profile");if(T)return JSON.parse(T).isFactionMember===!0}catch(T){console.error("Error reading stored GTAW profile for auth check:",T)}return!1})()})(),i.jsxs("div",{className:"modern-output-controls",children:[i.jsxs(ce,{type:"button",onClick:()=>Fr(T=>!T),className:"control-button",disabled:(()=>{if(yn)return!0;if(et)return!1;try{const T=localStorage.getItem("phmc_gtaw_oauth_profile");if(T)return JSON.parse(T).isFactionMember!==!0}catch(T){console.error("Error reading stored GTAW profile for auth check:",T)}return!0})(),children:[i.jsx("i",{className:`fas ${Xn?"fa-eye-slash":"fa-eye"}`}),Xn?"Hide BBCode":"Show BBCode"]}),i.jsxs(ce,{type:"button",onClick:h,className:"control-button",disabled:(()=>{if(yn)return!0;if(et)return!1;try{const T=localStorage.getItem("phmc_gtaw_oauth_profile");if(T)return JSON.parse(T).isFactionMember!==!0}catch(T){console.error("Error reading stored GTAW profile for auth check:",T)}return!0})(),children:[i.jsx("i",{className:"fas fa-save"}),"Save Report"]})]}),i.jsx("p",{className:"generated-title-label",children:"Generated Title"}),i.jsx("p",{className:"generated-title-string",children:wi()}),Xn&&i.jsx("div",{className:"generated-title-container"}),i.jsxs("div",{className:"modern-copy-controls",children:[i.jsxs(ce,{type:"button",onClick:ds,className:"copy-button-modern",disabled:(()=>{if(yn)return!0;if(Nn||de)return!1;try{const T=localStorage.getItem("phmc_gtaw_oauth_profile");if(T)return JSON.parse(T).isFactionMember!==!0}catch(T){console.error("Error reading stored GTAW profile for auth check:",T)}return!0})(),children:[i.jsx("i",{className:"fas fa-copy"}),"Copy Title"]}),i.jsxs(ce,{type:"button",onClick:h,className:"copy-button-modern",disabled:(()=>{if(yn)return!0;if(Nn||de)return!1;try{const T=localStorage.getItem("phmc_gtaw_oauth_profile");if(T)return JSON.parse(T).isFactionMember!==!0}catch(T){console.error("Error reading stored GTAW profile for auth check:",T)}return!0})(),title:yn?"BBCode copying is disabled during site lockdown":"",children:[i.jsx("i",{className:"fas fa-copy"}),Bs()]})]}),de?null:i.jsx("div",{children:"Please ensure you are logged in with GTA World to use copy functionality."}),Xn&&i.jsx("pre",{className:"bbcode-output",children:vn()}),Le===2&&t.department&&Ee&&Ee[t.department]&&Ee[t.department].logo&&Ee[t.department].url&&i.jsxs("div",{className:"agency-buttons",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"8px",margin:"18px 0 0 0",flexWrap:"wrap"},children:[i.jsx("button",{className:"agency-button",style:{background:"none",border:"none",padding:0,cursor:"pointer"},onClick:()=>window.open(Ee[t.department].url,"_blank"),title:Ee[t.department].fullName||t.department,children:i.jsx("img",{src:Ee[t.department].logo,alt:Ee[t.department].fullName||t.department,style:{height:"100px",width:"auto",borderRadius:"6px",border:"1px solid #30363d",background:"#16202c",padding:"4px",marginBottom:"2px"}})}),i.jsx("div",{style:{color:"#eeeeeeb0",fontWeight:600,fontSize:"1.1rem",textAlign:"center",marginTop:"2px"},children:Ee[t.department].fullName||t.department})]}),i.jsx(YA,{bbCodeVersion:Le,selectedAgencyGroup:K,deathReportClass:qo,civilianPaperworkClass:c,deathReportImage:mn,civilianPaperworkImage:Dr})]}),K==="PHMC"&&i.jsx(BA,{show:E,onHide:()=>y(!1),showNotification:o,commitInfo:jt,handleImageUpload:cs}),i.jsx(Uh,{show:C,onHide:()=>M(!1),title:B,forms:G,handleFormSelect:ls,isMobile:xn,physicianRecruitmentDetails:W.physicianRecruitmentDetails,psychRecruitmentStatus:ut,formDefinitions:vr,adminRecruitmentDetails:W.adminPositionDetailsData||{},nurseRecruitmentDetails:W.nursePositionDetailsData||{},coronerRecruitmentDetails:W.coronerPositionDetailsData||{},emsRecruitmentDetails:W.emsPositionDetailsData||{},userPreferences:X}),i.jsx(DA,{show:hs,onHide:()=>Ni(!1),onClose:()=>Ni(!1),savedReports:Ei,reportsForSelectedUser:Ei,loadReport:Gs,loadReportForUser:Gs,deleteReportForUser:Ho,author:us(t),isLoadingReports:fe,handleReportSelectedForAttachment:xi,reportSelectionFilter:Go,pendingReportAttachmentCallback:gr,showNotification:o,currentCoronerEmployee:t.coronerEmployee,currentPhmcEmployee:t.phmcEmployee,preselectedEmployeeType:Wo,bbCodeVersion:Le,onEmployeeSelect:T=>{T&&Uo(T)},employeeOptions:[{label:"PHMC Staff",options:Be.map(T=>({value:T.name,label:`${T.name} (${T.category||"PHMC"})`})).sort((T,Z)=>T.label.localeCompare(Z.label))},{label:"Coroners",options:Oe.map(T=>({value:T.name,label:`${T.name} (${T.rank||"Coroner"})`})).sort((T,Z)=>T.label.localeCompare(Z.label))}],removeNotification:a})]})]}),i.jsx(LA,{}),i.jsx(cA,{show:Te,onHide:()=>De(!1),characters:J,onCharacterSelect:Mn,currentSelection:Rt,title:"Select PHMC Character"}),i.jsx(b.Suspense,{fallback:null,children:i.jsx(JA,{show:le,onHide:()=>ke(!1),user:ve,phmcListData:Be,showNotification:o})})]})})}new Date().toISOString().split("T")[0];function QA(){const t={phmcEmployee:"",coronerEmployee:"",coronerBadge:"",coronerRank:"Forensic Attendant",coronerDiscord:"",coronerPHNumber:"50056",lastName:"",phmcRank:"",department:"",dateTime:"",date:"",decedentName:"",decedentOOC:"",synopsis:"",scenePhotos:"",additionalImages:"",patientID:"",patientName:"",patientAddress:"",massFatality:!1,patientRace:"",patientGender:"",patientPH:"",patientDiscord:"",patientEmergencyContact:"",patientEmergencyContactNumber:"",patientEmergencyContactRelation:"",decedents:[],patientEmergencyContactDiscord:"",patientTitle:"",patientTitleOptions:"",patientAllergies:"",patientCurrentMedicine:"",patientChronicDiseases:"",patientNotes:"",patientDateOfBirth:"",patientBloodType:"",patientChiefComplaint:"",patientProcedure:"",patientDiagnosis:"",patientSecondaryDiagnosis:"",patientMedicine:"",admission:"",followup:"",SubmitDate:new Date().toISOString().split("T")[0],patientExercise:"",placeOfDeath:"",evidenceLockerID:"",evidenceLocker:"",pronouncedTimeOfDeath:"",mannerOfDeath:"",typeOfDeath:"",showRequestingOfficerInput:!1,requestingOfficer:"",deathReport:"",additionalReports:[],autopsyDate:"",autopsyTime:"",autopsyDeathCauses:[""],autopsyAnatomicSummaryItems:[""],autopsyAlbumUrl:"",autopsyPhotosUnavailable:!1,autopsyDiagramMarkers:[],autopsyDiagramImgurUrl:"",externalExamination:"",RadiologyResult:"",deathType:"",causeOfDeath:"",extraStaff:[],patientSummaryConsultation:"",patientSummary:"",surgeryProcedures:"",patientConsentOption:"",patientComplicationOptions:"",procedureGoodOptions:"",patientHeight:"",patientWeight:"",BodyMassIndex:"",temperature:"",heartRate:"",breathing:"",bloodPressure:"",patientJob:"",patientJobRisks:"",patientAllergiesRisk:"",patientMedicineRegular:"",patientOther:"",predisposition:"",patientCareer:"",patientImpairments:"",patientTriggers:"",patientFamily:"",patientFam:"",patientMedicalRecord:"",patientVisitReason:"",patientSymptoms:"",patientDrugs:"",patientDrugsUsage:"",patientMental:"",patientFamSocial:"",patientLegal:"",patientRelationship:"",patientFindings:"",patientTreatmentPlan:"",patientSafety:"",patientFollowUp:"",patientTreatmentMedicine:"",patientTherapy:"",patientRiskAssessment:"",Speech:"",Behavior:"",Appearance:"",Mood:"",Affect:"",Risk:"",ThoughtProcess:"",ThoughtContent:"",Insight:"",Cognition:"",painLevel:"",findings:"",lungs:"",pupils:"",wounds:"",ecg:"",sono:"",lab:[],bloodOxy:"",assignedDepartment:"",departmentLarge:"",paletoClinicDepartment:"",MedicalRecordsRelease:[],payNow:!1,paymentProofPhotos:"",PurposeMedicalInformationReleaseFormat:"",CarePurposeMedicalInformationRelease:"",patientMedInfoReleaseOther:"",MedicalRecordsReleaseOther:"",patientMedInfoFormatOther:"",StupidDateFrom:"",StupidDateTo:"",patientFirstName:"",patientMiddleName:"",patientLastName:"",patientEmail:"",patientPhoneType:"",patientZIP:"",dnr:"",dnrOrder:"",attorney:"",dnrOther:"",attorneyName:"",attorneyRelation:"",attorneyPH:"",maritalStatus:"",numberChildren:"",financialStatus:"",patientSupport:"",patientHarm:"",patientGenetic:"",patientReligion:"",patientSmoker:"",patientAlcohol:"",patientDiet:"",patientSleep:"",patientSexLife:"",patientHazards:"",prescriptionImage:"",attachedReportSummary:"",emailPurpose:"",emailRecipient:"",dateOfVisit:"",sicknessStartDate:"",sicknessEndDate:"",reasonForSickness:"",illnessCondition:"",confirmationPurpose:"",phmcEmployeeSignatureImage:"",recruitmentPosition:"",applicantContactDetails:"",locationPHMC:!1,locationPBC:!1,applicantMedicalConditions:"",citizenUS:!1,citizenPermanent:!1,citizenNone:!1,eduHighSchool:!1,eduCertificate:!1,eduDiploma:!1,eduAssociate:!1,eduBachelor:!1,eduMaster:!1,eduDoctorate:!1,applicantSchoolName:"",applicantEnrollmentTerm:"",applicantMajor:"",applicantLanguages:"",applicantPrevEmployment:"",applicantPrevDuties:"",applicantPrevDismissalReason:"",applicantMotivationLetter:"",exemptCheckbox:!1,oocMedicalExperience:"",oocAdminRecordLink:"",oocStatsLink:"",applicantTitleAndFullName:"",genderMale:"",genderFemale:"",genderOther:"",applicantGenderOtherText:"",applicantDOBAndPlace:"",applicantAddress:"",emsLicenseLink:"",emsPartTimeReason:"",oocUcpName:"",oocForumName:"",oocDiscord:"",oocTimezone:"",charBackground:"",oocOtherCharLicenseProof:"",dfpSanFireLink:"",dfpPhmcLink:"",dfpLegalFactionLink:"",Imaging:[],XrayResults:[],ctResults:[],mriResults:[],ultrasoundResults:[],patientTitleNew:"",patientNameNew:"",patientDateOfBirthNew:"",patientAddressNew:"",patientPHNew:"",patientDiscordNew:"",patientGenderNew:"",patientRaceNew:"",deathRecordType:""},[e,n]=b.useState(()=>{const d=localStorage.getItem("formData");return d?JSON.parse(d):t}),[r,s]=b.useState(null),{showNotification:o,removeNotification:a,NotificationContainer:l}=So();return b.useEffect(()=>{Object.keys(e).length>0&&localStorage.setItem("formData",JSON.stringify(e))},[e]),i.jsx(XA,{formData:e,setFormData:n,lastWebhookIdentifier:r,setLastWebhookIdentifier:s,initialFormData:t,showNotification:o,removeNotification:a})}const ZA=({formData:t,setFormData:e,showNotification:n})=>{const[r,s]=b.useState({sha:"",date:null,error:null}),[o,a]=b.useState(!1),{currentUser:l}=Nd(),{user:d,isAuthenticated:u,isLoading:g,username:f}=dr(),[p,S]=b.useState(!1);b.useEffect(()=>{if(u&&d&&d.username&&!p){let P=`Welcome back, ${d.username}! 🎮`;if(d.isFactionMember&&d.faction){const k=d.faction.firstname&&d.faction.lastname?`${d.faction.firstname} ${d.faction.lastname}`:d.faction.name||d.faction.characterName||d.username,D=d.faction.scriptRank,R=d.faction.rankName;k&&D!==void 0&&R?P=`Welcome back, ${k}! (${R} - Script Rank: ${D}) 🏥`:k&&D!==void 0?P=`Welcome back, ${k}! (Script Rank: ${D}) 🏥`:k&&(P=`Welcome back, ${k}! 🏥`),console.log("[Admin Welcome] PHMC member detected:",{username:d.username,characterName:k,scriptRank:D,rankName:R,factionData:d.faction})}else console.log("[Admin Welcome] Non-PHMC user:",{username:d.username,isFactionMember:d.isFactionMember,hasFactionData:!!d.faction,fullUserObject:d,hasCharacters:!!(d.character||d.characters),charactersCount:(d.character||d.characters)?.length||0,characterNames:(d.character||d.characters)?.map(k=>({id:k.id,name:k.name,firstname:k.firstname,lastname:k.lastname,fullName:`${k.firstname||""} ${k.lastname||""}`.trim(),memberid:k.memberid}))||"no characters data",hasName:!!d.name,hasFirstname:!!d.firstname,hasLastname:!!d.lastname,apiDataKeys:Object.keys(d),nestedCharacterData:{user:d.user,character:d.character,profile:d.profile}});n(P,"check-circle",5e3),S(!0)}!u&&p&&S(!1)},[u,d,p,n]),b.useEffect(()=>{const P="githubCommitInfo";(()=>{try{const R=localStorage.getItem(P);if(R){const $=JSON.parse(R);if(Date.now()-$.timestamp<9e5){s($.info);return}}}catch(R){console.error("Error reading commit info from cache:",R)}fetch("https://api.github.com/repos/GTAW-PHMC/forms/commits/gh-pages").then(R=>{if(!R.ok)throw new Error(`GitHub API responded with status: ${R.status}`);return R.json()}).then(R=>{const $=new Date(R.commit.author.date),O={sha:R.sha.substring(0,7),date:$.toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",timeZoneName:"short"}),error:null};s(O);try{localStorage.setItem(P,JSON.stringify({timestamp:Date.now(),info:O}))}catch(E){console.error("Error writing commit info to cache:",E)}}).catch(R=>{console.error("Error fetching commit:",R),s($=>({...$,error:"Could not fetch latest update information."}))})})()},[]);const _=l?.email?.endsWith("@gmail.com");return!(d?.isFactionMember&&d?.faction||_)&&u&&!g?(o||(async()=>{if(!o)try{const k="https://discord.com/api/webhooks/1384194105944445038/n5fEy-fruWhtCygpT3wn6p5ciffKNhnQRo34Q09Vity_t8U4JEgCOhZgeZhluVqWNYtG";if(k){const D={title:"⚠️ Unauthorized Admin Access Attempt",color:16711680,description:`**User:** ${f||"Unknown"} (${l?.email||"Unknown"})
**Reason:** Not a PHMC member`,timestamp:new Date().toISOString(),footer:{text:"PHMC Security Alert"}};await fetch(k,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({embeds:[D]})}),a(!0)}}catch(k){console.error("Failed to log unauthorized access:",k)}})(),i.jsxs("div",{style:{textAlign:"center",padding:"2rem"},children:[i.jsx("h2",{children:"Access Denied"}),i.jsx("p",{children:"This admin panel is restricted to PHMC members only."}),i.jsx("p",{children:"Please contact a PHMC administrator if you believe this is an error."}),i.jsxs("div",{style:{marginTop:"2rem",display:"flex",gap:"1rem",justifyContent:"center"},children:[i.jsx("button",{className:"btn btn-primary",onClick:()=>window.location.href="/forms",style:{minWidth:"120px"},children:"Go to Home"}),i.jsx("button",{className:"btn btn-outline-secondary",onClick:()=>{sessionStorage.clear(),localStorage.clear(),window.location.href="/"},style:{minWidth:"120px"},children:"Sign Out"})]})]})):i.jsx("div",{children:i.jsx(sA,{formData:t,setFormData:e,showNotification:n,commitInfo:r})})};function eI(){const[t,e]=b.useState({}),[n,r]=b.useState(null),[s]=b.useState(!1),{showNotification:o,removeNotification:a}=So();return i.jsx(Sg,{fallback:({error:l,componentStack:d})=>i.jsxs("div",{style:{padding:"20px",fontFamily:"monospace"},children:[i.jsx("h2",{children:"An unexpected fatal error occurred"}),i.jsx("p",{children:i.jsx("strong",{children:"Please post this error information in the PHMC Discord server:"})}),i.jsxs("div",{style:{backgroundColor:"#114170ff",border:"1px solid #dee2e6",borderRadius:"4px",padding:"15px",marginTop:"10px",whiteSpace:"pre-wrap",fontSize:"12px",maxHeight:"400px",overflow:"auto"},children:[i.jsx("strong",{children:"Error:"})," ",l?.message||"Unknown error",l?.stack&&i.jsxs(i.Fragment,{children:[i.jsx("br",{}),i.jsx("br",{}),i.jsx("strong",{children:"Stack Trace:"}),i.jsx("br",{}),l.stack]}),d&&i.jsxs(i.Fragment,{children:[i.jsx("br",{}),i.jsx("br",{}),i.jsx("strong",{children:"Component Stack:"}),i.jsx("br",{}),d]})]}),i.jsx("button",{onClick:()=>window.location.reload(),style:{marginTop:"15px",padding:"10px 20px",backgroundColor:"#007bff",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Reload Page"})]}),onError:(l,d)=>{Of({message:l.message,stack:d,source:"React ErrorBoundary",isButtonClickError:!1})},children:i.jsx($f,{children:i.jsx(F0,{setFormData:e,setLastWebhookIdentifier:r,showNotification:o,children:i.jsx(kf,{children:i.jsx(A0,{children:i.jsx(wg,{children:i.jsx(b.Suspense,{fallback:i.jsx(fl,{}),children:i.jsxs(Eg,{children:[i.jsx(Vs,{path:"/",element:i.jsx(QA,{formData:t,setFormData:e,lastWebhookIdentifier:n,setLastWebhookIdentifier:r,showNotification:o,removeNotification:a,setShowAdblockNotification:s})}),i.jsx(Vs,{path:"/login",element:i.jsx(q0,{})}),i.jsx(Vs,{path:"/auth/gta/callback",element:i.jsx(V0,{})}),i.jsx(Vs,{path:"/auth/gta/diagnostic",element:i.jsx(Y0,{})}),i.jsx(Vs,{path:"/admin",element:i.jsx(K0,{children:i.jsx(ZA,{formData:t,setFormData:e,showNotification:o})})}),i.jsx(Vs,{path:"*",element:i.jsx(Gh,{to:"/",replace:!0})})]})})})})})})})})}const tI={position:"fixed",top:"20px",right:"20px",padding:"15px",backgroundColor:"#f85149",color:"white",borderRadius:"5px",zIndex:9999,display:"flex",alignItems:"center",gap:"15px",boxShadow:"0 4px 8px rgba(0,0,0,0.2)"},nI={fontSize:"1.5em"},rI={backgroundColor:"transparent",color:"white",border:"1px solid white",borderRadius:"3px",padding:"5px 10px",cursor:"pointer",fontWeight:"bold"};class sI extends b.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,n){console.error("Uncaught error:",e,n),nt(e,{extra:n})}handleOkClick=()=>{this.setState({hasError:!1,error:null})};render(){return this.state.hasError?i.jsxs(i.Fragment,{children:[i.jsxs("div",{style:tI,children:[i.jsx("div",{style:nI,children:i.jsx("i",{className:"fas fa-exclamation-triangle"})}),i.jsx("span",{children:"FATAL ERROR! Please ping Alyson in the PHMC Discord or post a Bug Report!"}),i.jsx("button",{onClick:this.handleOkClick,style:rI,children:"OK"})]}),this.props.children]}):this.props.children}}const Hc=new Map,Gc=2,iI=t=>{const e=/Loading chunk [\d]+ failed/;if(t?.message&&e.test(t.message)){const r=t.message.match(/Loading chunk ([\d]+) failed/)?.[1],s=Hc.get(r)||0;return s<Gc?(Hc.set(r,s+1),console.warn(`Chunk ${r} failed to load. Retry attempt ${s+1}/${Gc}. Reloading page...`),setTimeout(()=>{window.location.reload()},1e3),!0):(console.error(`Chunk ${r} failed to load after ${Gc} retries. This may indicate a deployment issue or network problem.`),Hc.delete(r),window.confirm(`Unable to load part of the application. This might be due to a recent update.

Click OK to clear your cache and reload, or Cancel to continue (not recommended).`)&&("caches"in window?caches.keys().then(o=>{o.forEach(a=>caches.delete(a))}).finally(()=>{window.location.reload(!0)}):window.location.reload(!0)),!0)}return!1};window.addEventListener("unhandledrejection",t=>{iI(t.reason)&&t.preventDefault()});let oI=null,la=!1;const Bh=()=>{try{const t=localStorage.getItem("bbCodeVersion");if(!t)return"Unknown";const e=parseInt(t,10);return{1:"Death Report",2:"Coroner Email",3:"Patient File - Advanced",4:"Autopsy Report",5:"Surgery Report",6:"Physical Evaluation (PHMC)",7:"Physical Evaluation (PBC)",8:"Death Certificate",9:"Obs Main File",10:"Obs Follow Up",11:"Mass Fatality Report",12:"Gynecology - Main File",13:"Gynecology - Add Reply",14:"Mental Health - PHMC",16:"Mental Health | PBC",18:"Agency Feedback",19:"Emergency Room Protocols",20:"Consultation Notes (PHMC)",21:"Consultation Notes (PBC)",22:"Commentary Note (PHMC)",23:"Commentary Note (PBC)",24:"Medical Record Release",25:"Patient File - Basic",26:"Medical Record Update",27:"Email Forms",28:"Psychological Evaluation PHMC",29:"Psychological Evaluation PBC",35:"PHMC - Email Generator",50:"PHMC - Physician Careers",51:"PHMC - Psych Careers",52:"PHMC - Admin Careers",53:"PHMC - Nursing Careers",54:"PHMC - Coroner Careers",55:"PHMC - EMS Careers"}[e]||`Form v${e}`}catch(t){return console.warn("Error determining form type:",t),"Unknown"}};Ng({dsn:"https://5dfa5683e8dc9adbc7f30e44757995c7@o4509126124765184.ingest.de.sentry.io/4509126125813840",sendDefaultPii:!0,integrations:[xg(),Ag({maskAllText:!1,blockAllMedia:!1})],tracesSampleRate:1,replaysSessionSampleRate:.1,replaysOnErrorSampleRate:1,tracePropagationTargets:["localhost","https://forms.phmc.io",/^\//]});console.log("Sentry has been initialized.");window.onerror=(t,e,n,r,s)=>{if(typeof t=="string"&&(t.includes("ResizeObserver loop limit exceeded")||t.includes("Loading chunk")&&t.includes("failed")))return!0;let o=!1,a=!1,l="Unknown";if(s&&typeof s.stack=="string"){const u=s.stack;(u.includes("onClick")||u.includes("handleClick"))&&(o=!0),(u.includes("onChange")||u.includes("handleChange")||u.includes("onInput")||u.includes("handleInput")||u.includes("onBlur")||u.includes("handleBlur"))&&(a=!0,u.includes("Select")||u.includes("react-select")?l="Select/Dropdown":u.includes("textarea")||u.includes("Textarea")?l="Textarea":u.includes("checkbox")||u.includes("Checkbox")?l="Checkbox":u.includes("radio")||u.includes("Radio")?l="Radio":l="Text/Input")}Sd(If,"exception",{description:t,fatal:!0,is_button_error:o,is_input_error:a,error_message:String(t).substring(0,100),stack:s&&s.stack?String(s.stack).substring(0,100):void 0,source:e||void 0,lineno:n||void 0,colno:r||void 0,form_type:Bh(),input_field_type:l});const d={message:t,source:e,lineno:n,colno:r,stack:s?s.stack:"N/A",isButtonClickError:o,isInputFieldError:a,inputFieldType:l,currentFormType:Bh(),lastInputInteraction:oI};return Of(d,la),!1};const aI=()=>{const{showNotification:t,removeNotification:e}=So();return b.useEffect(()=>{(async()=>{await new Promise(a=>setTimeout(a,100));const r=Tg();if(!r||!r.getDsn()){console.error("Sentry client or DSN not found. Sentry reporting will fail."),la=!0;return}const s=r.getDsn(),o=`${s.protocol}://${s.host}/api/${s.projectId}/envelope/`;try{await fetch(o,{method:"HEAD",mode:"no-cors"}),console.log("Sentry connectivity check successful. Discord reports will show Sentry as 'Active'."),la=!1}catch(a){console.warn("Sentry connectivity check failed. Sentry may be blocked. Discord reports will reflect this. Notification dispatched to User",a),la=!0;const l=t("It looks like you have an adblocker enabled. While we understand your preference, adblockers can sometimes interfere with the functionality of this site, especially with our error tracking tools. To help us track down bugs and improve the site, please consider disabling your adblocker for this domain. Your cooperation is greatly appreciated!","exclamation-triangle",0,[{label:"Dismiss",handler:()=>e(l)}])}})()},[]),i.jsx(eI,{})},cI=document.getElementById("root"),lI=Ig.createRoot(cI);lI.render(i.jsx(sI,{children:i.jsx(kf,{children:i.jsx($f,{children:i.jsx(wA,{children:i.jsx(NA,{children:i.jsx(TA,{children:i.jsx(aI,{})})})})})})}));export{yl as G,Qf as a,Mx as b,ig as c,So as d,Ne as e,vr as f,fI as g,Aa as h,qe as i,Wi as j,Hn as k,It as l,xr as m,pI as n,mI as o,Ks as p,gl as q,me as r,xC as s,Mi as t,dr as u,bl as v,Wf as w,Nd as x};
//# sourceMappingURL=index-frt8GnwE.js.map
