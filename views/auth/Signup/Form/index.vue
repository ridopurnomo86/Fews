<template>
  <div class="w-6/12 flex flex-col justify-center px-10 container mx-auto">
    <div class="mb-10">
      <p class="font-bold text-2xl mb-2">Create your Fews Account.</p>
      <p class="font-medium text-sm text-gray-600">
        You will use it to manage your order and complete your registration later.
      </p>
      <p class="font-medium text-sm text-gray-600">
        Already have a Fews.
        <NuxtLink href="/signin" class="text-blue-600 text-bold">Sign In. </NuxtLink>
      </p>
    </div>
    <Form :forms="DATA" />
    <div class="flex items-center justify-between">
      <Button :text="'Create a account'" :type="'submit'" />
    </div>
    <p class="text-gray-500 text-xs mt-4">&copy;2023 Fews Corp. All rights reserved.</p>
  </div>
</template>

<script setup lang="ts">
import Form from '~~/components/Form/index.vue';
import DATA from './data';
</script>
