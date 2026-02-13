# AutomateForge.io - TODO Sprint 1

**Zgredek applied:** Analytics + Security headers  
**Date:** 2026-02-13  
**Status:** Ready for configuration

---

## ⚠️ ACTION ITEMS (requires Patryk/Weronika)

### 1. Replace Analytics IDs

**File:** `src/app/layout.tsx`

Replace placeholder values:
- `G-XXXXXXXXXX` → real Google Analytics 4 Measurement ID
- `XXXXXXXXXXXX` → real Microsoft Clarity Project ID

**How to get:**
- GA4: https://analytics.google.com/ → Data Streams → Measurement ID
- Clarity: https://clarity.microsoft.com/ → Project → Project ID

---

### 2. Generate OG Images (optional but recommended)

**Missing:**
- `public/og-image.jpg` (1200x630px) - for social media sharing
- `public/apple-touch-icon.png` (180x180px) - for iOS home screen

**Design suggestions:**
- AutomateForge branding
- Tagline: "Production-Grade Automation Engineering"
- Professional, engineering-focused aesthetic
- Dark theme to match site

---

### 3. Test Production Build

After replacing analytics IDs:

```bash
cd automateforge-io
npm install
npm run build
```

**Verify:**
- Build completes without errors
- Check console for analytics firing
- Verify security headers in DevTools (after deploy)
- Test OG tags: https://www.opengraph.xyz/

---

## ✅ DONE (by Zgredek)

- [x] Added Google Analytics 4 (with placeholder ID)
- [x] Added Microsoft Clarity (with placeholder ID)
- [x] Configured security headers (X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy)
- [x] Created .env.example template
- [x] Documented action items

---

## 📝 NOTES

**Metadata status:** ✅ EXCELLENT
- Already has full Metadata API configuration
- OpenGraph tags: ✅
- Twitter cards: ✅
- Robots config: ✅
- metadataBase: ✅

**Security headers:** ✅ ADDED
- Will apply in production builds

**Analytics:** ⏳ PENDING
- Scripts added, need real IDs

**OG Images:** ❌ TODO
- Optional but recommended for professional appearance

---

**Next Sprint Ideas:**
1. Add structured data (JSON-LD) for SEO
2. Implement cookie consent banner (if targeting EU)
3. Add conversion tracking events
4. Performance monitoring (Web Vitals)
