import type { NextConfig } from "next";
import path from "path";

// Force project root so Next doesn't infer parent dir (extra package-lock.json
// in parent can break dev server chunks and cause 500 on all routes).
const projectRoot = path.resolve(process.cwd());

const nextConfig: NextConfig = {
  outputFileTracingRoot: projectRoot,
  turbopack: { root: projectRoot },
};

export default nextConfig;
