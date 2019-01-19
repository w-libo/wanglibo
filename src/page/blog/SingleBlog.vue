<template>
<div id="single-blog">
    <div class="nav">
      <div class="navCont">
        <div class="navCenter">
          <div class="logo">
            <router-link to="/" exact="exact" class="logo-b">
              <img src="../../assets/images/logo.png" alt>
            </router-link>
          </div>
          <ul class="navBar">
            <li>
              <router-link to="/" exact="exact">
                <span>首页</span>
              </router-link>
            </li>
            <li>
              <router-link to="/ShowBlogs" exact="exact">
                <span>浏览博客</span>
              </router-link>
            </li>
            <li>
              <router-link to="/AddBlog" exact="exact">
                <span>创作博客</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="wlb-blog-xq" v-theme:column="'wide'">
        <h2 class="wlb-blog-bt">{{blog.title}}</h2>
        <article class="wlb-blog-nr">{{blog.content}}</article>
        <div class="wlb-bot">
            <div class="wlb-blog-inf">
                <span class="wlb-user-img"><i class="ico"></i><b>{{blog.zuozhe}}</b></span>
                <span class="wlb-blog-fl">{{blog.author}}</span>
            </div>
            <div class="wlb-blog-r">
                <span @click="deleteSingleBlog()"><i class="wlb-del"></i>删除</span>
                <span><router-link :to="'/EditBlog/'+ id"><i class="wlb-bj"></i>编辑</router-link></span>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import axios from 'axios'
export default{
  name: 'single-blog',
  data () {
    return {
      id: this.$route.params.id,
      blog: {}
    }
  },
  created () {
    // this.$http.get("https://wd2895962302enkyee.wilddogio.com/posts/" + this.id + ".json")
    axios.get('/posts/' + this.id + '.json')
      .then((data) => {
        // console.log(data)
        // this.blog = data.body;
        // return  data.json();
        this.blog = data.data
      })
  },
  methods: {
    deleteSingleBlog () {
      axios.delete('/posts/' + this.id + '.json')
        .then(response => {
          this.$router.push({path: '/ShowBlogs'})
        })
    }
  }
}

</script>
<style scoped>
#single-blog{max-width: 1200px;margin: 130px auto 0 auto;}
.wlb-blog-xq{max-width: 1200px; margin: 110px 20px 0 20px;padding: 20px;-webkit-box-sizing: border-box;box-sizing: border-box;background: #fff;border-radius: 6px;-webkit-box-shadow: 0px 0px 8px #dad7d7;box-shadow: 0px 0px 8px #dad7d7;}
.wlb-blog-bt{font-size: 20px;}
.wlb-blog-nr{font-size: 14px;margin-top: 10px;padding-bottom: 15px;border-bottom: 1px solid #ddd;color: #a0a0a0;line-height: 24px;}
.wlb-blog-inf{float: left;}
.wlb-user-img{display: inline-block;}
.wlb-user-img .ico{ display:inline-block; width: 25px; height: 25px;background: url("../../assets/images/wlb4.png")no-repeat;background-size: 100%;border-radius: 100%;vertical-align: middle;margin: 0 8px 0 0;}
.wlb-user-img b{vertical-align: middle}
.wlb-bot{margin-top: 20px;display: inline-block;width: 100%;}
.wlb-blog-fl{display: inline-block;font-size: 12px;margin-left: 20px;width: 85px;height: 22px;background: url("../../assets/images/wlb5.png")no-repeat;background-size: 100% 100%; vertical-align: middle; margin-top: 2px; line-height: 22px;color: #fff;text-indent: 14px;}
.wlb-blog-r{float:right;}
.wlb-blog-r span{color: #818181;font-size: 14px;margin-right: 10px; cursor: pointer;}
.wlb-blog-r span:hover{color: #ff8a04;}
.wlb-blog-r span a{color: #818181;text-decoration: none;}
.wlb-blog-r span a:hover{color: #ff8a04;}
.wlb-del{display:inline-block; width: 20px; height: 20px;background: url("../../assets/images/wlb7.png")no-repeat;background-size: 100%;vertical-align: middle;margin: -4px 4px 0 0;}
.wlb-bj{display:inline-block; width: 18px; height: 20px;background: url("../../assets/images/wlb6.png")no-repeat;background-size: 100%;vertical-align: middle;margin: -3px 4px 0 0;}
</style>
