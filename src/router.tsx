import { createRouter, createRoute, createRootRoute, redirect, Outlet, Link } from '@tanstack/react-router';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import type { Lang } from '@/i18n';

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

// EN Pages
import EnHome from '@/pages/en/Home';
import EnProducts from '@/pages/en/Products';
import EnProductDetail from '@/pages/en/ProductDetail';
import EnAbout from '@/pages/en/About';
import EnContact from '@/pages/en/Contact';
import EnLegal from '@/pages/en/Legal';
import EnKSeF from '@/pages/en/KSeF';
import EnAgents from '@/pages/en/Agents';
import EnTemplates from '@/pages/en/Templates';

// PL Pages
import PlHome from '@/pages/pl/Home';
import PlProducts from '@/pages/pl/Products';
import PlProductDetail from '@/pages/pl/ProductDetail';
import PlAbout from '@/pages/pl/About';
import PlKSeF from '@/pages/pl/KSeF';
import PlAgents from '@/pages/pl/Agents';
import PlTemplates from '@/pages/pl/Templates';
import PlContact from '@/pages/pl/Contact';
import PlLegal from '@/pages/pl/Legal';

// Layout component
function LangLayout({ lang }: { lang: Lang }) {
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

const enHomeRoute = createRoute({ getParentRoute: () => enLayoutRoute, path: '/en', component: EnHome });
const enProductsRoute = createRoute({ getParentRoute: () => enLayoutRoute, path: '/en/products', component: EnProducts });
const enProductDetailRoute = createRoute({ getParentRoute: () => enLayoutRoute, path: '/en/products/$slug', component: EnProductDetail });
const enAboutRoute = createRoute({ getParentRoute: () => enLayoutRoute, path: '/en/about', component: EnAbout });
const enContactRoute = createRoute({ getParentRoute: () => enLayoutRoute, path: '/en/contact', component: EnContact });
const enLegalRoute = createRoute({ getParentRoute: () => enLayoutRoute, path: '/en/legal', component: EnLegal });
const enKSeFRoute = createRoute({ getParentRoute: () => enLayoutRoute, path: '/en/ksef', component: EnKSeF });
const enAgentsRoute = createRoute({ getParentRoute: () => enLayoutRoute, path: '/en/ai-agents', component: EnAgents });
const enTemplatesRoute = createRoute({ getParentRoute: () => enLayoutRoute, path: '/en/templates', component: EnTemplates });

// PL layout
const plLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: 'pl-layout',
  component: () => <LangLayout lang="pl" />,
});

const plHomeRoute = createRoute({ getParentRoute: () => plLayoutRoute, path: '/pl', component: PlHome });
const plProductsRoute = createRoute({ getParentRoute: () => plLayoutRoute, path: '/pl/uslugi', component: PlProducts });
const plProductDetailRoute = createRoute({ getParentRoute: () => plLayoutRoute, path: '/pl/uslugi/$slug', component: PlProductDetail });
const plAboutRoute = createRoute({ getParentRoute: () => plLayoutRoute, path: '/pl/o-nas', component: PlAbout });
const plKSeFRoute = createRoute({ getParentRoute: () => plLayoutRoute, path: '/pl/ksef', component: PlKSeF });
const plAgentsRoute = createRoute({ getParentRoute: () => plLayoutRoute, path: '/pl/agenci', component: PlAgents });
const plTemplatesRoute = createRoute({ getParentRoute: () => plLayoutRoute, path: '/pl/szablony', component: PlTemplates });
const plContactRoute = createRoute({ getParentRoute: () => plLayoutRoute, path: '/pl/kontakt', component: PlContact });
const plLegalRoute = createRoute({ getParentRoute: () => plLayoutRoute, path: '/pl/regulamin', component: PlLegal });

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
