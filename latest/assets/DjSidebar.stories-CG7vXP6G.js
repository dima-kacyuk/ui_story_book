import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as V,e as _}from"./index-CtOEgLBf.js";import{t as ke,c as ye}from"./bundle-mjs-BNe0Xlio.js";import{a as z,C as W}from"./chevron-right-Buu6Q3mW.js";import{C as Ie}from"./chevron-down-B0yM7G96.js";import{c as d}from"./createLucideIcon-CFZQIwQc.js";import{M as N}from"./mail-DamPRsdG.js";import"./_commonjsHelpers-CqkleIqs.js";/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Se=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],le=d("bell",Se);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ce=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],C=d("chart-column",Ce);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Me=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],w=d("house",Me);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Te=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],Ae=d("log-out",Te);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const De=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],k=d("settings",De);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Le=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],M=d("users",Le);function c(...s){return ke(ye(s))}const l=({logo:s,menuItems:ne,activeItemId:oe,variant:T="white",position:ce="left",defaultCollapsed:de=!1,onCollapse:y,className:he,width:me="280px",collapsedWidth:pe="80px",footer:A})=>{const[i,xe]=V.useState(de),[ue,ge]=V.useState(new Set),be=()=>{const t=!i;xe(t),y==null||y(t)},fe=t=>{ge(o=>{const a=new Set(o);return a.has(t)?a.delete(t):a.add(t),a})},r=T==="black",n=T==="white",p=ce==="left",D=(t,o=0)=>{const a=t.id===oe,I=t.children&&t.children.length>0,L=ue.has(t.id),ve=t.href?"a":"button",je=o===0?"text-xs":o===1?"text-[11px]":"text-[10px]",Ne=o===0?18:o===1?16:14,we=o===0?"text-[9px]":"text-[8px]";return e.jsxs("li",{children:[e.jsxs(ve,{href:t.href,onClick:S=>{var E;I&&(S.preventDefault(),fe(t.id)),(E=t.onClick)==null||E.call(t)},className:c("w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group relative","hover:scale-[1.01] active:scale-[0.99]",o>0&&"ml-3",a&&r&&"bg-white text-slate-900",a&&n&&"bg-slate-900 text-white",!a&&r&&"hover:bg-white/10",!a&&n&&"hover:bg-slate-900/5",i&&"justify-center",!i&&"justify-start"),children:[e.jsx("span",{className:"flex-shrink-0 w-5 h-5 flex items-center justify-center",children:_.isValidElement(t.icon)?_.cloneElement(t.icon,{size:Ne}):t.icon}),!i&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:c("flex-1 font-bold uppercase tracking-wide text-left",je),children:t.label}),t.badge&&e.jsx("span",{className:c("px-1.5 py-0.5 font-bold rounded-full",we,a&&r&&"bg-slate-900 text-white",a&&n&&"bg-white text-slate-900",!a&&r&&"bg-white/20 text-white",!a&&n&&"bg-slate-900/10 text-slate-900"),children:t.badge}),I&&e.jsx(Ie,{size:14,className:c("transition-transform duration-200",L&&"rotate-180")})]}),i&&e.jsx("div",{className:c("absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50","px-2.5 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wide whitespace-nowrap",p?"left-full ml-2":"right-full mr-2",r&&"bg-white text-slate-900",n&&"bg-slate-900 text-white"),children:t.label})]}),I&&!i&&L&&e.jsx("ul",{className:"mt-0.5 space-y-0.5 overflow-hidden",children:t.children.map(S=>D(S,o+1))})]},t.id)};return e.jsxs("aside",{className:c("flex flex-col h-screen transition-all duration-300 ease-in-out border-2 relative",r&&"bg-slate-900 border-white text-white",n&&"bg-white border-slate-900 text-slate-900",he),style:{width:i?pe:me},children:[s&&e.jsx("div",{className:c("flex items-center justify-center h-20 border-b-2 transition-all duration-300",r&&"border-white",n&&"border-slate-900",i&&"px-2",!i&&"px-6"),children:s}),e.jsx("nav",{className:"flex-1 overflow-y-auto py-6",children:e.jsx("ul",{className:"space-y-1 px-3",children:ne.map(t=>D(t))})}),A&&e.jsx("div",{className:c("border-t-2 p-4 transition-all duration-300",r&&"border-white",n&&"border-slate-900",i&&"px-2"),children:A}),e.jsx("button",{onClick:be,className:c("absolute top-24 w-10 h-10 flex items-center justify-center rounded-full border-2 transition-all duration-200 shadow-lg","hover:scale-110 active:scale-95",p?"-right-5":"-left-5",r&&"bg-slate-900 border-white text-white hover:bg-slate-800",n&&"bg-white border-slate-900 text-slate-900 hover:bg-slate-50"),"aria-label":i?"Expand sidebar":"Collapse sidebar",children:i?p?e.jsx(z,{size:20,strokeWidth:3}):e.jsx(W,{size:20,strokeWidth:3}):p?e.jsx(W,{size:20,strokeWidth:3}):e.jsx(z,{size:20,strokeWidth:3})})]})};l.displayName="DjSidebar";l.__docgenInfo={description:`DjSidebar is a professional navigation sidebar with industrial black/white aesthetics.
Features logo placement, icon menu, nested navigation, responsive collapse, and flexible positioning.`,methods:[],displayName:"DjSidebar",props:{logo:{required:!1,tsType:{name:"ReactNode"},description:"Logo or brand element to display at the top"},menuItems:{required:!0,tsType:{name:"Array",elements:[{name:"DjSidebarMenuItem"}],raw:"DjSidebarMenuItem[]"},description:"Array of menu items with icons and labels"},activeItemId:{required:!1,tsType:{name:"string"},description:"ID of the currently active menu item"},variant:{required:!1,tsType:{name:"union",raw:"'black' | 'white'",elements:[{name:"literal",value:"'black'"},{name:"literal",value:"'white'"}]},description:"Visual variant",defaultValue:{value:"'white'",computed:!1}},position:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"Position of the sidebar",defaultValue:{value:"'left'",computed:!1}},defaultCollapsed:{required:!1,tsType:{name:"boolean"},description:"Whether the sidebar starts collapsed",defaultValue:{value:"false",computed:!1}},onCollapse:{required:!1,tsType:{name:"signature",type:"function",raw:"(collapsed: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"collapsed"}],return:{name:"void"}}},description:"Callback when collapse state changes"},className:{required:!1,tsType:{name:"string"},description:"Custom class for the root container"},width:{required:!1,tsType:{name:"string"},description:"Width of the expanded sidebar",defaultValue:{value:"'280px'",computed:!1}},collapsedWidth:{required:!1,tsType:{name:"string"},description:"Width of the collapsed sidebar",defaultValue:{value:"'80px'",computed:!1}},footer:{required:!1,tsType:{name:"ReactNode"},description:"Footer content at the bottom of the sidebar"}}};const Re={title:"Components/DjSidebar",component:l,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["black","white"]},position:{control:"select",options:["left","right"]}}},m=[{id:"home",label:"Dashboard",icon:e.jsx(w,{}),href:"#"},{id:"users",label:"Users",icon:e.jsx(M,{}),badge:"12"},{id:"analytics",label:"Analytics",icon:e.jsx(C,{})},{id:"messages",label:"Messages",icon:e.jsx(N,{}),badge:"3"},{id:"notifications",label:"Alerts",icon:e.jsx(le,{}),badge:"99+"},{id:"settings",label:"Settings",icon:e.jsx(k,{})}],h=()=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-black text-xl",children:"DJ"}),e.jsx("span",{className:"text-lg font-black tracking-tight",children:"NEXUS"})]}),Ee=()=>e.jsx("div",{className:"w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-black text-xl",children:"DJ"}),x={args:{logo:e.jsx(h,{}),menuItems:m,activeItemId:"home",variant:"white",position:"left"},render:s=>e.jsxs("div",{className:"flex h-screen bg-slate-50",children:[e.jsx(l,{...s}),e.jsxs("div",{className:"flex-1 p-8",children:[e.jsx("h1",{className:"text-3xl font-black",children:"Main Content Area"}),e.jsx("p",{className:"text-slate-600 mt-2",children:"The sidebar is on the left with white variant."})]})]})},u={args:{logo:e.jsx(h,{}),menuItems:m,activeItemId:"analytics",variant:"black",position:"left"},render:s=>e.jsxs("div",{className:"flex h-screen bg-slate-50",children:[e.jsx(l,{...s}),e.jsxs("div",{className:"flex-1 p-8",children:[e.jsx("h1",{className:"text-3xl font-black",children:"Main Content Area"}),e.jsx("p",{className:"text-slate-600 mt-2",children:"The sidebar is on the left with black variant."})]})]})},g={args:{logo:e.jsx(h,{}),menuItems:m,activeItemId:"users",variant:"white",position:"right"},render:s=>e.jsxs("div",{className:"flex h-screen bg-slate-50",children:[e.jsxs("div",{className:"flex-1 p-8",children:[e.jsx("h1",{className:"text-3xl font-black",children:"Main Content Area"}),e.jsx("p",{className:"text-slate-600 mt-2",children:"The sidebar is on the right side."})]}),e.jsx(l,{...s})]})},b={args:{logo:e.jsx(Ee,{}),menuItems:m,activeItemId:"settings",variant:"white",position:"left",defaultCollapsed:!0},render:s=>e.jsxs("div",{className:"flex h-screen bg-slate-50",children:[e.jsx(l,{...s}),e.jsxs("div",{className:"flex-1 p-8",children:[e.jsx("h1",{className:"text-3xl font-black",children:"Main Content Area"}),e.jsx("p",{className:"text-slate-600 mt-2",children:"The sidebar starts collapsed. Hover over icons to see tooltips."})]})]})},f={args:{logo:e.jsx(h,{}),menuItems:m,activeItemId:"home",variant:"black",position:"left",footer:e.jsxs("button",{className:"w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors",children:[e.jsx(Ae,{size:20}),e.jsx("span",{className:"text-sm font-black uppercase tracking-wide",children:"Logout"})]})},render:s=>e.jsxs("div",{className:"flex h-screen bg-slate-50",children:[e.jsx(l,{...s}),e.jsxs("div",{className:"flex-1 p-8",children:[e.jsx("h1",{className:"text-3xl font-black",children:"Main Content Area"}),e.jsx("p",{className:"text-slate-600 mt-2",children:"The sidebar has a footer with a logout button."})]})]})},re=[{id:"home",label:"Dashboard",icon:e.jsx(w,{}),href:"#"},{id:"products",label:"Products",icon:e.jsx(M,{}),badge:"24",children:[{id:"products-all",label:"All Products",icon:e.jsx(C,{})},{id:"products-new",label:"Add New",icon:e.jsx(N,{}),badge:"New"},{id:"products-categories",label:"Categories",icon:e.jsx(k,{}),children:[{id:"cat-electronics",label:"Electronics",icon:e.jsx(le,{})},{id:"cat-clothing",label:"Clothing",icon:e.jsx(M,{})},{id:"cat-food",label:"Food & Beverage",icon:e.jsx(w,{})}]}]},{id:"analytics",label:"Analytics",icon:e.jsx(C,{}),children:[{id:"analytics-overview",label:"Overview",icon:e.jsx(w,{})},{id:"analytics-reports",label:"Reports",icon:e.jsx(N,{}),badge:"5"},{id:"analytics-exports",label:"Exports",icon:e.jsx(k,{})}]},{id:"messages",label:"Messages",icon:e.jsx(N,{}),badge:"3"},{id:"settings",label:"Settings",icon:e.jsx(k,{})}],v={args:{logo:e.jsx(h,{}),menuItems:re,activeItemId:"cat-electronics",variant:"white",position:"left"},render:s=>e.jsxs("div",{className:"flex h-screen bg-slate-50",children:[e.jsx(l,{...s}),e.jsxs("div",{className:"flex-1 p-8",children:[e.jsx("h1",{className:"text-3xl font-black",children:"Nested Navigation Demo"}),e.jsx("p",{className:"text-slate-600 mt-2",children:"This sidebar supports unlimited nesting levels with collapsible sub-menus."}),e.jsxs("div",{className:"mt-6 p-6 bg-white rounded-2xl border-2 border-slate-900",children:[e.jsx("h2",{className:"text-xl font-black mb-4",children:"Features:"}),e.jsxs("ul",{className:"space-y-2 text-slate-700",children:[e.jsxs("li",{children:["✅ ",e.jsx("strong",{children:"Sub-tabs"}),': Click "Products" to expand/collapse']}),e.jsxs("li",{children:["✅ ",e.jsx("strong",{children:"Sub-sub-tabs"}),': Expand "Categories" for deeper nesting']}),e.jsxs("li",{children:["✅ ",e.jsx("strong",{children:"Visual Indentation"}),": Clear hierarchy with left margin"]}),e.jsxs("li",{children:["✅ ",e.jsx("strong",{children:"Smooth Animations"}),": ChevronDown rotates on expand"]}),e.jsxs("li",{children:["✅ ",e.jsx("strong",{children:"Active State"}),': "Electronics" is currently active']})]})]})]})]})},j={args:{logo:e.jsx(h,{}),menuItems:re,activeItemId:"products-new",variant:"black",position:"left"},render:s=>e.jsxs("div",{className:"flex h-screen bg-slate-50",children:[e.jsx(l,{...s}),e.jsxs("div",{className:"flex-1 p-8",children:[e.jsx("h1",{className:"text-3xl font-black",children:"Nested Navigation (Black Variant)"}),e.jsx("p",{className:"text-slate-600 mt-2",children:"The same nested structure with the black variant for high-contrast dark mode."})]})]})};var q,B,F;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    logo: <SampleLogo />,
    menuItems: sampleMenuItems,
    activeItemId: 'home',
    variant: 'white',
    position: 'left'
  },
  render: args => <div className="flex h-screen bg-slate-50">
      <DjSidebar {...args} />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-black">Main Content Area</h1>
        <p className="text-slate-600 mt-2">The sidebar is on the left with white variant.</p>
      </div>
    </div>
}`,...(F=(B=x.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var H,R,P;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    logo: <SampleLogo />,
    menuItems: sampleMenuItems,
    activeItemId: 'analytics',
    variant: 'black',
    position: 'left'
  },
  render: args => <div className="flex h-screen bg-slate-50">
      <DjSidebar {...args} />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-black">Main Content Area</h1>
        <p className="text-slate-600 mt-2">The sidebar is on the left with black variant.</p>
      </div>
    </div>
}`,...(P=(R=u.parameters)==null?void 0:R.docs)==null?void 0:P.source}}};var $,O,U;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    logo: <SampleLogo />,
    menuItems: sampleMenuItems,
    activeItemId: 'users',
    variant: 'white',
    position: 'right'
  },
  render: args => <div className="flex h-screen bg-slate-50">
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-black">Main Content Area</h1>
        <p className="text-slate-600 mt-2">The sidebar is on the right side.</p>
      </div>
      <DjSidebar {...args} />
    </div>
}`,...(U=(O=g.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var J,X,G;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    logo: <CollapsedLogo />,
    menuItems: sampleMenuItems,
    activeItemId: 'settings',
    variant: 'white',
    position: 'left',
    defaultCollapsed: true
  },
  render: args => <div className="flex h-screen bg-slate-50">
      <DjSidebar {...args} />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-black">Main Content Area</h1>
        <p className="text-slate-600 mt-2">The sidebar starts collapsed. Hover over icons to see tooltips.</p>
      </div>
    </div>
}`,...(G=(X=b.parameters)==null?void 0:X.docs)==null?void 0:G.source}}};var K,Q,Y;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    logo: <SampleLogo />,
    menuItems: sampleMenuItems,
    activeItemId: 'home',
    variant: 'black',
    position: 'left',
    footer: <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors">
        <LogOut size={20} />
        <span className="text-sm font-black uppercase tracking-wide">Logout</span>
      </button>
  },
  render: args => <div className="flex h-screen bg-slate-50">
      <DjSidebar {...args} />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-black">Main Content Area</h1>
        <p className="text-slate-600 mt-2">The sidebar has a footer with a logout button.</p>
      </div>
    </div>
}`,...(Y=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,ee,te;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    logo: <SampleLogo />,
    menuItems: nestedMenuItems,
    activeItemId: 'cat-electronics',
    variant: 'white',
    position: 'left'
  },
  render: args => <div className="flex h-screen bg-slate-50">
      <DjSidebar {...args} />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-black">Nested Navigation Demo</h1>
        <p className="text-slate-600 mt-2">
          This sidebar supports unlimited nesting levels with collapsible sub-menus.
        </p>
        <div className="mt-6 p-6 bg-white rounded-2xl border-2 border-slate-900">
          <h2 className="text-xl font-black mb-4">Features:</h2>
          <ul className="space-y-2 text-slate-700">
            <li>✅ <strong>Sub-tabs</strong>: Click "Products" to expand/collapse</li>
            <li>✅ <strong>Sub-sub-tabs</strong>: Expand "Categories" for deeper nesting</li>
            <li>✅ <strong>Visual Indentation</strong>: Clear hierarchy with left margin</li>
            <li>✅ <strong>Smooth Animations</strong>: ChevronDown rotates on expand</li>
            <li>✅ <strong>Active State</strong>: "Electronics" is currently active</li>
          </ul>
        </div>
      </div>
    </div>
}`,...(te=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var se,ae,ie;j.parameters={...j.parameters,docs:{...(se=j.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    logo: <SampleLogo />,
    menuItems: nestedMenuItems,
    activeItemId: 'products-new',
    variant: 'black',
    position: 'left'
  },
  render: args => <div className="flex h-screen bg-slate-50">
      <DjSidebar {...args} />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-black">Nested Navigation (Black Variant)</h1>
        <p className="text-slate-600 mt-2">
          The same nested structure with the black variant for high-contrast dark mode.
        </p>
      </div>
    </div>
}`,...(ie=(ae=j.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};const Pe=["White","Black","RightSide","Collapsed","WithFooter","NestedNavigation","NestedBlackVariant"];export{u as Black,b as Collapsed,j as NestedBlackVariant,v as NestedNavigation,g as RightSide,x as White,f as WithFooter,Pe as __namedExportsOrder,Re as default};
