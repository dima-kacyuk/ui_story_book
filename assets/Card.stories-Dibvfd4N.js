import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./index-oxIuDU2I.js";import{t as C,c as k}from"./bundle-mjs-BNe0Xlio.js";import{B}from"./Badge-BD346tzg.js";import{D as c}from"./DjButton-B6tv7jVN.js";import"./_commonjsHelpers-CqkleIqs.js";function l(...a){return C(k(a))}const t=({className:a,interactive:r=!1,rounded:g="2xl",shadow:b="md",theme:m,children:w,...N})=>{const y={none:"rounded-none",md:"rounded-md",lg:"rounded-lg",xl:"rounded-xl","2xl":"rounded-[24px]","3xl":"rounded-[32px]"},j={none:"shadow-none",sm:"shadow-sm",md:"shadow-md shadow-slate-900/5",lg:"shadow-lg shadow-slate-900/5",xl:"shadow-xl shadow-slate-900/10","2xl":"shadow-2xl shadow-slate-900/15"};return e.jsx("div",{className:l("bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 transition-all duration-300 overflow-hidden",y[g],j[b],r&&"hover:-translate-y-1 hover:shadow-2xl hover:border-slate-200 dark:hover:border-slate-700 cursor-pointer",m==="dark"&&"dark",m==="light"&&"light",a),...N,children:w})},o=({className:a,...r})=>e.jsx("div",{className:l("p-6 pb-3 border-b border-slate-50 dark:border-slate-900",a),...r}),n=({className:a,...r})=>e.jsx("div",{className:l("p-6",a),...r}),i=({className:a,...r})=>e.jsx("div",{className:l("p-6 pt-3 border-t border-slate-50 dark:border-slate-900 flex items-center justify-between",a),...r});t.displayName="Card";o.displayName="CardHeader";n.displayName="CardBody";i.displayName="CardFooter";t.__docgenInfo={description:"DjCard is a high-end container with premium shadows and glassmorphism capabilities.",methods:[],displayName:"Card",props:{interactive:{required:!1,tsType:{name:"boolean"},description:"If true, adds a hover animation and lifting effect",defaultValue:{value:"false",computed:!1}},rounded:{required:!1,tsType:{name:"union",raw:'"none" | "md" | "lg" | "xl" | "2xl" | "3xl"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"2xl"'},{name:"literal",value:'"3xl"'}]},description:`Border radius of the card
@default "2xl"`,defaultValue:{value:'"2xl"',computed:!1}},shadow:{required:!1,tsType:{name:"union",raw:'"none" | "sm" | "md" | "lg" | "xl" | "2xl"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"2xl"'}]},description:`Shadow elevation
@default "md"`,defaultValue:{value:'"md"',computed:!1}},theme:{required:!1,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:"Explicit theme override"}}};o.__docgenInfo={description:"",methods:[],displayName:"CardHeader"};n.__docgenInfo={description:"",methods:[],displayName:"CardBody"};i.__docgenInfo={description:"",methods:[],displayName:"CardFooter"};const T={title:"UI/djCard",component:t,parameters:{layout:"centered"},tags:["autodocs"]},s={render:()=>e.jsx("div",{className:"w-96",children:e.jsx(t,{children:e.jsxs(n,{children:[e.jsx("h3",{className:"text-xl font-bold",children:"Standard Card"}),e.jsx("p",{className:"text-slate-500 mt-2",children:"A clean container for your content."})]})})})},d={render:()=>e.jsx("div",{className:"w-80",children:e.jsxs(t,{interactive:!0,shadow:"2xl",rounded:"3xl",children:[e.jsxs("div",{className:"h-48 bg-gradient-to-br from-indigo-500 to-purple-600 relative overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-black/10"}),e.jsx("div",{className:"absolute top-4 right-4",children:e.jsx(B,{variant:"glass",children:"Premium"})})]}),e.jsx(o,{children:e.jsxs("div",{className:"flex justify-between items-start",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-black dark:text-white",children:"Gold Architecture"}),e.jsx("p",{className:"text-xs text-slate-500",children:"Infrastructure Template"})]}),e.jsx("div",{className:"text-emerald-500 font-bold",children:"$99"})]})}),e.jsx(n,{children:e.jsx("p",{className:"text-sm text-slate-600 dark:text-slate-400",children:"Fully pre-configured React boilerplate with industry best practices."})}),e.jsxs(i,{className:"bg-slate-50/50 dark:bg-white/5",children:[e.jsx(c,{variant:"ghost",size:"sm",children:"Details"}),e.jsx(c,{variant:"primary",size:"sm",children:"Buy Now"})]})]})})};var u,x,h;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className="w-96">
      <Card>
        <CardBody>
          <h3 className="text-xl font-bold">Standard Card</h3>
          <p className="text-slate-500 mt-2">A clean container for your content.</p>
        </CardBody>
      </Card>
    </div>
}`,...(h=(x=s.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var p,v,f;d.parameters={...d.parameters,docs:{...(p=d.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="w-80">
      <Card interactive shadow="2xl" rounded="3xl">
        <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute top-4 right-4">
            <Badge variant="glass">Premium</Badge>
          </div>
        </div>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-black dark:text-white">Gold Architecture</h3>
              <p className="text-xs text-slate-500">Infrastructure Template</p>
            </div>
            <div className="text-emerald-500 font-bold">$99</div>
          </div>
        </CardHeader>
        <CardBody>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Fully pre-configured React boilerplate with industry best practices.
          </p>
        </CardBody>
        <CardFooter className="bg-slate-50/50 dark:bg-white/5">
          <Button variant="ghost" size="sm">Details</Button>
          <Button variant="primary" size="sm">Buy Now</Button>
        </CardFooter>
      </Card>
    </div>
}`,...(f=(v=d.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const H=["Default","PremiumProduct"];export{s as Default,d as PremiumProduct,H as __namedExportsOrder,T as default};
