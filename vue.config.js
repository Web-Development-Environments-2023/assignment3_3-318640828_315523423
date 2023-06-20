// export const configureWebpack = {
//   devtool: "source-map"
// };
// export const devServer = {
//   // host: "132.72.65.211"
//   host: "localhost"
// };
module.exports = {
  configureWebpack: {
    devtool: "source-map"
  },
  devServer: {
    // host: "132.72.65.211"
    host: "127.0.0.1",
    port: 8080
  }
  // devServer: {
  //   // host: "132.72.65.211"
  //   host: "localhost"
  // }
  // publicPath: process.env.NODE_ENV === "production" ? "/LAB12/" : "/"
};
