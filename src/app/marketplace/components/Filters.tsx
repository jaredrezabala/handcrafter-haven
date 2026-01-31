"use client";

import { useState } from "react";

const categories = [
  "All",
  "Ceramics",
  "Textiles",
  "Candles",
  "Jewelry",
  "Woodwork",
  "Basket Weaving",
  "Pottery",
];

const ratings = [5, 4, 3, 2, 1];

export default function Filters() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(500);
  const [minRating, setMinRating] = useState(0);

  const handleClear = () => {
    setActiveCategory("All");
    setPriceMin(0);
    setPriceMax(500);
    setMinRating(0);
  };

  const hasActiveFilters =
    activeCategory !== "All" || priceMin !== 0 || priceMax !== 500 || minRating !== 0;

  return (
    <div className="bg-white rounded-xl shadow-soft p-6 flex flex-col gap-7 sticky top-24">
      {/* Header row */}
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-bold text-charcoal uppercase tracking-widest">
          Filters
        </h2>
        {hasActiveFilters && (
          <button
            onClick={handleClear}
            className="text-xs font-semibold text-terracotta hover:text-charcoal transition-colors duration-200"
          >
            Clear all
          </button>
        )}
      </div>

      {/* Divider */}
      <hr className="border-charcoal/8" />

      {/* ─── Categories ─── */}
      <div>
        <h3 className="text-xs font-semibold text-charcoal/45 uppercase tracking-wider mb-3.5">
          Category
        </h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-terracotta text-white shadow-md"
                  : "bg-cream text-charcoal/60 hover:bg-charcoal/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Divider */}
      <hr className="border-charcoal/8" />

      {/* ─── Price Range ─── */}
      <div>
        <h3 className="text-xs font-semibold text-charcoal/45 uppercase tracking-wider mb-3.5">
          Price Range
        </h3>

        {/* min / max display */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-semibold text-charcoal bg-cream px-2.5 py-1 rounded-md">
            ${priceMin}
          </span>
          <span className="text-xs text-charcoal/30">—</span>
          <span className="text-xs font-semibold text-charcoal bg-cream px-2.5 py-1 rounded-md">
            ${priceMax}
          </span>
        </div>

        {/* Min slider */}
        <label className="flex items-center gap-3 mb-2.5">
          <span className="text-xs text-charcoal/40 w-6 shrink-0">Min</span>
          <input
            type="range"
            min={0}
            max={500}
            step={10}
            value={priceMin}
            onChange={(e) => {
              const v = Number(e.target.value);
              if (v < priceMax) setPriceMin(v);
            }}
            className="flex-1 accent-terracotta h-1.5 rounded-full cursor-pointer"
          />
        </label>

        {/* Max slider */}
        <label className="flex items-center gap-3">
          <span className="text-xs text-charcoal/40 w-6 shrink-0">Max</span>
          <input
            type="range"
            min={0}
            max={500}
            step={10}
            value={priceMax}
            onChange={(e) => {
              const v = Number(e.target.value);
              if (v > priceMin) setPriceMax(v);
            }}
            className="flex-1 accent-terracotta h-1.5 rounded-full cursor-pointer"
          />
        </label>
      </div>

      {/* Divider */}
      <hr className="border-charcoal/8" />

      {/* ─── Rating ─── */}
      <div>
        <h3 className="text-xs font-semibold text-charcoal/45 uppercase tracking-wider mb-3.5">
          Minimum Rating
        </h3>
        <div className="flex flex-col gap-2">
          {ratings.map((r) => (
            <button
              key={r}
              onClick={() => setMinRating(r === minRating ? 0 : r)}
              className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-left transition-all duration-200 ${
                minRating === r
                  ? "bg-mustard/15 border border-mustard/40"
                  : "hover:bg-cream border border-transparent"
              }`}
            >
              {/* stars */}
              <span className="flex gap-0.5">
                {Array.from({ length: 5 }, (_, i) => (
                  <svg
                    key={i}
                    width="14"
                    height="14"
                    viewBox="0 0 20 20"
                    fill={i < r ? "#E2B44A" : "#e5e7eb"}
                  >
                    <path d="M10 1l2.39 4.84 5.35.78-3.87 3.77.91 5.33L10 13.27l-4.78 2.45.91-5.33L2.26 6.62l5.35-.78z" />
                  </svg>
                ))}
              </span>
              <span className="text-xs text-charcoal/55">
                {r} {r === 1 ? "star" : "stars"} & up
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}