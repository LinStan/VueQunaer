<template>
  <swiper :options="swiperOption" class="wrapper">
    <!-- slides -->
    <swiper-slide v-for="item of swiperList" :key="item.id">
      <img class="swiper-img" :src="item.imgurl" :alt="item.id"
    /></swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: { pagination: '.swiper-pagination', loop: true },
      swiperList: [
        { id: '001',
          imgurl: 'https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/c77f34caa4ddb00d8129569fe759c0f1.jpg_r_640x290x70_266a1287.jpg'
        },
        { id: '002',
          imgurl: 'https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/9ed5bbc902f94e3e2b8dea92a054ea93.jpg_r_640x290x70_d79fc9b3.jpg'
        },
        { id: '003',
          imgurl: 'https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/dedbb6909d50756c0ce7ad3cf8029e52.jpg_r_640x290x70_f741802b.jpg'
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 48%;

  .swiper-img {
    width: 100%;
  }
}
</style>
