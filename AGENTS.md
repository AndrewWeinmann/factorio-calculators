# AGENTS.md

## Project Overview

A single-page React application for performing calculations related to the video game Factorio. The app features multiple calculator activities (Solar, Science) with navigation and light/dark theme support.

## Tech Stack

- **React 19** with TypeScript
- **Vite 7** for build tooling and dev server
- **Tailwind CSS v4** for styling with custom dark mode variant
- **React Router v7** for client-side routing
- **Vitest** for unit testing
- **Playwright** for E2E testing
- **React Testing Library** for component tests

## Development Commands

```bash
# Development
npm run dev              # Start dev server on http://localhost:5173

# Code Quality
npm run typecheck        # Run TypeScript type checking
npm run lint             # Run ESLint
npm run format           # Format code with Prettier

# Testing
npm test                 # Run unit tests (Vitest)
npm run test:watch       # Run tests in watch mode
npm run e2e              # Run E2E tests (Playwright)

# Build
npm run build            # Type check + production build
npm run preview          # Preview production build
```

## Architecture

### Theme System

The theme system is split across multiple files to satisfy React Fast Refresh requirements:

- `src/contexts/theme.ts` - Context definition and types only
- `src/contexts/ThemeProvider.tsx` - Provider component only
- `src/hooks/useTheme.ts` - Hook for consuming theme context
- `src/contexts/index.ts` - Barrel export for clean imports

**Important:** Never export hooks and components from the same file, as this breaks React Fast Refresh (will cause `react-refresh/only-export-components` lint errors).

### Tailwind CSS v4 Dark Mode

Dark mode uses class-based strategy configured in `src/index.css`:

```css
@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));
```

This custom variant is **required** for class-based dark mode in Tailwind v4. The theme system toggles the `dark` class on `document.documentElement`.

### Routing Structure

- `/` - Home page
- `/solar` - Solar Calculator (placeholder)
- `/science` - Science Calculator (placeholder)

All routes are defined in `src/App.tsx` using React Router.

### File Organization

```text
src/
├── components/     # Reusable UI components
├── contexts/       # React contexts (theme, etc.)
├── hooks/          # Custom React hooks
├── pages/          # Route-level page components
└── test/           # Test utilities and setup
```

## Testing

### Unit Tests

- Test files: `*.test.tsx` or `*.test.ts`
- Framework: Vitest with happy-dom environment
- Config: `vitest.config.ts`
- Setup: `src/test/setup.ts` (includes jest-dom matchers)

When testing components that use context (like `useTheme`), always wrap them in the appropriate provider:

```tsx
render(
  <ThemeProvider>
    <ComponentUnderTest />
  </ThemeProvider>,
);
```

### E2E Tests

- Located in `e2e/`
- Uses Playwright
- Config: `playwright.config.ts`
- Separate from unit tests

## Linting Rules

### Never Disable Lint Warnings

Do not use `eslint-disable` comments without explicit user approval. Linting rules exist for good reasons (especially React Fast Refresh requirements).

### Type Imports

Use `type` keyword for type-only imports to be explicit:

```tsx
import { type Theme } from "./theme";
```

## Pre-commit Hooks

The project uses `simple-git-hooks` with `pretty-quick` to format staged files before commits. This runs automatically on `git commit`.
