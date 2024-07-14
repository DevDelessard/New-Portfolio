<script setup>
import emailjs from '@emailjs/browser';
const resetFormInput = () => {
          document.querySelector("#user_name").value = "";
          document.querySelector("#user_email").value = "";
          document.querySelector("#message").value = "";
          document.querySelector("#user_email").value = "";
    };
function sendEmail() {
    (() => {
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    })();
    const params = {
        to_name: "Charles",
        name: document.querySelector("#user_name").value,
        email: document.querySelector("#user_email").value,
        message: document.querySelector("#message").value,
        reply_to: document.querySelector("#user_email").value
    }
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICEID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATEID;
    emailjs.send(serviceID, templateID, params)
    .then( res => {
        resetFormInput();
        alert("L'e-mail a été envoyé avec succès");
    },
  )
  .catch();
}
</script>

<template>
  <div class="formulaire1" id="formulaire1">
    <p>
      <br>
      <br>
      <br>
    </p>
    <section class="contact">
      <div class="types">
        <h1>Contactez-moi</h1>
        <form @submit.prevent="sendEmail()" id="contact-form">
          <!--Nom-->
          <div class="boxlabel">
          <label for="user_name">Nom :</label>
          </div>
          <input
          type="text"
          id="user_name"
          name="user_name"
          placeholder="Votre nom..."
          required
          >
          <!--Email-->
          <div class="boxlabel">
          <label for="user_email">Email :</label>
          </div>
          <input
          type="email"
          id="user_email"
          name="user_email"
          placeholder="example@gmail.com"
          required
          >
          <!--Message-->
          <div class="boxlabel">
            <label for="message">Message :</label>
          </div>
          <textarea
          name="message"
          id="message"
          placeholder="Votre message..."
          required
          ></textarea>
          <!--Bouton submit-->
          <button type="submit" class="submit-btn">
            <h4>Envoyer</h4>
          </button>
        </form>
      </div>
    </section>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap');
.formulaire1 {
  font-family: sans-serif
}
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
}
.contact{
  display: flex;
  padding: 2em;
  justify-content: center;
}
.types {
  background-image: url('@/assets/img/Carré.jpg');
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 25px;
  background-size: cover;
  border: 3px solid rgb(255, 94, 0);
  padding: 2.5em;
  border-radius: 25px;
  box-shadow: 0 0 2em rgba(0, 0, 0, 0.3);
}

.contact h1{
  color:transparent;
    font-size: 60px;
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
    margin-bottom: 60px;
    margin-top: -20px;
}
.contact p {
max-width: 400px;
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
.contact form {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
}
.contact input,
.contact textarea {
  border: none;
  padding: 0.8em;
  width: 100%;
  border-radius: 5px;
  margin: 0.5em 0 1em 0;
  font-size: 1.1em;
  background: #c7c7c7dd;
  color: #181717;
  font-weight: 600;
  font-family: "Urbanist", sans-serif;
}
.contact label {
  display: flex;
  color:transparent;
    font-size: 20px;
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
    justify-content: center;
}
.boxlabel{
  border: none;
  width: 23%;
  background-color: rgb(15, 5, 39);
  border-radius: 8px;
  font-size: 1.2em;
  transition: 0.4s;
  font-family: "Urbanist", sans-serif;
}
.contact textarea {
  resize: none;
  height: 8em;
  font-family: "Urbanist", sans-serif;
}
.contact input:focus,
.contact textarea:focus {
  outline: none;
}
.contact input::placeholder,
.contact textarea::placeholder {
  color: #fdfdfd;
  font-weight: 300;
}
.contact button {
  border: none;
  cursor: pointer;
  width: 100%;
  padding: 0.8em;
  background-color: rgb(15, 5, 39);
  border-radius: 8px;
  font-size: 1.2em;
  transition: 0.4s;
  font-family: "Urbanist", sans-serif;
  border: 3px solid rgb(255, 94, 0);
}
.contact button h4{
  color: transparent;
    font-size: 20px;
    font-family: "Urbanist", sans-serif;
    font-weight: 700;
    background-image: linear-gradient(
          to right,
           #462523 0,
           #cb9b51 22%, 
           #f6e27a 45%,
           #f6f2c0 50%,
           #f6e27a 55%,
           #cb9b51 78%,
           #462523 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
}
.contact button:hover {
  background-color: transparent;
  box-shadow: 0px 0px 4px 4px rgba(246, 246, 246, 0.923);
}
@media screen and (max-width: 500px) {
  .contact{
    font-size: 14px;
  }
}
</style>