"use client";

import { useAuth } from "@/app/components/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

// Mock data - replace with real API calls
const stats = [
  { label: "Productos", value: "12", icon: "📦", change: "+2 este mes" },
  { label: "Ventas del mes", value: "$1,240", icon: "💰", change: "+15%" },
  { label: "Calificación", value: "4.8", icon: "⭐", change: "34 reseñas" },
  { label: "Vistas de perfil", value: "247", icon: "👁️", change: "Esta semana" },
];

const recentReviews = [
  { customer: "Ana Martínez", rating: 5, comment: "Hermoso trabajo, llegó perfecto y en tiempo. ¡Definitivamente volveré a comprar!", date: "Hace 2 días", product: "Ceramic Vase" },
  { customer: "Carlos López", rating: 4, comment: "Muy buena calidad, aunque tardó un poco más de lo esperado en llegar.", date: "Hace 5 días", product: "Pottery Mug" },
  { customer: "Laura Sánchez", rating: 5, comment: "¡Increíble! Superó mis expectativas. El detalle es impresionante.", date: "Hace 1 semana", product: "Handmade Bowl" },
];

const topProducts = [
  { id: 1, title: "Ceramic Vase", sales: 28, revenue: "$1,904", emoji: "🏺", gradient: "from-[#FFE5D9] to-[#C97A63]" },
  { id: 2, title: "Pottery Mug Set", sales: 22, revenue: "$968", emoji: "☕", gradient: "from-[#F0E0D9] to-[#B86A4E]" },
  { id: 3, title: "Handmade Bowl", sales: 18, revenue: "$1,656", emoji: "🍜", gradient: "from-[#F5EBE0] to-[#A0785A]" },
  { id: 4, title: "Decorative Plate", sales: 15, revenue: "$825", emoji: "🍽️", gradient: "from-[#E8F3EE] to-[#7D9D8C]" },
];

const recentOrders = [
  { id: "ORD-2026-0041", customer: "María Torres", product: "Ceramic Vase", status: "Pendiente", amount: "$68" },
  { id: "ORD-2026-0040", customer: "Jorge Ramírez", product: "Pottery Mug Set", status: "Pendiente", amount: "$44" },
  { id: "ORD-2026-0039", customer: "Patricia Ruiz", product: "Handmade Bowl", status: "Enviado", amount: "$92" },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 20 20" fill={i < rating ? "#E2B44A" : "#e5e7eb"}>
          <path d="M10 1l2.39 4.84 5.35.78-3.87 3.77.91 5.33L10 13.27l-4.78 2.45.91-5.33L2.26 6.62l5.35-.78z" />
        </svg>
      ))}
    </div>
  );
}

export default function ArtisanDashboard() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Redirect if not an artisan
    if (user && user.userType !== "artisan") {
      router.push("/");
    }
  }, [user, router]);

  if (!user || user.userType !== "artisan") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <p className="text-charcoal/60">Cargando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-white border-b border-charcoal/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-charcoal mb-1">
                Dashboard
              </h1>
              <p className="text-sm text-charcoal/60">
                Bienvenido de nuevo, <span className="font-semibold text-charcoal">{user.name}</span>
              </p>
            </div>

            <div className="flex gap-3">
              <Link
                href={`/artisans/${user.id}`}
                className="px-4 py-2 border-2 border-sage text-sage text-sm font-semibold rounded-soft
                           hover:bg-sage/10 transition-all duration-200"
              >
                Ver mi perfil público
              </Link>
              <Link
                href="/artisans/dashboard/profile"
                className="px-4 py-2 bg-terracotta text-white text-sm font-semibold rounded-soft
                           hover:shadow-hover hover:-translate-y-0.5 transition-all duration-300"
              >
                Editar perfil
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-soft p-6 hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-terracotta/10 to-sage/10 flex items-center justify-center text-2xl">
                  {stat.icon}
                </div>
                <span className="text-xs font-semibold text-sage">
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-1">
                {stat.value}
              </h3>
              <p className="text-sm text-charcoal/50">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Two columns: Chart + Reviews */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          
          {/* Sales Chart Placeholder */}
          <div className="bg-white rounded-xl shadow-soft p-6">
            <h2 className="text-lg font-bold text-charcoal mb-6">
              Ventas de los últimos 30 días
            </h2>
            <div className="h-64 rounded-lg bg-gradient-to-br from-cream to-white border border-charcoal/8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-3">📈</div>
                <p className="text-sm text-charcoal/40">Gráfico de ventas aquí</p>
                <p className="text-xs text-charcoal/30 mt-1">(Chart.js, Recharts, etc.)</p>
              </div>
            </div>
          </div>

          {/* Recent Reviews */}
          <div className="bg-white rounded-xl shadow-soft p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-charcoal">
                Últimas reseñas
              </h2>
              <Link href="#" className="text-xs font-semibold text-terracotta hover:text-charcoal transition-colors">
                Ver todas
              </Link>
            </div>

            <div className="space-y-4">
              {recentReviews.map((review, i) => (
                <div key={i} className="pb-4 border-b border-charcoal/8 last:border-0 last:pb-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="text-sm font-semibold text-charcoal">{review.customer}</p>
                      <p className="text-xs text-charcoal/40">{review.product}</p>
                    </div>
                    <StarRating rating={review.rating} />
                  </div>
                  <p className="text-sm text-charcoal/60 leading-relaxed mb-1">
                    {review.comment}
                  </p>
                  <p className="text-xs text-charcoal/35">{review.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Two columns: Top Products + Recent Orders */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Top Products */}
          <div className="bg-white rounded-xl shadow-soft p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-charcoal">
                Productos más vendidos
              </h2>
              <Link href="#" className="text-xs font-semibold text-terracotta hover:text-charcoal transition-colors">
                Ver todos
              </Link>
            </div>

            <div className="space-y-3">
              {topProducts.map((product, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-cream transition-colors duration-200"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${product.gradient} flex items-center justify-center text-xl shrink-0`}>
                    {product.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-charcoal truncate">
                      {product.title}
                    </p>
                    <p className="text-xs text-charcoal/40">
                      {product.sales} ventas
                    </p>
                  </div>
                  <p className="text-sm font-bold text-charcoal">
                    {product.revenue}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Orders */}
          <div className="bg-white rounded-xl shadow-soft p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-charcoal">
                Órdenes recientes
              </h2>
              <Link href="#" className="text-xs font-semibold text-terracotta hover:text-charcoal transition-colors">
                Ver todas
              </Link>
            </div>

            <div className="space-y-3">
              {recentOrders.map((order, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-cream transition-colors duration-200"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-charcoal">
                      {order.id}
                    </p>
                    <p className="text-xs text-charcoal/50">
                      {order.customer} · {order.product}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                      order.status === "Pendiente"
                        ? "bg-terracotta/10 text-terracotta"
                        : "bg-sage/10 text-sage"
                    }`}>
                      {order.status}
                    </span>
                    <p className="text-sm font-bold text-charcoal w-16 text-right">
                      {order.amount}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions - floating at bottom on mobile */}
        <div className="mt-10 bg-gradient-to-br from-terracotta to-sage rounded-xl shadow-hover p-8 text-white">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">
                ¿Listo para publicar algo nuevo?
              </h3>
              <p className="text-white/80 text-sm">
                Comparte tu próxima creación con el mundo
              </p>
            </div>
            <Link
              href="#"
              className="px-8 py-3 bg-white text-terracotta font-bold text-sm rounded-soft
                         hover:shadow-xl hover:-translate-y-1 transition-all duration-300 whitespace-nowrap"
            >
              Publicar nuevo producto
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}