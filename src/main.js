/* eslint-disable eqeqeq */
/* eslint-disable quotes */
// 使用“import”命令加载的Vue生成版本
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import VueResource from 'vue-resource' // 引入vue-resource数据请求
import VueRouter from 'vue-router' // 引入路由
import {
  Select,
  Option,
  Carousel,
  CarouselItem,
  DatePicker,
  TimeSelect,
  Message,
  Dialog
} from 'element-ui' // 按需引入element-ui框架

import App from './App'
import Routes from './routes'

import axios from 'axios' //  引入axios数据请求
import 'element-ui/lib/theme-chalk/index.css' // 引入element-ui框架样式

// 全局样式引入
import './assets/css/element.css' // 引入element-ui样式

// 数据请求地址全局配置
axios.defaults.baseURL = 'https://wd2895962302enkyee.wilddogio.com'

// element-ui框架使用
Vue.use(Select)
Vue.use(Option)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(DatePicker)
Vue.use(TimeSelect)
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.prototype.$message = Message
Vue.use(Dialog)

Vue.config.productionTip = false

// 自定义指令内容自适应
Vue.directive('theme', {
  bind (el, binding, vnode) {
    if (binding.value == 'wide') {
      el.style.maxWidth = "1200px"
    } else if (binding.value == 'narrow') {
      el.style.maxWidth = "560px"
    }
    if (binding.arg == 'column') {
      el.style.background = "#fff"
      el.style.margin = "20px"
    }
  }
})

// 自定义过滤器标题英文大写
Vue.filter('snippet', function (value) {
  return value.slice(0, 100) + "..."
})

// 创建路由
const router = new VueRouter({
  routes: Routes,
  mode: "history"
})

// vue初始化
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router: router
})
