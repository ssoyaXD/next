/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'hsarchives.org'
            }
        ]
    },
    async redirects() {
        return [
            {
                source: '/products/deleted_forever',
                destination: '/products',
                permanent: true
            },
            {
                source: '/products/deleted_temp',
                destination: '/products',
                permanent: false
            }
        ]
    }
};

export default nextConfig;
