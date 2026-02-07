"use client";

import { motion } from "framer-motion";

export function AeoQuoteSlide() {
  return (
    <div className="relative w-full h-full flex items-center justify-center px-6 bg-[#151515] max-md:overflow-y-auto max-md:overflow-x-hidden max-md:py-8 max-md:pb-24">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl lg:text-4xl font-light text-white leading-relaxed"
        >
          2026: AEO no longer says{" "}
          <span className="inline-block bg-gradient-to-r from-[#C2C2E1] to-white bg-clip-text text-transparent">
            &lsquo;what people search for&rsquo;
          </span>
          <br />
          <span className="text-white">It says </span>
          <span className="inline-block bg-gradient-to-r from-[#C2C2E1] to-white bg-clip-text text-transparent">
            &lsquo;what they&apos;re going to buy&rsquo;
          </span>
          .
        </motion.p>
      </div>
    </div>
  );
}
