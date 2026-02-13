import { Award, Cloud, Users, Building } from "lucide-react";

const credentials = [
  { icon: Award, text: "10+ years DevOps & Cloud Engineering" },
  { icon: Cloud, text: "AWS / Azure / GCP certified" },
  { icon: Users, text: "30+ companies' automation stacks engineered" },
  { icon: Building, text: "Previously: CloudWarrior.io (DevOps consultancy)" },
];

export default function About() {
  return (
    <section className="section bg-[var(--color-bg-secondary)]" id="about">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center">
          Built by Infrastructure Engineers Who Got Tired of{" "}
          <span className="gradient-text">Watching Automations Fail</span>
        </h2>

        <div className="mt-10 space-y-6 text-[var(--color-text-secondary)] leading-relaxed">
          <p>
            I spent over a decade in DevOps and cloud engineering — building infrastructure that runs
            24/7 without intervention. Self-healing servers. Blue-green deployments. Monitoring that
            alerts on anomalies, not just failures. Systems designed to handle 10x traffic without
            anyone waking up.
          </p>
          <p>
            Then I started looking at how businesses automate their operations. And I couldn&apos;t
            believe what I saw. Critical business processes running on single-point-of-failure Zapier
            flows with zero monitoring. &ldquo;Automations&rdquo; that silently fail for days. Data
            pipelines held together with Google Sheets and prayers. No documentation. No error
            handling. No testing. Production workloads on prototype infrastructure.
          </p>
          <p>
            That&apos;s why AutomateForge exists. We take the same engineering discipline that keeps
            AWS and Azure running and apply it to your business operations. Because if your order
            pipeline deserves the same reliability as your deployment pipeline, it should be built the
            same way.
          </p>
        </div>

        <p className="mt-6 text-sm text-[var(--color-text-muted)]">
          — Patryk, Founder & Lead Automation Engineer
        </p>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {credentials.map((c) => (
            <div
              key={c.text}
              className="glass rounded-lg p-4 text-center"
            >
              <c.icon className="w-5 h-5 text-[var(--color-accent)] mx-auto mb-2" />
              <p className="text-xs text-[var(--color-text-secondary)]">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
