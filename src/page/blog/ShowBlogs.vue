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
                      <router-link to="/" exact="exact"><span>首页</span></router-link>
                    </li>
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
            <h2 class="wlb-bt-txt" v-rainbow>{{blog.title | to-uppercase}}</h2>
        </router-link>
        <article class="wlb-blog-cent">
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
     /* 搜索样式 */
    .search{display: inline-block;width: 270px;position: relative;margin-left: 10px;margin-top: 28px;}
    input[type="text"]{display: block;width: 100%;    height: 38px;text-indent: 40px;margin-top: 2px;background: 0 0;outline: none;border: 1px solid #dddfe6;font-size: 16px;border-radius: 30px;font-family: "SF Pro SC","SF Pro Text","SF Pro Icons","PingFang SC","Helvetica Neue",Helvetica,Arial,sans-serif;-webkit-font-smoothing: antialiased;}
    .ico{display: block;position: absolute;width: 15px;height: 15px;left: 15px;top: 13px;background: url(../../assets/images/wlb1.png) no-repeat;background-size: 100%;}
  
    /* placeholder样式 */
    input::-webkit-input-placeholder{color:#dddfe6;color:#dddfe6;}
    input::-moz-placeholder{   /* Mozilla Firefox 19+ */ color:#dddfe6;}
    input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */color:#dddfe6;}
    input:-ms-input-placeholder{  /* Internet Explorer 10-11 */ color:#dddfe6;}
    
    /* 博客内容样式 */
    #show-blogs{max-width: 1200px;margin: 130px auto 0 auto;}
    .single-blog{padding: 20px;margin: 20px 0;box-sizing: border-box;background: #eee;border-radius: 6px;box-shadow: 0px 0px 8px #dad7d7;}
    #show-blogs a{color: #444;text-decoration: none;}
    .wlb-bt-txt{font-size: 18px;}
    .wlb-blog-cent{color: #999;font-size: 14px;line-height: 24px;margin-top: 10px;}

</style>
