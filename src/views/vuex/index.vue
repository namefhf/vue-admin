<template>
  <div>
    {{ count }}
    <button @click="increment">add</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState({
      //访问模块内state
      count: state => state.count
    })
  },
  methods: {
    ...mapMutations({
      setUser: 'user/setUser' //访问模块内mutations
    }),
    ...mapActions(['increment'])
  }
}
</script>

<style lang="scss" scoped></style>
