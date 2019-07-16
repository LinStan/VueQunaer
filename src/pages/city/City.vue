<template>
  <div>
    <!-- {{ LocationCity }} -->
    <city-header></city-header>
    <city-search></city-search>
    <city-list
      :LocationCity="LocationCity"
      :cities="cities"
      :hotCities="hotCities"
    ></city-list>
    <city-alphabet :cities="cities"></city-alphabet>
  </div>
</template>
<script>
import CityHeader from './components/CityHeader'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import BMap from 'BMap'
import axios from 'axios'
export default {
  name: 'City',
  components: { CityHeader, CitySearch, CityList, CityAlphabet },
  data () {
    return {
      LocationCity: '正在定位',
      cities: {},
      hotCities: []
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
    },
    getCityInfo () {
      axios.get('/api/city.json').then(
        this.getCityInfoSucc
      )
    },
    getCityInfoSucc (res) {
      const data = res.data
      console.log(data)
      if (data.ret && data.data) {
        this.cities = data.data.cities
        this.hotCities = data.data.hotCities
      }
    }
  },
  mounted () {
    this.getCity()
    this.getCityInfo()
  }
}
</script>
<style lang="stylus" scoped>
</style>
