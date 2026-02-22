import { Link } from '@tanstack/react-router';
import { ArrowRight, Terminal, Wrench, Users } from 'lucide-react';

export default function PlAbout() {
  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">O AutomateForge</h1>
        <p className="text-xl text-steel-400 mb-12">
          Budujemy produkty DevOps — nie sprzedajemy godzin konsultingu. Stały zakres, stała cena, wyniki produkcyjnej jakości.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: Terminal, title: 'Inżynierowie, nie handlowcy', desc: 'Każde wdrożenie prowadzą seniorzy, którzy codziennie wdrażają infrastrukturę.' },
            { icon: Wrench, title: 'Produkty, nie projekty', desc: 'Określony zakres z jasną definicją ukończenia. Bez rozszerzania zakresu.' },
            { icon: Users, title: 'Twój zespół rośnie', desc: 'Dokumentujemy wszystko i szkolimy Twój zespół. Bez uzależnienia od dostawcy.' },
          ].map((item) => (
            <div key={item.title} className="glass-card p-6">
              <item.icon className="w-8 h-8 text-brand-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-steel-400">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center glass-card p-12">
          <h2 className="text-2xl font-bold text-white mb-4">Zbudujmy coś solidnego</h2>
          <Link to="/pl/kontakt" className="inline-flex items-center gap-2 px-8 py-3 bg-brand-500 hover:bg-brand-600 text-white font-medium rounded-xl transition-colors">
            Skontaktuj się <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
