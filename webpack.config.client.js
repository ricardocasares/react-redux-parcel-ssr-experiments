"use strict";

const path = require("path");
const webpack = require("webpack");
const pkg = require("./package.json");
const SizePlugin = require("size-plugin");
const ForkTsChecker = require("fork-ts-checker-webpack-plugin");
const UglifyJS = require("uglifyjs-webpack-plugin");

module.exports = {
  context: __dirname,
  entry: {
    client: "./src/client.tsx",
    vendor: Object.keys(pkg.dependencies).filter(d => !["express"].includes(d))
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    alias: {
      app: path.resolve(__dirname, "./src")
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: "ts-loader",
        options: {
          transpileOnly: true
        }
      }
    ]
  },
  plugins: [
    new SizePlugin(),
    new ForkTsChecker(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  optimization: {
    minimizer: [
      new UglifyJS({
        uglifyOptions: {
          compress: true,
          mangle: true,
          keep_fnames: false,
          output: {
            beautify: false,
            comments: false
          }
        }
      })
    ],
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: "initial",
          name: "vendor",
          test: "vendor",
          enforce: true
        }
      }
    },
    runtimeChunk: {
      name: entrypoint => `runtime.${entrypoint.name}`
    }
  }
};
