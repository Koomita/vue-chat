import Vue from 'vue'
import Vuex from 'vuex'
import Movement from './modules/direction'
import Chat from './modules/chat'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    'movement': Movement,
    'chat': Chat
  }
})
