import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{e as O,r as I}from"./index-CtOEgLBf.js";import{t as R,c as _}from"./bundle-mjs-BNe0Xlio.js";import"./_commonjsHelpers-CqkleIqs.js";function h(...t){return R(_(t))}const r=O.forwardRef(({className:t,label:i,helperText:d,theme:o,id:T,children:N,borderColor:c,backgroundColor:p,textColor:u,style:U,...E},B)=>{const L=I.useId(),m=T||L,q={...c?{borderColor:c}:{},...p?{backgroundColor:p}:{},...u?{color:u}:{},...U};return e.jsxs("div",{className:h("flex flex-col gap-2 w-full",o==="dark"&&"dark",o==="light"&&"light"),children:[i&&e.jsx("label",{htmlFor:m,className:"text-sm font-semibold text-slate-900 dark:text-slate-100 ml-1",children:i}),e.jsxs("div",{className:"relative group",children:[e.jsx("select",{id:m,ref:B,style:q,className:h("w-full h-11 px-4 text-sm outline-none transition-all duration-300","rounded-lg appearance-none cursor-pointer","bg-white border-2 border-slate-200 hover:border-slate-300 focus:border-slate-900 text-slate-900",o!=="light"&&"dark:bg-slate-950 dark:border-slate-800 dark:hover:border-slate-700 dark:focus:border-white dark:text-gray-100",o==="light"&&"bg-white text-black border-2 border-black hover:border-black focus:border-black",o==="dark"&&"bg-slate-950 text-white border-2 border-white hover:border-white focus:border-white",t),...E,children:N}),e.jsx("div",{className:"absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 group-hover:text-slate-600 transition-colors",children:e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 9l-7 7-7-7"})})})]}),d&&e.jsx("span",{className:"text-xs text-slate-500 dark:text-slate-400 ml-1",children:d})]})});r.displayName="DjSelect";r.__docgenInfo={description:"DjSelect is a custom-styled native select component that matches the premium input aesthetic.",methods:[],displayName:"DjSelect",props:{label:{required:!1,tsType:{name:"string"},description:"Label for the select field"},helperText:{required:!1,tsType:{name:"string"},description:"Helper text below the select"},theme:{required:!1,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:"Explicit theme override"},borderColor:{required:!1,tsType:{name:"string"},description:"Custom border color (overrides theme defaults)"},backgroundColor:{required:!1,tsType:{name:"string"},description:"Custom background color (overrides theme defaults)"},textColor:{required:!1,tsType:{name:"string"},description:"Custom text color (overrides theme defaults)"}}};const H={title:"UI/djSelect",component:r,parameters:{layout:"centered"},tags:["autodocs"]},s={render:t=>e.jsx("div",{className:"w-80 p-4",children:e.jsxs(r,{...t,label:"Default Theme",helperText:"Standard Slate Styles",children:[e.jsx("option",{value:"us",children:"United States"}),e.jsx("option",{value:"eu",children:"European Union"})]})})},a={render:t=>e.jsx("div",{className:"w-80 p-4 bg-gray-50",children:e.jsxs(r,{...t,label:"Light Theme Start",theme:"light",children:[e.jsx("option",{value:"us",children:"United States"}),e.jsx("option",{value:"eu",children:"European Union"})]})})},l={render:t=>e.jsx("div",{className:"w-80 p-4 bg-slate-950",children:e.jsxs(r,{...t,label:"Dark Theme Start",theme:"dark",children:[e.jsx("option",{value:"us",children:"United States"}),e.jsx("option",{value:"eu",children:"European Union"})]})})},n={render:t=>e.jsx("div",{className:"w-80 p-4",children:e.jsxs(r,{...t,label:"Custom Colors",helperText:"Red Border, Blue Text, Yellow BG",borderColor:"red",textColor:"blue",backgroundColor:"#fef9c3",children:[e.jsx("option",{value:"1",children:"Option 1"}),e.jsx("option",{value:"2",children:"Option 2"})]})})};var x,g,b;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <div className="w-80 p-4">
      <DjSelect {...args} label="Default Theme" helperText="Standard Slate Styles">
        <option value="us">United States</option>
        <option value="eu">European Union</option>
      </DjSelect>
    </div>
}`,...(b=(g=s.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var v,j,f;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <div className="w-80 p-4 bg-gray-50">
      <DjSelect {...args} label="Light Theme Start" theme="light">
        <option value="us">United States</option>
        <option value="eu">European Union</option>
      </DjSelect>
    </div>
}`,...(f=(j=a.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var S,k,w;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <div className="w-80 p-4 bg-slate-950">
      <DjSelect {...args} label="Dark Theme Start" theme="dark">
        <option value="us">United States</option>
        <option value="eu">European Union</option>
      </DjSelect>
    </div>
}`,...(w=(k=l.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var D,y,C;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => <div className="w-80 p-4">
      <DjSelect {...args} label="Custom Colors" helperText="Red Border, Blue Text, Yellow BG" borderColor="red" textColor="blue" backgroundColor="#fef9c3">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </DjSelect>
    </div>
}`,...(C=(y=n.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};const W=["Default","Light","Dark","CustomColors"];export{n as CustomColors,l as Dark,s as Default,a as Light,W as __namedExportsOrder,H as default};
