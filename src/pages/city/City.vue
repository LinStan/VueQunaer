<template>
  <div>
    <!-- {{ LocationCity }} -->
    <city-header></city-header>
    <city-search></city-search>
    <city-list :LocationCity="LocationCity"></city-list>
    <city-alphabet></city-alphabet>
  </div>
</template>
<script>
import CityHeader from './components/CityHeader'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import BMap from 'BMap'
export default {
  name: 'City',
  components: { CityHeader, CitySearch, CityList, CityAlphabet },
  data () {
    return {
      LocationCity: '正在定位'
    }
  },
  methods: {
    getCity () { // 定义获取城市方法
      const geolocation = new BMap.Geolocation()
      var _this = this
      geolocation.getCurrentPosition(function getinfo (position) {
        let city = position.address.city // 获取城市信息
        // let province = position.address.province // 获取省份信息
        _this.LocationCity = city
      }, function (e) {
        _this.LocationCity = '定位失败'
      }, { provider: 'baidu' })
    }
  },
  mounted () {
    this.getCity()
  }
}
</script>
<style lang="stylus" scoped>
</style>
