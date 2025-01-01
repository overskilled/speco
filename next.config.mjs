/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/:path*', // Proxy requests starting with /api
                destination: 'https://api.pawapay.io/:path*', // Forward them to the external API
            },
        ];
    },
};

export default nextConfig;
