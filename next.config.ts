import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/audio-studio',
  assetPrefix: '/audio-studio',
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
