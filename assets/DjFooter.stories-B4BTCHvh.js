import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./index-CtOEgLBf.js";import{t as w,c as y}from"./bundle-mjs-BNe0Xlio.js";import"./_commonjsHelpers-CqkleIqs.js";function n(...r){return w(y(r))}const u=({logo:r="Brand",links:g=[],copyright:h=`© ${new Date().getFullYear()} All rights reserved.`,variant:x="white",className:v})=>{const s=x==="black";return e.jsx("footer",{className:n("w-full py-12 px-6 transition-colors duration-300",s?"bg-slate-900 text-white border-t border-white/10":"bg-white text-slate-900 border-t border-slate-100",v),children:e.jsxs("div",{className:"max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8",children:[e.jsx("div",{className:"text-xl font-black uppercase tracking-tight",children:r}),e.jsx("nav",{className:"flex flex-wrap items-center justify-center gap-8",children:g.map((o,k)=>e.jsx("a",{href:o.href,className:n("text-sm font-bold uppercase tracking-wide transition-colors hover:underline decoration-2 underline-offset-4",s?"text-slate-400 hover:text-white":"text-slate-500 hover:text-slate-900"),children:o.label},k))}),e.jsx("div",{className:n("text-xs font-medium tracking-wide opacity-50",s?"text-slate-400":"text-slate-500"),children:h})]})})};u.__docgenInfo={description:"DjFooter is a simple, minimalistic footer component.",methods:[],displayName:"DjFooter",props:{logo:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Logo text or element",defaultValue:{value:'"Brand"',computed:!1}},links:{required:!1,tsType:{name:"Array",elements:[{name:"FooterLink"}],raw:"FooterLink[]"},description:"Navigation links array",defaultValue:{value:"[]",computed:!1}},copyright:{required:!1,tsType:{name:"string"},description:"Copyright text"},variant:{required:!1,tsType:{name:"union",raw:"'black' | 'white'",elements:[{name:"literal",value:"'black'"},{name:"literal",value:"'white'"}]},description:"Visual variant",defaultValue:{value:"'white'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Optional className"}}};const R={title:"Layout/DjFooter",component:u,tags:["autodocs"],parameters:{layout:"fullscreen"}},f=[{label:"Privacy Policy",href:"#"},{label:"Terms of Service",href:"#"},{label:"Support",href:"#"}],t={args:{variant:"white",logo:"QRENZA",links:f,copyright:"© 2026 Qrenza Inc. All rights reserved."}},a={args:{variant:"black",logo:"QRENZA",links:f,copyright:"© 2026 Qrenza Inc. All rights reserved."},parameters:{backgrounds:{default:"dark"}}};var l,i,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'white',
    logo: 'QRENZA',
    links: links,
    copyright: '© 2026 Qrenza Inc. All rights reserved.'
  }
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,m,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Q=["WhiteVariant","BlackVariant"];export{a as BlackVariant,t as WhiteVariant,Q as __namedExportsOrder,R as default};
