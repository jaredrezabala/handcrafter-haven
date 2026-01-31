"use client";

import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "Marketplace", href: "/marketplace" },
    { label: "Artisans", href: "/artisans" },
    { label: "About", href: "/about" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-terracotta/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-charcoal tracking-tight">
            Handcrafted <span className="text-terracotta">Haven</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-charcoal/70 hover:text-terracotta transition-colors duration-300 relative group"
              >
                {link.label}
                {/* animated underline */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-terracotta group-hover:w-full transition-all duration-300" />
              </Link>
            ))}

            <Link
              href="/auth/login"
              className="ml-2 px-5 py-2 bg-terracotta text-white text-sm font-semibold rounded-soft shadow-soft hover:shadow-hover hover:-translate-y-0.5 transition-all duration-300"
            >
              Sign In
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 bg-charcoal rounded-full transition-all duration-300 ${
                menuOpen ? "w-5 translate-y-2 rotate-45" : "w-5"
              }`}
            />
            <span
              className={`block h-0.5 bg-charcoal rounded-full transition-all duration-300 ${
                menuOpen ? "opacity-0 w-5" : "w-4"
              }`}
            />
            <span
              className={`block h-0.5 bg-charcoal rounded-full transition-all duration-300 ${
                menuOpen ? "w-5 -translate-y-2 -rotate-45" : "w-5"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-5 flex flex-col gap-1 border-t border-charcoal/5">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="mt-3 text-sm font-medium text-charcoal/70 hover:text-terracotta transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/auth/login"
            onClick={() => setMenuOpen(false)}
            className="mt-4 text-center px-5 py-2.5 bg-terracotta text-white text-sm font-semibold rounded-soft"
          >
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
}