import { Link } from '@tanstack/react-router';
import { ArrowRight, Shield, Bot, Zap } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const SERVICES = [
  {
    icon: Shield,
    title: 'KSeF Studio',
    description: 'Obowiązkowy KSeF to deadline, którego nie przesuniesz. Wdrażamy integrację ERP/fakturowanie z KSeF, monitoring odrzutów, walidację JPK/VAT i automatyczne uzupełnianie danych.',
    features: ['Integracja ERP z KSeF 2.0', 'Monitoring i alerty błędów', 'Walidacja JPK/VAT', 'SLA i aktualizacje schematów'],
    to: '/pl/ksef',
    badge: 'Deadline 2026',
    color: 'from-emerald-400 to-teal-500',
    textColor: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
  },
  {
    icon: Bot,
    title: 'AI Agents',
    description: 'Agenci AI, którzy realnie pracują w Twoim back-office. Triage maili, kwalifikacja leadów, kontrola kosztów — z człowiekiem w pętli i pełnym monitoringiem jakości.',
    features: ['Triage maili i zadań', 'Scoring i kwalifikacja leadów', 'Kontrola kosztów faktur', 'Monitoring i prompt updates'],
    to: '/pl/agenci',
    badge: 'ROI w 3 miesiące',
    color: 'from-sky-400 to-blue-500',
    textColor: 'text-sky-400',
    bgColor: 'bg-sky-500/10',
  },
  {
    icon: Zap,
    title: 'Szablony automatyzacji',
    description: 'Gotowe workflowy pod polski rynek: KSeF, BaseLinker, Allegro, Fakturownia, ifirma, InPost, Przelewy24. Kup, wdróż, działaj — bez tygodni konfiguracji.',
    features: ['Make / n8n / Zapier', 'Polskie integracje', 'Dokumentacja PL', 'Wsparcie wdrożeniowe'],
    to: '/pl/szablony',
    badge: 'Od 149 PLN',
    color: 'from-blue-400 to-blue-600',
    textColor: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
  },
];

const STATS = [
  { value: '50+', label: 'Wdrożeń' },
  { value: '99.9%', label: 'Uptime' },
  { value: '<2h', label: 'SLA reakcji' },
  { value: '3 msc', label: 'Średni ROI' },
];

const PROCESS = [
  { step: '01', title: 'Odkrycie', desc: 'Mapujemy procesy, identyfikujemy automaty o najwyższym ROI.' },
  { step: '02', title: 'Projektowanie', desc: 'Definiujemy flow, metryki jakości i punkty eskalacji.' },
  { step: '03', title: 'Budowa', desc: 'Budujemy rozwiązanie, testujemy na realnych danych, iterujemy.' },
  { step: '04', title: 'Monitoring', desc: 'Śledzenie jakości, aktualizacje, raporty miesięczne.' },
];

export default function PlHome() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium bg-brand-500/10 text-brand-400 border border-brand-500/20 mb-6">
            Automatyzacja procesów biznesowych
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Automatyzuj.{' '}
            <span className="bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent">
              Skaluj. Zarabiaj.
            </span>
          </h1>
          <p className="text-xl text-steel-400 mb-8 max-w-2xl mx-auto">
            KSeF, AI Agenci, szablony workflow — wszystko czego potrzebujesz by zautomatyzować firmę na polskim rynku.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link to="/pl/kontakt" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white font-medium rounded-xl transition-colors">
              Umów rozmowę <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/pl/ksef" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-white/40 text-white font-medium rounded-xl transition-colors">
              KSeF Studio
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 border-y border-white/10">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-bold text-white">{s.value}</div>
              <div className="text-sm text-steel-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Nasze usługi" subtitle="Trzy filary automatyzacji Twojej firmy." />
          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <Link key={s.title} to={s.to} className="glass-card-hover p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl ${s.bgColor} flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${s.textColor}`} />
                    </div>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${s.bgColor} ${s.textColor}`}>{s.badge}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-sm text-steel-400 mb-4">{s.description}</p>
                  <ul className="space-y-2">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-steel-300">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${s.color}`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <SectionHeading title="Jak pracujemy" subtitle="Sprawdzony proces w 4 krokach." />
          <div className="grid md:grid-cols-4 gap-6">
            {PROCESS.map((p) => (
              <div key={p.step} className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-brand-400 mb-3">{p.step}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{p.title}</h3>
                <p className="text-sm text-steel-400">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center glass-card p-12">
          <h2 className="text-3xl font-bold text-white mb-4">Gotowy na automatyzację?</h2>
          <p className="text-steel-400 mb-8">Umów się na bezpłatną konsultację. Bez zobowiązań.</p>
          <Link to="/pl/kontakt" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white font-medium rounded-xl transition-colors">
            Umów rozmowę <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
