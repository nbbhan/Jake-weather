<template>
  <div id="jp">
    <main>
      <div>
        <div class="search-welcome">地名・施設名・郵便番号を入力してください</div>

        <div class="search-box">
          <div class="search-error">{{ err }}</div>

          <input 
            type="text" 
            class="search-bar" 
            placeholder="検索..."
            v-model="query"
            @keypress="fetchWeather"
          />
        </div>
    
        <div class="weather-container" v-if="typeof weather.main != 'undefined'">
          <div v-bind:class="typeof weather.main != 'undefined' && weather.main.temp > 289 ? 'weather-wrap warm' : 'weather-wrap cold'">
            <div class="location-box">
              <div class="location">{{ weather.name }}、{{ weather.sys.country }}</div>
            </div> 
      
            <div class="weather-box">
              <div class="temp">{{ Math.round(weather.main.temp - 273.15) }}°C</div>
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
        err: ''
      }
    },
    methods: {
      fetchWeather (e) {
        if (e.key == "Enter") {

          // Using regex for validation
          // eslint-disable-next-line
          if (/[一-龠]+|[ぁ-ゔ]+|[ァ-ヴー]+|[ａ-ｚＡ-Ｚ０-９]+|[々〆〤ヶ]+/u.test(this.query) || /^[0-9!@#\$%\^\&*\)\(+=._-]+$/g.test(this.query)){
            fetch(`${this.url_base}q=${this.query}&appid=${this.api_key}`)
              .then(res => {
                return res.json();
              }).then(this.setResults)
          }else{
            this.err = '※日本語を入力してください。'
          }
        }
      },
      setResults (results) {
        if(results.cod != 200){
          this.err = `※見つかりません。もう一度確認してください。`
        }else{
          this.weather = results;

          if(document.querySelector('.weather-container') != null) document.querySelector('.weather-container').style.display = 'flex'

          if(this.err != '') this.err = ''
        }
      },
      dateBuilder () {
        let d = new Date();
        let months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
        let days = ["日", "月", "火", "水", "木", "金", "土"];
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
        return `${year}年${month}月${date}日 (${day})`;
      },
      close() {
        document.querySelector('.weather-container').style.display = 'none'
      }
    }
  }
</script>

<style scoped>
  #jp, .search-bar{
    font-family: var(--zen-font) !important;
  }

  .search-error{
    
  }
</style>