"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { DeckPlayer } from "./deck-player";
import { DeckScrollView } from "./deck-scroll-view";
import type { VersionType } from "./deck-player";

function DeckViewContent({ version }: { version?: VersionType }) {
  const searchParams = useSearchParams();
  const view = searchParams.get("view") || "presentation";

  if (view === "scroll") {
    return <DeckScrollView version={version} />;
  }

  return <DeckPlayer version={version} />;
}

export function DeckViewSelector({ version }: { version?: VersionType } = {}) {
  return (
    <Suspense fallback={<DeckScrollView version={version} />}>
      <DeckViewContent version={version} />
    </Suspense>
  );
}
