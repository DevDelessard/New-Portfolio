<template>
  <div class="foot">
    <div class="block1">
      <div class="titre4">My Links</div>
        <a href="https://www.facebook.com/charles.delessard/" target="_blank">
          <img src="@/assets/img/logo/facebook.png" alt="Logo de Facebook">
        </a>
        <a href="https://github.com/DevDelessard/Portfolio.git" target="_blank">
          <img src="@/assets/img/logo/github.png" alt="Logo de Github">
        </a>
        <a href="https://www.linkedin.com/in/charles-delessard-b16957137?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B4L3EvJP0Q0yYw%2ByfLb5nOA%3D%3D" target="_blank">
          <img src="@/assets/img/logo/linkedin.png" alt="Logo de LinkedIn">
        </a>
    </div>
    <div class="date">
      Mis à jour le
        <time datetime="2024-07-13"> 13/07/2024</time>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap');
.titre4{
  display: flex;
  justify-content: center;
  color:transparent;
  font-size: 30px;
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
  margin-bottom: 4px;
}
.foot {
  padding: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;

}
.block1 {
  padding: 10PX;
  border-radius: 1rem;
  background-color: rgb(15, 5, 39);
  border: 3px solid rgb(255, 94, 0);
}
.foot a img {
  border-radius: 50%;
  margin: auto 5px;
  height: 60px;
  width: 60px;
  border: 2px solid rgb(255, 255, 255);
}
.foot a:hover img{
  box-shadow: 0 0 3px 3px rgb(255, 254, 255)
}
.date {
  color:transparent;
  font-size: 15px;
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
</style>