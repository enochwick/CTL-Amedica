/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "ctlamedica.com" },
    ],
  },
};

export default nextConfig;
