import type { NextConfig } from "next";
import path from "path";

const repoName = "FoodSport";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    unoptimized: true,
    qualities: [75, 100],
  },
};

export default nextConfig;
