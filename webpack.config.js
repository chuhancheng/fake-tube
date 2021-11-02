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
  resolve: {
    extensions: ['', '.js', '.jsx'],
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
        test: /\.s[ac]ss$/i,
        exclude: /(node_modules)/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ]
  },
  target: 'electron-renderer',
  plugins: [
    new MiniCssExtractPlugin(),
    new webpack.IgnorePlugin({ resourceRegExp: /vertx/ }),
  ]
}

module.exports = config;