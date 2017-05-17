const path = require('path');

module.exports = {
  entry: './example/src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'example/dist'),
    publicPath: '/',
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    contentBase: path.join(__dirname, 'example/src'),
    compress: true,
    port: 9000,
  },
};
