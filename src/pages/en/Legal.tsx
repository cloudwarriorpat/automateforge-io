export default function EnLegal() {
  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-3xl mx-auto prose prose-invert">
        <h1 className="text-3xl font-bold text-white mb-8">Legal</h1>
        <div className="glass-card p-8 space-y-8 text-steel-300">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Privacy Policy</h2>
            <p className="mb-3">
              AutomateForge ("we", "us") is committed to protecting your privacy. This policy explains how we collect, use, and protect your personal data in compliance with the General Data Protection Regulation (GDPR).
            </p>
            <h3 className="text-lg font-medium text-white mb-2">Data We Collect</h3>
            <ul className="list-disc pl-6 space-y-1 mb-3">
              <li>Contact information submitted through our forms (name, email, company)</li>
              <li>Website usage data via Google Analytics (anonymized, with your consent)</li>
              <li>Communication records when you contact us</li>
            </ul>
            <h3 className="text-lg font-medium text-white mb-2">How We Use Your Data</h3>
            <ul className="list-disc pl-6 space-y-1 mb-3">
              <li>To respond to your inquiries and provide our services</li>
              <li>To improve our website and user experience</li>
              <li>To send service-related communications (never marketing without consent)</li>
            </ul>
            <h3 className="text-lg font-medium text-white mb-2">Your Rights</h3>
            <p className="mb-2">Under GDPR, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-1 mb-3">
              <li>Access your personal data</li>
              <li>Rectify inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Restrict or object to processing</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <h3 className="text-lg font-medium text-white mb-2">Cookies</h3>
            <p className="mb-3">
              We use Google Analytics to understand website usage. Analytics cookies are only set after you provide explicit consent via the cookie banner. You can withdraw consent at any time by clearing your cookies.
            </p>
            <h3 className="text-lg font-medium text-white mb-2">Data Retention</h3>
            <p>
              We retain contact form submissions for the duration of our business relationship. Website analytics data is anonymized and retained for 14 months.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Terms of Service</h2>
            <p className="mb-3">All engagements are governed by individual service agreements. Service descriptions on this website represent typical scope and may be adjusted during the scoping process.</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Pricing shown is in EUR and represents starting prices; final pricing is confirmed after the discovery call.</li>
              <li>All intellectual property created during engagements is transferred to the client upon full payment.</li>
              <li>We offer a satisfaction guarantee: if we cannot deliver the agreed scope, you receive a full refund.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Contact</h2>
            <p>
              For any privacy-related inquiries or to exercise your GDPR rights, contact us at:
            </p>
            <p className="mt-2">
              AutomateForge<br />
              Email: <a href="mailto:hello@automateforge.io" className="text-brand-400 hover:text-brand-300">hello@automateforge.io</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
