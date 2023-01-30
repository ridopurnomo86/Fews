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
          <li>
            <Icon
              name="ant-design:shopping-cart-outlined"
              size="20px"
              class="mr-4 cursor-pointer"
            />
          </li>
          <li v-if="!props.isAuthenticated">
            <NuxtLink to="/signin">
              <p class="text-md font-medium mr-4">Sign In</p>
            </NuxtLink>
          </li>
          <li>
            <Icon
              name="ant-design:align-right-outlined"
              size="20px"
              class="mr-4 cursor-pointer"
            />
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ isAuthenticated?: boolean }>(), {
  isAuthenticated: false,
});
</script>
