import { createRouter, createRoute, createRootRoute, redirect, Outlet, Link } from '@tanstack/react-router';
import { lazy, Suspense, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import type { Lang } from '@/i18n';

// Lazy-loaded EN pages
const EnHome = lazy(() => import('@/pages/en/Home'));
const EnProducts = lazy(() => import('@/pages/en/Products'));
const EnProductDetail = lazy(() => import('@/pages/en/ProductDetail'));
const EnAbout = lazy(() => import('@/pages/en/About'));
const EnContact = lazy(() => import('@/pages/en/Contact'));
const EnLegal = lazy(() => import('@/pages/en/Legal'));
const EnKSeF = lazy(() => import('@/pages/en/KSeF'));
const EnAgents = lazy(() => import('@/pages/en/Agents'));
const EnTemplates = lazy(() => import('@/pages/en/Templates'));

// Lazy-loaded PL pages
const PlHome = lazy(() => import('@/pages/pl/Home'));
const PlProducts = lazy(() => import('@/pages/pl/Products'));
const PlProductDetail = lazy(() => import('@/pages/pl/ProductDetail'));
const PlAbout = lazy(() => import('@/pages/pl/About'));
const PlKSeF = lazy(() => import('@/pages/pl/KSeF'));
const PlAgents = lazy(() => import('@/pages/pl/Agents'));
const PlTemplates = lazy(() => import('@/pages/pl/Templates'));
const PlContact = lazy(() => import('@/pages/pl/Contact'));
const PlLegal = lazy(() => import('@/pages/pl/Legal'));

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-steel-50 mb-4">404</h1>
        <p className="text-xl text-steel-300 mb-8">Page not found</p>
        <Link to="/en" className="cta-primary px-6 py-3 text-sm">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-steel-700 border-t-brand-400" />
    </div>
  );
}

function LazyPage({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<PageLoader />}>{children}</Suspense>;
}

// Layout component
function LangLayout({ lang }: { lang: Lang }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="site-shell">
      <div className="site-content min-h-screen flex flex-col">
        <Navbar lang={lang} />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer lang={lang} />
      </div>
    </div>
  );
}

// Root
const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

// Index redirect
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  beforeLoad: () => { throw redirect({ to: '/en' }); },
});

// EN layout
const enLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: 'en-layout',
  component: () => <LangLayout lang="en" />,
});

const enHomeRoute = createRoute({ getParentRoute: () => enLayoutRoute, path: '/en', component: () => <LazyPage><EnHome /></LazyPage> });
const enProductsRoute = createRoute({ getParentRoute: () => enLayoutRoute, path: '/en/products', component: () => <LazyPage><EnProducts /></LazyPage> });
const enProductDetailRoute = createRoute({ getParentRoute: () => enLayoutRoute, path: '/en/products/$slug', component: () => <LazyPage><EnProductDetail /></LazyPage> });
const enAboutRoute = createRoute({ getParentRoute: () => enLayoutRoute, path: '/en/about', component: () => <LazyPage><EnAbout /></LazyPage> });
const enContactRoute = createRoute({ getParentRoute: () => enLayoutRoute, path: '/en/contact', component: () => <LazyPage><EnContact /></LazyPage> });
const enLegalRoute = createRoute({ getParentRoute: () => enLayoutRoute, path: '/en/legal', component: () => <LazyPage><EnLegal /></LazyPage> });
const enKSeFRoute = createRoute({ getParentRoute: () => enLayoutRoute, path: '/en/ksef', component: () => <LazyPage><EnKSeF /></LazyPage> });
const enAgentsRoute = createRoute({ getParentRoute: () => enLayoutRoute, path: '/en/ai-agents', component: () => <LazyPage><EnAgents /></LazyPage> });
const enTemplatesRoute = createRoute({ getParentRoute: () => enLayoutRoute, path: '/en/templates', component: () => <LazyPage><EnTemplates /></LazyPage> });

// PL layout
const plLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: 'pl-layout',
  component: () => <LangLayout lang="pl" />,
});

const plHomeRoute = createRoute({ getParentRoute: () => plLayoutRoute, path: '/pl', component: () => <LazyPage><PlHome /></LazyPage> });
const plProductsRoute = createRoute({ getParentRoute: () => plLayoutRoute, path: '/pl/uslugi', component: () => <LazyPage><PlProducts /></LazyPage> });
const plProductDetailRoute = createRoute({ getParentRoute: () => plLayoutRoute, path: '/pl/uslugi/$slug', component: () => <LazyPage><PlProductDetail /></LazyPage> });
const plAboutRoute = createRoute({ getParentRoute: () => plLayoutRoute, path: '/pl/o-nas', component: () => <LazyPage><PlAbout /></LazyPage> });
const plKSeFRoute = createRoute({ getParentRoute: () => plLayoutRoute, path: '/pl/ksef', component: () => <LazyPage><PlKSeF /></LazyPage> });
const plAgentsRoute = createRoute({ getParentRoute: () => plLayoutRoute, path: '/pl/agenci', component: () => <LazyPage><PlAgents /></LazyPage> });
const plTemplatesRoute = createRoute({ getParentRoute: () => plLayoutRoute, path: '/pl/szablony', component: () => <LazyPage><PlTemplates /></LazyPage> });
const plContactRoute = createRoute({ getParentRoute: () => plLayoutRoute, path: '/pl/kontakt', component: () => <LazyPage><PlContact /></LazyPage> });
const plLegalRoute = createRoute({ getParentRoute: () => plLayoutRoute, path: '/pl/regulamin', component: () => <LazyPage><PlLegal /></LazyPage> });

// Build route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  enLayoutRoute.addChildren([
    enHomeRoute,
    enProductsRoute,
    enProductDetailRoute,
    enAboutRoute,
    enContactRoute,
    enLegalRoute,
    enKSeFRoute,
    enAgentsRoute,
    enTemplatesRoute,
  ]),
  plLayoutRoute.addChildren([
    plHomeRoute,
    plProductsRoute,
    plProductDetailRoute,
    plAboutRoute,
    plKSeFRoute,
    plAgentsRoute,
    plTemplatesRoute,
    plContactRoute,
    plLegalRoute,
  ]),
]);

export const router = createRouter({ routeTree, defaultPreload: 'intent', defaultNotFoundComponent: NotFound });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
