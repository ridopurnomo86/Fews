<template>
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
    <slot />
  </div>
</template>
