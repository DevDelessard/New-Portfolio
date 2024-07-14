<script setup>
import { RouterLink } from "vue-router";
import TheHeader2 from '../components/TheHeader2.vue';
import CvZoom from '@/components/CvZoom.vue'; 
import TheFooter from "@/components/TheFooter.vue";
</script>

<template>
    <div class="view1">
        <TheHeader2></TheHeader2>
        <div class="new">
            <CvZoom></CvZoom>
        </div>
        <TheFooter/>
    </div>
</template>

<style>
.view1 {
    max-height: 1800px;
}

</style>