"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "We already have automations in Zapier/Make. Why would we rebuild them?",
    a: "You probably shouldn't rebuild all of them. Some Zaps work fine and should stay. Our architecture review identifies which automations are actually at risk — the ones handling critical data, running at scale, or lacking any monitoring. We only rebuild what needs engineering. Everything else stays.",
  },
  {
    q: "What's your stack? Are you locked into specific tools?",
    a: "We're tool-pragmatic, not tool-religious. Primary platforms: Make.com and n8n (self-hosted or cloud). We also build with custom Python/Node.js for complex logic, OpenAI and Anthropic APIs for AI agents, and any tool with a REST API or webhook. We pick whatever runs best for your use case. You own everything we build.",
  },
  {
    q: "What does 'monitoring' actually mean in practice?",
    a: "Every pipeline ships with: real-time status dashboards (we typically use Grafana or custom), alerting on failures, anomalies, and performance degradation (Slack, email, PagerDuty — your choice), execution logging for debugging, and a runbook that tells your team exactly what to do when an alert fires. You'll know about failures before your customers do.",
  },
  {
    q: "How is this different from hiring a full-time automation engineer?",
    a: "Cost comparison: a mid-level automation engineer in the US costs $120-160K/year loaded. Our Foundry tier costs $60K/year and comes with senior-level expertise, established patterns, and immediate productivity — no 3-month ramp-up. For project work, our Spark tier costs less than two weeks of that engineer's salary.",
  },
  {
    q: "What if something breaks at 2am?",
    a: "Foundry clients get 48-hour SLA responses and we monitor proactively — we often fix issues before you report them. All other tiers: every pipeline includes automated retry logic and alerting. Most failures auto-recover. If manual intervention is needed, the alert includes a link to the specific runbook.",
  },
  {
    q: "Can we see the code/logic? Do we own what you build?",
    a: "Absolutely, and this is non-negotiable for us. Everything we build lives in your accounts, on your infrastructure. We provide full documentation, architecture diagrams, and operational runbooks. If you fire us tomorrow, your automations keep running and your team knows how to maintain them. Zero vendor lock-in.",
  },
  {
    q: "We've been burned by agencies before.",
    a: "Three things we do differently: (1) You see working automation in weeks, not a PowerPoint in months. (2) Every pipeline ships with monitoring — you can verify it's working in real-time. (3) The architecture review is free and the document is yours regardless. If the review doesn't impress you, we part ways and you've lost zero dollars.",
  },
  {
    q: "What about data security and compliance?",
    a: "We sign NDAs before seeing any data. We work within your existing security perimeter — data stays in your systems. We support SOC 2 and GDPR-compliant architecture patterns. For sensitive workflows, we can build entirely on self-hosted n8n within your own cloud environment.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center">
          Reasonable Questions From{" "}
          <span className="gradient-text">Skeptical Engineers</span>
        </h2>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="glass rounded-xl overflow-hidden transition-all duration-300">
              <button
                className="w-full flex items-center justify-between p-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-sm font-medium pr-4">{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-[var(--color-text-muted)] transition-transform duration-300 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-5">
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
