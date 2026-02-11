import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Flame, Target, Zap, Shield, Users, Globe, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "AutomateForge is a productized platform engineering studio. We deliver fixed-scope infrastructure and compliance packages to European engineering teams.",
};

export default function AboutPage() {
  return (
    <div className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-forge-500/20 bg-forge-500/5 px-4 py-1.5">
            <Flame className="h-3.5 w-3.5 text-forge-500" />
            <span className="text-xs font-semibold tracking-wide text-forge-400">
              About AutomateForge
            </span>
          </div>
          <h1 className="mt-6 text-3xl font-extrabold text-ash-100 sm:text-4xl">
            Platform engineering you can ship with.
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-ash-400">
            AutomateForge is a productized platform engineering studio. We
            deliver fixed-scope packages to European engineering teams that need
            developer platforms, compliance automation, and production-grade
            infrastructure — in days, not months.
          </p>
        </div>

        {/* Story */}
        <section className="mt-16">
          <h2 className="text-xl font-bold text-ash-100">
            Why we exist
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-ash-400">
            <p>
              European engineering teams face a unique challenge: build fast,
              stay compliant, and do it all with lean teams. NIS2, DORA, the
              EU AI Act — regulatory pressure is rising while talent remains
              scarce.
            </p>
            <p>
              Most consulting engagements follow the same pattern: weeks of
              discovery, months of implementation, scope that expands with
              every meeting, and bills that grow faster than progress.
            </p>
            <p>
              We built AutomateForge because platform engineering work can be
              scoped, delivered, and handed off like any other engineering
              project. Fixed inputs. Fixed outputs. Fixed timeline. You keep
              everything we build.
            </p>
          </div>
        </section>

        {/* Principles */}
        <section className="mt-16">
          <h2 className="text-xl font-bold text-ash-100">
            How we operate
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              {
                icon: <Target className="h-5 w-5" />,
                title: "Fixed scope, always",
                description:
                  "Every engagement starts with a scope document. What's in, what's out, what you'll get, and when. No surprises, no consulting fog.",
              },
              {
                icon: <Zap className="h-5 w-5" />,
                title: "Speed over ceremony",
                description:
                  "We skip the slide decks and workshops. You get infrastructure, not presentations. Delivery starts within days of signing.",
              },
              {
                icon: <Shield className="h-5 w-5" />,
                title: "You own everything",
                description:
                  "Every line of code, every configuration, every document. Full ownership, no lock-in, no recurring dependency on us.",
              },
              {
                icon: <Users className="h-5 w-5" />,
                title: "Knowledge transfer built in",
                description:
                  "We don't build black boxes. Every delivery includes documentation, runbooks, and a walkthrough so your team can operate independently.",
              },
              {
                icon: <Globe className="h-5 w-5" />,
                title: "EU-native compliance",
                description:
                  "NIS2, DORA, EU AI Act — compliance is woven into every package, not bolted on. We understand the regulatory landscape European teams face.",
              },
              {
                icon: <Scale className="h-5 w-5" />,
                title: "Open-source first",
                description:
                  "Backstage, Crossplane, ArgoCD, Prometheus — we build on CNCF-grade tools. No proprietary platforms, no vendor lock-in.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slab-700 bg-slab-900/50 p-5"
              >
                <div className="text-forge-500">{item.icon}</div>
                <h3 className="mt-3 text-base font-bold text-ash-100">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ash-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Tooling */}
        <section className="mt-16">
          <h2 className="text-xl font-bold text-ash-100">
            Our stack
          </h2>
          <p className="mt-3 text-base text-ash-400">
            We work with open, battle-tested CNCF and cloud-native tools.
            No proprietary platforms, no vendor lock-in.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Backstage",
              "Crossplane",
              "Terraform",
              "OpenTofu",
              "Kubernetes",
              "ArgoCD",
              "Flux",
              "GitHub Actions",
              "GitLab CI",
              "Prometheus",
              "Grafana",
              "Loki",
              "Tempo",
              "OPA",
              "Kyverno",
              "HashiCorp Vault",
              "Docker",
              "Helm",
              "vLLM",
              "AWS",
              "GCP",
              "Azure",
            ].map((tool) => (
              <span
                key={tool}
                className="rounded-md border border-slab-700 bg-slab-800 px-3 py-1.5 text-xs font-medium text-ash-300"
              >
                {tool}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-20">
          <div className="rounded-2xl border border-slab-700 bg-slab-900 p-8 text-center sm:p-12">
            <h2 className="text-2xl font-bold text-ash-100">
              Ready to work together?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-base text-ash-400">
              Book a free scoping call. 30 minutes, no commitment, no sales
              pitch — just a conversation about your platform challenges.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-lg bg-forge-500 px-6 py-3 text-sm font-semibold text-slab-950 transition-colors hover:bg-forge-400"
              >
                Book a Call
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-lg border border-slab-600 px-6 py-3 text-sm font-medium text-ash-300 transition-colors hover:border-slab-500 hover:text-ash-100"
              >
                See Packages
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
