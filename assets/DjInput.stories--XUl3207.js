import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{e as o,r as j}from"./index-CtOEgLBf.js";import{t as K,c as Q}from"./bundle-mjs-BNe0Xlio.js";import{c as l}from"./createLucideIcon-CFZQIwQc.js";import{M as Y}from"./mail-DamPRsdG.js";import{G as ee}from"./globe-9sdF-bfU.js";import"./_commonjsHelpers-CqkleIqs.js";/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],ae=l("eye-off",te);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],re=l("eye",se);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]],le=l("hash",oe);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],ie=l("lock",ne);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],de=l("user",ce);function pe(...t){return K(Q(t))}const g=o.forwardRef(({className:t,label:b,error:h,leftIcon:a,rightIcon:s,type:w="text",onlyNumbers:F,onlyStrings:H,variant:v="white",id:U,onChange:y,...W},$)=>{const G=j.useId(),k=U||G,[n,X]=j.useState(!1),f=w==="password",B=f?n?"text":"password":w,J=x=>{let r=x.target.value;F?r=r.replace(/[^0-9]/g,""):H&&(r=r.replace(/[^a-zA-Z\s]/g,"")),x.target.value=r,y==null||y(x)};return e.jsxs("div",{className:"flex flex-col gap-1.5 w-full group/input",children:[b&&e.jsx("label",{htmlFor:k,className:"text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1 transition-colors group-focus-within/input:text-indigo-600",children:b}),e.jsxs("div",{className:"relative",children:[a&&e.jsx("div",{className:"absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/input:text-slate-900 dark:group-focus-within/input:text-white transition-colors",children:o.isValidElement(a)?o.cloneElement(a,{size:18}):a}),e.jsx("input",{...W,id:k,ref:$,type:B,onChange:J,className:pe("w-full h-12 px-4 text-sm font-medium outline-none transition-all duration-300","border-2 rounded-lg placeholder:font-normal",v==="black"&&"bg-slate-900 text-white border-white placeholder:text-slate-400 hover:bg-slate-800 focus:bg-slate-900 focus:border-white focus:ring-4 focus:ring-white/10",v==="white"&&"bg-white text-slate-900 border-slate-900 placeholder:text-slate-400 hover:border-slate-700 focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5",h&&"border-rose-500 hover:border-rose-500 focus:border-rose-500 focus:ring-rose-500/5",a&&"pl-12",(s||f)&&"pr-12",t)}),f?e.jsx("button",{type:"button",onClick:()=>X(!n),className:"absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-slate-200 transition-all p-1.5 rounded-lg hover:bg-white/10 active:scale-95","aria-label":n?"Hide password":"Show password",children:n?e.jsx(ae,{size:20,strokeWidth:2.5}):e.jsx(re,{size:20,strokeWidth:2.5})}):s?e.jsx("div",{className:"absolute right-4 top-1/2 -translate-y-1/2 text-slate-400",children:o.isValidElement(s)?o.cloneElement(s,{size:18}):s}):null]}),typeof h=="string"&&e.jsx("span",{className:"text-[10px] font-black uppercase tracking-tight text-rose-500 dark:text-rose-400 ml-1 mt-0.5",children:h})]})});g.displayName="DjInput";g.__docgenInfo={description:`DjInput is a high-performance input suite with industrial design.
Features built-in validation constraints, password visibility toggle, and premium focus mechanics.`,methods:[],displayName:"DjInput",props:{label:{required:!1,tsType:{name:"string"},description:"Optional label above the input"},error:{required:!1,tsType:{name:"union",raw:"string | boolean",elements:[{name:"string"},{name:"boolean"}]},description:"Optional helper text or error message below the input"},leftIcon:{required:!1,tsType:{name:"ReactNode"},description:"Left side icon or element"},rightIcon:{required:!1,tsType:{name:"ReactNode"},description:"Right side icon or element (ignored if type is 'password')"},onlyNumbers:{required:!1,tsType:{name:"boolean"},description:"If true, only numbers will be allowed (useful for ZIP, card numbers etc)"},onlyStrings:{required:!1,tsType:{name:"boolean"},description:"If true, only alphabetic characters will be allowed"},variant:{required:!1,tsType:{name:"union",raw:"'black' | 'white'",elements:[{name:"literal",value:"'black'"},{name:"literal",value:"'white'"}]},description:"Visual variant",defaultValue:{value:"'white'",computed:!1}},type:{defaultValue:{value:"'text'",computed:!1},required:!1}},composes:["Omit"]};const be={title:"Components/DjInput",component:g,parameters:{layout:"centered"},tags:["autodocs"],decorators:[t=>e.jsx("div",{className:"w-[400px]",children:e.jsx(t,{})})]},i={args:{label:"Username",placeholder:"Enter your system alias...",leftIcon:e.jsx(de,{})}},c={args:{type:"email",label:"Command Center Email",placeholder:"admin@qrenza.pro",leftIcon:e.jsx(Y,{})}},d={args:{type:"password",label:"Security Protocol",placeholder:"Enter encrypted key...",leftIcon:e.jsx(ie,{})}},p={args:{onlyNumbers:!0,label:"Zip Code",placeholder:"00000",leftIcon:e.jsx(ee,{}),maxLength:5,description:"Only numbers allowed via native constraint."}},u={args:{label:"Access Code",placeholder:"PR-9000-X",error:"Invalid sequence detected. Please re-authenticate.",leftIcon:e.jsx(le,{})}},m={args:{label:"Full Width Adaptive",placeholder:"Responsively scaling with container...",className:"w-full"}};var N,E,I;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    placeholder: 'Enter your system alias...',
    leftIcon: <User />
  }
}`,...(I=(E=i.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var S,_,q;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    type: 'email',
    label: 'Command Center Email',
    placeholder: 'admin@qrenza.pro',
    leftIcon: <Mail />
  }
}`,...(q=(_=c.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var P,M,z;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    type: 'password',
    label: 'Security Protocol',
    placeholder: 'Enter encrypted key...',
    leftIcon: <Lock />
  }
}`,...(z=(M=d.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};var O,R,T;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    onlyNumbers: true,
    label: 'Zip Code',
    placeholder: '00000',
    leftIcon: <Globe />,
    maxLength: 5,
    description: 'Only numbers allowed via native constraint.'
  } as any
}`,...(T=(R=p.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var A,C,D;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: 'Access Code',
    placeholder: 'PR-9000-X',
    error: 'Invalid sequence detected. Please re-authenticate.',
    leftIcon: <Hash />
  }
}`,...(D=(C=u.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var L,V,Z;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: 'Full Width Adaptive',
    placeholder: 'Responsively scaling with container...',
    className: 'w-full'
  }
}`,...(Z=(V=m.parameters)==null?void 0:V.docs)==null?void 0:Z.source}}};const we=["Default","Email","Password","NumberOnlyZip","ErrorState","Adaptive"];export{m as Adaptive,i as Default,c as Email,u as ErrorState,p as NumberOnlyZip,d as Password,we as __namedExportsOrder,be as default};
