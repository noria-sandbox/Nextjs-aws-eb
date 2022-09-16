/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.unsplash.com", "tailwindui.com", "tailwindcss.com"],
  },
};

module.exports = nextConfig;
