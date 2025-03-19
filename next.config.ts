import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === 'production';
const basePath = isProduction ? '/inii.tech' : '';

const nextConfig: NextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath,
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
