<template>
  <div class="search">
    <input type="text" class="search-input" placeholder="输入城市名或拼音" />
  </div>
</template>
<script>
export default {
  name: 'CitySearch'
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.search {
  height: $headerHeight;
  line-height: $headerHeight;
  background: $bgColor;
  padding: 0.1rem;

  .search-input {
    text-align: center;
    height: 0.62rem;
    line-height: 0.62rem;
    width: 100%;
    border-radius: 0.6rem;
    color: #666;
  }
}
</style>
