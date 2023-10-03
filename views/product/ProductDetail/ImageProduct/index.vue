<template>
  <div class="w-full max-h-[500px]">
    <nuxt-img
      class="h-full w-full object-cover rounded"
      :src="imgUrl"
      :alt="`product ${nameProduct}`"
      format="webp"
      quality="100"
      loading="lazy"
      preload
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{ imgUrl: string; nameProduct: string }>();
</script>
