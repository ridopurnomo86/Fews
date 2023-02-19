<template>
  <div>
    <header class="mx-auto container py-4">
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
          <li v-if="!props.isAuthenticated" class="hidden md:block">
            <NuxtLink to="/signin">
              <p class="text-base font-medium mr-4">Sign In</p>
            </NuxtLink>
          </li>
          <div v-for="item in NAVBAR_LINK" :key="item.id">
            <NuxtLink :href="item.link" class="hidden md:block">
              <Icon :name="item.icon" size="20px" class="mr-4 cursor-pointer" />
            </NuxtLink>
          </div>
          <li>
            <button @click="onClickSideBard">
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
import NAVBAR_LINK from "./data";

const props = withDefaults(
  defineProps<{ isAuthenticated?: boolean; onClickSideBard: () => void }>(),
  {
    isAuthenticated: false,
  }
);
</script>
