import { Link } from '@tanstack/react-router';
import { Mail, Target, Receipt, CheckCircle2, Eye, Brain, Cog, BarChart3 } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const AGENTS = [
  { icon: Mail, title: 'Email Triage', desc: 'Classifies incoming emails (invoices, complaints, suppliers, inquiries), creates tasks in Asana/Jira, tags, suggests responses.', tools: ['Gmail', 'Outlook', 'Asana', 'Jira', 'Slack'] },
  { icon: Target, title: 'Lead Qualification', desc: 'Company research, ICP-based scoring, data enrichment, automated follow-up and routing to sales with context.', tools: ['Pipedrive', 'HubSpot', 'Apollo', 'LinkedIn', 'Lemlist'] },
  { icon: Receipt, title: 'Cost Control', desc: 'Invoice and contract analysis: detecting anomalies, duplicates, budget overruns. Automatic alerts and reports.', tools: ['ifirma', 'wFirma', 'Google Sheets', 'Slack', 'Power BI'] },
];

const PROCESS = [
  { icon: Eye, title: 'Discovery', desc: 'We map processes, identify agents with highest ROI.' },
  { icon: Brain, title: 'Design', desc: 'Define prompts, flows, quality metrics, and escalation points.' },
  { icon: Cog, title: 'Build & Test', desc: 'Build the agent, test on real data, iterate.' },
  { icon: BarChart3, title: 'Monitoring', desc: 'Quality tracking, prompt updates, monthly reports.' },
];

const PRICING = [
  { name: 'Starter', price: '€3,500', monthly: '€500', desc: '1 AI agent with basic monitoring.', features: ['1 agent', 'Setup + training', 'Weekly monitoring', 'Email support', 'Documentation'], highlight: false },
  { name: 'Growth', price: '€10,500', monthly: '€2,000', desc: 'Up to 3 agents with advanced monitoring.', features: ['Up to 3 agents', 'Custom prompts', '24/7 monitoring', 'Slack support', 'Monthly reports', 'Prompt updates', 'Human-in-the-loop'], highlight: true },
  { name: 'Enterprise', price: '€18,500', monthly: '€3,700', desc: 'Full AI agent support for entire back-office.', features: ['Unlimited agents', 'Dedicated team', 'Proactive monitoring', '2h SLA', 'Custom integrations', 'Quarterly reviews', 'Team training'], highlight: false },
];

export default function EnAgents() {
  return (
    <div className="pt-24 pb-20">
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium bg-sky-500/10 text-sky-400 border border-sky-500/20 mb-6">
            ROI in 3 months
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">AI Agents</h1>
          <p className="text-xl text-steel-400 max-w-2xl mx-auto">
            AI agents that actually work in your back-office. With human-in-the-loop and full monitoring.
          </p>
        </div>
      </section>

      {/* Agents */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Our Agents" />
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
          <SectionHeading title="Implementation Process" />
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
                <div className="text-sm text-steel-400 mb-6">+ {p.monthly}/month</div>
                <p className="text-sm text-steel-400 mb-6">{p.desc}</p>
                <ul className="space-y-3 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-steel-300">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" /> {f}
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
