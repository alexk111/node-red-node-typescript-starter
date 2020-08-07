import fs from "fs";
import glob from "glob";
import path from "path";
import typescript from "@rollup/plugin-typescript";

import packageJson from "./package.json";

const allNodeTypes = Object.keys(packageJson["node-red"].nodes);

const inject = () => {
  return {
    name: "postprocess",
    load(id) {
      const editorDir = path.dirname(id);
      const htmlFiles = glob.sync(path.join(editorDir, "*.html"));
      htmlFiles.map((file) => this.addWatchFile(file));
    },
    renderChunk(code, chunk, _options) {
      const editorDir = path.dirname(chunk.facadeModuleId);
      const htmlFiles = glob.sync(path.join(editorDir, "*.html"));
      const htmlContents = htmlFiles.map((fPath) => fs.readFileSync(fPath));

      code =
        '<script type="text/javascript">\n' +
        code +
        "\n" +
        "</script>\n" +
        htmlContents.join("\n");

      return {
        code,
        map: { mappings: "" },
      };
    },
  };
};

const makePlugins = (nodeType) => [
  typescript({
    lib: ["es5", "es6", "dom"],
    include: [
      `src/nodes/${nodeType}/${nodeType}.html/**/*.ts`,
      `src/nodes/${nodeType}/shared/**/*.ts`,
      "src/nodes/shared/**/*.ts",
    ],
    target: "es5",
    tsconfig: false,
  }),
  inject(),
];

const makeConfigItem = (nodeType) => ({
  input: `src/nodes/${nodeType}/${nodeType}.html/index.ts`,
  output: {
    file: `dist/nodes/${nodeType}/${nodeType}.html`,
    format: "iife",
  },
  plugins: makePlugins(nodeType),
  watch: {
    clearScreen: false,
    include: `src/nodes/${nodeType}/${nodeType}.html/*.html`,
  },
});

export default allNodeTypes.map((nodeType) => makeConfigItem(nodeType));
