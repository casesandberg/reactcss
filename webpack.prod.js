'use strict'

var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: ['./docs/index.js'],
  output: {
    path: path.join(__dirname, 'docs/build'),
    filename: 'bundle.js',
    publicPath: '/build/',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        cacheDirectory: true,
        presets: ['react', 'es2015', 'stage-0'],
      },
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
  ],
  devtool: 'eval',
  quiet: true,
}
