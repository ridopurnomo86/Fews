<template>
  <Order />
</template>

<script setup lang="ts">
import Order from '~/views/Order/MainOrder/index.vue';

definePageMeta({
  middleware: ['auth', 'order'],
  layout: 'order',
});
</script>
