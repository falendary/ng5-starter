const {root} = require('./helpers');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const fs = require('fs');

const pluginsOptions = [

  new FriendlyErrorsWebpackPlugin(),
  new CopyWebpackPlugin([
    {
      from: './src/assets/img',
      to: './img'
    }, {
      from: './src/assets/fonts',
      to: './fonts'
    }
  ])
];

pluginsOptions.push(new UglifyJSPlugin({
  uglifyOptions: {

    compress: false,
    mangle: false
  },
  parallel: true,
  sourceMap: false
}));

/**
 * This is a common webpack config which is the base for all builds
 */

module.exports = {
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.js'],
    modules: [root('src'), 'node_modules']
  },
  output: {
    path: root('dist')
  },
  stats: "normal",

  module: {
    rules: [
      {
        test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
        loader: '@ngtools/webpack'
      },
      {test: /\.html$/, loader: 'raw-loader'}
    ]
  },
  plugins: pluginsOptions,
  watchOptions: {
    ignored: /node_modules/
  }
};
