<template>
  <TransitionFade :delay="200" :duration="600" :appear="true">
    <div class="h-screen">
      <div class="flex h-full">
        <FormSignUp />
        <Background />
      </div>
    </div>
  </TransitionFade>
</template>

<script setup lang="ts">
import FormSignUp from './Form/index.vue';
import Background from './Background/index.vue';
</script>
