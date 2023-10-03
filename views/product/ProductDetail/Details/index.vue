<template>
  <div class="overflow-hidden">
    <div class="mb-4">
      <p class="font-medium text-md text-gray-800 mb-2">{{ type }}</p>
      <h1 class="font-bold text-lg lg:text-2xl text-black mb-1">{{ name }}</h1>
      <p class="font-medium text-sm text-gray-600 mb-4">{{ category }}</p>
      <p class="font-semibold text-md text-gray-600">{{ formatter.format(price) }}</p>

      <div class="mt-8">
        <p class="font-semibold text-black text-sm lg:text-md mb-2">Description</p>
        <p class="font-medium text-sm lg:text-md text-gray-600">{{ description }}</p>
      </div>
    </div>
    <div class="mb-10">
      <div class="flex items-center mb-2">
        <Icon
          :name="'material-symbols:local-shipping-rounded'"
          size="24px"
          class="mr-4 text-gray-600"
        />
        <p class="font-medium text-gray-600 text-sm lg:text-md">
          Free international shipping for order over $40
        </p>
      </div>
      <div class="flex items-center mb-2">
        <Icon :name="'ri:secure-payment-line'" size="24px" class="mr-4 text-gray-600" />
        <p class="font-medium text-gray-600 text-sm lg:text-md">Secure Payment</p>
      </div>
      <div class="flex items-center">
        <Icon :name="'solar:restart-square-outline'" size="24px" class="mr-4 text-gray-600" />
        <p class="font-medium text-gray-600 text-sm lg:text-md">Return within 15 days</p>
      </div>
    </div>
    <div>
      <div @click="onAddToCart">
        <Button type="submit" class="w-full" :text="'Add To Cart'" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatter } from '~~/modules/formatPrice';

defineProps<{
  type: string;
  name: string;
  category: string;
  description: string;
  onAddToCart: (e: Event) => void;
  price: number;
}>();
</script>
