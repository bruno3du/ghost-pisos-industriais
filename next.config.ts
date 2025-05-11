import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['next-mdx-remote'],
  images: {
    remotePatterns: [
      process.env.NODE_ENV === 'development'
        ? {
            hostname: 'localhost',
            pathname: '/**',
            port: '1337',
          }
        : {
            protocol: 'https',
            hostname: 'api.ghostpisosindustriais.com',
            pathname: '/**',
          },
    ],
  },
};

export default nextConfig;
