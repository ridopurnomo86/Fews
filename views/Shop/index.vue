<template>
  <TransitionFade :delay="200" :duration="600" :appear="true">
    <div class="mx-auto container grid grid-cols-[25%_75%] gap-4">
      <FilterProduct />
      <ProductList />
    </div>
  </TransitionFade>
</template>

<script lang="ts">
import ProductList from './ProductList/index.vue';
import FilterProduct from './Filter/index.vue';

export default defineComponent({
  name: 'Shop',
  components: {
    ProductList,
    FilterProduct,
  },
});
</script>
