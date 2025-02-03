import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
    // This tells Next.js about the proxy
    assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
};

export default nextConfig;
