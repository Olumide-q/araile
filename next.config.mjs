/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'araile.onrender.com',
        port: '',
        pathname: '/**',
      },
      // Add other domains if your images come from different sources
      {
        protocol: 'https',
        hostname: '**', // This allows any HTTPS domain (less secure but more flexible)
        port: '',
        pathname: '/**',
      },
    ],
  },
};
export default nextConfig;
