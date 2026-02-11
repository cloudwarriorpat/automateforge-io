"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Flame } from "lucide-react";

const navLinks = [
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slab-700/50 bg-slab-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group" onClick={() => setMobileOpen(false)}>
          <Flame className="h-6 w-6 text-forge-500 transition-transform group-hover:scale-110" />
          <span className="text-lg font-bold tracking-tight text-ash-100">
            Automate<span className="text-forge-500">Forge</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ash-400 transition-colors hover:text-ash-100"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-lg bg-forge-500 px-4 py-2 text-sm font-semibold text-slab-950 transition-colors hover:bg-forge-400"
          >
            Book a Call
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg p-2 text-ash-400 transition-colors hover:text-ash-100 md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-slab-700/50 bg-slab-950/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-ash-300 transition-colors hover:bg-slab-800 hover:text-ash-100"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-lg bg-forge-500 px-3 py-2.5 text-center text-sm font-semibold text-slab-950 transition-colors hover:bg-forge-400"
            >
              Book a Call
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
