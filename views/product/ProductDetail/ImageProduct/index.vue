<template>
  <div class="w-full max-h-[500px]">
    <nuxt-img
      class="h-full w-full object-cover rounded"
      :src="`${imageUrl}`"
      :alt="`product ${nameProduct}`"
      format="webp"
      quality="80"
      loading="lazy"
      preload
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{ imageUrl: string; nameProduct: string }>();
</script>
