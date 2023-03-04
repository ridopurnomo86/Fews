<template>
  <div class="w-6/12 flex flex-col justify-center px-10 container mx-auto">
    <div class="mb-10">
      <p class="font-bold text-2xl mb-2">Welcome back.</p>
      <p class="font-medium text-sm text-gray-600">Log in into your account.</p>
      <p class="font-medium text-sm text-gray-600">
        Dont't have a Fews account?
        <NuxtLink href="/signup" class="text-blue-600 text-bold">Sign Up. </NuxtLink>
      </p>
    </div>

    <div class="w-full relative">
      <form>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-medium mb-2" for="email">
            Email Address
          </label>
          <input
            id="email"
            class="appearance-none border text-sm rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="john@email.com"
          />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-medium mb-2" for="password">
            Password
          </label>
          <input
            id="password"
            class="appearance-none border text-sm rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="******"
          />
          <span class="absolute inset-y-0 right-0 mr-2 flex items-center pl-2">
            <div class="focus:outline-none focus:shadow-outline">
              <Icon
                name="ant-design:eye-outlined"
                size="20px"
                class="cursor-pointer text-gray-600"
              />
            </div>
          </span>
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-transparent border-gray-600 border hover:bg-black hover:text-white text-black font-bold transition py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign in.
          </button>
        </div>
      </form>
      <p class="text-gray-500 text-xs mt-4">&copy;2023 Fews Corp. All rights reserved.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FormSignin',
  components: {},
});
</script>
