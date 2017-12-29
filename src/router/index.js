import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import MenuManage from '@/components/MenuManage'

Vue.use(Router)

let routers = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        notneed_auth: true
      }
    },
    {
      path: '/menuManage',
      name: 'MenuManage',
      component: MenuManage
    }
  ]
})
routers.beforeEach((to, from, next) => {
  if (!to.meta.notneed_auth) {
    if (!localStorage.getItem('userInfo')) {
      routers.push({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})
export default routers
