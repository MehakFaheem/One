import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  ignoreDuringBuilds: true,
  // experimental: {
  //   esmExternals: false,
  // },
};

export default nextConfig;
