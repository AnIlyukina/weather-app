import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    weather:{},
    loading: false, 
    errorMessage: false,
  },
  mutations: {
    setWeather: (state, payload) => {
      state.weather = payload
    },
    setLoading: (state,payload) =>{
      state.loading = payload
    },
    setErrorMessage: (state, payload) =>{
      state.errorMessage = payload
    }
  },
  actions: {
    fetchWeather: async({ commit, dispatch }, payload) => {
      dispatch('setLoading', true)
      try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${payload}&appid=a96fe8ba426299461ac1ef45c727fe48&units=metric`)
        if (response.status === 200){
          dispatch('setErrorMessage', false)
          const data = await response.json()
          commit('setWeather', data)
        }
        else {
          dispatch('setErrorMessage', true)
        }
      }
      catch(error) {
      console.log(error)
       dispatch('setErrorMessage', true)
      }
      finally {
        dispatch('setLoading', false)
      }
    },
    setLoading: (context, payload) =>{
      context.commit('setLoading', payload)
    },
    setErrorMessage: (context, payload) =>{
      context.commit('setErrorMessage', payload)
    }
  },
  modules: {},
});
