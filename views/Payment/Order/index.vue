<template>
  <TransitionFade :delay="200" :duration="600" :appear="true">
    <div class="relative mx-auto container overflow-x-auto rounded w-full">
      <Stepper />
      <OrderList />
    </div>
  </TransitionFade>
</template>

<script setup lang="ts">
import Stepper from './Stepper/index.vue';
import OrderList from './OrderList/index.vue';
</script>
