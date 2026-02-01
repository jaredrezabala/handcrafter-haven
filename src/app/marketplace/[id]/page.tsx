const products = [
  {
    id: 1,
    emoji: '🏺',
    title: 'Ceramic Vase',
    subtitle: 'Handmade pottery',
    price: '$45.00',
    gradient: 'from-[#FFE5D9] to-terracotta',
    artisan: 'María González',
    description:
      'This ceramic vase is handcrafted using traditional pottery techniques, making each piece unique.',
    reviews: [
      {
        user: 'Ana',
        rating: 5,
        comment: 'Beautiful craftsmanship and great quality!',
      },
      {
        user: 'Luis',
        rating: 4,
        comment: 'Looks amazing in my living room.',
      },
    ],
  },
];

export default async function ProductDetailPage({
  params,
}: {
//   params: { id: string };
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;  
    const productId = Number(id)
      const product = products.find((p) => p.id === productId);

//   const product = products[params.id as keyof typeof products];

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 space-y-16">
      {/* Product Hero */}
      <section className="grid gap-10 lg:grid-cols-2 items-center">
        <div
          className={`relative h-80 rounded-[var(--radius-xl)] bg-gradient-to-br ${product.gradient} flex items-center justify-center text-7xl shadow-[var(--shadow-soft)]`}
        >
          <span>{product.emoji}</span>
        </div>

        <div>
          <h1 className="text-4xl font-bold">{product.title}</h1>
          <p className="mt-2 text-charcoal/70">{product.subtitle}</p>

          <p className="mt-4 text-2xl font-semibold text-terracotta">
            {product.price}
          </p>

          <p className="mt-6 leading-relaxed">
            {product.description}
          </p>

          <p className="mt-4 text-sm text-charcoal/60">
            Crafted by <span className="font-medium">{product.artisan}</span>
          </p>

          <button className="mt-8 inline-flex items-center rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90">
            Add to Cart
          </button>
        </div>
      </section>

      {/* Reviews */}
      <section>
        <h2 className="mb-6 text-3xl font-semibold">
          Customer Reviews
        </h2>

        <div className="space-y-4">
          {product.reviews.map((review, index) => (
            <div
              key={index}
              className="rounded-[var(--radius-soft)] bg-white p-5 shadow-[var(--shadow-md)]"
              style={{
                animation: `fadeUp 0.4s ease ${index * 0.1}s both`,
              }}
            >
              <div className="flex items-center justify-between">
                <p className="font-semibold">{review.user}</p>
                <p className="text-sm text-mustard">
                  {'★'.repeat(review.rating)}
                </p>
              </div>

              <p className="mt-2 text-charcoal/70">
                {review.comment}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Review Form (UI only) */}
      <section className="rounded-[var(--radius-xl)] bg-white p-8 shadow-[var(--shadow-soft)]">
        <h3 className="text-2xl font-semibold mb-4">
          Leave a Review
        </h3>

        <form className="space-y-4">
          <textarea
            className="w-full rounded-md border border-charcoal/20 p-3 focus:outline-none focus:ring-2 focus:ring-sage"
            rows={4}
            placeholder="Write your review..."
          />

          <button
            type="button"
            className="rounded-full bg-sage px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Submit Review
          </button>
        </form>
      </section>
    </div>
  );
}
