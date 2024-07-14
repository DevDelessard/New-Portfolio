<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
    <div id="my_presentation">
        <br>
        <div id="Content1">
            <img id="photo_de_profil" src="@/assets/img/Montagne.jpg" alt="Photo de Charles DELESSARD">
            <h1>
                Charles DELESSARD 
            </h1>
            <h2>
                Developpeur Web Junior
            </h2>
        <div class="text1">
            Je suis un développeur web junior passionné par la création de sites web et d'applications web dynamiques et performantes. 
            <br>
            Avec mes 31 ans et ma formation de developpeur Web du centre européen de formation, j'ai acquis une solide base de compétences en langages web et outils de développement. 
            <br>
            J'apprend rapidement et je suis toujours à l'affût des nouvelles technologies.
        </div>
    </div>
</div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap');
h1 {
    display: flex;
    justify-content: center;
    margin-bottom: -3rem;
    color:transparent;
    font-size: 40px;
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
h2{
    display: flex;
    justify-content: center;
    color:transparent;
    font-size: 40px;
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
#photo_de_profil {
    display: block;
    width: 15%;
    margin: 4rem auto;
    border-radius: 50%;
    box-shadow: 0 0 15px rgba(158, 40, 253, 0.857);
    border: 3px solid rgb(255, 94, 0);
}
.text1 {
    display: flex;
    justify-content: center;
    width: 90%;
    margin: 3rem 3rem;
    font-family: "Urbanist", sans-serif;
    font-size: 1.5rem;
    color: transparent;
    background-image: linear-gradient(
          to right,
            #6a6a6a 1%,
           #868686 19%, 
           #9f9f9fde 40%,
           #d9d6ffad 50%,
           #9f9f9fd7 60%,
           #6a6a6a 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
}
#Content1 {
    background-color: rgba(15, 5, 39, 0.998);
    opacity: 100%;
    border-radius: 25px; 
    width: 50%;
    margin: 150px auto;
    border: 3px solid rgb(255, 94, 0);
    transition: 0.3s;
}
#Content1:hover{
    box-shadow: 0px 0px 4px 4px rgba(255, 254, 255);
}
</style>