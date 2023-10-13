<template>
  <div class="background-container h-full w-6/12 hidden lg:block">
    <div class="relative mix-blend-overlay">
      <nuxt-img
        src="https://source.unsplash.com/DYUqR5lVD2I"
        alt="BannerImage"
        :fit="'cover'"
        :preload="true"
        :loading="'lazy'"
        class="absolute h-[100vh] w-full object-cover object-center opacity-70"
      />
      <div class="absolute flex items-end p-12 h-[100vh] w-full">
        <div class="flex flex-col">
          <p class="text-3xl text-white font-semibold mb-12">
            "Fashion is a religion in one sense. Once upon a time, our brand was considered the
            sanctum sanctorum of fashion. I want to produce things that people really want to buy."
          </p>
          <p class="text-xl text-white font-semibold">Alessandro Michele</p>
          <p class="text-base text-white font-normal">Designer</p>
        </div>
      </div>
      <div class="absolute -z-10 h-[100vh] w-full bg-gradient-to-b from-zinc-900 to-black" />
    </div>
  </div>
</template>
