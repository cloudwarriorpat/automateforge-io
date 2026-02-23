import { Link } from '@tanstack/react-router';
import { Mail, FileText, Target, CheckCircle2, Eye, Brain, Cog, BarChart3, Shield } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const AGENTS = [
  { icon: Mail, title: 'Email Triage Agent', desc: 'Classifies incoming emails, extracts key data, creates tasks in your PM tool, and routes to the right person — with human review for edge cases.', tools: ['Gmail', 'Outlook', 'Slack', 'Jira', 'Linear'] },
  { icon: Target, title: 'Lead Qualification Agent', desc: 'Researches companies, scores leads against your ICP, enriches data, and routes qualified prospects to sales with full context.', tools: ['HubSpot', 'Pipedrive', 'Apollo', 'LinkedIn', 'Slack'] },
  { icon: FileText, title: 'Document Processing Agent', desc: 'Extracts structured data from invoices, contracts, and reports. OCR for scanned docs, validation rules, and direct ERP integration.', tools: ['PDF', 'OCR', 'Google Sheets', 'ERP', 'Airtable'] },
];

const PROCESS = [
  { icon: Eye, title: 'Discovery', desc: 'We map your processes and identify agents with the highest ROI potential.' },
  { icon: Brain, title: 'Design', desc: 'Define prompts, data flows, quality metrics, and human escalation points.' },
  { icon: Cog, title: 'Build & Test', desc: 'Build the agent, test on real data, iterate until quality thresholds are met.' },
  { icon: BarChart3, title: 'Monitor & Improve', desc: 'Quality tracking, prompt versioning, and monthly performance reports.' },
];

const PRICING = [
  { name: 'Single Agent', price: '€3,500', monthly: '€500', desc: '1 AI agent with monitoring and documentation.', features: ['1 production AI agent', 'Human-in-the-loop workflow', 'Classification accuracy dashboard', 'Documentation and prompt guide', 'Email support'], highlight: false },
  { name: 'Multi-Agent', price: '€8,500', monthly: '€1,500', desc: 'Up to 3 agents with advanced monitoring.', features: ['Up to 3 AI agents', 'Custom prompt engineering', 'Unified monitoring dashboard', 'Slack/Teams integration', 'Monthly performance reports', 'Prompt versioning system'], highlight: true },
  { name: 'AI Operations', price: '€18,500', monthly: '€3,000', desc: 'Full AI agent deployment across your operations.', features: ['Up to 5 AI agents', 'Dedicated engineer', 'Governance framework', 'Quality SLA', 'Team training (half-day)', 'Quarterly strategy reviews', 'Custom integrations'], highlight: false },
];

export default function EnAgents() {
  return (
    <div className="pt-24 pb-20">
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium bg-sky-500/10 text-sky-400 border border-sky-500/20 mb-6">
            Production-grade AI, not prototypes
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">AI Integration Services</h1>
          <p className="text-xl text-steel-400 max-w-2xl mx-auto">
            AI agents that actually work in your operations — with human-in-the-loop oversight, monitoring, and production-grade reliability. Built by engineers, not prompt influencers.
          </p>
        </div>
      </section>

      {/* Agents */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="AI Agent Types" subtitle="Purpose-built agents for common back-office workflows." />
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

      {/* Guardrails */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-10">
            <div className="flex items-start gap-4">
              <Shield className="w-8 h-8 text-sky-400 shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-white mb-3">Human-in-the-loop by default</h2>
                <p className="text-steel-400 mb-4">
                  Every AI agent includes confidence thresholds and escalation workflows. When the agent is uncertain, it routes to a human reviewer. Your data stays private — we use enterprise AI APIs with no training on your data, and can deploy on your infrastructure when required.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {['Confidence-based escalation', 'Audit trail for every decision', 'Prompt versioning and rollback', 'Data privacy controls'].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-steel-300">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" /> {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
          <SectionHeading title="Pricing" subtitle="One-time build fee + optional monthly monitoring." />
          <div className="grid md:grid-cols-3 gap-6">
            {PRICING.map((p) => (
              <div key={p.name} className={`glass-card p-8 ${p.highlight ? 'border-brand-500/30 ring-1 ring-brand-500/20' : ''}`}>
                {p.highlight && <span className="text-xs text-brand-400 font-medium">Most Popular</span>}
                <h3 className="text-2xl font-bold text-white mt-1">{p.name}</h3>
                <div className="mt-4 mb-2">
                  <span className="text-3xl font-bold text-white">{p.price}</span>
                  <span className="text-sm text-steel-400"> one-time</span>
                </div>
                <div className="text-sm text-steel-400 mb-6">+ {p.monthly}/month monitoring</div>
                <p className="text-sm text-steel-400 mb-6">{p.desc}</p>
                <ul className="space-y-3 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-steel-300">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" /> {f}
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
