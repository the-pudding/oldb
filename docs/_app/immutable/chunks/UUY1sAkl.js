import{A as i,B as N,J as g,ac as z,z as j,F,G as I,ad as M,D as V,ae as B,K as D,af as G,a2 as w,a1 as S,ag as P,a4 as R,a3 as H,I as J,ah as K,j as L,ai as O,p as q,aj as Q,a as x,b as U,c as X,a7 as Y,H as Z,r as p,ak as $,a6 as ee,N as b,al as ae,am as te}from"./SQ1KIAQH.js";import"./BnI-gD3q.js";import{s as re}from"./-Ri42iu2.js";import{a as A,e as se,i as le}from"./DnFfqgl8.js";import{p as v,r as ne}from"./B7icvM9x.js";function oe(e,a,f,r,s,_){let c=i;i&&N();var d,o,t=null;i&&g.nodeType===z&&(t=g,N());var m=i?g:e,l;j(()=>{const n=a()||null;var h=M;n!==d&&(l&&(n===null?R(l,()=>{l=null,o=null}):n===o?H(l):J(l)),n&&n!==o&&(l=I(()=>{if(t=i?t:document.createElementNS(h,n),V(t,t),r){i&&B(n)&&t.append(document.createComment(""));var u=i?D(t):t.appendChild(G());i&&(u===null?w(!1):S(u)),r(t,u)}P.nodes_end=t,m.before(t)})),d=n,d&&(o=d))},F),c&&(w(!0),S(m))}function he(e,a,f=a){K(e,"input",r=>{var s=r?e.defaultValue:e.value;if(s=k(e)?y(s):s,f(s),s!==(s=a())){var _=e.selectionStart,c=e.selectionEnd;e.value=s??"",c!==null&&(e.selectionStart=_,e.selectionEnd=Math.min(c,e.value.length))}}),(i&&e.defaultValue!==e.value||L(a)==null&&e.value)&&f(k(e)?y(e.value):e.value),O(()=>{var r=a();k(e)&&r===y(e.value)||e.type==="date"&&!r&&!e.value||r!==e.value&&(e.value=r??"")})}function k(e){var a=e.type;return a==="number"||a==="range"}function y(e){return e===""?null:+e}/**
 * @license @lucide/svelte v0.525.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 */const ie={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var ce=Q("<svg><!><!></svg>");function ge(e,a){q(a,!0);const f=v(a,"color",3,"currentColor"),r=v(a,"size",3,24),s=v(a,"strokeWidth",3,2),_=v(a,"absoluteStrokeWidth",3,!1),c=v(a,"iconNode",19,()=>[]),d=ne(a,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var o=ce();A(o,l=>({...ie,...d,width:r(),height:r(),stroke:f(),"stroke-width":l,class:["lucide-icon lucide",a.name&&`lucide-${a.name}`,a.class]}),[()=>_()?Number(s())*24/Number(r()):s()]);var t=X(o);se(t,17,c,le,(l,n)=>{var h=ae(()=>te(b(n),2));let u=()=>b(h)[0],C=()=>b(h)[1];var E=$(),W=ee(E);oe(W,u,!0,(T,de)=>{A(T,()=>({...C()}))}),x(l,E)});var m=Y(t);re(m,()=>a.children??Z),p(o),x(e,o),U()}export{ge as I,he as b};
