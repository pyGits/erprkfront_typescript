const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: __dirname + "/public",
    filename: "./app.js",
  },
  devServer: {
    port: 3000,
    static: "./public",
    historyApiFallback: true,
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
    alias: {
      modules: __dirname + "/node_modules",
      jquery: "modules/admin-lte/plugins/jquery/jquery.min.js",
      bootstrap: "modules/admin-lte/bootstrap/js/bootstrap.js",
    },
  },
  plugins: [
    new ExtractTextPlugin("app.css"),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
    }),
  ],
  module: {
    rules: [
      {
        test: /.js[x]?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["transform-object-rest-spread"],
        },
      },
      {
        test: /.ts[x]?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.woff|.woff2|.ttf|.eot|.svg|.png|.jpg*.*$/,
        use: ["file-loader"],
      },
    ],
  },
};
