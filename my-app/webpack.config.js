var path = require('path')
var webpack = require('webpack')

const destDir = 'dist';



module.exports = {
  target: 'node',
  entry: './app.js',
  output: {
   path: path.join(__dirname, destDir),
       filename: 'bundle.js',
  publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: { loader: 'babel-loader' } },
      {
          test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
          use: [{ loader: 'url-loader', options: { limit: 10240 } }]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.json'],
  plugins: [
  ]
  }
};
