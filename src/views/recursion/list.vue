<template>
  <div>
    <div v-for="(item, index) in list" :key="index">
      {{ item.name }}
      <div v-if="item.children" class="children">
        <list :list="item.children"></list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list',
  props: ['list']
}
</script>

<style lang="scss" scoped>
.children {
  margin-left: 20px;
}
</style>
