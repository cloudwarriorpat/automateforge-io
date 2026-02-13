import { Check, X } from "lucide-react";

const rows = [
  { dimension: "Error handling", typical: "\"It should work\"", forge: "Retry logic, fallbacks, dead letter queues" },
  { dimension: "Monitoring", typical: "Check manually when something seems off", forge: "Real-time dashboards, alerting, anomaly detection" },
  { dimension: "Documentation", typical: "A Loom video from 6 months ago", forge: "Architecture diagrams, runbooks, decision logs" },
  { dimension: "Scalability", typical: "Hits rate limits at 2x volume", forge: "Load-tested to 10x current throughput" },
  { dimension: "Testing", typical: "\"We ran it once\"", forge: "Staging environment, edge case testing" },
  { dimension: "Handoff", typical: "\"Here's your Zapier login\"", forge: "Full documentation, team training, runbooks" },
  { dimension: "When it breaks", typical: "\"Let me check... can you resend?\"", forge: "Auto-retry fires, alert sent, incident logged" },
  { dimension: "Who built it", typical: "Marketing ops person with Zapier Pro", forge: "Engineers with DevOps & SRE backgrounds" },
];

export default function Comparison() {
  return (
    <section className="section bg-[var(--color-bg-secondary)]" id="difference">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center">
          No-Code Tinkering vs.{" "}
          <span className="gradient-text">Automation Engineering</span>
        </h2>

        <div className="mt-12 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[var(--color-border)]">
                <th className="text-left py-4 px-3 text-[var(--color-text-muted)] font-mono text-xs uppercase tracking-wider">Dimension</th>
                <th className="text-left py-4 px-3 text-[var(--color-text-muted)] font-mono text-xs uppercase tracking-wider">Typical Agency</th>
                <th className="text-left py-4 px-3 text-[var(--color-text-muted)] font-mono text-xs uppercase tracking-wider">
                  <span className="gradient-text">AutomateForge</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.dimension} className="border-b border-[var(--color-border)] hover:bg-[var(--color-bg-tertiary)] transition-colors">
                  <td className="py-4 px-3 font-medium text-[var(--color-text-primary)]">{row.dimension}</td>
                  <td className="py-4 px-3 text-[var(--color-text-muted)]">
                    <span className="flex items-start gap-2">
                      <X size={14} className="text-[var(--color-error)] mt-0.5 shrink-0" />
                      {row.typical}
                    </span>
                  </td>
                  <td className="py-4 px-3 text-[var(--color-text-secondary)]">
                    <span className="flex items-start gap-2">
                      <Check size={14} className="text-[var(--color-success)] mt-0.5 shrink-0" />
                      {row.forge}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-8 text-sm text-[var(--color-text-muted)] text-center max-w-2xl mx-auto italic">
          We&apos;re not against no-code tools. We use Make and n8n every day. But we use them like
          engineers use any tool — with proper architecture, testing, and operational practices around them.
        </p>
      </div>
    </section>
  );
}
