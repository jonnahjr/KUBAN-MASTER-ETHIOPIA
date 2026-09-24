import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Allow Cloudflare tunnel and any external origin in dev
  allowedDevOrigins: ["*"],
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,HEAD" },
          { key: "X-Frame-Options", value: "ALLOWALL" },
        ],
      },
    ];
  },
};

export default nextConfig;
