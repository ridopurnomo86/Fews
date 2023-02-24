<template>
  <TransitionFade :delay="200" :duration="600" :appear="true">
    <div class="mx-auto container">
      <div class="flex gap-10">
        <div class="max-w-sm">
          <ProductCard
            :type="'Mini Bag'"
            :description="`Same manufacture as premium European cast iron brands. Same manufacture as premium European cast iron brands.`"
            :title="`Alter Leather Bag`"
            :price="50"
            :image-url="`https://source.unsplash.com/APNnyM36puU`"
          />
        </div>
      </div>
    </div>
  </TransitionFade>
</template>

<script setup lang="ts">
import ProductCard from '~~/components/cards/ProductCard.vue';

const { data } = await useFetch('/api/product');

console.log(data);
</script>
