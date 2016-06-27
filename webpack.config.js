var webpack = require('webpack')
var path = require('path')

var BUILD_DIR = path.resolve(__dirname, 'public')
var APP_DIR = path.resolve(__dirname, 'client')

var config = {
  entry: APP_DIR + '/index.jsx',

  output: {
    path: BUILD_DIR,
    filename: 'application.js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  loaders : [
    {
      test : /\.jsx?/,
      include : APP_DIR,
      exclude: /(node_modules|tmp)/,
      loader : 'babel',
      query: {
        presets: ['es2015', 'react'],
        cacheDirectory: "tmp"
      }
    }
  ]
}

module.exports = config
