"use client";

import { useState } from "react";

const tabs = ["All", "Pending", "Delivered", "Cancelled"];

export default function OrdersFilter() {
  const [active, setActive] = useState("All");

  return (
    <div className="flex gap-2 flex-wrap">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className={`px-4.5 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
            active === tab
              ? "bg-terracotta text-white shadow-md"
              : "bg-white text-charcoal/55 hover:text-charcoal shadow-soft hover:shadow-md"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}