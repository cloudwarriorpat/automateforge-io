# PROMPT 5 — Quick Fix Sprint (25-min ADHD Block)

**Repository:** automateforge-io
**Focus area:** auto — pick highest impact
**Sprint number:** 1
**Previous sprint notes:** None — first sprint

---

## Sprint 1 Changelog — automateforge-io

**Focus:** auto (security > bugs > error handling > types > performance > cleanup)
**Duration:** 25 minutes
**Changes made:** 7

### Changes

1. **`eslint.config.mjs`:** Deleted broken ESLint config that referenced non-existent Next.js packages
   - Why: File imported `eslint-config-next` which isn't installed. Running ESLint would crash.
   - Commit message: `fix: remove broken Next.js ESLint config from Vite project`

2. **`package.json`:** Removed meaningless `"main": "index.js"` field
   - Why: This is a Vite SPA, not an npm package. The `main` field references a non-existent file.
   - Commit message: `chore: remove dead main field from package.json`

3. **`src/pages/en/Contact.tsx` + `src/pages/pl/Contact.tsx`:** Added `name` attributes to all form inputs
   - Why: Form inputs without `name` attributes won't produce usable `FormData`. Required for any backend integration.
   - Commit message: `fix: add name attributes to contact form inputs`

4. **`Dockerfile`:** Added gzip compression to nginx config
   - Why: All assets served uncompressed. Adding gzip reduces transfer sizes by 60-80%.
   - Commit message: `perf: enable gzip compression in nginx config`

5. **`src/router.tsx`:** Added `notFoundComponent` for 404 handling
   - Why: Invalid URLs show blank page. Now shows a proper 404 with navigation back to home.
   - Commit message: `feat: add 404 not-found page to router`

6. **`README.md`:** Updated TODO list — marked completed items, added current priorities
   - Why: README TODO was stale — claimed SEO and PL legal pages were missing but they exist.
   - Commit message: `docs: update README TODO list to reflect current state`

7. **`helm/values/automateforge-io.yaml`:** Fixed rolling update strategy for zero-downtime deploys
   - Why: `maxSurge: 0` with 1 replica means complete downtime on every deploy.
   - Commit message: `fix: change rolling update to maxSurge:1 for zero-downtime deploys`

### Verification
- [x] No new TypeScript errors introduced
- [x] No new runtime errors
- [x] All changes are atomic and independently revertible
- [x] Existing functionality preserved

### Next Sprint Suggestions

Top 3 things to tackle in the next 25-minute sprint:

1. **Connect contact form to Formspree** — Create account, get form ID, update `handleSubmit` in both EN and PL contact pages. Highest business impact remaining.
2. **Add favicon.svg** — Create simple SVG favicon from the "AF" logo. Stop the 404 on every page load.
3. **Add React Error Boundary** — Wrap `RouterProvider` in an error boundary to prevent white-screen crashes. Create `src/components/ErrorBoundary.tsx`.
