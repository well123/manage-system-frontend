import localStore from './localStorage'

const state = {
  userInfo: {
    phone: ''
  }
}

const mutations = {
  setUser (state, userInfo) {
    localStore.setItem('userInfo', JSON.stringify(userInfo))
    state.userInfo = userInfo
  },
  initUser (state) {
    let userInfo = localStorage.getItem('userInfo')
    if (!userInfo) {
      localStore.setItem('userInfo', JSON.parse(userInfo))
    }
  }
}

export default {
  state,
  mutations
}
