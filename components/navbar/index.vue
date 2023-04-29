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
        <ul class="flex items-center gap-4">
          <li
            class="hidden md:block cursor-pointer"
            @focus="isShowCart = true"
            @mouseleave="isShowCart = false"
            @mouseenter="isShowCart = true"
            @blur="isShowCart = true"
          >
            <NuxtLink :to="'/cart'" class="hidden md:block relative">
              <Icon
                :name="'material-symbols:shopping-bag-outline'"
                size="20px"
                class="cursor-pointer"
              />
              <span
                v-if="cartStore.countTotalPrice"
                class="absolute h-[20px] w-[20px] flex items-center justify-center rounded-full bg-red-500 border-[1px] top-[-4px] right-0 left-3"
              >
                <p class="text-xs font-medium text-white">{{ cartStore.countCartItems }}</p>
              </span>
            </NuxtLink>
          </li>
          <li class="hidden md:block cursor-pointer">
            <NuxtLink :to="'/search'">
              <Icon :name="'octicon:search-16'" size="20px" class="cursor-pointer" />
            </NuxtLink>
          </li>
          <li class="hidden md:block cursor-pointer">
            <NuxtLink :to="'/profile/my-details'">
              <Icon :name="'octicon:person-16'" size="20px" />
            </NuxtLink>
          </li>
          <li>
            <button text="" type="button" @click="onClickSideBar">
              <Icon
                name="ant-design:align-right-outlined"
                size="20px"
                class="cursor-pointer block md:hidden"
              />
            </button>
          </li>
        </ul>
      </nav>
      <div class="max-w-lg absolute top-10 right-24 z-50 w-full transition-opacity overflow-auto">
        <div v-if="isShowCart">
          <CartNotificationCard
            :carts="cartStore.cartItems"
            :on-delete-all-cart="() => cartStore.deleteAllCart()"
            :total-cart="cartStore.countCartItems"
            @focus="isShowCart = true"
            @mouseleave="isShowCart = false"
            @mouseenter="isShowCart = true"
            @blur="isShowCart = true"
          />
        </div>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
import CartNotificationCard from '~~/components/cards/CartNotificationCard.vue';
import { useCartStore } from '~~/stores/useCart';

const isShowCart = ref<boolean>(false);

const cartStore = useCartStore();

defineProps<{
  onClickSideBar: () => void;
}>();
</script>
