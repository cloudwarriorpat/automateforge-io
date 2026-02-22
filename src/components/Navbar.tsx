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

  const contactPath = lang === 'en' ? '/en/contact' : '/pl/kontakt';
  const langLabel = lang === 'en' ? 'PL' : 'EN';
  const langName = lang === 'en' ? 'Polski' : 'English';

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <nav className="rounded-2xl border border-white/10 bg-steel-950/72 backdrop-blur-2xl shadow-[0_20px_45px_rgba(2,6,16,0.42)]">
          <div className="flex h-16 items-center justify-between px-4 sm:px-6">
            <Link to={lang === 'en' ? '/en' : '/pl'} className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-brand-300/30 bg-brand-500/15 text-sm font-bold text-brand-300">
                AF
              </span>
              <div className="leading-tight">
                <div className="text-sm font-bold tracking-wide text-steel-50">AutomateForge</div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-steel-500">{lang === 'en' ? 'Studio .io' : 'Studio .pl'}</div>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-4">
              <div className="flex items-center gap-1 rounded-xl border border-white/10 bg-black/20 p-1">
                {links.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="px-3 py-2 rounded-lg text-sm font-medium text-steel-300 hover:text-steel-50 hover:bg-white/5 transition-colors"
                    activeProps={{ className: 'px-3 py-2 rounded-lg text-sm font-medium text-steel-50 bg-white/10 border border-white/10' }}
                    activeOptions={{ exact: l.to === '/en' || l.to === '/pl' }}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <Link to={switchPath} className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-white/10 text-sm font-medium text-steel-300 hover:text-steel-50 hover:border-white/20 transition-colors">
                  <Globe className="w-4 h-4" />
                  {langLabel}
                </Link>
                <Link to={contactPath} className="cta-primary px-4 py-2 text-sm">
                  {lang === 'en' ? 'Book Call' : 'Umów rozmowę'}
                </Link>
              </div>
            </div>

            <button
              className="inline-flex lg:hidden items-center justify-center rounded-lg border border-white/10 p-2 text-steel-300 hover:text-steel-50 hover:bg-white/5 transition-colors"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {open && (
            <div className="lg:hidden border-t border-white/10 px-4 pb-5 pt-4 space-y-3">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="block rounded-lg border border-white/5 px-3 py-2 text-sm font-medium text-steel-300 hover:text-steel-50 hover:border-white/15 hover:bg-white/5 transition-colors"
                  activeProps={{ className: 'block rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-sm font-medium text-steel-50' }}
                  activeOptions={{ exact: l.to === '/en' || l.to === '/pl' }}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ))}

              <div className="pt-2 grid grid-cols-2 gap-3">
                <Link
                  to={switchPath}
                  className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-white/10 px-3 py-2 text-sm font-medium text-steel-300 hover:text-steel-50 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  <Globe className="w-4 h-4" />
                  {langName}
                </Link>
                <Link to={contactPath} className="cta-primary px-3 py-2 text-sm" onClick={() => setOpen(false)}>
                  {lang === 'en' ? 'Book Call' : 'Kontakt'}
                </Link>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
