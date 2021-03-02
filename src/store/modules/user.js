import { login, getUserInfo, userLogout } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'
const namespaced = true
const state = {
  token: getToken(),
  name: '',
  roles: []
}
const mutations = {
  setName(state, name) {
    state.name = name
  },
  setToken(state, token) {
    state.token = token
  },
  setRoles(state, roles) {
    state.roles = roles
  }
}
const actions = {
  login({ commit }, payload) {
    const { username, password } = payload
    return new Promise((resolve, reject) => {
      login({ username, password })
        .then(res => {
          const { token } = res.data.data
          console.log(token)
          commit('setToken', token)
          setToken(token)
          resolve()
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  getUserInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getUserInfo(state.token)
        .then(({ data }) => {
          // console.log(data)
          if (!data) {
            reject(new Error('请重新登录'))
          }
          const { roles, name } = data.data
          console.log(roles)
          if (!roles || roles.length < 1) {
            reject(new Error('权限错误'))
          }
          commit('setRoles', roles)
          commit('setName', name)
          resolve(data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('setToken', '')
      commit('setName', '')
      commit('setRoles', [])
      removeToken()
      resolve()
    })
  },
  logout({ commit }) {
    return new Promise((resolve, reject) => {
      userLogout()
        .then(() => {
          commit('setToken', '')
          removeToken()
          commit('setName', '')
          commit('setRoles', [])
          // logout时要重置路由，否则重新以admin登录时会有警告：添加了重复的路由
          resetRouter()
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}
export default {
  state,
  mutations,
  actions,
  namespaced
}
