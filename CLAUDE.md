# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start Vite dev server (port 3000, opens browser, fails if port taken due to `strictPort`)
- `npm run build` — typecheck (`tsc -b`) then production build to `dist/`
- `npm run typecheck` — typecheck only (`tsc`, no emit)
- `npm run lint` — ESLint over the repo
- `npm run lint:styles` — Stylelint over `**/*.scss`
- `npm run lint:format` — Prettier write over `src`
- `npm run lint:fsd` — Steiger, checks Feature-Sliced Design layer/import rules in `src`
- `npm run preview` — serve the production build (port 4000)

There is no test runner configured in this project (no test script, no Vitest/Jest present).

## Architecture

This is a React 19 + TypeScript + Vite SPA built on **Feature-Sliced Design (FSD)**. `src` is split into layers, each importable only by layers above it:

```
app       -- composition root: router, providers, global App shell
pages     -- route-level components (StartPage, HomePage, LoginPage, ...)
widgets   -- composite UI blocks (currently empty scaffold)
features  -- user-facing behaviors, e.g. features/auth (api + zustand store)
entities  -- business entities (currently empty scaffold)
shared    -- reusable, business-agnostic code: api client, config, ui kit
```

Import direction is enforced by `eslint-plugin-boundaries` (`eslint.config.js`) and by Steiger (`npm run lint:fsd`); currently only `features -> [entities, shared]` is explicitly configured, but treat the standard FSD rule as the intent: a layer may only import from layers below it in the list above, never sideways or upward.

Path aliases (`tsconfig.app.json`) mirror the layers: `@/*`, `@app/*`, `@pages/*`, `@widgets/*`, `@features/*`, `@entities/*`, `@shared/*`. Use these instead of relative `../../..` imports.

Key pieces:
- Routing: `src/app/router/index.tsx` defines a `react-router-dom` `createBrowserRouter` tree; pages are wired in here, not co-located with the router.
- App shell: `src/app/App.tsx` wraps the router in `MantineProvider`.
- Data fetching: `src/shared/api/axiosClient.ts` is the shared Axios instance (`VITE_BACKEND_URL`, cookie auth toggled by `VITE_AUTH_STRATEGY=COOKIES`); `src/shared/config/queryClient.ts` configures the shared TanStack Query client.
- Auth state: `src/features/auth/model/authStore.ts` is a Zustand store persisted to storage (`persist` middleware), holding the auth token.
- UI kit: `src/shared/ui` re-exports the Mantine theme (`src/shared/ui/mantine/MantineTheme.tsx`).
- Env vars: `VITE_BACKEND_URL`, `VITE_AUTH_STRATEGY` (see `.env.example`); Vite exposes these via `import.meta.env`.

## Conventions

- Prettier: single quotes, no semicolon trailing-comma, no unnecessary parens on single arrow-fn params (`arrowParens: avoid`), 100 print width.
- SCSS class names must be BEM or Gravity UI (`g-*`) per `stylelint.config.ts`; property order and nesting depth (max 3) are enforced.
- `npm install` uses exact versions (`save-exact=true` in `.npmrc`); keep dependency versions pinned when adding packages.
