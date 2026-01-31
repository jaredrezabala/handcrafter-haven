import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Handcrafted Haven",
  description: "Discover unique handcrafted treasures from talented artisans.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}