'use strict'

const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackOnBuildPlugin = require('on-build-webpack')
const ifProduction = (func) => process.env.NODE_ENV === 'production' ? func : () => {}

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
    loaders: [
      { test: /\.css$/, loaders: ['style-loader', 'css-loader'] },
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.(png|jpg|gif)$/, loader: 'file-loader?name=images/[name].[ext]' },
      { test: /\.(pdf|doc)$/, loader: 'file-loader?limit=30000&name=documents/[name].[ext]' },
      { test: /\.(woff|woff2|svg|ttf|eot)$/, loader: 'file-loader?limit=30000&name=fonts/[name].[ext]' }
    ]
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
    }),
    ifProduction(new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('production') }
    })),
    ifProduction(new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }))
  ]
}
