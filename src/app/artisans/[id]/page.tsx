export default function ArtisanProfilePage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <article className="space-y-16">
      {/* Artisan Header */}
      <section className="rounded-[var(--radius-xl)] bg-white p-8 shadow-[var(--shadow-soft)]">
        <h1 className="text-4xl font-bold">
          María González
        </h1>

        <p className="mt-2 text-charcoal/70">
          Ceramic Artist · Cuenca, Ecuador
        </p>

        <p className="mt-6 max-w-3xl leading-relaxed">
          María has been crafting handmade ceramics for over 15 years,
          blending traditional techniques with modern design to create
          timeless pieces for everyday use.
        </p>
      </section>

      {/* Products */}
      <section>
        <h2 className="mb-6 text-3xl font-semibold">
          Products by María
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((product, index) => (
            <div
              key={product}
              className="rounded-[var(--radius-soft)] bg-white p-5 shadow-[var(--shadow-md)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-hover)]"
              style={{ animation: `fadeUp 0.4s ease ${index * 0.1}s both` }}
            >
              <div className="mb-3 h-40 rounded-md bg-sage-light" />

              <h3 className="font-semibold">
                Handmade Ceramic Vase
              </h3>

              <p className="mt-1 text-sm text-charcoal/70">
                $45.00
              </p>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
