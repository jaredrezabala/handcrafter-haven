import Link from "next/link";

const footerLinks = [
  {
    title: "Marketplace",
    links: [
      { label: "Browse All", href: "/marketplace" },
      { label: "Categories", href: "/marketplace" },
      { label: "Featured", href: "/marketplace" },
      { label: "New Arrivals", href: "/marketplace" },
    ],
  },
  {
    title: "For Artisans",
    links: [
      { label: "Start Selling", href: "/auth/register" },
      { label: "Dashboard", href: "/artisan/dashboard" },
      { label: "Resources", href: "/about" },
      { label: "Community", href: "/about" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/contact" },
      { label: "Contact Us", href: "/contact" },
      { label: "Privacy", href: "/" },
      { label: "Terms", href: "/" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">Handcrafted Haven</h3>
            <p className="text-sm leading-relaxed" style={{ color: "#aaa" }}>
              Supporting artisans and celebrating handmade craftsmanship since
              2026. Every purchase makes a difference.
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold mb-4 text-mustard uppercase tracking-wider">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors duration-300 hover:text-terracotta"
                      style={{ color: "#ccc" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-xs" style={{ color: "#666" }}>
            © 2026 Handcrafted Haven. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}