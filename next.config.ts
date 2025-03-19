import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: '/inii.tech',
  assetPrefix: '/inii.tech',
  /* config options here */
};

export default nextConfig;
