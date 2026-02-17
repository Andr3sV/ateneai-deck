// Layout for ABM pages - allows scrolling
"use client";

import { useEffect } from "react";

export default function ABMLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Enable scrolling for ABM pages
    const body = document.body;
    const html = document.documentElement;
    
    // Store original values
    const originalBodyOverflow = body.style.overflow;
    const originalHtmlOverflow = html.style.overflow;
    
    // Enable scroll
    body.style.overflow = "auto";
    html.style.overflow = "auto";
    
    return () => {
      // Restore original values on unmount
      body.style.overflow = originalBodyOverflow;
      html.style.overflow = originalHtmlOverflow;
    };
  }, []);

  return <div style={{ minHeight: "100vh", overflow: "auto" }}>{children}</div>;
}
