<template>
  <div class="relative">
    <header class="mx-auto container py-4 relative w-full">
      <nav class="flex justify-between items-center">
        <ul class="flex items-center">
          <li>
            <NuxtLink to="/">
              <p class="text-xl font-bold mr-4">Fews</p>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/shop">
              <p class="text-md font-medium mr-4">Shop</p>
            </NuxtLink>
          </li>
        </ul>
        <ul class="flex items-center">
          <li class="hidden md:block cursor-pointer">
            <NuxtLink :href="'/cart'" class="hidden md:block">
              <Icon
                :name="'material-symbols:shopping-bag-outline'"
                size="20px"
                class="mr-4 cursor-pointer"
              />
            </NuxtLink>
          </li>
          <li class="hidden md:block cursor-pointer relative">
            <NuxtLink :href="'/search'" class="hidden md:block">
              <Icon :name="'octicon:search-16'" size="20px" class="mr-4 cursor-pointer" />
            </NuxtLink>
          </li>
          <li class="hidden md:block cursor-pointer">
            <button text="" type="button">
              <Icon :name="'octicon:person-16'" size="20px" />
            </button>
          </li>
          <li>
            <button text="" type="button" @click="onClickSideBar">
              <Icon
                name="ant-design:align-right-outlined"
                size="20px"
                class="mr-4 cursor-pointer block md:hidden"
              />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  onClickSideBar: () => void;
}>();
</script>
