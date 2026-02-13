import { AlertTriangle, UserX, Shuffle, TrendingUp } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    status: "CRITICAL",
    statusColor: "text-[var(--color-error)]",
    dotColor: "bg-[var(--color-error)] pulse-red",
    title: "The Silent Failures",
    description:
      "Your Zapier flow failed 3 days ago. Nobody noticed until a customer asked why they never got their onboarding email. There's no monitoring. No alerts. No fallback. Just hope.",
  },
  {
    icon: UserX,
    status: "CRITICAL",
    statusColor: "text-[var(--color-error)]",
    dotColor: "bg-[var(--color-error)] pulse-red",
    title: "The One-Person Dependency",
    description:
      "One person on your team understands how the automations work. They built them in their personal Zapier account. They're on vacation next week. Good luck.",
  },
  {
    icon: Shuffle,
    status: "WARNING",
    statusColor: "text-[var(--color-warning)]",
    dotColor: "bg-[var(--color-warning)]",
    title: "The Spaghetti Integrations",
    description:
      "You have 14 Zaps, 8 Make scenarios, 3 custom scripts someone wrote and left, and a Google Sheet that's load-bearing. Nobody knows how they connect. Nobody wants to touch them.",
  },
  {
    icon: TrendingUp,
    status: "WARNING",
    statusColor: "text-[var(--color-warning)]",
    dotColor: "bg-[var(--color-warning)]",
    title: "The Scale Wall",
    description:
      "You hit Zapier's rate limits during a product launch. Your webhook queue backed up. Orders got duplicated. Your ops team spent the weekend doing manual cleanup instead of celebrating.",
  },
];

export default function Problem() {
  return (
    <section className="section relative" id="problem">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">
          Your &ldquo;Automations&rdquo; Are Actually{" "}
          <span className="gradient-text">Liabilities</span>
        </h2>
        <p className="mt-4 text-lg text-[var(--color-text-secondary)] text-center max-w-2xl mx-auto">
          They worked when you had 50 customers. Now you have 500. And things are breaking.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {problems.map((p) => (
            <div key={p.title} className="glass glass-hover rounded-xl p-6 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <span className={`w-2.5 h-2.5 rounded-full ${p.dotColor}`} />
                <span className={`text-xs font-mono font-bold ${p.statusColor}`}>{p.status}</span>
              </div>
              <div className="flex items-start gap-3">
                <p.icon className="w-5 h-5 text-[var(--color-text-muted)] mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">{p.title}</h3>
                  <p className="mt-2 text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Code comment transition */}
        <div className="mt-12 terminal max-w-2xl mx-auto">
          <div className="p-5 text-[var(--color-text-muted)] text-sm leading-relaxed">
            <p>{"// This isn't a people problem. It's an architecture problem."}</p>
            <p>{"// You're running production workloads on prototype infrastructure."}</p>
            <p className="text-[var(--color-cyan)]">{"// There's a better way to build this."}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
