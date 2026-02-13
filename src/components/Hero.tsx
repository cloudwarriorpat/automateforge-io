"use client";

import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Dot grid bg */}
      <div className="absolute inset-0 dot-grid opacity-30" />
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6C5CE7] rounded-full blur-[128px] opacity-15" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00D2FF] rounded-full blur-[128px] opacity-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="status-badge bg-[var(--color-bg-tertiary)] text-[var(--color-cyan)] border border-[var(--color-border)]">
            <span className="w-2 h-2 rounded-full bg-[var(--color-success)] pulse-green inline-block" />
            47 automation pipelines running in production right now
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-center leading-tight max-w-5xl mx-auto">
          Your Automations Break Because They Were{" "}
          <span className="gradient-text">Never Engineered</span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-lg sm:text-xl text-[var(--color-text-secondary)] text-center max-w-3xl mx-auto leading-relaxed">
          We build production-grade automation pipelines with monitoring, error handling, and
          documentation — the same way we build cloud infrastructure. For scaling teams that
          outgrew Zapier.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#cta" className="btn-gradient px-8 py-3.5 text-base flex items-center gap-2">
            Get Your Free Architecture Review <ArrowRight size={18} />
          </a>
          <a href="#difference" className="btn-ghost px-8 py-3.5 text-base">
            See How We&apos;re Different
          </a>
        </div>

        {/* Hero visual — comparison */}
        <div className="mt-16 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Typical */}
          <div className="terminal">
            <div className="terminal-header">
              <span className="terminal-dot bg-[var(--color-error)]" />
              <span className="terminal-dot bg-[var(--color-warning)]" />
              <span className="terminal-dot bg-[var(--color-text-muted)]" />
              <span className="ml-2 text-xs text-[var(--color-text-muted)]">typical-automation.zap</span>
            </div>
            <div className="p-4 space-y-3 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--color-error)] pulse-red" />
                <span className="text-[var(--color-error)]">FAILED</span>
                <span className="text-[var(--color-text-muted)]">Webhook → CRM sync</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--color-warning)]" />
                <span className="text-[var(--color-warning)]">STALE</span>
                <span className="text-[var(--color-text-muted)]">Email → Slack notify</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--color-text-muted)]" />
                <span className="text-[var(--color-text-muted)]">UNKNOWN — No monitoring</span>
              </div>
              <div className="mt-3 text-[var(--color-text-muted)] border-t border-[var(--color-border)] pt-3">
                ⚠ No error handling · No alerts · No docs
              </div>
            </div>
          </div>

          {/* Engineered */}
          <div className="terminal glow-border">
            <div className="terminal-header">
              <span className="terminal-dot bg-[var(--color-success)]" />
              <span className="terminal-dot bg-[var(--color-success)]" />
              <span className="terminal-dot bg-[var(--color-success)]" />
              <span className="ml-2 text-xs text-[var(--color-text-muted)]">engineered-pipeline.af</span>
            </div>
            <div className="p-4 space-y-3 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--color-success)] pulse-green" />
                <span className="text-[var(--color-success)]">RUNNING</span>
                <span className="text-[var(--color-text-muted)]">Order pipeline — 99.94% uptime</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--color-success)] pulse-green" />
                <span className="text-[var(--color-success)]">RUNNING</span>
                <span className="text-[var(--color-text-muted)]">Lead routing — 87s avg response</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--color-success)] pulse-green" />
                <span className="text-[var(--color-success)]">HEALTHY</span>
                <span className="text-[var(--color-text-muted)]">All 4 pipelines monitored</span>
              </div>
              <div className="mt-3 text-[var(--color-cyan)] border-t border-[var(--color-border)] pt-3">
                ✓ Error handling · Retry logic · Alerting · Runbooks
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
