<template>
  <div id="app">
    <!-- 跳转页面不会重新渲染组件触发mounted里面的ajax请求 -->
    <keep-alive>
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
