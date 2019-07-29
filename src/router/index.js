import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: {
      name: 'Index'
    }
  }, {
    path: '/index',
    name: 'Index',
    component: () => import('@/pages/Index'),
    meta: {
      title: '聊天室'
    }
  }]
})
