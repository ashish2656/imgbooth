/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // API proxy configuration for production
  async rewrites() {
    return [
      {
        source: '/api/ai/:path*',
        destination: `${process.env.NEXT_PUBLIC_AI_API_URL || 'http://localhost:8001'}/:path*`,
      },
    ];
  },
  // We explicitly configure webpack to handle the 'canvas' issue
  webpack: (config) => {
    config.externals.push({
      "utf-8-validate": "commonjs utf-8-validate",
      "bufferutil": "commonjs bufferutil",
      "canvas": "commonjs canvas",
    });
    return config;
  },
};

export default nextConfig;