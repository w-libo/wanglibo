<template>
  <div id="app">
    <!--<home></home>-->
     <!-- <add-blog></add-blog> -->
     <!-- <show-blogs></show-blogs> -->
     <!-- <BlogHeader></BlogHeader>-->
     <router-view></router-view>
  </div>
</template>

<script>
import home from './components/home'

export default {
  name: 'App',
  data () {
    return {

    }
  },
  components: {
    home
  }
}
</script>

<style>
  @import "./common/font/font.css";
</style>
