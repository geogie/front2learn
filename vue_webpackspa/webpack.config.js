// node的路径模块
var path = require('path');
// 当然要引入了
var webpack = require('webpack');
// 构建页面资源插件
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// vue.js的应用，把各个组件当作一个页面.vue后缀，引用这个编辑这些文件
var vue = require('vue-loader');

// 定义了一些文件夹的路径
// __dirname是node里面的一个变量，指向当前文件夹目录
var ROOT_PATH = path.resolve(__dirname);
// 文件入口，从main.js这个文件作为入口
var APP_PATH = path.resolve(ROOT_PATH, 'src/main.js');
// 文件打包出来的输出路径
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

var plugins = [
  // 压缩js
  // new webpack.opttimize.UglifyJsPlugin({minimize:true}),
  // 提公用js到common.js
  new webpack.optimize.CommonsChunkPlugin('common.js'),
  // 样式同一发布到style.css
  new ExtractTextPlugin('style.css',{
    allChunks: true
  }),
  // 使用ProvidePlugin加载使用率高的依赖库
  new webpack.ProvidePlugin({
    $: 'webpack-zepto'
  })
];

module.exports = {
  // 项目的文件夹 可以直接用文件夹命名 默认找index.js 也可以确定哪个文件名字,文件入口
  entry: {
    build: APP_PATH
  },
  // 输出的文件名，合并以后的js会重命名为bundle.js
  output: {
    // 输出路径
    path: BUILD_PATH,
    // 打包后的js命名
    filename: '[name].js',
    // 指向异步加载的路径
    publicPath: '/build/',
    // 非主文件命名规则，加缓存用md5
    chunckFilename: '[id].build.js?[chunkhash]'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader','css-loader')
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader','css-loader')
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=40000'
      }
    ]
  },
  // vue提倡把一个组件当一个页面，在一个页面写html、sytle、javascript，也可以引入和写入css文件
  vue: {
    css: ExtractTextPlugin.extract('css'),
    sass: ExtractTextPlugin.extract('css!sass-loader')
  },
  plugins: plugins
};
