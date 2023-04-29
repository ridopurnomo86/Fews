<template>
  <Landing />
</template>

<script setup lang="ts">
import Landing from '~~/views/Landing/index.vue';

useHead({
  title: 'Fews',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      name: 'description',
      content:
        'is platform to provides for anyone looking for the latest fashion, especially on bags.',
    },
  ],
});
</script>
