<template>
  <div class="flex flex-wrap gap-12">
    <div v-for="product in products" :key="product.product_id">
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
</template>

<script lang="ts">
import ProductCard from '~~/components/cards/ProductCard.vue';
import { ProductDataType } from '~~/types/product';

export default defineComponent({
  name: 'ProductList',
  components: {
    ProductCard,
  },
  async setup() {
    const { data: products } = await useFetch<ProductDataType[]>('/api/product');

    return { products };
  },
});
</script>
