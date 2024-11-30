const { withContentlayer } = require('next-contentlayer');

const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [ "antd", "@ant-design", "rc-util", "rc-pagination", "rc-picker", "rc-notification", "rc-tooltip", "rc-tree", "rc-table", ],
  images: {
    domains: ['github.com','localhost','slopegame.xyz'],
  }
}

module.exports = withNextIntl(withContentlayer(nextConfig))