<template>
  <div class="mb-20">
    <div class="info-section flex flex-col items-center justify-center mb-8">
      <p class="font-bold text-2xl mb-2">Our <span class="text-indigo-800">Collections.</span></p>
      <p class="font-medium text-center text-sm text-gray-600 max-w-md">
        Fashion is in the sky, in the street, fashion has to do with ideas, the way we live, what is
        happening. Style is something each of us already has, all we need to do is find it.
      </p>
      <p class="font-medium text-sm text-gray-600 max-w-md mt-4">Check our new collections.</p>
    </div>
    <div class="flex flex-wrap items-center justify-center gap-8">
      <NuxtLink to="/shop/men" class="w-96 h-[10rem]">
        <div
          class="w-full h-full transition-all duration-500 relative mix-blend-overlay cursor-pointer rounded bg-indigo-100 overflow-hidden hover:opacity-70"
        >
          <nuxt-img
            class="absolute h-full w-full object-cover rounded object-right"
            src="/images/man-category.jpg"
            alt="man-category-image"
          />
          <div class="absolute z-10 bottom-0 mb-4 pl-4">
            <p class="font-bold text-base text-gray-900 mb-1">Shop All Men.</p>
          </div>
        </div>
      </NuxtLink>
      <NuxtLink to="/shop/women" class="w-96 h-[10rem]">
        <div
          class="w-full h-full transition-all duration-500 relative mix-blend-overlay cursor-pointer rounded bg-red-100 overflow-hidden hover:opacity-70"
        >
          <nuxt-img
            class="absolute left-20 top-4 h-full w-full object-cover rounded object-right"
            src="/images/women-category.png"
            alt="women-category-image"
          />
          <div class="absolute z-10 bottom-0 mb-4 pl-4">
            <p class="font-bold text-base text-gray-900 mb-1">Shop All Women.</p>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<!-- Template Hero Word -->
<!-- Fews is focused on promoting slow and sustainable style, hosting a number of new independent designers from across the world who offer made-to-order or small batch production pieces. -->
