# 🎨 @dima-kacyuk/ui-story-book

A premium, highly-customizable React component library built with **TypeScript**, **Tailwind CSS**, and **Framer Motion** tactile principles.

---

## 🚀 Quick Start

### Installation

Add the library to your project from GitHub:

```bash
npm install github:dima-kacyuk/ui_story_book#v1.1.4
```

> [!TIP]
> Use specific tags (e.g., `#v1.1.4`) to ensure stable builds. Avoid using `#main` in production.

### Setup

Import the styles in your main entry file (e.g., `main.tsx` or `App.jsx`):

```javascript
import '@dima-kacyuk/ui-story-book/dist/index.css';
```

---

## 📦 Components

### `djButton`

The primary button component with advanced aesthetics and accessibility.

#### Usage
```jsx
import { djButton as DjButton } from '@dima-kacyuk/ui-story-book';

function App() {
  return (
    <DjButton variant="success" size="lg" onClick={() => console.log("Success!")}>
      Confirm Action
    </DjButton>
  );
}
```

#### Key Props
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `variant` | `primary`, `secondary`, `outline`, `ghost`, `danger`, `success`, `warning`, `info`, `glass`, `link` | `primary` | Visual style of the button. |
| `size` | `sm`, `md`, `lg`, `xl`, `icon` | `md` | Size of the button. |
| `isLoading` | `boolean` | `false` | Displays a loading spinner. |
| `justify` | `start`, `center`, `end`, `between` | `center` | Inner content alignment. |
| `rounded` | `none`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `full` | `xl` | Corner radius override. |
| `shadow` | `none`, `sm`, `md`, `lg`, `xl`, `2xl` | `md` | Shadow elevation. |
| `leftIcon` | `ReactNode` | - | Icon displayed before text. |

---

## 🛠 Developer Tools

### Generate New Component
Quickly scaffold a new component with its Storybook stories and exports:

```bash
npm run generate YourComponentName
```
This creates:
- `src/stories/YourComponentName.tsx` (Pre-styled template)
- `src/stories/YourComponentName.stories.tsx` (Autodocs ready)
- Updates `src/index.ts` automatically.

### Storybook Development
Run Storybook locally to develop components in isolation:

```bash
npm run storybook
```

---

## 🛳 Deployment & Releases

### Deploy Storybook to GH Pages
The Storybook is automatically built with relative paths for flexible hosting:

```bash
npm run deploy-storybook
```

### Creating a New Release
This project uses Git tags for versioning.

1.  Commit your changes.
2.  Run the release command:
    ```bash
    npm run release       # Bumps patch (1.1.1 -> 1.1.2)
    npm run release:minor # Bumps minor (1.1.1 -> 1.2.0)
    npm run release:major # Bumps major (1.1.1 -> 2.0.0)
    ```
3.  Update the version in your consumer project's `package.json`.

---

## 🎨 Aesthetics
- **Tactile Feedback**: Physics-based hover lifts and click scaling.
- **Smart Semantics**: Semantic variants (Success, Warning, etc.) feature matching text and glow-shadow colors.
- **Dark Mode**: Out-of-the-box support for dark mode via Tailwind's `dark:` classes.

---

Built with ❤️ by Dima Kacyuk
