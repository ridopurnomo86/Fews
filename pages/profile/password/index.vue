<template>
  <Password />
</template>

<script setup lang="ts">
import Password from '~~/views/profile/Password/index.vue';

definePageMeta({
  middleware: 'auth',
});

useHead({
  title: 'Password',
});
</script>
