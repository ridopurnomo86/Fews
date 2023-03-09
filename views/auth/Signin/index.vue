<template>
  <ClientOnly>
    <TransitionFade :delay="200" :duration="600" :appear="true">
      <div class="h-screen">
        <div class="flex h-full">
          <SigninForm />
          <Background />
        </div>
      </div>
    </TransitionFade>
  </ClientOnly>
</template>

<script setup lang="ts">
import SigninForm from './Form/index.vue';
import Background from './Background/index.vue';
</script>
