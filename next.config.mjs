/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'scontent-iad3-2.cdninstagram.com',
        },
      ],
    },
    output: 'standalone', // For optimal Vercel deployments
  };
  
  export default nextConfig;
  