<template>
  <TransitionFade :delay="200" :duration="600" :appear="true">
    <div class="mx-auto container">
      <div class="flex flex-wrap gap-12">
        <div v-for="product in products" :key="product.id">
          <div class="max-w-[250px]">
            <ProductCard
              :type="product.category"
              :description="product.description"
              :title="product.name"
              :price="product.price"
              :image-url="product.image_url"
            />
          </div>
        </div>
      </div>
    </div>
  </TransitionFade>
</template>

<script setup lang="ts">
import ProductCard from '~~/components/cards/ProductCard.vue';

const { data: products } = await useFetch('/api/product');
</script>
