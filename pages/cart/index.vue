<template>
  <Cart />
</template>

<script setup lang="ts">
import Cart from '~~/views/Cart/index.vue';

definePageMeta({ auth: false, scrollToTop: true });

useHead({
  title: 'Cart',
});
</script>
