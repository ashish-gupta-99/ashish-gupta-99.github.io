import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Outputs a static 'out' folder during next build
  images: {
    unoptimized: true, // Required if using the Next.js Image component statically
  },
};

export default nextConfig;
