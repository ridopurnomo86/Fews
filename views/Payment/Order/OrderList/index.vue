<template>
  <div>
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
      <p class="text-sm lg:text-base font-semibold text-black">Your Cart is Empty</p>
      <p class="text-xs lg:text-sm font-regular text-gray-600">
        looks like you haven't added anything to your cart yet.
      </p>
    </div>
    <div>
      <h1 class="font-semibold antialiased text-black text-lg mb-4">Your Order</h1>
      <div
        v-for="cart in cartStore.cartItems"
        :key="cart.id"
        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 last:border-none flex items-center justify-between cursor-pointer"
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
            <p class="font-semibold text-black text-sm truncate mb-2">
              {{ cart.name }}
            </p>
            <p class="font-medium text-gray-600 text-xs truncate mb-2">
              {{ cart.Category_Product.name }}
            </p>
            <p class="font-medium text-gray-600 text-xs whitespace-nowrap mb-2">
              {{ formatter.format(cart.price) }}
            </p>
            <p class="font-medium text-gray-600 text-xs whitespace-nowrap">
              Qty : {{ cart.quantity }}
            </p>
          </div>
        </div>
        <div class="p-4">
          <p class="font-medium text-gray-600 text-sm antialiased whitespace-nowrap">
            {{ formatter.format(cart.price) }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div class="border-t-[1px] py-4">
      <div class="flex items-center justify-between py-2">
        <p class="text-md font-medium text-neutral-600">Sub Total</p>
        <p class="text-md font-medium text-neutral-800">
          {{ formatter.format(Number(cartStore.countTotalPrice)) }}
        </p>
      </div>
      <div class="flex items-center justify-between py-2">
        <p class="text-md font-medium text-neutral-600">Delivery Fee</p>
        <p class="text-md font-medium text-neutral-800">+ {{ formatter.format(Number(0)) }}</p>
      </div>
    </div>
    <div class="border-t-[1px] py-4">
      <div class="flex items-center justify-between py-2">
        <p class="text-md font-medium text-neutral-600">Total</p>
        <p class="text-md font-medium text-neutral-800">
          {{ formatter.format(Number(cartStore.countTotalPrice)) }}
        </p>
      </div>
    </div>
    <div class="flex items-center justify-center mt-4">
      <button
        type="button"
        class="font-medium antialiased w-full bg-indigo-600 text-white rounded-full border px-8 py-2"
        @click="handlePlaceOrder"
      >
        Place Order
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatter } from '~~/modules/formatPrice';
import { useCartStore } from '~~/stores/useCart';

const cartStore = useCartStore();

const handlePlaceOrder = async () => {
  const { data } = await useFetch('/api/payment/token', {
    method: 'POST',
    lazy: true,
  });

  return navigateTo(`/payment/${data.value?.data.token}`, { external: true });
};
</script>
