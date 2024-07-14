<script setup>
    import { ref }  from 'vue'
    import { onClickOutside } from '@vueuse/core'
    import { RouterLink } from "vue-router";

    const props = defineProps({
        isOpen: Boolean,
        currentProject: Object,
    });
    const emit = defineEmits(["modal-close"]);
    const target = ref(null)
    onClickOutside(target, () => emit('modal-close'))


</script>

<template>
    <div v-if="isOpen" class="modal-mask">
    <div class="modal-wrapper">
        <div class="modal-container" ref="target">
            <div class="modal-body">
                <slot name="content">
                    <img :src="`./src/assets/img/${currentProject.image}.jpg`" :alt="`${currentProject.image}`" id="img-modal">
                    <div class="texte1">
                        <div class="modal-header">
                            <slot name="header"> {{ currentProject.nom }} </slot>
                        </div>
                        <div class="description">
                            <p v-if="currentProject.contenu">{{ currentProject.contenu }}</p>
                        </div>
                            <div class="align-logo">
                                <div class={{currentProject.classe}}>
                                    <div class="logo">
                                        <img :src="`./src/assets/img/logo/${currentProject.logo1}.png`" :alt="`${currentProject.logo1}`" id="LogoModal1">
                                        <img :src="`./src/assets/img/logo/${currentProject.logo2}.png`" :alt="`${currentProject.logo1}`" id="LogoModal2">
                                    </div>
                                </div>
                            </div>
                        <div class="link">
                            <RouterLink to="/Cv">{{ currentProject.root }}</RouterLink>
                            <a :href="`${currentProject.lien}`" target="_blank" >{{ currentProject.namelink }}</a>
                        </div>
                        <div class="date1">
                            <p>Période : {{ currentProject.date }}</p>
                        </div>
                    </div>
                </slot>
            </div>
            <div class="modal-footer">
                <slot name="footer">
                    <button onclick="emit('modal-close')">
                        <p>Fermer</p>
                    </button>
                </slot>
            </div>
        </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap');


.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 25px;
}

.modal-container {
    display: flex;
    margin: 90px 20px;
    font-family: "Urbanist", sans-serif;
    text-align: center;
    border-radius: 25px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.49);
    border-radius: 25px;
}
.modal-body {
    display: flex;
}

.modal-body p{
    display: flex;
    font-weight: 600;
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
    flex-direction: column;
    font-size: 30px;
}

.description {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 50px;
    margin: 3rem 3rem;
    flex-direction: column;
}

.date1 {
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.modal-header{
    display: flex;
    margin-top: 70px;
    color:transparent;
    font-size: 50px;
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
    flex-direction: column;
    width: 900px;
}
#img-modal{
    border-radius: 8px;
    width: 690px;
    height: 700px;
    margin-bottom: 5px;
    margin-top: 70px;
    margin-left: 19%;
}

button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .5rem;
    border-radius: 15px;
    margin-top: 70px;
    margin-left: 350px;
    margin-right: 300px;
    background-color: rgb(15, 5, 39);
    border: 3px solid rgb(255, 94, 0);
    height: 70px;
}
button:hover{
    background-color: transparent;
    box-shadow: 0px 0px 8px 8px rgba(246, 246, 246, 0.923);
    cursor: pointer;
}
button p {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color:transparent;
    font-size: 30px;
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
#LogoModal1{
    background-color: aliceblue;
    width: 60px;
    margin-left: 380px;
    border-radius: 8px;
    max-width: 60px;
}
#LogoModal2{
    background-color: aliceblue;
    width: 60px;
    max-width: 60px;
    margin-left: 10px;
    border-radius: 8px;
}
.logo{
    display: flex;
    width: 60px;
    height: 60px;
    margin-top: -50px;
    margin-bottom: 80px;
}

.link {
    display: flex;
    margin-left: 360px;
    margin-right: 360px;
    cursor: pointer;
    padding: 0.8em;
    background-color: rgb(15, 5, 39);
    border-radius: 8px;
    font-size: 1.2em;
    transition: 0.4s;
    font-family: "Urbanist", sans-serif;
    border: 3px solid rgb(255, 94, 0);
}

.link:hover {
  background-color: transparent;
  box-shadow: 0px 0px 8px 8px rgba(246, 246, 246, 0.923);
}

.link a{
    display: flex;
    text-decoration: none;
    color:transparent;
    font-size: 30px;
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
.fantom {
    visibility: hidden;

}
</style>