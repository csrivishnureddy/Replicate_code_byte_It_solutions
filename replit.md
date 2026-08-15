# CodeByte IT Solutions

A multi-page marketing website for CodeByte IT Solutions, an IT partner for software delivery, cloud operations, cybersecurity, managed IT, data, and applied AI.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm --filter @workspace/codebyte-it-solutions run dev` — run the CodeByte website
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/codebyte-it-solutions/src/App.tsx` — route map for the full website
- `artifacts/codebyte-it-solutions/src/components/site-shell.tsx` — shared header, dropdown navigation, mobile menu, and footer
- `artifacts/codebyte-it-solutions/src/pages/site-pages.tsx` — home, company, service, industry, insight, careers, contact, and error pages
- `artifacts/codebyte-it-solutions/src/data/site.ts` — editable contact placeholders and navigation content
- `artifacts/codebyte-it-solutions/src/index.css` — shared visual system and responsive layout

## Architecture decisions

- The website is a frontend-only React/Vite marketing site; contact forms show a confirmation state and do not send data.
- Wouter provides route-aware page navigation so every dropdown and CTA points to a dedicated URL.
- Contact details are centralized in `src/data/site.ts` so email, phone, and office placeholders can be changed in one place.
- The visual language uses a dark technology shell with cyan signal accents and warm yellow markers, while keeping content pages highly readable.

## Product

CodeByte presents the company story, capabilities, industry expertise, insights, careers, and multiple contact paths. Desktop dropdowns and mobile expandable navigation link to every supported page, and contact/sales/support forms provide required-field validation plus a visible frontend-only success state.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- Replace all placeholder contact values in `artifacts/codebyte-it-solutions/src/data/site.ts` before launch.
- The contact forms are intentionally frontend-only until a delivery endpoint or form service is connected.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
