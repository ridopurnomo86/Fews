<template>
  <ProductDetail :data="data" />
</template>

<script setup lang="ts">
import ProductDetail from '~/views/product/ProductDetail/index.vue';
import { ProductDataType } from '~~/types/product';

const route = useRoute();
const { data } = useFetch<ProductDataType | any>(`/api/product/${route.params.id}`);

useHead({
  title: data.value?.name,
});
</script>
