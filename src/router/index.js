import Vue from 'vue'
//引入vue-router
import VueRouter from 'vue-router'
//全局安装
Vue.use(VueRouter)
//引入组件
import Home from '../pages/home'
import Fenlei from '../pages/fenlei'
import Vip from '../pages/vip'
import Cart from '../pages/cart'
import Mine from '../pages/mine'
//定义路由规则
const routes = [
  {path: '', component: Home},
  {path: '/home', component: Home},
  {path: '/fenlei', component: Fenlei},
  {path: '/vip', component: Vip},
  {path: '/cart', component: Cart},
  {path: '/mine', component: Mine},
]

//创建路由
// const router = new VueRouter({
//   routes
// })
//导出创建好的router对象
export default new VueRouter({
    routes
})
