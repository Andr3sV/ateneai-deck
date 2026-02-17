"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { DeckPlayer } from "./deck-player";
import { DeckScrollView } from "./deck-scroll-view";
import { AUDIENCE_VERSIONS, type AudienceVersionType } from "@/lib/version-configs";

// Map audience version IDs to slide IDs from ALL_SLIDES
function mapAudienceVersionToSlides(
  audienceVersion: AudienceVersionType,
  allSlides: typeof import("./deck-player").ALL_SLIDES
) {
  const slideIds = AUDIENCE_VERSIONS[audienceVersion];
  return slideIds.map((id) => {
    const slide = Object.values(allSlides).find((s) => s.id === id);
    return slide;
  }).filter(Boolean);
}

function AudienceDeckContent({ 
  audienceVersion 
}: { 
  audienceVersion: AudienceVersionType 
}) {
  const searchParams = useSearchParams();
  const view = searchParams.get("view") || "presentation";

  // For now, we'll use a mapping approach
  // In a real implementation, we'd need to export ALL_SLIDES or create a mapping function
  // For now, return a message that this needs to be integrated with deck-player
  
  if (view === "scroll") {
    return <DeckScrollView version="full" />;
  }

  return <DeckPlayer version="full" />;
}

export function AudienceDeckSelector({ 
  audienceVersion 
}: { 
  audienceVersion: AudienceVersionType 
}) {
  return (
    <Suspense fallback={<div className="fixed inset-0 flex items-center justify-center bg-[#151515] text-white">Loading...</div>}>
      <AudienceDeckContent audienceVersion={audienceVersion} />
    </Suspense>
  );
}
