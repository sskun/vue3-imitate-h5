const { defineConfig } = require('@vue/cli-service')
const CompressionPlugin = require('compression-webpack-plugin')
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV)
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: (config) => {
    const plugins = []
    plugins.push(new CompressionPlugin())
    config.plugins = [...config.plugins, ...plugins]
  }
})
