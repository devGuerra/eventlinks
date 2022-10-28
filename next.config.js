/** @type {import('next').NextConfig} */
module.exports = {
  swcMinify: true,
  reactStrictMode: true,
  experimental: { appDir: true },
  eslint: {
    dirs: ['src'],
  },
};
