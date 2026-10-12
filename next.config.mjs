/** @type {import('next').NextConfig} */
const nextConfig = {
  // NEXT_DIST_DIR lets a production build run into its own folder while the dev server keeps using .next
  distDir: process.env.NEXT_DIST_DIR || ".next",
}

export default nextConfig
