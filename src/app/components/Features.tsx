const features = [
  {
    emoji: "🎨",
    title: "Artisan Profiles",
    description:
      "Showcase your story, share your creative process, and build a loyal community around your handcrafted work.",
    iconGradient: "from-terracotta to-sage",
  },
  {
    emoji: "🛒",
    title: "Easy Shopping",
    description:
      "Browse unique items with powerful filters. Add favorites to your wishlist and discover new creators effortlessly.",
    iconGradient: "from-sage to-mustard",
  },
  {
    emoji: "⭐",
    title: "Reviews & Ratings",
    description:
      "Build trust through authentic customer reviews. Share your experience and help others find quality craftsmanship.",
    iconGradient: "from-mustard to-terracotta",
  },
];

export default function Features() {
  return (
    <section className="relative bg-white py-24 sm:py-32">
      {/* top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-terracotta to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cream text-terracotta text-xs font-semibold tracking-wide mb-4">
            Why Choose Us
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-charcoal mb-4">
            Built for Artisans & Collectors
          </h2>
          <p className="text-charcoal/55 text-lg leading-relaxed">
            We provide everything creators and customers need to connect, share
            stories, and celebrate handmade craftsmanship.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group relative flex flex-col items-center text-center p-8 rounded-xl hover:-translate-y-2 transition-transform duration-400"
            >
              {/* subtle bg that appears on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cream to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon box */}
              <div
                className={`relative z-10 w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.iconGradient} flex items-center justify-center text-3xl mb-6 -rotate-3 group-hover:rotate-0 transition-transform duration-400 shadow-md`}
              >
                {feature.emoji}
              </div>

              <h3 className="relative z-10 text-xl font-bold text-charcoal mb-3">
                {feature.title}
              </h3>
              <p className="relative z-10 text-charcoal/55 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}