// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import store from './store'

// mock.js 模拟数据传输工具
import './mockjs'

Vue.config.productionTip = false
Vue.use(ElementUI, {
  size: 'small'
})
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App },
  mounted () {
    this.$store.commit('initUser')
    this.$store.commit('initTags')
  }
})
