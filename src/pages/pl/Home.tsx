import { Link } from '@tanstack/react-router';
import { ArrowRight, ArrowUpRight, Bot, CheckCircle2, Shield, Zap } from 'lucide-react';
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
  { step: '01', title: 'Audyt i priorytety', desc: 'Mapujemy procesy i wybieramy automaty z najszybszym zwrotem.' },
  { step: '02', title: 'Projekt i guardraile', desc: 'Definiujemy flow, metryki jakości i momenty eskalacji do człowieka.' },
  { step: '03', title: 'Wdrożenie', desc: 'Budujemy i testujemy na realnych danych, aż proces działa stabilnie.' },
  { step: '04', title: 'Monitoring', desc: 'Dostarczamy dashboard, alerty i plan utrzymania po starcie.' },
];

export default function PlHome() {
  return (
    <div className="pb-16">
      <section className="px-4 pt-32 pb-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-stretch gap-8 lg:grid-cols-[1.12fr_0.88fr]">
            <div className="reveal">
              <span className="pill-badge">Automatyzacja dla rynku PL</span>
              <h1 className="mt-6 text-4xl font-bold leading-tight text-steel-50 md:text-6xl">
                Uporządkuj procesy i
                <span className="bg-gradient-to-r from-brand-300 via-brand-500 to-spark-400 bg-clip-text text-transparent"> dowieź wynik</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-steel-300 md:text-xl">
                KSeF, agenci AI i gotowe workflow pod polskie integracje. Wybierasz produkt, a my dowozimy wdrożenie z jasnym zakresem.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/pl/kontakt" className="cta-primary px-6 py-3 text-sm sm:text-base">
                  Umów rozmowę <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/pl/ksef" className="cta-secondary px-6 py-3 text-sm sm:text-base">
                  Zobacz KSeF Studio
                </Link>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {['Stały zakres', 'Bez godzinówki', 'Dokumentacja po wdrożeniu'].map((item) => (
                  <div key={item} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-steel-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card reveal reveal-delay-1 p-7 md:p-8">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-spark-300">
                Wyniki klientów
              </div>
              <p className="mt-3 text-sm text-steel-300">
                Przykładowe efekty po wdrożeniach AutomateForge:
              </p>
              <div className="mt-6 space-y-4">
                {STATS.map((s) => (
                  <div key={s.label} className="rounded-xl border border-white/10 bg-black/20 px-4 py-3">
                    <div className="text-xl font-bold text-steel-50">{s.value}</div>
                    <div className="text-sm text-steel-300">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-xl border border-brand-300/30 bg-brand-500/12 px-4 py-3 text-sm text-brand-300">
                W pakiecie dostajesz plan utrzymania, checklisty i wsparcie startowe po wdrożeniu.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-muted px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge="Produkty główne"
            title="Trzy filary automatyzacji biznesu"
            subtitle="Każdy produkt ma konkretne deliverables i mierzalny efekt operacyjny."
          />
          <div className="grid gap-8 md:grid-cols-3">
            {SERVICES.map((s, index) => {
              const Icon = s.icon;
              return (
                <Link key={s.title} to={s.to} className={`glass-card-hover reveal p-8 ${index > 0 ? `reveal-delay-${Math.min(index, 3)}` : ''}`}>
                  <div className="flex items-center justify-between gap-4">
                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${s.bgColor}`}>
                      <Icon className={`h-6 w-6 ${s.textColor}`} />
                    </div>
                    <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${s.bgColor} ${s.textColor}`}>{s.badge}</span>
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-steel-50">{s.title}</h3>
                  <p className="mt-2 text-sm text-steel-300">{s.description}</p>
                  <ul className="mt-4 space-y-2">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-steel-200">
                        <div className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${s.color}`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-spark-300">
                    Zobacz szczegóły <ArrowUpRight className="h-4 w-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge="Metoda pracy"
            title="Proces wdrożenia w 4 etapach"
            subtitle="Od diagnozy po monitoring: transparentnie i bez chaosu wdrożeniowego."
          />
          <div className="grid gap-6 md:grid-cols-4">
            {PROCESS.map((p, index) => (
              <div key={p.step} className={`glass-card reveal p-6 ${index > 0 ? `reveal-delay-${Math.min(index, 3)}` : ''}`}>
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-brand-300/35 bg-brand-500/12 text-sm font-bold text-brand-300">
                  {p.step}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-steel-50">{p.title}</h3>
                <p className="mt-2 text-sm text-steel-300">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-muted px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge="Wsparcie po starcie"
            title="Nie kończymy na deploymentcie"
            subtitle="Wspieramy zespół po wdrożeniu i pilnujemy, aby automatyzacje dalej dowoziły wynik."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {[
              'Miesięczny raport z KPI i jakością automatyzacji',
              'Aktualizacje promptów i flow pod zmieniające się dane',
              'Przegląd ryzyk + lista kolejnych automatyzacji z ROI',
            ].map((item, index) => (
              <div key={item} className={`glass-card reveal p-6 ${index > 0 ? `reveal-delay-${Math.min(index, 3)}` : ''}`}>
                <CheckCircle2 className="h-6 w-6 text-spark-300" />
                <p className="mt-4 text-sm text-steel-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-4 pt-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="glass-card reveal p-10 md:p-12">
            <div className="grid items-center gap-8 md:grid-cols-[1.2fr_0.8fr]">
              <div>
                <h2 className="text-3xl font-bold text-steel-50 md:text-4xl">Chcesz przyspieszyć automatyzację w tym kwartale?</h2>
                <p className="mt-4 text-lg text-steel-300">
                  Umów rozmowę, wybierz produkt i dostań plan wdrożenia z terminem i zakresem.
                </p>
              </div>
              <div className="flex justify-start md:justify-end">
                <Link to="/pl/kontakt" className="cta-primary px-8 py-4 text-sm md:text-base">
                  Porozmawiajmy <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
