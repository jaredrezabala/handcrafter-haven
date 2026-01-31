"use client";

import { useState } from "react";
import Link from "next/link";

interface Product {
  id: number;
  title: string;
  artisan: string;
  price: number;
  rating: number;
  reviews: number;
  category: string;
  emoji: string;
  gradient: string;
}

const products: Product[] = [
  { id: 1, title: "Hand-Painted Ceramic Vase", artisan: "Maria Rosales", price: 68, rating: 4.8, reviews: 34, category: "Ceramics", emoji: "🏺", gradient: "from-[#FFE5D9] to-[#C97A63]" },
  { id: 2, title: "Woven Wall Hanging", artisan: "Elena Fuentes", price: 42, rating: 4.5, reviews: 21, category: "Textiles", emoji: "🧵", gradient: "from-[#E8F3EE] to-[#7D9D8C]" },
  { id: 3, title: "Soy & Vanilla Candle Set", artisan: "Lucas Herrera", price: 35, rating: 4.9, reviews: 58, category: "Candles", emoji: "🕯️", gradient: "from-[#FFF4D9] to-[#E2B44A]" },
  { id: 4, title: "Handknit Wool Scarf", artisan: "Sofia Mendez", price: 55, rating: 4.6, reviews: 19, category: "Textiles", emoji: "🧶", gradient: "from-[#EEE8F0] to-[#8A7D9D]" },
  { id: 5, title: "Silver Leaf Earrings", artisan: "Andres Vega", price: 78, rating: 4.7, reviews: 42, category: "Jewelry", emoji: "✨", gradient: "from-[#E8EFF8] to-[#7D8DA0]" },
  { id: 6, title: "Carved Wooden Bowl", artisan: "Pedro Almeida", price: 92, rating: 4.4, reviews: 15, category: "Woodwork", emoji: "🪵", gradient: "from-[#F5EBE0] to-[#A0785A]" },
  { id: 7, title: "Handwoven Placemat Set", artisan: "Carmen Loza", price: 48, rating: 4.3, reviews: 27, category: "Basket Weaving", emoji: "🧺", gradient: "from-[#E6F0E8] to-[#5D8A6B]" },
  { id: 8, title: "Glazed Pottery Mugs", artisan: "Maria Rosales", price: 44, rating: 4.8, reviews: 61, category: "Ceramics", emoji: "☕", gradient: "from-[#F0E0D9] to-[#B86A4E]" },
  { id: 9, title: "Beeswax Pillar Candles", artisan: "Lucas Herrera", price: 29, rating: 4.6, reviews: 38, category: "Candles", emoji: "🕯️", gradient: "from-[#FFFBE6] to-[#D4A832]" },
  { id: 10, title: "Macramé Plant Hanger", artisan: "Sofia Mendez", price: 36, rating: 4.5, reviews: 44, category: "Textiles", emoji: "🪴", gradient: "from-[#EBF2EC] to-[#6B9980]" },
  { id: 11, title: "Hand-Carved Figurine", artisan: "Pedro Almeida", price: 115, rating: 4.9, reviews: 12, category: "Woodwork", emoji: "🗿", gradient: "from-[#F2E8DC] to-[#9A7050]" },
  { id: 12, title: "Copper Ring with Gem", artisan: "Andres Vega", price: 95, rating: 4.7, reviews: 29, category: "Jewelry", emoji: "💍", gradient: "from-[#E4F0F8] to-[#6A9BBF]" },
];

const sortOptions = ["Featured", "Price: Low to High", "Price: High to Low", "Top Rated", "Newest"];

function StarRating({ rating, reviews }: { rating: number; reviews: number }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }, (_, i) => {
          const fill = i < full ? "#E2B44A" : i === full && half ? "url(#halfStar)" : "#e5e7eb";
          return (
            <svg key={i} width="13" height="13" viewBox="0 0 20 20" fill={fill}>
              <defs>
                <linearGradient id="halfStar">
                  <stop offset="50%" stopColor="#E2B44A" />
                  <stop offset="50%" stopColor="#e5e7eb" />
                </linearGradient>
              </defs>
              <path d="M10 1l2.39 4.84 5.35.78-3.87 3.77.91 5.33L10 13.27l-4.78 2.45.91-5.33L2.26 6.62l5.35-.78z" />
            </svg>
          );
        })}
      </div>
      <span className="text-xs font-semibold text-charcoal/70">{rating}</span>
      <span className="text-xs text-charcoal/35">({reviews})</span>
    </div>
  );
}

export default function Grid() {
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [sortBy, setSortBy] = useState("Featured");

  const toggleFav = (id: number) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const sorted = [...products].sort((a, b) => {
    switch (sortBy) {
      case "Price: Low to High": return a.price - b.price;
      case "Price: High to Low": return b.price - a.price;
      case "Top Rated": return b.rating - a.rating;
      default: return 0;
    }
  });

  return (
    <div>
      {/* top bar: results count + sort */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
        <p className="text-sm text-charcoal/50">
          Showing <span className="font-semibold text-charcoal">{products.length}</span> products
        </p>

        <div className="flex items-center gap-2">
          <span className="text-xs text-charcoal/40">Sort by</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-xs font-semibold text-charcoal bg-white border border-charcoal/12 rounded-soft px-3 py-2 outline-none focus:border-terracotta transition-colors duration-200 cursor-pointer"
          >
            {sortOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
      </div>

      {/* product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {sorted.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-400 hover:-translate-y-1.5 flex flex-col"
          >
            {/* image area */}
            <div className={`relative h-56 bg-gradient-to-br ${product.gradient} flex items-center justify-center overflow-hidden`}>
              <span className="text-6xl relative z-10 group-hover:scale-110 transition-transform duration-500">
                {product.emoji}
              </span>

              {/* shimmer on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent" style={{ transform: "skewX(-20deg)" }} />
              </div>

              {/* heart button */}
              <button
                onClick={() => toggleFav(product.id)}
                className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm shadow-md hover:scale-110 transition-all duration-200"
                aria-label={favorites.has(product.id) ? "Remove from wishlist" : "Add to wishlist"}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill={favorites.has(product.id) ? "#C97A63" : "none"}
                  stroke="#C97A63"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </button>

              {/* category badge */}
              <span className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded-full bg-white/85 backdrop-blur-sm text-xs font-semibold text-charcoal/70">
                {product.category}
              </span>
            </div>

            {/* info */}
            <div className="p-4 flex flex-col flex-1 justify-between gap-3">
              <div>
                <h3 className="text-sm font-bold text-charcoal leading-snug">
                  {product.title}
                </h3>
                <Link
                  href={`/artisan/${product.artisan.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-xs text-sage hover:text-terracotta transition-colors duration-200 mt-0.5 inline-block"
                >
                  by {product.artisan}
                </Link>
              </div>

              <StarRating rating={product.rating} reviews={product.reviews} />

              {/* price + add to cart row */}
              <div className="flex items-center justify-between pt-2 border-t border-charcoal/6">
                <span className="text-base font-bold text-charcoal">
                  ${product.price}
                </span>
                <button className="px-4 py-1.5 bg-terracotta text-white text-xs font-semibold rounded-soft hover:bg-[#B56952] hover:-translate-y-0.5 transition-all duration-200 shadow-sm">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}