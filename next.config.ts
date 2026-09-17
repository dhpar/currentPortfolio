import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production"? "/currentPortfolio" : "",
  images: {
    unoptimized: true, // next/image needs this for static export
  },
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  }    
};

export default nextConfig;

