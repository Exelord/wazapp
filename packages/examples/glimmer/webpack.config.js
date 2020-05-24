const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './index.ts',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    writeToDisk: true,
    contentBase: './dist',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /(\.ts|\.js)$/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              ['@glimmer/babel-plugin-glimmer-env', { DEBUG: true }],
              '@glimmerx/babel-plugin-component-templates',
              ['@babel/plugin-proposal-decorators', { legacy: true }],
              '@babel/plugin-proposal-class-properties',
            ],
            presets: ['@babel/preset-typescript', '@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
    })
  ],
  resolve: {
    plugins: [
      new TsconfigPathsPlugin({
        mainFields: ['module', 'main'],
      })
    ],
    extensions: ['.ts', '.js'],
  }
};