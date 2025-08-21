import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Ne-Zha-Landing-Page' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/Ne-Zha-Landing-Page' : '',
};

export default nextConfig;
