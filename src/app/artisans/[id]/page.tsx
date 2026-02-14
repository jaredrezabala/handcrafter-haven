const artisans = [
  {
    id: '1',
    name: 'María González',
    specialty: 'Ceramic Artist',
    location: 'Cuenca, Ecuador',
    description:
      'María González is a master ceramic artist from Cuenca who has dedicated over 15 years to preserving and reimagining Ecuador’s traditional pottery techniques. Inspired by the earthy tones of the Andes and the flowing curves of colonial architecture, her work blends heritage craftsmanship with modern minimalist design. Each piece is carefully shaped by hand, fired in small batches, and finished with natural glazes that highlight organic textures. María believes ceramics should not only be functional but also tell a story — one that connects everyday rituals with cultural identity. Her collections range from elegant dinnerware to sculptural vases that celebrate simplicity, balance, and authenticity.',
  },
  {
    id: '2',
    name: 'Juan Pérez',
    specialty: 'Textiles',
    location: 'Otavalo, Ecuador',
    description:
      'Juan Pérez is a third-generation textile artisan from Otavalo, a region internationally recognized for its rich weaving traditions. Raised in a family of weavers, Juan learned to work the loom at a young age and has since developed a deep respect for the symbolism and storytelling embedded in Andean patterns. His textiles are handcrafted using traditional backstrap and pedal looms, combining alpaca wool and natural dyes derived from local plants and minerals. Juan’s designs merge ancestral motifs with contemporary color palettes, creating pieces that honor tradition while appealing to modern lifestyles. From handwoven scarves to decorative home textiles, every creation reflects patience, precision, and cultural pride.',
  },
];

export default async function ArtisanProfilePage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const artisan = artisans.find((a) => a.id === id);
  if (!artisan) {
    return <div>Artisan not found</div>;
  }
  return (
    <article className="space-y-16">
      {/* Artisan Header */}
      <section className="rounded-[var(--radius-xl)] bg-white p-8 shadow-[var(--shadow-soft)]">
        <h1 className="text-4xl font-bold">
          {artisan.name}
        </h1>

        <p className="mt-2 text-charcoal/70">
          {artisan.specialty} · {artisan.location}
        </p>

        <p className="mt-6 max-w-3xl leading-relaxed">
          {artisan.description}
        </p>
      </section>

      {/* Products */}
      <section>
        <h2 className="mb-6 text-3xl font-semibold">
          Products by {artisan.name}
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
