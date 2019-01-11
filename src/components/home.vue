<template>
  <div id="home">
    <router-link to="/ShowBlogs">
      <button class="btn btn-default">点击跳转</button>
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {

    }
  },

}
</script>

<style>
</style>
