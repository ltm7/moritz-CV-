/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/moritz-CV-',
  assetPrefix: '/moritz-CV-',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
