const WebpackConfig = require('./webpack.config');

module.exports = (config) => {
  config.set({
    files: [
      'test/**/*.test.js',
    ],
    frameworks: ['mocha'],
    preprocessors: {
      'test/**/*.test.js': ['webpack'],
    },
    webpack: {
      devtool: 'inline-source-map',
      module: WebpackConfig.module,
      resolve: WebpackConfig.resolve,
      externals: {
        cheerio: 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
      },
    },
  });
};
