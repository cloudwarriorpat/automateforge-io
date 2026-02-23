import { Link, useParams } from '@tanstack/react-router';
import { ArrowLeft, CheckCircle, XCircle } from 'lucide-react';
import { getProductBySlug } from '@/data/products';

export default function EnProductDetail() {
  const params = useParams({ strict: false });
  const slug = (params as Record<string, string>).slug;
  const product = slug ? getProductBySlug(slug) : undefined;

  if (!product) {
    return (
      <div className="pt-32 pb-20 px-4 text-center">
        <h1 className="text-2xl font-bold text-white mb-4">Product not found</h1>
        <Link to="/en/products" className="text-brand-400 hover:text-brand-300">← Back to products</Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/en/products" className="inline-flex items-center gap-2 text-steel-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> All Products
        </Link>

        {/* Header */}
        <div className="mb-12">
          <span className="text-xs text-brand-400 font-medium uppercase tracking-wider">{product.categoryLabel} · {product.tierLabel}</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-3">{product.name}</h1>
          <p className="text-xl text-steel-400">{product.tagline}</p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-6">
            <div className="glass-card px-5 py-3 sm:px-6">
              <div className="text-sm text-steel-400">Price</div>
              <div className="text-xl sm:text-2xl font-bold text-white">{product.priceEur}</div>
            </div>
            <div className="glass-card px-5 py-3 sm:px-6">
              <div className="text-sm text-steel-400">Timeline</div>
              <div className="text-xl sm:text-2xl font-bold text-white">{product.timeline}</div>
            </div>
          </div>
        </div>

        {/* Problem & Description */}
        <div className="glass-card p-8 mb-8">
          <h2 className="text-lg font-semibold text-white mb-3">The Problem</h2>
          <p className="text-steel-400">{product.problem}</p>
        </div>

        <div className="glass-card p-8 mb-8">
          <h2 className="text-lg font-semibold text-white mb-3">What We Deliver</h2>
          <p className="text-steel-400 mb-6">{product.description}</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-medium text-brand-400 uppercase tracking-wider mb-3">Deliverables</h3>
              <ul className="space-y-2">
                {product.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm text-steel-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" /> {d}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-red-400 uppercase tracking-wider mb-3">Out of Scope</h3>
              <ul className="space-y-2">
                {product.outOfScope.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm text-steel-300">
                    <XCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" /> {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ */}
        {product.faq.length > 0 && (
          <div className="glass-card p-8 mb-8">
            <h2 className="text-lg font-semibold text-white mb-6">FAQ</h2>
            <div className="space-y-6">
              {product.faq.map((f) => (
                <div key={f.q}>
                  <h3 className="text-white font-medium mb-1">{f.q}</h3>
                  <p className="text-sm text-steel-400">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center glass-card p-8">
          <h2 className="text-2xl font-bold text-white mb-3">Ready to get started?</h2>
          <p className="text-steel-400 mb-6">Book a free scoping call. No commitment.</p>
          <Link to="/en/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-brand-500 hover:bg-brand-600 text-white font-medium rounded-xl transition-colors">
            Book a Call
          </Link>
        </div>
      </div>
    </div>
  );
}
