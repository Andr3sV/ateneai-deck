"use client";

import { useState, useEffect } from "react";
import { Copy, Check } from "lucide-react";
import Link from "next/link";

const ROUTES = [
  // General
  { path: "/en", label: "Self-Serve (EN)" },
  { path: "/es", label: "Self-Serve (ES)" },
  
  // Marketing
  { path: "/en/marketing", label: "Marketing (EN)" },
  { path: "/es/marketing", label: "Marketing (ES)" },
  
  // Exec
  { path: "/en/exec", label: "Executive Short (EN)" },
  { path: "/es/exec", label: "Executive Short (ES)" },
  { path: "/en/full/exec", label: "Executive Full (EN)" },
  { path: "/es/full/exec", label: "Executive Full (ES)" },
  
  // Board
  { path: "/en/board", label: "Board View (EN)" },
  { path: "/es/board", label: "Board View (ES)" },
  { path: "/en/board/mango", label: "Board View - Mango (EN)" },
  { path: "/es/board/mango", label: "Board View - Mango (ES)" },
  
  // ABM
  { path: "/en/b/mango", label: "ABM - Mango (EN)" },
  { path: "/es/b/mango", label: "ABM - Mango (ES)" },
];

export default function RoutesIndexPage() {
  const [copiedPath, setCopiedPath] = useState<string | null>(null);
  const [baseUrl, setBaseUrl] = useState("");

  useEffect(() => {
    // Enable scrolling for routes page
    document.body.style.overflow = "auto";
    document.documentElement.style.overflow = "auto";
    setBaseUrl(window.location.origin);
    
    return () => {
      // Cleanup if needed
    };
  }, []);

  const copyToClipboard = async (path: string) => {
    const fullUrl = `${baseUrl}${path}`;
    await navigator.clipboard.writeText(fullUrl);
    setCopiedPath(path);
    setTimeout(() => setCopiedPath(null), 2000);
  };

  return (
    <div className="bg-[#151515] text-white min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold mb-2">Route Index</h1>
          <p className="text-[#C2C2E1] text-sm">
            Internal development tool. All available routes are listed below.
          </p>
        </div>

        <div className="space-y-4">
          {ROUTES.map((route) => (
            <div
              key={route.path}
              className="bg-white/5 border border-white/10 rounded-lg p-4 flex items-center justify-between hover:bg-white/10 transition-colors"
            >
              <div className="flex-1">
                <Link
                  href={route.path}
                  className="text-[#C2C2E1] hover:text-white transition-colors font-mono text-sm block"
                >
                  {route.path}
                </Link>
                <p className="text-xs text-[#C2C2E1]/70 mt-1">{route.label}</p>
              </div>
              <button
                onClick={() => copyToClipboard(route.path)}
                className="ml-4 p-2 hover:bg-white/10 rounded transition-colors"
                title="Copy link"
              >
                {copiedPath === route.path ? (
                  <Check className="h-4 w-4 text-emerald-400" />
                ) : (
                  <Copy className="h-4 w-4 text-[#C2C2E1]" />
                )}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-amber-900/20 border border-amber-900/30 rounded-lg">
          <p className="text-xs text-amber-200">
            <strong>Note:</strong> This page is not indexed and only available in development mode.
          </p>
        </div>
      </div>
    </div>
  );
}
