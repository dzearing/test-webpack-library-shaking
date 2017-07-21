const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const PACKAGE_NAME = 'test-app';

module.exports = {
  entry: './lib-es6/index.js',

  output: {
    path: path.join(__dirname, 'dist'),
    filename:  PACKAGE_NAME + '.js',
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),

    new webpack.optimize.ModuleConcatenationPlugin(),

    new UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),

    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: PACKAGE_NAME + '.stats.html',
      openAnalyzer: false,
      generateStatsFile: true,
      statsFilename: PACKAGE_NAME + '.stats.json'
    }),
  ]
}
