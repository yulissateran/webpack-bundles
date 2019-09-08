const path = require('path');
const webpack = require('webpack');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: {
    home: path.resolve(__dirname, 'src/js/index.js'),
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  devServer: {
    hot:true,
    open: true,
    port: 9000,
  },
  module: {
    rules:[
      { 
        test: /\.css$/,
        use:  [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }, plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HTMLWebpackPlugin({
      title:'Plugins'
    })
  ]
}