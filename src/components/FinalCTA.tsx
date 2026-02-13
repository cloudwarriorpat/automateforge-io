import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="section relative overflow-hidden" id="cta">
      {/* Gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6C5CE7]/20 via-transparent to-[#00D2FF]/20" />
      <div className="absolute inset-0 dot-grid opacity-20" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          Your Automations Are Either an Asset or a Liability.{" "}
          <span className="gradient-text">Which Are Yours?</span>
        </h2>
        <p className="mt-6 text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
          The architecture review takes 48-72 hours. The document is yours regardless. If your stack
          is solid, we&apos;ll tell you. If it&apos;s not, you&apos;ll know exactly what to fix — with or without us.
        </p>

        {/* Steps */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { step: "1", text: "Book a 30-min call" },
            { step: "2", text: "We review your stack (free)" },
            { step: "3", text: "Get written Architecture Review" },
            { step: "4", text: "You decide" },
          ].map((s) => (
            <div key={s.step} className="glass rounded-lg p-4">
              <span className="font-mono text-lg font-bold gradient-text">{s.step}</span>
              <p className="text-xs text-[var(--color-text-secondary)] mt-1">{s.text}</p>
            </div>
          ))}
        </div>

        <a
          href="mailto:hello@automateforge.io?subject=Architecture Review"
          className="btn-gradient px-10 py-4 text-base inline-flex items-center gap-2 mt-10"
        >
          Get Your Free Architecture Review <ArrowRight size={18} />
        </a>
        <p className="mt-4 text-sm text-[var(--color-text-muted)]">
          No commitment. No sales pitch in disguise. Just engineering clarity.
        </p>
      </div>
    </section>
  );
}
