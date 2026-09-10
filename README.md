# Components Library

A React UI component library built with Tailwind CSS v4 and documented in Storybook. It ships
ready-to-use components (buttons, inputs, selects, tabs, alerts, tooltips, etc.), a theming layer with light/dark design tokens, and a set of [JSON Forms](https://jsonforms.io/) renderers.

## Requirements

- Node.js >= 20
- npm

Peer dependencies (provided by the host app):

- `react` ^18 and `react-dom` ^18
- `@jsonforms/core` ^3.5 and `@jsonforms/react` ^3.5

### Styling

The library does not ship a compiled stylesheet — `dist/index.css` contains only a couple of
low-level helpers. Component styling is expressed entirely as Tailwind CSS v4 utility classes,
so the **host app must run Tailwind CSS v4** and generate those utilities itself. In the app's
global CSS:

```css
@import 'tailwindcss';
@import 'components-library/theme.css';
/* Tailwind ignores node_modules by default — point it at the package so the
   utility classes used by the components are emitted: */
@source '../node_modules/components-library/dist';
```

Without this, components render unstyled.

## Getting started

```bash
npm install
```

Run Storybook (the interactive documentation) on http://localhost:6006:

```bash
npm run storybook
```

Build the library into `dist/`:

```bash
npm run build
```

## Scripts

| Script                    | Description                                       |
| ------------------------- | ------------------------------------------------- |
| `npm run storybook`       | Start Storybook in dev mode                       |
| `npm run storybook:build` | Build the static Storybook site                   |
| `npm run build`           | Build the library (ESM + UMD + type declarations) |
| `npm test`                | Run unit tests (Jest + Testing Library)           |
| `npm run typecheck`       | Type-check the project with `tsc`                 |
| `npm run lint`            | Lint with ESLint                                  |
| `npm run tokens`          | Regenerate design tokens from `tokens/data`       |
| `npm run plop`            | Scaffold a new component                          |

## Documentation

The component documentation lives in Storybook. Start it with `npm run storybook` and browse the
sidebar:

- **Introduction** – this page
- **Components** – every component with live examples and prop tables
- **Theming** – how to consume the theme in an app
- **Theming architecture** – how the token pipeline works and why

## Theming

Components are styled from a small set of semantic colour roles (`accent`, `neutral`,
`success`, `warning`, `danger`, `info`, plus foreground / background / border roles) with
light and dark modes. The whole colour scale is derived at **runtime** from ~8 base colours,
so an app can let the user recolour the UI live (e.g. from a colour picker) with no rebuild.

Consume it by importing the theme stylesheet and wrapping the app in `ThemeProvider`:

```css
@import 'tailwindcss';
@import 'components-library/theme.css';
```

```tsx
import { ThemeProvider, createTheme } from 'components-library';

const theme = createTheme({ mode: 'light', palette: { accent: '#0055FF' } });

<ThemeProvider theme={theme}>{/* app */}</ThemeProvider>;
```

The pipeline behind it — **Figma → Tokens Studio → JSON → Style Dictionary v4 (custom
`color-mix()` transforms) → generated CSS custom properties → Tailwind v4 `@theme` mapping →
runtime `ThemeProvider`** — and the reasoning behind the design are documented in the
**Theming architecture** page in Storybook
([`src/theming/docs/Architecture.mdx`](src/theming/docs/Architecture.mdx)).

## Visual testing

This project includes visual regression testing using Docker and Puppeteer.

### Prerequisites

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### Run visual tests

```bash
npm run storybook:build
npm run test:visual
```

These commands build Storybook, start a Docker container configured for visual testing, run the
visual tests inside it, save the resulting screenshots locally, and clean up the container.
