# Multi-Audience Architecture Documentation

## Overview

This document describes the modular multi-audience architecture for the AteneAI website, supporting different narrative versions for various audiences and use cases.

## Route Structure

### Core Routes

All routes support language prefixes `/en` and `/es`:

1. **Self-Serve Landing**
   - `/en` - English self-serve landing
   - `/es` - Spanish self-serve landing
   - **Version**: `selfServe`
   - **Content**: Balanced version with category framing, product overview, execution layer (condensed), risk slide, CTA

2. **Marketing Version**
   - `/en/marketing` - English marketing version
   - `/es/marketing` - Spanish marketing version
   - **Version**: `marketing`
   - **Audience**: Head of Marketing, SEO, Performance, Competitive Intelligence
   - **Content**: Multi-platform tracking, citation authority, query patterns, sentiment tracking, competitive battlefield, executive overview dashboard, weekly execution plan, real citation proof, infrastructure layer

3. **Executive Short Version**
   - `/en/exec` - English executive short version
   - `/es/exec` - Spanish executive short version
   - **Version**: `exec`
   - **Audience**: CEO, COO, CMO (board-level)
   - **Content**: AI market shift, AI visibility as board metric, competitive displacement risk, governance framing, operating model (condensed), strategic close
   - **Excludes**: Deep dashboard UI, tactical query details, word clouds

4. **Executive Full Version**
   - `/en/full/exec` - English executive full version
   - `/es/full/exec` - Spanish executive full version
   - **Version**: `execFull`
   - **Content**: Extended version of exec with industry framing, competitive scenarios, KPI strip, governance model, infrastructure positioning, strategic decision slide

5. **Board View (Enterprise Executive Brief)**
   - `/en/board` - Generic board view
   - `/es/board` - Generic board view (Spanish)
   - `/en/board/[company]` - Company-specific board view
   - `/es/board/[company]` - Company-specific board view (Spanish)
   - **Mode**: Web (dark premium theme) or PDF (white background, consulting-style)
   - **Structure**: Exactly 6 pages/sections

6. **ABM Brand Pages**
   - `/en/b/[brand]` - English ABM brand page
   - `/es/b/[brand]` - Spanish ABM brand page
   - **Features**: Not indexable, accessible via direct link, maintains design system

## Component Architecture

### Core Components

1. **DeckViewSelector** (`components/deck/deck-view-selector.tsx`)
   - Selects between presentation and scroll view modes
   - Supports version parameter

2. **DeckPlayer** (`components/deck/deck-player.tsx`)
   - Presentation mode with slide navigation
   - Exports `ALL_SLIDES` and `VERSIONS`
   - Supports audience-specific versions: `selfServe`, `marketing`, `exec`, `execFull`

3. **DeckScrollView** (`components/deck/deck-scroll-view.tsx`)
   - Scroll view mode showing all slides vertically
   - Supports same version configurations

4. **BoardView** (`components/deck/board-view.tsx`)
   - Dual-mode component (web/PDF)
   - 6 sections exactly
   - Supports personalization

5. **ABMBrandPage** (`components/deck/abm-brand-page.tsx`)
   - Brand-specific landing page
   - Industry AI battlefield framing
   - Competitor analysis
   - Citation gap examples
   - Executive implications
   - CTA for AI Visibility Audit

### Version Configurations

Version configurations are defined in `components/deck/deck-player.tsx`:

- `selfServe`: Hero, Problem, Solution Overview, Features, Opportunities, Competitive Differentiators, Pain Points, CTA
- `marketing`: Full feature set including Share of Voice, Citation Tracking, Sentiment Analysis, Platform Performance, Executive Overview, Reports, Opportunities, Citation Evidence, Competitive Differentiators, Pain Points, Use Cases, CTA
- `exec`: Hero, Problem, Solution Overview, Share of Voice, Executive Overview, Opportunities, Competitive Differentiators, Pain Points, CTA
- `execFull`: Extended exec version with additional slides

## Personalization System

### Configuration Interface

```typescript
interface PersonalizationConfig {
  companyName?: string;
  industry?: string;
  topCompetitors?: string[];
  primaryMarket?: string;
  logo?: string;
  clientLogo?: string;
}
```

### Usage

Personalization is injected via URL parameters:
- `?company=CompanyName`
- `?industry=IndustryName`
- `?competitors=Competitor1,Competitor2,Competitor3`
- `?market=MarketName`

The `getPersonalizationFromParams` function in `lib/personalization.ts` extracts these parameters.

## Board View Structure

### 6 Pages Exactly

1. **The Shift**
   - Headline: "AI Is Reshaping Market Discovery in {industry}"
   - Content: AI search transformation narrative

2. **The Risk**
   - Headline: "AI Visibility Is a Competitive Surface"
   - Content: Competitive displacement risk

3. **The Metric**
   - Headline: "AI Visibility Is Becoming a Board-Level KPI"
   - Metrics: AI Visibility Index, Share of Citations, Competitive Momentum, Category Rank

4. **The Governance Gap**
   - Headline: "Most {industry} organizations lack AI visibility governance."
   - Content: Governance gap narrative

5. **The Framework**
   - Headline: "AI Visibility Governance Framework"
   - Framework: Monitor → Benchmark → Execute → Report

6. **The Decision**
   - Headline: "AI Visibility Will Define Category Leadership in {industry}"
   - CTAs: Request Executive AI Visibility Briefing, Run 30-Day AI Visibility Audit

### PDF Export

- PDF mode activated via `?mode=pdf` parameter
- Print styles defined in `app/print.css`
- Each section fits exactly one PDF page
- White background, clean layout, no decorative elements
- Download button in web mode triggers browser print dialog

## Translations

All content is internationalized via `lib/translations.ts`:
- English (`en`) and Spanish (`es`) locales
- Board view translations include all 6 slides
- Placeholder replacement for `{industry}`, `{companyName}`

## ABM Brand Pages Structure

1. **Brand-specific hero** - Company name and AI visibility focus
2. **Industry AI battlefield framing** - Competitive landscape context
3. **Competitor AI dominance framing** - Competitive analysis
4. **Citation gap examples** - Generic examples (not real data)
5. **Executive implications** - Risk and opportunity framing
6. **CTA** - Run AI Visibility Audit

## Technical Implementation

### Next.js App Router

- All routes use Next.js 13+ App Router
- `params` and `searchParams` are async (Promise-based)
- Metadata generation for SEO (ABM pages set `index: false`)

### Styling

- Tailwind CSS for all styling
- Dark theme (`bg-[#151515]`) for web mode
- White theme for PDF mode
- Responsive design with `md:` and `lg:` breakpoints

### Print Styles

- `app/print.css` contains print-specific styles
- `@page` rules for A4 sizing
- Section page breaks for clean PDF output
- Removes shadows, decorative elements, and non-essential UI

## File Structure

```
app/
  [lang]/
    page.tsx                    # Self-serve landing
    marketing/
      page.tsx                  # Marketing version
    exec/
      page.tsx                  # Executive short
    full/
      exec/
        page.tsx                # Executive full
    board/
      page.tsx                  # Generic board view
      [company]/
        page.tsx                # Company-specific board
    b/
      [brand]/
        page.tsx                # ABM brand page

components/
  deck/
    deck-view-selector.tsx      # View mode selector
    deck-player.tsx             # Presentation mode
    deck-scroll-view.tsx        # Scroll mode
    board-view.tsx              # Board view component
    abm-brand-page.tsx          # ABM brand page

lib/
  translations.ts               # i18n translations
  personalization.ts            # Personalization utilities
  version-configs.ts            # Version configurations (legacy)
```

## Usage Examples

### Accessing Marketing Version
```
/en/marketing
/es/marketing
```

### Accessing Board View with Personalization
```
/en/board?company=AcmeCorp&industry=Technology&competitors=Competitor1,Competitor2
```

### Accessing PDF Mode Board View
```
/en/board?company=AcmeCorp&mode=pdf
```

### Accessing ABM Brand Page
```
/en/b/AcmeCorp?industry=Technology&competitors=Competitor1,Competitor2
```

## Future Enhancements

1. **PDF Generation**: Consider using `react-pdf` or `@react-pdf/renderer` for programmatic PDF generation instead of browser print
2. **Analytics**: Add tracking for different audience versions
3. **A/B Testing**: Support for variant testing within audience versions
4. **Dynamic Content**: API integration for real citation data in ABM pages
5. **Authentication**: Optional authentication for board views with sensitive data
