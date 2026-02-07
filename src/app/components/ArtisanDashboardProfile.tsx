"use client";

import { useAuth } from "@/app/components/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ArtisanDashboardProfile() {
  const { user } = useAuth();
  const router = useRouter();

  const [isSaving, setIsSaving] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // Form fields
  const [workshopName, setWorkshopName] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [bio, setBio] = useState("");
  const [profileImage, setProfileImage] = useState("");

  useEffect(() => {
    // Redirect if not an artisan
    if (user && user.userType !== "artisan") {
      router.push("/");
      return;
    }

    // Initialize form with user data
    if (user) {
      setName(user.name || "");
      setWorkshopName(user.workshopName || "");
      setLocation(user.location || "");
      setBio(user.bio || "");
      setProfileImage(user.profileImage || "");
    }
  }, [user, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setSuccessMessage("");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // In a real app, this would update the backend and refresh the auth context
    // For now, we just show a success message
    setSuccessMessage("✓ Perfil actualizado correctamente");
    setIsSaving(false);

    // Clear success message after 3 seconds
    setTimeout(() => setSuccessMessage(""), 3000);
  };

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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
          <Link
            href="/artisan/dashboard"
            className="inline-flex items-center gap-2 text-sm text-charcoal/50 hover:text-charcoal
                       transition-colors duration-200 mb-4"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Volver al dashboard
          </Link>
          <h1 className="text-3xl font-bold text-charcoal mb-1">
            Editar perfil público
          </h1>
          <p className="text-sm text-charcoal/60">
            Esta información será visible para todos los clientes
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        
        {/* Success message */}
        {successMessage && (
          <div className="mb-6 p-4 bg-sage/10 border border-sage/30 rounded-xl text-sm text-sage font-semibold flex items-center gap-2">
            {successMessage}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Form (left/main) */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-soft p-6 space-y-6">
              
              {/* Workshop name */}
              <div>
                <label className="block text-sm font-semibold text-charcoal mb-2">
                  Nombre del taller <span className="text-terracotta">*</span>
                </label>
                <input
                  type="text"
                  value={workshopName}
                  onChange={(e) => setWorkshopName(e.target.value)}
                  required
                  placeholder="Ej: Cerámica Artesanal"
                  className="w-full rounded-soft border border-charcoal/20 px-4 py-2.5 text-sm
                             focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta
                             transition-all duration-200"
                />
                <p className="mt-1 text-xs text-charcoal/40">
                  El nombre de tu marca o taller artesanal
                </p>
              </div>

              {/* Full name */}
              <div>
                <label className="block text-sm font-semibold text-charcoal mb-2">
                  Nombre completo <span className="text-terracotta">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Ej: María González"
                  className="w-full rounded-soft border border-charcoal/20 px-4 py-2.5 text-sm
                             focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta
                             transition-all duration-200"
                />
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-semibold text-charcoal mb-2">
                  Ubicación
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Ej: Cuenca, Ecuador"
                  className="w-full rounded-soft border border-charcoal/20 px-4 py-2.5 text-sm
                             focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta
                             transition-all duration-200"
                />
                <p className="mt-1 text-xs text-charcoal/40">
                  Ciudad o región donde creas tus productos
                </p>
              </div>

              {/* Bio */}
              <div>
                <label className="block text-sm font-semibold text-charcoal mb-2">
                  Biografía
                </label>
                <textarea
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  rows={6}
                  placeholder="Cuéntanos sobre tu trabajo, técnicas, inspiración, experiencia..."
                  maxLength={500}
                  className="w-full rounded-soft border border-charcoal/20 px-4 py-2.5 text-sm
                             focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta
                             transition-all duration-200 resize-none"
                />
                <div className="flex items-center justify-between mt-1">
                  <p className="text-xs text-charcoal/40">
                    Esta descripción aparecerá en tu perfil público
                  </p>
                  <p className="text-xs text-charcoal/35">
                    {bio.length}/500
                  </p>
                </div>
              </div>

              {/* Profile image URL */}
              <div>
                <label className="block text-sm font-semibold text-charcoal mb-2">
                  URL de imagen de perfil
                </label>
                <input
                  type="url"
                  value={profileImage}
                  onChange={(e) => setProfileImage(e.target.value)}
                  placeholder="https://ejemplo.com/mi-foto.jpg"
                  className="w-full rounded-soft border border-charcoal/20 px-4 py-2.5 text-sm
                             focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta
                             transition-all duration-200"
                />
                <p className="mt-1 text-xs text-charcoal/40">
                  Opcional: enlace a tu foto de perfil
                </p>
              </div>

              <hr className="border-charcoal/10" />

              {/* Submit buttons */}
              <div className="flex gap-3">
                <button
                  type="submit"
                  disabled={isSaving}
                  className="flex-1 py-3 bg-terracotta text-white font-semibold text-sm rounded-soft
                             hover:shadow-hover hover:-translate-y-0.5 transition-all duration-300
                             disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSaving ? "Guardando cambios..." : "Guardar cambios"}
                </button>
                <Link
                  href="/artisan/dashboard"
                  className="px-6 py-3 border-2 border-charcoal/15 text-charcoal/60 font-semibold text-sm rounded-soft
                             hover:border-charcoal/30 hover:text-charcoal transition-all duration-200"
                >
                  Cancelar
                </Link>
              </div>
            </form>
          </div>

          {/* Preview (right sidebar) */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white rounded-xl shadow-soft p-6">
                <h3 className="text-sm font-bold text-charcoal mb-4 uppercase tracking-wider">
                  Vista previa
                </h3>

                {/* Preview card */}
                <div className="border border-charcoal/10 rounded-lg p-4">
                  {/* Avatar */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-terracotta to-sage flex items-center justify-center text-white text-2xl font-bold mb-3">
                    {profileImage ? (
                      <img
                        src={profileImage}
                        alt="Preview"
                        className="w-full h-full rounded-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                        }}
                      />
                    ) : (
                      name.charAt(0).toUpperCase() || "?"
                    )}
                  </div>

                  <h4 className="text-lg font-bold text-charcoal mb-0.5">
                    {workshopName || "Nombre del taller"}
                  </h4>
                  <p className="text-sm text-charcoal/60 mb-3">
                    {name || "Tu nombre"} · {location || "Tu ubicación"}
                  </p>

                  <p className="text-xs text-charcoal/50 leading-relaxed">
                    {bio || "Tu biografía aparecerá aquí..."}
                  </p>

                  <div className="mt-4 flex items-center gap-2">
                    <span className="flex items-center gap-1 text-xs text-charcoal/50">
                      <svg width="14" height="14" viewBox="0 0 20 20" fill="#E2B44A">
                        <path d="M10 1l2.39 4.84 5.35.78-3.87 3.77.91 5.33L10 13.27l-4.78 2.45.91-5.33L2.26 6.62l5.35-.78z" />
                      </svg>
                      4.8
                    </span>
                    <span className="text-charcoal/20">•</span>
                    <span className="text-xs text-charcoal/50">34 reseñas</span>
                  </div>
                </div>

                <p className="mt-4 text-xs text-charcoal/40 text-center">
                  Así verán tu perfil los clientes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}