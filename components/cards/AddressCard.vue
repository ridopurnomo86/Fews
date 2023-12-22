<template>
  <div
    class="p-4 transition bg-white border border-gray-300 rounded mb-4 flex justify-between cursor-pointer"
    :class="{
      'border-indigo-500 focus:border-indigo-500': isActive,
    }"
    @click="onSelectedAddress"
  >
    <div class="flex flex-row items-start">
      <div>
        <input
          :id="name"
          :checked="isActive"
          type="radio"
          :value="''"
          name="radio-colors"
          class="form-radio w-[14px] h-[14px] text-indigo-600 bg-gray-100 border-gray-300 accent-indigo-600"
        />
        <label
          :for="name"
          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        ></label>
      </div>
      <div>
        <div class="flex mb-2">
          <p class="font-semibold text-sm text-gray-700">{{ label }}</p>
          <p v-if="isPrimaryAddress" class="font-semibold text-sm text-gray-700 leading-[22px]">
            &nbsp;|&nbsp;Primary Address
          </p>
        </div>
        <p class="font-medium text-xs md:text-sm text-gray-700 mb-2">{{ name }}</p>
        <p class="font-medium text-xs md:text-sm text-gray-700">{{ streetName }}</p>
        <div class="flex items-center flex-wrap">
          <p class="font-medium text-xs md:text-sm text-gray-700 mr-2">{{ city }}</p>
          <p class="font-medium text-xs md:text-sm text-gray-700 mr-2">{{ state }}</p>
          <p class="font-medium text-xs md:text-sm text-gray-700 mr-2">{{ zipCode }}</p>
          <p class="font-medium text-xs md:text-sm text-gray-700">{{ country }}</p>
        </div>
      </div>
    </div>
    <div>
      <button type="button" @click="onDeleteAddress">
        <p class="font-medium text-sm text-red-700 cursor-pointer">Delete</p>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
  name: string;
  streetName: string;
  isPrimaryAddress?: boolean;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  isActive: boolean;
  onDeleteAddress: () => void;
  onSelectedAddress: () => void;
}>();
</script>
