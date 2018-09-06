const { FuseBox } = require("fuse-box");

const base = require("./base");
const server = FuseBox.init({ ...base, target: "server" });
const client = FuseBox.init({ ...base, target: "browser@es5" });

client
  .bundle("vendor")
  .instructions("~ client.tsx")
  .watch();

client
  .bundle("app")
  .instructions("> [client.tsx]")
  .hmr()
  .watch();

server
  .bundle("server")
  .instructions("> [server.tsx]")
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
