<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {},
  data() {
    return {}
  },
  created() {},
  watch: {
    $route(newValue, oldValue) {
      console.log('$route:', this.$route)
    }
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
}
</style>
