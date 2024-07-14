<script setup>
    import { ref } from 'vue'
    import MyModal from '../components/modals/MyModal.vue'

    const windows = ref([
        {
            id: 1,
            nom: "Mon CV",
            date: "06/07/24",
            contenu: "Mon Cv qui resume mon experience et mes compétences élaboré avec Html et Css",
            image: "creation-1",
            logo1: "HTML",
            logo2: "CSS",
            lien: "",
            namelink:"",
            root: "Ouvrir le CV",
            Class: "visible"
        },
        {
            id: 2,
            nom: "Espace de commentaire dynamique",
            date: "20/05/24",
            contenu: "Un espace de commentaire dynamique avec un code lisible, organisé et logique, correctement programmé et sans erreurs. Elaboré avec Html et Javascript",
            image: "creation-2",
            logo1: "HTML",
            logo2: "Javascript",
            lien: "https://github.com/DevDelessard/Dynamiser-espace-commentaire.git",
            namelink:"Acceder aux fichiers",
            root: "",
            Class: "visible"
        },
        {
            id: 3,
            nom: "Cahier des charges",
            date: "19/04/24",
            contenu: "Rédaction d'un cahier des charges pour l'entreprise LA SOCKETTERIE afin de créer un site Web qui permette d'achetter facilement ses produits, avec une zone d'avis et une partie back office pour la gestion de ses stocks.",
            image: "creation-3",
            logo1: "",
            logo2: "",
            lien: "https://drive.google.com/file/d/1fjFZHAZ69OGBNpf8NGHtL8UQbXkLEIS5/view?usp=drive_link",
            namelink:"Voir le PDF",
            root: "",
            Class: "fantom"
        }
    ])
    const selectedProject = ref({});
    const isModalOpened = ref(false);

    const openModal = (creation) => {
        selectedProject.value = creation;
        isModalOpened.value = true;
    };
    const closeModal = () => {
        isModalOpened.value = false;
    };
</script>

<template>
    <div id="my_windows">
            <h1>MES REALISATIONS</h1>
        <div id="column">
            <section v-for="creation in windows" :key="creation.id" class="ensemble1">
                <div class="BoxT">
                    <h3>{{ creation.nom }}</h3>
                </div>
                <button @click="openModal(creation)">
                    <img :src="`./src/assets/img/${creation.image}.jpg`" :alt="`${creation.image}`">
                </button>
                <MyModal :currentProject="selectedProject" :isOpen="isModalOpened" @modal-close="closeModal" name="first-modal" id="Modal1">
                    <template #header></template>
                    <template #content></template>
                    <template #link></template>
                    <template #footer></template>
                </MyModal>
            </section>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap');
div {
    margin-bottom: 2rem;
}
.BoxT {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    height: auto;
    font-family: "Urbanist", sans-serif;
}
.BoxT h3 {
    display: flex;
    color:transparent;
    font-size: 30px;
    font-family: "Urbanist", sans-serif;
    font-weight: 700;
    background-image: linear-gradient(
          to right,
           #976c41 0,
           #cb9b51 7%, 
           #f6e27a 45%,
           #f6f2c0 50%,
           #f6e27a 55%,
           #e4ac58 78%,
           #e39a1c 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
    margin-bottom: 0px;
    margin-top: 10px;
    justify-content: center;
    align-items: center;
    position: absolute;
}
.ensemble1 {
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    margin-right: 30px;
}
button {
    display: flex ;
    margin: auto;
    margin-top: 30px;
    border-radius: 8px;
    border: none;
    transition: 0.3s;
    background-color: transparent;

}
img:hover{
    box-shadow: 0px 0px 4px 4px rgb(255, 254, 255);
}
img {
    display: flex;
    width: 350px;
    height: 500px;
    border-radius: 8px;
    border: 3px solid rgb(255, 94, 0);
}
#column {
    display: flex;
    opacity: 99%;
}
h1{
    display: flex;
    justify-content: center;
    color:transparent;
    font-size: 60px;
    font-family: "Urbanist", sans-serif;
    font-weight: 700;
    background-image: linear-gradient(
          to right,
           #87623c  0,
           #cb9b51 22%, 
           #f6e27a 45%,
           #f6f2c0 50%,
           #f6e27a 55%,
           #cb9b51 78%,
           #87623c  100%
    );
    -webkit-background-clip: text;
    background-clip: text;
}
#my_windows {
    display: flex;
    width: 60%;
    flex-direction: column;
    align-items: center;
    margin: 50px auto;
    max-width: 100%;
    max-height: 100%;
    margin-top: -100px;
}
@media only screen and (max-width: 1800px) {
  body {
    font-size: 12px;
  }
}
@media only screen and (min-width: 450px) {
  body {
    font-size: 12px;
  }
}
</style>