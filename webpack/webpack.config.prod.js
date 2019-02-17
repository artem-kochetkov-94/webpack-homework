const merge = require("webpack-merge");
const main = require("./webpack.config.main");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(main, {
  mode: "production",

  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.[hash].css"
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessorOptions: { discardComments: { removeAll: true } }
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      minify: {
         removeComments: true,
         collapseWhitespace: true,
         removeRedundantAttributes: true,
         useShortDoctype: true,
         removeEmptyAttributes: true,
         removeStyleLinkTypeAttributes: true,
         keepClosingSlash: true,
         minifyJS: true,
         minifyCSS: true,
         minifyURLs: true,
      },
    }),
  ],

  optimization: {
    splitChunks: {
      name: "vendor",
      chunks: "all"
    },
    minimizer: [
      new UglifyJsPlugin({
        parallel: true,
        cache: true,
        sourceMap: true,
        uglifyOptions: {
          compress: {
            drop_console: true
          }
        }
      })
    ]
  }
});
