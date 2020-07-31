import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// 首页
import Home from '@/components/home/home'
import homeContent from '@/components/home/homeContent'
//资产管理
//资产概览
import assetsOverview from '@/components/assets/assetsOverview'
// 系统管理
import userManage from '@/components/system/userManage'

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
        },
        // 资产管理
        // 资产概览
        {
          path: '/assetsOverview',
          name: 'assetsOverview',
          component: assetsOverview
        },
        // 用户管理
        {
          path: '/userManage',
          name: 'userManage',
          component: userManage
        }
      ]
    }
  ]
})
