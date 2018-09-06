const { FuseBox, QuantumPlugin, UglifyJSPlugin } = require("fuse-box");

const base = require("./base");

const server = FuseBox.init({
  ...base,
  target: "server"
});

const client = FuseBox.init({
  ...base,
  target: "browser@es5",
  plugins: [
    QuantumPlugin({
      treeshake: true,
      bakeApiIntoBundle: "vendor"
    }),
    UglifyJSPlugin()
  ]
});

client.bundle("vendor").instructions("~ client.tsx");
client.bundle("app").instructions("> [client.tsx]");
server.bundle("server").instructions("> [server.tsx]");

client.run();
server.run();
