/** @type {import('next').NextConfig} */
import path from 'path';

const nextConfig = {
    images: {
        formats: ['image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'files.worldwildlife.org',
                port: '',
                pathname: '/wwfcmsprod/images/**',
            },
        ],
    },
};

export default nextConfig;
