<script setup>
import { RouterLink } from "vue-router";
import TheHeader2 from '../components/TheHeader2.vue';
</script>

<template>
    <TheHeader2></TheHeader2>
    <img src="@/assets/img/404Futur.jpg" alt="Image d'une page erreur 404">
    <h1>Impossible d'afficher cette page</h1>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap');
*{
    margin: auto;
}
h1 {
    width: fit-content;
    margin: auto;
    margin-top: 1rem;
    font-size: 4rem;
    color: rgb(255, 94, 0); 
    font-family: "Urbanist", sans-serif;
    margin-bottom: 100px;    
}
img {
    display: block;
    margin-top: 120px;
    margin-bottom: 2rem;
    border-radius: 25px;
    width: 1000px;
    height: 700px;
    border: 3px solid rgb(255, 94, 0);
}
a {
    display: block;
    width: fit-content;
    text-decoration: none;
    padding: .5rem;
    background-color: rgb(221, 35, 187);
    color: #010326;
    border-radius: 8px;
    font-family: "Urbanist", sans-serif;
}
</style>