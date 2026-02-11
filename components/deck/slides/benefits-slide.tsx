"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Globe } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Real-time tracking and instant notifications when your brand is mentioned",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description:
      "Enterprise-grade security to protect your data and brand information",
  },
  {
    icon: Globe,
    title: "Multi-Platform",
    description:
      "Track across all major AI platforms from a single unified dashboard",
  },
];

export function BenefitsSlide() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-6 bg-[#151515]">
      <div className="w-[80%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {benefits.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="text-center"
            >
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#C2C2E1]/20">
                <item.icon className="h-7 w-7 text-[#C2C2E1]" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="text-sm text-[#A0A0A0] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
