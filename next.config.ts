import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "/ha-nguyen-portfolio" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/ha-nguyen-portfolio/" : "",
};

export default nextConfig;