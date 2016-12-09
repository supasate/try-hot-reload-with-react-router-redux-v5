const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    path.resolve('src/index.js'),
  ],
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
    publicPath: '/dist'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loader: 'babel'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve('./src/index.html')
    })
  ]
}
