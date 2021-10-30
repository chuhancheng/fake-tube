var webpack = require('webpack');
var webpackTargetElectronRenderer = require('webpack-target-electron-renderer');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

var config = {
  entry: {
    mainWindow: ['./app/mainWindow.jsx']
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/app/built',
  },
  externals: {
    fs: 'commonjs fs',
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/react', '@babel/preset-env'],
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        }
      },
      {
        test: /\.css$/,
        exclude: /(node_modules)/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ]
  },
  target: 'electron-renderer',
  plugins: [
    new webpack.IgnorePlugin({ resourceRegExp: /vertx/ }),
  ]
}

module.exports = config;