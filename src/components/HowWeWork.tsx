import { Search, Pencil, Terminal, BarChart3 } from "lucide-react";

const phases = [
  {
    icon: Search,
    phase: "01",
    title: "DISCOVER",
    subtitle: "Free Architecture Review",
    description:
      "We map your current automation stack, identify failure points, measure actual throughput, and document what's undocumented. You get a written Architecture Review with risk assessment and ROI projections.",
    duration: "48-72 hours",
    deliverable: "Architecture Review Document (yours to keep regardless)",
  },
  {
    icon: Pencil,
    phase: "02",
    title: "DESIGN",
    subtitle: "Blueprint & Contract",
    description:
      "We design the target architecture: data flows, error handling strategies, monitoring approach, integration points. You review and approve before we write a single line of logic.",
    duration: "3-5 days",
    deliverable: "Automation Architecture Blueprint",
  },
  {
    icon: Terminal,
    phase: "03",
    title: "BUILD",
    subtitle: "Engineering Sprint",
    description:
      "We build in 1-2 week sprints with daily async updates. Every pipeline is built in a staging environment first, tested against edge cases, and load-tested before touching production data.",
    duration: "1-3 weeks per sprint",
    deliverable: "Working pipelines in staging → production",
  },
  {
    icon: BarChart3,
    phase: "04",
    title: "OPERATE",
    subtitle: "Launch & Observe",
    description:
      "We deploy to production, monitor for 2 weeks minimum, tune performance, train your team, and hand over complete operational documentation. No vendor lock-in.",
    duration: "2 weeks observation + training",
    deliverable: "Runbooks, monitoring dashboards, team training",
  },
];

export default function HowWeWork() {
  return (
    <section className="section" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">
          From Architecture Review to Production in{" "}
          <span className="gradient-text">2-4 Weeks</span>
        </h2>
        <p className="mt-4 text-lg text-[var(--color-text-secondary)] text-center max-w-2xl mx-auto">
          No 6-month enterprise rollouts. No consultant theater. Ship fast, monitor everything,
          iterate based on data.
        </p>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((p, i) => (
            <div key={p.phase} className="relative">
              {/* Connector line */}
              {i < phases.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-6 h-0.5 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-cyan)]" />
              )}
              <div className="glass glass-hover rounded-xl p-6 h-full transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6C5CE7] to-[#00D2FF] flex items-center justify-center">
                    <p.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-mono text-xs text-[var(--color-text-muted)]">{p.phase}</span>
                </div>
                <h3 className="font-bold text-lg">{p.title}</h3>
                <p className="text-xs text-[var(--color-accent)] font-medium mt-1">{p.subtitle}</p>
                <p className="mt-3 text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {p.description}
                </p>
                <div className="mt-4 pt-4 border-t border-[var(--color-border)] space-y-2">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-[var(--color-text-muted)]">Duration:</span>
                    <span className="font-mono text-[var(--color-cyan)]">{p.duration}</span>
                  </div>
                  <div className="text-xs text-[var(--color-text-muted)]">
                    → {p.deliverable}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-[var(--color-text-muted)]">
          Total timeline: <span className="text-[var(--color-text-primary)] font-semibold">2-6 weeks</span> from
          review to production. Most single pipelines ship in under 3 weeks.
        </p>
      </div>
    </section>
  );
}
