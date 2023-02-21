<template>
  <aside
    id="sidebar-multi-level-sidebar"
    class="fixed top-0 left-0 z-10 w-64 h-screen transition-transform -translate-x-full"
    :class="{ [`translate-x-0`]: isShowSidebar }"
    aria-label="Sidebar"
  >
    <div class="h-full px-3 py-4 overflow-y-auto bg-white">
      <NuxtLink to="/">
        <p class="text-xl font-bold pb-4 border-b mb-4">Fews</p>
      </NuxtLink>
      <ul class="space-y-2">
        <div v-for="item in SIDEBAR_LINK" :key="item.id">
          <NuxtLink
            :href="item.link"
            class="flex items-center cursor-pointer px-2 py-4 text-base font-normal text-gray-900 rounded-lg hover:bg-zinc-200 transition"
          >
            <Icon :name="item.icon" size="24px" class="mr-4 cursor-pointer text-gray-600" />
            <p class="text-gray-600 text-sm font-medium">
              {{ item.title }}
            </p>
          </NuxtLink>
        </div>
      </ul>
    </div>
  </aside>
</template>

<script setup lang="ts">
import SIDEBAR_LINK from './data';

defineProps<{ isShowSidebar: boolean }>();
</script>

<style scoped></style>
