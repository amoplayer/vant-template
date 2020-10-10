'use strict'
const defaultSettings = require('./src/settings.js')

const name = defaultSettings.title || 'vue Admin Template' // page title

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
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: name
  }
}
