<template>
  <div class="background-container h-full w-6/12 hidden lg:block">
    <div class="relative mix-blend-overlay">
      <nuxt-img
        src="/images/signup-banner.jpg"
        alt="signup-banner"
        class="absolute h-[100vh] w-full object-cover object-top opacity-70"
      />
      <div class="absolute flex items-end p-12 h-[100vh] w-full">
        <div class="flex flex-col">
          <p class="text-3xl text-white font-semibold mb-12">
            "A little bad taste is like a nice splash of paprika. We all need a splash of bad
            taste—it's hearty, it's healthy, it's physical. I think we could use more of it. No
            taste is what I'm against."
          </p>
          <p class="text-xl text-white font-semibold">Diana Vreeland</p>
          <p class="text-base text-white font-normal">Designer</p>
        </div>
      </div>
      <div class="absolute -z-10 h-[100vh] w-full bg-gradient-to-b from-zinc-900 to-neutral-800" />
    </div>
  </div>
</template>
