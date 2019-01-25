<template>

  <div id="home">
    <template>
      <el-carousel :interval="2000" arrow="always">
          <el-carousel-item v-for="item in superurl">
          <router-link :to="item.url"><img :src="item.img"/></router-link>
          </el-carousel-item>
      </el-carousel>
    </template>

  </div>
</template>

<script>

export default {
  name: 'home',

  data () {
    return {
      superurl: [
        {
          url: '/ShowBlogs',
          img: require('../assets/images/wlb2.png'),
          title: '你看我叼吗1',
          id: 1
        },
        {
          url: '',
          img: require('../assets/images/wlb3.png'),
          title: '你看我叼吗1',
          id: 1
        },
        {
          url: '',
          img: require('../assets/images/wlb4.png'),
          title: '你看我叼吗1',
          id: 1
        }
      ]

    }
  },
  mounted () {

  }

}
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
