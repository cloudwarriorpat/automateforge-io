import Link from "next/link";

const columns = [
  {
    title: "Services",
    links: [
      { label: "Automation Pipelines", href: "#services" },
      { label: "System Integration", href: "#services" },
      { label: "AI Agents", href: "#services" },
      { label: "Architecture Review", href: "#cta" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Case Studies", href: "#case-studies" },
      { label: "Pricing", href: "#pricing" },
      { label: "Contact", href: "mailto:hello@automateforge.io" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Architecture Guide", href: "#lead-magnet" },
      { label: "Pipeline Calculator", href: "#calculator" },
      { label: "FAQ", href: "#faq" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {/* Logo */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-gradient-to-br from-[#6C5CE7] to-[#00D2FF] flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 12h8" />
                  <path d="M12 4v16" />
                  <path d="M16 8l4 4-4 4" />
                </svg>
              </div>
              <span className="font-bold text-sm">AutomateForge</span>
            </Link>
            <p className="mt-3 text-xs text-[var(--color-text-muted)] leading-relaxed">
              Engineered in Europe.<br />Deployed globally.
            </p>
            {/* Social */}
            <div className="mt-4 flex gap-3">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors text-xs">LinkedIn</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors text-xs">X</a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors text-xs">GitHub</a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] mb-3">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[var(--color-text-muted)]">
            © 2026 AutomateForge.io — Engineered in Europe. Deployed globally.
          </p>
          <div className="flex gap-4 text-xs text-[var(--color-text-muted)]">
            <Link href="/legal" className="hover:text-[var(--color-text-secondary)] transition-colors">Privacy Policy</Link>
            <Link href="/legal" className="hover:text-[var(--color-text-secondary)] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
