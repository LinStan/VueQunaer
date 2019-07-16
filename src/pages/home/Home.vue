<template>
  <div>
    <!-- props给子组件传值 -->
    <home-header :headercity="city"></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
    <!-- {{ LocationCity }} -->
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
export default {
  name: 'Home',
  components: { HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      city: '温州',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
      // LocationCity: '正在定位'

    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json').then(
        this.getHomeInfoSuccc
      )
    },
    getHomeInfoSuccc (res) {
      // 将获取到的数据分别赋值
      res = res.data
      const data = res.data
      if (res.ret) {
        this.city = data.city
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }

      // console.log(res)
    }
    // getCity () { // 定义获取城市方法
    //   const geolocation = new BMap.Geolocation()
    //   var _this = this
    //   geolocation.getCurrentPosition(function getinfo (position) {
    //     let city = position.address.city // 获取城市信息
    //     // let province = position.address.province // 获取省份信息
    //     _this.LocationCity = city
    //   }, function (e) {
    //     _this.LocationCity = '定位失败'
    //   }, { provider: 'baidu' })
    // }
  },
  mounted () {
    this.getHomeInfo()
    // this.getCity()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
