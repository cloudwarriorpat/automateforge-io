import { useState, type FormEvent } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

export default function EnContact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Get in Touch" subtitle="Ready to level up your infrastructure? Let's talk." />

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: Mail, label: 'Email', value: 'hello@automateforge.io' },
            { icon: Phone, label: 'Call', value: 'Book a 30-min call' },
            { icon: MapPin, label: 'Location', value: 'Remote-first, EU timezone' },
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
            <h2 className="text-2xl font-bold text-white mb-3">Message sent! ✅</h2>
            <p className="text-steel-400">We'll get back to you within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-steel-400 mb-2">Name</label>
                <input type="text" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-steel-500 focus:border-brand-500 focus:outline-none" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm text-steel-400 mb-2">Email</label>
                <input type="email" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-steel-500 focus:border-brand-500 focus:outline-none" placeholder="john@company.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm text-steel-400 mb-2">Company</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-steel-500 focus:border-brand-500 focus:outline-none" placeholder="Acme Inc." />
            </div>
            <div>
              <label className="block text-sm text-steel-400 mb-2">Message</label>
              <textarea rows={5} required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-steel-500 focus:border-brand-500 focus:outline-none resize-none" placeholder="Tell us about your infrastructure needs..." />
            </div>
            <button type="submit" className="w-full bg-brand-500 hover:bg-brand-600 text-white font-medium py-3 rounded-xl transition-colors">
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
