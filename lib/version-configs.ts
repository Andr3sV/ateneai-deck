// This file will be imported by deck components that have access to ALL_SLIDES
// We'll define the slide IDs as strings and map them in the components
export type SlideId = 
  | "hero"
  | "aeoQuote"
  | "problem"
  | "painPoints"
  | "stats"
  | "solutionOverview"
  | "features"
  | "shareOfVoice"
  | "citationTracking"
  | "sentimentAnalysis"
  | "platformPerformance"
  | "executiveOverview"
  | "reports"
  | "opportunities"
  | "citationEvidence"
  | "competitiveDifferentiators"
  | "useCases"
  | "roiValue"
  | "integration"
  | "brand"
  | "insights"
  | "pricing"
  | "reputation"
  | "testimonials"
  | "cta";

// Extended version configurations for multi-audience architecture
// These are slide IDs that will be mapped to actual components in deck components
export const AUDIENCE_VERSIONS = {
  // Self-serve landing (balanced)
  selfServe: [
    "hero",
    "problem",
    "solutionOverview",
    "features",
    "opportunities",
    "competitiveDifferentiators",
    "painPoints",
    "cta",
  ] as SlideId[],
  
  // Marketing version (operational, tactical)
  marketing: [
    "hero",
    "problem",
    "solutionOverview",
    "shareOfVoice",
    "citationTracking",
    "sentimentAnalysis",
    "platformPerformance",
    "executiveOverview",
    "reports",
    "opportunities",
    "citationEvidence",
    "competitiveDifferentiators",
    "painPoints",
    "useCases",
    "cta",
  ] as SlideId[],
  
  // Executive short version (strategic, board-level)
  exec: [
    "hero",
    "problem",
    "solutionOverview",
    "shareOfVoice",
    "executiveOverview",
    "opportunities",
    "competitiveDifferentiators",
    "painPoints",
    "cta",
  ] as SlideId[],
  
  // Executive full version (extended strategic)
  execFull: [
    "hero",
    "problem",
    "solutionOverview",
    "shareOfVoice",
    "citationTracking",
    "executiveOverview",
    "reports",
    "opportunities",
    "citationEvidence",
    "competitiveDifferentiators",
    "painPoints",
    "useCases",
    "cta",
  ] as SlideId[],
} as const;

export type AudienceVersionType = keyof typeof AUDIENCE_VERSIONS;
