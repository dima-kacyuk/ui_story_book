import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as n}from"./index-D3yXdDgY.js";import"./preview-wa1OgNiJ.js";import{c as d}from"./DocsRenderer-CFRXHY34-CEe2qXfI.js";import"./index-CtOEgLBf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Bxb2v8bp.js";import"./index-XWKESxX7.js";import"./index-xQ9y_n2y.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./react-18-C10TPF12.js";const{definePreview:f}=__STORYBOOK_MODULE_PREVIEW_API__;function i(r){const o={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Introduction"}),`
`,e.jsxs("div",{className:"sb-gold-container",children:[e.jsxs("div",{className:"sb-gold-hero",children:[e.jsx("div",{className:"hero-badge",children:"v1.4.0 Professional"}),e.jsx(o.h1,{id:"gold-standard-ui-library",children:"Gold Standard UI Library"}),e.jsx("p",{className:"hero-subtitle",children:e.jsx(o.p,{children:`A premium, high-performance design system built for the Qrenza ecosystem.
Engineered for tactile feedback, accessibility, and modern aesthetics.`})})]}),e.jsxs("div",{className:"sb-gold-grid",children:[e.jsxs("div",{className:"grid-card",children:[e.jsx("h3",{children:"🚀 Quick Start"}),e.jsx("div",{className:"code-block",children:e.jsx("code",{children:"npm install github:dima-kacyuk/ui_story_book#v1.3.0"})}),e.jsx("p",{children:"Connect the library to your React project in seconds. Includes full TypeScript support and auto-building."})]}),e.jsxs("div",{className:"grid-card",children:[e.jsx("h3",{children:"🎨 Theme Engine"}),e.jsxs("p",{children:["Native dark mode support by default. Components automatically adapt to the ",e.jsx("code",{children:".dark"})," class on the HTML tag, or can be forced via the ",e.jsx("code",{children:"theme"})," prop."]}),e.jsxs("div",{className:"badge-row",children:[e.jsx("span",{className:"badge-light",children:"Light Mode"}),e.jsx("span",{className:"badge-dark",children:"Dark Mode"})]})]})]}),e.jsxs("div",{className:"sb-gold-section",children:[e.jsx(o.h2,{id:"-usage-instructions",children:"🛠 Usage Instructions"}),e.jsx(o.h3,{id:"1-style-connection",children:"1. Style Connection"}),e.jsxs(o.p,{children:["Import the library CSS in your root file (e.g., ",e.jsx(o.code,{children:"App.jsx"})," or ",e.jsx(o.code,{children:"main.jsx"}),"):"]}),e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-javascript",children:`import '@dima-kacyuk/ui-story-book/dist/index.css';
`})}),e.jsx(o.h3,{id:"2-component-import",children:"2. Component Import"}),e.jsx(o.p,{children:"All components are exported using a standardized lowercase prefix to avoid naming collisions with native elements:"}),e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-javascript",children:`import { djButton, djInput, djCheckbox } from '@dima-kacyuk/ui-story-book';
`})}),e.jsx(o.h3,{id:"3-tailwind-configuration",children:"3. Tailwind Configuration"}),e.jsx(o.p,{children:"If you are using Tailwind in your project, ensure it scans the library components:"}),e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-javascript",children:`// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@dima-kacyuk/ui-story-book/dist/*.js"
  ],
  // ...
}
`})})]}),e.jsxs("div",{className:"sb-gold-section",children:[e.jsx(o.h2,{id:"-component-directory",children:"📂 Component Directory"}),e.jsxs(o.p,{children:[`| Category | Components |
| :--- | :--- |
| `,e.jsx(o.strong,{children:"Foundation"})," | ",e.jsx(o.code,{children:"djButton"}),", ",e.jsx(o.code,{children:"djCard"}),", ",e.jsx(o.code,{children:"djBadge"}),` |
| `,e.jsx(o.strong,{children:"Forms"})," | ",e.jsx(o.code,{children:"djInput"}),", ",e.jsx(o.code,{children:"djCheckbox"}),", ",e.jsx(o.code,{children:"djRadio"}),", ",e.jsx(o.code,{children:"djSelect"}),", ",e.jsx(o.code,{children:"djSwitch"}),", ",e.jsx(o.code,{children:"djTextarea"}),` |
| `,e.jsx(o.strong,{children:"Data"})," | ",e.jsx(o.code,{children:"djAvatar"}),` |
| `,e.jsx(o.strong,{children:"Layout"})," | ",e.jsx(o.code,{children:"djModal"}),", ",e.jsx(o.code,{children:"djTabs"}),", ",e.jsx(o.code,{children:"djProgress"})," ",e.jsx(o.em,{children:"(v1.4.0)"}),` |
| `,e.jsx(o.strong,{children:"Pickers"})," | ",e.jsx(o.code,{children:"djDatePicker"})," ",e.jsx(o.em,{children:"(v1.4.0)"})," |"]})]})]}),`
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
