# PROMPT 1 — Full Audit & Improvement Sweep

**Repository:** automateforge-io
**Tech stack:** React 19 + TanStack Router + TypeScript + Tailwind CSS v4 + Vite 7 + Nginx (Docker) + Helm/K8s + GitHub Actions CI/CD
**Environment:** Kubernetes (K3s/DigitalOcean) via Helm + Traefik + cert-manager + ArgoCD GitOps
**Business context:** B2B DevOps/automation services website for Polish and international markets — KSeF integrations, AI agents, automation templates, productized DevOps services
**Known pain points:** None stated — first audit
**Previous audit notes:** None — first audit

---

## Executive Summary

**Overall health score: 6.5/10**

The codebase is a well-structured, clean SPA with thoughtful bilingual routing, solid Kubernetes deployment configuration, and a polished UI. The top 3 priorities are: **(1)** The contact form is non-functional — it fakes submission without any backend integration, meaning zero leads are captured. **(2)** The ESLint config references Next.js plugins that don't exist in this project (it's a Vite/React app), meaning linting is broken. **(3)** Missing favicon.svg referenced in `index.html` — 404 on every page load.

---

## Findings by Priority

### P0 — Fix Immediately (breaks production or security risk)

| # | Category | File:Line | Finding | Fix | Effort |
|---|----------|-----------|---------|-----|--------|
| 1 | CRITICAL BUG | `src/pages/en/Contact.tsx:8-11` | Contact form `handleSubmit` calls `e.preventDefault()` then `setSubmitted(true)` — **no data is sent anywhere**. Form data is silently discarded. Every potential lead is lost. PL contact page has the same issue. | Integrate with a backend (PocketBase, Supabase, email API, or Formspree). At minimum, use a `mailto:` fallback or `fetch()` to an endpoint. | M |
| 2 | CRITICAL BUG | `eslint.config.mjs:1-18` | ESLint config imports `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript` — **these packages are not installed** (not in `package.json`). This is a Vite/React project, not Next.js. Running `npx eslint .` will crash. | Replace with `@eslint/js` + `typescript-eslint` + `eslint-plugin-react` or remove the file entirely if not using ESLint. | S |
| 3 | SECURITY | `.github/workflows/deploy.yml:58` | `GH_PAT` personal access token is used to clone the infra repo. The `git config --global` sets a bot email. If `GH_PAT` has broad permissions, it could be used to push malicious code to the infra repo. | Verify `GH_PAT` has **minimum scope** (only `repo` for `cloudwarriorpat/infrastructure`). Consider using a GitHub App token or deploy key instead. | S |
| 4 | SECURITY | `.github/workflows/deploy.yml:67-86` | `KUBECONFIG_CONTENTS` secret is written to a file on disk during CI. The fallback `base64 -d` approach with `|| true` silently swallows decode errors — if the kubeconfig is malformed, no error is raised. | Add explicit validation: `if ! kubectl cluster-info; then echo "KUBECONFIG invalid" && exit 1; fi` after writing the file. | S |

### P1 — Fix This Sprint (significant impact)

| # | Category | File:Line | Finding | Fix | Effort |
|---|----------|-----------|---------|-----|--------|
| 5 | CRITICAL BUG | `index.html:13` | `<link rel="icon" href="/favicon.svg" />` — **no `favicon.svg` exists in `public/`**. Every page load generates a 404. | Add a proper SVG favicon to `public/favicon.svg`. | S |
| 6 | DX | `README.md:38-43` | README lists 5 TODO items including "Connect PocketBase for contact form" and "SEO: meta tags, sitemap, robots.txt" — the SEO items have been completed but the TODO list was never updated. Misleading for contributors. | Update README to reflect current state. Mark completed items, add new ones. | S |
| 7 | CODE QUALITY | `src/pages/en/ProductDetail.tsx:6` | `useParams({ strict: false }) as { slug: string }` — unsafe type assertion bypasses TanStack Router's type safety. If accessed without a slug param, `slug` will be `undefined` but typed as `string`. | Use `useParams({ from: enProductDetailRoute })` for type-safe params, or add a runtime guard. | S |
| 8 | PERFORMANCE | `index.html:6-12` | Google Analytics script is render-blocking in `<head>` without `defer`. The `async` on the gtag script helps but `dataLayer` initialization runs synchronously. | Move GA script to bottom of `<body>` or add `defer` attribute. Consider loading GA after first interaction for better LCP. | S |
| 9 | DX | `package.json:5` | `"main": "index.js"` — this field is meaningless for a Vite SPA and references a non-existent file. | Remove the `main` field, or replace with `"type": "module"`. | S |
| 10 | CODE QUALITY | `src/components/Navbar.tsx:15-17` | Language switch path construction uses a chain of 8 `.replace()` calls. This is fragile — if a new route is added, the chain must be updated in two places. A route mapping object would be more maintainable. | Create a `routeMapping` object: `{ '/products': '/uslugi', '/about': '/o-nas', ... }` and iterate over it. | S |

### P2 — Fix This Month (quality & performance)

| # | Category | File:Line | Finding | Fix | Effort |
|---|----------|-----------|---------|-----|--------|
| 11 | CODE QUALITY | `src/pages/en/*.tsx` vs `src/pages/pl/*.tsx` | EN and PL page components are largely duplicated. KSeF, Agents, Templates, Products, Contact pages have near-identical structures with different text. The i18n system exists (`src/i18n/`) but is only used for nav/footer/contact labels — page content is hardcoded per language. | Consolidate pages using the i18n system or a data-driven approach. One `KSeF.tsx` component taking `lang` as prop, pulling content from translation files. | L |
| 12 | PERFORMANCE | `src/index.css:1` | Google Fonts loaded via `@import url(...)` in CSS — this is render-blocking. Two font families (Manrope + Sora) with multiple weights are loaded on every page. | Use `<link rel="preconnect">` + `<link rel="preload">` in `index.html`, or self-host fonts. Consider subsetting to only used weights. | M |
| 13 | FEATURE GAP | `src/pages/en/Contact.tsx` | Contact form has no validation beyond HTML `required`. No email format validation, no rate limiting, no CAPTCHA/honeypot for spam prevention. | Add `pattern` attributes, client-side validation, and a honeypot field at minimum. | M |
| 14 | DX | `tailwind.config.ts` | Tailwind v4 config defines `steel` colors in `tailwind.config.ts` but the actual colors used in CSS are defined via `@theme` in `src/index.css`. These are **duplicate definitions** with **different values** (e.g., `steel-50` in config is `#f8fafc`, in CSS `@theme` it's also `#f8fafc` but `steel-200` differs). Tailwind v4 uses the CSS `@theme` approach — the config file colors are likely ignored. | Remove the `theme.extend.colors` from `tailwind.config.ts` since Tailwind v4 uses the CSS `@theme` directive as the source of truth. | S |
| 15 | PERFORMANCE | `src/router.tsx:1-27` | All 18 page components are eagerly imported at the top of `router.tsx`. For a SPA with 18 routes, this means the entire app is bundled into one chunk — no code splitting. | Use `React.lazy()` or TanStack Router's lazy route loading for route-level code splitting. | M |
| 16 | CODE QUALITY | `src/data/products.ts:914-920` | `getFeaturedProducts()` uses non-null assertions (`!`) on `.find()` results. If product slugs change, this will throw at runtime with no useful error message. | Add fallback: `?? throwError('Product not found: ...')` or filter out undefined results. | S |
| 17 | FEATURE GAP | All pages | No 404 page. If a user navigates to `/en/nonexistent`, TanStack Router shows a blank page or default error. | Add a `notFoundComponent` to the router configuration. | S |

### P3 — Backlog (nice to have)

| # | Category | File:Line | Finding | Fix | Effort |
|---|----------|-----------|---------|-----|--------|
| 18 | DX | Root | No `.env.example` file. Environment variables are unclear to new contributors. | Create `.env.example` documenting any expected env vars. | S |
| 19 | DX | Root | No `.nvmrc` or `engines` field in `package.json`. Node version requirements are undocumented. | Add `"engines": { "node": ">=20" }` to `package.json` and create `.nvmrc`. | S |
| 20 | CODE QUALITY | `src/pages/en/KSeF.tsx:47` | Variable name shadowing: `const t` inside `.map()` shadows the imported `t` function from i18n (not imported here, but common pattern). The timeline `const t` could confuse future developers. | Rename to `const item` or `const timelineEntry`. | S |
| 21 | PERFORMANCE | `Dockerfile:14-28` | Nginx config has `expires 1y` for static assets but no gzip/brotli compression configured. | Add `gzip on; gzip_types text/css application/javascript application/json image/svg+xml;` to nginx config. | S |
| 22 | FEATURE GAP | `index.html` | No `og:image` meta tag. Social media shares will show no preview image. | Create an OG image and add `<meta property="og:image" content="https://automateforge.io/og.png" />`. | M |
| 23 | DX | Root | No `tsconfig.node.json` configuration for vite config — wait, it exists but `vite.config.js` is `.js` not `.ts`. Mixed config file extensions. | Rename `vite.config.js` to `vite.config.ts` for consistency with the TypeScript codebase. | S |
| 24 | CODE QUALITY | `src/pages/en/Contact.tsx:42-55` | Form inputs have no `name` attributes. Even if a backend is connected, `FormData` extraction won't work correctly. | Add `name="name"`, `name="email"`, `name="company"`, `name="message"` to inputs. | S |
| 25 | FEATURE GAP | `helm/values/automateforge-io.yaml:22-24` | Rolling update strategy has `maxSurge: 0` and `maxUnavailable: 1` with `replicaCount: 1`. This means during deployment there will be **complete downtime** — the old pod is killed before the new one starts. | Either set `replicaCount: 2` or change strategy to `maxSurge: 1, maxUnavailable: 0` for zero-downtime deploys. | S |

---

## Quick Wins (< 15 min each)

- **Add `favicon.svg`** to `public/` — any SVG icon, even the "AF" text from the navbar logo.
- **Remove `"main": "index.js"`** from `package.json` — dead field.
- **Update README TODO list** — mark completed items (SEO meta tags, sitemap, robots.txt are done).
- **Add `name` attributes** to contact form inputs in both EN and PL pages.
- **Add `notFoundComponent`** to router: `createRouter({ routeTree, defaultPreload: 'intent', notFoundComponent: () => <div>404</div> })`.
- **Delete or fix `eslint.config.mjs`** — it references non-existent Next.js packages.
- **Add gzip** to nginx config in Dockerfile: one line addition.
- **Add `.nvmrc`** with content `22`.

---

## Architecture Notes

The codebase follows a clean SPA pattern with a well-thought-out bilingual routing structure using TanStack Router. The Kubernetes deployment infrastructure (Helm charts, GitOps pipeline, security contexts) is **above average** for a project of this size and reflects solid DevOps expertise. The main architectural concern is the duplicated page components across EN/PL — this will become increasingly painful as content changes require updates in two places. The existing i18n system (`src/i18n/`) is a good foundation but only covers nav/footer/CTA strings, not page content. Long-term, consolidating pages into language-agnostic components pulling from translation files would halve the maintenance surface. The contact form being non-functional is the most urgent business issue — this is a lead generation website with no way to capture leads.
