import { Link } from '@tanstack/react-router';
import { Server, Bell, FileText, RefreshCw, Lock, BarChart3, CheckCircle2 } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const FEATURES = [
  { icon: Server, title: 'Integracja ERP/Fakturowanie', desc: 'Łączymy Twój system (SAP, Comarch, Enova, Symfonia, Fakturownia, wFirma, ifirma) z KSeF 2.0. Dwukierunkowa synchronizacja z pełną walidacją.' },
  { icon: Bell, title: 'Monitoring i alerty', desc: 'Śledzenie statusów faktur w KSeF w czasie rzeczywistym. Natychmiastowe powiadomienia o odrzutach i błędach.' },
  { icon: FileText, title: 'Walidacja JPK/VAT', desc: 'Automatyczne sprawdzanie spójności danych przed wysłaniem. Referencje faktur, sumy kontrolne, zgodność ze schematami.' },
  { icon: RefreshCw, title: 'Ratunek po odrzutach', desc: 'Automatyczna analiza przyczyn odrzucenia, korekcja danych i ponowna próba wysłania.' },
  { icon: Lock, title: 'Bezpieczeństwo i audyt', desc: 'Pełny log operacji, szyfrowanie tokenów, kontrola dostępu. Gotowe na audyt KAS.' },
  { icon: BarChart3, title: 'Raporty i BI', desc: 'Dashboard z metrykami: wolumen faktur, czas przetwarzania, procent odrzutów.' },
];

const TIMELINE = [
  { date: '1 lutego 2026', event: 'KSeF obowiązkowy dla dużych podatników', status: 'active' },
  { date: '1 kwietnia 2026', event: 'MSP — Twój deadline', status: 'upcoming' },
  { date: 'Połowa 2026', event: 'Mikroprzedsiębiorcy i pozostali', status: 'upcoming' },
];

const PRICING = [
  { name: 'Start', price: '8 000', monthly: '1 000', desc: 'Dla firm z jednym systemem fakturującym.', features: ['1 integracja ERP/KSeF', 'Monitoring podstawowy', 'Walidacja JPK', 'Email alerty', 'Dokumentacja'], highlight: false },
  { name: 'Business', price: '25 000', monthly: '3 000', desc: 'Dla firm z wieloma systemami i złożonymi procesami.', features: ['Do 3 integracji', 'Monitoring 24/7', 'Auto-korekta odrzutów', 'Slack/Teams alerty', 'Dashboard BI', 'SLA 4h'], highlight: true },
  { name: 'Enterprise', price: '60 000', monthly: '8 000', desc: 'Pełna obsługa KSeF dla korporacji.', features: ['Unlimited integracji', 'Dedykowany team', 'SLA 2h', 'Custom raporty', 'Szkolenia', 'Audit compliance'], highlight: false },
];

export default function PlKSeF() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-6">
            Deadline 2026 — nie czekaj
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">KSeF Studio</h1>
          <p className="text-xl text-steel-400 max-w-2xl mx-auto">
            Pełna integracja z Krajowym Systemem e-Faktur. Od wdrożenia po monitoring i compliance.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-4 pb-20">
        <div className="max-w-3xl mx-auto">
          <SectionHeading title="Kalendarz KSeF" subtitle="Kluczowe daty, których nie przegapisz." />
          <div className="space-y-4">
            {TIMELINE.map((t) => (
              <div key={t.date} className={`glass-card p-6 flex items-center gap-4 ${t.status === 'active' ? 'border-emerald-500/30' : ''}`}>
                <div className={`w-3 h-3 rounded-full ${t.status === 'active' ? 'bg-emerald-400' : 'bg-steel-600'}`} />
                <div>
                  <div className="font-semibold text-white">{t.date}</div>
                  <div className="text-sm text-steel-400">{t.event}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 pb-20 bg-white/[0.02] py-20">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Co dostarczamy" subtitle="Kompletne rozwiązanie KSeF — od A do Z." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="glass-card p-6">
                  <Icon className="w-8 h-8 text-emerald-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
                  <p className="text-sm text-steel-400">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Cennik" subtitle="Transparentne ceny. Bez ukrytych kosztów." />
          <div className="grid md:grid-cols-3 gap-6">
            {PRICING.map((p) => (
              <div key={p.name} className={`glass-card p-8 ${p.highlight ? 'border-brand-500/30 ring-1 ring-brand-500/20' : ''}`}>
                {p.highlight && <span className="text-xs text-brand-400 font-medium">Najpopularniejszy</span>}
                <h3 className="text-2xl font-bold text-white mt-1">{p.name}</h3>
                <div className="mt-4 mb-2">
                  <span className="text-3xl font-bold text-white">{p.price} PLN</span>
                  <span className="text-sm text-steel-400"> jednorazowo</span>
                </div>
                <div className="text-sm text-steel-400 mb-6">+ {p.monthly} PLN/msc utrzymanie</div>
                <p className="text-sm text-steel-400 mb-6">{p.desc}</p>
                <ul className="space-y-3 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-steel-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <Link to="/pl/kontakt" className={`block text-center py-3 rounded-xl font-medium transition-colors ${p.highlight ? 'bg-brand-500 hover:bg-brand-600 text-white' : 'border border-white/20 hover:border-white/40 text-white'}`}>
                  Umów rozmowę
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
