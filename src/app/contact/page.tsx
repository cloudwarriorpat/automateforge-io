import type { Metadata } from "next";
import { Calendar, Mail, MessageSquare } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with AutomateForge. Book a free scoping call or send us a message about your DevOps needs.",
};

export default function ContactPage() {
  return (
    <div className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Left column — info */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-extrabold text-ash-100 sm:text-4xl">
              Let&apos;s talk.
            </h1>
            <p className="mt-4 text-base leading-relaxed text-ash-400">
              Tell us about your infrastructure challenges. We&apos;ll respond
              within 24 hours with a recommendation — or an honest &ldquo;we&apos;re
              not the right fit.&rdquo;
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex gap-4">
                <div className="rounded-lg bg-forge-500/10 p-2.5 text-forge-500 h-fit">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-ash-100">
                    Book a free scoping call
                  </h3>
                  <p className="mt-1 text-sm text-ash-400">
                    30 minutes. No commitment. We&apos;ll map your biggest pain
                    point to a package.
                  </p>
                  <a
                    href="https://calendly.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm font-medium text-forge-500 transition-colors hover:text-forge-400"
                  >
                    Schedule on Calendly &rarr;
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="rounded-lg bg-forge-500/10 p-2.5 text-forge-500 h-fit">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-ash-100">
                    Email us directly
                  </h3>
                  <p className="mt-1 text-sm text-ash-400">
                    For quick questions or detailed briefs.
                  </p>
                  <a
                    href="mailto:hello@automateforge.io"
                    className="mt-2 inline-block text-sm font-medium text-forge-500 transition-colors hover:text-forge-400"
                  >
                    hello@automateforge.io
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="rounded-lg bg-forge-500/10 p-2.5 text-forge-500 h-fit">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-ash-100">
                    Response time
                  </h3>
                  <p className="mt-1 text-sm text-ash-400">
                    We respond within 24 hours on business days. Usually faster.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column — form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
