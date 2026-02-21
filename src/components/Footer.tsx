import { type Lang, t } from '@/i18n';
import { Link } from '@tanstack/react-router';

export default function Footer({ lang }: { lang: Lang }) {
  const tr = t(lang);
  return (
    <footer className="border-t border-white/10 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-lg font-bold bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent">
              AutomateForge
            </span>
            <p className="text-sm text-steel-400 mt-1 max-w-md">{tr.footer.tagline}</p>
          </div>
          <div className="flex items-center gap-6 text-sm text-steel-400">
            <Link to={lang === 'en' ? '/en/legal' : '/pl/kontakt'} className="hover:text-white transition-colors">
              {tr.footer.privacy}
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-steel-500">
          {tr.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
