<template>
  <div>
    <el-button type="primary" @click="send">
      发送
    </el-button>
    <Child></Child>
  </div>
</template>

<script>
import Child from './components/Child.vue'
export default {
  data() {
    return {
      count: 0
    }
  },
  components: {
    Child
  },
  methods: {
    send() {
      console.log('send')
      this.$bus.$emit('message', '我是来自父组件的值') // 传值
      this.$bus.$emit('add') // 传事件
    }
  },
  beforeCreate() {
    console.log('父beforeCreate')
  },
  created() {
    console.log('父Create')
  },
  beforeMount() {
    console.log('父beforeMount')
  },
  mounted() {
    console.log('父mounted')
  }
}
</script>

<style lang="scss" scoped></style>
