<template>
  <TransitionFade :delay="200" :duration="600" :appear="true">
    <div class="mx-auto container">
      <div class="flex gap-10">
        <div class="max-w-sm">
          <ProductCard
            :description="`Same manufacture as premium European cast iron brands. Same manufacture as premium European cast iron brands.`"
            :title="`Alter Leather Bag`"
            :price="50"
            :image-url="`https://source.unsplash.com/APNnyM36puU`"
          />
        </div>
      </div>
    </div>
  </TransitionFade>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProductCard from '~~/components/cards/ProductCard.vue';

export default defineComponent({
  components: { ProductCard },
  setup() {
    return {};
  },
});
</script>
