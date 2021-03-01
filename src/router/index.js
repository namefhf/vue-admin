import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'
import { getToken } from '@/utils/auth'
import store from '@/store'
import { Message } from 'element-ui'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/guide',
    component: Layout,
    children: [
      {
        path: 'guide',
        name: 'Guide',
        component: () => import('@/views/guide'),
        meta: { title: 'guide', icon: 'el-icon-s-promotion' }
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login'),
    hidden: true
  },
  {
    path: '/example',
    name: 'Example',
    component: Layout,
    meta: { title: 'Example', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index.vue'),
        meta: { title: 'Table', icon: 'table' }
      },
      {
        path: 'upload',
        component: () => import('@/views/upload/index.vue'),
        meta: { title: 'Upload', icon: 'table' }
      },
      {
        path: '/vuex',
        name: 'vuex',
        component: () => import('@/views/vuex/'),
        meta: { title: 'vuex', icon: 'table' }
      }
    ]
  },
  {
    path: '*',
    name: 'notfound',
    component: () => import('@/views/notfound/'),
    hidden: true
  }
]
const router = new VueRouter({
  routes
})
const originalPush = VueRouter.prototype.push

const WHITE_LIST = ['/login']
router.beforeEach(async (to, from, next) => {
  const token = getToken()
  if (token) {
    if (to.path === '/login') {
      //访问登录页直接跳转到首页
      next({ path: '/' })
    } else {
      //通过获取store roles来判断是否获取过用户信息
      const hasRoles = store.getters.roles && store.getters.roles.length > 0
      if (hasRoles) {
        next()
      } else {
        try {
          const { roles } = await store.dispatch('user/getUserInfo')
          console.log('roles', roles)
          next()
        } catch (err) {
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
export default router
