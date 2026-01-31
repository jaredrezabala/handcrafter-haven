import CustomerPageHeader from "./PageHeader";
import WishlistToolbar from "./WishlistToolbar";
import WishlistGrid from "./WishlistGrid";

export default function WishlistPage() {
  return (
    <div className="min-h-screen bg-cream">
      <CustomerPageHeader
        title="My Wishlist"
        subtitle="Products you've saved to review and purchase later."
        badge="Account"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 flex flex-col gap-6">
        <WishlistToolbar />
        <WishlistGrid />
      </div>
    </div>
  );
}