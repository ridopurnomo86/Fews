<script setup lang="ts">
const route = useRoute();

const DATA = [
  {
    id: 1,
    routeName: 'order',
    title: 'Order Info',
    subtitle: 'Step details here',
  },
  {
    id: 2,
    routeName: 'order-payment',
    title: 'Payment Info',
    subtitle: 'Step details here',
  },
];
</script>

<template>
  <TransitionFade :delay="200" :duration="600" :appear="true">
    <div class="relative mx-auto container">
      <nav class="py-4 flex items-center justify-between">
        <NuxtLink to="/">
          <p class="text-xl font-bold antialiased">Fews</p>
        </NuxtLink>
        <button type="button" class="flex items-center" @click="$router.back()">
          <Icon :name="'mdi:keyboard-backspace'" size="20px" class="text-neutral-600" />
          <p class="text-md font-medium antialiased ml-2 text-neutral-600">Back</p>
        </button>
      </nav>
      <ol class="items-center py-10 w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0">
        <li
          v-for="data in DATA"
          :key="data.id"
          class="flex items-center space-x-2.5 cursor-pointer"
          :class="`${route.name === data.routeName ? 'text-blue-600' : 'text-gray-500'}`"
        >
          <span
            class="flex items-center justify-center w-8 h-8 border rounded-full shrink-0"
            :class="`${route.name === data.routeName ? 'border-blue-600' : 'border-gray-500'}`"
          >
            {{ data.id }}
          </span>
          <span>
            <h3 class="font-medium leading-tight">{{ data.title }}</h3>
            <p class="text-sm">{{ data.subtitle }}</p>
          </span>
        </li>
      </ol>
      <slot />
    </div>
  </TransitionFade>
</template>
