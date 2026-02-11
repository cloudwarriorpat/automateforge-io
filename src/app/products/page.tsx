import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import CTASection from "@/components/CTASection";
import {
  products,
  retainers,
  categoryMeta,
  type ProductCategory,
} from "@/data/products";
import { Shield, Rocket, TrendingDown, Lock, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Products — Productized DevOps Packages",
  description:
    "Browse all AutomateForge packages: SRE foundations, CI/CD pipelines, cloud cost optimization, security hardening, and platform engineering. Fixed scope, fixed price.",
};

const categoryOrder: ProductCategory[] = [
  "reliability",
  "delivery",
  "cost",
  "security",
];

const categoryIcons: Record<ProductCategory, React.ReactNode> = {
  reliability: <Shield className="h-5 w-5" />,
  delivery: <Rocket className="h-5 w-5" />,
  cost: <TrendingDown className="h-5 w-5" />,
  security: <Lock className="h-5 w-5" />,
};

export default function ProductsPage() {
  return (
    <div className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="max-w-2xl">
          <h1 className="text-3xl font-extrabold text-ash-100 sm:text-4xl">
            All Packages
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ash-400">
            Every package includes a scope document, daily updates during
            execution, full documentation, and a handoff walkthrough. You own
            everything we build.
          </p>
        </div>

        {/* Tier legend */}
        <div className="mt-8 flex flex-wrap gap-4">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-mint-500/20 bg-mint-500/5 px-3 py-1 text-xs font-medium text-mint-500">
            Entry — 1–2 days — €690–€1,290
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-steel-500/20 bg-steel-500/5 px-3 py-1 text-xs font-medium text-steel-400">
            Core — 3–7 days — €3,900–€5,900
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-forge-500/20 bg-forge-500/5 px-3 py-1 text-xs font-medium text-forge-400">
            Premium — 8–15 days — €8,900–€14,900
          </span>
        </div>

        {/* Product categories */}
        {categoryOrder.map((cat) => {
          const meta = categoryMeta[cat];
          const catProducts = products.filter((p) => p.category === cat);
          return (
            <section key={cat} id={cat} className="mt-16 scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="rounded-lg bg-forge-500/10 p-2 text-forge-500">
                  {categoryIcons[cat]}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-ash-100">
                    {meta.label}
                  </h2>
                  <p className="text-sm text-ash-400">{meta.description}</p>
                </div>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {catProducts.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            </section>
          );
        })}

        {/* Retainers */}
        <section className="mt-20 scroll-mt-24">
          <h2 className="text-2xl font-bold text-ash-100">
            Ongoing Retainers
          </h2>
          <p className="mt-2 text-base text-ash-400">
            Monthly packages for teams that need continuous DevOps and SRE
            support without a full-time hire.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {retainers.map((r) => (
              <div
                key={r.slug}
                className="flex flex-col rounded-xl border border-slab-700 bg-slab-900 p-6"
              >
                <h3 className="text-lg font-bold text-ash-100">{r.name}</h3>
                <p className="mt-1 text-sm text-ash-400">{r.tagline}</p>

                <p className="mt-4 text-2xl font-bold text-forge-400">
                  {r.priceEur}
                </p>
                <p className="text-xs text-ash-500">{r.pricePln}</p>

                <ul className="mt-5 space-y-2.5 flex-1">
                  {r.includes.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm text-ash-300"
                    >
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-mint-500" />
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="mt-5 text-xs text-ash-500">
                  Ideal for: {r.idealFor}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-20">
          <CTASection
            headline="Not sure which package fits?"
            description="Book a free 30-minute scoping call. We'll map your biggest pain point to the right package — no commitment required."
          />
        </section>
      </div>
    </div>
  );
}
