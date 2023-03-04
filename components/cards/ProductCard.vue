<template>
  <article
    class="overflow-hidden bg-white border p-4 rounded w-full h-full cursor-pointer hover:border-indigo-600 transition-all delay-75"
    :on-click="onClick"
  >
    <div class="w-full h-full">
      <nuxt-img
        :src="`${imageUrl}`"
        :alt="`${imageUrl}`"
        :fit="'cover'"
        preload
        loading="lazy"
        class="mb-4 w-[240px] h-[240px] rounded object-cover"
      />
      <p class="font-semibold text-black text-sm truncate">
        {{ title }}
      </p>
      <p class="font-medium text-gray-600 text-xs truncate mb-4">{{ type }}</p>
      <div class="flex flex-row items-center justify-between">
        <p class="font-semibold text-black text-sm truncate">
          {{ `${formatter.format(price)}` }}
        </p>
        <div class="px-2 py-1 bg-indigo-100 rounded hover:opacity-60 transition-all delay-75">
          <Icon :name="'material-symbols:shopping-bag'" size="20px" />
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

defineProps<{
  type: string;
  imageUrl: string;
  title: string;
  price: number;
  onClick?: () => void;
}>();
</script>
