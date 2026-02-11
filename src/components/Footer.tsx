import Link from "next/link";
import { Flame } from "lucide-react";

const productLinks = [
  { href: "/products#platform", label: "Developer Platform" },
  { href: "/products#compliance", label: "Compliance & Governance" },
  { href: "/products#delivery", label: "Engineering Delivery" },
  { href: "/products#reliability", label: "Reliability & Observability" },
  { href: "/products#ai", label: "AI Infrastructure" },
];

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/legal", label: "Privacy Policy" },
  { href: "/legal", label: "Terms of Service" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slab-700/50 bg-slab-950">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Flame className="h-5 w-5 text-forge-500" />
              <span className="text-base font-bold text-ash-100">
                Automate<span className="text-forge-500">Forge</span>
              </span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-ash-500">
              Platform engineering, productized.
              <br />
              Fixed scope. No consulting fog.
              <br />
              Results in days.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ash-400">
              Products
            </h4>
            <ul className="mt-4 space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-ash-500 transition-colors hover:text-ash-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ash-400">
              Company
            </h4>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-ash-500 transition-colors hover:text-ash-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ash-400">
              Legal
            </h4>
            <ul className="mt-4 space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-ash-500 transition-colors hover:text-ash-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slab-700/50 pt-8 sm:flex-row">
          <p className="text-xs text-ash-500">
            &copy; {new Date().getFullYear()} AutomateForge. All rights reserved.
          </p>
          <p className="text-xs text-ash-500">
            Platform engineering for European tech teams.
          </p>
        </div>
      </div>
    </footer>
  );
}
