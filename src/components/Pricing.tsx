import { Check, Zap, Flame, Building } from "lucide-react";

const tiers = [
  {
    icon: Zap,
    name: "SPARK",
    subtitle: "Single Pipeline",
    price: "From $3,500",
    timeline: "2-3 weeks",
    forText: "One critical workflow that needs to stop breaking",
    features: [
      "Free Architecture Review (48-72 hrs)",
      "1 production-grade automation pipeline",
      "Error handling & retry logic",
      "Monitoring dashboard + alerting",
      "Operational runbook & documentation",
      "Team training session (recorded)",
      "30 days post-launch monitoring & support",
    ],
    roi: "Pipeline pays for itself within 4-6 weeks.",
    cta: "Start With Free Review",
    highlighted: false,
  },
  {
    icon: Flame,
    name: "FORGE",
    subtitle: "Full Stack Automation",
    price: "From $12,000",
    timeline: "4-8 weeks",
    forText: "Multiple interconnected workflows across your operations",
    features: [
      "Everything in Spark, plus:",
      "Up to 10 connected automation pipelines",
      "Full system integration architecture design",
      "AI agent setup (lead processing, docs, or support)",
      "Centralized monitoring dashboard",
      "Load testing to 10x current throughput",
      "60 days post-launch support",
      "Monthly optimization review (3 months)",
    ],
    bonus: "Automation Playbook — Complete architectural documentation of your entire automation stack.",
    roi: "Clients save 25-40 hrs/week = $75,000-$150,000/year in recovered capacity.",
    cta: "Get Your Free Review",
    highlighted: true,
  },
  {
    icon: Building,
    name: "FOUNDRY",
    subtitle: "Dedicated Automation Engineer",
    price: "From $5,000/mo",
    timeline: "Ongoing",
    forText: "Growing companies that need continuous automation as they scale",
    features: [
      "Everything in Forge, plus:",
      "Dedicated automation engineer in your team",
      "Unlimited pipeline builds & modifications",
      "Weekly strategy syncs",
      "Proactive monitoring & incident response (48h SLA)",
      "New automation opportunities identified monthly",
      "Quarterly architecture review & optimization",
      "Slack/Teams channel for direct access",
    ],
    roi: "First month at 50% — we prove value before you commit. Replaces $12K-$18K/mo in ops headcount.",
    cta: "Book a Strategy Call",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">
          Transparent Pricing.{" "}
          <span className="gradient-text">No Discovery Phase Invoices.</span>
        </h2>
        <p className="mt-4 text-lg text-[var(--color-text-secondary)] text-center max-w-2xl mx-auto">
          Every engagement starts with a free architecture review. You see the blueprint and ROI
          projection before spending a dollar.
        </p>

        <div className="mt-14 grid lg:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`rounded-xl p-6 flex flex-col transition-all duration-300 ${
                t.highlighted
                  ? "border-2 border-[var(--color-accent)] glow-accent bg-[var(--color-bg-secondary)]"
                  : "glass glass-hover"
              }`}
            >
              {t.highlighted && (
                <span className="text-xs font-mono text-[var(--color-accent)] font-bold mb-3">⚡ RECOMMENDED</span>
              )}
              <div className="flex items-center gap-3 mb-2">
                <t.icon className="w-5 h-5 text-[var(--color-accent)]" />
                <h3 className="font-bold text-xl">{t.name}</h3>
              </div>
              <p className="text-sm text-[var(--color-text-muted)]">{t.subtitle}</p>
              <div className="mt-4 mb-2">
                <span className="text-3xl font-bold font-mono gradient-text">{t.price}</span>
              </div>
              <p className="text-xs text-[var(--color-text-muted)] mb-1">Timeline: {t.timeline}</p>
              <p className="text-sm text-[var(--color-text-secondary)] mb-6">{t.forText}</p>

              <ul className="space-y-3 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                    <Check size={14} className="text-[var(--color-success)] mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              {t.bonus && (
                <div className="mt-4 p-3 bg-[var(--color-bg-tertiary)] rounded-lg border border-[var(--color-border)]">
                  <p className="text-xs text-[var(--color-cyan)] font-semibold">BONUS</p>
                  <p className="text-xs text-[var(--color-text-muted)] mt-1">{t.bonus}</p>
                </div>
              )}

              <p className="mt-4 text-xs text-[var(--color-text-muted)] italic">{t.roi}</p>

              <a
                href="#cta"
                className={`mt-6 block text-center py-3 rounded-full font-semibold text-sm transition-all ${
                  t.highlighted ? "btn-gradient" : "btn-ghost"
                }`}
              >
                {t.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-[var(--color-text-muted)] text-center max-w-xl mx-auto">
          Not sure which tier? Every engagement starts with a free architecture review. We&apos;ll tell
          you exactly what you need — even if the answer is &ldquo;you&apos;re fine for now.&rdquo;
        </p>
      </div>
    </section>
  );
}
