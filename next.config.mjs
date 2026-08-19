/** @type {import('next').NextConfig} */

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'ptrn.vercel.app',
          },
        ],
        destination: 'https://ptrn.com.br/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig;
