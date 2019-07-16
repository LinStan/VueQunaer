<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont">&#58916;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#58930;</span>
      输入城市/景点/主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{ headercity }}
        <span class="iconfont arrow-icon">&#58954; </span>
      </div>
    </router-link>
    <!-- 也可手动绘制三角形 -->
    <!-- <span
        style="
      width: 0;
      height: 0;
      border-left: 0.2rem solid transparent;
      border-right: 0.2rem solid transparent;
      border-top: 0.2rem solid #fff;"
      ></span> -->
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: { 'headercity': String }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' scoped>
@import '~styles/varibles.styl';

.header {
  display: flex;
  line-height: $headerHeight;
  background: $bgColor;
  color: #fff;
  text-align: center;

  .header-left {
    width: 0.64rem;
    float: left;
  }

  .header-input {
    flex: 1;
    height: 0.64rem;
    line-height: 0.64rem;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    border-radius: 0.1rem;
    background: #fff;
    color: #ccc;
  }

  .header-right {
    width: 1.24rem;
    float: right;
    color: #fff;

    .arrow-icon {
      margin-left: -0.04rem;
      font-size: 0.24rem;
    }
  }
}
</style>
