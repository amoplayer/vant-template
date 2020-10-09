
const port = process.env.port || process.env.npm_config_port || 8080 // dev port

module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      '/dev-api': {
        target: 'http://localhost:8080/', // 重定向地址
        changeOrigin: true, // 允许跨域
        pathRewrite: {
          '^/dev-api': ''
        }
      }
    }
  }
}
