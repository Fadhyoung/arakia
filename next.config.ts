import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();

const repoName = 'arakia';

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: "export" as "export",
    trailingSlash: true,
    images: { unoptimized: true },
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}`
};

export default withNextIntl(nextConfig);
