<template>
  <TransitionFade :delay="200" :duration="600" :appear="true">
    <div>
      <Hero />
      <div class="mx-auto container mb-20">
        <Benefit />
        <TypeProduct />
        <NewArrival />
        <Info />
        <Subscribe />
      </div>
    </div>
  </TransitionFade>
</template>

<script setup lang="ts">
import Hero from './Hero/index.vue';
import TypeProduct from './TypeProduct/index.vue';
import NewArrival from './NewArrival/index.vue';
import Benefit from './Benefit/index.vue';
import Subscribe from './Subscribe/index.vue';
import Info from './Info/index.vue';
</script>
