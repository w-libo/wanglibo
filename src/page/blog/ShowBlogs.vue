<template>
<div id="show-blogs" >
    <!-- 头部导航 -->
    <div class="nav">
        <div class="navCont">
            <div class="navCenter">
                <div class="logo">
                    <router-link to="/" exact="exact" class="logo-b">
                        <img src="../../assets/images/logo.png" alt="">
                    </router-link>
                </div>
                <ul class="navBar">
                    <li>
                        <router-link to="/ShowBlogs" exact="exact"><span>浏览博客</span></router-link>
                    </li>
                    <li>
                        <router-link to="/AddBlog"  exact="exact"><span>创作博客</span></router-link>
                    </li>
                    <div class="search">
                        <i class="ico"></i>
                        <input type="text" placeholder="搜索" v-model="search">
                    </div>
                </ul>
            </div>
        </div>
    </div>
    
    <div class="single-blog" v-for="blog in filteredBlogs" :key="blog.value" v-theme:column="'wide'">
        <router-link v-bind:to="'/SingleBlog/' + blog.id">
            <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
        </router-link>
        <article>
            {{blog.content | snippet}}
        </article>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'show-blogs',
  data(){
      return{
          blogs:[],
          search:""
      }
  },
  created(){
        // this.$http.get("https://wd2895962302enkyee.wilddogio.com/posts.json")
        axios.get("/posts.json")
        .then(function(data){
            //return  data.json();
            console.log(data.data)
            //console.log(data.json());
            //this.blogs = data.body.slice(0,10);
            return data.data;
        })
        .then((data)=>{
            var blogArray = [];
            for(let key in data){
                //console.log(key)
                data[key].id = key;
                blogArray.push(data[key]);
            }
            //console.log(blogArray)
            this.blogs = blogArray;
            //console.log(this.blogs);
        })
  },
  computed:{
      filteredBlogs:function(){
          return this.blogs.filter((blog) => {
              return blog.title.match(this.search);
          })
      }
  },
  filters:{
    //   "to-uppercase":function(value){
    //       return value.toUpperCase();
    //   }
    toUppercase(value){
        return value.toUpperCase();
    }
  },
  directives:{
      'rainbow':{
          bind(el,binding,vnode){
              el.style.color = "#" + Math.random().toString(16).slice(2,8);
          }
      }
  }
}
</script>

<style scoped>
    /* 导航样式 */
    .nav{background:#fff;width: 100%;position: fixed;left: 0;top: 0;z-index: 12;height: 96px;}
    .nav:after { box-sizing: border-box; content: '';position: absolute;left: 0;right: 0;bottom: 0;border-bottom: 1px solid rgba(187,187,187,.2);box-shadow: 0 0 5px 0 rgba(0,0,0,.1);box-sizing: border-box;}
    .nav .navCont{max-width: 1200px;margin: 0 auto; height: 96px;}
    .navCenter{display: inline-block;width: 100%;}
    .logo{float: left;padding-top: 24px;padding-bottom: 18px;margin-right: 30px;}
    .logo .logo-b{display: inline-block;width: 130px;}
    .navBar{display: inline-block;padding: 0;width: auto;margin-left: 12px;}
    .navBar li{margin: 28px 0;padding: 0;list-style: none; float: left;}
    .navBar li a {text-decoration:none; position: relative; display: block;height: 38px;line-height: 38px;color: #2c2950;font-size: 18px;padding: 0 25px;}
    .router-link-active span {color: #FF8A04;}
    .router-link-active span:after {position: absolute;left: 42px;bottom: 0;content: "";height: 0;width: 35px;border-bottom: 3px solid #FF8A04;color: #FF8A04;}
  
     /* 搜索样式 */
    .search{display: inline-block;width: 270px;position: relative;margin-left: 10px;margin-top: 28px;}
    input[type="text"]{display: block;width: 100%;background: 0 0;outline: none;border: 1px solid #dddfe6;font-size: 16px;line-height: 28px;padding: 5px 0 5px 34px;border-radius: 30px;font-family: "SF Pro SC","SF Pro Text","SF Pro Icons","PingFang SC","Helvetica Neue",Helvetica,Arial,sans-serif;-webkit-font-smoothing: antialiased;}
    .ico{display: block;position: absolute;width: 15px;height: 15px;left: 15px;top: 13px;background: url(../../assets/images/wlb1.png) no-repeat;background-size: 100%;}
  
    /* placeholder样式 */
    input::-webkit-input-placeholder{color:#dddfe6;color:#dddfe6;}
    input::-moz-placeholder{   /* Mozilla Firefox 19+ */ color:#dddfe6;}
    input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */color:#dddfe6;}
    input:-ms-input-placeholder{  /* Internet Explorer 10-11 */ color:#dddfe6;}
    
    /* 博客内容样式 */
    #show-blogs{max-width: 1200px;margin: 110px auto 0 auto;}
    .single-blog{padding: 20px;margin: 20px 0;box-sizing: border-box;background: #eee;border-radius: 6px;box-shadow: 0px 0px 8px #dad7d7;}
    #show-blogs a{color: #444;text-decoration: none;}

</style>
