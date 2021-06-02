import Layout from '@/layout'
const constantRoutes = [
  {
    path: '/',
    redirect: '/guide',
    component: Layout,
    children: [
      {
        path: 'guide',
        name: 'Guide',
        component: () => import('@/views/guide'),
        meta: { title: 'guide', icon: 'el-icon-s-promotion', affix: true }
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
        path: 'vuex',
        name: 'vuex',
        component: () => import('@/views/vuex/'),
        meta: { title: 'vuex', icon: 'table' }
      },
      {
        path: 'keepalive',
        name: 'keepalive',
        // component: {
        //   render: h => h('h1', 'keepalive')
        // },
        component: () => import('@/views/keepalive'),
        meta: {
          title: 'keepalive',
          icon: 'table',
          keepAlive: true
        }
      }
    ]
  }
  // {
  //   path: '*',
  //   name: 'notfound',
  //   component: () => import('@/views/notfound/'),
  //   hidden: true
  // }
]
export default constantRoutes
