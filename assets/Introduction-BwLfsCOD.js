import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as n}from"./index-D3yXdDgY.js";import"./preview-CjZd-yaw.js";import{c as t}from"./DocsRenderer-CFRXHY34-DSg-5_61.js";import"./index-CtOEgLBf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-qW-QVQDw.js";import"./index-XWKESxX7.js";import"./index-xQ9y_n2y.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./react-18-C10TPF12.js";const{definePreview:j}=__STORYBOOK_MODULE_PREVIEW_API__;function i(r){const o={code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Introduction"}),`
`,e.jsxs("div",{className:"sb-gold-container",children:[e.jsxs("div",{className:"sb-gold-hero",children:[e.jsx("div",{className:"hero-badge",children:"v1.8.0 Tricky Template"}),e.jsx(o.h1,{id:"qrenza-system",children:"QRENZA System"}),e.jsx("p",{className:"hero-subtitle",children:e.jsx(o.p,{children:`A minimalist, high-performance design system for technical ecosystems.
Built for speed, clarity, and tactile engineering excellence.`})})]}),e.jsxs("div",{className:"sb-gold-grid",children:[e.jsxs("div",{className:"grid-card",children:[e.jsx("h3",{children:"⚪️ Pure Light Mode"}),e.jsx("p",{children:"By default, the system now adopts a clean, Apple-inspired white mode. Designed for maximum readability and focus."}),e.jsx("div",{className:"badge-row",children:e.jsx("span",{className:"badge-light",children:"Default Theme"})})]}),e.jsxs("div",{className:"grid-card",children:[e.jsx("h3",{children:"🚀 v1.8.0 Workbench"}),e.jsx("div",{className:"code-block",children:e.jsx("code",{children:"npm install github:dima-kacyuk/ui_story_book#v1.8.0"})}),e.jsx("p",{children:'The "Tricky Template" release: A minimalist, powerful starting point for any technical dashboard.'})]})]}),e.jsxs("div",{className:"sb-gold-section",children:[e.jsx(o.h2,{id:"-system-connection",children:"🛠 System Connection"}),e.jsxs(o.p,{children:["The Qrenza system is built on a ",e.jsx(o.strong,{children:"One-Time Connection"})," architecture. Connect the ",e.jsx(o.code,{children:"UIProvider"})," at the root to initialize all global styles and state."]}),e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-javascript",children:`import { UIProvider } from '@qrenza/ui';

export default function App() {
  return (
    <UIProvider>
      <MyTechnicalApp />
    </UIProvider>
  );
}
`})})]}),e.jsxs("div",{className:"sb-gold-section",children:[e.jsx(o.h2,{id:"-component-manifest",children:"📂 Component Manifest"}),e.jsxs(o.p,{children:[`| Tier | Representative Primitives |
| :--- | :--- |
| `,e.jsx(o.strong,{children:"Foundation"})," | ",e.jsx(o.code,{children:"djButton"}),", ",e.jsx(o.code,{children:"djCard"}),", ",e.jsx(o.code,{children:"djBadge"}),", ",e.jsx(o.code,{children:"djAlert"}),` |
| `,e.jsx(o.strong,{children:"Interactive"})," | ",e.jsx(o.code,{children:"djTabs"}),", ",e.jsx(o.code,{children:"djModal"}),", ",e.jsx(o.code,{children:"djProgress"}),", ",e.jsx(o.code,{children:"djAccordion"}),` |
| `,e.jsx(o.strong,{children:"Form Control"})," | ",e.jsx(o.code,{children:"djInput"}),", ",e.jsx(o.code,{children:"djCheckbox"}),", ",e.jsx(o.code,{children:"djDatePicker"}),` |
| `,e.jsx(o.strong,{children:"Layout"})," | ",e.jsx(o.code,{children:"djHeader"}),", ",e.jsx(o.code,{children:"djFooter"})," ",e.jsx(o.em,{children:"(Optional)"})," |"]})]})]}),`
`,e.jsx("style",{children:`
  .sb-gold-container {
    font-family: 'Inter', system-ui, sans-serif;
    color: #1e293b;
    max-width: 900px;
    margin: 0 auto;
    padding: 60px 20px;
  }

  .sb-gold-hero {
    text-align: center;
    margin-bottom: 80px;
  }

  .hero-badge {
    display: inline-block;
    padding: 4px 12px;
    background: #4f46e5;
    color: white;
    border-radius: 99px;
    font-size: 11px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 24px;
    box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
  }

  .sb-gold-hero h1 {
    font-size: 56px;
    font-weight: 900;
    letter-spacing: -0.04em;
    margin: 0;
    background: linear-gradient(135deg, #0f172a 0%, #334155 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .hero-subtitle {
    font-size: 18px;
    color: #64748b;
    max-width: 600px;
    margin: 20px auto 0;
    line-height: 1.6;
  }

  .sb-gold-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin-bottom: 60px;
  }

  .grid-card {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    padding: 32px;
    border-radius: 24px;
    transition: all 0.3s ease;
  }

  .grid-card:hover {
    border-color: #cbd5e1;
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0,0,0,0.03);
  }

  .grid-card h3 {
    margin-top: 0;
    font-size: 20px;
    font-weight: 700;
  }

  .code-block {
    background: #0f172a;
    color: #818cf8;
    padding: 12px 16px;
    border-radius: 12px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 13px;
    margin: 16px 0;
    overflow-x: auto;
  }

  .inner-nav {
    display: flex;
    gap: 8px;
    margin-top: 16px;
  }

  .badge-row {
    display: flex;
    gap: 12px;
    margin-top: 20px;
  }

  .badge-light {
    padding: 4px 12px;
    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    font-size: 12px;
    font-weight: 600;
  }

  .badge-dark {
    padding: 4px 12px;
    background: #0f172a;
    color: white;
    border-radius: 6px;
    font-size: 12px;
    font-weight: 600;
  }

  .sb-gold-section {
    margin-top: 60px;
    padding-top: 40px;
    border-top: 1px solid #f1f5f9;
  }

  .sb-gold-section h2 {
    font-size: 28px;
    font-weight: 800;
    margin-bottom: 24px;
    letter-spacing: -0.02em;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }

  th {
    text-align: left;
    padding: 12px;
    background: #f8fafc;
    font-weight: 700;
    font-size: 14px;
    color: #64748b;
    border-bottom: 2px solid #e2e8f0;
  }

  td {
    padding: 16px 12px;
    border-bottom: 1px solid #f1f5f9;
    font-size: 14px;
  }

  td code {
    background: #f1f5f9;
    color: #4f46e5;
    padding: 2px 6px;
    border-radius: 4px;
    font-weight: 600;
  }
  `})]})}function u(r={}){const{wrapper:o}={...n(),...r.components};return o?e.jsx(o,{...r,children:e.jsx(i,{...r})}):i(r)}export{u as default};
