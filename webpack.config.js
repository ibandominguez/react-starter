'use strict'

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
    filename: 'scripts/app.min.js',
  },
  module: {
    loaders: [
      { test: /\.js?$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.(png|jpg|gif)$/, loader: 'url?limit=30000&name=images/[name].[ext]' },
      { test: /\.(woff|svg|ttf|eot)$/, loader: 'url?limit=30000&name=fonts/[name].[ext]' },
      { test: /\.(pdf|doc)$/, loader: 'url?limit=30000&name=documents/[name].[ext]' },
      { test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/, loader: 'url-loader' },
      { test: /\.less$/, exclude: '/node_modules', loader: 'style!css!less' }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),
    new HtmlWebpackPlugin({
      title: 'React Starter',
      template: require('html-webpack-template'),
      appMountId: 'app',
      // baseHref: '/',
      // googleAnalytics: { trackingId: 'UA-XXXX-XX', pageViewOnLoad: true },
      meta: [
        { charset: 'utf-8' },
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    })
  ]
}
