<template>
  <div>
    <!-- 根据距离屏幕顶部的距离决定使用哪种header -->
    <router-link tag="div" to="/" class="header" v-show="showAbs">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
    <!-- 设置不透明度,随下滑渐变 -->
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      {{ sightName }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  props: {
    sightName: String
  },
  data () {
    return {
      showAbs: true,
      // 设置不透明度 不透明度根据距离渐变
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    // 滚动事件
    handleScroll () {
      const top = document.documentElement.scrollTop
      // 当开始向下滚动,当返回按钮消失在可视区域,开始计算滚动距离修改opacity
      // console.log(top)
      if (top > 45) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  // 设置滚动监听 绑定在window的事件监听 不用的时候一定要删除
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  // deactivated的时候要销毁事件监听,不然会在其他组件也监听滚动
  unmounted () {
    // console.log('解绑')
    window.removeEventListener('scroll', this.handleScroll)
  }

}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.header {
  position: absolute;
  left: 0.2rem;
  top: 0.2rem;
  width: 0.6rem;
  height: 0.6rem;
  line-height: 0.6rem;
  border-radius: 0.4rem;
  text-align: center;
  background: rgba(0, 0, 0, 0.8);

  .header-back {
    color: #fff;
    font-size: 0.3rem;
  }
}

.header-fixed {
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: $headerHeight;
  line-height: $headerHeight;
  text-align: center;
  color: #fff;
  background: $bgColor;
  font-size: 0.32rem;

  .header-fixed-back {
    position: absolute;
    top: 0;
    left: 0;
    width: 0.64rem;
    text-align: center;
    font-size: 0.4rem;
    color: #fff;
  }
}
</style>
