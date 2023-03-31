(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))t(l);new MutationObserver(l=>{for(const a of l)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function o(l){const a={};return l.integrity&&(a.integrity=l.integrity),l.referrerPolicy&&(a.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?a.credentials="include":l.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(l){if(l.ep)return;l.ep=!0;const a=o(l);fetch(l.href,a)}})();function qs(n,s){const o=Object.create(null),t=n.split(",");for(let l=0;l<t.length;l++)o[t[l]]=!0;return s?l=>!!o[l.toLowerCase()]:l=>!!o[l]}function Xe(n){if(ie(n)){const s={};for(let o=0;o<n.length;o++){const t=n[o],l=je(t)?xf(t):Xe(t);if(l)for(const a in l)s[a]=l[a]}return s}else{if(je(n))return n;if(Le(n))return n}}const wf=/;(?![^(]*\))/g,Ef=/:([^]+)/,$f=/\/\*.*?\*\//gs;function xf(n){const s={};return n.replace($f,"").split(wf).forEach(o=>{if(o){const t=o.split(Ef);t.length>1&&(s[t[0].trim()]=t[1].trim())}}),s}function Ke(n){let s="";if(je(n))s=n;else if(ie(n))for(let o=0;o<n.length;o++){const t=Ke(n[o]);t&&(s+=t+" ")}else if(Le(n))for(const o in n)n[o]&&(s+=o+" ");return s.trim()}function U(n){if(!n)return null;let{class:s,style:o}=n;return s&&!je(s)&&(n.class=Ke(s)),o&&(n.style=Xe(o)),n}const Ff="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",Sf="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",tu=qs(Ff),Rf=qs(Sf),If="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Pf=qs(If);function lu(n){return!!n||n===""}const ao=n=>je(n)?n:n==null?"":ie(n)||Le(n)&&(n.toString===iu||!fe(n.toString))?JSON.stringify(n,ru,2):String(n),ru=(n,s)=>s&&s.__v_isRef?ru(n,s.value):eo(s)?{[`Map(${s.size})`]:[...s.entries()].reduce((o,[t,l])=>(o[`${t} =>`]=l,o),{})}:cu(s)?{[`Set(${s.size})`]:[...s.values()]}:Le(s)&&!ie(s)&&!pu(s)?String(s):s,Ge=Object.freeze({}),Eo=Object.freeze([]),An=()=>{},au=()=>!1,Of=/^on[^a-z]/,Mt=n=>Of.test(n),gl=n=>n.startsWith("onUpdate:"),Ue=Object.assign,qa=(n,s)=>{const o=n.indexOf(s);o>-1&&n.splice(o,1)},Tf=Object.prototype.hasOwnProperty,we=(n,s)=>Tf.call(n,s),ie=Array.isArray,eo=n=>qt(n)==="[object Map]",cu=n=>qt(n)==="[object Set]",Lf=n=>qt(n)==="[object RegExp]",fe=n=>typeof n=="function",je=n=>typeof n=="string",Ga=n=>typeof n=="symbol",Le=n=>n!==null&&typeof n=="object",Na=n=>Le(n)&&fe(n.then)&&fe(n.catch),iu=Object.prototype.toString,qt=n=>iu.call(n),Ha=n=>qt(n).slice(8,-1),pu=n=>qt(n)==="[object Object]",ja=n=>je(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,il=qs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Mf=qs("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Nl=n=>{const s=Object.create(null);return o=>s[o]||(s[o]=n(o))},qf=/-(\w)/g,ns=Nl(n=>n.replace(qf,(s,o)=>o?o.toUpperCase():"")),Gf=/\B([A-Z])/g,ys=Nl(n=>n.replace(Gf,"-$1").toLowerCase()),co=Nl(n=>n.charAt(0).toUpperCase()+n.slice(1)),Us=Nl(n=>n?`on${co(n)}`:""),gt=(n,s)=>!Object.is(n,s),ks=(n,s)=>{for(let o=0;o<n.length;o++)n[o](s)},Al=(n,s,o)=>{Object.defineProperty(n,s,{configurable:!0,enumerable:!1,value:o})},Nr=n=>{const s=parseFloat(n);return isNaN(s)?n:s},Nf=n=>{const s=je(n)?Number(n):NaN;return isNaN(s)?n:s};let Gc;const uu=()=>Gc||(Gc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Cl(n,...s){console.warn(`[Vue warn] ${n}`,...s)}let wn;class du{constructor(s=!1){this.detached=s,this._active=!0,this.effects=[],this.cleanups=[],this.parent=wn,!s&&wn&&(this.index=(wn.scopes||(wn.scopes=[])).push(this)-1)}get active(){return this._active}run(s){if(this._active){const o=wn;try{return wn=this,s()}finally{wn=o}}else Cl("cannot run an inactive effect scope.")}on(){wn=this}off(){wn=this.parent}stop(s){if(this._active){let o,t;for(o=0,t=this.effects.length;o<t;o++)this.effects[o].stop();for(o=0,t=this.cleanups.length;o<t;o++)this.cleanups[o]();if(this.scopes)for(o=0,t=this.scopes.length;o<t;o++)this.scopes[o].stop(!0);if(!this.detached&&this.parent&&!s){const l=this.parent.scopes.pop();l&&l!==this&&(this.parent.scopes[this.index]=l,l.index=this.index)}this.parent=void 0,this._active=!1}}}function Hf(n){return new du(n)}function jf(n,s=wn){s&&s.active&&s.effects.push(n)}function Va(){return wn}function yu(n){wn?wn.cleanups.push(n):Cl("onScopeDispose() is called when there is no active effect scope to be associated with.")}const Ua=n=>{const s=new Set(n);return s.w=0,s.n=0,s},fu=n=>(n.w&Ts)>0,mu=n=>(n.n&Ts)>0,Vf=({deps:n})=>{if(n.length)for(let s=0;s<n.length;s++)n[s].w|=Ts},Uf=n=>{const{deps:s}=n;if(s.length){let o=0;for(let t=0;t<s.length;t++){const l=s[t];fu(l)&&!mu(l)?l.delete(n):s[o++]=l,l.w&=~Ts,l.n&=~Ts}s.length=o}},vl=new WeakMap;let nt=0,Ts=1;const Hr=30;let fn;const no=Symbol("iterate"),jr=Symbol("Map key iterate");class Wa{constructor(s,o=null,t){this.fn=s,this.scheduler=o,this.active=!0,this.deps=[],this.parent=void 0,jf(this,t)}run(){if(!this.active)return this.fn();let s=fn,o=xs;for(;s;){if(s===this)return;s=s.parent}try{return this.parent=fn,fn=this,xs=!0,Ts=1<<++nt,nt<=Hr?Vf(this):Nc(this),this.fn()}finally{nt<=Hr&&Uf(this),Ts=1<<--nt,fn=this.parent,xs=o,this.parent=void 0,this.deferStop&&this.stop()}}stop(){fn===this?this.deferStop=!0:this.active&&(Nc(this),this.onStop&&this.onStop(),this.active=!1)}}function Nc(n){const{deps:s}=n;if(s.length){for(let o=0;o<s.length;o++)s[o].delete(n);s.length=0}}let xs=!0;const hu=[];function po(){hu.push(xs),xs=!1}function uo(){const n=hu.pop();xs=n===void 0?!0:n}function vn(n,s,o){if(xs&&fn){let t=vl.get(n);t||vl.set(n,t=new Map);let l=t.get(o);l||t.set(o,l=Ua()),_u(l,{effect:fn,target:n,type:s,key:o})}}function _u(n,s){let o=!1;nt<=Hr?mu(n)||(n.n|=Ts,o=!fu(n)):o=!n.has(fn),o&&(n.add(fn),fn.deps.push(n),fn.onTrack&&fn.onTrack(Object.assign({effect:fn},s)))}function fs(n,s,o,t,l,a){const c=vl.get(n);if(!c)return;let i=[];if(s==="clear")i=[...c.values()];else if(o==="length"&&ie(n)){const u=Number(t);c.forEach((d,y)=>{(y==="length"||y>=u)&&i.push(d)})}else switch(o!==void 0&&i.push(c.get(o)),s){case"add":ie(n)?ja(o)&&i.push(c.get("length")):(i.push(c.get(no)),eo(n)&&i.push(c.get(jr)));break;case"delete":ie(n)||(i.push(c.get(no)),eo(n)&&i.push(c.get(jr)));break;case"set":eo(n)&&i.push(c.get(no));break}const p={target:n,type:s,key:o,newValue:t,oldValue:l,oldTarget:a};if(i.length===1)i[0]&&Vr(i[0],p);else{const u=[];for(const d of i)d&&u.push(...d);Vr(Ua(u),p)}}function Vr(n,s){const o=ie(n)?n:[...n];for(const t of o)t.computed&&Hc(t,s);for(const t of o)t.computed||Hc(t,s)}function Hc(n,s){(n!==fn||n.allowRecurse)&&(n.onTrigger&&n.onTrigger(Ue({effect:n},s)),n.scheduler?n.scheduler():n.run())}function Wf(n,s){var o;return(o=vl.get(n))===null||o===void 0?void 0:o.get(s)}const Kf=qs("__proto__,__v_isRef,__isVue"),Bu=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Ga)),zf=Hl(),Yf=Hl(!1,!0),Zf=Hl(!0),Qf=Hl(!0,!0),jc=Jf();function Jf(){const n={};return["includes","indexOf","lastIndexOf"].forEach(s=>{n[s]=function(...o){const t=me(this);for(let a=0,c=this.length;a<c;a++)vn(t,"get",a+"");const l=t[s](...o);return l===-1||l===!1?t[s](...o.map(me)):l}}),["push","pop","shift","unshift","splice"].forEach(s=>{n[s]=function(...o){po();const t=me(this)[s].apply(this,o);return uo(),t}}),n}function Xf(n){const s=me(this);return vn(s,"has",n),s.hasOwnProperty(n)}function Hl(n=!1,s=!1){return function(t,l,a){if(l==="__v_isReactive")return!n;if(l==="__v_isReadonly")return n;if(l==="__v_isShallow")return s;if(l==="__v_raw"&&a===(n?s?wu:ku:s?bu:Du).get(t))return t;const c=ie(t);if(!n){if(c&&we(jc,l))return Reflect.get(jc,l,a);if(l==="hasOwnProperty")return Xf}const i=Reflect.get(t,l,a);return(Ga(l)?Bu.has(l):Kf(l))||(n||vn(t,"get",l),s)?i:Re(i)?c&&ja(l)?i:i.value:Le(i)?n?Jn(i):Ve(i):i}}const e8=gu(),n8=gu(!0);function gu(n=!1){return function(o,t,l,a){let c=o[t];if(Ls(c)&&Re(c)&&!Re(l))return!1;if(!n&&(!Dl(l)&&!Ls(l)&&(c=me(c),l=me(l)),!ie(o)&&Re(c)&&!Re(l)))return c.value=l,!0;const i=ie(o)&&ja(t)?Number(t)<o.length:we(o,t),p=Reflect.set(o,t,l,a);return o===me(a)&&(i?gt(l,c)&&fs(o,"set",t,l,c):fs(o,"add",t,l)),p}}function s8(n,s){const o=we(n,s),t=n[s],l=Reflect.deleteProperty(n,s);return l&&o&&fs(n,"delete",s,void 0,t),l}function o8(n,s){const o=Reflect.has(n,s);return(!Ga(s)||!Bu.has(s))&&vn(n,"has",s),o}function t8(n){return vn(n,"iterate",ie(n)?"length":no),Reflect.ownKeys(n)}const Au={get:zf,set:e8,deleteProperty:s8,has:o8,ownKeys:t8},Cu={get:Zf,set(n,s){return Cl(`Set operation on key "${String(s)}" failed: target is readonly.`,n),!0},deleteProperty(n,s){return Cl(`Delete operation on key "${String(s)}" failed: target is readonly.`,n),!0}},l8=Ue({},Au,{get:Yf,set:n8}),r8=Ue({},Cu,{get:Qf}),Ka=n=>n,jl=n=>Reflect.getPrototypeOf(n);function Zt(n,s,o=!1,t=!1){n=n.__v_raw;const l=me(n),a=me(s);o||(s!==a&&vn(l,"get",s),vn(l,"get",a));const{has:c}=jl(l),i=t?Ka:o?za:At;if(c.call(l,s))return i(n.get(s));if(c.call(l,a))return i(n.get(a));n!==l&&n.get(s)}function Qt(n,s=!1){const o=this.__v_raw,t=me(o),l=me(n);return s||(n!==l&&vn(t,"has",n),vn(t,"has",l)),n===l?o.has(n):o.has(n)||o.has(l)}function Jt(n,s=!1){return n=n.__v_raw,!s&&vn(me(n),"iterate",no),Reflect.get(n,"size",n)}function Vc(n){n=me(n);const s=me(this);return jl(s).has.call(s,n)||(s.add(n),fs(s,"add",n,n)),this}function Uc(n,s){s=me(s);const o=me(this),{has:t,get:l}=jl(o);let a=t.call(o,n);a?vu(o,t,n):(n=me(n),a=t.call(o,n));const c=l.call(o,n);return o.set(n,s),a?gt(s,c)&&fs(o,"set",n,s,c):fs(o,"add",n,s),this}function Wc(n){const s=me(this),{has:o,get:t}=jl(s);let l=o.call(s,n);l?vu(s,o,n):(n=me(n),l=o.call(s,n));const a=t?t.call(s,n):void 0,c=s.delete(n);return l&&fs(s,"delete",n,void 0,a),c}function Kc(){const n=me(this),s=n.size!==0,o=eo(n)?new Map(n):new Set(n),t=n.clear();return s&&fs(n,"clear",void 0,void 0,o),t}function Xt(n,s){return function(t,l){const a=this,c=a.__v_raw,i=me(c),p=s?Ka:n?za:At;return!n&&vn(i,"iterate",no),c.forEach((u,d)=>t.call(l,p(u),p(d),a))}}function el(n,s,o){return function(...t){const l=this.__v_raw,a=me(l),c=eo(a),i=n==="entries"||n===Symbol.iterator&&c,p=n==="keys"&&c,u=l[n](...t),d=o?Ka:s?za:At;return!s&&vn(a,"iterate",p?jr:no),{next(){const{value:y,done:f}=u.next();return f?{value:y,done:f}:{value:i?[d(y[0]),d(y[1])]:d(y),done:f}},[Symbol.iterator](){return this}}}}function Bs(n){return function(...s){{const o=s[0]?`on key "${s[0]}" `:"";console.warn(`${co(n)} operation ${o}failed: target is readonly.`,me(this))}return n==="delete"?!1:this}}function a8(){const n={get(a){return Zt(this,a)},get size(){return Jt(this)},has:Qt,add:Vc,set:Uc,delete:Wc,clear:Kc,forEach:Xt(!1,!1)},s={get(a){return Zt(this,a,!1,!0)},get size(){return Jt(this)},has:Qt,add:Vc,set:Uc,delete:Wc,clear:Kc,forEach:Xt(!1,!0)},o={get(a){return Zt(this,a,!0)},get size(){return Jt(this,!0)},has(a){return Qt.call(this,a,!0)},add:Bs("add"),set:Bs("set"),delete:Bs("delete"),clear:Bs("clear"),forEach:Xt(!0,!1)},t={get(a){return Zt(this,a,!0,!0)},get size(){return Jt(this,!0)},has(a){return Qt.call(this,a,!0)},add:Bs("add"),set:Bs("set"),delete:Bs("delete"),clear:Bs("clear"),forEach:Xt(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{n[a]=el(a,!1,!1),o[a]=el(a,!0,!1),s[a]=el(a,!1,!0),t[a]=el(a,!0,!0)}),[n,o,s,t]}const[c8,i8,p8,u8]=a8();function Vl(n,s){const o=s?n?u8:p8:n?i8:c8;return(t,l,a)=>l==="__v_isReactive"?!n:l==="__v_isReadonly"?n:l==="__v_raw"?t:Reflect.get(we(o,l)&&l in t?o:t,l,a)}const d8={get:Vl(!1,!1)},y8={get:Vl(!1,!0)},f8={get:Vl(!0,!1)},m8={get:Vl(!0,!0)};function vu(n,s,o){const t=me(o);if(t!==o&&s.call(n,t)){const l=Ha(n);console.warn(`Reactive ${l} contains both the raw and reactive versions of the same object${l==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const Du=new WeakMap,bu=new WeakMap,ku=new WeakMap,wu=new WeakMap;function h8(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function _8(n){return n.__v_skip||!Object.isExtensible(n)?0:h8(Ha(n))}function Ve(n){return Ls(n)?n:Ul(n,!1,Au,d8,Du)}function B8(n){return Ul(n,!1,l8,y8,bu)}function Jn(n){return Ul(n,!0,Cu,f8,ku)}function ko(n){return Ul(n,!0,r8,m8,wu)}function Ul(n,s,o,t,l){if(!Le(n))return console.warn(`value cannot be made reactive: ${String(n)}`),n;if(n.__v_raw&&!(s&&n.__v_isReactive))return n;const a=l.get(n);if(a)return a;const c=_8(n);if(c===0)return n;const i=new Proxy(n,c===2?t:o);return l.set(n,i),i}function so(n){return Ls(n)?so(n.__v_raw):!!(n&&n.__v_isReactive)}function Ls(n){return!!(n&&n.__v_isReadonly)}function Dl(n){return!!(n&&n.__v_isShallow)}function bl(n){return so(n)||Ls(n)}function me(n){const s=n&&n.__v_raw;return s?me(s):n}function Wl(n){return Al(n,"__v_skip",!0),n}const At=n=>Le(n)?Ve(n):n,za=n=>Le(n)?Jn(n):n;function Ya(n){xs&&fn&&(n=me(n),_u(n.dep||(n.dep=Ua()),{target:n,type:"get",key:"value"}))}function Za(n,s){n=me(n);const o=n.dep;o&&Vr(o,{target:n,type:"set",key:"value",newValue:s})}function Re(n){return!!(n&&n.__v_isRef===!0)}function J(n){return Eu(n,!1)}function ss(n){return Eu(n,!0)}function Eu(n,s){return Re(n)?n:new g8(n,s)}class g8{constructor(s,o){this.__v_isShallow=o,this.dep=void 0,this.__v_isRef=!0,this._rawValue=o?s:me(s),this._value=o?s:At(s)}get value(){return Ya(this),this._value}set value(s){const o=this.__v_isShallow||Dl(s)||Ls(s);s=o?s:me(s),gt(s,this._rawValue)&&(this._rawValue=s,this._value=o?s:At(s),Za(this,s))}}function b(n){return Re(n)?n.value:n}const A8={get:(n,s,o)=>b(Reflect.get(n,s,o)),set:(n,s,o,t)=>{const l=n[s];return Re(l)&&!Re(o)?(l.value=o,!0):Reflect.set(n,s,o,t)}};function $u(n){return so(n)?n:new Proxy(n,A8)}class C8{constructor(s){this.dep=void 0,this.__v_isRef=!0;const{get:o,set:t}=s(()=>Ya(this),()=>Za(this));this._get=o,this._set=t}get value(){return this._get()}set value(s){this._set(s)}}function xu(n){return new C8(n)}function v8(n){bl(n)||console.warn("toRefs() expects a reactive object but received a plain one.");const s=ie(n)?new Array(n.length):{};for(const o in n)s[o]=b8(n,o);return s}class D8{constructor(s,o,t){this._object=s,this._key=o,this._defaultValue=t,this.__v_isRef=!0}get value(){const s=this._object[this._key];return s===void 0?this._defaultValue:s}set value(s){this._object[this._key]=s}get dep(){return Wf(me(this._object),this._key)}}function b8(n,s,o){const t=n[s];return Re(t)?t:new D8(n,s,o)}var Fu;class k8{constructor(s,o,t,l){this._setter=o,this.dep=void 0,this.__v_isRef=!0,this[Fu]=!1,this._dirty=!0,this.effect=new Wa(s,()=>{this._dirty||(this._dirty=!0,Za(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!l,this.__v_isReadonly=t}get value(){const s=me(this);return Ya(s),(s._dirty||!s._cacheable)&&(s._dirty=!1,s._value=s.effect.run()),s._value}set value(s){this._setter(s)}}Fu="__v_isReadonly";function w8(n,s,o=!1){let t,l;const a=fe(n);a?(t=n,l=()=>{console.warn("Write operation failed: computed value is readonly")}):(t=n.get,l=n.set);const c=new k8(t,l,a||!l,o);return s&&!o&&(c.effect.onTrack=s.onTrack,c.effect.onTrigger=s.onTrigger),c}const oo=[];function pl(n){oo.push(n)}function ul(){oo.pop()}function G(n,...s){po();const o=oo.length?oo[oo.length-1].component:null,t=o&&o.appContext.config.warnHandler,l=E8();if(t)ds(t,o,11,[n+s.join(""),o&&o.proxy,l.map(({vnode:a})=>`at <${or(o,a.type)}>`).join(`
`),l]);else{const a=[`[Vue warn]: ${n}`,...s];l.length&&a.push(`
`,...$8(l)),console.warn(...a)}uo()}function E8(){let n=oo[oo.length-1];if(!n)return[];const s=[];for(;n;){const o=s[0];o&&o.vnode===n?o.recurseCount++:s.push({vnode:n,recurseCount:0});const t=n.component&&n.component.parent;n=t&&t.vnode}return s}function $8(n){const s=[];return n.forEach((o,t)=>{s.push(...t===0?[]:[`
`],...x8(o))}),s}function x8({vnode:n,recurseCount:s}){const o=s>0?`... (${s} recursive calls)`:"",t=n.component?n.component.parent==null:!1,l=` at <${or(n.component,n.type,t)}`,a=">"+o;return n.props?[l,...F8(n.props),a]:[l+a]}function F8(n){const s=[],o=Object.keys(n);return o.slice(0,3).forEach(t=>{s.push(...Su(t,n[t]))}),o.length>3&&s.push(" ..."),s}function Su(n,s,o){return je(s)?(s=JSON.stringify(s),o?s:[`${n}=${s}`]):typeof s=="number"||typeof s=="boolean"||s==null?o?s:[`${n}=${s}`]:Re(s)?(s=Su(n,me(s.value),!0),o?s:[`${n}=Ref<`,s,">"]):fe(s)?[`${n}=fn${s.name?`<${s.name}>`:""}`]:(s=me(s),o?s:[`${n}=`,s])}function S8(n,s){n!==void 0&&(typeof n!="number"?G(`${s} is not a valid number - got ${JSON.stringify(n)}.`):isNaN(n)&&G(`${s} is NaN - the duration expression might be incorrect.`))}const Qa={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function ds(n,s,o,t){let l;try{l=t?n(...t):n()}catch(a){Kl(a,s,o)}return l}function Tn(n,s,o,t){if(fe(n)){const a=ds(n,s,o,t);return a&&Na(a)&&a.catch(c=>{Kl(c,s,o)}),a}const l=[];for(let a=0;a<n.length;a++)l.push(Tn(n[a],s,o,t));return l}function Kl(n,s,o,t=!0){const l=s?s.vnode:null;if(s){let a=s.parent;const c=s.proxy,i=Qa[o];for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](n,c,i)===!1)return}a=a.parent}const p=s.appContext.config.errorHandler;if(p){ds(p,null,10,[n,c,i]);return}}R8(n,o,l,t)}function R8(n,s,o,t=!0){{const l=Qa[s];if(o&&pl(o),G(`Unhandled error${l?` during execution of ${l}`:""}`),o&&ul(),t)throw n;console.error(n)}}let Ct=!1,Ur=!1;const an=[];let Zn=0;const $o=[];let Yn=null,vs=0;const Ru=Promise.resolve();let Ja=null;const I8=100;function tn(n){const s=Ja||Ru;return n?s.then(this?n.bind(this):n):s}function P8(n){let s=Zn+1,o=an.length;for(;s<o;){const t=s+o>>>1;vt(an[t])<n?s=t+1:o=t}return s}function zl(n){(!an.length||!an.includes(n,Ct&&n.allowRecurse?Zn+1:Zn))&&(n.id==null?an.push(n):an.splice(P8(n.id),0,n),Iu())}function Iu(){!Ct&&!Ur&&(Ur=!0,Ja=Ru.then(Tu))}function O8(n){const s=an.indexOf(n);s>Zn&&an.splice(s,1)}function Pu(n){ie(n)?$o.push(...n):(!Yn||!Yn.includes(n,n.allowRecurse?vs+1:vs))&&$o.push(n),Iu()}function zc(n,s=Ct?Zn+1:0){for(n=n||new Map;s<an.length;s++){const o=an[s];if(o&&o.pre){if(Xa(n,o))continue;an.splice(s,1),s--,o()}}}function Ou(n){if($o.length){const s=[...new Set($o)];if($o.length=0,Yn){Yn.push(...s);return}for(Yn=s,n=n||new Map,Yn.sort((o,t)=>vt(o)-vt(t)),vs=0;vs<Yn.length;vs++)Xa(n,Yn[vs])||Yn[vs]();Yn=null,vs=0}}const vt=n=>n.id==null?1/0:n.id,T8=(n,s)=>{const o=vt(n)-vt(s);if(o===0){if(n.pre&&!s.pre)return-1;if(s.pre&&!n.pre)return 1}return o};function Tu(n){Ur=!1,Ct=!0,n=n||new Map,an.sort(T8);const s=o=>Xa(n,o);try{for(Zn=0;Zn<an.length;Zn++){const o=an[Zn];if(o&&o.active!==!1){if(s(o))continue;ds(o,null,14)}}}finally{Zn=0,an.length=0,Ou(n),Ct=!1,Ja=null,(an.length||$o.length)&&Tu(n)}}function Xa(n,s){if(!n.has(s))n.set(s,1);else{const o=n.get(s);if(o>I8){const t=s.ownerInstance,l=t&&wt(t.type);return G(`Maximum recursive updates exceeded${l?` in component <${l}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else n.set(s,o+1)}}let Fs=!1;const vo=new Set;uu().__VUE_HMR_RUNTIME__={createRecord:ir(Lu),rerender:ir(q8),reload:ir(G8)};const io=new Map;function L8(n){const s=n.type.__hmrId;let o=io.get(s);o||(Lu(s,n.type),o=io.get(s)),o.instances.add(n)}function M8(n){io.get(n.type.__hmrId).instances.delete(n)}function Lu(n,s){return io.has(n)?!1:(io.set(n,{initialDef:rt(s),instances:new Set}),!0)}function rt(n){return hd(n)?n.__vccOpts:n}function q8(n,s){const o=io.get(n);o&&(o.initialDef.render=s,[...o.instances].forEach(t=>{s&&(t.render=s,rt(t.type).render=s),t.renderCache=[],Fs=!0,t.update(),Fs=!1}))}function G8(n,s){const o=io.get(n);if(!o)return;s=rt(s),Yc(o.initialDef,s);const t=[...o.instances];for(const l of t){const a=rt(l.type);vo.has(a)||(a!==o.initialDef&&Yc(a,s),vo.add(a)),l.appContext.optionsCache.delete(l.type),l.ceReload?(vo.add(a),l.ceReload(s.styles),vo.delete(a)):l.parent?zl(l.parent.update):l.appContext.reload?l.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}Pu(()=>{for(const l of t)vo.delete(rt(l.type))})}function Yc(n,s){Ue(n,s);for(const o in n)o!=="__file"&&!(o in s)&&delete n[o]}function ir(n){return(s,o)=>{try{return n(s,o)}catch(t){console.error(t),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let Qn,st=[],Wr=!1;function Gt(n,...s){Qn?Qn.emit(n,...s):Wr||st.push({event:n,args:s})}function Mu(n,s){var o,t;Qn=n,Qn?(Qn.enabled=!0,st.forEach(({event:l,args:a})=>Qn.emit(l,...a)),st=[]):typeof window<"u"&&window.HTMLElement&&!(!((t=(o=window.navigator)===null||o===void 0?void 0:o.userAgent)===null||t===void 0)&&t.includes("jsdom"))?((s.__VUE_DEVTOOLS_HOOK_REPLAY__=s.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(a=>{Mu(a,s)}),setTimeout(()=>{Qn||(s.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Wr=!0,st=[])},3e3)):(Wr=!0,st=[])}function N8(n,s){Gt("app:init",n,s,{Fragment:Oe,Text:Vt,Comment:en,Static:dl})}function H8(n){Gt("app:unmount",n)}const Kr=ec("component:added"),qu=ec("component:updated"),j8=ec("component:removed"),V8=n=>{Qn&&typeof Qn.cleanupBuffer=="function"&&!Qn.cleanupBuffer(n)&&j8(n)};function ec(n){return s=>{Gt(n,s.appContext.app,s.uid,s.parent?s.parent.uid:void 0,s)}}const U8=Gu("perf:start"),W8=Gu("perf:end");function Gu(n){return(s,o,t)=>{Gt(n,s.appContext.app,s.uid,s,o,t)}}function K8(n,s,o){Gt("component:emit",n.appContext.app,n,s,o)}function z8(n,s,...o){if(n.isUnmounted)return;const t=n.vnode.props||Ge;{const{emitsOptions:d,propsOptions:[y]}=n;if(d)if(!(s in d))(!y||!(Us(s)in y))&&G(`Component emitted event "${s}" but it is neither declared in the emits option nor as an "${Us(s)}" prop.`);else{const f=d[s];fe(f)&&(f(...o)||G(`Invalid event arguments: event validation failed for event "${s}".`))}}let l=o;const a=s.startsWith("update:"),c=a&&s.slice(7);if(c&&c in t){const d=`${c==="modelValue"?"model":c}Modifiers`,{number:y,trim:f}=t[d]||Ge;f&&(l=o.map(h=>je(h)?h.trim():h)),y&&(l=o.map(Nr))}K8(n,s,l);{const d=s.toLowerCase();d!==s&&t[Us(d)]&&G(`Event "${d}" is emitted in component ${or(n,n.type)} but the handler is registered for "${s}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${ys(s)}" instead of "${s}".`)}let i,p=t[i=Us(s)]||t[i=Us(ns(s))];!p&&a&&(p=t[i=Us(ys(s))]),p&&Tn(p,n,6,l);const u=t[i+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[i])return;n.emitted[i]=!0,Tn(u,n,6,l)}}function Nu(n,s,o=!1){const t=s.emitsCache,l=t.get(n);if(l!==void 0)return l;const a=n.emits;let c={},i=!1;if(!fe(n)){const p=u=>{const d=Nu(u,s,!0);d&&(i=!0,Ue(c,d))};!o&&s.mixins.length&&s.mixins.forEach(p),n.extends&&p(n.extends),n.mixins&&n.mixins.forEach(p)}return!a&&!i?(Le(n)&&t.set(n,null),null):(ie(a)?a.forEach(p=>c[p]=null):Ue(c,a),Le(n)&&t.set(n,c),c)}function Yl(n,s){return!n||!Mt(s)?!1:(s=s.slice(2).replace(/Once$/,""),we(n,s[0].toLowerCase()+s.slice(1))||we(n,ys(s))||we(n,s))}let Je=null,Zl=null;function kl(n){const s=Je;return Je=n,Zl=n&&n.type.__scopeId||null,s}function r$(n){Zl=n}function a$(){Zl=null}function x(n,s=Je,o){if(!s||n._n)return n;const t=(...l)=>{t._d&&ii(-1);const a=kl(s);let c;try{c=n(...l)}finally{kl(a),t._d&&ii(1)}return qu(s),c};return t._n=!0,t._c=!0,t._d=!0,t}let zr=!1;function wl(){zr=!0}function pr(n){const{type:s,vnode:o,proxy:t,withProxy:l,props:a,propsOptions:[c],slots:i,attrs:p,emit:u,render:d,renderCache:y,data:f,setupState:h,ctx:m,inheritAttrs:B}=n;let g,k;const v=kl(n);zr=!1;try{if(o.shapeFlag&4){const T=l||t;g=Hn(d.call(T,T,y,a,h,f,m)),k=p}else{const T=s;p===a&&wl(),g=Hn(T.length>1?T(a,{get attrs(){return wl(),p},slots:i,emit:u}):T(a,null)),k=s.props?p:Z8(p)}}catch(T){ct.length=0,Kl(T,n,1),g=q(en)}let D=g,w;if(g.patchFlag>0&&g.patchFlag&2048&&([D,w]=Y8(g)),k&&B!==!1){const T=Object.keys(k),{shapeFlag:N}=D;if(T.length){if(N&7)c&&T.some(gl)&&(k=Q8(k,c)),D=Un(D,k);else if(!zr&&D.type!==en){const Y=Object.keys(p),O=[],K=[];for(let te=0,ue=Y.length;te<ue;te++){const X=Y[te];Mt(X)?gl(X)||O.push(X[2].toLowerCase()+X.slice(3)):K.push(X)}K.length&&G(`Extraneous non-props attributes (${K.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),O.length&&G(`Extraneous non-emits event listeners (${O.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return o.dirs&&(Zc(D)||G("Runtime directive used on component with non-element root node. The directives will not function as intended."),D=Un(D),D.dirs=D.dirs?D.dirs.concat(o.dirs):o.dirs),o.transition&&(Zc(D)||G("Component inside <Transition> renders non-element root node that cannot be animated."),D.transition=o.transition),w?w(D):g=D,kl(v),g}const Y8=n=>{const s=n.children,o=n.dynamicChildren,t=Hu(s);if(!t)return[n,void 0];const l=s.indexOf(t),a=o?o.indexOf(t):-1,c=i=>{s[l]=i,o&&(a>-1?o[a]=i:i.patchFlag>0&&(n.dynamicChildren=[...o,i]))};return[Hn(t),c]};function Hu(n){let s;for(let o=0;o<n.length;o++){const t=n[o];if(ms(t)){if(t.type!==en||t.children==="v-if"){if(s)return;s=t}}else return}return s}const Z8=n=>{let s;for(const o in n)(o==="class"||o==="style"||Mt(o))&&((s||(s={}))[o]=n[o]);return s},Q8=(n,s)=>{const o={};for(const t in n)(!gl(t)||!(t.slice(9)in s))&&(o[t]=n[t]);return o},Zc=n=>n.shapeFlag&7||n.type===en;function J8(n,s,o){const{props:t,children:l,component:a}=n,{props:c,children:i,patchFlag:p}=s,u=a.emitsOptions;if((l||i)&&Fs||s.dirs||s.transition)return!0;if(o&&p>=0){if(p&1024)return!0;if(p&16)return t?Qc(t,c,u):!!c;if(p&8){const d=s.dynamicProps;for(let y=0;y<d.length;y++){const f=d[y];if(c[f]!==t[f]&&!Yl(u,f))return!0}}}else return(l||i)&&(!i||!i.$stable)?!0:t===c?!1:t?c?Qc(t,c,u):!0:!!c;return!1}function Qc(n,s,o){const t=Object.keys(s);if(t.length!==Object.keys(n).length)return!0;for(let l=0;l<t.length;l++){const a=t[l];if(s[a]!==n[a]&&!Yl(o,a))return!0}return!1}function X8({vnode:n,parent:s},o){for(;s&&s.subTree===n;)(n=s.vnode).el=o,s=s.parent}const ju=n=>n.__isSuspense;function em(n,s){s&&s.pendingBranch?ie(n)?s.effects.push(...n):s.effects.push(n):Pu(n)}function En(n,s){if(!We)G("provide() can only be used inside setup().");else{let o=We.provides;const t=We.parent&&We.parent.provides;t===o&&(o=We.provides=Object.create(t)),o[n]=s}}function $(n,s,o=!1){const t=We||Je;if(t){const l=t.parent==null?t.vnode.appContext&&t.vnode.appContext.provides:t.parent.provides;if(l&&n in l)return l[n];if(arguments.length>1)return o&&fe(s)?s.call(t.proxy):s;G(`injection "${String(n)}" not found.`)}else G("inject() can only be used inside setup() or functional components.")}function yo(n,s){return nc(n,null,s)}const nl={};function Ae(n,s,o){return fe(s)||G("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),nc(n,s,o)}function nc(n,s,{immediate:o,deep:t,flush:l,onTrack:a,onTrigger:c}=Ge){s||(o!==void 0&&G('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),t!==void 0&&G('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const i=w=>{G("Invalid watch source: ",w,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},p=Va()===(We==null?void 0:We.scope)?We:null;let u,d=!1,y=!1;if(Re(n)?(u=()=>n.value,d=Dl(n)):so(n)?(u=()=>n,t=!0):ie(n)?(y=!0,d=n.some(w=>so(w)||Dl(w)),u=()=>n.map(w=>{if(Re(w))return w.value;if(so(w))return Qs(w);if(fe(w))return ds(w,p,2);i(w)})):fe(n)?s?u=()=>ds(n,p,2):u=()=>{if(!(p&&p.isUnmounted))return f&&f(),Tn(n,p,3,[h])}:(u=An,i(n)),s&&t){const w=u;u=()=>Qs(w())}let f,h=w=>{f=v.onStop=()=>{ds(w,p,4)}},m;if(kt)if(h=An,s?o&&Tn(s,p,3,[u(),y?[]:void 0,h]):u(),l==="sync"){const w=r5();m=w.__watcherHandles||(w.__watcherHandles=[])}else return An;let B=y?new Array(n.length).fill(nl):nl;const g=()=>{if(v.active)if(s){const w=v.run();(t||d||(y?w.some((T,N)=>gt(T,B[N])):gt(w,B)))&&(f&&f(),Tn(s,p,3,[w,B===nl?void 0:y&&B[0]===nl?[]:B,h]),B=w)}else v.run()};g.allowRecurse=!!s;let k;l==="sync"?k=g:l==="post"?k=()=>on(g,p&&p.suspense):(g.pre=!0,p&&(g.id=p.uid),k=()=>zl(g));const v=new Wa(u,k);v.onTrack=a,v.onTrigger=c,s?o?g():B=v.run():l==="post"?on(v.run.bind(v),p&&p.suspense):v.run();const D=()=>{v.stop(),p&&p.scope&&qa(p.scope.effects,v)};return m&&m.push(D),D}function nm(n,s,o){const t=this.proxy,l=je(n)?n.includes(".")?Vu(t,n):()=>t[n]:n.bind(t,t);let a;fe(s)?a=s:(a=s.handler,o=s);const c=We;Oo(this);const i=nc(l,a.bind(t),o);return c?Oo(c):lo(),i}function Vu(n,s){const o=s.split(".");return()=>{let t=n;for(let l=0;l<o.length&&t;l++)t=t[o[l]];return t}}function Qs(n,s){if(!Le(n)||n.__v_skip||(s=s||new Set,s.has(n)))return n;if(s.add(n),Re(n))Qs(n.value,s);else if(ie(n))for(let o=0;o<n.length;o++)Qs(n[o],s);else if(cu(n)||eo(n))n.forEach(o=>{Qs(o,s)});else if(pu(n))for(const o in n)Qs(n[o],s);return n}function Uu(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return fo(()=>{n.isMounted=!0}),Ht(()=>{n.isUnmounting=!0}),n}const Rn=[Function,Array],sm={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Rn,onEnter:Rn,onAfterEnter:Rn,onEnterCancelled:Rn,onBeforeLeave:Rn,onLeave:Rn,onAfterLeave:Rn,onLeaveCancelled:Rn,onBeforeAppear:Rn,onAppear:Rn,onAfterAppear:Rn,onAppearCancelled:Rn},setup(n,{slots:s}){const o=Sn(),t=Uu();let l;return()=>{const a=s.default&&sc(s.default(),!0);if(!a||!a.length)return;let c=a[0];if(a.length>1){let B=!1;for(const g of a)if(g.type!==en){if(B){G("<transition> can only be used on a single element or component. Use <transition-group> for lists.");break}c=g,B=!0}}const i=me(n),{mode:p}=i;if(p&&p!=="in-out"&&p!=="out-in"&&p!=="default"&&G(`invalid <transition> mode: ${p}`),t.isLeaving)return ur(c);const u=Jc(c);if(!u)return ur(c);const d=Dt(u,i,t,o);Po(u,d);const y=o.subTree,f=y&&Jc(y);let h=!1;const{getTransitionKey:m}=u.type;if(m){const B=m();l===void 0?l=B:B!==l&&(l=B,h=!0)}if(f&&f.type!==en&&(!Es(u,f)||h)){const B=Dt(f,i,t,o);if(Po(f,B),p==="out-in")return t.isLeaving=!0,B.afterLeave=()=>{t.isLeaving=!1,o.update.active!==!1&&o.update()},ur(c);p==="in-out"&&u.type!==en&&(B.delayLeave=(g,k,v)=>{const D=Wu(t,f);D[String(f.key)]=f,g._leaveCb=()=>{k(),g._leaveCb=void 0,delete d.delayedLeave},d.delayedLeave=v})}return c}}},om=sm;function Wu(n,s){const{leavingVNodes:o}=n;let t=o.get(s.type);return t||(t=Object.create(null),o.set(s.type,t)),t}function Dt(n,s,o,t){const{appear:l,mode:a,persisted:c=!1,onBeforeEnter:i,onEnter:p,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:y,onLeave:f,onAfterLeave:h,onLeaveCancelled:m,onBeforeAppear:B,onAppear:g,onAfterAppear:k,onAppearCancelled:v}=s,D=String(n.key),w=Wu(o,n),T=(O,K)=>{O&&Tn(O,t,9,K)},N=(O,K)=>{const te=K[1];T(O,K),ie(O)?O.every(ue=>ue.length<=1)&&te():O.length<=1&&te()},Y={mode:a,persisted:c,beforeEnter(O){let K=i;if(!o.isMounted)if(l)K=B||i;else return;O._leaveCb&&O._leaveCb(!0);const te=w[D];te&&Es(n,te)&&te.el._leaveCb&&te.el._leaveCb(),T(K,[O])},enter(O){let K=p,te=u,ue=d;if(!o.isMounted)if(l)K=g||p,te=k||u,ue=v||d;else return;let X=!1;const De=O._enterCb=Pe=>{X||(X=!0,Pe?T(ue,[O]):T(te,[O]),Y.delayedLeave&&Y.delayedLeave(),O._enterCb=void 0)};K?N(K,[O,De]):De()},leave(O,K){const te=String(n.key);if(O._enterCb&&O._enterCb(!0),o.isUnmounting)return K();T(y,[O]);let ue=!1;const X=O._leaveCb=De=>{ue||(ue=!0,K(),De?T(m,[O]):T(h,[O]),O._leaveCb=void 0,w[te]===n&&delete w[te])};w[te]=n,f?N(f,[O,X]):X()},clone(O){return Dt(O,s,o,t)}};return Y}function ur(n){if(Nt(n))return n=Un(n),n.children=null,n}function Jc(n){return Nt(n)?n.children?n.children[0]:void 0:n}function Po(n,s){n.shapeFlag&6&&n.component?Po(n.component.subTree,s):n.shapeFlag&128?(n.ssContent.transition=s.clone(n.ssContent),n.ssFallback.transition=s.clone(n.ssFallback)):n.transition=s}function sc(n,s=!1,o){let t=[],l=0;for(let a=0;a<n.length;a++){let c=n[a];const i=o==null?c.key:String(o)+String(c.key!=null?c.key:a);c.type===Oe?(c.patchFlag&128&&l++,t=t.concat(sc(c.children,s,i))):(s||c.type!==en)&&t.push(i!=null?Un(c,{key:i}):c)}if(l>1)for(let a=0;a<t.length;a++)t[a].patchFlag=-2;return t}function Ie(n){return fe(n)?{setup:n,name:n.name}:n}const xo=n=>!!n.type.__asyncLoader,Nt=n=>n.type.__isKeepAlive,tm={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(n,{slots:s}){const o=Sn(),t=o.ctx;if(!t.renderer)return()=>{const v=s.default&&s.default();return v&&v.length===1?v[0]:v};const l=new Map,a=new Set;let c=null;o.__v_cache=l;const i=o.suspense,{renderer:{p,m:u,um:d,o:{createElement:y}}}=t,f=y("div");t.activate=(v,D,w,T,N)=>{const Y=v.component;u(v,D,w,0,i),p(Y.vnode,v,D,w,Y,i,T,v.slotScopeIds,N),on(()=>{Y.isDeactivated=!1,Y.a&&ks(Y.a);const O=v.props&&v.props.onVnodeMounted;O&&In(O,Y.parent,v)},i),Kr(Y)},t.deactivate=v=>{const D=v.component;u(v,f,null,1,i),on(()=>{D.da&&ks(D.da);const w=v.props&&v.props.onVnodeUnmounted;w&&In(w,D.parent,v),D.isDeactivated=!0},i),Kr(D)};function h(v){dr(v),d(v,o,i,!0)}function m(v){l.forEach((D,w)=>{const T=wt(D.type);T&&(!v||!v(T))&&B(w)})}function B(v){const D=l.get(v);!c||!Es(D,c)?h(D):c&&dr(c),l.delete(v),a.delete(v)}Ae(()=>[n.include,n.exclude],([v,D])=>{v&&m(w=>ot(v,w)),D&&m(w=>!ot(D,w))},{flush:"post",deep:!0});let g=null;const k=()=>{g!=null&&l.set(g,yr(o.subTree))};return fo(k),Jl(k),Ht(()=>{l.forEach(v=>{const{subTree:D,suspense:w}=o,T=yr(D);if(v.type===T.type&&v.key===T.key){dr(T);const N=T.component.da;N&&on(N,w);return}h(v)})}),()=>{if(g=null,!s.default)return null;const v=s.default(),D=v[0];if(v.length>1)return G("KeepAlive should contain exactly one component child."),c=null,v;if(!ms(D)||!(D.shapeFlag&4)&&!(D.shapeFlag&128))return c=null,D;let w=yr(D);const T=w.type,N=wt(xo(w)?w.type.__asyncResolved||{}:T),{include:Y,exclude:O,max:K}=n;if(Y&&(!N||!ot(Y,N))||O&&N&&ot(O,N))return c=w,D;const te=w.key==null?T:w.key,ue=l.get(te);return w.el&&(w=Un(w),D.shapeFlag&128&&(D.ssContent=w)),g=te,ue?(w.el=ue.el,w.component=ue.component,w.transition&&Po(w,w.transition),w.shapeFlag|=512,a.delete(te),a.add(te)):(a.add(te),K&&a.size>parseInt(K,10)&&B(a.values().next().value)),w.shapeFlag|=256,c=w,ju(D.type)?D:w}}},Ku=tm;function ot(n,s){return ie(n)?n.some(o=>ot(o,s)):je(n)?n.split(",").includes(s):Lf(n)?n.test(s):!1}function zu(n,s){Zu(n,"a",s)}function Yu(n,s){Zu(n,"da",s)}function Zu(n,s,o=We){const t=n.__wdc||(n.__wdc=()=>{let l=o;for(;l;){if(l.isDeactivated)return;l=l.parent}return n()});if(Ql(s,t,o),o){let l=o.parent;for(;l&&l.parent;)Nt(l.parent.vnode)&&lm(t,s,o,l),l=l.parent}}function lm(n,s,o,t){const l=Ql(s,n,t,!0);Xl(()=>{qa(t[s],l)},o)}function dr(n){n.shapeFlag&=-257,n.shapeFlag&=-513}function yr(n){return n.shapeFlag&128?n.ssContent:n}function Ql(n,s,o=We,t=!1){if(o){const l=o[n]||(o[n]=[]),a=s.__weh||(s.__weh=(...c)=>{if(o.isUnmounted)return;po(),Oo(o);const i=Tn(s,o,n,c);return lo(),uo(),i});return t?l.unshift(a):l.push(a),a}else{const l=Us(Qa[n].replace(/ hook$/,""));G(`${l} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const hs=n=>(s,o=We)=>(!kt||n==="sp")&&Ql(n,(...t)=>s(...t),o),rm=hs("bm"),fo=hs("m"),am=hs("bu"),Jl=hs("u"),Ht=hs("bum"),Xl=hs("um"),cm=hs("sp"),im=hs("rtg"),pm=hs("rtc");function um(n,s=We){Ql("ec",n,s)}function Qu(n){Mf(n)&&G("Do not use built-in directive ids as custom directive id: "+n)}function er(n,s){const o=Je;if(o===null)return G("withDirectives can only be used inside render functions."),n;const t=sr(o)||o.proxy,l=n.dirs||(n.dirs=[]);for(let a=0;a<s.length;a++){let[c,i,p,u=Ge]=s[a];c&&(fe(c)&&(c={mounted:c,updated:c}),c.deep&&Qs(i),l.push({dir:c,instance:t,value:i,oldValue:void 0,arg:p,modifiers:u}))}return n}function Gs(n,s,o,t){const l=n.dirs,a=s&&s.dirs;for(let c=0;c<l.length;c++){const i=l[c];a&&(i.oldValue=a[c].value);let p=i.dir[t];p&&(po(),Tn(p,o,8,[n.el,i,n,s]),uo())}}const Yr="components",dm="directives";function El(n,s){return Ju(Yr,n,!0,s)||n}const ym=Symbol();function Xc(n){return Ju(dm,n)}function Ju(n,s,o=!0,t=!1){const l=Je||We;if(l){const a=l.type;if(n===Yr){const i=wt(a,!1);if(i&&(i===s||i===ns(s)||i===co(ns(s))))return a}const c=ei(l[n]||a[n],s)||ei(l.appContext[n],s);if(!c&&t)return a;if(o&&!c){const i=n===Yr?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";G(`Failed to resolve ${n.slice(0,-1)}: ${s}${i}`)}return c}else G(`resolve${co(n.slice(0,-1))} can only be used in render() or setup().`)}function ei(n,s){return n&&(n[s]||n[ns(s)]||n[co(ns(s))])}function jt(n,s,o,t){let l;const a=o&&o[t];if(ie(n)||je(n)){l=new Array(n.length);for(let c=0,i=n.length;c<i;c++)l[c]=s(n[c],c,void 0,a&&a[c])}else if(typeof n=="number"){Number.isInteger(n)||G(`The v-for range expect an integer value but got ${n}.`),l=new Array(n);for(let c=0;c<n;c++)l[c]=s(c+1,c,void 0,a&&a[c])}else if(Le(n))if(n[Symbol.iterator])l=Array.from(n,(c,i)=>s(c,i,void 0,a&&a[i]));else{const c=Object.keys(n);l=new Array(c.length);for(let i=0,p=c.length;i<p;i++){const u=c[i];l[i]=s(n[u],u,i,a&&a[i])}}else l=[];return o&&(o[t]=l),l}function Vn(n,s,o={},t,l){if(Je.isCE||Je.parent&&xo(Je.parent)&&Je.parent.isCE)return s!=="default"&&(o.name=s),q("slot",o,t&&t());let a=n[s];a&&a.length>1&&(G("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),a=()=>[]),a&&a._c&&(a._d=!1),C();const c=a&&Xu(a(o)),i=R(Oe,{key:o.key||c&&c.key||`_${s}`},c||(t?t():[]),c&&n._===1?64:-2);return!l&&i.scopeId&&(i.slotScopeIds=[i.scopeId+"-s"]),a&&a._c&&(a._d=!0),i}function Xu(n){return n.some(s=>ms(s)?!(s.type===en||s.type===Oe&&!Xu(s.children)):!0)?n:null}const Zr=n=>n?yd(n)?sr(n)||n.proxy:Zr(n.parent):null,to=Ue(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>ko(n.props),$attrs:n=>ko(n.attrs),$slots:n=>ko(n.slots),$refs:n=>ko(n.refs),$parent:n=>Zr(n.parent),$root:n=>Zr(n.root),$emit:n=>n.emit,$options:n=>tc(n),$forceUpdate:n=>n.f||(n.f=()=>zl(n.update)),$nextTick:n=>n.n||(n.n=tn.bind(n.proxy)),$watch:n=>nm.bind(n)}),oc=n=>n==="_"||n==="$",fr=(n,s)=>n!==Ge&&!n.__isScriptSetup&&we(n,s),ed={get({_:n},s){const{ctx:o,setupState:t,data:l,props:a,accessCache:c,type:i,appContext:p}=n;if(s==="__isVue")return!0;let u;if(s[0]!=="$"){const h=c[s];if(h!==void 0)switch(h){case 1:return t[s];case 2:return l[s];case 4:return o[s];case 3:return a[s]}else{if(fr(t,s))return c[s]=1,t[s];if(l!==Ge&&we(l,s))return c[s]=2,l[s];if((u=n.propsOptions[0])&&we(u,s))return c[s]=3,a[s];if(o!==Ge&&we(o,s))return c[s]=4,o[s];Qr&&(c[s]=0)}}const d=to[s];let y,f;if(d)return s==="$attrs"&&(vn(n,"get",s),wl()),d(n);if((y=i.__cssModules)&&(y=y[s]))return y;if(o!==Ge&&we(o,s))return c[s]=4,o[s];if(f=p.config.globalProperties,we(f,s))return f[s];Je&&(!je(s)||s.indexOf("__v")!==0)&&(l!==Ge&&oc(s[0])&&we(l,s)?G(`Property ${JSON.stringify(s)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):n===Je&&G(`Property ${JSON.stringify(s)} was accessed during render but is not defined on instance.`))},set({_:n},s,o){const{data:t,setupState:l,ctx:a}=n;return fr(l,s)?(l[s]=o,!0):l.__isScriptSetup&&we(l,s)?(G(`Cannot mutate <script setup> binding "${s}" from Options API.`),!1):t!==Ge&&we(t,s)?(t[s]=o,!0):we(n.props,s)?(G(`Attempting to mutate prop "${s}". Props are readonly.`),!1):s[0]==="$"&&s.slice(1)in n?(G(`Attempting to mutate public property "${s}". Properties starting with $ are reserved and readonly.`),!1):(s in n.appContext.config.globalProperties?Object.defineProperty(a,s,{enumerable:!0,configurable:!0,value:o}):a[s]=o,!0)},has({_:{data:n,setupState:s,accessCache:o,ctx:t,appContext:l,propsOptions:a}},c){let i;return!!o[c]||n!==Ge&&we(n,c)||fr(s,c)||(i=a[0])&&we(i,c)||we(t,c)||we(to,c)||we(l.config.globalProperties,c)},defineProperty(n,s,o){return o.get!=null?n._.accessCache[s]=0:we(o,"value")&&this.set(n,s,o.value,null),Reflect.defineProperty(n,s,o)}};ed.ownKeys=n=>(G("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(n));function fm(n){const s={};return Object.defineProperty(s,"_",{configurable:!0,enumerable:!1,get:()=>n}),Object.keys(to).forEach(o=>{Object.defineProperty(s,o,{configurable:!0,enumerable:!1,get:()=>to[o](n),set:An})}),s}function mm(n){const{ctx:s,propsOptions:[o]}=n;o&&Object.keys(o).forEach(t=>{Object.defineProperty(s,t,{enumerable:!0,configurable:!0,get:()=>n.props[t],set:An})})}function hm(n){const{ctx:s,setupState:o}=n;Object.keys(me(o)).forEach(t=>{if(!o.__isScriptSetup){if(oc(t[0])){G(`setup() return property ${JSON.stringify(t)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(s,t,{enumerable:!0,configurable:!0,get:()=>o[t],set:An})}})}function _m(){const n=Object.create(null);return(s,o)=>{n[o]?G(`${s} property "${o}" is already defined in ${n[o]}.`):n[o]=s}}let Qr=!0;function Bm(n){const s=tc(n),o=n.proxy,t=n.ctx;Qr=!1,s.beforeCreate&&ni(s.beforeCreate,n,"bc");const{data:l,computed:a,methods:c,watch:i,provide:p,inject:u,created:d,beforeMount:y,mounted:f,beforeUpdate:h,updated:m,activated:B,deactivated:g,beforeDestroy:k,beforeUnmount:v,destroyed:D,unmounted:w,render:T,renderTracked:N,renderTriggered:Y,errorCaptured:O,serverPrefetch:K,expose:te,inheritAttrs:ue,components:X,directives:De,filters:Pe}=s,xe=_m();{const[ee]=n.propsOptions;if(ee)for(const pe in ee)xe("Props",pe)}if(u&&gm(u,t,xe,n.appContext.config.unwrapInjectedRef),c)for(const ee in c){const pe=c[ee];fe(pe)?(Object.defineProperty(t,ee,{value:pe.bind(o),configurable:!0,enumerable:!0,writable:!0}),xe("Methods",ee)):G(`Method "${ee}" has type "${typeof pe}" in the component definition. Did you reference the function correctly?`)}if(l){fe(l)||G("The data option must be a function. Plain object usage is no longer supported.");const ee=l.call(o,o);if(Na(ee)&&G("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!Le(ee))G("data() should return an object.");else{n.data=Ve(ee);for(const pe in ee)xe("Data",pe),oc(pe[0])||Object.defineProperty(t,pe,{configurable:!0,enumerable:!0,get:()=>ee[pe],set:An})}}if(Qr=!0,a)for(const ee in a){const pe=a[ee],ve=fe(pe)?pe.bind(o,o):fe(pe.get)?pe.get.bind(o,o):An;ve===An&&G(`Computed property "${ee}" has no getter.`);const Me=!fe(pe)&&fe(pe.set)?pe.set.bind(o):()=>{G(`Write operation failed: computed property "${ee}" is readonly.`)},Dn=F({get:ve,set:Me});Object.defineProperty(t,ee,{enumerable:!0,configurable:!0,get:()=>Dn.value,set:ln=>Dn.value=ln}),xe("Computed",ee)}if(i)for(const ee in i)nd(i[ee],t,o,ee);if(p){const ee=fe(p)?p.call(o):p;Reflect.ownKeys(ee).forEach(pe=>{En(pe,ee[pe])})}d&&ni(d,n,"c");function Ne(ee,pe){ie(pe)?pe.forEach(ve=>ee(ve.bind(o))):pe&&ee(pe.bind(o))}if(Ne(rm,y),Ne(fo,f),Ne(am,h),Ne(Jl,m),Ne(zu,B),Ne(Yu,g),Ne(um,O),Ne(pm,N),Ne(im,Y),Ne(Ht,v),Ne(Xl,w),Ne(cm,K),ie(te))if(te.length){const ee=n.exposed||(n.exposed={});te.forEach(pe=>{Object.defineProperty(ee,pe,{get:()=>o[pe],set:ve=>o[pe]=ve})})}else n.exposed||(n.exposed={});T&&n.render===An&&(n.render=T),ue!=null&&(n.inheritAttrs=ue),X&&(n.components=X),De&&(n.directives=De)}function gm(n,s,o=An,t=!1){ie(n)&&(n=Jr(n));for(const l in n){const a=n[l];let c;Le(a)?"default"in a?c=$(a.from||l,a.default,!0):c=$(a.from||l):c=$(a),Re(c)?t?Object.defineProperty(s,l,{enumerable:!0,configurable:!0,get:()=>c.value,set:i=>c.value=i}):(G(`injected property "${l}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`),s[l]=c):s[l]=c,o("Inject",l)}}function ni(n,s,o){Tn(ie(n)?n.map(t=>t.bind(s.proxy)):n.bind(s.proxy),s,o)}function nd(n,s,o,t){const l=t.includes(".")?Vu(o,t):()=>o[t];if(je(n)){const a=s[n];fe(a)?Ae(l,a):G(`Invalid watch handler specified by key "${n}"`,a)}else if(fe(n))Ae(l,n.bind(o));else if(Le(n))if(ie(n))n.forEach(a=>nd(a,s,o,t));else{const a=fe(n.handler)?n.handler.bind(o):s[n.handler];fe(a)?Ae(l,a,n):G(`Invalid watch handler specified by key "${n.handler}"`,a)}else G(`Invalid watch option: "${t}"`,n)}function tc(n){const s=n.type,{mixins:o,extends:t}=s,{mixins:l,optionsCache:a,config:{optionMergeStrategies:c}}=n.appContext,i=a.get(s);let p;return i?p=i:!l.length&&!o&&!t?p=s:(p={},l.length&&l.forEach(u=>$l(p,u,c,!0)),$l(p,s,c)),Le(s)&&a.set(s,p),p}function $l(n,s,o,t=!1){const{mixins:l,extends:a}=s;a&&$l(n,a,o,!0),l&&l.forEach(c=>$l(n,c,o,!0));for(const c in s)if(t&&c==="expose")G('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const i=Am[c]||o&&o[c];n[c]=i?i(n[c],s[c]):s[c]}return n}const Am={data:si,props:Ws,emits:Ws,methods:Ws,computed:Ws,beforeCreate:un,created:un,beforeMount:un,mounted:un,beforeUpdate:un,updated:un,beforeDestroy:un,beforeUnmount:un,destroyed:un,unmounted:un,activated:un,deactivated:un,errorCaptured:un,serverPrefetch:un,components:Ws,directives:Ws,watch:vm,provide:si,inject:Cm};function si(n,s){return s?n?function(){return Ue(fe(n)?n.call(this,this):n,fe(s)?s.call(this,this):s)}:s:n}function Cm(n,s){return Ws(Jr(n),Jr(s))}function Jr(n){if(ie(n)){const s={};for(let o=0;o<n.length;o++)s[n[o]]=n[o];return s}return n}function un(n,s){return n?[...new Set([].concat(n,s))]:s}function Ws(n,s){return n?Ue(Ue(Object.create(null),n),s):s}function vm(n,s){if(!n)return s;if(!s)return n;const o=Ue(Object.create(null),n);for(const t in s)o[t]=un(n[t],s[t]);return o}function Dm(n,s,o,t=!1){const l={},a={};Al(a,nr,1),n.propsDefaults=Object.create(null),sd(n,s,l,a);for(const c in n.propsOptions[0])c in l||(l[c]=void 0);td(s||{},l,n),o?n.props=t?l:B8(l):n.type.props?n.props=l:n.props=a,n.attrs=a}function bm(n){for(;n;){if(n.type.__hmrId)return!0;n=n.parent}}function km(n,s,o,t){const{props:l,attrs:a,vnode:{patchFlag:c}}=n,i=me(l),[p]=n.propsOptions;let u=!1;if(!bm(n)&&(t||c>0)&&!(c&16)){if(c&8){const d=n.vnode.dynamicProps;for(let y=0;y<d.length;y++){let f=d[y];if(Yl(n.emitsOptions,f))continue;const h=s[f];if(p)if(we(a,f))h!==a[f]&&(a[f]=h,u=!0);else{const m=ns(f);l[m]=Xr(p,i,m,h,n,!1)}else h!==a[f]&&(a[f]=h,u=!0)}}}else{sd(n,s,l,a)&&(u=!0);let d;for(const y in i)(!s||!we(s,y)&&((d=ys(y))===y||!we(s,d)))&&(p?o&&(o[y]!==void 0||o[d]!==void 0)&&(l[y]=Xr(p,i,y,void 0,n,!0)):delete l[y]);if(a!==i)for(const y in a)(!s||!we(s,y))&&(delete a[y],u=!0)}u&&fs(n,"set","$attrs"),td(s||{},l,n)}function sd(n,s,o,t){const[l,a]=n.propsOptions;let c=!1,i;if(s)for(let p in s){if(il(p))continue;const u=s[p];let d;l&&we(l,d=ns(p))?!a||!a.includes(d)?o[d]=u:(i||(i={}))[d]=u:Yl(n.emitsOptions,p)||(!(p in t)||u!==t[p])&&(t[p]=u,c=!0)}if(a){const p=me(o),u=i||Ge;for(let d=0;d<a.length;d++){const y=a[d];o[y]=Xr(l,p,y,u[y],n,!we(u,y))}}return c}function Xr(n,s,o,t,l,a){const c=n[o];if(c!=null){const i=we(c,"default");if(i&&t===void 0){const p=c.default;if(c.type!==Function&&fe(p)){const{propsDefaults:u}=l;o in u?t=u[o]:(Oo(l),t=u[o]=p.call(null,s),lo())}else t=p}c[0]&&(a&&!i?t=!1:c[1]&&(t===""||t===ys(o))&&(t=!0))}return t}function od(n,s,o=!1){const t=s.propsCache,l=t.get(n);if(l)return l;const a=n.props,c={},i=[];let p=!1;if(!fe(n)){const d=y=>{p=!0;const[f,h]=od(y,s,!0);Ue(c,f),h&&i.push(...h)};!o&&s.mixins.length&&s.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!a&&!p)return Le(n)&&t.set(n,Eo),Eo;if(ie(a))for(let d=0;d<a.length;d++){je(a[d])||G("props must be strings when using array syntax.",a[d]);const y=ns(a[d]);oi(y)&&(c[y]=Ge)}else if(a){Le(a)||G("invalid props options",a);for(const d in a){const y=ns(d);if(oi(y)){const f=a[d],h=c[y]=ie(f)||fe(f)?{type:f}:Object.assign({},f);if(h){const m=li(Boolean,h.type),B=li(String,h.type);h[0]=m>-1,h[1]=B<0||m<B,(m>-1||we(h,"default"))&&i.push(y)}}}}const u=[c,i];return Le(n)&&t.set(n,u),u}function oi(n){return n[0]!=="$"?!0:(G(`Invalid prop name: "${n}" is a reserved property.`),!1)}function ea(n){const s=n&&n.toString().match(/^\s*(function|class) (\w+)/);return s?s[2]:n===null?"null":""}function ti(n,s){return ea(n)===ea(s)}function li(n,s){return ie(s)?s.findIndex(o=>ti(o,n)):fe(s)&&ti(s,n)?0:-1}function td(n,s,o){const t=me(s),l=o.propsOptions[0];for(const a in l){let c=l[a];c!=null&&wm(a,t[a],c,!we(n,a)&&!we(n,ys(a)))}}function wm(n,s,o,t){const{type:l,required:a,validator:c}=o;if(a&&t){G('Missing required prop: "'+n+'"');return}if(!(s==null&&!o.required)){if(l!=null&&l!==!0){let i=!1;const p=ie(l)?l:[l],u=[];for(let d=0;d<p.length&&!i;d++){const{valid:y,expectedType:f}=$m(s,p[d]);u.push(f||""),i=y}if(!i){G(xm(n,s,u));return}}c&&!c(s)&&G('Invalid prop: custom validator check failed for prop "'+n+'".')}}const Em=qs("String,Number,Boolean,Function,Symbol,BigInt");function $m(n,s){let o;const t=ea(s);if(Em(t)){const l=typeof n;o=l===t.toLowerCase(),!o&&l==="object"&&(o=n instanceof s)}else t==="Object"?o=Le(n):t==="Array"?o=ie(n):t==="null"?o=n===null:o=n instanceof s;return{valid:o,expectedType:t}}function xm(n,s,o){let t=`Invalid prop: type check failed for prop "${n}". Expected ${o.map(co).join(" | ")}`;const l=o[0],a=Ha(s),c=ri(s,l),i=ri(s,a);return o.length===1&&ai(l)&&!Fm(l,a)&&(t+=` with value ${c}`),t+=`, got ${a} `,ai(a)&&(t+=`with value ${i}.`),t}function ri(n,s){return s==="String"?`"${n}"`:s==="Number"?`${Number(n)}`:`${n}`}function ai(n){return["string","number","boolean"].some(o=>n.toLowerCase()===o)}function Fm(...n){return n.some(s=>s.toLowerCase()==="boolean")}const ld=n=>n[0]==="_"||n==="$stable",lc=n=>ie(n)?n.map(Hn):[Hn(n)],Sm=(n,s,o)=>{if(s._n)return s;const t=x((...l)=>(We&&G(`Slot "${n}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),lc(s(...l))),o);return t._c=!1,t},rd=(n,s,o)=>{const t=n._ctx;for(const l in n){if(ld(l))continue;const a=n[l];if(fe(a))s[l]=Sm(l,a,t);else if(a!=null){G(`Non-function value encountered for slot "${l}". Prefer function slots for better performance.`);const c=lc(a);s[l]=()=>c}}},ad=(n,s)=>{Nt(n.vnode)||G("Non-function value encountered for default slot. Prefer function slots for better performance.");const o=lc(s);n.slots.default=()=>o},Rm=(n,s)=>{if(n.vnode.shapeFlag&32){const o=s._;o?(n.slots=me(s),Al(s,"_",o)):rd(s,n.slots={})}else n.slots={},s&&ad(n,s);Al(n.slots,nr,1)},Im=(n,s,o)=>{const{vnode:t,slots:l}=n;let a=!0,c=Ge;if(t.shapeFlag&32){const i=s._;i?Fs?Ue(l,s):o&&i===1?a=!1:(Ue(l,s),!o&&i===1&&delete l._):(a=!s.$stable,rd(s,l)),c=s}else s&&(ad(n,s),c={default:1});if(a)for(const i in l)!ld(i)&&!(i in c)&&delete l[i]};function cd(){return{app:null,config:{isNativeTag:au,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Pm=0;function Om(n,s){return function(t,l=null){fe(t)||(t=Object.assign({},t)),l!=null&&!Le(l)&&(G("root props passed to app.mount() must be an object."),l=null);const a=cd(),c=new Set;let i=!1;const p=a.app={_uid:Pm++,_component:t,_props:l,_container:null,_context:a,_instance:null,version:Fl,get config(){return a.config},set config(u){G("app.config cannot be replaced. Modify individual options instead.")},use(u,...d){return c.has(u)?G("Plugin has already been applied to target app."):u&&fe(u.install)?(c.add(u),u.install(p,...d)):fe(u)?(c.add(u),u(p,...d)):G('A plugin must either be a function or an object with an "install" function.'),p},mixin(u){return a.mixins.includes(u)?G("Mixin has already been applied to target app"+(u.name?`: ${u.name}`:"")):a.mixins.push(u),p},component(u,d){return oa(u,a.config),d?(a.components[u]&&G(`Component "${u}" has already been registered in target app.`),a.components[u]=d,p):a.components[u]},directive(u,d){return Qu(u),d?(a.directives[u]&&G(`Directive "${u}" has already been registered in target app.`),a.directives[u]=d,p):a.directives[u]},mount(u,d,y){if(i)G("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{u.__vue_app__&&G("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const f=q(t,l);return f.appContext=a,a.reload=()=>{n(Un(f),u,y)},d&&s?s(f,u):n(f,u,y),i=!0,p._container=u,u.__vue_app__=p,p._instance=f.component,N8(p,Fl),sr(f.component)||f.component.proxy}},unmount(){i?(n(null,p._container),p._instance=null,H8(p),delete p._container.__vue_app__):G("Cannot unmount an app that is not mounted.")},provide(u,d){return u in a.provides&&G(`App already provides property with key "${String(u)}". It will be overwritten with the new value.`),a.provides[u]=d,p}};return p}}function na(n,s,o,t,l=!1){if(ie(n)){n.forEach((f,h)=>na(f,s&&(ie(s)?s[h]:s),o,t,l));return}if(xo(t)&&!l)return;const a=t.shapeFlag&4?sr(t.component)||t.component.proxy:t.el,c=l?null:a,{i,r:p}=n;if(!i){G("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const u=s&&s.r,d=i.refs===Ge?i.refs={}:i.refs,y=i.setupState;if(u!=null&&u!==p&&(je(u)?(d[u]=null,we(y,u)&&(y[u]=null)):Re(u)&&(u.value=null)),fe(p))ds(p,i,12,[c,d]);else{const f=je(p),h=Re(p);if(f||h){const m=()=>{if(n.f){const B=f?we(y,p)?y[p]:d[p]:p.value;l?ie(B)&&qa(B,a):ie(B)?B.includes(a)||B.push(a):f?(d[p]=[a],we(y,p)&&(y[p]=d[p])):(p.value=[a],n.k&&(d[n.k]=p.value))}else f?(d[p]=c,we(y,p)&&(y[p]=c)):h?(p.value=c,n.k&&(d[n.k]=c)):G("Invalid template ref type:",p,`(${typeof p})`)};c?(m.id=-1,on(m,o)):m()}else G("Invalid template ref type:",p,`(${typeof p})`)}}let jo,ws;function ls(n,s){n.appContext.config.performance&&xl()&&ws.mark(`vue-${s}-${n.uid}`),U8(n,s,xl()?ws.now():Date.now())}function rs(n,s){if(n.appContext.config.performance&&xl()){const o=`vue-${s}-${n.uid}`,t=o+":end";ws.mark(t),ws.measure(`<${or(n,n.type)}> ${s}`,o,t),ws.clearMarks(o),ws.clearMarks(t)}W8(n,s,xl()?ws.now():Date.now())}function xl(){return jo!==void 0||(typeof window<"u"&&window.performance?(jo=!0,ws=window.performance):jo=!1),jo}function Tm(){const n=[];if(n.length){const s=n.length>1;console.warn(`Feature flag${s?"s":""} ${n.join(", ")} ${s?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const on=em;function Lm(n){return Mm(n)}function Mm(n,s){Tm();const o=uu();o.__VUE__=!0,Mu(o.__VUE_DEVTOOLS_GLOBAL_HOOK__,o);const{insert:t,remove:l,patchProp:a,createElement:c,createText:i,createComment:p,setText:u,setElementText:d,parentNode:y,nextSibling:f,setScopeId:h=An,insertStaticContent:m}=n,B=(_,A,E,M=null,L=null,W=null,Q=!1,V=null,z=Fs?!1:!!A.dynamicChildren)=>{if(_===A)return;_&&!Es(_,A)&&(M=le(_),_n(_,L,W,!0),_=null),A.patchFlag===-2&&(z=!1,A.dynamicChildren=null);const{type:H,ref:ae,shapeFlag:re}=A;switch(H){case Vt:g(_,A,E,M);break;case en:k(_,A,E,M);break;case dl:_==null?v(A,E,M,Q):D(_,A,E,Q);break;case Oe:De(_,A,E,M,L,W,Q,V,z);break;default:re&1?N(_,A,E,M,L,W,Q,V,z):re&6?Pe(_,A,E,M,L,W,Q,V,z):re&64||re&128?H.process(_,A,E,M,L,W,Q,V,z,$e):G("Invalid VNode type:",H,`(${typeof H})`)}ae!=null&&L&&na(ae,_&&_.ref,W,A||_,!A)},g=(_,A,E,M)=>{if(_==null)t(A.el=i(A.children),E,M);else{const L=A.el=_.el;A.children!==_.children&&u(L,A.children)}},k=(_,A,E,M)=>{_==null?t(A.el=p(A.children||""),E,M):A.el=_.el},v=(_,A,E,M)=>{[_.el,_.anchor]=m(_.children,A,E,M,_.el,_.anchor)},D=(_,A,E,M)=>{if(A.children!==_.children){const L=f(_.anchor);T(_),[A.el,A.anchor]=m(A.children,E,L,M)}else A.el=_.el,A.anchor=_.anchor},w=({el:_,anchor:A},E,M)=>{let L;for(;_&&_!==A;)L=f(_),t(_,E,M),_=L;t(A,E,M)},T=({el:_,anchor:A})=>{let E;for(;_&&_!==A;)E=f(_),l(_),_=E;l(A)},N=(_,A,E,M,L,W,Q,V,z)=>{Q=Q||A.type==="svg",_==null?Y(A,E,M,L,W,Q,V,z):te(_,A,L,W,Q,V,z)},Y=(_,A,E,M,L,W,Q,V)=>{let z,H;const{type:ae,props:re,shapeFlag:ce,transition:_e,dirs:Ee}=_;if(z=_.el=c(_.type,W,re&&re.is,re),ce&8?d(z,_.children):ce&16&&K(_.children,z,null,M,L,W&&ae!=="foreignObject",Q,V),Ee&&Gs(_,null,M,"created"),O(z,_,_.scopeId,Q,M),re){for(const qe in re)qe!=="value"&&!il(qe)&&a(z,qe,null,re[qe],W,_.children,M,L,Z);"value"in re&&a(z,"value",null,re.value),(H=re.onVnodeBeforeMount)&&In(H,M,_)}Object.defineProperty(z,"__vnode",{value:_,enumerable:!1}),Object.defineProperty(z,"__vueParentComponent",{value:M,enumerable:!1}),Ee&&Gs(_,null,M,"beforeMount");const He=(!L||L&&!L.pendingBranch)&&_e&&!_e.persisted;He&&_e.beforeEnter(z),t(z,A,E),((H=re&&re.onVnodeMounted)||He||Ee)&&on(()=>{H&&In(H,M,_),He&&_e.enter(z),Ee&&Gs(_,null,M,"mounted")},L)},O=(_,A,E,M,L)=>{if(E&&h(_,E),M)for(let W=0;W<M.length;W++)h(_,M[W]);if(L){let W=L.subTree;if(W.patchFlag>0&&W.patchFlag&2048&&(W=Hu(W.children)||W),A===W){const Q=L.vnode;O(_,Q,Q.scopeId,Q.slotScopeIds,L.parent)}}},K=(_,A,E,M,L,W,Q,V,z=0)=>{for(let H=z;H<_.length;H++){const ae=_[H]=V?Ds(_[H]):Hn(_[H]);B(null,ae,A,E,M,L,W,Q,V)}},te=(_,A,E,M,L,W,Q)=>{const V=A.el=_.el;let{patchFlag:z,dynamicChildren:H,dirs:ae}=A;z|=_.patchFlag&16;const re=_.props||Ge,ce=A.props||Ge;let _e;E&&Ns(E,!1),(_e=ce.onVnodeBeforeUpdate)&&In(_e,E,A,_),ae&&Gs(A,_,E,"beforeUpdate"),E&&Ns(E,!0),Fs&&(z=0,Q=!1,H=null);const Ee=L&&A.type!=="foreignObject";if(H?(ue(_.dynamicChildren,H,V,E,M,Ee,W),E&&E.type.__hmrId&&at(_,A)):Q||ve(_,A,V,null,E,M,Ee,W,!1),z>0){if(z&16)X(V,A,re,ce,E,M,L);else if(z&2&&re.class!==ce.class&&a(V,"class",null,ce.class,L),z&4&&a(V,"style",re.style,ce.style,L),z&8){const He=A.dynamicProps;for(let qe=0;qe<He.length;qe++){const Ye=He[qe],qn=re[Ye],_o=ce[Ye];(_o!==qn||Ye==="value")&&a(V,Ye,qn,_o,L,_.children,E,M,Z)}}z&1&&_.children!==A.children&&d(V,A.children)}else!Q&&H==null&&X(V,A,re,ce,E,M,L);((_e=ce.onVnodeUpdated)||ae)&&on(()=>{_e&&In(_e,E,A,_),ae&&Gs(A,_,E,"updated")},M)},ue=(_,A,E,M,L,W,Q)=>{for(let V=0;V<A.length;V++){const z=_[V],H=A[V],ae=z.el&&(z.type===Oe||!Es(z,H)||z.shapeFlag&70)?y(z.el):E;B(z,H,ae,null,M,L,W,Q,!0)}},X=(_,A,E,M,L,W,Q)=>{if(E!==M){if(E!==Ge)for(const V in E)!il(V)&&!(V in M)&&a(_,V,E[V],null,Q,A.children,L,W,Z);for(const V in M){if(il(V))continue;const z=M[V],H=E[V];z!==H&&V!=="value"&&a(_,V,H,z,Q,A.children,L,W,Z)}"value"in M&&a(_,"value",E.value,M.value)}},De=(_,A,E,M,L,W,Q,V,z)=>{const H=A.el=_?_.el:i(""),ae=A.anchor=_?_.anchor:i("");let{patchFlag:re,dynamicChildren:ce,slotScopeIds:_e}=A;(Fs||re&2048)&&(re=0,z=!1,ce=null),_e&&(V=V?V.concat(_e):_e),_==null?(t(H,E,M),t(ae,E,M),K(A.children,E,ae,L,W,Q,V,z)):re>0&&re&64&&ce&&_.dynamicChildren?(ue(_.dynamicChildren,ce,E,L,W,Q,V),L&&L.type.__hmrId?at(_,A):(A.key!=null||L&&A===L.subTree)&&at(_,A,!0)):ve(_,A,E,ae,L,W,Q,V,z)},Pe=(_,A,E,M,L,W,Q,V,z)=>{A.slotScopeIds=V,_==null?A.shapeFlag&512?L.ctx.activate(A,E,M,Q,z):xe(A,E,M,L,W,Q,z):Ne(_,A,z)},xe=(_,A,E,M,L,W,Q)=>{const V=_.component=Ym(_,M,L);if(V.type.__hmrId&&L8(V),pl(_),ls(V,"mount"),Nt(_)&&(V.ctx.renderer=$e),ls(V,"init"),Qm(V),rs(V,"init"),V.asyncDep){if(L&&L.registerDep(V,ee),!_.el){const z=V.subTree=q(en);k(null,z,A,E)}return}ee(V,_,A,E,L,W,Q),ul(),rs(V,"mount")},Ne=(_,A,E)=>{const M=A.component=_.component;if(J8(_,A,E))if(M.asyncDep&&!M.asyncResolved){pl(A),pe(M,A,E),ul();return}else M.next=A,O8(M.update),M.update();else A.el=_.el,M.vnode=A},ee=(_,A,E,M,L,W,Q)=>{const V=()=>{if(_.isMounted){let{next:ae,bu:re,u:ce,parent:_e,vnode:Ee}=_,He=ae,qe;pl(ae||_.vnode),Ns(_,!1),ae?(ae.el=Ee.el,pe(_,ae,Q)):ae=Ee,re&&ks(re),(qe=ae.props&&ae.props.onVnodeBeforeUpdate)&&In(qe,_e,ae,Ee),Ns(_,!0),ls(_,"render");const Ye=pr(_);rs(_,"render");const qn=_.subTree;_.subTree=Ye,ls(_,"patch"),B(qn,Ye,y(qn.el),le(qn),_,L,W),rs(_,"patch"),ae.el=Ye.el,He===null&&X8(_,Ye.el),ce&&on(ce,L),(qe=ae.props&&ae.props.onVnodeUpdated)&&on(()=>In(qe,_e,ae,Ee),L),qu(_),ul()}else{let ae;const{el:re,props:ce}=A,{bm:_e,m:Ee,parent:He}=_,qe=xo(A);if(Ns(_,!1),_e&&ks(_e),!qe&&(ae=ce&&ce.onVnodeBeforeMount)&&In(ae,He,A),Ns(_,!0),re&&de){const Ye=()=>{ls(_,"render"),_.subTree=pr(_),rs(_,"render"),ls(_,"hydrate"),de(re,_.subTree,_,L,null),rs(_,"hydrate")};qe?A.type.__asyncLoader().then(()=>!_.isUnmounted&&Ye()):Ye()}else{ls(_,"render");const Ye=_.subTree=pr(_);rs(_,"render"),ls(_,"patch"),B(null,Ye,E,M,_,L,W),rs(_,"patch"),A.el=Ye.el}if(Ee&&on(Ee,L),!qe&&(ae=ce&&ce.onVnodeMounted)){const Ye=A;on(()=>In(ae,He,Ye),L)}(A.shapeFlag&256||He&&xo(He.vnode)&&He.vnode.shapeFlag&256)&&_.a&&on(_.a,L),_.isMounted=!0,Kr(_),A=E=M=null}},z=_.effect=new Wa(V,()=>zl(H),_.scope),H=_.update=()=>z.run();H.id=_.uid,Ns(_,!0),z.onTrack=_.rtc?ae=>ks(_.rtc,ae):void 0,z.onTrigger=_.rtg?ae=>ks(_.rtg,ae):void 0,H.ownerInstance=_,H()},pe=(_,A,E)=>{A.component=_;const M=_.vnode.props;_.vnode=A,_.next=null,km(_,A.props,M,E),Im(_,A.children,E),po(),zc(),uo()},ve=(_,A,E,M,L,W,Q,V,z=!1)=>{const H=_&&_.children,ae=_?_.shapeFlag:0,re=A.children,{patchFlag:ce,shapeFlag:_e}=A;if(ce>0){if(ce&128){Dn(H,re,E,M,L,W,Q,V,z);return}else if(ce&256){Me(H,re,E,M,L,W,Q,V,z);return}}_e&8?(ae&16&&Z(H,L,W),re!==H&&d(E,re)):ae&16?_e&16?Dn(H,re,E,M,L,W,Q,V,z):Z(H,L,W,!0):(ae&8&&d(E,""),_e&16&&K(re,E,M,L,W,Q,V,z))},Me=(_,A,E,M,L,W,Q,V,z)=>{_=_||Eo,A=A||Eo;const H=_.length,ae=A.length,re=Math.min(H,ae);let ce;for(ce=0;ce<re;ce++){const _e=A[ce]=z?Ds(A[ce]):Hn(A[ce]);B(_[ce],_e,E,null,L,W,Q,V,z)}H>ae?Z(_,L,W,!0,!1,re):K(A,E,M,L,W,Q,V,z,re)},Dn=(_,A,E,M,L,W,Q,V,z)=>{let H=0;const ae=A.length;let re=_.length-1,ce=ae-1;for(;H<=re&&H<=ce;){const _e=_[H],Ee=A[H]=z?Ds(A[H]):Hn(A[H]);if(Es(_e,Ee))B(_e,Ee,E,null,L,W,Q,V,z);else break;H++}for(;H<=re&&H<=ce;){const _e=_[re],Ee=A[ce]=z?Ds(A[ce]):Hn(A[ce]);if(Es(_e,Ee))B(_e,Ee,E,null,L,W,Q,V,z);else break;re--,ce--}if(H>re){if(H<=ce){const _e=ce+1,Ee=_e<ae?A[_e].el:M;for(;H<=ce;)B(null,A[H]=z?Ds(A[H]):Hn(A[H]),E,Ee,L,W,Q,V,z),H++}}else if(H>ce)for(;H<=re;)_n(_[H],L,W,!0),H++;else{const _e=H,Ee=H,He=new Map;for(H=Ee;H<=ce;H++){const pn=A[H]=z?Ds(A[H]):Hn(A[H]);pn.key!=null&&(He.has(pn.key)&&G("Duplicate keys found during update:",JSON.stringify(pn.key),"Make sure keys are unique."),He.set(pn.key,H))}let qe,Ye=0;const qn=ce-Ee+1;let _o=!1,Lc=0;const Ho=new Array(qn);for(H=0;H<qn;H++)Ho[H]=0;for(H=_e;H<=re;H++){const pn=_[H];if(Ye>=qn){_n(pn,L,W,!0);continue}let zn;if(pn.key!=null)zn=He.get(pn.key);else for(qe=Ee;qe<=ce;qe++)if(Ho[qe-Ee]===0&&Es(pn,A[qe])){zn=qe;break}zn===void 0?_n(pn,L,W,!0):(Ho[zn-Ee]=H+1,zn>=Lc?Lc=zn:_o=!0,B(pn,A[zn],E,null,L,W,Q,V,z),Ye++)}const Mc=_o?qm(Ho):Eo;for(qe=Mc.length-1,H=qn-1;H>=0;H--){const pn=Ee+H,zn=A[pn],qc=pn+1<ae?A[pn+1].el:M;Ho[H]===0?B(null,zn,E,qc,L,W,Q,V,z):_o&&(qe<0||H!==Mc[qe]?ln(zn,E,qc,2):qe--)}}},ln=(_,A,E,M,L=null)=>{const{el:W,type:Q,transition:V,children:z,shapeFlag:H}=_;if(H&6){ln(_.component.subTree,A,E,M);return}if(H&128){_.suspense.move(A,E,M);return}if(H&64){Q.move(_,A,E,$e);return}if(Q===Oe){t(W,A,E);for(let re=0;re<z.length;re++)ln(z[re],A,E,M);t(_.anchor,A,E);return}if(Q===dl){w(_,A,E);return}if(M!==2&&H&1&&V)if(M===0)V.beforeEnter(W),t(W,A,E),on(()=>V.enter(W),L);else{const{leave:re,delayLeave:ce,afterLeave:_e}=V,Ee=()=>t(W,A,E),He=()=>{re(W,()=>{Ee(),_e&&_e()})};ce?ce(W,Ee,He):He()}else t(W,A,E)},_n=(_,A,E,M=!1,L=!1)=>{const{type:W,props:Q,ref:V,children:z,dynamicChildren:H,shapeFlag:ae,patchFlag:re,dirs:ce}=_;if(V!=null&&na(V,null,E,_,!0),ae&256){A.ctx.deactivate(_);return}const _e=ae&1&&ce,Ee=!xo(_);let He;if(Ee&&(He=Q&&Q.onVnodeBeforeUnmount)&&In(He,A,_),ae&6)oe(_.component,E,M);else{if(ae&128){_.suspense.unmount(E,M);return}_e&&Gs(_,null,A,"beforeUnmount"),ae&64?_.type.remove(_,A,E,L,$e,M):H&&(W!==Oe||re>0&&re&64)?Z(H,A,E,!1,!0):(W===Oe&&re&384||!L&&ae&16)&&Z(z,A,E),M&&_s(_)}(Ee&&(He=Q&&Q.onVnodeUnmounted)||_e)&&on(()=>{He&&In(He,A,_),_e&&Gs(_,null,A,"unmounted")},E)},_s=_=>{const{type:A,el:E,anchor:M,transition:L}=_;if(A===Oe){_.patchFlag>0&&_.patchFlag&2048&&L&&!L.persisted?_.children.forEach(Q=>{Q.type===en?l(Q.el):_s(Q)}):S(E,M);return}if(A===dl){T(_);return}const W=()=>{l(E),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(_.shapeFlag&1&&L&&!L.persisted){const{leave:Q,delayLeave:V}=L,z=()=>Q(E,W);V?V(_.el,W,z):z()}else W()},S=(_,A)=>{let E;for(;_!==A;)E=f(_),l(_),_=E;l(A)},oe=(_,A,E)=>{_.type.__hmrId&&M8(_);const{bum:M,scope:L,update:W,subTree:Q,um:V}=_;M&&ks(M),L.stop(),W&&(W.active=!1,_n(Q,_,A,E)),V&&on(V,A),on(()=>{_.isUnmounted=!0},A),A&&A.pendingBranch&&!A.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===A.pendingId&&(A.deps--,A.deps===0&&A.resolve()),V8(_)},Z=(_,A,E,M=!1,L=!1,W=0)=>{for(let Q=W;Q<_.length;Q++)_n(_[Q],A,E,M,L)},le=_=>_.shapeFlag&6?le(_.component.subTree):_.shapeFlag&128?_.suspense.next():f(_.anchor||_.el),be=(_,A,E)=>{_==null?A._vnode&&_n(A._vnode,null,null,!0):B(A._vnode||null,_,A,null,null,null,E),zc(),Ou(),A._vnode=_},$e={p:B,um:_n,m:ln,r:_s,mt:xe,mc:K,pc:ve,pbc:ue,n:le,o:n};let he,de;return s&&([he,de]=s($e)),{render:be,hydrate:he,createApp:Om(be,he)}}function Ns({effect:n,update:s},o){n.allowRecurse=s.allowRecurse=o}function at(n,s,o=!1){const t=n.children,l=s.children;if(ie(t)&&ie(l))for(let a=0;a<t.length;a++){const c=t[a];let i=l[a];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=l[a]=Ds(l[a]),i.el=c.el),o||at(c,i)),i.type===Vt&&(i.el=c.el),i.type===en&&!i.el&&(i.el=c.el)}}function qm(n){const s=n.slice(),o=[0];let t,l,a,c,i;const p=n.length;for(t=0;t<p;t++){const u=n[t];if(u!==0){if(l=o[o.length-1],n[l]<u){s[t]=l,o.push(t);continue}for(a=0,c=o.length-1;a<c;)i=a+c>>1,n[o[i]]<u?a=i+1:c=i;u<n[o[a]]&&(a>0&&(s[t]=o[a-1]),o[a]=t)}}for(a=o.length,c=o[a-1];a-- >0;)o[a]=c,c=s[c];return o}const Gm=n=>n.__isTeleport,Fo=n=>n&&(n.disabled||n.disabled===""),ci=n=>typeof SVGElement<"u"&&n instanceof SVGElement,sa=(n,s)=>{const o=n&&n.to;if(je(o))if(s){const t=s(o);return t||G(`Failed to locate Teleport target with selector "${o}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),t}else return G("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!o&&!Fo(n)&&G(`Invalid Teleport target: ${o}`),o},Nm={__isTeleport:!0,process(n,s,o,t,l,a,c,i,p,u){const{mc:d,pc:y,pbc:f,o:{insert:h,querySelector:m,createText:B,createComment:g}}=u,k=Fo(s.props);let{shapeFlag:v,children:D,dynamicChildren:w}=s;if(Fs&&(p=!1,w=null),n==null){const T=s.el=g("teleport start"),N=s.anchor=g("teleport end");h(T,o,t),h(N,o,t);const Y=s.target=sa(s.props,m),O=s.targetAnchor=B("");Y?(h(O,Y),c=c||ci(Y)):k||G("Invalid Teleport target on mount:",Y,`(${typeof Y})`);const K=(te,ue)=>{v&16&&d(D,te,ue,l,a,c,i,p)};k?K(o,N):Y&&K(Y,O)}else{s.el=n.el;const T=s.anchor=n.anchor,N=s.target=n.target,Y=s.targetAnchor=n.targetAnchor,O=Fo(n.props),K=O?o:N,te=O?T:Y;if(c=c||ci(N),w?(f(n.dynamicChildren,w,K,l,a,c,i),at(n,s,!0)):p||y(n,s,K,te,l,a,c,i,!1),k)O||sl(s,o,T,u,1);else if((s.props&&s.props.to)!==(n.props&&n.props.to)){const ue=s.target=sa(s.props,m);ue?sl(s,ue,null,u,0):G("Invalid Teleport target on update:",N,`(${typeof N})`)}else O&&sl(s,N,Y,u,1)}id(s)},remove(n,s,o,t,{um:l,o:{remove:a}},c){const{shapeFlag:i,children:p,anchor:u,targetAnchor:d,target:y,props:f}=n;if(y&&a(d),(c||!Fo(f))&&(a(u),i&16))for(let h=0;h<p.length;h++){const m=p[h];l(m,s,o,!0,!!m.dynamicChildren)}},move:sl,hydrate:Hm};function sl(n,s,o,{o:{insert:t},m:l},a=2){a===0&&t(n.targetAnchor,s,o);const{el:c,anchor:i,shapeFlag:p,children:u,props:d}=n,y=a===2;if(y&&t(c,s,o),(!y||Fo(d))&&p&16)for(let f=0;f<u.length;f++)l(u[f],s,o,2);y&&t(i,s,o)}function Hm(n,s,o,t,l,a,{o:{nextSibling:c,parentNode:i,querySelector:p}},u){const d=s.target=sa(s.props,p);if(d){const y=d._lpa||d.firstChild;if(s.shapeFlag&16)if(Fo(s.props))s.anchor=u(c(n),s,i(n),o,t,l,a),s.targetAnchor=y;else{s.anchor=c(n);let f=y;for(;f;)if(f=c(f),f&&f.nodeType===8&&f.data==="teleport anchor"){s.targetAnchor=f,d._lpa=s.targetAnchor&&c(s.targetAnchor);break}u(y,s,d,o,t,l,a)}id(s)}return s.anchor&&c(s.anchor)}const jm=Nm;function id(n){const s=n.ctx;if(s&&s.ut){let o=n.children[0].el;for(;o!==n.targetAnchor;)o.nodeType===1&&o.setAttribute("data-v-owner",s.uid),o=o.nextSibling;s.ut()}}const Oe=Symbol("Fragment"),Vt=Symbol("Text"),en=Symbol("Comment"),dl=Symbol("Static"),ct=[];let jn=null;function C(n=!1){ct.push(jn=n?null:[])}function Vm(){ct.pop(),jn=ct[ct.length-1]||null}let bt=1;function ii(n){bt+=n}function pd(n){return n.dynamicChildren=bt>0?jn||Eo:null,Vm(),bt>0&&jn&&jn.push(n),n}function se(n,s,o,t,l,a){return pd(e(n,s,o,t,l,a,!0))}function R(n,s,o,t,l){return pd(q(n,s,o,t,l,!0))}function ms(n){return n?n.__v_isVNode===!0:!1}function Es(n,s){return s.shapeFlag&6&&vo.has(s.type)?(n.shapeFlag&=-257,s.shapeFlag&=-513,!1):n.type===s.type&&n.key===s.key}const Um=(...n)=>Wm(...n),nr="__vInternal",ud=({key:n})=>n??null,yl=({ref:n,ref_key:s,ref_for:o})=>n!=null?je(n)||Re(n)||fe(n)?{i:Je,r:n,k:s,f:!!o}:n:null;function e(n,s=null,o=null,t=0,l=null,a=n===Oe?0:1,c=!1,i=!1){const p={__v_isVNode:!0,__v_skip:!0,type:n,props:s,key:s&&ud(s),ref:s&&yl(s),scopeId:Zl,slotScopeIds:null,children:o,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:t,dynamicProps:l,dynamicChildren:null,appContext:null,ctx:Je};return i?(rc(p,o),a&128&&n.normalize(p)):o&&(p.shapeFlag|=je(o)?8:16),p.key!==p.key&&G("VNode created with invalid key (NaN). VNode type:",p.type),bt>0&&!c&&jn&&(p.patchFlag>0||a&6)&&p.patchFlag!==32&&jn.push(p),p}const q=Um;function Wm(n,s=null,o=null,t=0,l=null,a=!1){if((!n||n===ym)&&(n||G(`Invalid vnode type when creating vnode: ${n}.`),n=en),ms(n)){const i=Un(n,s,!0);return o&&rc(i,o),bt>0&&!a&&jn&&(i.shapeFlag&6?jn[jn.indexOf(n)]=i:jn.push(i)),i.patchFlag|=-2,i}if(hd(n)&&(n=n.__vccOpts),s){s=j(s);let{class:i,style:p}=s;i&&!je(i)&&(s.class=Ke(i)),Le(p)&&(bl(p)&&!ie(p)&&(p=Ue({},p)),s.style=Xe(p))}const c=je(n)?1:ju(n)?128:Gm(n)?64:Le(n)?4:fe(n)?2:0;return c&4&&bl(n)&&(n=me(n),G("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,n)),e(n,s,o,t,l,c,a,!0)}function j(n){return n?bl(n)||nr in n?Ue({},n):n:null}function Un(n,s,o=!1){const{props:t,ref:l,patchFlag:a,children:c}=n,i=s?ye(t||{},s):t;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:i,key:i&&ud(i),ref:s&&s.ref?o&&l?ie(l)?l.concat(yl(s)):[l,yl(s)]:yl(s):l,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a===-1&&ie(c)?c.map(dd):c,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:s&&n.type!==Oe?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Un(n.ssContent),ssFallback:n.ssFallback&&Un(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function dd(n){const s=Un(n);return ie(n.children)&&(s.children=n.children.map(dd)),s}function r(n=" ",s=0){return q(Vt,null,n,s)}function ke(n="",s=!1){return s?(C(),R(en,null,n)):q(en,null,n)}function Hn(n){return n==null||typeof n=="boolean"?q(en):ie(n)?q(Oe,null,n.slice()):typeof n=="object"?Ds(n):q(Vt,null,String(n))}function Ds(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Un(n)}function rc(n,s){let o=0;const{shapeFlag:t}=n;if(s==null)s=null;else if(ie(s))o=16;else if(typeof s=="object")if(t&65){const l=s.default;l&&(l._c&&(l._d=!1),rc(n,l()),l._c&&(l._d=!0));return}else{o=32;const l=s._;!l&&!(nr in s)?s._ctx=Je:l===3&&Je&&(Je.slots._===1?s._=1:(s._=2,n.patchFlag|=1024))}else fe(s)?(s={default:s,_ctx:Je},o=32):(s=String(s),t&64?(o=16,s=[r(s)]):o=8);n.children=s,n.shapeFlag|=o}function ye(...n){const s={};for(let o=0;o<n.length;o++){const t=n[o];for(const l in t)if(l==="class")s.class!==t.class&&(s.class=Ke([s.class,t.class]));else if(l==="style")s.style=Xe([s.style,t.style]);else if(Mt(l)){const a=s[l],c=t[l];c&&a!==c&&!(ie(a)&&a.includes(c))&&(s[l]=a?[].concat(a,c):c)}else l!==""&&(s[l]=t[l])}return s}function In(n,s,o,t=null){Tn(n,s,7,[o,t])}const Km=cd();let zm=0;function Ym(n,s,o){const t=n.type,l=(s?s.appContext:n.appContext)||Km,a={uid:zm++,vnode:n,type:t,parent:s,appContext:l,root:null,next:null,subTree:null,effect:null,update:null,scope:new du(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:s?s.provides:Object.create(l.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:od(t,l),emitsOptions:Nu(t,l),emit:null,emitted:null,propsDefaults:Ge,inheritAttrs:t.inheritAttrs,ctx:Ge,data:Ge,props:Ge,attrs:Ge,slots:Ge,refs:Ge,setupState:Ge,setupContext:null,suspense:o,suspenseId:o?o.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx=fm(a),a.root=s?s.root:a,a.emit=z8.bind(null,a),n.ce&&n.ce(a),a}let We=null;const Sn=()=>We||Je,Oo=n=>{We=n,n.scope.on()},lo=()=>{We&&We.scope.off(),We=null},Zm=qs("slot,component");function oa(n,s){const o=s.isNativeTag||au;(Zm(n)||o(n))&&G("Do not use built-in or reserved HTML elements as component id: "+n)}function yd(n){return n.vnode.shapeFlag&4}let kt=!1;function Qm(n,s=!1){kt=s;const{props:o,children:t}=n.vnode,l=yd(n);Dm(n,o,l,s),Rm(n,t);const a=l?Jm(n,s):void 0;return kt=!1,a}function Jm(n,s){var o;const t=n.type;{if(t.name&&oa(t.name,n.appContext.config),t.components){const a=Object.keys(t.components);for(let c=0;c<a.length;c++)oa(a[c],n.appContext.config)}if(t.directives){const a=Object.keys(t.directives);for(let c=0;c<a.length;c++)Qu(a[c])}t.compilerOptions&&Xm()&&G('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}n.accessCache=Object.create(null),n.proxy=Wl(new Proxy(n.ctx,ed)),mm(n);const{setup:l}=t;if(l){const a=n.setupContext=l.length>1?md(n):null;Oo(n),po();const c=ds(l,n,0,[ko(n.props),a]);if(uo(),lo(),Na(c)){if(c.then(lo,lo),s)return c.then(i=>{pi(n,i,s)}).catch(i=>{Kl(i,n,0)});if(n.asyncDep=c,!n.suspense){const i=(o=t.name)!==null&&o!==void 0?o:"Anonymous";G(`Component <${i}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else pi(n,c,s)}else fd(n,s)}function pi(n,s,o){fe(s)?n.type.__ssrInlineRender?n.ssrRender=s:n.render=s:Le(s)?(ms(s)&&G("setup() should not return VNodes directly - return a render function instead."),n.devtoolsRawSetupState=s,n.setupState=$u(s),hm(n)):s!==void 0&&G(`setup() should return an object. Received: ${s===null?"null":typeof s}`),fd(n,o)}let ta;const Xm=()=>!ta;function fd(n,s,o){const t=n.type;if(!n.render){if(!s&&ta&&!t.render){const l=t.template||tc(n).template;if(l){ls(n,"compile");const{isCustomElement:a,compilerOptions:c}=n.appContext.config,{delimiters:i,compilerOptions:p}=t,u=Ue(Ue({isCustomElement:a,delimiters:i},c),p);t.render=ta(l,u),rs(n,"compile")}}n.render=t.render||An}Oo(n),po(),Bm(n),uo(),lo(),!t.render&&n.render===An&&!s&&(t.template?G('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):G("Component is missing template or render function."))}function e5(n){return new Proxy(n.attrs,{get(s,o){return wl(),vn(n,"get","$attrs"),s[o]},set(){return G("setupContext.attrs is readonly."),!1},deleteProperty(){return G("setupContext.attrs is readonly."),!1}})}function md(n){const s=t=>{if(n.exposed&&G("expose() should be called only once per setup()."),t!=null){let l=typeof t;l==="object"&&(ie(t)?l="array":Re(t)&&(l="ref")),l!=="object"&&G(`expose() should be passed a plain object, received ${l}.`)}n.exposed=t||{}};let o;return Object.freeze({get attrs(){return o||(o=e5(n))},get slots(){return ko(n.slots)},get emit(){return(t,...l)=>n.emit(t,...l)},expose:s})}function sr(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy($u(Wl(n.exposed)),{get(s,o){if(o in s)return s[o];if(o in to)return to[o](n)},has(s,o){return o in s||o in to}}))}const n5=/(?:^|[-_])(\w)/g,s5=n=>n.replace(n5,s=>s.toUpperCase()).replace(/[-_]/g,"");function wt(n,s=!0){return fe(n)?n.displayName||n.name:n.name||s&&n.__name}function or(n,s,o=!1){let t=wt(s);if(!t&&s.__file){const l=s.__file.match(/([^/\\]+)\.\w+$/);l&&(t=l[1])}if(!t&&n&&n.parent){const l=a=>{for(const c in a)if(a[c]===s)return c};t=l(n.components||n.parent.type.components)||l(n.appContext.components)}return t?s5(t):o?"App":"Anonymous"}function hd(n){return fe(n)&&"__vccOpts"in n}const F=(n,s)=>w8(n,s,kt);function o5(){return t5().slots}function t5(){const n=Sn();return n||G("useContext() called without active instance."),n.setupContext||(n.setupContext=md(n))}function mn(n,s,o){const t=arguments.length;return t===2?Le(s)&&!ie(s)?ms(s)?q(n,null,[s]):q(n,s):q(n,null,s):(t>3?o=Array.prototype.slice.call(arguments,2):t===3&&ms(o)&&(o=[o]),q(n,s,o))}const l5=Symbol("ssrContext"),r5=()=>{{const n=$(l5);return n||G("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),n}};function mr(n){return!!(n&&n.__v_isShallow)}function a5(){if(typeof window>"u")return;const n={style:"color:#3ba776"},s={style:"color:#0b1bc9"},o={style:"color:#b62e24"},t={style:"color:#9d288c"},l={header(y){return Le(y)?y.__isVue?["div",n,"VueInstance"]:Re(y)?["div",{},["span",n,d(y)],"<",i(y.value),">"]:so(y)?["div",{},["span",n,mr(y)?"ShallowReactive":"Reactive"],"<",i(y),`>${Ls(y)?" (readonly)":""}`]:Ls(y)?["div",{},["span",n,mr(y)?"ShallowReadonly":"Readonly"],"<",i(y),">"]:null:null},hasBody(y){return y&&y.__isVue},body(y){if(y&&y.__isVue)return["div",{},...a(y.$)]}};function a(y){const f=[];y.type.props&&y.props&&f.push(c("props",me(y.props))),y.setupState!==Ge&&f.push(c("setup",y.setupState)),y.data!==Ge&&f.push(c("data",me(y.data)));const h=p(y,"computed");h&&f.push(c("computed",h));const m=p(y,"inject");return m&&f.push(c("injected",m)),f.push(["div",{},["span",{style:t.style+";opacity:0.66"},"$ (internal): "],["object",{object:y}]]),f}function c(y,f){return f=Ue({},f),Object.keys(f).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},y],["div",{style:"padding-left:1.25em"},...Object.keys(f).map(h=>["div",{},["span",t,h+": "],i(f[h],!1)])]]:["span",{}]}function i(y,f=!0){return typeof y=="number"?["span",s,y]:typeof y=="string"?["span",o,JSON.stringify(y)]:typeof y=="boolean"?["span",t,y]:Le(y)?["object",{object:f?me(y):y}]:["span",o,String(y)]}function p(y,f){const h=y.type;if(fe(h))return;const m={};for(const B in y.ctx)u(h,B,f)&&(m[B]=y.ctx[B]);return m}function u(y,f,h){const m=y[h];if(ie(m)&&m.includes(f)||Le(m)&&f in m||y.extends&&u(y.extends,f,h)||y.mixins&&y.mixins.some(B=>u(B,f,h)))return!0}function d(y){return mr(y)?"ShallowRef":y.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(l):window.devtoolsFormatters=[l]}const Fl="3.2.47",c5="http://www.w3.org/2000/svg",zs=typeof document<"u"?document:null,ui=zs&&zs.createElement("template"),i5={insert:(n,s,o)=>{s.insertBefore(n,o||null)},remove:n=>{const s=n.parentNode;s&&s.removeChild(n)},createElement:(n,s,o,t)=>{const l=s?zs.createElementNS(c5,n):zs.createElement(n,o?{is:o}:void 0);return n==="select"&&t&&t.multiple!=null&&l.setAttribute("multiple",t.multiple),l},createText:n=>zs.createTextNode(n),createComment:n=>zs.createComment(n),setText:(n,s)=>{n.nodeValue=s},setElementText:(n,s)=>{n.textContent=s},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>zs.querySelector(n),setScopeId(n,s){n.setAttribute(s,"")},insertStaticContent(n,s,o,t,l,a){const c=o?o.previousSibling:s.lastChild;if(l&&(l===a||l.nextSibling))for(;s.insertBefore(l.cloneNode(!0),o),!(l===a||!(l=l.nextSibling)););else{ui.innerHTML=t?`<svg>${n}</svg>`:n;const i=ui.content;if(t){const p=i.firstChild;for(;p.firstChild;)i.appendChild(p.firstChild);i.removeChild(p)}s.insertBefore(i,o)}return[c?c.nextSibling:s.firstChild,o?o.previousSibling:s.lastChild]}};function p5(n,s,o){const t=n._vtc;t&&(s=(s?[s,...t]:[...t]).join(" ")),s==null?n.removeAttribute("class"):o?n.setAttribute("class",s):n.className=s}function u5(n,s,o){const t=n.style,l=je(o);if(o&&!l){if(s&&!je(s))for(const a in s)o[a]==null&&la(t,a,"");for(const a in o)la(t,a,o[a])}else{const a=t.display;l?s!==o&&(t.cssText=o):s&&n.removeAttribute("style"),"_vod"in n&&(t.display=a)}}const d5=/[^\\];\s*$/,di=/\s*!important$/;function la(n,s,o){if(ie(o))o.forEach(t=>la(n,s,t));else if(o==null&&(o=""),d5.test(o)&&G(`Unexpected semicolon at the end of '${s}' style value: '${o}'`),s.startsWith("--"))n.setProperty(s,o);else{const t=y5(n,s);di.test(o)?n.setProperty(ys(t),o.replace(di,""),"important"):n[t]=o}}const yi=["Webkit","Moz","ms"],hr={};function y5(n,s){const o=hr[s];if(o)return o;let t=ns(s);if(t!=="filter"&&t in n)return hr[s]=t;t=co(t);for(let l=0;l<yi.length;l++){const a=yi[l]+t;if(a in n)return hr[s]=a}return s}const fi="http://www.w3.org/1999/xlink";function f5(n,s,o,t,l){if(t&&s.startsWith("xlink:"))o==null?n.removeAttributeNS(fi,s.slice(6,s.length)):n.setAttributeNS(fi,s,o);else{const a=Pf(s);o==null||a&&!lu(o)?n.removeAttribute(s):n.setAttribute(s,a?"":o)}}function m5(n,s,o,t,l,a,c){if(s==="innerHTML"||s==="textContent"){t&&c(t,l,a),n[s]=o??"";return}if(s==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=o;const p=o??"";(n.value!==p||n.tagName==="OPTION")&&(n.value=p),o==null&&n.removeAttribute(s);return}let i=!1;if(o===""||o==null){const p=typeof n[s];p==="boolean"?o=lu(o):o==null&&p==="string"?(o="",i=!0):p==="number"&&(o=0,i=!0)}try{n[s]=o}catch(p){i||G(`Failed setting prop "${s}" on <${n.tagName.toLowerCase()}>: value ${o} is invalid.`,p)}i&&n.removeAttribute(s)}function Do(n,s,o,t){n.addEventListener(s,o,t)}function h5(n,s,o,t){n.removeEventListener(s,o,t)}function _5(n,s,o,t,l=null){const a=n._vei||(n._vei={}),c=a[s];if(t&&c)c.value=t;else{const[i,p]=B5(s);if(t){const u=a[s]=C5(t,l);Do(n,i,u,p)}else c&&(h5(n,i,c,p),a[s]=void 0)}}const mi=/(?:Once|Passive|Capture)$/;function B5(n){let s;if(mi.test(n)){s={};let t;for(;t=n.match(mi);)n=n.slice(0,n.length-t[0].length),s[t[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):ys(n.slice(2)),s]}let _r=0;const g5=Promise.resolve(),A5=()=>_r||(g5.then(()=>_r=0),_r=Date.now());function C5(n,s){const o=t=>{if(!t._vts)t._vts=Date.now();else if(t._vts<=o.attached)return;Tn(v5(t,o.value),s,5,[t])};return o.value=n,o.attached=A5(),o}function v5(n,s){if(ie(s)){const o=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{o.call(n),n._stopped=!0},s.map(t=>l=>!l._stopped&&t&&t(l))}else return s}const hi=/^on[a-z]/,D5=(n,s,o,t,l=!1,a,c,i,p)=>{s==="class"?p5(n,t,l):s==="style"?u5(n,o,t):Mt(s)?gl(s)||_5(n,s,o,t,c):(s[0]==="."?(s=s.slice(1),!0):s[0]==="^"?(s=s.slice(1),!1):b5(n,s,t,l))?m5(n,s,t,a,c,i,p):(s==="true-value"?n._trueValue=t:s==="false-value"&&(n._falseValue=t),f5(n,s,t,l))};function b5(n,s,o,t){return t?!!(s==="innerHTML"||s==="textContent"||s in n&&hi.test(s)&&fe(o)):s==="spellcheck"||s==="draggable"||s==="translate"||s==="form"||s==="list"&&n.tagName==="INPUT"||s==="type"&&n.tagName==="TEXTAREA"||hi.test(s)&&je(o)?!1:s in n}const gs="transition",Vo="animation",_d={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},k5=Ue({},om.props,_d),Hs=(n,s=[])=>{ie(n)?n.forEach(o=>o(...s)):n&&n(...s)},_i=n=>n?ie(n)?n.some(s=>s.length>1):n.length>1:!1;function w5(n){const s={};for(const X in n)X in _d||(s[X]=n[X]);if(n.css===!1)return s;const{name:o="v",type:t,duration:l,enterFromClass:a=`${o}-enter-from`,enterActiveClass:c=`${o}-enter-active`,enterToClass:i=`${o}-enter-to`,appearFromClass:p=a,appearActiveClass:u=c,appearToClass:d=i,leaveFromClass:y=`${o}-leave-from`,leaveActiveClass:f=`${o}-leave-active`,leaveToClass:h=`${o}-leave-to`}=n,m=E5(l),B=m&&m[0],g=m&&m[1],{onBeforeEnter:k,onEnter:v,onEnterCancelled:D,onLeave:w,onLeaveCancelled:T,onBeforeAppear:N=k,onAppear:Y=v,onAppearCancelled:O=D}=s,K=(X,De,Pe)=>{Cs(X,De?d:i),Cs(X,De?u:c),Pe&&Pe()},te=(X,De)=>{X._isLeaving=!1,Cs(X,y),Cs(X,h),Cs(X,f),De&&De()},ue=X=>(De,Pe)=>{const xe=X?Y:v,Ne=()=>K(De,X,Pe);Hs(xe,[De,Ne]),Bi(()=>{Cs(De,X?p:a),as(De,X?d:i),_i(xe)||gi(De,t,B,Ne)})};return Ue(s,{onBeforeEnter(X){Hs(k,[X]),as(X,a),as(X,c)},onBeforeAppear(X){Hs(N,[X]),as(X,p),as(X,u)},onEnter:ue(!1),onAppear:ue(!0),onLeave(X,De){X._isLeaving=!0;const Pe=()=>te(X,De);as(X,y),gd(),as(X,f),Bi(()=>{X._isLeaving&&(Cs(X,y),as(X,h),_i(w)||gi(X,t,g,Pe))}),Hs(w,[X,Pe])},onEnterCancelled(X){K(X,!1),Hs(D,[X])},onAppearCancelled(X){K(X,!0),Hs(O,[X])},onLeaveCancelled(X){te(X),Hs(T,[X])}})}function E5(n){if(n==null)return null;if(Le(n))return[Br(n.enter),Br(n.leave)];{const s=Br(n);return[s,s]}}function Br(n){const s=Nf(n);return S8(s,"<transition> explicit duration"),s}function as(n,s){s.split(/\s+/).forEach(o=>o&&n.classList.add(o)),(n._vtc||(n._vtc=new Set)).add(s)}function Cs(n,s){s.split(/\s+/).forEach(t=>t&&n.classList.remove(t));const{_vtc:o}=n;o&&(o.delete(s),o.size||(n._vtc=void 0))}function Bi(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let $5=0;function gi(n,s,o,t){const l=n._endId=++$5,a=()=>{l===n._endId&&t()};if(o)return setTimeout(a,o);const{type:c,timeout:i,propCount:p}=Bd(n,s);if(!c)return t();const u=c+"end";let d=0;const y=()=>{n.removeEventListener(u,f),a()},f=h=>{h.target===n&&++d>=p&&y()};setTimeout(()=>{d<p&&y()},i+1),n.addEventListener(u,f)}function Bd(n,s){const o=window.getComputedStyle(n),t=m=>(o[m]||"").split(", "),l=t(`${gs}Delay`),a=t(`${gs}Duration`),c=Ai(l,a),i=t(`${Vo}Delay`),p=t(`${Vo}Duration`),u=Ai(i,p);let d=null,y=0,f=0;s===gs?c>0&&(d=gs,y=c,f=a.length):s===Vo?u>0&&(d=Vo,y=u,f=p.length):(y=Math.max(c,u),d=y>0?c>u?gs:Vo:null,f=d?d===gs?a.length:p.length:0);const h=d===gs&&/\b(transform|all)(,|$)/.test(t(`${gs}Property`).toString());return{type:d,timeout:y,propCount:f,hasTransform:h}}function Ai(n,s){for(;n.length<s.length;)n=n.concat(n);return Math.max(...s.map((o,t)=>Ci(o)+Ci(n[t])))}function Ci(n){return Number(n.slice(0,-1).replace(",","."))*1e3}function gd(){return document.body.offsetHeight}const Ad=new WeakMap,Cd=new WeakMap,vd={name:"TransitionGroup",props:Ue({},k5,{tag:String,moveClass:String}),setup(n,{slots:s}){const o=Sn(),t=Uu();let l,a;return Jl(()=>{if(!l.length)return;const c=n.moveClass||`${n.name||"v"}-move`;if(!P5(l[0].el,o.vnode.el,c))return;l.forEach(S5),l.forEach(R5);const i=l.filter(I5);gd(),i.forEach(p=>{const u=p.el,d=u.style;as(u,c),d.transform=d.webkitTransform=d.transitionDuration="";const y=u._moveCb=f=>{f&&f.target!==u||(!f||/transform$/.test(f.propertyName))&&(u.removeEventListener("transitionend",y),u._moveCb=null,Cs(u,c))};u.addEventListener("transitionend",y)})}),()=>{const c=me(n),i=w5(c);let p=c.tag||Oe;l=a,a=s.default?sc(s.default()):[];for(let u=0;u<a.length;u++){const d=a[u];d.key!=null?Po(d,Dt(d,i,t,o)):G("<TransitionGroup> children must be keyed.")}if(l)for(let u=0;u<l.length;u++){const d=l[u];Po(d,Dt(d,i,t,o)),Ad.set(d,d.el.getBoundingClientRect())}return q(p,null,a)}}},x5=n=>delete n.mode;vd.props;const F5=vd;function S5(n){const s=n.el;s._moveCb&&s._moveCb(),s._enterCb&&s._enterCb()}function R5(n){Cd.set(n,n.el.getBoundingClientRect())}function I5(n){const s=Ad.get(n),o=Cd.get(n),t=s.left-o.left,l=s.top-o.top;if(t||l){const a=n.el.style;return a.transform=a.webkitTransform=`translate(${t}px,${l}px)`,a.transitionDuration="0s",n}}function P5(n,s,o){const t=n.cloneNode();n._vtc&&n._vtc.forEach(c=>{c.split(/\s+/).forEach(i=>i&&t.classList.remove(i))}),o.split(/\s+/).forEach(c=>c&&t.classList.add(c)),t.style.display="none";const l=s.nodeType===1?s:s.parentNode;l.appendChild(t);const{hasTransform:a}=Bd(t);return l.removeChild(t),a}const vi=n=>{const s=n.props["onUpdate:modelValue"]||!1;return ie(s)?o=>ks(s,o):s};function O5(n){n.target.composing=!0}function Di(n){const s=n.target;s.composing&&(s.composing=!1,s.dispatchEvent(new Event("input")))}const T5={created(n,{modifiers:{lazy:s,trim:o,number:t}},l){n._assign=vi(l);const a=t||l.props&&l.props.type==="number";Do(n,s?"change":"input",c=>{if(c.target.composing)return;let i=n.value;o&&(i=i.trim()),a&&(i=Nr(i)),n._assign(i)}),o&&Do(n,"change",()=>{n.value=n.value.trim()}),s||(Do(n,"compositionstart",O5),Do(n,"compositionend",Di),Do(n,"change",Di))},mounted(n,{value:s}){n.value=s??""},beforeUpdate(n,{value:s,modifiers:{lazy:o,trim:t,number:l}},a){if(n._assign=vi(a),n.composing||document.activeElement===n&&n.type!=="range"&&(o||t&&n.value.trim()===s||(l||n.type==="number")&&Nr(n.value)===s))return;const c=s??"";n.value!==c&&(n.value=c)}},L5={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},bi=(n,s)=>o=>{if(!("key"in o))return;const t=ys(o.key);if(s.some(l=>l===t||L5[l]===t))return n(o)},Dd={beforeMount(n,{value:s},{transition:o}){n._vod=n.style.display==="none"?"":n.style.display,o&&s?o.beforeEnter(n):Uo(n,s)},mounted(n,{value:s},{transition:o}){o&&s&&o.enter(n)},updated(n,{value:s,oldValue:o},{transition:t}){!s!=!o&&(t?s?(t.beforeEnter(n),Uo(n,!0),t.enter(n)):t.leave(n,()=>{Uo(n,!1)}):Uo(n,s))},beforeUnmount(n,{value:s}){Uo(n,s)}};function Uo(n,s){n.style.display=s?n._vod:"none"}const M5=Ue({patchProp:D5},i5);let ki;function q5(){return ki||(ki=Lm(M5))}const G5=(...n)=>{const s=q5().createApp(...n);N5(s),H5(s);const{mount:o}=s;return s.mount=t=>{const l=j5(t);if(!l)return;const a=s._component;!fe(a)&&!a.render&&!a.template&&(a.template=l.innerHTML),l.innerHTML="";const c=o(l,!1,l instanceof SVGElement);return l instanceof Element&&(l.removeAttribute("v-cloak"),l.setAttribute("data-v-app","")),c},s};function N5(n){Object.defineProperty(n.config,"isNativeTag",{value:s=>tu(s)||Rf(s),writable:!1})}function H5(n){{const s=n.config.isCustomElement;Object.defineProperty(n.config,"isCustomElement",{get(){return s},set(){G("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const o=n.config.compilerOptions,t='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';Object.defineProperty(n.config,"compilerOptions",{get(){return G(t),o},set(){G(t)}})}}function j5(n){if(je(n)){const s=document.querySelector(n);return s||G(`Failed to mount app: mount target selector "${n}" returned null.`),s}return window.ShadowRoot&&n instanceof window.ShadowRoot&&n.mode==="closed"&&G('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),n}function V5(){a5()}V5();function ra(n,s={},o){for(const t in n){const l=n[t],a=o?`${o}:${t}`:t;typeof l=="object"&&l!==null?ra(l,s,a):typeof l=="function"&&(s[a]=l)}return s}function U5(n,s){return n.reduce((o,t)=>o.then(()=>t.apply(void 0,s)),Promise.resolve())}function W5(n,s){return Promise.all(n.map(o=>o.apply(void 0,s)))}function gr(n,s){for(const o of n)o(s)}class K5{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(s,o,t={}){if(!s||typeof o!="function")return()=>{};const l=s;let a;for(;this._deprecatedHooks[s];)a=this._deprecatedHooks[s],s=a.to;if(a&&!t.allowDeprecated){let c=a.message;c||(c=`${l} hook has been deprecated`+(a.to?`, please use ${a.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(c)||(console.warn(c),this._deprecatedMessages.add(c))}return this._hooks[s]=this._hooks[s]||[],this._hooks[s].push(o),()=>{o&&(this.removeHook(s,o),o=void 0)}}hookOnce(s,o){let t,l=(...a)=>(typeof t=="function"&&t(),t=void 0,l=void 0,o(...a));return t=this.hook(s,l),t}removeHook(s,o){if(this._hooks[s]){const t=this._hooks[s].indexOf(o);t!==-1&&this._hooks[s].splice(t,1),this._hooks[s].length===0&&delete this._hooks[s]}}deprecateHook(s,o){this._deprecatedHooks[s]=typeof o=="string"?{to:o}:o;const t=this._hooks[s]||[];this._hooks[s]=void 0;for(const l of t)this.hook(s,l)}deprecateHooks(s){Object.assign(this._deprecatedHooks,s);for(const o in s)this.deprecateHook(o,s[o])}addHooks(s){const o=ra(s),t=Object.keys(o).map(l=>this.hook(l,o[l]));return()=>{for(const l of t.splice(0,t.length))l()}}removeHooks(s){const o=ra(s);for(const t in o)this.removeHook(t,o[t])}callHook(s,...o){return this.callHookWith(U5,s,...o)}callHookParallel(s,...o){return this.callHookWith(W5,s,...o)}callHookWith(s,o,...t){const l=this._before||this._after?{name:o,args:t,context:{}}:void 0;this._before&&gr(this._before,l);const a=s(this._hooks[o]||[],t);return a instanceof Promise?a.finally(()=>{this._after&&l&&gr(this._after,l)}):(this._after&&l&&gr(this._after,l),a)}beforeEach(s){return this._before=this._before||[],this._before.push(s),()=>{const o=this._before.indexOf(s);o!==-1&&this._before.splice(o,1)}}afterEach(s){return this._after=this._after||[],this._after.push(s),()=>{const o=this._after.indexOf(s);o!==-1&&this._after.splice(o,1)}}}function z5(){return new K5}function Y5(n){return Array.isArray(n)?n:[n]}const bd=["title","script","style","noscript"],ac=["base","meta","link","style","script","noscript"],Z5=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],Q5=["base","title","titleTemplate","bodyAttrs","htmlAttrs"],J5=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"];function kd(n){let s=9;for(let o=0;o<n.length;)s=Math.imul(s^n.charCodeAt(o++),9**9);return((s^s>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Sl(n){return kd(`${n.tag}:${n.textContent||n.innerHTML||""}:${Object.entries(n.props).map(([s,o])=>`${s}:${String(o)}`).join(",")}`)}function X5(n){let s=9;for(const o of n)for(let t=0;t<o.length;)s=Math.imul(s^o.charCodeAt(t++),9**9);return((s^s>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function wd(n,s){const{props:o,tag:t}=n;if(Q5.includes(t))return t;if(t==="link"&&o.rel==="canonical")return"canonical";if(o.charset)return"charset";const l=["id"];t==="meta"&&l.push("name","property","http-equiv");for(const a of l)if(typeof o[a]<"u"){const c=String(o[a]);return s&&!s(c)?!1:`${t}:${a}:${c}`}return!1}const ol=(n,s=!1,o)=>{const{tag:t,$el:l}=n;l&&(Object.entries(t.props).forEach(([a,c])=>{c=String(c);const i=`attr:${a}`;if(a==="class"){if(!c)return;for(const p of c.split(" ")){const u=`${i}:${p}`;o&&o(n,u,()=>l.classList.remove(p)),l.classList.contains(p)||l.classList.add(p)}return}o&&!a.startsWith("data-h-")&&o(n,i,()=>l.removeAttribute(a)),(s||l.getAttribute(a)!==c)&&l.setAttribute(a,c)}),bd.includes(t.tag)&&(t.textContent&&t.textContent!==l.textContent?l.textContent=t.textContent:t.innerHTML&&t.innerHTML!==l.innerHTML&&(l.innerHTML=t.innerHTML)))};let Wo=!1;async function Ed(n,s={}){var f,h;const o={shouldRender:!0};if(await n.hooks.callHook("dom:beforeRender",o),!o.shouldRender)return;const t=s.document||n.resolvedOptions.document||window.document,l=(await n.resolveTags()).map(i);if(n.resolvedOptions.experimentalHashHydration&&(Wo=Wo||n._hash||!1,Wo)){const m=X5(l.map(B=>B.tag._h));if(Wo===m)return;Wo=m}const a=n._popSideEffectQueue();n.headEntries().map(m=>m._sde).forEach(m=>{Object.entries(m).forEach(([B,g])=>{a[B]=g})});const c=(m,B,g)=>{B=`${m.renderId}:${B}`,m.entry&&(m.entry._sde[B]=g),delete a[B]};function i(m){const B=n.headEntries().find(k=>k._i===m._e),g={renderId:m._d||Sl(m),$el:null,shouldRender:!0,tag:m,entry:B,markSideEffect:(k,v)=>c(g,k,v)};return g}const p=[],u={body:[],head:[]},d=m=>{n._elMap[m.renderId]=m.$el,p.push(m),c(m,"el",()=>{var B;(B=m.$el)==null||B.remove(),delete n._elMap[m.renderId]})};for(const m of l){if(await n.hooks.callHook("dom:beforeRenderTag",m),!m.shouldRender)continue;const{tag:B}=m;if(B.tag==="title"){t.title=B.textContent||"",p.push(m);continue}if(B.tag==="htmlAttrs"||B.tag==="bodyAttrs"){m.$el=t[B.tag==="htmlAttrs"?"documentElement":"body"],ol(m,!1,c),p.push(m);continue}if(m.$el=n._elMap[m.renderId],!m.$el&&B.key&&(m.$el=t.querySelector(`${(f=B.tagPosition)!=null&&f.startsWith("body")?"body":"head"} > ${B.tag}[data-h-${B._h}]`)),m.$el){m.tag._d&&ol(m),d(m);continue}u[(h=B.tagPosition)!=null&&h.startsWith("body")?"body":"head"].push(m)}const y={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(u).forEach(([m,B])=>{var k;if(!B.length)return;const g=(k=t==null?void 0:t[m])==null?void 0:k.children;if(g){for(const v of[...g].reverse()){const D=v.tagName.toLowerCase();if(!ac.includes(D))continue;const w=v.getAttributeNames().reduce((O,K)=>({...O,[K]:v.getAttribute(K)}),{}),T={tag:D,props:w};v.innerHTML&&(T.innerHTML=v.innerHTML);const N=Sl(T);let Y=B.findIndex(O=>(O==null?void 0:O.renderId)===N);if(Y===-1){const O=wd(T);Y=B.findIndex(K=>(K==null?void 0:K.tag._d)&&K.tag._d===O)}if(Y!==-1){const O=B[Y];O.$el=v,ol(O),d(O),delete B[Y]}}B.forEach(v=>{const D=v.tag.tagPosition||"head";y[D]=y[D]||t.createDocumentFragment(),v.$el||(v.$el=t.createElement(v.tag.tag),ol(v,!0)),y[D].appendChild(v.$el),d(v)})}}),y.head&&t.head.appendChild(y.head),y.bodyOpen&&t.body.insertBefore(y.bodyOpen,t.body.firstChild),y.bodyClose&&t.body.appendChild(y.bodyClose);for(const m of p)await n.hooks.callHook("dom:renderTag",m);Object.values(a).forEach(m=>m())}let Ar=null;async function $d(n,s={}){function o(){return Ar=null,Ed(n,s)}const t=s.delayFn||(l=>setTimeout(l,10));return Ar=Ar||new Promise(l=>t(()=>l(o())))}const eh=n=>({hooks:{"entries:updated":function(s){if(typeof(n==null?void 0:n.document)>"u"&&typeof window>"u")return;let o=n==null?void 0:n.delayFn;!o&&typeof requestAnimationFrame<"u"&&(o=requestAnimationFrame),$d(s,{document:(n==null?void 0:n.document)||window.document,delayFn:o})}}});function nh(n){var s;return((s=n==null?void 0:n.head.querySelector('meta[name="unhead:ssr"]'))==null?void 0:s.getAttribute("content"))||!1}const wi={critical:2,high:9,low:12,base:-1,title:1,meta:10};function Ei(n){if(typeof n.tagPriority=="number")return n.tagPriority;if(n.tag==="meta"){if(n.props.charset)return-2;if(n.props["http-equiv"]==="content-security-policy")return 0}const s=n.tagPriority||n.tag;return s in wi?wi[s]:10}const sh=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function oh(){return{hooks:{"tags:resolve":n=>{const s=o=>{var t;return(t=n.tags.find(l=>l._d===o))==null?void 0:t._p};for(const{prefix:o,offset:t}of sh)for(const l of n.tags.filter(a=>typeof a.tagPriority=="string"&&a.tagPriority.startsWith(o))){const a=s(l.tagPriority.replace(o,""));typeof a<"u"&&(l._p=a+t)}n.tags.sort((o,t)=>o._p-t._p).sort((o,t)=>Ei(o)-Ei(t))}}}}const $i=(n,s)=>n==null?s||null:typeof n=="function"?n(s):n.replace("%s",s??""),th=()=>({hooks:{"tags:resolve":n=>{const{tags:s}=n;let o=s.findIndex(l=>l.tag==="titleTemplate");const t=s.findIndex(l=>l.tag==="title");if(t!==-1&&o!==-1){const l=$i(s[o].textContent,s[t].textContent);l!==null?s[t].textContent=l||s[t].textContent:delete s[t]}else if(o!==-1){const l=$i(s[o].textContent);l!==null&&(s[o].textContent=l,s[o].tag="title",o=-1)}o!==-1&&delete s[o],n.tags=s.filter(Boolean)}}}),lh=()=>({hooks:{"tag:normalise":function({tag:n}){typeof n.props.body<"u"&&(n.tagPosition="bodyClose",delete n.props.body)}}}),xd=typeof window<"u",rh=()=>({hooks:{"tag:normalise":n=>{var a,c;const{tag:s,entry:o,resolvedOptions:t}=n;t.experimentalHashHydration===!0&&(s._h=Sl(s));const l=typeof s.props._dynamic<"u";!ac.includes(s.tag)||!s.key||xd||(c=(a=Sd())==null?void 0:a.resolvedOptions)!=null&&c.document||(o._m==="server"||l)&&(s._h=s._h||Sl(s),s.props[`data-h-${s._h}`]="")},"tags:resolve":n=>{n.tags=n.tags.map(s=>(delete s.props._dynamic,s))}}}),xi=["script","link","bodyAttrs"],ah=()=>{const n=(s,o)=>{const t={},l={};Object.entries(o.props).forEach(([c,i])=>{c.startsWith("on")&&typeof i=="function"?l[c]=i:t[c]=i});let a;return s==="dom"&&o.tag==="script"&&typeof t.src=="string"&&typeof l.onload<"u"&&(a=t.src,delete t.src),{props:t,eventHandlers:l,delayedSrc:a}};return{hooks:{"ssr:render":function(s){s.tags=s.tags.map(o=>(!xi.includes(o.tag)||!Object.entries(o.props).find(([t,l])=>t.startsWith("on")&&typeof l=="function")||(o.props=n("ssr",o).props),o))},"dom:beforeRenderTag":function(s){if(!xi.includes(s.tag.tag)||!Object.entries(s.tag.props).find(([a,c])=>a.startsWith("on")&&typeof c=="function"))return;const{props:o,eventHandlers:t,delayedSrc:l}=n("dom",s.tag);Object.keys(t).length&&(s.tag.props=o,s.tag._eventHandlers=t,s.tag._delayedSrc=l)},"dom:renderTag":function(s){const o=s.$el;if(!s.tag._eventHandlers||!o)return;const t=s.tag.tag==="bodyAttrs"&&typeof window<"u"?window:o;Object.entries(s.tag._eventHandlers).forEach(([l,a])=>{const c=`${s.tag._d||s.tag._p}:${l}`,i=l.slice(2).toLowerCase(),p=`data-h-${i}`;if(s.markSideEffect(c,()=>{}),o.hasAttribute(p))return;const u=a;o.setAttribute(p,""),t.addEventListener(i,u),s.entry&&(s.entry._sde[c]=()=>{t.removeEventListener(i,u),o.removeAttribute(p)})}),s.tag._delayedSrc&&o.setAttribute("src",s.tag._delayedSrc)}}}},ch=["templateParams","htmlAttrs","bodyAttrs"],ih=n=>{n=n||{};const s=n.dedupeKeys||["hid","vmid","key"];return{hooks:{"tag:normalise":function({tag:o}){s.forEach(l=>{o.props[l]&&(o.key=o.props[l],delete o.props[l])});const t=o.key?`${o.tag}:${o.key}`:wd(o);t&&(o._d=t)},"tags:resolve":function(o){const t={};o.tags.forEach(a=>{const c=a._d||a._p,i=t[c];if(i){let p=a==null?void 0:a.tagDuplicateStrategy;if(!p&&ch.includes(a.tag)&&(p="merge"),p==="merge"){const d=i.props;["class","style"].forEach(y=>{a.props[y]&&d[y]&&(y==="style"&&!d[y].endsWith(";")&&(d[y]+=";"),a.props[y]=`${d[y]} ${a.props[y]}`)}),t[c].props={...d,...a.props};return}else if(a._e===i._e){i._duped=i._duped||[],a._d=`${i._d}:${i._duped.length+1}`,i._duped.push(a);return}const u=Object.keys(a.props).length;if((u===0||u===1&&typeof a.props["data-h-key"]<"u")&&!a.innerHTML&&!a.textContent){delete t[c];return}}t[c]=a});const l=[];Object.values(t).forEach(a=>{const c=a._duped;delete a._duped,l.push(a),c&&l.push(...c)}),o.tags=l}}}};function Cr(n,s){const o=(l,a)=>{let c;return a==="pageTitle"||a==="s"?c=s.pageTitle:a.includes(".")?c=a.split(".").reduce((i,p)=>i[p]||"",s):c=s[a],c||""};let t=n.replace(/%(\w+\.+\w+)/g,o).replace(/%(\w+)/g,o).trim();return s.separator&&(t.endsWith(s.separator)&&(t=t.slice(0,-s.separator.length).trim()),t.startsWith(s.separator)&&(t=t.slice(s.separator.length).trim()),t=t.replace(new RegExp(`\\${s.separator}\\s*\\${s.separator}`,"g"),s.separator)),t}function ph(){return{hooks:{"tags:resolve":n=>{var a;const{tags:s}=n,o=(a=s.find(c=>c.tag==="title"))==null?void 0:a.textContent,t=s.findIndex(c=>c.tag==="templateParams"),l=t!==-1?s[t].textContent:{};l.pageTitle=l.pageTitle||o||"";for(const c of s)["titleTemplate","title"].includes(c.tag)&&typeof c.textContent=="string"?c.textContent=Cr(c.textContent,l):c.tag==="meta"&&typeof c.props.content=="string"?c.props.content=Cr(c.props.content,l):c.tag==="script"&&["application/json","application/ld+json"].includes(c.props.type)&&typeof c.innerHTML=="string"&&(c.innerHTML=Cr(c.innerHTML,l));n.tags=s.filter(c=>c.tag!=="templateParams")}}}}let Fd;const uh=n=>Fd=n,Sd=()=>Fd;async function dh(n,s){const o={tag:n,props:{}};return["title","titleTemplate","templateParams"].includes(n)?(o.textContent=s instanceof Promise?await s:s,o):typeof s=="string"?["script","noscript","style"].includes(n)?(n==="script"&&(/^(https?:)?\/\//.test(s)||s.startsWith("/"))?o.props.src=s:(o.innerHTML=s,o.key=kd(s)),o):!1:(o.props=await fh(n,{...s}),o.props.children&&(o.props.innerHTML=o.props.children),delete o.props.children,Object.keys(o.props).filter(t=>J5.includes(t)).forEach(t=>{(!["innerHTML","textContent"].includes(t)||bd.includes(o.tag))&&(o[t]=o.props[t]),delete o.props[t]}),["innerHTML","textContent"].forEach(t=>{if(o.tag==="script"&&typeof o[t]=="string"&&["application/ld+json","application/json"].includes(o.props.type))try{o[t]=JSON.parse(o[t])}catch{o[t]=""}typeof o[t]=="object"&&(o[t]=JSON.stringify(o[t]))}),o.props.class&&(o.props.class=yh(o.props.class)),o.props.content&&Array.isArray(o.props.content)?o.props.content.map(t=>({...o,props:{...o.props,content:t}})):o)}function yh(n){return typeof n=="object"&&!Array.isArray(n)&&(n=Object.keys(n).filter(s=>n[s])),(Array.isArray(n)?n.join(" "):n).split(" ").filter(s=>s.trim()).filter(Boolean).join(" ")}async function fh(n,s){for(const o of Object.keys(s)){const t=o.startsWith("data-");s[o]instanceof Promise&&(s[o]=await s[o]),String(s[o])==="true"?s[o]=t?"true":"":String(s[o])==="false"&&(t?s[o]="false":delete s[o])}return s}const mh=10;async function hh(n){const s=[];return Object.entries(n.resolvedInput).filter(([o,t])=>typeof t<"u"&&Z5.includes(o)).forEach(([o,t])=>{const l=Y5(t);s.push(...l.map(a=>dh(o,a)).flat())}),(await Promise.all(s)).flat().filter(Boolean).map((o,t)=>(o._e=n._i,o._p=(n._i<<mh)+t,o))}const _h=()=>[ih(),oh(),ph(),th(),rh(),ah(),lh()],Bh=(n={})=>[eh({document:n==null?void 0:n.document,delayFn:n==null?void 0:n.domDelayFn})];function gh(n={}){const s=Ah({...n,plugins:[...Bh(n),...(n==null?void 0:n.plugins)||[]]});return n.experimentalHashHydration&&s.resolvedOptions.document&&(s._hash=nh(s.resolvedOptions.document)),uh(s),s}function Ah(n={}){let s=[],o={},t=0;const l=z5();n!=null&&n.hooks&&l.addHooks(n.hooks),n.plugins=[..._h(),...(n==null?void 0:n.plugins)||[]],n.plugins.forEach(i=>i.hooks&&l.addHooks(i.hooks)),n.document=n.document||(xd?document:void 0);const a=()=>l.callHook("entries:updated",c),c={resolvedOptions:n,headEntries(){return s},get hooks(){return l},use(i){i.hooks&&l.addHooks(i.hooks)},push(i,p){const u={_i:t++,input:i,_sde:{}};return p!=null&&p.mode&&(u._m=p==null?void 0:p.mode),p!=null&&p.transform&&(u._t=p==null?void 0:p.transform),s.push(u),a(),{dispose(){s=s.filter(d=>d._i!==u._i?!0:(o={...o,...d._sde||{}},d._sde={},a(),!1))},patch(d){s=s.map(y=>(y._i===u._i&&(u.input=y.input=d,a()),y))}}},async resolveTags(){const i={tags:[],entries:[...s]};await l.callHook("entries:resolve",i);for(const p of i.entries){const u=p._t||(d=>d);p.resolvedInput=u(p.resolvedInput||p.input);for(const d of await hh(p)){const y={tag:d,entry:p,resolvedOptions:c.resolvedOptions};await l.callHook("tag:normalise",y),i.tags.push(y.tag)}}return await l.callHook("tags:resolve",i),i.tags},_popSideEffectQueue(){const i={...o};return o={},i},_elMap:{}};return c.hooks.callHook("init",c),c}function Ch(n){return typeof n=="function"?n():b(n)}function Rl(n,s=""){if(n instanceof Promise)return n;const o=Ch(n);if(!n||!o)return o;if(Array.isArray(o))return o.map(t=>Rl(t,s));if(typeof o=="object"){let t=!1;const l=Object.fromEntries(Object.entries(o).map(([a,c])=>a==="titleTemplate"||a.startsWith("on")?[a,b(c)]:((typeof c=="function"||Re(c))&&(t=!0),[a,Rl(c,a)])));return t&&ac.includes(String(s))&&(l._dynamic=!0),l}return o}const vh=Fl.startsWith("3"),Dh=typeof window<"u",Rd="usehead";function cc(){return Sn()&&$(Rd)||Sd()}function bh(n){return{install(o){vh&&(o.config.globalProperties.$unhead=n,o.config.globalProperties.$head=n,o.provide(Rd,n))}}.install}function kh(n={}){const s=gh({...n,domDelayFn:o=>setTimeout(()=>tn(()=>o()),10),plugins:[wh(),...(n==null?void 0:n.plugins)||[]]});return s.install=bh(s),s}const wh=()=>({hooks:{"entries:resolve":function(n){for(const s of n.entries)s.resolvedInput=Rl(s.input)}}});function Eh(n,s={}){const o=cc(),t=J(!1),l=J({});yo(()=>{l.value=t.value?{}:Rl(n)});const a=o.push(l.value,s);return Ae(l,i=>{a.patch(i)}),Sn()&&(Ht(()=>{a.dispose()}),Yu(()=>{t.value=!0}),zu(()=>{t.value=!1})),a}function $h(n,s={}){return cc().push(n,s)}function ic(n,s={}){var t;const o=cc();if(o){const l=Dh||!!((t=o.resolvedOptions)!=null&&t.document);return s.mode==="server"&&l||s.mode==="client"&&!l?void 0:l?Eh(n,s):$h(n,s)}}const xh=n=>ic({htmlAttrs:n});function Fh(n,s){const o=kh(s||{}),t={unhead:o,install(l){Fl.startsWith("3")&&(l.config.globalProperties.$head=o,l.provide("usehead",o))},use(l){o.use(l)},resolveTags(){return o.resolveTags()},headEntries(){return o.headEntries()},headTags(){return o.resolveTags()},push(l,a){return o.push(l,a)},addEntry(l,a){return o.push(l,a)},addHeadObjs(l,a){return o.push(l,a)},addReactiveEntry(l,a){const c=ic(l,a);return typeof c<"u"?c.dispose:()=>{}},removeHeadObjs(){},updateDOM(l,a){a?Ed(o,{document:l}):$d(o,{delayFn:c=>setTimeout(()=>c(),50),document:l})},internalHooks:o.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return o.addHeadObjs=t.addHeadObjs,o.updateDOM=t.updateDOM,o.hooks.hook("dom:beforeRender",l=>{for(const a of t.hooks["before:dom"])a()===!1&&(l.shouldRender=!1)}),n&&t.addHeadObjs(n),t}const it=Symbol("v-click-clicks"),Ys=Symbol("v-click-clicks-elements"),aa=Symbol("v-click-clicks-order-map"),pt=Symbol("v-click-clicks-disabled"),Id=Symbol("slidev-slide-scale"),I=Symbol("slidev-slidev-context"),Sh=Symbol("slidev-route"),Rh=Symbol("slidev-slide-context"),Ks="slidev-vclick-target",vr="slidev-vclick-hidden",Ih="slidev-vclick-fade",Dr="slidev-vclick-hidden-explicitly",Ko="slidev-vclick-current",tl="slidev-vclick-prior",Ph=["localhost","127.0.0.1"];let Oh=(n=21)=>crypto.getRandomValues(new Uint8Array(n)).reduce((s,o)=>(o&=63,o<36?s+=o.toString(36):o<62?s+=(o-26).toString(36).toUpperCase():o>62?s+="-":s+="_",s),"");function Th(n){return n=n??[],Array.isArray(n)?n:[n]}function ca(n,s){if(!n)return!1;const o=n.indexOf(s);return o>=0?(n.splice(o,1),!0):!1}function Lh(...n){let s,o,t;n.length===1?(s=0,t=1,[o]=n):[s,o,t=1]=n;const l=[];let a=s;for(;a<o;)l.push(a),a+=t||1;return l}function Mh(n){return n!=null}function qh(n,s){return Object.fromEntries(Object.entries(n).map(([o,t])=>s(o,t)).filter(Mh))}const tt={theme:"seriph",title:"Retrouvez la maîtrise de vos backends",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,export:{},info:`<h2>Slidev Starter Template</h2>
<p>Presentation slides for developers.</p>
<p>Learn more at <a href="https://sli.dev" target="_blank" rel="noopener">Sli.dev</a></p>
`,highlighter:"shiki",lineNumbers:!1,colorSchema:"light",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"PT Serif"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:['"PT Serif"',"ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"PT Mono"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["PT Serif","PT Mono"],provider:"google",local:[],italic:!0,weights:["400","700"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"unocss",presenter:!0,htmlAttrs:{},transition:"slide-left",background:!1,class:"text-center"},Se=tt,Ss=Se.aspectRatio??16/9,Rs=Se.canvasWidth??980,pc=Math.ceil(Rs/Ss),uc=F(()=>qh(Se.themeConfig||{},(n,s)=>[`--slidev-theme-${n}`,s]));function Mn(n,s,o){Object.defineProperty(n,s,{value:o,writable:!0,enumerable:!1})}const mo=Ve({page:0,clicks:0});let Gh=[],Nh=[];Mn(mo,"$syncUp",!0);Mn(mo,"$syncDown",!0);Mn(mo,"$paused",!1);Mn(mo,"$onSet",n=>Gh.push(n));Mn(mo,"$onPatch",n=>Nh.push(n));Mn(mo,"$patch",async()=>!1);function Pd(n,s,o=!1){const t=[];let l=!1,a=!1,c,i;const p=Ve(s);function u(h){t.push(h)}function d(h,m){p[h]!==m&&(clearTimeout(c),l=!0,p[h]=m,c=setTimeout(()=>l=!1,0))}function y(h){l||(clearTimeout(i),a=!0,Object.entries(h).forEach(([m,B])=>{p[m]=B}),i=setTimeout(()=>a=!1,0))}function f(h){let m;o?o&&window.addEventListener("storage",g=>{g&&g.key===h&&g.newValue&&y(JSON.parse(g.newValue))}):(m=new BroadcastChannel(h),m.addEventListener("message",g=>y(g.data)));function B(){!o&&m&&!a?m.postMessage(me(p)):o&&!a&&window.localStorage.setItem(h,JSON.stringify(p)),l||t.forEach(g=>g(p))}if(Ae(p,B,{deep:!0}),o){const g=window.localStorage.getItem(h);g&&y(JSON.parse(g))}}return{init:f,onPatch:u,patch:d,state:p}}const{init:Hh,onPatch:jh,patch:zo,state:br}=Pd(mo,{page:1,clicks:0,viewerPage:1,viewerClicks:0}),ho=Ve({});let Vh=[],Uh=[];Mn(ho,"$syncUp",!0);Mn(ho,"$syncDown",!0);Mn(ho,"$paused",!1);Mn(ho,"$onSet",n=>Vh.push(n));Mn(ho,"$onPatch",n=>Uh.push(n));Mn(ho,"$patch",async()=>!1);const{init:Wh,onPatch:Kh,patch:Od,state:Il}=Pd(ho,{},!1),zh="modulepreload",Yh=function(n){return"/regain-control-of-your-backends-with-sylius-and-api-platform/"+n},Fi={},Is=function(s,o,t){if(!o||o.length===0)return s();const l=document.getElementsByTagName("link");return Promise.all(o.map(a=>{if(a=Yh(a),a in Fi)return;Fi[a]=!0;const c=a.endsWith(".css"),i=c?'[rel="stylesheet"]':"";if(!!t)for(let d=l.length-1;d>=0;d--){const y=l[d];if(y.href===a&&(!c||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${i}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":zh,c||(u.as="script",u.crossOrigin=""),u.href=a,document.head.appendChild(u),c)return new Promise((d,y)=>{u.addEventListener("load",d),u.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>s())};var Si;const Wn=typeof window<"u",Zh=n=>typeof n<"u",Qh=Object.prototype.toString,Et=n=>typeof n=="function",Jh=n=>typeof n=="number",Td=n=>typeof n=="string",ia=n=>Qh.call(n)==="[object Object]",pa=()=>+Date.now(),So=()=>{},Xh=Wn&&((Si=window==null?void 0:window.navigator)==null?void 0:Si.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function rn(n){return typeof n=="function"?n():b(n)}function e_(n,s){function o(...t){return new Promise((l,a)=>{Promise.resolve(n(()=>s.apply(this,t),{fn:s,thisArg:this,args:t})).then(l).catch(a)})}return o}const Ld=n=>n();function n_(n=Ld){const s=J(!0);function o(){s.value=!1}function t(){s.value=!0}const l=(...a)=>{s.value&&n(...a)};return{isActive:Jn(s),pause:o,resume:t,eventFilter:l}}function s_(n){return n}function o_(n,s){var o;if(typeof n=="number")return n+s;const t=((o=n.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:o[0])||"",l=n.slice(t.length),a=parseFloat(t)+s;return Number.isNaN(a)?n:a+l}function t_(n,s){let o,t,l;const a=J(!0),c=()=>{a.value=!0,l()};Ae(n,c,{flush:"sync"});const i=Et(s)?s:s.get,p=Et(s)?void 0:s.set,u=xu((d,y)=>(t=d,l=y,{get(){return a.value&&(o=i(),a.value=!1),t(),o},set(f){p==null||p(f)}}));return Object.isExtensible(u)&&(u.trigger=c),u}function os(n){return Va()?(yu(n),!0):!1}function l_(n){if(!Re(n))return Ve(n);const s=new Proxy({},{get(o,t,l){return b(Reflect.get(n.value,t,l))},set(o,t,l){return Re(n.value[t])&&!Re(l)?n.value[t].value=l:n.value[t]=l,!0},deleteProperty(o,t){return Reflect.deleteProperty(n.value,t)},has(o,t){return Reflect.has(n.value,t)},ownKeys(){return Object.keys(n.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Ve(s)}function Md(n){return typeof n=="function"?F(n):J(n)}var r_=Object.defineProperty,a_=Object.defineProperties,c_=Object.getOwnPropertyDescriptors,Ri=Object.getOwnPropertySymbols,i_=Object.prototype.hasOwnProperty,p_=Object.prototype.propertyIsEnumerable,Ii=(n,s,o)=>s in n?r_(n,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[s]=o,u_=(n,s)=>{for(var o in s||(s={}))i_.call(s,o)&&Ii(n,o,s[o]);if(Ri)for(var o of Ri(s))p_.call(s,o)&&Ii(n,o,s[o]);return n},d_=(n,s)=>a_(n,c_(s));function y_(n){if(!Re(n))return v8(n);const s=Array.isArray(n.value)?new Array(n.value.length):{};for(const o in n.value)s[o]=xu(()=>({get(){return n.value[o]},set(t){if(Array.isArray(n.value)){const l=[...n.value];l[o]=t,n.value=l}else{const l=d_(u_({},n.value),{[o]:t});Object.setPrototypeOf(l,n.value),n.value=l}}}));return s}function dc(n,s=!0){Sn()?fo(n):s?n():tn(n)}function f_(n){Sn()&&Xl(n)}function m_(n,s=1e3,o={}){const{immediate:t=!0,immediateCallback:l=!1}=o;let a=null;const c=J(!1);function i(){a&&(clearInterval(a),a=null)}function p(){c.value=!1,i()}function u(){const d=rn(s);d<=0||(c.value=!0,l&&n(),i(),a=setInterval(n,d))}if(t&&Wn&&u(),Re(s)||Et(s)){const d=Ae(s,()=>{c.value&&Wn&&u()});os(d)}return os(p),{isActive:c,pause:p,resume:u}}function h_(n,s,o={}){const{immediate:t=!0}=o,l=J(!1);let a=null;function c(){a&&(clearTimeout(a),a=null)}function i(){l.value=!1,c()}function p(...u){c(),l.value=!0,a=setTimeout(()=>{l.value=!1,a=null,n(...u)},rn(s))}return t&&(l.value=!0,Wn&&p()),os(i),{isPending:Jn(l),start:p,stop:i}}function qd(n=!1,s={}){const{truthyValue:o=!0,falsyValue:t=!1}=s,l=Re(n),a=J(n);function c(i){if(arguments.length)return a.value=i,a.value;{const p=rn(o);return a.value=a.value===p?rn(t):p,a.value}}return l?c:[a,c]}var Pi=Object.getOwnPropertySymbols,__=Object.prototype.hasOwnProperty,B_=Object.prototype.propertyIsEnumerable,g_=(n,s)=>{var o={};for(var t in n)__.call(n,t)&&s.indexOf(t)<0&&(o[t]=n[t]);if(n!=null&&Pi)for(var t of Pi(n))s.indexOf(t)<0&&B_.call(n,t)&&(o[t]=n[t]);return o};function A_(n,s,o={}){const t=o,{eventFilter:l=Ld}=t,a=g_(t,["eventFilter"]);return Ae(n,e_(l,s),a)}var C_=Object.defineProperty,v_=Object.defineProperties,D_=Object.getOwnPropertyDescriptors,Pl=Object.getOwnPropertySymbols,Gd=Object.prototype.hasOwnProperty,Nd=Object.prototype.propertyIsEnumerable,Oi=(n,s,o)=>s in n?C_(n,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[s]=o,b_=(n,s)=>{for(var o in s||(s={}))Gd.call(s,o)&&Oi(n,o,s[o]);if(Pl)for(var o of Pl(s))Nd.call(s,o)&&Oi(n,o,s[o]);return n},k_=(n,s)=>v_(n,D_(s)),w_=(n,s)=>{var o={};for(var t in n)Gd.call(n,t)&&s.indexOf(t)<0&&(o[t]=n[t]);if(n!=null&&Pl)for(var t of Pl(n))s.indexOf(t)<0&&Nd.call(n,t)&&(o[t]=n[t]);return o};function E_(n,s,o={}){const t=o,{eventFilter:l}=t,a=w_(t,["eventFilter"]),{eventFilter:c,pause:i,resume:p,isActive:u}=n_(l);return{stop:A_(n,s,k_(b_({},a),{eventFilter:c})),pause:i,resume:p,isActive:u}}function $n(n){var s;const o=rn(n);return(s=o==null?void 0:o.$el)!=null?s:o}const nn=Wn?window:void 0,Hd=Wn?window.document:void 0,$_=Wn?window.navigator:void 0;function Ce(...n){let s,o,t,l;if(Td(n[0])||Array.isArray(n[0])?([o,t,l]=n,s=nn):[s,o,t,l]=n,!s)return So;Array.isArray(o)||(o=[o]),Array.isArray(t)||(t=[t]);const a=[],c=()=>{a.forEach(d=>d()),a.length=0},i=(d,y,f,h)=>(d.addEventListener(y,f,h),()=>d.removeEventListener(y,f,h)),p=Ae(()=>[$n(s),rn(l)],([d,y])=>{c(),d&&a.push(...o.flatMap(f=>t.map(h=>i(d,f,h,y))))},{immediate:!0,flush:"post"}),u=()=>{p(),c()};return os(u),u}let Ti=!1;function x_(n,s,o={}){const{window:t=nn,ignore:l=[],capture:a=!0,detectIframe:c=!1}=o;if(!t)return;Xh&&!Ti&&(Ti=!0,Array.from(t.document.body.children).forEach(f=>f.addEventListener("click",So)));let i=!0;const p=f=>l.some(h=>{if(typeof h=="string")return Array.from(t.document.querySelectorAll(h)).some(m=>m===f.target||f.composedPath().includes(m));{const m=$n(h);return m&&(f.target===m||f.composedPath().includes(m))}}),d=[Ce(t,"click",f=>{const h=$n(n);if(!(!h||h===f.target||f.composedPath().includes(h))){if(f.detail===0&&(i=!p(f)),!i){i=!0;return}s(f)}},{passive:!0,capture:a}),Ce(t,"pointerdown",f=>{const h=$n(n);h&&(i=!f.composedPath().includes(h)&&!p(f))},{passive:!0}),c&&Ce(t,"blur",f=>{var h;const m=$n(n);((h=t.document.activeElement)==null?void 0:h.tagName)==="IFRAME"&&!(m!=null&&m.contains(t.document.activeElement))&&s(f)})].filter(Boolean);return()=>d.forEach(f=>f())}const F_=n=>typeof n=="function"?n:typeof n=="string"?s=>s.key===n:Array.isArray(n)?s=>n.includes(s.key):()=>!0;function S_(...n){let s,o,t={};n.length===3?(s=n[0],o=n[1],t=n[2]):n.length===2?typeof n[1]=="object"?(s=!0,o=n[0],t=n[1]):(s=n[0],o=n[1]):(s=!0,o=n[0]);const{target:l=nn,eventName:a="keydown",passive:c=!1}=t,i=F_(s);return Ce(l,a,u=>{i(u)&&o(u)},c)}function R_(n={}){var s;const{window:o=nn}=n,t=(s=n.document)!=null?s:o==null?void 0:o.document,l=t_(()=>null,()=>t==null?void 0:t.activeElement);return o&&(Ce(o,"blur",a=>{a.relatedTarget===null&&l.trigger()},!0),Ce(o,"focus",l.trigger,!0)),l}function Ut(n,s=!1){const o=J(),t=()=>o.value=Boolean(n());return t(),dc(t,s),o}function bo(n,s={}){const{window:o=nn}=s,t=Ut(()=>o&&"matchMedia"in o&&typeof o.matchMedia=="function");let l;const a=J(!1),c=()=>{l&&("removeEventListener"in l?l.removeEventListener("change",i):l.removeListener(i))},i=()=>{t.value&&(c(),l=o.matchMedia(Md(n).value),a.value=l.matches,"addEventListener"in l?l.addEventListener("change",i):l.addListener(i))};return yo(i),os(()=>c()),a}const I_={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var P_=Object.defineProperty,Li=Object.getOwnPropertySymbols,O_=Object.prototype.hasOwnProperty,T_=Object.prototype.propertyIsEnumerable,Mi=(n,s,o)=>s in n?P_(n,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[s]=o,L_=(n,s)=>{for(var o in s||(s={}))O_.call(s,o)&&Mi(n,o,s[o]);if(Li)for(var o of Li(s))T_.call(s,o)&&Mi(n,o,s[o]);return n};function M_(n,s={}){function o(i,p){let u=n[i];return p!=null&&(u=o_(u,p)),typeof u=="number"&&(u=`${u}px`),u}const{window:t=nn}=s;function l(i){return t?t.matchMedia(i).matches:!1}const a=i=>bo(`(min-width: ${o(i)})`,s),c=Object.keys(n).reduce((i,p)=>(Object.defineProperty(i,p,{get:()=>a(p),enumerable:!0,configurable:!0}),i),{});return L_({greater(i){return bo(`(min-width: ${o(i,.1)})`,s)},greaterOrEqual:a,smaller(i){return bo(`(max-width: ${o(i,-.1)})`,s)},smallerOrEqual(i){return bo(`(max-width: ${o(i)})`,s)},between(i,p){return bo(`(min-width: ${o(i)}) and (max-width: ${o(p,-.1)})`,s)},isGreater(i){return l(`(min-width: ${o(i,.1)})`)},isGreaterOrEqual(i){return l(`(min-width: ${o(i)})`)},isSmaller(i){return l(`(max-width: ${o(i,-.1)})`)},isSmallerOrEqual(i){return l(`(max-width: ${o(i)})`)},isInBetween(i,p){return l(`(min-width: ${o(i)}) and (max-width: ${o(p,-.1)})`)}},c)}function q_(n={}){const{navigator:s=$_,read:o=!1,source:t,copiedDuring:l=1500,legacy:a=!1}=n,c=["copy","cut"],i=Ut(()=>s&&"clipboard"in s),p=F(()=>i.value||a),u=J(""),d=J(!1),y=h_(()=>d.value=!1,l);function f(){i.value?s.clipboard.readText().then(g=>{u.value=g}):u.value=B()}if(p.value&&o)for(const g of c)Ce(g,f);async function h(g=rn(t)){p.value&&g!=null&&(i.value?await s.clipboard.writeText(g):m(g),u.value=g,d.value=!0,y.start())}function m(g){const k=document.createElement("textarea");k.value=g??"",k.style.position="absolute",k.style.opacity="0",document.body.appendChild(k),k.select(),document.execCommand("copy"),k.remove()}function B(){var g,k,v;return(v=(k=(g=document==null?void 0:document.getSelection)==null?void 0:g.call(document))==null?void 0:k.toString())!=null?v:""}return{isSupported:p,text:u,copied:d,copy:h}}function G_(n){return JSON.parse(JSON.stringify(n))}const ua=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},da="__vueuse_ssr_handlers__";ua[da]=ua[da]||{};const N_=ua[da];function H_(n,s){return N_[n]||s}function j_(n){return n==null?"any":n instanceof Set?"set":n instanceof Map?"map":n instanceof Date?"date":typeof n=="boolean"?"boolean":typeof n=="string"?"string":typeof n=="object"?"object":Number.isNaN(n)?"any":"number"}var V_=Object.defineProperty,qi=Object.getOwnPropertySymbols,U_=Object.prototype.hasOwnProperty,W_=Object.prototype.propertyIsEnumerable,Gi=(n,s,o)=>s in n?V_(n,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[s]=o,Ni=(n,s)=>{for(var o in s||(s={}))U_.call(s,o)&&Gi(n,o,s[o]);if(qi)for(var o of qi(s))W_.call(s,o)&&Gi(n,o,s[o]);return n};const K_={boolean:{read:n=>n==="true",write:n=>String(n)},object:{read:n=>JSON.parse(n),write:n=>JSON.stringify(n)},number:{read:n=>Number.parseFloat(n),write:n=>String(n)},any:{read:n=>n,write:n=>String(n)},string:{read:n=>n,write:n=>String(n)},map:{read:n=>new Map(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n.entries()))},set:{read:n=>new Set(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n))},date:{read:n=>new Date(n),write:n=>n.toISOString()}},Hi="vueuse-storage";function z_(n,s,o,t={}){var l;const{flush:a="pre",deep:c=!0,listenToStorageChanges:i=!0,writeDefaults:p=!0,mergeDefaults:u=!1,shallow:d,window:y=nn,eventFilter:f,onError:h=O=>{console.error(O)}}=t,m=(d?ss:J)(s);if(!o)try{o=H_("getDefaultStorage",()=>{var O;return(O=nn)==null?void 0:O.localStorage})()}catch(O){h(O)}if(!o)return m;const B=rn(s),g=j_(B),k=(l=t.serializer)!=null?l:K_[g],{pause:v,resume:D}=E_(m,()=>w(m.value),{flush:a,deep:c,eventFilter:f});return y&&i&&(Ce(y,"storage",Y),Ce(y,Hi,N)),Y(),m;function w(O){try{if(O==null)o.removeItem(n);else{const K=k.write(O),te=o.getItem(n);te!==K&&(o.setItem(n,K),y&&y.dispatchEvent(new CustomEvent(Hi,{detail:{key:n,oldValue:te,newValue:K,storageArea:o}})))}}catch(K){h(K)}}function T(O){const K=O?O.newValue:o.getItem(n);if(K==null)return p&&B!==null&&o.setItem(n,k.write(B)),B;if(!O&&u){const te=k.read(K);return Et(u)?u(te,B):g==="object"&&!Array.isArray(te)?Ni(Ni({},B),te):te}else return typeof K!="string"?K:k.read(K)}function N(O){Y(O.detail)}function Y(O){if(!(O&&O.storageArea!==o)){if(O&&O.key==null){m.value=B;return}if(!(O&&O.key!==n)){v();try{m.value=T(O)}catch(K){h(K)}finally{O?tn(D):D()}}}}}function Y_(n){return bo("(prefers-color-scheme: dark)",n)}var Z_=Object.defineProperty,Q_=Object.defineProperties,J_=Object.getOwnPropertyDescriptors,ji=Object.getOwnPropertySymbols,X_=Object.prototype.hasOwnProperty,eB=Object.prototype.propertyIsEnumerable,Vi=(n,s,o)=>s in n?Z_(n,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[s]=o,nB=(n,s)=>{for(var o in s||(s={}))X_.call(s,o)&&Vi(n,o,s[o]);if(ji)for(var o of ji(s))eB.call(s,o)&&Vi(n,o,s[o]);return n},sB=(n,s)=>Q_(n,J_(s));function c$(n,s={}){var o,t,l;const a=(o=s.draggingElement)!=null?o:nn,c=(t=s.handle)!=null?t:n,i=J((l=rn(s.initialValue))!=null?l:{x:0,y:0}),p=J(),u=m=>s.pointerTypes?s.pointerTypes.includes(m.pointerType):!0,d=m=>{rn(s.preventDefault)&&m.preventDefault(),rn(s.stopPropagation)&&m.stopPropagation()},y=m=>{var B;if(!u(m)||rn(s.exact)&&m.target!==rn(n))return;const g=rn(n).getBoundingClientRect(),k={x:m.clientX-g.left,y:m.clientY-g.top};((B=s.onStart)==null?void 0:B.call(s,k,m))!==!1&&(p.value=k,d(m))},f=m=>{var B;u(m)&&p.value&&(i.value={x:m.clientX-p.value.x,y:m.clientY-p.value.y},(B=s.onMove)==null||B.call(s,i.value,m),d(m))},h=m=>{var B;u(m)&&p.value&&(p.value=void 0,(B=s.onEnd)==null||B.call(s,i.value,m),d(m))};return Wn&&(Ce(c,"pointerdown",y,!0),Ce(a,"pointermove",f,!0),Ce(a,"pointerup",h,!0)),sB(nB({},y_(i)),{position:i,isDragging:F(()=>!!p.value),style:F(()=>`left:${i.value.x}px;top:${i.value.y}px;`)})}var Ui=Object.getOwnPropertySymbols,oB=Object.prototype.hasOwnProperty,tB=Object.prototype.propertyIsEnumerable,lB=(n,s)=>{var o={};for(var t in n)oB.call(n,t)&&s.indexOf(t)<0&&(o[t]=n[t]);if(n!=null&&Ui)for(var t of Ui(n))s.indexOf(t)<0&&tB.call(n,t)&&(o[t]=n[t]);return o};function rB(n,s,o={}){const t=o,{window:l=nn}=t,a=lB(t,["window"]);let c;const i=Ut(()=>l&&"ResizeObserver"in l),p=()=>{c&&(c.disconnect(),c=void 0)},u=Ae(()=>$n(n),y=>{p(),i.value&&l&&y&&(c=new ResizeObserver(s),c.observe(y,a))},{immediate:!0,flush:"post"}),d=()=>{p(),u()};return os(d),{isSupported:i,stop:d}}function aB(n,s={}){const{immediate:o=!0,window:t=nn}=s,l=J(!1);let a=0,c=null;function i(d){if(!l.value||!t)return;const y=d-a;n({delta:y,timestamp:d}),a=d,c=t.requestAnimationFrame(i)}function p(){!l.value&&t&&(l.value=!0,c=t.requestAnimationFrame(i))}function u(){l.value=!1,c!=null&&t&&(t.cancelAnimationFrame(c),c=null)}return o&&p(),os(u),{isActive:Jn(l),pause:u,resume:p}}function cB(n,s={width:0,height:0},o={}){const{window:t=nn,box:l="content-box"}=o,a=F(()=>{var p,u;return(u=(p=$n(n))==null?void 0:p.namespaceURI)==null?void 0:u.includes("svg")}),c=J(s.width),i=J(s.height);return rB(n,([p])=>{const u=l==="border-box"?p.borderBoxSize:l==="content-box"?p.contentBoxSize:p.devicePixelContentBoxSize;if(t&&a.value){const d=$n(n);if(d){const y=t.getComputedStyle(d);c.value=parseFloat(y.width),i.value=parseFloat(y.height)}}else if(u){const d=Array.isArray(u)?u:[u];c.value=d.reduce((y,{inlineSize:f})=>y+f,0),i.value=d.reduce((y,{blockSize:f})=>y+f,0)}else c.value=p.contentRect.width,i.value=p.contentRect.height},o),Ae(()=>$n(n),p=>{c.value=p?s.width:0,i.value=p?s.height:0}),{width:c,height:i}}const Wi=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function iB(n,s={}){const{document:o=Hd,autoExit:t=!1}=s,l=n||(o==null?void 0:o.querySelector("html")),a=J(!1);let c=Wi[0];const i=Ut(()=>{if(o){for(const B of Wi)if(B[1]in o)return c=B,!0}else return!1;return!1}),[p,u,d,,y]=c;async function f(){i.value&&(o!=null&&o[d]&&await o[u](),a.value=!1)}async function h(){if(!i.value)return;await f();const B=$n(l);B&&(await B[p](),a.value=!0)}async function m(){a.value?await f():await h()}return o&&Ce(o,y,()=>{a.value=!!(o!=null&&o[d])},!1),t&&os(f),{isSupported:i,isFullscreen:a,enter:h,exit:f,toggle:m}}function pB(n,s,o={}){const{root:t,rootMargin:l="0px",threshold:a=.1,window:c=nn}=o,i=Ut(()=>c&&"IntersectionObserver"in c);let p=So;const u=i.value?Ae(()=>({el:$n(n),root:$n(t)}),({el:y,root:f})=>{if(p(),!y)return;const h=new IntersectionObserver(s,{root:f,rootMargin:l,threshold:a});h.observe(y),p=()=>{h.disconnect(),p=So}},{immediate:!0,flush:"post"}):So,d=()=>{p(),u()};return os(d),{isSupported:i,stop:d}}function Kn(n,s,o={}){const{window:t=nn}=o;return z_(n,s,t==null?void 0:t.localStorage,o)}const uB={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function dB(n={}){const{reactive:s=!1,target:o=nn,aliasMap:t=uB,passive:l=!0,onEventFired:a=So}=n,c=Ve(new Set),i={toJSON(){return{}},current:c},p=s?Ve(i):i,u=new Set,d=new Set;function y(B,g){B in p&&(s?p[B]=g:p[B].value=g)}function f(){c.clear();for(const B of d)y(B,!1)}function h(B,g){var k,v;const D=(k=B.key)==null?void 0:k.toLowerCase(),T=[(v=B.code)==null?void 0:v.toLowerCase(),D].filter(Boolean);D&&(g?c.add(D):c.delete(D));for(const N of T)d.add(N),y(N,g);D==="meta"&&!g?(u.forEach(N=>{c.delete(N),y(N,!1)}),u.clear()):typeof B.getModifierState=="function"&&B.getModifierState("Meta")&&g&&[...c,...T].forEach(N=>u.add(N))}Ce(o,"keydown",B=>(h(B,!0),a(B)),{passive:l}),Ce(o,"keyup",B=>(h(B,!1),a(B)),{passive:l}),Ce("blur",f,{passive:!0}),Ce("focus",f,{passive:!0});const m=new Proxy(p,{get(B,g,k){if(typeof g!="string")return Reflect.get(B,g,k);if(g=g.toLowerCase(),g in t&&(g=t[g]),!(g in p))if(/[+_-]/.test(g)){const D=g.split(/[+_-]/g).map(w=>w.trim());p[g]=F(()=>D.every(w=>b(m[w])))}else p[g]=J(!1);const v=Reflect.get(B,g,k);return s?b(v):v}});return m}function i$(n={}){const{type:s="page",touch:o=!0,resetOnTouchEnds:t=!1,initialValue:l={x:0,y:0},window:a=nn,eventFilter:c}=n,i=J(l.x),p=J(l.y),u=J(null),d=B=>{s==="page"?(i.value=B.pageX,p.value=B.pageY):s==="client"?(i.value=B.clientX,p.value=B.clientY):s==="movement"&&(i.value=B.movementX,p.value=B.movementY),u.value="mouse"},y=()=>{i.value=l.x,p.value=l.y},f=B=>{if(B.touches.length>0){const g=B.touches[0];s==="page"?(i.value=g.pageX,p.value=g.pageY):s==="client"&&(i.value=g.clientX,p.value=g.clientY),u.value="touch"}},h=B=>c===void 0?d(B):c(()=>d(B),{}),m=B=>c===void 0?f(B):c(()=>f(B),{});return a&&(Ce(a,"mousemove",h,{passive:!0}),Ce(a,"dragover",h,{passive:!0}),o&&s!=="movement"&&(Ce(a,"touchstart",m,{passive:!0}),Ce(a,"touchmove",m,{passive:!0}),t&&Ce(a,"touchend",y,{passive:!0}))),{x:i,y:p,sourceType:u}}var us;(function(n){n.UP="UP",n.RIGHT="RIGHT",n.DOWN="DOWN",n.LEFT="LEFT",n.NONE="NONE"})(us||(us={}));function yB(n,s={}){const o=Md(n),{threshold:t=50,onSwipe:l,onSwipeEnd:a,onSwipeStart:c}=s,i=Ve({x:0,y:0}),p=(N,Y)=>{i.x=N,i.y=Y},u=Ve({x:0,y:0}),d=(N,Y)=>{u.x=N,u.y=Y},y=F(()=>i.x-u.x),f=F(()=>i.y-u.y),{max:h,abs:m}=Math,B=F(()=>h(m(y.value),m(f.value))>=t),g=J(!1),k=J(!1),v=F(()=>B.value?m(y.value)>m(f.value)?y.value>0?us.LEFT:us.RIGHT:f.value>0?us.UP:us.DOWN:us.NONE),D=N=>{var Y,O,K;const te=N.buttons===0,ue=N.buttons===1;return(K=(O=(Y=s.pointerTypes)==null?void 0:Y.includes(N.pointerType))!=null?O:te||ue)!=null?K:!0},w=[Ce(n,"pointerdown",N=>{var Y,O;if(!D(N))return;k.value=!0,(O=(Y=o.value)==null?void 0:Y.style)==null||O.setProperty("touch-action","none");const K=N.target;K==null||K.setPointerCapture(N.pointerId);const{clientX:te,clientY:ue}=N;p(te,ue),d(te,ue),c==null||c(N)}),Ce(n,"pointermove",N=>{if(!D(N)||!k.value)return;const{clientX:Y,clientY:O}=N;d(Y,O),!g.value&&B.value&&(g.value=!0),g.value&&(l==null||l(N))}),Ce(n,"pointerup",N=>{var Y,O;D(N)&&(g.value&&(a==null||a(N,v.value)),k.value=!1,g.value=!1,(O=(Y=o.value)==null?void 0:Y.style)==null||O.setProperty("touch-action","initial"))})],T=()=>w.forEach(N=>N());return{isSwiping:Jn(g),direction:Jn(v),posStart:Jn(i),posEnd:Jn(u),distanceX:y,distanceY:f,stop:T}}let fB=0;function p$(n,s={}){const o=J(!1),{document:t=Hd,immediate:l=!0,manual:a=!1,id:c=`vueuse_styletag_${++fB}`}=s,i=J(n);let p=()=>{};const u=()=>{if(!t)return;const y=t.getElementById(c)||t.createElement("style");y.isConnected||(y.type="text/css",y.id=c,s.media&&(y.media=s.media),t.head.appendChild(y)),!o.value&&(p=Ae(i,f=>{y.textContent=f},{immediate:!0}),o.value=!0)},d=()=>{!t||!o.value||(p(),t.head.removeChild(t.getElementById(c)),o.value=!1)};return l&&!a&&dc(u),a||os(d),{id:c,css:i,unload:d,load:u,isLoaded:Jn(o)}}var mB=Object.defineProperty,Ki=Object.getOwnPropertySymbols,hB=Object.prototype.hasOwnProperty,_B=Object.prototype.propertyIsEnumerable,zi=(n,s,o)=>s in n?mB(n,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[s]=o,BB=(n,s)=>{for(var o in s||(s={}))hB.call(s,o)&&zi(n,o,s[o]);if(Ki)for(var o of Ki(s))_B.call(s,o)&&zi(n,o,s[o]);return n};function u$(n={}){const{controls:s=!1,offset:o=0,immediate:t=!0,interval:l="requestAnimationFrame",callback:a}=n,c=J(pa()+o),i=()=>c.value=pa()+o,p=a?()=>{i(),a(c.value)}:i,u=l==="requestAnimationFrame"?aB(p,{immediate:t}):m_(p,l,{immediate:t});return s?BB({timestamp:c},u):c}var gB=Object.defineProperty,Yi=Object.getOwnPropertySymbols,AB=Object.prototype.hasOwnProperty,CB=Object.prototype.propertyIsEnumerable,Zi=(n,s,o)=>s in n?gB(n,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[s]=o,vB=(n,s)=>{for(var o in s||(s={}))AB.call(s,o)&&Zi(n,o,s[o]);if(Yi)for(var o of Yi(s))CB.call(s,o)&&Zi(n,o,s[o]);return n};const DB={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};vB({linear:s_},DB);function Xn(n,s,o,t={}){var l,a,c;const{clone:i=!1,passive:p=!1,eventName:u,deep:d=!1,defaultValue:y}=t,f=Sn(),h=o||(f==null?void 0:f.emit)||((l=f==null?void 0:f.$emit)==null?void 0:l.bind(f))||((c=(a=f==null?void 0:f.proxy)==null?void 0:a.$emit)==null?void 0:c.bind(f==null?void 0:f.proxy));let m=u;s||(s="modelValue"),m=u||m||`update:${s.toString()}`;const B=k=>i?Et(i)?i(k):G_(k):k,g=()=>Zh(n[s])?B(n[s]):y;if(p){const k=g(),v=J(k);return Ae(()=>n[s],D=>v.value=B(D)),Ae(v,D=>{(D!==n[s]||d)&&h(m,D)},{deep:d}),v}else return F({get(){return g()},set(k){h(m,k)}})}function d$({window:n=nn}={}){if(!n)return J(!1);const s=J(n.document.hasFocus());return Ce(n,"blur",()=>{s.value=!1}),Ce(n,"focus",()=>{s.value=!0}),s}function bB(n={}){const{window:s=nn,initialWidth:o=1/0,initialHeight:t=1/0,listenOrientation:l=!0,includeScrollbar:a=!0}=n,c=J(o),i=J(t),p=()=>{s&&(a?(c.value=s.innerWidth,i.value=s.innerHeight):(c.value=s.document.documentElement.clientWidth,i.value=s.document.documentElement.clientHeight))};return p(),dc(p),Ce("resize",p,{passive:!0}),l&&Ce("orientationchange",p,{passive:!0}),{width:c,height:i}}function kB(){return jd().__VUE_DEVTOOLS_GLOBAL_HOOK__}function jd(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const wB=typeof Proxy=="function",EB="devtools-plugin:setup",$B="plugin:settings:set";let Bo,ya;function xB(){var n;return Bo!==void 0||(typeof window<"u"&&window.performance?(Bo=!0,ya=window.performance):typeof global<"u"&&(!((n=global.perf_hooks)===null||n===void 0)&&n.performance)?(Bo=!0,ya=global.perf_hooks.performance):Bo=!1),Bo}function FB(){return xB()?ya.now():Date.now()}class SB{constructor(s,o){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=s,this.hook=o;const t={};if(s.settings)for(const c in s.settings){const i=s.settings[c];t[c]=i.defaultValue}const l=`__vue-devtools-plugin-settings__${s.id}`;let a=Object.assign({},t);try{const c=localStorage.getItem(l),i=JSON.parse(c);Object.assign(a,i)}catch{}this.fallbacks={getSettings(){return a},setSettings(c){try{localStorage.setItem(l,JSON.stringify(c))}catch{}a=c},now(){return FB()}},o&&o.on($B,(c,i)=>{c===this.plugin.id&&this.fallbacks.setSettings(i)}),this.proxiedOn=new Proxy({},{get:(c,i)=>this.target?this.target.on[i]:(...p)=>{this.onQueue.push({method:i,args:p})}}),this.proxiedTarget=new Proxy({},{get:(c,i)=>this.target?this.target[i]:i==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(i)?(...p)=>(this.targetQueue.push({method:i,args:p,resolve:()=>{}}),this.fallbacks[i](...p)):(...p)=>new Promise(u=>{this.targetQueue.push({method:i,args:p,resolve:u})})})}async setRealTarget(s){this.target=s;for(const o of this.onQueue)this.target.on[o.method](...o.args);for(const o of this.targetQueue)o.resolve(await this.target[o.method](...o.args))}}function RB(n,s){const o=n,t=jd(),l=kB(),a=wB&&o.enableEarlyProxy;if(l&&(t.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!a))l.emit(EB,n,s);else{const c=a?new SB(o,l):null;(t.__VUE_DEVTOOLS_PLUGINS__=t.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:o,setupFn:s,proxy:c}),c&&s(c.proxiedTarget)}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const is=typeof window<"u";function IB(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const Te=Object.assign;function kr(n,s){const o={};for(const t in s){const l=s[t];o[t]=Fn(l)?l.map(n):n(l)}return o}const ut=()=>{},Fn=Array.isArray;function Fe(n){const s=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+n].concat(s))}const PB=/\/$/,OB=n=>n.replace(PB,"");function wr(n,s,o="/"){let t,l={},a="",c="";const i=s.indexOf("#");let p=s.indexOf("?");return i<p&&i>=0&&(p=-1),p>-1&&(t=s.slice(0,p),a=s.slice(p+1,i>-1?i:s.length),l=n(a)),i>-1&&(t=t||s.slice(0,i),c=s.slice(i,s.length)),t=MB(t??s,o),{fullPath:t+(a&&"?")+a+c,path:t,query:l,hash:c}}function TB(n,s){const o=s.query?n(s.query):"";return s.path+(o&&"?")+o+(s.hash||"")}function Qi(n,s){return!s||!n.toLowerCase().startsWith(s.toLowerCase())?n:n.slice(s.length)||"/"}function Ji(n,s,o){const t=s.matched.length-1,l=o.matched.length-1;return t>-1&&t===l&&Ms(s.matched[t],o.matched[l])&&Vd(s.params,o.params)&&n(s.query)===n(o.query)&&s.hash===o.hash}function Ms(n,s){return(n.aliasOf||n)===(s.aliasOf||s)}function Vd(n,s){if(Object.keys(n).length!==Object.keys(s).length)return!1;for(const o in n)if(!LB(n[o],s[o]))return!1;return!0}function LB(n,s){return Fn(n)?Xi(n,s):Fn(s)?Xi(s,n):n===s}function Xi(n,s){return Fn(s)?n.length===s.length&&n.every((o,t)=>o===s[t]):n.length===1&&n[0]===s}function MB(n,s){if(n.startsWith("/"))return n;if(!s.startsWith("/"))return Fe(`Cannot resolve a relative location without an absolute path. Trying to resolve "${n}" from "${s}". It should look like "/${s}".`),n;if(!n)return s;const o=s.split("/"),t=n.split("/");let l=o.length-1,a,c;for(a=0;a<t.length;a++)if(c=t[a],c!==".")if(c==="..")l>1&&l--;else break;return o.slice(0,l).join("/")+"/"+t.slice(a-(a===t.length?1:0)).join("/")}var $t;(function(n){n.pop="pop",n.push="push"})($t||($t={}));var dt;(function(n){n.back="back",n.forward="forward",n.unknown=""})(dt||(dt={}));function qB(n){if(!n)if(is){const s=document.querySelector("base");n=s&&s.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),OB(n)}const GB=/^[^#]+#/;function NB(n,s){return n.replace(GB,"#")+s}function HB(n,s){const o=document.documentElement.getBoundingClientRect(),t=n.getBoundingClientRect();return{behavior:s.behavior,left:t.left-o.left-(s.left||0),top:t.top-o.top-(s.top||0)}}const tr=()=>({left:window.pageXOffset,top:window.pageYOffset});function jB(n){let s;if("el"in n){const o=n.el,t=typeof o=="string"&&o.startsWith("#");if(typeof n.el=="string"&&(!t||!document.getElementById(n.el.slice(1))))try{const a=document.querySelector(n.el);if(t&&a){Fe(`The selector "${n.el}" should be passed as "el: document.querySelector('${n.el}')" because it starts with "#".`);return}}catch{Fe(`The selector "${n.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const l=typeof o=="string"?t?document.getElementById(o.slice(1)):document.querySelector(o):o;if(!l){Fe(`Couldn't find element using selector "${n.el}" returned by scrollBehavior.`);return}s=HB(l,n)}else s=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(s):window.scrollTo(s.left!=null?s.left:window.pageXOffset,s.top!=null?s.top:window.pageYOffset)}function ep(n,s){return(history.state?history.state.position-s:-1)+n}const fa=new Map;function VB(n,s){fa.set(n,s)}function UB(n){const s=fa.get(n);return fa.delete(n),s}let WB=()=>location.protocol+"//"+location.host;function Ud(n,s){const{pathname:o,search:t,hash:l}=s,a=n.indexOf("#");if(a>-1){let i=l.includes(n.slice(a))?n.slice(a).length:1,p=l.slice(i);return p[0]!=="/"&&(p="/"+p),Qi(p,"")}return Qi(o,n)+t+l}function KB(n,s,o,t){let l=[],a=[],c=null;const i=({state:f})=>{const h=Ud(n,location),m=o.value,B=s.value;let g=0;if(f){if(o.value=h,s.value=f,c&&c===m){c=null;return}g=B?f.position-B.position:0}else t(h);l.forEach(k=>{k(o.value,m,{delta:g,type:$t.pop,direction:g?g>0?dt.forward:dt.back:dt.unknown})})};function p(){c=o.value}function u(f){l.push(f);const h=()=>{const m=l.indexOf(f);m>-1&&l.splice(m,1)};return a.push(h),h}function d(){const{history:f}=window;f.state&&f.replaceState(Te({},f.state,{scroll:tr()}),"")}function y(){for(const f of a)f();a=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",d),{pauseListeners:p,listen:u,destroy:y}}function np(n,s,o,t=!1,l=!1){return{back:n,current:s,forward:o,replaced:t,position:window.history.length,scroll:l?tr():null}}function zB(n){const{history:s,location:o}=window,t={value:Ud(n,o)},l={value:s.state};l.value||a(t.value,{back:null,current:t.value,forward:null,position:s.length-1,replaced:!0,scroll:null},!0);function a(p,u,d){const y=n.indexOf("#"),f=y>-1?(o.host&&document.querySelector("base")?n:n.slice(y))+p:WB()+n+p;try{s[d?"replaceState":"pushState"](u,"",f),l.value=u}catch(h){Fe("Error with push/replace State",h),o[d?"replace":"assign"](f)}}function c(p,u){const d=Te({},s.state,np(l.value.back,p,l.value.forward,!0),u,{position:l.value.position});a(p,d,!0),t.value=p}function i(p,u){const d=Te({},l.value,s.state,{forward:p,scroll:tr()});s.state||Fe(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),a(d.current,d,!0);const y=Te({},np(t.value,p,null),{position:d.position+1},u);a(p,y,!1),t.value=p}return{location:t,state:l,push:i,replace:c}}function YB(n){n=qB(n);const s=zB(n),o=KB(n,s.state,s.location,s.replace);function t(a,c=!0){c||o.pauseListeners(),history.go(a)}const l=Te({location:"",base:n,go:t,createHref:NB.bind(null,n)},s,o);return Object.defineProperty(l,"location",{enumerable:!0,get:()=>s.location.value}),Object.defineProperty(l,"state",{enumerable:!0,get:()=>s.state.value}),l}function ZB(n){return typeof n=="string"||n&&typeof n=="object"}function Wd(n){return typeof n=="string"||typeof n=="symbol"}const As={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Kd=Symbol("navigation failure");var sp;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(sp||(sp={}));const QB={[1]({location:n,currentLocation:s}){return`No match for
 ${JSON.stringify(n)}${s?`
while being at
`+JSON.stringify(s):""}`},[2]({from:n,to:s}){return`Redirected from "${n.fullPath}" to "${XB(s)}" via a navigation guard.`},[4]({from:n,to:s}){return`Navigation aborted from "${n.fullPath}" to "${s.fullPath}" via a navigation guard.`},[8]({from:n,to:s}){return`Navigation cancelled from "${n.fullPath}" to "${s.fullPath}" with a new navigation.`},[16]({from:n,to:s}){return`Avoided redundant navigation to current location: "${n.fullPath}".`}};function To(n,s){return Te(new Error(QB[n](s)),{type:n,[Kd]:!0},s)}function ts(n,s){return n instanceof Error&&Kd in n&&(s==null||!!(n.type&s))}const JB=["params","query","hash"];function XB(n){if(typeof n=="string")return n;if("path"in n)return n.path;const s={};for(const o of JB)o in n&&(s[o]=n[o]);return JSON.stringify(s,null,2)}const op="[^/]+?",e3={sensitive:!1,strict:!1,start:!0,end:!0},n3=/[.+*?^${}()[\]/\\]/g;function s3(n,s){const o=Te({},e3,s),t=[];let l=o.start?"^":"";const a=[];for(const u of n){const d=u.length?[]:[90];o.strict&&!u.length&&(l+="/");for(let y=0;y<u.length;y++){const f=u[y];let h=40+(o.sensitive?.25:0);if(f.type===0)y||(l+="/"),l+=f.value.replace(n3,"\\$&"),h+=40;else if(f.type===1){const{value:m,repeatable:B,optional:g,regexp:k}=f;a.push({name:m,repeatable:B,optional:g});const v=k||op;if(v!==op){h+=10;try{new RegExp(`(${v})`)}catch(w){throw new Error(`Invalid custom RegExp for param "${m}" (${v}): `+w.message)}}let D=B?`((?:${v})(?:/(?:${v}))*)`:`(${v})`;y||(D=g&&u.length<2?`(?:/${D})`:"/"+D),g&&(D+="?"),l+=D,h+=20,g&&(h+=-8),B&&(h+=-20),v===".*"&&(h+=-50)}d.push(h)}t.push(d)}if(o.strict&&o.end){const u=t.length-1;t[u][t[u].length-1]+=.7000000000000001}o.strict||(l+="/?"),o.end?l+="$":o.strict&&(l+="(?:/|$)");const c=new RegExp(l,o.sensitive?"":"i");function i(u){const d=u.match(c),y={};if(!d)return null;for(let f=1;f<d.length;f++){const h=d[f]||"",m=a[f-1];y[m.name]=h&&m.repeatable?h.split("/"):h}return y}function p(u){let d="",y=!1;for(const f of n){(!y||!d.endsWith("/"))&&(d+="/"),y=!1;for(const h of f)if(h.type===0)d+=h.value;else if(h.type===1){const{value:m,repeatable:B,optional:g}=h,k=m in u?u[m]:"";if(Fn(k)&&!B)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const v=Fn(k)?k.join("/"):k;if(!v)if(g)f.length<2&&(d.endsWith("/")?d=d.slice(0,-1):y=!0);else throw new Error(`Missing required param "${m}"`);d+=v}}return d||"/"}return{re:c,score:t,keys:a,parse:i,stringify:p}}function o3(n,s){let o=0;for(;o<n.length&&o<s.length;){const t=s[o]-n[o];if(t)return t;o++}return n.length<s.length?n.length===1&&n[0]===40+40?-1:1:n.length>s.length?s.length===1&&s[0]===40+40?1:-1:0}function t3(n,s){let o=0;const t=n.score,l=s.score;for(;o<t.length&&o<l.length;){const a=o3(t[o],l[o]);if(a)return a;o++}if(Math.abs(l.length-t.length)===1){if(tp(t))return 1;if(tp(l))return-1}return l.length-t.length}function tp(n){const s=n[n.length-1];return n.length>0&&s[s.length-1]<0}const l3={type:0,value:""},r3=/[a-zA-Z0-9_]/;function a3(n){if(!n)return[[]];if(n==="/")return[[l3]];if(!n.startsWith("/"))throw new Error(`Route paths should start with a "/": "${n}" should be "/${n}".`);function s(h){throw new Error(`ERR (${o})/"${u}": ${h}`)}let o=0,t=o;const l=[];let a;function c(){a&&l.push(a),a=[]}let i=0,p,u="",d="";function y(){u&&(o===0?a.push({type:0,value:u}):o===1||o===2||o===3?(a.length>1&&(p==="*"||p==="+")&&s(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:u,regexp:d,repeatable:p==="*"||p==="+",optional:p==="*"||p==="?"})):s("Invalid state to consume buffer"),u="")}function f(){u+=p}for(;i<n.length;){if(p=n[i++],p==="\\"&&o!==2){t=o,o=4;continue}switch(o){case 0:p==="/"?(u&&y(),c()):p===":"?(y(),o=1):f();break;case 4:f(),o=t;break;case 1:p==="("?o=2:r3.test(p)?f():(y(),o=0,p!=="*"&&p!=="?"&&p!=="+"&&i--);break;case 2:p===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+p:o=3:d+=p;break;case 3:y(),o=0,p!=="*"&&p!=="?"&&p!=="+"&&i--,d="";break;default:s("Unknown state");break}}return o===2&&s(`Unfinished custom RegExp for param "${u}"`),y(),c(),l}function c3(n,s,o){const t=s3(a3(n.path),o);{const a=new Set;for(const c of t.keys)a.has(c.name)&&Fe(`Found duplicated params with name "${c.name}" for path "${n.path}". Only the last one will be available on "$route.params".`),a.add(c.name)}const l=Te(t,{record:n,parent:s,children:[],alias:[]});return s&&!l.record.aliasOf==!s.record.aliasOf&&s.children.push(l),l}function i3(n,s){const o=[],t=new Map;s=ap({strict:!1,end:!0,sensitive:!1},s);function l(d){return t.get(d)}function a(d,y,f){const h=!f,m=p3(d);f3(m,y),m.aliasOf=f&&f.record;const B=ap(s,d),g=[m];if("alias"in d){const D=typeof d.alias=="string"?[d.alias]:d.alias;for(const w of D)g.push(Te({},m,{components:f?f.record.components:m.components,path:w,aliasOf:f?f.record:m}))}let k,v;for(const D of g){const{path:w}=D;if(y&&w[0]!=="/"){const T=y.record.path,N=T[T.length-1]==="/"?"":"/";D.path=y.record.path+(w&&N+w)}if(D.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(k=c3(D,y,B),y&&w[0]==="/"&&m3(k,y),f?(f.alias.push(k),y3(f,k)):(v=v||k,v!==k&&v.alias.push(k),h&&d.name&&!rp(k)&&c(d.name)),m.children){const T=m.children;for(let N=0;N<T.length;N++)a(T[N],k,f&&f.children[N])}f=f||k,(k.record.components&&Object.keys(k.record.components).length||k.record.name||k.record.redirect)&&p(k)}return v?()=>{c(v)}:ut}function c(d){if(Wd(d)){const y=t.get(d);y&&(t.delete(d),o.splice(o.indexOf(y),1),y.children.forEach(c),y.alias.forEach(c))}else{const y=o.indexOf(d);y>-1&&(o.splice(y,1),d.record.name&&t.delete(d.record.name),d.children.forEach(c),d.alias.forEach(c))}}function i(){return o}function p(d){let y=0;for(;y<o.length&&t3(d,o[y])>=0&&(d.record.path!==o[y].record.path||!zd(d,o[y]));)y++;o.splice(y,0,d),d.record.name&&!rp(d)&&t.set(d.record.name,d)}function u(d,y){let f,h={},m,B;if("name"in d&&d.name){if(f=t.get(d.name),!f)throw To(1,{location:d});{const v=Object.keys(d.params||{}).filter(D=>!f.keys.find(w=>w.name===D));v.length&&Fe(`Discarded invalid param(s) "${v.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}B=f.record.name,h=Te(lp(y.params,f.keys.filter(v=>!v.optional).map(v=>v.name)),d.params&&lp(d.params,f.keys.map(v=>v.name))),m=f.stringify(h)}else if("path"in d)m=d.path,m.startsWith("/")||Fe(`The Matcher cannot resolve relative paths but received "${m}". Unless you directly called \`matcher.resolve("${m}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),f=o.find(v=>v.re.test(m)),f&&(h=f.parse(m),B=f.record.name);else{if(f=y.name?t.get(y.name):o.find(v=>v.re.test(y.path)),!f)throw To(1,{location:d,currentLocation:y});B=f.record.name,h=Te({},y.params,d.params),m=f.stringify(h)}const g=[];let k=f;for(;k;)g.unshift(k.record),k=k.parent;return{name:B,path:m,params:h,matched:g,meta:d3(g)}}return n.forEach(d=>a(d)),{addRoute:a,resolve:u,removeRoute:c,getRoutes:i,getRecordMatcher:l}}function lp(n,s){const o={};for(const t of s)t in n&&(o[t]=n[t]);return o}function p3(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:u3(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function u3(n){const s={},o=n.props||!1;if("component"in n)s.default=o;else for(const t in n.components)s[t]=typeof o=="boolean"?o:o[t];return s}function rp(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function d3(n){return n.reduce((s,o)=>Te(s,o.meta),{})}function ap(n,s){const o={};for(const t in n)o[t]=t in s?s[t]:n[t];return o}function ma(n,s){return n.name===s.name&&n.optional===s.optional&&n.repeatable===s.repeatable}function y3(n,s){for(const o of n.keys)if(!o.optional&&!s.keys.find(ma.bind(null,o)))return Fe(`Alias "${s.record.path}" and the original record: "${n.record.path}" must have the exact same param named "${o.name}"`);for(const o of s.keys)if(!o.optional&&!n.keys.find(ma.bind(null,o)))return Fe(`Alias "${s.record.path}" and the original record: "${n.record.path}" must have the exact same param named "${o.name}"`)}function f3(n,s){s&&s.record.name&&!n.name&&!n.path&&Fe(`The route named "${String(s.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function m3(n,s){for(const o of s.keys)if(!n.keys.find(ma.bind(null,o)))return Fe(`Absolute path "${n.record.path}" must have the exact same param named "${o.name}" as its parent "${s.record.path}".`)}function zd(n,s){return s.children.some(o=>o===n||zd(n,o))}const Yd=/#/g,h3=/&/g,_3=/\//g,B3=/=/g,g3=/\?/g,Zd=/\+/g,A3=/%5B/g,C3=/%5D/g,Qd=/%5E/g,v3=/%60/g,Jd=/%7B/g,D3=/%7C/g,Xd=/%7D/g,b3=/%20/g;function yc(n){return encodeURI(""+n).replace(D3,"|").replace(A3,"[").replace(C3,"]")}function k3(n){return yc(n).replace(Jd,"{").replace(Xd,"}").replace(Qd,"^")}function ha(n){return yc(n).replace(Zd,"%2B").replace(b3,"+").replace(Yd,"%23").replace(h3,"%26").replace(v3,"`").replace(Jd,"{").replace(Xd,"}").replace(Qd,"^")}function w3(n){return ha(n).replace(B3,"%3D")}function E3(n){return yc(n).replace(Yd,"%23").replace(g3,"%3F")}function $3(n){return n==null?"":E3(n).replace(_3,"%2F")}function xt(n){try{return decodeURIComponent(""+n)}catch{Fe(`Error decoding "${n}". Using original value`)}return""+n}function x3(n){const s={};if(n===""||n==="?")return s;const t=(n[0]==="?"?n.slice(1):n).split("&");for(let l=0;l<t.length;++l){const a=t[l].replace(Zd," "),c=a.indexOf("="),i=xt(c<0?a:a.slice(0,c)),p=c<0?null:xt(a.slice(c+1));if(i in s){let u=s[i];Fn(u)||(u=s[i]=[u]),u.push(p)}else s[i]=p}return s}function cp(n){let s="";for(let o in n){const t=n[o];if(o=w3(o),t==null){t!==void 0&&(s+=(s.length?"&":"")+o);continue}(Fn(t)?t.map(a=>a&&ha(a)):[t&&ha(t)]).forEach(a=>{a!==void 0&&(s+=(s.length?"&":"")+o,a!=null&&(s+="="+a))})}return s}function F3(n){const s={};for(const o in n){const t=n[o];t!==void 0&&(s[o]=Fn(t)?t.map(l=>l==null?null:""+l):t==null?t:""+t)}return s}const S3=Symbol("router view location matched"),ip=Symbol("router view depth"),fc=Symbol("router"),ey=Symbol("route location"),_a=Symbol("router view location");function Yo(){let n=[];function s(t){return n.push(t),()=>{const l=n.indexOf(t);l>-1&&n.splice(l,1)}}function o(){n=[]}return{add:s,list:()=>n,reset:o}}function bs(n,s,o,t,l){const a=t&&(t.enterCallbacks[l]=t.enterCallbacks[l]||[]);return()=>new Promise((c,i)=>{const p=y=>{y===!1?i(To(4,{from:o,to:s})):y instanceof Error?i(y):ZB(y)?i(To(2,{from:s,to:y})):(a&&t.enterCallbacks[l]===a&&typeof y=="function"&&a.push(y),c())},u=n.call(t&&t.instances[l],s,o,R3(p,s,o));let d=Promise.resolve(u);if(n.length<3&&(d=d.then(p)),n.length>2){const y=`The "next" callback was never called inside of ${n.name?'"'+n.name+'"':""}:
${n.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof u=="object"&&"then"in u)d=d.then(f=>p._called?f:(Fe(y),Promise.reject(new Error("Invalid navigation guard"))));else if(u!==void 0&&!p._called){Fe(y),i(new Error("Invalid navigation guard"));return}}d.catch(y=>i(y))})}function R3(n,s,o){let t=0;return function(){t++===1&&Fe(`The "next" callback was called more than once in one navigation guard when going from "${o.fullPath}" to "${s.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),n._called=!0,t===1&&n.apply(null,arguments)}}function Er(n,s,o,t){const l=[];for(const a of n){!a.components&&!a.children.length&&Fe(`Record with path "${a.path}" is either missing a "component(s)" or "children" property.`);for(const c in a.components){let i=a.components[c];{if(!i||typeof i!="object"&&typeof i!="function")throw Fe(`Component "${c}" in record with path "${a.path}" is not a valid component. Received "${String(i)}".`),new Error("Invalid route component");if("then"in i){Fe(`Component "${c}" in record with path "${a.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const p=i;i=()=>p}else i.__asyncLoader&&!i.__warnedDefineAsync&&(i.__warnedDefineAsync=!0,Fe(`Component "${c}" in record with path "${a.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(s!=="beforeRouteEnter"&&!a.instances[c]))if(I3(i)){const u=(i.__vccOpts||i)[s];u&&l.push(bs(u,o,t,a,c))}else{let p=i();"catch"in p||(Fe(`Component "${c}" in record with path "${a.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),p=Promise.resolve(p)),l.push(()=>p.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${a.path}"`));const d=IB(u)?u.default:u;a.components[c]=d;const f=(d.__vccOpts||d)[s];return f&&bs(f,o,t,a,c)()}))}}}return l}function I3(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function pp(n){const s=$(fc),o=$(ey),t=F(()=>s.resolve(b(n.to))),l=F(()=>{const{matched:p}=t.value,{length:u}=p,d=p[u-1],y=o.matched;if(!d||!y.length)return-1;const f=y.findIndex(Ms.bind(null,d));if(f>-1)return f;const h=up(p[u-2]);return u>1&&up(d)===h&&y[y.length-1].path!==h?y.findIndex(Ms.bind(null,p[u-2])):f}),a=F(()=>l.value>-1&&L3(o.params,t.value.params)),c=F(()=>l.value>-1&&l.value===o.matched.length-1&&Vd(o.params,t.value.params));function i(p={}){return T3(p)?s[b(n.replace)?"replace":"push"](b(n.to)).catch(ut):Promise.resolve()}if(is){const p=Sn();if(p){const u={route:t.value,isActive:a.value,isExactActive:c.value};p.__vrl_devtools=p.__vrl_devtools||[],p.__vrl_devtools.push(u),yo(()=>{u.route=t.value,u.isActive=a.value,u.isExactActive=c.value},{flush:"post"})}}return{route:t,href:F(()=>t.value.href),isActive:a,isExactActive:c,navigate:i}}const P3=Ie({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:pp,setup(n,{slots:s}){const o=Ve(pp(n)),{options:t}=$(fc),l=F(()=>({[dp(n.activeClass,t.linkActiveClass,"router-link-active")]:o.isActive,[dp(n.exactActiveClass,t.linkExactActiveClass,"router-link-exact-active")]:o.isExactActive}));return()=>{const a=s.default&&s.default(o);return n.custom?a:mn("a",{"aria-current":o.isExactActive?n.ariaCurrentValue:null,href:o.href,onClick:o.navigate,class:l.value},a)}}}),O3=P3;function T3(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const s=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(s))return}return n.preventDefault&&n.preventDefault(),!0}}function L3(n,s){for(const o in s){const t=s[o],l=n[o];if(typeof t=="string"){if(t!==l)return!1}else if(!Fn(l)||l.length!==t.length||t.some((a,c)=>a!==l[c]))return!1}return!0}function up(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const dp=(n,s,o)=>n??s??o,M3=Ie({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:s,slots:o}){G3();const t=$(_a),l=F(()=>n.route||t.value),a=$(ip,0),c=F(()=>{let u=b(a);const{matched:d}=l.value;let y;for(;(y=d[u])&&!y.components;)u++;return u}),i=F(()=>l.value.matched[c.value]);En(ip,F(()=>c.value+1)),En(S3,i),En(_a,l);const p=J();return Ae(()=>[p.value,i.value,n.name],([u,d,y],[f,h,m])=>{d&&(d.instances[y]=u,h&&h!==d&&u&&u===f&&(d.leaveGuards.size||(d.leaveGuards=h.leaveGuards),d.updateGuards.size||(d.updateGuards=h.updateGuards))),u&&d&&(!h||!Ms(d,h)||!f)&&(d.enterCallbacks[y]||[]).forEach(B=>B(u))},{flush:"post"}),()=>{const u=l.value,d=n.name,y=i.value,f=y&&y.components[d];if(!f)return yp(o.default,{Component:f,route:u});const h=y.props[d],m=h?h===!0?u.params:typeof h=="function"?h(u):h:null,g=mn(f,Te({},m,s,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(y.instances[d]=null)},ref:p}));if(is&&g.ref){const k={depth:c.value,name:y.name,path:y.path,meta:y.meta};(Fn(g.ref)?g.ref.map(D=>D.i):[g.ref.i]).forEach(D=>{D.__vrv_devtools=k})}return yp(o.default,{Component:g,route:u})||g}}});function yp(n,s){if(!n)return null;const o=n(s);return o.length===1?o[0]:o}const q3=M3;function G3(){const n=Sn(),s=n.parent&&n.parent.type.name;if(s&&(s==="KeepAlive"||s.includes("Transition"))){const o=s==="KeepAlive"?"keep-alive":"transition";Fe(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${o}>
    <component :is="Component" />
  </${o}>
</router-view>`)}}function Zo(n,s){const o=Te({},n,{matched:n.matched.map(t=>Y3(t,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:n.fullPath,tooltip:s,value:o}}}function ll(n){return{_custom:{display:n}}}let N3=0;function H3(n,s,o){if(s.__hasDevtools)return;s.__hasDevtools=!0;const t=N3++;RB({id:"org.vuejs.router"+(t?"."+t:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:n},l=>{typeof l.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),l.on.inspectComponent((d,y)=>{d.instanceData&&d.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:Zo(s.currentRoute.value,"Current Route")})}),l.on.visitComponentTree(({treeNode:d,componentInstance:y})=>{if(y.__vrv_devtools){const f=y.__vrv_devtools;d.tags.push({label:(f.name?`${f.name.toString()}: `:"")+f.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:ny})}Fn(y.__vrl_devtools)&&(y.__devtoolsApi=l,y.__vrl_devtools.forEach(f=>{let h=ty,m="";f.isExactActive?(h=oy,m="This is exactly active"):f.isActive&&(h=sy,m="This link is active"),d.tags.push({label:f.route.path,textColor:0,tooltip:m,backgroundColor:h})}))}),Ae(s.currentRoute,()=>{p(),l.notifyComponentUpdate(),l.sendInspectorTree(i),l.sendInspectorState(i)});const a="router:navigations:"+t;l.addTimelineLayer({id:a,label:`Router${t?" "+t:""} Navigations`,color:4237508}),s.onError((d,y)=>{l.addTimelineEvent({layerId:a,event:{title:"Error during Navigation",subtitle:y.fullPath,logType:"error",time:l.now(),data:{error:d},groupId:y.meta.__navigationId}})});let c=0;s.beforeEach((d,y)=>{const f={guard:ll("beforeEach"),from:Zo(y,"Current Location during this navigation"),to:Zo(d,"Target location")};Object.defineProperty(d.meta,"__navigationId",{value:c++}),l.addTimelineEvent({layerId:a,event:{time:l.now(),title:"Start of navigation",subtitle:d.fullPath,data:f,groupId:d.meta.__navigationId}})}),s.afterEach((d,y,f)=>{const h={guard:ll("afterEach")};f?(h.failure={_custom:{type:Error,readOnly:!0,display:f?f.message:"",tooltip:"Navigation Failure",value:f}},h.status=ll("❌")):h.status=ll("✅"),h.from=Zo(y,"Current Location during this navigation"),h.to=Zo(d,"Target location"),l.addTimelineEvent({layerId:a,event:{title:"End of navigation",subtitle:d.fullPath,time:l.now(),data:h,logType:f?"warning":"default",groupId:d.meta.__navigationId}})});const i="router-inspector:"+t;l.addInspector({id:i,label:"Routes"+(t?" "+t:""),icon:"book",treeFilterPlaceholder:"Search routes"});function p(){if(!u)return;const d=u;let y=o.getRoutes().filter(f=>!f.parent);y.forEach(ay),d.filter&&(y=y.filter(f=>Ba(f,d.filter.toLowerCase()))),y.forEach(f=>ry(f,s.currentRoute.value)),d.rootNodes=y.map(ly)}let u;l.on.getInspectorTree(d=>{u=d,d.app===n&&d.inspectorId===i&&p()}),l.on.getInspectorState(d=>{if(d.app===n&&d.inspectorId===i){const f=o.getRoutes().find(h=>h.record.__vd_id===d.nodeId);f&&(d.state={options:V3(f)})}}),l.sendInspectorTree(i),l.sendInspectorState(i)})}function j3(n){return n.optional?n.repeatable?"*":"?":n.repeatable?"+":""}function V3(n){const{record:s}=n,o=[{editable:!1,key:"path",value:s.path}];return s.name!=null&&o.push({editable:!1,key:"name",value:s.name}),o.push({editable:!1,key:"regexp",value:n.re}),n.keys.length&&o.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:n.keys.map(t=>`${t.name}${j3(t)}`).join(" "),tooltip:"Param keys",value:n.keys}}}),s.redirect!=null&&o.push({editable:!1,key:"redirect",value:s.redirect}),n.alias.length&&o.push({editable:!1,key:"aliases",value:n.alias.map(t=>t.record.path)}),Object.keys(n.record.meta).length&&o.push({editable:!1,key:"meta",value:n.record.meta}),o.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:n.score.map(t=>t.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:n.score}}}),o}const ny=15485081,sy=2450411,oy=8702998,U3=2282478,ty=16486972,W3=6710886;function ly(n){const s=[],{record:o}=n;o.name!=null&&s.push({label:String(o.name),textColor:0,backgroundColor:U3}),o.aliasOf&&s.push({label:"alias",textColor:0,backgroundColor:ty}),n.__vd_match&&s.push({label:"matches",textColor:0,backgroundColor:ny}),n.__vd_exactActive&&s.push({label:"exact",textColor:0,backgroundColor:oy}),n.__vd_active&&s.push({label:"active",textColor:0,backgroundColor:sy}),o.redirect&&s.push({label:typeof o.redirect=="string"?`redirect: ${o.redirect}`:"redirects",textColor:16777215,backgroundColor:W3});let t=o.__vd_id;return t==null&&(t=String(K3++),o.__vd_id=t),{id:t,label:o.path,tags:s,children:n.children.map(ly)}}let K3=0;const z3=/^\/(.*)\/([a-z]*)$/;function ry(n,s){const o=s.matched.length&&Ms(s.matched[s.matched.length-1],n.record);n.__vd_exactActive=n.__vd_active=o,o||(n.__vd_active=s.matched.some(t=>Ms(t,n.record))),n.children.forEach(t=>ry(t,s))}function ay(n){n.__vd_match=!1,n.children.forEach(ay)}function Ba(n,s){const o=String(n.re).match(z3);if(n.__vd_match=!1,!o||o.length<3)return!1;if(new RegExp(o[1].replace(/\$$/,""),o[2]).test(s))return n.children.forEach(c=>Ba(c,s)),n.record.path!=="/"||s==="/"?(n.__vd_match=n.re.test(s),!0):!1;const l=n.record.path.toLowerCase(),a=xt(l);return!s.startsWith("/")&&(a.includes(s)||l.includes(s))||a.startsWith(s)||l.startsWith(s)||n.record.name&&String(n.record.name).includes(s)?!0:n.children.some(c=>Ba(c,s))}function Y3(n,s){const o={};for(const t in n)s.includes(t)||(o[t]=n[t]);return o}function Z3(n){const s=i3(n.routes,n),o=n.parseQuery||x3,t=n.stringifyQuery||cp,l=n.history;if(!l)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const a=Yo(),c=Yo(),i=Yo(),p=ss(As);let u=As;is&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=kr.bind(null,S=>""+S),y=kr.bind(null,$3),f=kr.bind(null,xt);function h(S,oe){let Z,le;return Wd(S)?(Z=s.getRecordMatcher(S),le=oe):le=S,s.addRoute(le,Z)}function m(S){const oe=s.getRecordMatcher(S);oe?s.removeRoute(oe):Fe(`Cannot remove non-existent route "${String(S)}"`)}function B(){return s.getRoutes().map(S=>S.record)}function g(S){return!!s.getRecordMatcher(S)}function k(S,oe){if(oe=Te({},oe||p.value),typeof S=="string"){const de=wr(o,S,oe.path),_=s.resolve({path:de.path},oe),A=l.createHref(de.fullPath);return A.startsWith("//")?Fe(`Location "${S}" resolved to "${A}". A resolved location cannot start with multiple slashes.`):_.matched.length||Fe(`No match found for location with path "${S}"`),Te(de,_,{params:f(_.params),hash:xt(de.hash),redirectedFrom:void 0,href:A})}let Z;if("path"in S)"params"in S&&!("name"in S)&&Object.keys(S.params).length&&Fe(`Path "${S.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),Z=Te({},S,{path:wr(o,S.path,oe.path).path});else{const de=Te({},S.params);for(const _ in de)de[_]==null&&delete de[_];Z=Te({},S,{params:y(S.params)}),oe.params=y(oe.params)}const le=s.resolve(Z,oe),be=S.hash||"";be&&!be.startsWith("#")&&Fe(`A \`hash\` should always start with the character "#". Replace "${be}" with "#${be}".`),le.params=d(f(le.params));const $e=TB(t,Te({},S,{hash:k3(be),path:le.path})),he=l.createHref($e);return he.startsWith("//")?Fe(`Location "${S}" resolved to "${he}". A resolved location cannot start with multiple slashes.`):le.matched.length||Fe(`No match found for location with path "${"path"in S?S.path:S}"`),Te({fullPath:$e,hash:be,query:t===cp?F3(S.query):S.query||{}},le,{redirectedFrom:void 0,href:he})}function v(S){return typeof S=="string"?wr(o,S,p.value.path):Te({},S)}function D(S,oe){if(u!==S)return To(8,{from:oe,to:S})}function w(S){return Y(S)}function T(S){return w(Te(v(S),{replace:!0}))}function N(S){const oe=S.matched[S.matched.length-1];if(oe&&oe.redirect){const{redirect:Z}=oe;let le=typeof Z=="function"?Z(S):Z;if(typeof le=="string"&&(le=le.includes("?")||le.includes("#")?le=v(le):{path:le},le.params={}),!("path"in le)&&!("name"in le))throw Fe(`Invalid redirect found:
${JSON.stringify(le,null,2)}
 when navigating to "${S.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return Te({query:S.query,hash:S.hash,params:"path"in le?{}:S.params},le)}}function Y(S,oe){const Z=u=k(S),le=p.value,be=S.state,$e=S.force,he=S.replace===!0,de=N(Z);if(de)return Y(Te(v(de),{state:typeof de=="object"?Te({},be,de.state):be,force:$e,replace:he}),oe||Z);const _=Z;_.redirectedFrom=oe;let A;return!$e&&Ji(t,le,Z)&&(A=To(16,{to:_,from:le}),Me(le,le,!0,!1)),(A?Promise.resolve(A):K(_,le)).catch(E=>ts(E)?ts(E,2)?E:ve(E):ee(E,_,le)).then(E=>{if(E){if(ts(E,2))return Ji(t,k(E.to),_)&&oe&&(oe._count=oe._count?oe._count+1:1)>10?(Fe(`Detected an infinite redirection in a navigation guard when going from "${le.fullPath}" to "${_.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):Y(Te({replace:he},v(E.to),{state:typeof E.to=="object"?Te({},be,E.to.state):be,force:$e}),oe||_)}else E=ue(_,le,!0,he,be);return te(_,le,E),E})}function O(S,oe){const Z=D(S,oe);return Z?Promise.reject(Z):Promise.resolve()}function K(S,oe){let Z;const[le,be,$e]=Q3(S,oe);Z=Er(le.reverse(),"beforeRouteLeave",S,oe);for(const de of le)de.leaveGuards.forEach(_=>{Z.push(bs(_,S,oe))});const he=O.bind(null,S,oe);return Z.push(he),go(Z).then(()=>{Z=[];for(const de of a.list())Z.push(bs(de,S,oe));return Z.push(he),go(Z)}).then(()=>{Z=Er(be,"beforeRouteUpdate",S,oe);for(const de of be)de.updateGuards.forEach(_=>{Z.push(bs(_,S,oe))});return Z.push(he),go(Z)}).then(()=>{Z=[];for(const de of S.matched)if(de.beforeEnter&&!oe.matched.includes(de))if(Fn(de.beforeEnter))for(const _ of de.beforeEnter)Z.push(bs(_,S,oe));else Z.push(bs(de.beforeEnter,S,oe));return Z.push(he),go(Z)}).then(()=>(S.matched.forEach(de=>de.enterCallbacks={}),Z=Er($e,"beforeRouteEnter",S,oe),Z.push(he),go(Z))).then(()=>{Z=[];for(const de of c.list())Z.push(bs(de,S,oe));return Z.push(he),go(Z)}).catch(de=>ts(de,8)?de:Promise.reject(de))}function te(S,oe,Z){for(const le of i.list())le(S,oe,Z)}function ue(S,oe,Z,le,be){const $e=D(S,oe);if($e)return $e;const he=oe===As,de=is?history.state:{};Z&&(le||he?l.replace(S.fullPath,Te({scroll:he&&de&&de.scroll},be)):l.push(S.fullPath,be)),p.value=S,Me(S,oe,Z,he),ve()}let X;function De(){X||(X=l.listen((S,oe,Z)=>{if(!_s.listening)return;const le=k(S),be=N(le);if(be){Y(Te(be,{replace:!0}),le).catch(ut);return}u=le;const $e=p.value;is&&VB(ep($e.fullPath,Z.delta),tr()),K(le,$e).catch(he=>ts(he,12)?he:ts(he,2)?(Y(he.to,le).then(de=>{ts(de,20)&&!Z.delta&&Z.type===$t.pop&&l.go(-1,!1)}).catch(ut),Promise.reject()):(Z.delta&&l.go(-Z.delta,!1),ee(he,le,$e))).then(he=>{he=he||ue(le,$e,!1),he&&(Z.delta&&!ts(he,8)?l.go(-Z.delta,!1):Z.type===$t.pop&&ts(he,20)&&l.go(-1,!1)),te(le,$e,he)}).catch(ut)}))}let Pe=Yo(),xe=Yo(),Ne;function ee(S,oe,Z){ve(S);const le=xe.list();return le.length?le.forEach(be=>be(S,oe,Z)):(Fe("uncaught error during route navigation:"),console.error(S)),Promise.reject(S)}function pe(){return Ne&&p.value!==As?Promise.resolve():new Promise((S,oe)=>{Pe.add([S,oe])})}function ve(S){return Ne||(Ne=!S,De(),Pe.list().forEach(([oe,Z])=>S?Z(S):oe()),Pe.reset()),S}function Me(S,oe,Z,le){const{scrollBehavior:be}=n;if(!is||!be)return Promise.resolve();const $e=!Z&&UB(ep(S.fullPath,0))||(le||!Z)&&history.state&&history.state.scroll||null;return tn().then(()=>be(S,oe,$e)).then(he=>he&&jB(he)).catch(he=>ee(he,S,oe))}const Dn=S=>l.go(S);let ln;const _n=new Set,_s={currentRoute:p,listening:!0,addRoute:h,removeRoute:m,hasRoute:g,getRoutes:B,resolve:k,options:n,push:w,replace:T,go:Dn,back:()=>Dn(-1),forward:()=>Dn(1),beforeEach:a.add,beforeResolve:c.add,afterEach:i.add,onError:xe.add,isReady:pe,install(S){const oe=this;S.component("RouterLink",O3),S.component("RouterView",q3),S.config.globalProperties.$router=oe,Object.defineProperty(S.config.globalProperties,"$route",{enumerable:!0,get:()=>b(p)}),is&&!ln&&p.value===As&&(ln=!0,w(l.location).catch(be=>{Fe("Unexpected error when starting the router:",be)}));const Z={};for(const be in As)Z[be]=F(()=>p.value[be]);S.provide(fc,oe),S.provide(ey,Ve(Z)),S.provide(_a,p);const le=S.unmount;_n.add(S),S.unmount=function(){_n.delete(S),_n.size<1&&(u=As,X&&X(),X=null,p.value=As,ln=!1,Ne=!1),le()},is&&H3(S,oe,s)}};return _s}function go(n){return n.reduce((s,o)=>s.then(()=>o()),Promise.resolve())}function Q3(n,s){const o=[],t=[],l=[],a=Math.max(s.matched.length,n.matched.length);for(let c=0;c<a;c++){const i=s.matched[c];i&&(n.matched.find(u=>Ms(u,i))?t.push(i):o.push(i));const p=n.matched[c];p&&(s.matched.find(u=>Ms(u,p))||l.push(p))}return[o,t,l]}const $r=J(!1),yt=J(!1),wo=J(!1),J3=J(!0),ga=M_({xs:460,...I_}),ro=bB(),cy=dB(),X3=F(()=>ro.height.value-ro.width.value/Ss>180),iy=iB(Wn?document.body:null),Ro=R_(),eg=F(()=>{var n,s;return["INPUT","TEXTAREA"].includes(((n=Ro.value)==null?void 0:n.tagName)||"")||((s=Ro.value)==null?void 0:s.classList.contains("CodeMirror-code"))}),ng=F(()=>{var n;return["BUTTON","A"].includes(((n=Ro.value)==null?void 0:n.tagName)||"")});Kn("slidev-camera","default");Kn("slidev-mic","default");const fl=Kn("slidev-scale",0),dn=Kn("slidev-show-overview",!1),xr=Kn("slidev-presenter-cursor",!0),fp=Kn("slidev-show-editor",!1);Kn("slidev-editor-width",Wn?window.innerWidth*.4:100);const py=qd(dn);function mp(n,s,o,t=l=>l){return n*t(.5-s*(.5-o))}function sg(n){return[-n[0],-n[1]]}function Nn(n,s){return[n[0]+s[0],n[1]+s[1]]}function Pn(n,s){return[n[0]-s[0],n[1]-s[1]]}function Gn(n,s){return[n[0]*s,n[1]*s]}function og(n,s){return[n[0]/s,n[1]/s]}function Qo(n){return[n[1],-n[0]]}function hp(n,s){return n[0]*s[0]+n[1]*s[1]}function tg(n,s){return n[0]===s[0]&&n[1]===s[1]}function lg(n){return Math.hypot(n[0],n[1])}function rg(n){return n[0]*n[0]+n[1]*n[1]}function _p(n,s){return rg(Pn(n,s))}function uy(n){return og(n,lg(n))}function ag(n,s){return Math.hypot(n[1]-s[1],n[0]-s[0])}function Jo(n,s,o){let t=Math.sin(o),l=Math.cos(o),a=n[0]-s[0],c=n[1]-s[1],i=a*l-c*t,p=a*t+c*l;return[i+s[0],p+s[1]]}function Aa(n,s,o){return Nn(n,Gn(Pn(s,n),o))}function Bp(n,s,o){return Nn(n,Gn(s,o))}var{min:Ao,PI:cg}=Math,gp=.275,Xo=cg+1e-4;function ig(n,s={}){let{size:o=16,smoothing:t=.5,thinning:l=.5,simulatePressure:a=!0,easing:c=ee=>ee,start:i={},end:p={},last:u=!1}=s,{cap:d=!0,easing:y=ee=>ee*(2-ee)}=i,{cap:f=!0,easing:h=ee=>--ee*ee*ee+1}=p;if(n.length===0||o<=0)return[];let m=n[n.length-1].runningLength,B=i.taper===!1?0:i.taper===!0?Math.max(o,m):i.taper,g=p.taper===!1?0:p.taper===!0?Math.max(o,m):p.taper,k=Math.pow(o*t,2),v=[],D=[],w=n.slice(0,10).reduce((ee,pe)=>{let ve=pe.pressure;if(a){let Me=Ao(1,pe.distance/o),Dn=Ao(1,1-Me);ve=Ao(1,ee+(Dn-ee)*(Me*gp))}return(ee+ve)/2},n[0].pressure),T=mp(o,l,n[n.length-1].pressure,c),N,Y=n[0].vector,O=n[0].point,K=O,te=O,ue=K,X=!1;for(let ee=0;ee<n.length;ee++){let{pressure:pe}=n[ee],{point:ve,vector:Me,distance:Dn,runningLength:ln}=n[ee];if(ee<n.length-1&&m-ln<3)continue;if(l){if(a){let $e=Ao(1,Dn/o),he=Ao(1,1-$e);pe=Ao(1,w+(he-w)*($e*gp))}T=mp(o,l,pe,c)}else T=o/2;N===void 0&&(N=T);let _n=ln<B?y(ln/B):1,_s=m-ln<g?h((m-ln)/g):1;T=Math.max(.01,T*Math.min(_n,_s));let S=(ee<n.length-1?n[ee+1]:n[ee]).vector,oe=ee<n.length-1?hp(Me,S):1,Z=hp(Me,Y)<0&&!X,le=oe!==null&&oe<0;if(Z||le){let $e=Gn(Qo(Y),T);for(let he=1/13,de=0;de<=1;de+=he)te=Jo(Pn(ve,$e),ve,Xo*de),v.push(te),ue=Jo(Nn(ve,$e),ve,Xo*-de),D.push(ue);O=te,K=ue,le&&(X=!0);continue}if(X=!1,ee===n.length-1){let $e=Gn(Qo(Me),T);v.push(Pn(ve,$e)),D.push(Nn(ve,$e));continue}let be=Gn(Qo(Aa(S,Me,oe)),T);te=Pn(ve,be),(ee<=1||_p(O,te)>k)&&(v.push(te),O=te),ue=Nn(ve,be),(ee<=1||_p(K,ue)>k)&&(D.push(ue),K=ue),w=pe,Y=Me}let De=n[0].point.slice(0,2),Pe=n.length>1?n[n.length-1].point.slice(0,2):Nn(n[0].point,[1,1]),xe=[],Ne=[];if(n.length===1){if(!(B||g)||u){let ee=Bp(De,uy(Qo(Pn(De,Pe))),-(N||T)),pe=[];for(let ve=1/13,Me=ve;Me<=1;Me+=ve)pe.push(Jo(ee,De,Xo*2*Me));return pe}}else{if(!(B||g&&n.length===1))if(d)for(let pe=1/13,ve=pe;ve<=1;ve+=pe){let Me=Jo(D[0],De,Xo*ve);xe.push(Me)}else{let pe=Pn(v[0],D[0]),ve=Gn(pe,.5),Me=Gn(pe,.51);xe.push(Pn(De,ve),Pn(De,Me),Nn(De,Me),Nn(De,ve))}let ee=Qo(sg(n[n.length-1].vector));if(g||B&&n.length===1)Ne.push(Pe);else if(f){let pe=Bp(Pe,ee,T);for(let ve=1/29,Me=ve;Me<1;Me+=ve)Ne.push(Jo(pe,Pe,Xo*3*Me))}else Ne.push(Nn(Pe,Gn(ee,T)),Nn(Pe,Gn(ee,T*.99)),Pn(Pe,Gn(ee,T*.99)),Pn(Pe,Gn(ee,T)))}return v.concat(Ne,D.reverse(),xe)}function pg(n,s={}){var o;let{streamline:t=.5,size:l=16,last:a=!1}=s;if(n.length===0)return[];let c=.15+(1-t)*.85,i=Array.isArray(n[0])?n:n.map(({x:h,y:m,pressure:B=.5})=>[h,m,B]);if(i.length===2){let h=i[1];i=i.slice(0,-1);for(let m=1;m<5;m++)i.push(Aa(i[0],h,m/4))}i.length===1&&(i=[...i,[...Nn(i[0],[1,1]),...i[0].slice(2)]]);let p=[{point:[i[0][0],i[0][1]],pressure:i[0][2]>=0?i[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],u=!1,d=0,y=p[0],f=i.length-1;for(let h=1;h<i.length;h++){let m=a&&h===f?i[h].slice(0,2):Aa(y.point,i[h],c);if(tg(y.point,m))continue;let B=ag(m,y.point);if(d+=B,h<f&&!u){if(d<l)continue;u=!0}y={point:m,pressure:i[h][2]>=0?i[h][2]:.5,vector:uy(Pn(y.point,m)),distance:B,runningLength:d},p.push(y)}return p[0].vector=((o=p[1])==null?void 0:o.vector)||[0,0],p}function ug(n,s={}){return ig(pg(n,s),s)}var dg=()=>({events:{},emit(n,...s){let o=this.events[n]||[];for(let t=0,l=o.length;t<l;t++)o[t](...s)},on(n,s){var o;return(o=this.events[n])!=null&&o.push(s)||(this.events[n]=[s]),()=>{var t;this.events[n]=(t=this.events[n])==null?void 0:t.filter(l=>s!==l)}}});function Ol(n,s){return n-s}function yg(n){return n<0?-1:1}function Tl(n){return[Math.abs(n),yg(n)]}function dy(){const n=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${n()+n()}-${n()}-${n()}-${n()}-${n()}${n()}${n()}`}var fg=2,ps=fg,qo=class{constructor(n){this.drauu=n,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(n){}onUnselected(){}onStart(n){}onMove(n){return!1}onEnd(n){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(n){var s;const o=this.drauu.el,t=this.drauu.options.coordinateScale??1;if(this.drauu.options.coordinateTransform===!1){const l=this.drauu.el.getBoundingClientRect();return{x:(n.pageX-l.left)*t,y:(n.pageY-l.top)*t,pressure:n.pressure}}else{const l=this.drauu.svgPoint;l.x=n.clientX,l.y=n.clientY;const a=l.matrixTransform((s=o.getScreenCTM())==null?void 0:s.inverse());return{x:a.x*t,y:a.y*t,pressure:n.pressure}}}createElement(n,s){const o=document.createElementNS("http://www.w3.org/2000/svg",n),t=s?{...this.brush,...s}:this.brush;return o.setAttribute("fill",t.fill??"transparent"),o.setAttribute("stroke",t.color),o.setAttribute("stroke-width",t.size.toString()),o.setAttribute("stroke-linecap","round"),t.dasharray&&o.setAttribute("stroke-dasharray",t.dasharray),o}attr(n,s){this.el.setAttribute(n,typeof s=="string"?s:s.toFixed(ps))}_setEvent(n){this.event=n,this.point=this.getMousePosition(n)}_eventDown(n){return this._setEvent(n),this.start=this.point,this.onStart(this.point)}_eventMove(n){return this._setEvent(n),this.onMove(this.point)}_eventUp(n){return this._setEvent(n),this.onEnd(this.point)}},mg=class extends qo{constructor(){super(...arguments),this.points=[]}onStart(n){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[n],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(n){return this.el||this.onStart(n),this.points[this.points.length-1]!==n&&this.points.push(n),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const n=this.el;return this.el=null,!!n}getSvgData(n){const s=ug(n,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!s.length)return"";const o=s.reduce((t,[l,a],c,i)=>{const[p,u]=i[(c+1)%i.length];return t.push(l,a,(l+p)/2,(a+u)/2),t},["M",...s[0],"Q"]);return o.push("Z"),o.map(t=>typeof t=="number"?t.toFixed(2):t).join(" ")}},hg=class extends qo{onStart(n){return this.el=this.createElement("ellipse"),this.attr("cx",n.x),this.attr("cy",n.y),this.el}onMove(n){if(!this.el||!this.start)return!1;let[s,o]=Tl(n.x-this.start.x),[t,l]=Tl(n.y-this.start.y);if(this.shiftPressed){const a=Math.min(s,t);s=a,t=a}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",s),this.attr("ry",t);else{const[a,c]=[this.start.x,this.start.x+s*o].sort(Ol),[i,p]=[this.start.y,this.start.y+t*l].sort(Ol);this.attr("cx",(a+c)/2),this.attr("cy",(i+p)/2),this.attr("rx",(c-a)/2),this.attr("ry",(p-i)/2)}return!0}onEnd(){const n=this.el;return this.el=null,!(!n||!n.getTotalLength())}};function yy(n,s){const o=document.createElementNS("http://www.w3.org/2000/svg","defs"),t=document.createElementNS("http://www.w3.org/2000/svg","marker"),l=document.createElementNS("http://www.w3.org/2000/svg","path");return l.setAttribute("fill",s),t.setAttribute("id",n),t.setAttribute("viewBox","0 -5 10 10"),t.setAttribute("refX","5"),t.setAttribute("refY","0"),t.setAttribute("markerWidth","4"),t.setAttribute("markerHeight","4"),t.setAttribute("orient","auto"),l.setAttribute("d","M0,-5L10,0L0,5"),t.appendChild(l),o.appendChild(t),o}var _g=class extends qo{onStart(n){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",n.x),this.attr("y1",n.y),this.attr("x2",n.x),this.attr("y2",n.y),this.brush.arrowEnd){const s=dy(),o=document.createElementNS("http://www.w3.org/2000/svg","g");return o.append(yy(s,this.brush.color)),o.append(this.el),this.attr("marker-end",`url(#${s})`),o}return this.el}onMove(n){if(!this.el)return!1;let{x:s,y:o}=n;if(this.shiftPressed){const t=n.x-this.start.x,l=n.y-this.start.y;if(l!==0){let a=t/l;a=Math.round(a),Math.abs(a)<=1?(s=this.start.x+l*a,o=this.start.y+l):(s=this.start.x+t,o=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-s),this.attr("y1",this.start.y*2-o),this.attr("x2",s),this.attr("y2",o)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",s),this.attr("y2",o)),!0}onEnd(){const n=this.el;return this.el=null,!(!n||n.getTotalLength()<5)}},Bg=class extends qo{onStart(n){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",n.x),this.attr("y",n.y),this.el}onMove(n){if(!this.el||!this.start)return!1;let[s,o]=Tl(n.x-this.start.x),[t,l]=Tl(n.y-this.start.y);if(this.shiftPressed){const a=Math.min(s,t);s=a,t=a}if(this.altPressed)this.attr("x",this.start.x-s),this.attr("y",this.start.y-t),this.attr("width",s*2),this.attr("height",t*2);else{const[a,c]=[this.start.x,this.start.x+s*o].sort(Ol),[i,p]=[this.start.y,this.start.y+t*l].sort(Ol);this.attr("x",a),this.attr("y",i),this.attr("width",c-a),this.attr("height",p-i)}return!0}onEnd(){const n=this.el;return this.el=null,!(!n||!n.getTotalLength())}};function gg(n,s){const o=n.x-s.x,t=n.y-s.y;return o*o+t*t}function Ag(n,s,o){let t=s.x,l=s.y,a=o.x-t,c=o.y-l;if(a!==0||c!==0){const i=((n.x-t)*a+(n.y-l)*c)/(a*a+c*c);i>1?(t=o.x,l=o.y):i>0&&(t+=a*i,l+=c*i)}return a=n.x-t,c=n.y-l,a*a+c*c}function Cg(n,s){let o=n[0];const t=[o];let l;for(let a=1,c=n.length;a<c;a++)l=n[a],gg(l,o)>s&&(t.push(l),o=l);return o!==l&&l&&t.push(l),t}function Ca(n,s,o,t,l){let a=t,c=0;for(let i=s+1;i<o;i++){const p=Ag(n[i],n[s],n[o]);p>a&&(c=i,a=p)}a>t&&(c-s>1&&Ca(n,s,c,t,l),l.push(n[c]),o-c>1&&Ca(n,c,o,t,l))}function vg(n,s){const o=n.length-1,t=[n[0]];return Ca(n,0,o,s,t),t.push(n[o]),t}function Ap(n,s,o=!1){if(n.length<=2)return n;const t=s!==void 0?s*s:1;return n=o?n:Cg(n,t),n=vg(n,t),n}var Dg=class extends qo{constructor(){super(...arguments),this.points=[],this.count=0}onStart(n){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[n],this.brush.arrowEnd){this.arrowId=dy();const s=yy(this.arrowId,this.brush.color);this.el.appendChild(s)}return this.el}onMove(n){return this.el||this.onStart(n),this.points[this.points.length-1]!==n&&(this.points.push(n),this.count+=1),this.count>5&&(this.points=Ap(this.points,1,!0),this.count=0),this.attr("d",vp(this.points)),!0}onEnd(){const n=this.el;return this.el=null,!(!n||(n.setAttribute("d",vp(Ap(this.points,1,!0))),!n.getTotalLength()))}};function bg(n,s){const o=s.x-n.x,t=s.y-n.y;return{length:Math.sqrt(o**2+t**2),angle:Math.atan2(t,o)}}function Cp(n,s,o,t){const l=s||n,a=o||n,c=.2,i=bg(l,a),p=i.angle+(t?Math.PI:0),u=i.length*c,d=n.x+Math.cos(p)*u,y=n.y+Math.sin(p)*u;return{x:d,y}}function kg(n,s,o){const t=Cp(o[s-1],o[s-2],n),l=Cp(n,o[s-1],o[s+1],!0);return`C ${t.x.toFixed(ps)},${t.y.toFixed(ps)} ${l.x.toFixed(ps)},${l.y.toFixed(ps)} ${n.x.toFixed(ps)},${n.y.toFixed(ps)}`}function vp(n){return n.reduce((s,o,t,l)=>t===0?`M ${o.x.toFixed(ps)},${o.y.toFixed(ps)}`:`${s} ${kg(o,t,l)}`,"")}var wg=class extends qo{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(n){const s=(o,t)=>{if(o&&o.length)for(let l=0;l<o.length;l++){const a=o[l];if(a.getTotalLength){const c=a.getTotalLength();for(let i=0;i<this.pathSubFactor;i++){const p=a.getPointAtLength(c*i/this.pathSubFactor),u=a.getPointAtLength(c*(i+1)/this.pathSubFactor);this.pathFragments.push({x1:p.x,x2:u.x,y1:p.y,y2:u.y,segment:i,element:t||a})}}else a.children&&s(a.children,a)}};n&&s(n.children)}onUnselected(){this.pathFragments=[]}onStart(n){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=n.x,this.svgPointPrevious.y=n.y}onMove(n){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=n.x,this.svgPointCurrent.y=n.y;const s=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,s}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const n=[];if(this.pathFragments.length)for(let s=0;s<this.pathFragments.length;s++){const o=this.pathFragments[s],t={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(o,t)&&(o.element.remove(),n.push(s))}return n.length&&(this.pathFragments=this.pathFragments.filter((s,o)=>!n.includes(o))),n.length>0}lineLineIntersect(n,s){const o=n.x1,t=n.x2,l=s.x1,a=s.x2,c=n.y1,i=n.y2,p=s.y1,u=s.y2,d=(o-t)*(p-u)-(c-i)*(l-a),y=(o*i-c*t)*(l-a)-(o-t)*(l*u-p*a),f=(o*i-c*t)*(p-u)-(c-i)*(l*u-p*a),h=(m,B,g)=>m>=B&&m<=g?!0:m>=g&&m<=B;if(d===0)return!1;{const m={x:y/d,y:f/d};return h(m.x,o,t)&&h(m.y,c,i)&&h(m.x,l,a)&&h(m.y,p,u)}}};function Eg(n){return{draw:new Dg(n),stylus:new mg(n),line:new _g(n),rectangle:new Bg(n),ellipse:new hg(n),eraseLine:new wg(n)}}var $g=class{constructor(n={}){this.options=n,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=dg(),this._models=Eg(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),n.el&&this.mount(n.el,n.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(n){this._models[this.mode].onUnselected(),this.options.brush.mode=n,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(n){this.options.brush=n}resolveSelector(n){return typeof n=="string"?document.querySelector(n):n||null}mount(n,s){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(n),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const o=this.resolveSelector(s)||this.el,t=this.eventStart.bind(this),l=this.eventMove.bind(this),a=this.eventEnd.bind(this),c=this.eventKeyboard.bind(this);o.addEventListener("pointerdown",t,{passive:!1}),window.addEventListener("pointermove",l,{passive:!1}),window.addEventListener("pointerup",a,{passive:!1}),window.addEventListener("pointercancel",a,{passive:!1}),window.addEventListener("keydown",c,!1),window.addEventListener("keyup",c,!1),this._disposables.push(()=>{o.removeEventListener("pointerdown",t),window.removeEventListener("pointermove",l),window.removeEventListener("pointerup",a),window.removeEventListener("pointercancel",a),window.removeEventListener("keydown",c,!1),window.removeEventListener("keyup",c,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(n=>n()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(n,s){return this._emitter.on(n,s)}undo(){const n=this.el;return n.lastElementChild?(this._undoStack.push(n.lastElementChild.cloneNode(!0)),n.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var n;return!!((n=this.el)!=null&&n.lastElementChild)}eventMove(n){!this.acceptsInput(n)||!this.drawing||this.model._eventMove(n)&&(n.stopPropagation(),n.preventDefault(),this._emitter.emit("changed"))}eventStart(n){this.acceptsInput(n)&&(n.stopPropagation(),n.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(n),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(n){if(!this.acceptsInput(n)||!this.drawing)return;const s=this.model._eventUp(n);s?(s instanceof Element&&s!==this._currentNode&&(this._currentNode=s),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(n){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(n.pointerType)}eventKeyboard(n){this.shiftPressed===n.shiftKey&&this.altPressed===n.altKey||(this.shiftPressed=n.shiftKey,this.altPressed=n.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const n=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",n)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(n){this.clear(),this.el.innerHTML=n}};function xg(n){return new $g(n)}const va=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],es=Kn("slidev-drawing-enabled",!1),y$=Kn("slidev-drawing-pinned",!1),Fg=J(!1),Sg=J(!1),Rg=J(!1),Ft=J(!1),Js=l_(Kn("slidev-drawing-brush",{color:va[0],size:4,mode:"stylus"})),Dp=J("stylus"),fy=F(()=>Se.drawings.syncAll||gn.value);let St=!1;const et=F({get(){return Dp.value},set(n){Dp.value=n,n==="arrow"?(Js.mode="line",Js.arrowEnd=!0):(Js.mode=n,Js.arrowEnd=!1)}}),Ig=Ve({brush:Js,acceptsInputTypes:F(()=>es.value&&(!Se.drawings.presenterOnly||gn.value)?void 0:["pen"]),coordinateTransform:!1}),hn=Wl(xg(Ig));function Pg(){hn.clear(),fy.value&&Od(ze.value,"")}function mc(){var n;Sg.value=hn.canRedo(),Fg.value=hn.canUndo(),Rg.value=!!((n=hn.el)!=null&&n.children.length)}function Og(n){St=!0;const s=Il[n||ze.value];s!=null?hn.load(s):hn.clear(),mc(),St=!1}hn.on("changed",()=>{if(mc(),!St){const n=hn.dump(),s=ze.value;(Il[s]||"")!==n&&fy.value&&Od(s,hn.dump())}});Kh(n=>{St=!0,n[ze.value]!=null&&hn.load(n[ze.value]||""),St=!1,mc()});tn(()=>{Ae(ze,()=>{hn.mounted&&Og()},{immediate:!0})});hn.on("start",()=>Ft.value=!0);hn.on("end",()=>Ft.value=!1);window.addEventListener("keydown",n=>{if(!es.value)return;const s=!n.ctrlKey&&!n.altKey&&!n.shiftKey&&!n.metaKey;let o=!0;n.code==="KeyZ"&&(n.ctrlKey||n.metaKey)?n.shiftKey?hn.redo():hn.undo():n.code==="Escape"?es.value=!1:n.code==="KeyL"&&s?et.value="line":n.code==="KeyA"&&s?et.value="arrow":n.code==="KeyS"&&s?et.value="stylus":n.code==="KeyR"&&s?et.value="rectangle":n.code==="KeyE"&&s?et.value="ellipse":n.code==="KeyC"&&s?Pg():n.code.startsWith("Digit")&&s&&+n.code[5]<=va.length?Js.color=va[+n.code[5]-1]:o=!1,o&&(n.preventDefault(),n.stopPropagation())},!1);function Qe(...n){return F(()=>n.every(s=>rn(s)))}function kn(n){return F(()=>!rn(n))}const bp=Y_(),Fr=Kn("slidev-color-schema","auto"),Da=F(()=>Se.colorSchema!=="auto"),hc=F({get(){return Da.value?Se.colorSchema==="dark":Fr.value==="auto"?bp.value:Fr.value==="dark"},set(n){Da.value||(Fr.value=n===bp.value?"auto":n?"dark":"light")}}),my=qd(hc);Wn&&Ae(hc,n=>{const s=document.querySelector("html");s.classList.toggle("dark",n),s.classList.toggle("light",!n)},{immediate:!0});const ml=J(1),hl=F(()=>Ze.length-1),xn=J(0),_c=J(0);function Tg(){xn.value>ml.value&&(xn.value-=1)}function Lg(){xn.value<hl.value&&(xn.value+=1)}function Mg(){if(xn.value>ml.value){let n=xn.value-_c.value;n<ml.value&&(n=ml.value),xn.value=n}}function qg(){if(xn.value<hl.value){let n=xn.value+_c.value;n>hl.value&&(n=hl.value),xn.value=n}}function Gg(){const{escape:n,space:s,shift:o,left:t,right:l,up:a,down:c,enter:i,d:p,g:u,o:d}=cy;let y=[{name:"next_space",key:Qe(s,kn(o)),fn:Ps,autoRepeat:!0},{name:"prev_space",key:Qe(s,o),fn:Os,autoRepeat:!0},{name:"next_right",key:Qe(l,kn(o),kn(dn)),fn:Ps,autoRepeat:!0},{name:"prev_left",key:Qe(t,kn(o),kn(dn)),fn:Os,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:Ps,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:Os,autoRepeat:!0},{name:"next_down",key:Qe(c,kn(dn)),fn:It,autoRepeat:!0},{name:"prev_up",key:Qe(a,kn(dn)),fn:()=>Pt(!1),autoRepeat:!0},{name:"next_shift",key:Qe(l,o),fn:It,autoRepeat:!0},{name:"prev_shift",key:Qe(t,o),fn:()=>Pt(!1),autoRepeat:!0},{name:"toggle_dark",key:Qe(p,kn(es)),fn:my},{name:"toggle_overview",key:Qe(d,kn(es)),fn:py},{name:"hide_overview",key:Qe(n,kn(es)),fn:()=>dn.value=!1},{name:"goto",key:Qe(u,kn(es)),fn:()=>wo.value=!wo.value},{name:"next_overview",key:Qe(l,dn),fn:Lg},{name:"prev_overview",key:Qe(t,dn),fn:Tg},{name:"up_overview",key:Qe(a,dn),fn:Mg},{name:"down_overview",key:Qe(c,dn),fn:qg},{name:"goto_from_overview",key:Qe(i,dn),fn:()=>{Mo(xn.value),dn.value=!1}}];const f=new Set(y.map(m=>m.name));if(y.filter(m=>m.name&&f.has(m.name)).length===0){const m=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(m),console.warn(m)}return y}const hy=Qe(kn(eg),kn(ng),J3);function Ng(n,s,o=!1){typeof n=="string"&&(n=cy[n]);const t=Qe(n,hy);let l=0,a;const c=()=>{if(clearTimeout(a),!t.value){l=0;return}o&&(a=setTimeout(c,Math.max(1e3-l*250,150)),l++),s()};return Ae(t,c,{flush:"sync"})}function Hg(n,s){return S_(n,o=>{hy.value&&(o.repeat||s())})}function jg(){const n=Gg();new Map(n.map(o=>[o.key,o])).forEach(o=>{o.fn&&Ng(o.key,o.fn,o.autoRepeat)}),Hg("f",()=>iy.toggle())}const Vg={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ug=e("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),Wg=[Ug];function Kg(n,s){return C(),se("svg",Vg,Wg)}const zg={name:"carbon-close",render:Kg};function Bc(n,s=""){var l,a;const o=["slidev-page",s],t=(a=(l=n==null?void 0:n.meta)==null?void 0:l.slide)==null?void 0:a.no;return t!=null&&o.push(`slidev-page-${t}`),o.filter(Boolean).join(" ")}const Yg=Ie({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(n){const s=n;$(I);const o=J(),t=cB(o),l=F(()=>s.width?s.width:t.width.value),a=F(()=>s.width?s.width/Ss:t.height.value);s.width&&yo(()=>{o.value&&(o.value.style.width=`${l.value}px`,o.value.style.height=`${a.value}px`)});const c=F(()=>l.value/a.value),i=F(()=>s.scale&&!Lo.value?s.scale:c.value<Ss?l.value/Rs:a.value*Ss/Rs),p=F(()=>({height:`${pc}px`,width:`${Rs}px`,transform:`translate(-50%, -50%) scale(${i.value})`})),u=F(()=>({"select-none":!Se.selectable,"slidev-code-line-numbers":Se.lineNumbers}));return En(Id,i),(d,y)=>(C(),se("div",{id:"slide-container",ref_key:"root",ref:o,class:Ke(b(u))},[e("div",{id:"slide-content",style:Xe(b(p))},[Vn(d.$slots,"default")],4),Vn(d.$slots,"controls")],2))}});const P=(n,s)=>{const o=n.__vccOpts||n;for(const[t,l]of s)o[t]=l;return o},_y=P(Yg,[["__file","/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/node_modules/@slidev/client/internals/SlideContainer.vue"]]),gc=Ie({name:"SlideWrapper",props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(n,{emit:s}){const o=Xn(n,"clicks",s),t=Xn(n,"clicksElements",s),l=Xn(n,"clicksDisabled",s),a=Xn(n,"clicksOrderMap",s);t.value.length=0,En(Sh,n.route),En(Rh,n.context),En(it,o),En(pt,l),En(Ys,t),En(aa,a)},render(){var n,s;return this.$props.is?mn(this.$props.is):(s=(n=this.$slots)==null?void 0:n.default)==null?void 0:s.call(n)}}),Zg=["innerHTML"],Qg=Ie({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(n){return $(I),(s,o)=>b(Il)[n.page]?(C(),se("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:b(Il)[n.page]},null,8,Zg)):ke("v-if",!0)}}),By=P(Qg,[["__file","/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),Jg=Object.freeze(Object.defineProperty({__proto__:null,default:By},Symbol.toStringTag,{value:"Module"})),Xg={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},eA=["onClick"],nA=Ie({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(n,{emit:s}){const o=n;$(I);const t=Xn(o,"modelValue",s);function l(){t.value=!1}function a(h){Mo(h),l()}function c(h){return h===xn.value}const i=ga.smaller("xs"),p=ga.smaller("sm"),u=4*16*2,d=2*16,y=F(()=>i.value?ro.width.value-u:p.value?(ro.width.value-u-d)/2:300),f=F(()=>Math.floor((ro.width.value-u)/(y.value+d)));return yo(()=>{xn.value=ze.value,_c.value=f.value}),(h,m)=>{const B=zg;return C(),se(Oe,null,[er(e("div",Xg,[e("div",{class:"grid gap-y-4 gap-x-8 w-full",style:Xe(`grid-template-columns: repeat(auto-fit,minmax(${b(y)}px,1fr))`)},[(C(!0),se(Oe,null,jt(b(Ze).slice(0,-1),(g,k)=>(C(),se("div",{key:g.path,class:"relative"},[e("div",{class:Ke(["inline-block border rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":c(k+1),"border-gray-400":!c(k+1)}]),style:Xe(b(uc)),onClick:v=>a(+g.path)},[(C(),R(_y,{key:g.path,width:b(y),"clicks-disabled":!0,class:"pointer-events-none"},{default:x(()=>[q(b(gc),{is:g==null?void 0:g.component,"clicks-disabled":!0,class:Ke(b(Bc)(g)),route:g,context:"overview"},null,8,["is","class","route"]),q(By,{page:+g.path},null,8,["page"])]),_:2},1032,["width"]))],14,eA),e("div",{class:"absolute top-0 opacity-50",style:Xe(`left: ${b(y)+5}px`)},ao(k+1),5)]))),128))],4)],512),[[Dd,b(t)]]),b(t)?(C(),se("button",{key:0,class:"fixed text-2xl top-4 right-4 slidev-icon-btn text-gray-400",onClick:l},[q(B)])):ke("v-if",!0)],64)}}});const sA=P(nA,[["__file","/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),oA="/regain-control-of-your-backends-with-sylius-and-api-platform/assets/logo-b72bde5d.png",tA={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},lA=Ie({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(n,{emit:s}){const o=n;$(I);const t=Xn(o,"modelValue",s);function l(){t.value=!1}return(a,c)=>(C(),R(Ku,null,[b(t)?(C(),se("div",tA,[e("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:c[0]||(c[0]=i=>l())}),e("div",{class:Ke(["m-auto rounded-md bg-main shadow",o.class]),"dark:border":"~ gray-400 opacity-10"},[Vn(a.$slots,"default")],2)])):ke("v-if",!0)],1024))}}),rA=P(lA,[["__file","/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/node_modules/@slidev/client/internals/Modal.vue"]]),aA={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},cA=["innerHTML"],iA=e("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[e("div",{class:"flex gap-1 children:my-auto"},[e("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),e("img",{class:"w-5 h-5",src:oA,alt:"Slidev"}),e("div",{style:{color:"#2082A6"}},[e("b",null,"Sli"),r("dev ")])])],-1),pA=Ie({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(n,{emit:s}){const o=n;$(I);const t=Xn(o,"modelValue",s),l=F(()=>typeof Se.info=="string");return(a,c)=>(C(),R(rA,{modelValue:b(t),"onUpdate:modelValue":c[0]||(c[0]=i=>Re(t)?t.value=i:null),class:"px-6 py-4"},{default:x(()=>[e("div",aA,[b(l)?(C(),se("div",{key:0,class:"mb-4",innerHTML:b(Se).info},null,8,cA)):ke("v-if",!0),iA])]),_:1},8,["modelValue"]))}});const uA=P(pA,[["__file","/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/node_modules/@slidev/client/internals/InfoDialog.vue"]]),dA=["disabled","onKeydown"],yA=Ie({__name:"Goto",setup(n){$(I);const s=J(),o=J(""),t=F(()=>{if(o.value.startsWith("/"))return!!Ze.find(c=>c.path===o.value.substring(1));{const c=+o.value;return!isNaN(c)&&c>0&&c<=Iy.value}});function l(){t.value&&(o.value.startsWith("/")?Mo(o.value.substring(1)):Mo(+o.value)),a()}function a(){wo.value=!1}return Ae(wo,async c=>{var i,p;c?(await tn(),o.value="",(i=s.value)==null||i.focus()):(p=s.value)==null||p.blur()}),Ae(o,c=>{c.match(/^[^0-9/]/)&&(o.value=o.value.substring(1))}),(c,i)=>(C(),se("div",{id:"slidev-goto-dialog",class:Ke(["fixed right-5 bg-main transform transition-all",b(wo)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[er(e("input",{ref_key:"input",ref:s,"onUpdate:modelValue":i[0]||(i[0]=p=>o.value=p),type:"text",disabled:!b(wo),class:Ke(["outline-none bg-transparent",{"text-red-400":!b(t)&&o.value}]),placeholder:"Goto...",onKeydown:[bi(l,["enter"]),bi(a,["escape"])],onBlur:a},null,42,dA),[[T5,o.value]])],2))}}),fA=P(yA,[["__file","/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/node_modules/@slidev/client/internals/Goto.vue"]]),mA=Ie({__name:"Controls",setup(n){$(I);const s=ss(),o=ss();return(t,l)=>(C(),se(Oe,null,[q(sA,{modelValue:b(dn),"onUpdate:modelValue":l[0]||(l[0]=a=>Re(dn)?dn.value=a:null)},null,8,["modelValue"]),q(fA),b(s)?(C(),R(b(s),{key:0})):ke("v-if",!0),b(o)?(C(),R(b(o),{key:1,modelValue:b($r),"onUpdate:modelValue":l[1]||(l[1]=a=>Re($r)?$r.value=a:null)},null,8,["modelValue"])):ke("v-if",!0),b(Se).info?(C(),R(uA,{key:2,modelValue:b(yt),"onUpdate:modelValue":l[2]||(l[2]=a=>Re(yt)?yt.value=a:null)},null,8,["modelValue"])):ke("v-if",!0)],64))}}),hA=P(mA,[["__file","/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/node_modules/@slidev/client/internals/Controls.vue"]]),_A={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},BA=e("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),gA=[BA];function AA(n,s){return C(),se("svg",_A,gA)}const CA={name:"carbon-settings-adjust",render:AA},vA={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},DA=e("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),bA=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),kA=[DA,bA];function wA(n,s){return C(),se("svg",vA,kA)}const EA={name:"carbon-information",render:wA},$A={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},xA=e("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),FA=[xA];function SA(n,s){return C(),se("svg",$A,FA)}const RA={name:"carbon-download",render:SA},IA={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},PA=e("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),OA=e("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),TA=[PA,OA];function LA(n,s){return C(),se("svg",IA,TA)}const MA={name:"carbon-user-speaker",render:LA},qA={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},GA=e("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),NA=e("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),HA=[GA,NA];function jA(n,s){return C(),se("svg",qA,HA)}const VA={name:"carbon-presentation-file",render:jA},UA={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},WA=e("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),KA=[WA];function zA(n,s){return C(),se("svg",UA,KA)}const YA={name:"carbon-pen",render:zA},ZA={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},QA=e("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),JA=e("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),XA=[QA,JA];function e7(n,s){return C(),se("svg",ZA,XA)}const n7={name:"ph-cursor-duotone",render:e7},s7={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},o7=e("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),t7=[o7];function l7(n,s){return C(),se("svg",s7,t7)}const gy={name:"ph-cursor-fill",render:l7},r7={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},a7=e("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),c7=[a7];function i7(n,s){return C(),se("svg",r7,c7)}const p7={name:"carbon-sun",render:i7},u7={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},d7=e("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),y7=[d7];function f7(n,s){return C(),se("svg",u7,y7)}const m7={name:"carbon-moon",render:f7},h7={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},_7=e("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),B7=[_7];function g7(n,s){return C(),se("svg",h7,B7)}const A7={name:"carbon-apps",render:g7},C7={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},v7=e("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),D7=[v7];function b7(n,s){return C(),se("svg",C7,D7)}const k7={name:"carbon-arrow-right",render:b7},w7={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},E7=e("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),$7=[E7];function x7(n,s){return C(),se("svg",w7,$7)}const F7={name:"carbon-arrow-left",render:x7},S7={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},R7=e("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),I7=[R7];function P7(n,s){return C(),se("svg",S7,I7)}const O7={name:"carbon-maximize",render:P7},T7={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},L7=e("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),M7=[L7];function q7(n,s){return C(),se("svg",T7,M7)}const G7={name:"carbon-minimize",render:q7},N7={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},H7=e("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),j7=[H7];function V7(n,s){return C(),se("svg",N7,j7)}const U7={name:"carbon-checkmark",render:V7},W7={class:"select-list"},K7={class:"title"},z7={class:"items"},Y7=["onClick"],Z7=Ie({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(n,{emit:s}){const o=n;$(I);const t=Xn(o,"modelValue",s,{passive:!0});return(l,a)=>{const c=U7;return C(),se("div",W7,[e("div",K7,ao(n.title),1),e("div",z7,[(C(!0),se(Oe,null,jt(n.items,i=>(C(),se("div",{key:i.value,class:Ke(["item",{active:b(t)===i.value}]),onClick:()=>{var p;t.value=i.value,(p=i.onClick)==null||p.call(i)}},[q(c,{class:Ke(["text-green-500",{"opacity-0":b(t)!==i.value}])},null,8,["class"]),r(" "+ao(i.display||i.value),1)],10,Y7))),128))])])}}});const Q7=P(Z7,[["__scopeId","data-v-3f89fa11"],["__file","/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/node_modules/@slidev/client/internals/SelectList.vue"]]),J7={class:"text-sm"},X7=Ie({__name:"Settings",setup(n){$(I);const s=[{display:"Fit",value:0},{display:"1:1",value:1}];return(o,t)=>(C(),se("div",J7,[q(Q7,{modelValue:b(fl),"onUpdate:modelValue":t[0]||(t[0]=l=>Re(fl)?fl.value=l:null),title:"Scale",items:s},null,8,["modelValue"])]))}}),e1=P(X7,[["__file","/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/node_modules/@slidev/client/internals/Settings.vue"]]),n1={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},s1=Ie({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(n,{emit:s}){const o=n;$(I);const t=Xn(o,"modelValue",s,{passive:!0}),l=J();return x_(l,()=>{t.value=!1}),(a,c)=>(C(),se("div",{ref_key:"el",ref:l,class:"flex relative"},[e("button",{class:Ke({disabled:n.disabled}),onClick:c[0]||(c[0]=i=>t.value=!b(t))},[Vn(a.$slots,"button",{class:Ke({disabled:n.disabled})})],2),(C(),R(Ku,null,[b(t)?(C(),se("div",n1,[Vn(a.$slots,"menu")])):ke("v-if",!0)],1024))],512))}}),o1=P(s1,[["__file","/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/node_modules/@slidev/client/internals/MenuButton.vue"]]),t1={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},l1={__name:"VerticalDivider",setup(n){return $(I),(s,o)=>(C(),se("div",t1))}},rl=P(l1,[["__file","/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),r1={render(){return[]}},a1={class:"slidev-icon-btn"},c1={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},i1={class:"my-auto"},p1={class:"opacity-50"},u1=Ie({__name:"NavControls",props:{persist:{default:!1}},setup(n){const s=n;$(I);const o=ga.smaller("md"),{isFullscreen:t,toggle:l}=iy,a=F(()=>ka.value?`?password=${ka.value}`:""),c=F(()=>`/presenter/${ze.value}${a.value}`),i=F(()=>`/${ze.value}${a.value}`),p=J(),u=()=>{p.value&&Ro.value&&p.value.contains(Ro.value)&&Ro.value.blur()},d=F(()=>s.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),y=ss(),f=ss();return Is(()=>import("./DrawingControls-85d57771.js"),[]).then(h=>f.value=h.default),(h,m)=>{const B=G7,g=O7,k=F7,v=k7,D=A7,w=m7,T=p7,N=gy,Y=n7,O=YA,K=VA,te=El("RouterLink"),ue=MA,X=RA,De=EA,Pe=CA;return C(),se("nav",{ref_key:"root",ref:p,class:"flex flex-col"},[e("div",{class:Ke(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",b(d)]),onMouseleave:u},[b(cs)?ke("v-if",!0):(C(),se("button",{key:0,class:"slidev-icon-btn",onClick:m[0]||(m[0]=(...xe)=>b(l)&&b(l)(...xe))},[b(t)?(C(),R(B,{key:0})):(C(),R(g,{key:1}))])),e("button",{class:Ke(["slidev-icon-btn",{disabled:!b(x4)}]),onClick:m[1]||(m[1]=(...xe)=>b(Os)&&b(Os)(...xe))},[q(k)],2),e("button",{class:Ke(["slidev-icon-btn",{disabled:!b($4)}]),title:"Next",onClick:m[2]||(m[2]=(...xe)=>b(Ps)&&b(Ps)(...xe))},[q(v)],2),b(cs)?ke("v-if",!0):(C(),se("button",{key:1,class:"slidev-icon-btn",title:"Slides overview",onClick:m[3]||(m[3]=xe=>b(py)())},[q(D)])),b(Da)?ke("v-if",!0):(C(),se("button",{key:2,class:"slidev-icon-btn",title:"Toggle dark mode",onClick:m[4]||(m[4]=xe=>b(my)())},[b(hc)?(C(),R(w,{key:0})):(C(),R(T,{key:1}))])),q(rl),b(cs)?ke("v-if",!0):(C(),se(Oe,{key:3},[!b(gn)&&!b(o)&&b(y)?(C(),se(Oe,{key:0},[q(b(y)),q(rl)],64)):ke("v-if",!0),b(gn)?(C(),se("button",{key:1,class:"slidev-icon-btn",title:"Show presenter cursor",onClick:m[5]||(m[5]=xe=>xr.value=!b(xr))},[b(xr)?(C(),R(N,{key:0})):(C(),R(Y,{key:1,class:"opacity-50"}))])):ke("v-if",!0)],64)),(!b(Se).drawings.presenterOnly||b(gn))&&!b(cs)?(C(),se(Oe,{key:4},[e("button",{class:"slidev-icon-btn relative",title:"Drawing",onClick:m[6]||(m[6]=xe=>es.value=!b(es))},[q(O),b(es)?(C(),se("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:Xe({background:b(Js).color})},null,4)):ke("v-if",!0)]),q(rl)],64)):ke("v-if",!0),b(cs)?ke("v-if",!0):(C(),se(Oe,{key:5},[b(gn)?(C(),R(te,{key:0,to:b(i),class:"slidev-icon-btn",title:"Play Mode"},{default:x(()=>[q(K)]),_:1},8,["to"])):ke("v-if",!0),b(b4)?(C(),R(te,{key:1,to:b(c),class:"slidev-icon-btn",title:"Presenter Mode"},{default:x(()=>[q(ue)]),_:1},8,["to"])):ke("v-if",!0),ke("v-if",!0)],64)),(C(),se(Oe,{key:6},[b(Se).download?(C(),se("button",{key:0,class:"slidev-icon-btn",onClick:m[8]||(m[8]=(...xe)=>b(wa)&&b(wa)(...xe))},[q(X)])):ke("v-if",!0)],64)),!b(gn)&&b(Se).info&&!b(cs)?(C(),se("button",{key:7,class:"slidev-icon-btn",onClick:m[9]||(m[9]=xe=>yt.value=!b(yt))},[q(De)])):ke("v-if",!0),!b(gn)&&!b(cs)?(C(),R(o1,{key:8},{button:x(()=>[e("button",a1,[q(Pe)])]),menu:x(()=>[q(e1)]),_:1})):ke("v-if",!0),b(cs)?ke("v-if",!0):(C(),R(rl,{key:9})),e("div",c1,[e("div",i1,[r(ao(b(ze))+" ",1),e("span",p1,"/ "+ao(b(Iy)),1)])]),q(b(r1))],34)],512)}}}),d1=P(u1,[["__file","/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/node_modules/@slidev/client/internals/NavControls.vue"]]),Ay={render(){return[]}},Cy={render(){return[]}},y1={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},f1=Ie({__name:"PresenterMouse",setup(n){return $(I),(s,o)=>{const t=gy;return b(br).cursor?(C(),se("div",y1,[q(t,{class:"absolute",style:Xe({left:`${b(br).cursor.x}%`,top:`${b(br).cursor.y}%`})},null,8,["style"])])):ke("v-if",!0)}}}),m1=P(f1,[["__file","/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),h1=Ie({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(n){$(I),Ae(yn,()=>{var t,l;(t=yn.value)!=null&&t.meta&&yn.value.meta.preload!==!1&&(yn.value.meta.__preloaded=!0),(l=Sr.value)!=null&&l.meta&&Sr.value.meta.preload!==!1&&(Sr.value.meta.__preloaded=!0)},{immediate:!0});const s=ss();Is(()=>import("./DrawingLayer-8b95413a.js"),[]).then(t=>s.value=t.default);const o=F(()=>Ze.filter(t=>{var l;return((l=t.meta)==null?void 0:l.__preloaded)||t===yn.value}));return(t,l)=>(C(),se(Oe,null,[ke(" Global Bottom "),q(b(Cy)),ke(" Slides "),q(F5,ye(b(R4),{id:"slideshow",tag:"div"}),{default:x(()=>[(C(!0),se(Oe,null,jt(b(o),a=>{var c;return er((C(),R(b(gc),{key:a.path,is:a==null?void 0:a.component,clicks:a===b(yn)?b(On):0,"clicks-elements":((c=a.meta)==null?void 0:c.__clicksElements)||[],"clicks-disabled":!1,class:Ke(b(Bc)(a)),route:a,context:n.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[Dd,a===b(yn)]])}),128))]),_:1},16),ke(" Global Top "),q(b(Ay)),b(s)?(C(),R(b(s),{key:0})):ke("v-if",!0),b(gn)?ke("v-if",!0):(C(),R(m1,{key:1}))],64))}});const _1=P(h1,[["__scopeId","data-v-afb4231e"],["__file","/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/node_modules/@slidev/client/internals/SlidesShow.vue"]]),B1=Ie({__name:"PrintStyle",setup(n){$(I);function s(o,{slots:t}){if(t.default)return mn("style",t.default())}return(o,t)=>(C(),R(s,null,{default:x(()=>[r(" @page { size: "+ao(b(Rs))+"px "+ao(b(pc))+"px; margin: 0px; } ",1)]),_:1}))}}),vy=P(B1,[["__file","/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/node_modules/@slidev/client/internals/PrintStyle.vue"]]),g1=Ie({__name:"Play",setup(n){$(I),jg();const s=J();function o(a){var c;fp.value||((c=a.target)==null?void 0:c.id)==="slide-container"&&(a.screenX/window.innerWidth>.6?Ps():Os())}I4(s);const t=F(()=>X3.value||fp.value);ss();const l=ss();return Is(()=>import("./DrawingControls-85d57771.js"),[]).then(a=>l.value=a.default),(a,c)=>(C(),se(Oe,null,[b(Lo)?(C(),R(vy,{key:0})):ke("v-if",!0),e("div",{id:"page-root",ref_key:"root",ref:s,class:"grid grid-cols-[1fr_max-content]",style:Xe(b(uc))},[q(_y,{class:"w-full h-full",style:Xe({background:"var(--slidev-slide-container-background, black)"}),width:b(Lo)?b(ro).width.value:void 0,scale:b(fl),onPointerdown:o},{default:x(()=>[q(_1,{context:"slide"})]),controls:x(()=>[e("div",{class:Ke(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[b(t)?"opacity-100 right-0":"opacity-0 p-2",b(Ft)?"pointer-events-none":""]])},[q(d1,{class:"m-auto",persist:b(t)},null,8,["persist"])],2),!b(Se).drawings.presenterOnly&&!b(cs)&&b(l)?(C(),R(b(l),{key:0,class:"ml-0"})):ke("v-if",!0)]),_:1},8,["style","width","scale"]),ke("v-if",!0)],4),q(hA)],64))}}),A1=P(g1,[["__file","/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function Dy(n){return typeof n>"u"||n===null}function C1(n){return typeof n=="object"&&n!==null}function v1(n){return Array.isArray(n)?n:Dy(n)?[]:[n]}function D1(n,s){var o,t,l,a;if(s)for(a=Object.keys(s),o=0,t=a.length;o<t;o+=1)l=a[o],n[l]=s[l];return n}function b1(n,s){var o="",t;for(t=0;t<s;t+=1)o+=n;return o}function k1(n){return n===0&&Number.NEGATIVE_INFINITY===1/n}var w1=Dy,E1=C1,$1=v1,x1=b1,F1=k1,S1=D1,Ac={isNothing:w1,isObject:E1,toArray:$1,repeat:x1,isNegativeZero:F1,extend:S1};function by(n,s){var o="",t=n.reason||"(unknown reason)";return n.mark?(n.mark.name&&(o+='in "'+n.mark.name+'" '),o+="("+(n.mark.line+1)+":"+(n.mark.column+1)+")",!s&&n.mark.snippet&&(o+=`

`+n.mark.snippet),t+" "+o):t}function Rt(n,s){Error.call(this),this.name="YAMLException",this.reason=n,this.mark=s,this.message=by(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Rt.prototype=Object.create(Error.prototype);Rt.prototype.constructor=Rt;Rt.prototype.toString=function(s){return this.name+": "+by(this,s)};var Zs=Rt,R1=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],I1=["scalar","sequence","mapping"];function P1(n){var s={};return n!==null&&Object.keys(n).forEach(function(o){n[o].forEach(function(t){s[String(t)]=o})}),s}function O1(n,s){if(s=s||{},Object.keys(s).forEach(function(o){if(R1.indexOf(o)===-1)throw new Zs('Unknown option "'+o+'" is met in definition of "'+n+'" YAML type.')}),this.options=s,this.tag=n,this.kind=s.kind||null,this.resolve=s.resolve||function(){return!0},this.construct=s.construct||function(o){return o},this.instanceOf=s.instanceOf||null,this.predicate=s.predicate||null,this.represent=s.represent||null,this.representName=s.representName||null,this.defaultStyle=s.defaultStyle||null,this.multi=s.multi||!1,this.styleAliases=P1(s.styleAliases||null),I1.indexOf(this.kind)===-1)throw new Zs('Unknown kind "'+this.kind+'" is specified for "'+n+'" YAML type.')}var cn=O1;function kp(n,s){var o=[];return n[s].forEach(function(t){var l=o.length;o.forEach(function(a,c){a.tag===t.tag&&a.kind===t.kind&&a.multi===t.multi&&(l=c)}),o[l]=t}),o}function T1(){var n={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},s,o;function t(l){l.multi?(n.multi[l.kind].push(l),n.multi.fallback.push(l)):n[l.kind][l.tag]=n.fallback[l.tag]=l}for(s=0,o=arguments.length;s<o;s+=1)arguments[s].forEach(t);return n}function ba(n){return this.extend(n)}ba.prototype.extend=function(s){var o=[],t=[];if(s instanceof cn)t.push(s);else if(Array.isArray(s))t=t.concat(s);else if(s&&(Array.isArray(s.implicit)||Array.isArray(s.explicit)))s.implicit&&(o=o.concat(s.implicit)),s.explicit&&(t=t.concat(s.explicit));else throw new Zs("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");o.forEach(function(a){if(!(a instanceof cn))throw new Zs("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(a.loadKind&&a.loadKind!=="scalar")throw new Zs("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(a.multi)throw new Zs("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),t.forEach(function(a){if(!(a instanceof cn))throw new Zs("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var l=Object.create(ba.prototype);return l.implicit=(this.implicit||[]).concat(o),l.explicit=(this.explicit||[]).concat(t),l.compiledImplicit=kp(l,"implicit"),l.compiledExplicit=kp(l,"explicit"),l.compiledTypeMap=T1(l.compiledImplicit,l.compiledExplicit),l};var L1=ba,M1=new cn("tag:yaml.org,2002:str",{kind:"scalar",construct:function(n){return n!==null?n:""}}),q1=new cn("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(n){return n!==null?n:[]}}),G1=new cn("tag:yaml.org,2002:map",{kind:"mapping",construct:function(n){return n!==null?n:{}}}),N1=new L1({explicit:[M1,q1,G1]});function H1(n){if(n===null)return!0;var s=n.length;return s===1&&n==="~"||s===4&&(n==="null"||n==="Null"||n==="NULL")}function j1(){return null}function V1(n){return n===null}var U1=new cn("tag:yaml.org,2002:null",{kind:"scalar",resolve:H1,construct:j1,predicate:V1,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function W1(n){if(n===null)return!1;var s=n.length;return s===4&&(n==="true"||n==="True"||n==="TRUE")||s===5&&(n==="false"||n==="False"||n==="FALSE")}function K1(n){return n==="true"||n==="True"||n==="TRUE"}function z1(n){return Object.prototype.toString.call(n)==="[object Boolean]"}var Y1=new cn("tag:yaml.org,2002:bool",{kind:"scalar",resolve:W1,construct:K1,predicate:z1,represent:{lowercase:function(n){return n?"true":"false"},uppercase:function(n){return n?"TRUE":"FALSE"},camelcase:function(n){return n?"True":"False"}},defaultStyle:"lowercase"});function Z1(n){return 48<=n&&n<=57||65<=n&&n<=70||97<=n&&n<=102}function Q1(n){return 48<=n&&n<=55}function J1(n){return 48<=n&&n<=57}function X1(n){if(n===null)return!1;var s=n.length,o=0,t=!1,l;if(!s)return!1;if(l=n[o],(l==="-"||l==="+")&&(l=n[++o]),l==="0"){if(o+1===s)return!0;if(l=n[++o],l==="b"){for(o++;o<s;o++)if(l=n[o],l!=="_"){if(l!=="0"&&l!=="1")return!1;t=!0}return t&&l!=="_"}if(l==="x"){for(o++;o<s;o++)if(l=n[o],l!=="_"){if(!Z1(n.charCodeAt(o)))return!1;t=!0}return t&&l!=="_"}if(l==="o"){for(o++;o<s;o++)if(l=n[o],l!=="_"){if(!Q1(n.charCodeAt(o)))return!1;t=!0}return t&&l!=="_"}}if(l==="_")return!1;for(;o<s;o++)if(l=n[o],l!=="_"){if(!J1(n.charCodeAt(o)))return!1;t=!0}return!(!t||l==="_")}function e0(n){var s=n,o=1,t;if(s.indexOf("_")!==-1&&(s=s.replace(/_/g,"")),t=s[0],(t==="-"||t==="+")&&(t==="-"&&(o=-1),s=s.slice(1),t=s[0]),s==="0")return 0;if(t==="0"){if(s[1]==="b")return o*parseInt(s.slice(2),2);if(s[1]==="x")return o*parseInt(s.slice(2),16);if(s[1]==="o")return o*parseInt(s.slice(2),8)}return o*parseInt(s,10)}function n0(n){return Object.prototype.toString.call(n)==="[object Number]"&&n%1===0&&!Ac.isNegativeZero(n)}var s0=new cn("tag:yaml.org,2002:int",{kind:"scalar",resolve:X1,construct:e0,predicate:n0,represent:{binary:function(n){return n>=0?"0b"+n.toString(2):"-0b"+n.toString(2).slice(1)},octal:function(n){return n>=0?"0o"+n.toString(8):"-0o"+n.toString(8).slice(1)},decimal:function(n){return n.toString(10)},hexadecimal:function(n){return n>=0?"0x"+n.toString(16).toUpperCase():"-0x"+n.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),o0=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function t0(n){return!(n===null||!o0.test(n)||n[n.length-1]==="_")}function l0(n){var s,o;return s=n.replace(/_/g,"").toLowerCase(),o=s[0]==="-"?-1:1,"+-".indexOf(s[0])>=0&&(s=s.slice(1)),s===".inf"?o===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:s===".nan"?NaN:o*parseFloat(s,10)}var r0=/^[-+]?[0-9]+e/;function a0(n,s){var o;if(isNaN(n))switch(s){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===n)switch(s){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===n)switch(s){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Ac.isNegativeZero(n))return"-0.0";return o=n.toString(10),r0.test(o)?o.replace("e",".e"):o}function c0(n){return Object.prototype.toString.call(n)==="[object Number]"&&(n%1!==0||Ac.isNegativeZero(n))}var i0=new cn("tag:yaml.org,2002:float",{kind:"scalar",resolve:t0,construct:l0,predicate:c0,represent:a0,defaultStyle:"lowercase"}),p0=N1.extend({implicit:[U1,Y1,s0,i0]}),u0=p0,ky=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),wy=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function d0(n){return n===null?!1:ky.exec(n)!==null||wy.exec(n)!==null}function y0(n){var s,o,t,l,a,c,i,p=0,u=null,d,y,f;if(s=ky.exec(n),s===null&&(s=wy.exec(n)),s===null)throw new Error("Date resolve error");if(o=+s[1],t=+s[2]-1,l=+s[3],!s[4])return new Date(Date.UTC(o,t,l));if(a=+s[4],c=+s[5],i=+s[6],s[7]){for(p=s[7].slice(0,3);p.length<3;)p+="0";p=+p}return s[9]&&(d=+s[10],y=+(s[11]||0),u=(d*60+y)*6e4,s[9]==="-"&&(u=-u)),f=new Date(Date.UTC(o,t,l,a,c,i,p)),u&&f.setTime(f.getTime()-u),f}function f0(n){return n.toISOString()}var m0=new cn("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:d0,construct:y0,instanceOf:Date,represent:f0});function h0(n){return n==="<<"||n===null}var _0=new cn("tag:yaml.org,2002:merge",{kind:"scalar",resolve:h0}),Cc=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function B0(n){if(n===null)return!1;var s,o,t=0,l=n.length,a=Cc;for(o=0;o<l;o++)if(s=a.indexOf(n.charAt(o)),!(s>64)){if(s<0)return!1;t+=6}return t%8===0}function g0(n){var s,o,t=n.replace(/[\r\n=]/g,""),l=t.length,a=Cc,c=0,i=[];for(s=0;s<l;s++)s%4===0&&s&&(i.push(c>>16&255),i.push(c>>8&255),i.push(c&255)),c=c<<6|a.indexOf(t.charAt(s));return o=l%4*6,o===0?(i.push(c>>16&255),i.push(c>>8&255),i.push(c&255)):o===18?(i.push(c>>10&255),i.push(c>>2&255)):o===12&&i.push(c>>4&255),new Uint8Array(i)}function A0(n){var s="",o=0,t,l,a=n.length,c=Cc;for(t=0;t<a;t++)t%3===0&&t&&(s+=c[o>>18&63],s+=c[o>>12&63],s+=c[o>>6&63],s+=c[o&63]),o=(o<<8)+n[t];return l=a%3,l===0?(s+=c[o>>18&63],s+=c[o>>12&63],s+=c[o>>6&63],s+=c[o&63]):l===2?(s+=c[o>>10&63],s+=c[o>>4&63],s+=c[o<<2&63],s+=c[64]):l===1&&(s+=c[o>>2&63],s+=c[o<<4&63],s+=c[64],s+=c[64]),s}function C0(n){return Object.prototype.toString.call(n)==="[object Uint8Array]"}var v0=new cn("tag:yaml.org,2002:binary",{kind:"scalar",resolve:B0,construct:g0,predicate:C0,represent:A0}),D0=Object.prototype.hasOwnProperty,b0=Object.prototype.toString;function k0(n){if(n===null)return!0;var s=[],o,t,l,a,c,i=n;for(o=0,t=i.length;o<t;o+=1){if(l=i[o],c=!1,b0.call(l)!=="[object Object]")return!1;for(a in l)if(D0.call(l,a))if(!c)c=!0;else return!1;if(!c)return!1;if(s.indexOf(a)===-1)s.push(a);else return!1}return!0}function w0(n){return n!==null?n:[]}var E0=new cn("tag:yaml.org,2002:omap",{kind:"sequence",resolve:k0,construct:w0}),$0=Object.prototype.toString;function x0(n){if(n===null)return!0;var s,o,t,l,a,c=n;for(a=new Array(c.length),s=0,o=c.length;s<o;s+=1){if(t=c[s],$0.call(t)!=="[object Object]"||(l=Object.keys(t),l.length!==1))return!1;a[s]=[l[0],t[l[0]]]}return!0}function F0(n){if(n===null)return[];var s,o,t,l,a,c=n;for(a=new Array(c.length),s=0,o=c.length;s<o;s+=1)t=c[s],l=Object.keys(t),a[s]=[l[0],t[l[0]]];return a}var S0=new cn("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:x0,construct:F0}),R0=Object.prototype.hasOwnProperty;function I0(n){if(n===null)return!0;var s,o=n;for(s in o)if(R0.call(o,s)&&o[s]!==null)return!1;return!0}function P0(n){return n!==null?n:{}}var O0=new cn("tag:yaml.org,2002:set",{kind:"mapping",resolve:I0,construct:P0});u0.extend({implicit:[m0,_0],explicit:[v0,E0,S0,O0]});function wp(n){return n===48?"\0":n===97?"\x07":n===98?"\b":n===116||n===9?"	":n===110?`
`:n===118?"\v":n===102?"\f":n===114?"\r":n===101?"\x1B":n===32?" ":n===34?'"':n===47?"/":n===92?"\\":n===78?"":n===95?" ":n===76?"\u2028":n===80?"\u2029":""}var T0=new Array(256),L0=new Array(256);for(var Co=0;Co<256;Co++)T0[Co]=wp(Co)?1:0,L0[Co]=wp(Co);function M0(n){return Array.from(new Set(n))}function Ep(...n){let s,o,t;n.length===1?(s=0,t=1,[o]=n):[s,o,t=1]=n;const l=[];let a=s;for(;a<o;)l.push(a),a+=t||1;return l}function Ey(n,s){if(!s||s==="all"||s==="*")return Ep(1,n+1);const o=[];for(const t of s.split(/[,;]/g))if(!t.includes("-"))o.push(+t);else{const[l,a]=t.split("-",2);o.push(...Ep(+l,a?+a+1:n+1))}return M0(o).filter(t=>t<=n).sort((t,l)=>t-l)}function $y(n){const s=F(()=>n.value.path),o=F(()=>Ze.length-1),t=F(()=>parseInt(s.value.split(/\//g).slice(-1)[0])||1),l=F(()=>lr(t.value)),a=F(()=>Ze.find(f=>f.path===`${t.value}`)),c=F(()=>{var f,h,m;return(m=(h=(f=a.value)==null?void 0:f.meta)==null?void 0:h.slide)==null?void 0:m.id}),i=F(()=>{var f,h;return((h=(f=a.value)==null?void 0:f.meta)==null?void 0:h.layout)||(t.value===1?"cover":"default")}),p=F(()=>Ze.find(f=>f.path===`${Math.min(Ze.length,t.value+1)}`)),u=F(()=>Ze.filter(f=>{var h,m;return(m=(h=f.meta)==null?void 0:h.slide)==null?void 0:m.title}).reduce((f,h)=>(vc(f,h),f),[])),d=F(()=>Dc(u.value,a.value)),y=F(()=>bc(d.value));return{route:n,path:s,total:o,currentPage:t,currentPath:l,currentRoute:a,currentSlideId:c,currentLayout:i,nextRoute:p,rawTree:u,treeWithActiveStatuses:d,tree:y}}function xy(n,s,o){const t=J(0);tn(()=>{Cn.afterEach(async()=>{await tn(),t.value+=1})});const l=F(()=>{var p,u;return t.value,((u=(p=s.value)==null?void 0:p.meta)==null?void 0:u.__clicksElements)||[]}),a=F(()=>{var p,u;return+(((u=(p=s.value)==null?void 0:p.meta)==null?void 0:u.clicks)??l.value.length)}),c=F(()=>o.value<Ze.length-1||n.value<a.value),i=F(()=>o.value>1||n.value>0);return{clicks:n,clicksElements:l,clicksTotal:a,hasNext:c,hasPrev:i}}const q0=["id"],G0=Ie({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:null,required:!0},route:{type:null,required:!0}},emits:["update:clicksElements"],setup(n,{emit:s}){const o=n,t=Xn(o,"clicksElements",s),l=F(()=>({height:`${pc}px`,width:`${Rs}px`})),a=ss();Is(()=>Promise.resolve().then(()=>Jg),void 0).then(u=>a.value=u.default);const c=F(()=>o.clicks),i=xy(c,o.nav.currentRoute,o.nav.currentPage),p=F(()=>`${o.route.path.toString().padStart(3,"0")}-${(c.value+1).toString().padStart(2,"0")}`);return En(I,Ve({nav:{...o.nav,...i},configs:Se,themeConfigs:F(()=>Se.themeConfig)})),(u,d)=>{var y;return C(),se("div",{id:b(p),class:"print-slide-container",style:Xe(b(l))},[q(b(Cy)),q(b(gc),{is:(y=n.route)==null?void 0:y.component,"clicks-elements":b(t),"onUpdate:clicksElements":d[0]||(d[0]=f=>Re(t)?t.value=f:null),clicks:b(c),"clicks-disabled":!1,class:Ke(b(Bc)(n.route)),route:n.route},null,8,["is","clicks-elements","clicks","class","route"]),b(a)?(C(),R(b(a),{key:0,page:+n.route.path},null,8,["page"])):ke("v-if",!0),q(b(Ay))],12,q0)}}}),$p=P(G0,[["__file","/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),N0=Ie({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(n){var a;const s=n;$(I);const o=Ve(((a=s.route.meta)==null?void 0:a.__clicksElements)||[]),t=F(()=>s.route),l=$y(t);return(c,i)=>(C(),se(Oe,null,[q($p,{"clicks-elements":o,"onUpdate:clicksElements":i[0]||(i[0]=p=>o=p),clicks:0,nav:b(l),route:b(t)},null,8,["clicks-elements","nav","route"]),b(ft)?ke("v-if",!0):(C(!0),se(Oe,{key:0},jt(o.length,p=>(C(),R($p,{key:p,clicks:p,nav:b(l),route:b(t)},null,8,["clicks","nav","route"]))),128))],64))}}),H0=P(N0,[["__file","/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/node_modules/@slidev/client/internals/PrintSlide.vue"]]),j0={id:"print-content"},V0=Ie({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(n){const s=n;$(I);const o=F(()=>s.width),t=F(()=>s.width/Ss),l=F(()=>o.value/t.value),a=F(()=>l.value<Ss?o.value/Rs:t.value*Ss/Rs);let c=Ze.slice(0,-1);Ln.value.query.range&&(c=Ey(c.length,Ln.value.query.range).map(u=>c[u-1]));const i=F(()=>({"select-none":!Se.selectable,"slidev-code-line-numbers":Se.lineNumbers}));return En(Id,a),(p,u)=>(C(),se("div",{id:"print-container",class:Ke(b(i))},[e("div",j0,[(C(!0),se(Oe,null,jt(b(c),d=>(C(),R(H0,{key:d.path,route:d},null,8,["route"]))),128))]),Vn(p.$slots,"controls")],2))}});const U0=P(V0,[["__file","/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/node_modules/@slidev/client/internals/PrintContainer.vue"]]),W0=Ie({__name:"Print",setup(n){return $(I),yo(()=>{Lo?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(s,o)=>(C(),se(Oe,null,[b(Lo)?(C(),R(vy,{key:0})):ke("v-if",!0),e("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:Xe(b(uc))},[q(U0,{class:"w-full h-full",style:Xe({background:"var(--slidev-slide-container-background, black)"}),width:b(ro).width.value},null,8,["style","width"])],4)],64))}});const K0=P(W0,[["__file","/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/node_modules/@slidev/client/internals/Print.vue"]]);const z0={class:"slidev-layout end"},Y0={__name:"end",setup(n){return $(I),(s,o)=>(C(),se("div",z0," END "))}},Z0=P(Y0,[["__scopeId","data-v-e532b98d"],["__file","/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/node_modules/@slidev/client/layouts/end.vue"]]);function xp(n){return n.startsWith("/")?"/regain-control-of-your-backends-with-sylius-and-api-platform/"+n.slice(1):n}function Q0(n,s=!1){const o=n&&["#","rgb","hsl"].some(l=>n.indexOf(l)===0),t={background:o?n:void 0,color:n&&!o?"white":void 0,backgroundImage:o?void 0:n?s?`linear-gradient(#0005, #0008), url(${xp(n)})`:`url("${xp(n)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return t.background||delete t.background,t}const J0={class:"my-auto w-full"},X0=Ie({__name:"cover",props:{background:{default:"https://source.unsplash.com/collection/94734566/1920x1080"}},setup(n){const s=n;$(I);const o=F(()=>Q0(s.background,!0));return(t,l)=>(C(),se("div",{class:"slidev-layout cover text-center",style:Xe(b(o))},[e("div",J0,[Vn(t.$slots,"default")])],4))}}),e9=P(X0,[["__file","/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/node_modules/@slidev/theme-seriph/layouts/cover.vue"]]),n9=e("h1",null,"Retrouvez la maîtrise de vos backends",-1),s9=e("p",null,"avec Sylius & API-Platform",-1),o9=e("div",{align:"center"},[e("img",{class:"w-75",align:"center",src:"https://sylius.com/wp-content/uploads/2021/03/sylius-logo_sylius-logo-light-1024x422.jpg"})],-1),t9=e("div",{align:"center"},[e("img",{class:"w-75",src:"https://api-platform.com/logo.png"})],-1),l9={__name:"1",setup(n){const s={theme:"seriph",background:!1,class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},transition:"slide-left",colorSchema:"light",css:"unocss"};return $(I),(o,t)=>(C(),R(e9,U(j(s)),{default:x(()=>[n9,s9,o9,t9]),_:1},16))}},r9=P(l9,[["__file","/@slidev/slides/1.md"]]),a9={class:"slidev-icon",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},c9=e("path",{fill:"currentColor",d:"M8.854 21.57a9.91 9.91 0 0 0 6.29.001a.493.493 0 0 1-.644-.475c0-.338.013-1.413.013-2.75a2.368 2.368 0 0 0-.675-1.85c2.225-.25 4.562-1.1 4.562-4.938a3.87 3.87 0 0 0-1.025-2.687a3.594 3.594 0 0 0-.1-2.65s-.838-.275-2.75 1.025a9.427 9.427 0 0 0-5 0C7.612 5.958 6.775 6.22 6.775 6.22a3.593 3.593 0 0 0-.1 2.65a3.892 3.892 0 0 0-1.025 2.687c0 3.825 2.325 4.688 4.55 4.938a2.106 2.106 0 0 0-.638 1.337a2.137 2.137 0 0 1-2.91-.82l-.002-.005a2.001 2.001 0 0 0-1.538-1.025c-.837.013-.337.475.013.663c.451.38.803.865 1.025 1.412c.2.563.85 1.638 3.362 1.175c0 .838.013 1.625.013 1.863c0 .259-.185.551-.67.475z",opacity:".5"},null,-1),i9=e("path",{fill:"currentColor",d:"M12 2.083c-5.523 0-10 4.477-10 10c0 4.423 2.875 8.169 6.855 9.488c.485.075.67-.216.67-.475c0-.238-.012-1.025-.012-1.863c-2.513.463-3.163-.612-3.363-1.175a3.637 3.637 0 0 0-1.025-1.412c-.35-.188-.85-.65-.013-.663a2 2 0 0 1 1.538 1.025l.003.006a2.137 2.137 0 0 0 2.91.82c.043-.51.27-.984.637-1.338c-2.225-.25-4.55-1.113-4.55-4.938a3.892 3.892 0 0 1 1.025-2.687a3.594 3.594 0 0 1 .1-2.65s.837-.263 2.75 1.025a9.427 9.427 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025c.37.838.406 1.786.1 2.65a3.87 3.87 0 0 1 1.025 2.687c0 3.838-2.338 4.688-4.562 4.938c.482.49.729 1.164.675 1.85c0 1.337-.013 2.412-.013 2.75a.493.493 0 0 0 .643.476C19.124 20.253 22 16.507 22 12.083c0-5.523-4.477-10-10-10z"},null,-1),p9=[c9,i9];function u9(n,s){return C(),se("svg",a9,p9)}const d9={name:"uim-github",render:u9},y9={class:"slidev-icon",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},f9=e("path",{fill:"currentColor",d:"M22 5.796a8.192 8.192 0 0 1-2.357.646a4.115 4.115 0 0 0 1.805-2.27a8.197 8.197 0 0 1-2.606.996a4.105 4.105 0 0 0-7.097 2.808a4.15 4.15 0 0 0 .105.935a11.65 11.65 0 0 1-8.456-4.287a4.107 4.107 0 0 0 1.27 5.478a4.084 4.084 0 0 1-1.86-.513v.052a4.105 4.105 0 0 0 3.292 4.023a4.082 4.082 0 0 1-1.081.143a4.165 4.165 0 0 1-.773-.072a4.108 4.108 0 0 0 3.832 2.85A8.261 8.261 0 0 1 2 18.282a11.611 11.611 0 0 0 6.29 1.844A11.594 11.594 0 0 0 19.962 8.453q0-.267-.013-.53A8.36 8.36 0 0 0 22 5.796Z"},null,-1),m9=[f9];function h9(n,s){return C(),se("svg",y9,m9)}const _9={name:"uim-twitter",render:h9};function Fp(n){return n.startsWith("/")?"/regain-control-of-your-backends-with-sylius-and-api-platform/"+n.slice(1):n}function Fy(n,s=!1){const o=n&&(n[0]==="#"||n.startsWith("rgb")),t={background:o?n:void 0,color:n&&!o?"white":void 0,backgroundImage:o?void 0:n?s?`linear-gradient(#0005, #0008), url(${Fp(n)})`:`url("${Fp(n)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return t.background||delete t.background,t}const B9={class:"grid grid-cols-2 w-full h-full auto-rows-fr"},g9=Ie({__name:"image-right",props:{image:{type:String},class:{type:String}},setup(n){const s=n;$(I);const o=F(()=>Fy(s.image));return(t,l)=>(C(),se("div",B9,[e("div",{class:Ke(["slidev-layout default",s.class])},[Vn(t.$slots,"default")],2),e("div",{class:"w-full w-full",style:Xe(b(o))},null,4)]))}}),A9=P(g9,[["__file","/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/node_modules/@slidev/client/layouts/image-right.vue"]]),C9=e("h1",null,"Loïc Frémont",-1),v9=e("ul",null,[e("li",null,"Expert technique @Akawaka"),e("li",null,"Membre de la core team @Sylius"),e("li",null,"Créateur de Monofony")],-1),D9=e("br",null,null,-1),b9={__name:"2",setup(n){const s={layout:"image-right",image:"/akawaka.png",srcSequence:"./pages/01_index.md"};return $(I),(o,t)=>{const l=_9,a=d9;return C(),R(A9,U(j(s)),{default:x(()=>[C9,v9,D9,q(l,{class:"text-3xl text-blue-400 mx-2 my--2"}),r(" @loic_425 "),q(a,{class:"text-3xl text-black-400 mx-2 my--2"}),r(" @loic425 ")]),_:1},16)}}},k9=P(b9,[["__file","/@slidev/slides/2.md"]]),w9=Ie({__name:"image",props:{image:{type:String}},setup(n){const s=n;$(I);const o=F(()=>Fy(s.image));return(t,l)=>(C(),se("div",{class:"slidev-layout w-full h-full",style:Xe(b(o))},[Vn(t.$slots,"default")],4))}}),sn=P(w9,[["__file","/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/node_modules/@slidev/client/layouts/image.vue"]]),E9={__name:"3",setup(n){const s={layout:"image",image:"https://ressources.mobizel.com/wp-content/uploads/2019/12/monofony-banner-mobizel-2048x707.png",srcSequence:"./pages/02_monofony.md"};return $(I),(o,t)=>(C(),R(sn,U(j(s)),null,16))}},$9=P(E9,[["__file","/@slidev/slides/3.md"]]),x9={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},F9=e("path",{fill:"currentColor",d:"M200 32h-36.3a47.8 47.8 0 0 0-71.4 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32.1 32.1 0 0 1 32 32H96a32.1 32.1 0 0 1 32-32Zm72 184H56V48h26.8A47.2 47.2 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.2 47.2 0 0 0-2.8-16H200Z"},null,-1),S9=[F9];function R9(n,s){return C(),se("svg",x9,S9)}const I9={name:"ph-clipboard",render:R9},P9={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},O9=e("path",{fill:"currentColor",d:"M177.8 98.5a8 8 0 0 1-.3 11.3l-58.6 56a8.1 8.1 0 0 1-5.6 2.2a7.9 7.9 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7l53.2-50.7a8 8 0 0 1 11.3.3ZM232 128A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),T9=[O9];function L9(n,s){return C(),se("svg",P9,T9)}const M9={name:"ph-check-circle",render:L9},q9=["title"],G9=Ie({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(n){const s=n;$(I);const o=$(it),t=$(Ys),l=$(pt);function a(y=5){const f=[],h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",m=h.length;for(let B=0;B<y;B++)f.push(h.charAt(Math.floor(Math.random()*m)));return f.join("")}const c=J(),i=Sn();fo(()=>{const y=s.at==null?t==null?void 0:t.value.length:s.at,f=F(()=>l!=null&&l.value?s.ranges.length-1:Math.min(Math.max(0,((o==null?void 0:o.value)||0)-(y||0)),s.ranges.length-1)),h=F(()=>s.ranges[f.value]||"");if(s.ranges.length>=2&&!(l!=null&&l.value)){const m=a(),B=Lh(s.ranges.length-1).map(g=>m+g);t!=null&&t.value&&(t.value.push(...B),Xl(()=>B.forEach(g=>ca(t.value,g)),i))}yo(()=>{if(!c.value)return;const B=c.value.querySelector(".shiki-dark")?Array.from(c.value.querySelectorAll(".shiki")):[c.value];for(const g of B){const k=Array.from(g.querySelectorAll(".line")),v=Ey(k.length,h.value);if(k.forEach((D,w)=>{const T=v.includes(w+1);D.classList.toggle(Ks,!0),D.classList.toggle("highlighted",T),D.classList.toggle("dishonored",!T)}),s.maxHeight){const D=g.querySelector(".line.highlighted");D&&D.scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:p,copy:u}=q_();function d(){var f,h;const y=(h=(f=c.value)==null?void 0:f.querySelector(".slidev-code"))==null?void 0:h.textContent;y&&u(y)}return(y,f)=>{const h=M9,m=I9;return C(),se("div",{ref_key:"el",ref:c,class:"slidev-code-wrapper relative group",style:Xe({"max-height":s.maxHeight,"overflow-y":s.maxHeight?"scroll":void 0})},[Vn(y.$slots,"default"),b(Se).codeCopy?(C(),se("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:b(p)?"Copied":"Copy",onClick:f[0]||(f[0]=B=>d())},[b(p)?(C(),R(h,{key:0,class:"p-2 w-8 h-8"})):(C(),R(m,{key:1,class:"p-2 w-8 h-8"}))],8,q9)):ke("v-if",!0)],4)}}}),Be=P(G9,[["__file","/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]),N9={class:"slidev-layout default"},H9={__name:"default",setup(n){return $(I),(s,o)=>(C(),se("div",N9,[Vn(s.$slots,"default")]))}},ne=P(H9,[["__file","/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/node_modules/@slidev/client/layouts/default.vue"]]),j9=e("h1",null,"Installation",-1),V9=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"$"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"composer"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"create-project"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"monofony/skeleton"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"project_name")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"$"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"composer"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"create-project"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"monofony/skeleton"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"project_name")])])])],-1),U9={__name:"4",setup(n){const s={srcSequence:"./pages/02_monofony.md"};return $(I),(o,t)=>{const l=Be;return C(),R(ne,U(j(s)),{default:x(()=>[j9,q(l,ye({},{ranges:[""]}),{default:x(()=>[V9]),_:1},16)]),_:1},16)}}},W9=P(U9,[["__file","/@slidev/slides/4.md"]]),K9={__name:"5",setup(n){const s={layout:"image",image:"/dashboard.png",transition:"fade",srcSequence:"./pages/02_monofony.md"};return $(I),(o,t)=>(C(),R(sn,U(j(s)),null,16))}},z9=P(K9,[["__file","/@slidev/slides/5.md"]]),Y9={__name:"6",setup(n){const s={layout:"image",image:"/administrators.png",srcSequence:"./pages/02_monofony.md"};return $(I),(o,t)=>(C(),R(sn,U(j(s)),null,16))}},Z9=P(Y9,[["__file","/@slidev/slides/6.md"]]),Q9="/regain-control-of-your-backends-with-sylius-and-api-platform/ci.png",J9=e("h1",null,"Intégration continue",-1),X9=e("ul",null,[e("li",null,"Github Actions"),e("li",null,"Circle CI")],-1),eC=e("p",null,[e("img",{src:Q9,alt:"CI"})],-1),nC={__name:"7",setup(n){const s={srcSequence:"./pages/02_monofony.md"};return $(I),(o,t)=>(C(),R(ne,U(j(s)),{default:x(()=>[J9,X9,eC]),_:1},16))}},sC=P(nC,[["__file","/@slidev/slides/7.md"]]),oC=e("h1",null,"Behat",-1),tC=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"@managing_administrators")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"Feature"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Adding a new administrator")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"In "),e("span",{style:{color:"#DBD7CA"}},"order to create new administrator account")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    As an Administrator")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    I want to add an administrator in the admin panel")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Background"),e("span",{style:{color:"#DBD7CA"}},":")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Given "),e("span",{style:{color:"#DBD7CA"}},"I am logged in as an administrator")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"@ui")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Scenario"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Adding a new administrator")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Given "),e("span",{style:{color:"#DBD7CA"}},"I want to create a new administrator")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"When "),e("span",{style:{color:"#DBD7CA"}},"I specify its email as "),e("span",{style:{color:"#C98A7D"}},'"l.skywalker@gmail.com"')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I specify its name as "),e("span",{style:{color:"#C98A7D"}},'"Luke"')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I specify its password as "),e("span",{style:{color:"#C98A7D"}},'"lightsaber"')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I add it")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Then "),e("span",{style:{color:"#DBD7CA"}},"I should be notified that it has been successfully created")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"the administrator "),e("span",{style:{color:"#C98A7D"}},'"l.skywalker@gmail.com"'),e("span",{style:{color:"#DBD7CA"}}," should appear in the list")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"@ui")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Scenario"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Adding a new administrator and log in with its credentials")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Given "),e("span",{style:{color:"#DBD7CA"}},"I want to create a new administrator")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"When "),e("span",{style:{color:"#DBD7CA"}},"I specify its email as "),e("span",{style:{color:"#C98A7D"}},'"l.skywalker@gmail.com"')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I specify its name as "),e("span",{style:{color:"#C98A7D"}},'"Luke"')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I specify its password as "),e("span",{style:{color:"#C98A7D"}},'"lightsaber"')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I enable it")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I add it")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Then "),e("span",{style:{color:"#DBD7CA"}},"I should be able to log in as "),e("span",{style:{color:"#C98A7D"}},'"l.skywalker@gmail.com"'),e("span",{style:{color:"#DBD7CA"}}," authenticated by "),e("span",{style:{color:"#C98A7D"}},'"lightsaber"'),e("span",{style:{color:"#DBD7CA"}}," password")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"@managing_administrators")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"Feature"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Adding a new administrator")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"In "),e("span",{style:{color:"#393A34"}},"order to create new administrator account")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    As an Administrator")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    I want to add an administrator in the admin panel")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Background"),e("span",{style:{color:"#393A34"}},":")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Given "),e("span",{style:{color:"#393A34"}},"I am logged in as an administrator")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"@ui")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Scenario"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Adding a new administrator")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Given "),e("span",{style:{color:"#393A34"}},"I want to create a new administrator")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"When "),e("span",{style:{color:"#393A34"}},"I specify its email as "),e("span",{style:{color:"#B56959"}},'"l.skywalker@gmail.com"')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I specify its name as "),e("span",{style:{color:"#B56959"}},'"Luke"')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I specify its password as "),e("span",{style:{color:"#B56959"}},'"lightsaber"')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I add it")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Then "),e("span",{style:{color:"#393A34"}},"I should be notified that it has been successfully created")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"the administrator "),e("span",{style:{color:"#B56959"}},'"l.skywalker@gmail.com"'),e("span",{style:{color:"#393A34"}}," should appear in the list")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"@ui")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Scenario"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Adding a new administrator and log in with its credentials")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Given "),e("span",{style:{color:"#393A34"}},"I want to create a new administrator")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"When "),e("span",{style:{color:"#393A34"}},"I specify its email as "),e("span",{style:{color:"#B56959"}},'"l.skywalker@gmail.com"')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I specify its name as "),e("span",{style:{color:"#B56959"}},'"Luke"')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I specify its password as "),e("span",{style:{color:"#B56959"}},'"lightsaber"')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I enable it")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I add it")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Then "),e("span",{style:{color:"#393A34"}},"I should be able to log in as "),e("span",{style:{color:"#B56959"}},'"l.skywalker@gmail.com"'),e("span",{style:{color:"#393A34"}}," authenticated by "),e("span",{style:{color:"#B56959"}},'"lightsaber"'),e("span",{style:{color:"#393A34"}}," password")])])])],-1),lC={__name:"8",setup(n){const s={srcSequence:"./pages/02_monofony.md"};return $(I),(o,t)=>{const l=Be;return C(),R(ne,U(j(s)),{default:x(()=>[oC,q(l,ye({},{ranges:[""]}),{default:x(()=>[tC]),_:1},16)]),_:1},16)}}},rC=P(lC,[["__file","/@slidev/slides/8.md"]]),aC=e("h1",null,"Phpspec",-1),cC=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"AdminAvatarSpec"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"extends"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ObjectBehavior")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"it_is_initializable"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"shouldHaveType"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"AdminAvatar"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"it_is_a_file"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"shouldHaveType"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"File"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"it_has_no_file_by_default"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"getFile"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"shouldReturn"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"its_file_is_mutable"),e("span",{style:{color:"#858585"}},"(\\"),e("span",{style:{color:"#E0A569"}},"SplFileInfo"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"file"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"setFile"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"file"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"getFile"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"shouldReturn"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"file"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"it_has_no_path_by_defaut"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"getPath"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"shouldReturn"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"its_path_is_mutable"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"setPath"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'avatar.png'"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"getPath"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"shouldReturn"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'avatar.png'"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"AdminAvatarSpec"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"extends"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ObjectBehavior")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"it_is_initializable"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"shouldHaveType"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"AdminAvatar"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"it_is_a_file"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"shouldHaveType"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"File"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"it_has_no_file_by_default"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"getFile"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"shouldReturn"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"its_file_is_mutable"),e("span",{style:{color:"#8E8F8B"}},"(\\"),e("span",{style:{color:"#B58451"}},"SplFileInfo"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"file"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"setFile"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"file"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"getFile"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"shouldReturn"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"file"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"it_has_no_path_by_defaut"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"getPath"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"shouldReturn"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"its_path_is_mutable"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"setPath"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'avatar.png'"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"getPath"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"shouldReturn"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'avatar.png'"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),iC={__name:"9",setup(n){const s={srcSequence:"./pages/02_monofony.md"};return $(I),(o,t)=>{const l=Be;return C(),R(ne,U(j(s)),{default:x(()=>[aC,q(l,ye({},{ranges:[""]}),{default:x(()=>[cC]),_:1},16)]),_:1},16)}}},pC=P(iC,[["__file","/@slidev/slides/9.md"]]),uC=e("h1",null,"PHPUnit",-1),dC=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ChangePasswordApiTest"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"extends"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"JsonApiTestCase")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Factories"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"AuthorizedHeaderTrait"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"PurgeDatabaseTrait"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#758575"}},"/** @test */")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"it_does_not_allow_to_change_password_for_non_authenticated_user"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#E0A569"}},"TestAppUsersStory"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"load"),e("span",{style:{color:"#858585"}},"();")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"customer"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"AppUserFactory"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"find"),e("span",{style:{color:"#858585"}},"(["),e("span",{style:{color:"#C98A7D"}},"'username'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'sylius'"),e("span",{style:{color:"#858585"}},"])"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"getCustomer"),e("span",{style:{color:"#858585"}},"();")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"client"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"request"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'PATCH'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'/api/customers/'"),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"customer"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"getId"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#C98A7D"}},"'/password'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"[],"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"[],"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#C98A7D"}},"'CONTENT_TYPE'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'application/merge-patch+json'"),e("span",{style:{color:"#858585"}},"],"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'{}'"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"response"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"client"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"getResponse"),e("span",{style:{color:"#858585"}},"();")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"assertResponse"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"response"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'error/access_denied_response'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Response"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#D4976C"}},"HTTP_UNAUTHORIZED"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#758575"}},"/** @test */")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"it_does_not_allow_to_change_password_without_required_data"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#E0A569"}},"TestAppUsersStory"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"load"),e("span",{style:{color:"#858585"}},"();")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"customer"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"AppUserFactory"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"find"),e("span",{style:{color:"#858585"}},"(["),e("span",{style:{color:"#C98A7D"}},"'username'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'sylius'"),e("span",{style:{color:"#858585"}},"])"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"getCustomer"),e("span",{style:{color:"#858585"}},"();")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"client"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"request"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'PATCH'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'/api/customers/'"),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"customer"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"getId"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#C98A7D"}},"'/password'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"[],"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"[],"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"self::"),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"authorizedHeaderForPatch"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'{}'"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"response"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"client"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"getResponse"),e("span",{style:{color:"#858585"}},"();")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"assertResponse"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"response"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'customer/change_password_validation_response'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Response"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#D4976C"}},"HTTP_UNPROCESSABLE_ENTITY"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ChangePasswordApiTest"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"extends"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"JsonApiTestCase")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Factories"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"AuthorizedHeaderTrait"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"PurgeDatabaseTrait"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#A0ADA0"}},"/** @test */")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"it_does_not_allow_to_change_password_for_non_authenticated_user"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#B58451"}},"TestAppUsersStory"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"load"),e("span",{style:{color:"#8E8F8B"}},"();")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"customer"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"AppUserFactory"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"find"),e("span",{style:{color:"#8E8F8B"}},"(["),e("span",{style:{color:"#B56959"}},"'username'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'sylius'"),e("span",{style:{color:"#8E8F8B"}},"])"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"getCustomer"),e("span",{style:{color:"#8E8F8B"}},"();")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"client"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"request"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'PATCH'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'/api/customers/'"),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"customer"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"getId"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#B56959"}},"'/password'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"[],"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"[],"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#B56959"}},"'CONTENT_TYPE'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'application/merge-patch+json'"),e("span",{style:{color:"#8E8F8B"}},"],"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'{}'"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"response"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"client"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"getResponse"),e("span",{style:{color:"#8E8F8B"}},"();")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"assertResponse"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"response"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'error/access_denied_response'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Response"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#A65E2B"}},"HTTP_UNAUTHORIZED"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#A0ADA0"}},"/** @test */")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"it_does_not_allow_to_change_password_without_required_data"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#B58451"}},"TestAppUsersStory"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"load"),e("span",{style:{color:"#8E8F8B"}},"();")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"customer"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"AppUserFactory"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"find"),e("span",{style:{color:"#8E8F8B"}},"(["),e("span",{style:{color:"#B56959"}},"'username'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'sylius'"),e("span",{style:{color:"#8E8F8B"}},"])"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"getCustomer"),e("span",{style:{color:"#8E8F8B"}},"();")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"client"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"request"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'PATCH'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'/api/customers/'"),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"customer"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"getId"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#B56959"}},"'/password'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"[],"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"[],"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"self::"),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"authorizedHeaderForPatch"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'{}'"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"response"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"client"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"getResponse"),e("span",{style:{color:"#8E8F8B"}},"();")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"assertResponse"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"response"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'customer/change_password_validation_response'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Response"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#A65E2B"}},"HTTP_UNPROCESSABLE_ENTITY"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),yC={__name:"10",setup(n){const s={srcSequence:"./pages/02_monofony.md"};return $(I),(o,t)=>{const l=Be;return C(),R(ne,U(j(s)),{default:x(()=>[uC,q(l,ye({},{ranges:[""]}),{default:x(()=>[dC]),_:1},16)]),_:1},16)}}},fC=P(yC,[["__file","/@slidev/slides/10.md"]]),mC=e("h1",null,"Configurons notre première resource",-1),hC={__name:"11",setup(n){const s={srcSequence:"./pages/03_resource.md"};return $(I),(o,t)=>(C(),R(ne,U(j(s)),{default:x(()=>[mC]),_:1},16))}},_C=P(hC,[["__file","/@slidev/slides/11.md"]]),BC=e("h1",null,"Resource",-1),gC=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Model"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"ResourceInterface"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"ORM"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Entity"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"repositoryClass"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"BookRepository"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"SyliusCrudRoutes"),e("span",{style:{color:"#858585"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"alias"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'app.book'"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"path"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'admin/books'"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"section"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'backend'"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"templates"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'backend/crud'"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"grid"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'app_book'"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"except"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#C98A7D"}},"'show'"),e("span",{style:{color:"#858585"}},"],")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Book"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [..]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Model"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"ResourceInterface"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"ORM"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"repositoryClass"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"BookRepository"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"SyliusCrudRoutes"),e("span",{style:{color:"#8E8F8B"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"alias"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'app.book'"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"path"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'admin/books'"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"section"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'backend'"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"templates"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'backend/crud'"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"grid"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'app_book'"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"except"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#B56959"}},"'show'"),e("span",{style:{color:"#8E8F8B"}},"],")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Book"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [..]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),AC={__name:"12",setup(n){const s={transition:"fade",srcSequence:"./pages/03_resource.md"};return $(I),(o,t)=>{const l=Be;return C(),R(ne,U(j(s)),{default:x(()=>[BC,q(l,ye({},{ranges:[""]}),{default:x(()=>[gC]),_:1},16)]),_:1},16)}}},CC=P(AC,[["__file","/@slidev/slides/12.md"]]),vC=e("h1",null,"Resource",-1),DC=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Model"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"ResourceInterface"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"ORM"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Entity"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"repositoryClass"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"BookRepository"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"SyliusCrudRoutes"),e("span",{style:{color:"#858585"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"alias"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'app.book'"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"path"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'admin/books'"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"section"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'backend'"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"templates"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'backend/crud'"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"grid"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'app_book'"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"except"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#C98A7D"}},"'show'"),e("span",{style:{color:"#858585"}},"],")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Book"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [..]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Model"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"ResourceInterface"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"ORM"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"repositoryClass"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"BookRepository"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"SyliusCrudRoutes"),e("span",{style:{color:"#8E8F8B"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"alias"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'app.book'"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"path"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'admin/books'"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"section"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'backend'"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"templates"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'backend/crud'"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"grid"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'app_book'"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"except"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#B56959"}},"'show'"),e("span",{style:{color:"#8E8F8B"}},"],")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Book"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [..]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),bC={__name:"13",setup(n){const s={transition:"fade",srcSequence:"./pages/03_resource.md"};return $(I),(o,t)=>{const l=Be;return C(),R(ne,U(j(s)),{default:x(()=>[vC,q(l,ye({},{ranges:["12"]}),{default:x(()=>[DC]),_:1},16)]),_:1},16)}}},kC=P(bC,[["__file","/@slidev/slides/13.md"]]),wC=e("h1",null,"Resource",-1),EC=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Model"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"ResourceInterface"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"ORM"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Entity"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"repositoryClass"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"BookRepository"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"SyliusCrudRoutes"),e("span",{style:{color:"#858585"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"alias"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'app.book'"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"path"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'admin/books'"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"section"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'backend'"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"templates"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'backend/crud'"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"grid"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'app_book'"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"except"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#C98A7D"}},"'show'"),e("span",{style:{color:"#858585"}},"],")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Book"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [..]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Model"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"ResourceInterface"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"ORM"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"repositoryClass"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"BookRepository"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"SyliusCrudRoutes"),e("span",{style:{color:"#8E8F8B"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"alias"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'app.book'"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"path"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'admin/books'"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"section"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'backend'"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"templates"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'backend/crud'"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"grid"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'app_book'"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"except"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#B56959"}},"'show'"),e("span",{style:{color:"#8E8F8B"}},"],")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Book"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [..]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),$C={__name:"14",setup(n){const s={transition:"fade",srcSequence:"./pages/03_resource.md"};return $(I),(o,t)=>{const l=Be;return C(),R(ne,U(j(s)),{default:x(()=>[wC,q(l,ye({},{ranges:["4"]}),{default:x(()=>[EC]),_:1},16)]),_:1},16)}}},xC=P($C,[["__file","/@slidev/slides/14.md"]]),FC=e("h1",null,"Resource",-1),SC=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Model"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"ResourceInterface"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"ORM"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Entity"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"repositoryClass"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"BookRepository"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"SyliusCrudRoutes"),e("span",{style:{color:"#858585"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"alias"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'app.book'"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"path"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'admin/books'"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"section"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'backend'"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"templates"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'backend/crud'"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"grid"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'app_book'"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"except"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#C98A7D"}},"'show'"),e("span",{style:{color:"#858585"}},"],")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Book"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [..]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Model"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"ResourceInterface"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"ORM"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"repositoryClass"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"BookRepository"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"SyliusCrudRoutes"),e("span",{style:{color:"#8E8F8B"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"alias"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'app.book'"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"path"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'admin/books'"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"section"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'backend'"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"templates"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'backend/crud'"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"grid"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'app_book'"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"except"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#B56959"}},"'show'"),e("span",{style:{color:"#8E8F8B"}},"],")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Book"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [..]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),RC={__name:"15",setup(n){const s={transition:"fade",srcSequence:"./pages/03_resource.md"};return $(I),(o,t)=>{const l=Be;return C(),R(ne,U(j(s)),{default:x(()=>[FC,q(l,ye({},{ranges:["5"]}),{default:x(()=>[SC]),_:1},16)]),_:1},16)}}},IC=P(RC,[["__file","/@slidev/slides/15.md"]]),PC=e("h1",null,"Resource",-1),OC=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Model"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"ResourceInterface"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"ORM"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Entity"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"repositoryClass"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"BookRepository"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"SyliusCrudRoutes"),e("span",{style:{color:"#858585"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"alias"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'app.book'"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"path"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'admin/books'"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"section"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'backend'"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"templates"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'backend/crud'"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"grid"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'app_book'"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"except"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#C98A7D"}},"'show'"),e("span",{style:{color:"#858585"}},"],")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Book"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [..]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Model"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"ResourceInterface"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"ORM"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"repositoryClass"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"BookRepository"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"SyliusCrudRoutes"),e("span",{style:{color:"#8E8F8B"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"alias"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'app.book'"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"path"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'admin/books'"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"section"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'backend'"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"templates"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'backend/crud'"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"grid"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'app_book'"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"except"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#B56959"}},"'show'"),e("span",{style:{color:"#8E8F8B"}},"],")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Book"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [..]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),TC={__name:"16",setup(n){const s={srcSequence:"./pages/03_resource.md"};return $(I),(o,t)=>{const l=Be;return C(),R(ne,U(j(s)),{default:x(()=>[PC,q(l,ye({},{ranges:["6","7","8","9","10"]}),{default:x(()=>[OC]),_:1},16)]),_:1},16)}}},LC=P(TC,[["__file","/@slidev/slides/16.md"]]),MC=e("h1",null,"Routes",-1),qC=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Method"),e("th",null,"Path")])]),e("tbody",null,[e("tr",null,[e("td",null,"app_backend_book_index"),e("td",null,"GET"),e("td",null,"/admin/books/")]),e("tr",null,[e("td",null,"app_backend_book_create"),e("td",null,"GET, POST"),e("td",null,"/admin/books/new")]),e("tr",null,[e("td",null,"app_backend_book_update"),e("td",null,"GET, PUT, PATCH"),e("td",null,"/admin/books/{id}/edit")]),e("tr",null,[e("td",null,"app_backend_book_bulk_delete"),e("td",null,"DELETE"),e("td",null,"/admin/books/bulk-delete")]),e("tr",null,[e("td",null,"app_backend_book_delete"),e("td",null,"DELETE"),e("td",null,"/admin/books/{id}")])])],-1),GC={__name:"17",setup(n){const s={srcSequence:"./pages/03_resource.md"};return $(I),(o,t)=>(C(),R(ne,U(j(s)),{default:x(()=>[MC,qC]),_:1},16))}},NC=P(GC,[["__file","/@slidev/slides/17.md"]]),HC=e("h1",null,"Générer une grid",-1),jC=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"$"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"bin/console"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"make:grid")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"$"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"bin/console"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"make:grid")])])])],-1),VC={__name:"18",setup(n){const s={srcSequence:"./pages/04_grid.md"};return $(I),(o,t)=>{const l=Be;return C(),R(ne,U(j(s)),{default:x(()=>[HC,q(l,ye({},{ranges:[""]}),{default:x(()=>[jC]),_:1},16)]),_:1},16)}}},UC=P(VC,[["__file","/@slidev/slides/18.md"]]),WC=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"BookGrid"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"extends"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"AbstractGrid"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceAwareGridInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"static"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"getName"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"string")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'app_book'"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"buildGrid"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"GridBuilderInterface"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"gridBuilder"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"        "),e("span",{style:{color:"#758575"}},"// [...]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"getResourceClass"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"string")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Book"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"BookGrid"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"extends"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"AbstractGrid"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceAwareGridInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"static"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"getName"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"string")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'app_book'"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"buildGrid"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"GridBuilderInterface"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"gridBuilder"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"        "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"getResourceClass"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"string")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Book"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),KC={__name:"19",setup(n){const s={transition:"fade",srcSequence:"./pages/04_grid.md"};return $(I),(o,t)=>{const l=Be;return C(),R(ne,U(j(s)),{default:x(()=>[q(l,ye({},{ranges:["all","1","3-6","13-16"]}),{default:x(()=>[WC]),_:1},16)]),_:1},16)}}},zC=P(KC,[["__file","/@slidev/slides/19.md"]]),YC=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"buildGrid"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"GridBuilderInterface"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"gridBuilder"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"gridBuilder")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"orderBy"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'name'"),e("span",{style:{color:"#858585"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"addField"),e("span",{style:{color:"#858585"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#E0A569"}},"StringField"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"create"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'name'"),e("span",{style:{color:"#858585"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                "),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"setLabel"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'Name'"),e("span",{style:{color:"#858585"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                "),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"setSortable"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"true"),e("span",{style:{color:"#858585"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"addActionGroup"),e("span",{style:{color:"#858585"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#E0A569"}},"MainActionGroup"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"create"),e("span",{style:{color:"#858585"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                "),e("span",{style:{color:"#E0A569"}},"CreateAction"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"create"),e("span",{style:{color:"#858585"}},"(),")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#858585"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"addActionGroup"),e("span",{style:{color:"#858585"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#E0A569"}},"ItemActionGroup"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"create"),e("span",{style:{color:"#858585"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"                "),e("span",{style:{color:"#758575"}},"// ShowAction::create(),")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                "),e("span",{style:{color:"#E0A569"}},"UpdateAction"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"create"),e("span",{style:{color:"#858585"}},"(),")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                "),e("span",{style:{color:"#E0A569"}},"DeleteAction"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"create"),e("span",{style:{color:"#858585"}},"()")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#858585"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"buildGrid"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"GridBuilderInterface"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"gridBuilder"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"gridBuilder")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"orderBy"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'name'"),e("span",{style:{color:"#8E8F8B"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"addField"),e("span",{style:{color:"#8E8F8B"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#B58451"}},"StringField"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"create"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'name'"),e("span",{style:{color:"#8E8F8B"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                "),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"setLabel"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'Name'"),e("span",{style:{color:"#8E8F8B"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                "),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"setSortable"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"true"),e("span",{style:{color:"#8E8F8B"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"addActionGroup"),e("span",{style:{color:"#8E8F8B"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#B58451"}},"MainActionGroup"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"create"),e("span",{style:{color:"#8E8F8B"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                "),e("span",{style:{color:"#B58451"}},"CreateAction"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"create"),e("span",{style:{color:"#8E8F8B"}},"(),")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#8E8F8B"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"addActionGroup"),e("span",{style:{color:"#8E8F8B"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#B58451"}},"ItemActionGroup"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"create"),e("span",{style:{color:"#8E8F8B"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"                "),e("span",{style:{color:"#A0ADA0"}},"// ShowAction::create(),")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                "),e("span",{style:{color:"#B58451"}},"UpdateAction"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"create"),e("span",{style:{color:"#8E8F8B"}},"(),")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                "),e("span",{style:{color:"#B58451"}},"DeleteAction"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"create"),e("span",{style:{color:"#8E8F8B"}},"()")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#8E8F8B"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),ZC={__name:"20",setup(n){const s={transition:"fade",srcSequence:"./pages/04_grid.md"};return $(I),(o,t)=>{const l=Be;return C(),R(ne,U(j(s)),{default:x(()=>[q(l,ye({},{ranges:["all","4","5-9","10-14","15-21"]}),{default:x(()=>[YC]),_:1},16)]),_:1},16)}}},QC=P(ZC,[["__file","/@slidev/slides/20.md"]]),JC=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"buildGrid"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"GridBuilderInterface"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"gridBuilder"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"gridBuilder")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"        "),e("span",{style:{color:"#758575"}},"// [..]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"addActionGroup"),e("span",{style:{color:"#858585"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#E0A569"}},"ItemActionGroup"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"create"),e("span",{style:{color:"#858585"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"                "),e("span",{style:{color:"#758575"}},"// ShowAction::create(),")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                "),e("span",{style:{color:"#E0A569"}},"UpdateAction"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"create"),e("span",{style:{color:"#858585"}},"(),")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                "),e("span",{style:{color:"#E0A569"}},"DeleteAction"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"create"),e("span",{style:{color:"#858585"}},"()")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#858585"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"addActionGroup"),e("span",{style:{color:"#858585"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#E0A569"}},"BulkActionGroup"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"create"),e("span",{style:{color:"#858585"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                "),e("span",{style:{color:"#E0A569"}},"DeleteAction"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"create"),e("span",{style:{color:"#858585"}},"()")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#858585"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"buildGrid"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"GridBuilderInterface"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"gridBuilder"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"gridBuilder")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"        "),e("span",{style:{color:"#A0ADA0"}},"// [..]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"addActionGroup"),e("span",{style:{color:"#8E8F8B"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#B58451"}},"ItemActionGroup"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"create"),e("span",{style:{color:"#8E8F8B"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"                "),e("span",{style:{color:"#A0ADA0"}},"// ShowAction::create(),")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                "),e("span",{style:{color:"#B58451"}},"UpdateAction"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"create"),e("span",{style:{color:"#8E8F8B"}},"(),")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                "),e("span",{style:{color:"#B58451"}},"DeleteAction"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"create"),e("span",{style:{color:"#8E8F8B"}},"()")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#8E8F8B"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"addActionGroup"),e("span",{style:{color:"#8E8F8B"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#B58451"}},"BulkActionGroup"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"create"),e("span",{style:{color:"#8E8F8B"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                "),e("span",{style:{color:"#B58451"}},"DeleteAction"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"create"),e("span",{style:{color:"#8E8F8B"}},"()")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#8E8F8B"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),XC={__name:"21",setup(n){const s={srcSequence:"./pages/04_grid.md"};return $(I),(o,t)=>{const l=Be;return C(),R(ne,U(j(s)),{default:x(()=>[q(l,ye({},{ranges:["12-16"]}),{default:x(()=>[JC]),_:1},16)]),_:1},16)}}},e6=P(XC,[["__file","/@slidev/slides/21.md"]]),n6=e("h1",null,"Et ??",-1),s6={__name:"22",setup(n){const s={transition:"fade",srcSequence:"./pages/05_ui_demo.md"};return $(I),(o,t)=>(C(),R(ne,U(j(s)),{default:x(()=>[n6]),_:1},16))}},o6=P(s6,[["__file","/@slidev/slides/22.md"]]),t6={__name:"23",setup(n){const s={layout:"image",image:"/browsing_books.png",transition:"fade",srcSequence:"./pages/05_ui_demo.md"};return $(I),(o,t)=>(C(),R(sn,U(j(s)),null,16))}},l6=P(t6,[["__file","/@slidev/slides/23.md"]]),r6={__name:"24",setup(n){const s={layout:"image",image:"/adding_book.png",transition:"fade",srcSequence:"./pages/05_ui_demo.md"};return $(I),(o,t)=>(C(),R(sn,U(j(s)),null,16))}},a6=P(r6,[["__file","/@slidev/slides/24.md"]]),c6={__name:"25",setup(n){const s={layout:"image",image:"/editing_book.png",transition:"fade",srcSequence:"./pages/05_ui_demo.md"};return $(I),(o,t)=>(C(),R(sn,U(j(s)),null,16))}},i6=P(c6,[["__file","/@slidev/slides/25.md"]]),p6={__name:"26",setup(n){const s={layout:"image",image:"/delete_confirmation.png",transition:"fade",srcSequence:"./pages/05_ui_demo.md"};return $(I),(o,t)=>(C(),R(sn,U(j(s)),null,16))}},u6=P(p6,[["__file","/@slidev/slides/26.md"]]),d6={__name:"27",setup(n){const s={layout:"image",image:"/flash_message.png",srcSequence:"./pages/05_ui_demo.md"};return $(I),(o,t)=>(C(),R(sn,U(j(s)),null,16))}},y6=P(d6,[["__file","/@slidev/slides/27.md"]]),f6=e("h2",null,"Et un petit search input ?",-1),m6=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"buildGrid"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"GridBuilderInterface"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"gridBuilder"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"gridBuilder")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"orderBy"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'name'"),e("span",{style:{color:"#858585"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"addFilter"),e("span",{style:{color:"#858585"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#E0A569"}},"StringFilter"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"create"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"name"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'search'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"fields"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#C98A7D"}},"'name'"),e("span",{style:{color:"#858585"}},"])")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                "),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"setLabel"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'Search'"),e("span",{style:{color:"#858585"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"addField"),e("span",{style:{color:"#858585"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#E0A569"}},"StringField"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"create"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'name'"),e("span",{style:{color:"#858585"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                "),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"setLabel"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'Name'"),e("span",{style:{color:"#858585"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                "),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"setSortable"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"true"),e("span",{style:{color:"#858585"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"        "),e("span",{style:{color:"#758575"}},"// [..]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"buildGrid"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"GridBuilderInterface"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"gridBuilder"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"gridBuilder")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"orderBy"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'name'"),e("span",{style:{color:"#8E8F8B"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"addFilter"),e("span",{style:{color:"#8E8F8B"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#B58451"}},"StringFilter"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"create"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"name"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'search'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"fields"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#B56959"}},"'name'"),e("span",{style:{color:"#8E8F8B"}},"])")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                "),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"setLabel"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'Search'"),e("span",{style:{color:"#8E8F8B"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"addField"),e("span",{style:{color:"#8E8F8B"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#B58451"}},"StringField"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"create"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'name'"),e("span",{style:{color:"#8E8F8B"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                "),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"setLabel"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'Name'"),e("span",{style:{color:"#8E8F8B"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                "),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"setSortable"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"true"),e("span",{style:{color:"#8E8F8B"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"        "),e("span",{style:{color:"#A0ADA0"}},"// [..]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),h6={__name:"28",setup(n){const s={srcSequence:"./pages/05_ui_demo.md"};return $(I),(o,t)=>{const l=Be;return C(),R(ne,U(j(s)),{default:x(()=>[f6,q(l,ye({},{ranges:["5-8"]}),{default:x(()=>[m6]),_:1},16)]),_:1},16)}}},_6=P(h6,[["__file","/@slidev/slides/28.md"]]),B6={__name:"29",setup(n){const s={layout:"image",image:"/search_filter.png",transition:"fade",srcSequence:"./pages/05_ui_demo.md"};return $(I),(o,t)=>(C(),R(sn,U(j(s)),null,16))}},g6=P(B6,[["__file","/@slidev/slides/29.md"]]),A6={__name:"30",setup(n){const s={layout:"image",image:"/filter_details.png",transition:"fade",srcSequence:"./pages/05_ui_demo.md"};return $(I),(o,t)=>(C(),R(sn,U(j(s)),null,16))}},C6=P(A6,[["__file","/@slidev/slides/30.md"]]),v6={__name:"31",setup(n){const s={layout:"image",image:"/search_value.png",transition:"fade",srcSequence:"./pages/05_ui_demo.md"};return $(I),(o,t)=>(C(),R(sn,U(j(s)),null,16))}},D6=P(v6,[["__file","/@slidev/slides/31.md"]]),b6={__name:"32",setup(n){const s={layout:"image",image:"/filtered_books.png",srcSequence:"./pages/05_ui_demo.md"};return $(I),(o,t)=>(C(),R(sn,U(j(s)),null,16))}},k6=P(b6,[["__file","/@slidev/slides/32.md"]]),w6={__name:"33",setup(n){const s={layout:"image",image:"https://api-platform.com/logo.png",srcSequence:"./pages/06_api_pack.md"};return $(I),(o,t)=>(C(),R(sn,U(j(s)),null,16))}},E6=P(w6,[["__file","/@slidev/slides/33.md"]]),$6=e("h1",null,"Monofony API Pack",-1),x6=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"$"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"composer"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"require"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"monofony/api-pack"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"^0.10"')])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"$"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"composer"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"require"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"monofony/api-pack"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"^0.10"')])])])],-1),F6=e("br",null,null,-1),S6=e("ul",null,[e("li",null,[r("voir "),e("a",{href:"https://docs.monofony.com/current/setup/application",target:"_blank",rel:"noopener"},"l’installation détaillée dans la doc"),r(".")])],-1),R6={__name:"34",setup(n){const s={srcSequence:"./pages/06_api_pack.md"};return $(I),(o,t)=>{const l=Be;return C(),R(ne,U(j(s)),{default:x(()=>[$6,q(l,ye({},{ranges:[""]}),{default:x(()=>[x6]),_:1},16),F6,S6]),_:1},16)}}},I6=P(R6,[["__file","/@slidev/slides/34.md"]]),P6={__name:"35",setup(n){const s={layout:"image",image:"/api_pack.png",srcSequence:"./pages/06_api_pack.md"};return $(I),(o,t)=>(C(),R(sn,U(j(s)),null,16))}},O6=P(P6,[["__file","/@slidev/slides/35.md"]]),T6=e("h1",null,"Book resource",-1),L6=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"ApiResource"),e("span",{style:{color:"#858585"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"normalizationContext"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#C98A7D"}},"'groups'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'book:read'"),e("span",{style:{color:"#858585"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Get"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"GetCollection"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Post"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Put"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Patch"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Delete"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Book"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"ApiResource"),e("span",{style:{color:"#8E8F8B"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"normalizationContext"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#B56959"}},"'groups'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'book:read'"),e("span",{style:{color:"#8E8F8B"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Get"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"GetCollection"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Post"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Put"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Patch"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Delete"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Book"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),M6={__name:"36",setup(n){const s={srcSequence:"./pages/06_api_pack.md"};return $(I),(o,t)=>{const l=Be;return C(),R(ne,U(j(s)),{default:x(()=>[T6,q(l,ye({},{ranges:["all","1-3","4","5","6","7","8","9"]}),{default:x(()=>[L6]),_:1},16)]),_:1},16)}}},q6=P(M6,[["__file","/@slidev/slides/36.md"]]),G6={__name:"37",setup(n){const s={layout:"image",image:"/book_api_doc.png",srcSequence:"./pages/06_api_pack.md"};return $(I),(o,t)=>(C(),R(sn,U(j(s)),null,16))}},N6=P(G6,[["__file","/@slidev/slides/37.md"]]),H6=e("p",null,[e("img",{src:"https://sylius.com/wp-content/uploads/2021/03/sylius-logo_sylius-logo-dark-1536x634.jpg",alt:"Logo"})],-1),j6={__name:"38",setup(n){const s={srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/01_index.md"};return $(I),(o,t)=>(C(),R(ne,U(j(s)),{default:x(()=>[H6]),_:1},16))}},V6=P(j6,[["__file","/@slidev/slides/38.md"]]),Go=Ie({props:{every:{type:Number,default:1},at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){var a,c;const n=Xc("click"),s=Xc("after"),o=(i,p,u)=>er(i,[[p,this.at!=null?+this.at+u:null,"",{hide:this.hide,fade:this.fade}]]);let t=(c=(a=this.$slots).default)==null?void 0:c.call(a);if(!t)return;t=Th(t);const l=i=>i.map((p,u)=>ms(p)?o(mn(p),u%this.every===0?n:s,Math.floor(u/this.every)):p);return t.length===1&&["ul","ol"].includes(t[0].type)&&Array.isArray(t[0].children)?mn(t[0],{},[l(t[0].children)]):l(t)}}),U6=e("h1",null,"La suite…",-1),W6=e("ul",null,[e("li",null,"Améliorer la DX (expérience développeur)"),e("li",null,"Ajouter plus de souplesse"),e("li",null,"Adapter à vos besoins métiers"),e("li",null,"Détacher les resources de Doctrine"),e("li",null,"Permettre une architecture hexagonale")],-1),K6={__name:"39",setup(n){const s={srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/01_index.md"};return $(I),(o,t)=>{const l=Go;return C(),R(ne,U(j(s)),{default:x(()=>[U6,q(l,null,{default:x(()=>[W6]),_:1})]),_:1},16)}}},z6=P(K6,[["__file","/@slidev/slides/39.md"]]),Y6=e("h1",null,"Rapid Application Development",-1),Z6={__name:"40",setup(n){const s={transition:"fade",srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/02_rad.md"};return $(I),(o,t)=>(C(),R(ne,U(j(s)),{default:x(()=>[Y6]),_:1},16))}},Q6=P(Z6,[["__file","/@slidev/slides/40.md"]]),J6=e("h1",null,"Rapid Application Development",-1),X6=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"ORM"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Entity"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"repositoryClass"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"BookRepository"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"alias"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'app.book'"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"section"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'admin'"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"formType"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"BookType"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"templatesDir"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'@SyliusAdminUi/crud'"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"routePrefix"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'/admin'"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"operations"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"[")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Index"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"grid"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'app_book'"),e("span",{style:{color:"#858585"}},"),")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Create"),e("span",{style:{color:"#858585"}},"(),")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Update"),e("span",{style:{color:"#858585"}},"(),")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"BulkDelete"),e("span",{style:{color:"#858585"}},"(),")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Delete"),e("span",{style:{color:"#858585"}},"(),")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Show"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"template"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'book/show.html.twig'"),e("span",{style:{color:"#858585"}},"),")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"],")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Book"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"ORM"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"repositoryClass"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"BookRepository"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"alias"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'app.book'"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"section"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'admin'"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"formType"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"BookType"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"templatesDir"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'@SyliusAdminUi/crud'"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"routePrefix"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'/admin'"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"operations"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"[")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Index"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"grid"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'app_book'"),e("span",{style:{color:"#8E8F8B"}},"),")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Create"),e("span",{style:{color:"#8E8F8B"}},"(),")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Update"),e("span",{style:{color:"#8E8F8B"}},"(),")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"BulkDelete"),e("span",{style:{color:"#8E8F8B"}},"(),")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Delete"),e("span",{style:{color:"#8E8F8B"}},"(),")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Show"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"template"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'book/show.html.twig'"),e("span",{style:{color:"#8E8F8B"}},"),")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"],")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Book"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),ev={__name:"41",setup(n){const s={srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/02_rad.md"};return $(I),(o,t)=>{const l=Be;return C(),R(ne,U(j(s)),{default:x(()=>[J6,q(l,ye({},{ranges:["all","2","3","4","5","6","7","8-15","9","10","11","12","13","14"]}),{default:x(()=>[X6]),_:1},16)]),_:1},16)}}},nv=P(ev,[["__file","/@slidev/slides/41.md"]]),sv=e("h1",null,"Routes",-1),ov=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Method"),e("th",null,"Path")])]),e("tbody",null,[e("tr",null,[e("td",null,"app_admin_book_index"),e("td",null,"GET"),e("td",null,"/admin/books/")]),e("tr",null,[e("td",null,"app_admin_book_create"),e("td",null,"GET, POST"),e("td",null,"/admin/books/new")]),e("tr",null,[e("td",null,"app_admin_book_update"),e("td",null,"GET, PUT, PATCH"),e("td",null,"/admin/books/{id}/edit")]),e("tr",null,[e("td",null,"app_admin_book_bulk_delete"),e("td",null,"DELETE"),e("td",null,"/admin/books/bulk-delete")]),e("tr",null,[e("td",null,"app_admin_book_delete"),e("td",null,"DELETE"),e("td",null,"/admin/books/{id}")]),e("tr",null,[e("td",null,"app_admin_book_show"),e("td",null,"GET"),e("td",null,"/admin/books/{id}")])])],-1),tv={__name:"42",setup(n){const s={srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/02_rad.md"};return $(I),(o,t)=>(C(),R(ne,U(j(s)),{default:x(()=>[sv,ov]),_:1},16))}},lv=P(tv,[["__file","/@slidev/slides/42.md"]]),rv=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"ORM"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Entity"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"repositoryClass"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"BookRepository"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"alias"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'app.book'"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"section"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'admin'"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"formType"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"BookType"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"templatesDir"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'@SyliusAdminUi/crud'"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"routePrefix"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'/admin'"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"operations"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"[")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Index"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"grid"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'app_book'"),e("span",{style:{color:"#858585"}},"),")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Create"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"path"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'create'"),e("span",{style:{color:"#858585"}},"),")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Update"),e("span",{style:{color:"#858585"}},"(),")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"BulkDelete"),e("span",{style:{color:"#858585"}},"(),")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Delete"),e("span",{style:{color:"#858585"}},"(),")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Show"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"template"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'book/show.html.twig'"),e("span",{style:{color:"#858585"}},"),")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"],")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Book"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"ORM"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"repositoryClass"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"BookRepository"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"alias"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'app.book'"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"section"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'admin'"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"formType"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"BookType"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"templatesDir"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'@SyliusAdminUi/crud'"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"routePrefix"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'/admin'"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"operations"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"[")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Index"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"grid"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'app_book'"),e("span",{style:{color:"#8E8F8B"}},"),")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Create"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"path"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'create'"),e("span",{style:{color:"#8E8F8B"}},"),")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Update"),e("span",{style:{color:"#8E8F8B"}},"(),")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"BulkDelete"),e("span",{style:{color:"#8E8F8B"}},"(),")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Delete"),e("span",{style:{color:"#8E8F8B"}},"(),")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Show"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"template"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'book/show.html.twig'"),e("span",{style:{color:"#8E8F8B"}},"),")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"],")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Book"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),av={__name:"43",setup(n){const s={srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/02_rad.md"};return $(I),(o,t)=>{const l=Be;return C(),R(ne,U(j(s)),{default:x(()=>[q(l,ye({},{ranges:["10"]}),{default:x(()=>[rv]),_:1},16)]),_:1},16)}}},cv=P(av,[["__file","/@slidev/slides/43.md"]]),iv=e("h1",null,"Routes",-1),pv=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Method"),e("th",null,"Path")])]),e("tbody",null,[e("tr",null,[e("td",null,"app_admin_book_create"),e("td",null,"GET, POST"),e("td",null,"/admin/books/create")])])],-1),uv={__name:"44",setup(n){const s={srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/02_rad.md"};return $(I),(o,t)=>(C(),R(ne,U(j(s)),{default:x(()=>[iv,pv]),_:1},16))}},dv=P(uv,[["__file","/@slidev/slides/44.md"]]),yv=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"ORM"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Entity"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"repositoryClass"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"BookRepository"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"alias"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'app.book'"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"section"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'admin'"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"formType"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"BookType"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"templatesDir"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'@SyliusAdminUi/crud'"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"routePrefix"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'/admin'"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"operations"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"[")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Index"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"grid"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'app_book'"),e("span",{style:{color:"#858585"}},"),")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Create"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"shortName"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'register'"),e("span",{style:{color:"#858585"}},"),")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Update"),e("span",{style:{color:"#858585"}},"(),")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"BulkDelete"),e("span",{style:{color:"#858585"}},"(),")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Delete"),e("span",{style:{color:"#858585"}},"(),")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Show"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"template"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'book/show.html.twig'"),e("span",{style:{color:"#858585"}},"),")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"],")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Book"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"ORM"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"repositoryClass"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"BookRepository"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"alias"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'app.book'"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"section"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'admin'"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"formType"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"BookType"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"templatesDir"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'@SyliusAdminUi/crud'"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"routePrefix"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'/admin'"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"operations"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"[")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Index"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"grid"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'app_book'"),e("span",{style:{color:"#8E8F8B"}},"),")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Create"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"shortName"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'register'"),e("span",{style:{color:"#8E8F8B"}},"),")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Update"),e("span",{style:{color:"#8E8F8B"}},"(),")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"BulkDelete"),e("span",{style:{color:"#8E8F8B"}},"(),")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Delete"),e("span",{style:{color:"#8E8F8B"}},"(),")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Show"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"template"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'book/show.html.twig'"),e("span",{style:{color:"#8E8F8B"}},"),")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"],")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Book"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),fv={__name:"45",setup(n){const s={srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/02_rad.md"};return $(I),(o,t)=>{const l=Be;return C(),R(ne,U(j(s)),{default:x(()=>[q(l,ye({},{ranges:["10"]}),{default:x(()=>[yv]),_:1},16)]),_:1},16)}}},mv=P(fv,[["__file","/@slidev/slides/45.md"]]),hv=e("h1",null,"Routes",-1),_v=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Method"),e("th",null,"Path")])]),e("tbody",null,[e("tr",null,[e("td",null,"app_admin_book_register"),e("td",null,"GET, POST"),e("td",null,"/admin/books/register")])])],-1),Bv={__name:"46",setup(n){const s={srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/02_rad.md"};return $(I),(o,t)=>(C(),R(ne,U(j(s)),{default:x(()=>[hv,_v]),_:1},16))}},gv=P(Bv,[["__file","/@slidev/slides/46.md"]]),Av=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"ORM"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Entity"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"repositoryClass"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"BookRepository"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"alias"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'app.book'"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"section"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'admin'"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"formType"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"BookType"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"templatesDir"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'@SyliusAdminUi/crud'"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"routePrefix"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'/admin'"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"operations"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"[")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Index"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"grid"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'app_book'"),e("span",{style:{color:"#858585"}},"),")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Create"),e("span",{style:{color:"#858585"}},"(),")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Update"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"methods"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#C98A7D"}},"'GET'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'POST'"),e("span",{style:{color:"#858585"}},"]),")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"BulkDelete"),e("span",{style:{color:"#858585"}},"(),")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Delete"),e("span",{style:{color:"#858585"}},"(),")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Show"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"template"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'book/show.html.twig'"),e("span",{style:{color:"#858585"}},"),")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"],")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Book"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"ORM"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"repositoryClass"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"BookRepository"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"alias"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'app.book'"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"section"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'admin'"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"formType"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"BookType"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"templatesDir"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'@SyliusAdminUi/crud'"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"routePrefix"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'/admin'"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"operations"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"[")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Index"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"grid"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'app_book'"),e("span",{style:{color:"#8E8F8B"}},"),")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Create"),e("span",{style:{color:"#8E8F8B"}},"(),")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Update"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"methods"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#B56959"}},"'GET'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'POST'"),e("span",{style:{color:"#8E8F8B"}},"]),")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"BulkDelete"),e("span",{style:{color:"#8E8F8B"}},"(),")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Delete"),e("span",{style:{color:"#8E8F8B"}},"(),")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Show"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"template"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'book/show.html.twig'"),e("span",{style:{color:"#8E8F8B"}},"),")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"],")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Book"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Cv={__name:"47",setup(n){const s={srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/02_rad.md"};return $(I),(o,t)=>{const l=Be;return C(),R(ne,U(j(s)),{default:x(()=>[q(l,ye({},{ranges:["11"]}),{default:x(()=>[Av]),_:1},16)]),_:1},16)}}},vv=P(Cv,[["__file","/@slidev/slides/47.md"]]),Dv=e("h1",null,"Routes",-1),bv=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Method"),e("th",null,"Path")])]),e("tbody",null,[e("tr",null,[e("td",null,"app_admin_book_update"),e("td",null,"GET, POST"),e("td",null,"/admin/books/{id}/edit")])])],-1),kv={__name:"48",setup(n){const s={srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/02_rad.md"};return $(I),(o,t)=>(C(),R(ne,U(j(s)),{default:x(()=>[Dv,bv]),_:1},16))}},wv=P(kv,[["__file","/@slidev/slides/48.md"]]),Ev=e("h1",null,"Arhictecture hexagonale",-1),$v=e("p",null,"Model",-1),xv=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src/BoardGameBlog/Domain/Model/BoardGame.php")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"ORM"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Entity"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"BoardGame")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"ORM"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Embedded"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"columnPrefix"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"false"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"BoardGameId"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"id"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"__construct"),e("span",{style:{color:"#858585"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        #["),e("span",{style:{color:"#E0A569"}},"ORM"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Embedded"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"columnPrefix"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"false"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"BoardGameName"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"id"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"BoardGameId"),e("span",{style:{color:"#858585"}},"();")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"update"),e("span",{style:{color:"#858585"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"?"),e("span",{style:{color:"#E0A569"}},"BoardGameName"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"??"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src/BoardGameBlog/Domain/Model/BoardGame.php")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"ORM"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Entity"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"BoardGame")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"ORM"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Embedded"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"columnPrefix"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"false"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"BoardGameId"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"id"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"__construct"),e("span",{style:{color:"#8E8F8B"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        #["),e("span",{style:{color:"#B58451"}},"ORM"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Embedded"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"columnPrefix"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"false"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"BoardGameName"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"id"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"BoardGameId"),e("span",{style:{color:"#8E8F8B"}},"();")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"update"),e("span",{style:{color:"#8E8F8B"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"?"),e("span",{style:{color:"#B58451"}},"BoardGameName"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"??"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Fv={__name:"49",setup(n){const s={transition:"fade",srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/03_hexa.md"};return $(I),(o,t)=>{const l=Be,a=Go;return C(),R(ne,U(j(s)),{default:x(()=>[Ev,q(a,null,{default:x(()=>[$v,q(l,ye({},{ranges:["all","5-6","8-13","15-19"]}),{default:x(()=>[xv]),_:1},16)]),_:1})]),_:1},16)}}},Sv=P(Fv,[["__file","/@slidev/slides/49.md"]]),Rv=e("h1",null,"Architecture hexagonale",-1),Iv=e("p",null,"Model",-1),Pv=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src/BoardGameBlog/Domain/Model/BoardGame.php")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"ORM"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Entity"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"BoardGame")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}},"    ")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"id"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"BoardGameId")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"id"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"name"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"BoardGameName")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src/BoardGameBlog/Domain/Model/BoardGame.php")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"ORM"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Entity"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"BoardGame")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}},"    ")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"id"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"BoardGameId")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"id"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"name"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"BoardGameName")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Ov={__name:"50",setup(n){const s={srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/03_hexa.md"};return $(I),(o,t)=>{const l=Be;return C(),R(ne,U(j(s)),{default:x(()=>[Rv,Iv,q(l,ye({},{ranges:["6-15"]}),{default:x(()=>[Pv]),_:1},16)]),_:1},16)}}},Tv=P(Ov,[["__file","/@slidev/slides/50.md"]]),Lv=e("h1",null,"Architecture hexagonale",-1),Mv=e("p",null,"Resource",-1),qv=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src/BoardGameBlog/Infrastructure/Sylius/Resource/BoardGameResource.php")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"alias"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'app.board_game'"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"section"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'admin'"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"formType"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"BoardGameType"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"templatesDir"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'crud'"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"routePrefix"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'/admin'"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Create"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#758575"}},"/*...*/"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Update"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#758575"}},"/*...*/"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Index"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#758575"}},"/*...*/"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Show"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#758575"}},"/*...*/"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Delete"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#758575"}},"/*...*/"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"BoardGameResource"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceInterface")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src/BoardGameBlog/Infrastructure/Sylius/Resource/BoardGameResource.php")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"alias"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'app.board_game'"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"section"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'admin'"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"formType"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"BoardGameType"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"templatesDir"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'crud'"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"routePrefix"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'/admin'"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Create"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A0ADA0"}},"/*...*/"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Update"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A0ADA0"}},"/*...*/"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Index"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A0ADA0"}},"/*...*/"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Show"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A0ADA0"}},"/*...*/"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Delete"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A0ADA0"}},"/*...*/"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"BoardGameResource"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceInterface")])])])],-1),Gv={__name:"51",setup(n){const s={srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/03_hexa.md"};return $(I),(o,t)=>{const l=Be,a=Go;return C(),R(ne,U(j(s)),{default:x(()=>[Lv,q(a,null,{default:x(()=>[Mv,q(l,ye({},{ranges:["all","9","10","11","12","13"]}),{default:x(()=>[qv]),_:1},16)]),_:1})]),_:1},16)}}},Nv=P(Gv,[["__file","/@slidev/slides/51.md"]]),Hv=e("h1",null,"Différences",-1),jv=e("p",null,"Précédente implémentation",-1),Vv=e("ul",null,[e("li",null,[r("ResourceController avec des actions "),e("ul",null,[e("li",null,"showAction"),e("li",null,"indexAction"),e("li",null,"createAction"),e("li",null,"updateAction"),e("li",null,"deleteAction"),e("li",null,"bulkDeleteAction"),e("li",null,"applyStateMachineTransitionAction")])])],-1),Uv=e("p",null,[e("strong",null,"582 lignes de code 😯")],-1),Wv=e("p",null,[e("strong",null,"2808 lignes de tests pour un même service 😱")],-1),Kv={__name:"52",setup(n){const s={transition:"fade",srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/04_before.md"};return $(I),(o,t)=>{const l=Go;return C(),R(ne,U(j(s)),{default:x(()=>[Hv,q(l,null,{default:x(()=>[jv,Vv,Uv,Wv]),_:1})]),_:1},16)}}},zv=P(Kv,[["__file","/@slidev/slides/52.md"]]),Yv=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// vendor/sylius/resource-bundle/src/Bundle/Controller/ResourceController.php")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"showAction"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"Request"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"request"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Response")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"configuration"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"requestConfigurationFactory"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"create"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"metadata"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"request"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"isGrantedOr403"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"configuration"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"ResourceActions"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#D4976C"}},"SHOW"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"resource"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"findOr404"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"configuration"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"event"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"eventDispatcher"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"dispatch"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"ResourceActions"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#D4976C"}},"SHOW"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"configuration"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"resource"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"eventResponse"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"event"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"getResponse"),e("span",{style:{color:"#858585"}},"();")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"!=="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"eventResponse"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"eventResponse"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"configuration"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"isHtmlRequest"),e("span",{style:{color:"#858585"}},"())"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"render"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"configuration"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"getTemplate"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"ResourceActions"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#D4976C"}},"SHOW"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'.html'"),e("span",{style:{color:"#858585"}},"),"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"[")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#C98A7D"}},"'configuration'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"configuration"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#C98A7D"}},"'metadata'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"metadata"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#C98A7D"}},"'resource'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"resource"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"metadata"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"getName"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"resource"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"]);")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"createRestView"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"configuration"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"resource"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// vendor/sylius/resource-bundle/src/Bundle/Controller/ResourceController.php")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"showAction"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"Request"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"request"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Response")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"configuration"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"requestConfigurationFactory"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"create"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"metadata"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"request"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"isGrantedOr403"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"configuration"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"ResourceActions"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#A65E2B"}},"SHOW"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"resource"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"findOr404"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"configuration"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"event"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"eventDispatcher"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"dispatch"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"ResourceActions"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#A65E2B"}},"SHOW"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"configuration"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"resource"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"eventResponse"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"event"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"getResponse"),e("span",{style:{color:"#8E8F8B"}},"();")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"!=="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"eventResponse"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"eventResponse"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"configuration"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"isHtmlRequest"),e("span",{style:{color:"#8E8F8B"}},"())"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"render"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"configuration"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"getTemplate"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"ResourceActions"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#A65E2B"}},"SHOW"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'.html'"),e("span",{style:{color:"#8E8F8B"}},"),"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"[")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#B56959"}},"'configuration'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"configuration"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#B56959"}},"'metadata'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"metadata"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#B56959"}},"'resource'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"resource"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"metadata"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"getName"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"resource"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"]);")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"createRestView"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"configuration"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"resource"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Zv={__name:"53",setup(n){const s={srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/04_before.md"};return $(I),(o,t)=>{const l=Be;return C(),R(ne,U(j(s)),{default:x(()=>[q(l,ye({},{ranges:["all","4","6","7","9-13","15-22","24"]}),{default:x(()=>[Yv]),_:1},16)]),_:1},16)}}},Qv=P(Zv,[["__file","/@slidev/slides/53.md"]]),Jv=e("h1",null,"Différences",-1),Xv=e("p",null,"Nouvelle implémentation",-1),eD=e("p",null,"PlaceHolderAction avec…",-1),nD=e("p",null,"une seule action ! ❤️",-1),sD={__name:"54",setup(n){const s={srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/05_after.md"};return $(I),(o,t)=>{const l=Go;return C(),R(ne,U(j(s)),{default:x(()=>[Jv,q(l,null,{default:x(()=>[Xv,eD,nD]),_:1})]),_:1},16)}}},oD=P(sD,[["__file","/@slidev/slides/54.md"]]),tD=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Action"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"PlaceHolderAction")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#758575"}},"/**")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"     * "),e("span",{style:{color:"#4D9375"}},"@param"),e("span",{style:{color:"#758575"}}," "),e("span",{style:{color:"#4D9375"}},"mixed"),e("span",{style:{color:"#758575"}}," $data")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"     */")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"__invoke"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"mixed")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Action"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"PlaceHolderAction")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#A0ADA0"}},"/**")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"     * "),e("span",{style:{color:"#1C6B48"}},"@param"),e("span",{style:{color:"#A0ADA0"}}," "),e("span",{style:{color:"#1C6B48"}},"mixed"),e("span",{style:{color:"#A0ADA0"}}," $data")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"     */")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"__invoke"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"mixed")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),lD={__name:"55",setup(n){const s={srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/05_after.md"};return $(I),(o,t)=>{const l=Be;return C(),R(ne,U(j(s)),{default:x(()=>[q(l,ye({},{ranges:["all","9","11"]}),{default:x(()=>[tD]),_:1},16)]),_:1},16)}}},rD=P(lD,[["__file","/@slidev/slides/55.md"]]),aD={__name:"56",setup(n){const s={layout:"image",image:"/fake_end.png",srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/05_after.md"};return $(I),(o,t)=>(C(),R(sn,U(j(s)),null,16))}},cD=P(aD,[["__file","/@slidev/slides/56.md"]]),iD=e("h1",null,"Kernel request events",-1),pD={__name:"57",setup(n){const s={transition:"fade",srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/05_after.md"};return $(I),(o,t)=>(C(),R(ne,U(j(s)),{default:x(()=>[iD]),_:1},16))}},uD=P(pD,[["__file","/@slidev/slides/57.md"]]),dD=e("h1",null,"Kernel request events",-1),yD=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Event"),e("th",null,"Description")])]),e("tbody",null,[e("tr",null,[e("td",null,"AddFormatListener"),e("td",null,"kernel.request"),e("td",null,"Devine le meilleure format de réponse (content-negociation).")])])],-1),fD={__name:"58",setup(n){const s={transition:"fade",srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/05_after.md"};return $(I),(o,t)=>(C(),R(ne,U(j(s)),{default:x(()=>[dD,yD]),_:1},16))}},mD=P(fD,[["__file","/@slidev/slides/58.md"]]),hD=e("h1",null,"Kernel request events",-1),_D=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Event"),e("th",null,"Description")])]),e("tbody",null,[e("tr",null,[e("td",null,"AddFormatListener"),e("td",null,"kernel.request"),e("td",null,"Devine le meilleure format de réponse (content-negociation).")]),e("tr",null,[e("td",null,"ReadListener"),e("td",null,"kernel.request"),e("td",null,"Récupère les données en utilisant les states providers.")])])],-1),BD={__name:"59",setup(n){const s={transition:"fade",srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/05_after.md"};return $(I),(o,t)=>(C(),R(ne,U(j(s)),{default:x(()=>[hD,_D]),_:1},16))}},gD=P(BD,[["__file","/@slidev/slides/59.md"]]),AD=e("h1",null,"Kernel request events",-1),CD=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Event"),e("th",null,"Description")])]),e("tbody",null,[e("tr",null,[e("td",null,"AddFormatListener"),e("td",null,"kernel.request"),e("td",null,"Devine le meilleure format de réponse (content-negociation).")]),e("tr",null,[e("td",null,"ReadListener"),e("td",null,"kernel.request"),e("td",null,"Récupère les données en utilisant les states providers.")]),e("tr",null,[e("td",null,"FactoryListener"),e("td",null,"kernel.request"),e("td",null,"Instancie la resource en utilisant la resource factory.")])])],-1),vD={__name:"60",setup(n){const s={transition:"fade",srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/05_after.md"};return $(I),(o,t)=>(C(),R(ne,U(j(s)),{default:x(()=>[AD,CD]),_:1},16))}},DD=P(vD,[["__file","/@slidev/slides/60.md"]]),bD=e("h1",null,"Kernel request events",-1),kD=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Event"),e("th",null,"Description")])]),e("tbody",null,[e("tr",null,[e("td",null,"AddFormatListener"),e("td",null,"kernel.request"),e("td",null,"Devine le meilleure format de réponse (content-negociation).")]),e("tr",null,[e("td",null,"ReadListener"),e("td",null,"kernel.request"),e("td",null,"Récupère les données en utilisant les states providers.")]),e("tr",null,[e("td",null,"FactoryListener"),e("td",null,"kernel.request"),e("td",null,"Instancie la resource en utilisant la resource factory.")]),e("tr",null,[e("td",null,"DeserializeListener"),e("td",null,"kernel.request"),e("td",null,"Désérialise les données dans un objet PHP.")])])],-1),wD={__name:"61",setup(n){const s={srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/05_after.md"};return $(I),(o,t)=>(C(),R(ne,U(j(s)),{default:x(()=>[bD,kD]),_:1},16))}},ED=P(wD,[["__file","/@slidev/slides/61.md"]]),$D=e("h1",null,"Kernel view events",-1),xD={__name:"62",setup(n){const s={transition:"fade",srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/05_after.md"};return $(I),(o,t)=>(C(),R(ne,U(j(s)),{default:x(()=>[$D]),_:1},16))}},FD=P(xD,[["__file","/@slidev/slides/62.md"]]),SD=e("h1",null,"Kernel view events",-1),RD=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Event"),e("th",null,"Description")])]),e("tbody",null,[e("tr",null,[e("td",null,"FormListener"),e("td",null,"kernel.view"),e("td",null,"Initialise et soumet le formulaire (si format HTML).")])])],-1),ID={__name:"63",setup(n){const s={transition:"fade",srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/05_after.md"};return $(I),(o,t)=>(C(),R(ne,U(j(s)),{default:x(()=>[SD,RD]),_:1},16))}},PD=P(ID,[["__file","/@slidev/slides/63.md"]]),OD=e("h1",null,"Kernel view events",-1),TD=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Event"),e("th",null,"Description")])]),e("tbody",null,[e("tr",null,[e("td",null,"FormListener"),e("td",null,"kernel.view"),e("td",null,"Initialise et soumet le formulaire (si format HTML).")]),e("tr",null,[e("td",null,"ValidateListener"),e("td",null,"kernel.view"),e("td",null,"Valide les donnés en utilisant les validateurs Symfony.")])])],-1),LD={__name:"64",setup(n){const s={transition:"fade",srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/05_after.md"};return $(I),(o,t)=>(C(),R(ne,U(j(s)),{default:x(()=>[OD,TD]),_:1},16))}},MD=P(LD,[["__file","/@slidev/slides/64.md"]]),qD=e("h1",null,"Kernel view events",-1),GD=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Event"),e("th",null,"Description")])]),e("tbody",null,[e("tr",null,[e("td",null,"FormListener"),e("td",null,"kernel.view"),e("td",null,"Initialise et soumet le formulaire (si format HTML).")]),e("tr",null,[e("td",null,"ValidateListener"),e("td",null,"kernel.view"),e("td",null,"Valide les donnés en utilisant les validateurs Symfony.")]),e("tr",null,[e("td",null,"WriteListener"),e("td",null,"kernel.view"),e("td",null,"Persiste les changements en utilisant les states processors.")])])],-1),ND={__name:"65",setup(n){const s={transition:"fade",srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/05_after.md"};return $(I),(o,t)=>(C(),R(ne,U(j(s)),{default:x(()=>[qD,GD]),_:1},16))}},HD=P(ND,[["__file","/@slidev/slides/65.md"]]),jD=e("h1",null,"Kernel view events",-1),VD=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Event"),e("th",null,"Description")])]),e("tbody",null,[e("tr",null,[e("td",null,"FormListener"),e("td",null,"kernel.view"),e("td",null,"Initialise et soumet le formulaire (si format HTML).")]),e("tr",null,[e("td",null,"ValidateListener"),e("td",null,"kernel.view"),e("td",null,"Valide les donnés en utilisant les validateurs Symfony.")]),e("tr",null,[e("td",null,"WriteListener"),e("td",null,"kernel.view"),e("td",null,"Persiste les changements en utilisant les states processors.")]),e("tr",null,[e("td",null,"SerializeListener"),e("td",null,"kernel.view"),e("td",null,"Sérialise l’objet PHP en string.")])])],-1),UD={__name:"66",setup(n){const s={transition:"fade",srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/05_after.md"};return $(I),(o,t)=>(C(),R(ne,U(j(s)),{default:x(()=>[jD,VD]),_:1},16))}},WD=P(UD,[["__file","/@slidev/slides/66.md"]]),KD=e("h1",null,"Kernel view events",-1),zD=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Event"),e("th",null,"Description")])]),e("tbody",null,[e("tr",null,[e("td",null,"FormListener"),e("td",null,"kernel.view"),e("td",null,"Initialise et soumet le formulaire (si format HTML).")]),e("tr",null,[e("td",null,"ValidateListener"),e("td",null,"kernel.view"),e("td",null,"Valide les donnés en utilisant les validateurs Symfony.")]),e("tr",null,[e("td",null,"WriteListener"),e("td",null,"kernel.view"),e("td",null,"Persiste les changements en utilisant les states processors.")]),e("tr",null,[e("td",null,"SerializeListener"),e("td",null,"kernel.view"),e("td",null,"Sérialise l’objet PHP en string.")]),e("tr",null,[e("td",null,"RespondListener"),e("td",null,"kernel.view"),e("td",null,"Transforme les données en une réponse Symfony.")])])],-1),YD={__name:"67",setup(n){const s={srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/05_after.md"};return $(I),(o,t)=>(C(),R(ne,U(j(s)),{default:x(()=>[KD,zD]),_:1},16))}},ZD=P(YD,[["__file","/@slidev/slides/67.md"]]),QD=e("hr",null,null,-1),JD=e("h1",null,"State provider",-1),XD=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"/**")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}}," * Retrieves data from a persistence layer.")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}}," *")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}}," * @experimental")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}}," */")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"interface"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ProviderInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"provide"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"Operation"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"operation"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Context"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"context"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"object"),e("span",{style:{color:"#858585"}},"|"),e("span",{style:{color:"#4D9375"}},"iterable"),e("span",{style:{color:"#858585"}},"|"),e("span",{style:{color:"#4D9375"}},"null"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"/**")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}}," * Retrieves data from a persistence layer.")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}}," *")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}}," * @experimental")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}}," */")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"interface"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ProviderInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"provide"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"Operation"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"operation"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Context"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"context"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"object"),e("span",{style:{color:"#8E8F8B"}},"|"),e("span",{style:{color:"#1C6B48"}},"iterable"),e("span",{style:{color:"#8E8F8B"}},"|"),e("span",{style:{color:"#1C6B48"}},"null"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),eb=e("ul",null,[e("li",null,[r("Operation "),e("em",null,"(Create, Show, Index, Update, Delete, BulkDelete…)")]),e("li",null,[r("Context: ArrayObject "),e("em",null,'(contenant des options : "RequestOption" qui contient la request)')])],-1),nb={__name:"68",setup(n){const s={srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/06_provider.md"};return $(I),(o,t)=>{const l=Be,a=Go;return C(),R(ne,U(j(s)),{default:x(()=>[QD,JD,q(a,null,{default:x(()=>[q(l,ye({},{ranges:[""]}),{default:x(()=>[XD]),_:1},16),eb]),_:1})]),_:1},16)}}},sb=P(nb,[["__file","/@slidev/slides/68.md"]]),ob=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src/BoardGameBlog/Infrastructure/Sylius/Resource/BoardGameResource.php")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"alias"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'app.board_game'"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"section"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'admin'"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"formType"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"BoardGameType"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"templatesDir"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'crud'"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"routePrefix"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'/admin'"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Show"),e("span",{style:{color:"#858585"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"template"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'board_game/show.html.twig'"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"provider"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"BoardGameItemProvider"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"BoardGameResource"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceInterface")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src/BoardGameBlog/Infrastructure/Sylius/Resource/BoardGameResource.php")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"alias"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'app.board_game'"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"section"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'admin'"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"formType"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"BoardGameType"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"templatesDir"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'crud'"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"routePrefix"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'/admin'"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Show"),e("span",{style:{color:"#8E8F8B"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"template"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'board_game/show.html.twig'"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"provider"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"BoardGameItemProvider"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"BoardGameResource"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceInterface")])])])],-1),tb={__name:"69",setup(n){const s={srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/06_provider.md"};return $(I),(o,t)=>{const l=Be;return C(),R(ne,U(j(s)),{default:x(()=>[q(l,ye({},{ranges:["all","11"]}),{default:x(()=>[ob]),_:1},16)]),_:1},16)}}},lb=P(tb,[["__file","/@slidev/slides/69.md"]]),rb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src/BoardGameBlog/Infrastructure/Sylius/State/Http/Provider/BoardGameItemProvider.php")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"BoardGameItemProvider"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ProviderInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"__construct"),e("span",{style:{color:"#858585"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"QueryBusInterface"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"queryBus"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"provide"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"Operation"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"operation"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Context"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"context"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"object"),e("span",{style:{color:"#858585"}},"|"),e("span",{style:{color:"#4D9375"}},"iterable"),e("span",{style:{color:"#858585"}},"|"),e("span",{style:{color:"#4D9375"}},"null")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"request"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"context"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"get"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"RequestOption"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},"?->"),e("span",{style:{color:"#A1B567"}},"request"),e("span",{style:{color:"#858585"}},"();")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#E0A569"}},"Assert"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"notNull"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"request"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"id"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"string"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"request"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"attributes"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"get"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'id'"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"model"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"queryBus"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"ask"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"FindBoardGameQuery"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"BoardGameId"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"Uuid"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"fromString"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"id"),e("span",{style:{color:"#858585"}},"))));")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"!=="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"model"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"?"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"BoardGameResource"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"fromModel"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"model"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src/BoardGameBlog/Infrastructure/Sylius/State/Http/Provider/BoardGameItemProvider.php")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"BoardGameItemProvider"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ProviderInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"__construct"),e("span",{style:{color:"#8E8F8B"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"QueryBusInterface"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"queryBus"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"provide"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"Operation"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"operation"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Context"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"context"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"object"),e("span",{style:{color:"#8E8F8B"}},"|"),e("span",{style:{color:"#1C6B48"}},"iterable"),e("span",{style:{color:"#8E8F8B"}},"|"),e("span",{style:{color:"#1C6B48"}},"null")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"request"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"context"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"get"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"RequestOption"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},"?->"),e("span",{style:{color:"#6C7834"}},"request"),e("span",{style:{color:"#8E8F8B"}},"();")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#B58451"}},"Assert"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"notNull"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"request"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"id"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"string"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"request"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"attributes"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"get"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'id'"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"model"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"queryBus"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"ask"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"FindBoardGameQuery"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"BoardGameId"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"Uuid"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"fromString"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"id"),e("span",{style:{color:"#8E8F8B"}},"))));")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"!=="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"model"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"?"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"BoardGameResource"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"fromModel"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"model"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),ab={__name:"70",setup(n){const s={srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/06_provider.md"};return $(I),(o,t)=>{const l=Be;return C(),R(ne,U(j(s)),{default:x(()=>[q(l,ye({},{ranges:["all","11-12","14","16","18"]}),{default:x(()=>[rb]),_:1},16)]),_:1},16)}}},cb=P(ab,[["__file","/@slidev/slides/70.md"]]),ib=e("hr",null,null,-1),pb=e("h1",null,"State processor",-1),ub=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"/**")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}}," * Process data: send an email, persist to storage, add to queue etc.")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}}," *")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}}," * @experimental")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}}," */")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"interface"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ProcessorInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#758575"}},"/**")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"     * Handle the state.")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"     */")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"process"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"mixed"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Operation"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"operation"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Context"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"context"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"mixed"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"/**")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}}," * Process data: send an email, persist to storage, add to queue etc.")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}}," *")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}}," * @experimental")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}}," */")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"interface"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ProcessorInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#A0ADA0"}},"/**")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"     * Handle the state.")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"     */")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"process"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"mixed"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Operation"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"operation"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Context"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"context"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"mixed"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),db={__name:"71",setup(n){const s={srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/07_processor.md"};return $(I),(o,t)=>{const l=Be;return C(),R(ne,U(j(s)),{default:x(()=>[ib,pb,q(l,ye({},{ranges:["all","11"]}),{default:x(()=>[ub]),_:1},16)]),_:1},16)}}},yb=P(db,[["__file","/@slidev/slides/71.md"]]),fb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src/BoardGameBlog/Infrastructure/Sylius/Resource/BoardGameResource.php")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"alias"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'app.board_game'"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"section"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'admin'"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"formType"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"BoardGameType"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"templatesDir"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'crud'"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"routePrefix"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'/admin'"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"Delete"),e("span",{style:{color:"#858585"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"provider"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"BoardGameItemProvider"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"processor"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"DeleteBoardGameProcessor"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"BoardGameResource"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceInterface")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src/BoardGameBlog/Infrastructure/Sylius/Resource/BoardGameResource.php")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"alias"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'app.board_game'"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"section"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'admin'"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"formType"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"BoardGameType"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"templatesDir"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'crud'"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"routePrefix"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'/admin'"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"Delete"),e("span",{style:{color:"#8E8F8B"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"provider"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"BoardGameItemProvider"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"processor"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"DeleteBoardGameProcessor"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"BoardGameResource"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceInterface")])])])],-1),mb={__name:"72",setup(n){const s={srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/07_processor.md"};return $(I),(o,t)=>{const l=Be;return C(),R(ne,U(j(s)),{default:x(()=>[q(l,ye({},{ranges:["all","10","11"]}),{default:x(()=>[fb]),_:1},16)]),_:1},16)}}},hb=P(mb,[["__file","/@slidev/slides/72.md"]]),_b=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src/BoardGameBlog/Infrastructure/Sylius/State/Http/Processor/DeleteBoardGameProcessor.php")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"DeleteBoardGameProcessor"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ProcessorInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"__construct"),e("span",{style:{color:"#858585"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"CommandBusInterface"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"commandBus"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"process"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"mixed"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Operation"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"operation"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Context"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"context"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"mixed")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#E0A569"}},"Assert"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"isInstanceOf"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"BoardGameResource"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"commandBus"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"dispatch"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"DeleteBoardGameCommand"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"BoardGameId"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"id"),e("span",{style:{color:"#858585"}},")));")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src/BoardGameBlog/Infrastructure/Sylius/State/Http/Processor/DeleteBoardGameProcessor.php")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"DeleteBoardGameProcessor"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ProcessorInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"__construct"),e("span",{style:{color:"#8E8F8B"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"CommandBusInterface"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"commandBus"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"process"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"mixed"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Operation"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"operation"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Context"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"context"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"mixed")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#B58451"}},"Assert"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"isInstanceOf"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"BoardGameResource"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"commandBus"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"dispatch"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"DeleteBoardGameCommand"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"BoardGameId"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"id"),e("span",{style:{color:"#8E8F8B"}},")));")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Bb={__name:"73",setup(n){const s={srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/07_processor.md"};return $(I),(o,t)=>{const l=Be;return C(),R(ne,U(j(s)),{default:x(()=>[q(l,ye({},{ranges:["all","11","13","15"]}),{default:x(()=>[_b]),_:1},16)]),_:1},16)}}},gb=P(Bb,[["__file","/@slidev/slides/73.md"]]),Ab=e("hr",null,null,-1),Cb=e("h1",null,"Responder",-1),vb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"interface"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResponderInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#758575"}},"/**")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"     * Handle the response.")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"     */")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"respond"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"mixed"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Operation"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"operation"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Context"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"context"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"mixed"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"interface"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResponderInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#A0ADA0"}},"/**")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"     * Handle the response.")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"     */")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"respond"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"mixed"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Operation"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"operation"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Context"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"context"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"mixed"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Db={__name:"74",setup(n){const s={srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/08_responder.md"};return $(I),(o,t)=>{const l=Be;return C(),R(ne,U(j(s)),{default:x(()=>[Ab,Cb,q(l,ye({},{ranges:["all","6"]}),{default:x(()=>[vb]),_:1},16)]),_:1},16)}}},bb=P(Db,[["__file","/@slidev/slides/74.md"]]),kb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Responder"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResponderInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"__construct"),e("span",{style:{color:"#858585"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"ResponderInterface"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"htmlResponder"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"ResponderInterface"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"apiResponder"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"respond"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"mixed"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Operation"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"operation"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Context"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"context"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"mixed")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"request"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"context"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"get"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"RequestOption"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},"?->"),e("span",{style:{color:"#A1B567"}},"request"),e("span",{style:{color:"#858585"}},"();")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"==="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"request"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"format"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"request"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"getRequestFormat"),e("span",{style:{color:"#858585"}},"();")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'html'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"==="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"format"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"htmlResponder"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"respond"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"operation"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"context"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"apiResponder"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"respond"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"operation"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"context"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Responder"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResponderInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"__construct"),e("span",{style:{color:"#8E8F8B"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"ResponderInterface"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"htmlResponder"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"ResponderInterface"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"apiResponder"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"respond"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"mixed"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Operation"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"operation"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Context"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"context"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"mixed")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"request"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"context"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"get"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"RequestOption"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},"?->"),e("span",{style:{color:"#6C7834"}},"request"),e("span",{style:{color:"#8E8F8B"}},"();")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"==="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"request"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"format"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"request"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"getRequestFormat"),e("span",{style:{color:"#8E8F8B"}},"();")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'html'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"==="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"format"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"htmlResponder"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"respond"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"operation"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"context"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"apiResponder"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"respond"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"operation"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"context"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),wb={__name:"75",setup(n){const s={srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/08_responder.md"};return $(I),(o,t)=>{const l=Be;return C(),R(ne,U(j(s)),{default:x(()=>[q(l,ye({},{ranges:["all","3-7","11","13-15","17","19-21","23"]}),{default:x(()=>[kb]),_:1},16)]),_:1},16)}}},Eb=P(wb,[["__file","/@slidev/slides/75.md"]]),$b=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"AsCommand"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"name"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'app:show-book'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ShowBookCommand"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"extends"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Command")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"__construct"),e("span",{style:{color:"#858585"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"readonly"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"ProviderInterface"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"provider"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"readonly"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"ResponderInterface"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"responder"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"parent::"),e("span",{style:{color:"#A1B567"}},"__construct"),e("span",{style:{color:"#858585"}},"();")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"protected"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"configure"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"addArgument"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'id'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"InputArgument"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#D4976C"}},"REQUIRED"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'The book id.'"),e("span",{style:{color:"#858585"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"protected"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"execute"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"InputInterface"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"input"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"OutputInterface"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"output"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"int")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"        "),e("span",{style:{color:"#758575"}},"/// [...]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"AsCommand"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"name"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'app:show-book'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ShowBookCommand"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"extends"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Command")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"__construct"),e("span",{style:{color:"#8E8F8B"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"readonly"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"ProviderInterface"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"provider"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"readonly"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"ResponderInterface"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"responder"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"parent::"),e("span",{style:{color:"#6C7834"}},"__construct"),e("span",{style:{color:"#8E8F8B"}},"();")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"protected"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"configure"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"addArgument"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'id'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"InputArgument"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#A65E2B"}},"REQUIRED"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'The book id.'"),e("span",{style:{color:"#8E8F8B"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"protected"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"execute"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"InputInterface"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"input"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"OutputInterface"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"output"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"int")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"        "),e("span",{style:{color:"#A0ADA0"}},"/// [...]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),xb={__name:"76",setup(n){const s={srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/08_responder.md"};return $(I),(o,t)=>{const l=Be;return C(),R(ne,U(j(s)),{default:x(()=>[q(l,ye({},{ranges:["all","1","4-9","11-16","18-21"]}),{default:x(()=>[$b]),_:1},16)]),_:1},16)}}},Fb=P(xb,[["__file","/@slidev/slides/76.md"]]),Sb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"AsCommand"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"name"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'app:show-book'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ShowBookCommand"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"extends"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Command")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"protected"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"execute"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"InputInterface"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"input"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"OutputInterface"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"output"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"int")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"operation"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"CliOperation"),e("span",{style:{color:"#858585"}},"();")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"operation"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"operation"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"withProvider"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"BookItemProvider"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"operation"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"operation"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"withResponder"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"BookItemResponder"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"context"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Context"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"CliOption"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"input"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"output"),e("span",{style:{color:"#858585"}},"));")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"provider"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"provide"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"operation"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"context"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#758575"}},"/** "),e("span",{style:{color:"#4D9375"}},"@var"),e("span",{style:{color:"#758575"}}," "),e("span",{style:{color:"#4D9375"}},"int"),e("span",{style:{color:"#758575"}}," $response */")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"response"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"responder"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"respond"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"operation"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"context"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"response"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"AsCommand"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"name"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'app:show-book'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ShowBookCommand"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"extends"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Command")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"protected"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"execute"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"InputInterface"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"input"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"OutputInterface"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"output"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"int")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"operation"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"CliOperation"),e("span",{style:{color:"#8E8F8B"}},"();")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"operation"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"operation"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"withProvider"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"BookItemProvider"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"operation"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"operation"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"withResponder"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"BookItemResponder"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"context"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Context"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"CliOption"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"input"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"output"),e("span",{style:{color:"#8E8F8B"}},"));")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"provider"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"provide"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"operation"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"context"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#A0ADA0"}},"/** "),e("span",{style:{color:"#1C6B48"}},"@var"),e("span",{style:{color:"#A0ADA0"}}," "),e("span",{style:{color:"#1C6B48"}},"int"),e("span",{style:{color:"#A0ADA0"}}," $response */")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"response"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"responder"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"respond"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"operation"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"context"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"response"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Rb={__name:"77",setup(n){const s={srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/08_responder.md"};return $(I),(o,t)=>{const l=Be;return C(),R(ne,U(j(s)),{default:x(()=>[q(l,ye({},{ranges:["6","8","9-10","12","14","16-19"]}),{default:x(()=>[Sb]),_:1},16)]),_:1},16)}}},Ib=P(Rb,[["__file","/@slidev/slides/77.md"]]),Pb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"CliOption")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"__construct"),e("span",{style:{color:"#858585"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Command"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"command"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"InputInterface"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"input"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"OutputInterface"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"output")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"command"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Command")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"command"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"input"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"InputInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"input"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"output"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"OutputInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"output"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"CliOption")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"__construct"),e("span",{style:{color:"#8E8F8B"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Command"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"command"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"InputInterface"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"input"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"OutputInterface"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"output")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"command"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Command")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"command"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"input"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"InputInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"input"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"output"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"OutputInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"output"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Ob={__name:"78",setup(n){const s={srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/08_responder.md"};return $(I),(o,t)=>{const l=Be;return C(),R(ne,U(j(s)),{default:x(()=>[q(l,ye({},{ranges:["all","4-6","10-13","14-17","19-22"]}),{default:x(()=>[Pb]),_:1},16)]),_:1},16)}}},Tb=P(Ob,[["__file","/@slidev/slides/78.md"]]),Lb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src/BoardGameBlog/Infrastructure/Sylius/State/Cli/Responder/BookItemResponder.php")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"respond"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"mixed"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Operation"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"operation"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Context"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"context"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"mixed")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"cliOption"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"context"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"get"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"CliOption"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#E0A569"}},"Assert"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"notNull"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"cliOption"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"ui"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"SymfonyStyle"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"cliOption"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"input"),e("span",{style:{color:"#858585"}},"(),"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"cliOption"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"output"),e("span",{style:{color:"#858585"}},"());")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#E0A569"}},"Assert"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"isInstanceOf"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Book"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"book"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"BookResource"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"fromModel"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src/BoardGameBlog/Infrastructure/Sylius/State/Cli/Responder/BookItemResponder.php")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"respond"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"mixed"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Operation"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"operation"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Context"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"context"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"mixed")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"cliOption"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"context"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"get"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"CliOption"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#B58451"}},"Assert"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"notNull"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"cliOption"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"ui"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"SymfonyStyle"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"cliOption"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"input"),e("span",{style:{color:"#8E8F8B"}},"(),"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"cliOption"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"output"),e("span",{style:{color:"#8E8F8B"}},"());")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#B58451"}},"Assert"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"isInstanceOf"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Book"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"book"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"BookResource"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"fromModel"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Mb={__name:"79",setup(n){const s={transition:"fade",srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/08_responder.md"};return $(I),(o,t)=>{const l=Be;return C(),R(ne,U(j(s)),{default:x(()=>[q(l,ye({},{ranges:["all","4","6","8","10","11"]}),{default:x(()=>[Lb]),_:1},16)]),_:1},16)}}},qb=P(Mb,[["__file","/@slidev/slides/79.md"]]),Gb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src/BoardGameBlog/Infrastructure/Sylius/State/Cli/Responder/BookItemResponder.php")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"respond"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"mixed"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Operation"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"operation"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Context"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"context"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"mixed")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}},"    ")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"ui"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"title"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"book"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"ui"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"section"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'Id'"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"ui"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"writeln"),e("span",{style:{color:"#858585"}},"(("),e("span",{style:{color:"#CB7676"}},"string"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"book"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"id"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"ui"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"section"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'Author'"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"ui"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"writeln"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"book"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"author"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"ui"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"section"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'Description'"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"ui"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"writeln"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"book"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"description"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"ui"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"section"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'Content'"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"ui"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"writeln"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"book"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"content"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"ui"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"section"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'Price'"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"ui"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"writeln"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"book"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"price"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Command"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#D4976C"}},"SUCCESS"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src/BoardGameBlog/Infrastructure/Sylius/State/Cli/Responder/BookItemResponder.php")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"respond"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"mixed"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Operation"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"operation"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Context"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"context"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"mixed")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}},"    ")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"ui"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"title"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"book"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"ui"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"section"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'Id'"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"ui"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"writeln"),e("span",{style:{color:"#8E8F8B"}},"(("),e("span",{style:{color:"#AB5959"}},"string"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"book"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"id"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"ui"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"section"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'Author'"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"ui"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"writeln"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"book"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"author"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"ui"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"section"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'Description'"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"ui"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"writeln"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"book"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"description"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"ui"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"section"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'Content'"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"ui"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"writeln"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"book"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"content"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"ui"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"section"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'Price'"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"ui"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"writeln"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"book"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"price"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Command"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#A65E2B"}},"SUCCESS"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Nb={__name:"80",setup(n){const s={srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/08_responder.md"};return $(I),(o,t)=>{const l=Be;return C(),R(ne,U(j(s)),{default:x(()=>[q(l,ye({},{ranges:["all","6","8-9","11-12","14-15","17-18","20-21","23"]}),{default:x(()=>[Gb]),_:1},16)]),_:1},16)}}},Hb=P(Nb,[["__file","/@slidev/slides/80.md"]]),jb="/regain-control-of-your-backends-with-sylius-and-api-platform/cli_output.png",Vb=e("p",null,[e("img",{src:jb,alt:"Cli list output"})],-1),Ub={__name:"81",setup(n){const s={srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/08_responder.md"};return $(I),(o,t)=>(C(),R(ne,U(j(s)),{default:x(()=>[Vb]),_:1},16))}},Wb=P(Ub,[["__file","/@slidev/slides/81.md"]]),Kb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"AsCommand"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"name"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'app:list-books'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ListBooksCommand"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"extends"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Command")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"__construct"),e("span",{style:{color:"#858585"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"readonly"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"ProviderInterface"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"provider"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"readonly"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"ResponderInterface"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"responder"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"parent::"),e("span",{style:{color:"#A1B567"}},"__construct"),e("span",{style:{color:"#858585"}},"();")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"protected"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"configure"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"addOption"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'page'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"InputOption"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#D4976C"}},"VALUE_REQUIRED"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'Page number.'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"addOption"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'items-per-page'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"InputOption"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#D4976C"}},"VALUE_REQUIRED"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'Amount of items per page.'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"10"),e("span",{style:{color:"#858585"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"protected"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"execute"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"InputInterface"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"input"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"OutputInterface"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"output"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"int")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"        "),e("span",{style:{color:"#758575"}},"// [...]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"AsCommand"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"name"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'app:list-books'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ListBooksCommand"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"extends"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Command")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"__construct"),e("span",{style:{color:"#8E8F8B"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"readonly"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"ProviderInterface"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"provider"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"readonly"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"ResponderInterface"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"responder"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"parent::"),e("span",{style:{color:"#6C7834"}},"__construct"),e("span",{style:{color:"#8E8F8B"}},"();")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"protected"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"configure"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"addOption"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'page'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"InputOption"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#A65E2B"}},"VALUE_REQUIRED"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'Page number.'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"addOption"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'items-per-page'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"InputOption"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#A65E2B"}},"VALUE_REQUIRED"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'Amount of items per page.'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"10"),e("span",{style:{color:"#8E8F8B"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"protected"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"execute"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"InputInterface"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"input"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"OutputInterface"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"output"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"int")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"        "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),zb={__name:"82",setup(n){const s={transition:"fade",srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/08_responder.md"};return $(I),(o,t)=>{const l=Be;return C(),R(ne,U(j(s)),{default:x(()=>[q(l,ye({},{ranges:["all","1","5-6","14-15"]}),{default:x(()=>[Kb]),_:1},16)]),_:1},16)}}},Yb=P(zb,[["__file","/@slidev/slides/82.md"]]),Zb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"AsCommand"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"name"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'app:list-books'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ListBooksCommand"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"extends"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Command")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"protected"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"execute"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"InputInterface"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"input"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"OutputInterface"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"output"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"int")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"operation"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"CliOperation"),e("span",{style:{color:"#858585"}},"();")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"operation"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"operation"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"withProvider"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"BookCollectionProvider"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"operation"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"operation"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"withResponder"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"BookCollectionResponder"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"context"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Context"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"CliOption"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"input"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"output"),e("span",{style:{color:"#858585"}},"));")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"provider"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"provide"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"operation"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"context"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        ")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#758575"}},"/** "),e("span",{style:{color:"#4D9375"}},"@var"),e("span",{style:{color:"#758575"}}," "),e("span",{style:{color:"#4D9375"}},"int"),e("span",{style:{color:"#758575"}}," $response */")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"response"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"responder"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"respond"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"operation"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"context"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"response"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"AsCommand"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"name"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'app:list-books'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ListBooksCommand"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"extends"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Command")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"protected"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"execute"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"InputInterface"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"input"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"OutputInterface"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"output"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"int")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"operation"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"CliOperation"),e("span",{style:{color:"#8E8F8B"}},"();")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"operation"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"operation"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"withProvider"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"BookCollectionProvider"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"operation"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"operation"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"withResponder"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"BookCollectionResponder"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"context"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Context"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"CliOption"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"input"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"output"),e("span",{style:{color:"#8E8F8B"}},"));")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"provider"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"provide"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"operation"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"context"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        ")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#A0ADA0"}},"/** "),e("span",{style:{color:"#1C6B48"}},"@var"),e("span",{style:{color:"#A0ADA0"}}," "),e("span",{style:{color:"#1C6B48"}},"int"),e("span",{style:{color:"#A0ADA0"}}," $response */")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"response"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"responder"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"respond"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"operation"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"context"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"response"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Qb={__name:"83",setup(n){const s={srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/08_responder.md"};return $(I),(o,t)=>{const l=Be;return C(),R(ne,U(j(s)),{default:x(()=>[q(l,ye({},{ranges:["all","8-10","12","14","16-19"]}),{default:x(()=>[Zb]),_:1},16)]),_:1},16)}}},Jb=P(Qb,[["__file","/@slidev/slides/83.md"]]),Xb="/regain-control-of-your-backends-with-sylius-and-api-platform/cli_list_output.png",e4=e("p",null,[e("img",{src:Xb,alt:"Cli list output"})],-1),n4={__name:"84",setup(n){const s={srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/08_responder.md"};return $(I),(o,t)=>(C(),R(ne,U(j(s)),{default:x(()=>[e4]),_:1},16))}},s4=P(n4,[["__file","/@slidev/slides/84.md"]]),o4=e("h1",null,"Grid Provider",-1),t4={__name:"85",setup(n){const s={srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/09_grid_provider.md"};return $(I),(o,t)=>(C(),R(ne,U(j(s)),{default:x(()=>[o4]),_:1},16))}},l4=P(t4,[["__file","/@slidev/slides/85.md"]]),r4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"BoardGameGrid"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"extends"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"AbstractGrid"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceAwareGridInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"static"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"getName"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"string")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'app_board_game'"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"buildGrid"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"GridBuilderInterface"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"gridBuilder"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"gridBuilder")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"setProvider"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"BoardGameGridProvider"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"addField"),e("span",{style:{color:"#858585"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                "),e("span",{style:{color:"#E0A569"}},"StringField"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"create"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'name'"),e("span",{style:{color:"#858585"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                    "),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"setLabel"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'Name'"),e("span",{style:{color:"#858585"}},"),")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#858585"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"addField"),e("span",{style:{color:"#858585"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                "),e("span",{style:{color:"#E0A569"}},"StringField"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"create"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'shortDescription'"),e("span",{style:{color:"#858585"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                    "),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"setLabel"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'Short Description'"),e("span",{style:{color:"#858585"}},"),")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#858585"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"getResourceClass"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"string")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"BoardGameResource"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"BoardGameGrid"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"extends"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"AbstractGrid"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceAwareGridInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"static"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"getName"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"string")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'app_board_game'"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"buildGrid"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"GridBuilderInterface"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"gridBuilder"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"gridBuilder")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"setProvider"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"BoardGameGridProvider"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"addField"),e("span",{style:{color:"#8E8F8B"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                "),e("span",{style:{color:"#B58451"}},"StringField"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"create"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'name'"),e("span",{style:{color:"#8E8F8B"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                    "),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"setLabel"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'Name'"),e("span",{style:{color:"#8E8F8B"}},"),")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#8E8F8B"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"addField"),e("span",{style:{color:"#8E8F8B"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                "),e("span",{style:{color:"#B58451"}},"StringField"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"create"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'shortDescription'"),e("span",{style:{color:"#8E8F8B"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                    "),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"setLabel"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'Short Description'"),e("span",{style:{color:"#8E8F8B"}},"),")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#8E8F8B"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"getResourceClass"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"string")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"BoardGameResource"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),a4={__name:"86",setup(n){const s={srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/09_grid_provider.md"};return $(I),(o,t)=>{const l=Be;return C(),R(ne,U(j(s)),{default:x(()=>[q(l,ye({},{ranges:["all","11"]}),{default:x(()=>[r4]),_:1},16)]),_:1},16)}}},c4=P(a4,[["__file","/@slidev/slides/86.md"]]),i4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"BoardGameGridProvider"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"DataProviderInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"__construct"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"dataDir"),e("span",{style:{color:"#858585"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"getData"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"Grid"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"grid"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Parameters"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"parameters"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Pagerfanta")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"[];")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"foreach"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"getFileData"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"as"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"row"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#858585"}},"[$"),e("span",{style:{color:"#B8A965"}},"id"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"shortDescription"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"str_getcsv"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"row"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#858585"}},"[]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"BoardGameResource"),e("span",{style:{color:"#858585"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                "),e("span",{style:{color:"#A1B567"}},"id"),e("span",{style:{color:"#DBD7CA"}},": "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"id"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                "),e("span",{style:{color:"#A1B567"}},"name"),e("span",{style:{color:"#DBD7CA"}},": "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                "),e("span",{style:{color:"#A1B567"}},"shortDescription"),e("span",{style:{color:"#DBD7CA"}},": "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"shortDescription"),e("span",{style:{color:"#858585"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Pagerfanta"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"ArrayAdapter"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#858585"}},"));")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"getFileData"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"array")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"file"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"dataDir"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'/board_games.csv'"),e("span",{style:{color:"#858585"}},");")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"BoardGameGridProvider"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"DataProviderInterface")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"__construct"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"dataDir"),e("span",{style:{color:"#8E8F8B"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"getData"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"Grid"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"grid"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Parameters"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"parameters"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Pagerfanta")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"[];")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"foreach"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"getFileData"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"as"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"row"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#8E8F8B"}},"[$"),e("span",{style:{color:"#8C862B"}},"id"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"shortDescription"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"str_getcsv"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"row"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#8E8F8B"}},"[]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"BoardGameResource"),e("span",{style:{color:"#8E8F8B"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                "),e("span",{style:{color:"#6C7834"}},"id"),e("span",{style:{color:"#393A34"}},": "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"id"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                "),e("span",{style:{color:"#6C7834"}},"name"),e("span",{style:{color:"#393A34"}},": "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                "),e("span",{style:{color:"#6C7834"}},"shortDescription"),e("span",{style:{color:"#393A34"}},": "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"shortDescription"),e("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Pagerfanta"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"ArrayAdapter"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#8E8F8B"}},"));")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"getFileData"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"array")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"file"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"dataDir"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'/board_games.csv'"),e("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),p4={__name:"87",setup(n){const s={srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/09_grid_provider.md"};return $(I),(o,t)=>{const l=Be;return C(),R(ne,U(j(s)),{default:x(()=>[q(l,ye({},{ranges:["all","3","7","11-19","21"]}),{default:x(()=>[i4]),_:1},16)]),_:1},16)}}},u4=P(p4,[["__file","/@slidev/slides/87.md"]]),d4=e("p",null,[e("em",null,"config/data/board_games.csv")],-1),y4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},'6b2fff2b-0b43-489b-8c48-9c0427a1c4c7,Stone Age,"Travel to the time of hunters and gatherers in this classic game of tools and tribes."')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},'d068029a-0c32-4728-95bf-5f614d53440b,Ticket to Ride,"Build your railroad across North America to connect cities and complete tickets."')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},'5ba27cbd-e230-48b7-86ae-ad2eaa05ebc0,7 Wonders,"Draft cards to develop your ancient civilization and build its Wonder of the World."')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},'2919785a-66e7-44da-b356-b98e07fbb9e8,Puerto Rico,"Ship goods, construct buildings, and choose roles that benefit you more than others."')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},'c4856c93-3a41-40eb-9994-f58a1035d99b,Azul, "Artfully embellish the walls of your palace by drafting the most beautiful tiles."')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},'a953d760-07d5-4add-b87e-b483ebb194df,Die Fürsten von Florenz,"Attract artisans and scholars to your palazzo by building and landscaping."')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},'ce461300-25c3-4a72-aa7d-6ec7021d7b80,The Voyages of Marco Polo,"Using unique abilities, fulfill contracts and reach your goals along the Silk Road."')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},'599dcd98-8167-4f4a-b181-efd7c24bb434,Tigris & Euphrates,"Keep your Mesopotamian civilisation in perfect balance through revolutions and wars."')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},'305749e6-7a05-468a-b1aa-46ee6c1a89ac,Patchwork,"Piece together a quilt and leave no holes to become the button master."')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},'5e980dad-d8ef-4e47-910a-4dc9f91b38fd,Cartagena,"Groups of pirates race to reach their ship and escape from Cartegena."')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},'6a47110b-b65d-4e94-9ce0-a06cd7823ecc,Village,"Send your villagers to work, travel, pray, and... die when it brings the most renown."')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},'e75c5edd-bf6a-49f8-a409-90183aea660c,Splendor,"Renaissance merchants race to grab gems, acquire property, and please nobility."')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},'74c0d7ba-8acf-46eb-a6a7-c8f04c1860ff,Ra,"Bid to acquire the most valuable sets of Egyptian artifacts and resources."')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},'44bc972e-6a0e-423a-9140-caae3f7f8710,Carcassonne,"Shape the medieval landscape of France, claiming cities, monasteries and farms."')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},'0a937d58-24dd-4dae-894a-b600dfa334d4,Modern Art,"Four types of auctions challenge players in this classic game of art speculation."')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},'c3661009-d024-4c83-8ef6-a967a0a21e6f,Goa,"Run a spice trade business in colonial-era India in this closed-loop economy game."')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},'edbb5801-f1ae-4c14-b86a-130a7c3a1c4a,Shogun,"Gain control of medieval Japan by amassing troops and sending them out to battles."')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},'1dec8957-3203-4f84-95c5-ceb3754e4b50,Samurai,"Dispute the favor of three different castes in order to unite Japan under your rule."')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},'110c7432-c754-4174-9d0b-7402dc57a500,Kingdomino,"Build a kingdom with varied terrains on domino-shaped tiles in this fast family game."')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}})])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},'6b2fff2b-0b43-489b-8c48-9c0427a1c4c7,Stone Age,"Travel to the time of hunters and gatherers in this classic game of tools and tribes."')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},'d068029a-0c32-4728-95bf-5f614d53440b,Ticket to Ride,"Build your railroad across North America to connect cities and complete tickets."')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},'5ba27cbd-e230-48b7-86ae-ad2eaa05ebc0,7 Wonders,"Draft cards to develop your ancient civilization and build its Wonder of the World."')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},'2919785a-66e7-44da-b356-b98e07fbb9e8,Puerto Rico,"Ship goods, construct buildings, and choose roles that benefit you more than others."')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},'c4856c93-3a41-40eb-9994-f58a1035d99b,Azul, "Artfully embellish the walls of your palace by drafting the most beautiful tiles."')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},'a953d760-07d5-4add-b87e-b483ebb194df,Die Fürsten von Florenz,"Attract artisans and scholars to your palazzo by building and landscaping."')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},'ce461300-25c3-4a72-aa7d-6ec7021d7b80,The Voyages of Marco Polo,"Using unique abilities, fulfill contracts and reach your goals along the Silk Road."')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},'599dcd98-8167-4f4a-b181-efd7c24bb434,Tigris & Euphrates,"Keep your Mesopotamian civilisation in perfect balance through revolutions and wars."')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},'305749e6-7a05-468a-b1aa-46ee6c1a89ac,Patchwork,"Piece together a quilt and leave no holes to become the button master."')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},'5e980dad-d8ef-4e47-910a-4dc9f91b38fd,Cartagena,"Groups of pirates race to reach their ship and escape from Cartegena."')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},'6a47110b-b65d-4e94-9ce0-a06cd7823ecc,Village,"Send your villagers to work, travel, pray, and... die when it brings the most renown."')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},'e75c5edd-bf6a-49f8-a409-90183aea660c,Splendor,"Renaissance merchants race to grab gems, acquire property, and please nobility."')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},'74c0d7ba-8acf-46eb-a6a7-c8f04c1860ff,Ra,"Bid to acquire the most valuable sets of Egyptian artifacts and resources."')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},'44bc972e-6a0e-423a-9140-caae3f7f8710,Carcassonne,"Shape the medieval landscape of France, claiming cities, monasteries and farms."')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},'0a937d58-24dd-4dae-894a-b600dfa334d4,Modern Art,"Four types of auctions challenge players in this classic game of art speculation."')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},'c3661009-d024-4c83-8ef6-a967a0a21e6f,Goa,"Run a spice trade business in colonial-era India in this closed-loop economy game."')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},'edbb5801-f1ae-4c14-b86a-130a7c3a1c4a,Shogun,"Gain control of medieval Japan by amassing troops and sending them out to battles."')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},'1dec8957-3203-4f84-95c5-ceb3754e4b50,Samurai,"Dispute the favor of three different castes in order to unite Japan under your rule."')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},'110c7432-c754-4174-9d0b-7402dc57a500,Kingdomino,"Build a kingdom with varied terrains on domino-shaped tiles in this fast family game."')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}})])])])],-1),f4={__name:"88",setup(n){const s={srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/09_grid_provider.md"};return $(I),(o,t)=>(C(),R(ne,U(j(s)),{default:x(()=>[d4,y4]),_:1},16))}},m4=P(f4,[["__file","/@slidev/slides/88.md"]]),h4={__name:"89",setup(n){const s={layout:"image",image:"/grid_with_custom_provider.png",transition:"fade",srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/09_grid_provider.md"};return $(I),(o,t)=>(C(),R(sn,U(j(s)),null,16))}},_4=P(h4,[["__file","/@slidev/slides/89.md"]]),B4={__name:"90",setup(n){const s={layout:"image",image:"/grid_with_custom_provider_2.png",srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/09_grid_provider.md"};return $(I),(o,t)=>(C(),R(sn,U(j(s)),null,16))}},g4=P(B4,[["__file","/@slidev/slides/90.md"]]),A4=[{path:"1",name:"page-1",component:r9,meta:{theme:"seriph",background:!1,class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},transition:"slide-left",colorSchema:"light",css:"unocss",title:"Retrouvez la maîtrise de vos backends",slide:{raw:`---
# try also 'default' to start simple
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: false
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# persist drawings in exports and build
drawings:
  persist: false
# page transition
transition: slide-left
colorSchema: light
# use UnoCSS
css: unocss
---

# Retrouvez la maîtrise de vos backends

avec Sylius & API-Platform

<div align="center">
<img class="w-75" align="center" src="https://sylius.com/wp-content/uploads/2021/03/sylius-logo_sylius-logo-light-1024x422.jpg">
</div>

<div align="center">
<img class="w-75" src="https://api-platform.com/logo.png">
</div>
`,title:"Retrouvez la maîtrise de vos backends",level:1,content:`# Retrouvez la maîtrise de vos backends

avec Sylius & API-Platform

<div align="center">
<img class="w-75" align="center" src="https://sylius.com/wp-content/uploads/2021/03/sylius-logo_sylius-logo-light-1024x422.jpg">
</div>

<div align="center">
<img class="w-75" src="https://api-platform.com/logo.png">
</div>`,frontmatter:{theme:"seriph",background:!1,class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},transition:"slide-left",colorSchema:"light",css:"unocss",title:"Retrouvez la maîtrise de vos backends"},index:0,start:0,end:40,noteHTML:"",filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:k9,meta:{layout:"image-right",image:"/akawaka.png",title:"Loïc Frémont",srcSequence:"./pages/01_index.md",slide:{raw:null,title:"Loïc Frémont",level:1,content:`# Loïc Frémont

* Expert technique @Akawaka
* Membre de la core team @Sylius
* Créateur de Monofony

<br />

<uim-twitter class="text-3xl text-blue-400 mx-2 my--2" /> @loic_425 
<uim-github class="text-3xl text-black-400 mx-2 my--2" /> @loic425`,frontmatter:{layout:"image-right",image:"/akawaka.png",title:"Loïc Frémont",srcSequence:"./pages/01_index.md"},index:1,start:0,end:16,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/01_index.md",raw:`---
layout: image-right
image: /akawaka.png
---

# Loïc Frémont

* Expert technique @Akawaka
* Membre de la core team @Sylius
* Créateur de Monofony

<br />

<uim-twitter class="text-3xl text-blue-400 mx-2 my--2" /> @loic_425 
<uim-github class="text-3xl text-black-400 mx-2 my--2" /> @loic425
`,title:"Loïc Frémont",level:1,content:`# Loïc Frémont

* Expert technique @Akawaka
* Membre de la core team @Sylius
* Créateur de Monofony

<br />

<uim-twitter class="text-3xl text-blue-400 mx-2 my--2" /> @loic_425 
<uim-github class="text-3xl text-black-400 mx-2 my--2" /> @loic425`,frontmatter:{layout:"image-right",image:"/akawaka.png",title:"Loïc Frémont"},index:0,start:0,end:16},inline:{raw:`---
src: ./pages/01_index.md
---
`,content:"",frontmatter:{},index:1,start:40,end:44},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/01_index.md",noteHTML:"",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:$9,meta:{layout:"image",image:"https://ressources.mobizel.com/wp-content/uploads/2019/12/monofony-banner-mobizel-2048x707.png",srcSequence:"./pages/02_monofony.md",slide:{raw:null,content:"",frontmatter:{layout:"image",image:"https://ressources.mobizel.com/wp-content/uploads/2019/12/monofony-banner-mobizel-2048x707.png",srcSequence:"./pages/02_monofony.md"},index:2,start:0,end:5,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/02_monofony.md",raw:`---
layout: image
image: https://ressources.mobizel.com/wp-content/uploads/2019/12/monofony-banner-mobizel-2048x707.png
---
`,content:"",frontmatter:{layout:"image",image:"https://ressources.mobizel.com/wp-content/uploads/2019/12/monofony-banner-mobizel-2048x707.png"},index:0,start:0,end:5},inline:{raw:`---
src: ./pages/02_monofony.md
---
`,content:"",frontmatter:{},index:2,start:44,end:48},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/02_monofony.md",noteHTML:"",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:W9,meta:{srcSequence:"./pages/02_monofony.md",slide:{raw:"\n# Installation\n\n```shell\n$ composer create-project monofony/skeleton project_name\n```\n",title:"Installation",level:1,content:"# Installation\n\n```shell\n$ composer create-project monofony/skeleton project_name\n```",frontmatter:{srcSequence:"./pages/02_monofony.md"},index:3,start:6,end:13,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/02_monofony.md",raw:"\n# Installation\n\n```shell\n$ composer create-project monofony/skeleton project_name\n```\n",title:"Installation",level:1,content:"# Installation\n\n```shell\n$ composer create-project monofony/skeleton project_name\n```",frontmatter:{},index:1,start:6,end:13},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/02_monofony.md",noteHTML:"",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:z9,meta:{layout:"image",image:"/dashboard.png",transition:"fade",srcSequence:"./pages/02_monofony.md",slide:{raw:`---
layout: image
image: /dashboard.png
transition: fade
---
`,content:"",frontmatter:{layout:"image",image:"/dashboard.png",transition:"fade",srcSequence:"./pages/02_monofony.md"},index:4,start:13,end:19,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/02_monofony.md",raw:`---
layout: image
image: /dashboard.png
transition: fade
---
`,content:"",frontmatter:{layout:"image",image:"/dashboard.png",transition:"fade"},index:2,start:13,end:19},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/02_monofony.md",noteHTML:"",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:Z9,meta:{layout:"image",image:"/administrators.png",srcSequence:"./pages/02_monofony.md",slide:{raw:`---
layout: image
image: /administrators.png
---
`,content:"",frontmatter:{layout:"image",image:"/administrators.png",srcSequence:"./pages/02_monofony.md"},index:5,start:19,end:24,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/02_monofony.md",raw:`---
layout: image
image: /administrators.png
---
`,content:"",frontmatter:{layout:"image",image:"/administrators.png"},index:3,start:19,end:24},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/02_monofony.md",noteHTML:"",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:sC,meta:{srcSequence:"./pages/02_monofony.md",slide:{raw:`
# Intégration continue

* Github Actions
* Circle CI

![CI](/ci.png)
`,title:"Intégration continue",level:1,content:`# Intégration continue

* Github Actions
* Circle CI

![CI](/ci.png)`,frontmatter:{srcSequence:"./pages/02_monofony.md"},index:6,start:25,end:33,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/02_monofony.md",raw:`
# Intégration continue

* Github Actions
* Circle CI

![CI](/ci.png)
`,title:"Intégration continue",level:1,content:`# Intégration continue

* Github Actions
* Circle CI

![CI](/ci.png)`,frontmatter:{},index:4,start:25,end:33},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/02_monofony.md",noteHTML:"",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:rC,meta:{srcSequence:"./pages/02_monofony.md",slide:{raw:`
# Behat

\`\`\`gherkin
@managing_administrators
Feature: Adding a new administrator
    In order to create new administrator account
    As an Administrator
    I want to add an administrator in the admin panel

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Adding a new administrator
        Given I want to create a new administrator
        When I specify its email as "l.skywalker@gmail.com"
        And I specify its name as "Luke"
        And I specify its password as "lightsaber"
        And I add it
        Then I should be notified that it has been successfully created
        And the administrator "l.skywalker@gmail.com" should appear in the list

    @ui
    Scenario: Adding a new administrator and log in with its credentials
        Given I want to create a new administrator
        When I specify its email as "l.skywalker@gmail.com"
        And I specify its name as "Luke"
        And I specify its password as "lightsaber"
        And I enable it
        And I add it
        Then I should be able to log in as "l.skywalker@gmail.com" authenticated by "lightsaber" password

\`\`\`
`,title:"Behat",level:1,content:`# Behat

\`\`\`gherkin
@managing_administrators
Feature: Adding a new administrator
    In order to create new administrator account
    As an Administrator
    I want to add an administrator in the admin panel

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Adding a new administrator
        Given I want to create a new administrator
        When I specify its email as "l.skywalker@gmail.com"
        And I specify its name as "Luke"
        And I specify its password as "lightsaber"
        And I add it
        Then I should be notified that it has been successfully created
        And the administrator "l.skywalker@gmail.com" should appear in the list

    @ui
    Scenario: Adding a new administrator and log in with its credentials
        Given I want to create a new administrator
        When I specify its email as "l.skywalker@gmail.com"
        And I specify its name as "Luke"
        And I specify its password as "lightsaber"
        And I enable it
        And I add it
        Then I should be able to log in as "l.skywalker@gmail.com" authenticated by "lightsaber" password

\`\`\``,frontmatter:{srcSequence:"./pages/02_monofony.md"},index:7,start:34,end:69,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/02_monofony.md",raw:`
# Behat

\`\`\`gherkin
@managing_administrators
Feature: Adding a new administrator
    In order to create new administrator account
    As an Administrator
    I want to add an administrator in the admin panel

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Adding a new administrator
        Given I want to create a new administrator
        When I specify its email as "l.skywalker@gmail.com"
        And I specify its name as "Luke"
        And I specify its password as "lightsaber"
        And I add it
        Then I should be notified that it has been successfully created
        And the administrator "l.skywalker@gmail.com" should appear in the list

    @ui
    Scenario: Adding a new administrator and log in with its credentials
        Given I want to create a new administrator
        When I specify its email as "l.skywalker@gmail.com"
        And I specify its name as "Luke"
        And I specify its password as "lightsaber"
        And I enable it
        And I add it
        Then I should be able to log in as "l.skywalker@gmail.com" authenticated by "lightsaber" password

\`\`\`
`,title:"Behat",level:1,content:`# Behat

\`\`\`gherkin
@managing_administrators
Feature: Adding a new administrator
    In order to create new administrator account
    As an Administrator
    I want to add an administrator in the admin panel

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Adding a new administrator
        Given I want to create a new administrator
        When I specify its email as "l.skywalker@gmail.com"
        And I specify its name as "Luke"
        And I specify its password as "lightsaber"
        And I add it
        Then I should be notified that it has been successfully created
        And the administrator "l.skywalker@gmail.com" should appear in the list

    @ui
    Scenario: Adding a new administrator and log in with its credentials
        Given I want to create a new administrator
        When I specify its email as "l.skywalker@gmail.com"
        And I specify its name as "Luke"
        And I specify its password as "lightsaber"
        And I enable it
        And I add it
        Then I should be able to log in as "l.skywalker@gmail.com" authenticated by "lightsaber" password

\`\`\``,frontmatter:{},index:5,start:34,end:69},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/02_monofony.md",noteHTML:"",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:pC,meta:{srcSequence:"./pages/02_monofony.md",slide:{raw:`
# Phpspec

\`\`\`php
final class AdminAvatarSpec extends ObjectBehavior
{
    function it_is_initializable(): void
    {
        $this->shouldHaveType(AdminAvatar::class);
    }

    function it_is_a_file(): void
    {
        $this->shouldHaveType(File::class);
    }

    function it_has_no_file_by_default(): void
    {
        $this->getFile()->shouldReturn(null);
    }

    function its_file_is_mutable(\\SplFileInfo $file): void
    {
        $this->setFile($file);

        $this->getFile()->shouldReturn($file);
    }

    function it_has_no_path_by_defaut(): void
    {
        $this->getPath()->shouldReturn(null);
    }

    function its_path_is_mutable(): void
    {
        $this->setPath('avatar.png');

        $this->getPath()->shouldReturn('avatar.png');
    }
}
\`\`\`
`,title:"Phpspec",level:1,content:`# Phpspec

\`\`\`php
final class AdminAvatarSpec extends ObjectBehavior
{
    function it_is_initializable(): void
    {
        $this->shouldHaveType(AdminAvatar::class);
    }

    function it_is_a_file(): void
    {
        $this->shouldHaveType(File::class);
    }

    function it_has_no_file_by_default(): void
    {
        $this->getFile()->shouldReturn(null);
    }

    function its_file_is_mutable(\\SplFileInfo $file): void
    {
        $this->setFile($file);

        $this->getFile()->shouldReturn($file);
    }

    function it_has_no_path_by_defaut(): void
    {
        $this->getPath()->shouldReturn(null);
    }

    function its_path_is_mutable(): void
    {
        $this->setPath('avatar.png');

        $this->getPath()->shouldReturn('avatar.png');
    }
}
\`\`\``,frontmatter:{srcSequence:"./pages/02_monofony.md"},index:8,start:70,end:112,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/02_monofony.md",raw:`
# Phpspec

\`\`\`php
final class AdminAvatarSpec extends ObjectBehavior
{
    function it_is_initializable(): void
    {
        $this->shouldHaveType(AdminAvatar::class);
    }

    function it_is_a_file(): void
    {
        $this->shouldHaveType(File::class);
    }

    function it_has_no_file_by_default(): void
    {
        $this->getFile()->shouldReturn(null);
    }

    function its_file_is_mutable(\\SplFileInfo $file): void
    {
        $this->setFile($file);

        $this->getFile()->shouldReturn($file);
    }

    function it_has_no_path_by_defaut(): void
    {
        $this->getPath()->shouldReturn(null);
    }

    function its_path_is_mutable(): void
    {
        $this->setPath('avatar.png');

        $this->getPath()->shouldReturn('avatar.png');
    }
}
\`\`\`
`,title:"Phpspec",level:1,content:`# Phpspec

\`\`\`php
final class AdminAvatarSpec extends ObjectBehavior
{
    function it_is_initializable(): void
    {
        $this->shouldHaveType(AdminAvatar::class);
    }

    function it_is_a_file(): void
    {
        $this->shouldHaveType(File::class);
    }

    function it_has_no_file_by_default(): void
    {
        $this->getFile()->shouldReturn(null);
    }

    function its_file_is_mutable(\\SplFileInfo $file): void
    {
        $this->setFile($file);

        $this->getFile()->shouldReturn($file);
    }

    function it_has_no_path_by_defaut(): void
    {
        $this->getPath()->shouldReturn(null);
    }

    function its_path_is_mutable(): void
    {
        $this->setPath('avatar.png');

        $this->getPath()->shouldReturn('avatar.png');
    }
}
\`\`\``,frontmatter:{},index:6,start:70,end:112},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/02_monofony.md",noteHTML:"",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:fC,meta:{srcSequence:"./pages/02_monofony.md",slide:{raw:`
# PHPUnit

\`\`\`php
class ChangePasswordApiTest extends JsonApiTestCase
{
    use Factories;
    use AuthorizedHeaderTrait;
    use PurgeDatabaseTrait;

    /** @test */
    public function it_does_not_allow_to_change_password_for_non_authenticated_user(): void
    {
        TestAppUsersStory::load();

        $customer = AppUserFactory::find(['username' => 'sylius'])->getCustomer();

        $this->client->request('PATCH', '/api/customers/'.$customer->getId().'/password', [], [], ['CONTENT_TYPE' => 'application/merge-patch+json'], '{}');

        $response = $this->client->getResponse();
        $this->assertResponse($response, 'error/access_denied_response', Response::HTTP_UNAUTHORIZED);
    }

    /** @test */
    public function it_does_not_allow_to_change_password_without_required_data(): void
    {
        TestAppUsersStory::load();

        $customer = AppUserFactory::find(['username' => 'sylius'])->getCustomer();

        $this->client->request('PATCH', '/api/customers/'.$customer->getId().'/password', [], [], self::$authorizedHeaderForPatch, '{}');

        $response = $this->client->getResponse();
        $this->assertResponse($response, 'customer/change_password_validation_response', Response::HTTP_UNPROCESSABLE_ENTITY);
    }
}
\`\`\`
`,title:"PHPUnit",level:1,content:`# PHPUnit

\`\`\`php
class ChangePasswordApiTest extends JsonApiTestCase
{
    use Factories;
    use AuthorizedHeaderTrait;
    use PurgeDatabaseTrait;

    /** @test */
    public function it_does_not_allow_to_change_password_for_non_authenticated_user(): void
    {
        TestAppUsersStory::load();

        $customer = AppUserFactory::find(['username' => 'sylius'])->getCustomer();

        $this->client->request('PATCH', '/api/customers/'.$customer->getId().'/password', [], [], ['CONTENT_TYPE' => 'application/merge-patch+json'], '{}');

        $response = $this->client->getResponse();
        $this->assertResponse($response, 'error/access_denied_response', Response::HTTP_UNAUTHORIZED);
    }

    /** @test */
    public function it_does_not_allow_to_change_password_without_required_data(): void
    {
        TestAppUsersStory::load();

        $customer = AppUserFactory::find(['username' => 'sylius'])->getCustomer();

        $this->client->request('PATCH', '/api/customers/'.$customer->getId().'/password', [], [], self::$authorizedHeaderForPatch, '{}');

        $response = $this->client->getResponse();
        $this->assertResponse($response, 'customer/change_password_validation_response', Response::HTTP_UNPROCESSABLE_ENTITY);
    }
}
\`\`\``,frontmatter:{srcSequence:"./pages/02_monofony.md"},index:9,start:113,end:151,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/02_monofony.md",raw:`
# PHPUnit

\`\`\`php
class ChangePasswordApiTest extends JsonApiTestCase
{
    use Factories;
    use AuthorizedHeaderTrait;
    use PurgeDatabaseTrait;

    /** @test */
    public function it_does_not_allow_to_change_password_for_non_authenticated_user(): void
    {
        TestAppUsersStory::load();

        $customer = AppUserFactory::find(['username' => 'sylius'])->getCustomer();

        $this->client->request('PATCH', '/api/customers/'.$customer->getId().'/password', [], [], ['CONTENT_TYPE' => 'application/merge-patch+json'], '{}');

        $response = $this->client->getResponse();
        $this->assertResponse($response, 'error/access_denied_response', Response::HTTP_UNAUTHORIZED);
    }

    /** @test */
    public function it_does_not_allow_to_change_password_without_required_data(): void
    {
        TestAppUsersStory::load();

        $customer = AppUserFactory::find(['username' => 'sylius'])->getCustomer();

        $this->client->request('PATCH', '/api/customers/'.$customer->getId().'/password', [], [], self::$authorizedHeaderForPatch, '{}');

        $response = $this->client->getResponse();
        $this->assertResponse($response, 'customer/change_password_validation_response', Response::HTTP_UNPROCESSABLE_ENTITY);
    }
}
\`\`\`
`,title:"PHPUnit",level:1,content:`# PHPUnit

\`\`\`php
class ChangePasswordApiTest extends JsonApiTestCase
{
    use Factories;
    use AuthorizedHeaderTrait;
    use PurgeDatabaseTrait;

    /** @test */
    public function it_does_not_allow_to_change_password_for_non_authenticated_user(): void
    {
        TestAppUsersStory::load();

        $customer = AppUserFactory::find(['username' => 'sylius'])->getCustomer();

        $this->client->request('PATCH', '/api/customers/'.$customer->getId().'/password', [], [], ['CONTENT_TYPE' => 'application/merge-patch+json'], '{}');

        $response = $this->client->getResponse();
        $this->assertResponse($response, 'error/access_denied_response', Response::HTTP_UNAUTHORIZED);
    }

    /** @test */
    public function it_does_not_allow_to_change_password_without_required_data(): void
    {
        TestAppUsersStory::load();

        $customer = AppUserFactory::find(['username' => 'sylius'])->getCustomer();

        $this->client->request('PATCH', '/api/customers/'.$customer->getId().'/password', [], [], self::$authorizedHeaderForPatch, '{}');

        $response = $this->client->getResponse();
        $this->assertResponse($response, 'customer/change_password_validation_response', Response::HTTP_UNPROCESSABLE_ENTITY);
    }
}
\`\`\``,frontmatter:{},index:7,start:113,end:151},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/02_monofony.md",noteHTML:"",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:_C,meta:{title:"Configurons notre première resource",srcSequence:"./pages/03_resource.md",slide:{raw:null,title:"Configurons notre première resource",level:1,content:"# Configurons notre première resource",frontmatter:{title:"Configurons notre première resource",srcSequence:"./pages/03_resource.md"},index:10,start:0,end:2,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/03_resource.md",raw:`# Configurons notre première resource
`,title:"Configurons notre première resource",level:1,content:"# Configurons notre première resource",frontmatter:{title:"Configurons notre première resource"},index:0,start:0,end:2},inline:{raw:`---
src: ./pages/03_resource.md
---
`,content:"",frontmatter:{},index:3,start:48,end:52},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/03_resource.md",noteHTML:"",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:CC,meta:{transition:"fade",srcSequence:"./pages/03_resource.md",slide:{raw:`---
transition: fade
---

# Resource

\`\`\`php
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[ORM\\Entity(repositoryClass: BookRepository::class)]
#[SyliusCrudRoutes(
    alias: 'app.book',
    path: 'admin/books',
    section: 'backend',
    templates: 'backend/crud',
    grid: 'app_book',
    except: ['show'],
)]
class Book implements ResourceInterface
{
    // [..]
}
\`\`\`
`,title:"Resource",level:1,content:`# Resource

\`\`\`php
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[ORM\\Entity(repositoryClass: BookRepository::class)]
#[SyliusCrudRoutes(
    alias: 'app.book',
    path: 'admin/books',
    section: 'backend',
    templates: 'backend/crud',
    grid: 'app_book',
    except: ['show'],
)]
class Book implements ResourceInterface
{
    // [..]
}
\`\`\``,frontmatter:{transition:"fade",srcSequence:"./pages/03_resource.md"},index:11,start:2,end:26,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/03_resource.md",raw:`---
transition: fade
---

# Resource

\`\`\`php
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[ORM\\Entity(repositoryClass: BookRepository::class)]
#[SyliusCrudRoutes(
    alias: 'app.book',
    path: 'admin/books',
    section: 'backend',
    templates: 'backend/crud',
    grid: 'app_book',
    except: ['show'],
)]
class Book implements ResourceInterface
{
    // [..]
}
\`\`\`
`,title:"Resource",level:1,content:`# Resource

\`\`\`php
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[ORM\\Entity(repositoryClass: BookRepository::class)]
#[SyliusCrudRoutes(
    alias: 'app.book',
    path: 'admin/books',
    section: 'backend',
    templates: 'backend/crud',
    grid: 'app_book',
    except: ['show'],
)]
class Book implements ResourceInterface
{
    // [..]
}
\`\`\``,frontmatter:{transition:"fade"},index:1,start:2,end:26},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/03_resource.md",noteHTML:"",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:kC,meta:{transition:"fade",srcSequence:"./pages/03_resource.md",slide:{raw:`---
transition: fade
---

# Resource

\`\`\`php {12}
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[ORM\\Entity(repositoryClass: BookRepository::class)]
#[SyliusCrudRoutes(
    alias: 'app.book',
    path: 'admin/books',
    section: 'backend',
    templates: 'backend/crud',
    grid: 'app_book',
    except: ['show'],
)]
class Book implements ResourceInterface
{
    // [..]
}
\`\`\`
`,title:"Resource",level:1,content:`# Resource

\`\`\`php {12}
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[ORM\\Entity(repositoryClass: BookRepository::class)]
#[SyliusCrudRoutes(
    alias: 'app.book',
    path: 'admin/books',
    section: 'backend',
    templates: 'backend/crud',
    grid: 'app_book',
    except: ['show'],
)]
class Book implements ResourceInterface
{
    // [..]
}
\`\`\``,frontmatter:{transition:"fade",srcSequence:"./pages/03_resource.md"},index:12,start:26,end:50,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/03_resource.md",raw:`---
transition: fade
---

# Resource

\`\`\`php {12}
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[ORM\\Entity(repositoryClass: BookRepository::class)]
#[SyliusCrudRoutes(
    alias: 'app.book',
    path: 'admin/books',
    section: 'backend',
    templates: 'backend/crud',
    grid: 'app_book',
    except: ['show'],
)]
class Book implements ResourceInterface
{
    // [..]
}
\`\`\`
`,title:"Resource",level:1,content:`# Resource

\`\`\`php {12}
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[ORM\\Entity(repositoryClass: BookRepository::class)]
#[SyliusCrudRoutes(
    alias: 'app.book',
    path: 'admin/books',
    section: 'backend',
    templates: 'backend/crud',
    grid: 'app_book',
    except: ['show'],
)]
class Book implements ResourceInterface
{
    // [..]
}
\`\`\``,frontmatter:{transition:"fade"},index:2,start:26,end:50},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/03_resource.md",noteHTML:"",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:xC,meta:{transition:"fade",srcSequence:"./pages/03_resource.md",slide:{raw:`---
transition: fade
---

# Resource

\`\`\`php {4}
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[ORM\\Entity(repositoryClass: BookRepository::class)]
#[SyliusCrudRoutes(
    alias: 'app.book',
    path: 'admin/books',
    section: 'backend',
    templates: 'backend/crud',
    grid: 'app_book',
    except: ['show'],
)]
class Book implements ResourceInterface
{
    // [..]
}
\`\`\`
`,title:"Resource",level:1,content:`# Resource

\`\`\`php {4}
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[ORM\\Entity(repositoryClass: BookRepository::class)]
#[SyliusCrudRoutes(
    alias: 'app.book',
    path: 'admin/books',
    section: 'backend',
    templates: 'backend/crud',
    grid: 'app_book',
    except: ['show'],
)]
class Book implements ResourceInterface
{
    // [..]
}
\`\`\``,frontmatter:{transition:"fade",srcSequence:"./pages/03_resource.md"},index:13,start:50,end:74,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/03_resource.md",raw:`---
transition: fade
---

# Resource

\`\`\`php {4}
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[ORM\\Entity(repositoryClass: BookRepository::class)]
#[SyliusCrudRoutes(
    alias: 'app.book',
    path: 'admin/books',
    section: 'backend',
    templates: 'backend/crud',
    grid: 'app_book',
    except: ['show'],
)]
class Book implements ResourceInterface
{
    // [..]
}
\`\`\`
`,title:"Resource",level:1,content:`# Resource

\`\`\`php {4}
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[ORM\\Entity(repositoryClass: BookRepository::class)]
#[SyliusCrudRoutes(
    alias: 'app.book',
    path: 'admin/books',
    section: 'backend',
    templates: 'backend/crud',
    grid: 'app_book',
    except: ['show'],
)]
class Book implements ResourceInterface
{
    // [..]
}
\`\`\``,frontmatter:{transition:"fade"},index:3,start:50,end:74},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/03_resource.md",noteHTML:"",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:IC,meta:{transition:"fade",srcSequence:"./pages/03_resource.md",slide:{raw:`---
transition: fade
---

# Resource

\`\`\`php {5}
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[ORM\\Entity(repositoryClass: BookRepository::class)]
#[SyliusCrudRoutes(
    alias: 'app.book',
    path: 'admin/books',
    section: 'backend',
    templates: 'backend/crud',
    grid: 'app_book',
    except: ['show'],
)]
class Book implements ResourceInterface
{
    // [..]
}
\`\`\`
`,title:"Resource",level:1,content:`# Resource

\`\`\`php {5}
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[ORM\\Entity(repositoryClass: BookRepository::class)]
#[SyliusCrudRoutes(
    alias: 'app.book',
    path: 'admin/books',
    section: 'backend',
    templates: 'backend/crud',
    grid: 'app_book',
    except: ['show'],
)]
class Book implements ResourceInterface
{
    // [..]
}
\`\`\``,frontmatter:{transition:"fade",srcSequence:"./pages/03_resource.md"},index:14,start:74,end:98,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/03_resource.md",raw:`---
transition: fade
---

# Resource

\`\`\`php {5}
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[ORM\\Entity(repositoryClass: BookRepository::class)]
#[SyliusCrudRoutes(
    alias: 'app.book',
    path: 'admin/books',
    section: 'backend',
    templates: 'backend/crud',
    grid: 'app_book',
    except: ['show'],
)]
class Book implements ResourceInterface
{
    // [..]
}
\`\`\`
`,title:"Resource",level:1,content:`# Resource

\`\`\`php {5}
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[ORM\\Entity(repositoryClass: BookRepository::class)]
#[SyliusCrudRoutes(
    alias: 'app.book',
    path: 'admin/books',
    section: 'backend',
    templates: 'backend/crud',
    grid: 'app_book',
    except: ['show'],
)]
class Book implements ResourceInterface
{
    // [..]
}
\`\`\``,frontmatter:{transition:"fade"},index:4,start:74,end:98},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/03_resource.md",noteHTML:"",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:LC,meta:{srcSequence:"./pages/03_resource.md",slide:{raw:`
# Resource

\`\`\`php {6|7|8|9|10}
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[ORM\\Entity(repositoryClass: BookRepository::class)]
#[SyliusCrudRoutes(
    alias: 'app.book',
    path: 'admin/books',
    section: 'backend',
    templates: 'backend/crud',
    grid: 'app_book',
    except: ['show'],
)]
class Book implements ResourceInterface
{
    // [..]
}
\`\`\`
`,title:"Resource",level:1,content:`# Resource

\`\`\`php {6|7|8|9|10}
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[ORM\\Entity(repositoryClass: BookRepository::class)]
#[SyliusCrudRoutes(
    alias: 'app.book',
    path: 'admin/books',
    section: 'backend',
    templates: 'backend/crud',
    grid: 'app_book',
    except: ['show'],
)]
class Book implements ResourceInterface
{
    // [..]
}
\`\`\``,frontmatter:{srcSequence:"./pages/03_resource.md"},index:15,start:99,end:120,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/03_resource.md",raw:`
# Resource

\`\`\`php {6|7|8|9|10}
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[ORM\\Entity(repositoryClass: BookRepository::class)]
#[SyliusCrudRoutes(
    alias: 'app.book',
    path: 'admin/books',
    section: 'backend',
    templates: 'backend/crud',
    grid: 'app_book',
    except: ['show'],
)]
class Book implements ResourceInterface
{
    // [..]
}
\`\`\`
`,title:"Resource",level:1,content:`# Resource

\`\`\`php {6|7|8|9|10}
use Sylius\\Component\\Resource\\Model\\ResourceInterface;

#[ORM\\Entity(repositoryClass: BookRepository::class)]
#[SyliusCrudRoutes(
    alias: 'app.book',
    path: 'admin/books',
    section: 'backend',
    templates: 'backend/crud',
    grid: 'app_book',
    except: ['show'],
)]
class Book implements ResourceInterface
{
    // [..]
}
\`\`\``,frontmatter:{},index:5,start:99,end:120},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/03_resource.md",noteHTML:"",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:NC,meta:{srcSequence:"./pages/03_resource.md",slide:{raw:`
# Routes

| Name                                | Method          | Path                     |
|-------------------------------------|-----------------|--------------------------|
| app_backend_book_index              | GET             | /admin/books/            |
| app_backend_book_create             | GET, POST       | /admin/books/new         |                     
| app_backend_book_update             | GET, PUT, PATCH | /admin/books/{id}/edit   |        
| app_backend_book_bulk_delete        | DELETE          | /admin/books/bulk-delete |               
| app_backend_book_delete             | DELETE          | /admin/books/{id}        |
`,title:"Routes",level:1,content:`# Routes

| Name                                | Method          | Path                     |
|-------------------------------------|-----------------|--------------------------|
| app_backend_book_index              | GET             | /admin/books/            |
| app_backend_book_create             | GET, POST       | /admin/books/new         |                     
| app_backend_book_update             | GET, PUT, PATCH | /admin/books/{id}/edit   |        
| app_backend_book_bulk_delete        | DELETE          | /admin/books/bulk-delete |               
| app_backend_book_delete             | DELETE          | /admin/books/{id}        |`,frontmatter:{srcSequence:"./pages/03_resource.md"},index:16,start:121,end:132,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/03_resource.md",raw:`
# Routes

| Name                                | Method          | Path                     |
|-------------------------------------|-----------------|--------------------------|
| app_backend_book_index              | GET             | /admin/books/            |
| app_backend_book_create             | GET, POST       | /admin/books/new         |                     
| app_backend_book_update             | GET, PUT, PATCH | /admin/books/{id}/edit   |        
| app_backend_book_bulk_delete        | DELETE          | /admin/books/bulk-delete |               
| app_backend_book_delete             | DELETE          | /admin/books/{id}        |
`,title:"Routes",level:1,content:`# Routes

| Name                                | Method          | Path                     |
|-------------------------------------|-----------------|--------------------------|
| app_backend_book_index              | GET             | /admin/books/            |
| app_backend_book_create             | GET, POST       | /admin/books/new         |                     
| app_backend_book_update             | GET, PUT, PATCH | /admin/books/{id}/edit   |        
| app_backend_book_bulk_delete        | DELETE          | /admin/books/bulk-delete |               
| app_backend_book_delete             | DELETE          | /admin/books/{id}        |`,frontmatter:{},index:6,start:121,end:132},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/03_resource.md",noteHTML:"",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:UC,meta:{title:"Générer une grid",srcSequence:"./pages/04_grid.md",slide:{raw:null,title:"Générer une grid",level:1,content:"# Générer une grid\n\n```bash\n$ bin/console make:grid\n```",frontmatter:{title:"Générer une grid",srcSequence:"./pages/04_grid.md"},index:17,start:0,end:6,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/04_grid.md",raw:"# Générer une grid\n\n```bash\n$ bin/console make:grid\n```\n",title:"Générer une grid",level:1,content:"# Générer une grid\n\n```bash\n$ bin/console make:grid\n```",frontmatter:{title:"Générer une grid"},index:0,start:0,end:6},inline:{raw:`---
src: ./pages/04_grid.md
---
`,content:"",frontmatter:{},index:4,start:52,end:56},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/04_grid.md",noteHTML:"",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:zC,meta:{transition:"fade",srcSequence:"./pages/04_grid.md",slide:{raw:`---
transition: fade
---

\`\`\`php {all|1|3-6|13-16}
final class BookGrid extends AbstractGrid implements ResourceAwareGridInterface
{
    public static function getName(): string
    {
        return 'app_book';
    }

    public function buildGrid(GridBuilderInterface $gridBuilder): void
    {
        // [...]
    }

    public function getResourceClass(): string
    {
        return Book::class;
    }
}
\`\`\`
`,content:`\`\`\`php {all|1|3-6|13-16}
final class BookGrid extends AbstractGrid implements ResourceAwareGridInterface
{
    public static function getName(): string
    {
        return 'app_book';
    }

    public function buildGrid(GridBuilderInterface $gridBuilder): void
    {
        // [...]
    }

    public function getResourceClass(): string
    {
        return Book::class;
    }
}
\`\`\``,frontmatter:{transition:"fade",srcSequence:"./pages/04_grid.md"},index:18,start:6,end:30,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/04_grid.md",raw:`---
transition: fade
---

\`\`\`php {all|1|3-6|13-16}
final class BookGrid extends AbstractGrid implements ResourceAwareGridInterface
{
    public static function getName(): string
    {
        return 'app_book';
    }

    public function buildGrid(GridBuilderInterface $gridBuilder): void
    {
        // [...]
    }

    public function getResourceClass(): string
    {
        return Book::class;
    }
}
\`\`\`
`,content:`\`\`\`php {all|1|3-6|13-16}
final class BookGrid extends AbstractGrid implements ResourceAwareGridInterface
{
    public static function getName(): string
    {
        return 'app_book';
    }

    public function buildGrid(GridBuilderInterface $gridBuilder): void
    {
        // [...]
    }

    public function getResourceClass(): string
    {
        return Book::class;
    }
}
\`\`\``,frontmatter:{transition:"fade"},index:1,start:6,end:30},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/04_grid.md",noteHTML:"",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:QC,meta:{transition:"fade",srcSequence:"./pages/04_grid.md",slide:{raw:`---
transition: fade
---

\`\`\`php {all|4|5-9|10-14|15-21}
public function buildGrid(GridBuilderInterface $gridBuilder): void
{
    $gridBuilder
        ->orderBy('name')
        ->addField(
            StringField::create('name')
                ->setLabel('Name')
                ->setSortable(true)
        )
        ->addActionGroup(
            MainActionGroup::create(
                CreateAction::create(),
            )
        )
        ->addActionGroup(
            ItemActionGroup::create(
                // ShowAction::create(),
                UpdateAction::create(),
                DeleteAction::create()
            )
        )
    ;
}
\`\`\`
`,content:`\`\`\`php {all|4|5-9|10-14|15-21}
public function buildGrid(GridBuilderInterface $gridBuilder): void
{
    $gridBuilder
        ->orderBy('name')
        ->addField(
            StringField::create('name')
                ->setLabel('Name')
                ->setSortable(true)
        )
        ->addActionGroup(
            MainActionGroup::create(
                CreateAction::create(),
            )
        )
        ->addActionGroup(
            ItemActionGroup::create(
                // ShowAction::create(),
                UpdateAction::create(),
                DeleteAction::create()
            )
        )
    ;
}
\`\`\``,frontmatter:{transition:"fade",srcSequence:"./pages/04_grid.md"},index:19,start:30,end:60,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/04_grid.md",raw:`---
transition: fade
---

\`\`\`php {all|4|5-9|10-14|15-21}
public function buildGrid(GridBuilderInterface $gridBuilder): void
{
    $gridBuilder
        ->orderBy('name')
        ->addField(
            StringField::create('name')
                ->setLabel('Name')
                ->setSortable(true)
        )
        ->addActionGroup(
            MainActionGroup::create(
                CreateAction::create(),
            )
        )
        ->addActionGroup(
            ItemActionGroup::create(
                // ShowAction::create(),
                UpdateAction::create(),
                DeleteAction::create()
            )
        )
    ;
}
\`\`\`
`,content:`\`\`\`php {all|4|5-9|10-14|15-21}
public function buildGrid(GridBuilderInterface $gridBuilder): void
{
    $gridBuilder
        ->orderBy('name')
        ->addField(
            StringField::create('name')
                ->setLabel('Name')
                ->setSortable(true)
        )
        ->addActionGroup(
            MainActionGroup::create(
                CreateAction::create(),
            )
        )
        ->addActionGroup(
            ItemActionGroup::create(
                // ShowAction::create(),
                UpdateAction::create(),
                DeleteAction::create()
            )
        )
    ;
}
\`\`\``,frontmatter:{transition:"fade"},index:2,start:30,end:60},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/04_grid.md",noteHTML:"",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:e6,meta:{srcSequence:"./pages/04_grid.md",slide:{raw:`
\`\`\`php {12-16}
public function buildGrid(GridBuilderInterface $gridBuilder): void
{
    $gridBuilder
        // [..]
        ->addActionGroup(
            ItemActionGroup::create(
                // ShowAction::create(),
                UpdateAction::create(),
                DeleteAction::create()
            )
        )
        ->addActionGroup(
            BulkActionGroup::create(
                DeleteAction::create()
            )
        )
    ;
}
\`\`\`
`,content:`\`\`\`php {12-16}
public function buildGrid(GridBuilderInterface $gridBuilder): void
{
    $gridBuilder
        // [..]
        ->addActionGroup(
            ItemActionGroup::create(
                // ShowAction::create(),
                UpdateAction::create(),
                DeleteAction::create()
            )
        )
        ->addActionGroup(
            BulkActionGroup::create(
                DeleteAction::create()
            )
        )
    ;
}
\`\`\``,frontmatter:{srcSequence:"./pages/04_grid.md"},index:20,start:61,end:83,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/04_grid.md",raw:`
\`\`\`php {12-16}
public function buildGrid(GridBuilderInterface $gridBuilder): void
{
    $gridBuilder
        // [..]
        ->addActionGroup(
            ItemActionGroup::create(
                // ShowAction::create(),
                UpdateAction::create(),
                DeleteAction::create()
            )
        )
        ->addActionGroup(
            BulkActionGroup::create(
                DeleteAction::create()
            )
        )
    ;
}
\`\`\`
`,content:`\`\`\`php {12-16}
public function buildGrid(GridBuilderInterface $gridBuilder): void
{
    $gridBuilder
        // [..]
        ->addActionGroup(
            ItemActionGroup::create(
                // ShowAction::create(),
                UpdateAction::create(),
                DeleteAction::create()
            )
        )
        ->addActionGroup(
            BulkActionGroup::create(
                DeleteAction::create()
            )
        )
    ;
}
\`\`\``,frontmatter:{},index:3,start:61,end:83},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/04_grid.md",noteHTML:"",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:o6,meta:{transition:"fade",title:"Et ??",srcSequence:"./pages/05_ui_demo.md",slide:{raw:null,title:"Et ??",level:1,content:"# Et ??",frontmatter:{transition:"fade",title:"Et ??",srcSequence:"./pages/05_ui_demo.md"},index:21,start:0,end:6,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/05_ui_demo.md",raw:`---
transition: fade
---

# Et ??
`,title:"Et ??",level:1,content:"# Et ??",frontmatter:{transition:"fade",title:"Et ??"},index:0,start:0,end:6},inline:{raw:`---
src: ./pages/05_ui_demo.md
---
`,content:"",frontmatter:{},index:5,start:56,end:60},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/05_ui_demo.md",noteHTML:"",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:l6,meta:{layout:"image",image:"/browsing_books.png",transition:"fade",srcSequence:"./pages/05_ui_demo.md",slide:{raw:`---
layout: image
image: /browsing_books.png
transition: fade
---
`,content:"",frontmatter:{layout:"image",image:"/browsing_books.png",transition:"fade",srcSequence:"./pages/05_ui_demo.md"},index:22,start:6,end:12,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/05_ui_demo.md",raw:`---
layout: image
image: /browsing_books.png
transition: fade
---
`,content:"",frontmatter:{layout:"image",image:"/browsing_books.png",transition:"fade"},index:1,start:6,end:12},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/05_ui_demo.md",noteHTML:"",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:a6,meta:{layout:"image",image:"/adding_book.png",transition:"fade",srcSequence:"./pages/05_ui_demo.md",slide:{raw:`---
layout: image
image: /adding_book.png
transition: fade
---
`,content:"",frontmatter:{layout:"image",image:"/adding_book.png",transition:"fade",srcSequence:"./pages/05_ui_demo.md"},index:23,start:12,end:18,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/05_ui_demo.md",raw:`---
layout: image
image: /adding_book.png
transition: fade
---
`,content:"",frontmatter:{layout:"image",image:"/adding_book.png",transition:"fade"},index:2,start:12,end:18},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/05_ui_demo.md",noteHTML:"",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:i6,meta:{layout:"image",image:"/editing_book.png",transition:"fade",srcSequence:"./pages/05_ui_demo.md",slide:{raw:`---
layout: image
image: /editing_book.png
transition: fade
---
`,content:"",frontmatter:{layout:"image",image:"/editing_book.png",transition:"fade",srcSequence:"./pages/05_ui_demo.md"},index:24,start:18,end:24,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/05_ui_demo.md",raw:`---
layout: image
image: /editing_book.png
transition: fade
---
`,content:"",frontmatter:{layout:"image",image:"/editing_book.png",transition:"fade"},index:3,start:18,end:24},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/05_ui_demo.md",noteHTML:"",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:u6,meta:{layout:"image",image:"/delete_confirmation.png",transition:"fade",srcSequence:"./pages/05_ui_demo.md",slide:{raw:`---
layout: image
image: /delete_confirmation.png
transition: fade
---
`,content:"",frontmatter:{layout:"image",image:"/delete_confirmation.png",transition:"fade",srcSequence:"./pages/05_ui_demo.md"},index:25,start:24,end:30,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/05_ui_demo.md",raw:`---
layout: image
image: /delete_confirmation.png
transition: fade
---
`,content:"",frontmatter:{layout:"image",image:"/delete_confirmation.png",transition:"fade"},index:4,start:24,end:30},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/05_ui_demo.md",noteHTML:"",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:y6,meta:{layout:"image",image:"/flash_message.png",srcSequence:"./pages/05_ui_demo.md",slide:{raw:`---
layout: image
image: /flash_message.png
---
`,content:"",frontmatter:{layout:"image",image:"/flash_message.png",srcSequence:"./pages/05_ui_demo.md"},index:26,start:30,end:35,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/05_ui_demo.md",raw:`---
layout: image
image: /flash_message.png
---
`,content:"",frontmatter:{layout:"image",image:"/flash_message.png"},index:5,start:30,end:35},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/05_ui_demo.md",noteHTML:"",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:_6,meta:{srcSequence:"./pages/05_ui_demo.md",slide:{raw:`
## Et un petit search input ?

\`\`\`php {5-8}
public function buildGrid(GridBuilderInterface $gridBuilder): void
{
    $gridBuilder
        ->orderBy('name')
        ->addFilter(
            StringFilter::create(name: 'search', fields: ['name'])
                ->setLabel('Search')
        )
        ->addField(
            StringField::create('name')
                ->setLabel('Name')
                ->setSortable(true)
        )
        // [..]
    ;
}
\`\`\`
`,title:"Et un petit search input ?",level:2,content:`## Et un petit search input ?

\`\`\`php {5-8}
public function buildGrid(GridBuilderInterface $gridBuilder): void
{
    $gridBuilder
        ->orderBy('name')
        ->addFilter(
            StringFilter::create(name: 'search', fields: ['name'])
                ->setLabel('Search')
        )
        ->addField(
            StringField::create('name')
                ->setLabel('Name')
                ->setSortable(true)
        )
        // [..]
    ;
}
\`\`\``,frontmatter:{srcSequence:"./pages/05_ui_demo.md"},index:27,start:36,end:58,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/05_ui_demo.md",raw:`
## Et un petit search input ?

\`\`\`php {5-8}
public function buildGrid(GridBuilderInterface $gridBuilder): void
{
    $gridBuilder
        ->orderBy('name')
        ->addFilter(
            StringFilter::create(name: 'search', fields: ['name'])
                ->setLabel('Search')
        )
        ->addField(
            StringField::create('name')
                ->setLabel('Name')
                ->setSortable(true)
        )
        // [..]
    ;
}
\`\`\`
`,title:"Et un petit search input ?",level:2,content:`## Et un petit search input ?

\`\`\`php {5-8}
public function buildGrid(GridBuilderInterface $gridBuilder): void
{
    $gridBuilder
        ->orderBy('name')
        ->addFilter(
            StringFilter::create(name: 'search', fields: ['name'])
                ->setLabel('Search')
        )
        ->addField(
            StringField::create('name')
                ->setLabel('Name')
                ->setSortable(true)
        )
        // [..]
    ;
}
\`\`\``,frontmatter:{},index:6,start:36,end:58},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/05_ui_demo.md",noteHTML:"",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:g6,meta:{layout:"image",image:"/search_filter.png",transition:"fade",srcSequence:"./pages/05_ui_demo.md",slide:{raw:`---
layout: image
image: /search_filter.png
transition: fade
---
`,content:"",frontmatter:{layout:"image",image:"/search_filter.png",transition:"fade",srcSequence:"./pages/05_ui_demo.md"},index:28,start:58,end:64,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/05_ui_demo.md",raw:`---
layout: image
image: /search_filter.png
transition: fade
---
`,content:"",frontmatter:{layout:"image",image:"/search_filter.png",transition:"fade"},index:7,start:58,end:64},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/05_ui_demo.md",noteHTML:"",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:C6,meta:{layout:"image",image:"/filter_details.png",transition:"fade",srcSequence:"./pages/05_ui_demo.md",slide:{raw:`---
layout: image
image: /filter_details.png
transition: fade
---
`,content:"",frontmatter:{layout:"image",image:"/filter_details.png",transition:"fade",srcSequence:"./pages/05_ui_demo.md"},index:29,start:64,end:70,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/05_ui_demo.md",raw:`---
layout: image
image: /filter_details.png
transition: fade
---
`,content:"",frontmatter:{layout:"image",image:"/filter_details.png",transition:"fade"},index:8,start:64,end:70},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/05_ui_demo.md",noteHTML:"",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:D6,meta:{layout:"image",image:"/search_value.png",transition:"fade",srcSequence:"./pages/05_ui_demo.md",slide:{raw:`---
layout: image
image: /search_value.png
transition: fade
---
`,content:"",frontmatter:{layout:"image",image:"/search_value.png",transition:"fade",srcSequence:"./pages/05_ui_demo.md"},index:30,start:70,end:76,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/05_ui_demo.md",raw:`---
layout: image
image: /search_value.png
transition: fade
---
`,content:"",frontmatter:{layout:"image",image:"/search_value.png",transition:"fade"},index:9,start:70,end:76},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/05_ui_demo.md",noteHTML:"",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:k6,meta:{layout:"image",image:"/filtered_books.png",srcSequence:"./pages/05_ui_demo.md",slide:{raw:`---
layout: image
image: /filtered_books.png
---
`,content:"",frontmatter:{layout:"image",image:"/filtered_books.png",srcSequence:"./pages/05_ui_demo.md"},index:31,start:76,end:81,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/05_ui_demo.md",raw:`---
layout: image
image: /filtered_books.png
---
`,content:"",frontmatter:{layout:"image",image:"/filtered_books.png"},index:10,start:76,end:81},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/05_ui_demo.md",noteHTML:"",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:E6,meta:{layout:"image",image:"https://api-platform.com/logo.png",srcSequence:"./pages/06_api_pack.md",slide:{raw:null,content:"",frontmatter:{layout:"image",image:"https://api-platform.com/logo.png",srcSequence:"./pages/06_api_pack.md"},index:32,start:0,end:5,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/06_api_pack.md",raw:`---
layout: image
image: https://api-platform.com/logo.png
---
`,content:"",frontmatter:{layout:"image",image:"https://api-platform.com/logo.png"},index:0,start:0,end:5},inline:{raw:`---
src: ./pages/06_api_pack.md
---
`,content:"",frontmatter:{},index:6,start:60,end:64},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/06_api_pack.md",noteHTML:"",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:I6,meta:{srcSequence:"./pages/06_api_pack.md",slide:{raw:`
# Monofony API Pack

\`\`\`shell
$ composer require monofony/api-pack "^0.10"
\`\`\`

<br />

* voir [l'installation détaillée dans la doc](https://docs.monofony.com/current/setup/application).
`,title:"Monofony API Pack",level:1,content:`# Monofony API Pack

\`\`\`shell
$ composer require monofony/api-pack "^0.10"
\`\`\`

<br />

* voir [l'installation détaillée dans la doc](https://docs.monofony.com/current/setup/application).`,frontmatter:{srcSequence:"./pages/06_api_pack.md"},index:33,start:6,end:17,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/06_api_pack.md",raw:`
# Monofony API Pack

\`\`\`shell
$ composer require monofony/api-pack "^0.10"
\`\`\`

<br />

* voir [l'installation détaillée dans la doc](https://docs.monofony.com/current/setup/application).
`,title:"Monofony API Pack",level:1,content:`# Monofony API Pack

\`\`\`shell
$ composer require monofony/api-pack "^0.10"
\`\`\`

<br />

* voir [l'installation détaillée dans la doc](https://docs.monofony.com/current/setup/application).`,frontmatter:{},index:1,start:6,end:17},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/06_api_pack.md",noteHTML:"",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:O6,meta:{layout:"image",image:"/api_pack.png",srcSequence:"./pages/06_api_pack.md",slide:{raw:`---
layout: image
image: /api_pack.png
---
`,content:"",frontmatter:{layout:"image",image:"/api_pack.png",srcSequence:"./pages/06_api_pack.md"},index:34,start:17,end:22,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/06_api_pack.md",raw:`---
layout: image
image: /api_pack.png
---
`,content:"",frontmatter:{layout:"image",image:"/api_pack.png"},index:2,start:17,end:22},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/06_api_pack.md",noteHTML:"",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:q6,meta:{srcSequence:"./pages/06_api_pack.md",slide:{raw:`
# Book resource

\`\`\`php {all|1-3|4|5|6|7|8|9}
#[ApiResource(
    normalizationContext: ['groups' => 'book:read']
)]
#[Get]
#[GetCollection]
#[Post]
#[Put]
#[Patch]
#[Delete]
class Book implements ResourceInterface
{
    // [...]
}
\`\`\`
`,title:"Book resource",level:1,content:`# Book resource

\`\`\`php {all|1-3|4|5|6|7|8|9}
#[ApiResource(
    normalizationContext: ['groups' => 'book:read']
)]
#[Get]
#[GetCollection]
#[Post]
#[Put]
#[Patch]
#[Delete]
class Book implements ResourceInterface
{
    // [...]
}
\`\`\``,frontmatter:{srcSequence:"./pages/06_api_pack.md"},index:35,start:23,end:42,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/06_api_pack.md",raw:`
# Book resource

\`\`\`php {all|1-3|4|5|6|7|8|9}
#[ApiResource(
    normalizationContext: ['groups' => 'book:read']
)]
#[Get]
#[GetCollection]
#[Post]
#[Put]
#[Patch]
#[Delete]
class Book implements ResourceInterface
{
    // [...]
}
\`\`\`
`,title:"Book resource",level:1,content:`# Book resource

\`\`\`php {all|1-3|4|5|6|7|8|9}
#[ApiResource(
    normalizationContext: ['groups' => 'book:read']
)]
#[Get]
#[GetCollection]
#[Post]
#[Put]
#[Patch]
#[Delete]
class Book implements ResourceInterface
{
    // [...]
}
\`\`\``,frontmatter:{},index:3,start:23,end:42},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/06_api_pack.md",noteHTML:"",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:N6,meta:{layout:"image",image:"/book_api_doc.png",srcSequence:"./pages/06_api_pack.md",slide:{raw:`---
layout: image
image: /book_api_doc.png
---
`,content:"",frontmatter:{layout:"image",image:"/book_api_doc.png",srcSequence:"./pages/06_api_pack.md"},index:36,start:42,end:47,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/06_api_pack.md",raw:`---
layout: image
image: /book_api_doc.png
---
`,content:"",frontmatter:{layout:"image",image:"/book_api_doc.png"},index:4,start:42,end:47},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/06_api_pack.md",noteHTML:"",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:V6,meta:{srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/01_index.md",slide:{raw:`![Logo](https://sylius.com/wp-content/uploads/2021/03/sylius-logo_sylius-logo-dark-1536x634.jpg)
`,content:"![Logo](https://sylius.com/wp-content/uploads/2021/03/sylius-logo_sylius-logo-dark-1536x634.jpg)",frontmatter:{srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/01_index.md"},index:37,start:0,end:2,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/01_index.md",raw:`![Logo](https://sylius.com/wp-content/uploads/2021/03/sylius-logo_sylius-logo-dark-1536x634.jpg)
`,content:"![Logo](https://sylius.com/wp-content/uploads/2021/03/sylius-logo_sylius-logo-dark-1536x634.jpg)",frontmatter:{},index:0,start:0,end:2},inline:{raw:`---
src: ./pages/07_resource_operation.md
---
`,content:"",frontmatter:{},index:7,start:64,end:68},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/01_index.md",noteHTML:"",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:z6,meta:{srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/01_index.md",slide:{raw:`
# La suite...

<v-clicks>

* Améliorer la DX (expérience développeur)
* Ajouter plus de souplesse
* Adapter à vos besoins métiers
* Détacher les resources de Doctrine
* Permettre une architecture hexagonale

</v-clicks>
`,title:"La suite...",level:1,content:`# La suite...

<v-clicks>

* Améliorer la DX (expérience développeur)
* Ajouter plus de souplesse
* Adapter à vos besoins métiers
* Détacher les resources de Doctrine
* Permettre une architecture hexagonale

</v-clicks>`,frontmatter:{srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/01_index.md"},index:38,start:3,end:16,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/01_index.md",raw:`
# La suite...

<v-clicks>

* Améliorer la DX (expérience développeur)
* Ajouter plus de souplesse
* Adapter à vos besoins métiers
* Détacher les resources de Doctrine
* Permettre une architecture hexagonale

</v-clicks>
`,title:"La suite...",level:1,content:`# La suite...

<v-clicks>

* Améliorer la DX (expérience développeur)
* Ajouter plus de souplesse
* Adapter à vos besoins métiers
* Détacher les resources de Doctrine
* Permettre une architecture hexagonale

</v-clicks>`,frontmatter:{},index:1,start:3,end:16},inline:{raw:`---
src: ./pages/07_resource_operation.md
---
`,content:"",frontmatter:{},index:7,start:64,end:68},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/01_index.md",noteHTML:"",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:Q6,meta:{transition:"fade",title:"Rapid Application Development",srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/02_rad.md",slide:{raw:`---
transition: fade
---

# Rapid Application Development
`,title:"Rapid Application Development",level:1,content:"# Rapid Application Development",frontmatter:{transition:"fade",title:"Rapid Application Development",srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/02_rad.md"},index:39,start:0,end:6,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/02_rad.md",raw:`---
transition: fade
---

# Rapid Application Development
`,title:"Rapid Application Development",level:1,content:"# Rapid Application Development",frontmatter:{transition:"fade",title:"Rapid Application Development"},index:0,start:0,end:6},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/02_rad.md",noteHTML:"",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:nv,meta:{srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/02_rad.md",slide:{raw:`
# Rapid Application Development

\`\`\`php {all|2|3|4|5|6|7|8-15|9|10|11|12|13|14}
#[ORM\\Entity(repositoryClass: BookRepository::class)]
#[Resource(
    alias: 'app.book',
    section: 'admin',
    formType: BookType::class,
    templatesDir: '@SyliusAdminUi/crud',
    routePrefix: '/admin',
    operations: [
        new Index(grid: 'app_book'),
        new Create(),
        new Update(),
        new BulkDelete(),
        new Delete(),
        new Show(template: 'book/show.html.twig'),
    ],
)]
class Book implements ResourceInterface
{
    // [...]
}
\`\`\`
`,title:"Rapid Application Development",level:1,content:`# Rapid Application Development

\`\`\`php {all|2|3|4|5|6|7|8-15|9|10|11|12|13|14}
#[ORM\\Entity(repositoryClass: BookRepository::class)]
#[Resource(
    alias: 'app.book',
    section: 'admin',
    formType: BookType::class,
    templatesDir: '@SyliusAdminUi/crud',
    routePrefix: '/admin',
    operations: [
        new Index(grid: 'app_book'),
        new Create(),
        new Update(),
        new BulkDelete(),
        new Delete(),
        new Show(template: 'book/show.html.twig'),
    ],
)]
class Book implements ResourceInterface
{
    // [...]
}
\`\`\``,frontmatter:{srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/02_rad.md"},index:40,start:7,end:33,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/02_rad.md",raw:`
# Rapid Application Development

\`\`\`php {all|2|3|4|5|6|7|8-15|9|10|11|12|13|14}
#[ORM\\Entity(repositoryClass: BookRepository::class)]
#[Resource(
    alias: 'app.book',
    section: 'admin',
    formType: BookType::class,
    templatesDir: '@SyliusAdminUi/crud',
    routePrefix: '/admin',
    operations: [
        new Index(grid: 'app_book'),
        new Create(),
        new Update(),
        new BulkDelete(),
        new Delete(),
        new Show(template: 'book/show.html.twig'),
    ],
)]
class Book implements ResourceInterface
{
    // [...]
}
\`\`\`
`,title:"Rapid Application Development",level:1,content:`# Rapid Application Development

\`\`\`php {all|2|3|4|5|6|7|8-15|9|10|11|12|13|14}
#[ORM\\Entity(repositoryClass: BookRepository::class)]
#[Resource(
    alias: 'app.book',
    section: 'admin',
    formType: BookType::class,
    templatesDir: '@SyliusAdminUi/crud',
    routePrefix: '/admin',
    operations: [
        new Index(grid: 'app_book'),
        new Create(),
        new Update(),
        new BulkDelete(),
        new Delete(),
        new Show(template: 'book/show.html.twig'),
    ],
)]
class Book implements ResourceInterface
{
    // [...]
}
\`\`\``,frontmatter:{},index:1,start:7,end:33},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/02_rad.md",noteHTML:"",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:lv,meta:{srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/02_rad.md",slide:{raw:`
# Routes

| Name                       | Method          | Path                     |
|----------------------------|-----------------|--------------------------|
| app_admin_book_index       | GET             | /admin/books/            |
| app_admin_book_create      | GET, POST       | /admin/books/new         |                     
| app_admin_book_update      | GET, PUT, PATCH | /admin/books/{id}/edit   |        
| app_admin_book_bulk_delete | DELETE          | /admin/books/bulk-delete |               
| app_admin_book_delete      | DELETE          | /admin/books/{id}        |
| app_admin_book_show        | GET             | /admin/books/{id}        |

`,title:"Routes",level:1,content:`# Routes

| Name                       | Method          | Path                     |
|----------------------------|-----------------|--------------------------|
| app_admin_book_index       | GET             | /admin/books/            |
| app_admin_book_create      | GET, POST       | /admin/books/new         |                     
| app_admin_book_update      | GET, PUT, PATCH | /admin/books/{id}/edit   |        
| app_admin_book_bulk_delete | DELETE          | /admin/books/bulk-delete |               
| app_admin_book_delete      | DELETE          | /admin/books/{id}        |
| app_admin_book_show        | GET             | /admin/books/{id}        |`,frontmatter:{srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/02_rad.md"},index:41,start:34,end:47,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/02_rad.md",raw:`
# Routes

| Name                       | Method          | Path                     |
|----------------------------|-----------------|--------------------------|
| app_admin_book_index       | GET             | /admin/books/            |
| app_admin_book_create      | GET, POST       | /admin/books/new         |                     
| app_admin_book_update      | GET, PUT, PATCH | /admin/books/{id}/edit   |        
| app_admin_book_bulk_delete | DELETE          | /admin/books/bulk-delete |               
| app_admin_book_delete      | DELETE          | /admin/books/{id}        |
| app_admin_book_show        | GET             | /admin/books/{id}        |

`,title:"Routes",level:1,content:`# Routes

| Name                       | Method          | Path                     |
|----------------------------|-----------------|--------------------------|
| app_admin_book_index       | GET             | /admin/books/            |
| app_admin_book_create      | GET, POST       | /admin/books/new         |                     
| app_admin_book_update      | GET, PUT, PATCH | /admin/books/{id}/edit   |        
| app_admin_book_bulk_delete | DELETE          | /admin/books/bulk-delete |               
| app_admin_book_delete      | DELETE          | /admin/books/{id}        |
| app_admin_book_show        | GET             | /admin/books/{id}        |`,frontmatter:{},index:2,start:34,end:47},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/02_rad.md",noteHTML:"",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:cv,meta:{srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/02_rad.md",slide:{raw:`
\`\`\`php {10}
#[ORM\\Entity(repositoryClass: BookRepository::class)]
#[Resource(
    alias: 'app.book',
    section: 'admin',
    formType: BookType::class,
    templatesDir: '@SyliusAdminUi/crud',
    routePrefix: '/admin',
    operations: [
        new Index(grid: 'app_book'),
        new Create(path: 'create'),
        new Update(),
        new BulkDelete(),
        new Delete(),
        new Show(template: 'book/show.html.twig'),
    ],
)]
class Book implements ResourceInterface
{
    // [...]
}
\`\`\`
`,content:`\`\`\`php {10}
#[ORM\\Entity(repositoryClass: BookRepository::class)]
#[Resource(
    alias: 'app.book',
    section: 'admin',
    formType: BookType::class,
    templatesDir: '@SyliusAdminUi/crud',
    routePrefix: '/admin',
    operations: [
        new Index(grid: 'app_book'),
        new Create(path: 'create'),
        new Update(),
        new BulkDelete(),
        new Delete(),
        new Show(template: 'book/show.html.twig'),
    ],
)]
class Book implements ResourceInterface
{
    // [...]
}
\`\`\``,frontmatter:{srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/02_rad.md"},index:42,start:48,end:72,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/02_rad.md",raw:`
\`\`\`php {10}
#[ORM\\Entity(repositoryClass: BookRepository::class)]
#[Resource(
    alias: 'app.book',
    section: 'admin',
    formType: BookType::class,
    templatesDir: '@SyliusAdminUi/crud',
    routePrefix: '/admin',
    operations: [
        new Index(grid: 'app_book'),
        new Create(path: 'create'),
        new Update(),
        new BulkDelete(),
        new Delete(),
        new Show(template: 'book/show.html.twig'),
    ],
)]
class Book implements ResourceInterface
{
    // [...]
}
\`\`\`
`,content:`\`\`\`php {10}
#[ORM\\Entity(repositoryClass: BookRepository::class)]
#[Resource(
    alias: 'app.book',
    section: 'admin',
    formType: BookType::class,
    templatesDir: '@SyliusAdminUi/crud',
    routePrefix: '/admin',
    operations: [
        new Index(grid: 'app_book'),
        new Create(path: 'create'),
        new Update(),
        new BulkDelete(),
        new Delete(),
        new Show(template: 'book/show.html.twig'),
    ],
)]
class Book implements ResourceInterface
{
    // [...]
}
\`\`\``,frontmatter:{},index:3,start:48,end:72},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/02_rad.md",noteHTML:"",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:dv,meta:{srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/02_rad.md",slide:{raw:`
# Routes

| Name                       | Method          | Path                |
|----------------------------|-----------------|---------------------|
| app_admin_book_create      | GET, POST       | /admin/books/create |
`,title:"Routes",level:1,content:`# Routes

| Name                       | Method          | Path                |
|----------------------------|-----------------|---------------------|
| app_admin_book_create      | GET, POST       | /admin/books/create |`,frontmatter:{srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/02_rad.md"},index:43,start:73,end:80,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/02_rad.md",raw:`
# Routes

| Name                       | Method          | Path                |
|----------------------------|-----------------|---------------------|
| app_admin_book_create      | GET, POST       | /admin/books/create |
`,title:"Routes",level:1,content:`# Routes

| Name                       | Method          | Path                |
|----------------------------|-----------------|---------------------|
| app_admin_book_create      | GET, POST       | /admin/books/create |`,frontmatter:{},index:4,start:73,end:80},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/02_rad.md",noteHTML:"",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:mv,meta:{srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/02_rad.md",slide:{raw:`
\`\`\`php {10}
#[ORM\\Entity(repositoryClass: BookRepository::class)]
#[Resource(
    alias: 'app.book',
    section: 'admin',
    formType: BookType::class,
    templatesDir: '@SyliusAdminUi/crud',
    routePrefix: '/admin',
    operations: [
        new Index(grid: 'app_book'),
        new Create(shortName: 'register'),
        new Update(),
        new BulkDelete(),
        new Delete(),
        new Show(template: 'book/show.html.twig'),
    ],
)]
class Book implements ResourceInterface
{
    // [...]
}
\`\`\`
`,content:`\`\`\`php {10}
#[ORM\\Entity(repositoryClass: BookRepository::class)]
#[Resource(
    alias: 'app.book',
    section: 'admin',
    formType: BookType::class,
    templatesDir: '@SyliusAdminUi/crud',
    routePrefix: '/admin',
    operations: [
        new Index(grid: 'app_book'),
        new Create(shortName: 'register'),
        new Update(),
        new BulkDelete(),
        new Delete(),
        new Show(template: 'book/show.html.twig'),
    ],
)]
class Book implements ResourceInterface
{
    // [...]
}
\`\`\``,frontmatter:{srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/02_rad.md"},index:44,start:81,end:105,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/02_rad.md",raw:`
\`\`\`php {10}
#[ORM\\Entity(repositoryClass: BookRepository::class)]
#[Resource(
    alias: 'app.book',
    section: 'admin',
    formType: BookType::class,
    templatesDir: '@SyliusAdminUi/crud',
    routePrefix: '/admin',
    operations: [
        new Index(grid: 'app_book'),
        new Create(shortName: 'register'),
        new Update(),
        new BulkDelete(),
        new Delete(),
        new Show(template: 'book/show.html.twig'),
    ],
)]
class Book implements ResourceInterface
{
    // [...]
}
\`\`\`
`,content:`\`\`\`php {10}
#[ORM\\Entity(repositoryClass: BookRepository::class)]
#[Resource(
    alias: 'app.book',
    section: 'admin',
    formType: BookType::class,
    templatesDir: '@SyliusAdminUi/crud',
    routePrefix: '/admin',
    operations: [
        new Index(grid: 'app_book'),
        new Create(shortName: 'register'),
        new Update(),
        new BulkDelete(),
        new Delete(),
        new Show(template: 'book/show.html.twig'),
    ],
)]
class Book implements ResourceInterface
{
    // [...]
}
\`\`\``,frontmatter:{},index:5,start:81,end:105},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/02_rad.md",noteHTML:"",id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:gv,meta:{srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/02_rad.md",slide:{raw:`
# Routes

| Name                    | Method          | Path                  |
|-------------------------|-----------------|-----------------------|
| app_admin_book_register | GET, POST       | /admin/books/register |
`,title:"Routes",level:1,content:`# Routes

| Name                    | Method          | Path                  |
|-------------------------|-----------------|-----------------------|
| app_admin_book_register | GET, POST       | /admin/books/register |`,frontmatter:{srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/02_rad.md"},index:45,start:106,end:113,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/02_rad.md",raw:`
# Routes

| Name                    | Method          | Path                  |
|-------------------------|-----------------|-----------------------|
| app_admin_book_register | GET, POST       | /admin/books/register |
`,title:"Routes",level:1,content:`# Routes

| Name                    | Method          | Path                  |
|-------------------------|-----------------|-----------------------|
| app_admin_book_register | GET, POST       | /admin/books/register |`,frontmatter:{},index:6,start:106,end:113},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/02_rad.md",noteHTML:"",id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:vv,meta:{srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/02_rad.md",slide:{raw:`
\`\`\`php {11}
#[ORM\\Entity(repositoryClass: BookRepository::class)]
#[Resource(
    alias: 'app.book',
    section: 'admin',
    formType: BookType::class,
    templatesDir: '@SyliusAdminUi/crud',
    routePrefix: '/admin',
    operations: [
        new Index(grid: 'app_book'),
        new Create(),
        new Update(methods: ['GET', 'POST']),
        new BulkDelete(),
        new Delete(),
        new Show(template: 'book/show.html.twig'),
    ],
)]
class Book implements ResourceInterface
{
    // [...]
}
\`\`\`
`,content:`\`\`\`php {11}
#[ORM\\Entity(repositoryClass: BookRepository::class)]
#[Resource(
    alias: 'app.book',
    section: 'admin',
    formType: BookType::class,
    templatesDir: '@SyliusAdminUi/crud',
    routePrefix: '/admin',
    operations: [
        new Index(grid: 'app_book'),
        new Create(),
        new Update(methods: ['GET', 'POST']),
        new BulkDelete(),
        new Delete(),
        new Show(template: 'book/show.html.twig'),
    ],
)]
class Book implements ResourceInterface
{
    // [...]
}
\`\`\``,frontmatter:{srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/02_rad.md"},index:46,start:114,end:138,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/02_rad.md",raw:`
\`\`\`php {11}
#[ORM\\Entity(repositoryClass: BookRepository::class)]
#[Resource(
    alias: 'app.book',
    section: 'admin',
    formType: BookType::class,
    templatesDir: '@SyliusAdminUi/crud',
    routePrefix: '/admin',
    operations: [
        new Index(grid: 'app_book'),
        new Create(),
        new Update(methods: ['GET', 'POST']),
        new BulkDelete(),
        new Delete(),
        new Show(template: 'book/show.html.twig'),
    ],
)]
class Book implements ResourceInterface
{
    // [...]
}
\`\`\`
`,content:`\`\`\`php {11}
#[ORM\\Entity(repositoryClass: BookRepository::class)]
#[Resource(
    alias: 'app.book',
    section: 'admin',
    formType: BookType::class,
    templatesDir: '@SyliusAdminUi/crud',
    routePrefix: '/admin',
    operations: [
        new Index(grid: 'app_book'),
        new Create(),
        new Update(methods: ['GET', 'POST']),
        new BulkDelete(),
        new Delete(),
        new Show(template: 'book/show.html.twig'),
    ],
)]
class Book implements ResourceInterface
{
    // [...]
}
\`\`\``,frontmatter:{},index:7,start:114,end:138},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/02_rad.md",noteHTML:"",id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:wv,meta:{srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/02_rad.md",slide:{raw:`
# Routes

| Name                   | Method    | Path                     |
|------------------------|-----------|--------------------------|
| app_admin_book_update  | GET, POST | /admin/books/{id}/edit   |    
`,title:"Routes",level:1,content:`# Routes

| Name                   | Method    | Path                     |
|------------------------|-----------|--------------------------|
| app_admin_book_update  | GET, POST | /admin/books/{id}/edit   |`,frontmatter:{srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/02_rad.md"},index:47,start:139,end:146,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/02_rad.md",raw:`
# Routes

| Name                   | Method    | Path                     |
|------------------------|-----------|--------------------------|
| app_admin_book_update  | GET, POST | /admin/books/{id}/edit   |    
`,title:"Routes",level:1,content:`# Routes

| Name                   | Method    | Path                     |
|------------------------|-----------|--------------------------|
| app_admin_book_update  | GET, POST | /admin/books/{id}/edit   |`,frontmatter:{},index:8,start:139,end:146},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/02_rad.md",noteHTML:"",id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:Sv,meta:{transition:"fade",title:"Arhictecture hexagonale",srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/03_hexa.md",slide:{raw:`---
transition: fade
---

# Arhictecture hexagonale

<v-clicks>

Model

\`\`\`php {all|5-6|8-13|15-19}
// src/BoardGameBlog/Domain/Model/BoardGame.php
#[ORM\\Entity]
class BoardGame
{
    #[ORM\\Embedded(columnPrefix: false)]
    private BoardGameId $id;

    public function __construct(
        #[ORM\\Embedded(columnPrefix: false)]
        private BoardGameName $name,
    ) {
        $this->id = new BoardGameId();
    }

    public function update(
        ?BoardGameName $name = null,
    ): void {
        $this->name = $name ?? $this->name;
    }
    
    // [...]
}
\`\`\`

</v-clicks>
`,title:"Arhictecture hexagonale",level:1,content:`# Arhictecture hexagonale

<v-clicks>

Model

\`\`\`php {all|5-6|8-13|15-19}
// src/BoardGameBlog/Domain/Model/BoardGame.php
#[ORM\\Entity]
class BoardGame
{
    #[ORM\\Embedded(columnPrefix: false)]
    private BoardGameId $id;

    public function __construct(
        #[ORM\\Embedded(columnPrefix: false)]
        private BoardGameName $name,
    ) {
        $this->id = new BoardGameId();
    }

    public function update(
        ?BoardGameName $name = null,
    ): void {
        $this->name = $name ?? $this->name;
    }
    
    // [...]
}
\`\`\`

</v-clicks>`,frontmatter:{transition:"fade",title:"Arhictecture hexagonale",srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/03_hexa.md"},index:48,start:0,end:37,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/03_hexa.md",raw:`---
transition: fade
---

# Arhictecture hexagonale

<v-clicks>

Model

\`\`\`php {all|5-6|8-13|15-19}
// src/BoardGameBlog/Domain/Model/BoardGame.php
#[ORM\\Entity]
class BoardGame
{
    #[ORM\\Embedded(columnPrefix: false)]
    private BoardGameId $id;

    public function __construct(
        #[ORM\\Embedded(columnPrefix: false)]
        private BoardGameName $name,
    ) {
        $this->id = new BoardGameId();
    }

    public function update(
        ?BoardGameName $name = null,
    ): void {
        $this->name = $name ?? $this->name;
    }
    
    // [...]
}
\`\`\`

</v-clicks>
`,title:"Arhictecture hexagonale",level:1,content:`# Arhictecture hexagonale

<v-clicks>

Model

\`\`\`php {all|5-6|8-13|15-19}
// src/BoardGameBlog/Domain/Model/BoardGame.php
#[ORM\\Entity]
class BoardGame
{
    #[ORM\\Embedded(columnPrefix: false)]
    private BoardGameId $id;

    public function __construct(
        #[ORM\\Embedded(columnPrefix: false)]
        private BoardGameName $name,
    ) {
        $this->id = new BoardGameId();
    }

    public function update(
        ?BoardGameName $name = null,
    ): void {
        $this->name = $name ?? $this->name;
    }
    
    // [...]
}
\`\`\`

</v-clicks>`,frontmatter:{transition:"fade",title:"Arhictecture hexagonale"},index:0,start:0,end:37},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/03_hexa.md",noteHTML:"",id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:Tv,meta:{srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/03_hexa.md",slide:{raw:`
# Architecture hexagonale

Model

\`\`\`php {6-15}
// src/BoardGameBlog/Domain/Model/BoardGame.php
#[ORM\\Entity]
class BoardGame
{    
    // [...]
    
    public function id(): BoardGameId
    {
        return $this->id;
    }

    public function name(): BoardGameName
    {
        return $this->name;
    }
}
\`\`\`
`,title:"Architecture hexagonale",level:1,content:`# Architecture hexagonale

Model

\`\`\`php {6-15}
// src/BoardGameBlog/Domain/Model/BoardGame.php
#[ORM\\Entity]
class BoardGame
{    
    // [...]
    
    public function id(): BoardGameId
    {
        return $this->id;
    }

    public function name(): BoardGameName
    {
        return $this->name;
    }
}
\`\`\``,frontmatter:{srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/03_hexa.md"},index:49,start:38,end:62,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/03_hexa.md",raw:`
# Architecture hexagonale

Model

\`\`\`php {6-15}
// src/BoardGameBlog/Domain/Model/BoardGame.php
#[ORM\\Entity]
class BoardGame
{    
    // [...]
    
    public function id(): BoardGameId
    {
        return $this->id;
    }

    public function name(): BoardGameName
    {
        return $this->name;
    }
}
\`\`\`
`,title:"Architecture hexagonale",level:1,content:`# Architecture hexagonale

Model

\`\`\`php {6-15}
// src/BoardGameBlog/Domain/Model/BoardGame.php
#[ORM\\Entity]
class BoardGame
{    
    // [...]
    
    public function id(): BoardGameId
    {
        return $this->id;
    }

    public function name(): BoardGameName
    {
        return $this->name;
    }
}
\`\`\``,frontmatter:{},index:1,start:38,end:62},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/03_hexa.md",noteHTML:"",id:49,no:50},__clicksElements:[],__preloaded:!1}},{path:"51",name:"page-51",component:Nv,meta:{srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/03_hexa.md",slide:{raw:`
# Architecture hexagonale

<v-clicks>

Resource

\`\`\`php {all|9|10|11|12|13}
// src/BoardGameBlog/Infrastructure/Sylius/Resource/BoardGameResource.php
#[Resource(
    alias: 'app.board_game',
    section: 'admin',
    formType: BoardGameType::class,
    templatesDir: 'crud',
    routePrefix: '/admin',
)]
#[Create(/*...*/)]
#[Update(/*...*/)]
#[Index(/*...*/)]
#[Show(/*...*/)]
#[Delete(/*...*/)]
final class BoardGameResource implements ResourceInterface
\`\`\`

</v-clicks>


`,title:"Architecture hexagonale",level:1,content:`# Architecture hexagonale

<v-clicks>

Resource

\`\`\`php {all|9|10|11|12|13}
// src/BoardGameBlog/Infrastructure/Sylius/Resource/BoardGameResource.php
#[Resource(
    alias: 'app.board_game',
    section: 'admin',
    formType: BoardGameType::class,
    templatesDir: 'crud',
    routePrefix: '/admin',
)]
#[Create(/*...*/)]
#[Update(/*...*/)]
#[Index(/*...*/)]
#[Show(/*...*/)]
#[Delete(/*...*/)]
final class BoardGameResource implements ResourceInterface
\`\`\`

</v-clicks>`,frontmatter:{srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/03_hexa.md"},index:50,start:63,end:91,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/03_hexa.md",raw:`
# Architecture hexagonale

<v-clicks>

Resource

\`\`\`php {all|9|10|11|12|13}
// src/BoardGameBlog/Infrastructure/Sylius/Resource/BoardGameResource.php
#[Resource(
    alias: 'app.board_game',
    section: 'admin',
    formType: BoardGameType::class,
    templatesDir: 'crud',
    routePrefix: '/admin',
)]
#[Create(/*...*/)]
#[Update(/*...*/)]
#[Index(/*...*/)]
#[Show(/*...*/)]
#[Delete(/*...*/)]
final class BoardGameResource implements ResourceInterface
\`\`\`

</v-clicks>


`,title:"Architecture hexagonale",level:1,content:`# Architecture hexagonale

<v-clicks>

Resource

\`\`\`php {all|9|10|11|12|13}
// src/BoardGameBlog/Infrastructure/Sylius/Resource/BoardGameResource.php
#[Resource(
    alias: 'app.board_game',
    section: 'admin',
    formType: BoardGameType::class,
    templatesDir: 'crud',
    routePrefix: '/admin',
)]
#[Create(/*...*/)]
#[Update(/*...*/)]
#[Index(/*...*/)]
#[Show(/*...*/)]
#[Delete(/*...*/)]
final class BoardGameResource implements ResourceInterface
\`\`\`

</v-clicks>`,frontmatter:{},index:2,start:63,end:91},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/03_hexa.md",noteHTML:"",id:50,no:51},__clicksElements:[],__preloaded:!1}},{path:"52",name:"page-52",component:zv,meta:{transition:"fade",title:"Différences",srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/04_before.md",slide:{raw:`---
transition: fade
---

# Différences

<v-clicks>

Précédente implémentation

* ResourceController avec des actions
  * showAction
  * indexAction
  * createAction
  * updateAction
  * deleteAction
  * bulkDeleteAction
  * applyStateMachineTransitionAction

**582 lignes de code 😯**

**2808 lignes de tests pour un même service 😱**

</v-clicks>
`,title:"Différences",level:1,content:`# Différences

<v-clicks>

Précédente implémentation

* ResourceController avec des actions
  * showAction
  * indexAction
  * createAction
  * updateAction
  * deleteAction
  * bulkDeleteAction
  * applyStateMachineTransitionAction

**582 lignes de code 😯**

**2808 lignes de tests pour un même service 😱**

</v-clicks>`,frontmatter:{transition:"fade",title:"Différences",srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/04_before.md"},index:51,start:0,end:25,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/04_before.md",raw:`---
transition: fade
---

# Différences

<v-clicks>

Précédente implémentation

* ResourceController avec des actions
  * showAction
  * indexAction
  * createAction
  * updateAction
  * deleteAction
  * bulkDeleteAction
  * applyStateMachineTransitionAction

**582 lignes de code 😯**

**2808 lignes de tests pour un même service 😱**

</v-clicks>
`,title:"Différences",level:1,content:`# Différences

<v-clicks>

Précédente implémentation

* ResourceController avec des actions
  * showAction
  * indexAction
  * createAction
  * updateAction
  * deleteAction
  * bulkDeleteAction
  * applyStateMachineTransitionAction

**582 lignes de code 😯**

**2808 lignes de tests pour un même service 😱**

</v-clicks>`,frontmatter:{transition:"fade",title:"Différences"},index:0,start:0,end:25},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/04_before.md",noteHTML:"",id:51,no:52},__clicksElements:[],__preloaded:!1}},{path:"53",name:"page-53",component:Qv,meta:{srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/04_before.md",slide:{raw:`
\`\`\`php {all|4|6|7|9-13|15-22|24}
// vendor/sylius/resource-bundle/src/Bundle/Controller/ResourceController.php
public function showAction(Request $request): Response
{
    $configuration = $this->requestConfigurationFactory->create($this->metadata, $request);

    $this->isGrantedOr403($configuration, ResourceActions::SHOW);
    $resource = $this->findOr404($configuration);

    $event = $this->eventDispatcher->dispatch(ResourceActions::SHOW, $configuration, $resource);
    $eventResponse = $event->getResponse();
    if (null !== $eventResponse) {
        return $eventResponse;
    }

    if ($configuration->isHtmlRequest()) {
        return $this->render($configuration->getTemplate(ResourceActions::SHOW . '.html'), [
            'configuration' => $configuration,
            'metadata' => $this->metadata,
            'resource' => $resource,
            $this->metadata->getName() => $resource,
        ]);
    }

    return $this->createRestView($configuration, $resource);
}
\`\`\`
`,content:`\`\`\`php {all|4|6|7|9-13|15-22|24}
// vendor/sylius/resource-bundle/src/Bundle/Controller/ResourceController.php
public function showAction(Request $request): Response
{
    $configuration = $this->requestConfigurationFactory->create($this->metadata, $request);

    $this->isGrantedOr403($configuration, ResourceActions::SHOW);
    $resource = $this->findOr404($configuration);

    $event = $this->eventDispatcher->dispatch(ResourceActions::SHOW, $configuration, $resource);
    $eventResponse = $event->getResponse();
    if (null !== $eventResponse) {
        return $eventResponse;
    }

    if ($configuration->isHtmlRequest()) {
        return $this->render($configuration->getTemplate(ResourceActions::SHOW . '.html'), [
            'configuration' => $configuration,
            'metadata' => $this->metadata,
            'resource' => $resource,
            $this->metadata->getName() => $resource,
        ]);
    }

    return $this->createRestView($configuration, $resource);
}
\`\`\``,frontmatter:{srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/04_before.md"},index:52,start:26,end:55,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/04_before.md",raw:`
\`\`\`php {all|4|6|7|9-13|15-22|24}
// vendor/sylius/resource-bundle/src/Bundle/Controller/ResourceController.php
public function showAction(Request $request): Response
{
    $configuration = $this->requestConfigurationFactory->create($this->metadata, $request);

    $this->isGrantedOr403($configuration, ResourceActions::SHOW);
    $resource = $this->findOr404($configuration);

    $event = $this->eventDispatcher->dispatch(ResourceActions::SHOW, $configuration, $resource);
    $eventResponse = $event->getResponse();
    if (null !== $eventResponse) {
        return $eventResponse;
    }

    if ($configuration->isHtmlRequest()) {
        return $this->render($configuration->getTemplate(ResourceActions::SHOW . '.html'), [
            'configuration' => $configuration,
            'metadata' => $this->metadata,
            'resource' => $resource,
            $this->metadata->getName() => $resource,
        ]);
    }

    return $this->createRestView($configuration, $resource);
}
\`\`\`
`,content:`\`\`\`php {all|4|6|7|9-13|15-22|24}
// vendor/sylius/resource-bundle/src/Bundle/Controller/ResourceController.php
public function showAction(Request $request): Response
{
    $configuration = $this->requestConfigurationFactory->create($this->metadata, $request);

    $this->isGrantedOr403($configuration, ResourceActions::SHOW);
    $resource = $this->findOr404($configuration);

    $event = $this->eventDispatcher->dispatch(ResourceActions::SHOW, $configuration, $resource);
    $eventResponse = $event->getResponse();
    if (null !== $eventResponse) {
        return $eventResponse;
    }

    if ($configuration->isHtmlRequest()) {
        return $this->render($configuration->getTemplate(ResourceActions::SHOW . '.html'), [
            'configuration' => $configuration,
            'metadata' => $this->metadata,
            'resource' => $resource,
            $this->metadata->getName() => $resource,
        ]);
    }

    return $this->createRestView($configuration, $resource);
}
\`\`\``,frontmatter:{},index:1,start:26,end:55},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/04_before.md",noteHTML:"",id:52,no:53},__clicksElements:[],__preloaded:!1}},{path:"54",name:"page-54",component:oD,meta:{title:"Différences",srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/05_after.md",slide:{raw:`# Différences

<v-clicks>

Nouvelle implémentation

PlaceHolderAction avec... 

une seule action ! ❤️

</v-clicks>
`,title:"Différences",level:1,content:`# Différences

<v-clicks>

Nouvelle implémentation

PlaceHolderAction avec... 

une seule action ! ❤️

</v-clicks>`,frontmatter:{title:"Différences",srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/05_after.md"},index:53,start:0,end:12,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/05_after.md",raw:`# Différences

<v-clicks>

Nouvelle implémentation

PlaceHolderAction avec... 

une seule action ! ❤️

</v-clicks>
`,title:"Différences",level:1,content:`# Différences

<v-clicks>

Nouvelle implémentation

PlaceHolderAction avec... 

une seule action ! ❤️

</v-clicks>`,frontmatter:{title:"Différences"},index:0,start:0,end:12},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/05_after.md",noteHTML:"",id:53,no:54},__clicksElements:[],__preloaded:!1}},{path:"55",name:"page-55",component:rD,meta:{srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/05_after.md",slide:{raw:`
\`\`\`php {all|9|11}

namespace Sylius\\Component\\Resource\\Action;

final class PlaceHolderAction
{
    /**
     * @param mixed $data
     */
    public function __invoke($data = null): mixed
    {
        return $data;
    }
}

\`\`\`
`,content:`\`\`\`php {all|9|11}

namespace Sylius\\Component\\Resource\\Action;

final class PlaceHolderAction
{
    /**
     * @param mixed $data
     */
    public function __invoke($data = null): mixed
    {
        return $data;
    }
}

\`\`\``,frontmatter:{srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/05_after.md"},index:54,start:13,end:31,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/05_after.md",raw:`
\`\`\`php {all|9|11}

namespace Sylius\\Component\\Resource\\Action;

final class PlaceHolderAction
{
    /**
     * @param mixed $data
     */
    public function __invoke($data = null): mixed
    {
        return $data;
    }
}

\`\`\`
`,content:`\`\`\`php {all|9|11}

namespace Sylius\\Component\\Resource\\Action;

final class PlaceHolderAction
{
    /**
     * @param mixed $data
     */
    public function __invoke($data = null): mixed
    {
        return $data;
    }
}

\`\`\``,frontmatter:{},index:1,start:13,end:31},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/05_after.md",noteHTML:"",id:54,no:55},__clicksElements:[],__preloaded:!1}},{path:"56",name:"page-56",component:cD,meta:{layout:"image",image:"/fake_end.png",srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/05_after.md",slide:{raw:`---
layout: image
image: /fake_end.png
---
`,content:"",frontmatter:{layout:"image",image:"/fake_end.png",srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/05_after.md"},index:55,start:31,end:36,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/05_after.md",raw:`---
layout: image
image: /fake_end.png
---
`,content:"",frontmatter:{layout:"image",image:"/fake_end.png"},index:2,start:31,end:36},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/05_after.md",noteHTML:"",id:55,no:56},__clicksElements:[],__preloaded:!1}},{path:"57",name:"page-57",component:uD,meta:{transition:"fade",srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/05_after.md",slide:{raw:`---
transition: fade
---

# Kernel request events

`,title:"Kernel request events",level:1,content:"# Kernel request events",frontmatter:{transition:"fade",srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/05_after.md"},index:56,start:36,end:43,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/05_after.md",raw:`---
transition: fade
---

# Kernel request events

`,title:"Kernel request events",level:1,content:"# Kernel request events",frontmatter:{transition:"fade"},index:3,start:36,end:43},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/05_after.md",noteHTML:"",id:56,no:57},__clicksElements:[],__preloaded:!1}},{path:"58",name:"page-58",component:mD,meta:{transition:"fade",srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/05_after.md",slide:{raw:`---
transition: fade
---

# Kernel request events

| Name              | Event          | Description                                                  |                 
|-------------------|----------------|--------------------------------------------------------------|
| AddFormatListener | kernel.request | Devine le meilleure format de réponse (content-negociation). |
`,title:"Kernel request events",level:1,content:`# Kernel request events

| Name              | Event          | Description                                                  |                 
|-------------------|----------------|--------------------------------------------------------------|
| AddFormatListener | kernel.request | Devine le meilleure format de réponse (content-negociation). |`,frontmatter:{transition:"fade",srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/05_after.md"},index:57,start:43,end:53,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/05_after.md",raw:`---
transition: fade
---

# Kernel request events

| Name              | Event          | Description                                                  |                 
|-------------------|----------------|--------------------------------------------------------------|
| AddFormatListener | kernel.request | Devine le meilleure format de réponse (content-negociation). |
`,title:"Kernel request events",level:1,content:`# Kernel request events

| Name              | Event          | Description                                                  |                 
|-------------------|----------------|--------------------------------------------------------------|
| AddFormatListener | kernel.request | Devine le meilleure format de réponse (content-negociation). |`,frontmatter:{transition:"fade"},index:4,start:43,end:53},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/05_after.md",noteHTML:"",id:57,no:58},__clicksElements:[],__preloaded:!1}},{path:"59",name:"page-59",component:gD,meta:{transition:"fade",srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/05_after.md",slide:{raw:`---
transition: fade
---

# Kernel request events

| Name              | Event          | Description                                                  |                 
|-------------------|----------------|--------------------------------------------------------------|
| AddFormatListener | kernel.request | Devine le meilleure format de réponse (content-negociation). |
| ReadListener      | kernel.request | Récupère les données en utilisant les states providers.      |
`,title:"Kernel request events",level:1,content:`# Kernel request events

| Name              | Event          | Description                                                  |                 
|-------------------|----------------|--------------------------------------------------------------|
| AddFormatListener | kernel.request | Devine le meilleure format de réponse (content-negociation). |
| ReadListener      | kernel.request | Récupère les données en utilisant les states providers.      |`,frontmatter:{transition:"fade",srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/05_after.md"},index:58,start:53,end:64,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/05_after.md",raw:`---
transition: fade
---

# Kernel request events

| Name              | Event          | Description                                                  |                 
|-------------------|----------------|--------------------------------------------------------------|
| AddFormatListener | kernel.request | Devine le meilleure format de réponse (content-negociation). |
| ReadListener      | kernel.request | Récupère les données en utilisant les states providers.      |
`,title:"Kernel request events",level:1,content:`# Kernel request events

| Name              | Event          | Description                                                  |                 
|-------------------|----------------|--------------------------------------------------------------|
| AddFormatListener | kernel.request | Devine le meilleure format de réponse (content-negociation). |
| ReadListener      | kernel.request | Récupère les données en utilisant les states providers.      |`,frontmatter:{transition:"fade"},index:5,start:53,end:64},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/05_after.md",noteHTML:"",id:58,no:59},__clicksElements:[],__preloaded:!1}},{path:"60",name:"page-60",component:DD,meta:{transition:"fade",srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/05_after.md",slide:{raw:`---
transition: fade
---

# Kernel request events

| Name              | Event          | Description                                                  |                 
|-------------------|----------------|--------------------------------------------------------------|
| AddFormatListener | kernel.request | Devine le meilleure format de réponse (content-negociation). |
| ReadListener      | kernel.request | Récupère les données en utilisant les states providers.      |
| FactoryListener   | kernel.request | Instancie la resource en utilisant la resource factory.      |
`,title:"Kernel request events",level:1,content:`# Kernel request events

| Name              | Event          | Description                                                  |                 
|-------------------|----------------|--------------------------------------------------------------|
| AddFormatListener | kernel.request | Devine le meilleure format de réponse (content-negociation). |
| ReadListener      | kernel.request | Récupère les données en utilisant les states providers.      |
| FactoryListener   | kernel.request | Instancie la resource en utilisant la resource factory.      |`,frontmatter:{transition:"fade",srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/05_after.md"},index:59,start:64,end:76,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/05_after.md",raw:`---
transition: fade
---

# Kernel request events

| Name              | Event          | Description                                                  |                 
|-------------------|----------------|--------------------------------------------------------------|
| AddFormatListener | kernel.request | Devine le meilleure format de réponse (content-negociation). |
| ReadListener      | kernel.request | Récupère les données en utilisant les states providers.      |
| FactoryListener   | kernel.request | Instancie la resource en utilisant la resource factory.      |
`,title:"Kernel request events",level:1,content:`# Kernel request events

| Name              | Event          | Description                                                  |                 
|-------------------|----------------|--------------------------------------------------------------|
| AddFormatListener | kernel.request | Devine le meilleure format de réponse (content-negociation). |
| ReadListener      | kernel.request | Récupère les données en utilisant les states providers.      |
| FactoryListener   | kernel.request | Instancie la resource en utilisant la resource factory.      |`,frontmatter:{transition:"fade"},index:6,start:64,end:76},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/05_after.md",noteHTML:"",id:59,no:60},__clicksElements:[],__preloaded:!1}},{path:"61",name:"page-61",component:ED,meta:{srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/05_after.md",slide:{raw:`
# Kernel request events

| Name                | Event          | Description                                                  |                 
|---------------------|----------------|--------------------------------------------------------------|
| AddFormatListener   | kernel.request | Devine le meilleure format de réponse (content-negociation). |
| ReadListener        | kernel.request | Récupère les données en utilisant les states providers.      |
| FactoryListener     | kernel.request | Instancie la resource en utilisant la resource factory.      |
| DeserializeListener | kernel.request | Désérialise les données dans un objet PHP.                   |
`,title:"Kernel request events",level:1,content:`# Kernel request events

| Name                | Event          | Description                                                  |                 
|---------------------|----------------|--------------------------------------------------------------|
| AddFormatListener   | kernel.request | Devine le meilleure format de réponse (content-negociation). |
| ReadListener        | kernel.request | Récupère les données en utilisant les states providers.      |
| FactoryListener     | kernel.request | Instancie la resource en utilisant la resource factory.      |
| DeserializeListener | kernel.request | Désérialise les données dans un objet PHP.                   |`,frontmatter:{srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/05_after.md"},index:60,start:77,end:87,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/05_after.md",raw:`
# Kernel request events

| Name                | Event          | Description                                                  |                 
|---------------------|----------------|--------------------------------------------------------------|
| AddFormatListener   | kernel.request | Devine le meilleure format de réponse (content-negociation). |
| ReadListener        | kernel.request | Récupère les données en utilisant les states providers.      |
| FactoryListener     | kernel.request | Instancie la resource en utilisant la resource factory.      |
| DeserializeListener | kernel.request | Désérialise les données dans un objet PHP.                   |
`,title:"Kernel request events",level:1,content:`# Kernel request events

| Name                | Event          | Description                                                  |                 
|---------------------|----------------|--------------------------------------------------------------|
| AddFormatListener   | kernel.request | Devine le meilleure format de réponse (content-negociation). |
| ReadListener        | kernel.request | Récupère les données en utilisant les states providers.      |
| FactoryListener     | kernel.request | Instancie la resource en utilisant la resource factory.      |
| DeserializeListener | kernel.request | Désérialise les données dans un objet PHP.                   |`,frontmatter:{},index:7,start:77,end:87},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/05_after.md",noteHTML:"",id:60,no:61},__clicksElements:[],__preloaded:!1}},{path:"62",name:"page-62",component:FD,meta:{transition:"fade",srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/05_after.md",slide:{raw:`---
transition: fade
---

# Kernel view events
`,title:"Kernel view events",level:1,content:"# Kernel view events",frontmatter:{transition:"fade",srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/05_after.md"},index:61,start:87,end:93,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/05_after.md",raw:`---
transition: fade
---

# Kernel view events
`,title:"Kernel view events",level:1,content:"# Kernel view events",frontmatter:{transition:"fade"},index:8,start:87,end:93},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/05_after.md",noteHTML:"",id:61,no:62},__clicksElements:[],__preloaded:!1}},{path:"63",name:"page-63",component:PD,meta:{transition:"fade",srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/05_after.md",slide:{raw:`---
transition: fade
---

# Kernel view events

| Name              | Event       | Description                                          |                 
|-------------------|-------------|------------------------------------------------------|
| FormListener      | kernel.view | Initialise et soumet le formulaire (si format HTML). |
`,title:"Kernel view events",level:1,content:`# Kernel view events

| Name              | Event       | Description                                          |                 
|-------------------|-------------|------------------------------------------------------|
| FormListener      | kernel.view | Initialise et soumet le formulaire (si format HTML). |`,frontmatter:{transition:"fade",srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/05_after.md"},index:62,start:93,end:103,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/05_after.md",raw:`---
transition: fade
---

# Kernel view events

| Name              | Event       | Description                                          |                 
|-------------------|-------------|------------------------------------------------------|
| FormListener      | kernel.view | Initialise et soumet le formulaire (si format HTML). |
`,title:"Kernel view events",level:1,content:`# Kernel view events

| Name              | Event       | Description                                          |                 
|-------------------|-------------|------------------------------------------------------|
| FormListener      | kernel.view | Initialise et soumet le formulaire (si format HTML). |`,frontmatter:{transition:"fade"},index:9,start:93,end:103},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/05_after.md",noteHTML:"",id:62,no:63},__clicksElements:[],__preloaded:!1}},{path:"64",name:"page-64",component:MD,meta:{transition:"fade",srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/05_after.md",slide:{raw:`---
transition: fade
---

# Kernel view events

| Name              | Event       | Description                                             |                 
|-------------------|-------------|---------------------------------------------------------|
| FormListener      | kernel.view | Initialise et soumet le formulaire (si format HTML).    |
| ValidateListener  | kernel.view | Valide les donnés en utilisant les validateurs Symfony. |
`,title:"Kernel view events",level:1,content:`# Kernel view events

| Name              | Event       | Description                                             |                 
|-------------------|-------------|---------------------------------------------------------|
| FormListener      | kernel.view | Initialise et soumet le formulaire (si format HTML).    |
| ValidateListener  | kernel.view | Valide les donnés en utilisant les validateurs Symfony. |`,frontmatter:{transition:"fade",srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/05_after.md"},index:63,start:103,end:114,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/05_after.md",raw:`---
transition: fade
---

# Kernel view events

| Name              | Event       | Description                                             |                 
|-------------------|-------------|---------------------------------------------------------|
| FormListener      | kernel.view | Initialise et soumet le formulaire (si format HTML).    |
| ValidateListener  | kernel.view | Valide les donnés en utilisant les validateurs Symfony. |
`,title:"Kernel view events",level:1,content:`# Kernel view events

| Name              | Event       | Description                                             |                 
|-------------------|-------------|---------------------------------------------------------|
| FormListener      | kernel.view | Initialise et soumet le formulaire (si format HTML).    |
| ValidateListener  | kernel.view | Valide les donnés en utilisant les validateurs Symfony. |`,frontmatter:{transition:"fade"},index:10,start:103,end:114},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/05_after.md",noteHTML:"",id:63,no:64},__clicksElements:[],__preloaded:!1}},{path:"65",name:"page-65",component:HD,meta:{transition:"fade",srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/05_after.md",slide:{raw:`---
transition: fade
---

# Kernel view events

| Name             | Event       | Description                                                  |                 
|------------------|-------------|--------------------------------------------------------------|
| FormListener     | kernel.view | Initialise et soumet le formulaire (si format HTML).         |
| ValidateListener | kernel.view | Valide les donnés en utilisant les validateurs Symfony.      |
| WriteListener    | kernel.view | Persiste les changements en utilisant les states processors. |
`,title:"Kernel view events",level:1,content:`# Kernel view events

| Name             | Event       | Description                                                  |                 
|------------------|-------------|--------------------------------------------------------------|
| FormListener     | kernel.view | Initialise et soumet le formulaire (si format HTML).         |
| ValidateListener | kernel.view | Valide les donnés en utilisant les validateurs Symfony.      |
| WriteListener    | kernel.view | Persiste les changements en utilisant les states processors. |`,frontmatter:{transition:"fade",srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/05_after.md"},index:64,start:114,end:126,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/05_after.md",raw:`---
transition: fade
---

# Kernel view events

| Name             | Event       | Description                                                  |                 
|------------------|-------------|--------------------------------------------------------------|
| FormListener     | kernel.view | Initialise et soumet le formulaire (si format HTML).         |
| ValidateListener | kernel.view | Valide les donnés en utilisant les validateurs Symfony.      |
| WriteListener    | kernel.view | Persiste les changements en utilisant les states processors. |
`,title:"Kernel view events",level:1,content:`# Kernel view events

| Name             | Event       | Description                                                  |                 
|------------------|-------------|--------------------------------------------------------------|
| FormListener     | kernel.view | Initialise et soumet le formulaire (si format HTML).         |
| ValidateListener | kernel.view | Valide les donnés en utilisant les validateurs Symfony.      |
| WriteListener    | kernel.view | Persiste les changements en utilisant les states processors. |`,frontmatter:{transition:"fade"},index:11,start:114,end:126},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/05_after.md",noteHTML:"",id:64,no:65},__clicksElements:[],__preloaded:!1}},{path:"66",name:"page-66",component:WD,meta:{transition:"fade",srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/05_after.md",slide:{raw:`---
transition: fade
---

# Kernel view events

| Name              | Event       | Description                                                  |                 
|-------------------|-------------|--------------------------------------------------------------|
| FormListener      | kernel.view | Initialise et soumet le formulaire (si format HTML).         |
| ValidateListener  | kernel.view | Valide les donnés en utilisant les validateurs Symfony.      |
| WriteListener     | kernel.view | Persiste les changements en utilisant les states processors. |
| SerializeListener | kernel.view | Sérialise l'objet PHP en string.                             |
`,title:"Kernel view events",level:1,content:`# Kernel view events

| Name              | Event       | Description                                                  |                 
|-------------------|-------------|--------------------------------------------------------------|
| FormListener      | kernel.view | Initialise et soumet le formulaire (si format HTML).         |
| ValidateListener  | kernel.view | Valide les donnés en utilisant les validateurs Symfony.      |
| WriteListener     | kernel.view | Persiste les changements en utilisant les states processors. |
| SerializeListener | kernel.view | Sérialise l'objet PHP en string.                             |`,frontmatter:{transition:"fade",srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/05_after.md"},index:65,start:126,end:139,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/05_after.md",raw:`---
transition: fade
---

# Kernel view events

| Name              | Event       | Description                                                  |                 
|-------------------|-------------|--------------------------------------------------------------|
| FormListener      | kernel.view | Initialise et soumet le formulaire (si format HTML).         |
| ValidateListener  | kernel.view | Valide les donnés en utilisant les validateurs Symfony.      |
| WriteListener     | kernel.view | Persiste les changements en utilisant les states processors. |
| SerializeListener | kernel.view | Sérialise l'objet PHP en string.                             |
`,title:"Kernel view events",level:1,content:`# Kernel view events

| Name              | Event       | Description                                                  |                 
|-------------------|-------------|--------------------------------------------------------------|
| FormListener      | kernel.view | Initialise et soumet le formulaire (si format HTML).         |
| ValidateListener  | kernel.view | Valide les donnés en utilisant les validateurs Symfony.      |
| WriteListener     | kernel.view | Persiste les changements en utilisant les states processors. |
| SerializeListener | kernel.view | Sérialise l'objet PHP en string.                             |`,frontmatter:{transition:"fade"},index:12,start:126,end:139},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/05_after.md",noteHTML:"",id:65,no:66},__clicksElements:[],__preloaded:!1}},{path:"67",name:"page-67",component:ZD,meta:{srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/05_after.md",slide:{raw:`
# Kernel view events

| Name              | Event       | Description                                                  |                 
|-------------------|-------------|--------------------------------------------------------------|
| FormListener      | kernel.view | Initialise et soumet le formulaire (si format HTML).         |
| ValidateListener  | kernel.view | Valide les donnés en utilisant les validateurs Symfony.      |
| WriteListener     | kernel.view | Persiste les changements en utilisant les states processors. |
| SerializeListener | kernel.view | Sérialise l'objet PHP en string.                             |
| RespondListener   | kernel.view | Transforme les données en une réponse Symfony.               |

`,title:"Kernel view events",level:1,content:`# Kernel view events

| Name              | Event       | Description                                                  |                 
|-------------------|-------------|--------------------------------------------------------------|
| FormListener      | kernel.view | Initialise et soumet le formulaire (si format HTML).         |
| ValidateListener  | kernel.view | Valide les donnés en utilisant les validateurs Symfony.      |
| WriteListener     | kernel.view | Persiste les changements en utilisant les states processors. |
| SerializeListener | kernel.view | Sérialise l'objet PHP en string.                             |
| RespondListener   | kernel.view | Transforme les données en une réponse Symfony.               |`,frontmatter:{srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/05_after.md"},index:66,start:140,end:152,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/05_after.md",raw:`
# Kernel view events

| Name              | Event       | Description                                                  |                 
|-------------------|-------------|--------------------------------------------------------------|
| FormListener      | kernel.view | Initialise et soumet le formulaire (si format HTML).         |
| ValidateListener  | kernel.view | Valide les donnés en utilisant les validateurs Symfony.      |
| WriteListener     | kernel.view | Persiste les changements en utilisant les states processors. |
| SerializeListener | kernel.view | Sérialise l'objet PHP en string.                             |
| RespondListener   | kernel.view | Transforme les données en une réponse Symfony.               |

`,title:"Kernel view events",level:1,content:`# Kernel view events

| Name              | Event       | Description                                                  |                 
|-------------------|-------------|--------------------------------------------------------------|
| FormListener      | kernel.view | Initialise et soumet le formulaire (si format HTML).         |
| ValidateListener  | kernel.view | Valide les donnés en utilisant les validateurs Symfony.      |
| WriteListener     | kernel.view | Persiste les changements en utilisant les states processors. |
| SerializeListener | kernel.view | Sérialise l'objet PHP en string.                             |
| RespondListener   | kernel.view | Transforme les données en une réponse Symfony.               |`,frontmatter:{},index:13,start:140,end:152},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/05_after.md",noteHTML:"",id:66,no:67},__clicksElements:[],__preloaded:!1}},{path:"68",name:"page-68",component:sb,meta:{title:"State provider",srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/06_provider.md",slide:{raw:`---

# State provider

<v-clicks>

\`\`\`php
/**
 * Retrieves data from a persistence layer.
 *
 * @experimental
 */
interface ProviderInterface
{
    public function provide(Operation $operation, Context $context): object|iterable|null;
}
\`\`\`

* Operation *(Create, Show, Index, Update, Delete, BulkDelete...)*
* Context: ArrayObject *(contenant des options : "RequestOption" qui contient la request)*

</v-clicks>
`,title:"State provider",level:1,content:`---

# State provider

<v-clicks>

\`\`\`php
/**
 * Retrieves data from a persistence layer.
 *
 * @experimental
 */
interface ProviderInterface
{
    public function provide(Operation $operation, Context $context): object|iterable|null;
}
\`\`\`

* Operation *(Create, Show, Index, Update, Delete, BulkDelete...)*
* Context: ArrayObject *(contenant des options : "RequestOption" qui contient la request)*

</v-clicks>`,frontmatter:{title:"State provider",srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/06_provider.md"},index:67,start:0,end:23,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/06_provider.md",raw:`---

# State provider

<v-clicks>

\`\`\`php
/**
 * Retrieves data from a persistence layer.
 *
 * @experimental
 */
interface ProviderInterface
{
    public function provide(Operation $operation, Context $context): object|iterable|null;
}
\`\`\`

* Operation *(Create, Show, Index, Update, Delete, BulkDelete...)*
* Context: ArrayObject *(contenant des options : "RequestOption" qui contient la request)*

</v-clicks>
`,title:"State provider",level:1,content:`---

# State provider

<v-clicks>

\`\`\`php
/**
 * Retrieves data from a persistence layer.
 *
 * @experimental
 */
interface ProviderInterface
{
    public function provide(Operation $operation, Context $context): object|iterable|null;
}
\`\`\`

* Operation *(Create, Show, Index, Update, Delete, BulkDelete...)*
* Context: ArrayObject *(contenant des options : "RequestOption" qui contient la request)*

</v-clicks>`,frontmatter:{title:"State provider"},index:0,start:0,end:23},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/06_provider.md",noteHTML:"",id:67,no:68},__clicksElements:[],__preloaded:!1}},{path:"69",name:"page-69",component:lb,meta:{srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/06_provider.md",slide:{raw:`
\`\`\`php {all|11}
// src/BoardGameBlog/Infrastructure/Sylius/Resource/BoardGameResource.php
#[Resource(
    alias: 'app.board_game',
    section: 'admin',
    formType: BoardGameType::class,
    templatesDir: 'crud',
    routePrefix: '/admin',
)]
#[Show(
    template: 'board_game/show.html.twig',
    provider: BoardGameItemProvider::class,
)]
final class BoardGameResource implements ResourceInterface
\`\`\`
`,content:`\`\`\`php {all|11}
// src/BoardGameBlog/Infrastructure/Sylius/Resource/BoardGameResource.php
#[Resource(
    alias: 'app.board_game',
    section: 'admin',
    formType: BoardGameType::class,
    templatesDir: 'crud',
    routePrefix: '/admin',
)]
#[Show(
    template: 'board_game/show.html.twig',
    provider: BoardGameItemProvider::class,
)]
final class BoardGameResource implements ResourceInterface
\`\`\``,frontmatter:{srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/06_provider.md"},index:68,start:24,end:41,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/06_provider.md",raw:`
\`\`\`php {all|11}
// src/BoardGameBlog/Infrastructure/Sylius/Resource/BoardGameResource.php
#[Resource(
    alias: 'app.board_game',
    section: 'admin',
    formType: BoardGameType::class,
    templatesDir: 'crud',
    routePrefix: '/admin',
)]
#[Show(
    template: 'board_game/show.html.twig',
    provider: BoardGameItemProvider::class,
)]
final class BoardGameResource implements ResourceInterface
\`\`\`
`,content:`\`\`\`php {all|11}
// src/BoardGameBlog/Infrastructure/Sylius/Resource/BoardGameResource.php
#[Resource(
    alias: 'app.board_game',
    section: 'admin',
    formType: BoardGameType::class,
    templatesDir: 'crud',
    routePrefix: '/admin',
)]
#[Show(
    template: 'board_game/show.html.twig',
    provider: BoardGameItemProvider::class,
)]
final class BoardGameResource implements ResourceInterface
\`\`\``,frontmatter:{},index:1,start:24,end:41},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/06_provider.md",noteHTML:"",id:68,no:69},__clicksElements:[],__preloaded:!1}},{path:"70",name:"page-70",component:cb,meta:{srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/06_provider.md",slide:{raw:`
\`\`\`php {all|11-12|14|16|18}
// src/BoardGameBlog/Infrastructure/Sylius/State/Http/Provider/BoardGameItemProvider.php
final class BoardGameItemProvider implements ProviderInterface
{
    public function __construct(
        private QueryBusInterface $queryBus,
    ) {
    }

    public function provide(Operation $operation, Context $context): object|iterable|null
    {
        $request = $context->get(RequestOption::class)?->request();
        Assert::notNull($request);

        $id = (string) $request->attributes->get('id');

        $model = $this->queryBus->ask(new FindBoardGameQuery(new BoardGameId(Uuid::fromString($id))));

        return null !== $model ? BoardGameResource::fromModel($model) : null;
    }
}
\`\`\`
`,content:`\`\`\`php {all|11-12|14|16|18}
// src/BoardGameBlog/Infrastructure/Sylius/State/Http/Provider/BoardGameItemProvider.php
final class BoardGameItemProvider implements ProviderInterface
{
    public function __construct(
        private QueryBusInterface $queryBus,
    ) {
    }

    public function provide(Operation $operation, Context $context): object|iterable|null
    {
        $request = $context->get(RequestOption::class)?->request();
        Assert::notNull($request);

        $id = (string) $request->attributes->get('id');

        $model = $this->queryBus->ask(new FindBoardGameQuery(new BoardGameId(Uuid::fromString($id))));

        return null !== $model ? BoardGameResource::fromModel($model) : null;
    }
}
\`\`\``,frontmatter:{srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/06_provider.md"},index:69,start:42,end:66,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/06_provider.md",raw:`
\`\`\`php {all|11-12|14|16|18}
// src/BoardGameBlog/Infrastructure/Sylius/State/Http/Provider/BoardGameItemProvider.php
final class BoardGameItemProvider implements ProviderInterface
{
    public function __construct(
        private QueryBusInterface $queryBus,
    ) {
    }

    public function provide(Operation $operation, Context $context): object|iterable|null
    {
        $request = $context->get(RequestOption::class)?->request();
        Assert::notNull($request);

        $id = (string) $request->attributes->get('id');

        $model = $this->queryBus->ask(new FindBoardGameQuery(new BoardGameId(Uuid::fromString($id))));

        return null !== $model ? BoardGameResource::fromModel($model) : null;
    }
}
\`\`\`
`,content:`\`\`\`php {all|11-12|14|16|18}
// src/BoardGameBlog/Infrastructure/Sylius/State/Http/Provider/BoardGameItemProvider.php
final class BoardGameItemProvider implements ProviderInterface
{
    public function __construct(
        private QueryBusInterface $queryBus,
    ) {
    }

    public function provide(Operation $operation, Context $context): object|iterable|null
    {
        $request = $context->get(RequestOption::class)?->request();
        Assert::notNull($request);

        $id = (string) $request->attributes->get('id');

        $model = $this->queryBus->ask(new FindBoardGameQuery(new BoardGameId(Uuid::fromString($id))));

        return null !== $model ? BoardGameResource::fromModel($model) : null;
    }
}
\`\`\``,frontmatter:{},index:2,start:42,end:66},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/06_provider.md",noteHTML:"",id:69,no:70},__clicksElements:[],__preloaded:!1}},{path:"71",name:"page-71",component:yb,meta:{title:"State processor",srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/07_processor.md",slide:{raw:`---

# State processor

\`\`\`php {all|11}
/**
 * Process data: send an email, persist to storage, add to queue etc.
 *
 * @experimental
 */
interface ProcessorInterface
{
    /**
     * Handle the state.
     */
    public function process(mixed $data, Operation $operation, Context $context): mixed;
}

\`\`\`
`,title:"State processor",level:1,content:`---

# State processor

\`\`\`php {all|11}
/**
 * Process data: send an email, persist to storage, add to queue etc.
 *
 * @experimental
 */
interface ProcessorInterface
{
    /**
     * Handle the state.
     */
    public function process(mixed $data, Operation $operation, Context $context): mixed;
}

\`\`\``,frontmatter:{title:"State processor",srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/07_processor.md"},index:70,start:0,end:20,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/07_processor.md",raw:`---

# State processor

\`\`\`php {all|11}
/**
 * Process data: send an email, persist to storage, add to queue etc.
 *
 * @experimental
 */
interface ProcessorInterface
{
    /**
     * Handle the state.
     */
    public function process(mixed $data, Operation $operation, Context $context): mixed;
}

\`\`\`
`,title:"State processor",level:1,content:`---

# State processor

\`\`\`php {all|11}
/**
 * Process data: send an email, persist to storage, add to queue etc.
 *
 * @experimental
 */
interface ProcessorInterface
{
    /**
     * Handle the state.
     */
    public function process(mixed $data, Operation $operation, Context $context): mixed;
}

\`\`\``,frontmatter:{title:"State processor"},index:0,start:0,end:20},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/07_processor.md",noteHTML:"",id:70,no:71},__clicksElements:[],__preloaded:!1}},{path:"72",name:"page-72",component:hb,meta:{srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/07_processor.md",slide:{raw:`
\`\`\`php {all|10|11}
// src/BoardGameBlog/Infrastructure/Sylius/Resource/BoardGameResource.php
#[Resource(
    alias: 'app.board_game',
    section: 'admin',
    formType: BoardGameType::class,
    templatesDir: 'crud',
    routePrefix: '/admin',
)]
#[Delete(
    provider: BoardGameItemProvider::class,
    processor: DeleteBoardGameProcessor::class,
)]
final class BoardGameResource implements ResourceInterface
\`\`\`
`,content:`\`\`\`php {all|10|11}
// src/BoardGameBlog/Infrastructure/Sylius/Resource/BoardGameResource.php
#[Resource(
    alias: 'app.board_game',
    section: 'admin',
    formType: BoardGameType::class,
    templatesDir: 'crud',
    routePrefix: '/admin',
)]
#[Delete(
    provider: BoardGameItemProvider::class,
    processor: DeleteBoardGameProcessor::class,
)]
final class BoardGameResource implements ResourceInterface
\`\`\``,frontmatter:{srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/07_processor.md"},index:71,start:21,end:38,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/07_processor.md",raw:`
\`\`\`php {all|10|11}
// src/BoardGameBlog/Infrastructure/Sylius/Resource/BoardGameResource.php
#[Resource(
    alias: 'app.board_game',
    section: 'admin',
    formType: BoardGameType::class,
    templatesDir: 'crud',
    routePrefix: '/admin',
)]
#[Delete(
    provider: BoardGameItemProvider::class,
    processor: DeleteBoardGameProcessor::class,
)]
final class BoardGameResource implements ResourceInterface
\`\`\`
`,content:`\`\`\`php {all|10|11}
// src/BoardGameBlog/Infrastructure/Sylius/Resource/BoardGameResource.php
#[Resource(
    alias: 'app.board_game',
    section: 'admin',
    formType: BoardGameType::class,
    templatesDir: 'crud',
    routePrefix: '/admin',
)]
#[Delete(
    provider: BoardGameItemProvider::class,
    processor: DeleteBoardGameProcessor::class,
)]
final class BoardGameResource implements ResourceInterface
\`\`\``,frontmatter:{},index:1,start:21,end:38},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/07_processor.md",noteHTML:"",id:71,no:72},__clicksElements:[],__preloaded:!1}},{path:"73",name:"page-73",component:gb,meta:{srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/07_processor.md",slide:{raw:`
\`\`\`php {all|11|13|15}
// src/BoardGameBlog/Infrastructure/Sylius/State/Http/Processor/DeleteBoardGameProcessor.php
final class DeleteBoardGameProcessor implements ProcessorInterface
{
    public function __construct(
        private CommandBusInterface $commandBus,
    ) {
    }

    public function process(mixed $data, Operation $operation, Context $context): mixed
    {
        Assert::isInstanceOf($data, BoardGameResource::class);

        $this->commandBus->dispatch(new DeleteBoardGameCommand(new BoardGameId($data->id)));

        return null;
    }
}
\`\`\`
`,content:`\`\`\`php {all|11|13|15}
// src/BoardGameBlog/Infrastructure/Sylius/State/Http/Processor/DeleteBoardGameProcessor.php
final class DeleteBoardGameProcessor implements ProcessorInterface
{
    public function __construct(
        private CommandBusInterface $commandBus,
    ) {
    }

    public function process(mixed $data, Operation $operation, Context $context): mixed
    {
        Assert::isInstanceOf($data, BoardGameResource::class);

        $this->commandBus->dispatch(new DeleteBoardGameCommand(new BoardGameId($data->id)));

        return null;
    }
}
\`\`\``,frontmatter:{srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/07_processor.md"},index:72,start:39,end:60,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/07_processor.md",raw:`
\`\`\`php {all|11|13|15}
// src/BoardGameBlog/Infrastructure/Sylius/State/Http/Processor/DeleteBoardGameProcessor.php
final class DeleteBoardGameProcessor implements ProcessorInterface
{
    public function __construct(
        private CommandBusInterface $commandBus,
    ) {
    }

    public function process(mixed $data, Operation $operation, Context $context): mixed
    {
        Assert::isInstanceOf($data, BoardGameResource::class);

        $this->commandBus->dispatch(new DeleteBoardGameCommand(new BoardGameId($data->id)));

        return null;
    }
}
\`\`\`
`,content:`\`\`\`php {all|11|13|15}
// src/BoardGameBlog/Infrastructure/Sylius/State/Http/Processor/DeleteBoardGameProcessor.php
final class DeleteBoardGameProcessor implements ProcessorInterface
{
    public function __construct(
        private CommandBusInterface $commandBus,
    ) {
    }

    public function process(mixed $data, Operation $operation, Context $context): mixed
    {
        Assert::isInstanceOf($data, BoardGameResource::class);

        $this->commandBus->dispatch(new DeleteBoardGameCommand(new BoardGameId($data->id)));

        return null;
    }
}
\`\`\``,frontmatter:{},index:2,start:39,end:60},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/07_processor.md",noteHTML:"",id:72,no:73},__clicksElements:[],__preloaded:!1}},{path:"74",name:"page-74",component:bb,meta:{title:"Responder",srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/08_responder.md",slide:{raw:`---

# Responder 

\`\`\`php {all|6}
interface ResponderInterface
{
    /**
     * Handle the response.
     */
    public function respond(mixed $data, Operation $operation, Context $context): mixed;
}

\`\`\`
`,title:"Responder",level:1,content:`---

# Responder 

\`\`\`php {all|6}
interface ResponderInterface
{
    /**
     * Handle the response.
     */
    public function respond(mixed $data, Operation $operation, Context $context): mixed;
}

\`\`\``,frontmatter:{title:"Responder",srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/08_responder.md"},index:73,start:0,end:15,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/08_responder.md",raw:`---

# Responder 

\`\`\`php {all|6}
interface ResponderInterface
{
    /**
     * Handle the response.
     */
    public function respond(mixed $data, Operation $operation, Context $context): mixed;
}

\`\`\`
`,title:"Responder",level:1,content:`---

# Responder 

\`\`\`php {all|6}
interface ResponderInterface
{
    /**
     * Handle the response.
     */
    public function respond(mixed $data, Operation $operation, Context $context): mixed;
}

\`\`\``,frontmatter:{title:"Responder"},index:0,start:0,end:15},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/08_responder.md",noteHTML:"",id:73,no:74},__clicksElements:[],__preloaded:!1}},{path:"75",name:"page-75",component:Eb,meta:{srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/08_responder.md",slide:{raw:`
\`\`\`php {all|3-7|11|13-15|17|19-21|23}
final class Responder implements ResponderInterface
{
    public function __construct(
        private ResponderInterface $htmlResponder,
        private ResponderInterface $apiResponder,
    ) {
    }

    public function respond(mixed $data, Operation $operation, Context $context): mixed
    {
        $request = $context->get(RequestOption::class)?->request();

        if (null === $request) {
            return null;
        }

        $format = $request->getRequestFormat();

        if ('html' === $format) {
            return $this->htmlResponder->respond($data, $operation, $context);
        }

        return $this->apiResponder->respond($data, $operation, $context);
    }
}

\`\`\`
`,content:`\`\`\`php {all|3-7|11|13-15|17|19-21|23}
final class Responder implements ResponderInterface
{
    public function __construct(
        private ResponderInterface $htmlResponder,
        private ResponderInterface $apiResponder,
    ) {
    }

    public function respond(mixed $data, Operation $operation, Context $context): mixed
    {
        $request = $context->get(RequestOption::class)?->request();

        if (null === $request) {
            return null;
        }

        $format = $request->getRequestFormat();

        if ('html' === $format) {
            return $this->htmlResponder->respond($data, $operation, $context);
        }

        return $this->apiResponder->respond($data, $operation, $context);
    }
}

\`\`\``,frontmatter:{srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/08_responder.md"},index:74,start:16,end:46,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/08_responder.md",raw:`
\`\`\`php {all|3-7|11|13-15|17|19-21|23}
final class Responder implements ResponderInterface
{
    public function __construct(
        private ResponderInterface $htmlResponder,
        private ResponderInterface $apiResponder,
    ) {
    }

    public function respond(mixed $data, Operation $operation, Context $context): mixed
    {
        $request = $context->get(RequestOption::class)?->request();

        if (null === $request) {
            return null;
        }

        $format = $request->getRequestFormat();

        if ('html' === $format) {
            return $this->htmlResponder->respond($data, $operation, $context);
        }

        return $this->apiResponder->respond($data, $operation, $context);
    }
}

\`\`\`
`,content:`\`\`\`php {all|3-7|11|13-15|17|19-21|23}
final class Responder implements ResponderInterface
{
    public function __construct(
        private ResponderInterface $htmlResponder,
        private ResponderInterface $apiResponder,
    ) {
    }

    public function respond(mixed $data, Operation $operation, Context $context): mixed
    {
        $request = $context->get(RequestOption::class)?->request();

        if (null === $request) {
            return null;
        }

        $format = $request->getRequestFormat();

        if ('html' === $format) {
            return $this->htmlResponder->respond($data, $operation, $context);
        }

        return $this->apiResponder->respond($data, $operation, $context);
    }
}

\`\`\``,frontmatter:{},index:1,start:16,end:46},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/08_responder.md",noteHTML:"",id:74,no:75},__clicksElements:[],__preloaded:!1}},{path:"76",name:"page-76",component:Fb,meta:{srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/08_responder.md",slide:{raw:`
\`\`\`php {all|1|4-9|11-16|18-21}
#[AsCommand(name: 'app:show-book')]
final class ShowBookCommand extends Command
{
    public function __construct(
        private readonly ProviderInterface $provider,
        private readonly ResponderInterface $responder,
    ) {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this
            ->addArgument('id', InputArgument::REQUIRED, 'The book id.')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        /// [...]
    }
}
\`\`\`
`,content:`\`\`\`php {all|1|4-9|11-16|18-21}
#[AsCommand(name: 'app:show-book')]
final class ShowBookCommand extends Command
{
    public function __construct(
        private readonly ProviderInterface $provider,
        private readonly ResponderInterface $responder,
    ) {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this
            ->addArgument('id', InputArgument::REQUIRED, 'The book id.')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        /// [...]
    }
}
\`\`\``,frontmatter:{srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/08_responder.md"},index:75,start:47,end:73,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/08_responder.md",raw:`
\`\`\`php {all|1|4-9|11-16|18-21}
#[AsCommand(name: 'app:show-book')]
final class ShowBookCommand extends Command
{
    public function __construct(
        private readonly ProviderInterface $provider,
        private readonly ResponderInterface $responder,
    ) {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this
            ->addArgument('id', InputArgument::REQUIRED, 'The book id.')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        /// [...]
    }
}
\`\`\`
`,content:`\`\`\`php {all|1|4-9|11-16|18-21}
#[AsCommand(name: 'app:show-book')]
final class ShowBookCommand extends Command
{
    public function __construct(
        private readonly ProviderInterface $provider,
        private readonly ResponderInterface $responder,
    ) {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this
            ->addArgument('id', InputArgument::REQUIRED, 'The book id.')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        /// [...]
    }
}
\`\`\``,frontmatter:{},index:2,start:47,end:73},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/08_responder.md",noteHTML:"",id:75,no:76},__clicksElements:[],__preloaded:!1}},{path:"77",name:"page-77",component:Ib,meta:{srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/08_responder.md",slide:{raw:`
\`\`\`php {6|8|9-10|12|14|16-19}
#[AsCommand(name: 'app:show-book')]
final class ShowBookCommand extends Command
{
    // [...]

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $operation = new CliOperation();
        $operation = $operation->withProvider(BookItemProvider::class);
        $operation = $operation->withResponder(BookItemResponder::class);

        $context = new Context(new CliOption($this, $input, $output));

        $data = $this->provider->provide($operation, $context);

        /** @var int $response */
        $response = $this->responder->respond($data, $operation, $context);

        return $response;
    }
}
\`\`\`
`,content:`\`\`\`php {6|8|9-10|12|14|16-19}
#[AsCommand(name: 'app:show-book')]
final class ShowBookCommand extends Command
{
    // [...]

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $operation = new CliOperation();
        $operation = $operation->withProvider(BookItemProvider::class);
        $operation = $operation->withResponder(BookItemResponder::class);

        $context = new Context(new CliOption($this, $input, $output));

        $data = $this->provider->provide($operation, $context);

        /** @var int $response */
        $response = $this->responder->respond($data, $operation, $context);

        return $response;
    }
}
\`\`\``,frontmatter:{srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/08_responder.md"},index:76,start:74,end:99,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/08_responder.md",raw:`
\`\`\`php {6|8|9-10|12|14|16-19}
#[AsCommand(name: 'app:show-book')]
final class ShowBookCommand extends Command
{
    // [...]

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $operation = new CliOperation();
        $operation = $operation->withProvider(BookItemProvider::class);
        $operation = $operation->withResponder(BookItemResponder::class);

        $context = new Context(new CliOption($this, $input, $output));

        $data = $this->provider->provide($operation, $context);

        /** @var int $response */
        $response = $this->responder->respond($data, $operation, $context);

        return $response;
    }
}
\`\`\`
`,content:`\`\`\`php {6|8|9-10|12|14|16-19}
#[AsCommand(name: 'app:show-book')]
final class ShowBookCommand extends Command
{
    // [...]

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $operation = new CliOperation();
        $operation = $operation->withProvider(BookItemProvider::class);
        $operation = $operation->withResponder(BookItemResponder::class);

        $context = new Context(new CliOption($this, $input, $output));

        $data = $this->provider->provide($operation, $context);

        /** @var int $response */
        $response = $this->responder->respond($data, $operation, $context);

        return $response;
    }
}
\`\`\``,frontmatter:{},index:3,start:74,end:99},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/08_responder.md",noteHTML:"",id:76,no:77},__clicksElements:[],__preloaded:!1}},{path:"78",name:"page-78",component:Tb,meta:{srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/08_responder.md",slide:{raw:`
\`\`\`php {all|4-6|10-13|14-17|19-22}
final class CliOption
{
    public function __construct(
        private Command $command,
        private InputInterface $input,
        private OutputInterface $output
    ) {
    }
    
    public function command(): Command
    {
        return $this->command;
    }

    public function input(): InputInterface
    {
        return $this->input;
    }

    public function output(): OutputInterface
    {
        return $this->output;
    }
}
\`\`\`
`,content:`\`\`\`php {all|4-6|10-13|14-17|19-22}
final class CliOption
{
    public function __construct(
        private Command $command,
        private InputInterface $input,
        private OutputInterface $output
    ) {
    }
    
    public function command(): Command
    {
        return $this->command;
    }

    public function input(): InputInterface
    {
        return $this->input;
    }

    public function output(): OutputInterface
    {
        return $this->output;
    }
}
\`\`\``,frontmatter:{srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/08_responder.md"},index:77,start:100,end:128,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/08_responder.md",raw:`
\`\`\`php {all|4-6|10-13|14-17|19-22}
final class CliOption
{
    public function __construct(
        private Command $command,
        private InputInterface $input,
        private OutputInterface $output
    ) {
    }
    
    public function command(): Command
    {
        return $this->command;
    }

    public function input(): InputInterface
    {
        return $this->input;
    }

    public function output(): OutputInterface
    {
        return $this->output;
    }
}
\`\`\`
`,content:`\`\`\`php {all|4-6|10-13|14-17|19-22}
final class CliOption
{
    public function __construct(
        private Command $command,
        private InputInterface $input,
        private OutputInterface $output
    ) {
    }
    
    public function command(): Command
    {
        return $this->command;
    }

    public function input(): InputInterface
    {
        return $this->input;
    }

    public function output(): OutputInterface
    {
        return $this->output;
    }
}
\`\`\``,frontmatter:{},index:4,start:100,end:128},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/08_responder.md",noteHTML:"",id:77,no:78},__clicksElements:[],__preloaded:!1}},{path:"79",name:"page-79",component:qb,meta:{transition:"fade",srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/08_responder.md",slide:{raw:`---
transition: fade
---

\`\`\`php {all|4|6|8|10|11}
// src/BoardGameBlog/Infrastructure/Sylius/State/Cli/Responder/BookItemResponder.php
public function respond(mixed $data, Operation $operation, Context $context): mixed
{
    $cliOption = $context->get(CliOption::class);

    Assert::notNull($cliOption);

    $ui = new SymfonyStyle($cliOption->input(), $cliOption->output());

    Assert::isInstanceOf($data, Book::class);
    $book = BookResource::fromModel($data);
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {all|4|6|8|10|11}
// src/BoardGameBlog/Infrastructure/Sylius/State/Cli/Responder/BookItemResponder.php
public function respond(mixed $data, Operation $operation, Context $context): mixed
{
    $cliOption = $context->get(CliOption::class);

    Assert::notNull($cliOption);

    $ui = new SymfonyStyle($cliOption->input(), $cliOption->output());

    Assert::isInstanceOf($data, Book::class);
    $book = BookResource::fromModel($data);
    
    // [...]
}
\`\`\``,frontmatter:{transition:"fade",srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/08_responder.md"},index:78,start:128,end:149,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/08_responder.md",raw:`---
transition: fade
---

\`\`\`php {all|4|6|8|10|11}
// src/BoardGameBlog/Infrastructure/Sylius/State/Cli/Responder/BookItemResponder.php
public function respond(mixed $data, Operation $operation, Context $context): mixed
{
    $cliOption = $context->get(CliOption::class);

    Assert::notNull($cliOption);

    $ui = new SymfonyStyle($cliOption->input(), $cliOption->output());

    Assert::isInstanceOf($data, Book::class);
    $book = BookResource::fromModel($data);
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {all|4|6|8|10|11}
// src/BoardGameBlog/Infrastructure/Sylius/State/Cli/Responder/BookItemResponder.php
public function respond(mixed $data, Operation $operation, Context $context): mixed
{
    $cliOption = $context->get(CliOption::class);

    Assert::notNull($cliOption);

    $ui = new SymfonyStyle($cliOption->input(), $cliOption->output());

    Assert::isInstanceOf($data, Book::class);
    $book = BookResource::fromModel($data);
    
    // [...]
}
\`\`\``,frontmatter:{transition:"fade"},index:5,start:128,end:149},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/08_responder.md",noteHTML:"",id:78,no:79},__clicksElements:[],__preloaded:!1}},{path:"80",name:"page-80",component:Hb,meta:{srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/08_responder.md",slide:{raw:`
\`\`\`php {all|6|8-9|11-12|14-15|17-18|20-21|23}
// src/BoardGameBlog/Infrastructure/Sylius/State/Cli/Responder/BookItemResponder.php
public function respond(mixed $data, Operation $operation, Context $context): mixed
{    
    // [...]

    $ui->title($book->name);

    $ui->section('Id');
    $ui->writeln((string) $book->id);

    $ui->section('Author');
    $ui->writeln($book->author);

    $ui->section('Description');
    $ui->writeln($book->description);

    $ui->section('Content');
    $ui->writeln($book->content);

    $ui->section('Price');
    $ui->writeln($book->price);

    return Command::SUCCESS;
}
\`\`\`
`,content:`\`\`\`php {all|6|8-9|11-12|14-15|17-18|20-21|23}
// src/BoardGameBlog/Infrastructure/Sylius/State/Cli/Responder/BookItemResponder.php
public function respond(mixed $data, Operation $operation, Context $context): mixed
{    
    // [...]

    $ui->title($book->name);

    $ui->section('Id');
    $ui->writeln((string) $book->id);

    $ui->section('Author');
    $ui->writeln($book->author);

    $ui->section('Description');
    $ui->writeln($book->description);

    $ui->section('Content');
    $ui->writeln($book->content);

    $ui->section('Price');
    $ui->writeln($book->price);

    return Command::SUCCESS;
}
\`\`\``,frontmatter:{srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/08_responder.md"},index:79,start:150,end:178,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/08_responder.md",raw:`
\`\`\`php {all|6|8-9|11-12|14-15|17-18|20-21|23}
// src/BoardGameBlog/Infrastructure/Sylius/State/Cli/Responder/BookItemResponder.php
public function respond(mixed $data, Operation $operation, Context $context): mixed
{    
    // [...]

    $ui->title($book->name);

    $ui->section('Id');
    $ui->writeln((string) $book->id);

    $ui->section('Author');
    $ui->writeln($book->author);

    $ui->section('Description');
    $ui->writeln($book->description);

    $ui->section('Content');
    $ui->writeln($book->content);

    $ui->section('Price');
    $ui->writeln($book->price);

    return Command::SUCCESS;
}
\`\`\`
`,content:`\`\`\`php {all|6|8-9|11-12|14-15|17-18|20-21|23}
// src/BoardGameBlog/Infrastructure/Sylius/State/Cli/Responder/BookItemResponder.php
public function respond(mixed $data, Operation $operation, Context $context): mixed
{    
    // [...]

    $ui->title($book->name);

    $ui->section('Id');
    $ui->writeln((string) $book->id);

    $ui->section('Author');
    $ui->writeln($book->author);

    $ui->section('Description');
    $ui->writeln($book->description);

    $ui->section('Content');
    $ui->writeln($book->content);

    $ui->section('Price');
    $ui->writeln($book->price);

    return Command::SUCCESS;
}
\`\`\``,frontmatter:{},index:6,start:150,end:178},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/08_responder.md",noteHTML:"",id:79,no:80},__clicksElements:[],__preloaded:!1}},{path:"81",name:"page-81",component:Wb,meta:{srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/08_responder.md",slide:{raw:`
![Cli list output](/cli_output.png)
`,content:"![Cli list output](/cli_output.png)",frontmatter:{srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/08_responder.md"},index:80,start:179,end:182,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/08_responder.md",raw:`
![Cli list output](/cli_output.png)
`,content:"![Cli list output](/cli_output.png)",frontmatter:{},index:7,start:179,end:182},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/08_responder.md",noteHTML:"",id:80,no:81},__clicksElements:[],__preloaded:!1}},{path:"82",name:"page-82",component:Yb,meta:{transition:"fade",srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/08_responder.md",slide:{raw:`---
transition: fade
---

\`\`\`php {all|1|5-6|14-15}
#[AsCommand(name: 'app:list-books')]
final class ListBooksCommand extends Command
{
    public function __construct(
        private readonly ProviderInterface $provider,
        private readonly ResponderInterface $responder,
    ) {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this
            ->addOption('page', null, InputOption::VALUE_REQUIRED, 'Page number.', 1)
            ->addOption('items-per-page', null, InputOption::VALUE_REQUIRED, 'Amount of items per page.', 10)
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        // [...]
    }
}
\`\`\`
`,content:`\`\`\`php {all|1|5-6|14-15}
#[AsCommand(name: 'app:list-books')]
final class ListBooksCommand extends Command
{
    public function __construct(
        private readonly ProviderInterface $provider,
        private readonly ResponderInterface $responder,
    ) {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this
            ->addOption('page', null, InputOption::VALUE_REQUIRED, 'Page number.', 1)
            ->addOption('items-per-page', null, InputOption::VALUE_REQUIRED, 'Amount of items per page.', 10)
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        // [...]
    }
}
\`\`\``,frontmatter:{transition:"fade",srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/08_responder.md"},index:81,start:182,end:212,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/08_responder.md",raw:`---
transition: fade
---

\`\`\`php {all|1|5-6|14-15}
#[AsCommand(name: 'app:list-books')]
final class ListBooksCommand extends Command
{
    public function __construct(
        private readonly ProviderInterface $provider,
        private readonly ResponderInterface $responder,
    ) {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this
            ->addOption('page', null, InputOption::VALUE_REQUIRED, 'Page number.', 1)
            ->addOption('items-per-page', null, InputOption::VALUE_REQUIRED, 'Amount of items per page.', 10)
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        // [...]
    }
}
\`\`\`
`,content:`\`\`\`php {all|1|5-6|14-15}
#[AsCommand(name: 'app:list-books')]
final class ListBooksCommand extends Command
{
    public function __construct(
        private readonly ProviderInterface $provider,
        private readonly ResponderInterface $responder,
    ) {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this
            ->addOption('page', null, InputOption::VALUE_REQUIRED, 'Page number.', 1)
            ->addOption('items-per-page', null, InputOption::VALUE_REQUIRED, 'Amount of items per page.', 10)
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        // [...]
    }
}
\`\`\``,frontmatter:{transition:"fade"},index:8,start:182,end:212},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/08_responder.md",noteHTML:"",id:81,no:82},__clicksElements:[],__preloaded:!1}},{path:"83",name:"page-83",component:Jb,meta:{srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/08_responder.md",slide:{raw:`
\`\`\`php {all|8-10|12|14|16-19}
#[AsCommand(name: 'app:list-books')]
final class ListBooksCommand extends Command
{
    // [...]

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $operation = new CliOperation();
        $operation = $operation->withProvider(BookCollectionProvider::class);
        $operation = $operation->withResponder(BookCollectionResponder::class);

        $context = new Context(new CliOption($this, $input, $output));

        $data = $this->provider->provide($operation, $context);
        
        /** @var int $response */
        $response = $this->responder->respond($data, $operation, $context);

        return $response;
    }
}
\`\`\`
`,content:`\`\`\`php {all|8-10|12|14|16-19}
#[AsCommand(name: 'app:list-books')]
final class ListBooksCommand extends Command
{
    // [...]

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $operation = new CliOperation();
        $operation = $operation->withProvider(BookCollectionProvider::class);
        $operation = $operation->withResponder(BookCollectionResponder::class);

        $context = new Context(new CliOption($this, $input, $output));

        $data = $this->provider->provide($operation, $context);
        
        /** @var int $response */
        $response = $this->responder->respond($data, $operation, $context);

        return $response;
    }
}
\`\`\``,frontmatter:{srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/08_responder.md"},index:82,start:213,end:238,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/08_responder.md",raw:`
\`\`\`php {all|8-10|12|14|16-19}
#[AsCommand(name: 'app:list-books')]
final class ListBooksCommand extends Command
{
    // [...]

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $operation = new CliOperation();
        $operation = $operation->withProvider(BookCollectionProvider::class);
        $operation = $operation->withResponder(BookCollectionResponder::class);

        $context = new Context(new CliOption($this, $input, $output));

        $data = $this->provider->provide($operation, $context);
        
        /** @var int $response */
        $response = $this->responder->respond($data, $operation, $context);

        return $response;
    }
}
\`\`\`
`,content:`\`\`\`php {all|8-10|12|14|16-19}
#[AsCommand(name: 'app:list-books')]
final class ListBooksCommand extends Command
{
    // [...]

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $operation = new CliOperation();
        $operation = $operation->withProvider(BookCollectionProvider::class);
        $operation = $operation->withResponder(BookCollectionResponder::class);

        $context = new Context(new CliOption($this, $input, $output));

        $data = $this->provider->provide($operation, $context);
        
        /** @var int $response */
        $response = $this->responder->respond($data, $operation, $context);

        return $response;
    }
}
\`\`\``,frontmatter:{},index:9,start:213,end:238},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/08_responder.md",noteHTML:"",id:82,no:83},__clicksElements:[],__preloaded:!1}},{path:"84",name:"page-84",component:s4,meta:{srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/08_responder.md",slide:{raw:`
![Cli list output](/cli_list_output.png)
`,content:"![Cli list output](/cli_list_output.png)",frontmatter:{srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/08_responder.md"},index:83,start:239,end:242,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/08_responder.md",raw:`
![Cli list output](/cli_list_output.png)
`,content:"![Cli list output](/cli_list_output.png)",frontmatter:{},index:10,start:239,end:242},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/08_responder.md",noteHTML:"",id:83,no:84},__clicksElements:[],__preloaded:!1}},{path:"85",name:"page-85",component:l4,meta:{title:"Grid Provider",srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/09_grid_provider.md",slide:{raw:`# Grid Provider
`,title:"Grid Provider",level:1,content:"# Grid Provider",frontmatter:{title:"Grid Provider",srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/09_grid_provider.md"},index:84,start:0,end:2,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/09_grid_provider.md",raw:`# Grid Provider
`,title:"Grid Provider",level:1,content:"# Grid Provider",frontmatter:{title:"Grid Provider"},index:0,start:0,end:2},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/09_grid_provider.md",noteHTML:"",id:84,no:85},__clicksElements:[],__preloaded:!1}},{path:"86",name:"page-86",component:c4,meta:{srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/09_grid_provider.md",slide:{raw:`
\`\`\`php {all|11}
final class BoardGameGrid extends AbstractGrid implements ResourceAwareGridInterface
{
    public static function getName(): string
    {
        return 'app_board_game';
    }

    public function buildGrid(GridBuilderInterface $gridBuilder): void
    {
        $gridBuilder
            ->setProvider(BoardGameGridProvider::class)
            ->addField(
                StringField::create('name')
                    ->setLabel('Name'),
            )
            ->addField(
                StringField::create('shortDescription')
                    ->setLabel('Short Description'),
            )
        ;
    }

    public function getResourceClass(): string
    {
        return BoardGameResource::class;
    }
}   
\`\`\`
`,content:`\`\`\`php {all|11}
final class BoardGameGrid extends AbstractGrid implements ResourceAwareGridInterface
{
    public static function getName(): string
    {
        return 'app_board_game';
    }

    public function buildGrid(GridBuilderInterface $gridBuilder): void
    {
        $gridBuilder
            ->setProvider(BoardGameGridProvider::class)
            ->addField(
                StringField::create('name')
                    ->setLabel('Name'),
            )
            ->addField(
                StringField::create('shortDescription')
                    ->setLabel('Short Description'),
            )
        ;
    }

    public function getResourceClass(): string
    {
        return BoardGameResource::class;
    }
}   
\`\`\``,frontmatter:{srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/09_grid_provider.md"},index:85,start:3,end:34,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/09_grid_provider.md",raw:`
\`\`\`php {all|11}
final class BoardGameGrid extends AbstractGrid implements ResourceAwareGridInterface
{
    public static function getName(): string
    {
        return 'app_board_game';
    }

    public function buildGrid(GridBuilderInterface $gridBuilder): void
    {
        $gridBuilder
            ->setProvider(BoardGameGridProvider::class)
            ->addField(
                StringField::create('name')
                    ->setLabel('Name'),
            )
            ->addField(
                StringField::create('shortDescription')
                    ->setLabel('Short Description'),
            )
        ;
    }

    public function getResourceClass(): string
    {
        return BoardGameResource::class;
    }
}   
\`\`\`
`,content:`\`\`\`php {all|11}
final class BoardGameGrid extends AbstractGrid implements ResourceAwareGridInterface
{
    public static function getName(): string
    {
        return 'app_board_game';
    }

    public function buildGrid(GridBuilderInterface $gridBuilder): void
    {
        $gridBuilder
            ->setProvider(BoardGameGridProvider::class)
            ->addField(
                StringField::create('name')
                    ->setLabel('Name'),
            )
            ->addField(
                StringField::create('shortDescription')
                    ->setLabel('Short Description'),
            )
        ;
    }

    public function getResourceClass(): string
    {
        return BoardGameResource::class;
    }
}   
\`\`\``,frontmatter:{},index:1,start:3,end:34},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/09_grid_provider.md",noteHTML:"",id:85,no:86},__clicksElements:[],__preloaded:!1}},{path:"87",name:"page-87",component:u4,meta:{srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/09_grid_provider.md",slide:{raw:`
\`\`\`php {all|3|7|11-19|21}
final class BoardGameGridProvider implements DataProviderInterface
{
    public function __construct(private string $dataDir)
    {
    }

    public function getData(Grid $grid, Parameters $parameters): Pagerfanta
    {
        $data = [];

        foreach ($this->getFileData() as $row) {
            [$id, $name, $shortDescription] = str_getcsv($row);

            $data[] = new BoardGameResource(
                id: $id,
                name: $name,
                shortDescription: $shortDescription,
            );
        }

        return new Pagerfanta(new ArrayAdapter($data));
    }

    private function getFileData(): array
    {
        return file($this->dataDir . '/board_games.csv');
    }
}
\`\`\`
`,content:`\`\`\`php {all|3|7|11-19|21}
final class BoardGameGridProvider implements DataProviderInterface
{
    public function __construct(private string $dataDir)
    {
    }

    public function getData(Grid $grid, Parameters $parameters): Pagerfanta
    {
        $data = [];

        foreach ($this->getFileData() as $row) {
            [$id, $name, $shortDescription] = str_getcsv($row);

            $data[] = new BoardGameResource(
                id: $id,
                name: $name,
                shortDescription: $shortDescription,
            );
        }

        return new Pagerfanta(new ArrayAdapter($data));
    }

    private function getFileData(): array
    {
        return file($this->dataDir . '/board_games.csv');
    }
}
\`\`\``,frontmatter:{srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/09_grid_provider.md"},index:86,start:35,end:67,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/09_grid_provider.md",raw:`
\`\`\`php {all|3|7|11-19|21}
final class BoardGameGridProvider implements DataProviderInterface
{
    public function __construct(private string $dataDir)
    {
    }

    public function getData(Grid $grid, Parameters $parameters): Pagerfanta
    {
        $data = [];

        foreach ($this->getFileData() as $row) {
            [$id, $name, $shortDescription] = str_getcsv($row);

            $data[] = new BoardGameResource(
                id: $id,
                name: $name,
                shortDescription: $shortDescription,
            );
        }

        return new Pagerfanta(new ArrayAdapter($data));
    }

    private function getFileData(): array
    {
        return file($this->dataDir . '/board_games.csv');
    }
}
\`\`\`
`,content:`\`\`\`php {all|3|7|11-19|21}
final class BoardGameGridProvider implements DataProviderInterface
{
    public function __construct(private string $dataDir)
    {
    }

    public function getData(Grid $grid, Parameters $parameters): Pagerfanta
    {
        $data = [];

        foreach ($this->getFileData() as $row) {
            [$id, $name, $shortDescription] = str_getcsv($row);

            $data[] = new BoardGameResource(
                id: $id,
                name: $name,
                shortDescription: $shortDescription,
            );
        }

        return new Pagerfanta(new ArrayAdapter($data));
    }

    private function getFileData(): array
    {
        return file($this->dataDir . '/board_games.csv');
    }
}
\`\`\``,frontmatter:{},index:2,start:35,end:67},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/09_grid_provider.md",noteHTML:"",id:86,no:87},__clicksElements:[],__preloaded:!1}},{path:"88",name:"page-88",component:m4,meta:{srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/09_grid_provider.md",slide:{raw:`
*config/data/board_games.csv*

\`\`\`
6b2fff2b-0b43-489b-8c48-9c0427a1c4c7,Stone Age,"Travel to the time of hunters and gatherers in this classic game of tools and tribes."
d068029a-0c32-4728-95bf-5f614d53440b,Ticket to Ride,"Build your railroad across North America to connect cities and complete tickets."
5ba27cbd-e230-48b7-86ae-ad2eaa05ebc0,7 Wonders,"Draft cards to develop your ancient civilization and build its Wonder of the World."
2919785a-66e7-44da-b356-b98e07fbb9e8,Puerto Rico,"Ship goods, construct buildings, and choose roles that benefit you more than others."
c4856c93-3a41-40eb-9994-f58a1035d99b,Azul, "Artfully embellish the walls of your palace by drafting the most beautiful tiles."
a953d760-07d5-4add-b87e-b483ebb194df,Die Fürsten von Florenz,"Attract artisans and scholars to your palazzo by building and landscaping."
ce461300-25c3-4a72-aa7d-6ec7021d7b80,The Voyages of Marco Polo,"Using unique abilities, fulfill contracts and reach your goals along the Silk Road."
599dcd98-8167-4f4a-b181-efd7c24bb434,Tigris & Euphrates,"Keep your Mesopotamian civilisation in perfect balance through revolutions and wars."
305749e6-7a05-468a-b1aa-46ee6c1a89ac,Patchwork,"Piece together a quilt and leave no holes to become the button master."
5e980dad-d8ef-4e47-910a-4dc9f91b38fd,Cartagena,"Groups of pirates race to reach their ship and escape from Cartegena."
6a47110b-b65d-4e94-9ce0-a06cd7823ecc,Village,"Send your villagers to work, travel, pray, and... die when it brings the most renown."
e75c5edd-bf6a-49f8-a409-90183aea660c,Splendor,"Renaissance merchants race to grab gems, acquire property, and please nobility."
74c0d7ba-8acf-46eb-a6a7-c8f04c1860ff,Ra,"Bid to acquire the most valuable sets of Egyptian artifacts and resources."
44bc972e-6a0e-423a-9140-caae3f7f8710,Carcassonne,"Shape the medieval landscape of France, claiming cities, monasteries and farms."
0a937d58-24dd-4dae-894a-b600dfa334d4,Modern Art,"Four types of auctions challenge players in this classic game of art speculation."
c3661009-d024-4c83-8ef6-a967a0a21e6f,Goa,"Run a spice trade business in colonial-era India in this closed-loop economy game."
edbb5801-f1ae-4c14-b86a-130a7c3a1c4a,Shogun,"Gain control of medieval Japan by amassing troops and sending them out to battles."
1dec8957-3203-4f84-95c5-ceb3754e4b50,Samurai,"Dispute the favor of three different castes in order to unite Japan under your rule."
110c7432-c754-4174-9d0b-7402dc57a500,Kingdomino,"Build a kingdom with varied terrains on domino-shaped tiles in this fast family game."

\`\`\`
`,content:`*config/data/board_games.csv*

\`\`\`
6b2fff2b-0b43-489b-8c48-9c0427a1c4c7,Stone Age,"Travel to the time of hunters and gatherers in this classic game of tools and tribes."
d068029a-0c32-4728-95bf-5f614d53440b,Ticket to Ride,"Build your railroad across North America to connect cities and complete tickets."
5ba27cbd-e230-48b7-86ae-ad2eaa05ebc0,7 Wonders,"Draft cards to develop your ancient civilization and build its Wonder of the World."
2919785a-66e7-44da-b356-b98e07fbb9e8,Puerto Rico,"Ship goods, construct buildings, and choose roles that benefit you more than others."
c4856c93-3a41-40eb-9994-f58a1035d99b,Azul, "Artfully embellish the walls of your palace by drafting the most beautiful tiles."
a953d760-07d5-4add-b87e-b483ebb194df,Die Fürsten von Florenz,"Attract artisans and scholars to your palazzo by building and landscaping."
ce461300-25c3-4a72-aa7d-6ec7021d7b80,The Voyages of Marco Polo,"Using unique abilities, fulfill contracts and reach your goals along the Silk Road."
599dcd98-8167-4f4a-b181-efd7c24bb434,Tigris & Euphrates,"Keep your Mesopotamian civilisation in perfect balance through revolutions and wars."
305749e6-7a05-468a-b1aa-46ee6c1a89ac,Patchwork,"Piece together a quilt and leave no holes to become the button master."
5e980dad-d8ef-4e47-910a-4dc9f91b38fd,Cartagena,"Groups of pirates race to reach their ship and escape from Cartegena."
6a47110b-b65d-4e94-9ce0-a06cd7823ecc,Village,"Send your villagers to work, travel, pray, and... die when it brings the most renown."
e75c5edd-bf6a-49f8-a409-90183aea660c,Splendor,"Renaissance merchants race to grab gems, acquire property, and please nobility."
74c0d7ba-8acf-46eb-a6a7-c8f04c1860ff,Ra,"Bid to acquire the most valuable sets of Egyptian artifacts and resources."
44bc972e-6a0e-423a-9140-caae3f7f8710,Carcassonne,"Shape the medieval landscape of France, claiming cities, monasteries and farms."
0a937d58-24dd-4dae-894a-b600dfa334d4,Modern Art,"Four types of auctions challenge players in this classic game of art speculation."
c3661009-d024-4c83-8ef6-a967a0a21e6f,Goa,"Run a spice trade business in colonial-era India in this closed-loop economy game."
edbb5801-f1ae-4c14-b86a-130a7c3a1c4a,Shogun,"Gain control of medieval Japan by amassing troops and sending them out to battles."
1dec8957-3203-4f84-95c5-ceb3754e4b50,Samurai,"Dispute the favor of three different castes in order to unite Japan under your rule."
110c7432-c754-4174-9d0b-7402dc57a500,Kingdomino,"Build a kingdom with varied terrains on domino-shaped tiles in this fast family game."

\`\`\``,frontmatter:{srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/09_grid_provider.md"},index:87,start:68,end:94,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/09_grid_provider.md",raw:`
*config/data/board_games.csv*

\`\`\`
6b2fff2b-0b43-489b-8c48-9c0427a1c4c7,Stone Age,"Travel to the time of hunters and gatherers in this classic game of tools and tribes."
d068029a-0c32-4728-95bf-5f614d53440b,Ticket to Ride,"Build your railroad across North America to connect cities and complete tickets."
5ba27cbd-e230-48b7-86ae-ad2eaa05ebc0,7 Wonders,"Draft cards to develop your ancient civilization and build its Wonder of the World."
2919785a-66e7-44da-b356-b98e07fbb9e8,Puerto Rico,"Ship goods, construct buildings, and choose roles that benefit you more than others."
c4856c93-3a41-40eb-9994-f58a1035d99b,Azul, "Artfully embellish the walls of your palace by drafting the most beautiful tiles."
a953d760-07d5-4add-b87e-b483ebb194df,Die Fürsten von Florenz,"Attract artisans and scholars to your palazzo by building and landscaping."
ce461300-25c3-4a72-aa7d-6ec7021d7b80,The Voyages of Marco Polo,"Using unique abilities, fulfill contracts and reach your goals along the Silk Road."
599dcd98-8167-4f4a-b181-efd7c24bb434,Tigris & Euphrates,"Keep your Mesopotamian civilisation in perfect balance through revolutions and wars."
305749e6-7a05-468a-b1aa-46ee6c1a89ac,Patchwork,"Piece together a quilt and leave no holes to become the button master."
5e980dad-d8ef-4e47-910a-4dc9f91b38fd,Cartagena,"Groups of pirates race to reach their ship and escape from Cartegena."
6a47110b-b65d-4e94-9ce0-a06cd7823ecc,Village,"Send your villagers to work, travel, pray, and... die when it brings the most renown."
e75c5edd-bf6a-49f8-a409-90183aea660c,Splendor,"Renaissance merchants race to grab gems, acquire property, and please nobility."
74c0d7ba-8acf-46eb-a6a7-c8f04c1860ff,Ra,"Bid to acquire the most valuable sets of Egyptian artifacts and resources."
44bc972e-6a0e-423a-9140-caae3f7f8710,Carcassonne,"Shape the medieval landscape of France, claiming cities, monasteries and farms."
0a937d58-24dd-4dae-894a-b600dfa334d4,Modern Art,"Four types of auctions challenge players in this classic game of art speculation."
c3661009-d024-4c83-8ef6-a967a0a21e6f,Goa,"Run a spice trade business in colonial-era India in this closed-loop economy game."
edbb5801-f1ae-4c14-b86a-130a7c3a1c4a,Shogun,"Gain control of medieval Japan by amassing troops and sending them out to battles."
1dec8957-3203-4f84-95c5-ceb3754e4b50,Samurai,"Dispute the favor of three different castes in order to unite Japan under your rule."
110c7432-c754-4174-9d0b-7402dc57a500,Kingdomino,"Build a kingdom with varied terrains on domino-shaped tiles in this fast family game."

\`\`\`
`,content:`*config/data/board_games.csv*

\`\`\`
6b2fff2b-0b43-489b-8c48-9c0427a1c4c7,Stone Age,"Travel to the time of hunters and gatherers in this classic game of tools and tribes."
d068029a-0c32-4728-95bf-5f614d53440b,Ticket to Ride,"Build your railroad across North America to connect cities and complete tickets."
5ba27cbd-e230-48b7-86ae-ad2eaa05ebc0,7 Wonders,"Draft cards to develop your ancient civilization and build its Wonder of the World."
2919785a-66e7-44da-b356-b98e07fbb9e8,Puerto Rico,"Ship goods, construct buildings, and choose roles that benefit you more than others."
c4856c93-3a41-40eb-9994-f58a1035d99b,Azul, "Artfully embellish the walls of your palace by drafting the most beautiful tiles."
a953d760-07d5-4add-b87e-b483ebb194df,Die Fürsten von Florenz,"Attract artisans and scholars to your palazzo by building and landscaping."
ce461300-25c3-4a72-aa7d-6ec7021d7b80,The Voyages of Marco Polo,"Using unique abilities, fulfill contracts and reach your goals along the Silk Road."
599dcd98-8167-4f4a-b181-efd7c24bb434,Tigris & Euphrates,"Keep your Mesopotamian civilisation in perfect balance through revolutions and wars."
305749e6-7a05-468a-b1aa-46ee6c1a89ac,Patchwork,"Piece together a quilt and leave no holes to become the button master."
5e980dad-d8ef-4e47-910a-4dc9f91b38fd,Cartagena,"Groups of pirates race to reach their ship and escape from Cartegena."
6a47110b-b65d-4e94-9ce0-a06cd7823ecc,Village,"Send your villagers to work, travel, pray, and... die when it brings the most renown."
e75c5edd-bf6a-49f8-a409-90183aea660c,Splendor,"Renaissance merchants race to grab gems, acquire property, and please nobility."
74c0d7ba-8acf-46eb-a6a7-c8f04c1860ff,Ra,"Bid to acquire the most valuable sets of Egyptian artifacts and resources."
44bc972e-6a0e-423a-9140-caae3f7f8710,Carcassonne,"Shape the medieval landscape of France, claiming cities, monasteries and farms."
0a937d58-24dd-4dae-894a-b600dfa334d4,Modern Art,"Four types of auctions challenge players in this classic game of art speculation."
c3661009-d024-4c83-8ef6-a967a0a21e6f,Goa,"Run a spice trade business in colonial-era India in this closed-loop economy game."
edbb5801-f1ae-4c14-b86a-130a7c3a1c4a,Shogun,"Gain control of medieval Japan by amassing troops and sending them out to battles."
1dec8957-3203-4f84-95c5-ceb3754e4b50,Samurai,"Dispute the favor of three different castes in order to unite Japan under your rule."
110c7432-c754-4174-9d0b-7402dc57a500,Kingdomino,"Build a kingdom with varied terrains on domino-shaped tiles in this fast family game."

\`\`\``,frontmatter:{},index:3,start:68,end:94},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/09_grid_provider.md",noteHTML:"",id:87,no:88},__clicksElements:[],__preloaded:!1}},{path:"89",name:"page-89",component:_4,meta:{layout:"image",image:"/grid_with_custom_provider.png",transition:"fade",srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/09_grid_provider.md",slide:{raw:`---
layout: image
image: /grid_with_custom_provider.png
transition: fade
---
`,content:"",frontmatter:{layout:"image",image:"/grid_with_custom_provider.png",transition:"fade",srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/09_grid_provider.md"},index:88,start:94,end:100,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/09_grid_provider.md",raw:`---
layout: image
image: /grid_with_custom_provider.png
transition: fade
---
`,content:"",frontmatter:{layout:"image",image:"/grid_with_custom_provider.png",transition:"fade"},index:4,start:94,end:100},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/09_grid_provider.md",noteHTML:"",id:88,no:89},__clicksElements:[],__preloaded:!1}},{path:"90",name:"page-90",component:g4,meta:{layout:"image",image:"/grid_with_custom_provider_2.png",srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/09_grid_provider.md",slide:{raw:`---
layout: image
image: /grid_with_custom_provider_2.png
---
`,content:"",frontmatter:{layout:"image",image:"/grid_with_custom_provider_2.png",srcSequence:"./pages/07_resource_operation.md,./07_resource_operation/09_grid_provider.md"},index:89,start:100,end:105,source:{filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/09_grid_provider.md",raw:`---
layout: image
image: /grid_with_custom_provider_2.png
---
`,content:"",frontmatter:{layout:"image",image:"/grid_with_custom_provider_2.png"},index:5,start:100,end:105},filepath:"/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/pages/07_resource_operation/09_grid_provider.md",noteHTML:"",id:89,no:90},__clicksElements:[],__preloaded:!1}},{path:"91",component:Z0,meta:{layout:"end"}}],Ze=A4,lt=[{name:"play",path:"/",component:A1,children:[...Ze]},{name:"print",path:"/print",component:K0},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}}];{let n=function(s){if(!tt.remote||tt.remote===s.query.password)return!0;if(tt.remote&&s.query.password===void 0){const o=prompt("Enter password");if(tt.remote===o)return!0}return s.params.no?{path:`/${s.params.no}`}:{path:""}};lt.push({path:"/presenter/print",component:()=>Is(()=>import("./PresenterPrint-38de4407.js"),["assets/PresenterPrint-38de4407.js","assets/NoteDisplay-9eb1f9a2.js"])}),lt.push({name:"notes",path:"/notes",component:()=>Is(()=>import("./NotesView-7bf66822.js"),["assets/NotesView-7bf66822.js","assets/NoteDisplay-9eb1f9a2.js"]),beforeEnter:n}),lt.push({name:"presenter",path:"/presenter/:no",component:()=>Is(()=>import("./Presenter-cf455d46.js"),["assets/Presenter-cf455d46.js","assets/NoteDisplay-9eb1f9a2.js","assets/DrawingControls-85d57771.js","assets/Presenter-aa6741a8.css"]),beforeEnter:n}),lt.push({path:"/presenter",redirect:{path:"/presenter/1"}})}const Cn=Z3({history:YB("/regain-control-of-your-backends-with-sylius-and-api-platform/"),routes:lt});function C4(n,s,{mode:o="replace"}={}){return F({get(){const t=Cn.currentRoute.value.query[n];return t==null?s??null:Array.isArray(t)?t.filter(Boolean):t},set(t){tn(()=>{Cn[b(o)]({query:{...Cn.currentRoute.value.query,[n]:t}})})}})}const Sy=J(0);tn(()=>{Cn.afterEach(async()=>{await tn(),Sy.value+=1})});const Ry=J(0),Ln=F(()=>Cn.currentRoute.value),Lo=F(()=>Ln.value.query.print!==void 0),v4=F(()=>Ln.value.query.print==="clicks"),cs=F(()=>Ln.value.query.embedded!==void 0),gn=F(()=>Ln.value.path.startsWith("/presenter")),D4=F(()=>Ln.value.path.startsWith("/notes")),ft=F(()=>Lo.value&&!v4.value),ka=F(()=>Ln.value.query.password),b4=F(()=>!gn.value&&(!Se.remote||ka.value===Se.remote)),Sp=C4("clicks","0"),Iy=F(()=>Ze.length-1),k4=F(()=>Ln.value.path),ze=F(()=>parseInt(k4.value.split(/\//g).slice(-1)[0])||1);F(()=>lr(ze.value));const yn=F(()=>Ze.find(n=>n.path===`${ze.value}`));F(()=>{var n,s,o;return(o=(s=(n=yn.value)==null?void 0:n.meta)==null?void 0:s.slide)==null?void 0:o.id});F(()=>{var n,s;return((s=(n=yn.value)==null?void 0:n.meta)==null?void 0:s.layout)||(ze.value===1?"cover":"default")});const Sr=F(()=>Ze.find(n=>n.path===`${Math.min(Ze.length,ze.value+1)}`)),w4=F(()=>Ze.find(n=>n.path===`${Math.max(1,ze.value-1)}`)),E4=F(()=>{var n,s;return Sy.value,((s=(n=yn.value)==null?void 0:n.meta)==null?void 0:s.__clicksElements)||[]}),On=F({get(){if(ft.value)return 99999;let n=+(Sp.value||0);return isNaN(n)&&(n=0),n},set(n){Sp.value=n.toString()}}),Ll=F(()=>{var n,s;return+(((s=(n=yn.value)==null?void 0:n.meta)==null?void 0:s.clicks)??E4.value.length)}),$4=F(()=>ze.value<Ze.length-1||On.value<Ll.value),x4=F(()=>ze.value>1||On.value>0),F4=F(()=>Ze.filter(n=>{var s,o;return(o=(s=n.meta)==null?void 0:s.slide)==null?void 0:o.title}).reduce((n,s)=>(vc(n,s),n),[])),S4=F(()=>Dc(F4.value,yn.value));F(()=>bc(S4.value));const R4=F(()=>L4(Ry.value,yn.value,w4.value));Ae(yn,(n,s)=>{Ry.value=Number(n==null?void 0:n.path)-Number(s==null?void 0:s.path)});function Ps(){Ll.value<=On.value?It():On.value+=1}async function Os(){On.value<=0?await Pt():On.value-=1}function lr(n){return gn.value?`/presenter/${n}`:`/${n}`}function It(){const n=Math.min(Ze.length,ze.value+1);return Mo(n)}async function Pt(n=!0){const s=Math.max(1,ze.value-1);await Mo(s),n&&Ll.value&&Cn.replace({query:{...Ln.value.query,clicks:Ll.value}})}function Mo(n,s){return Cn.push({path:lr(n),query:{...Ln.value.query,clicks:s}})}function I4(n){const s=J(0),{direction:o,distanceX:t,distanceY:l}=yB(n,{onSwipeStart(a){a.pointerType==="touch"&&(Ft.value||(s.value=pa()))},onSwipeEnd(a){if(a.pointerType!=="touch"||!s.value||Ft.value)return;const c=Math.abs(t.value),i=Math.abs(l.value);c/window.innerWidth>.3||c>100?o.value===us.LEFT?Ps():Os():(i/window.innerHeight>.4||i>200)&&(o.value===us.DOWN?Pt():It())}})}async function wa(){const{saveAs:n}=await Is(()=>import("./FileSaver.min-17c85779.js").then(s=>s.F),[]);n(Td(Se.download)?Se.download:Se.exportFilename?`${Se.exportFilename}.pdf`:"/regain-control-of-your-backends-with-sylius-and-api-platform/slidev-exported.pdf",`${Se.title}.pdf`)}async function P4(n){var s,o;if(n==null){const t=(o=(s=yn.value)==null?void 0:s.meta)==null?void 0:o.slide;if(!(t!=null&&t.filepath))return!1;n=`${t.filepath}:${t.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(n)}`),!0}function vc(n,s,o=1){var l,a,c,i,p;const t=(a=(l=s.meta)==null?void 0:l.slide)==null?void 0:a.level;t&&t>o&&n.length>0?vc(n[n.length-1].children,s,o+1):n.push({children:[],level:o,path:s.path,hideInToc:Boolean((c=s.meta)==null?void 0:c.hideInToc),title:(p=(i=s.meta)==null?void 0:i.slide)==null?void 0:p.title})}function Dc(n,s,o=!1,t){return n.map(l=>{const a={...l,active:l.path===(s==null?void 0:s.path),hasActiveParent:o};return a.children.length>0&&(a.children=Dc(a.children,s,a.active||a.hasActiveParent,a)),t&&(a.active||a.activeParent)&&(t.activeParent=!0),a})}function bc(n,s=1){return n.filter(o=>!o.hideInToc).map(o=>({...o,children:bc(o.children,s+1)}))}const O4={"slide-left":"slide-left | slide-right","slide-right":"slide-right | slide-left","slide-up":"slide-up | slide-down","slide-down":"slide-down | slide-up"};function T4(n,s=!1){if(!n||(typeof n=="string"&&(n={name:n}),!n.name))return;let o=n.name.includes("|")?n.name:O4[n.name]||n.name;if(o.includes("|")){const[t,l]=o.split("|").map(a=>a.trim());o=s?l:t}if(o)return{...n,name:o}}function L4(n,s,o){var l,a;let t=n>0?(l=o==null?void 0:o.meta)==null?void 0:l.transition:(a=s==null?void 0:s.meta)==null?void 0:a.transition;return t||(t=Se.transition),T4(t,n<0)}function M4(){const n=Se.titleTemplate.replace("%s",Se.title||"Slidev");ic({title:n}),xh(Se.htmlAttrs),Hh(`${n} - shared`),Wh(`${n} - drawings`);const s=`${location.origin}_${Oh()}`;function o(){D4.value||!gn.value&&!Ph.includes(location.host.split(":")[0])||(gn.value?(zo("page",+ze.value),zo("clicks",On.value)):(zo("viewerPage",+ze.value),zo("viewerClicks",On.value)),zo("lastUpdate",{id:s,type:gn.value?"presenter":"viewer",time:new Date().getTime()}))}Cn.afterEach(o),Ae(On,o),jh(t=>{var a;Cn.currentRoute.value.path.match(/^\/(\d+|presenter)\/?/)&&((a=t.lastUpdate)==null?void 0:a.type)==="presenter"&&(+t.page!=+ze.value||+On.value!=+t.clicks)&&Cn.replace({path:lr(t.page),query:{...Cn.currentRoute.value.query,clicks:t.clicks||0}})})}const q4=Ie({__name:"App",setup(n){return $(I),M4(),(s,o)=>{const t=El("RouterView"),l=El("StarportCarrier");return C(),se(Oe,null,[q(t),q(l)],64)}}}),G4=P(q4,[["__file","/home/runner/work/regain-control-of-your-backends-with-sylius-and-api-platform/regain-control-of-your-backends-with-sylius-and-api-platform/node_modules/@slidev/client/App.vue"]]);function Rr(n){return n!==null&&typeof n=="object"}function Ea(n,s,o=".",t){if(!Rr(s))return Ea(n,{},o,t);const l=Object.assign({},s);for(const a in n){if(a==="__proto__"||a==="constructor")continue;const c=n[a];c!=null&&(t&&t(l,a,c,o)||(Array.isArray(c)&&Array.isArray(l[a])?l[a]=[...c,...l[a]]:Rr(c)&&Rr(l[a])?l[a]=Ea(c,l[a],(o?`${o}.`:"")+a.toString(),t):l[a]=c))}return l}function N4(n){return(...s)=>s.reduce((o,t)=>Ea(o,t,"",n),{})}const H4=N4(),Py=1/60*1e3,j4=typeof performance<"u"?()=>performance.now():()=>Date.now(),Oy=typeof window<"u"?n=>window.requestAnimationFrame(n):n=>setTimeout(()=>n(j4()),Py);function V4(n){let s=[],o=[],t=0,l=!1,a=!1;const c=new WeakSet,i={schedule:(p,u=!1,d=!1)=>{const y=d&&l,f=y?s:o;return u&&c.add(p),f.indexOf(p)===-1&&(f.push(p),y&&l&&(t=s.length)),p},cancel:p=>{const u=o.indexOf(p);u!==-1&&o.splice(u,1),c.delete(p)},process:p=>{if(l){a=!0;return}if(l=!0,[s,o]=[o,s],o.length=0,t=s.length,t)for(let u=0;u<t;u++){const d=s[u];d(p),c.has(d)&&(i.schedule(d),n())}l=!1,a&&(a=!1,i.process(p))}};return i}const U4=40;let $a=!0,Ot=!1,xa=!1;const Io={delta:0,timestamp:0},Wt=["read","update","preRender","render","postRender"],rr=Wt.reduce((n,s)=>(n[s]=V4(()=>Ot=!0),n),{}),Fa=Wt.reduce((n,s)=>{const o=rr[s];return n[s]=(t,l=!1,a=!1)=>(Ot||z4(),o.schedule(t,l,a)),n},{}),W4=Wt.reduce((n,s)=>(n[s]=rr[s].cancel,n),{});Wt.reduce((n,s)=>(n[s]=()=>rr[s].process(Io),n),{});const K4=n=>rr[n].process(Io),Ty=n=>{Ot=!1,Io.delta=$a?Py:Math.max(Math.min(n-Io.timestamp,U4),1),Io.timestamp=n,xa=!0,Wt.forEach(K4),xa=!1,Ot&&($a=!1,Oy(Ty))},z4=()=>{Ot=!0,$a=!0,xa||Oy(Ty)},Ly=()=>Io;function My(n,s){var o={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&s.indexOf(t)<0&&(o[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(n);l<t.length;l++)s.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(n,t[l])&&(o[t[l]]=n[t[l]]);return o}var kc=function(){},Tt=function(){};kc=function(n,s){!n&&typeof console<"u"&&console.warn(s)},Tt=function(n,s){if(!n)throw new Error(s)};const Sa=(n,s,o)=>Math.min(Math.max(o,n),s),Ir=.001,Y4=.01,Rp=10,Z4=.05,Q4=1;function J4({duration:n=800,bounce:s=.25,velocity:o=0,mass:t=1}){let l,a;kc(n<=Rp*1e3,"Spring duration must be 10 seconds or less");let c=1-s;c=Sa(Z4,Q4,c),n=Sa(Y4,Rp,n/1e3),c<1?(l=u=>{const d=u*c,y=d*n,f=d-o,h=Ra(u,c),m=Math.exp(-y);return Ir-f/h*m},a=u=>{const y=u*c*n,f=y*o+o,h=Math.pow(c,2)*Math.pow(u,2)*n,m=Math.exp(-y),B=Ra(Math.pow(u,2),c);return(-l(u)+Ir>0?-1:1)*((f-h)*m)/B}):(l=u=>{const d=Math.exp(-u*n),y=(u-o)*n+1;return-Ir+d*y},a=u=>{const d=Math.exp(-u*n),y=(o-u)*(n*n);return d*y});const i=5/n,p=ek(l,a,i);if(n=n*1e3,isNaN(p))return{stiffness:100,damping:10,duration:n};{const u=Math.pow(p,2)*t;return{stiffness:u,damping:c*2*Math.sqrt(t*u),duration:n}}}const X4=12;function ek(n,s,o){let t=o;for(let l=1;l<X4;l++)t=t-n(t)/s(t);return t}function Ra(n,s){return n*Math.sqrt(1-s*s)}const nk=["duration","bounce"],sk=["stiffness","damping","mass"];function Ip(n,s){return s.some(o=>n[o]!==void 0)}function ok(n){let s=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},n);if(!Ip(n,sk)&&Ip(n,nk)){const o=J4(n);s=Object.assign(Object.assign(Object.assign({},s),o),{velocity:0,mass:1}),s.isResolvedFromDuration=!0}return s}function wc(n){var{from:s=0,to:o=1,restSpeed:t=2,restDelta:l}=n,a=My(n,["from","to","restSpeed","restDelta"]);const c={done:!1,value:s};let{stiffness:i,damping:p,mass:u,velocity:d,duration:y,isResolvedFromDuration:f}=ok(a),h=Pp,m=Pp;function B(){const g=d?-(d/1e3):0,k=o-s,v=p/(2*Math.sqrt(i*u)),D=Math.sqrt(i/u)/1e3;if(l===void 0&&(l=Math.min(Math.abs(o-s)/100,.4)),v<1){const w=Ra(D,v);h=T=>{const N=Math.exp(-v*D*T);return o-N*((g+v*D*k)/w*Math.sin(w*T)+k*Math.cos(w*T))},m=T=>{const N=Math.exp(-v*D*T);return v*D*N*(Math.sin(w*T)*(g+v*D*k)/w+k*Math.cos(w*T))-N*(Math.cos(w*T)*(g+v*D*k)-w*k*Math.sin(w*T))}}else if(v===1)h=w=>o-Math.exp(-D*w)*(k+(g+D*k)*w);else{const w=D*Math.sqrt(v*v-1);h=T=>{const N=Math.exp(-v*D*T),Y=Math.min(w*T,300);return o-N*((g+v*D*k)*Math.sinh(Y)+w*k*Math.cosh(Y))/w}}}return B(),{next:g=>{const k=h(g);if(f)c.done=g>=y;else{const v=m(g)*1e3,D=Math.abs(v)<=t,w=Math.abs(o-k)<=l;c.done=D&&w}return c.value=c.done?o:k,c},flipTarget:()=>{d=-d,[s,o]=[o,s],B()}}}wc.needsInterpolation=(n,s)=>typeof n=="string"||typeof s=="string";const Pp=n=>0,qy=(n,s,o)=>{const t=s-n;return t===0?1:(o-n)/t},Ec=(n,s,o)=>-o*n+o*s+n,Gy=(n,s)=>o=>Math.max(Math.min(o,s),n),mt=n=>n%1?Number(n.toFixed(5)):n,Lt=/(-)?([\d]*\.?[\d])+/g,Ia=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,tk=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Kt(n){return typeof n=="string"}const zt={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},ht=Object.assign(Object.assign({},zt),{transform:Gy(0,1)}),al=Object.assign(Object.assign({},zt),{default:1}),$c=n=>({test:s=>Kt(s)&&s.endsWith(n)&&s.split(" ").length===1,parse:parseFloat,transform:s=>`${s}${n}`}),js=$c("deg"),_t=$c("%"),ge=$c("px"),Op=Object.assign(Object.assign({},_t),{parse:n=>_t.parse(n)/100,transform:n=>_t.transform(n*100)}),xc=(n,s)=>o=>Boolean(Kt(o)&&tk.test(o)&&o.startsWith(n)||s&&Object.prototype.hasOwnProperty.call(o,s)),Ny=(n,s,o)=>t=>{if(!Kt(t))return t;const[l,a,c,i]=t.match(Lt);return{[n]:parseFloat(l),[s]:parseFloat(a),[o]:parseFloat(c),alpha:i!==void 0?parseFloat(i):1}},Xs={test:xc("hsl","hue"),parse:Ny("hue","saturation","lightness"),transform:({hue:n,saturation:s,lightness:o,alpha:t=1})=>"hsla("+Math.round(n)+", "+_t.transform(mt(s))+", "+_t.transform(mt(o))+", "+mt(ht.transform(t))+")"},lk=Gy(0,255),Pr=Object.assign(Object.assign({},zt),{transform:n=>Math.round(lk(n))}),$s={test:xc("rgb","red"),parse:Ny("red","green","blue"),transform:({red:n,green:s,blue:o,alpha:t=1})=>"rgba("+Pr.transform(n)+", "+Pr.transform(s)+", "+Pr.transform(o)+", "+mt(ht.transform(t))+")"};function rk(n){let s="",o="",t="",l="";return n.length>5?(s=n.substr(1,2),o=n.substr(3,2),t=n.substr(5,2),l=n.substr(7,2)):(s=n.substr(1,1),o=n.substr(2,1),t=n.substr(3,1),l=n.substr(4,1),s+=s,o+=o,t+=t,l+=l),{red:parseInt(s,16),green:parseInt(o,16),blue:parseInt(t,16),alpha:l?parseInt(l,16)/255:1}}const Pa={test:xc("#"),parse:rk,transform:$s.transform},Bn={test:n=>$s.test(n)||Pa.test(n)||Xs.test(n),parse:n=>$s.test(n)?$s.parse(n):Xs.test(n)?Xs.parse(n):Pa.parse(n),transform:n=>Kt(n)?n:n.hasOwnProperty("red")?$s.transform(n):Xs.transform(n)},Hy="${c}",jy="${n}";function ak(n){var s,o,t,l;return isNaN(n)&&Kt(n)&&((o=(s=n.match(Lt))===null||s===void 0?void 0:s.length)!==null&&o!==void 0?o:0)+((l=(t=n.match(Ia))===null||t===void 0?void 0:t.length)!==null&&l!==void 0?l:0)>0}function Vy(n){typeof n=="number"&&(n=`${n}`);const s=[];let o=0;const t=n.match(Ia);t&&(o=t.length,n=n.replace(Ia,Hy),s.push(...t.map(Bn.parse)));const l=n.match(Lt);return l&&(n=n.replace(Lt,jy),s.push(...l.map(zt.parse))),{values:s,numColors:o,tokenised:n}}function Uy(n){return Vy(n).values}function Wy(n){const{values:s,numColors:o,tokenised:t}=Vy(n),l=s.length;return a=>{let c=t;for(let i=0;i<l;i++)c=c.replace(i<o?Hy:jy,i<o?Bn.transform(a[i]):mt(a[i]));return c}}const ck=n=>typeof n=="number"?0:n;function ik(n){const s=Uy(n);return Wy(n)(s.map(ck))}const Yt={test:ak,parse:Uy,createTransformer:Wy,getAnimatableNone:ik},pk=new Set(["brightness","contrast","saturate","opacity"]);function uk(n){let[s,o]=n.slice(0,-1).split("(");if(s==="drop-shadow")return n;const[t]=o.match(Lt)||[];if(!t)return n;const l=o.replace(t,"");let a=pk.has(s)?1:0;return t!==o&&(a*=100),s+"("+a+l+")"}const dk=/([a-z-]*)\(.*?\)/g,Oa=Object.assign(Object.assign({},Yt),{getAnimatableNone:n=>{const s=n.match(dk);return s?s.map(uk).join(" "):n}});function Or(n,s,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?n+(s-n)*6*o:o<1/2?s:o<2/3?n+(s-n)*(2/3-o)*6:n}function Tp({hue:n,saturation:s,lightness:o,alpha:t}){n/=360,s/=100,o/=100;let l=0,a=0,c=0;if(!s)l=a=c=o;else{const i=o<.5?o*(1+s):o+s-o*s,p=2*o-i;l=Or(p,i,n+1/3),a=Or(p,i,n),c=Or(p,i,n-1/3)}return{red:Math.round(l*255),green:Math.round(a*255),blue:Math.round(c*255),alpha:t}}const yk=(n,s,o)=>{const t=n*n,l=s*s;return Math.sqrt(Math.max(0,o*(l-t)+t))},fk=[Pa,$s,Xs],Lp=n=>fk.find(s=>s.test(n)),Mp=n=>`'${n}' is not an animatable color. Use the equivalent color code instead.`,Ky=(n,s)=>{let o=Lp(n),t=Lp(s);Tt(!!o,Mp(n)),Tt(!!t,Mp(s));let l=o.parse(n),a=t.parse(s);o===Xs&&(l=Tp(l),o=$s),t===Xs&&(a=Tp(a),t=$s);const c=Object.assign({},l);return i=>{for(const p in c)p!=="alpha"&&(c[p]=yk(l[p],a[p],i));return c.alpha=Ec(l.alpha,a.alpha,i),o.transform(c)}},mk=n=>typeof n=="number",hk=(n,s)=>o=>s(n(o)),zy=(...n)=>n.reduce(hk);function Yy(n,s){return mk(n)?o=>Ec(n,s,o):Bn.test(n)?Ky(n,s):Qy(n,s)}const Zy=(n,s)=>{const o=[...n],t=o.length,l=n.map((a,c)=>Yy(a,s[c]));return a=>{for(let c=0;c<t;c++)o[c]=l[c](a);return o}},_k=(n,s)=>{const o=Object.assign(Object.assign({},n),s),t={};for(const l in o)n[l]!==void 0&&s[l]!==void 0&&(t[l]=Yy(n[l],s[l]));return l=>{for(const a in t)o[a]=t[a](l);return o}};function qp(n){const s=Yt.parse(n),o=s.length;let t=0,l=0,a=0;for(let c=0;c<o;c++)t||typeof s[c]=="number"?t++:s[c].hue!==void 0?a++:l++;return{parsed:s,numNumbers:t,numRGB:l,numHSL:a}}const Qy=(n,s)=>{const o=Yt.createTransformer(s),t=qp(n),l=qp(s);return t.numHSL===l.numHSL&&t.numRGB===l.numRGB&&t.numNumbers>=l.numNumbers?zy(Zy(t.parsed,l.parsed),o):(kc(!0,`Complex values '${n}' and '${s}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),c=>`${c>0?s:n}`)},Bk=(n,s)=>o=>Ec(n,s,o);function gk(n){if(typeof n=="number")return Bk;if(typeof n=="string")return Bn.test(n)?Ky:Qy;if(Array.isArray(n))return Zy;if(typeof n=="object")return _k}function Ak(n,s,o){const t=[],l=o||gk(n[0]),a=n.length-1;for(let c=0;c<a;c++){let i=l(n[c],n[c+1]);if(s){const p=Array.isArray(s)?s[c]:s;i=zy(p,i)}t.push(i)}return t}function Ck([n,s],[o]){return t=>o(qy(n,s,t))}function vk(n,s){const o=n.length,t=o-1;return l=>{let a=0,c=!1;if(l<=n[0]?c=!0:l>=n[t]&&(a=t-1,c=!0),!c){let p=1;for(;p<o&&!(n[p]>l||p===t);p++);a=p-1}const i=qy(n[a],n[a+1],l);return s[a](i)}}function Jy(n,s,{clamp:o=!0,ease:t,mixer:l}={}){const a=n.length;Tt(a===s.length,"Both input and output ranges must be the same length"),Tt(!t||!Array.isArray(t)||t.length===a-1,"Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),n[0]>n[a-1]&&(n=[].concat(n),s=[].concat(s),n.reverse(),s.reverse());const c=Ak(s,t,l),i=a===2?Ck(n,c):vk(n,c);return o?p=>i(Sa(n[0],n[a-1],p)):i}const ar=n=>s=>1-n(1-s),Fc=n=>s=>s<=.5?n(2*s)/2:(2-n(2*(1-s)))/2,Dk=n=>s=>Math.pow(s,n),Xy=n=>s=>s*s*((n+1)*s-n),bk=n=>{const s=Xy(n);return o=>(o*=2)<1?.5*s(o):.5*(2-Math.pow(2,-10*(o-1)))},ef=1.525,kk=4/11,wk=8/11,Ek=9/10,nf=n=>n,Sc=Dk(2),$k=ar(Sc),sf=Fc(Sc),of=n=>1-Math.sin(Math.acos(n)),tf=ar(of),xk=Fc(tf),Rc=Xy(ef),Fk=ar(Rc),Sk=Fc(Rc),Rk=bk(ef),Ik=4356/361,Pk=35442/1805,Ok=16061/1805,Ml=n=>{if(n===1||n===0)return n;const s=n*n;return n<kk?7.5625*s:n<wk?9.075*s-9.9*n+3.4:n<Ek?Ik*s-Pk*n+Ok:10.8*n*n-20.52*n+10.72},Tk=ar(Ml),Lk=n=>n<.5?.5*(1-Ml(1-n*2)):.5*Ml(n*2-1)+.5;function Mk(n,s){return n.map(()=>s||sf).splice(0,n.length-1)}function qk(n){const s=n.length;return n.map((o,t)=>t!==0?t/(s-1):0)}function Gk(n,s){return n.map(o=>o*s)}function _l({from:n=0,to:s=1,ease:o,offset:t,duration:l=300}){const a={done:!1,value:n},c=Array.isArray(s)?s:[n,s],i=Gk(t&&t.length===c.length?t:qk(c),l);function p(){return Jy(i,c,{ease:Array.isArray(o)?o:Mk(c,o)})}let u=p();return{next:d=>(a.value=u(d),a.done=d>=l,a),flipTarget:()=>{c.reverse(),u=p()}}}function Nk({velocity:n=0,from:s=0,power:o=.8,timeConstant:t=350,restDelta:l=.5,modifyTarget:a}){const c={done:!1,value:s};let i=o*n;const p=s+i,u=a===void 0?p:a(p);return u!==p&&(i=u-s),{next:d=>{const y=-i*Math.exp(-d/t);return c.done=!(y>l||y<-l),c.value=c.done?u:u+y,c},flipTarget:()=>{}}}const Gp={keyframes:_l,spring:wc,decay:Nk};function Hk(n){if(Array.isArray(n.to))return _l;if(Gp[n.type])return Gp[n.type];const s=new Set(Object.keys(n));return s.has("ease")||s.has("duration")&&!s.has("dampingRatio")?_l:s.has("dampingRatio")||s.has("stiffness")||s.has("mass")||s.has("damping")||s.has("restSpeed")||s.has("restDelta")?wc:_l}function lf(n,s,o=0){return n-s-o}function jk(n,s,o=0,t=!0){return t?lf(s+-n,s,o):s-(n-s)+o}function Vk(n,s,o,t){return t?n>=s+o:n<=-o}const Uk=n=>{const s=({delta:o})=>n(o);return{start:()=>Fa.update(s,!0),stop:()=>W4.update(s)}};function rf(n){var s,o,{from:t,autoplay:l=!0,driver:a=Uk,elapsed:c=0,repeat:i=0,repeatType:p="loop",repeatDelay:u=0,onPlay:d,onStop:y,onComplete:f,onRepeat:h,onUpdate:m}=n,B=My(n,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:g}=B,k,v=0,D=B.duration,w,T=!1,N=!0,Y;const O=Hk(B);!((o=(s=O).needsInterpolation)===null||o===void 0)&&o.call(s,t,g)&&(Y=Jy([0,100],[t,g],{clamp:!1}),t=0,g=100);const K=O(Object.assign(Object.assign({},B),{from:t,to:g}));function te(){v++,p==="reverse"?(N=v%2===0,c=jk(c,D,u,N)):(c=lf(c,D,u),p==="mirror"&&K.flipTarget()),T=!1,h&&h()}function ue(){k.stop(),f&&f()}function X(Pe){if(N||(Pe=-Pe),c+=Pe,!T){const xe=K.next(Math.max(0,c));w=xe.value,Y&&(w=Y(w)),T=N?xe.done:c<=0}m==null||m(w),T&&(v===0&&(D??(D=c)),v<i?Vk(c,D,u,N)&&te():ue())}function De(){d==null||d(),k=a(X),k.start()}return l&&De(),{stop:()=>{y==null||y(),k.stop()}}}function af(n,s){return s?n*(1e3/s):0}function Wk({from:n=0,velocity:s=0,min:o,max:t,power:l=.8,timeConstant:a=750,bounceStiffness:c=500,bounceDamping:i=10,restDelta:p=1,modifyTarget:u,driver:d,onUpdate:y,onComplete:f,onStop:h}){let m;function B(D){return o!==void 0&&D<o||t!==void 0&&D>t}function g(D){return o===void 0?t:t===void 0||Math.abs(o-D)<Math.abs(t-D)?o:t}function k(D){m==null||m.stop(),m=rf(Object.assign(Object.assign({},D),{driver:d,onUpdate:w=>{var T;y==null||y(w),(T=D.onUpdate)===null||T===void 0||T.call(D,w)},onComplete:f,onStop:h}))}function v(D){k(Object.assign({type:"spring",stiffness:c,damping:i,restDelta:p},D))}if(B(n))v({from:n,velocity:s,to:g(n)});else{let D=l*s+n;typeof u<"u"&&(D=u(D));const w=g(D),T=w===o?-1:1;let N,Y;const O=K=>{N=Y,Y=K,s=af(K-N,Ly().delta),(T===1&&K>w||T===-1&&K<w)&&v({from:K,to:w,velocity:s})};k({type:"decay",from:n,velocity:s,timeConstant:a,power:l,restDelta:p,modifyTarget:u,onUpdate:B(D)?O:void 0})}return{stop:()=>m==null?void 0:m.stop()}}const cf=(n,s)=>1-3*s+3*n,pf=(n,s)=>3*s-6*n,uf=n=>3*n,ql=(n,s,o)=>((cf(s,o)*n+pf(s,o))*n+uf(s))*n,df=(n,s,o)=>3*cf(s,o)*n*n+2*pf(s,o)*n+uf(s),Kk=1e-7,zk=10;function Yk(n,s,o,t,l){let a,c,i=0;do c=s+(o-s)/2,a=ql(c,t,l)-n,a>0?o=c:s=c;while(Math.abs(a)>Kk&&++i<zk);return c}const Zk=8,Qk=.001;function Jk(n,s,o,t){for(let l=0;l<Zk;++l){const a=df(s,o,t);if(a===0)return s;const c=ql(s,o,t)-n;s-=c/a}return s}const Bl=11,cl=1/(Bl-1);function Xk(n,s,o,t){if(n===s&&o===t)return nf;const l=new Float32Array(Bl);for(let c=0;c<Bl;++c)l[c]=ql(c*cl,n,o);function a(c){let i=0,p=1;const u=Bl-1;for(;p!==u&&l[p]<=c;++p)i+=cl;--p;const d=(c-l[p])/(l[p+1]-l[p]),y=i+d*cl,f=df(y,n,o);return f>=Qk?Jk(c,y,n,o):f===0?y:Yk(c,i,i+cl,n,o)}return c=>c===0||c===1?c:ql(a(c),s,t)}const Tr={};class ew{constructor(){this.subscriptions=new Set}add(s){return this.subscriptions.add(s),()=>this.subscriptions.delete(s)}notify(s,o,t){if(this.subscriptions.size)for(const l of this.subscriptions)l(s,o,t)}clear(){this.subscriptions.clear()}}const Np=n=>!isNaN(parseFloat(n));class nw{constructor(s){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new ew,this.canTrackVelocity=!1,this.updateAndNotify=o=>{this.prev=this.current,this.current=o;const{delta:t,timestamp:l}=Ly();this.lastUpdated!==l&&(this.timeDelta=t,this.lastUpdated=l),Fa.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>Fa.postRender(this.velocityCheck),this.velocityCheck=({timestamp:o})=>{this.canTrackVelocity||(this.canTrackVelocity=Np(this.current)),o!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=s,this.canTrackVelocity=Np(this.current)}onChange(s){return this.updateSubscribers.add(s)}clearListeners(){this.updateSubscribers.clear()}set(s){this.updateAndNotify(s)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?af(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(s){return this.stop(),new Promise(o=>{const{stop:t}=s(o);this.stopAnimation=t}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function sw(n){return new nw(n)}const{isArray:ow}=Array;function tw(){const n=J({}),s=t=>{const l=a=>{n.value[a]&&(n.value[a].stop(),n.value[a].destroy(),delete n.value[a])};t?ow(t)?t.forEach(l):l(t):Object.keys(n.value).forEach(l)},o=(t,l,a)=>{if(n.value[t])return n.value[t];const c=sw(l);return c.onChange(i=>a[t]=i),n.value[t]=c,c};return f_(s),{motionValues:n,get:o,stop:s}}const lw=n=>Array.isArray(n),Vs=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),Lr=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),rw=n=>({type:"spring",stiffness:550,damping:n===0?100:30,restDelta:.01,restSpeed:10}),Mr=()=>({type:"keyframes",ease:"linear",duration:300}),aw=n=>({type:"keyframes",duration:800,values:n}),Hp={default:rw,x:Vs,y:Vs,z:Vs,rotate:Vs,rotateX:Vs,rotateY:Vs,rotateZ:Vs,scaleX:Lr,scaleY:Lr,scale:Lr,backgroundColor:Mr,color:Mr,opacity:Mr},yf=(n,s)=>{let o;return lw(s)?o=aw:o=Hp[n]||Hp.default,{to:s,...o(s)}},jp={...zt,transform:Math.round},ff={color:Bn,backgroundColor:Bn,outlineColor:Bn,fill:Bn,stroke:Bn,borderColor:Bn,borderTopColor:Bn,borderRightColor:Bn,borderBottomColor:Bn,borderLeftColor:Bn,borderWidth:ge,borderTopWidth:ge,borderRightWidth:ge,borderBottomWidth:ge,borderLeftWidth:ge,borderRadius:ge,radius:ge,borderTopLeftRadius:ge,borderTopRightRadius:ge,borderBottomRightRadius:ge,borderBottomLeftRadius:ge,width:ge,maxWidth:ge,height:ge,maxHeight:ge,size:ge,top:ge,right:ge,bottom:ge,left:ge,padding:ge,paddingTop:ge,paddingRight:ge,paddingBottom:ge,paddingLeft:ge,margin:ge,marginTop:ge,marginRight:ge,marginBottom:ge,marginLeft:ge,rotate:js,rotateX:js,rotateY:js,rotateZ:js,scale:al,scaleX:al,scaleY:al,scaleZ:al,skew:js,skewX:js,skewY:js,distance:ge,translateX:ge,translateY:ge,translateZ:ge,x:ge,y:ge,z:ge,perspective:ge,transformPerspective:ge,opacity:ht,originX:Op,originY:Op,originZ:ge,zIndex:jp,filter:Oa,WebkitFilter:Oa,fillOpacity:ht,strokeOpacity:ht,numOctaves:jp},Ic=n=>ff[n],mf=(n,s)=>s&&typeof n=="number"&&s.transform?s.transform(n):n;function cw(n,s){let o=Ic(n);return o!==Oa&&(o=Yt),o.getAnimatableNone?o.getAnimatableNone(s):void 0}const iw={linear:nf,easeIn:Sc,easeInOut:sf,easeOut:$k,circIn:of,circInOut:xk,circOut:tf,backIn:Rc,backInOut:Sk,backOut:Fk,anticipate:Rk,bounceIn:Tk,bounceInOut:Lk,bounceOut:Ml},Vp=n=>{if(Array.isArray(n)){const[s,o,t,l]=n;return Xk(s,o,t,l)}else if(typeof n=="string")return iw[n];return n},pw=n=>Array.isArray(n)&&typeof n[0]!="number",Up=(n,s)=>n==="zIndex"?!1:!!(typeof s=="number"||Array.isArray(s)||typeof s=="string"&&Yt.test(s)&&!s.startsWith("url("));function uw(n){return Array.isArray(n.to)&&n.to[0]===null&&(n.to=[...n.to],n.to[0]=n.from),n}function dw({ease:n,times:s,delay:o,...t}){const l={...t};return s&&(l.offset=s),n&&(l.ease=pw(n)?n.map(Vp):Vp(n)),o&&(l.elapsed=-o),l}function yw(n,s,o){return Array.isArray(s.to)&&(n.duration||(n.duration=800)),uw(s),fw(n)||(n={...n,...yf(o,s.to)}),{...s,...dw(n)}}function fw({delay:n,repeat:s,repeatType:o,repeatDelay:t,from:l,...a}){return!!Object.keys(a).length}function mw(n,s){return n[s]||n.default||n}function hw(n,s,o,t,l){const a=mw(t,n);let c=a.from===null||a.from===void 0?s.get():a.from;const i=Up(n,o);c==="none"&&i&&typeof o=="string"&&(c=cw(n,o));const p=Up(n,c);function u(y){const f={from:c,to:o,velocity:t.velocity?t.velocity:s.getVelocity(),onUpdate:h=>s.set(h)};return a.type==="inertia"||a.type==="decay"?Wk({...f,...a}):rf({...yw(a,f,n),onUpdate:h=>{f.onUpdate(h),a.onUpdate&&a.onUpdate(h)},onComplete:()=>{t.onComplete&&t.onComplete(),l&&l(),y&&y()}})}function d(y){return s.set(o),t.onComplete&&t.onComplete(),l&&l(),y&&y(),{stop:()=>{}}}return!p||!i||a.type===!1?d:u}function _w(){const{motionValues:n,stop:s,get:o}=tw();return{motionValues:n,stop:s,push:(l,a,c,i={},p)=>{const u=c[l],d=o(l,u,c);if(i&&i.immediate){d.set(a);return}const y=hw(l,d,a,i,p);d.start(y)}}}function Bw(n,s={},{motionValues:o,push:t,stop:l}=_w()){const a=b(s),c=J(!1);Ae(o,y=>{c.value=Object.values(y).filter(f=>f.isAnimating()).length>0},{immediate:!0,deep:!0});const i=y=>{if(!a||!a[y])throw new Error(`The variant ${y} does not exist.`);return a[y]},p=y=>(typeof y=="string"&&(y=i(y)),Promise.all(Object.entries(y).map(([f,h])=>{if(f!=="transition")return new Promise(m=>t(f,h,n,y.transition||yf(f,y[f]),m))}).filter(Boolean)));return{isAnimating:c,apply:p,set:y=>{const f=ia(y)?y:i(y);Object.entries(f).forEach(([h,m])=>{h!=="transition"&&t(h,m,n,{immediate:!0})})},leave:async y=>{let f;if(a&&(a.leave&&(f=a.leave),!a.leave&&a.initial&&(f=a.initial)),!f){y();return}await p(f),y()},stop:l}}const Pc=typeof window<"u",gw=()=>Pc&&window.onpointerdown===null,Aw=()=>Pc&&window.ontouchstart===null,Cw=()=>Pc&&window.onmousedown===null;function vw({target:n,state:s,variants:o,apply:t}){const l=b(o),a=J(!1),c=J(!1),i=J(!1),p=F(()=>{let d=[];return l&&(l.hovered&&(d=[...d,...Object.keys(l.hovered)]),l.tapped&&(d=[...d,...Object.keys(l.tapped)]),l.focused&&(d=[...d,...Object.keys(l.focused)])),d}),u=F(()=>{const d={};Object.assign(d,s.value),a.value&&l.hovered&&Object.assign(d,l.hovered),c.value&&l.tapped&&Object.assign(d,l.tapped),i.value&&l.focused&&Object.assign(d,l.focused);for(const y in d)p.value.includes(y)||delete d[y];return d});l.hovered&&(Ce(n,"mouseenter",()=>a.value=!0),Ce(n,"mouseleave",()=>{a.value=!1,c.value=!1}),Ce(n,"mouseout",()=>{a.value=!1,c.value=!1})),l.tapped&&(Cw()&&(Ce(n,"mousedown",()=>c.value=!0),Ce(n,"mouseup",()=>c.value=!1)),gw()&&(Ce(n,"pointerdown",()=>c.value=!0),Ce(n,"pointerup",()=>c.value=!1)),Aw()&&(Ce(n,"touchstart",()=>c.value=!0),Ce(n,"touchend",()=>c.value=!1))),l.focused&&(Ce(n,"focus",()=>i.value=!0),Ce(n,"blur",()=>i.value=!1)),Ae(u,t)}function Dw({set:n,target:s,apply:o,variants:t,variant:l}){const a=b(t);Ae(()=>s,()=>{a&&(a.initial&&n("initial"),a.enter&&(l.value="enter"))},{immediate:!0,flush:"pre"})}function bw({state:n,apply:s}){Ae(n,o=>{o&&s(o)},{immediate:!0})}function kw({target:n,variants:s,variant:o}){const t=b(s);t&&(t.visible||t.visibleOnce)&&pB(n,([{isIntersecting:l}])=>{t.visible?l?o.value="visible":o.value="initial":t.visibleOnce&&(l&&o.value!=="visibleOnce"?o.value="visibleOnce":o.value||(o.value="initial"))})}function ww(n,s={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){s.lifeCycleHooks&&Dw(n),s.syncVariants&&bw(n),s.visibilityHooks&&kw(n),s.eventListeners&&vw(n)}function hf(n={}){const s=Ve({...n}),o=J({});return Ae(s,()=>{const t={};for(const[l,a]of Object.entries(s)){const c=Ic(l),i=mf(a,c);t[l]=i}o.value=t},{immediate:!0,deep:!0}),{state:s,style:o}}function Oc(n,s){Ae(()=>$n(n),o=>{o&&s(o)},{immediate:!0})}const Ew={x:"translateX",y:"translateY",z:"translateZ"};function _f(n={},s=!0){const o=Ve({...n}),t=J("");return Ae(o,l=>{let a="",c=!1;if(s&&(l.x||l.y||l.z)){const i=[l.x||0,l.y||0,l.z||0].map(ge.transform).join(",");a+=`translate3d(${i}) `,c=!0}for(const[i,p]of Object.entries(l)){if(s&&(i==="x"||i==="y"||i==="z"))continue;const u=Ic(i),d=mf(p,u);a+=`${Ew[i]||i}(${d}) `}s&&!c&&(a+="translateZ(0px) "),t.value=a.trim()},{immediate:!0,deep:!0}),{state:o,transform:t}}const $w=["","X","Y","Z"],xw=["perspective","translate","scale","rotate","skew"],Bf=["transformPerspective","x","y","z"];xw.forEach(n=>{$w.forEach(s=>{const o=n+s;Bf.push(o)})});const Fw=new Set(Bf);function Tc(n){return Fw.has(n)}const Sw=new Set(["originX","originY","originZ"]);function gf(n){return Sw.has(n)}function Rw(n){const s={},o={};return Object.entries(n).forEach(([t,l])=>{Tc(t)||gf(t)?s[t]=l:o[t]=l}),{transform:s,style:o}}function Af(n){const{transform:s,style:o}=Rw(n),{transform:t}=_f(s),{style:l}=hf(o);return t.value&&(l.value.transform=t.value),l.value}function Iw(n,s){let o,t;const{state:l,style:a}=hf();return Oc(n,c=>{t=c;for(const i of Object.keys(ff))c.style[i]===null||c.style[i]===""||Tc(i)||gf(i)||(l[i]=c.style[i]);o&&Object.entries(o).forEach(([i,p])=>c.style[i]=p),s&&s(l)}),Ae(a,c=>{if(!t){o=c;return}for(const i in c)t.style[i]=c[i]},{immediate:!0}),{style:l}}function Pw(n){const s=n.trim().split(/\) |\)/);if(s.length===1)return{};const o=t=>t.endsWith("px")||t.endsWith("deg")?parseFloat(t):isNaN(Number(t))?Number(t):t;return s.reduce((t,l)=>{if(!l)return t;const[a,c]=l.split("("),p=c.split(",").map(d=>o(d.endsWith(")")?d.replace(")",""):d.trim())),u=p.length===1?p[0]:p;return{...t,[a]:u}},{})}function Ow(n,s){Object.entries(Pw(s)).forEach(([o,t])=>{const l=["x","y","z"];if(o==="translate3d"){if(t===0){l.forEach(a=>n[a]=0);return}t.forEach((a,c)=>n[l[c]]=a);return}if(t=parseFloat(t),o==="translateX"){n.x=t;return}if(o==="translateY"){n.y=t;return}if(o==="translateZ"){n.z=t;return}n[o]=t})}function Tw(n,s){let o,t;const{state:l,transform:a}=_f();return Oc(n,c=>{t=c,c.style.transform&&Ow(l,c.style.transform),o&&(c.style.transform=o),s&&s(l)}),Ae(a,c=>{if(!t){o=c;return}t.style.transform=c},{immediate:!0}),{transform:l}}function Lw(n,s){const o=Ve({}),t=c=>Object.entries(c).forEach(([i,p])=>o[i]=p),{style:l}=Iw(n,t),{transform:a}=Tw(n,t);return Ae(o,c=>{Object.entries(c).forEach(([i,p])=>{const u=Tc(i)?a:l;u[i]&&u[i]===p||(u[i]=p)})},{immediate:!0,deep:!0}),Oc(n,()=>s&&t(s)),{motionProperties:o,style:l,transform:a}}function Mw(n={}){const s=b(n),o=J();return{state:F(()=>{if(o.value)return s[o.value]}),variant:o}}function Cf(n,s={},o){const{motionProperties:t}=Lw(n),{variant:l,state:a}=Mw(s),c=Bw(t,s),i={target:n,variant:l,variants:s,state:a,motionProperties:t,...c};return ww(i,o),i}const qw=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],Gw=(n,s)=>{const o=n.props?n.props:n.data&&n.data.attrs?n.data.attrs:{};o&&(o.variants&&ia(o.variants)&&(s.value={...s.value,...o.variants}),qw.forEach(t=>{if(t==="delay"){if(o&&o[t]&&Jh(o[t])){const l=o[t];s&&s.value&&(s.value.enter&&(s.value.enter.transition||(s.value.enter.transition={}),s.value.enter.transition={delay:l,...s.value.enter.transition}),s.value.visible&&(s.value.visible.transition||(s.value.visible.transition={}),s.value.visible.transition={delay:l,...s.value.visible.transition}),s.value.visibleOnce&&(s.value.visibleOnce.transition||(s.value.visibleOnce.transition={}),s.value.visibleOnce.transition={delay:l,...s.value.visibleOnce.transition}))}return}t==="visible-once"&&(t="visibleOnce"),o&&o[t]&&ia(o[t])&&(s.value[t]=o[t])}))},qr=n=>({created:(o,t,l)=>{const a=t.value&&typeof t.value=="string"?t.value:l.key;a&&Tr[a]&&Tr[a].stop();const c=J(n||{});typeof t.value=="object"&&(c.value=t.value),Gw(l,c);const i=Cf(o,c);o.motionInstance=i,a&&(Tr[a]=i)},getSSRProps(o,t){let{initial:l}=o.value||t&&(t==null?void 0:t.props)||{};l=b(l);const a=H4((n==null?void 0:n.initial)||{},l||{});return!a||Object.keys(a).length===0?void 0:{style:Af(a)}}}),Nw={initial:{opacity:0},enter:{opacity:1}},Hw={initial:{opacity:0},visible:{opacity:1}},jw={initial:{opacity:0},visibleOnce:{opacity:1}},Vw={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},Uw={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},Ww={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},Kw={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},zw={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},Yw={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},Zw={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},Qw={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},Jw={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},Xw={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},eE={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},nE={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},sE={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},oE={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},tE={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},lE={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},rE={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},aE={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},cE={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},iE={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},pE={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},uE={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},dE={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},yE={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},fE={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},mE={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},hE={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},Ta={__proto__:null,fade:Nw,fadeVisible:Hw,fadeVisibleOnce:jw,pop:Vw,popVisible:Uw,popVisibleOnce:Ww,rollBottom:sE,rollLeft:Kw,rollRight:Zw,rollTop:Xw,rollVisibleBottom:oE,rollVisibleLeft:zw,rollVisibleOnceBottom:tE,rollVisibleOnceLeft:Yw,rollVisibleOnceRight:Jw,rollVisibleOnceTop:nE,rollVisibleRight:Qw,rollVisibleTop:eE,slideBottom:fE,slideLeft:lE,slideRight:cE,slideTop:uE,slideVisibleBottom:mE,slideVisibleLeft:rE,slideVisibleOnceBottom:hE,slideVisibleOnceLeft:aE,slideVisibleOnceRight:pE,slideVisibleOnceTop:yE,slideVisibleRight:iE,slideVisibleTop:dE},_E=Ie({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(n){var i;const s=o5(),o=Ve({});if(!n.is&&!s.default)return()=>mn("div",{});const t=F(()=>{let p;return n.preset&&(p=Ta[n.preset]),p}),l=F(()=>({initial:n.initial,enter:n.enter,leave:n.leave,visible:n.visible,visibleOnce:n.visibleOnce,hovered:n.hovered,tapped:n.tapped,focused:n.focused})),a=F(()=>{const p={...l.value,...t.value||{},...n.variants||{}};return n.delay&&(p.enter.transition={...p.enter.transition},p.enter.transition.delay=parseInt(n.delay)),p}),c=F(()=>{if(!n.is)return;let p=n.is;return typeof c.value=="string"&&!tu(p)&&(p=El(p)),p});if(((i=process==null?void 0:process.env)==null?void 0:i.NODE_ENV)==="development"||process!=null&&process.dev){const p=u=>{var d;(d=u.variants)!=null&&d.initial&&u.set("initial"),setTimeout(()=>{var y,f,h;(y=u.variants)!=null&&y.enter&&u.apply("enter"),(f=u.variants)!=null&&f.visible&&u.apply("visible"),(h=u.variants)!=null&&h.visibleOnce&&u.apply("visibleOnce")},10)};Jl(()=>Object.entries(o).forEach(([u,d])=>p(d)))}return{slots:s,component:c,motionConfig:a,instances:o}},render({slots:n,motionConfig:s,instances:o,component:t}){var i;const l=Af(s.initial||{}),a=(p,u)=>(p.props||(p.props={}),p.props.style=l,p.props.onVnodeMounted=({el:d})=>{const y=Cf(d,s);o[u]=y},p);if(t){const p=mn(t,void 0,n);return a(p,0),p}return(((i=n.default)==null?void 0:i.call(n))||[]).map((p,u)=>a(p,u))}});function BE(n){const s="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",o="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",t=new RegExp(s.split("").join("|"),"g");return n.toString().replace(/[A-Z]/g,l=>`-${l}`).toLowerCase().replace(/\s+/g,"-").replace(t,l=>o.charAt(s.indexOf(l))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const gE={install(n,s){if(n.directive("motion",qr()),n.component("Motion",_E),!s||s&&!s.excludePresets)for(const o in Ta){const t=Ta[o];n.directive(`motion-${BE(o)}`,qr(t))}if(s&&s.directives)for(const o in s.directives){const t=s.directives[o];t.initial,n.directive(`motion-${o}`,qr(t))}}};var Wp;const Bt=typeof window<"u",AE=Object.prototype.toString,CE=n=>AE.call(n)==="[object Object]";Bt&&((Wp=window==null?void 0:window.navigator)!=null&&Wp.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function vE(n){return Va()?(yu(n),!0):!1}function DE(n){var s;const o=b(n);return(s=o==null?void 0:o.$el)!=null?s:o}const bE=Bt?window:void 0,La=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ma="__vueuse_ssr_handlers__";La[Ma]=La[Ma]||{};La[Ma];function kE(n,s={}){const{immediate:o=!0,window:t=bE}=s,l=J(!1);let a=null;function c(){!l.value||!t||(n(),a=t.requestAnimationFrame(c))}function i(){!l.value&&t&&(l.value=!0,c())}function p(){l.value=!1,a!=null&&t&&(t.cancelAnimationFrame(a),a=null)}return o&&i(),vE(p),{isActive:l,pause:p,resume:i}}var Kp;(function(n){n.UP="UP",n.RIGHT="RIGHT",n.DOWN="DOWN",n.LEFT="LEFT",n.NONE="NONE"})(Kp||(Kp={}));const cr="vue-starport-injection",vf="vue-starport-options",wE={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},Df={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var EE=Object.defineProperty,Gl=Object.getOwnPropertySymbols,bf=Object.prototype.hasOwnProperty,kf=Object.prototype.propertyIsEnumerable,zp=(n,s,o)=>s in n?EE(n,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[s]=o,$E=(n,s)=>{for(var o in s||(s={}))bf.call(s,o)&&zp(n,o,s[o]);if(Gl)for(var o of Gl(s))kf.call(s,o)&&zp(n,o,s[o]);return n},Yp=(n,s)=>{var o={};for(var t in n)bf.call(n,t)&&s.indexOf(t)<0&&(o[t]=n[t]);if(n!=null&&Gl)for(var t of Gl(n))s.indexOf(t)<0&&kf.call(n,t)&&(o[t]=n[t]);return o};const xE=Ie({name:"StarportProxy",props:$E({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},Df),setup(n,s){const o=$(cr),t=F(()=>o.getInstance(n.port,n.component)),l=J(),a=t.value.generateId(),c=J(!1);return t.value.isVisible||(t.value.land(),c.value=!0),fo(async()=>{if(t.value.el){console.error(`[Vue Starport] Multiple proxies of "${t.value.componentName}" with port "${n.port}" detected. The later one will be ignored.`);return}if(t.value.el=l.value,await tn(),c.value=!0,t.value.rect.update(),t.value.rect.width===0||t.value.rect.height===0){const i=t.value.rect.width===0?"width":"height";console.warn(`[Vue Starport] The proxy of component "${t.value.componentName}" (port "${n.port}") has no ${i} on initial render, have you set the size for it?`),console.warn("element:",t.value.el),console.warn("rect:",t.value.rect)}}),Ht(async()=>{t.value.rect.update(),t.value.liftOff(),t.value.el=void 0,c.value=!1,!t.value.options.keepAlive&&(await tn(),await tn(),!t.value.el&&o.dispose(t.value.port))}),Ae(()=>n,async()=>{t.value.props&&await tn();const i=n,{props:p}=i,u=Yp(i,["props"]);t.value.props=p||{},t.value.setLocalOptions(u)},{deep:!0,immediate:!0}),()=>{const i=n,{initialProps:p,mountedProps:u}=i,d=Yp(i,["initialProps","mountedProps"]),y=ye(d,(c.value?u:p)||{});return mn("div",ye(y,{id:a,ref:l,"data-starport-proxy":t.value.componentId,"data-starport-landed":t.value.isLanded?"true":void 0,"data-starport-floating":t.value.isLanded?void 0:"true"}),s.slots.default?mn(s.slots.default):void 0)}}});var FE=Object.defineProperty,SE=Object.defineProperties,RE=Object.getOwnPropertyDescriptors,Zp=Object.getOwnPropertySymbols,IE=Object.prototype.hasOwnProperty,PE=Object.prototype.propertyIsEnumerable,Qp=(n,s,o)=>s in n?FE(n,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[s]=o,OE=(n,s)=>{for(var o in s||(s={}))IE.call(s,o)&&Qp(n,o,s[o]);if(Zp)for(var o of Zp(s))PE.call(s,o)&&Qp(n,o,s[o]);return n},TE=(n,s)=>SE(n,RE(s));const LE=Ie({name:"Starport",inheritAttrs:!0,props:Df,setup(n,s){const o=J(!1);return fo(()=>{if(o.value=!0,!$(cr))throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.")}),()=>{var c,i;const t=(i=(c=s.slots).default)==null?void 0:i.call(c);if(!t)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(t.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${t.length}`);const l=t[0];let a=l.type;return(!CE(a)||ms(a))&&(a={render(){return t}}),mn(xE,TE(OE({},n),{key:n.port,component:Wl(a),props:l.props}))}}});function ME(n){const s=Ve({height:0,width:0,left:0,top:0,update:t,listen:a,pause:c,margin:"0px",padding:"0px"}),o=Bt?document.documentElement||document.body:void 0;function t(){if(!Bt)return;const i=DE(n);if(!i)return;const{height:p,width:u,left:d,top:y}=i.getBoundingClientRect(),f=window.getComputedStyle(i),h=f.margin,m=f.padding;Object.assign(s,{height:p,width:u,left:d,top:o.scrollTop+y,margin:h,padding:m})}const l=kE(t,{immediate:!1});function a(){Bt&&(t(),l.resume())}function c(){l.pause()}return s}let qE=(n,s=21)=>(o=s)=>{let t="",l=o;for(;l--;)t+=n[Math.random()*n.length|0];return t};const Jp=qE("abcdefghijklmnopqrstuvwxyz",5);function Xp(n){return n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function GE(n){var s;return n.name||((s=n.__file)==null?void 0:s.split(/[\/\\.]/).slice(-2)[0])||""}var NE=Object.defineProperty,eu=Object.getOwnPropertySymbols,HE=Object.prototype.hasOwnProperty,jE=Object.prototype.propertyIsEnumerable,nu=(n,s,o)=>s in n?NE(n,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[s]=o,Gr=(n,s)=>{for(var o in s||(s={}))HE.call(s,o)&&nu(n,o,s[o]);if(eu)for(var o of eu(s))jE.call(s,o)&&nu(n,o,s[o]);return n};function VE(n,s,o={}){const t=GE(s),l=Xp(t)||Jp(),a=J(),c=J(null),i=J(!1),p=J(!1),u=Hf(!0),d=J({}),y=F(()=>Gr(Gr(Gr({},wE),o),d.value)),f=J(0);let h;u.run(()=>{h=ME(a),Ae(a,async k=>{k&&(p.value=!0),await tn(),a.value||(p.value=!1)})});const m=Xp(n);function B(){return`starport-${l}-${m}-${Jp()}`}const g=B();return Ve({el:a,id:g,port:n,props:c,rect:h,scope:u,isLanded:i,isVisible:p,options:y,liftOffTime:f,component:s,componentName:t,componentId:l,generateId:B,setLocalOptions(k={}){d.value=JSON.parse(JSON.stringify(k))},elRef(){return a},liftOff(){i.value&&(i.value=!1,f.value=Date.now(),h.listen())},land(){i.value||(i.value=!0,h.pause())}})}function UE(n){const s=Ve(new Map);function o(l,a){let c=s.get(l);return c||(c=VE(l,a,n),s.set(l,c)),c.component=a,c}function t(l){var a;(a=s.get(l))==null||a.scope.stop(),s.delete(l)}return{portMap:s,dispose:t,getInstance:o}}var WE=Object.defineProperty,KE=Object.defineProperties,zE=Object.getOwnPropertyDescriptors,su=Object.getOwnPropertySymbols,YE=Object.prototype.hasOwnProperty,ZE=Object.prototype.propertyIsEnumerable,ou=(n,s,o)=>s in n?WE(n,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[s]=o,QE=(n,s)=>{for(var o in s||(s={}))YE.call(s,o)&&ou(n,o,s[o]);if(su)for(var o of su(s))ZE.call(s,o)&&ou(n,o,s[o]);return n},JE=(n,s)=>KE(n,zE(s));const XE=Ie({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(n){const s=$(cr);if(!s)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const o=F(()=>s.getInstance(n.port,n.component)),t=F(()=>{var c;return((c=o.value.el)==null?void 0:c.id)||o.value.id}),l=F(()=>{const c=Date.now()-o.value.liftOffTime,i=Math.max(0,o.value.options.duration-c),p=o.value.rect,u={position:"absolute",left:0,top:0,width:`${p.width}px`,height:`${p.height}px`,margin:p.margin,padding:p.padding,transform:`translate3d(${p.left}px,${p.top}px,0px)`};return!o.value.isVisible||!o.value.el?JE(QE({},u),{zIndex:-1,display:"none"}):(o.value.isLanded?u.display="none":Object.assign(u,{transitionProperty:"all",transitionDuration:`${i}ms`,transitionTimingFunction:o.value.options.easing}),u)}),a={onTransitionend(c){o.value.isLanded||console.warn(`[Vue Starport] Transition duration of component "${o.value.componentName}" is too short (${c.elapsedTime}s) that may cause animation glitches. Try to increase the duration of that component, or decrease the duration the Starport (current: ${o.value.options.duration/1e3}s).`)}};return()=>{const c=!!(o.value.isLanded&&o.value.el);return mn("div",{style:l.value,"data-starport-craft":o.value.componentId,"data-starport-landed":o.value.isLanded?"true":void 0,"data-starport-floating":o.value.isLanded?void 0:"true",onTransitionend:o.value.land},mn(jm,{to:c?`#${t.value}`:"body",disabled:!c},mn(o.value.component,ye(a,o.value.props))))}}}),e$=Ie({name:"StarportCarrier",setup(n,{slots:s}){const o=UE($(vf,{}));return Sn().appContext.app.provide(cr,o),()=>{var l;return[(l=s.default)==null?void 0:l.call(s),Array.from(o.portMap.entries()).map(([a,{component:c}])=>mn(XE,{key:a,port:a,component:c}))]}}});function n$(n={}){return{install(s){s.provide(vf,n),s.component("Starport",LE),s.component("StarportCarrier",e$)}}}function s$(n){function s(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}s(),window.addEventListener("resize",s),n.app.use(gE),n.app.use(n$({keepAlive:!0}))}function bn(n,s,o){var t;return((t=n.instance)==null?void 0:t.$).provides[s]??o}function o$(){return{install(n){n.directive("click",{name:"v-click",mounted(s,o){var d,y,f,h;if(ft.value||(d=bn(o,pt))!=null&&d.value)return;const t=bn(o,Ys),l=bn(o,it),a=bn(o,aa),c=o.modifiers.hide!==!1&&o.modifiers.hide!=null,i=o.modifiers.fade!==!1&&o.modifiers.fade!=null,p=((y=t==null?void 0:t.value)==null?void 0:y.length)||0,u=i?Ih:vr;if(t&&!((f=t==null?void 0:t.value)!=null&&f.includes(s))&&t.value.push(s),o.value==null&&(o.value=t==null?void 0:t.value.length),!(a!=null&&a.value.has(o.value)))a==null||a.value.set(o.value,[s]);else if(!((h=a==null?void 0:a.value.get(o.value))!=null&&h.includes(s))){const m=(a==null?void 0:a.value.get(o.value))||[];a==null||a.value.set(o.value,[s].concat(m))}s==null||s.classList.toggle(Ks,!0),l&&Ae(l,()=>{const m=(l==null?void 0:l.value)??0,B=o.value!=null?m>=o.value:m>p;s.classList.contains(Dr)||s.classList.toggle(u,!B),c!==!1&&c!==void 0&&s.classList.toggle(u,B),s.classList.toggle(Ko,!1);const g=a==null?void 0:a.value.get(m);g==null||g.forEach((k,v)=>{k.classList.toggle(tl,!1),v===g.length-1?k.classList.toggle(Ko,!0):k.classList.toggle(tl,!0)}),s.classList.contains(Ko)||s.classList.toggle(tl,B)},{immediate:!0})},unmounted(s,o){s==null||s.classList.toggle(Ks,!1);const t=bn(o,Ys);t!=null&&t.value&&ca(t.value,s)}}),n.directive("after",{name:"v-after",mounted(s,o){var i,p;if(ft.value||(i=bn(o,pt))!=null&&i.value)return;const t=bn(o,Ys),l=bn(o,it),a=bn(o,aa),c=t==null?void 0:t.value.length;o.value==null&&(o.value=t==null?void 0:t.value.length),a!=null&&a.value.has(o.value)?(p=a==null?void 0:a.value.get(o.value))==null||p.push(s):a==null||a.value.set(o.value,[s]),s==null||s.classList.toggle(Ks,!0),l&&Ae(l,()=>{const u=(l.value??0)>=(o.value??c??0);s.classList.contains(Dr)||s.classList.toggle(vr,!u),s.classList.toggle(Ko,!1),s.classList.contains(Ko)||s.classList.toggle(tl,u)},{immediate:!0})},unmounted(s){s==null||s.classList.toggle(Ks,!0)}}),n.directive("click-hide",{name:"v-click-hide",mounted(s,o){var c,i,p;if(ft.value||(c=bn(o,pt))!=null&&c.value)return;const t=bn(o,Ys),l=bn(o,it),a=((i=t==null?void 0:t.value)==null?void 0:i.length)||0;t&&!((p=t==null?void 0:t.value)!=null&&p.includes(s))&&t.value.push(s),s==null||s.classList.toggle(Ks,!0),l&&Ae(l,()=>{const u=(l==null?void 0:l.value)??0,d=o.value!=null?u>=o.value:u>a;s.classList.toggle(vr,d),s.classList.toggle(Dr,d)},{immediate:!0})},unmounted(s,o){s==null||s.classList.toggle(Ks,!1);const t=bn(o,Ys);t!=null&&t.value&&ca(t.value,s)}})}}}function t$(n,s){const o=$y(n),t=xy(s,o.currentRoute,o.currentPage);return{nav:{...o,...t,downloadPDF:wa,next:Ps,nextSlide:It,openInEditor:P4,prev:Os,prevSlide:Pt},configs:Se,themeConfigs:F(()=>Se.themeConfig)}}function l$(){return{install(n){const s=t$(Ln,On);n.provide(I,Ve(s))}}}const No=G5(G4);No.use(Cn);No.use(Fh());No.use(o$());No.use(l$());s$({app:No,router:Cn});No.mount("#app");export{gc as $,O7 as A,J as B,u$ as C,yn as D,Ke as E,Oe as F,jg as G,I4 as H,On as I,Ll as J,$4 as K,Sr as L,fo as M,Ve as N,i$ as O,d$ as P,Ae as Q,x as R,_y as S,Re as T,dn as U,sA as V,Ft as W,xr as X,_1 as Y,Bc as Z,P as _,I as a,ze as a0,r$ as a1,a$ as a2,d1 as a3,fA as a4,c$ as a5,Vn as a6,et as a7,Js as a8,es as a9,va as aa,Fg as ab,Sg as ac,Rg as ad,Pg as ae,er as af,Dd as ag,y$ as ah,hn as ai,rl as aj,YA as ak,Id as al,Og as am,Ht as an,ic as b,Se as c,Ie as d,w8 as e,se as f,e as g,b as h,$ as i,Ze as j,Iy as k,r as l,q as m,Xe as n,C as o,ke as p,uc as q,jt as r,Kn as s,ao as t,p$ as u,F as v,br as w,R as x,iy as y,G7 as z};
