const { FuseBox, WebIndexPlugin } = require("fuse-box");

const fuse = FuseBox.init({
  homeDir: "src/",
  output: "dist/$name.js",
  sourceMaps: true,
  alias: {
    "@app": "~"
  },
  log: {
    showBundledFiles: false,
    clearTerminalOnBundle: true
  },
  allowSyntheticDefaultImports: true
});

fuse
  .bundle("vendor")
  .instructions("~ client.tsx")
  .watch();

fuse
  .bundle("app")
  .splitConfig({
    target: "browser",
    plugins: [WebIndexPlugin({ template: "src/template.html" })]
  })
  .instructions("> client.tsx")
  .watch();

fuse
  .bundle("server")
  .splitConfig({
    target: "node"
  })
  .instructions("> [server.tsx]")
  .completed(proc => proc.start())
  .watch();

fuse.run();
// client.dev({
//   proxy: {
//     "/": {
//       target: "http://localhost:3000",
//       changeOrigin: true
//     }
//   }
// });

// client
//   .bundle("vendor")
//   .splitConfig()
//   .instructions("~ client.tsx")
//   .watch();

// client
//   .bundle("app")
//   .instructions("> [client.tsx]")
//   .hmr()
//   .watch();

// server
//   .bundle("server")
//   .instructions("> [server.tsx]")
//   .watch()
//   .completed(proc => proc.start());

// client.run();
// server.run();
