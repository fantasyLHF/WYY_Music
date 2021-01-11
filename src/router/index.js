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
        component: () => import('../views/Search.vue'),
        children: [
          {//搜索页面首页
            path: '',
            name: 'Searchhome',
            component: () => import('../views/Searchhome.vue')
          },
          {//搜索提示页面
            path: 'tips',
            name: 'Searchtips',
            component: () => import('../views/Searchtips.vue')
          },
          {//搜索提示页面
            path: 'list/:keyword',
            name: 'Searchlist',
            component: () => import('../views/Searchlist.vue'),
            props: true
          },
        ]
      },
    ]
  },
  {//播放页面
    path: '/play/:id',
    name: 'Play',
    component: () => import('../pages/Play'),
    props: true
  },
  {//表单页面
    path: '/songform/:id',
    name: 'Songform',
    component: () => import('../pages/Songform'),
    props: true
  },
  {//登录页面
    path: '/login',
    name: 'Login',
    component: () => import('../pages/Login'),
  }

]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
  linkExactActiveClass: 'myactive'
})
router.beforeEach((to, from, next) => {
  if (to.name == 'Home' | to.name == 'Play' | to.name == 'Songform') {

    let username = sessionStorage.getItem('username');
    let password = sessionStorage.getItem('password');
    if (username == "hokv" && password == "gzu") {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})
export default router
