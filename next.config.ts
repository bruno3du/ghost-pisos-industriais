import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['next-mdx-remote'],
  images: {
    remotePatterns: [
      {
        hostname: 'localhost',
        pathname: '/**',
        port: '1337',
      },
    ],
  },
};

export default nextConfig;
