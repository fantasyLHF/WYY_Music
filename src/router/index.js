import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'

Vue.use(VueRouter)

const routes = [
  {//首页部分
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {//音乐首页
        path: '',
        name: 'Music',
        component: () => import('../views/Music.vue')
      },
      {//热门音乐页面
        path: 'hot',
        name: 'Hot',
        component: () => import('../views/Hot.vue')
      },
      {//搜索页面
        path: 'search',
        name: 'Search',
        component: () => import('../views/Search.vue')
      },
    ]

  },

]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
  linkExactActiveClass: 'myactive'
})

export default router
