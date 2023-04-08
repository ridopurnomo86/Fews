<template>
  <TransitionFade :delay="200" :duration="600" :appear="true">
    <div class="mx-auto container">
      <h1 class="text-lg font-semibold text-black mb-4">
        My Cart {{ `(${cartStore.countCartItems ?? '-'})` }}
      </h1>
      <div class="relative overflow-x-auto">
        <div
          v-if="cartStore.countCartItems === 0"
          class="flex flex-col items-center justify-center min-h-[100vh]"
        >
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
        <table v-else class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-900 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                <span class="sr-only">Image</span>
              </th>
              <th scope="col" class="px-6 py-3">Product Name</th>
              <th scope="col" class="px-6 py-3">Price</th>
              <th scope="col" class="px-20 py-3">Qty</th>
              <th scope="col" class="px-6 py-3">Total</th>
              <th scope="col" class="px-6 py-3">
                <span class="sr-only">Action</span>
              </th>
            </tr>
          </thead>

          <tbody>
            <tr
              v-for="cart in cartStore.cartItems"
              :key="cart.id"
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50"
            >
              <td class="w-32 p-4">
                <nuxt-img
                  :src="`${cart.imageUrl}`"
                  :alt="`image ${cart.imageUrl}`"
                  :fit="'cover'"
                  :preload="true"
                  :loading="'lazy'"
                  class="w-full object-cover rounded"
                />
              </td>
              <td
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div>
                  <p class="font-semibold text-black text-sm truncate mb-2">
                    {{ cart.name }}
                  </p>
                  <p class="font-medium text-gray-600 text-xs truncate mb-4">{{ cart.category }}</p>
                </div>
              </td>
              <td
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {{ formatter.format(cart.price) }}
              </td>
              <td class="px-6 py-4">
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
              </td>
              <td
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {{ formatter.format(cart.price * cart.quantity) }}
              </td>
              <td scope="row">
                <button
                  type="button"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  @click="cartStore.deleteCartById(cart.id)"
                >
                  <Icon :name="'ion:bag-remove'" size="20px" class="text-red-600 cursor-pointer" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </TransitionFade>
</template>

<script setup lang="ts">
import { useCartStore } from '~~/stores/useCart';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const cartStore = useCartStore();
</script>
