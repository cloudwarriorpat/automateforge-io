import { Link } from '@tanstack/react-router';
import { Mail, Target, Receipt, CheckCircle2, Eye, Brain, Cog, BarChart3 } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const AGENTS = [
  { icon: Mail, title: 'Triage maili', desc: 'Klasyfikuje przychodzące maile (faktury, reklamacje, dostawcy, zapytania), tworzy zadania w Asanie/Jirze, taguje, proponuje odpowiedzi.', tools: ['Gmail', 'Outlook', 'Asana', 'Jira', 'Slack'] },
  { icon: Target, title: 'Kwalifikacja leadów', desc: 'Research firmy, scoring na bazie ICP, enrichment danych, automatyczny follow-up i routing do handlowca z kontekstem.', tools: ['Pipedrive', 'HubSpot', 'Apollo', 'LinkedIn', 'Lemlist'] },
  { icon: Receipt, title: 'Kontrola kosztów', desc: 'Analiza faktur i umów: wykrywanie anomalii, duplikatów, przekroczeń budżetów. Automatyczne alerty i raporty.', tools: ['ifirma', 'wFirma', 'Google Sheets', 'Slack', 'Power BI'] },
];

const PROCESS = [
  { icon: Eye, title: 'Odkrycie', desc: 'Mapujemy procesy, identyfikujemy agentów o najwyższym ROI.' },
  { icon: Brain, title: 'Projektowanie', desc: 'Definiujemy prompty, flow, metryki jakości i punkty eskalacji.' },
  { icon: Cog, title: 'Budowa i testy', desc: 'Budujemy agenta, testujemy na realnych danych, iterujemy.' },
  { icon: BarChart3, title: 'Monitoring', desc: 'Śledzenie jakości, prompt updates, raporty miesięczne.' },
];

const PRICING = [
  { name: 'Starter', price: '15 000', monthly: '2 000', desc: '1 agent AI z podstawowym monitoringiem.', features: ['1 agent', 'Setup + szkolenie', 'Monitoring tygodniowy', 'Email wsparcie', 'Dokumentacja'], highlight: false },
  { name: 'Growth', price: '45 000', monthly: '8 000', desc: 'Do 3 agentów z zaawansowanym monitoringiem.', features: ['Do 3 agentów', 'Custom prompty', 'Monitoring 24/7', 'Slack wsparcie', 'Miesięczne raporty', 'Prompt updates', 'Człowiek w pętli'], highlight: true },
  { name: 'Enterprise', price: '80 000', monthly: '15 000', desc: 'Pełna obsługa AI agentów dla całego back-office.', features: ['Unlimited agentów', 'Dedykowany team', 'Monitoring proaktywny', 'SLA 2h', 'Custom integracje', 'Kwartalne przeglądy', 'Szkolenia zespołu'], highlight: false },
];

export default function PlAgents() {
  return (
    <div className="pt-24 pb-20">
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium bg-sky-500/10 text-sky-400 border border-sky-500/20 mb-6">
            ROI w 3 miesiące
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">AI Agents</h1>
          <p className="text-xl text-steel-400 max-w-2xl mx-auto">
            Agenci AI, którzy realnie pracują w Twoim back-office. Z człowiekiem w pętli i pełnym monitoringiem.
          </p>
        </div>
      </section>

      {/* Agents */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Nasi agenci" />
          <div className="grid md:grid-cols-3 gap-6">
            {AGENTS.map((a) => {
              const Icon = a.icon;
              return (
                <div key={a.title} className="glass-card p-8">
                  <Icon className="w-8 h-8 text-sky-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{a.title}</h3>
                  <p className="text-sm text-steel-400 mb-4">{a.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {a.tools.map((tool) => (
                      <span key={tool} className="px-2 py-0.5 text-xs bg-white/5 border border-white/10 rounded text-steel-400">{tool}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-4 py-20 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <SectionHeading title="Proces wdrożenia" />
          <div className="grid md:grid-cols-4 gap-6">
            {PROCESS.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="glass-card p-6 text-center">
                  <Icon className="w-8 h-8 text-sky-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">{p.title}</h3>
                  <p className="text-sm text-steel-400">{p.desc}</p>
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
                <div className="text-sm text-steel-400 mb-6">+ {p.monthly} PLN/msc</div>
                <p className="text-sm text-steel-400 mb-6">{p.desc}</p>
                <ul className="space-y-3 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-steel-300">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" /> {f}
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
