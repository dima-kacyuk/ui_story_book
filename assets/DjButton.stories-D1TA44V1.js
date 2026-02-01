import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{D as r}from"./DjButton-tUdQBPAj.js";import{c as N}from"./createLucideIcon-CFZQIwQc.js";import"./index-CtOEgLBf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CxplzLLe.js";import"./index-DVMm_T7L.js";import"./bundle-mjs-BNe0Xlio.js";/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],w=N("arrow-right",B);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],S=N("star",D),W={title:"UI/djButton",component:r,parameters:{layout:"centered",docs:{description:{component:"DjButton is a premium component with tactile feedback and dual-theme support."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","outline","ghost","danger","success","warning","info","glass","link"]},size:{control:"radio",options:["sm","md","lg","xl","icon"]},theme:{control:"radio",options:["light","dark"]},isLoading:{control:"boolean"},isFullWidth:{control:"boolean"},pill:{control:"boolean"}}},s={args:{variant:"primary",children:"Primary Button"}},t={render:a=>e.jsxs("div",{className:"flex flex-col gap-8 p-12 rounded-3xl border border-slate-200 dark:border-slate-800",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-sm font-bold text-slate-400 uppercase tracking-widest",children:"Light Theme"}),e.jsxs("div",{className:"flex flex-wrap gap-4 p-8 bg-white rounded-2xl border border-slate-100 shadow-sm",children:[e.jsx(r,{...a,theme:"light",variant:"primary",children:"Black Primary"}),e.jsx(r,{...a,theme:"light",variant:"success",children:"Success"}),e.jsx(r,{...a,theme:"light",variant:"glass",className:"bg-slate-900/10 text-slate-900 border-slate-900/20",children:"Glass"}),e.jsx(r,{...a,theme:"light",variant:"outline",children:"Outline"})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-sm font-bold text-slate-500 uppercase tracking-widest",children:"Dark Theme"}),e.jsxs("div",{className:"flex flex-wrap gap-4 p-8 bg-[#09090b] rounded-2xl border border-slate-800 shadow-xl",children:[e.jsx(r,{...a,theme:"dark",variant:"primary",children:"White Primary"}),e.jsx(r,{...a,theme:"dark",variant:"success",children:"Success"}),e.jsx(r,{...a,theme:"dark",variant:"glass",children:"Glass"}),e.jsx(r,{...a,theme:"dark",variant:"outline",children:"Outline"})]})]})]})},n={args:{variant:"primary",leftIcon:e.jsx(S,{}),rightIcon:e.jsx(w,{}),children:"With Icons"}},o={decorators:[a=>e.jsx("div",{className:"p-20 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-3xl",children:e.jsx(a,{})})],args:{variant:"glass",children:"Glassmorphism",size:"lg"}},i={render:()=>e.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-8",children:["primary","secondary","success","danger","warning","info","outline","glass"].map(a=>e.jsxs("div",{className:"flex flex-col gap-2 items-center",children:[e.jsx("span",{className:"text-[10px] uppercase font-bold text-slate-400",children:a}),e.jsx(r,{variant:a,children:a})]},a))})};var l,c,d;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    children: "Primary Button"
  }
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,p,h;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(h=(p=t.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var u,g,x;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    leftIcon: <Star />,
    rightIcon: <ArrowRight />,
    children: "With Icons"
  }
}`,...(x=(g=n.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var v,j,b;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  decorators: [Story => <div className="p-20 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-3xl">
        <Story />
      </div>],
  args: {
    variant: "glass",
    children: "Glassmorphism",
    size: "lg"
  }
}`,...(b=(j=o.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var y,f,k;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
      {(["primary", "secondary", "success", "danger", "warning", "info", "outline", "glass"] as const).map(v => <div key={v} className="flex flex-col gap-2 items-center">
          <span className="text-[10px] uppercase font-bold text-slate-400">{v}</span>
          <DjButton variant={v}>{v}</DjButton>
        </div>)}
    </div>
}`,...(k=(f=i.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};const R=["Primary","ThemeShowcase","Icons","Glass","Gallery"];export{i as Gallery,o as Glass,n as Icons,s as Primary,t as ThemeShowcase,R as __namedExportsOrder,W as default};
