# PROMPT 2 — Bug Hunter & Stability Pass

**Repository:** automateforge-io
**Tech stack:** React 19 + TanStack Router + TypeScript + Tailwind CSS v4 + Vite 7 + Nginx (Docker) + Helm/K8s
**Current symptoms:** None — proactive hardening
**Error logs/patterns:** No logs available — scan proactively
**Deployment target:** Docker (nginx-unprivileged) + Kubernetes (Helm) + Traefik + ArgoCD GitOps

---

## Stability Report — automateforge-io

### Critical (will cause production incidents)

---

#### 1. Contact form silently discards all submissions

- **Location:** `src/pages/en/Contact.tsx:8-11`, `src/pages/pl/Contact.tsx:8-11`
- **Bug:** `handleSubmit` calls `e.preventDefault()` and `setSubmitted(true)` without sending any data. Users see "Message sent!" but nothing is actually sent. Every lead is permanently lost.
- **Impact:** **Data loss** — all form submissions from prospective clients are silently discarded. Direct revenue impact.
- **Fix:**
```tsx
// Before:
const handleSubmit = (e: FormEvent) => {
  e.preventDefault();
  setSubmitted(true);
};

// After (minimal fix with Formspree or similar):
const [error, setError] = useState<string | null>(null);
const [loading, setLoading] = useState(false);

const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setLoading(true);
  setError(null);

  const form = e.currentTarget;
  const data = new FormData(form);

  try {
    const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    });
    if (!res.ok) throw new Error('Failed to send');
    setSubmitted(true);
  } catch {
    setError('Failed to send message. Please email hello@automateforge.io directly.');
  } finally {
    setLoading(false);
  }
};
```

---

#### 2. Zero-downtime deployment is not possible with current config

- **Location:** `helm/values/automateforge-io.yaml:22-24`
- **Bug:** Rolling update strategy specifies `maxSurge: 0` and `maxUnavailable: 1` with `replicaCount: 1`. During any deployment, the single pod is terminated before the new one starts, causing **complete downtime** for every deploy.
- **Impact:** User-facing downtime on every deployment. All users get connection errors during the rollout window.
- **Fix:**
```yaml
# Before:
strategy:
  type: RollingUpdate
  rollingUpdate:
    maxSurge: 0
    maxUnavailable: 1

# After:
strategy:
  type: RollingUpdate
  rollingUpdate:
    maxSurge: 1
    maxUnavailable: 0
```

---

#### 3. ESLint configuration will crash on execution

- **Location:** `eslint.config.mjs:1-18`
- **Bug:** Imports `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript` which are not installed dependencies. Any CI step or pre-commit hook running ESLint will fail with `MODULE_NOT_FOUND`.
- **Impact:** Linting is completely broken. If CI depends on `npm run lint`, all deployments will fail.
- **Fix:**
```js
// Before:
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

// After (remove file entirely or replace with):
import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  { ignores: ["dist/**"] }
);
```

---

### High Risk (likely to cause issues under load or edge cases)

---

#### 4. Missing favicon causes 404 on every page load

- **Location:** `index.html:13`
- **Bug:** `<link rel="icon" href="/favicon.svg" />` references a file that doesn't exist in `public/`. Every page load triggers a 404 request.
- **Impact:** Extra server load (one 404 per page view), broken favicon in browser tabs, console errors, and wasted nginx processing. Under high traffic this multiplies.
- **Fix:** Create `public/favicon.svg` with the site logo, or remove the link tag.

---

#### 5. Unsafe type assertion on route params

- **Location:** `src/pages/en/ProductDetail.tsx:6`, `src/pages/pl/ProductDetail.tsx:6`
- **Bug:** `useParams({ strict: false }) as { slug: string }` — if a user somehow reaches this component without a valid `slug` param (e.g., direct navigation, browser history), `slug` will be `undefined` cast to `string`, causing `getProductBySlug(undefined)` to return `undefined`. The null check on line 9 catches this, but the type assertion masks the real type.
- **Impact:** Silent type unsafety. Not a crash today, but fragile — any refactor that relies on `slug` being a string will introduce bugs.
- **Fix:**
```tsx
// Before:
const { slug } = useParams({ strict: false }) as { slug: string };

// After:
const { slug } = useParams({ strict: false });
const product = slug ? getProductBySlug(slug) : undefined;
```

---

#### 6. Non-null assertions in getFeaturedProducts

- **Location:** `src/data/products.ts:914-920`
- **Bug:** `products.find((p) => p.slug === "pipeline-forge")!` uses `!` (non-null assertion). If the product slug is renamed or removed, this throws a runtime error with no useful message.
- **Impact:** Crash on the homepage if any featured product slug is changed.
- **Fix:**
```typescript
// Before:
export function getFeaturedProducts(): Product[] {
  return [
    products.find((p) => p.slug === "pipeline-forge")!,
    products.find((p) => p.slug === "sre-foundations-kit")!,
    products.find((p) => p.slug === "cloud-cost-xray")!,
  ];
}

// After:
const FEATURED_SLUGS = ["pipeline-forge", "sre-foundations-kit", "cloud-cost-xray"] as const;

export function getFeaturedProducts(): Product[] {
  return FEATURED_SLUGS.map(slug => {
    const product = products.find(p => p.slug === slug);
    if (!product) {
      console.error(`Featured product not found: ${slug}`);
    }
    return product;
  }).filter((p): p is Product => p !== undefined);
}
```

---

#### 7. Kubeconfig handling in CI has silent failure

- **Location:** `.github/workflows/deploy.yml:70-75`
- **Bug:** The kubeconfig is written to disk, then a `base64 -d` decode is attempted with `|| true`. If the decode fails, the original (possibly invalid) content is used without any validation. The `kubectl` command at line 80 will fail with a confusing error.
- **Impact:** Failed deployments with misleading error messages. Pull secret refresh silently fails, potentially causing image pull errors.
- **Fix:**
```yaml
# After writing kubeconfig, add validation:
- name: Validate kubeconfig
  run: |
    KUBECONFIG="${GITHUB_WORKSPACE}/kubeconfig" kubectl cluster-info --request-timeout=10s || {
      echo "::error::KUBECONFIG is invalid or cluster is unreachable"
      exit 1
    }
```

---

### Hardening Opportunities (proactive improvements)

---

#### 8. No error boundary in React tree

- **Location:** `src/main.tsx:7-10`
- **Bug:** The entire app renders inside `<StrictMode>` with `<RouterProvider>` but no React Error Boundary. Any unhandled render error will crash the entire page with a white screen.
- **Impact:** Any component error (bad data, API change, undefined access) will render a blank white page instead of a graceful error message.
- **Fix:**
```tsx
// src/components/ErrorBoundary.tsx
import { Component, type ReactNode } from 'react';

interface Props { children: ReactNode; }
interface State { hasError: boolean; }

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white">Something went wrong</h1>
            <button onClick={() => window.location.reload()} className="mt-4 text-brand-400">
              Reload page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

// In main.tsx, wrap RouterProvider:
<ErrorBoundary>
  <RouterProvider router={router} />
</ErrorBoundary>
```

---

#### 9. No gzip/brotli compression in nginx

- **Location:** `Dockerfile:14-28`
- **Bug:** Nginx serves all assets uncompressed. JS/CSS bundles are sent at full size.
- **Impact:** Slower page loads, higher bandwidth costs, worse Core Web Vitals scores.
- **Fix:**
```nginx
# Add inside the server block in Dockerfile:
gzip on;
gzip_vary on;
gzip_min_length 256;
gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript image/svg+xml;
```

---

#### 10. No startup probe — liveness/readiness share same config

- **Location:** `helm/app-template/templates/deployment.yaml:51-66`
- **Bug:** Liveness and readiness probes use identical configuration. During container startup, the liveness probe could fail and restart the pod before it's ready, creating a restart loop.
- **Impact:** Pod restart loops during slow startups or resource-constrained environments.
- **Fix:**
```yaml
# Add startupProbe with more lenient settings:
startupProbe:
  httpGet:
    path: {{ .Values.healthCheck.path }}
    port: http
  failureThreshold: 10
  periodSeconds: 3
```

---

### Missing Observability

- **No application logging** — The SPA has no client-side error reporting. JS errors in production are invisible.
  - Add: `window.addEventListener('unhandledrejection', ...)` and `window.onerror` handlers that report to a logging service (Sentry, LogRocket, or GA4 exception events).
- **No nginx access log configuration** — Default nginx logs exist but aren't structured or exportable.
  - Add: JSON-format access logs in nginx config for log aggregation: `log_format json escape=json '{"time":"$time_iso8601","status":$status,"request":"$request_uri","size":$body_bytes_sent}';`
- **No health check endpoint** — The health check hits `/` which returns the full HTML page. This is wasteful and doesn't actually verify the app is healthy.
  - Add: A lightweight `/healthz` endpoint via nginx that returns 200 with minimal body. (Note: since this is a static SPA, hitting `/` does work, but wastes bandwidth.)
- **No deployment metrics** — No way to track deployment frequency, lead time, or failure rate.
  - Add: GitHub Actions annotations or a deployment tracking webhook.
- **No client-side performance monitoring** — No Web Vitals reporting despite Google Analytics being present.
  - Add: `web-vitals` library reporting CLS/LCP/FID to GA4 custom events.
