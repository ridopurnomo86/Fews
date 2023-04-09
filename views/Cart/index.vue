<template>
  <TransitionFade :delay="200" :duration="600" :appear="true">
    <div class="mx-auto container">
      <h1 class="text-lg font-semibold text-black mb-4">
        My Cart {{ `(${cartStore.countCartItems ?? '-'})` }}
      </h1>
      <div class="grid grid-cols-[70%,30%] grid-flow-row auto-rows-[400px] gap-4">
        <CartList />
        <CartSummary />
      </div>
    </div>
  </TransitionFade>
</template>

<script setup lang="ts">
import { useCartStore } from '~~/stores/useCart';
import CartList from './CartList/index.vue';
import CartSummary from './CartSummary/index.vue';

const cartStore = useCartStore();
</script>
