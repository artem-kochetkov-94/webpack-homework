const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const env = process.env.NODE_ENV;
const isDev = env !== 'production';

module.exports = {
  entry: "./src/index.js",

  output: {
    filename: "bundle.[chunkhash].js",
    chunkFilename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, "../dist")
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.svg$/,
        loader: "svg-inline-loader"
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      isDev: JSON.stringify(isDev)
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html"
    }),
    new webpack.ProvidePlugin({
      React: "react",
      ReactDOM: "react-dom"
    }),
    new CleanWebpackPlugin(path.resolve("dist"), { root: path.resolve("../") })
  ],

  resolve: {
    extensions: ["*", ".js", ".json"]
  }
};
