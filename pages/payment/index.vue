<template>
  <Payment />
</template>

<script setup lang="ts">
import Payment from '~/views/Payment/Order/index.vue';

definePageMeta({
  middleware: 'auth',
  layout: 'payment',
});
</script>
