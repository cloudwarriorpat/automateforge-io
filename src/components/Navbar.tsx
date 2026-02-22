import { Link, useRouterState } from '@tanstack/react-router';
import { Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';
import { type Lang } from '@/i18n';

interface NavbarProps {
  lang: Lang;
}

export default function Navbar({ lang }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const router = useRouterState();
  const path = router.location.pathname;

  const otherLang = lang === 'en' ? 'pl' : 'en';
  const switchPath = lang === 'en'
    ? path.replace(/^\/en/, '/pl').replace(/\/products/, '/uslugi').replace(/\/about/, '/o-nas').replace(/\/legal/, '/regulamin').replace(/\/contact/, '/kontakt').replace(/\/ksef/, '/ksef').replace(/\/ai-agents/, '/agenci').replace(/\/templates/, '/szablony') || '/pl'
    : path.replace(/^\/pl/, '/en').replace(/\/uslugi/, '/products').replace(/\/o-nas/, '/about').replace(/\/regulamin/, '/legal').replace(/\/kontakt/, '/contact').replace(/\/ksef/, '/ksef').replace(/\/agenci/, '/ai-agents').replace(/\/szablony/, '/templates') || '/en';

  const links = lang === 'en'
    ? [
        { to: '/en', label: 'Home' },
        { to: '/en/products', label: 'Products' },
        { to: '/en/ksef', label: 'KSeF' },
        { to: '/en/ai-agents', label: 'AI Agents' },
        { to: '/en/templates', label: 'Templates' },
        { to: '/en/about', label: 'About' },
        { to: '/en/contact', label: 'Contact' },
      ]
    : [
        { to: '/pl', label: 'Strona główna' },
        { to: '/pl/uslugi', label: 'Usługi' },
        { to: '/pl/ksef', label: 'KSeF' },
        { to: '/pl/agenci', label: 'Agenci' },
        { to: '/pl/szablony', label: 'Szablony' },
        { to: '/pl/o-nas', label: 'O nas' },
        { to: '/pl/kontakt', label: 'Kontakt' },
      ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to={lang === 'en' ? '/en' : '/pl'} className="flex items-center gap-2">
            <span className="text-xl font-bold bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent">
              AutomateForge
            </span>
            <span className="text-xs text-steel-400 font-medium uppercase tracking-wider">
              {lang === 'en' ? '.io' : '.pl'}
            </span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm text-steel-300 hover:text-white transition-colors"
                activeProps={{ className: 'text-white font-medium' }}
                activeOptions={{ exact: l.to === '/en' || l.to === '/pl' }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to={switchPath}
              className="flex items-center gap-1.5 text-sm text-steel-400 hover:text-white transition-colors ml-4 px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/20"
            >
              <Globe className="w-4 h-4" />
              {otherLang.toUpperCase()}
            </Link>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden text-steel-300" onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-gray-950/95 backdrop-blur-xl">
          <div className="px-4 py-4 space-y-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="block text-sm text-steel-300 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to={switchPath}
              className="flex items-center gap-1.5 text-sm text-steel-400 hover:text-white pt-3 border-t border-white/10"
              onClick={() => setOpen(false)}
            >
              <Globe className="w-4 h-4" />
              {otherLang === 'en' ? 'English' : 'Polski'}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
