<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">
          当前城市
        </div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{ LocationCity }}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">
          热门城市
        </div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hotCities" :key="item.id">
            <div class="button">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <!-- 循环对象的时候使用key而不是index -->
      <div class="area" v-for="(item, key) of cities" :key="key">
        <div class="title border-topbottom">{{ key }}</div>
        <ul class="item-list ">
          <li
            class="item border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id"
          >
            {{ innerItem.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  // this.$nextTick 的回调函数中初始化 better-scroll 。这个时候，wrapper 的 DOM 已经渲染了
  // 可以正确计算它以及它内层 content 的高度，以确保滚动正常。
  mounted () {
    this.$nextTick(() => {
      this.scroll = new Bscroll(this.$refs.wrapper, {})
    })
  },
  props: {
    LocationCity: String,
    cities: Object,
    hotCities: Array }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.border-topbottom, .border-bottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}

.list {
  overflow: hidden;
  position: absolute;
  top: $headerHeight + 1.02rem;
  left: 0;
  right: 0;
  bottom: 0;

  .title {
    line-height: 0.4rem;
    background: $titleBgColor;
    padding-left: 0.2rem;
    color: #666;
  }

  .button-list {
    overflow: hidden;
    padding: 0.1rem 0.4rem 0.1rem 0.1rem;

    .button-wrapper {
      width: 31%;
      float: left;
      padding: 0.05rem;

      .button {
        padding: 0.1rem;
        border-radius: 0.06rem;
        text-align: center;
        border: 0.02rem solid #ccc;
      }
    }
  }

  .item-list {
    line-height: 0.76rem;
    padding-left: 0.2rem;
  }
}
</style>
