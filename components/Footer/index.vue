<template>
  <div class="container mx-auto py-10">
    <footer class="py-4 flex flex-col justify-between md:flex-row gap-5 sm:gap-20 border-t-2 my-4">
      <div>
        <NuxtLink to="/">
          <p class="text-xl font-bold mr-4">Fews</p>
        </NuxtLink>
        <div class="mt-2 max-w-[300px]">
          <p class="font-medium text-sm text-gray-600">
            Specializes in providing high-quality, stylish products for your wardrobe.
          </p>
        </div>
        <div class="mt-4">
          <p class="font-medium text-sm text-gray-600">Email us at:</p>
          <p class="font-semibold text-sm text-black">fews.corp@proton.mail</p>
        </div>
      </div>
      <div class="flex flex-col md:flex-row gap-5 md:gap-20">
        <div>
          <p class="font-semibold text-black text-base mb-2">Main Page</p>
          <div v-for="item in MAIN_PAGE" :key="item.id">
            <NuxtLink href="{{ item.link }}" class="block text-gray-600 text-sm font-medium mb-2">{{
              item.title
            }}</NuxtLink>
          </div>
        </div>
        <div>
          <p class="font-semibold text-black text-base mb-2">Freshness</p>
          <div v-for="item in FRESHNESS" :key="item.id">
            <NuxtLink :href="item.link" class="block text-gray-600 text-sm font-medium mb-2">{{
              item.title
            }}</NuxtLink>
          </div>
        </div>
        <div>
          <p class="font-semibold text-black text-base mb-2">Shop</p>
          <div v-for="item in SHOP" :key="item.id">
            <NuxtLink :href="item.link" class="block text-gray-600 text-sm font-medium mb-2">{{
              item.title
            }}</NuxtLink>
          </div>
        </div>
      </div>
    </footer>
    <div class="flex flex-col items-center justify-between sm:flex-row">
      <p class="text-gray-500 text-xs font-medium mt-4 mb-2 sm:mb-0">
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
import { FRESHNESS, MAIN_PAGE, SHOP, SOCIAL_MEDIA } from './data';
</script>
