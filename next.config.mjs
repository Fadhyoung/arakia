/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    basePath: '/arakia', 
    trailingSlash: true,
    images: { unoptimized: true }
};

export default nextConfig;
