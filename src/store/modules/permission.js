import constRoutes from '@/router/constantRoutes'
import asyncRoutes from '@/router/asyncRoutes'
function filterAsyncRoutes(routes, roles) {
  const res = []
  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })
  return res
}

function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(r => route.meta.roles.includes(r))
  }
  // 没有meta字段或者meta内没有roles字段，说明所有权限均可访问
  return true
}
const state = {
  routes: [],
  addRoutes: []
}
const mutations = {
  setRoutes(state, routes) {
    state.addRoutes = routes
    state.routes = [...constRoutes, ...routes]
  }
}
const actions = {
  generateRoutes({ commit }, roles) {
    return new Promise(resolve => {
      let accessedRoutes
      // 用户是admin，则可以访问所有异步路由
      if (roles.includes('admin')) {
        console.log('includesadmin')
        accessedRoutes = asyncRoutes || []
      } else {
        // 否则过滤出用户可访问的异步路由
        console.log('filterAsyncRoutes')
        accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
      }
      // 更新state
      commit('setRoutes', accessedRoutes)
      resolve(accessedRoutes)
    })
  }
}
export default {
  state,
  mutations,
  actions,
  namespaced: true
}
