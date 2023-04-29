<template>
  <div class="mb-4">
    <label v-if="label" class="block text-gray-700 text-sm font-medium mb-2" :for="name">{{
      label
    }}</label>
    <div class="relative" :class="{ [`opacity-50`]: isDisable }">
      <input
        :id="id"
        :name="name"
        :type="type"
        :value="modelValue"
        :disabled="isDisable"
        v-bind="$attrs"
        class="appearance-none border text-sm rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        :placeholder="placeholder"
        :class="{
          'border-red-500 focus:border-red-500': isError,
        }"
        @input="($event) => $emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        @change="onChange"
      />
      <slot />
      <span v-if="isError" class="text-xs text-red-500">
        {{ errorMessage }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
type HTMLInputTypeAttribute =
  | 'number'
  | 'search'
  | 'button'
  | 'time'
  | 'image'
  | 'text'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'month'
  | 'password'
  | 'radio'
  | 'range';

interface BaseInputPropsType {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  isDisable: boolean;
  type: HTMLInputTypeAttribute;
  isError: boolean;
  errorMessage: string;
  onChange: (e: Event) => void;
  modelValue: string;
}

withDefaults(defineProps<BaseInputPropsType>(), {
  isDisable: false,
  isError: false,
  placeholder: '',
  type: 'text',
  modelValue: '',
});
</script>
