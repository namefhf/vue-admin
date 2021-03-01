import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
Vue.use(Vuex)
const modulesFiles = require.context('./modules', true, /\.js$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = /^\.\/(?<moduleName>.*)\.js$/.exec(modulePath).groups
    .moduleName
  modules[moduleName] = modulesFiles(modulePath).default
  return modules
}, {})
// console.log(modules)
export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules,
  getters
})
