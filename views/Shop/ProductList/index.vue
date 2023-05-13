<template>
  <div class="grid gap-8 grid-cols-fluid justify-items-center">
    <div v-for="product in products" :key="product.id">
      <div class="max-w-[250px]">
        <ProductCard
          :type="product.category"
          :description="product.description"
          :title="product.name"
          :price="product.price"
          :image-url="product.image_url"
          :on-click="
            async () => {
              await navigateTo(
                {
                  path: `/product/${convertProductLink(product.name)}`,
                  replace: true,
                  force: true,
                  query: {
                    product_id: product.id,
                  },
                },
                { replace: true, external: true }
              );
            }
          "
          :on-click-cart="(event:Event) => {
            cartStore.addToCart(product as any, event)
          }
          "
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ProductCard from '~~/components/cards/ProductCard.vue';
import convertProductLink from '~~/modules/covertProductLink';
import { useCartStore } from '~~/stores/useCart';
import { ProductDataType } from '~~/types/product';

export default defineComponent({
  name: 'ProductList',
  components: {
    ProductCard,
  },
  async setup() {
    const router = useRouter();
    const cartStore = useCartStore();
    const { data: products } = await useFetch<ProductDataType[]>('/api/product');

    return { products, cartStore, router, convertProductLink };
  },
});
</script>
