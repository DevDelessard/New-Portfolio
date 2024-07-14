<script setup>
    import {ref} from 'vue';
    import { RouterLink } from "vue-router";
    
    const show = ref(true);
</script>

<template>
    <header>
        <a href="#main">
            <img class="photo" src="@/assets/img/AWS.jpg" alt="Logo de la page">
        </a>
        <h1>PORTFOLIO</h1>
        <a href="#" @click="toggle" class="toggle-button">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </a>
        <nav>
            <ul v-if="show">
                <li>
                    <RouterLink to="/">Retour</RouterLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap');
header{
    display: flex;
    object-position: top;
    top: 0;
    left: 0;
    right: 0;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 95%;
    background-color: rgb(15, 5, 39);
    opacity: 100%;
    border-bottom: 1px solid black;
    border-radius: 25px;
    margin-top: 1.75%;
    height: 70px;
    overflow: visible;
    z-index: 1;
    background-position: center;
    background-size: 100%;
    object-fit: cover;
    opacity: 99%;
    border: 3px solid rgb(255, 94, 0);
    margin-left: 60px;

}
h1{
    width: fit-content;
    margin: auto;
    color:transparent;
    font-size: 45px;
    font-family: "Urbanist", sans-serif;
    font-weight: 700;
    background-image: linear-gradient(
          to right,
           #87623c 0,
           #cb9b51 22%, 
           #f6e27a 45%,
           #f6f2c0 50%,
           #f6e27a 55%,
           #cb9b51 78%,
           #87623c 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
}
a:hover{
    text-shadow:0px 0px 3px rgb(255, 255, 255);
}
.router-link-active{
    text-decoration: underline; 
    text-underline-offset: 8px;
}
.photo{
    display: flex;
    width: 120px;
    height: 120px;
    margin-left: -10px;
    border-radius: 50%;
    box-shadow: 0 0 15px rgba(158, 40, 253, 0.857);
    border-color: #ff6200;
    border: 3px solid rgb(255, 94, 0);
    
}
.photo:hover {
    box-shadow: 0 0 3px 3px rgb(255, 254, 255);
}
header ul{
    display: flex;
    margin:0;
    padding:0;
    list-style-type: none;
}
header ul li a {
    padding: 1rem;
    display: block;
    color:transparent;
    text-decoration: none;
    font-size: 32px;
    font-family: "Urbanist", sans-serif;
    font-weight: 700;
    background-image: linear-gradient(
          to right,
           #87623c 0,
           #cb9b51 7%, 
           #f6e27a 45%,
           #f6f2c0 50%,
           #f6e27a 55%,
           #cb9b51 78%,
           #87623c 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
}
.toggle-button{
    position: absolute;
    display: none;
    top:.75rem;
    right: 1rem;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 20px;
}
.toggle-button .bar{
    height: 3px;
    width: 100%;
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
}
</style>