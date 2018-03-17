const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const PACKAGE_NAME = 'test-app';

module.exports = {
  entry: {
    [PACKAGE_NAME]: './lib-es6/index.js'
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: PACKAGE_NAME + '.js',
  },

  mode: 'production',

  devtool: 'source-map',

  stats: 'errors-only',

  optimization: {
    minimize: false
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: PACKAGE_NAME + '.stats.html',
      openAnalyzer: false,
      generateStatsFile: true,
      statsFilename: PACKAGE_NAME + '.stats.json'
    }),
  ]
}
