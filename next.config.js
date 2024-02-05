/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.icon-icons.com",
        pathname: "/**",
      },
    ],
  },
}

