import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{e as O}from"./index-CtOEgLBf.js";import{t as A,c as N}from"./bundle-mjs-BNe0Xlio.js";import"./_commonjsHelpers-CqkleIqs.js";function n(...i){return A(N(i))}const a=({className:i,src:o,fallback:s,size:d="md",isOnline:k=!1,theme:c,...w})=>{const[z,j]=O.useState(!1),y={xs:"w-6 h-6 text-[10px]",sm:"w-8 h-8 text-xs",md:"w-10 h-10 text-sm",lg:"w-12 h-12 text-base",xl:"w-16 h-16 text-lg"},S={xs:"w-1.5 h-1.5",sm:"w-2 h-2",md:"w-2.5 h-2.5",lg:"w-3 h-3 border-2",xl:"w-4 h-4 border-2"};return e.jsxs("div",{className:n("relative inline-flex",c==="dark"&&"dark",c==="light"&&"light"),children:[e.jsx("div",{className:n("relative flex items-center justify-center shrink-0 rounded-full overflow-hidden transition-all duration-300","bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700","hover:border-slate-300 dark:hover:border-slate-600",y[d],i),...w,children:o&&!z?e.jsx("img",{src:o,alt:s||"Avatar",className:"w-full h-full object-cover",onError:()=>j(!0)}):e.jsx("span",{className:"font-bold text-slate-500 dark:text-slate-400 uppercase tracking-tighter",children:(s==null?void 0:s.slice(0,2))||"?"})}),k&&e.jsx("span",{className:n("absolute bottom-0 right-0 block rounded-full bg-emerald-500 border-2 border-white dark:border-slate-950 shadow-lg",S[d])})]})};a.displayName="Avatar";a.__docgenInfo={description:"DjAvatar is a premium profile indicator supporting images, initials, and status states.",methods:[],displayName:"Avatar",props:{src:{required:!1,tsType:{name:"string"},description:"Source URL for the image"},fallback:{required:!1,tsType:{name:"string"},description:"Initials to display as fallback"},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:`Size of the avatar
@default "md"`,defaultValue:{value:"'md'",computed:!1}},isOnline:{required:!1,tsType:{name:"boolean"},description:'If true, displays a small "online" status dot',defaultValue:{value:"false",computed:!1}},theme:{required:!1,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:"Explicit theme override"}}};const L={title:"UI/djAvatar",component:a,parameters:{layout:"centered"},tags:["autodocs"]},r={args:{src:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80",fallback:"Dima Kacyuk",size:"lg",isOnline:!0}},t={args:{fallback:"John Wick",size:"lg",isOnline:!0}},l={render:()=>e.jsxs("div",{className:"flex items-end gap-6",children:[e.jsx(a,{fallback:"XS",size:"xs"}),e.jsx(a,{fallback:"SM",size:"sm"}),e.jsx(a,{fallback:"MD",size:"md",isOnline:!0}),e.jsx(a,{fallback:"LG",size:"lg",isOnline:!0}),e.jsx(a,{fallback:"XL",size:"xl",isOnline:!0})]})};var m,u,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80",
    fallback: "Dima Kacyuk",
    size: "lg",
    isOnline: true
  }
}`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var f,g,x;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    fallback: "John Wick",
    size: "lg",
    isOnline: true
  }
}`,...(x=(g=t.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var h,v,b;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="flex items-end gap-6">
      <Avatar fallback="XS" size="xs" />
      <Avatar fallback="SM" size="sm" />
      <Avatar fallback="MD" size="md" isOnline />
      <Avatar fallback="LG" size="lg" isOnline />
      <Avatar fallback="XL" size="xl" isOnline />
    </div>
}`,...(b=(v=l.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const M=["Image","Initials","Sizes"];export{r as Image,t as Initials,l as Sizes,M as __namedExportsOrder,L as default};
