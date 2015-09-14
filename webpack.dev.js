'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: ['webpack-dev-server/client?http://localhost:2570', 'webpack/hot/dev-server', './docs/index.coffee'],
  output: {
    path: path.join(__dirname, 'docs/build'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:2570/docs/build/',
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        loaders: ['react-hot-loader'],
      }, {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loaders: ['react-hot-loader', 'jsx-loader', 'babel-loader', 'react-map-styles'],
      }, {
        test: /\.coffee$/,
        loaders: ['coffee-loader'],
      }, {
        test: /\.cjsx$/,
        loaders: ['react-hot-loader', 'coffee-jsx-loader', 'react-map-styles'],
      }, {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      }, {
        test: /\.md$/,
        loaders: ['html-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      'reactcss': path.resolve(__dirname, './lib/react-css.js'),
    },
    extensions: ['', '.js', '.coffee', '.jsx', '.cjsx'],
    fallback: [path.resolve(__dirname, './modules')],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin({ quiet: true }),
    new webpack.NoErrorsPlugin(),
  ],
  devtool: 'eval',
  quiet: true,
};
