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
// import addBlog from './components/blog/addBlog'
// import ShowBlogs from './components/blog/ShowBlogs'
// import BlogHeader from './components/blog/BlogHeader'
// import SingleBlog from './components/blog/SingleBlog'
export default {
  name: 'App',
  components: {
    home
  }
}
</script>

<style>
</style>
