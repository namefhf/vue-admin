<template>
  <div>
    <template v-if="showAsMenuItem">
      <el-menu-item :index="resolvePath(menuItemRoute.path)">
        <i :class="menuItemRoute.meta.icon"></i>
        <span>{{ menuItemRoute.meta.title }}</span>
      </el-menu-item>
    </template>
    <el-submenu v-else :index="resolvePath(sidebarItemRoute.path)">
      <template slot="title">
        <i :class="sidebarItemRoute.meta.icon"></i>
        <span>{{ sidebarItemRoute.meta.title }}</span>
      </template>
      <side-bar-item
        v-for="child in sidebarItemRoute.children"
        :key="child.path"
        :sidebarItemRoute="child"
        :base-path="resolvePath(child.path)"
      />
    </el-submenu>
  </div>
</template>

<script>
import path from 'path'
export default {
  name: 'SideBarItem',
  props: {
    sidebarItemRoute: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      menuItemRoute: null,
      showAsMenuItem: false,
      path: ''
    }
  },
  created() {
    this.handleRoute()
    // console.log(this.basePath)
  },
  methods: {
    handleRoute() {
      // 无子路由 递归结束
      if (!this.sidebarItemRoute.children) {
        this.showAsMenuItem = true
        this.menuItemRoute = {
          ...this.sidebarItemRoute,
          path: ''
        }
        return
      }
      // 取出hidden不为true的子路由
      const showingChildrenRoutes = this.sidebarItemRoute.children.filter(
        item => !item.hidden
      )
      // 当只有一个子路由，并且这个子路由没有children属性时
      if (
        showingChildrenRoutes.length === 1 &&
        !showingChildrenRoutes[0].children
      ) {
        this.showAsMenuItem = true
        this.menuItemRoute = showingChildrenRoutes[0]
      }
    },
    resolvePath(routePath) {
      return path.resolve(this.basePath, routePath)
    }
  }
}
</script>

<style lang="scss" scoped></style>
