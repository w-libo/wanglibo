// 首页
import home from './components/home.vue'
// 博客路由
import ShowBlogs from './components/blog/ShowBlogs.vue'
import AddBlog from './components/blog/AddBlog.vue'
import SingleBlog from './components/blog/SingleBlog.vue'
import EditBlog from './components/blog/EditBlog.vue'
export default[
  {
    path: '/', 
    component: home // 首页
  },

  // 博客路由
  {
    path: '/ShowBlogs', 
    component: ShowBlogs //博客内容展示页
  },
  {
    path: '/AddBlog', 
    component: AddBlog // 添加博客
  },
  {
    path: '/SingleBlog/:id', 
    component: SingleBlog // 博客详情
  },
  {
    path: '/EditBlog/:id', 
    component: EditBlog // 编辑博客
  },
]
