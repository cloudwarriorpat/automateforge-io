import { createRouter, createRoute, createRootRoute, redirect, Outlet } from '@tanstack/react-router';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import type { Lang } from '@/i18n';

// Pages
import EnHome from '@/pages/en/Home';
import EnProducts from '@/pages/en/Products';
import EnProductDetail from '@/pages/en/ProductDetail';
import EnAbout from '@/pages/en/About';
import EnContact from '@/pages/en/Contact';
import EnLegal from '@/pages/en/Legal';
import PlHome from '@/pages/pl/Home';
import PlKSeF from '@/pages/pl/KSeF';
import PlAgents from '@/pages/pl/Agents';
import PlTemplates from '@/pages/pl/Templates';
import PlContact from '@/pages/pl/Contact';

// Layout component
function LangLayout({ lang }: { lang: Lang }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar lang={lang} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer lang={lang} />
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

// PL layout
const plLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: 'pl-layout',
  component: () => <LangLayout lang="pl" />,
});

const plHomeRoute = createRoute({ getParentRoute: () => plLayoutRoute, path: '/pl', component: PlHome });
const plKSeFRoute = createRoute({ getParentRoute: () => plLayoutRoute, path: '/pl/ksef', component: PlKSeF });
const plAgentsRoute = createRoute({ getParentRoute: () => plLayoutRoute, path: '/pl/agenci', component: PlAgents });
const plTemplatesRoute = createRoute({ getParentRoute: () => plLayoutRoute, path: '/pl/szablony', component: PlTemplates });
const plContactRoute = createRoute({ getParentRoute: () => plLayoutRoute, path: '/pl/kontakt', component: PlContact });

// Build route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  enLayoutRoute.addChildren([enHomeRoute, enProductsRoute, enProductDetailRoute, enAboutRoute, enContactRoute, enLegalRoute]),
  plLayoutRoute.addChildren([plHomeRoute, plKSeFRoute, plAgentsRoute, plTemplatesRoute, plContactRoute]),
]);

export const router = createRouter({ routeTree, defaultPreload: 'intent' });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
