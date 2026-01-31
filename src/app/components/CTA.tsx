import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-cream via-white to-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-charcoal leading-tight mb-6">
          Ready to Start<br />Your Journey?
        </h2>
        <p className="text-lg text-charcoal/55 leading-relaxed max-w-2xl mx-auto mb-10">
          Join our community of passionate creators and conscious consumers.
          Whether you&apos;re an artisan looking to share your craft or a collector
          seeking unique treasures, Handcrafted Haven is your destination.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/auth/register"
            className="px-8 py-3 bg-terracotta text-white text-sm font-semibold rounded-soft shadow-soft hover:shadow-hover hover:-translate-y-0.5 transition-all duration-300"
          >
            Create Account
          </Link>
          <Link
            href="/about"
            className="px-8 py-3 border-2 border-terracotta text-terracotta text-sm font-semibold rounded-soft hover:bg-terracotta hover:text-white hover:-translate-y-0.5 transition-all duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}