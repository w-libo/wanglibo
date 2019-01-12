// 首页
import home from './components/home'
// 博客路由
import ShowBlogs from './page/blog/ShowBlogs'
import AddBlog from './page/blog/AddBlog'
import SingleBlog from './page/blog/SingleBlog'
import EditBlog from './page/blog/EditBlog'
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
