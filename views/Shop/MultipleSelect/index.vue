<template>
  <div class="md:hidden block">
    <div class="mb-4">
      <label for="category" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
        >Category</label
      >
      <select
        id="countries"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 enabled:focus:outline-none enabled:focus:shadow-outline"
      >
        <option v-for="category in categories" :key="category.id" :value="category.name">
          {{ category.name }}
        </option>
      </select>
    </div>
    <div>
      <label for="type" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
        >Types</label
      >
      <select
        id="type"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 enabled:focus:outline-none enabled:focus:shadow-outline"
      >
        <option v-for="typeProduct in types" :key="typeProduct.id" :value="typeProduct.name">
          {{ typeProduct.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TypesProductDataType, CategoryProductDataType } from '~~/types/product';

const { data: types } = await useFetch<TypesProductDataType[]>('/api/product/type');

const { data: categories } = await useFetch<CategoryProductDataType[]>('/api/product/category');
</script>
