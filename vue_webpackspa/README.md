# vue_webpackspa

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 解释：
  index.html项目入口，<router-view>引用控件，<script引用script，id=“app”入口  
  main.js:路由表，注册vue，挂载，重定向  
  纠正原来github中的bug：   
  webpack.config的publicPath__dirname + '/build/'中的__dirname去掉  
  [参考博客](https://segmentfault.com/a/1190000005768273?hmsr=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io)  
  [参考github地址](https://github.com/cwsjoker/webpack-vue-spa-demo/tree/master)
