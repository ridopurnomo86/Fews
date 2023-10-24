<template>
  <Order />
</template>

<script setup lang="ts">
import Order from '~/views/Order/MainOrder/index.vue';

definePageMeta({
  middleware: 'auth',
  layout: 'order',
});

const cookieOrder = useCookie('nuxt.checkout-token');

if (!cookieOrder.value) await navigateTo('/cart', { external: true });
</script>
