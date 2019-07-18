<template>
  <div>
    <detail-banner
      :bannerImg="bannerImg"
      :imgs="gallaryImgs"
      :sightName="sightName"
    ></detail-banner>
    <detail-header :sightName="sightName"></detail-header>
    <detail-list :list="list"></detail-list>
  </div>
</template>
<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
  name: 'Detail',
  components: { DetailBanner, DetailHeader, DetailList },
  data () {
    return {
      list: [],
      bannerImg: '',
      gallaryImgs: [],
      sightName: ''
    }
  },
  methods: {
    getDetailInfo () {
      // ajax带参数的写法
      // axios.get('/api/detail.json?id=' + this.$route.params.id)
      axios.get('/api/detail.json?id=', {
        params: {
          id: this.$route.params.id
        } }).then(this.getDetailInfoSucc)
    },
    getDetailInfoSucc (res) {
      // 将获取到的数据分别赋值
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        console.log(data)
        this.list = data.categoryList
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.sightName = data.sightName
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>
<style lang="stylus" scoped>
</style>
