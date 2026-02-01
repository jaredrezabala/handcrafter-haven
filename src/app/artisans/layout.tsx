export default function ArtisanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen bg-cream px-4 py-12">
      <div className="mx-auto max-w-7xl">
        {children}
      </div>
    </section>
  );
}
