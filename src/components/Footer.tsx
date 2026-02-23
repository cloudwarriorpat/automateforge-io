import { type Lang, t } from '@/i18n';
import { Link } from '@tanstack/react-router';

export default function Footer({ lang }: { lang: Lang }) {
  const tr = t(lang);
  const quickLinks = lang === 'en'
    ? [
        { label: 'All Services', to: '/en/services' },
        { label: 'AI Integration', to: '/en/ai-agents' },
        { label: 'Process Audit', to: '/en/process-audit' },
        { label: 'Templates', to: '/en/templates' },
      ]
    : [
        { label: 'Uslugi', to: '/pl/uslugi' },
        { label: 'O nas', to: '/pl/o-nas' },
        { label: 'Kontakt', to: '/pl/kontakt' },
      ];

  const tools = ['Make.com', 'n8n', 'Zapier', 'Claude AI', 'GPT-4'];

  return (
    <footer className="px-4 pb-10 pt-16 sm:px-6">
      <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-steel-950/72 p-8 shadow-[0_24px_52px_rgba(2,7,20,0.45)] backdrop-blur-2xl sm:p-10">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-300/30 bg-brand-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.13em] text-brand-300">
              Automation services
            </div>
            <h2 className="mt-4 text-2xl font-bold text-steel-50">AutomateForge</h2>
            <p className="mt-3 max-w-md text-sm text-steel-300">{tr.footer.tagline}</p>
            <p className="mt-4 text-sm text-steel-400">
              <a href="mailto:hello@automateforge.io" className="hover:text-steel-50 transition-colors">hello@automateforge.io</a>
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-steel-400">
              {lang === 'en' ? 'Services' : 'Nawigacja'}
            </h3>
            <div className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <Link key={link.to} to={link.to} className="block text-sm text-steel-300 hover:text-steel-50 transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-steel-400">
              Tools we work with
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span key={tool} className="rounded border border-white/10 bg-white/5 px-2 py-1 text-xs text-steel-400">{tool}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-steel-400 sm:flex-row sm:items-center sm:justify-between">
          <span>{tr.footer.copyright}</span>
          <div className="flex items-center gap-5">
            <Link to={lang === 'en' ? '/en/legal' : '/pl/regulamin'} className="hover:text-steel-50 transition-colors">
              {tr.footer.privacy}
            </Link>
            <Link to={lang === 'en' ? '/en/contact' : '/pl/kontakt'} className="hover:text-steel-50 transition-colors">
              {lang === 'en' ? 'Contact' : 'Kontakt'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
