import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // 启用静态导出
  images: {
    unoptimized: true, // GitHub Pages 不支持 Next.js 的图片优化功能
  },
  basePath: '/inii.tech', // 仓库名作为基础路径
};

export default nextConfig;
