const { FuseBox, QuantumPlugin, UglifyESPlugin } = require("fuse-box");

const base = require("./base");

const server = FuseBox.init({
  ...base,
  target: "node"
});

const client = FuseBox.init({
  ...base,
  target: "browser@es5",
  plugins: [QuantumPlugin(), UglifyESPlugin()]
});

client
  .bundle("vendor")
  .instructions("~ client.tsx")
  .completed(() => console.log("> vendors bundled"));

client
  .bundle("app")
  .instructions("> [client.tsx]")
  .completed(() => console.log("> client bundled"));

server
  .bundle("server")
  .instructions("> [server.tsx]")
  .completed(() => console.log("> server bundled"));

client.run();
server.run();
