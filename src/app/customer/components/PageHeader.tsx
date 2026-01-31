export default function CustomerPageHeader({
  title,
  subtitle,
  badge,
}: {
  title: string;
  subtitle: string;
  badge: string;
}) {
  return (
    <div className="relative bg-white border-b border-charcoal/8 overflow-hidden">
      {/* decorative blobs */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-terracotta rounded-full blur-3xl opacity-[0.06] pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-sage rounded-full blur-3xl opacity-[0.07] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <span className="inline-block px-3.5 py-1 rounded-full bg-cream text-terracotta text-xs font-semibold tracking-wide mb-3">
          {badge}
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-charcoal leading-tight">
          {title}
        </h1>
        <p className="mt-2 text-charcoal/50 text-sm sm:text-base">{subtitle}</p>
      </div>
    </div>
  );
}