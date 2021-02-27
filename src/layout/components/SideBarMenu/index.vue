<template>
  <div>
    <el-menu :default-active="currentPath" router>
      <template v-for="(item, index) in routes">
        <el-menu-item
          v-if="item.children && item.children.length === 1"
          :index="item.children[0].path"
          :key="index"
        >
          <i class="el-icon-menu"></i>
          <span slot="title">{{ item.children[0].meta.title }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'SideBarMenu',
  created() {
    console.log(this.routes)
  },
  data() {
    return {}
  },
  computed: {
    routes() {
      const {
        options: { routes }
      } = this.$router
      // console.log(routes)
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
