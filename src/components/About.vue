<template>
    <div id="about">
        <main>
            <div class="container">
                <div class="break">
                    <router-link to="/">Home</router-link> > About
                </div>

                <div class="title">ABOUT</div>

                <div class="line"></div>

                <div class="contents">
                    <div class="items">
                        <div class="item">
                            <img src="../assets/logo.png" alt="">
                        </div>

                        <div class="item">
                            The Jake Weather
                        </div>

                        <div class="item">
                            Published by The PSC-Jake Inc
                        </div>

                        <div class="item">
                            Copyright © 2023 by Jake
                        </div>

                        <div class="item">
                            All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
  export default {
    name: 'About',
  }
</script>

<style scoped>
    a{
        text-decoration: none;
        color: rgb(80, 80, 80, .5);
        font-weight: 700;
        transition: var(--transition);
    }

    a:hover{
        color: black;
    }

    main{
        width: 100%;
        height: 100%;
        /* background: url(./assets/background.jpg) center/cover no-repeat; */
        background: white;
        border-radius: 15px;
        position: relative;

        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
    }

    .container{
        width: 100%;
        height: 100%;
        padding: 60px;
    }

    .break{
        font-size: 12px;
        font-weight: 700;
        color: rgb(80, 80, 80, .5);
        margin-bottom: 5rem;
    }

    .title{
        font-size: 60px;
        font-weight: 900;
        color: #f17233;
        margin-bottom: 5rem;
        text-shadow: 5px 5px rgb(210, 210, 210);
    }

    .line{
        width: 100%;
        height: 2px;
        background: rgb(210, 210, 210, .5);
        border-radius: 100rem;
        margin-bottom: 5rem;
    }

    .contents{
        /* border: 1px solid red;
        min-height: 500px; */
        font-size: 20px;
        font-weight: 500;
        text-align: center;
    }

    .item{
        width: 100%;
    }

    .item img{
        width: 10%;
        object-fit: cover;
    }
</style>