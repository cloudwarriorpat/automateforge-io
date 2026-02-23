import { useState, type FormEvent } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

export default function PlContact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', interest: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Zapytanie AutomateForge od ${formData.name}`);
    const body = encodeURIComponent(
      `Imię: ${formData.name}\nEmail: ${formData.email}\nFirma: ${formData.company}\nTemat: ${formData.interest}\n\n${formData.message}`
    );
    window.location.href = `mailto:kontakt@automateforge.pl?subject=${subject}&body=${body}`;
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
            <h2 className="text-2xl font-bold text-white mb-3">Otwieramy klienta email...</h2>
            <p className="text-steel-400 mb-4">Jeśli klient email się nie otworzył, wyślij wiadomość bezpośrednio na:</p>
            <a href="mailto:kontakt@automateforge.pl" className="text-brand-400 hover:text-brand-300 underline">
              kontakt@automateforge.pl
            </a>
            <div className="mt-6">
              <button onClick={() => setSubmitted(false)} className="text-sm text-steel-400 hover:text-white transition-colors">
                Wróć do formularza
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="pl-contact-name" className="block text-sm text-steel-400 mb-2">Imię i nazwisko</label>
                <input id="pl-contact-name" type="text" name="name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-steel-500 focus:border-brand-500 focus:outline-none" placeholder="Jan Kowalski" />
              </div>
              <div>
                <label htmlFor="pl-contact-email" className="block text-sm text-steel-400 mb-2">Email</label>
                <input id="pl-contact-email" type="email" name="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-steel-500 focus:border-brand-500 focus:outline-none" placeholder="jan@firma.pl" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="pl-contact-company" className="block text-sm text-steel-400 mb-2">Firma</label>
                <input id="pl-contact-company" type="text" name="company" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-steel-500 focus:border-brand-500 focus:outline-none" placeholder="Nazwa firmy" />
              </div>
              <div>
                <label htmlFor="pl-contact-interest" className="block text-sm text-steel-400 mb-2">Interesuje mnie</label>
                <select id="pl-contact-interest" name="interest" value={formData.interest} onChange={(e) => setFormData({ ...formData, interest: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-500 focus:outline-none">
                  <option value="">Wybierz...</option>
                  <option value="ksef">KSeF Studio</option>
                  <option value="agents">AI Agents</option>
                  <option value="templates">Szablony automatyzacji</option>
                  <option value="other">Inne</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="pl-contact-message" className="block text-sm text-steel-400 mb-2">Wiadomość</label>
              <textarea id="pl-contact-message" rows={5} name="message" required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-steel-500 focus:border-brand-500 focus:outline-none resize-none" placeholder="Opisz swoje potrzeby..." />
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
