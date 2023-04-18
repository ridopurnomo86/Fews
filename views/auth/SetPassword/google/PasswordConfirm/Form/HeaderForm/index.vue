<template>
  <div v-if="query.type !== 'password_confirm'" class="mb-10">
    <p class="font-bold text-2xl mb-2">Welcome back.</p>
    <p class="font-medium text-sm text-gray-600">Set up password.</p>
    <p class="font-medium text-sm text-gray-600">
      Please create a secure password for your credentials.
    </p>
  </div>
  <div v-else class="mb-10">
    <p class="font-bold text-2xl mb-2">Welcome back.</p>
    <p class="font-medium text-sm text-gray-600">Set up password.</p>
    <p class="font-medium text-sm text-gray-600">We need to verify your account.</p>
    <p class="font-medium text-sm text-gray-600">Please enter a password your email.</p>
  </div>
</template>

<script setup lang="ts">
const { query } = useRoute();
</script>
