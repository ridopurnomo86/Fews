<template>
  <SetPassword />
</template>

<script setup lang="ts">
import SetPassword from '~~/views/auth/SetPassword/index.vue';

definePageMeta({
  layout: 'auth',
  middleware: 'auth',
});
</script>
