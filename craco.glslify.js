const { loaderByName, addBeforeLoader } = require("@craco/craco");

module.exports = {
  overrideWebpackConfig: ({
    webpackConfig,
    cracoConfig,
    pluginOptions,
    context: { env, paths },
  }) => {
    const glslifyLoader = {
      test: pluginOptions.test,
      use: ["raw-loader", "glslify-loader"],
    };

    addBeforeLoader(webpackConfig, loaderByName("file-loader"), glslifyLoader);

    return webpackConfig;
  },
};
