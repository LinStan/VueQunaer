<template>
  <ul class="list">
    <!-- 对象循环遍历 -->
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @click="handleLetterClick"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      {{ item }}
    </li>
  </ul>
</template>
<script>
export default {
  name: 'CityAlphabet',
  data () {
    return {
      touchState: false,
      startY: 0,
      timer: null
    }
  },
  props: {
    cities: Object },
  // 使用updated可以减少每一次的重复计算startY
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    // 获取当前字母传给父组件
    handleLetterClick (e) {
      // console.log('child    ' + e.target.innerText)
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchState = true
    },
    handleTouchMove (e) {
      if (this.touchState) {
        // 取得字母表顶部距离屏幕顶部的距离  优化性能
        // const startY = this.$refs['A'][0].offsetTop
        // 忽略10ms内的重复操作，不激活操作
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          // 获取当前点的Y值 touches是touch事件的列表   这里-的值根据css样式的top值来定
          const touchY = e.touches[0].clientY - 240
          // 通过根据index进行跳转
          const index = Math.floor((touchY - this.startY) / 20)
          // 防止index越界 多写一点限制条件是个好习惯
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
          console.log(this.startY, touchY, index)
        }, 10)
      }
    },
    handleTouchEnd () {
      this.touchState = false
    }
  },
  computed: {
    letters () {
      const letters = []
      // console.log(this.cities)
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }

  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.list {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: $headerHeight + 4rem;
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
