"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Calculator() {
  const [hours, setHours] = useState(20);
  const [rate, setRate] = useState(75);
  const [incidents, setIncidents] = useState(4);

  const annualManual = hours * rate * 52;
  const incidentCost = incidents * 2500 * 12;
  const total = annualManual + incidentCost;

  return (
    <section className="section bg-[var(--color-bg-secondary)]" id="calculator">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center">
          What Are Broken Automations{" "}
          <span className="gradient-text">Actually Costing You?</span>
        </h2>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {/* Inputs */}
          <div className="space-y-8">
            <div>
              <label className="flex justify-between text-sm mb-2">
                <span className="text-[var(--color-text-secondary)]">Hours on manual workarounds/week</span>
                <span className="font-mono text-[var(--color-accent)]">{hours}h</span>
              </label>
              <input
                type="range"
                min={5}
                max={60}
                value={hours}
                onChange={(e) => setHours(+e.target.value)}
                className="w-full accent-[#6C5CE7]"
              />
            </div>
            <div>
              <label className="flex justify-between text-sm mb-2">
                <span className="text-[var(--color-text-secondary)]">Average hourly team cost</span>
                <span className="font-mono text-[var(--color-accent)]">${rate}</span>
              </label>
              <input
                type="range"
                min={30}
                max={200}
                value={rate}
                onChange={(e) => setRate(+e.target.value)}
                className="w-full accent-[#6C5CE7]"
              />
            </div>
            <div>
              <label className="flex justify-between text-sm mb-2">
                <span className="text-[var(--color-text-secondary)]">Failed automation incidents/month</span>
                <span className="font-mono text-[var(--color-accent)]">{incidents}</span>
              </label>
              <input
                type="range"
                min={0}
                max={20}
                value={incidents}
                onChange={(e) => setIncidents(+e.target.value)}
                className="w-full accent-[#6C5CE7]"
              />
            </div>
          </div>

          {/* Output terminal */}
          <div className="terminal">
            <div className="terminal-header">
              <span className="terminal-dot bg-[var(--color-error)]" />
              <span className="terminal-dot bg-[var(--color-warning)]" />
              <span className="terminal-dot bg-[var(--color-success)]" />
              <span className="ml-2 text-xs text-[var(--color-text-muted)]">cost-analysis.sh</span>
            </div>
            <div className="p-5 space-y-4 text-sm">
              <div>
                <span className="text-[var(--color-text-muted)]">Annual cost of manual workarounds:</span>
                <div className="text-2xl font-bold text-[var(--color-warning)] font-mono">
                  ${annualManual.toLocaleString()}
                </div>
              </div>
              <div>
                <span className="text-[var(--color-text-muted)]">Estimated cost of incidents:</span>
                <div className="text-2xl font-bold text-[var(--color-error)] font-mono">
                  ${incidentCost.toLocaleString()}
                </div>
              </div>
              <div className="border-t border-[var(--color-border)] pt-4">
                <span className="text-[var(--color-text-muted)]">Total annual waste:</span>
                <div className="text-3xl font-bold gradient-text font-mono">
                  ${total.toLocaleString()}
                </div>
                <span className="text-xs text-[var(--color-cyan)]">← this is fixable.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a href="#cta" className="btn-gradient px-8 py-3 inline-flex items-center gap-2">
            Get Your Free Architecture Review <ArrowRight size={18} />
          </a>
          <p className="mt-3 text-xs text-[var(--color-text-muted)]">
            We&apos;ll map your current automation stack and show you exactly where the risk is.
          </p>
        </div>
      </div>
    </section>
  );
}
