<template>
  <PaymentMethod />
</template>

<script setup lang="ts">
import PaymentMethod from '~/views/Payment/PaymentMethod/index.vue';

definePageMeta({
  middleware: 'auth',
  layout: 'payment',
});
</script>
