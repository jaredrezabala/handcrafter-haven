import Link from "next/link";

export default function HeroBtns() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
      <Link
        href="/marketplace"
        className="px-7 py-3 bg-terracotta text-white text-sm font-semibold rounded-soft shadow-soft hover:shadow-hover hover:-translate-y-0.5 transition-all duration-300 text-center"
      >
        Explore Marketplace
      </Link>
      <Link
        href="/auth/register"
        className="px-7 py-3 border-2 border-terracotta text-terracotta text-sm font-semibold rounded-soft hover:bg-terracotta hover:text-white hover:-translate-y-0.5 transition-all duration-300 text-center"
      >
        Become an Artisan
      </Link>
    </div>
  );
}