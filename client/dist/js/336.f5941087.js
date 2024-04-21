"use strict";(self["webpackChunkapp"]=self["webpackChunkapp"]||[]).push([[336],{4534:(t,e,o)=>{o.d(e,{a:()=>p,c:()=>h,g:()=>i,s:()=>u});var r=o(9185);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const s="ION-CONTENT",n="ion-content",a=".ion-content-scroll-host",c=`${n}, ${a}`,l=t=>t.tagName===s,i=async t=>l(t)?(await new Promise((e=>(0,r.c)(t,e))),t.getScrollElement()):t,p=t=>t.closest(c),u=(t,e)=>{if(l(t)){const o=t;return o.scrollToTop(e)}return Promise.resolve(t.scrollTo({top:0,left:0,behavior:e>0?"smooth":"auto"}))},h=(t,e,o,r)=>{if(l(t)){const s=t;return s.scrollByPoint(e,o,r)}return Promise.resolve(t.scrollBy({top:o,left:e,behavior:r>0?"smooth":"auto"}))}},8336:(t,e,o)=>{o.r(e),o.d(e,{startStatusTap:()=>a});var r=o(6061),s=o(4534),n=o(9185);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const a=()=>{const t=window;t.addEventListener("statusTap",(()=>{(0,r.gv)((()=>{const e=t.innerWidth,o=t.innerHeight,a=document.elementFromPoint(e/2,o/2);if(!a)return;const c=(0,s.a)(a);c&&new Promise((t=>(0,n.c)(c,t))).then((()=>{(0,r.bN)((async()=>{c.style.setProperty("--overflow","hidden"),await(0,s.s)(c,300),c.style.removeProperty("--overflow")}))}))}))}))}}}]);
//# sourceMappingURL=336.f5941087.js.map