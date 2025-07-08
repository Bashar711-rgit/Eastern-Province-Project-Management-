/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,  // تفعيل استخدام مجلد app بدل pages
  },
  output: "export",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
