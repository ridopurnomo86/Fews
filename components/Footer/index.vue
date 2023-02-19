<template>
  <div class="container mx-auto py-10">
    <NuxtLink to="/">
      <p class="text-xl font-bold mr-4">Fews</p>
    </NuxtLink>
    <footer
      class="py-4 flex flex-col sm:flex-row gap-5 sm:gap-20 border-t-2 my-4"
    >
      <div>
        <p class="font-semibold text-black text-base mb-2">Main Page</p>
        <div v-for="item in MAIN_PAGE" :key="item.id">
          <NuxtLink
            href="{{ item.link }}"
            class="block text-gray-600 text-sm font-medium mb-2"
            >{{ item.title }}</NuxtLink
          >
        </div>
      </div>
      <div>
        <p class="font-semibold text-black text-base mb-2">Main Page</p>
        <div v-for="item in FRESHNESS" :key="item.id">
          <NuxtLink
            :href="item.link"
            class="block text-gray-600 text-sm font-medium mb-2"
            >{{ item.title }}</NuxtLink
          >
        </div>
      </div>
      <div>
        <p class="font-semibold text-black text-base mb-2">Main Page</p>
        <div v-for="item in SHOP" :key="item.id">
          <NuxtLink
            :href="item.link"
            class="block text-gray-600 text-sm font-medium mb-2"
            >{{ item.title }}</NuxtLink
          >
        </div>
      </div>
    </footer>
    <div class="flex flex-col items-center justify-between sm:flex-row">
      <p class="text-gray-500 text-base font-medium mt-4 mb-2 sm:mb-0">
        &copy;2023 Fews Corp. All rights reserved.
      </p>
      <div class="flex items-center gap-1">
        <div v-for="item in SOCIAL_MEDIA" :key="item.id">
          <Icon :name="item.name" :size="item.size" :class="item.class" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FRESHNESS, MAIN_PAGE, SHOP, SOCIAL_MEDIA } from "./data";
</script>
