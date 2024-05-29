/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
        domains: [
            "random.imagecdn.app",
            "img.icons8.com"
        ]
    }
};

export default nextConfig;
