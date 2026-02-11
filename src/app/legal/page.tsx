import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy & Terms",
  description: "AutomateForge privacy policy and terms of service.",
};

export default function LegalPage() {
  return (
    <div className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-extrabold text-ash-100">
          Privacy Policy & Terms
        </h1>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-ash-100">Privacy Policy</h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-ash-400">
            <p>
              <strong className="text-ash-200">Data we collect:</strong> When
              you submit a contact form, we collect your name, email address,
              company name (optional), and message content. We use this
              information solely to respond to your inquiry.
            </p>
            <p>
              <strong className="text-ash-200">Analytics:</strong> We use
              privacy-respecting analytics to understand how visitors use our
              site. No personal data is shared with third parties for
              advertising purposes.
            </p>
            <p>
              <strong className="text-ash-200">Cookies:</strong> We use only
              essential cookies required for site functionality. No tracking
              cookies are used without your consent.
            </p>
            <p>
              <strong className="text-ash-200">Data retention:</strong> Contact
              form submissions are retained for the duration of the business
              relationship. You can request deletion at any time by emailing
              hello@automateforge.io.
            </p>
            <p>
              <strong className="text-ash-200">Your rights:</strong> Under GDPR
              and applicable data protection laws, you have the right to access,
              rectify, delete, or port your personal data. Contact us at
              hello@automateforge.io to exercise these rights.
            </p>
          </div>
        </section>

        <div className="spark-line my-12" />

        <section>
          <h2 className="text-xl font-bold text-ash-100">Terms of Service</h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-ash-400">
            <p>
              <strong className="text-ash-200">Services:</strong> AutomateForge
              provides productized DevOps engineering services as described on
              our product pages. Each engagement is governed by a scope document
              agreed upon before work begins.
            </p>
            <p>
              <strong className="text-ash-200">Payment:</strong> Prices are
              listed in EUR and PLN (net, excluding applicable taxes). Payment
              terms are defined in the scope document. Standard terms: 50%
              upfront, 50% on delivery for engagements over €3,000.
            </p>
            <p>
              <strong className="text-ash-200">Intellectual property:</strong>{" "}
              All deliverables become the full property of the client upon
              payment. AutomateForge retains no proprietary rights to delivered
              work.
            </p>
            <p>
              <strong className="text-ash-200">Liability:</strong> Our liability
              is limited to the total amount paid for the specific engagement.
              We are not liable for indirect or consequential damages.
            </p>
            <p>
              <strong className="text-ash-200">Confidentiality:</strong> We
              treat all client data, infrastructure details, and business
              information as confidential. We are happy to sign NDAs before any
              engagement begins.
            </p>
            <p>
              <strong className="text-ash-200">Governing law:</strong> These
              terms are governed by the laws of Poland, with disputes resolved
              in the competent courts of Poland.
            </p>
          </div>
        </section>

        <div className="spark-line my-12" />

        <p className="text-xs text-ash-500">
          Last updated: February 2026. For questions about these terms, contact
          hello@automateforge.io.
        </p>
      </div>
    </div>
  );
}
