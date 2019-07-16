<template>
  <ul class="list">
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
  </ul>
</template>
<script>
export default {
  name: 'CityAlphabet'
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.list {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: $headerHeight + 1.02rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;
  justify-content: center;

  .item {
    text-align: center;
    color: $bgColor;
    line-height: 0.4rem;
  }
}
</style>
