import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCity = '北京'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (error) { }
export default new Vuex.Store({
  state: {
    city: defaultCity,
    locationCity: '正在定位'
  },
  actions: {
    changeCity (ctx, city) {
      ctx.commit('updateCity', city)
    }
  },
  mutations: {
    updateCity (state, city) {
      state.city = city
      try {
        localStorage.city = city
      } catch (e) { }
    },
    updateLocation (state, city) {
      state.locationCity = city
    }
  }
})
