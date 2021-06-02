import Vue from 'vue'
import VueRouter from 'vue-router'

import { getToken } from '@/utils/auth'
import store from '@/store'
import { Message } from 'element-ui'
import constantRoutes from './constantRoutes'
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)
// 所有权限均能访问的通用路由

const createRouter = () =>
  new VueRouter({
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

const router = createRouter()

const WHITE_LIST = ['/login', '/notfound']
router.beforeEach(async (to, from, next) => {
  // console.log('to', to)
  const token = getToken()
  if (token) {
    if (to.path === '/login') {
      // 访问登录页直接跳转到首页
      next({ path: '/' })
    } else {
      // 通过获取store roles来判断是否获取过用户信息
      const hasRoles = store.getters.roles && store.getters.roles.length > 0
      if (hasRoles) {
        next()
      } else {
        try {
          // 获取用户权限
          const { roles } = await store.dispatch('user/getUserInfo')
          // console.log('roles', roles)
          // 生成可访问的异步路由
          const accessedRoutes = await store.dispatch(
            'permission/generateRoutes',
            roles
          )
          // console.log('accessedRoutes', accessedRoutes)
          // router.addRoutes(accessedRoutes)
          accessedRoutes.forEach(r => {
            router.addRoute(r)
          })
          console.log('router', router)
          // 使用next()将无法成功跳转

          next({ ...to, replace: true })
          // next()
        } catch (err) {
          // console.log(err)
          await store.dispatch('user/resetToken')
          Message.error(err.message || 'Error')
          next({ path: '/login' })
        }
      }
    }
  } else {
    if (WHITE_LIST.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}
export default router
