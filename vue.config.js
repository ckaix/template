const StyleLintPlugin = require("stylelint-webpack-plugin");
module.exports = {
  chainWebpack(config) {
    config.plugin("stylelint").use(StyleLintPlugin, [
      {
        // 指定检测的文件
        files: ["./src/**/*.{vue,css,less,scss}"],
        // 启动自动修复
        fix: true,
        cache: true // 启用缓存
      }
    ]);
  }
};
