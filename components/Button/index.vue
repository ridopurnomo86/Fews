<template>
  <button
    :text="text"
    class="bg-transparent border-gray-600 border hover:bg-black hover:text-white text-black font-bold transition py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    type="button"
    onclick="onClick"
  >
    {{ text }}
  </button>
</template>

<script setup lang="ts">
defineProps<{
  onClick?: () => void;
  text: string;
}>();
</script>
