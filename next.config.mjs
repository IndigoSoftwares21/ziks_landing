/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // 95 is used for grainy texture backgrounds, which break up badly at the default 75
    qualities: [75, 95],
  },
};

export default nextConfig;
