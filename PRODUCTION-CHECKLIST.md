# AutomateForge.io - Production Deployment Checklist ✅

## Pre-Deployment Configuration

### 1. Analytics Setup (15 min) 🔴 REQUIRED

**Google Analytics 4:**
```typescript
// src/app/layout.tsx (line ~48)
gtag('config', 'G-XXXXXXXXXX'); // ← Replace with real GA4 ID

// Also update line ~47:
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
```

**Microsoft Clarity:**
```typescript
// src/app/layout.tsx (line ~61)
})(window, document, "clarity", "script", "XXXXXXXXXXXX"); // ← Replace with Clarity ID
```

**Where to get IDs:**
- GA4: https://analytics.google.com/ (Create property → Get Measurement ID)
- Clarity: https://clarity.microsoft.com/ (Create project → Get Project ID)

**Status:** 🟡 Placeholders active  
**Priority:** High (before production deployment)

---

### 2. Environment Variables Check

**Required:**
- `NEXT_PUBLIC_SITE_URL` - Production URL (for canonical, OG tags)

**Optional but recommended:**
- `NEXT_PUBLIC_GA_ID` - GA4 Measurement ID (if you want to use env var)
- `NEXT_PUBLIC_CLARITY_ID` - Clarity Project ID (if you want to use env var)

**Note:** Currently analytics IDs are hardcoded in layout.tsx. Consider moving to env vars for easier management.

---

### 3. Build Verification

**Run before deploy:**
```bash
cd automateforge-io
npm run build
```

**Expected output:**
- ✅ TypeScript compilation success
- ✅ All routes generated (/, /about, /services/*, etc.)
- ✅ Static export ready (if using `output: 'export'`)
- ✅ Zero errors

**Last verified:** 2026-02-13 (Sprint 1)

---

### 4. SEO & Metadata Review

**Already configured:** ✅
- Title + description
- Keywords
- OpenGraph tags (title, description, url, siteName, locale)
- Twitter card
- Canonical URLs
- Robots directives

**To verify after deployment:**
- [ ] Test with [Facebook Debugger](https://developers.facebook.com/tools/debug/)
- [ ] Test with [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [ ] Test with [LinkedIn Inspector](https://www.linkedin.com/post-inspector/)

---

### 5. Security Headers

**Already configured in next.config.js:** ✅
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy

**To verify after deployment:**
1. Open site in browser
2. Open DevTools → Network tab
3. Click any request
4. Check Response Headers
5. Confirm all security headers present

---

## Deployment Steps

### Option A: Vercel (Recommended for Next.js)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from repo root
cd automateforge-io
vercel

# Follow prompts:
# - Link to project (or create new)
# - Confirm settings
# - Deploy!
```

**Vercel advantages:**
- Automatic HTTPS
- CDN edge caching
- Zero config for Next.js
- Preview deployments
- Environment variable management

### Option B: Static Export (Netlify, Cloudflare Pages, etc.)

**1. Enable static export in next.config.js:**
```javascript
const nextConfig = {
  output: 'export', // ← Add this
  // ... rest of config
}
```

**2. Build:**
```bash
npm run build
```

**3. Deploy `out/` directory to:**
- Netlify: `netlify deploy --prod --dir=out`
- Cloudflare Pages: Connect repo or upload `out/`
- AWS S3 + CloudFront: Upload `out/` to S3 bucket

### Option C: Docker + Azure Container Apps (Advanced)

**If you need containerization:**
```dockerfile
# Dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./
RUN npm ci --production
EXPOSE 3000
CMD ["npm", "start"]
```

---

## Post-Deployment Verification

### Critical Checks (Run within 1 hour)
- [ ] Site loads at production URL
- [ ] All pages accessible (/, /about, /services/*)
- [ ] No 404 errors in console
- [ ] Analytics firing (check GA4 real-time)
- [ ] Forms work (if any)
- [ ] Mobile responsive (test on phone)

### SEO Validation (Run within 24 hours)
- [ ] Google Search Console connected
- [ ] Sitemap submitted (if generated)
- [ ] robots.txt accessible
- [ ] OG tags render correctly (social media test)
- [ ] Canonical URLs correct

### Performance Audit (Run within 1 week)
```bash
# Lighthouse audit
lighthouse https://automateforge.io --output=html --output-path=./lighthouse-report.html --view

# Or use Chrome DevTools:
# 1. Open site
# 2. DevTools → Lighthouse tab
# 3. Run audit (Performance, Accessibility, SEO, Best Practices)
```

**Target scores:**
- Performance: >90
- Accessibility: >95
- SEO: 100
- Best Practices: >95

---

## Monitoring Setup (Optional but recommended)

### Uptime Monitoring
- **UptimeRobot** (free): https://uptimerobot.com/
- **Pingdom** (paid): https://www.pingdom.com/
- **Better Uptime** (paid): https://betteruptime.com/

### Error Tracking
- **Sentry** (free tier): https://sentry.io/
- **LogRocket** (paid): https://logrocket.com/
- **Rollbar** (free tier): https://rollbar.com/

### Performance Monitoring
- **Vercel Analytics** (if using Vercel)
- **Google PageSpeed Insights** (free): https://pagespeed.web.dev/
- **WebPageTest** (free): https://www.webpagetest.org/

---

## Rollback Plan

**If deployment has critical issues:**

### Vercel:
```bash
vercel rollback <deployment-url>
```

### Static hosting (Netlify/Cloudflare):
- Use platform's UI to rollback to previous deployment
- Or: Deploy previous commit manually

### Docker:
```bash
# Rollback to previous image tag
docker pull automateforge-io:previous-tag
docker service update --image automateforge-io:previous-tag production
```

---

## Contact & Support

**Developer:** Zgredek 😈 (via Patryk/Weronika)  
**Repo:** https://github.com/cloudwarriorpat/automateforge-io  
**Docs:** See `TODO-ZGREDEK-FIXES.md` for Sprint 1 details

---

## Sprint 1 Status

✅ **Completed:**
- Metadata & SEO (comprehensive)
- Security headers
- Analytics tracking (placeholders)
- Documentation

🟡 **Configuration needed:**
- Replace analytics IDs with real ones
- Set up environment variables (if using)
- Verify production deployment

🟢 **Optional enhancements:**
- Add OG image (improve social sharing)
- Set up error tracking (Sentry)
- Configure uptime monitoring

---

**Last updated:** 2026-02-14 00:10 GMT+1  
**Sprint:** 1 - Foundation (COMPLETE)  
**Next sprint:** Production configuration + monitoring
