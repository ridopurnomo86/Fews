<template>
  <Signup />
</template>

<script setup lang="ts">
import Signup from '~~/views/auth/Signup/index.vue';

definePageMeta({
  layout: 'auth',
  middleware: 'auth',
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/',
  },
});
useHead({
  title: 'Signup',
});
</script>
