// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 当然要引，用它注册
var Vue = require('vue');
// 路由，spa应用必需
var VueRouter = require('vue-router');
// 类似ajax请求，拉数据
var VueResource = require('vue-resource');

require('./css/home.css');
// 引入px与rem的换算
require('./js/equ.js');

// 实例化vue模块
Vue.use(VueRouter);
Vue.use(VueResource);

// 创建一个空组件
var app = Vue.extend({});

// 实例化VueRouter
var router = new VueRouter({
  // 当hashbang为true，所有路径都被格式化以 #！开头
  hashbang: true,
  history: false,
  saveScrollPosition: true,
  transitionOnLoad: true
});

// 路由表
router.map({
  '/': {
    // 首页
    component: function(resolve) {
      require(['./vue/home.vue'], resolve)
    }
  },
  '/home': {
    name: 'home', // 首页
    component: function(resolve) {
      require(['./vue/home.vue'], resolve)
    }
  },
  '/github': {
    name: 'github', // 博客列表,和vue中的v-link保持一致
    component: function(resolve) {
      require(['./vue/github.vue'], resolve)
    }
  },
  '/blog': {
    name: 'blog', // 博客列表
    component: function(resolve) {
      require(['./vue/blog.vue'], resolve)
    }
  },
  '/blog/topic': {
    name: 'topic', // 文章详情
    component: function(resolve) {
      require(['./vue/topic.vue'], resolve)
    }
  },
  '/about': {
    name: 'about', // 关于
    component: function(resolve) {
      require(['./vue/about.vue'], resolve)
    }
  }
})

// 默认重定向到home页
// router.redirect({'/':'home'})
router.afterEach(function(transition){
  console.log('成功浏览：'+transition.to.path)
})
// 注册到vue
router.start(app,"#app")
