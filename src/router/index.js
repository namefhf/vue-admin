import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'
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

export default router
