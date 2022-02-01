import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    weather:{}
  },
  mutations: {
    setWeather: (state, payload) => {
      state.weather = payload
    },
  },
  actions: {
    fetchWeather: async({ commit }, payload) => {
      try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${payload}&appid=a96fe8ba426299461ac1ef45c727fe48&units=metric`)
        if (response.status === 200){
          const data = await response.json()
          commit('setWeather', data)
        }
      }
      catch(e) {
       console.log(e)
      }
    }
  },
  modules: {},
});
