<template>
  <TransitionFade :delay="200" :duration="600" :appear="true">
    <div class="mx-auto container grid md:grid-cols-[25%_75%] grid-cols-1 gap-4">
      <MultipleSelect />
      <FilterProduct />
      <ProductList />
    </div>
  </TransitionFade>
</template>

<script lang="ts">
import MultipleSelect from './MultipleSelect/index.vue';
import ProductList from './ProductList/index.vue';
import FilterProduct from './Filter/index.vue';

export default defineComponent({
  name: 'Shop',
  components: {
    ProductList,
    FilterProduct,
    MultipleSelect,
  },
});
</script>
