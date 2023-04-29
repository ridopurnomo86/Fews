<template>
  <TransitionFade :delay="200" :duration="600" :appear="true">
    <div class="mx-auto container py-10">
      <h1 class="text-2xl font-bold text-black mb-4 pb-4 border-b-[1px]">Settings</h1>
      <div class="grid md:grid-cols-[15%,85%] grid-cols-1 gap-4">
        <ClientOnly>
          <ListNavigation />
        </ClientOnly>
        <div class="relative w-full">
          <slot />
        </div>
      </div>
    </div>
  </TransitionFade>
</template>

<script setup lang="ts">
import ListNavigation from '../../components/ListNavigation/index.vue';
</script>
