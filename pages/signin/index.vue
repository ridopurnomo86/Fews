<template>
  <Signin />
</template>

<script setup lang="ts">
import Signin from '~~/views/auth/Signin/index.vue';

const config = useRuntimeConfig();

definePageMeta({
  layout: 'auth',
  middleware: 'auth',
});

useHead({
  title: 'Signin',
  meta: [
    {
      name: 'google-signin-client_id',
      content: `${config.googleClientId}`,
    },
  ],
  script: [{ src: 'https://apis.google.com/js/platform.js', async: true, defer: true }],
});
</script>
