<template>
  <div id="en">
    <main>
      <div>
        <div class="search-welcome">Local forecast by "City, St" or ZIP code</div>
        
        <div class="search-box">
          <div class="search-error">{{ err }}</div>

          <input 
            type="text" 
            class="search-bar" 
            placeholder="Enter location..."
            v-model="query"
            @keypress="fetchWeather"
          />
        </div>
    
        <div class="weather-container" v-if="typeof weather.main != 'undefined'">
          <div 
            :class="
              typeof weather.main != 'undefined' && 
              weather.main.temp > 289 ? 'weather-wrap warm' : 'weather-wrap cold'
            "
          >
            <div class="location-box">
              <div class="location">{{ weather.name }}, {{ weather.sys.country }}</div>
            </div>
      
            <div class="weather-box">
              <div class="temp">{{ Math.round(weather.main.temp - 273.15)}}°C</div>
              <div class="weather">{{ weather.weather[0].main }}</div>
            </div>

            <div class="weather-close" @click="close()"><img src="../assets/close.png" /></div>
          </div>
        </div>

        <div class="date">{{ dateBuilder() }}</div>
      </div>
    </main>
  </div>
</template>
  
<script>
  export default {
    name: 'EnPage',
    data () {
      return {
        api_key: 'fc094fcde258dbe1ecb05d23f7517596',
        url_base: 'https://api.openweathermap.org/data/2.5/weather?',
        query: '',
        weather: {},
        err: '',
      }
    },
    methods: {
      fetchWeather (e) {
        if (e.key == "Enter") {
          // Using regex for validation
          if (/^[a-zA-Z0-9]+$/.test(this.query)){
            fetch(`${this.url_base}q=${this.query}&appid=${this.api_key}`)
            .then(res => {
              return res.json();
            }).then(this.setResults);
          }else{
            this.err = 'Please enter english only!'
          }
        }
      },
      setResults (results) {
        if(results.cod != 200){
          this.err = `Please check again, ${results.message}!`
        }else{
          this.weather = results;

          if(document.querySelector('.weather-container') != null) document.querySelector('.weather-container').style.display = 'flex'

          if(this.err != '') this.err = ''
        }
      },
      dateBuilder () {
        let d = new Date();
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
        return `${day}, ${date} ${month} ${year}`;
      },
      close() {
        if(document.querySelector('.weather-container') != null) document.querySelector('.weather-container').style.display = 'none'
      },
    }
  }
</script>