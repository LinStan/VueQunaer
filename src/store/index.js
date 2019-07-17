import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // ...
  state: {
    city: '北京',
    locationCity: '正在定位'
  },
  actions: {
    changeCity (ctx, city) {
      // console.log(city)
      ctx.commit('updateCity', city)
      // console.log(this.state.city)
    }
  },
  mutations: {
    updateCity (state, cityname) {
      state.city = cityname
    },
    updateLocation (state, cityname) {
      state.locationCity = cityname
    }
  }
})
export default store
