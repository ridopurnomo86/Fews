<template>
  <div
    class="p-4 bg-white shadow rounded w-full max-h-[250px] border overflow-scroll overflow-x-hidden"
  >
    <div class="flex items-center justify-between pb-3 border-b-[1px]">
      <p class="text-medium font-semibold text-black text-md">
        My Cart {{ `(${totalCart ?? '-'})` }}
      </p>
      <div class="flex items-center">
        <NuxtLink class="text-medium font-medium text-sm text-gray-600 cursor-pointer" href="/cart"
          >View All</NuxtLink
        >
        <p class="text-medium font-medium text-sm text-gray-600 mx-2">|</p>
        <button
          class="text-medium font-medium text-sm text-gray-600 cursor-pointer"
          type="button"
          text=""
          @click="onDeleteAllCart"
        >
          Delete All
        </button>
      </div>
    </div>
    <div v-if="carts.length <= 0" class="flex flex-col items-center justify-center min-h-[250px]">
      <div class="max-w-[150px]">
        <nuxt-img
          class="h-full w-full object-cover"
          src="/images/women-empty-cart.png"
          alt="women-empty-cart"
        />
      </div>
      <p class="text-md font-semibold text-black">Your Cart is Empty</p>
      <p class="text-sm font-regular text-gray-600">
        looks like you haven't added anything to your cart yet.
      </p>
    </div>
    <div v-for="cart in carts" v-else :key="cart.id">
      <div class="py-4 cart-product">
        <div class="flex justify-between">
          <div class="flex">
            <div class="max-w-[80px] aspect-square mr-4">
              <nuxt-img
                :src="`${cart.image_url}`"
                :alt="`${cart.image_url}`"
                :fit="'cover'"
                :preload="true"
                :loading="'lazy'"
                class="w-full object-cover rounded aspect-square"
              />
            </div>
            <div>
              <p class="font-medium text-gray-600 text-xs truncate mb-1">{{ cart.type }}</p>
              <p class="font-semibold text-black text-sm truncate">
                {{ cart.name }}
              </p>
              <p class="font-medium text-gray-600 text-xs truncate mt-1">
                {{ formatter.format(cart.price) }}
              </p>
              <div class="flex mt-4">
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
          <div class="flex flex-col justify-between items-end">
            <button type="button" @click="cartStore.deleteCartById(cart.id)">
              <Icon :name="'ion:bag-remove'" size="20px" class="text-red-600 cursor-pointer" />
            </button>
            <div>
              <p class="font-semibold text-neutral-800 text-sm truncate mt-1">
                Price:
                {{ formatter.format(cart.price) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '~~/stores/useCart';
import { CartProductDataType } from '~~/types/product';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const cartStore = useCartStore();

defineProps<{
  carts: Array<CartProductDataType>;
  totalCart: number;
  onDeleteAllCart: () => void;
}>();
</script>
