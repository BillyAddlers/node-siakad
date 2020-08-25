const merge = require("webpack-merge");
const nodeExternals = require("webpack-node-externals");
const baseconfig = require("./webpack.config.js");
const path = require("path");

module.exports = merge(baseconfig, {
  entry: "./src/index.ts",
  target: "node",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "index.js",
    library: "Node-Siakad-TypeScript",
    libraryTarget: "umd"
  },
  externals: [ nodeExternals() ]
});
