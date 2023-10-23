<template>
  <div class="p-4 rounded border bg-white overflow-hidden h-full lg:h-[400px]">
    <h1 class="text-lg font-semibold text-black mb-2">Order Summary</h1>
    <div>
      <p class="text-base font-semibold text-black border-b-[1px] py-2 mb-2">Details</p>
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
        <p class="text-base font-semibold text-black">Amount To Pay</p>
        <p class="text-base font-semibold text-black">
          {{ formatter.format(Number(cartStore.countTotalPrice)) }}
        </p>
      </div>
    </div>
    <div class="w-full mt-8">
      <Button
        type="button"
        class="w-full"
        :is-disable="Boolean(!cartStore.countCartItems) || isLoading"
        :text="'Proceed To Pay'"
        :on-click="handleSubmitCart"
      />
    </div>
    <div class="w-full mt-4">
      <Button
        :on-click="async () => await navigateTo('/shop', { external: true })"
        :is-disable="isLoading"
        class="w-full"
        type="button"
        :text="'Continue Shopping'"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatter } from '~~/modules/formatPrice';
import { useCartStore } from '~~/stores/useCart';
import { ProductDataType } from '~~/types/product';

const cartStore = useCartStore();
const snackbar = useSnackbar();

const isLoading = ref(false);

const handleSubmitCart = async () => {
  const { data, error } = await useFetch('/api/cart', {
    method: 'POST',
    body: {
      amount: cartStore.countTotalPrice,
      items: cartStore.cartItems.map((item: ProductDataType) => ({
        id: 1212,
        name: item.name,
        type_id: item.Type_Product.id,
        category_id: item.Category_Product.id,
      })),
    },
    onResponse: ({ response }) => {
      if (response) isLoading.value = false;
    },
    onRequest: ({ request }) => {
      if (request) isLoading.value = true;
    },
  });

  if (!data || error.value?.data)
    return snackbar.add({
      type: 'error',
      text: error.value?.data?.message,
    });

  return navigateTo('/order', { external: true });
};
</script>
