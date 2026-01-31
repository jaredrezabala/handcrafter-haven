'use client'
const products = [
  {
    emoji: "🏺",
    title: "Ceramic Vase",
    subtitle: "Handmade pottery",
    gradient: "from-[#FFE5D9] to-terracotta",
  },
  {
    emoji: "🧺",
    title: "Woven Basket",
    subtitle: "Natural fibers",
    gradient: "from-[#E8F3EE] to-sage",
  },
  {
    emoji: "🕯️",
    title: "Soy Candles",
    subtitle: "Organic materials",
    gradient: "from-[#FFF4D9] to-mustard",
  },
  {
    emoji: "🧶",
    title: "Knit Scarf",
    subtitle: "Wool & cotton",
    gradient: "from-cream to-charcoal",
  },
];

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {products.map((product, i) => (
        <div
          key={i}
          className="group bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-500 cursor-pointer"
          style={{
            transform: "translateY(0) rotate(0deg)",
          }}
          onMouseEnter={(e) => {
            const rot = i % 2 === 0 ? "2deg" : "-2deg";
            (e.currentTarget as HTMLDivElement).style.transform = `translateY(-10px) rotate(${rot})`;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLDivElement).style.transform =
              "translateY(0) rotate(0deg)";
          }}
        >
          {/* Color block with emoji */}
          <div
            className={`h-48 bg-gradient-to-br ${product.gradient} flex items-center justify-center text-5xl relative overflow-hidden`}
          >
            {/* shimmer overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                style={{ transform: "skewX(-20deg)" }}
              />
            </div>
            <span className="relative z-10">{product.emoji}</span>
          </div>

          {/* Info */}
          <div className="p-4">
            <h3 className="text-sm font-semibold text-charcoal">
              {product.title}
            </h3>
            <p className="text-xs text-charcoal/50 mt-0.5">{product.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}