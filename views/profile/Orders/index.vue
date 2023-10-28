<template>
  <ProfileLayout>
    <h1 class="font-semibold text-lg text-black mb-1">Order History</h1>
    <p class="font-medium text-sm text-neutral-600 mb-4">
      Check the status of recent orders, manage returns, and discovery similiar products.
    </p>
    <Tabs />
    <div
      v-if="!orders?.data.length && !isLoading"
      class="flex flex-col items-center justify-center min-h-[30vh] lg:min-h-[100vh]"
    >
      <div class="max-w-[95px] lg:max-w-[150px]">
        <nuxt-img
          class="h-full w-full object-cover"
          src="/images/women-empty-cart.png"
          alt="women-empty-cart"
        />
      </div>
      <p class="text-sm lg:text-base font-semibold text-black">You have no Order</p>
      <p class="text-xs lg:text-sm font-regular text-gray-600">looks like you haven't order yet.</p>
    </div>
    <div v-if="isLoading" class="flex items-center justify-center min-h-[60vh]">
      <LazyCircularLoading />
    </div>
    <div v-for="order in orders?.data" v-else :key="order.id">
      <div class="w-full border rounded-md mb-4">
        <div class="px-8 py-4 flex border-b-[1px] flex justify-between w-full flex-col md:flex-row">
          <div>
            <p class="text-sm font-semibold text-neutral-800 antialiased mb-2">Order Number</p>
            <p class="text-sm font-medium text-neutral-600 antialiased">
              {{ order.order_id }}
            </p>
          </div>
          <div class="flex gap-8 mt-4 md:mt-0">
            <div class="hidden md:block">
              <p class="text-sm font-semibold text-neutral-800 antialiased mb-2">Date Placed</p>
              <p class="text-sm font-medium text-neutral-600 antialiased">
                {{ dayjs(order.created_at).format('MMM D, YYYY') }}
              </p>
            </div>
            <div>
              <p class="text-sm font-semibold text-neutral-800 antialiased mb-2">Total Amount</p>
              <p class="text-sm font-medium text-neutral-600 antialiased">
                {{ formatter.format(order.total_price) }}
              </p>
            </div>
            <div>
              <p class="text-sm font-semibold text-neutral-800 antialiased mb-2">Status</p>
              <span
                :class="{
                  [`bg-red-100 text-red-800 border-red-400`]: order.status === 'PENDING',
                  [`bg-green-100 text-green-800 border-green-400`]: order.status === 'SUCCESS',
                }"
                class="text-xs font-medium mr-2 px-2.5 py-0.5 rounded border"
                >{{ order.status }}</span
              >
            </div>
          </div>
        </div>
        <div v-for="item in order.items" :key="item.id">
          <div class="px-4 py-2 flex w-full justify-between">
            <div class="flex">
              <div class="max-w-[120px] p-2">
                <nuxt-img
                  :src="`${item.Product.image_url}`"
                  :alt="`image ${item.Product.image_url}`"
                  :fit="'cover'"
                  :preload="true"
                  :loading="'lazy'"
                  class="w-full h-full object-cover rounded aspect-square border"
                />
              </div>
              <div class="px-4 py-1 font-medium text-gray-900 whitespace-nowrap">
                <p class="font-semibold text-black text-sm truncate mb-2">
                  {{ item.Product.name }}
                </p>
                <p class="font-medium text-gray-600 text-xs whitespace-nowrap mb-2">
                  {{ item.Product.Category_Product?.name }}
                </p>
                <p class="font-medium text-gray-600 text-xs whitespace-nowrap">
                  {{ formatter.format(item.Product.price) }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ProfileLayout>
</template>

<script setup lang="ts">
import { formatter } from '~~/modules/formatPrice';
import dayjs from 'dayjs';
import ProfileLayout from '../layout/ProfileLayout/index.vue';
import Tabs from './Tabs/index.vue';

const route = useRoute();

const isLoading = ref(false);

const type = ref(route.query.type || '');

watch(
  () => route.query,
  () => {
    if (route.query.type) type.value = route.query.type;
    if (!route.query.type) type.value = '';
    return null;
  },
  { deep: true, immediate: true }
);

const { data: orders } = await useFetch('/api/profile/order', {
  method: 'GET',
  query: {
    type,
  },
  redirect: 'follow',
  cache: 'default',
  lazy: true,
  onResponse: ({ response }) => {
    if (response) isLoading.value = false;
  },
  onRequest: ({ request }) => {
    if (request) isLoading.value = true;
  },
  watch: [type],
});
</script>
