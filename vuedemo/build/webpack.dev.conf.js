var utils = require('./utils')// 一些工具方法
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')// 合并配置文件
var baseWebpackConfig = require('./webpack.base.conf')// 开发和运行配置文件共享
var HtmlWebpackPlugin = require('html-webpack-plugin')// 提供操作html文件的插件
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

// add hot-reload related code to entry chunks，热加载，代码改动，浏览器刷新实现
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })// 处理独立的css或预处理的样式文件
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map', // 开发时方便做源码调试
  // 定义的一些插件
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env // 把源码中的process.env替换为config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(), // 热加载插件
    new webpack.NoEmitOnErrorsPlugin(), // 编辑出错代码后，会跳过那部分代码，使编译运行的包不会出现错误
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true // 打包过程中输出的js或css文件路径会自动添加到这个html文件里
    }),
    new FriendlyErrorsPlugin()
  ]
})
