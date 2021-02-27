<template>
  <div>
    <list :list="list" />
  </div>
</template>

<script>
import list from './list'
export default {
  data() {
    return {
      list: [
        {
          name: '衣服',
          children: [
            {
              name: '棉衣',
              children: [
                {
                  name: '羽绒服'
                },
                {
                  name: '卫衣'
                }
              ]
            },
            {
              name: '短袖'
            }
          ]
        },
        {
          name: '裤子',
          children: [
            {
              name: '短裤'
            },
            {
              name: '长裤'
            }
          ]
        }
      ]
    }
  },
  components: {
    list
  }
}
</script>

<style lang="scss" scoped>
.children {
  margin-left: 20px;
}
</style>
