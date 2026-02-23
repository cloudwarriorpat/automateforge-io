import { Link } from '@tanstack/react-router';
import { ArrowRight, ArrowUpRight, Workflow, Brain, Code, Search } from 'lucide-react';
import { getFeaturedProducts, categoryMeta, type ServiceCategory } from '@/data/products';
import SectionHeading from '@/components/SectionHeading';

const categories: ServiceCategory[] = ['workflow', 'ai', 'custom-dev', 'process-audit'];
const KPIS = [
  { label: 'First automation live in', value: '5 days' },
  { label: 'Average project delivery', value: '2-4 weeks' },
  { label: 'Avg. time saved per team', value: '20+ hrs/week' },
];
const executionSteps = [
  {
    title: 'Discovery call',
    desc: 'We map your workflows, identify the highest-ROI automation opportunities, and define a clear scope with fixed deliverables.',
  },
  {
    title: 'Build sprint',
    desc: 'We build, test, and iterate on your automations in your environment. Weekly demos so you see progress, not just promises.',
  },
  {
    title: 'Handover + support',
    desc: 'You get documentation, training, and monitoring. Your team can maintain everything independently — no vendor lock-in.',
  },
];

const useCases = [
  { industry: 'E-commerce', task: 'Order processing, inventory sync, shipping notifications' },
  { industry: 'Finance', task: 'Invoice processing, expense categorization, reporting' },
  { industry: 'SaaS', task: 'Lead routing, onboarding flows, usage alerts' },
  { industry: 'Agencies', task: 'Client reporting, project intake, time tracking sync' },
  { industry: 'Healthcare', task: 'Appointment reminders, form processing, data sync' },
  { industry: 'Real Estate', task: 'Lead qualification, document collection, CRM updates' },
];

const toolLogos = [
  'Make.com', 'n8n', 'Zapier', 'Claude AI', 'GPT-4', 'Slack',
  'HubSpot', 'Airtable', 'Notion', 'Google Sheets', 'Jira', 'Asana',
];

export default function EnHome() {
  const featured = getFeaturedProducts();
  const iconMap: Record<ServiceCategory, typeof Workflow> = {
    workflow: Workflow,
    ai: Brain,
    'custom-dev': Code,
    'process-audit': Search,
  };

  return (
    <div className="pb-16">
      {/* Hero */}
      <section className="px-4 pt-32 pb-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-stretch gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="reveal">
              <span className="pill-badge">Business automation services</span>
              <h1 className="mt-6 text-4xl font-bold leading-tight text-steel-50 md:text-6xl">
                Stop doing manually what
                <span className="bg-gradient-to-r from-brand-300 via-brand-500 to-spark-400 bg-clip-text text-transparent"> machines should handle</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-steel-300 md:text-xl">
                Custom workflow automation, AI integration, and API development for teams that need reliable systems — not another SaaS subscription. Built by engineers, not marketers.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/en/services" className="cta-primary px-6 py-3 text-sm sm:text-base">
                  Explore services <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/en/contact" className="cta-secondary px-6 py-3 text-sm sm:text-base">
                  Book a free discovery call
                </Link>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {['Fixed scope, fixed price', 'Built by a DevOps engineer', 'No vendor lock-in'].map((item) => (
                  <div key={item} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-steel-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card reveal reveal-delay-1 p-7 md:p-8">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-spark-300">
                What you get
              </div>
              <p className="mt-3 text-sm text-steel-300">
                Typical outcomes from teams using AutomateForge automation services:
              </p>
              <div className="mt-6 space-y-4">
                {KPIS.map((kpi) => (
                  <div key={kpi.label} className="rounded-xl border border-white/10 bg-black/20 px-4 py-3">
                    <div className="text-xl font-bold text-steel-50">{kpi.value}</div>
                    <div className="text-sm text-steel-300">{kpi.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-xl border border-brand-300/30 bg-brand-500/12 px-4 py-3 text-sm text-brand-300">
                Every engagement includes documentation, training, and handover so your team owns the result.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="section-muted px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge="What we do"
            title="Four ways we eliminate manual work"
            subtitle="From no-code workflow automation to custom-built platforms — we match the solution to your problem."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {categories.map((cat, index) => {
              const meta = categoryMeta[cat];
              const Icon = iconMap[cat];
              return (
                <div key={cat} className={`glass-card-hover reveal p-6 ${index > 0 ? `reveal-delay-${Math.min(index, 3)}` : ''}`}>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-steel-50">{meta.label}</h3>
                  <p className="mt-2 text-sm text-steel-300">{meta.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integration Showcase */}
      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-10">
            <span className="pill-badge">Tools we work with</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {toolLogos.map((tool) => (
              <span key={tool} className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-steel-300">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge="Popular services"
            title="Most booked packages right now"
            subtitle="Pick a service and we can start delivery in days, not quarters."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {featured.map((p, index) => (
              <Link
                key={p.slug}
                to="/en/services/$slug"
                params={{ slug: p.slug }}
                className={`glass-card-hover reveal p-7 ${index > 0 ? `reveal-delay-${Math.min(index, 3)}` : ''}`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="pill-badge">{p.categoryLabel}</span>
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-steel-400">{p.timeline}</span>
                </div>
                <h3 className="mt-5 text-2xl font-bold text-steel-50">{p.name}</h3>
                <p className="mt-3 text-sm text-steel-300">{p.tagline}</p>
                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-lg font-bold text-brand-300">from {p.priceEur}</span>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-spark-300">
                    Details <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-muted px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge="Use cases"
            title="Automation across industries"
            subtitle="We've built automations for teams in these sectors and more."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((uc) => (
              <div key={uc.industry} className="glass-card p-5">
                <h3 className="text-base font-semibold text-steel-50">{uc.industry}</h3>
                <p className="mt-1 text-sm text-steel-300">{uc.task}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Execution Model */}
      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge="How we work"
            title="From discovery to delivery in three steps"
            subtitle="Clear milestones, weekly progress, and no surprises in scope or cost."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {executionSteps.map((step, index) => (
              <div key={step.title} className={`glass-card reveal p-6 ${index > 0 ? `reveal-delay-${Math.min(index, 3)}` : ''}`}>
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-500/15 text-brand-300 text-lg font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-steel-50">{step.title}</h3>
                <p className="mt-2 text-sm text-steel-300">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-4 pt-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="glass-card reveal p-10 md:p-12">
            <div className="grid items-center gap-8 md:grid-cols-[1.2fr_0.8fr]">
              <div>
                <h2 className="text-3xl font-bold text-steel-50 md:text-4xl">Ready to eliminate manual work?</h2>
                <p className="mt-4 text-lg text-steel-300">
                  Book a free 30-minute discovery call. We'll map your workflows and show you exactly what can be automated.
                </p>
              </div>
              <div className="flex justify-start md:justify-end">
                <Link to="/en/contact" className="cta-primary px-8 py-4 text-sm md:text-base">
                  Book discovery call <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
