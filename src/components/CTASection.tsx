import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection({
  headline = "Ready to Forge Better Infrastructure?",
  description = "Book a free 30-minute scoping call. We'll map your biggest pain point to a fixed-scope package — no commitment, no consulting fog.",
  primaryCta = "Book a Free Call",
  primaryHref = "/contact",
  secondaryCta = "See All Packages",
  secondaryHref = "/products",
}: {
  headline?: string;
  description?: string;
  primaryCta?: string;
  primaryHref?: string;
  secondaryCta?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-slab-700 bg-slab-900">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-forge-500/5 via-transparent to-steel-500/5 pointer-events-none" />

      <div className="relative px-6 py-16 text-center sm:px-12 sm:py-20">
        <h2 className="text-2xl font-bold text-ash-100 sm:text-3xl lg:text-4xl">
          {headline}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-ash-400">
          {description}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={primaryHref}
            className="group inline-flex items-center gap-2 rounded-lg bg-forge-500 px-6 py-3 text-sm font-semibold text-slab-950 transition-colors hover:bg-forge-400"
          >
            {primaryCta}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href={secondaryHref}
            className="inline-flex items-center gap-2 rounded-lg border border-slab-600 px-6 py-3 text-sm font-medium text-ash-300 transition-colors hover:border-slab-500 hover:text-ash-100"
          >
            {secondaryCta}
          </Link>
        </div>
      </div>
    </section>
  );
}
