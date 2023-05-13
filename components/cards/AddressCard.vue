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
        <p class="font-semibold text-sm text-gray-700 mb-2">{{ addressType }}</p>
        <p class="font-medium text-sm text-gray-700">{{ name }}</p>
        <p class="font-medium text-sm text-gray-700">{{ fullName }}</p>
        <div class="flex items-center">
          <p class="font-medium text-sm text-gray-700 mr-2">{{ city }}</p>
          <p class="font-medium text-sm text-gray-700 mr-2">{{ state }}</p>
          <p class="font-medium text-sm text-gray-700 mr-2">{{ zipCode }}</p>
          <p class="font-medium text-sm text-gray-700">{{ country }}</p>
        </div>
      </div>
    </div>

    <div @click="(e:Event) => onEditAddress(e)">
      <p class="font-medium text-sm text-indigo-700 cursor-pointer">Edit</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  addressType: string;
  name: string;
  fullName: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  isActive: boolean;
  onEditAddress: (e: Event) => void;
  onSelectedAddress: () => void;
}>();
</script>
