<template>
  <transition>
    <!-- slot是插槽,其中可以添加html代码或者其他组件等任何内容 -->
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'FadeAnimation'
}
</script>

<style lang="stylus" scoped>
.v-enter, .v-leave-to {
  opacity: 0;
}

.v-enter-active, .v-leave-active {
  transition: opacity 0.5s;
}
</style>
