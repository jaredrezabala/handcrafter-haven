"use client";

import { useState } from "react";

export default function MarketplaceHeader() {
  const [query, setQuery] = useState("");

  return (
    <div className="relative bg-white border-b border-charcoal/8 overflow-hidden">
      {/* subtle decorative blobs */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-terracotta rounded-full blur-3xl opacity-[0.06] pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-sage rounded-full blur-3xl opacity-[0.07] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          {/* left: title */}
          <div>
            <span className="inline-block px-3.5 py-1 rounded-full bg-cream text-terracotta text-xs font-semibold tracking-wide mb-3">
              Browse
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-charcoal leading-tight">
              Marketplace
            </h1>
            <p className="mt-2 text-charcoal/50 text-sm sm:text-base">
              Discover handcrafted treasures from talented artisans around the
              world.
            </p>
          </div>

          {/* right: search */}
          <div className="w-full sm:w-80">
            <div className="relative">
              {/* magnifying glass icon */}
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/30 pointer-events-none">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </span>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full pl-11 pr-4 py-3 bg-cream text-charcoal text-sm placeholder-charcoal/35 rounded-soft outline-none border border-charcoal/10 focus:border-terracotta focus:ring-4 focus:ring-terracotta/10 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}