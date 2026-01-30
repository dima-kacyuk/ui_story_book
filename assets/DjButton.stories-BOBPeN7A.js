import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{w as ce,e as k,u as le,f as de}from"./index-Ch1O_M5-.js";import{D as l}from"./DjButton-BgD_Zn-o.js";import{r as d}from"./index-oxIuDU2I.js";import"./_commonjsHelpers-CqkleIqs.js";/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),me=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase()),w=e=>{const t=me(e);return t.charAt(0).toUpperCase()+t.slice(1)},te=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim(),he=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ue={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ge=d.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:x="",children:s,iconNode:ne,...f},se)=>d.createElement("svg",{ref:se,...ue,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:te("lucide",x),...!s&&!he(f)&&{"aria-hidden":"true"},...f},[...ne.map(([oe,ie])=>d.createElement(oe,ie)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=(e,t)=>{const n=d.forwardRef(({className:r,...x},s)=>d.createElement(ge,{ref:s,iconNode:t,className:te(`lucide-${pe(w(e))}`,`lucide-${e}`,r),...x}));return n.displayName=w(e),n};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],ae=p("arrow-right",ve);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ye=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],xe=p("external-link",ye);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],ke=p("mail",fe);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],be=p("save",we);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const je=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],re=p("trash-2",je),Be={title:"UI/DjButton",component:l,parameters:{layout:"centered",docs:{description:{component:"A highly customizable button component supporting polymorphism, icons, and loading states."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","outline","ghost","danger","link","glass"],description:"Visual style of the button"},size:{control:"select",options:["sm","md","lg","xl","icon"],description:"Size of the button"},isLoading:{control:"boolean"},disabled:{control:"boolean"},pill:{control:"boolean"},asChild:{control:"boolean",description:"If true, merges props onto the child element (e.g., for composition with <a> tags)."},onClick:{action:"clicked"}},args:{children:"Button",variant:"primary",size:"md",isLoading:!1,disabled:!1,pill:!1,onClick:de()}},m={args:{variant:"primary",children:"Primary Action"}},h={args:{variant:"secondary",children:"Secondary Action"}},u={args:{variant:"outline",children:"Outline Action"}},g={args:{variant:"danger",children:"Delete Item",leftIcon:a.jsx(re,{}),pill:!0}},o={args:{size:"xl",pill:!0,children:"Get Started Now",rightIcon:a.jsx(ae,{})}},i={args:{asChild:!0,variant:"link",children:a.jsxs("a",{href:"https://google.com",target:"_blank",rel:"noreferrer",className:"flex items-center gap-2",children:["Visit Google ",a.jsx(xe,{className:"size-4"})]})}},v={render:e=>a.jsxs("div",{className:"flex flex-col gap-4",children:[a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx(l,{...e,leftIcon:a.jsx(ke,{}),children:"Email Me"}),a.jsx(l,{...e,rightIcon:a.jsx(ae,{}),children:"Next Step"})]}),a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx(l,{...e,size:"icon",variant:"outline",children:a.jsx(be,{})}),a.jsx(l,{...e,size:"icon",variant:"ghost",className:"text-red-500 hover:text-red-600 hover:bg-red-50",children:a.jsx(re,{})})]})]})},y={args:{isLoading:!0,children:"Processing..."}},c={args:{children:"Click to Test",variant:"primary"},play:async({canvasElement:e,args:t})=>{const r=ce(e).getByRole("button",{name:/Click to Test/i});await k(r).toBeInTheDocument(),await le.click(r),await k(t.onClick).toHaveBeenCalled()}};var b,j,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    children: "Primary Action"
  }
}`,...(C=(j=m.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var S,A,I;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    children: "Secondary Action"
  }
}`,...(I=(A=h.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var N,B,D;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    children: "Outline Action"
  }
}`,...(D=(B=u.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var L,M,z;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: "danger",
    children: "Delete Item",
    leftIcon: <Trash2 />,
    pill: true
  }
}`,...(z=(M=g.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};var T,_,E,P,R;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    size: "xl",
    pill: true,
    children: "Get Started Now",
    rightIcon: <ArrowRight />
  }
}`,...(E=(_=o.parameters)==null?void 0:_.docs)==null?void 0:E.source},description:{story:"Use the `xl` size and `pill` prop for a prominent, modern look.",...(R=(P=o.parameters)==null?void 0:P.docs)==null?void 0:R.description}}};var V,$,O,q,H;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    asChild: true,
    variant: "link",
    children: <a href="https://google.com" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                Visit Google <ExternalLink className="size-4" />
            </a>
  }
}`,...(O=($=i.parameters)==null?void 0:$.docs)==null?void 0:O.source},description:{story:"**Polymorphism in Action**: This button is actually an `<a>` tag!\nInspect the DOM to verify. This is achieved using the `asChild` prop \nand passing an `<a>` element as a child.",...(H=(q=i.parameters)==null?void 0:q.docs)==null?void 0:H.description}}};var G,U,W;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
             <DjButton {...args} leftIcon={<Mail />}>Email Me</DjButton>
             <DjButton {...args} rightIcon={<ArrowRight />}>Next Step</DjButton>
        </div>
        <div className="flex items-center gap-4">
            <DjButton {...args} size="icon" variant="outline"><Save /></DjButton>
            <DjButton {...args} size="icon" variant="ghost" className="text-red-500 hover:text-red-600 hover:bg-red-50"><Trash2 /></DjButton>
        </div>
      </div>
}`,...(W=(U=v.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var Z,K,F;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    isLoading: true,
    children: "Processing..."
  }
}`,...(F=(K=y.parameters)==null?void 0:K.docs)==null?void 0:F.source}}};var J,Q,X,Y,ee;c.parameters={...c.parameters,docs:{...(J=c.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    children: "Click to Test",
    variant: "primary"
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", {
      name: /Click to Test/i
    });

    // Assert button is visible
    await expect(button).toBeInTheDocument();

    // Simulate click
    await userEvent.click(button);

    // Assert onClick handler was called
    await expect(args.onClick).toHaveBeenCalled();
  }
}`,...(X=(Q=c.parameters)==null?void 0:Q.docs)==null?void 0:X.source},description:{story:`This story performs an automated interaction test within Storybook.
It verifies that the button is clickable and fires the handler.`,...(ee=(Y=c.parameters)==null?void 0:Y.docs)==null?void 0:ee.description}}};const De=["Primary","Secondary","Outline","Danger","LargePill","AsLink","WithIcons","LoadingState","InteractiveTest"];export{i as AsLink,g as Danger,c as InteractiveTest,o as LargePill,y as LoadingState,u as Outline,m as Primary,h as Secondary,v as WithIcons,De as __namedExportsOrder,Be as default};
