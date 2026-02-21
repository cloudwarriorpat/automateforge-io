import { useState, type FormEvent } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

export default function PlContact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Kontakt" subtitle="Porozmawiajmy o automatyzacji Twojej firmy." />

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: Mail, label: 'Email', value: 'kontakt@automateforge.pl' },
            { icon: Phone, label: 'Telefon', value: 'Umów rozmowę 30 min' },
            { icon: MapPin, label: 'Lokalizacja', value: 'Wrocław / Remote' },
          ].map((item) => (
            <div key={item.label} className="glass-card p-6 text-center">
              <item.icon className="w-6 h-6 text-brand-400 mx-auto mb-3" />
              <div className="text-sm text-steel-400">{item.label}</div>
              <div className="text-white font-medium">{item.value}</div>
            </div>
          ))}
        </div>

        {submitted ? (
          <div className="glass-card p-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Wiadomość wysłana! ✅</h2>
            <p className="text-steel-400">Odezwiemy się w ciągu 24 godzin.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-steel-400 mb-2">Imię i nazwisko</label>
                <input type="text" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-steel-500 focus:border-brand-500 focus:outline-none" placeholder="Jan Kowalski" />
              </div>
              <div>
                <label className="block text-sm text-steel-400 mb-2">Email</label>
                <input type="email" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-steel-500 focus:border-brand-500 focus:outline-none" placeholder="jan@firma.pl" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-steel-400 mb-2">Firma</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-steel-500 focus:border-brand-500 focus:outline-none" placeholder="Nazwa firmy" />
              </div>
              <div>
                <label className="block text-sm text-steel-400 mb-2">Interesuje mnie</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-500 focus:outline-none">
                  <option value="">Wybierz...</option>
                  <option value="ksef">KSeF Studio</option>
                  <option value="agents">AI Agents</option>
                  <option value="templates">Szablony automatyzacji</option>
                  <option value="other">Inne</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm text-steel-400 mb-2">Wiadomość</label>
              <textarea rows={5} required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-steel-500 focus:border-brand-500 focus:outline-none resize-none" placeholder="Opisz swoje potrzeby..." />
            </div>
            <button type="submit" className="w-full bg-brand-500 hover:bg-brand-600 text-white font-medium py-3 rounded-xl transition-colors">
              Wyślij wiadomość
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
