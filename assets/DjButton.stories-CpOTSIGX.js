import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{w as xe,e as k,u as Be,f as ke}from"./index-Ch1O_M5-.js";import{D as t}from"./DjButton-CoBQu5w4.js";import{r as m}from"./index-oxIuDU2I.js";import"./_commonjsHelpers-CqkleIqs.js";/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),De=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(a,s,n)=>n?n.toUpperCase():s.toLowerCase()),w=e=>{const a=De(e);return a.charAt(0).toUpperCase()+a.slice(1)},he=(...e)=>e.filter((a,s,n)=>!!a&&a.trim()!==""&&n.indexOf(a)===s).join(" ").trim(),be=e=>{for(const a in e)if(a.startsWith("aria-")||a==="role"||a==="title")return!0};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Se={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ie=m.forwardRef(({color:e="currentColor",size:a=24,strokeWidth:s=2,absoluteStrokeWidth:n,className:x="",children:o,iconNode:ve,...B},ye)=>m.createElement("svg",{ref:ye,...Se,width:a,height:a,stroke:e,strokeWidth:n?Number(s)*24/Number(a):s,className:he("lucide",x),...!o&&!be(B)&&{"aria-hidden":"true"},...B},[...ve.map(([fe,je])=>m.createElement(fe,je)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=(e,a)=>{const s=m.forwardRef(({className:n,...x},o)=>m.createElement(Ie,{ref:o,iconNode:a,className:he(`lucide-${we(w(e))}`,`lucide-${e}`,n),...x}));return s.displayName=w(e),s};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ce=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],ze=g("circle-check",Ce);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ae=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Ee=g("external-link",Ae);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Me=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Ne=g("info",Me);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Le=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Te=g("trash-2",Le);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _e=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Pe=g("triangle-alert",_e),Ue={title:"UI/DjButton",component:t,parameters:{layout:"centered",docs:{description:{component:"A refined button component with high-performance aesthetics and full accessibility support."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","outline","ghost","danger","success","warning","info","link","glass"],description:"Visual style of the button"},size:{control:"select",options:["sm","md","lg","xl","icon"],description:"Size of the button"},isLoading:{control:"boolean"},disabled:{control:"boolean"},pill:{control:"boolean"},asChild:{control:"boolean",description:"If true, merges props onto the child element (e.g., for composition with <a> tags)."},onClick:{action:"clicked"}},args:{children:"Button",variant:"primary",size:"md",isLoading:!1,disabled:!1,pill:!1,onClick:ke()}},i={args:{variant:"primary",children:"Get Started"}},c={args:{variant:"secondary",children:"Learn More"}},l={args:{variant:"outline",children:"Edit Profile"}},d={render:e=>r.jsx("div",{className:"rounded-3xl p-16 bg-gradient-to-tr from-indigo-900 via-purple-800 to-rose-700 shadow-2xl",children:r.jsx(t,{...e,variant:"glass",size:"lg",leftIcon:r.jsx(Ee,{}),children:"Join the Future"})})},h={args:{variant:"success",children:"Payment Successful",leftIcon:r.jsx(ze,{})}},v={args:{variant:"warning",children:"System Warning",leftIcon:r.jsx(Pe,{})}},y={args:{variant:"info",children:"New Notification",leftIcon:r.jsx(Ne,{})}},f={args:{variant:"danger",children:"Delete Workspace",leftIcon:r.jsx(Te,{}),pill:!0}},p={render:e=>r.jsxs("div",{className:"flex flex-col items-center gap-6",children:[r.jsx(t,{...e,size:"xl",pill:!0,children:"Extra Large Hero"}),r.jsx(t,{...e,size:"lg",children:"Large Button"}),r.jsx(t,{...e,size:"md",children:"Medium Base"}),r.jsx(t,{...e,size:"sm",children:"Small Utility"})]})},j={args:{children:"Test Interaction",variant:"primary",size:"lg"},play:async({canvasElement:e,args:a})=>{const n=xe(e).getByRole("button",{name:/Test Interaction/i});await k(n).toBeInTheDocument(),await Be.click(n),await k(a.onClick).toHaveBeenCalled()}},u={render:e=>r.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-8 p-4",children:[r.jsx(t,{...e,variant:"primary",children:"Primary"}),r.jsx(t,{...e,variant:"secondary",children:"Secondary"}),r.jsx(t,{...e,variant:"outline",children:"Outline"}),r.jsx(t,{...e,variant:"ghost",children:"Ghost"}),r.jsx(t,{...e,variant:"success",children:"Success"}),r.jsx(t,{...e,variant:"warning",children:"Warning"}),r.jsx(t,{...e,variant:"info",children:"Info"}),r.jsx(t,{...e,variant:"danger",children:"Danger"})]})};var D,b,S,I,C;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    children: "Get Started"
  }
}`,...(S=(b=i.parameters)==null?void 0:b.docs)==null?void 0:S.source},description:{story:"The standard brand action variant. Featuring a rich indigo color and soft glow.",...(C=(I=i.parameters)==null?void 0:I.docs)==null?void 0:C.description}}};var z,A,E,M,N;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    children: "Learn More"
  }
}`,...(E=(A=c.parameters)==null?void 0:A.docs)==null?void 0:E.source},description:{story:"Used for less prominent actions. Adapts beautifully to dark mode.",...(N=(M=c.parameters)==null?void 0:M.docs)==null?void 0:N.description}}};var L,T,_,P,W;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    children: "Edit Profile"
  }
}`,...(_=(T=l.parameters)==null?void 0:T.docs)==null?void 0:_.source},description:{story:"A clean, bordered variant for secondary actions or toolbar items.",...(W=(P=l.parameters)==null?void 0:P.docs)==null?void 0:W.description}}};var G,$,H,O,U;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: args => <div className="rounded-3xl p-16 bg-gradient-to-tr from-indigo-900 via-purple-800 to-rose-700 shadow-2xl">
      <DjButton {...args} variant="glass" size="lg" leftIcon={<ExternalLink />}>
        Join the Future
      </DjButton>
    </div>
}`,...(H=($=d.parameters)==null?void 0:$.docs)==null?void 0:H.source},description:{story:"A high-transparency variant that works perfectly on colorful backgrounds.",...(U=(O=d.parameters)==null?void 0:O.docs)==null?void 0:U.description}}};var V,R,q;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    variant: "success",
    children: "Payment Successful",
    leftIcon: <CheckCircle2 />
  }
}`,...(q=(R=h.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var F,J,Z;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    children: "System Warning",
    leftIcon: <AlertTriangle />
  }
}`,...(Z=(J=v.parameters)==null?void 0:J.docs)==null?void 0:Z.source}}};var K,Q,X;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    variant: "info",
    children: "New Notification",
    leftIcon: <Info />
  }
}`,...(X=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,ee,re;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    variant: "danger",
    children: "Delete Workspace",
    leftIcon: <Trash2 />,
    pill: true
  }
}`,...(re=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,te,ne,se,oe;p.parameters={...p.parameters,docs:{...(ae=p.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col items-center gap-6">
      <DjButton {...args} size="xl" pill>Extra Large Hero</DjButton>
      <DjButton {...args} size="lg">Large Button</DjButton>
      <DjButton {...args} size="md">Medium Base</DjButton>
      <DjButton {...args} size="sm">Small Utility</DjButton>
    </div>
}`,...(ne=(te=p.parameters)==null?void 0:te.docs)==null?void 0:ne.source},description:{story:"Compare all sizes from extra-large heroes to small utility buttons.",...(oe=(se=p.parameters)==null?void 0:se.docs)==null?void 0:oe.description}}};var ie,ce,le;j.parameters={...j.parameters,docs:{...(ie=j.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    children: "Test Interaction",
    variant: "primary",
    size: "lg"
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", {
      name: /Test Interaction/i
    });
    await expect(button).toBeInTheDocument();
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalled();
  }
}`,...(le=(ce=j.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var de,pe,ue,me,ge;u.parameters={...u.parameters,docs:{...(de=u.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: args => <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 p-4">
      <DjButton {...args} variant="primary">Primary</DjButton>
      <DjButton {...args} variant="secondary">Secondary</DjButton>
      <DjButton {...args} variant="outline">Outline</DjButton>
      <DjButton {...args} variant="ghost">Ghost</DjButton>
      <DjButton {...args} variant="success">Success</DjButton>
      <DjButton {...args} variant="warning">Warning</DjButton>
      <DjButton {...args} variant="info">Info</DjButton>
      <DjButton {...args} variant="danger">Danger</DjButton>
    </div>
}`,...(ue=(pe=u.parameters)==null?void 0:pe.docs)==null?void 0:ue.source},description:{story:"A gallery showing all semantic and visual variants side-by-side.",...(ge=(me=u.parameters)==null?void 0:me.docs)==null?void 0:ge.description}}};const Ve=["Primary","Secondary","Outline","Glass","Success","Warning","InfoAction","Danger","AllSizes","InteractiveTests","VariantGallery"];export{p as AllSizes,f as Danger,d as Glass,y as InfoAction,j as InteractiveTests,l as Outline,i as Primary,c as Secondary,h as Success,u as VariantGallery,v as Warning,Ve as __namedExportsOrder,Ue as default};
