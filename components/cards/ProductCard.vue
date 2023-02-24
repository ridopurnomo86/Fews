<template>
  <article class="card overflow-hidden max-w-[20rem] cursor-pointer" :on-click="onClick">
    <div class="w-full h-full">
      <nuxt-img
        :src="`${imageUrl}`"
        :alt="`${imageUrl}`"
        class="mb-4 thumb w-full h-64 rounded object-cover"
      />
      <p class="font-medium text-gray-600 mb-2 text-xs truncate">{{ type }}</p>
      <p class="font-semibold text-black mb-2 text-base truncate">
        {{ title }}
      </p>
      <p class="font-medium text-gray-400 text-sm mb-2 line-clamp-2">
        {{ description }}
      </p>
      <p class="font-semibold text-black text-base truncate">
        {{ `$${price}` }}
      </p>
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  type: string;
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  onClick?: () => void;
}>();
</script>
