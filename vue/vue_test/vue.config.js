const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, /*关闭语法检查*/
  devServer: {
    proxy: {
      '/api1': {
        target: 'http://localhost:7001',
        pathRewrite: { '^/api1': '' },
        ws: true,
        changeOrigin: true
      },
      '/api2': {
        target: 'http://localhost:7002',
        pathRewrite: { '^/api2': '' },
        ws: true,
        changeOrigin: true
      },
    }
  }
})
