<template>
  <Signin />
</template>

<script setup lang="ts">
import Signin from '~~/views/auth/Signin/index.vue';

definePageMeta({
  layout: 'auth',
  middleware: 'auth',
});
</script>
