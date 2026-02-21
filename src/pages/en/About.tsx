import { Link } from '@tanstack/react-router';
import { ArrowRight, Terminal, Wrench, Users } from 'lucide-react';

export default function EnAbout() {
  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">About AutomateForge</h1>
        <p className="text-xl text-steel-400 mb-12">
          We build DevOps products — not consulting hours. Fixed scope, fixed price, production-grade results.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: Terminal, title: 'Engineers, not salespeople', desc: 'Every engagement is led by senior engineers who ship infrastructure daily.' },
            { icon: Wrench, title: 'Products, not projects', desc: 'Scoped deliverables with clear definition of done. No scope creep.' },
            { icon: Users, title: 'Your team levels up', desc: 'We document everything and train your team. No vendor lock-in.' },
          ].map((item) => (
            <div key={item.title} className="glass-card p-6">
              <item.icon className="w-8 h-8 text-brand-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-steel-400">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center glass-card p-12">
          <h2 className="text-2xl font-bold text-white mb-4">Let's build something solid</h2>
          <Link to="/en/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-brand-500 hover:bg-brand-600 text-white font-medium rounded-xl transition-colors">
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
