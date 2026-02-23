import { useState, type FormEvent } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

export default function EnContact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`AutomateForge inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\n${formData.message}`
    );
    window.location.href = `mailto:hello@automateforge.io?subject=${subject}&body=${body}`;
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
            <h2 className="text-2xl font-bold text-white mb-3">Opening your email client...</h2>
            <p className="text-steel-400 mb-4">If your email client didn't open, send your message directly to:</p>
            <a href="mailto:hello@automateforge.io" className="text-brand-400 hover:text-brand-300 underline">
              hello@automateforge.io
            </a>
            <div className="mt-6">
              <button onClick={() => setSubmitted(false)} className="text-sm text-steel-400 hover:text-white transition-colors">
                Back to form
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="contact-name" className="block text-sm text-steel-400 mb-2">Name</label>
                <input id="contact-name" type="text" name="name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-steel-500 focus:border-brand-500 focus:outline-none" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm text-steel-400 mb-2">Email</label>
                <input id="contact-email" type="email" name="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-steel-500 focus:border-brand-500 focus:outline-none" placeholder="john@company.com" />
              </div>
            </div>
            <div>
              <label htmlFor="contact-company" className="block text-sm text-steel-400 mb-2">Company</label>
              <input id="contact-company" type="text" name="company" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-steel-500 focus:border-brand-500 focus:outline-none" placeholder="Acme Inc." />
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-sm text-steel-400 mb-2">Message</label>
              <textarea id="contact-message" rows={5} name="message" required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-steel-500 focus:border-brand-500 focus:outline-none resize-none" placeholder="Tell us about your infrastructure needs..." />
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
