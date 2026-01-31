import Link from "next/link";

interface OrderItem {
  emoji: string;
  title: string;
  gradient: string;
}

interface Order {
  id: string;
  date: string;
  status: "Pending" | "Delivered" | "Cancelled";
  total: number;
  items: OrderItem[];
}

const orders: Order[] = [
  {
    id: "ORD-2026-0041",
    date: "Jan 28, 2026",
    status: "Pending",
    total: 103,
    items: [
      { emoji: "🏺", title: "Hand-Painted Ceramic Vase", gradient: "from-[#FFE5D9] to-[#C97A63]" },
      { emoji: "🕯️", title: "Soy & Vanilla Candle Set", gradient: "from-[#FFF4D9] to-[#E2B44A]" },
    ],
  },
  {
    id: "ORD-2026-0038",
    date: "Jan 22, 2026",
    status: "Delivered",
    total: 55,
    items: [
      { emoji: "🧶", title: "Handknit Wool Scarf", gradient: "from-[#EEE8F0] to-[#8A7D9D]" },
    ],
  },
  {
    id: "ORD-2026-0035",
    date: "Jan 15, 2026",
    status: "Delivered",
    total: 160,
    items: [
      { emoji: "🪵", title: "Carved Wooden Bowl", gradient: "from-[#F5EBE0] to-[#A0785A]" },
      { emoji: "✨", title: "Silver Leaf Earrings", gradient: "from-[#E8EFF8] to-[#7D8DA0]" },
    ],
  },
  {
    id: "ORD-2026-0030",
    date: "Jan 8, 2026",
    status: "Cancelled",
    total: 48,
    items: [
      { emoji: "🧺", title: "Handwoven Placemat Set", gradient: "from-[#E6F0E8] to-[#5D8A6B]" },
    ],
  },
  {
    id: "ORD-2026-0027",
    date: "Dec 30, 2025",
    status: "Delivered",
    total: 44,
    items: [
      { emoji: "☕", title: "Glazed Pottery Mugs", gradient: "from-[#F0E0D9] to-[#B86A4E]" },
    ],
  },
];

/* colour map for the status badge */
const statusStyle: Record<
  string,
  { bg: string; text: string; dot: string }
> = {
  Pending:   { bg: "bg-terracotta/10",  text: "text-terracotta",  dot: "bg-terracotta" },
  Delivered: { bg: "bg-sage/10",        text: "text-sage",        dot: "bg-sage" },
  Cancelled: { bg: "bg-[#e8d0d0]",      text: "text-[#9b4444]",  dot: "bg-[#9b4444]" },
};

export default function OrdersList() {
  return (
    <div className="flex flex-col gap-4">
      {orders.map((order) => {
        const style = statusStyle[order.status];

        return (
          <div
            key={order.id}
            className="bg-white rounded-xl shadow-soft overflow-hidden transition-all duration-300 hover:shadow-hover"
          >
            {/* ── header row ── */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-5 pt-5 pb-3">
              <div className="flex items-center gap-3">
                <h3 className="text-sm font-bold text-charcoal">{order.id}</h3>

                {/* status badge */}
                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold ${style.bg} ${style.text}`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
                  {order.status}
                </span>
              </div>

              <span className="text-xs text-charcoal/40">{order.date}</span>
            </div>

            {/* ── product thumbnails ── */}
            <div className="px-5 py-3 flex gap-3 overflow-x-auto">
              {order.items.map((item, i) => (
                <div
                  key={i}
                  className="shrink-0 flex items-center gap-2.5 bg-cream rounded-lg px-3 py-2"
                >
                  <div
                    className={`w-10 h-10 rounded-md bg-gradient-to-br ${item.gradient} flex items-center justify-center text-lg`}
                  >
                    {item.emoji}
                  </div>
                  <span className="text-xs font-medium text-charcoal/70 whitespace-nowrap">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

            {/* ── footer row ── */}
            <div className="flex items-center justify-between px-5 pb-4 pt-2 border-t border-charcoal/6">
              <span className="text-sm font-bold text-charcoal">
                Total: ${order.total.toFixed(2)}
              </span>

              <Link
                href="#"
                className="text-xs font-semibold text-terracotta hover:text-charcoal transition-colors duration-200 flex items-center gap-1"
              >
                View Details
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}