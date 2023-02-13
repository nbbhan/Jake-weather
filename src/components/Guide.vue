<template>
    <div id="guide">
        <main>
            <div class="container">
                <div class="break">
                    <router-link to="/">Home</router-link> > Guide
                </div>

                <div class="title">GUIDE</div>

                <div class="line"></div>

                <div class="contents">
                    <div class="items">
                        <div class="items-title">English version</div>

                        <div class="item">
                            ・Click the English button.
                        </div>
                        
                        <div class="item">
                            <img src="../assets/eng.png" alt="">
                        </div>

                        <div class="item">
                            ・Enter "City, St" or Zip code (alphabet only).
                        </div>

                        <div class="item">
                            <img src="../assets/eng1.png" alt="">
                        </div>
                    </div>

                    <div class="items" style="margin-bottom: 0; font-family: var(--zen-font);">
                        <div class="items-title">日本語版</div>

                        <div class="item">
                            ・「<span style="font-family: var(--font-family);">Japanese</span>」ボタンをクリックします。
                        </div>
                        
                        <div class="item">
                            <img src="../assets/jp.png" alt="">
                        </div>

                        <div class="item">
                            ・地名、施設名、郵便番号を入力し、「<span style="font-family: var(--font-family);">Enter</span>」キーを押します。※日本語のみ
                        </div>

                        <div class="item" style="margin-bottom: 0;">
                            <img src="../assets/jp1.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
  export default {
    name: 'Guide',
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

        overflow: hidden;
    }

    .container{
        width: 100%;
        height: 100%;
        padding: 60px;
        overflow-y: scroll; 
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
        /* border: 1px solid red; */
        /* min-height: 500px; */
    }

    .items-title{
        margin-bottom: 1rem;
        font-size: 20px;
        font-weight: 700;
        text-decoration: underline;
    }

    .items{
        margin-bottom: 5rem;
    }

    .item{
        width: 100%;
        margin-bottom: 1rem;
    }

    .item img{
        width: 50%;
        object-fit: cover;
        border-radius: 5px;
    }
</style>