<template>
  <article class="card overflow-hidden w-fit" :on-click="onClick">
    <nuxt-img
      :src="`${imageUrl}`"
      :alt="`${imageUrl}`"
      class="mb-2 thumb w-full h-64 rounded object-cover"
    />
    <p class="font-semibold text-gray-800 mb-2 text-base truncate">
      {{ title }}
    </p>
    <p class="font-normal text-gray-600 text-sm mb-2 line-clamp-2">
      {{ description }}
    </p>
    <p class="font-semibold text-gray-500 text-base truncate">
      {{ `$${price}` }}
    </p>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  onClick?: () => void;
}>();
</script>
