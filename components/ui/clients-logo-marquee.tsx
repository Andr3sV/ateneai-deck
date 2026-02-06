"use client";

import Image from "next/image";

const clientLogos = [
  { src: "/logos-reputation/berruslogo.png", alt: "Berrus", width: 150, height: 64 },
  { src: "/logos-reputation/cimslogo.png", alt: "CIMS", width: 200, height: 64 },
  { src: "/logos-reputation/expofastlogo.png", alt: "ExpoFast", width: 200, height: 64 },
  { src: "/logos-reputation/ralogo.png", alt: "RA", width: 200, height: 64 },
  { src: "/logos-reputation/simbiosialogo.png", alt: "Simbiosia", width: 200, height: 32, className: "h-8 w-auto object-contain block" },
  { src: "/images/testimonial/trii.png", alt: "Trii", width: 150, height: 64 },
  { src: "/images/testimonial/intercard.png", alt: "Intercard Solutions", width: 150, height: 64 },
];

function LogoImage({ logo }: { logo: typeof clientLogos[number] }) {
  return (
    <div className="flex items-center justify-center transition-all hover:opacity-80">
      <Image
        src={logo.src}
        alt={logo.alt}
        width={logo.width}
        height={logo.height}
        className={logo.className ?? "h-8 w-auto object-contain"}
        quality={100}
        unoptimized
      />
    </div>
  );
}

export default function ClientLogosMarquee({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";
  return (
    <div className="w-full py-10 overflow-hidden relative">
      <div
        className={`absolute left-0 top-0 bottom-0 w-32 z-10 ${
          isDark ? "bg-gradient-to-r from-[#151515] to-transparent" : "bg-gradient-to-r from-white to-transparent"
        }`}
      />
      <div
        className={`absolute right-0 top-0 bottom-0 w-32 z-10 ${
          isDark ? "bg-gradient-to-l from-[#151515] to-transparent" : "bg-gradient-to-l from-white to-transparent"
        }`}
      />

      <div
        className={`flex w-[200%] items-center gap-16 ${
          isDark ? "text-white opacity-80 grayscale" : "text-slate-400 grayscale opacity-70"
        }`}
        style={{ animation: "marquee 25s linear infinite" }}
      >
        {clientLogos.map((logo, index) => (
          <div key={`set1-${index}`} className="flex items-center justify-center h-8 px-8 flex-shrink-0">
            <LogoImage logo={logo} />
          </div>
        ))}
        {clientLogos.map((logo, index) => (
          <div key={`set2-${index}`} className="flex items-center justify-center h-18 px-8 flex-shrink-0">
            <LogoImage logo={logo} />
          </div>
        ))}
      </div>
    </div>
  );
}
