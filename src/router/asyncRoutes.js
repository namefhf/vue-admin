// 异步加载的路由模块，需要根据权限动态添加
import Layout from '@/layout'
const asyncRoutes = [
  {
    path: '/permissoin',
    component: Layout,
    redirect: '/permission/index',
    name: 'Permission',
    roles: ['admin', 'visiter'],
    alwaysShow: true,
    meta: {
      title: '权限测试页',
      icon: 'el-icon-lock'
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/permission/PermissionIntro'),
        name: 'PermissionIntro',
        meta: {
          title: '权限测试',
          roles: ['admin', 'visiter']
        }
      },
      {
        path: 'page',
        component: () => import('@/views/permission/PagePermission'),
        name: 'PagePermission',
        meta: {
          title: '页面权限',
          roles: ['admin']
        }
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
export default asyncRoutes
