/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    Http_App_ID: '537dd91c-4729-4f26-8e6e-20c49b9d6551',
  },
  images: {
    remotePatterns: [
      {
        hostname: 'be.honeymam.ru'
      },
      {
        hostname: 'upload.wikimedia.org'
      }
    ]
  }
};

export default nextConfig;
