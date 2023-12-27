<template>
  <Success />
</template>

<script setup lang="ts">
import Success from '~/views/Order/Success/index.vue';

definePageMeta({
  middleware: ['auth', 'order'],
});
</script>
