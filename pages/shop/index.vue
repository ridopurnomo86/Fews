<template>
  <Shop />
</template>

<script setup lang="ts">
import Shop from '~~/views/Shop/index.vue';

definePageMeta({
  middleware: 'auth',
});
</script>
