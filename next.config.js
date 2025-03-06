
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['media.graphassets.com', 'ap-northeast-1.graphassets.com'], // Add your region domain here
  },
  env: {
    HYGRAPH_API_URL: process.env.HYGRAPH_API_URL,
  },
};

module.exports = nextConfig;
