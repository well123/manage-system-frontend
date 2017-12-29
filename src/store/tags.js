import sessionStore from './sessionStorage'

const state = {
  tags: []
}

const mutations = {
  addTag (state, tag) {
    let length = state.tags.length
    let existIndex = -1
    for (var i = length - 1; i >= 0; i--) {
      if (state.tags[i].path === tag.path) {
        existIndex = i
      }
      state.tags[i].type = 'info'
    }
    if (existIndex >= 0) {
      state.tags[existIndex].type = ''
    } else {
      state.tags.push({
        path: tag.path,
        name: tag.name,
        type: ''
      })
    }
    sessionStore.setItem('tags', JSON.stringify(state.tags))
  },
  initTags (state) {
    let tags = sessionStore.getItem('tags')
    if (tags === 'null') {
      state.tags = []
    } else {
      state.tags = JSON.parse(tags)
    }
    sessionStore.setItem('tags', JSON.stringify(state.tags))
  },
  clearTags (state) {
    state.tags = []
    sessionStore.setItem('tags', JSON.stringify(state.tags))
  },
  choseTag (state, index) {
    let length = state.tags.length
    for (var i = length - 1; i >= 0; i--) {
      if (state.tags[i].path === state.tags[index].path) {
        state.tags[index].type = ''
      } else {
        state.tags[i].type = 'info'
      }
    }
    sessionStore.setItem('tags', JSON.stringify(state.tags))
  },
  closeTag (state, index) {
    state.tags.splice(index, 1)
    sessionStore.setItem('tags', JSON.stringify(state.tags))
  }
}

const getters = {
  getTags: state => state.tags
}

export default {
  state,
  mutations,
  getters
}
