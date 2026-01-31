"use client";

import { useState } from "react";
import Link from "next/link";

interface CartItem {
  id: number;
  title: string;
  artisan: string;
  price: number;
  quantity: number;
  emoji: string;
  gradient: string;
}

const initialItems: CartItem[] = [
  { id: 1, title: "Hand-Painted Ceramic Vase", artisan: "Maria Rosales", price: 68, quantity: 1, emoji: "🏺", gradient: "from-[#FFE5D9] to-[#C97A63]" },
  { id: 2, title: "Soy & Vanilla Candle Set", artisan: "Lucas Herrera", price: 35, quantity: 2, emoji: "🕯️", gradient: "from-[#FFF4D9] to-[#E2B44A]" },
  { id: 3, title: "Handknit Wool Scarf", artisan: "Sofia Mendez", price: 55, quantity: 1, emoji: "🧶", gradient: "from-[#EEE8F0] to-[#8A7D9D]" },
  { id: 4, title: "Carved Wooden Bowl", artisan: "Pedro Almeida", price: 92, quantity: 1, emoji: "🪵", gradient: "from-[#F5EBE0] to-[#A0785A]" },
];

export default function CartItems() {
  const [items, setItems] = useState<CartItem[]>(initialItems);

  const updateQty = (id: number, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + delta } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  /* ── empty state ── */
  if (items.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-soft p-16 flex flex-col items-center text-center">
        <div className="text-7xl mb-6 opacity-60">🛒</div>
        <h3 className="text-xl font-bold text-charcoal mb-2">Your cart is empty</h3>
        <p className="text-charcoal/45 text-sm max-w-sm mb-6">
          Looks like you haven&apos;t added anything yet. Browse the marketplace to
          discover handcrafted treasures.
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

  /* ── item list ── */
  return (
    <div className="flex flex-col gap-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-xl shadow-soft p-4 sm:p-5 flex flex-col sm:flex-row gap-4 items-start sm:items-center transition-all duration-300 hover:shadow-hover"
        >
          {/* thumbnail */}
          <div
            className={`shrink-0 w-24 h-24 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center text-3xl`}
          >
            {item.emoji}
          </div>

          {/* info */}
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-bold text-charcoal truncate">
              {item.title}
            </h3>
            <Link
              href={`/artisan/${item.artisan.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-xs text-sage hover:text-terracotta transition-colors duration-200 mt-0.5 inline-block"
            >
              by {item.artisan}
            </Link>
            <p className="text-xs text-charcoal/40 mt-1">
              Unit price: ${item.price}
            </p>
          </div>

          {/* qty stepper */}
          <div className="flex items-center gap-0">
            <button
              onClick={() => updateQty(item.id, -1)}
              className="w-8 h-8 flex items-center justify-center rounded-l-md bg-cream text-charcoal/60 hover:bg-charcoal/8 hover:text-charcoal transition-colors duration-200 text-lg leading-none"
            >
              −
            </button>
            <span className="w-10 h-8 flex items-center justify-center bg-cream text-sm font-bold text-charcoal border-l border-r border-charcoal/8">
              {item.quantity}
            </span>
            <button
              onClick={() => updateQty(item.id, 1)}
              className="w-8 h-8 flex items-center justify-center rounded-r-md bg-cream text-charcoal/60 hover:bg-charcoal/8 hover:text-charcoal transition-colors duration-200 text-lg leading-none"
            >
              +
            </button>
          </div>

          {/* subtotal */}
          <div className="w-20 text-right">
            <p className="text-sm font-bold text-charcoal">
              ${item.price * item.quantity}
            </p>
            {item.quantity > 1 && (
              <p className="text-xs text-charcoal/35">{item.quantity} × ${item.price}</p>
            )}
          </div>

          {/* delete button */}
          <button
            onClick={() => removeItem(item.id)}
            className="shrink-0 w-8 h-8 flex items-center justify-center rounded-lg text-charcoal/30 hover:text-terracotta hover:bg-terracotta/8 transition-all duration-200"
            aria-label="Remove item"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 6h18" />
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
              <path d="M10 11v6" />
              <path d="M14 11v6" />
              <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
}