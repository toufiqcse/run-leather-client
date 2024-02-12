/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            hostname: 'runleatherbd.com', 
          },
        ],
      },
};

export default nextConfig;
