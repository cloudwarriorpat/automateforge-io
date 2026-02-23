import { Link } from '@tanstack/react-router';
import { Search, BarChart3, FileText, Zap, CheckCircle2, Target, TrendingUp } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const FEATURES = [
  { icon: Search, title: 'Workflow Mapping', desc: 'We interview your team and document every step of your key processes — inputs, outputs, handoffs, decision points, and time spent.' },
  { icon: BarChart3, title: 'Automation Scoring', desc: 'Each workflow gets scored on automation potential: frequency, complexity, error rate, and business impact.' },
  { icon: Target, title: 'ROI Projections', desc: 'Estimated time saved, cost reduction, and error elimination for each automation opportunity.' },
  { icon: FileText, title: 'Tool Recommendations', desc: 'We recommend the right tool for each workflow: Make.com, n8n, Zapier, custom scripts, or AI agents.' },
  { icon: Zap, title: 'Quick Wins Identified', desc: 'Immediate automation opportunities that can deliver results within the first week of implementation.' },
  { icon: TrendingUp, title: 'Strategic Roadmap', desc: 'A phased implementation plan with dependencies, resource requirements, and expected milestones.' },
];

const PROCESS = [
  { step: '1', title: 'Kickoff & Scoping', desc: 'We align on goals, identify key processes, and schedule stakeholder interviews.' },
  { step: '2', title: 'Process Interviews', desc: '30-minute sessions with process owners. We map the real workflow, not the documented one.' },
  { step: '3', title: 'Analysis & Scoring', desc: 'We score each process on automation potential and model the expected ROI.' },
  { step: '4', title: 'Roadmap Delivery', desc: 'Prioritized automation roadmap with executive summary, delivered in a 60-minute review session.' },
];

const PRICING = [
  { name: 'Quick Scan', price: '€2,000', desc: 'For teams that need a fast assessment of automation opportunities.', features: ['Up to 10 processes mapped', 'Automation scoring matrix', 'Top 5 quick wins identified', 'Tool recommendations', 'Executive summary'], highlight: false },
  { name: 'Full Audit', price: '€6,500', desc: 'Comprehensive analysis with process redesign and implementation planning.', features: ['Up to 25 processes mapped', 'Full automation scoring', 'Process redesign recommendations', 'ROI projections per workflow', 'Phased implementation roadmap', '1 quick-win automation built'], highlight: true },
  { name: 'Transformation', price: '€20,000', desc: 'Company-wide audit with strategy, CoE setup, and pilot implementations.', features: ['Up to 50 processes mapped', 'Automation strategy document', 'Center of Excellence framework', 'Tool platform setup', '3 pilot automations built', 'Team training (2 days)', 'Quarterly review retainer'], highlight: false },
];

export default function EnKSeF() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-6">
            Know before you build
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Process Audit & Optimization</h1>
          <p className="text-xl text-steel-400 max-w-2xl mx-auto">
            Map your workflows, find the bottlenecks, and get a prioritized automation roadmap with clear ROI projections. Stop guessing what to automate first.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="px-4 pb-20">
        <div className="max-w-5xl mx-auto">
          <SectionHeading title="How the Audit Works" subtitle="A structured process that turns operational chaos into a clear automation plan." />
          <div className="grid md:grid-cols-4 gap-6">
            {PROCESS.map((p) => (
              <div key={p.step} className="glass-card p-6 text-center">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400 text-lg font-bold mx-auto mb-3">
                  {p.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{p.title}</h3>
                <p className="text-sm text-steel-400">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 pb-20 bg-white/[0.02] py-20">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="What You Get" subtitle="Actionable deliverables, not another slide deck." />
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
                  <span className="text-sm text-steel-400"> fixed</span>
                </div>
                <p className="text-sm text-steel-400 mb-6">{p.desc}</p>
                <ul className="space-y-3 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-steel-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <Link to="/en/contact" className={`block text-center py-3 rounded-xl font-medium transition-colors ${p.highlight ? 'bg-brand-500 hover:bg-brand-600 text-white' : 'border border-white/20 hover:border-white/40 text-white'}`}>
                  Book Discovery Call
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
