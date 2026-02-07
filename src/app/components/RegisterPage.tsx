"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth, UserType } from "@/app/components/AuthContext";

export default function RegisterPage() {
  const router = useRouter();
  const { register } = useAuth();

  const [step, setStep] = useState<1 | 2>(1);
  const [userType, setUserType] = useState<UserType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Form fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  // Artisan-only fields
  const [workshopName, setWorkshopName] = useState("");
  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("");

  const handleTypeSelect = (type: UserType) => {
    setUserType(type);
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validation
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    if (userType === "artisan" && !workshopName.trim()) {
      setError("El nombre del taller es obligatorio para artesanos");
      return;
    }

    setIsLoading(true);

    try {
      await register({
        email,
        password,
        name,
        userType: userType!,
        ...(userType === "artisan" && {
          workshopName,
          bio,
          location,
        }),
      });

      // Redirect based on user type
      if (userType === "artisan") {
        router.push("/artisan/dashboard");
      } else {
        router.push("/marketplace");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al crear la cuenta");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-cream">
      <div className="w-full max-w-2xl">

        {/* Step 1: Select account type */}
        {step === 1 && (
          <div className="bg-white rounded-xl shadow-soft p-10">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold text-charcoal mb-2">
                Crea tu cuenta
              </h1>
              <p className="text-sm text-charcoal/70">
                Elige el tipo de cuenta que deseas crear
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Customer card */}
              <button
                onClick={() => handleTypeSelect("customer")}
                className="group p-8 border-2 border-charcoal/10 rounded-xl hover:border-terracotta
                           hover:shadow-hover transition-all duration-300 text-left hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-full bg-sage/10 flex items-center justify-center mb-4
                                group-hover:bg-sage/20 transition-colors duration-300">
                  <span className="text-3xl">🛍️</span>
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-2">
                  Cliente
                </h3>
                <p className="text-sm text-charcoal/60 leading-relaxed">
                  Descubre y compra productos artesanales únicos. Guarda tus favoritos y
                  apoya a creadores independientes.
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-terracotta
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Seleccionar</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </button>

              {/* Artisan card */}
              <button
                onClick={() => handleTypeSelect("artisan")}
                className="group p-8 border-2 border-charcoal/10 rounded-xl hover:border-terracotta
                           hover:shadow-hover transition-all duration-300 text-left hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-full bg-terracotta/10 flex items-center justify-center mb-4
                                group-hover:bg-terracotta/20 transition-colors duration-300">
                  <span className="text-3xl">🎨</span>
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-2">
                  Artesano
                </h3>
                <p className="text-sm text-charcoal/60 leading-relaxed">
                  Comparte tu trabajo artesanal con el mundo. Crea tu perfil, publica
                  productos y conecta con clientes.
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-terracotta
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Seleccionar</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            </div>

            {/* Back to login */}
            <div className="mt-8 text-center">
              <p className="text-sm text-charcoal/60">
                ¿Ya tienes cuenta?{" "}
                <Link href="/auth/login" className="text-terracotta hover:text-charcoal font-semibold transition-colors">
                  Inicia sesión
                </Link>
              </p>
            </div>
          </div>
        )}

        {/* Step 2: Registration form */}
        {step === 2 && (
          <div className="bg-white rounded-xl shadow-soft p-10">
            
            {/* Header */}
            <div className="mb-8">
              <button
                onClick={() => setStep(1)}
                className="flex items-center gap-2 text-sm text-charcoal/50 hover:text-charcoal
                           transition-colors duration-200 mb-4"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Cambiar tipo de cuenta
              </button>
              <h1 className="text-3xl font-bold text-charcoal mb-2">
                {userType === "customer" ? "Cuenta de Cliente" : "Cuenta de Artesano"}
              </h1>
              <p className="text-sm text-charcoal/70">
                Completa tu información para crear tu cuenta
              </p>
            </div>

            {/* Error message */}
            {error && (
              <div className="mb-6 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
                {error}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1.5">
                  Nombre completo
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Juan Pérez"
                  className="w-full rounded-soft border border-charcoal/20 px-4 py-2.5 text-sm
                             focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta
                             transition-all duration-200"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1.5">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="tu@email.com"
                  className="w-full rounded-soft border border-charcoal/20 px-4 py-2.5 text-sm
                             focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta
                             transition-all duration-200"
                />
              </div>

              {/* Password */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1.5">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="••••••••"
                    className="w-full rounded-soft border border-charcoal/20 px-4 py-2.5 text-sm
                               focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta
                               transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1.5">
                    Confirmar contraseña
                  </label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    placeholder="••••••••"
                    className="w-full rounded-soft border border-charcoal/20 px-4 py-2.5 text-sm
                               focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta
                               transition-all duration-200"
                  />
                </div>
              </div>

              {/* Artisan-only fields */}
              {userType === "artisan" && (
                <>
                  <hr className="my-6 border-charcoal/10" />
                  
                  <div className="bg-cream p-4 rounded-lg mb-4">
                    <p className="text-xs text-charcoal/60">
                      <strong>Información del artesano:</strong> Esta información aparecerá
                      en tu perfil público y ayudará a los clientes a conocer tu trabajo.
                    </p>
                  </div>

                  {/* Workshop name */}
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1.5">
                      Nombre del taller <span className="text-terracotta">*</span>
                    </label>
                    <input
                      type="text"
                      value={workshopName}
                      onChange={(e) => setWorkshopName(e.target.value)}
                      required={userType === "artisan"}
                      placeholder="Cerámica Artesanal"
                      className="w-full rounded-soft border border-charcoal/20 px-4 py-2.5 text-sm
                                 focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta
                                 transition-all duration-200"
                    />
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1.5">
                      Ubicación
                    </label>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Cuenca, Ecuador"
                      className="w-full rounded-soft border border-charcoal/20 px-4 py-2.5 text-sm
                                 focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta
                                 transition-all duration-200"
                    />
                  </div>

                  {/* Bio */}
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1.5">
                      Biografía
                    </label>
                    <textarea
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      rows={4}
                      placeholder="Cuéntanos sobre tu trabajo, técnicas, inspiración..."
                      className="w-full rounded-soft border border-charcoal/20 px-4 py-2.5 text-sm
                                 focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta
                                 transition-all duration-200 resize-none"
                    />
                    <p className="mt-1 text-xs text-charcoal/40">
                      {bio.length}/500 caracteres
                    </p>
                  </div>
                </>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full mt-6 bg-terracotta text-white py-3 rounded-soft text-sm font-semibold
                           transition-all hover:-translate-y-0.5 hover:shadow-hover disabled:opacity-50
                           disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? "Creando cuenta..." : "Crear cuenta"}
              </button>
            </form>

            {/* Terms */}
            <p className="mt-6 text-center text-xs text-charcoal/40">
              Al crear una cuenta, aceptas nuestros{" "}
              <Link href="#" className="text-terracotta hover:underline">
                Términos de Servicio
              </Link>{" "}
              y{" "}
              <Link href="#" className="text-terracotta hover:underline">
                Política de Privacidad
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}