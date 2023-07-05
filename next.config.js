/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [{
            source: '/',
            destination: '/store',
            permanent: false,
        }]
    }
}

module.exports = nextConfig
