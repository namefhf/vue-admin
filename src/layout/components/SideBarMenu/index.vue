<template>
  <div>
    <el-menu
      :default-active="currentPath"
      router
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#409EFF"
    >
      <side-bar-item
        v-for="route in routes"
        :key="route.path"
        :sidebarItemRoute="route"
        :base-path="route.path"
      />
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SideBarItem from '../SideBarItem'
export default {
  name: 'SideBarMenu',
  components: {
    SideBarItem
  },
  created() {
    this.routes = this.permissionRoutes.filter(r => !r.hidden)
    console.log(this.routes)
  },
  data() {
    return {}
  },
  computed: {
    currentPath() {
      return this.$route.path
    },
    ...mapGetters({
      permissionRoutes: 'permission_routes'
    })
  },
  methods: {},
  watch: {
    $route: {
      handler() {
        // console.log(this.currentPath)
      },
      immediate: true
    }
  }
}
</script>

<style lang="scss" scoped>
.el-menu {
  border-right: none;
}
</style>
