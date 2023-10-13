<template>
  <button
    :class="{
      [`opacity-50`]: isDisable,
      'bg-transparent border-gray-600 w-full border text-black enabled:hover:bg-black enabled:hover:text-white transition py-2 px-4 rounded enabled:focus:outline-none enabled:focus:shadow-outline cursor-pointer':
        variant === 'outline',
      'bg-indigo-600 border-gray-600 w-full text-white enabled:hover:bg-indigo-400 enabled:hover:text-white transition py-2 px-4 rounded enabled:focus:outline-none enabled:focus:shadow-outline cursor-pointer':
        variant === 'primary',
      'bg-transparent text-indigo-600 w-full py-2 px-4 enabled:focus:outline-none enabled:focus:shadow-outline cursor-pointer':
        variant === 'invert',
      class: variant === 'custom',
    }"
    :type="type"
    :disabled="isDisable"
    @click="onClick"
  >
    <p v-if="text" class="text-sm xl:text-base font-bold">
      {{ text }}
    </p>
    <slot />
  </button>
</template>

<script setup lang="ts">
interface ButtonPropsType {
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  text?: string;
  isDisable?: boolean;
  variant?: 'primary' | 'outline' | 'invert' | 'custom';
  class?: string;
}

withDefaults(defineProps<ButtonPropsType>(), {
  isDisable: false,
  type: 'button',
  text: '',
  variant: 'outline',
  onClick: () => {},
  class: '',
});
</script>
