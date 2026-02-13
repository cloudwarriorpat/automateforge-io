const cases = [
  {
    tag: "E-Commerce · Series A",
    title: "14 Fragile Zaps → 4 Monitored Pipelines",
    problem:
      "An e-commerce company processing 2,000+ orders/day had 14 Zapier flows duct-taped together between Shopify, their warehouse management system, and accounting software. When Black Friday traffic hit 4x normal volume, three Zaps failed silently. 340 orders shipped with wrong items. $47K in returns.",
    solution:
      "4 production pipelines with: webhook queuing for traffic spikes, idempotent processing (no duplicate orders), automated inventory reconciliation every 15 minutes, real-time Slack alerts for anomalies, and a fallback path that queues orders for manual review instead of dropping them.",
    metrics: [
      { label: "Pipeline uptime", value: "99.94%" },
      { label: "Data sync errors", value: "23/wk → 0" },
      { label: "Manual intervention", value: "23h → 45min/wk" },
      { label: "Black Friday Y2", value: "8,400 orders · 0 errors" },
    ],
    quote: "We went from dreading peak traffic to not even thinking about it. The system just handles it.",
    quoteAuthor: "Head of Operations",
  },
  {
    tag: "SaaS · B2B · 80 employees",
    title: "Lead Response Time: 4 Hours → 87 Seconds",
    problem:
      "A B2B SaaS company received leads from 5 channels into a shared inbox. A sales ops person manually scored, enriched, routed, and assigned each lead. Average first response: 4 hours. During launches: 11 hours.",
    solution:
      "An AI-powered lead processing pipeline: webhook intake from all 5 sources → automatic enrichment (Clearbit + LinkedIn) → AI scoring trained on historical close data → intelligent routing → personalized first-touch email queued for rep approval → CRM updated with full context.",
    metrics: [
      { label: "First response", value: "4h → 87s" },
      { label: "Demos booked", value: "3.2x increase" },
      { label: "Rep admin time", value: "12h → 2h/wk" },
      { label: "Monthly AI cost", value: "$890" },
    ],
    quote: "Our sales team actually sells now instead of sorting spreadsheets.",
    quoteAuthor: "VP Sales",
  },
  {
    tag: "Agency · 35 employees",
    title: "Client Onboarding: 4.5 Hours → 6 Minutes",
    problem:
      "A digital agency onboarded 8-12 new clients per month. Each onboarding required creating accounts in 7 tools, sending 5 templated emails, building a folder structure, setting up billing, and more. 4.5 hours per client. Frequent errors.",
    solution:
      "A single-trigger onboarding pipeline: one intake form → accounts created across 7 tools via API → branded welcome packet → billing setup → project structure → sequenced welcome emails → all tracking systems updated → confirmation to account manager.",
    metrics: [
      { label: "Onboarding time", value: "4.5h → 6min" },
      { label: "Setup errors", value: "2-3/client → 0" },
      { label: "Capacity", value: "3x more clients" },
      { label: "NPS (onboarding)", value: "42 → 78" },
    ],
    quote: "Our clients think we have a huge ops team. It's one form and a pipeline.",
    quoteAuthor: "Managing Director",
  },
];

export default function CaseStudies() {
  return (
    <section className="section bg-[var(--color-bg-secondary)]" id="case-studies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">
          Production Results,{" "}
          <span className="gradient-text">Not Demo Screenshots</span>
        </h2>

        <div className="mt-14 space-y-8">
          {cases.map((c) => (
            <div key={c.title} className="glass rounded-xl overflow-hidden">
              <div className="p-6 sm:p-8">
                <span className="status-badge bg-[var(--color-bg-tertiary)] text-[var(--color-accent)] border border-[var(--color-border)] mb-4 inline-block">
                  {c.tag}
                </span>
                <h3 className="text-2xl font-bold mt-2">{c.title}</h3>

                <div className="mt-6 grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xs font-mono text-[var(--color-error)] uppercase tracking-wider mb-2">The Problem</h4>
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{c.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-[var(--color-success)] uppercase tracking-wider mb-2">What We Built</h4>
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{c.solution}</p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {c.metrics.map((m) => (
                    <div key={m.label} className="bg-[var(--color-bg-tertiary)] rounded-lg p-3 border border-[var(--color-border)]">
                      <div className="font-mono text-lg font-bold gradient-text">{m.value}</div>
                      <div className="text-xs text-[var(--color-text-muted)] mt-1">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Quote */}
                <div className="mt-6 border-l-2 border-[var(--color-accent)] pl-4">
                  <p className="text-sm text-[var(--color-text-secondary)] italic">&ldquo;{c.quote}&rdquo;</p>
                  <p className="text-xs text-[var(--color-text-muted)] mt-1">— {c.quoteAuthor}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="#cta" className="btn-gradient px-8 py-3 inline-flex items-center gap-2">
            Want Results Like These? Start With a Free Review →
          </a>
        </div>
      </div>
    </section>
  );
}
