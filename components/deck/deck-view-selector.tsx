"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { DeckPlayer } from "./deck-player";
import { DeckScrollView } from "./deck-scroll-view";

function DeckViewContent() {
  const searchParams = useSearchParams();
  const view = searchParams.get("view") || "presentation";
  
  if (view === "scroll") {
    return <DeckScrollView />;
  }
  
  return <DeckPlayer />;
}

export function DeckViewSelector() {
  return (
    <Suspense fallback={<DeckScrollView />}>
      <DeckViewContent />
    </Suspense>
  );
}
