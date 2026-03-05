# Copilot Instructions for ash-matrix

## Project Overview
This is a Next.js 16.1.6 application using the App Router, React 19, TypeScript, and Tailwind CSS v4. The project follows a minimal setup with Next.js defaults.

## Tech Stack & Key Configurations

### Framework & Versions
- **Next.js 16.1.6** with App Router (not Pages Router)
- **React 19.2.3** with `react-jsx` transform
- **TypeScript 5** with strict mode enabled
- **Tailwind CSS v4** with the new `@tailwindcss/postcss` plugin architecture

### Path Aliases
- Use `@/*` for root-level imports (configured in `tsconfig.json`)
- Example: `import Component from "@/app/components/Component"`

### ESLint Configuration
- Uses **ESLint v9** with the new flat config format (`eslint.config.mjs`)
- Configured with `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`
- Run linting: `npm run lint`

## Tailwind CSS v4 Specifics

### CSS Architecture
- Import Tailwind in CSS files using: `@import "tailwindcss";` (not `@tailwind` directives)
- Use `@theme inline` blocks for custom CSS variables in `globals.css`
- Font variables are defined via Next.js font loaders and referenced in theme config

### Example Pattern from `app/globals.css`:
```css
@import "tailwindcss";

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}
```

## Font Loading Pattern
Fonts are loaded using `next/font/google` in `app/layout.tsx`:
```tsx
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
```
Apply font variables to body via className: `${geistSans.variable} ${geistMono.variable}`

## Development Workflow

### Commands
- **Dev server**: `npm run dev` (runs on http://localhost:3000)
- **Production build**: `npm run build`
- **Production start**: `npm start`
- **Linting**: `npm run lint`

### File Structure
- `app/` - App Router pages and layouts
- `app/layout.tsx` - Root layout with font configuration and metadata
- `app/page.tsx` - Home page component
- `app/globals.css` - Global styles with Tailwind v4 imports
- `public/` - Static assets (SVGs)

## Coding Conventions

### Component Structure
- Use TypeScript with explicit types for props
- Metadata is defined using Next.js `Metadata` type in layouts
- Use `Readonly<>` for props containing children (as seen in `layout.tsx`)

### Styling Patterns
- Tailwind utility classes for all styling
- Dark mode using `dark:` variant (automatically applied via media query)
- Responsive design using `sm:`, `md:` breakpoint prefixes
- Background/foreground colors use CSS variables for dark mode compatibility

### Image Optimization
- Always use `next/image` for images (never `<img>` tags)
- Static assets in `/public` referenced with leading slash: `src="/next.svg"`
- Use `priority` prop for above-the-fold images

## Important Notes
- This project uses **React 19** - be aware of breaking changes from React 18
- Tailwind CSS v4 has a different configuration approach than v3 (no `tailwind.config.js` file)
- TypeScript paths use bundler module resolution (not Node.js)
- JSX transform is set to `react-jsx` (not `preserve`)
