# vue_happyfri

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

# run unit tests
npm run unit

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

1. 使用:    
   clone代码后，  
   安装node部分： npm install  
   开发环境启动：npm run dev  
   启动build：npm run build(生成/vue_happyfri/happyfri下的文件)
2. package.json：环境配置，一些插件  
   npm install安装模块或插件的时候，有两种命令把它们写入到package.json,使用--save-dev安装，被写入devDependencies里，使用--save安装写入到dependencies。devDependencis只用于开发环境，不用于生产环境。dependencies是需要发布到生产环境的。  
   webpack.config.js：用户配置环境package.json中的scripts dev和build就是掉用的这个文件（webpack-dev-server）。  
   /.babelrc：转码规则和插件，熟悉Linux的同学一定知道，rc结尾的文件通常代表运行时自动加载的文件
   presets：这个是babel6新加的，就是代表需要启动什么样的预设转码，一种简单的使用方式  
   比较重要的部分：  
   /index.html：header一些手机兼容性配置、标题，body路由view的id  
   /src/main.js：挂在路由，文件引用
3. 参考：  
    [https://github.com/bailicangdu/vue2-happyfri](https://github.com/bailicangdu/vue2-happyfri)
