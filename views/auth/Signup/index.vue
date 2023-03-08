<template>
  <TransitionFade :delay="200" :duration="600" :appear="true">
    <div class="h-screen">
      <div class="flex h-full">
        <SignupForm />
        <Background />
      </div>
    </div>
  </TransitionFade>
</template>

<script setup lang="ts">
import SignupForm from './Form/index.vue';
import Background from './Background/index.vue';
</script>
