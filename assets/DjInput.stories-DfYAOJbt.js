import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{e as n,r as v}from"./index-CtOEgLBf.js";import{t as J,c as K}from"./bundle-mjs-BNe0Xlio.js";import{c as r}from"./createLucideIcon-CFZQIwQc.js";import{G as Q}from"./globe-9sdF-bfU.js";import"./_commonjsHelpers-CqkleIqs.js";/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],ee=r("eye-off",Y);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],te=r("eye",re);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]],se=r("hash",ae);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],ne=r("lock",oe);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],ie=r("mail",le);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],de=r("user",ce);function pe(...t){return J(K(t))}const b=n.forwardRef(({className:t,label:g,error:m,leftIcon:a,rightIcon:s,type:w="text",onlyNumbers:F,onlyStrings:$,id:U,onChange:h,...V},G)=>{const H=v.useId(),k=U||H,[y,W]=v.useState(!1),x=w==="password",X=x?y?"text":"password":w,B=f=>{let o=f.target.value;F?o=o.replace(/[^0-9]/g,""):$&&(o=o.replace(/[^a-zA-Z\s]/g,"")),f.target.value=o,h==null||h(f)};return e.jsxs("div",{className:"flex flex-col gap-1.5 w-full group/input",children:[g&&e.jsx("label",{htmlFor:k,className:"text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1 transition-colors group-focus-within/input:text-indigo-600",children:g}),e.jsxs("div",{className:"relative",children:[a&&e.jsx("div",{className:"absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/input:text-slate-900 dark:group-focus-within/input:text-white transition-colors",children:n.isValidElement(a)?n.cloneElement(a,{size:18}):a}),e.jsx("input",{...V,id:k,ref:G,type:X,onChange:B,className:pe("w-full h-12 px-4 text-sm font-medium bg-white dark:bg-[#09090b] outline-none transition-all duration-300","border-2 border-slate-100 dark:border-white/5","hover:border-slate-200 dark:hover:border-white/10","focus:border-slate-950 dark:focus:border-white focus:ring-4 focus:ring-slate-900/5 dark:focus:ring-white/5","rounded-2xl placeholder:text-slate-400 placeholder:font-normal",m&&"border-rose-500 hover:border-rose-500 focus:border-rose-500 focus:ring-rose-500/5 dark:border-rose-800 dark:hover:border-rose-700",a&&"pl-12",(s||x)&&"pr-12",t)}),x?e.jsx("button",{type:"button",onClick:()=>W(!y),className:"absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5",children:y?e.jsx(ee,{size:18}):e.jsx(te,{size:18})}):s?e.jsx("div",{className:"absolute right-4 top-1/2 -translate-y-1/2 text-slate-400",children:n.isValidElement(s)?n.cloneElement(s,{size:18}):s}):null]}),typeof m=="string"&&e.jsx("span",{className:"text-[10px] font-black uppercase tracking-tight text-rose-500 dark:text-rose-400 ml-1 mt-0.5",children:m})]})});b.displayName="DjInput";b.__docgenInfo={description:`DjInput is a high-performance input suite with industrial design.
Features built-in validation constraints, password visibility toggle, and premium focus mechanics.`,methods:[],displayName:"DjInput",props:{label:{required:!1,tsType:{name:"string"},description:"Optional label above the input"},error:{required:!1,tsType:{name:"union",raw:"string | boolean",elements:[{name:"string"},{name:"boolean"}]},description:"Optional helper text or error message below the input"},leftIcon:{required:!1,tsType:{name:"ReactNode"},description:"Left side icon or element"},rightIcon:{required:!1,tsType:{name:"ReactNode"},description:"Right side icon or element (ignored if type is 'password')"},onlyNumbers:{required:!1,tsType:{name:"boolean"},description:"If true, only numbers will be allowed (useful for ZIP, card numbers etc)"},onlyStrings:{required:!1,tsType:{name:"boolean"},description:"If true, only alphabetic characters will be allowed"},type:{defaultValue:{value:"'text'",computed:!1},required:!1}},composes:["Omit"]};const be={title:"Components/DjInput",component:b,parameters:{layout:"centered"},tags:["autodocs"],decorators:[t=>e.jsx("div",{className:"w-[400px]",children:e.jsx(t,{})})]},l={args:{label:"Username",placeholder:"Enter your system alias...",leftIcon:e.jsx(de,{})}},i={args:{type:"email",label:"Command Center Email",placeholder:"admin@qrenza.pro",leftIcon:e.jsx(ie,{})}},c={args:{type:"password",label:"Security Protocol",placeholder:"Enter encrypted key...",leftIcon:e.jsx(ne,{})}},d={args:{onlyNumbers:!0,label:"Zip Code",placeholder:"00000",leftIcon:e.jsx(Q,{}),maxLength:5,description:"Only numbers allowed via native constraint."}},p={args:{label:"Access Code",placeholder:"PR-9000-X",error:"Invalid sequence detected. Please re-authenticate.",leftIcon:e.jsx(se,{})}},u={args:{label:"Full Width Adaptive",placeholder:"Responsively scaling with container...",className:"w-full"}};var N,j,E;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    placeholder: 'Enter your system alias...',
    leftIcon: <User />
  }
}`,...(E=(j=l.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var I,_,q;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    type: 'email',
    label: 'Command Center Email',
    placeholder: 'admin@qrenza.pro',
    leftIcon: <Mail />
  }
}`,...(q=(_=i.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var S,P,z;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    type: 'password',
    label: 'Security Protocol',
    placeholder: 'Enter encrypted key...',
    leftIcon: <Lock />
  }
}`,...(z=(P=c.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var M,O,R;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    onlyNumbers: true,
    label: 'Zip Code',
    placeholder: '00000',
    leftIcon: <Globe />,
    maxLength: 5,
    description: 'Only numbers allowed via native constraint.'
  } as any
}`,...(R=(O=d.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var A,C,D;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: 'Access Code',
    placeholder: 'PR-9000-X',
    error: 'Invalid sequence detected. Please re-authenticate.',
    leftIcon: <Hash />
  }
}`,...(D=(C=p.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var L,T,Z;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: 'Full Width Adaptive',
    placeholder: 'Responsively scaling with container...',
    className: 'w-full'
  }
}`,...(Z=(T=u.parameters)==null?void 0:T.docs)==null?void 0:Z.source}}};const ge=["Default","Email","Password","NumberOnlyZip","ErrorState","Adaptive"];export{u as Adaptive,l as Default,i as Email,p as ErrorState,d as NumberOnlyZip,c as Password,ge as __namedExportsOrder,be as default};
