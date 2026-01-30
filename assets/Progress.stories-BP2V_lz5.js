import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as u,e as L}from"./index-CtOEgLBf.js";import"./index-XWKESxX7.js";import{c as B}from"./index-CxplzLLe.js";import{t as z,c as G}from"./bundle-mjs-BNe0Xlio.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-xQ9y_n2y.js";import"./index-DVMm_T7L.js";function U(e,r=[]){let l=[];function i(d,o){const t=u.createContext(o);t.displayName=d+"Context";const n=l.length;l=[...l,o];const c=v=>{var P;const{scope:m,children:w,...f}=v,x=((P=m==null?void 0:m[e])==null?void 0:P[n])||t,q=u.useMemo(()=>f,Object.values(f));return a.jsx(x.Provider,{value:q,children:w})};c.displayName=d+"Provider";function N(v,m){var x;const w=((x=m==null?void 0:m[e])==null?void 0:x[n])||t,f=u.useContext(w);if(f)return f;if(o!==void 0)return o;throw new Error(`\`${v}\` must be used within \`${d}\``)}return[c,N]}const s=()=>{const d=l.map(o=>u.createContext(o));return function(t){const n=(t==null?void 0:t[e])||d;return u.useMemo(()=>({[`__scope${e}`]:{...t,[e]:n}}),[t,n])}};return s.scopeName=e,[i,X(s,...r)]}function X(...e){const r=e[0];if(e.length===1)return r;const l=()=>{const i=e.map(s=>({useScope:s(),scopeName:s.scopeName}));return function(d){const o=i.reduce((t,{useScope:n,scopeName:c})=>{const v=n(d)[`__scope${c}`];return{...t,...v}},{});return u.useMemo(()=>({[`__scope${r.scopeName}`]:o}),[o])}};return l.scopeName=r.scopeName,l}var F=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],R=F.reduce((e,r)=>{const l=B(`Primitive.${r}`),i=u.forwardRef((s,d)=>{const{asChild:o,...t}=s,n=o?l:r;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),a.jsx(n,{...t,ref:d})});return i.displayName=`Primitive.${r}`,{...e,[r]:i}},{}),y="Progress",j=100,[H]=U(y),[J,K]=H(y),D=u.forwardRef((e,r)=>{const{__scopeProgress:l,value:i=null,max:s,getValueLabel:d=Q,...o}=e;(s||s===0)&&!S(s)&&console.error(W(`${s}`,"Progress"));const t=S(s)?s:j;i!==null&&!k(i,t)&&console.error(Y(`${i}`,"Progress"));const n=k(i,t)?i:null,c=b(n)?d(n,t):void 0;return a.jsx(J,{scope:l,value:n,max:t,children:a.jsx(R.div,{"aria-valuemax":t,"aria-valuemin":0,"aria-valuenow":b(n)?n:void 0,"aria-valuetext":c,role:"progressbar","data-state":A(n,t),"data-value":n??void 0,"data-max":t,...o,ref:r})})});D.displayName=y;var T="ProgressIndicator",O=u.forwardRef((e,r)=>{const{__scopeProgress:l,...i}=e,s=K(T,l);return a.jsx(R.div,{"data-state":A(s.value,s.max),"data-value":s.value??void 0,"data-max":s.max,...i,ref:r})});O.displayName=T;function Q(e,r){return`${Math.round(e/r*100)}%`}function A(e,r){return e==null?"indeterminate":e===r?"complete":"loading"}function b(e){return typeof e=="number"}function S(e){return b(e)&&!isNaN(e)&&e>0}function k(e,r){return b(e)&&!isNaN(e)&&e<=r&&e>=0}function W(e,r){return`Invalid prop \`max\` of value \`${e}\` supplied to \`${r}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${j}\`.`}function Y(e,r){return`Invalid prop \`value\` of value \`${e}\` supplied to \`${r}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${j} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`}var Z=D,ee=O;function $(...e){return z(G(e))}const p=L.forwardRef(({className:e,value:r,variant:l="primary",size:i="md",theme:s,animate:d=!0,...o},t)=>{const n={primary:"bg-slate-900 dark:bg-white",success:"bg-emerald-500",warning:"bg-amber-500",danger:"bg-rose-500",indigo:"bg-indigo-600"},c={sm:"h-1.5",md:"h-3",lg:"h-5"};return a.jsx(Z,{ref:t,className:$("relative w-full overflow-hidden rounded-full bg-slate-100 dark:bg-white/10 border border-slate-100 dark:border-white/5",c[i],s==="dark"&&"dark",s==="light"&&"light",e),...o,children:a.jsx(ee,{className:$("h-full w-full flex-1 transition-all duration-500 ease-in-out relative",n[l]),style:{transform:`translateX(-${100-(r||0)}%)`},children:d&&a.jsx("div",{className:"absolute inset-0 w-full h-full",children:a.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-[200%] h-full animate-progress-shine -translate-x-full"})})})})});p.displayName="Progress";p.__docgenInfo={description:"DjProgress is a sleek, animated loading bar with multiple semantic variants.",methods:[],displayName:"Progress",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'success' | 'warning' | 'danger' | 'indigo'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'indigo'"}]},description:`Visual variant of the progress bar
@default "primary"`,defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`The height of the bar
@default "md"`,defaultValue:{value:"'md'",computed:!1}},theme:{required:!1,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:"Explicit theme override"},animate:{required:!1,tsType:{name:"boolean"},description:"If true, adds an animated shine effect",defaultValue:{value:"true",computed:!1}}}};const de={title:"UI/djProgress",component:p,parameters:{layout:"centered"},tags:["autodocs"]},g={args:{value:65,variant:"primary"},render:e=>a.jsx("div",{className:"w-80",children:a.jsx(p,{...e})})},h={render:()=>a.jsxs("div",{className:"w-80 space-y-8 p-8 bg-white dark:bg-slate-950 rounded-3xl border border-slate-100 dark:border-slate-800",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsxs("div",{className:"flex justify-between text-xs font-bold uppercase tracking-widest text-slate-400",children:[a.jsx("span",{children:"Primary Bar"}),a.jsx("span",{children:"75%"})]}),a.jsx(p,{value:75,variant:"primary"})]}),a.jsxs("div",{className:"space-y-4",children:[a.jsxs("div",{className:"flex justify-between text-xs font-bold uppercase tracking-widest text-slate-400",children:[a.jsx("span",{children:"Indigo System"}),a.jsx("span",{children:"45%"})]}),a.jsx(p,{value:45,variant:"indigo"})]}),a.jsxs("div",{className:"space-y-4",children:[a.jsxs("div",{className:"flex justify-between text-xs font-bold uppercase tracking-widest text-slate-400",children:[a.jsx("span",{children:"Success State"}),a.jsx("span",{children:"100%"})]}),a.jsx(p,{value:100,variant:"success",animate:!1})]})]})};var _,C,I;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    value: 65,
    variant: "primary"
  },
  render: args => <div className="w-80">
      <Progress {...args} />
    </div>
}`,...(I=(C=g.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var E,V,M;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className="w-80 space-y-8 p-8 bg-white dark:bg-slate-950 rounded-3xl border border-slate-100 dark:border-slate-800">
      <div className="space-y-4">
        <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-400">
          <span>Primary Bar</span>
          <span>75%</span>
        </div>
        <Progress value={75} variant="primary" />
      </div>

      <div className="space-y-4">
        <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-400">
          <span>Indigo System</span>
          <span>45%</span>
        </div>
        <Progress value={45} variant="indigo" />
      </div>

      <div className="space-y-4">
        <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-400">
          <span>Success State</span>
          <span>100%</span>
        </div>
        <Progress value={100} variant="success" animate={false} />
      </div>
    </div>
}`,...(M=(V=h.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};const ue=["Default","VariantShowcase"];export{g as Default,h as VariantShowcase,ue as __namedExportsOrder,de as default};
