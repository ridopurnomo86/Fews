<template>
    <article class="card overflow-hidden">
        <nuxt-img :src="`${props.imageUrl}`" :alt="`${props.imageUrl}`" class="mb-2 thumb w-full h-64 rounded object-cover" />
        <p class="font-semibold text-gray-800 mb-2 text-base truncate">{{ props.title }}</p>
        <p class="font-normal text-gray-600 text-sm mb-2 line-clamp-2">{{ props.description }}</p>
        <p class="font-semibold text-gray-500 text-base truncate">{{ `$${props.price}` }}</p>
    </article>
</template>

<script setup lang="ts">
    const props = defineProps<{
        imageUrl: string;
        title: string;
        description: string;
        price: number;
    }>()
</script>

