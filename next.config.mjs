// next.config.mjs
export default {
  reactStrictMode: true,
  images: {
    domains: [
      "your-supabase-project.supabase.co", // Supabase storage
      "localhost", // Local development
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    optimizePackageImports: ['@heroicons/react'],
  },
  // Enable compression
  compress: true,
  // Generate sitemaps for SEO
  generateEtags: true,
};
