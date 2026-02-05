"use client";

import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, Grid3X3, ZoomIn, MoreHorizontal, Maximize2 } from "lucide-react";
import { SlideTransition } from "./slide-transition";
import { HeroSlide } from "./slides/hero-slide";
import { StatsSlide } from "./slides/stats-slide";
import { LogosSlide } from "./slides/logos-slide";
import { FeaturesSlide } from "./slides/features-slide";
import { BrandStorytellingSlide } from "./slides/brand-storytelling-slide";
import { InsightsSlide } from "./slides/insights-slide";
import { BenefitsSlide } from "./slides/benefits-slide";
import { TestimonialsSlide } from "./slides/testimonials-slide";
import { CtaSlide } from "./slides/cta-slide";

const SLIDES = [
  { id: "hero", Component: HeroSlide },
  { id: "stats", Component: StatsSlide },
  { id: "logos", Component: LogosSlide },
  { id: "features", Component: FeaturesSlide },
  { id: "brand", Component: BrandStorytellingSlide },
  { id: "insights", Component: InsightsSlide },
  { id: "benefits", Component: BenefitsSlide },
  { id: "testimonials", Component: TestimonialsSlide },
  { id: "cta", Component: CtaSlide },
];

const TOTAL = SLIDES.length;

export function DeckPlayer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goNext = useCallback(() => {
    if (currentIndex >= TOTAL - 1) return;
    setDirection(1);
    setCurrentIndex((i) => i + 1);
  }, [currentIndex]);

  const goPrev = useCallback(() => {
    if (currentIndex <= 0) return;
    setDirection(-1);
    setCurrentIndex((i) => i - 1);
  }, [currentIndex]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goNext, goPrev]);

  const CurrentSlide = SLIDES[currentIndex].Component;

  return (
    <div className="fixed inset-0 flex flex-col bg-[#151515]">
      {/* Slide area - no header */}
      <div className="flex-1 relative min-h-0 overflow-hidden">
        <SlideTransition currentIndex={currentIndex} direction={direction}>
          <CurrentSlide />
        </SlideTransition>
      </div>

      {/* Canva-like bottom bar */}
      <div className="flex-shrink-0 h-14 px-4 flex items-center justify-between bg-[#1F2023] border-t border-white/5 relative">
        <div className="flex items-center gap-2 flex-1 min-w-0 justify-start">
          <button
            type="button"
            onClick={goPrev}
            disabled={currentIndex === 0}
            className="p-2 rounded-md text-white/80 hover:text-white hover:bg-white/10 disabled:opacity-40 disabled:pointer-events-none transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <span className="text-sm text-white/90 tabular-nums min-w-[4rem] text-center">
            {currentIndex + 1} / {TOTAL}
          </span>
          <button
            type="button"
            onClick={goNext}
            disabled={currentIndex === TOTAL - 1}
            className="p-2 rounded-md text-white/80 hover:text-white hover:bg-white/10 disabled:opacity-40 disabled:pointer-events-none transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Progress bar - Canva style (centered) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-0.5 w-48 justify-center">
          {Array.from({ length: TOTAL }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                setDirection(i > currentIndex ? 1 : -1);
                setCurrentIndex(i);
              }}
              className="h-1.5 rounded-sm min-w-[8px] flex-1 max-w-[24px] transition-colors focus:outline-none focus:ring-1 focus:ring-white/50"
              style={{
                backgroundColor: i === currentIndex ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.25)",
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-1 flex-1 min-w-0 justify-end">
          <button
            type="button"
            className="p-2 rounded-md text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Grid view"
          >
            <Grid3X3 className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="p-2 rounded-md text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Zoom"
          >
            <ZoomIn className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="p-2 rounded-md text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="More options"
          >
            <MoreHorizontal className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="p-2 rounded-md text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Full screen"
          >
            <Maximize2 className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
