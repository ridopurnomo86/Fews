<template>
  <TransitionFade :delay="200" :duration="600" :appear="true">
    <div class="mx-auto container mb-20">
      <Hero />
      <TypeProduct />
      <NewArrival />
    </div>
  </TransitionFade>
</template>

<script setup>
import Hero from "./Hero/index.vue";
import TypeProduct from "./TypeProduct/index.vue";
import NewArrival from "./NewArrival/index.vue";
</script>
