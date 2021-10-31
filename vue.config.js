module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    devtool: "source-map",
  },
  publicPath: "",
  devServer: {
    port: 8085, // CHANGE YOUR PORT HERE!
    https: true,
  },
};

// const path = require("path");
// function resolve(dir) {
//   return path.join(__dirname, dir);
// }

// module.exports = {
//   publicPath: "./",
//   productionSourceMap: false,
//   pluginOptions: {
//     webpackBundleAnalyzer: {
//       openAnalyzer: false,
//     },
//   },
//   configureWebpack: {
//     devtool: "source-map",
//   },
//   devServer: {
//     historyApiFallback: false,
//   },
//   chainWebpack(config) {
//     config.resolve.alias
//       .set("@", resolve("src"))
//       .set("common", resolve("src/common"))
//       .set("config", resolve("src/config"))
//       .set("hooks", resolve("src/hooks"))
//       .set("language", resolve("src/language"))
//       .set("views", resolve("src/views"));
//   },
// };
