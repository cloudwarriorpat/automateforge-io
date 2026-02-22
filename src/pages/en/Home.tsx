import { Link } from '@tanstack/react-router';
import { ArrowRight, ArrowUpRight, CheckCircle2, Lock, Rocket, Shield, TrendingDown } from 'lucide-react';
import { products, categoryMeta, type ProductCategory } from '@/data/products';
import SectionHeading from '@/components/SectionHeading';

const categories: ProductCategory[] = ['reliability', 'delivery', 'cost', 'security'];
const KPIS = [
  { label: 'Kickoff in', value: '5 days' },
  { label: 'Delivery window', value: '2-6 weeks' },
  { label: 'Avg. monthly savings', value: '18-32%' },
];
const executionSteps = [
  {
    title: 'Scope lock',
    desc: 'We map your current stack, define hard outcomes, and freeze scope so cost and timeline stay predictable.',
  },
  {
    title: 'Build sprint',
    desc: 'Senior engineers implement and test directly in your environment with visible weekly milestones.',
  },
  {
    title: 'Handover + hardening',
    desc: 'You get runbooks, metrics, and guardrails so your team can operate confidently without vendor lock-in.',
  },
];

export default function EnHome() {
  const featured = products.filter((p) => ['alert-fatigue-fix', 'pipeline-forge', 'cloud-cost-xray', 'container-hardening-kit'].includes(p.slug));
  const iconMap = { reliability: Shield, delivery: Rocket, cost: TrendingDown, security: Lock };

  return (
    <div className="pb-16">
      <section className="px-4 pt-32 pb-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-stretch gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="reveal">
              <span className="pill-badge">Productized DevOps delivery</span>
              <h1 className="mt-6 text-4xl font-bold leading-tight text-steel-50 md:text-6xl">
                Infrastructure upgrades that
                <span className="bg-gradient-to-r from-brand-300 via-brand-500 to-spark-400 bg-clip-text text-transparent"> ship and stick</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-steel-300 md:text-xl">
                Choose a fixed-scope product, skip endless discovery decks, and get a production-grade rollout with measurable impact.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/en/products" className="cta-primary px-6 py-3 text-sm sm:text-base">
                  Explore products <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/en/contact" className="cta-secondary px-6 py-3 text-sm sm:text-base">
                  Book discovery call
                </Link>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {['Zero hourly billing', 'Execution by seniors', 'Built for handover'].map((item) => (
                  <div key={item} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-steel-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card reveal reveal-delay-1 p-7 md:p-8">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-spark-300">
                Delivery scoreboard
              </div>
              <p className="mt-3 text-sm text-steel-300">
                Typical outcomes from teams using AutomateForge fixed-scope engagements:
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
                Includes delivery documentation, runbooks, and rollout ownership from kickoff to verification.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-muted px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge="Core capabilities"
            title="Built around the four hardest infrastructure problems"
            subtitle="Each product targets one bottleneck and ends with concrete operational assets."
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

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge="Flagship offers"
            title="Most booked products right now"
            subtitle="Pick a product and we can start delivery in days, not quarters."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {featured.map((p, index) => (
              <Link
                key={p.slug}
                to="/en/products/$slug"
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
                  <span className="text-lg font-bold text-brand-300">{p.priceEur}</span>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-spark-300">
                    Details <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-muted px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge="Execution model"
            title="One process from audit to adoption"
            subtitle="Clear milestones, weekly progress, and no surprises in scope."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {executionSteps.map((step, index) => (
              <div key={step.title} className={`glass-card reveal p-6 ${index > 0 ? `reveal-delay-${Math.min(index, 3)}` : ''}`}>
                <CheckCircle2 className="h-6 w-6 text-spark-300" />
                <h3 className="mt-4 text-xl font-semibold text-steel-50">{step.title}</h3>
                <p className="mt-2 text-sm text-steel-300">{step.desc}</p>
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
                <h2 className="text-3xl font-bold text-steel-50 md:text-4xl">Need stronger delivery this quarter?</h2>
                <p className="mt-4 text-lg text-steel-300">
                  Choose a product, schedule the kickoff, and get a hard execution plan with exact deliverables.
                </p>
              </div>
              <div className="flex justify-start md:justify-end">
                <Link to="/en/contact" className="cta-primary px-8 py-4 text-sm md:text-base">
                  Talk to engineering <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
