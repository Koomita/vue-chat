import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Chat from '@/pages/Chat'

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
    component: Index,
    meta: {
      title: '首页'
    }
  }, {
    path: '/chat',
    name: 'Chat',
    component: Chat,
    meta: {
      title: '聊天室'
    }
  }]
})
