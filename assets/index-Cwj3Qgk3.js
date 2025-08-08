import{c as f,t as _,i as b,h as w,b as S}from"./card-B4rxitd3.js";import{r as c,j as m}from"./index-CEtBPBH7.js";/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],H=f("circle-alert",N);/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],L=f("clock",P);/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],O=f("copy",$);/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],z=f("external-link",M);function k(...e){return _(b(e))}const j=w("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",{variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},defaultVariants:{variant:"default"}}),A=c.forwardRef(({className:e,variant:t,...r},a)=>m.jsx("div",{ref:a,role:"alert",className:k(j({variant:t}),e),...r}));A.displayName="Alert";const E=c.forwardRef(({className:e,...t},r)=>m.jsx("div",{ref:r,className:k("text-sm [&_p]:leading-relaxed",e),...t}));E.displayName="AlertDescription";function B(e,t=[]){let r=[];function a(u,o){const n=c.createContext(o),s=r.length;r=[...r,o];const p=d=>{var h;const{scope:l,children:y,...x}=d,v=((h=l==null?void 0:l[e])==null?void 0:h[s])||n,C=c.useMemo(()=>x,Object.values(x));return m.jsx(v.Provider,{value:C,children:y})};p.displayName=u+"Provider";function g(d,l){var v;const y=((v=l==null?void 0:l[e])==null?void 0:v[s])||n,x=c.useContext(y);if(x)return x;if(o!==void 0)return o;throw new Error(`\`${d}\` must be used within \`${u}\``)}return[p,g]}const i=()=>{const u=r.map(o=>c.createContext(o));return function(n){const s=(n==null?void 0:n[e])||u;return c.useMemo(()=>({[`__scope${e}`]:{...n,[e]:s}}),[n,s])}};return i.scopeName=e,[a,q(i,...t)]}function q(...e){const t=e[0];if(e.length===1)return t;const r=()=>{const a=e.map(i=>({useScope:i(),scopeName:i.scopeName}));return function(u){const o=a.reduce((n,{useScope:s,scopeName:p})=>{const d=s(u)[`__scope${p}`];return{...n,...d}},{});return c.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return r.scopeName=t.scopeName,r}var R=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],I=R.reduce((e,t)=>{const r=S(`Primitive.${t}`),a=c.forwardRef((i,u)=>{const{asChild:o,...n}=i,s=o?r:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),m.jsx(s,{...n,ref:u})});return a.displayName=`Primitive.${t}`,{...e,[t]:a}},{});export{A,L as C,z as E,I as P,H as a,E as b,B as c,O as d,k as e};
