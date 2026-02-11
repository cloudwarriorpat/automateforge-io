import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Rocket,
  TrendingDown,
  Lock,
  Clock,
  AlertTriangle,
  DollarSign,
  Bug,
  FileCheck,
  Zap,
  Handshake,
  CheckCircle,
  Terminal,
  Wrench,
  Users,
  XCircle,
} from "lucide-react";
import ProductCard from "@/components/ProductCard";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import {
  products,
  getFeaturedProducts,
  categoryMeta,
  type ProductCategory,
} from "@/data/products";

const homeFaq = [
  {
    q: "How is this different from hiring a DevOps consultant?",
    a: "Consultants scope as they go. We define scope upfront with fixed deliverables, fixed timelines, and fixed prices. You know exactly what you get before you pay.",
  },
  {
    q: "What if we need something custom?",
    a: "Start with a free scoping call. If your needs don't fit a standard package, we'll either build a custom quote or tell you honestly if we're not the right fit.",
  },
  {
    q: "Do you need admin access to our cloud accounts?",
    a: "It depends on the package. Read-only access is sufficient for audits and assessments. Implementation packages require appropriate write access — always scoped to what's needed.",
  },
  {
    q: "What cloud providers and tools do you support?",
    a: "AWS, GCP, and Azure. For tooling: Terraform, Kubernetes, GitHub Actions, GitLab CI, ArgoCD, Prometheus, Grafana, Datadog, PagerDuty, and more. If you use something specific, ask us.",
  },
  {
    q: "How do we handle security and data privacy?",
    a: "We work within your environment. We don't export data. Access is scoped and temporary. We're happy to sign NDAs and follow your security policies.",
  },
  {
    q: "What happens after delivery?",
    a: "Every package includes documentation and a walkthrough. You own everything we build. For ongoing support, we offer retainer packages.",
  },
  {
    q: "Can we start with a small package and scale up?",
    a: "That's exactly how we recommend it. Start with an Entry package to validate the fit, then move to Core or Premium if needed.",
  },
  {
    q: "Do you work with startups or only enterprises?",
    a: "Our sweet spot is teams of 5-100 engineers. Startups, scale-ups, and mid-size engineering orgs. If you run production infrastructure, we can help.",
  },
  {
    q: "What's your guarantee?",
    a: "If we don't deliver what's defined in the scope document, you don't pay for the undelivered items. Every package has measurable Definition of Done criteria.",
  },
  {
    q: "Are prices in EUR or can we pay in other currencies?",
    a: "Prices are listed in EUR and PLN. We can invoice in either currency. Payment terms: 50% upfront, 50% on delivery for packages over €3,000.",
  },
];

const categoryOrder: ProductCategory[] = [
  "reliability",
  "delivery",
  "cost",
  "security",
];

const categoryIcons: Record<ProductCategory, React.ReactNode> = {
  reliability: <Shield className="h-6 w-6" />,
  delivery: <Rocket className="h-6 w-6" />,
  cost: <TrendingDown className="h-6 w-6" />,
  security: <Lock className="h-6 w-6" />,
};

export default function Home() {
  const featured = getFeaturedProducts();

  return (
    <div className="relative">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-4 pt-20 pb-24 sm:px-6 sm:pt-28 sm:pb-32">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-forge-500/[0.04] blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-steel-500/[0.03] blur-[100px]" />

        <div className="relative mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-forge-500/20 bg-forge-500/5 px-4 py-1.5">
            <Zap className="h-3.5 w-3.5 text-forge-500" />
            <span className="text-xs font-semibold tracking-wide text-forge-400">
              Productized DevOps — Fixed Scope, Fixed Price
            </span>
          </div>

          {/* Headline */}
          <h1 className="mt-8 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="gradient-text">Ship Faster. Break Nothing.</span>
            <br />
            <span className="gradient-text-forge">Cut Cloud Waste.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ash-400">
            Productized DevOps packages that deliver results in days, not months.
            CI/CD pipelines, SRE foundations, cost optimization, and security
            hardening — all with fixed scope and fixed price.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 rounded-lg bg-forge-500 px-7 py-3.5 text-sm font-semibold text-slab-950 shadow-lg shadow-forge-500/20 transition-all hover:bg-forge-400 hover:shadow-forge-400/25"
            >
              See Our Packages
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-slab-600 px-7 py-3.5 text-sm font-medium text-ash-300 transition-colors hover:border-slab-500 hover:text-ash-100"
            >
              Book a Free Call
            </Link>
          </div>

          {/* Trust bar */}
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { icon: <Clock className="h-5 w-5" />, label: "1–15 day delivery" },
              { icon: <FileCheck className="h-5 w-5" />, label: "Fixed scope & price" },
              { icon: <Terminal className="h-5 w-5" />, label: "Everything as Code" },
              { icon: <Handshake className="h-5 w-5" />, label: "You own it all" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-2 text-center"
              >
                <div className="text-forge-500">{item.icon}</div>
                <span className="text-xs font-medium text-ash-400">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Problem Section ──────────────────────────────────── */}
      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-ash-100 sm:text-3xl">
              DevOps Chaos Is Costing You
            </h2>
            <p className="mt-3 text-base text-ash-400">
              These problems compound. Every week without a fix costs more than the fix itself.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <AlertTriangle className="h-5 w-5" />,
                stat: "10+ hrs/week",
                text: "wasted on manual deployments and firefighting",
              },
              {
                icon: <DollarSign className="h-5 w-5" />,
                stat: "32% average",
                text: "cloud overspend from orphaned and oversized resources",
              },
              {
                icon: <Clock className="h-5 w-5" />,
                stat: "4+ hours MTTR",
                text: "without structured runbooks and incident response",
              },
              {
                icon: <Bug className="h-5 w-5" />,
                stat: "60% of breaches",
                text: "stem from infrastructure misconfigurations",
              },
            ].map((item) => (
              <div
                key={item.stat}
                className="rounded-xl border border-slab-700 bg-slab-900/50 p-5"
              >
                <div className="text-ember-500">{item.icon}</div>
                <p className="mt-3 text-xl font-bold text-ash-100">
                  {item.stat}
                </p>
                <p className="mt-1 text-sm text-ash-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Product Buckets ──────────────────────────────────── */}
      <section id="categories" className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-ash-100 sm:text-3xl">
              Four Ways We Forge Your Infrastructure
            </h2>
            <p className="mt-3 text-base text-ash-400">
              Every package has a fixed scope, clear deliverables, and a
              measurable Definition of Done.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {categoryOrder.map((cat) => {
              const meta = categoryMeta[cat];
              const count = products.filter((p) => p.category === cat).length;
              return (
                <Link
                  key={cat}
                  href={`/products#${cat}`}
                  className="glass-card group rounded-xl p-6 transition-all hover:translate-y-[-2px]"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-forge-500/10 p-2.5 text-forge-500">
                      {categoryIcons[cat]}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-ash-100 group-hover:text-forge-400 transition-colors">
                        {meta.label}
                      </h3>
                      <p className="text-xs text-ash-500">
                        {count} packages
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ash-400">
                    {meta.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── How We Work ──────────────────────────────────────── */}
      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-ash-100 sm:text-3xl">
              No Surprises. No Scope Creep.
            </h2>
            <p className="mt-3 text-base text-ash-400">
              Three steps from problem to production-ready solution.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {[
              {
                step: "01",
                title: "Scope",
                description:
                  "30-minute call. We define exactly what's in, what's out, and what you'll get. You receive a scope document before any work begins.",
                icon: <Wrench className="h-5 w-5" />,
              },
              {
                step: "02",
                title: "Forge",
                description:
                  "Our team executes. You get daily async updates. Typical delivery: 1–15 business days depending on the package.",
                icon: <Zap className="h-5 w-5" />,
              },
              {
                step: "03",
                title: "Ship",
                description:
                  "Handoff with full documentation, runbooks, and a live walkthrough. You own everything we build. No lock-in.",
                icon: <Rocket className="h-5 w-5" />,
              },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-3xl font-bold text-forge-500/20">
                    {item.step}
                  </span>
                  <div className="rounded-lg bg-slab-800 p-2 text-forge-500">
                    {item.icon}
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-bold text-ash-100">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ash-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Products ────────────────────────────────── */}
      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-2xl font-bold text-ash-100 sm:text-3xl">
                Most Popular Packages
              </h2>
              <p className="mt-2 text-base text-ash-400">
                The fastest path from pain to production fix.
              </p>
            </div>
            <Link
              href="/products"
              className="group inline-flex items-center gap-1 text-sm font-medium text-forge-500 transition-colors hover:text-forge-400"
            >
              View all packages
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Proof / Credentials ──────────────────────────────── */}
      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-ash-100 sm:text-3xl">
              Built by Operators, Not Consultants
            </h2>
            <p className="mt-3 text-base text-ash-400">
              We run production infrastructure ourselves. Every package is
              tested on real environments before we offer it.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: <Terminal className="h-6 w-6" />,
                title: "Open Tooling",
                description:
                  "Terraform, Kubernetes, GitHub Actions, Prometheus, Grafana, ArgoCD. No proprietary black boxes. No vendor lock-in.",
              },
              {
                icon: <CheckCircle className="h-6 w-6" />,
                title: "Battle-Tested Patterns",
                description:
                  "Every template and module comes from real production use. We ship what we run ourselves.",
              },
              {
                icon: <Users className="h-6 w-6" />,
                title: "Knowledge Transfer",
                description:
                  "Every engagement includes documentation, walkthroughs, and training. Your team owns the outcome, not just the artifact.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slab-700 bg-slab-900/50 p-6"
              >
                <div className="text-forge-500">{item.icon}</div>
                <h3 className="mt-4 text-base font-bold text-ash-100">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ash-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing Approach ─────────────────────────────────── */}
      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-ash-100 sm:text-3xl">
              Transparent Pricing. No Hourly Rates.
            </h2>
            <p className="mt-3 text-base text-ash-400">
              Every package has a fixed price. You know the cost before we start.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              {
                tier: "Entry",
                range: "€690 – €1,290",
                timeline: "1–2 days",
                description:
                  "Quick wins and assessments. Perfect for validating fit before committing to larger engagements.",
                color: "border-mint-500/30 bg-mint-500/5",
                textColor: "text-mint-500",
              },
              {
                tier: "Core",
                range: "€3,900 – €5,900",
                timeline: "3–7 days",
                description:
                  "Full implementations. SRE kits, observability stacks, GitOps workflows, and security baselines.",
                color: "border-steel-500/30 bg-steel-500/5",
                textColor: "text-steel-400",
              },
              {
                tier: "Premium",
                range: "€8,900 – €14,900",
                timeline: "8–15 days",
                description:
                  "Deep transformations. Release engineering overhauls, platform builders, and infrastructure optimization sprints.",
                color: "border-forge-500/30 bg-forge-500/5",
                textColor: "text-forge-400",
              },
            ].map((item) => (
              <div
                key={item.tier}
                className={`rounded-xl border p-6 ${item.color}`}
              >
                <span
                  className={`text-xs font-bold uppercase tracking-wider ${item.textColor}`}
                >
                  {item.tier}
                </span>
                <p className="mt-3 text-2xl font-bold text-ash-100">
                  {item.range}
                </p>
                <p className="mt-1 text-xs text-ash-500">{item.timeline}</p>
                <p className="mt-4 text-sm leading-relaxed text-ash-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who It's For / Not For ───────────────────────────── */}
      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="rounded-xl border border-mint-500/20 bg-mint-500/5 p-6">
              <h3 className="flex items-center gap-2 text-lg font-bold text-mint-500">
                <CheckCircle className="h-5 w-5" />
                We&apos;re a good fit if you...
              </h3>
              <ul className="mt-4 space-y-3">
                {[
                  "Run production infrastructure on AWS, GCP, or Azure",
                  "Have an engineering team of 5–100 developers",
                  "Need specific DevOps outcomes, not open-ended consulting",
                  "Value fixed scope and predictable pricing",
                  "Want to own the deliverables and avoid vendor lock-in",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm text-ash-300"
                  >
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-mint-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-ember-500/20 bg-ember-500/5 p-6">
              <h3 className="flex items-center gap-2 text-lg font-bold text-ember-500">
                <XCircle className="h-5 w-5" />
                Probably not the right fit if you...
              </h3>
              <ul className="mt-4 space-y-3">
                {[
                  "Need a 6-month RFP process before starting",
                  "Don't have existing cloud infrastructure yet",
                  "Want an embedded full-time hire disguised as consulting",
                  "Need compliance certification (SOC2/ISO) — we build, not certify",
                  "Expect 24/7 managed services (we build, you run)",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm text-ash-300"
                  >
                    <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-ember-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <FAQ items={homeFaq} />
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────── */}
      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <CTASection />
        </div>
      </section>
    </div>
  );
}
