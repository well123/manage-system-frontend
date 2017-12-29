import Vue from 'vue'
import Vuex from 'vuex'
import userInfo from './userInfo'
import tags from './tags'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    userInfo,
    tags
  }
})
