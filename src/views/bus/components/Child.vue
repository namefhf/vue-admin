<template>
  <div class="child-wrap">
    <p>子组件</p>
    <p style="color:red">点击接收父组件的值和事件</p>
    {{ msg }}
    <p>{{ count }}</p>
  </div>
</template>

<script>
export default {
  name: 'Child',
  data() {
    return {
      msg: '',
      count: 0
    }
  },
  methods: {},
  beforeCreate() {
    console.log('子beforeCreate')
  },
  created() {
    console.log('子Create')
  },
  beforeMount() {
    console.log('子beforeMount')
  },
  mounted() {
    console.log('子mounted')
    this.$bus.$on('message', data => {
      //接收值
      console.log(data)
      this.msg = data
    })
    this.$bus.$on('add', () => {
      //接收事件
      this.count++
    })
  },
  beforeDestroy() {
    //移除监听
    this.$bus.$off('message')
    this.$bus.$off('add')
  }
}
</script>

<style lang="scss" scoped>
.child-wrap {
  width: 200px;
  height: 200px;
  background: darkgray;
}
</style>
