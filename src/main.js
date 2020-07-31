// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import less from 'less'

// 引入Element-UI (全局)
import ElementUI from 'element-ui'
import { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// Echarts
import Echarts from 'echarts'

Vue.prototype.$message = Message

Vue.use(ElementUI)
Vue.use(less)
Vue.prototype.$echarts = Echarts

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
