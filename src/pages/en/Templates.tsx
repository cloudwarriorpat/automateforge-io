import { Link } from '@tanstack/react-router';
import { Package, Star, ChevronRight } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const TEMPLATES = [
  { title: 'CRM Lead Routing', category: 'Sales', price: '€79', tools: 'Make.com / n8n', integrations: ['HubSpot', 'Slack', 'Google Sheets'], popular: true },
  { title: 'Invoice Processing Pipeline', category: 'Finance', price: '€99', tools: 'Make.com', integrations: ['Gmail', 'Google Sheets', 'Xero'], popular: true },
  { title: 'E-commerce Order Sync', category: 'E-commerce', price: '€89', tools: 'n8n / Make.com', integrations: ['Shopify', 'Airtable', 'Slack'], popular: false },
  { title: 'Client Onboarding Flow', category: 'Operations', price: '€69', tools: 'Make.com / Zapier', integrations: ['Typeform', 'Notion', 'Slack'], popular: false },
  { title: 'Social Media Auto-Publish', category: 'Marketing', price: '€59', tools: 'Make.com / n8n', integrations: ['Buffer', 'LinkedIn', 'Google Sheets'], popular: false },
  { title: 'Support Ticket Classifier', category: 'Support', price: '€89', tools: 'n8n', integrations: ['Zendesk', 'Slack', 'Airtable'], popular: true },
  { title: 'Weekly Report Generator', category: 'Reporting', price: '€49', tools: 'Make.com', integrations: ['Google Sheets', 'Slack', 'Gmail'], popular: false },
  { title: 'Appointment Reminder System', category: 'Operations', price: '€59', tools: 'Zapier / Make.com', integrations: ['Calendly', 'Twilio', 'Gmail'], popular: false },
  { title: 'Expense Categorizer', category: 'Finance', price: '€69', tools: 'n8n', integrations: ['Gmail', 'Google Sheets', 'Slack'], popular: false },
];

export default function EnTemplates() {
  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="From €49"
          title="Automation Templates"
          subtitle="Pre-built workflow templates. Buy, customize, deploy. Works with Make.com, n8n, and Zapier."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEMPLATES.map((t) => (
            <div key={t.title} className="glass-card-hover p-6 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-steel-400 bg-white/5 px-2 py-1 rounded">{t.category}</span>
                <div className="flex items-center gap-2">
                  {t.popular && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/20 text-xs">
                      <Star className="w-3 h-3" /> Popular
                    </span>
                  )}
                  <span className="text-lg font-bold text-white">{t.price}</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{t.title}</h3>
              <div className="flex flex-wrap gap-1.5 mb-4 flex-1">
                {t.integrations.map((i) => (
                  <span key={i} className="px-2 py-0.5 text-xs bg-white/5 border border-white/10 rounded text-steel-400">{i}</span>
                ))}
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-xs text-steel-500">{t.tools}</span>
                <Link to="/en/contact" className="inline-flex items-center gap-1 text-sm font-medium text-brand-400 hover:text-brand-300">
                  Order <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center glass-card p-12">
          <Package className="w-12 h-12 text-brand-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-3">Need a custom workflow?</h2>
          <p className="text-steel-400 mb-6">We build dedicated automation workflows tailored to your specific requirements and tool stack.</p>
          <Link to="/en/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-brand-500 hover:bg-brand-600 text-white font-medium rounded-xl transition-colors">
            Book Discovery Call
          </Link>
        </div>
      </div>
    </div>
  );
}
