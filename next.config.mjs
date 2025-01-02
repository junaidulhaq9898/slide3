/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'standalone',
    experimental: {
      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'example.com',
            pathname: '/**',
          },
        ],
      },
    },
    basePath: '', // Adjust if needed
  };
  
  export default nextConfig;  