import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ Add this block to disable Turbopack
  experimental: {
    turbo: false,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  // If you want to enable images later
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "ik.imagekit.io",
  //       port: "",
  //     },
  //   ],
  // },
};

export default nextConfig;
