import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{D as n}from"./DjButton-D2umafFj.js";import{r as i}from"./index-oxIuDU2I.js";import"./_commonjsHelpers-CqkleIqs.js";/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),se=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,t,s)=>s?s.toUpperCase():t.toLowerCase()),B=e=>{const r=se(e);return r.charAt(0).toUpperCase()+r.slice(1)},X=(...e)=>e.filter((r,t,s)=>!!r&&r.trim()!==""&&s.indexOf(r)===t).join(" ").trim(),ne=e=>{for(const r in e)if(r.startsWith("aria-")||r==="role"||r==="title")return!0};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var oe={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=i.forwardRef(({color:e="currentColor",size:r=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:f="",children:o,iconNode:Y,...x},ee)=>i.createElement("svg",{ref:ee,...oe,width:r,height:r,stroke:e,strokeWidth:s?Number(t)*24/Number(r):t,className:X("lucide",f),...!o&&!ne(x)&&{"aria-hidden":"true"},...x},[...Y.map(([re,ae])=>i.createElement(re,ae)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=(e,r)=>{const t=i.forwardRef(({className:s,...f},o)=>i.createElement(ie,{ref:o,iconNode:r,className:X(`lucide-${te(B(e))}`,`lucide-${e}`,s),...f}));return t.displayName=B(e),t};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],de=j("arrow-right",ce);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],me=j("mail",le);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],pe=j("save",ue);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],ge=j("trash-2",he),xe={title:"UI/DjButton",component:n,parameters:{layout:"centered",design:{type:"figma",url:"https://www.figma.com/file/your-figma-file-id"}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","outline","ghost","danger","link"],description:"The visual style of the button"},size:{control:"select",options:["sm","md","lg","icon"],description:"The size of the button"},isLoading:{control:"boolean",description:"Shows a loading spinner"},disabled:{control:"boolean",description:"Disables the button"},onClick:{action:"clicked"}},args:{children:"Button",variant:"primary",size:"md",isLoading:!1,disabled:!1}},c={args:{variant:"primary",children:"Primary Button"}},d={args:{variant:"secondary",children:"Secondary Button"}},l={args:{variant:"outline",children:"Outline Button"}},m={args:{variant:"ghost",children:"Ghost Button"}},u={args:{variant:"danger",children:"Delete",leftIcon:a.jsx(ge,{})}},p={args:{variant:"link",children:"Read more"}},h={render:e=>a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx(n,{...e,size:"sm",children:"Small"}),a.jsx(n,{...e,size:"md",children:"Medium"}),a.jsx(n,{...e,size:"lg",children:"Large"})]})},g={render:e=>a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx(n,{...e,leftIcon:a.jsx(me,{}),children:"Email"}),a.jsx(n,{...e,rightIcon:a.jsx(de,{}),children:"Next"}),a.jsx(n,{...e,variant:"outline",size:"icon",children:a.jsx(pe,{})})]})},v={args:{isLoading:!0,children:"Saving..."}},y={args:{disabled:!0,children:"Disabled"}};var k,D,S;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    children: "Primary Button"
  }
}`,...(S=(D=c.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var w,b,L;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    children: "Secondary Button"
  }
}`,...(L=(b=d.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};var z,C,M;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    children: "Outline Button"
  }
}`,...(M=(C=l.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var I,N,_;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: "ghost",
    children: "Ghost Button"
  }
}`,...(_=(N=m.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var A,E,R;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: "danger",
    children: "Delete",
    leftIcon: <Trash2 />
  }
}`,...(R=(E=u.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var $,O,P;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    variant: "link",
    children: "Read more"
  }
}`,...(P=(O=p.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var T,G,V;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <div className="flex items-center gap-4">
      <DjButton {...args} size="sm">Small</DjButton>
      <DjButton {...args} size="md">Medium</DjButton>
      <DjButton {...args} size="lg">Large</DjButton>
    </div>
}`,...(V=(G=h.parameters)==null?void 0:G.docs)==null?void 0:V.source}}};var W,q,H;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => <div className="flex items-center gap-4">
        <DjButton {...args} leftIcon={<Mail />}>Email</DjButton>
        <DjButton {...args} rightIcon={<ArrowRight />}>Next</DjButton>
        <DjButton {...args} variant="outline" size="icon"><Save /></DjButton>
      </div>
}`,...(H=(q=g.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var U,Z,K;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    isLoading: true,
    children: "Saving..."
  }
}`,...(K=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:K.source}}};var F,J,Q;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: "Disabled"
  }
}`,...(Q=(J=y.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const Be=["Primary","Secondary","Outline","Ghost","Danger","Link","Sizes","WithIcons","Loading","Disabled"];export{u as Danger,y as Disabled,m as Ghost,p as Link,v as Loading,l as Outline,c as Primary,d as Secondary,h as Sizes,g as WithIcons,Be as __namedExportsOrder,xe as default};
