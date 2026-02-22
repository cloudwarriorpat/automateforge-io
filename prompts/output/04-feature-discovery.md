# PROMPT 4 — Feature Discovery & Roadmap Generator

**Repository:** automateforge-io
**Tech stack:** React 19 + TanStack Router + TypeScript + Tailwind CSS v4 + Vite 7
**Product type:** B2B services website / productized DevOps & automation consultancy
**Target users:** Engineering leads, CTOs, and business owners in Poland and EU looking for DevOps, KSeF integration, AI automation, and workflow templates
**Current stage:** MVP / Early Growth
**Business goals:** Generate leads, build credibility, sell productized services

---

## Feature Discovery Report — automateforge-io

### TODO/FIXME Catalogue

| # | Marker | File:Line | Context | Suggested Action | Effort |
|---|--------|-----------|---------|------------------|--------|
| 1 | TODO | `README.md:39` | `[ ] Connect PocketBase for contact form` | **Critical** — contact form doesn't send data. Integrate with PocketBase, Supabase, or Formspree. | M |
| 2 | TODO | `README.md:40` | `[ ] Add KSeF Scanner quiz page` | Build an interactive quiz/assessment page that helps visitors assess their KSeF readiness. High-value lead magnet. | L |
| 3 | TODO | `README.md:41` | `[ ] Add privacy/terms pages for PL` | PL Legal page exists at `/pl/regulamin` with the same content structure as EN. Mark as **DONE**. | S (done) |
| 4 | TODO | `README.md:42` | `[ ] SEO: meta tags, sitemap, robots.txt` | Meta tags are in `index.html`, `sitemap.xml` and `robots.txt` exist in `public/`. Mark as **DONE**. | S (done) |
| 5 | TODO | `README.md:43` | `[ ] OG images per page` | OG meta tags exist but no `og:image` is set. Need to create OG images. | M |

### Incomplete Features

#### 1. Contact Form Backend
- **Feature:** Capture contact form submissions and deliver them to the business
- **Current state:** Full UI implemented (name, email, company, message fields with validation). `handleSubmit` is a stub that shows success without sending data.
- **Files involved:** `src/pages/en/Contact.tsx`, `src/pages/pl/Contact.tsx`
- **To complete:**
  - Choose a backend (Formspree for fastest, PocketBase for self-hosted, Supabase for full DB)
  - Add `name` attributes to form inputs
  - Implement `fetch()` call in `handleSubmit`
  - Add error handling and loading state
  - Add email notification on new submission
- **Effort:** S (Formspree) / M (PocketBase/Supabase)

#### 2. KSeF Scanner / Readiness Quiz
- **Feature:** Interactive assessment tool that helps businesses evaluate their KSeF readiness
- **Current state:** Listed as TODO in README. No code exists.
- **Files involved:** New page needed
- **To complete:**
  - Design 5-10 question quiz flow
  - Build quiz component with scoring logic
  - Create results page with personalized recommendations
  - Add lead capture (email to get results)
  - Route: `/en/ksef/scanner` and `/pl/ksef/skaner`
- **Effort:** L

#### 3. OG Images
- **Feature:** Social media preview images for link sharing
- **Current state:** `og:title` and `og:description` meta tags exist. No `og:image` set.
- **Files involved:** `index.html`, need new assets in `public/`
- **To complete:**
  - Design OG image (1200x630px) with brand
  - Add to `public/og.png`
  - Add `<meta property="og:image">` to `index.html`
  - Ideally create per-page OG images
- **Effort:** M

### Missing Standard Features

#### Auth & Access
- **Feature:** Not applicable — this is a static marketing site, no user accounts needed at this stage.
- **Recommendation:** Skip

#### User Experience

| Feature | User Impact | Revenue Impact | Effort | Recommendation |
|---------|-------------|----------------|--------|----------------|
| **404 page** | 3 | 1 | S | **Build** — Users navigating to invalid URLs see a blank page. Add `notFoundComponent` to TanStack Router. |
| **Loading states** | 2 | 1 | S | **Defer** — Static SPA loads instantly. Only relevant if code splitting is added. |
| **Search** across products | 3 | 2 | M | **Defer** — With 10 products, filtering by category (already exists) is sufficient. |
| **Scroll to top on navigation** | 3 | 1 | S | **Build** — SPA navigation may preserve scroll position. TanStack Router supports `scrollRestoration`. |
| **Breadcrumbs** on product detail | 2 | 1 | S | **Defer** — "← Back to products" link already exists. |
| **Mobile back-to-top button** | 2 | 1 | S | **Defer** — Pages aren't extremely long yet. |

#### Data Management
- **Feature:** Not applicable at current stage — no user-generated data.
- **Recommendation:** Skip

#### Notifications

| Feature | User Impact | Revenue Impact | Effort | Recommendation |
|---------|-------------|----------------|--------|----------------|
| **Email confirmation** on form submit | 4 | 3 | S | **Build** — When contact form is connected, send auto-confirmation email to the lead. Formspree/Supabase handle this natively. |

#### Admin/Operations

| Feature | User Impact | Revenue Impact | Effort | Recommendation |
|---------|-------------|----------------|--------|----------------|
| **Analytics dashboard** for form submissions | 2 | 3 | M | **Defer** — Google Analytics tracks page views. Add Formspree analytics for form conversions first. |

#### API
- **Feature:** Not applicable — static marketing site.
- **Recommendation:** Skip

#### Compliance

| Feature | User Impact | Revenue Impact | Effort | Recommendation |
|---------|-------------|----------------|--------|----------------|
| **Cookie consent banner** | 3 | 1 | S | **Build** — Site uses Google Analytics GA4. GDPR requires cookie consent for EU users. Polish market makes this mandatory. |
| **GDPR data request flow** | 2 | 1 | S | **Defer** — No user data stored yet. Relevant when form backend is connected. |
| **Accessibility (a11y) audit** | 3 | 2 | M | **Build** — Key a11y features present (focus styles, aria-labels on menu button, semantic HTML). Full WCAG audit recommended. |

#### Monetization

| Feature | User Impact | Revenue Impact | Effort | Recommendation |
|---------|-------------|----------------|--------|----------------|
| **Template purchase flow** | 4 | 5 | L | **Build** — Templates page shows prices (€39-€99) but links to contact form. Add Stripe checkout or Gumroad integration for direct purchase. |
| **Booking/scheduling integration** | 4 | 4 | S | **Build** — "Book a Call" CTAs everywhere but no booking flow. Integrate Calendly or Cal.com embed. |

### Quick Wins (< 2 hours each)

- **Add Calendly/Cal.com booking link** — Replace "Book a Call" buttons with actual Calendly links or embed. Every CTA becomes functional. (30 min)
- **Add cookie consent banner** — Use a lightweight cookie consent library (e.g., `vanilla-cookieconsent`). Required by GDPR for GA4. (1 hour)
- **Add 404 page** — Add `notFoundComponent` to router config. Simple component with link back to home. (15 min)
- **Connect contact form to Formspree** — Create Formspree account, add form ID, update `handleSubmit`. (30 min)
- **Add scroll restoration** — Add `scrollRestoration: 'auto'` to TanStack Router config. (5 min)
- **Update README TODO** — Mark completed items, add current priorities. (10 min)

### Prioritized Backlog (Top 10)

| Priority | Feature | User Impact | Revenue Impact | Effort | Category |
|----------|---------|-------------|----------------|--------|----------|
| 1 | Connect contact form backend | 5 | 5 | S | Lead capture |
| 2 | Add Calendly/Cal.com booking | 5 | 5 | S | Conversion |
| 3 | Cookie consent banner (GDPR) | 3 | 1 | S | Compliance |
| 4 | Add favicon.svg | 2 | 1 | S | UX |
| 5 | Add 404 page | 3 | 1 | S | UX |
| 6 | OG images for social sharing | 3 | 3 | M | Marketing |
| 7 | Template direct purchase (Stripe/Gumroad) | 4 | 5 | L | Monetization |
| 8 | KSeF readiness quiz/scanner | 4 | 4 | L | Lead magnet |
| 9 | Client-side error tracking (Sentry) | 2 | 1 | S | Reliability |
| 10 | Blog/content section | 4 | 4 | L | SEO/Marketing |

### Feature Roadmap Suggestion

- **This week:**
  1. Connect contact form to Formspree (30 min)
  2. Add Calendly booking links to all "Book a Call" buttons (30 min)
  3. Add cookie consent banner (1 hour)

- **This month:**
  1. Create OG images and add to all pages (2-3 hours)
  2. Add template purchase flow via Gumroad or Stripe (1-2 days)
  3. Add client testimonials / case studies section (1 day)
  4. Add KSeF readiness scanner quiz page (2-3 days)
  5. Improve SEO with per-page meta tags via TanStack Router's `meta` feature (2-3 hours)

- **This quarter:**
  1. Add a blog/content section for SEO (Markdown-based, or headless CMS like Storyblok/Sanity)
  2. Add client portal for project tracking (requires auth — Supabase/Clerk)
  3. Internationalize all page content (consolidate EN/PL into data-driven pages)
