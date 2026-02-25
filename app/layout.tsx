import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Portfolio – Akan",
  description: "Portfolio développeur web (Next.js, React, Tailwind).",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className="min-h-screen transition-colors duration-300">
        <Navbar />
        <main className="container-soft py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
