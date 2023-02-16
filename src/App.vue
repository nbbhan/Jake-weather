<template>
  <Navbar />

  <router-view />
</template>

<script>
  import Navbar from './components/Navbar.vue';
  export default {
    name: 'app',
    components: {
      Navbar,
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;500;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@300;400;500;700;900&display=swap');

  :root{
    --text-color: #161823;
    --font-family: 'Comfortaa', cursive;
    --zen-font: 'Zen Maru Gothic', sans-serif;
    --transition: all .1s ease-in;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    background: #21987a;
  }

  body {
    font-family: var(--font-family);
    font-size: 1.6rem;
    line-height: 1.5;
    text-rendering: optimizespeed;
    color: var(--text-color);
  }

  #app{
    width: 100%;
    height: 100vh;
    display: flex;
  }

  #en, #jp, #guide, #about{
    flex: 1;
    height: 100%;
    padding: 15px 15px 15px 0;
    position: relative;
  }

  main{
    width: 100%;
    height: 100%;
    background: url(./assets/background.jpg) center/cover no-repeat;
    border-radius: 15px;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .date{
    position: absolute;
    top: 0;
    right: 0;
    color: white;
    /* border: 1px solid white; */
    border-radius: 15px;
    padding: 10px;
  }

  .search-box{
    text-align: center;
  }

  .search-error{
    color: #fd5a7a;
  }

  .search-bar {
    display: block;
    width: 450px;
    padding: 1rem 1.5rem 1rem 1.5rem;
    margin: 0 auto;
      
    color: var(--text-color);
    font-size: 20px;
    appearance: none;
    border:none;
    outline: none;
    background: none;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
    background-color: rgba(255, 255, 255, .5);
    border-radius: 10px;
    transition: 0.4s;
    font-family: var(--font-family);

    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: 1;
  }

  @keyframes buzz {
    10% {
      transform: translateX(3px) rotate(2deg);
    }
    20% {
      transform: translateX(-3px) rotate(-2deg);
    }
    30% {
      transform: translateX(3px) rotate(2deg);
    }
    40% {
      transform: translateX(-3px) rotate(-2deg);
    }
    50% {
      transform: translateX(2px) rotate(1deg);
    }
    60% {
      transform: translateX(-2px) rotate(-1deg);
    }
    70% {
      transform: translateX(2px) rotate(1deg);
    }
    80% {
      transform: translateX(-2px) rotate(-1deg);
    }
    90% {
      transform: translateX(1px) rotate(0);
    }
    100% {
      transform: translateX(-1px) rotate(0);
    }
  }

  .search-bar:focus {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
    background-color: rgba(255, 255, 255);
  }

  .search-bar::placeholder{
    color: rgba(0, 0, 0, 0.3);
  }

  .search-welcome{
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 2rem;
    color: white;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .weather-container{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    display: none;
    justify-content: center;
    align-items: center;
    background: rgb(80, 80, 80, .4);
  }

  .weather-wrap{
    width: 450px;
    height: 600px;
    color: white;
    font-size: 20px;
    border-radius: 15px;
    box-shadow: 0px 0px 7px 7px rgb(70, 70, 70, .5);
    padding: 1rem;
    position: relative;
  }

  .weather-close{
    position: absolute;
    top: 0;
    right: 0;
    width: 30px;
    height: 30px;
    border-radius: 100rem;
    background: white;
    transform: translate(10px, -10px);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .weather-close img{
    width: 10px;
    height: 10px;
    transition: var(--transition);
  }

  .weather-close:hover{
    cursor: pointer;
  }

  .weather-close:hover img{
    transform: scale(1.2);
  }

  .warm{
    background: url(./assets/warm-bg.jpg) center/cover no-repeat;
  }

  .cold{
    background: url(./assets/cold-bg.jpg) center/cover no-repeat;
  }
</style>
