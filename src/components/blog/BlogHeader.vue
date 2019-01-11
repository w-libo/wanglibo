<template>
    <nav>
        <ul>
            <li>
                <router-link to="/ShowBlogs" exact="exact">博客</router-link>
                <router-link to="/AddBlog"  exact="exact">写博客</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
</script>

<style scoped>
ul{
    list-style-type:none;
    text-align: center;
    margin: 0;
}
li{
    display: inline-block;
    margin:0 10px;
}
a{
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    padding: 12px;
}
nav{
    background:#fff;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 12;
    height: 96px;
}
nav:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    border-bottom: 1px solid rgba(187,187,187,.2);
        box-shadow: 0 0 5px 0 rgba(0,0,0,.1);
        box-sizing: border-box;
}
.router-link-active{
    background: rgba(255, 255, 255, 0.8);
    color: #444444;
}
</style>