<template>
  <div class="h-full w-full overflow-hidden rounded border max-h-[550px] hidden md:block">
    <p class="px-4 py-2 font-semibold text-lg">Filter</p>
    <div class="types-container">
      <button
        :text="''"
        type="button"
        class="flex items-center justify-between block w-full transition px-4 py-2"
      >
        <p class="text-sm font-semibold">Types</p>
      </button>
      <div v-for="typeProduct in types" :key="typeProduct.id">
        <div class="flex items-center">
          <input
            :id="typeProduct.name"
            type="checkbox"
            value=""
            class="outline-0 w-4 h-4 mx-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            :for="typeProduct.name"
            class="py-2 rounded-lg hover:text-indigo-600 transition cursor-pointer text-sm font-medium text-gray-500"
            >{{ typeProduct.name }}</label
          >
        </div>
      </div>
    </div>
    <div class="categories-container">
      <button
        :text="''"
        type="button"
        class="flex items-center justify-between block w-full transition px-4 py-2"
      >
        <p class="text-sm font-semibold">Category</p>
      </button>
      <div v-for="category in categories" :key="category.id">
        <div class="flex items-center">
          <input
            :id="category.name"
            type="checkbox"
            value=""
            class="outline-0 w-4 h-4 mx-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            :for="category.name"
            class="py-2 rounded-lg hover:text-indigo-600 transition cursor-pointer text-sm font-medium text-gray-500"
            >{{ category.name }}</label
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TypesProductDataType, CategoryProductDataType } from '~~/types/product';

const { data: types } = await useFetch<TypesProductDataType[]>('/api/product/type');

const { data: categories } = await useFetch<CategoryProductDataType[]>('/api/product/category');
</script>
