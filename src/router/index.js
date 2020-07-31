import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// 首页
import Home from '@/components/home/home'
import homeContent from '@/components/home/homeContent'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/homeContent'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      // 首页
      {
        path: '/homeContent',
        name: 'homeContent',
        component: homeContent
      }
    ]
  }
  ]
})
