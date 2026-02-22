import { Link } from '@tanstack/react-router';
import { Server, Bell, FileText, RefreshCw, Lock, BarChart3, CheckCircle2 } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const FEATURES = [
  { icon: Server, title: 'ERP/Invoicing Integration', desc: 'We connect your system (SAP, Comarch, Enova, Symfonia, Fakturownia, wFirma, ifirma) with KSeF 2.0. Bidirectional sync with full validation.' },
  { icon: Bell, title: 'Monitoring & Alerts', desc: 'Real-time invoice status tracking in KSeF. Instant notifications for rejections and errors.' },
  { icon: FileText, title: 'JPK/VAT Validation', desc: 'Automatic data consistency check before submission. Invoice references, checksums, schema compliance.' },
  { icon: RefreshCw, title: 'Rejection Recovery', desc: 'Automatic analysis of rejection causes, data correction, and retry submission.' },
  { icon: Lock, title: 'Security & Audit', desc: 'Complete operation log, token encryption, access control. Ready for tax authority audit.' },
  { icon: BarChart3, title: 'Reports & BI', desc: 'Dashboard with metrics: invoice volume, processing time, rejection rate.' },
];

const TIMELINE = [
  { date: 'February 1, 2026', event: 'KSeF mandatory for large taxpayers', status: 'active' },
  { date: 'April 1, 2026', event: 'SMEs — Your deadline', status: 'upcoming' },
  { date: 'Mid-2026', event: 'Micro-enterprises and others', status: 'upcoming' },
];

const PRICING = [
  { name: 'Start', price: '€1,900', monthly: '€250', desc: 'For companies with one invoicing system.', features: ['1 ERP/KSeF integration', 'Basic monitoring', 'JPK validation', 'Email alerts', 'Documentation'], highlight: false },
  { name: 'Business', price: '€5,900', monthly: '€750', desc: 'For companies with multiple systems and complex processes.', features: ['Up to 3 integrations', '24/7 monitoring', 'Auto-correction of rejections', 'Slack/Teams alerts', 'BI Dashboard', '4h SLA'], highlight: true },
  { name: 'Enterprise', price: '€14,000', monthly: '€2,000', desc: 'Full KSeF support for corporations.', features: ['Unlimited integrations', 'Dedicated team', '2h SLA', 'Custom reports', 'Training', 'Audit compliance'], highlight: false },
];

export default function EnKSeF() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-6">
            2026 Deadline — Don't Wait
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">KSeF Studio</h1>
          <p className="text-xl text-steel-400 max-w-2xl mx-auto">
            Full integration with Polish National e-Invoicing System. From implementation to monitoring and compliance.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-4 pb-20">
        <div className="max-w-3xl mx-auto">
          <SectionHeading title="KSeF Timeline" subtitle="Key dates you can't miss." />
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
          <SectionHeading title="What We Deliver" subtitle="Complete KSeF solution — from A to Z." />
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
          <SectionHeading title="Pricing" subtitle="Transparent pricing. No hidden costs." />
          <div className="grid md:grid-cols-3 gap-6">
            {PRICING.map((p) => (
              <div key={p.name} className={`glass-card p-8 ${p.highlight ? 'border-brand-500/30 ring-1 ring-brand-500/20' : ''}`}>
                {p.highlight && <span className="text-xs text-brand-400 font-medium">Most Popular</span>}
                <h3 className="text-2xl font-bold text-white mt-1">{p.name}</h3>
                <div className="mt-4 mb-2">
                  <span className="text-3xl font-bold text-white">{p.price}</span>
                  <span className="text-sm text-steel-400"> one-time</span>
                </div>
                <div className="text-sm text-steel-400 mb-6">+ {p.monthly}/month maintenance</div>
                <p className="text-sm text-steel-400 mb-6">{p.desc}</p>
                <ul className="space-y-3 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-steel-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <Link to="/en/contact" className={`block text-center py-3 rounded-xl font-medium transition-colors ${p.highlight ? 'bg-brand-500 hover:bg-brand-600 text-white' : 'border border-white/20 hover:border-white/40 text-white'}`}>
                  Schedule a Call
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
