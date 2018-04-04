const BABEL_ENV = process.env.BABEL_ENV;
const building = BABEL_ENV != undefined && BABEL_ENV !== "cjs";
const transformImports = require("babel-plugin-transform-imports");

const plugins = [
  [
    transformImports,
    {
      "no-bull": {
        transform: building ? "no-bull/es/${member}" : "no-bull/${member}",
        preventFullImport: true
      }
    }
  ]
];

if (BABEL_ENV === "umd") {
  plugins.push("external-helpers");
}

if (process.env.NODE_ENV === "production") {
  plugins.push("dev-expression", "transform-react-remove-prop-types");
}

module.exports = {
  presets: [
    ["es2015", { loose: true, modules: building ? false : "commonjs" }],
    "stage-1",
    "react"
  ],
  plugins: plugins
};
