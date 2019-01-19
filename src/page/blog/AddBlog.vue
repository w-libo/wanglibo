<template>
  <div id="add-blog">
    <!-- 头部导航 -->
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
    <form v-if="!submmited" class="wlb-addblog">
      <input type="text" placeholder="请输入标题" class="wlb-bod" v-model="blog.title" required>
      <textarea v-model="blog.content" class="wlb-bod" placeholder="请输入博客内容"></textarea>

        <!-- <select v-model="blog.author">
          <option value='' disabled selected style='display:none;'>请选择博客分类</option>
          <option  v-for="author in authors" v-bind:key="author">{{author}}</option>
        </select> -->

        <el-select v-model="blog.author" placeholder="请选择博客分类" >
          <el-option v-for="item in authors" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>

      <input type="text" placeholder="请输入作者" class="wlb-bod wlb-top" v-model="blog.zuozhe" required>

      <div v-on:click.prevent="post" class="wlb-btn">添加博客</div>
    </form>

    <!-- 添加成功后展示信息 -->
    <div v-if="submmited" class="wlb-cheng">
      <h3 class="wlb-txt-c">您的博客发布成功</h3>
      <div class="wlb-chengg-img"><img src="../../assets/images/wlb3.png"></div>
      <p class="wlb-chenginh">您的博客发布成功，点击返回首页查看</p>
      <div class="wlb-gohome">
        <router-link to="/ShowBlogs">返回首页</router-link>
      </div>
    </div>
    <!--<div id="preview">-->
      <!--<h3>博客总览</h3>-->
      <!--<p>博客标题：{{blog.title}}</p>-->
      <!--<p>博客内容:{{blog.content}}</p>-->
      <!--<p>博客分类：{{blog.author}}</p>-->
      <!--<p>作者：{{blog.zuozhe}}</p>-->
    <!--</div>-->
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'add-blog',
  data () {
    return {
      blog: {
        title: '',
        content: '',
        author: '',
        zuozhe: ''
      },
      // authors: ["生活记录", "感情记录","技术记录"],
      submmited: false,
      authors: [{
        value: '生活记录'
      }, {
        value: '感情记录'
      }, {
        value: '技术记录'
      }],
      value: ''
    }
  },

  methods: {

    post: function () {
      // this.$http.post("https://wd2895962302enkyee.wilddogio.com/posts.json",this.blog)
      if (this.blog.title === '') {
        alert('请输入博客标题')
        return false
      }
      if (this.blog.content === '') {
        alert('请输入博客内容')
        return false
      }
      if (this.blog.author === '') {
        alert('请选择博客分类')
        return false
      }
      if (this.blog.zuozhe === '') {
        alert('请输入作者')
        return false
      }
      axios.post('https://wd2895962302enkyee.wilddogio.com/posts.json', this.blog)
        .then(data => {
          // console.log(data);
          this.submmited = true
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* placeholder样式 */
input::-webkit-input-placeholder{color:#cecece;color:#cecece;}
input::-moz-placeholder{   /* Mozilla Firefox 19+ */ color:#cecece;}
input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */color:#cecece;}
input:-ms-input-placeholder{  /* Internet Explorer 10-11 */ color:#cecece;}
textarea::-webkit-input-placeholder{color:#cecece;color:#cecece;}
textarea::-moz-placeholder{   /* Mozilla Firefox 19+ */ color:#cecece;}
textarea:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */color:#cecece;}
textarea:-ms-input-placeholder{  /* Internet Explorer 10-11 */ color:#cecece;}

/* 添加博客 */
#add-blog * {box-sizing: border-box;}
#add-blog {margin: 20px auto;max-width: 600px;padding: 20px;}
input[type="text"],textarea,select {display: block;width: 100%;height:40px; border-radius: 6px; line-height: 40px; margin-bottom: 20px; color: #606266;}
textarea {height: 200px;resize:none;overflow-y: auto; font-size: 14px;line-height: 20px;padding-top: 5px;}
.wlb-addblog{margin-top: 90px;}
.wlb-bod{border: 1px solid #dcdfe6;outline: none;padding-left: 12px;padding-right: 2px;}
.wlb-top{margin-top: 20px;padding-left: 12px;}

/* textarea滚动条样式 */
textarea::-webkit-scrollbar {width: 8px;height: 6px;}
textarea::-webkit-scrollbar-track {background-color:#f1f1f1;-webkit-border-radius: 2em;-moz-border-radius: 2em;border-radius:2em;}
textarea::-webkit-scrollbar-thumb {background-color:#ccc;-webkit-border-radius: 2em;-moz-border-radius: 2em;border-radius:2em;}
select{border: 1px solid #ececec;color: #7e7e7e;padding-left: 10px;}
/* 提交按钮样式 */
.wlb-btn{background: #ff8a04;color: #fff;height: 35px;line-height: 35px;text-align: center;border-radius: 4px;width: 50%;margin: 0 auto;cursor: pointer;}

/* 成功样式 */
.wlb-cheng{margin: 120px auto 0 auto; width: 100%;height: 370px;background: url("../../assets/images/wlb2.png")no-repeat; background-size: 100%;}
.wlb-txt-c{color: #ff8a04;font-size: 22px;text-align: center;padding-top: 60px;}
.wlb-chengg-img{width: 100px; height: 80px; margin: 40px auto 0 auto;}
.wlb-chengg-img img{width: 100%;}
.wlb-chenginh{color: #6e6e6e; font-size: 16px;text-align: center;padding-top: 30px;}
.wlb-gohome{width: 40%; height: 38px; text-align: center;line-height: 34px; border: 2px solid #ff8a04; border-radius: 6px; margin: 60px auto 0 auto;}
.wlb-gohome a{color:#ff8a04; display: block; text-decoration: none; font-size: 16px; cursor: pointer; font-weight: 600; }

</style>
