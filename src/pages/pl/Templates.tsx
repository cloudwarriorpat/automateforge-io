import { Link } from '@tanstack/react-router';
import { Package, Star, ChevronRight } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const TEMPLATES = [
  { title: 'KSeF → Fakturownia sync', category: 'Finanse', price: '299 PLN', tools: 'Make / n8n', integrations: ['KSeF', 'Fakturownia'], popular: true },
  { title: 'Allegro → BaseLinker → InPost', category: 'E-commerce', price: '449 PLN', tools: 'Make', integrations: ['Allegro', 'BaseLinker', 'InPost'], popular: true },
  { title: 'Lead scoring + CRM routing', category: 'CRM', price: '349 PLN', tools: 'n8n / Zapier', integrations: ['HubSpot', 'Apollo', 'Slack'], popular: false },
  { title: 'Faktura → ifirma auto-booking', category: 'Finanse', price: '199 PLN', tools: 'Make', integrations: ['ifirma', 'Gmail'], popular: false },
  { title: 'Przelewy24 → Google Sheets raport', category: 'Finanse', price: '149 PLN', tools: 'Zapier', integrations: ['Przelewy24', 'Google Sheets'], popular: false },
  { title: 'Social media auto-publish', category: 'Marketing', price: '249 PLN', tools: 'Make / n8n', integrations: ['Buffer', 'Canva', 'LinkedIn'], popular: false },
];

export default function PlTemplates() {
  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Od 149 PLN"
          title="Szablony automatyzacji"
          subtitle="Gotowe workflowy pod polski rynek. Kup, wdróż, działaj."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEMPLATES.map((t) => (
            <div key={t.title} className="glass-card-hover p-6 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-steel-400 bg-white/5 px-2 py-1 rounded">{t.category}</span>
                <div className="flex items-center gap-2">
                  {t.popular && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/20 text-xs">
                      <Star className="w-3 h-3" /> Popularne
                    </span>
                  )}
                  <span className="text-lg font-bold text-white">{t.price}</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{t.title}</h3>
              <div className="flex flex-wrap gap-1.5 mb-4 flex-1">
                {t.integrations.map((i) => (
                  <span key={i} className="px-2 py-0.5 text-xs bg-white/5 border border-white/10 rounded text-steel-400">{i}</span>
                ))}
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-xs text-steel-500">{t.tools}</span>
                <Link to="/pl/kontakt" className="inline-flex items-center gap-1 text-sm font-medium text-brand-400 hover:text-brand-300">
                  Zamów <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center glass-card p-12">
          <Package className="w-12 h-12 text-brand-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-3">Potrzebujesz custom workflow?</h2>
          <p className="text-steel-400 mb-6">Zbudujemy dedykowany szablon pod Twoje potrzeby.</p>
          <Link to="/pl/kontakt" className="inline-flex items-center gap-2 px-8 py-3 bg-brand-500 hover:bg-brand-600 text-white font-medium rounded-xl transition-colors">
            Umów rozmowę
          </Link>
        </div>
      </div>
    </div>
  );
}
