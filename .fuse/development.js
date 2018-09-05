const { FuseBox, QuantumPlugin } = require("fuse-box");
const base = require("./base");
const server = FuseBox.init({ ...base, target: "node" });
const client = FuseBox.init({ ...base, target: "browser@es5" });

client
  .bundle("vendor")
  .instructions("~ client.tsx")
  .completed(() => console.log("> vendors bundled"))
  .watch();

client
  .bundle("app")
  .instructions("> [client.tsx]")
  .hmr()
  .completed(() => console.log("> client bundled"))
  .watch();

server
  .bundle("server")
  .instructions("> [server.tsx]")
  .completed(() => console.log("> server bundled"))
  .completed(proc => proc.start())
  .watch();

client.run();
server.run();
client.dev({
  proxy: {
    "/": {
      target: "http://localhost:3000"
    }
  }
});
