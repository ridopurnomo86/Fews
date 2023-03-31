<template>
  <div class="flex flex-wrap gap-12">
    <div v-for="product in products" :key="product.id">
      <div class="max-w-[250px]">
        <ProductCard
          :type="product.category"
          :description="product.description"
          :title="product.name"
          :price="product.price"
          :image-url="product.image_url"
          :on-click-cart="() => cartStore.addToCart(product)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ProductCard from '~~/components/cards/ProductCard.vue';
import { useCartStore } from '~~/stores/useCart';
import { ProductDataType } from '~~/types/product';

export default defineComponent({
  name: 'ProductList',
  components: {
    ProductCard,
  },
  async setup() {
    const cartStore = useCartStore();
    const { data: products } = await useFetch<ProductDataType[]>('/api/product');

    return { products, cartStore };
  },
});
</script>
