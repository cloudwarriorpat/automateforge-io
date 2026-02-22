# AutomateForge — Dual Language SPA

Bilingual (EN/PL) website built with TanStack Router, React 19, Tailwind CSS v4, and Vite.

## Stack
- **Framework:** TanStack Router (SPA)
- **UI:** React 19 + TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Build:** Vite 7

## Routes

### English (`/en`)
- `/en` — Home (DevOps products)
- `/en/products` — Products listing
- `/en/products/:slug` — Product detail
- `/en/about` — About
- `/en/contact` — Contact form
- `/en/legal` — Legal

### Polish (`/pl`)
- `/pl` — Home (KSeF, AI Agents, Szablony)
- `/pl/ksef` — KSeF Studio
- `/pl/agenci` — AI Agents
- `/pl/szablony` — Templates marketplace
- `/pl/kontakt` — Contact form

## Getting Started

```bash
npm install
npm run dev      # Dev server
npm run build    # Production build
npm run preview  # Preview production build
```

## TODO
- [ ] Connect backend for contact form (PocketBase / Formspree / Supabase)
- [ ] Add KSeF Scanner / readiness quiz page
- [ ] Add OG images per page
- [ ] Add cookie consent banner (GDPR for GA4)
- [ ] Add Calendly/Cal.com booking integration
- [ ] Add template purchase flow (Stripe / Gumroad)

## Done
- [x] Privacy/terms pages for PL (`/pl/regulamin`)
- [x] SEO: meta tags, sitemap.xml, robots.txt
- [x] 404 not-found page
- [x] Gzip compression in nginx
