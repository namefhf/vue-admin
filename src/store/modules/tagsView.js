const state = {
  visitedViews: [],
  cachedViews: []
}

const mutations = {
  // 添加一个tag
  ADD_VISITED_VIEW: (state, view) => {
    if (state.visitedViews.some(v => v.path === view.path)) {
      return
    }
    state.visitedViews.push(view)
  },
  ADD_CACHED_VIEW: (state, view) => {
    if (state.cachedViews.includes(view.name)) {
      return
    }
    view.meta.keepalive && state.cachedViews.push(view.name)
  },
  // 删除一个tag
  DEL_VISITED_VIEW: (state, view) => {
    const index = state.visitedViews.findIndex(v => v.path === view.path)
    state.visitedViews.splice(index, 1)
  },
  DEL_CACHED_VIEW: (state, view) => {
    const index = state.cachedViews.indexOf(view.name)
    state.cachedViews.splice(index, 1)
  },
  // 删除所有tag
  DEL_ALL_VISITED_VIEWS: (state) => {
    state.visitedViews = state.visitedViews.filter(v => v.meta.affix)
  },
  DEL_ALL_CACHED_VIEW: (state) => {
    state.cachedViews = []
  }
}

const actions = {
  // 增加一个tag
  addView ({ commit }, view) {
    commit('ADD_VISITED_VIEW', view)
    commit('ADD_CACHED_VIEW', view)
  },
  // 删除一个tag
  delView ({ commit }, view) {
    commit('DEL_VISITED_VIEW', view)
    commit('DEL_CACHED_VIEW', view)
  },
  // 删除所有tag
  delAllViews ({ commit }) {
    commit('DEL_ALL_VISITED_VIEWS')
    commit('DEL_ALL_CACHED_VIEW')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
