const stats = [
  { value: "500+", label: "Active Artisans" },
  { value: "2,000+", label: "Unique Products" },
  { value: "10k+", label: "Happy Customers" },
  { value: "98%", label: "Satisfaction Rate" },
];

export default function Stats() {
  return (
    <section className="relative bg-charcoal py-20 sm:py-28 overflow-hidden">
      {/* decorative radial blobs */}
      <div className="absolute top-0 left-[15%] w-96 h-96 bg-terracotta rounded-full blur-3xl opacity-10 -translate-y-1/2" />
      <div className="absolute bottom-0 right-[10%] w-80 h-80 bg-sage rounded-full blur-3xl opacity-10 translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <h3
                className="text-4xl sm:text-5xl font-black mb-2"
                style={{
                  background:
                    "linear-gradient(135deg, #ffffff 30%, var(--color-mustard))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
              </h3>
              <p className="text-charcoal/60 text-base" style={{ color: "#aaa" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}