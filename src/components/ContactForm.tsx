"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Placeholder — integrate with email service, Formspree, or API
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-slab-700 bg-slab-900 p-12 text-center">
        <CheckCircle className="h-12 w-12 text-mint-500" />
        <h3 className="mt-4 text-xl font-bold text-ash-100">Message sent.</h3>
        <p className="mt-2 text-sm text-ash-400">
          We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-xl border border-slab-700 bg-slab-900 p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ash-300">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-lg border border-slab-700 bg-slab-800 px-4 py-2.5 text-sm text-ash-100 placeholder-ash-500 outline-none transition-colors focus:border-forge-500"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ash-300">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-slab-700 bg-slab-800 px-4 py-2.5 text-sm text-ash-100 placeholder-ash-500 outline-none transition-colors focus:border-forge-500"
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-ash-300">
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          className="w-full rounded-lg border border-slab-700 bg-slab-800 px-4 py-2.5 text-sm text-ash-100 placeholder-ash-500 outline-none transition-colors focus:border-forge-500"
          placeholder="Company name (optional)"
        />
      </div>

      <div>
        <label htmlFor="interest" className="mb-1.5 block text-sm font-medium text-ash-300">
          I&apos;m interested in
        </label>
        <select
          id="interest"
          name="interest"
          className="w-full rounded-lg border border-slab-700 bg-slab-800 px-4 py-2.5 text-sm text-ash-100 outline-none transition-colors focus:border-forge-500"
          defaultValue=""
        >
          <option value="" disabled>
            Select a topic
          </option>
          <option value="reliability">Reliability & SRE</option>
          <option value="delivery">Delivery & CI/CD</option>
          <option value="cost">Cloud Cost & FinOps</option>
          <option value="security">Security & Hardening</option>
          <option value="retainer">Retainer / Ongoing Support</option>
          <option value="other">Something else</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ash-300">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full resize-none rounded-lg border border-slab-700 bg-slab-800 px-4 py-2.5 text-sm text-ash-100 placeholder-ash-500 outline-none transition-colors focus:border-forge-500"
          placeholder="Tell us about your project, team size, and what you're looking to solve..."
        />
      </div>

      <button
        type="submit"
        className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-forge-500 px-6 py-3 text-sm font-semibold text-slab-950 transition-colors hover:bg-forge-400 sm:w-auto"
      >
        Send Message
        <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </button>
    </form>
  );
}
