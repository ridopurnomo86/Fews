<template>
  <ClientOnly>
    <ul
      class="mb-4 flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200"
    >
      <li class="mr-2">
        <NuxtLink
          :class="{
            [`bg-gray-100 text-blue-600 rounded-t-lg`]: route.fullPath === '/profile/orders',
          }"
          to="/profile/orders"
          class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50"
          >All</NuxtLink
        >
      </li>
      <li class="mr-2">
        <NuxtLink
          :class="{
            [`bg-gray-100 text-blue-600 rounded-t-lg`]:
              route.fullPath === '/profile/orders?type=pending',
          }"
          to="/profile/orders?type=pending"
          class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50"
          >Pending</NuxtLink
        >
      </li>
      <li class="mr-2">
        <NuxtLink
          :class="{
            [`bg-gray-100 text-blue-600 rounded-t-lg`]:
              route.fullPath === '/profile/orders?type=success',
          }"
          to="/profile/orders?type=success"
          class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50"
          >Success</NuxtLink
        >
      </li>
    </ul>
  </ClientOnly>
</template>

<script setup lang="ts">
const route = useRoute();
</script>
