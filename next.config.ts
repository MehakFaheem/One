import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },  // experimental: {
  //   esmExternals: false,
  // },
};

export default nextConfig;
