import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./index-CtOEgLBf.js";import{t as N,c as j}from"./bundle-mjs-BNe0Xlio.js";import"./_commonjsHelpers-CqkleIqs.js";function o(...s){return N(j(s))}const g=({logo:s="Brand",links:x=[],copyright:v=`© ${new Date().getFullYear()} All rights reserved.`,variant:k="white",className:y,onLinkClick:l})=>{const n=k==="black",w=(t,i)=>{l&&(t.preventDefault(),l(i))};return e.jsx("footer",{className:o("w-full py-12 px-6 transition-colors duration-300",n?"bg-slate-900 text-white border-t border-white/10":"bg-white text-slate-900 border-t border-slate-100",y),children:e.jsxs("div",{className:"max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8",children:[e.jsx("div",{className:"text-xl font-black uppercase tracking-tight",children:s}),e.jsx("nav",{className:"flex flex-wrap items-center justify-center gap-8",children:x.map((t,i)=>e.jsx("a",{href:t.href,onClick:b=>w(b,t.href),className:o("text-sm font-bold uppercase tracking-wide transition-colors hover:underline decoration-2 underline-offset-4",n?"text-slate-400 hover:text-white":"text-slate-500 hover:text-slate-900"),children:t.label},i))}),e.jsx("div",{className:o("text-xs font-medium tracking-wide opacity-50",n?"text-slate-400":"text-slate-500"),children:v})]})})};g.__docgenInfo={description:"DjFooter is a simple, minimalistic footer component.",methods:[],displayName:"DjFooter",props:{logo:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Logo text or element",defaultValue:{value:'"Brand"',computed:!1}},links:{required:!1,tsType:{name:"Array",elements:[{name:"FooterLink"}],raw:"FooterLink[]"},description:"Navigation links array",defaultValue:{value:"[]",computed:!1}},copyright:{required:!1,tsType:{name:"string"},description:"Copyright text"},variant:{required:!1,tsType:{name:"union",raw:"'black' | 'white'",elements:[{name:"literal",value:"'black'"},{name:"literal",value:"'white'"}]},description:"Visual variant",defaultValue:{value:"'white'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Optional className"},onLinkClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(href: string) => void",signature:{arguments:[{type:{name:"string"},name:"href"}],return:{name:"void"}}},description:"Callback for navigation link clicks (for router integration)"}}};const F={title:"Layout/DjFooter",component:g,tags:["autodocs"],parameters:{layout:"fullscreen"}},h=[{label:"Privacy Policy",href:"#"},{label:"Terms of Service",href:"#"},{label:"Support",href:"#"}],r={args:{variant:"white",logo:"QRENZA",links:h,copyright:"© 2026 Qrenza Inc. All rights reserved."}},a={args:{variant:"black",logo:"QRENZA",links:h,copyright:"© 2026 Qrenza Inc. All rights reserved."},parameters:{backgrounds:{default:"dark"}}};var c,d,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'white',
    logo: 'QRENZA',
    links: links,
    copyright: '© 2026 Qrenza Inc. All rights reserved.'
  }
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,u,f;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'black',
    logo: 'QRENZA',
    links: links,
    copyright: '© 2026 Qrenza Inc. All rights reserved.'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...(f=(u=a.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const T=["WhiteVariant","BlackVariant"];export{a as BlackVariant,r as WhiteVariant,T as __namedExportsOrder,F as default};
