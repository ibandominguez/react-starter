'use strict'

const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    main: './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'scripts/[hash].js'
  },
  module: {
    rules: [
      { test: /\.css$/, loaders: ['style-loader', 'css-loader'] },
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.(png|jpg|gif|pdf|doc|woff|woff2|svg|ttf|eot)$/,
        loader: 'file-loader',
        options: { outputPath: 'assets/' }
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Starter',
      inject: false,
      mobile: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeEmptyAttributes: true,
        minifyJS: true,
        minifyCSS: true
      },
      template: require('html-webpack-template'),
      appMountId: 'app',
      baseHref: '/',
      googleAnalytics: { trackingId: 'UA-XXXX-XX', pageViewOnLoad: true },
      meta: [],
      links: [],
      window: { env: {} }
    })
  ]
}
