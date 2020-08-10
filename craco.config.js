const glslLoader = require("./craco.glslify");

module.exports = {
  plugins: [
    {
      plugin: glslLoader,
      options: { test: /\.(glsl|vs|fs|vert|frag)$/ },
    },
  ],
};
