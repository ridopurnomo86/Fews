<template>
  <TransitionFade :delay="200" :duration="600" :appear="true">
    <div class="mx-auto container">
      <div class="grid grid-flow-row gap-8 grid-cols-1 lg:grid-cols-[50%,50%] px-5 py-10">
        <ImageProduct :img-url="data.image_url" :name-product="data.name" />
        <Details
          :type="data.type"
          :category="data.category"
          :description="data.description"
          :name="data.name"
          :on-add-to-cart="() => cartStore.addToCart(data as CartProductDataType)"
          :price="data.price"
        />
      </div>
    </div>
  </TransitionFade>
</template>

<script setup lang="ts">
import { useCartStore } from '~~/stores/useCart';
import { CartProductDataType, ProductDataType } from '~~/types/product';
import ImageProduct from './ImageProduct/index.vue';
import Details from './Details/index.vue';

const cartStore = useCartStore();

defineProps<{ data: ProductDataType }>();
</script>
