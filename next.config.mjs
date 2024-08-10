/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/quest",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
