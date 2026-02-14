"use client";

import Link from "next/link";
import { useState } from "react";
import { useAuth } from "./AuthContext";
import { useRouter } from "next/navigation";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const router = useRouter();

  const links = [
    { label: "Home", href: "/" },
    { label: "Marketplace", href: "/marketplace" },
    { label: "Artisans", href: "/artisans" },
  ];

  const handleLogout = () => {
    logout();
    setUserMenuOpen(false);
    router.push("/");
  };

  return (
    <nav className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-terracotta/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-charcoal tracking-tight">
            Handcrafted <span className="text-terracotta">Haven</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-charcoal/70 hover:text-terracotta transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-terracotta group-hover:w-full transition-all duration-300" />
              </Link>
            ))}

            {/* User menu or Sign In */}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-2 px-3 py-2 rounded-full bg-white border border-charcoal/10
                             hover:border-terracotta hover:shadow-md transition-all duration-200"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-terracotta to-sage flex items-center justify-center text-white text-sm font-bold">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-sm font-medium text-charcoal hidden lg:block">
                    {user.name.split(" ")[0]}
                  </span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className={`transition-transform duration-200 ${userMenuOpen ? "rotate-180" : ""}`}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>

                {/* Dropdown */}
                {userMenuOpen && (
                  <>
                    {/* Backdrop */}
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setUserMenuOpen(false)}
                    />
                    
                    {/* Menu */}
                    <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-hover border border-charcoal/8 overflow-hidden z-50">
                      {/* User info header */}
                      <div className="px-4 py-3 bg-cream border-b border-charcoal/8">
                        <p className="text-sm font-semibold text-charcoal">{user.name}</p>
                        <p className="text-xs text-charcoal/50">{user.email}</p>
                        <span className="inline-block mt-1 px-2 py-0.5 rounded-full bg-terracotta/10 text-terracotta text-xs font-semibold">
                          {user.userType === "artisan" ? "Artesano" : "Cliente"}
                        </span>
                      </div>

                      {/* Menu items */}
                      <div className="py-2">
                        {user.userType === "artisan" ? (
                          <>
                            <Link
                              href="/artisans/dashboard"
                              onClick={() => setUserMenuOpen(false)}
                              className="block px-4 py-2 text-sm text-charcoal hover:bg-cream transition-colors"
                            >
                              📊 Dashboard
                            </Link>
                            <Link
                              href={`/artisans/${user.id}`}
                              onClick={() => setUserMenuOpen(false)}
                              className="block px-4 py-2 text-sm text-charcoal hover:bg-cream transition-colors"
                            >
                              👤 My Profile
                            </Link>
                          </>
                        ) : (
                          <>
                            <Link
                              href="/customer/orders"
                              onClick={() => setUserMenuOpen(false)}
                              className="block px-4 py-2 text-sm text-charcoal hover:bg-cream transition-colors"
                            >
                              📦 My Order
                            </Link>
                            <Link
                              href="/customer/wishlist"
                              onClick={() => setUserMenuOpen(false)}
                              className="block px-4 py-2 text-sm text-charcoal hover:bg-cream transition-colors"
                            >
                              ❤️ My Wishlist
                            </Link>
                            <Link
                              href="/customer/cart"
                              onClick={() => setUserMenuOpen(false)}
                              className="block px-4 py-2 text-sm text-charcoal hover:bg-cream transition-colors"
                            >
                              🛒 My Cart
                            </Link>
                          </>
                        )}
                        
                        <hr className="my-2 border-charcoal/8" />
                        

                        <button
                          onClick={handleLogout}
                          className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                        >
                          🚪 Log out
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <Link
                href="/auth/login"
                className="ml-2 px-5 py-2 bg-terracotta text-white text-sm font-semibold rounded-soft shadow-soft hover:shadow-hover hover:-translate-y-0.5 transition-all duration-300"
              >
                Sign In
              </Link>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 bg-charcoal rounded-full transition-all duration-300 ${
                menuOpen ? "w-5 translate-y-2 rotate-45" : "w-5"
              }`}
            />
            <span
              className={`block h-0.5 bg-charcoal rounded-full transition-all duration-300 ${
                menuOpen ? "opacity-0 w-5" : "w-4"
              }`}
            />
            <span
              className={`block h-0.5 bg-charcoal rounded-full transition-all duration-300 ${
                menuOpen ? "w-5 -translate-y-2 -rotate-45" : "w-5"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-5 flex flex-col gap-1 border-t border-charcoal/5">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="mt-3 text-sm font-medium text-charcoal/70 hover:text-terracotta transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
          
          {user ? (
            <>
              <hr className="my-3 border-charcoal/8" />
              <p className="text-xs font-semibold text-charcoal/40 uppercase tracking-wider">
                {user.name}
              </p>
              {user.userType === "artisan" ? (
                <>
                  <Link
                    href="/artisan/dashboard"
                    onClick={() => setMenuOpen(false)}
                    className="mt-2 text-sm font-medium text-charcoal/70"
                  >
                    📊 Dashboard
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href="/customer/orders"
                    onClick={() => setMenuOpen(false)}
                    className="mt-2 text-sm font-medium text-charcoal/70"
                  >
                    📦 My Orders
                  </Link>
                  <Link
                    href="/customer/wishlist"
                    onClick={() => setMenuOpen(false)}
                    className="mt-2 text-sm font-medium text-charcoal/70"
                  >
                    ❤️ My Wishlist
                  </Link>
                </>
              )}
              <button
                onClick={handleLogout}
                className="mt-2 text-sm font-medium text-red-600 text-left"
              >
                🚪 Log out
              </button>
            </>
          ) : (
            <Link
              href="/auth/login"
              onClick={() => setMenuOpen(false)}
              className="mt-4 text-center px-5 py-2.5 bg-terracotta text-white text-sm font-semibold rounded-soft"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}