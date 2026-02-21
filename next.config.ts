
import type {NextConfig} from 'next';

const nextConfig = {
  output: "standalone",
  outputFileTracingExcludes: {
    "*": [
      "node_modules/@next/swc-linux-x64-gnu",
      "node_modules/@next/swc-linux-x64-musl",
      "node_modules/@next/swc-win32-x64-msvc",
      "node_modules/@arghajit/playwright-pulse-report",
      "node_modules/playwright",
      "node_modules/@playwright/**",
      "pulse-report/**/*.html",
      "pulse-report/attachments/**",
    ],
  },
  experimental: {},
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.postimg.cc",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.icons8.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ocpaxmghzmfbuhxzxzae.supabase.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http", // Or 'https' if your local dev server uses HTTPS
        hostname: "localhost",
        // port: '3000', // Optional: Add if your dev server runs on a non-standard port and Next.js needs it specified
        // pathname: '/api/assets/**', // Optional: More specific path, but hostname is often enough
      },
      {
        protocol: "https", // Based on your cloud workstation URL
        hostname:
          "6000-firebase-studio-1749066149876.cluster-44kx2eiocbhe2tyk3zoyo3ryuo.cloudworkstations.dev",
        // port: '', // Usually not needed for standard HTTPS port 443
        // pathname: '/api/assets/**', // Optional
      },
    ],
  },
  productionBrowserSourceMaps: false, // Disable browser source maps for production
} satisfies NextConfig;

export default nextConfig;
