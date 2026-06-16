import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "/personal-profile" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/personal-profile/" : "",
};

export default nextConfig;