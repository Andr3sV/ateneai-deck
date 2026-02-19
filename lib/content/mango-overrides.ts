// Content overrides for Mango ABM page only
// These override specific content without modifying global translations

const heroByLang = {
  en: {
    headline: "AI is becoming the first point of fashion brand evaluation.",
    subheadline: "How is Mango represented inside generative AI answers?",
    cta: "", // No CTA button on Mango home
  },
  es: {
    headline: "La IA ya decide qué marcas de moda se recomiendan",
    subheadline: "¿Cómo aparece Mango — y cada una de sus líneas — en las respuestas que influyen en la compra?",
    cta: "",
  },
} as const;

export const mangoABMOverrides = {
  heroByLang,
  hero: heroByLang.en, // default/legacy
  contextShift: {
    headline: "Brand perception now forms before traffic exists.",
    subheadline: "AI answers influence consideration before mango.com is visited.",
  },
  structuralRisk: {
    headline: "AI does not understand brand hierarchies.",
    subheadline: "Each Mango line competes independently inside AI responses.",
    statements: [
      "Visibility is not inherited.",
      "Authority is not shared.",
      "Governance must be deliberate.",
    ],
  },
  competitivePerception: {
    headline: "AI answers shape competitive positioning.",
    subheadline: "Certain brands become default references inside fashion queries.",
    note: "Absence is invisible — but strategic.",
  },
  whatAteneAI: {
    title: "AI Visibility Governance for Mango Group",
    layers: [
      "Visibility Layer",
      "Competitive Intelligence Layer",
      "Authority Layer",
      "Governance Layer",
    ],
  },
  enterpriseImplementation: {
    headline: "Built for multi-brand, multi-market fashion groups.",
    blocks: [
      "Multi-brand configuration",
      "Multi-region tracking",
      "Executive-level dashboards",
    ],
  },
  strategicOutcomes: {
    headline: "Strategic outcomes for Mango Group.",
    outcomes: [
      "Controlled AI-driven brand perception",
      "Consistent authority across brand lines",
      "Executive visibility governance",
    ],
  },
  engagementProposal: {
    headline: "Executive AI Visibility Assessment for Mango Group",
    deliverables: [
      "Brand-line visibility baseline",
      "Citation authority mapping",
      "Competitive displacement overview",
      "Executive KPI framework",
      "Governance roadmap",
    ],
    cta: "Request Executive AI Visibility Briefing",
  },
};
