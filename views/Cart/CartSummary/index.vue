<template>
  <div class="p-4 rounded border bg-white overflow-hidden">
    <h1 class="text-lg font-semibold text-black mb-2">Order Summary</h1>
    <div>
      <p class="text-md font-semibold text-black border-b-[1px] py-2 mb-2">Details</p>
      <div class="flex items-center justify-between py-2">
        <p class="text-sm font-medium text-gray-600">Deliver Charge</p>
        <p class="text-sm font-medium text-gray-800">
          {{ formatter.format(0) }}
        </p>
      </div>
      <div class="flex items-center justify-between py-2">
        <p class="text-sm font-medium text-gray-600">Item Total</p>
        <p class="text-sm font-medium text-gray-800">
          {{ formatter.format(Number(cartStore.countTotalPrice)) }}
        </p>
      </div>
    </div>
    <div class="border-y-[1px] bg-white overflow-hidden my-2">
      <div class="flex items-center justify-between py-4">
        <p class="text-md font-semibold text-black">Amount To Pay</p>
        <p class="text-md font-semibold text-black">
          {{ formatter.format(Number(cartStore.countTotalPrice)) }}
        </p>
      </div>
    </div>
    <div class="w-full mt-8">
      <NuxtLink href="/checkout">
        <Button type="button" class="w-full" :text="'Proceed To Pay'" />
      </NuxtLink>
    </div>
    <div class="w-full mt-4">
      <NuxtLink href="/shop">
        <Button type="button" class="w-full bg-indigo-100" :text="'Continue Shopping'" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatter } from '~~/modules/formatPrice';
import { useCartStore } from '~~/stores/useCart';

const cartStore = useCartStore();
</script>
