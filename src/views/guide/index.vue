<template>
  <div class="guide-index">
    <lottie-player
      src="https://assets4.lottiefiles.com/packages/lf20_5n8yfkac.json"
      :options="options"
    />
  </div>
</template>

<script>
export default {
  name: 'GuideIndex',
  data() {
    return {
      options: { autoplay: true, speed: 2.5, loop: true, width: '500px' }
    }
  }
}
</script>

<style lang="scss" scoped>
.guide-index {
  display: flex;
  justify-content: center;
}
</style>
