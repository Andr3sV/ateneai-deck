import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Route Index (Dev Only)",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RoutesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ minHeight: "100vh", overflow: "auto" }}>
      {children}
    </div>
  );
}
