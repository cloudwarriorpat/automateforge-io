import { Link } from '@tanstack/react-router';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { type Lang } from '@/i18n';

interface NavbarProps {
  lang: Lang;
}

export default function Navbar({ lang }: NavbarProps) {
  const [open, setOpen] = useState(false);

  const links = lang === 'en'
    ? [
        { to: '/en', label: 'Home' },
        { to: '/en/services', label: 'Services' },
        { to: '/en/ai-agents', label: 'AI Integration' },
        { to: '/en/process-audit', label: 'Process Audit' },
        { to: '/en/templates', label: 'Templates' },
        { to: '/en/about', label: 'About' },
        { to: '/en/contact', label: 'Contact' },
      ]
    : [
        { to: '/pl', label: 'Strona glowna' },
        { to: '/pl/uslugi', label: 'Uslugi' },
        { to: '/pl/o-nas', label: 'O nas' },
        { to: '/pl/kontakt', label: 'Kontakt' },
      ];

  const contactPath = lang === 'en' ? '/en/contact' : '/pl/kontakt';

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
                <div className="text-[11px] uppercase tracking-[0.2em] text-steel-500">Automation Services</div>
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

              <Link to={contactPath} className="cta-primary px-4 py-2 text-sm">
                {lang === 'en' ? 'Book Call' : 'Kontakt'}
              </Link>
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

              <div className="pt-2">
                <Link to={contactPath} className="cta-primary w-full px-3 py-2 text-sm" onClick={() => setOpen(false)}>
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
