<template>
  <div>
    <div class="relative overflow-x-auto border rounded w-full">
      <div
        v-if="cartStore.countCartItems === 0"
        class="flex flex-col items-center justify-center min-h-[30vh] lg:min-h-[100vh]"
      >
        <div class="max-w-[95px] lg:max-w-[150px]">
          <nuxt-img
            class="h-full w-full object-cover"
            src="/images/women-empty-cart.png"
            alt="women-empty-cart"
          />
        </div>
        <p class="text-sm lg:text-md font-semibold text-black">Your Cart is Empty</p>
        <p class="text-xs lg:text-sm font-regular text-gray-600">
          looks like you haven't added anything to your cart yet.
        </p>
      </div>
      <div>
        <div
          v-for="cart in cartStore.cartItems"
          :key="cart.id"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 last:border-none flex justify-between"
        >
          <div class="flex">
            <div class="max-w-[120px] p-4">
              <nuxt-img
                :src="`${cart.image_url}`"
                :alt="`image ${cart.image_url}`"
                :fit="'cover'"
                :preload="true"
                :loading="'lazy'"
                class="w-full h-full object-cover rounded aspect-square"
              />
            </div>
            <div class="px-4 py-4 font-medium text-gray-900 whitespace-nowrap">
              <div>
                <p class="font-semibold text-black text-sm truncate mb-2">
                  {{ cart.name }}
                </p>
                <p class="font-medium text-gray-600 text-xs truncate mb-4">
                  {{ cart.Category_Product.name }}
                </p>
              </div>
              <p class="font-medium text-gray-600 text-xs whitespace-nowrap">
                {{ formatter.format(cart.price) }}
              </p>
            </div>
          </div>

          <div class="flex flex-col items-end justify-between px-6 py-6">
            <button type="button" @click="cartStore.deleteCartById(cart.id)">
              <Icon :name="'ion:bag-remove'" size="20px" class="text-gray-600 cursor-pointer" />
            </button>
            <div class="flex">
              <div
                class="rounded border bg-white px-2 cursor-pointer"
                @click="cartStore.decreaseQuantity(cart.id)"
              >
                <p class="font-semibold text-neutral-800 text-sm">-</p>
              </div>
              <div class="rounded border bg-white px-8 mx-2 cursor-pointer">
                <p class="font-semibold text-neutral-800 text-sm">{{ cart.quantity }}</p>
              </div>
              <div
                class="rounded border bg-white px-2 cursor-pointer"
                @click="cartStore.increaseQuantity(cart.id)"
              >
                <p class="font-semibold text-neutral-800 text-sm">+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatter } from '~~/modules/formatPrice';
import { useCartStore } from '~~/stores/useCart';

const cartStore = useCartStore();
</script>
