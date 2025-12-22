import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export static files for GitHub Pages
  output: 'export',
  // Project is hosted at https://pingugit.github.io/elias
  basePath: '/elias',
  assetPrefix: '/elias/',
  trailingSlash: true,
};

export default nextConfig;
