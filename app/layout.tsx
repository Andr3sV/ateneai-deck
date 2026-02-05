import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AteneAI Deck",
  description: "AI Search Optimization Intelligence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased bg-[#151515] text-white overflow-hidden">
        {children}
      </body>
    </html>
  );
}
