<template>
  <div id="user-index" v-theme:column="'wide'">
     <h1>欢迎光临王李波博客</h1>
         <router-link v-bind:to="'/blog/' + blog.id">开始做笔记吧</router-link>
  </div>
</template>

<script>
export default {
  name: 'user-index',
  data(){
      return{
          
      }
  },


}
</script>

<style scoped>

</style>
