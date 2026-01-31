"use client";

import { useState } from "react";
import Link from "next/link";

interface WishlistItem {
  id: number;
  title: string;
  artisan: string;
  price: number;
  rating: number;
  reviews: number;
  addedDate: string;
  emoji: string;
  gradient: string;
}

const initialItems: WishlistItem[] = [
  { id: 1, title: "Hand-Painted Ceramic Vase", artisan: "Maria Rosales", price: 68, rating: 4.8, reviews: 34, addedDate: "Jan 29", emoji: "🏺", gradient: "from-[#FFE5D9] to-[#C97A63]" },
  { id: 2, title: "Silver Leaf Earrings", artisan: "Andres Vega", price: 78, rating: 4.7, reviews: 42, addedDate: "Jan 27", emoji: "✨", gradient: "from-[#E8EFF8] to-[#7D8DA0]" },
  { id: 3, title: "Soy & Vanilla Candle Set", artisan: "Lucas Herrera", price: 35, rating: 4.9, reviews: 58, addedDate: "Jan 25", emoji: "🕯️", gradient: "from-[#FFF4D9] to-[#E2B44A]" },
  { id: 4, title: "Macramé Plant Hanger", artisan: "Sofia Mendez", price: 36, rating: 4.5, reviews: 44, addedDate: "Jan 22", emoji: "🪴", gradient: "from-[#EBF2EC] to-[#6B9980]" },
  { id: 5, title: "Carved Wooden Bowl", artisan: "Pedro Almeida", price: 92, rating: 4.4, reviews: 15, addedDate: "Jan 18", emoji: "🪵", gradient: "from-[#F5EBE0] to-[#A0785A]" },
  { id: 6, title: "Copper Ring with Gem", artisan: "Andres Vega", price: 95, rating: 4.7, reviews: 29, addedDate: "Jan 14", emoji: "💍", gradient: "from-[#E4F0F8] to-[#6A9BBF]" },
  { id: 7, title: "Handknit Wool Scarf", artisan: "Sofia Mendez", price: 55, rating: 4.6, reviews: 19, addedDate: "Jan 10", emoji: "🧶", gradient: "from-[#EEE8F0] to-[#8A7D9D]" },
];

function StarRating({ rating, reviews }: { rating: number; reviews: number }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }, (_, i) => {
          const fill =
            i < full ? "#E2B44A" : i === full && half ? "url(#halfStar)" : "#e5e7eb";
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

export default function WishlistGrid() {
  const [items, setItems] = useState<WishlistItem[]>(initialItems);
  // track which card is currently animating out
  const [removing, setRemoving] = useState<number | null>(null);

  const handleRemove = (id: number) => {
    setRemoving(id);
    // let the scale-out animation finish, then drop from state
    setTimeout(() => {
      setItems((prev) => prev.filter((item) => item.id !== id));
      setRemoving(null);
    }, 300);
  };

  /* ── empty state ── */
  if (items.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-soft p-16 flex flex-col items-center text-center">
        <div className="w-24 h-24 rounded-full bg-cream flex items-center justify-center mb-6">
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#C97A63"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-charcoal mb-2">
          Your wishlist is empty
        </h3>
        <p className="text-charcoal/45 text-sm max-w-sm mb-6">
          Start saving products you love by clicking the heart icon on any item
          in the marketplace.
        </p>
        <Link
          href="/marketplace"
          className="px-6 py-2.5 bg-terracotta text-white text-sm font-semibold rounded-soft shadow-soft hover:shadow-hover hover:-translate-y-0.5 transition-all duration-300"
        >
          Browse Marketplace
        </Link>
      </div>
    );
  }

  /* ── grid ── */
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
      {items.map((item, index) => (
        <div
          key={item.id}
          className="group bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
          style={{
            animation: `fadeUp 0.4s ease both`,
            animationDelay: `${index * 60}ms`,
            transform: removing === item.id ? "scale(0.92)" : undefined,
            opacity: removing === item.id ? 0 : 1,
            transition: removing === item.id
              ? "transform 0.3s ease, opacity 0.3s ease"
              : undefined,
          }}
        >
          {/* image area */}
          <div
            className={`relative h-52 bg-gradient-to-br ${item.gradient} flex items-center justify-center overflow-hidden`}
          >
            <span className="text-6xl relative z-10 group-hover:scale-110 transition-transform duration-500">
              {item.emoji}
            </span>

            {/* shimmer */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                style={{ transform: "skewX(-20deg)" }}
              />
            </div>

            {/* filled heart — always visible, click removes */}
            <button
              onClick={() => handleRemove(item.id)}
              className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm shadow-md hover:scale-110 transition-all duration-200"
              aria-label="Remove from wishlist"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="#C97A63"
                stroke="#C97A63"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </button>

            {/* "Added" date badge */}
            <span className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded-full bg-white/85 backdrop-blur-sm text-xs font-semibold text-charcoal/60">
              Added {item.addedDate}
            </span>
          </div>

          {/* info */}
          <div className="p-4 flex flex-col flex-1 justify-between gap-3">
            <div>
              <h3 className="text-sm font-bold text-charcoal leading-snug">
                {item.title}
              </h3>
              <Link
                href={`/artisan/${item.artisan.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-xs text-sage hover:text-terracotta transition-colors duration-200 mt-0.5 inline-block"
              >
                by {item.artisan}
              </Link>
            </div>

            <StarRating rating={item.rating} reviews={item.reviews} />

            {/* price + actions */}
            <div className="pt-3 border-t border-charcoal/6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-base font-bold text-charcoal">
                  ${item.price}
                </span>
              </div>

              {/* two action buttons stacked full width */}
              <div className="flex flex-col gap-2">
                <button className="w-full px-4 py-2 bg-terracotta text-white text-xs font-semibold rounded-soft hover:bg-[#B56952] hover:-translate-y-0.5 transition-all duration-200 shadow-sm">
                  Add to Cart
                </button>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="w-full px-4 py-1.5 border border-charcoal/15 text-charcoal/45 text-xs font-semibold rounded-soft hover:border-terracotta hover:text-terracotta transition-all duration-200"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}