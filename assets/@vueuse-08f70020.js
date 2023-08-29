import{s as e,w as t,r as n,u as o,g as i,d as r,e as a,f as u,h as l,i as s,n as c,j as d}from"./@vue-cf17e384.js";var v,f=Object.defineProperty,p=Object.defineProperties,m=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,O=(e,t)=>{for(var n in t||(t={}))w.call(t,n)&&h(e,n,t[n]);if(y)for(var n of y(t))b.call(t,n)&&h(e,n,t[n]);return e},g=(e,t)=>p(e,m(t));function I(o,i){var r;const a=e();return t((()=>{a.value=o()}),g(O({},i),{flush:null!=(r=null==i?void 0:i.flush)?r:"sync"})),n(a)}const P="undefined"!=typeof window,E=e=>void 0!==e,j=e=>"boolean"==typeof e,S=e=>"function"==typeof e,T=e=>"number"==typeof e,A=e=>"string"==typeof e,x=()=>{},N=P&&(null==(v=null==window?void 0:window.navigator)?void 0:v.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function C(e){return"function"==typeof e?e():o(e)}function Q(e,t){return function(...n){return new Promise(((o,i)=>{Promise.resolve(e((()=>t.apply(this,n)),{fn:t,thisArg:this,args:n})).then(o).catch(i)}))}}function D(e){return!!i()&&(r(e),!0)}function R(e,t=200,n={}){return Q(function(e,t={}){let n,o,i=x;const r=e=>{clearTimeout(e),i(),i=x};return a=>{const u=C(e),l=C(t.maxWait);return n&&r(n),u<=0||void 0!==l&&l<=0?(o&&(r(o),o=null),Promise.resolve(a())):new Promise(((e,s)=>{i=t.rejectOnCancel?s:e,l&&!o&&(o=setTimeout((()=>{n&&r(n),o=null,e(a())}),l)),n=setTimeout((()=>{o&&r(o),o=null,e(a())}),u)}))}}(t,n),e)}function k(e,t=200,n={}){const o=a(e.value),i=R((()=>{o.value=e.value}),t,n);return u(e,(()=>i())),o}function B(e,t=200,n=!1,o=!0,i=!1){return Q(function(e,t=!0,n=!0,o=!1){let i,r,a=0,u=!0,l=x;const s=()=>{i&&(clearTimeout(i),i=void 0,l(),l=x)};return c=>{const d=C(e),v=Date.now()-a,f=()=>r=c();return s(),d<=0?(a=Date.now(),f()):(v>d&&(n||!u)?(a=Date.now(),f()):t&&(r=new Promise(((e,t)=>{l=o?t:e,i=setTimeout((()=>{a=Date.now(),u=!0,e(f()),s()}),Math.max(0,d-v))}))),n||i||(i=setTimeout((()=>u=!0),d)),u=!1,r)}}(t,n,o,i),e)}function W(e,t=!0){l()?s(e):t?e():c(e)}function _(e,t,o={}){const{immediate:i=!0}=o,r=a(!1);let u=null;function l(){u&&(clearTimeout(u),u=null)}function s(){r.value=!1,l()}function c(...n){l(),r.value=!0,u=setTimeout((()=>{r.value=!1,u=null,e(...n)}),C(t))}return i&&(r.value=!0,P&&c()),D(s),{isPending:n(r),start:c,stop:s}}function z(e){var t;const n=C(e);return null!=(t=null==n?void 0:n.$el)?t:n}const H=P?window:void 0,L=P?window.document:void 0;function F(...e){let t,n,o,i;if(A(e[0])||Array.isArray(e[0])?([n,o,i]=e,t=H):[t,n,o,i]=e,!t)return x;Array.isArray(n)||(n=[n]),Array.isArray(o)||(o=[o]);const r=[],a=()=>{r.forEach((e=>e())),r.length=0},l=u((()=>[z(t),C(i)]),(([e,t])=>{a(),e&&r.push(...n.flatMap((n=>o.map((o=>((e,t,n,o)=>(e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)))(e,n,o,t))))))}),{immediate:!0,flush:"post"}),s=()=>{l(),a()};return D(s),s}let V=!1;function $(e,t,n={}){const{window:o=H,ignore:i=[],capture:r=!0,detectIframe:a=!1}=n;if(!o)return;N&&!V&&(V=!0,Array.from(o.document.body.children).forEach((e=>e.addEventListener("click",x))));let u=!0;const l=e=>i.some((t=>{if("string"==typeof t)return Array.from(o.document.querySelectorAll(t)).some((t=>t===e.target||e.composedPath().includes(t)));{const n=z(t);return n&&(e.target===n||e.composedPath().includes(n))}})),s=[F(o,"click",(n=>{const o=z(e);o&&o!==n.target&&!n.composedPath().includes(o)&&(0===n.detail&&(u=!l(n)),u?t(n):u=!0)}),{passive:!0,capture:r}),F(o,"pointerdown",(t=>{const n=z(e);n&&(u=!t.composedPath().includes(n)&&!l(t))}),{passive:!0}),a&&F(o,"blur",(n=>{var i;const r=z(e);"IFRAME"!==(null==(i=o.document.activeElement)?void 0:i.tagName)||(null==r?void 0:r.contains(o.document.activeElement))||t(n)}))].filter(Boolean);return()=>s.forEach((e=>e()))}const M="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},G="__vueuse_ssr_handlers__";function J(e,t,{window:n=H,initialValue:o=""}={}){const i=a(o),r=d((()=>{var e;return z(t)||(null==(e=null==n?void 0:n.document)?void 0:e.documentElement)}));return u([r,()=>C(e)],(([e,t])=>{var r;if(e&&n){const a=null==(r=n.getComputedStyle(e).getPropertyValue(t))?void 0:r.trim();i.value=a||o}}),{immediate:!0}),u(i,(t=>{var n;(null==(n=r.value)?void 0:n.style)&&r.value.style.setProperty(C(e),t)})),i}function U({document:e=L}={}){if(!e)return a("visible");const t=a(e.visibilityState);return F(e,"visibilitychange",(()=>{t.value=e.visibilityState})),t}M[G]=M[G]||{},M[G];var q,K,X=Object.getOwnPropertySymbols,Y=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable,ee=(e,t)=>{var n={};for(var o in e)Y.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&X)for(var o of X(e))t.indexOf(o)<0&&Z.call(e,o)&&(n[o]=e[o]);return n};function te(e,t,n={}){const o=n,{window:i=H}=o,r=ee(o,["window"]);let l;const s=function(e,t=!1){const n=a(),o=()=>n.value=Boolean(e());return o(),W(o,t),n}((()=>i&&"ResizeObserver"in i)),c=()=>{l&&(l.disconnect(),l=void 0)},d=u((()=>z(e)),(e=>{c(),s.value&&i&&e&&(l=new ResizeObserver(t),l.observe(e,r))}),{immediate:!0,flush:"post"}),v=()=>{c(),d()};return D(v),{isSupported:s,stop:v}}function ne(e,t={}){const{reset:n=!0,windowResize:o=!0,windowScroll:i=!0,immediate:r=!0}=t,l=a(0),s=a(0),c=a(0),d=a(0),v=a(0),f=a(0),p=a(0),m=a(0);function y(){const t=z(e);if(!t)return void(n&&(l.value=0,s.value=0,c.value=0,d.value=0,v.value=0,f.value=0,p.value=0,m.value=0));const o=t.getBoundingClientRect();l.value=o.height,s.value=o.bottom,c.value=o.left,d.value=o.right,v.value=o.top,f.value=o.width,p.value=o.x,m.value=o.y}return te(e,y),u((()=>z(e)),(e=>!e&&y())),i&&F("scroll",y,{capture:!0,passive:!0}),o&&F("resize",y,{passive:!0}),W((()=>{r&&y()})),{height:l,bottom:s,left:c,right:d,top:v,width:f,x:p,y:m,update:y}}(K=q||(q={})).UP="UP",K.RIGHT="RIGHT",K.DOWN="DOWN",K.LEFT="LEFT",K.NONE="NONE";var oe=Object.defineProperty,ie=Object.getOwnPropertySymbols,re=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable,ue=(e,t,n)=>t in e?oe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function le(e,t,n,o={}){var i,r,s;const{clone:c=!1,passive:v=!1,eventName:f,deep:p=!1,defaultValue:m}=o,y=l(),w=n||(null==y?void 0:y.emit)||(null==(i=null==y?void 0:y.$emit)?void 0:i.bind(y))||(null==(s=null==(r=null==y?void 0:y.proxy)?void 0:r.$emit)?void 0:s.bind(null==y?void 0:y.proxy));let b=f;t||(t="modelValue"),b=f||b||`update:${t.toString()}`;const h=e=>{return c?S(c)?c(e):(t=e,JSON.parse(JSON.stringify(t))):e;var t},O=()=>E(e[t])?h(e[t]):m;if(v){const n=O(),o=a(n);return u((()=>e[t]),(e=>o.value=h(e))),u(o,(n=>{(n!==e[t]||p)&&w(b,n)}),{deep:p}),o}return d({get:()=>O(),set(e){w(b,e)}})}function se({window:e=H}={}){if(!e)return a(!1);const t=a(e.document.hasFocus());return F(e,"blur",(()=>{t.value=!1})),F(e,"focus",(()=>{t.value=!0})),t}function ce(e={}){const{window:t=H,initialWidth:n=Infinity,initialHeight:o=Infinity,listenOrientation:i=!0,includeScrollbar:r=!0}=e,u=a(n),l=a(o),s=()=>{t&&(r?(u.value=t.innerWidth,l.value=t.innerHeight):(u.value=t.document.documentElement.clientWidth,l.value=t.document.documentElement.clientHeight))};return s(),W(s),F("resize",s,{passive:!0}),i&&F("orientationchange",s,{passive:!0}),{width:u,height:l}}((e,t)=>{for(var n in t||(t={}))re.call(t,n)&&ue(e,n,t[n]);if(ie)for(var n of ie(t))ae.call(t,n)&&ue(e,n,t[n])})({linear:function(e){return e}},{easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]});export{T as a,j as b,ce as c,ne as d,F as e,te as f,B as g,J as h,P as i,_ as j,U as k,se as l,I as m,le as n,$ as o,k as r,D as t,z as u};
