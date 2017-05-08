# vuedemo
简单demo  
让webpack+vue-cil项目不再自动打开浏览器：  
打开 /build/dev-server.js 文件 末尾，代码如下：  

// when env is testing, don't need open it  
if (process.env.NODE_ENV !== 'testing') {  
  opn(uri)  
}  
只需要把这段代码注释，即可。
[参考](http://blog.csdn.net/fungleo/article/details/53171052)
