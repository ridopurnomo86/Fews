<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <div class="py-20 w-full h-full flex justify-center">
    <div class="flex flex-col justify-center max-w-[450px]">
      <h1 class="font-bold text-xl text-black mb-4 text-center">
        Subscribe to our newsletter to get updates to our latest collections
      </h1>
      <p class="font-medium text-sm text-gray-600 mb-4 text-center">
        Get 20% off on your first order just by subscribing to our newslatter.
      </p>
      <div class="relative w-full">
        <input
          id="email"
          class="appearance-none border text-sm rounded w-full py-2 px-12 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          type="email"
          placeholder="Enter your email"
        />
        <span class="absolute left-0 top-1 mr-2 flex items-center pl-2">
          <div class="focus:outline-none focus:shadow-outline">
            <Icon name="ic:baseline-mail" size="20px" class="cursor-pointer text-gray-600" />
          </div>
        </span>
      </div>
      <Button :text="'Subscribe'" type="submit" />
      <p class="mt-4 text-sm text-gray-600 font-medium text-center">
        You will be able to unsubscribe at any time. Read our Privacy Policy
        <NuxtLink to="#" class="underline font-bold">here.</NuxtLink>
      </p>
    </div>
  </div>
</template>
