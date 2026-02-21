import { Link } from '@tanstack/react-router';
import { ArrowRight, Shield, Rocket, TrendingDown, Lock } from 'lucide-react';
import { products, categoryMeta, type ProductCategory } from '@/data/products';
import SectionHeading from '@/components/SectionHeading';

const categories: ProductCategory[] = ['reliability', 'delivery', 'cost', 'security'];

export default function EnHome() {
  const featured = products.filter((p) => ['alert-fatigue-fix', 'pipeline-forge', 'cloud-cost-xray', 'container-hardening-kit'].includes(p.slug));
  const iconMap = { reliability: Shield, delivery: Rocket, cost: TrendingDown, security: Lock };

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium bg-brand-500/10 text-brand-400 border border-brand-500/20 mb-6">
            Fixed scope. Fixed price. Zero surprises.
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            DevOps products that{' '}
            <span className="bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent">
              ship results
            </span>
          </h1>
          <p className="text-xl text-steel-400 mb-8 max-w-2xl mx-auto">
            Stop scoping. Stop guessing. Pick a product, book a call, and get production-grade infrastructure delivered in weeks — not months.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link to="/en/products" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white font-medium rounded-xl transition-colors">
              View Products <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/en/contact" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-white/40 text-white font-medium rounded-xl transition-colors">
              Book a Call
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Four pillars of modern infrastructure" subtitle="Each product targets a specific pain point with clear deliverables." />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => {
              const meta = categoryMeta[cat];
              const Icon = iconMap[cat];
              return (
                <div key={cat} className="glass-card p-6">
                  <Icon className="w-8 h-8 text-brand-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{meta.label}</h3>
                  <p className="text-sm text-steel-400">{meta.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading badge="Popular" title="Most requested products" />
          <div className="grid md:grid-cols-2 gap-6">
            {featured.map((p) => (
              <Link key={p.slug} to="/en/products/$slug" params={{ slug: p.slug }} className="glass-card-hover p-8">
                <span className="text-xs text-brand-400 font-medium uppercase tracking-wider">{p.categoryLabel}</span>
                <h3 className="text-xl font-bold text-white mt-2 mb-2">{p.name}</h3>
                <p className="text-sm text-steel-400 mb-4">{p.tagline}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-white">{p.priceEur}</span>
                  <span className="text-sm text-steel-500">{p.timeline}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center glass-card p-12">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to fix your infrastructure?</h2>
          <p className="text-steel-400 mb-8">Pick a product. Book a call. Ship it.</p>
          <Link to="/en/products" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white font-medium rounded-xl transition-colors">
            View Products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
