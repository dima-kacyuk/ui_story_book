import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{D as s}from"./DjButton-DMsRkHBa.js";import{r as i}from"./index-oxIuDU2I.js";import"./_commonjsHelpers-CqkleIqs.js";/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),O=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(a,t,n)=>n?n.toUpperCase():t.toLowerCase()),g=e=>{const a=O(e);return a.charAt(0).toUpperCase()+a.slice(1)},L=(...e)=>e.filter((a,t,n)=>!!a&&a.trim()!==""&&n.indexOf(a)===t).join(" ").trim(),R=e=>{for(const a in e)if(a.startsWith("aria-")||a==="role"||a==="title")return!0};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var $={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=i.forwardRef(({color:e="currentColor",size:a=24,strokeWidth:t=2,absoluteStrokeWidth:n,className:h="",children:o,iconNode:A,...u},T)=>i.createElement("svg",{ref:T,...$,width:a,height:a,stroke:e,strokeWidth:n?Number(t)*24/Number(a):t,className:L("lucide",h),...!o&&!R(u)&&{"aria-hidden":"true"},...u},[...A.map(([W,_])=>i.createElement(W,_)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=(e,a)=>{const t=i.forwardRef(({className:n,...h},o)=>i.createElement(z,{ref:o,iconNode:a,className:L(`lucide-${E(g(e))}`,`lucide-${e}`,n),...h}));return t.displayName=g(e),t};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],M=P("arrow-right",U);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],q=P("star",Z),Q={title:"UI/djButton",component:s,parameters:{layout:"centered",docs:{description:{component:"DjButton is a premium component with tactile feedback and dual-theme support."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","outline","ghost","danger","success","warning","info","glass","link"]},size:{control:"radio",options:["sm","md","lg","xl","icon"]},theme:{control:"radio",options:["light","dark"]},isLoading:{control:"boolean"},isFullWidth:{control:"boolean"},pill:{control:"boolean"}}},l={args:{variant:"primary",children:"Primary Button"}},c={render:e=>r.jsxs("div",{className:"flex flex-col gap-8 p-12 rounded-3xl border border-slate-200 dark:border-slate-800",children:[r.jsxs("div",{className:"space-y-4",children:[r.jsx("h3",{className:"text-sm font-bold text-slate-400 uppercase tracking-widest",children:"Light Theme"}),r.jsxs("div",{className:"flex flex-wrap gap-4 p-8 bg-white rounded-2xl border border-slate-100 shadow-sm",children:[r.jsx(s,{...e,theme:"light",variant:"primary",children:"Black Primary"}),r.jsx(s,{...e,theme:"light",variant:"success",children:"Success"}),r.jsx(s,{...e,theme:"light",variant:"glass",className:"bg-slate-900/10 text-slate-900 border-slate-900/20",children:"Glass"}),r.jsx(s,{...e,theme:"light",variant:"outline",children:"Outline"})]})]}),r.jsxs("div",{className:"space-y-4",children:[r.jsx("h3",{className:"text-sm font-bold text-slate-500 uppercase tracking-widest",children:"Dark Theme"}),r.jsxs("div",{className:"flex flex-wrap gap-4 p-8 bg-[#09090b] rounded-2xl border border-slate-800 shadow-xl",children:[r.jsx(s,{...e,theme:"dark",variant:"primary",children:"White Primary"}),r.jsx(s,{...e,theme:"dark",variant:"success",children:"Success"}),r.jsx(s,{...e,theme:"dark",variant:"glass",children:"Glass"}),r.jsx(s,{...e,theme:"dark",variant:"outline",children:"Outline"})]})]})]})},d={args:{variant:"primary",leftIcon:r.jsx(q,{}),rightIcon:r.jsx(M,{}),children:"With Icons"}},m={decorators:[e=>r.jsx("div",{className:"p-20 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-3xl",children:r.jsx(e,{})})],args:{variant:"glass",children:"Glassmorphism",size:"lg"}},p={render:()=>r.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-8",children:["primary","secondary","success","danger","warning","info","outline","glass"].map(e=>r.jsxs("div",{className:"flex flex-col gap-2 items-center",children:[r.jsx("span",{className:"text-[10px] uppercase font-bold text-slate-400",children:e}),r.jsx(s,{variant:e,children:e})]},e))})};var x,v,j;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    children: "Primary Button"
  }
}`,...(j=(v=l.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var f,b,y;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-8 p-12 rounded-3xl border border-slate-200 dark:border-slate-800">
      <div className="space-y-4">
        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Light Theme</h3>
        <div className="flex flex-wrap gap-4 p-8 bg-white rounded-2xl border border-slate-100 shadow-sm">
          <DjButton {...args} theme="light" variant="primary">Black Primary</DjButton>
          <DjButton {...args} theme="light" variant="success">Success</DjButton>
          <DjButton {...args} theme="light" variant="glass" className="bg-slate-900/10 text-slate-900 border-slate-900/20">Glass</DjButton>
          <DjButton {...args} theme="light" variant="outline">Outline</DjButton>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest">Dark Theme</h3>
        <div className="flex flex-wrap gap-4 p-8 bg-[#09090b] rounded-2xl border border-slate-800 shadow-xl">
          <DjButton {...args} theme="dark" variant="primary">White Primary</DjButton>
          <DjButton {...args} theme="dark" variant="success">Success</DjButton>
          <DjButton {...args} theme="dark" variant="glass">Glass</DjButton>
          <DjButton {...args} theme="dark" variant="outline">Outline</DjButton>
        </div>
      </div>
    </div>
}`,...(y=(b=c.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var w,k,B;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    leftIcon: <Star />,
    rightIcon: <ArrowRight />,
    children: "With Icons"
  }
}`,...(B=(k=d.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var N,D,S;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  decorators: [Story => <div className="p-20 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-3xl">
        <Story />
      </div>],
  args: {
    variant: "glass",
    children: "Glassmorphism",
    size: "lg"
  }
}`,...(S=(D=m.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var C,I,G;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
      {(["primary", "secondary", "success", "danger", "warning", "info", "outline", "glass"] as const).map(v => <div key={v} className="flex flex-col gap-2 items-center">
          <span className="text-[10px] uppercase font-bold text-slate-400">{v}</span>
          <DjButton variant={v}>{v}</DjButton>
        </div>)}
    </div>
}`,...(G=(I=p.parameters)==null?void 0:I.docs)==null?void 0:G.source}}};const V=["Primary","ThemeShowcase","Icons","Glass","Gallery"];export{p as Gallery,m as Glass,d as Icons,l as Primary,c as ThemeShowcase,V as __namedExportsOrder,Q as default};
