module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react", "react-app"],
  plugins: [
    "@babel/plugin-proposal-json-strings",
    "@babel/plugin-syntax-dynamic-import",
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-class-properties", { loose: true }]
  ]
};
