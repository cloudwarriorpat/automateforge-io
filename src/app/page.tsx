import Link from "next/link";
import {
  ArrowRight,
  Layers,
  ShieldCheck,
  Rocket,
  Activity,
  Brain,
  Clock,
  AlertTriangle,
  FileWarning,
  Gauge,
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
    q: "How is this different from hiring a platform engineering consultancy?",
    a: "Most consultancies sell time-and-materials. We sell fixed-scope packages with defined deliverables and timelines. You know exactly what you get before we start — no open-ended discovery, no scope creep.",
  },
  {
    q: "What if we need something custom?",
    a: "Start with a free scoping call. If your needs don't fit a standard package, we'll build a custom scope — or tell you honestly if we're not the right fit.",
  },
  {
    q: "Do you need admin access to our cloud accounts?",
    a: "It depends on the package. Assessments need read-only access. Implementation packages require appropriate write access — always scoped to what's needed and revoked after delivery.",
  },
  {
    q: "What tools and platforms do you work with?",
    a: "Kubernetes, Backstage, Crossplane, ArgoCD, Terraform/OpenTofu, GitHub Actions, GitLab CI, Prometheus, Grafana, OPA, Kyverno, and more. We're vendor-neutral and open-source-first.",
  },
  {
    q: "How do you handle security and data privacy?",
    a: "We work within your environment. We don't export data. Access is scoped and temporary. We sign NDAs and follow your security policies. We're EU-based and GDPR-conscious.",
  },
  {
    q: "What about NIS2, DORA, and EU AI Act compliance?",
    a: "This is a core speciality. We implement the technical controls — policy-as-code, audit trails, incident automation, asset inventories — that these regulations require. We don't do legal advisory, but we make the engineering side ready.",
  },
  {
    q: "What happens after delivery?",
    a: "Every package includes documentation, runbooks, and a walkthrough. You own everything. For ongoing support, we offer monthly retainer packages.",
  },
  {
    q: "Do you work with startups or only enterprises?",
    a: "Our sweet spot is engineering teams of 20–200. Scale-ups, mid-market, and fast-growing companies that need platform engineering without building a full team from scratch.",
  },
  {
    q: "What's your guarantee?",
    a: "Every package has a measurable Definition of Done. If we don't deliver what's defined in the scope document, you don't pay for the undelivered items.",
  },
  {
    q: "Where are you based?",
    a: "We're based in the EU (Poland) and work with companies across Europe. All engagements are remote-first with async communication and scheduled syncs.",
  },
];

const categoryOrder: ProductCategory[] = [
  "platform",
  "compliance",
  "delivery",
  "reliability",
  "ai",
];

const categoryIcons: Record<ProductCategory, React.ReactNode> = {
  platform: <Layers className="h-6 w-6" />,
  compliance: <ShieldCheck className="h-6 w-6" />,
  delivery: <Rocket className="h-6 w-6" />,
  reliability: <Activity className="h-6 w-6" />,
  ai: <Brain className="h-6 w-6" />,
};

export default function Home() {
  const featured = getFeaturedProducts();

  return (
    <div className="relative">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-4 pt-20 pb-24 sm:px-6 sm:pt-28 sm:pb-32">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-forge-500/[0.04] blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-steel-500/[0.03] blur-[100px]" />

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-forge-500/20 bg-forge-500/5 px-4 py-1.5">
            <Zap className="h-3.5 w-3.5 text-forge-500" />
            <span className="text-xs font-semibold tracking-wide text-forge-400">
              Platform Engineering, Productized
            </span>
          </div>

          <h1 className="mt-8 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="gradient-text">Build Platforms. Automate Compliance.</span>
            <br />
            <span className="gradient-text-forge">Ship With Confidence.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ash-400">
            We build internal developer platforms, automate EU compliance
            (NIS2, DORA, EU AI Act), and accelerate engineering delivery.
            Fixed-scope packages that ship in days — not months of consulting.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 rounded-lg bg-forge-500 px-7 py-3.5 text-sm font-semibold text-slab-950 shadow-lg shadow-forge-500/20 transition-all hover:bg-forge-400 hover:shadow-forge-400/25"
            >
              Explore Our Packages
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-slab-600 px-7 py-3.5 text-sm font-medium text-ash-300 transition-colors hover:border-slab-500 hover:text-ash-100"
            >
              Book a Scoping Call
            </Link>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { icon: <Clock className="h-5 w-5" />, label: "1–25 day delivery" },
              { icon: <FileCheck className="h-5 w-5" />, label: "Fixed scope, always" },
              { icon: <Terminal className="h-5 w-5" />, label: "Everything as Code" },
              { icon: <Handshake className="h-5 w-5" />, label: "You own it all" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2 text-center">
                <div className="text-forge-500">{item.icon}</div>
                <span className="text-xs font-medium text-ash-400">{item.label}</span>
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
              The Platform Gap Is Costing You
            </h2>
            <p className="mt-3 text-base text-ash-400">
              Without a real platform strategy, these problems compound every quarter.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Gauge className="h-5 w-5" />,
                stat: "75% of devs",
                text: "lose 6+ hours/week to tool fragmentation and manual processes",
              },
              {
                icon: <FileWarning className="h-5 w-5" />,
                stat: "NIS2 & DORA",
                text: "enforcement is live — fines up to €10M or 2% of global revenue",
              },
              {
                icon: <AlertTriangle className="h-5 w-5" />,
                stat: "4+ hours MTTR",
                text: "without structured runbooks and incident response workflows",
              },
              {
                icon: <Brain className="h-5 w-5" />,
                stat: "94% of orgs",
                text: "see AI as essential to platform success but lack the infrastructure",
              },
            ].map((item) => (
              <div key={item.stat} className="rounded-xl border border-slab-700 bg-slab-900/50 p-5">
                <div className="text-ember-500">{item.icon}</div>
                <p className="mt-3 text-xl font-bold text-ash-100">{item.stat}</p>
                <p className="mt-1 text-sm text-ash-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Product Categories ───────────────────────────────── */}
      <section id="categories" className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-ash-100 sm:text-3xl">
              Five Pillars of Platform Engineering
            </h2>
            <p className="mt-3 text-base text-ash-400">
              Every package has a fixed scope, clear deliverables, and a measurable Definition of Done.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
                      <p className="text-xs text-ash-500">{count} packages</p>
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
                  "Our team executes. You get daily async updates. Typical delivery: 1–25 business days depending on the package.",
                icon: <Zap className="h-5 w-5" />,
              },
              {
                step: "03",
                title: "Ship",
                description:
                  "Handoff with full documentation, runbooks, and a live walkthrough. You own everything. No lock-in, no recurring dependency.",
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
                <h3 className="mt-4 text-lg font-bold text-ash-100">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ash-400">{item.description}</p>
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
                Flagship Packages
              </h2>
              <p className="mt-2 text-base text-ash-400">
                Where most of our clients start.
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
              We run production platforms ourselves. Every package is tested on real infrastructure before we offer it.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: <Terminal className="h-6 w-6" />,
                title: "Open-Source First",
                description:
                  "Backstage, Crossplane, ArgoCD, Kubernetes, Terraform/OpenTofu, Prometheus, OPA. No proprietary lock-in. Aligned with EU digital sovereignty.",
              },
              {
                icon: <CheckCircle className="h-6 w-6" />,
                title: "EU Compliance Native",
                description:
                  "NIS2, DORA, EU AI Act — baked into every platform deliverable. We build platforms that are compliant by default, not by afterthought.",
              },
              {
                icon: <Users className="h-6 w-6" />,
                title: "Knowledge Transfer",
                description:
                  "Every engagement includes documentation, walkthroughs, and training. Your team owns the outcome and can operate independently.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-slab-700 bg-slab-900/50 p-6">
                <div className="text-forge-500">{item.icon}</div>
                <h3 className="mt-4 text-base font-bold text-ash-100">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ash-400">{item.description}</p>
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
                  "Have 20–200 engineers and need platform engineering capacity",
                  "Face NIS2, DORA, or EU AI Act compliance requirements",
                  "Want an internal developer platform but can't build one alone",
                  "Need specific outcomes, not open-ended consulting",
                  "Run on Kubernetes, AWS, GCP, or Azure",
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-ash-300">
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
                  "Need certification (SOC2/ISO) — we build, not certify",
                  "Expect 24/7 managed services (we build, you run)",
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-ash-300">
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
          <CTASection
            headline="Ready to Build a Platform That Works?"
            description="Book a free 30-minute scoping call. We'll assess your biggest gap and map it to a fixed-scope package — no commitment, no consulting fog."
          />
        </div>
      </section>
    </div>
  );
}
