/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ['www.bbangle.store']
    }
  },
  output: 'standalone'
};

export default nextConfig;
