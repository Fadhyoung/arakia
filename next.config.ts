import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: "export" as "export",
    trailingSlash: true,
    images: { unoptimized: true }
};

export default withNextIntl(nextConfig);
