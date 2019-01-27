<template>

  <div id="home">
    <!--头部导航-->
    <div id="fixedBar" :class="{ fixedBar: isFixed }">
        <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="rgba(84, 92, 100, 0)"  active-text-color="#ff8a04">
          <div class="logobai">
            <router-link to="/" exact="exact" class="logo-b">
              <i class="logoBj"></i>
              <img src="" alt="">
            </router-link>
          </div>
          <el-menu-item index="1"><router-link to="/">首页</router-link></el-menu-item>
          <el-menu-item index="2"><router-link to="/AddBlog">创建博客</router-link></el-menu-item>
          <el-menu-item index="3"><router-link to="">个人简历</router-link></el-menu-item>
          <el-menu-item index="4"><router-link to="">个人作品</router-link></el-menu-item>
          <el-menu-item index="5"><router-link to="">我的闲置</router-link></el-menu-item>
        </el-menu>
    </div>
    <!--banner轮播-->
    <el-carousel :interval="2000" arrow="always">
        <el-carousel-item v-for="item in superurl" class="itemtp">
            <router-link :to="item.url"><img :src="item.img"/></router-link>
        </el-carousel-item>
    </el-carousel>

  </div>
</template>

<script>

export default {
  name: 'home',

  data () {
    return {
      // 首页轮播图数据
      superurl: [
        {
          url: '',
          img: require('../assets/images/banner1.png'),
          title: '个人简历',
          id: 1
        },
        {
          url: '/AddBlog',
          img: require('../assets/images/banner2.png'),
          title: '写博客',
          id: 1
        }
      ],
      isFixed: false, // 导航固定
      activeIndex2: '1'
    }
  },
  mounted () {
    // 设置bar浮动阈值为 #fixedBar 至页面顶部的距离
    this.offsetTop = document.querySelector('#fixedBar').offsetTop
    // 开启滚动监听
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    // 鼠标滚动导航固定方法
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop

      if (scrollTop > this.offsetTop) {
        this.isFixed = true
      } else {
        this.isFixed = false
      }
    },
    // Element-UI 导航
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }

}
</script>

<style scoped>
/*banner样式*/
.el-carousel__item a{display: block;width: 1200px;height: 100%;margin: 0 auto;background: #31a9ff;text-align: center}
.el-carousel__item a img{width: 100%;}
.el-carousel__item:nth-child(2n+1){background: #31a9ff;}
.el-carousel__item:nth-child(2n){background: #ff574c;}

/*头部导航样式*/
#fixedBar{position: fixed;top: 0;z-index: 999;width: 100%;height: 96px;}
.fixedBar {background:#fff;}
.fixedBar>.el-menu--horizontal>.el-menu-item  {color: #000000!important;}
.fixedBar:after {box-sizing: border-box;content: "";position: absolute;left: 0;right: 0;bottom: 0;border-bottom: 1px solid rgba(187, 187, 187, 0.2);box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);box-sizing: border-box;}
.fixedBar>.el-menu--horizontal>.el-menu-item.is-active {color: #ff8a04 !important;}
  /*logo样式*/
.logobai {float: left;padding-top: 24px;padding-bottom: 18px;margin-right: 100px;}
.logobai .logoBj {display: inline-block;width: 130px; height: 50px; background: url("./../assets/images/logobai.png")no-repeat; background-size: 100% 100%;}
.fixedBar .logobai .logoBj {display: inline-block;width: 130px; height: 50px; background: url("./../assets/images/logo.png")no-repeat; background-size: 100% 100%;}

</style>
