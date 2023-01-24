<template>
  <Signin />
</template>

<script setup lang="ts">
import Signin from "~~/views/auth/Signin/index.vue";
import "~/assets/css/tailwind.css";

definePageMeta({
  layout: "auth",
});

// useHead({
//   script: [
//     {
//       src: "https://cdn.tailwindcss.com",
//     },
//   ],
// });
</script>
