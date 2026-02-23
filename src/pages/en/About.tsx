import { Link } from '@tanstack/react-router';
import { ArrowRight, Terminal, Shield, Users, Zap, Globe, Clock } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const values = [
  { icon: Terminal, title: 'Built by an engineer', desc: 'AutomateForge was founded by a DevOps engineer with a decade of experience in production systems. Every automation we build is designed for reliability, not just demos.' },
  { icon: Shield, title: 'Enterprise-grade reliability', desc: 'Error handling, monitoring, logging, and documentation are standard — not optional extras. Your automations run in production, not in a sandbox.' },
  { icon: Users, title: 'Your team owns the result', desc: 'Every engagement ends with full documentation, training, and source code handover. We build systems you can maintain without us.' },
];

const differentiators = [
  { icon: Zap, title: 'Engineer, not agency', desc: 'You work directly with a senior engineer. No account managers, no junior handoffs, no telephone game.' },
  { icon: Globe, title: 'Global, remote-first', desc: 'EU-based, serving clients worldwide. Async-friendly workflows with weekly syncs in your timezone.' },
  { icon: Clock, title: 'Fixed scope, fixed price', desc: 'No hourly billing surprises. We define exact deliverables upfront, and that\'s what you pay for.' },
];

export default function EnAbout() {
  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          badge="About AutomateForge"
          title="Automation built by engineers, for operators"
          subtitle="We help operations managers, founders, and CTOs eliminate manual work with reliable, production-grade automation systems."
        />

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {values.map((item) => (
            <div key={item.title} className="glass-card p-6">
              <item.icon className="w-8 h-8 text-brand-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-steel-400">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="glass-card p-8 md:p-10 mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">Why AutomateForge exists</h2>
          <div className="space-y-4 text-steel-300">
            <p>
              Most automation agencies sell the dream but deliver a fragile Zapier chain that breaks on the first edge case. They come from marketing backgrounds and treat automation like a growth hack.
            </p>
            <p>
              AutomateForge is different. We come from DevOps and platform engineering — where systems must be reliable, observable, and maintainable. We apply the same engineering discipline to business automation.
            </p>
            <p>
              Whether it's a Make.com workflow, an AI-powered document processor, or a custom API integration — we build it with error handling, monitoring, and documentation. Because automation that breaks at 2 AM and nobody knows how to fix it isn't automation. It's a liability.
            </p>
          </div>
        </div>

        <SectionHeading
          title="What makes us different"
          subtitle="AutomateForge is not a typical automation agency."
        />

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {differentiators.map((item) => (
            <div key={item.title} className="glass-card p-6">
              <item.icon className="w-8 h-8 text-spark-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-steel-400">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center glass-card p-12">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to automate with confidence?</h2>
          <p className="text-steel-400 mb-6">Book a free 30-minute discovery call. No sales pitch — just an honest conversation about what can be automated in your workflow.</p>
          <Link to="/en/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-brand-500 hover:bg-brand-600 text-white font-medium rounded-xl transition-colors">
            Book Discovery Call <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
