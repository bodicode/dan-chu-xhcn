import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    // Add a rule to handle audio files
    config.module.rules.push({
      test: /\.(mp3)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[name][ext]'
      }
    });

    return config;
  }
};

export default nextConfig;
