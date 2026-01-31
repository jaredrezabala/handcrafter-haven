import CustomerPageHeader from "./PageHeader";
import OrdersFilter from "./OrdersFilter";
import OrdersList from "./OrdersList";

export default function OrdersPage() {
  return (
    <div className="min-h-screen bg-cream">
      <CustomerPageHeader
        title="My Orders"
        subtitle="Track and review all of your past and current orders."
        badge="Account"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 flex flex-col gap-6">
        <OrdersFilter />
        <OrdersList />
      </div>
    </div>
  );
}