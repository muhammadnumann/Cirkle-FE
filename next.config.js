const conf = {
  swcMinify: true,
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
  async rewrites() {
    return [{ source: '/dashboard', destination: '/' }];
  },
  images: {
    domains: ['lh3.googleusercontent.com', 'www.pinkvilla.com'],
  },
  // uncomment to enable debugging
  //   webpackDevMiddleware: (config) => {
  //     config.watchOptions = {
  //       poll: 1000,
  //       aggregateTimeout: 300,
  //     };
  //     return config;
  //   },
  //   webpack(config) {
  //     config.devtool = 'eval-source-map';
  //     return config;
  //   },
};
module.exports = conf;

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// });
// module.exports = withBundleAnalyzer(conf);
