<template>
  <div class="w-6/12 flex flex-col justify-center pr-20">
    <div class="mb-10">
      <p class="font-bold text-2xl mb-2">Create your Fews Account.</p>
      <p class="font-medium text-sm text-gray-600">
        You will use it to manage your order and complete your registration
        later.
      </p>
      <p class="font-medium text-sm text-gray-600">
        Already have a Fews.
        <NuxtLink href="/signin" class="text-blue-600 text-bold"
          >Sign In.
        </NuxtLink>
      </p>
    </div>

    <div class="w-full">
      <form>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-medium mb-2"
            for="email"
          >
            Email Address
          </label>
          <input
            class="appearance-none border text-sm rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="john@email.com"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-medium mb-2"
            for="password"
          >
            Password
          </label>
          <input
            class="appearance-none border text-sm rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
          />
          <p class="text-gray-600 text-xs">
            Your password must be at least 8 Character in length and may not
            contain spaces.
          </p>
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-transparent border-gray-600 border hover:bg-black hover:text-white text-black font-bold transition py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Create a account
          </button>
        </div>
      </form>
      <p class="text-gray-500 text-xs mt-4">
        &copy;2023 Fews Corp. All rights reserved.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>
