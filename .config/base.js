const path = require("path");

module.exports = {
  homeDir: path.join(__dirname, "../src/"),
  output: path.join(__dirname, "../dist", "$name.js"),
  sourceMaps: true,
  alias: {
    "@app": "~"
  },
  log: {
    showBundledFiles: false, // Don't list all the bundled files every time we bundle
    clearTerminalOnBundle: false
  },
  automaticAlias: false,
  allowSyntheticDefaultImports: true
};
