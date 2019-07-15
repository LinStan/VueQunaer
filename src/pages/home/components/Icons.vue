<template>
  <div class="icons">
    <swiper>
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
  data () {
    return {
      iconList: [
        {
          id: '001',
          imgurl: '//s.qunarzz.com/travel/travel_hy2/2019/gonglue.png',
          desc: '攻略'
        }, {
          id: '002',
          imgurl: '//s.qunarzz.com/travel/travel_hy2/2019/bitiyan.png',
          desc: '旅行榜单'
        }, {
          id: '003',
          imgurl: '//s.qunarzz.com/travel/travel_hy2/2019/jingdian.png',
          desc: '景点'
        }, {
          id: '004',
          imgurl: '//s.qunarzz.com/travel/travel_hy2/2019/zhusu.png',
          desc: '酒店'
        }, {
          id: '005',
          imgurl: '//s.qunarzz.com/travel/travel_hy2/2019/tesetiyan.png',
          desc: '玩乐'
        }, {
          id: '006',
          imgurl: '//s.qunarzz.com/travel/travel_hy2/2019/tesecai.png',
          desc: '美食'
        }, {
          id: '007',
          imgurl: '//s.qunarzz.com/travel/travel_hy2/2019/gouwu.png',
          desc: '购物'
        }, {
          id: '008',
          imgurl: '//s.qunarzz.com/travel/travel_hy2/2019/luxian.png',
          desc: '路线'
        }, {
          id: '009',
          imgurl: '//s.qunarzz.com/travel/travel_hy2/2019/wenda.png',
          desc: '问答'
        }
      ]
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
  height: 100%;
  padding-bottom: 50%;
}

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
</style>
