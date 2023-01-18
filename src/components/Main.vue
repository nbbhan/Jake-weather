<template>
    <div class="main">
        <div class="main-container">
            <div style="text-align: center; transform: translateY(-5%);">
                <img class="main-img" src="../assets/logo.png" />

                <div class="main-welcome">
                    Welcome to the Jake weather.<br />Now, choose your language!
                </div>

                <div style="display: flex; justify-content: space-between;">
                    <router-link to="/en">
                        <div class="main-btn">
                            English
                        </div>
                    </router-link>
    
                    <router-link to="/jp">
                        <div class="main-btn">
                            Japanese
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Main',
}
</script>

<style>
    .main{
        flex: 1;
        height: 100%;
        padding: 15px 15px 15px 0;
    }
    .main-container{
        width: 100%;
        height: 100%;
        background: url(../assets/background.jpg) center/cover no-repeat;
        border-radius: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .main-img{
        width: 300px;
        margin-bottom: 5rem;
    }
    .main-img img{
        width: 100%;
        object-fit: cover;
    }
    .main-welcome{
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 5rem;
        color: white;
    }
    .main-btn{
        width: 150px;
        height: 70px;
        border-radius: 15px;
        border-bottom: 5px solid #994419;
        border-right: 4px solid #994419;
        background: #f17233;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: var(--transition);
    }
    .main-btn:hover{
        transform: translate(2px, 3px);
        border-bottom: 0px solid #994419;
        border-right: 0px solid #994419;
    }
</style>