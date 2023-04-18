<template>
  <ClientOnly>
    <TransitionFade :delay="200" :duration="600" :appear="true">
      <div class="h-screen">
        <div class="flex h-full">
          <Form />
          <Background />
        </div>
      </div>
    </TransitionFade>
  </ClientOnly>
</template>

<script setup lang="ts">
import Form from './Form/index.vue';
import Background from './Background/index.vue';
</script>
