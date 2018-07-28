'use strict'

const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'scripts/[hash].min.js'
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.(png|jpg|gif|pdf|doc|woff|woff2|svg|ttf|eot)$/,
        loader: 'file-loader',
        options: { outputPath: 'assets/' }
      }
    ]
  },
  optimization: {},
  plugins: [
    new CleanWebpackPlugin('build', {}),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html'
    })
  ]
}
