"use client";

import { motion, AnimatePresence } from "framer-motion";

/**
 * Canva-style slide transition: smooth fade + subtle scale/slide.
 * Inspired by React Bits animated page transitions.
 */
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
    filter: "blur(8px)",
    scale: 0.98,
  }),
  center: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 80 : -80,
    opacity: 0,
    filter: "blur(8px)",
    scale: 0.98,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

export function SlideTransition({
  currentIndex,
  direction,
  children,
}: {
  currentIndex: number;
  direction: number;
  language?: string;
  children: React.ReactNode;
}) {
  return (
    <AnimatePresence mode="wait" custom={direction}>
      <motion.div
        custom={direction}
        variants={slideVariants}
        initial="enter"
        animate="center"
        exit="exit"
        className="slide-container absolute inset-0 flex items-center justify-center"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
