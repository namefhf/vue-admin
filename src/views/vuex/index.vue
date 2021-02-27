<template>
  <div>
    {{ age }}
    <!-- {{ $store.state.user.age }} -->
    <button @click="setUser">
      <!-- @click="$store.commit('user/setUser')" -->
      clickme
    </button>
    {{ count }}
    <button @click="increment">add</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState({
      age: state => state.user.age, //访问模块内state
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
