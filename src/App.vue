<template>
  <div id="app">
    <!-- 跳转页面不会重新渲染组件触发mounted里面的ajax请求 -->
    <!-- 仅detail不被缓存 -->
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
