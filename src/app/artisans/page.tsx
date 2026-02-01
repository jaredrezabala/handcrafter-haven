import Link from 'next/link';

const artisans = [
  {
    id: '1',
    name: 'María González',
    specialty: 'Ceramics',
    location: 'Cuenca, Ecuador',
  },
  {
    id: '2',
    name: 'Juan Pérez',
    specialty: 'Textiles',
    location: 'Otavalo, Ecuador',
  },
];

export default function ArtisanListPage() {
  return (
    <>
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-charcoal">
          Our Artisans
        </h1>
        <p className="mt-3 max-w-2xl text-charcoal/70">
          Meet the talented creators behind our handcrafted products.
          Each artisan brings a unique story and tradition.
        </p>
      </header>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {artisans.map((artisan, index) => (
          <Link
            key={artisan.id}
            href={`/artisans/${artisan.id}`}
            className="group rounded-[var(--radius-xl)] bg-white p-6 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-hover)]"
            style={{ animation: `fadeUp 0.5s ease ${index * 0.1}s both` }}
          >
            <h3 className="text-xl font-semibold">
              {artisan.name}
            </h3>

            <p className="mt-1 text-sm text-charcoal/70">
              {artisan.specialty}
            </p>

            <p className="mt-4 inline-block rounded-full bg-sage-light px-3 py-1 text-xs text-sage">
              {artisan.location}
            </p>
          </Link>
        ))}
      </div>
    </>
  );
}
