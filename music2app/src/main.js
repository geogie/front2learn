// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import store from './store'

Vue.use(VueRouter)
Vue.use(Mint)
// 引入文件
import App from './App.vue' // 主页
import routes from './router.js' // 路由

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  next()
})

// 创建实例
new Vue({
  data: {
    bus: new Vue()
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
