/* eslint-disable eqeqeq */
/* eslint-disable quotes */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import { Select, Option } from 'element-ui' // 引入element-ui框架
import App from './App'
import Routes from './routes'
import axios from 'axios'
import './assets/common/blogHeader.css' /* 引入公共样式 */
import './assets/css/element.css'
// 全局配置
axios.defaults.baseURL = 'https://wd2895962302enkyee.wilddogio.com'
Vue.use(Select)
Vue.use(Option)
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.config.productionTip = false

// 自定义指令
// Vue.directive('rainbow',{
//   bind(el,binding,vnode){
//     el.style.color = "#" + Math.random().toString(16).slice(2,8);
//   }
// })
Vue.directive('theme', {
  bind (el, binding, vnode) {
    if (binding.value == 'wide') {
      el.style.maxWidth = "1200px"
    } else if (binding.value == 'narrow') {
      el.style.maxWidth = "560px"
    }
    if (binding.arg == 'column') {
      el.style.background = "#fff"
      el.style.padding = "20px"
      el.style.margin = "20px"
    }
  }
})
// 自定义过滤器
// Vue.filter("to-uppercase",function(value){
//   return value.toUpperCase();
// })

Vue.filter('snippet', function (value) {
  return value.slice(0, 100) + "..."
})

// 创建路由
const router = new VueRouter({
  routes: Routes,
  mode: "history"
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router: router
})
