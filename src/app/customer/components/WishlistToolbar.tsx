"use client";

import { useState } from "react";

const sortOptions = ["Newest", "Price: Low to High", "Price: High to Low", "Top Rated"];

// item count is passed down via a simple context-free prop pattern;
// for the mockup we hardcode the number that matches WishlistGrid's data
const ITEM_COUNT = 7;

export default function WishlistToolbar() {
  const [sortBy, setSortBy] = useState("Newest");

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
      {/* left: count */}
      <div className="flex items-center gap-3">
        <span className="text-sm text-charcoal/50">
          You have{" "}
          <span className="font-bold text-charcoal">{ITEM_COUNT} items</span> saved
        </span>

        {/* heart pill badge */}
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-terracotta/10">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="#C97A63"
            stroke="none"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          <span className="text-xs font-semibold text-terracotta">
            {ITEM_COUNT}
          </span>
        </span>
      </div>

      {/* right: sort */}
      <div className="flex items-center gap-2">
        <span className="text-xs text-charcoal/40">Sort by</span>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="text-xs font-semibold text-charcoal bg-white border border-charcoal/12 rounded-soft px-3 py-2 outline-none focus:border-terracotta transition-colors duration-200 cursor-pointer"
        >
          {sortOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}