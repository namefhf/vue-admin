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
import SideBarItem from '../SideBarItem'
export default {
  name: 'SideBarMenu',
  components: {
    SideBarItem
  },
  created() {
    console.log('routes', this.routes)
  },
  data() {
    return {}
  },
  computed: {
    routes() {
      const routes = this.$router.options.routes.filter(item => !item.hidden)
      return routes
    },
    currentPath() {
      return this.$route.path
    }
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
