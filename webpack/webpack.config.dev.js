const merge = require("webpack-merge");
const main = require("./webpack.config.main");

module.exports = merge(main, {
  mode: "development",

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "postcss-loader"]
      }
    ]
  },

  devServer: {
    host: "localhost",
    port: 8080
  }
});
