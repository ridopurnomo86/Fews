<template>
  <NuxtLink :to="path" class="mb-4">
    <p
      class="px-4 py-2 text-sm font-semibold text-gray-500 truncate rounded transition-all hover:bg-gray-100 cursor-pointer"
    >
      {{ title }}
    </p>
  </NuxtLink>
</template>

<script setup lang="ts">
interface NavigationPropsType {
  title: string;
  path: string;
}

defineProps<NavigationPropsType>();
</script>

<style scoped>
.router-link-exact-active > p {
  color: #000000 !important;
}
</style>
