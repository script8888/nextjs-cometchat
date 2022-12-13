/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, options) => {
    const { isServer } = options;
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpeg|png|jpeg|gif|svg)$/i,
      exclude: config.exclude,
      use: [
        {
          loader: require.resolve("file-loader"),
          options: {
            limit: config.inlineImageLimit,
            publicPath: `_next/static/images/`,
            outputPath: `${isServer ? "../" : ""}static/images/`,
            name: "[name]-[hash].[ext]",
            esModule: config.esModule || false,
          },
        },
      ],
    });
    return config;
  },
  reactStrictMode: false,
  swcMinify: true,
};

module.exports = nextConfig;
