<template>
  <div class="icons">
    <swiper :options="swiperOption" v-if="this.iconList.length">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img :src="item.imgurl" alt="" class="icon-img-content" />
          </div>
          <p class="icon-desc">{{ item.desc }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeIcons',
  props: { iconList: Array },
  data () {
    return { swiperOption: {
      autoplay: false
    }
    }
  },
  computed: {
    // 将iconlist分页
    pages () {
      const pages = []
      // 指向data
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
    // 分页算法的垃圾实现
    // pages1 () {
    //   let pages = []
    //   let index = 0
    //   let _this = this
    //   let l = _this.iconList.length
    //   while (l >= 8) {
    //     let temp = _this.iconList.slice(index * 8, index * 8 + 8)
    //     pages[index] = [...temp]
    //     l -= 8
    //     index++
    //   }
    //   pages[index] = [..._this.iconList.slice(index * 8, index * 8 + 8)]
    //   return pages
    // }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';

.icons >>> .swiper-container {
  height: 0;
  padding-bottom: 50%;
}

.icons {
  margin-top: 0.1rem;

  .icon {
    position: relative;
    overflow: hidden;
    float: left;
    width: 25%;
    padding-bottom: 25%;

    .icon-img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      box-sizing: border-box;
      padding: 0.1rem;

      .icon-img-content {
        display: block;
        margin: 0 auto;
        height: 100%;
      }
    }

    .icon-desc {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      heigth: 0.44rem;
      line-heigth: 0.44rem;
      text-align: center;
      color: $darkTextColor;
      ellipsis();
    }
  }
}
</style>
