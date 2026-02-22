import { Link, useParams } from '@tanstack/react-router';
import { ArrowLeft, CheckCircle, XCircle } from 'lucide-react';
import { getProductBySlug } from '@/data/products';

export default function PlProductDetail() {
  const params = useParams({ strict: false });
  const slug = (params as Record<string, string>).slug;
  const product = slug ? getProductBySlug(slug) : undefined;

  if (!product) {
    return (
      <div className="pt-32 pb-20 px-4 text-center">
        <h1 className="text-2xl font-bold text-white mb-4">Usługa nie znaleziona</h1>
        <Link to="/pl/uslugi" className="text-brand-400 hover:text-brand-300">← Wróć do usług</Link>
      </div>
    );
  }

  // Temporary Polish translations for demonstration
  const translatedProduct = {
    ...product,
    problem: `Problem: ${product.problem}`.replace(/Your team gets (.+)/, 'Twój zespół otrzymuje $1').replace(/Your deployments are (.+)/, 'Twoje wdrożenia są $1').replace(/Your cloud bill grows (.+)/, 'Twój rachunek za chmurę rośnie $1').replace(/Your containers run as root./, 'Twoje kontenery działają jako root.').replace(/Your database passwords live (.+)/, 'Hasła do baz danych znajdują się $1').replace(/Developers wait days (.+)/, 'Deweloperzy czekają dniami $1'),
    description: `Opis: ${product.description}`.replace(/We audit your current alerting rules (.+)/, 'Audytujemy Twoje obecne zasady alertowania $1').replace(/We build your SRE foundation (.+)/, 'Budujemy Twoje fundamenty SRE $1').replace(/We deploy a complete observability stack (.+)/, 'Wdrażamy kompletny stos observability $1').replace(/We build or rebuild your CI\/CD pipeline (.+)/, 'Budujemy lub przebudowujemy Twój potok CI/CD $1').replace(/We set up a full GitOps workflow (.+)/, 'Konfigurujemy pełny workflow GitOps $1').replace(/Complete release engineering overhaul (.+)/, 'Kompletna przebudowa inżynierii wydań $1').replace(/One-day deep dive into your cloud spend (.+)/, 'Jednodniowa analiza Twoich wydatków na chmurę $1').replace(/We build a complete FinOps visibility layer (.+)/, 'Budujemy kompletną warstwę widoczności FinOps $1').replace(/Hands-on optimization sprint (.+)/, 'Praktyczny sprint optymalizacyjny $1').replace(/We harden your Kubernetes workloads (.+)/, 'Wzmacniamy Twoje workloady Kubernetes $1').replace(/We deploy and configure a secrets management solution (.+)/, 'Wdrażamy i konfigurujemy rozwiązanie do zarządzania sekretami $1').replace(/We build your internal developer platform (.+)/, 'Budujemy Twoją wewnętrzną platformę deweloperską $1'),
    deliverables: product.deliverables.map(d => `Dostarczamy: ${d}`),
    outOfScope: product.outOfScope.map(o => `Poza zakresem: ${o}`),
    faq: product.faq.map(f => ({ q: `FAQ: ${f.q}`, a: `Odpowiedź: ${f.a}`})),
  };

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/pl/uslugi" className="inline-flex items-center gap-2 text-steel-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Wszystkie Usługi
        </Link>

        {/* Header */}
        <div className="mb-12">
          <span className="text-xs text-brand-400 font-medium uppercase tracking-wider">{translatedProduct.categoryLabel} · {translatedProduct.tierLabel}</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-3">{translatedProduct.name}</h1>
          <p className="text-xl text-steel-400">{translatedProduct.tagline}</p>
          <div className="flex items-center gap-6 mt-6">
            <div className="glass-card px-6 py-3">
              <div className="text-sm text-steel-400">Cena</div>
              <div className="text-2xl font-bold text-white">{translatedProduct.pricePln}</div>
            </div>
            <div className="glass-card px-6 py-3">
              <div className="text-sm text-steel-400">Termin</div>
              <div className="text-2xl font-bold text-white">{translatedProduct.timeline}</div>
            </div>
          </div>
        </div>

        {/* Problem & Description */}
        <div className="glass-card p-8 mb-8">
          <h2 className="text-lg font-semibold text-white mb-3">Problem</h2>
          <p className="text-steel-400">{translatedProduct.problem}</p>
        </div>

        <div className="glass-card p-8 mb-8">
          <h2 className="text-lg font-semibold text-white mb-3">Co Dostarczamy</h2>
          <p className="text-steel-400 mb-6">{translatedProduct.description}</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-medium text-brand-400 uppercase tracking-wider mb-3">Zakres</h3>
              <ul className="space-y-2">
                {translatedProduct.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm text-steel-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" /> {d}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-red-400 uppercase tracking-wider mb-3">Poza Zakresem</h3>
              <ul className="space-y-2">
                {translatedProduct.outOfScope.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm text-steel-300">
                    <XCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" /> {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ */}
        {translatedProduct.faq.length > 0 && (
          <div className="glass-card p-8 mb-8">
            <h2 className="text-lg font-semibold text-white mb-6">FAQ</h2>
            <div className="space-y-6">
              {translatedProduct.faq.map((f) => (
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
          <h2 className="text-2xl font-bold text-white mb-3">Gotowy, aby zacząć?</h2>
          <p className="text-steel-400 mb-6">Umów darmową rozmowę. Bez zobowiązań.</p>
          <Link to="/pl/kontakt" className="inline-flex items-center gap-2 px-8 py-3 bg-brand-500 hover:bg-brand-600 text-white font-medium rounded-xl transition-colors">
            Umów Rozmowę
          </Link>
        </div>
      </div>
    </div>
  );
}
