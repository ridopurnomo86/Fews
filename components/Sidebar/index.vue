<template>
  <div
    class="fixed left-0 top-0 w-full h-full overflow-auto bg-black opacity-40"
    :class="[isShowSidebar ? 'block' : 'hidden']"
  />
  <aside
    id="sidebar-multi-level-sidebar"
    class="fixed top-0 left-0 z-50 w-64 h-screen transition-transform -translate-x-full"
    :class="{ [`translate-x-0`]: isShowSidebar }"
    aria-label="Sidebar"
  >
    <div class="h-full px-3 py-4 overflow-y-auto bg-white flex flex-col justify-between">
      <div>
        <div class="flex justify-between pb-4 border-b mb-4">
          <NuxtLink to="/">
            <p class="text-xl font-bold">Fews</p>
          </NuxtLink>
          <button type="button" @click="handleCloseSideBar">
            <Icon
              :name="'carbon:close-filled'"
              size="20px"
              class="mr-4 cursor-pointer text-gray-600"
            />
          </button>
        </div>
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
      <div>
        <NuxtLink
          :href="'/logout'"
          class="flex items-center cursor-pointer px-2 py-4 text-base font-normal text-gray-900 rounded-lg hover:bg-zinc-200 transition"
        >
          <Icon
            :name="'ion:md-log-out'"
            size="24px"
            class="mr-4 cursor-pointer text-gray-600 -rotate-180"
          />
          <p class="text-gray-600 text-sm font-medium">Logout</p>
        </NuxtLink>
        <NuxtLink
          :href="'/signin'"
          class="flex items-center cursor-pointer px-2 py-4 text-base font-normal text-gray-900 rounded-lg hover:bg-zinc-200 transition"
        >
          <Icon
            :name="'clarity:sign-in-solid'"
            size="24px"
            class="mr-4 cursor-pointer text-gray-600"
          />
          <p class="text-gray-600 text-sm font-medium">Sign in</p>
        </NuxtLink>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import SIDEBAR_LINK from './data';

defineProps<{ isShowSidebar: boolean; handleCloseSideBar: () => void }>();
</script>

<style scoped></style>
