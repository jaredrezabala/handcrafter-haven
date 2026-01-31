import CustomerPageHeader from "./PageHeader";
import CartItems from "./CartItems";
import CartSummary from "./CartSummary";

export default function CartPage() {
  return (
    <div className="min-h-screen bg-cream">
        <CustomerPageHeader 
        title="Your Cart"
        subtitle="Review your items before checkout."
        badge="Shopping"/>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Items list */}
          <div className="flex-1 min-w-0">
            <CartItems />
          </div>

          {/* Summary panel — sticky on desktop */}
          <aside className="w-full lg:w-96 shrink-0">
            <div className="sticky top-24">
              <CartSummary />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}