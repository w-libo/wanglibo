<template>
<div id="single-blog">
 <h2>{{blog.title}}</h2>
 <article>{{blog.content}}</article>
 <p>作者：{{blog.author}}</p>
 <ul>
     <li v-for="category in blog.categories" v-bind:key="category">{{category}}</li>
 </ul>
 <button @click="deleteSingleBlog()">删除</button>
 <router-link :to="'/EditBlog/'+ id">编辑</router-link>
</div>
</template>
<script>
    import axios from 'axios'
    export default{
        name:"single-blog",
        data(){
            return{
                id:this.$route.params.id,
                blog:{}
            }
        },
        created(){
            // this.$http.get("https://wd2895962302enkyee.wilddogio.com/posts/" + this.id + ".json")
            axios.get("/posts/" + this.id + ".json")
            .then((data)=>{
                //console.log(data)
                //this.blog = data.body;
                //return  data.json();
                this.blog = data.data;
            })
        },
        methods:{
            deleteSingleBlog(){
                axios.delete("/posts/" + this.id + ".json")
                .then(response =>{
                    this.$router.push({path: '/',})
                })
            }
        }
    }
   
</script>
<style scoped>
#single-blog{
    max-width: 960px;
    margin: 0 auto;
    padding: 20px;
    background: #eee;
    border:1px dotted #aaa;
}
</style>