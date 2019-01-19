/* eslint-disable eqeqeq */
/* eslint-disable quotes */
// 使用“import”命令加载的Vue生成版本
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import { Select, Option, Carousel, CarouselItem} from 'element-ui' // 引入element-ui框架

import App from './App'
import Routes from './routes'
import axios from 'axios'

// 全局样式引入
import './assets/css/blogHeader.css' /* 引入公共样式 */
import './assets/css/element.css' /* 引入element-ui样式 */
import 'swiper/dist/css/swiper.css'
// 全局配置
axios.defaults.baseURL = 'https://wd2895962302enkyee.wilddogio.com'
// element-ui框架使用
Vue.use(Select)
Vue.use(Option)
Vue.use(Carousel)
Vue.use(CarouselItem)

Vue.use(VueResource)
Vue.use(VueRouter)
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
      el.style.padding = "20px"
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
