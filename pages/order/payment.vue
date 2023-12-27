<template>
  <Payment />
</template>

<script setup lang="ts">
import Payment from '~/views/Order/Payment/index.vue';

definePageMeta({
  middleware: ['auth', 'order'],
  layout: 'order',
});

useHead({
  script: [
    {
      type: 'text/javascript',
      src: 'https://js.stripe.com/v3/',
    },
  ],
});
</script>
