<template>
  <Address />
</template>

<script setup lang="ts">
import Address from '~~/views/profile/Address/index.vue';

definePageMeta({
  middleware: 'auth',
});

useHead({
  title: 'Address',
});
</script>
