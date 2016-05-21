'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: { home:'./docs/index.js', documentation: './docs/documentation/index.coffee' },
  output: {
    path: path.join(__dirname, 'docs/build'),
    filename: '[name].js',
    publicPath: '/build/',
  },
  module: {
    loaders: [{
        test: /\.jsx$/,
        exclude: /node_modules/,
        loaders: ['jsx-loader', 'babel-loader', 'react-map-styles'],
      }, {
        test: /\.coffee$/,
        loaders: ['coffee-loader'],
      }, {
        test: /\.cjsx$/,
        loaders: ['coffee-jsx-loader', 'react-map-styles'],
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
      'reactcss': path.resolve(__dirname, './lib/reactcss.js'),
    },
    extensions: ['', '.js', '.coffee', '.jsx', '.cjsx'],
    fallback: [path.resolve(__dirname, './modules')],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.DedupePlugin(),

    // new webpack.optimize.UglifyJsPlugin({
    //   mangle: {
    //     except: ['exports', 'require']
    // },
    //   sourceMap: false,
    //   output: {comments: false}
    // }),
    new webpack.optimize.CommonsChunkPlugin("common.js"),
  ],
  devtool: 'eval',
  quiet: true,
};
