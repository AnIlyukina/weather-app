<template>
    <main class="weather">
    <Loader v-if="loading"/>

    <div class="weather__block">
       <div class="weather__search-box">
      <input 
        type="text" 
        placeholder= "А в Тайланде сейчас жарко" 
        class="weather__search-bar"
        v-model.trim='city'
        @keypress="getWeather"
        >
    </div>
    <ErrorMessage v-if="errorMessage"/>
     <div v-if="typeof weather.main != 'undefined'" class="weather__info"  > 
        <div class="weather__location-box">
          <div class="location"> {{weather.name}} </div>
          <div class="date"> {{dateBuilder()}} </div>
        </div>
        <div class="weather__weather-box">
          <div class="temp">{{ Math.round(weather.main.temp) }}°C</div>
          <div class="weather-now">{{weather.weather[0].main}}</div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>

import {mapActions, mapState} from 'vuex';
import Loader from './components/Loader.vue'
import ErrorMessage from './components/ErrorMessage.vue'

export default {
  name: "App",
  components:{
    Loader,
    ErrorMessage
  },
  data(){
    return {
      city: ''
    }
  },
  computed: {
   ...mapState(['weather', 'loading' , 'errorMessage']), 
  },
  methods: {
    ...mapActions([
      'fetchWeather',
    ]),
    async getWeather(e){
      if(e.key == 'Enter'){
       await this.fetchWeather(this.city)
       console.log(this.weather)
       this.city = ''
     }
    },
    dateBuilder(){
      let day = new Date();
      let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      let daysOfWeek = ['Sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

      let dayOfWeek = daysOfWeek[day.getDay()]
      let date = day.getDate()
      let month = months[day.getMonth()]
      let year = day.getFullYear()

      return `${dayOfWeek} ${date} ${month} ${year}`
    }
  },
};
</script>

<style>
*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

body{
  font-family: 'montserrat', sans-serif;
  min-width: 320px;
  height: 100vh;
}

.weather{

  background-image: url('./assets/earth.png');
  background-size: cover;
  background-position: center; 
  transition: 0.4s;

}

.weather__block{
  min-height: 100vh;
  padding:25px;
  background-image: linear-gradient(to bottom, rgba(0 ,0 ,0 , 0.25), rgba(0, 0 ,0 ,0.75));
}

.weather__search-box{
  width: 100%;
  margin-bottom: 30px;
}

 .weather__search-box .weather__search-bar{
  display: block;
  width: 100%;
  padding: 10px;
  color: #313131;
  font-size:18px;

  appearance: none;
  border-radius: 0px 16px;
  border: none;
  outline: none;
  background:none;


  box-shadow: 0px 0px 8px rgba( 0, 0, 0, 0.25);
  background-color: rgba(255,255,255, 0.5);
  transition: .4s;

}

 .weather__search-box .weather__search-bar:focus{
   box-shadow: 0px 0px 16px rgba( 0, 0, 0, 0.25);
   background-color: rgba( 255, 255, 255, 0.75);
   border-radius: 16px 0px;
 }

 .weather__location-box .location{
   color: #FFF;
   font-size: 32px;
   font-weight: 500;
   text-align: center;
   text-shadow: 1px 3px rgba( 0, 0, 0, 0.25);
   margin-bottom: 10px;
 }

  .weather__location-box .date{
   color: #FFF;
   font-size: 20px;
   font-weight: 300;
   font-style: italic;
   text-align: center;
 }

 .weather__weather-box{
   text-align: center;
 }

 .weather__weather-box .temp{
    display: inline-block;
    color: #FFF;
    padding: 10px 25px;
    font-size: 102px;
    font-weight: 900;
    text-shadow: 3px 6px rgba( 0, 0, 0, 0.25);
    background-color: rgba(255, 255, 255, 0.25);
    border-radius: 16px;
    margin: 30px 0px;

    box-shadow: 3px 6px rgba( 0, 0, 0, 0.25);
}

.weather__weather-box .weather-now {
  color: #FFF;
  font-size: 48px;
  font-weight: 700;
  font-style: italic;
  text-shadow: 3px 6px rgba( 0, 0, 0, 0.25);
}
</style>