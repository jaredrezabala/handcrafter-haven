"use client";

import { useState } from "react";
import Link from "next/link";

export default function CartSummary() {
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);

  // These are static mockup values that mirror the initial CartItems data
  const subtotal = 285; // 68 + 35*2 + 55 + 92
  const shipping = 12.0;
  const tax = subtotal * 0.08;
  const discount = promoApplied ? subtotal * 0.1 : 0; // 10 % off when promo applied
  const total = subtotal + shipping + tax - discount;

  const handleApplyPromo = () => {
    if (promoCode.trim().length > 0) {
      setPromoApplied(true);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-soft overflow-hidden">
      {/* header strip */}
      <div className="bg-charcoal px-5 py-4">
        <h2 className="text-sm font-bold text-white uppercase tracking-widest">
          Order Summary
        </h2>
      </div>

      <div className="p-5 flex flex-col gap-5">
        {/* line items */}
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <span className="text-sm text-charcoal/55">Subtotal</span>
            <span className="text-sm font-semibold text-charcoal">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-charcoal/55">Shipping</span>
            <span className="text-sm font-semibold text-charcoal">${shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-charcoal/55">Tax (8%)</span>
            <span className="text-sm font-semibold text-charcoal">${tax.toFixed(2)}</span>
          </div>
          {promoApplied && (
            <div className="flex justify-between text-sage">
              <span className="text-sm font-medium">Promo (10% off)</span>
              <span className="text-sm font-semibold">−${discount.toFixed(2)}</span>
            </div>
          )}
        </div>

        {/* divider */}
        <hr className="border-charcoal/8" />

        {/* total */}
        <div className="flex justify-between items-end">
          <span className="text-sm font-bold text-charcoal uppercase tracking-wide">
            Total
          </span>
          <span className="text-2xl font-bold text-charcoal">${total.toFixed(2)}</span>
        </div>

        {/* divider */}
        <hr className="border-charcoal/8" />

        {/* promo code */}
        <div>
          <label className="text-xs font-semibold text-charcoal/45 uppercase tracking-wider">
            Promo Code
          </label>
          <div className="flex gap-2 mt-2">
            <input
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              disabled={promoApplied}
              placeholder="e.g. HAVEN10"
              className="flex-1 px-3 py-2 bg-cream text-charcoal text-xs placeholder-charcoal/30 rounded-soft outline-none border border-charcoal/10 focus:border-terracotta focus:ring-4 focus:ring-terracotta/10 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <button
              onClick={handleApplyPromo}
              disabled={promoApplied || promoCode.trim().length === 0}
              className="px-4 py-2 bg-sage text-white text-xs font-semibold rounded-soft hover:bg-[#6B8A7A] transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Apply
            </button>
          </div>
          {promoApplied && (
            <p className="text-xs text-sage mt-2 font-medium">✓ Promo code applied!</p>
          )}
        </div>

        {/* checkout button */}
        <Link
          href="#"
          className="block w-full text-center px-6 py-3.5 bg-terracotta text-white text-sm font-bold rounded-soft shadow-soft hover:shadow-hover hover:-translate-y-0.5 transition-all duration-300 mt-1"
        >
          Proceed to Checkout
        </Link>

        {/* secure badge */}
        <p className="text-center text-xs text-charcoal/35 flex items-center justify-center gap-1.5">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          Secure checkout — your information is encrypted
        </p>
      </div>
    </div>
  );
}