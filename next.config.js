const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const withSass = require("@zeit/next-sass");

const withTsconfigPaths = (nextConfig = {}) => ({
  ...nextConfig,
  ...{
    webpack(config, options) {
      const newConfig = {
        ...config,
        resolve: {
          ...config.resolve,
          plugins: [
            ...(config.resolve && config.resolve.plugins),
            new TsconfigPathsPlugin(),
          ],
        },
      };

      if (typeof nextConfig.webpack === "function") {
        return nextConfig.webpack(newConfig, options);
      }

      return newConfig;
    },
  },
});

module.exports = withTsconfigPaths(
  withSass({
    cssModules: true,
  })
);

/*module.exports = {
  env: {
    MONGO_URI:
      "mongodb+srv://adm:b2fteqUrouYXdT9U@cluster0-6q8xt.gcp.mongodb.net/lotericas",
  },
};
*/
