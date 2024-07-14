<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <main id="main">
    <RouterView />
  </main>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Open+Sans&display=swap');
body {
  background-color: #33268b;
  background-image: url('@/assets/img/futur.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  opacity: 99%;
}
h2 {
  width: fit-content;
  margin: auto;
  margin-top: 100px;
  margin-bottom: 20px;
}
</style>
