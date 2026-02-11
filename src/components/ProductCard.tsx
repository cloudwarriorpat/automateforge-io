import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import type { Product } from "@/data/products";

const tierColors: Record<string, string> = {
  entry: "bg-mint-500/10 text-mint-500 border-mint-500/20",
  core: "bg-steel-500/10 text-steel-400 border-steel-500/20",
  premium: "bg-forge-500/10 text-forge-400 border-forge-500/20",
};

const categoryColors: Record<string, string> = {
  platform: "text-forge-400",
  compliance: "text-steel-400",
  delivery: "text-mint-500",
  reliability: "text-ash-300",
  ai: "text-forge-400",
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="glass-card group flex flex-col rounded-xl p-6 transition-all hover:translate-y-[-2px]"
    >
      {/* Badges */}
      <div className="flex items-center gap-2">
        <span
          className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${tierColors[product.tier]}`}
        >
          {product.tierLabel}
        </span>
        <span className={`text-xs font-medium ${categoryColors[product.category]}`}>
          {product.categoryLabel}
        </span>
      </div>

      {/* Title + Tagline */}
      <h3 className="mt-4 text-lg font-bold text-ash-100 group-hover:text-forge-400 transition-colors">
        {product.name}
      </h3>
      <p className="mt-1 text-sm text-ash-400">{product.tagline}</p>

      {/* Meta */}
      <div className="mt-auto flex items-end justify-between pt-6">
        <div className="flex items-center gap-1.5 text-xs text-ash-500">
          <Clock className="h-3.5 w-3.5" />
          {product.timeline}
        </div>
        <ArrowRight className="h-4 w-4 text-ash-500 transition-transform group-hover:translate-x-1 group-hover:text-forge-500" />
      </div>
    </Link>
  );
}
