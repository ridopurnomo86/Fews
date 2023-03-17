<template>
  <ClientOnly>
    <TransitionFade :delay="200" :duration="600" :appear="true">
      <div class="min-h-[100vh] flex">
        <SignupForm />
        <Background />
      </div>
    </TransitionFade>
  </ClientOnly>
</template>

<script setup lang="ts">
import SignupForm from './Form/index.vue';
import Background from './Background/index.vue';
</script>
