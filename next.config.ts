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
  assetPrefix: '/inii.tech/',
  trailingSlash: true,
  // Fix asset paths
  async rewrites() {
    return [];
  },
  // Ensure all assets are prefixed
  webpack: (config) => {
    return config;
  },
  /* config options here */
};

export default nextConfig;
