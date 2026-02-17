// Content layer - structured content dictionaries
// No auto-translation, curated copy per language

export type Language = "en" | "es";
export type PageType = "landing" | "marketing" | "exec" | "execFull" | "board" | "abm";

// Content structure interfaces
export interface BoardContent {
  slide1: {
    headline: string;
    content: string;
  };
  slide2: {
    headline: string;
    content: string;
  };
  slide3: {
    headline: string;
    metrics: Array<{ label: string; description: string }>;
  };
  slide4: {
    headline: string;
    content: string;
  };
  slide5: {
    headline: string;
    framework: Array<{ step: string; description: string }>;
  };
  slide6: {
    headline: string;
    cta1: string;
    cta2: string;
  };
  downloadPdf: string;
}

export interface MangoABMContent {
  hero: {
    headline: string;
    subheadline: string;
  };
  section2: {
    headline: string;
    content: string;
    queries: string[];
  };
  section3: {
    headline: string;
    content: string;
    competitors: string[];
  };
  section4: {
    headline: string;
    risks: Array<{ risk: string; implication: string }>;
  };
  section5: {
    headline: string;
    content: string;
    topics: string[];
  };
  section6: {
    headline: string;
    content: string;
    points: string[];
  };
  section7: {
    headline: string;
    deliverables: string[];
    cta: string;
  };
}

// Content getter function
export function getContent(lang: Language, pageType: PageType, brand?: string): any {
  try {
    if (pageType === "board") {
      return require(`./${lang}/board`).boardContent;
    }
    if (pageType === "abm" && brand === "mango") {
      return require(`./${lang}/mango`).mangoContent;
    }
    // Add other content types as needed
    throw new Error(`Content not found for ${lang}/${pageType}${brand ? `/${brand}` : ""}`);
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error(`[DEV] Content loading error:`, error);
      throw new Error(`Content not found for ${lang}/${pageType}${brand ? `/${brand}` : ""}. Make sure the content file exists.`);
    }
    throw error;
  }
}

// Dev helper to check if content exists
export function hasContent(lang: Language, pageType: PageType, brand?: string): boolean {
  try {
    getContent(lang, pageType, brand);
    return true;
  } catch {
    return false;
  }
}
