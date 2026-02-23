import { useState, type FormEvent } from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

export default function EnContact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', service: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`AutomateForge inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nInterested in: ${formData.service}\n\n${formData.message}`
    );
    window.location.href = `mailto:hello@automateforge.io?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          badge="Free discovery call"
          title="Let's talk automation"
          subtitle="Book a free 30-minute discovery call. We'll map your workflows and identify the highest-ROI automation opportunities — no commitment required."
        />

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: Mail, label: 'Email', value: 'hello@automateforge.io', href: 'mailto:hello@automateforge.io' },
            { icon: Phone, label: 'Discovery Call', value: 'Free 30-min session', href: undefined },
            { icon: MapPin, label: 'Location', value: 'Remote-first, EU timezone', href: undefined },
          ].map((item) => (
            <div key={item.label} className="glass-card p-6 text-center">
              <item.icon className="w-6 h-6 text-brand-400 mx-auto mb-3" />
              <div className="text-sm text-steel-400">{item.label}</div>
              {item.href ? (
                <a href={item.href} className="text-white font-medium hover:text-brand-300 transition-colors">{item.value}</a>
              ) : (
                <div className="text-white font-medium">{item.value}</div>
              )}
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
                <label htmlFor="contact-name" className="block text-sm text-steel-400 mb-2">Name *</label>
                <input id="contact-name" type="text" name="name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-steel-500 focus:border-brand-500 focus:outline-none" placeholder="Jane Smith" />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm text-steel-400 mb-2">Email *</label>
                <input id="contact-email" type="email" name="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-steel-500 focus:border-brand-500 focus:outline-none" placeholder="jane@company.com" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="contact-company" className="block text-sm text-steel-400 mb-2">Company</label>
                <input id="contact-company" type="text" name="company" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-steel-500 focus:border-brand-500 focus:outline-none" placeholder="Acme Inc." />
              </div>
              <div>
                <label htmlFor="contact-service" className="block text-sm text-steel-400 mb-2">I'm interested in</label>
                <select id="contact-service" name="service" value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-500 focus:outline-none">
                  <option value="">Select a service...</option>
                  <option value="workflow-automation">Workflow Automation (Make.com, n8n, Zapier)</option>
                  <option value="ai-integration">AI Integration</option>
                  <option value="custom-development">Custom API / Bot Development</option>
                  <option value="process-audit">Process Audit & Optimization</option>
                  <option value="templates">Automation Templates</option>
                  <option value="not-sure">Not sure yet — need guidance</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-sm text-steel-400 mb-2">Tell us about your workflow challenge *</label>
              <textarea id="contact-message" rows={5} name="message" required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-steel-500 focus:border-brand-500 focus:outline-none resize-none" placeholder="What manual processes are slowing your team down? What tools are you currently using?" />
            </div>
            <button type="submit" className="w-full cta-primary py-3 text-base">
              Send Message <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-xs text-steel-500 text-center">We typically respond within 24 hours. Your data is never shared with third parties.</p>
          </form>
        )}
      </div>
    </div>
  );
}
