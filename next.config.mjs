/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // deploy to Vercel: diperbolehkan konversi -> mahal
      {
        hostname: "sfsd.dev",
        protocol: "https",
        pathname: "/**"
      }
    ]
  }
};

export default nextConfig;
