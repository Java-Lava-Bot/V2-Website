/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const allowedDevOrigins = ['http://localhost:3000', 'http://localhost:3001'];

export default nextConfig;
export { allowedDevOrigins };
