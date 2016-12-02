const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client',
    './src/client.js',
  ],
  output: {
    filename: 'bundle.js',
    path: '/build'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
        // loaders: ['react-hot', 'babel-loader' ],
      },
      {
        test: /\.scss$/, loaders: ['style', 'css', 'sass']
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
