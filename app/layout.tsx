import type { Metadata } from "next";
import "./globals.css";
import "./print.css";
import { Providers } from "@/components/providers";

const siteDescription =
  "Become the brand everyone is talking about on ChatGPT and Gemini. We help your brand show up and be recommended in AI chatbots, turning that visibility into intelligence for smarter marketing.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? "https://ateneai.com"),
  title: "AteneAI Deck",
  description: siteDescription,
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "AteneAI — Become the brand everyone is talking about on AI",
    description: siteDescription,
    type: "website",
    images: [{ url: "/icon.svg", width: 918, height: 918, alt: "AteneAI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AteneAI — Become the brand everyone is talking about on AI",
    description: siteDescription,
    images: ["/icon.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-[#151515] text-white overflow-hidden">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
