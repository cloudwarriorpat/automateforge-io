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
- [ ] Connect PocketBase for contact form
- [ ] Add KSeF Scanner quiz page
- [ ] Add privacy/terms pages for PL
- [ ] SEO: meta tags, sitemap, robots.txt
- [ ] OG images per page
