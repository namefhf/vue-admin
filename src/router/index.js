import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/guide',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: 'guide',
        name: 'Guide',
        component: () => import('@/views/guide/'),
        meta: { title: 'guide', icon: 'dashboard' }
      }
    ]
  },
  {
    path: '/example',
    name: 'Example',
    component: () => import('@/layout/index.vue'),
    meta: { title: 'Example', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index.vue'),
        meta: { title: 'Table', icon: 'table' }
      }
    ]
  },
  {
    path: '/upload',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: 'index',
        name: 'Upload',
        component: () => import('@/views/upload/index.vue'),
        meta: { title: 'Upload', icon: 'table' }
      }
    ]
  },
  {
    path: '*',
    name: 'notfound',
    component: () => import('@/views/notfound/')
  }
]

const router = new VueRouter({
  routes
})

export default router
// children: [
//   {
//     path: '/guide',
//     name: 'guide',
//     component: () => import('@/views/guide/')
//   },
//   {
//     path: '/vuex',
//     name: 'vuex',
//     component: () => import('@/views/vuex/')
//   },
//   {
//     path: '/recursion',
//     name: '递归组件',
//     component: () => import('@/views/recursion/')
//   },
//   {
//     path: '/bus',
//     name: 'bus',
//     component: () => import('@/views/bus/')
//   },
//   {
//     path: '/upload',
//     name: '文件上传',
//     component: () => import('@/views/upload/')
//   },

// ]
