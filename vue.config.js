const { defineConfig } = require('@vue/cli-service')
const CompressionPlugin = require('compression-webpack-plugin')
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const path = require('path')
// const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV)
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: (config) => {
    const plugins = []
    plugins.push(new CompressionPlugin())
    plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: 'static'
      })
    )
    // plugins.push(
    //   new HtmlWebpackPlugin({
    //     emplate: path.join(__dirname, '/public/index.html'),
    //     inject: true,
    //     filename: 'index.ejs'
    //   })
    // )
    config.plugins = [...config.plugins, ...plugins]
  },
  chainWebpack: (config) => {
    config.optimization.splitChunks({
      chunks: 'all', // 2. 处理的 chunk 类型
      minSize: 20000, // 4. 允许新拆出 chunk 的最小体积
      minRemainingSize: 0,
      minChunks: 1, // 5. 拆分前被 chunk 公用的最小次数
      maxAsyncRequests: 30, // 7. 每个异步加载模块最多能被拆分的数量
      maxInitialRequests: 30, // 6. 每个入口和它的同步依赖最多能被拆分的数量
      enforceSizeThreshold: 50000, // 8. 强制执行拆分的体积阈值并忽略其他限制
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/, // 1.1 模块路径/文件名匹配正则
          priority: -10, // 1.2 缓存组权重
          reuseExistingChunk: true // 1.3 复用已被拆出的依赖模块，而不是继续包含在该组一起生成
        },
        'vendors-base': {
          name: 'vendors-base',
          test: /[\\/]node_modules[\\/](vue|vue-router|axios)/, // 打包vue相关的公用模块
          chunks: 'all',
          priority: 10,
          enforce: true
        },
        'vendors-console': {
          name: 'vendors-console',
          test: /[\\/]node_modules[\\/](ant-design-vue|moment)/, // 打包指定的大的三方插件
          chunks: 'all',
          priority: 8,
          enforce: true
        },
        'chunk-vendors': {
          name: 'chunk-vendors',
          test: /[\\/]node_modules[\\/]/, // 打包剩余node_modules插件
          chunks: 'all',
          priority: 1,
          enforce: true
        }
      }
    })
  }
})
