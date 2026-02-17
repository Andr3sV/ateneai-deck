// Personalization configuration for ABM and Board views
export interface PersonalizationConfig {
  companyName?: string;
  industry?: string;
  topCompetitors?: string[];
  primaryMarket?: string;
  logo?: string;
  clientLogo?: string;
}

export const DEFAULT_PERSONALIZATION: PersonalizationConfig = {
  companyName: undefined,
  industry: undefined,
  topCompetitors: [],
  primaryMarket: undefined,
  logo: "/logoateneaip.svg",
  clientLogo: undefined,
};

// Known company slugs -> display name and default industry for Board view
export const BOARD_COMPANY_DISPLAY: Record<
  string,
  { companyName: string; industry: string }
> = {
  mango: { companyName: "Mango Group", industry: "fashion" },
};

// Helper to get personalization from URL params or context
export function getPersonalizationFromParams(
  params: Record<string, string | string[] | undefined>
): PersonalizationConfig {
  const config: PersonalizationConfig = { ...DEFAULT_PERSONALIZATION };
  
  if (params.company) {
    config.companyName = Array.isArray(params.company) ? params.company[0] : params.company;
  }
  
  if (params.industry) {
    config.industry = Array.isArray(params.industry) ? params.industry[0] : params.industry;
  }
  
  if (params.competitors) {
    const competitors = Array.isArray(params.competitors) 
      ? params.competitors 
      : params.competitors.split(',');
    config.topCompetitors = competitors;
  }
  
  if (params.market) {
    config.primaryMarket = Array.isArray(params.market) ? params.market[0] : params.market;
  }
  
  return config;
}

// For Board /[lang]/board/[company]: merge route company with display name and industry
export function getBoardPersonalization(
  companySlug: string,
  searchParams: Record<string, string | string[] | undefined>
): PersonalizationConfig {
  const config = getPersonalizationFromParams({ ...searchParams, company: companySlug });
  const display = BOARD_COMPANY_DISPLAY[companySlug.toLowerCase()];
  if (display) {
    config.companyName = display.companyName;
    if (!config.industry) config.industry = display.industry;
  } else {
    // Unknown slug: use capitalized name as display
    config.companyName =
      config.companyName ?? companySlug.charAt(0).toUpperCase() + companySlug.slice(1);
  }
  return config;
}
