<template>
  <MyDetails />
</template>

<script setup lang="ts">
import MyDetails from '~~/views/profile/MyDetails/index.vue';

definePageMeta({
  middleware: 'auth',
});

useHead({
  title: 'My Details',
});
</script>
