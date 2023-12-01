/** @type {import('next').NextConfig} */
const nextConfig = {
   distDir: "build",
   publicRuntimeConfig: {
      BASE_URL: "http://192.168.1.127:3003/",
      SERVER_URL: "http://192.168.1.127:8001",
      SERVER_PORT: 8001,
   },
};

module.exports = nextConfig