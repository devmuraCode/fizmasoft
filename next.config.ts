import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  images: {
    unoptimized: true,
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        and: [/\.(js|ts|jsx|tsx)$/],
      },
      use: ["@svgr/webpack"],
    });
    return config;
  },

  reactStrictMode: true,
};

export default nextConfig;
