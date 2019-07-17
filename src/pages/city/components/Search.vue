<template>
  <div>
    <div class="search">
      <!-- input框双向绑定 -->
      <input
        type="text"
        class="search-input"
        placeholder="输入城市名或拼音"
        v-model="keyword"
      />
    </div>
    <div class="search-content" v-show="keyword.length !== 0" ref="search">
      <ul>
        <li
          v-for="item of list"
          :key="item.id"
          class="search-ret"
          @click="handleCityClick(item.name)"
        >
          {{ item.name }}
        </li>
        <li v-show="!hasNoRet" class="search-ret">没有匹配的城市</li>
      </ul>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  props: {
    cities: Object },
  computed: {
    hasNoRet () {
      return this.list.length
    }
  },
  methods: {
    handleCityClick (city) {
      // 触发vuex内的action
      this.$store.dispatch('changeCity', city)
      this.$router.push('/')
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }

      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        // 根据keyword匹配cities
        let ret = []
        // 将拼音或者名字匹配的存储到ret中
        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            if (value.spell.indexOf(this.keyword) !== -1 || value.name.indexOf(this.keyword) !== -1) { ret.push(value) }
          })
        } this.list = ret
      }, 100)
      // }
    }
  },
  mounted () {
    // this.$nextTick(() => {
    this.scroll = new Bscroll(this.$refs.search, {})
    // })
  }
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

.search-content {
  z-index: 1;
  overflow: hidden;
  position: absolute;
  top: $cityTopHeight;
  left: 0;
  bottom: 0;
  right: 0;
  background: white;

  .search-ret {
    line-height: 0.76rem;
    padding-left: 0.2rem;
    color: #666;
  }
}
</style>
