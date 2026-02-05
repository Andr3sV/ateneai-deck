"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Carlos Guayara",
    role: "Cofounder - CMO, Trii (YC S21)",
    avatar: "/images/testimonial/guaya.png",
    logo: "/images/testimonial/trii.png",
    quote:
      "AteneAI has transformed how we understand our brand's presence in AI responses. The real-time insights help us make data-driven decisions that actually move the needle.",
  },
  {
    name: "Juan Cardozo",
    role: "Chief Executive Officer, Intercard",
    avatar: "/images/testimonial/juan.png",
    logo: "/images/testimonial/intercard.png",
    quote:
      "The competitive intelligence features are game-changing. We can track our AI visibility against competitors and identify opportunities before they do. It's become essential to our strategy.",
  },
];

export function TestimonialsSlide() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-6 py-8 bg-[#151515]">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-3xl font-light text-white mb-2 text-center"
      >
        What brands say
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-base text-[#A0A0A0] mb-10 text-center"
      >
        See how companies are transforming their AI visibility strategy
      </motion.p>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-white">{t.name}</h3>
                <p className="text-sm text-[#A0A0A0] truncate">{t.role}</p>
              </div>
              <div className="relative w-16 h-16 flex-shrink-0">
                <Image
                  src={t.logo}
                  alt=""
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
            <p className="text-[#E0E0E0] text-sm leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
