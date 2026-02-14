"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/app/components/AuthContext";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      await login(email, password);
      
      // Redirect based on user type (handled in AuthContext)
      // For now, redirect to home - you can customize this later
      router.push("/");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al iniciar sesión");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-cream">
      <div className="w-full max-w-md bg-white rounded-xl shadow-soft p-10">
        
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-charcoal mb-2">
            Welcome Back!
          </h1>
          <p className="text-sm text-charcoal/70">
            Log-in to continue
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
          
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-charcoal mb-1.5">
              Emain Address
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
          <div>
            <label className="block text-sm font-medium text-charcoal mb-1.5">
              Password
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

          {/* Forgot password link */}
          <div className="flex items-center justify-between text-xs">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 rounded accent-terracotta cursor-pointer"
              />
              <span className="text-charcoal/60">Remember me</span>
            </label>
            <Link
              href="#"
              className="text-terracotta hover:text-charcoal transition-colors duration-200"
            >
              Forgot your password?
            </Link>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-6 bg-terracotta text-white py-3 rounded-soft text-sm font-semibold
                       transition-all hover:-translate-y-0.5 hover:shadow-hover disabled:opacity-50
                       disabled:cursor-not-allowed disabled:transform-none"
          >
            {isLoading ? "Loging in..." : "Log in"}
          </button>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-charcoal/10"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-white text-charcoal/40">o</span>
            </div>
          </div>

          {/* Create account button */}
          <Link
            href="/auth/register"
            className="block w-full text-center border-2 border-sage text-sage py-2.5 rounded-soft text-sm font-semibold
                       transition-all hover:bg-sage/10 hover:-translate-y-0.5"
          >
            Register
          </Link>
        </form>

        {/* Footer note */}
        <p className="mt-8 text-center text-xs text-charcoal/40">
          Do you accept the terms and conditions?{" "}
          <Link href="#" className="text-terracotta hover:underline">
            Service Terms
          </Link>{" "}
          y{" "}
          <Link href="#" className="text-terracotta hover:underline">
            Privacy Policy
          </Link>
        </p>

        {/* Demo credentials hint */}
        <div className="mt-6 p-4 bg-cream rounded-lg border border-charcoal/8">
          <p className="text-xs text-charcoal/50 mb-2 font-semibold">
            📝 Test Accounts:
          </p>
          <div className="text-xs text-charcoal/60 space-y-1">
            <p><strong>Artisan:</strong> maria@ceramica.com</p>
            <p><strong>Customer:</strong> cliente@test.com</p>
            <p className="text-charcoal/40 mt-1">Password: anything</p>
          </div>
        </div>
      </div>
    </div>
  );
}