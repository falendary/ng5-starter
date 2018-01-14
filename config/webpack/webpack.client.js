const {root} = require('./helpers');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtPlugin = require('script-ext-html-webpack-plugin');

const HtmlReplaceWebpackPlugin = require('html-replace-webpack-plugin');
const StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin');

const fs = require('fs');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

/**
 * This is a client config which should be merged on top of common config
 */

const pluginsOptions = [
  new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    allChunks: true
  }),
  new HtmlWebpackPlugin({
    template: root('./src/index.html'),
    output: root('dist'),
    inject: 'head'
  }),
  new ScriptExtPlugin({
    defaultAttribute: 'defer'
  })
];

module.exports = {
  entry: root('./src/main.browser.ts'),
  output: {
    filename: 'client.[hash].js'
  },
  target: 'web',
  plugins: pluginsOptions,
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: "css-loader"
            }, {
              loader: "sass-loader"
            }],
          // use style-loader in development
          fallback: "style-loader"
        })
      }
    ]
  }
};
