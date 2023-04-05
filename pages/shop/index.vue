<template>
  <Shop />
</template>

<script setup lang="ts">
import Shop from '~~/views/Shop/index.vue';

definePageMeta({
  middleware: 'auth',
});

useHead({
  title: 'Shop',
  meta: [
    {
      name: 'description',
      content:
        'is platform to provides for anyone looking for the latest fashion, especially on bags.',
    },
  ],
});
</script>
