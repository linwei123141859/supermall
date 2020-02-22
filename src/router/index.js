import Vue from 'vue'
import VueRouter from "vue-router";

const Home = () => import('views/home/Home')
const Categrory = () => import('views/categeroy/Categrory')
const Cate = () => import('views/cate/Cate')
const Profie = () => import('views/profie/Profie')


Vue.use(VueRouter)
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
    component: Categrory
  },
  {
    path: '/cart',
    component: Cate
  },
  {
    path: '/profile',
    component: Profie
  }
]
export default new VueRouter({
  routes,
  mode:'history'
})
