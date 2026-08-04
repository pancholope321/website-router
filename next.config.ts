import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site (router + static demo folders) — outputs to /out for
  // simple static hosts like Cloudflare Pages.
  output: "export",
};

export default nextConfig;
