"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { HeroSlide } from "./slides/hero-slide";
import { StatsSlide } from "./slides/stats-slide";
import { AeoQuoteSlide } from "./slides/aeo-quote-slide";
import { FeaturesSlide } from "./slides/features-slide";
import { BrandStorytellingSlide } from "./slides/brand-storytelling-slide";
import { InsightsSlide } from "./slides/insights-slide";
import { PricingSlide } from "./slides/pricing-slide";
import { ReputationSlide } from "./slides/reputation-slide";
import { TestimonialsSlide } from "./slides/testimonials-slide";
import { CtaSlide } from "./slides/cta-slide";
import { ProblemSlide } from "./slides/problem-slide";
import { PainPointsSlide } from "./slides/pain-points-slide";
import { SolutionOverviewSlide } from "./slides/solution-overview-slide";
import { ShareOfVoiceSlide } from "./slides/share-of-voice-slide";
import { CitationTrackingSlide } from "./slides/citation-tracking-slide";
import { SentimentAnalysisSlide } from "./slides/sentiment-analysis-slide";
import { PlatformPerformanceSlide } from "./slides/platform-performance-slide";
import { ExecutiveOverviewSlide } from "./slides/executive-overview-slide";
import { ReportsSlide } from "./slides/reports-slide";
import { OpportunitiesSlide } from "./slides/opportunities-slide";
import { CompetitiveDifferentiatorsSlide } from "./slides/competitive-differentiators-slide";
import { UseCasesSlide } from "./slides/use-cases-slide";
import { RoiValueSlide } from "./slides/roi-value-slide";
import { IntegrationSlide } from "./slides/integration-slide";

// All available slides
const ALL_SLIDES = {
  hero: { id: "hero", Component: HeroSlide },
  aeoQuote: { id: "aeo-quote", Component: AeoQuoteSlide },
  problem: { id: "problem", Component: ProblemSlide },
  painPoints: { id: "pain-points", Component: PainPointsSlide },
  stats: { id: "stats", Component: StatsSlide },
  solutionOverview: { id: "solution-overview", Component: SolutionOverviewSlide },
  features: { id: "features", Component: FeaturesSlide },
  shareOfVoice: { id: "share-of-voice", Component: ShareOfVoiceSlide },
  citationTracking: { id: "citation-tracking", Component: CitationTrackingSlide },
  sentimentAnalysis: { id: "sentiment-analysis", Component: SentimentAnalysisSlide },
  platformPerformance: { id: "platform-performance", Component: PlatformPerformanceSlide },
  executiveOverview: { id: "executive-overview", Component: ExecutiveOverviewSlide },
  reports: { id: "reports", Component: ReportsSlide },
  opportunities: { id: "opportunities", Component: OpportunitiesSlide },
  competitiveDifferentiators: { id: "competitive-differentiators", Component: CompetitiveDifferentiatorsSlide },
  useCases: { id: "use-cases", Component: UseCasesSlide },
  roiValue: { id: "roi-value", Component: RoiValueSlide },
  integration: { id: "integration", Component: IntegrationSlide },
  brand: { id: "brand", Component: BrandStorytellingSlide },
  insights: { id: "insights", Component: InsightsSlide },
  pricing: { id: "pricing", Component: PricingSlide },
  reputation: { id: "reputation", Component: ReputationSlide },
  testimonials: { id: "testimonials", Component: TestimonialsSlide },
  cta: { id: "cta", Component: CtaSlide },
};

// Version configurations
const VERSIONS = {
  short: [
    ALL_SLIDES.hero,
    ALL_SLIDES.problem,
    ALL_SLIDES.solutionOverview,
    ALL_SLIDES.features,
    ALL_SLIDES.executiveOverview,
    ALL_SLIDES.competitiveDifferentiators,
    ALL_SLIDES.roiValue,
    ALL_SLIDES.cta,
  ],
  full: [
    ALL_SLIDES.hero,
    ALL_SLIDES.problem,
    ALL_SLIDES.solutionOverview,
    ALL_SLIDES.shareOfVoice,
    ALL_SLIDES.citationTracking,
    ALL_SLIDES.sentimentAnalysis,
    ALL_SLIDES.platformPerformance,
    ALL_SLIDES.executiveOverview,
    ALL_SLIDES.reports,
    ALL_SLIDES.opportunities,
    ALL_SLIDES.competitiveDifferentiators,
    ALL_SLIDES.painPoints,
    ALL_SLIDES.useCases,
    ALL_SLIDES.roiValue,
    ALL_SLIDES.cta,
  ],
  hybrid: [
    ALL_SLIDES.hero,
    ALL_SLIDES.problem,
    ALL_SLIDES.solutionOverview,
    ALL_SLIDES.features,
    ALL_SLIDES.shareOfVoice,
    ALL_SLIDES.executiveOverview,
    ALL_SLIDES.reports,
    ALL_SLIDES.opportunities,
    ALL_SLIDES.competitiveDifferentiators,
    ALL_SLIDES.useCases,
    ALL_SLIDES.roiValue,
    ALL_SLIDES.cta,
  ],
  default: [
    ALL_SLIDES.hero,
    ALL_SLIDES.aeoQuote,
    ALL_SLIDES.features,
    ALL_SLIDES.brand,
    ALL_SLIDES.insights,
    ALL_SLIDES.reputation,
    ALL_SLIDES.cta,
  ],
} as const;

type VersionType = keyof typeof VERSIONS;

const VERSION_KEYS = Object.keys(VERSIONS) as VersionType[];

export function DeckScrollView({ version: versionProp }: { version?: VersionType } = {}) {
  const searchParams = useSearchParams();
  const versionParam = (versionProp ?? searchParams.get("version") ?? "default") as VersionType;
  const version = VERSION_KEYS.includes(versionParam) ? versionParam : "default";
  const SLIDES = VERSIONS[version];

  // Enable scroll on body when in scroll view mode
  useEffect(() => {
    document.body.style.overflow = "auto";
    document.documentElement.style.overflow = "auto";
    
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, []);

  return (
    <div className="bg-[#151515]">
      {SLIDES.map((slide, index) => {
        const SlideComponent = slide.Component;
        return (
          <div
            key={slide.id}
            className="w-screen h-screen"
            style={{ position: 'relative' }}
          >
            <SlideComponent />
          </div>
        );
      })}
    </div>
  );
}
