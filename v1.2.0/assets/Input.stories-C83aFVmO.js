import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as L,r as R}from"./index-oxIuDU2I.js";import{t as U,c as M}from"./bundle-mjs-BNe0Xlio.js";import{c as l}from"./createLucideIcon-B_jCtjhV.js";import"./_commonjsHelpers-CqkleIqs.js";/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],P=l("lock",A);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],O=l("mail",D);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],$=l("search",V);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],F=l("user",B);function i(...n){return U(M(n))}const a=L.forwardRef(({className:n,label:p,helperText:m,error:u,leftIcon:c,rightIcon:d,theme:x,id:E,...z},T)=>{const q=R.useId(),h=E||q;return e.jsxs("div",{className:i("flex flex-col gap-2 w-full",x==="dark"&&"dark",x==="light"&&"light"),children:[p&&e.jsx("label",{htmlFor:h,className:"text-sm font-semibold text-slate-900 dark:text-slate-100 ml-1",children:p}),e.jsxs("div",{className:"relative group",children:[c&&e.jsx("div",{className:"absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-slate-600 dark:group-focus-within:text-slate-300 transition-colors",children:c}),e.jsx("input",{...z,id:h,ref:T,className:i("w-full h-11 px-4 text-sm bg-white dark:bg-slate-950 outline-none transition-all duration-300","border-2 border-slate-100 hover:border-slate-200 focus:border-slate-900","dark:border-slate-900 dark:hover:border-slate-800 dark:focus:border-white","rounded-xl placeholder:text-slate-400","focus:shadow-xl focus:shadow-slate-900/5 dark:focus:shadow-white/5",u&&"border-rose-500 hover:border-rose-600 focus:border-rose-600 dark:border-rose-800",c&&"pl-11",d&&"pr-11",n)}),d&&e.jsx("div",{className:"absolute right-3 top-1/2 -translate-y-1/2 text-slate-400",children:d})]}),m&&e.jsx("span",{className:i("text-xs ml-1 transition-colors",u?"text-rose-500":"text-slate-500 dark:text-slate-400"),children:m})]})});a.displayName="Input";a.__docgenInfo={description:"DjInput is a production-ready input field with premium focus mechanics and icon integration.",methods:[],displayName:"Input",props:{label:{required:!1,tsType:{name:"string"},description:"Optional label above the input"},helperText:{required:!1,tsType:{name:"string"},description:"Optional helper text below the input"},error:{required:!1,tsType:{name:"boolean"},description:"If true, displays an error state"},leftIcon:{required:!1,tsType:{name:"ReactNode"},description:"Left side icon or element"},rightIcon:{required:!1,tsType:{name:"ReactNode"},description:"Right side icon or element"},theme:{required:!1,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:"Explicit theme override"}}};const Q={title:"UI/djInput",component:a,parameters:{layout:"centered"},tags:["autodocs"]},t={args:{label:"Email Address",placeholder:"you@example.com",leftIcon:e.jsx(O,{size:18})}},r={render:()=>e.jsxs("div",{className:"w-80 flex flex-col gap-4 p-8 bg-white dark:bg-slate-950 rounded-[32px] border border-slate-200 dark:border-slate-800 shadow-2xl",children:[e.jsxs("div",{className:"text-center space-y-2 mb-4",children:[e.jsx("h2",{className:"text-2xl font-bold dark:text-white",children:"Sign In"}),e.jsx("p",{className:"text-xs text-slate-500",children:"Premium access only"})]}),e.jsx(a,{label:"Username",placeholder:"Enter username",leftIcon:e.jsx(F,{size:18})}),e.jsx(a,{label:"Password",type:"password",placeholder:"••••••••",leftIcon:e.jsx(P,{size:18})}),e.jsx("button",{className:"mt-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-3 rounded-xl font-bold active:scale-95 transition-all",children:"Authenticate"})]})},s={args:{label:"Username",error:!0,helperText:"This username is already taken.",defaultValue:"dima_kacyuk"}},o={args:{placeholder:"Search components...",leftIcon:e.jsx($,{size:18}),className:"rounded-full h-12"}};var f,b,g;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: "Email Address",
    placeholder: "you@example.com",
    leftIcon: <Mail size={18} />
  }
}`,...(g=(b=t.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var k,y,w;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div className="w-80 flex flex-col gap-4 p-8 bg-white dark:bg-slate-950 rounded-[32px] border border-slate-200 dark:border-slate-800 shadow-2xl">
      <div className="text-center space-y-2 mb-4">
        <h2 className="text-2xl font-bold dark:text-white">Sign In</h2>
        <p className="text-xs text-slate-500">Premium access only</p>
      </div>
      <Input label="Username" placeholder="Enter username" leftIcon={<User size={18} />} />
      <Input label="Password" type="password" placeholder="••••••••" leftIcon={<Lock size={18} />} />
      <button className="mt-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-3 rounded-xl font-bold active:scale-95 transition-all">
        Authenticate
      </button>
    </div>
}`,...(w=(y=r.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var N,j,v;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: "Username",
    error: true,
    helperText: "This username is already taken.",
    defaultValue: "dima_kacyuk"
  }
}`,...(v=(j=s.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var I,S,_;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    placeholder: "Search components...",
    leftIcon: <Search size={18} />,
    className: "rounded-full h-12"
  }
}`,...(_=(S=o.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};const W=["Default","LoginExample","ErrorState","SearchBar"];export{t as Default,s as ErrorState,r as LoginExample,o as SearchBar,W as __namedExportsOrder,Q as default};
