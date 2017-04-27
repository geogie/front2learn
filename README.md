# front2learn
practice

## demo00仿Facebook网格图片画廊jquery插件 ##
 1. 测试入口index.html  
    最多显示5张，多于5张会在最后一张显示总张数,点击每一张看大图
 2. css文件下：  
    htmlleaf-demo.css:灰色背景  
    images-grd.css:图片排列样式  
    css/img文件下：  
    imgs-grid-icons.png：看大图时的左右箭头、叉图标  
    imgs文件下：  
    [1,7].jpg：画廊图片  
    1-thumbnail.jpg：小图，点击小图显示大图1.jpg  
    js文件下：  
    images-grid.js：画廊图片显示  
    jquery-1.11.0.min.js：画廊图片显示
 3. 参考博客：[http://www.htmleaf.com/jQuery/Slideshow-Scroller/201704204467.html](http://www.htmleaf.com/jQuery/Slideshow-Scroller/201704204467.html)  

## demo01 ##
 1. First, install [Webpack](https://www.npmjs.com/package/webpack) and  [webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server) globally.  
 npm install
 cd demoxx  
 webpack-dev-server
 2. demo03、06、08、09没有运行过去

## taskxx ##
 1. task01:flexbox  
    task02:css 3 特性  
    task03:栅格布局

## vue2 music app ##
 1. 使用:    
    clone代码后，  
    安装node部分： npm install  
    开发环境启动：npm run dev  
    启动build：npm run build
 2. package.json：环境配置，一些插件  
    npm install安装模块或插件的时候，有两种命令把它们写入到package.json,使用--save-dev安装，被写入devDependencies里，使用--save安装写入到dependencies。devDependencis只用于开发环境，不用于生产环境。dependencies是需要发布到生产环境的。  
    webpack.config.js：用户配置环境package.json中的scripts dev和build就是掉用的这个文件（webpack-dev-server）。

 3. 参考：  
     [https://github.com/houbx/webApp](https://github.com/houbx/webApp)
