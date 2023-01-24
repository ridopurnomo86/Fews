<template>
    <div class="w-full overflow-hidden">
        <div class="flex w-full items-end justify-between mb-8">
            <div class="section">
                <p class="font-bold text-2xl mb-4">New Arrivals</p>
                <p class="font-medium text-base text-gray-600">Explore new-in products and future bestsellers.</p>
            </div>
            <div class="additional">
                <button class="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded transition-all">
                    See More.
                </button>
            </div>
        </div>
        <Swiper
            style="width: 100%;"
            :modules="[SwiperAutoplay, SwiperFreeMode]"
            :loop="true"
            :free-mode="true"
            :slides-per-view="4"
            :autoplay="{
                delay: -1,
                disableOnInteraction: false
            }"
            :speed="100000"
            :grab-cursor="true"
            :space-between="24"
            :autoplayDisableOnInteraction="true"
            >
                <SwiperSlide v-for="product in DATA" :key="product.product_id">
                    <div class=" max-w-sm">
                        <ProductCard 
                            :description="product.description" 
                            :image-url="product.image_url" 
                            :price="product.price" 
                            :title="product.title" 
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
    </div>
</template>

<script setup lang="ts">
import DATA from '~~/data/products'
import ProductCard from '~~/components/cards/ProductCard.vue';


</script>