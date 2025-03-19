import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/inii.tech' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/inii.tech' : '',
  trailingSlash: true,
  /* config options here */
};

export default nextConfig;
