import { Link } from '@tanstack/react-router';
import { products, categoryMeta, type ProductCategory } from '@/data/products';
import SectionHeading from '@/components/SectionHeading';
import { useState } from 'react';

const categories: (ProductCategory | 'all')[] = ['all', 'reliability', 'delivery', 'cost', 'security'];

export default function EnProducts() {
  const [filter, setFilter] = useState<ProductCategory | 'all'>('all');
  const filtered = filter === 'all' ? products : products.filter((p) => p.category === filter);

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="All Products"
          subtitle="Fixed-scope DevOps engagements. No hourly billing. No scope creep."
        />

        {/* Filter */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === cat
                  ? 'bg-brand-500 text-white'
                  : 'bg-white/5 text-steel-400 hover:text-white border border-white/10'
              }`}
            >
              {cat === 'all' ? 'All' : categoryMeta[cat].label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <Link key={p.slug} to="/en/products/$slug" params={{ slug: p.slug }} className="glass-card-hover p-6 flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-brand-400 font-medium uppercase tracking-wider">{p.categoryLabel}</span>
                <span className="text-xs text-steel-500 bg-white/5 px-2 py-1 rounded">{p.tierLabel}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{p.name}</h3>
              <p className="text-sm text-steel-400 mb-4 flex-1">{p.tagline}</p>
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-lg font-bold text-white">{p.priceEur}</span>
                <span className="text-sm text-steel-500">{p.timeline}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
