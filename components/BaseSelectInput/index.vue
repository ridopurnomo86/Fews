<template>
  <div class="mb-4">
    <label v-if="label" class="block text-gray-700 text-sm font-medium mb-2" :for="name">{{
      label
    }}</label>
    <div class="relative">
      <select
        :id="id"
        class="appearance-none text-sm border rounded text-gray-700 block w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline w-full"
        @change="onChange"
      >
        <option value="" selected disabled hidden>Choose {{ name }}</option>
        <option
          v-for="option in options"
          :key="option.id"
          :value="option.value"
          :selected="option.value === modelValue"
        >
          {{ option.name }}
        </option>
      </select>
      <slot />
      <span v-if="isError" class="text-xs text-red-500">
        {{ errorMessage }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface BaseSelectInputPropsType {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  isDisable: boolean;
  isError: boolean;
  errorMessage: string;
  onChange: (e: Event) => void;
  modelValue: string;
  options: Array<{ id: string; value: string; name: string }>;
}

withDefaults(defineProps<BaseSelectInputPropsType>(), {
  isDisable: false,
  isError: false,
  placeholder: '',
  modelValue: '',
});
</script>
