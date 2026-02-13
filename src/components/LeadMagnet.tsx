import { BookOpen, Shield, BarChart3, CheckSquare } from "lucide-react";

const items = [
  { icon: BookOpen, text: "Pipeline Design Patterns — 6 architectural patterns for common use cases" },
  { icon: Shield, text: "The Error Handling Playbook — retry strategies, dead letter queues, graceful degradation" },
  { icon: BarChart3, text: "Monitoring & Alerting Setup — what to measure, where to alert, how to set thresholds" },
  { icon: CheckSquare, text: "The Handoff Checklist — everything a pipeline needs before it's \"production-ready\"" },
];

export default function LeadMagnet() {
  return (
    <section className="section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-2xl p-8 sm:p-12 glow-border">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold">
              Free Download:{" "}
              <span className="gradient-text">The Automation Architecture Guide</span>
            </h2>
            <p className="mt-3 text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              The framework we use internally to design production-grade automations. Covers pipeline
              patterns, error handling, monitoring, documentation standards, and scaling principles.
            </p>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {items.map((item) => (
              <div key={item.text} className="flex items-start gap-3">
                <item.icon className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                <p className="text-sm text-[var(--color-text-secondary)]">{item.text}</p>
              </div>
            ))}
          </div>

          <form className="mt-8 grid sm:grid-cols-2 gap-4 max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Name"
              className="bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-lg px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent)] focus:outline-none transition-colors"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-lg px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent)] focus:outline-none transition-colors"
            />
            <input
              type="text"
              placeholder="Company (optional)"
              className="sm:col-span-2 bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-lg px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent)] focus:outline-none transition-colors"
            />
            <button type="submit" className="sm:col-span-2 btn-gradient py-3 text-sm">
              Download the Guide →
            </button>
          </form>

          <p className="mt-4 text-xs text-[var(--color-text-muted)] text-center">
            Downloaded by 500+ engineering and ops leaders
          </p>
        </div>
      </div>
    </section>
  );
}
