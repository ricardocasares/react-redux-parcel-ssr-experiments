const webpackDevServer = require("webpack-dev-server");
const webpack = require("webpack");

const config = require("./webpack.config.client.js");
const options = {
  contentBase: "./dist",
  hot: true,
  host: "localhost",
  proxy: {
    "*": "http://localhost:3000"
  }
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(5000, "localhost", () => {
  console.log("dev server listening on port 5000");
});
