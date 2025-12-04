import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Optimize images
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 85],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },

  // Compiler options
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === "production" ? {
      exclude: ["error", "warn"],
    } : false,
  },

  // Performance optimizations
  poweredByHeader: false,
  compress: true,

  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['@testing-library/react', '@testing-library/jest-dom'],
  },
};

export default nextConfig;
