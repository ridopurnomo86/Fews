<template>
  <div class="w-full overflow-hidden">
    <div class="flex w-full items-end justify-between mb-8">
      <div class="section">
        <p class="font-bold text-2xl mb-2">New <span class="text-indigo-800">Arrivals.</span></p>
        <p class="font-medium text-sm text-gray-600">
          Explore new-in products and future bestsellers.
        </p>
        <p class="font-medium text-sm text-gray-600 max-w-md">
          Find your bag from our various collections. Here bag are endless and profit is also
          endless.
        </p>
      </div>
      <div class="additional">
        <button
          type="button"
          class="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded transition-all"
        >
          See More.
        </button>
      </div>
    </div>
    <Swiper
      style="min-width: 1200px !important"
      :modules="[SwiperAutoplay, SwiperFreeMode]"
      :loop="true"
      :free-mode="true"
      :autoplay="{
        delay: -1,
        disableOnInteraction: false,
      }"
      :speed="100000"
      :grab-cursor="true"
      :space-between="24"
      :slides-per-view="4"
      :autoplay-disable-on-interaction="true"
    >
      <SwiperSlide v-for="product in products" :key="product.product_id">
        <div class="max-w-[250px]">
          <ProductCard
            :type="product.category"
            :description="product.description"
            :title="product.name"
            :price="product.price"
            :image-url="product.image_url"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import ProductCard from '~~/components/cards/ProductCard.vue';
import { ProductDataType } from '~~/types/product';

const { data: products } = await useFetch<ProductDataType[]>('/api/product');
</script>
