import HeroBtns from "./HeroBtns";
import ProductGrid from "./ProductGrid";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-cream">
      {/* Subtle diagonal pattern background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, var(--color-sage) 0, var(--color-sage) 1px, transparent 1px, transparent 50px),
            repeating-linear-gradient(-45deg, var(--color-terracotta) 0, var(--color-terracotta) 1px, transparent 1px, transparent 50px)
          `,
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-24 sm:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left: text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <span className="inline-block mb-6 px-4 py-1.5 rounded-full bg-gradient-to-r from-sage to-terracotta text-white text-xs font-semibold tracking-wide">
              ✨ Supporting Local Artisans
            </span>

            {/* Title */}
            <h1 className="text-5xl sm:text-6xl font-black text-charcoal leading-[1.1] mb-6">
              Discover Unique
              <br />
              <span className="relative inline-block text-terracotta">
                Handcrafted
                {/* mustard highlight bar behind the word */}
                <span className="absolute bottom-2 left-0 right-0 h-4 bg-mustard opacity-30 -z-10" />
              </span>
              <br />
              Treasures
            </h1>

            {/* Description */}
            <p className="text-lg text-charcoal/60 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              Connect with talented artisans and discover one-of-a-kind handmade
              items. Every purchase supports independent creators and sustainable
              craftsmanship.
            </p>

            {/* CTA buttons */}
            <HeroBtns />
          </div>

          {/* Right: product card grid */}
          <div className="flex-1 w-full max-w-lg mx-auto lg:mx-0">
            <ProductGrid />
          </div>
        </div>
      </div>
    </section>
  );
}