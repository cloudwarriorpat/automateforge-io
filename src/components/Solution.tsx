import { GitBranch, Network, Brain } from "lucide-react";

const pillars = [
  {
    icon: GitBranch,
    title: "Automation Pipelines",
    tag: "Every pipeline ships with runbooks.",
    description:
      "End-to-end workflow automation designed for production. Every pipeline includes error handling, retry logic, dead letter queues, and monitoring from day one. Not 'set and forget' — set and observe.",
    example:
      "A FinTech client's KYC pipeline processes 400+ verifications/day across 3 APIs. When one provider's API goes down, the fallback kicks in within 8 seconds. Their ops team gets a Slack alert, not a customer complaint.",
  },
  {
    icon: Network,
    title: "System Integration Architecture",
    tag: "We map data flows before writing a single scenario.",
    description:
      "We design integration architectures that handle your current scale and your next 10x. Your CRM, billing, warehouse, support desk, and analytics stack — properly connected with data validation at every junction.",
    example:
      "An e-commerce scale-up had 14 disconnected Zapier flows between Shopify, their WMS, and NetSuite. We replaced them with 4 monitored pipelines. Data sync errors dropped from 23/week to zero.",
  },
  {
    icon: Brain,
    title: "AI Agent Deployment",
    tag: "AI with guardrails, not AI with crossed fingers.",
    description:
      "Custom AI agents for document processing, lead qualification, email triage, and decision support — deployed as production services with input validation, output guardrails, cost monitoring, and human-in-the-loop escalation.",
    example:
      "A SaaS company's AI agent triages 200+ support tickets daily, auto-resolving 43% before a human sees them. Escalation accuracy: 97%. Monthly AI cost: $340.",
  },
];

export default function Solution() {
  return (
    <section className="section" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">
          Automation Engineering:{" "}
          <span className="gradient-text">Built Like Infrastructure</span>
        </h2>
        <p className="mt-4 text-lg text-[var(--color-text-secondary)] text-center max-w-3xl mx-auto">
          We apply the same principles that keep cloud infrastructure running 24/7 to your business
          automations. Monitoring. Error handling. Documentation. Versioning. The works.
        </p>

        <div className="mt-14 grid lg:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="glass glass-hover rounded-xl p-6 flex flex-col transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-[var(--color-bg-tertiary)] border border-[var(--color-border)] flex items-center justify-center mb-5">
                <p.icon className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-xl font-bold">{p.title}</h3>
              <span className="inline-block mt-2 text-xs font-mono text-[var(--color-cyan)] bg-[var(--color-bg-tertiary)] px-3 py-1 rounded-full w-fit">
                {p.tag}
              </span>
              <p className="mt-4 text-sm text-[var(--color-text-secondary)] leading-relaxed flex-1">
                {p.description}
              </p>
              <div className="mt-5 pt-5 border-t border-[var(--color-border)]">
                <p className="text-xs text-[var(--color-text-muted)] italic leading-relaxed">
                  {p.example}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
