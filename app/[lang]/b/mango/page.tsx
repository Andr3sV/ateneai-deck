import { Suspense } from "react";
import { MangoABMPage } from "@/components/deck/mango-abm-page";
import { Metadata } from "next";

const fallback = (
  <div className="fixed inset-0 flex items-center justify-center bg-[#151515] text-white">
    Loading...
  </div>
);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  await params;
  
  return {
    title: `AI Visibility Report: Mango Group`,
    description: "How visible is Mango inside AI-generated fashion recommendations?",
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function MangoABMPageRoute({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  await params;

  return (
    <Suspense fallback={fallback}>
      <MangoABMPage />
    </Suspense>
  );
}
