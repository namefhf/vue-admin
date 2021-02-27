const namespaced = true
const state = {
  user: 'lisa',
  age: 18
}
const mutations = {
  setUser(state) {
    state.age = 20
  }
}
const actions = {}
export default {
  state,
  mutations,
  actions,
  namespaced
}
