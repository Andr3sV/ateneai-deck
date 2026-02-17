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
