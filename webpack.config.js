const createExpoWebpackConfigAsync = require("@expo/webpack-config");

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  // Customize the config before returning it.
  // If you want to add a new alias to the config.
  config.resolve.alias["react-native"] = "react-native-web";
  config.resolve.alias["react-native-maps"] = "react-native-web-maps";
  return config;
};
