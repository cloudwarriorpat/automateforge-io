# PROMPT 3 — Architecture & Pattern Review

**Repository:** automateforge-io
**Tech stack:** React 19 + TanStack Router + TypeScript + Tailwind CSS v4 + Vite 7 + Nginx + Helm/K8s
**Team size:** Solo developer
**Growth trajectory:** Early growth — building product awareness, acquiring first clients
**Known tech debt:** Unknown — assessed from scratch

---

## Architecture Review — automateforge-io

### Current State (As-Is)

The application is a **static single-page application (SPA)** serving as a bilingual (EN/PL) marketing website for DevOps consulting services. The architecture follows a simple component-per-page pattern with TanStack Router for client-side routing. Two parallel page trees (`src/pages/en/` and `src/pages/pl/`) serve language-specific content, sharing only layout components (Navbar, Footer) and a partial i18n system for common strings. Data is fully static — product definitions are hardcoded TypeScript objects (`src/data/products.ts`). No API, no database, no server-side rendering. Deployment is containerized (multi-stage Docker build → nginx) and deployed to Kubernetes via Helm charts with a GitOps pipeline (GitHub Actions → GHCR → ArgoCD). The infrastructure layer is **significantly more sophisticated** than the application layer, reflecting the developer's DevOps expertise.

### What's Working Well

1. **Clean project structure** — Clear separation: `components/`, `pages/en/`, `pages/pl/`, `data/`, `i18n/`, `lib/`. Easy to navigate even for a first-time reader.
2. **Type-safe product catalog** — `src/data/products.ts` has well-defined TypeScript interfaces (`Product`, `Retainer`, `ProductCategory`, `ProductTier`) with comprehensive data for 10 products and 3 retainers. Helper functions (`getProductBySlug`, `getProductsByCategory`) are clean.
3. **Production-grade deployment** — Helm chart with security contexts (`runAsNonRoot`, `allowPrivilegeEscalation: false`), health checks, service accounts, PDB support, HPA support, and TLS via cert-manager. This is better than most startups' production configs.
4. **Thoughtful UI system** — Custom CSS utilities (`glass-card`, `cta-primary`, `pill-badge`) create a consistent design language. Animations respect `prefers-reduced-motion`. Focus styles are properly defined.
5. **Bilingual routing** — The language-layout pattern (separate route trees sharing root layout) is a clean approach for a static bilingual site.

### Pattern Violations & Recommendations

#### [1] Content Duplication — Consolidate EN/PL pages

- **Where:** `src/pages/en/*.tsx` and `src/pages/pl/*.tsx` (18 files total, 9 per language)
- **Current:** Every page exists twice with identical JSX structure but different text content. KSeF page in EN is 111 lines; PL version is ~110 lines with 95% structural overlap. Changes to layout require editing both files.
- **Recommended:**
```tsx
// src/pages/KSeF.tsx (single component, language-aware)
import { useRouterState } from '@tanstack/react-router';
import { getLangFromPath } from '@/i18n';
import { ksefContent } from '@/data/ksef';  // content per language

export default function KSeF() {
  const path = useRouterState().location.pathname;
  const lang = getLangFromPath(path);
  const content = ksefContent[lang];

  return (
    <div className="pt-24 pb-20">
      <section className="px-4 pb-20">
        <h1 className="text-4xl font-bold text-white">{content.title}</h1>
        {/* ... same JSX, dynamic content */}
      </section>
    </div>
  );
}
```
- **Why:** Halves the maintenance surface. Any layout change currently requires editing 2 files. Content updates risk the EN/PL pages drifting out of sync structurally.
- **Risk of inaction:** As pages grow in complexity (more sections, interactive elements), the duplication cost compounds. Bug fixes must be applied twice.
- **Effort:** L (requires extracting all page content into data files)
- **Dependencies:** Expand the `i18n/` system or create page-specific content files in `src/data/`.

#### [2] Missing Error Boundary — Add resilience layer

- **Where:** `src/main.tsx`
- **Current:** No React Error Boundary wraps the app. Any unhandled error in any component renders a white screen.
- **Recommended:**
```tsx
// src/main.tsx
import { ErrorBoundary } from './components/ErrorBoundary';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </StrictMode>,
);
```
- **Why:** Production SPA without error boundaries = any JS error kills the entire page. Users get a blank screen with no recovery path.
- **Risk of inaction:** One bad render path (e.g., undefined product slug) and the entire site goes blank for that user.
- **Effort:** S
- **Dependencies:** None.

#### [3] No Route-Level Code Splitting — Add lazy loading

- **Where:** `src/router.tsx:1-27`
- **Current:** All 18 page components are eagerly imported at the top of `router.tsx`. The entire app ships as a single JS bundle.
- **Recommended:**
```tsx
// Instead of:
import EnHome from '@/pages/en/Home';

// Use lazy routes:
const enHomeRoute = createRoute({
  getParentRoute: () => enLayoutRoute,
  path: '/en',
  component: lazy(() => import('@/pages/en/Home')),
});
```
- **Why:** With 10 product data objects, 18 pages, and multiple icon libraries, the bundle is likely 200-400KB. Users visiting `/en` don't need PL pages loaded.
- **Risk of inaction:** As the site grows (more products, more pages), initial load time increases linearly. Affects SEO (Core Web Vitals) and user experience.
- **Effort:** M
- **Dependencies:** None, but test with `npm run build` to verify chunking.

#### [4] Form Without Backend — Dead-end UX

- **Where:** `src/pages/en/Contact.tsx`, `src/pages/pl/Contact.tsx`
- **Current:** Contact form has full UI but `handleSubmit` discards all data. It's a dead-end that actively misleads users into thinking they've contacted the business.
- **Recommended:** Connect to a backend service (Formspree, Supabase, PocketBase — the README mentions PocketBase as a TODO).
- **Why:** This is a **lead generation website**. Without a working contact form, it has zero conversion capability. Every visitor who fills out the form and clicks "Send" believes they've made contact — but the message is lost.
- **Risk of inaction:** Direct revenue loss. Potential clients submit inquiries that go nowhere.
- **Effort:** S (Formspree: 5 min), M (PocketBase/Supabase: 2-4h)
- **Dependencies:** External service account.

#### [5] Hardcoded Content in Components — Extract to data layer

- **Where:** `src/pages/en/Home.tsx:7-25`, `src/pages/en/KSeF.tsx:5-24`, `src/pages/en/Agents.tsx:5-22`, etc.
- **Current:** Page-specific content (KPIs, process steps, features, pricing tiers, timelines) is defined as constants inside component files. Product data is in `src/data/products.ts` (good), but page content is not.
- **Recommended:** Move all page content arrays to `src/data/` files:
```
src/data/products.ts   ✅ (already exists)
src/data/ksef.ts       (FEATURES, TIMELINE, PRICING per language)
src/data/agents.ts     (AGENTS, PROCESS, PRICING per language)
src/data/templates.ts  (TEMPLATES per language)
src/data/home.ts       (KPIS, executionSteps per language)
```
- **Why:** Separates presentation from content. Makes content reusable across pages. Enables future CMS integration without touching components.
- **Risk of inaction:** Content changes require editing React components instead of data files. Higher chance of accidental breakage.
- **Effort:** M
- **Dependencies:** None. Purely mechanical refactor.

### Refactoring Roadmap

1. **Add Error Boundary** (S) — Immediate safety net. No dependencies.
2. **Fix contact form** (S-M) — Business-critical. Connect to Formspree for instant fix.
3. **Extract page content to data files** (M) — Sets up the foundation for step 4.
4. **Consolidate EN/PL pages** (L) — Biggest maintenance win. Depends on step 3.
5. **Add route-level code splitting** (M) — Performance win. Independent of other changes.

### Anti-Patterns Detected

| Anti-Pattern | Location | Severity | Quick Description |
|---|---|---|---|
| Copy-paste language variants | `src/pages/en/` vs `src/pages/pl/` | Medium | 18 files where 9 would suffice. Structural duplication across languages. |
| Dead code path | `src/pages/en/Contact.tsx:8-11` | High | Form handler that does nothing but show success. Misleads users. |
| String-based type assertion | `src/pages/en/ProductDetail.tsx:6` | Low | `as { slug: string }` bypasses type safety on route params. |
| Non-null assertion bang | `src/data/products.ts:916-918` | Low | `!` on `.find()` results that could be undefined. |
| Mixed config paradigm | `tailwind.config.ts` vs `src/index.css @theme` | Low | Color definitions in two places (Tailwind v3 config + v4 CSS). |
| Wrong framework config | `eslint.config.mjs` | High | Next.js ESLint config in a Vite/React project. |
