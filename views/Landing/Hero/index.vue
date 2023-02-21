<template>
  <div class="w-full h-[28rem] mb-20 relative mix-blend-overlay flex mx-auto container gap-8">
    <div class="bg-white flex-1">
      <div class="mb-8 flex flex-col items-left justify-center h-full">
        <p class="font-semibold text-sm text-black mb-2 text-indigo-800">Fews Collection</p>
        <p class="font-bold text-xl md:text-4xl max-w-lg text-black mb-8">
          Reflect who you are with our style.
        </p>
        <p class="font-normal text-xs md:text-sm text-black max-w-lg">
          Style is the only thing you can’t buy. It’s not in a shopping bag, a label, or a price
          tag. It’s something reflected from our soul to the outside world—an emotion.
        </p>
        <button
          type="button"
          class="mt-6 bg-black hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-black rounded transition-all w-32"
          :text="'Shop Now'"
        >
          Shop Now
        </button>
      </div>
    </div>
    <div class="h-full w-full hidden md:block flex-1">
      <nuxt-img
        class="h-full w-full object-cover object-right rounded"
        src="https://source.unsplash.com/D4jRahaUaIc"
        alt="banner-image"
      />
    </div>
  </div>
</template>
