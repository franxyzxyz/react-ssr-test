const webpack = require('webpack')
const path = require('path')

console.log(path.resolve(__dirname, 'src'))

module.exports = {
  entry: [
    'babel-polyfill',
    './src/client.js'
  ],
  output: {
    filename: 'bundle.js',
    path: __dirname + '/build'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/, loaders: ['style', 'css', 'sass']
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
