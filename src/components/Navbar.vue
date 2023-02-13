<template>
  <div class="navbar">
    <div class="navbar-container">
      <router-link to="/">
        <div class="navbar-logo">
          <img src="../assets/logo.png" />
        </div>
      </router-link>

      <router-link to="/">
        <div class="navbar-btn">
          <div class="navbar-btn-text">
            Home
            <div class="underline"></div>
          </div>
        </div>
      </router-link>

      <router-link to="/guide">
        <div class="navbar-btn">
          <div class="navbar-btn-text">
            Guide
            <div class="underline"></div>
          </div>
        </div>
      </router-link>

      <router-link to="/about">
        <div class="navbar-btn">
          <div class="navbar-btn-text">
            About me
            <div class="underline"></div>
          </div>
        </div>
      </router-link>

      <div class="navbar-line"><div></div></div>

      <router-link to="/en">
        <div class="navbar-btn">
          <div class="navbar-btn-text">
            English
            <div class="underline"></div>
          </div>
        </div>
      </router-link>
  
      <router-link to="/jp">
        <div class="navbar-btn" style="margin-bottom: 5rem;">
          <div class="navbar-btn-text">
            Japanese
            <div class="underline"></div>
          </div>
        </div>
      </router-link>

      <div class="navbar-inf">
        © 2023 Jake. All rights reserved.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style>
  a{
    text-decoration: none;
    color: white;
    font-weight: 700;
    transition: var(--transition);
  }

  .navbar{
    width: 300px;
    height: 100%;
    /* border: 1px solid white; */
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
  }
  .navbar-container{
    width: 100%;
  }
  .navbar-line{
    width: 100%;
    height: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2.5rem;
  }
  .navbar-line div{
    width: 60%;
    height: 100%;
    background: white;
  }
  .navbar-logo{
    width: 100%;
    margin-bottom: 5rem;
    display: flex;
    justify-content: center;
  }
  .navbar-logo img{
    width: 100px;
    height: 100px;
  }
  .navbar-btn{
    font-size: 20px;
    margin-bottom: 2.5rem;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }
  .navbar-btn:hover{
    cursor: pointer;
  }
  .navbar-btn:hover .underline{
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  .navbar-btn-text{
    position: relative;
  }
  .navbar-inf{
    color: rgba(255, 255, 255, 0.4);
    font-size: 12px;
    text-align: center;
  }
  .underline {
    position: absolute;
    bottom: 0;
    left: -5px;
    width: calc(100% + 10px);
    height: 2px;
    background: white;
    border-radius: 100rem;
    transition: transform 0.3s ease-in-out;
    transform: scaleX(0);
    transform-origin: bottom right;
  }
</style>
