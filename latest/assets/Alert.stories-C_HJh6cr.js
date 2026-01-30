import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./index-CtOEgLBf.js";import{t as k,c as y}from"./bundle-mjs-BNe0Xlio.js";import{X as j}from"./x-D_mDA-0y.js";import{c as s}from"./createLucideIcon-CFZQIwQc.js";import"./_commonjsHelpers-CqkleIqs.js";/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],A=s("circle-alert",w);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],_=s("circle-check",N);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],I=s("info",S);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],q=s("triangle-alert",M);function C(...i){return k(y(i))}const r=({className:i,variant:n="info",title:l,children:g,onClose:o,theme:c,...x})=>{const b={info:e.jsx(I,{className:"w-5 h-5 shrink-0"}),success:e.jsx(_,{className:"w-5 h-5 shrink-0"}),warning:e.jsx(q,{className:"w-5 h-5 shrink-0"}),error:e.jsx(A,{className:"w-5 h-5 shrink-0"})},v={info:"bg-blue-50 border-blue-100 text-blue-800 dark:bg-blue-950/30 dark:border-blue-900/50 dark:text-blue-300",success:"bg-emerald-50 border-emerald-100 text-emerald-800 dark:bg-emerald-950/30 dark:border-emerald-900/50 dark:text-emerald-300",warning:"bg-amber-50 border-amber-100 text-amber-800 dark:bg-amber-950/30 dark:border-amber-900/50 dark:text-amber-300",error:"bg-rose-50 border-rose-100 text-rose-800 dark:bg-rose-950/30 dark:border-rose-900/50 dark:text-rose-300"};return e.jsxs("div",{role:"alert",className:C("relative flex items-start gap-4 p-5 border-2 rounded-[24px] transition-all duration-300",v[n],c==="dark"&&"dark",c==="light"&&"light",i),...x,children:[e.jsx("div",{className:"mt-0.5",children:b[n]}),e.jsxs("div",{className:"flex-1 space-y-1",children:[l&&e.jsx("h5",{className:"font-black tracking-tight leading-none text-base",children:l}),e.jsx("div",{className:"text-sm opacity-90 leading-relaxed font-medium",children:g})]}),o&&e.jsx("button",{onClick:o,className:"p-1 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors absolute top-4 right-4",children:e.jsx(j,{size:18})})]})};r.displayName="Alert";r.__docgenInfo={description:"DjAlert is a premium semantic banner for providing feedback or important information.",methods:[],displayName:"Alert",props:{variant:{required:!1,tsType:{name:"union",raw:"'info' | 'success' | 'warning' | 'error'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:`Semantic variant of the alert
@default "info"`,defaultValue:{value:"'info'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"Optional title for the alert"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"If true, shows a close button"},theme:{required:!1,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:"Explicit theme override"}}};const D={title:"UI/djAlert",component:r,parameters:{layout:"centered"},tags:["autodocs"]},a={args:{title:"Project Milestone",children:"You have successfully migrated to the Gold Standard boilerplate.",variant:"success"}},t={render:()=>e.jsxs("div",{className:"flex flex-col gap-6 w-[500px]",children:[e.jsx(r,{variant:"info",title:"System Update",children:"A new version of the UI library is now available."}),e.jsx(r,{variant:"success",title:"Success",children:"Your configuration has been saved successfully."}),e.jsx(r,{variant:"warning",title:"Warning",children:"Your trial period is expiring in 3 days."}),e.jsx(r,{variant:"error",title:"Critical Error",children:"Failed to connect to the backend API server."})]})};var d,m,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: "Project Milestone",
    children: "You have successfully migrated to the Gold Standard boilerplate.",
    variant: "success"
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,h,f;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6 w-[500px]">
      <Alert variant="info" title="System Update">A new version of the UI library is now available.</Alert>
      <Alert variant="success" title="Success">Your configuration has been saved successfully.</Alert>
      <Alert variant="warning" title="Warning">Your trial period is expiring in 3 days.</Alert>
      <Alert variant="error" title="Critical Error">Failed to connect to the backend API server.</Alert>
    </div>
}`,...(f=(h=t.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const V=["Default","Variants"];export{a as Default,t as Variants,V as __namedExportsOrder,D as default};
