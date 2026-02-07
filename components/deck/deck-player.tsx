"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Maximize2, Minimize2 } from "lucide-react";
import { SlideTransition } from "./slide-transition";
import { useLanguage } from "@/lib/language-context";
import { HeroSlide } from "./slides/hero-slide";
import { StatsSlide } from "./slides/stats-slide";
import { AeoQuoteSlide } from "./slides/aeo-quote-slide";
import { FeaturesSlide } from "./slides/features-slide";
import { BrandStorytellingSlide } from "./slides/brand-storytelling-slide";
import { InsightsSlide } from "./slides/insights-slide";
import { PricingSlide } from "./slides/pricing-slide";
import { ReputationSlide } from "./slides/reputation-slide";
import { CtaSlide } from "./slides/cta-slide";

const SLIDES = [
  { id: "hero", Component: HeroSlide },
  { id: "stats", Component: StatsSlide },
  { id: "aeo-quote", Component: AeoQuoteSlide },
  { id: "features", Component: FeaturesSlide },
  { id: "brand", Component: BrandStorytellingSlide },
  { id: "insights", Component: InsightsSlide },
  { id: "pricing", Component: PricingSlide },
  { id: "reputation", Component: ReputationSlide },
  { id: "cta", Component: CtaSlide },
];

const TOTAL = SLIDES.length;

export function DeckPlayer() {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isBarVisible, setIsBarVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleFullscreen = useCallback(() => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

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
    <div ref={containerRef} className="fixed inset-0 flex flex-col bg-[#151515]">
      {/* Slide area: padding top en móvil; el scroll lo manejan las slides individuales */}
      <div className="flex-1 relative min-h-0 overflow-hidden max-md:pt-6">
        <SlideTransition currentIndex={currentIndex} direction={direction} language={language}>
          <CurrentSlide />
        </SlideTransition>
      </div>

      {/* Zona inferior: al pasar el cursor aquí se muestra la barra */}
      <div
        className="absolute bottom-0 left-0 right-0 h-14 overflow-hidden z-20"
        onMouseEnter={() => setIsBarVisible(true)}
        onMouseLeave={() => setIsBarVisible(false)}
      >
        {/* Canva-like bottom bar: se desliza desde abajo */}
        <div
          className={`h-full px-4 flex items-center justify-between bg-[#1F2023] border-t border-white/5 relative transition-transform duration-300 ease-out max-md:translate-y-0 ${
            isBarVisible ? "md:translate-y-0" : "md:translate-y-full"
          }`}
        >
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

        {/* Progress bar - centrada en desktop, a la derecha en móvil */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center gap-0.5 w-48 justify-center">
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

        <div className="flex items-center gap-2 flex-1 min-w-0 justify-end">
          {/* Progress bar móvil - a la izquierda del botón expandir */}
          <div className="flex md:hidden items-center gap-0.5 w-24 shrink-0">
            {Array.from({ length: TOTAL }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => {
                  setDirection(i > currentIndex ? 1 : -1);
                  setCurrentIndex(i);
                }}
                className="h-1.5 rounded-sm min-w-[6px] flex-1 max-w-[12px] transition-colors focus:outline-none focus:ring-1 focus:ring-white/50"
                style={{
                  backgroundColor: i === currentIndex ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.25)",
                }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={toggleFullscreen}
            className="p-2 rounded-md text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label={isFullscreen ? "Salir de pantalla completa" : "Pantalla completa"}
          >
            {isFullscreen ? (
              <Minimize2 className="h-5 w-5" />
            ) : (
              <Maximize2 className="h-5 w-5" />
            )}
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}
