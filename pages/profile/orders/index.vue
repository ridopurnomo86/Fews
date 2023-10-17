<template>
  <Orders />
</template>

<script setup lang="ts">
import Orders from '~~/views/profile/Orders/index.vue';

definePageMeta({
  middleware: 'auth',
});

useHead({
  title: 'Orders',
});
</script>
