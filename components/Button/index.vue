<template>
  <button
    class="bg-transparent border-gray-600 border enabled:hover:bg-black enabled:hover:text-white text-black font-bold transition py-2 px-4 rounded enabled:focus:outline-none enabled:focus:shadow-outline"
    :class="{ [`opacity-50`]: isDisable }"
    :type="type"
    :disabled="isDisable"
    @click="onClick"
  >
    {{ text }}
  </button>
</template>

<script setup lang="ts">
interface ButtonPropsType {
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  text?: string;
  isDisable?: boolean;
}

withDefaults(defineProps<ButtonPropsType>(), {
  isDisable: false,
  type: 'button',
  text: '',
  onClick: () => {},
});
</script>
