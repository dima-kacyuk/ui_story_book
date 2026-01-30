import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as k,r as w}from"./index-oxIuDU2I.js";import{t as v,c as N}from"./bundle-mjs-BNe0Xlio.js";import"./_commonjsHelpers-CqkleIqs.js";function l(...a){return v(N(a))}const r=k.forwardRef(({className:a,label:d,theme:o,id:b,...x},f)=>{const g=w.useId(),i=b||g;return e.jsxs("div",{className:l("flex items-center gap-3 group/sw",o==="dark"&&"dark",o==="light"&&"light"),children:[e.jsxs("div",{className:"relative inline-flex items-center cursor-pointer",children:[e.jsx("input",{...x,type:"checkbox",id:i,ref:f,className:"peer sr-only"}),e.jsx("div",{className:l("w-11 h-6 rounded-full border-2 transition-all duration-300","bg-slate-100 border-slate-200 peer-hover:border-slate-300","dark:bg-slate-900 dark:border-slate-800 dark:peer-hover:border-slate-700","peer-checked:bg-slate-900 peer-checked:border-slate-900","dark:peer-checked:bg-white dark:peer-checked:border-white","peer-focus-visible:ring-2 peer-focus-visible:ring-slate-400 peer-focus-visible:ring-offset-2","ring-offset-white dark:ring-offset-slate-950",a),children:e.jsx("div",{className:l("absolute top-1 left-1 w-4 h-4 rounded-full transition-all duration-300 ease-in-out","bg-white border border-slate-100 shadow-sm","dark:bg-slate-400 dark:border-transparent","peer-checked:translate-x-5 peer-checked:bg-white","dark:peer-checked:bg-slate-900","group-active/sw:w-6 transition-all")})})]}),d&&e.jsx("label",{htmlFor:i,className:"text-sm font-semibold text-slate-900 dark:text-slate-100 cursor-pointer select-none",children:d})]})});r.displayName="Switch";r.__docgenInfo={description:"DjSwitch is a high-end toggle component with smooth physics and tactile interaction.",methods:[],displayName:"Switch",props:{label:{required:!1,tsType:{name:"string"},description:"Label for the switch"},theme:{required:!1,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:"Explicit theme override"}}};const T={title:"UI/djSwitch",component:r,parameters:{layout:"centered"},tags:["autodocs"]},t={args:{label:"Enable Features"}},s={render:a=>e.jsxs("div",{className:"flex flex-col gap-8 p-12 rounded-3xl border border-slate-200 dark:border-slate-800",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-sm font-bold text-slate-400 uppercase tracking-widest",children:"Light Theme"}),e.jsxs("div",{className:"flex flex-col gap-4 p-8 bg-white rounded-2xl border border-slate-100 shadow-sm",children:[e.jsx(r,{...a,theme:"light",label:"Sound Effects",defaultChecked:!0}),e.jsx(r,{...a,theme:"light",label:"Auto-Update"})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-sm font-bold text-slate-500 uppercase tracking-widest",children:"Dark Theme"}),e.jsxs("div",{className:"flex flex-col gap-4 p-8 bg-[#09090b] rounded-2xl border border-slate-800 shadow-xl",children:[e.jsx(r,{...a,theme:"dark",label:"Sound Effects",defaultChecked:!0}),e.jsx(r,{...a,theme:"dark",label:"Auto-Update"})]})]})]})};var c,n,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: "Enable Features"
  }
}`,...(h=(n=t.parameters)==null?void 0:n.docs)==null?void 0:h.source}}};var p,m,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-8 p-12 rounded-3xl border border-slate-200 dark:border-slate-800">
      <div className="space-y-4">
        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Light Theme</h3>
        <div className="flex flex-col gap-4 p-8 bg-white rounded-2xl border border-slate-100 shadow-sm">
          <Switch {...args} theme="light" label="Sound Effects" defaultChecked />
          <Switch {...args} theme="light" label="Auto-Update" />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest">Dark Theme</h3>
        <div className="flex flex-col gap-4 p-8 bg-[#09090b] rounded-2xl border border-slate-800 shadow-xl">
          <Switch {...args} theme="dark" label="Sound Effects" defaultChecked />
          <Switch {...args} theme="dark" label="Auto-Update" />
        </div>
      </div>
    </div>
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const D=["Default","ThemeShowcase"];export{t as Default,s as ThemeShowcase,D as __namedExportsOrder,T as default};
