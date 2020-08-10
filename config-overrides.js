const { addWebpackModuleRule, override } = require("customize-cra");

module.exports = (config, env) => {
  config.resolve.extensions = [...config.resolve.extensions, ".ts", ".tsx"];
  return override(
    addWebpackModuleRule({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      use: ["raw-loader", "glslify-loader"],
    })
  )(config, env);
};
