//配置路由相关的信息
import VueRouterfrom from 'vue-router';
import Vue from 'vue';
import VueRouter from 'vue-router';
//懒加载
const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Shopcart = () => import('../views/shopcart/Shopcart')
const Profile = () => import('../views/profile/Profile')

//1.通过Vue.use(插件)，安装插件
Vue.use(VueRouter);

// 2.创建一个VueRouter对象
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/shopcart',
    component: Shopcart
  },
  {
    path: '/profile',
    component: Profile
  },
]
const router = new VueRouter({
  //配置组件与路由之间的应用关系
  routes,
  mode: 'history',//设置页面显示路径模式
  linkActiveClass: 'red'//选中时的样式名
})
//3.将router对象传入Vue实例中
export default router
