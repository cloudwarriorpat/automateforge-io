import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Clock,
  FileInput,
  Target,
  XCircle,
} from "lucide-react";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import { products, getProductBySlug } from "@/data/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };

  return {
    title: `${product.name} — ${product.tagline}`,
    description: product.description.slice(0, 160),
    openGraph: {
      title: `${product.name} | AutomateForge`,
      description: product.tagline,
    },
  };
}

const tierColors: Record<string, string> = {
  entry: "bg-mint-500/10 text-mint-500 border-mint-500/20",
  core: "bg-steel-500/10 text-steel-400 border-steel-500/20",
  premium: "bg-forge-500/10 text-forge-400 border-forge-500/20",
};

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <div className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-4xl">
        {/* Back link */}
        <Link
          href="/products"
          className="group inline-flex items-center gap-1 text-sm text-ash-500 transition-colors hover:text-ash-300"
        >
          <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
          All Packages
        </Link>

        {/* Header */}
        <div className="mt-6">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${tierColors[product.tier]}`}
            >
              {product.tierLabel}
            </span>
            <span className="text-xs text-ash-500">
              {product.categoryLabel}
            </span>
          </div>

          <h1 className="mt-4 text-3xl font-extrabold text-ash-100 sm:text-4xl">
            {product.name}
          </h1>
          <p className="mt-2 text-lg text-forge-400 font-medium">
            {product.tagline}
          </p>

          {/* Timeline */}
          <div className="mt-6 flex items-center gap-2 text-sm text-ash-400">
            <Clock className="h-4 w-4 text-forge-500" />
            {product.timeline}
          </div>
        </div>

        {/* Divider */}
        <div className="spark-line mt-8" />

        {/* Who it's for */}
        <section className="mt-10">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-ash-400">
            Who it&apos;s for
          </h2>
          <p className="mt-2 text-base text-ash-300">{product.icp}</p>
        </section>

        {/* Problem */}
        <section className="mt-8">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-ash-400">
            The problem
          </h2>
          <p className="mt-2 text-base leading-relaxed text-ash-300">
            {product.problem}
          </p>
        </section>

        {/* What you get */}
        <section className="mt-8">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-ash-400">
            What you get
          </h2>
          <p className="mt-2 text-base leading-relaxed text-ash-300">
            {product.description}
          </p>
        </section>

        {/* Deliverables */}
        <section className="mt-10">
          <h2 className="flex items-center gap-2 text-lg font-bold text-ash-100">
            <CheckCircle className="h-5 w-5 text-mint-500" />
            Deliverables
          </h2>
          <ul className="mt-4 space-y-3">
            {product.deliverables.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-ash-300">
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-mint-500" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Requirements */}
        <section className="mt-10">
          <h2 className="flex items-center gap-2 text-lg font-bold text-ash-100">
            <FileInput className="h-5 w-5 text-steel-400" />
            What we need from you
          </h2>
          <ul className="mt-4 space-y-3">
            {product.inputs.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-ash-300">
                <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-steel-400" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Definition of Done */}
        <section className="mt-10">
          <h2 className="flex items-center gap-2 text-lg font-bold text-ash-100">
            <Target className="h-5 w-5 text-forge-500" />
            Definition of Done
          </h2>
          <ul className="mt-4 space-y-3">
            {product.definitionOfDone.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-ash-300">
                <Target className="mt-0.5 h-4 w-4 shrink-0 text-forge-500" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Out of Scope */}
        <section className="mt-10">
          <h2 className="flex items-center gap-2 text-lg font-bold text-ash-100">
            <XCircle className="h-5 w-5 text-ash-500" />
            Out of scope
          </h2>
          <ul className="mt-4 space-y-3">
            {product.outOfScope.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-ash-400">
                <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-ash-500" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* FAQ */}
        {product.faq.length > 0 && (
          <section className="mt-14">
            <FAQ items={product.faq} title="Questions about this package" />
          </section>
        )}

        {/* CTA */}
        <section className="mt-14">
          <CTASection
            headline={`Ready to get started with ${product.name}?`}
            description="Book a free 30-minute scoping call. We'll confirm the fit, define the exact scope, and get you a start date."
            secondaryCta="Back to All Packages"
            secondaryHref="/products"
          />
        </section>
      </div>
    </div>
  );
}
