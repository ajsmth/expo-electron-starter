const createWebpackConfigAsync = require("@expo/webpack-config");

module.exports = async (env, argv) => {
  const config = await createWebpackConfigAsync(env, argv);
  return config;
};
