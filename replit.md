# Gotecx Global Technology Platform

A complete enterprise-grade digital ecosystem for Gotecx — a global technology company powered by iTech Network Africa. Competing visually with Google, Microsoft, Salesforce, and Stripe.

## Run & Operate

- `pnpm --filter @workspace/gotecx run dev` — run the frontend (port assigned by workflow)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, Tailwind CSS v4, framer-motion, wouter, next-themes
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`)
- Build: Vite (frontend), esbuild (API)

## Where things live

- `artifacts/gotecx/` — the main frontend website (21 pages)
- `artifacts/gotecx/src/pages/` — individual page components
- `artifacts/gotecx/src/components/layout/` — Navigation + Footer
- `artifacts/gotecx/src/index.css` — Gotecx brand color system (green + dark navy)
- `artifacts/api-server/` — Express API server
- `attached_assets/` — Gotecx logo and iTech Network Africa logo

## Brand Colors

- Primary green: #6DBE45 (lime-tech green — HSL 102 52% 50%)
- Dark navy: #1A2035 (HSL 222 47% 11%)
- Gradient: #7ED321 → #2D5F3F (hero elements)

## Pages (21 total)

- `/` Home, `/about`, `/solutions`, `/products`, `/services`, `/industries`
- `/success-stories`, `/partners`, `/leadership`, `/careers`, `/resources`
- `/blog`, `/events`, `/media-center`, `/investors`, `/contact`
- `/support`, `/docs`, `/faqs`, `/privacy`, `/terms`

## Contact Info

- Phone: +231 776 836 689
- Email: itechnetworkafrica@gmail.com
- WhatsApp: wa.me/231776836689

## Architecture decisions

- Presentation-first app — no backend needed for the website; API server available for future CMS/forms
- Dark mode default with next-themes toggle
- Framer-motion for all scroll animations and page transitions
- @assets alias in Vite points to attached_assets/ for logo images
- wouter Router with BASE_URL base path from Vite env

## Product

- Full enterprise corporate website for a global technology company
- 21 unique pages covering company, products, services, industries, careers, blog, events, legal
- Sticky glassmorphism mega-navigation
- Immersive hero with particle/globe animations
- Dark/light mode, WhatsApp floating button, cookie consent, back-to-top

## User preferences

- Brand colors: Gotecx lime-green + dark navy (extracted from logos)
- No generic/random technology colors — strictly brand palette
- Enterprise feel competing with Fortune 500 tech companies
- No emojis in UI

## Gotchas

- Logo images must be imported via @assets/ alias (Vite resolves to attached_assets/)
- Do NOT use direct attached_assets/ paths in src attributes — always use @assets import
- next-themes ThemeProvider must wrap the entire app in App.tsx
- All 21 routes must be registered in App.tsx Router

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
