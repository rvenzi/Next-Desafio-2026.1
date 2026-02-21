import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.lojasrenner.com.br'
      },
      {
        protocol: 'https',
        hostname: 'www.drogaraia.com.br'
      },
      {
        protocol: 'https',
        hostname: 'product-data.raiadrogasil.io'
      },
    ]
  }
};

export default nextConfig;
