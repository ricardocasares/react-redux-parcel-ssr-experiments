const path = require("path");

module.exports = {
  homeDir: path.join(__dirname, "../src/"),
  output: path.join(__dirname, "../dist", "$name.js"),
  sourceMaps: true,
  alias: {
    "@app": "~"
  },
  log: {
    showBundledFiles: false
  },
  automaticAlias: false,
  allowSyntheticDefaultImports: true
};
