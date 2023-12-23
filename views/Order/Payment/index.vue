<template>
  <TransitionFade :delay="200" :duration="600" :appear="true">
    <main class="relative mx-auto container overflow-x-auto rounded w-full">
      <Stepper />
      <div>
        <h1 class="font-semibold antialiased text-black text-lg">Payment</h1>
        <p class="font-medium antialiased text-neutral-600 text-sm mb-4">
          Enable more payment method types
          <a href="https://dashboard.stripe.com/settings/payment_methods">in your dashboard</a>.
        </p>
        <form id="payment-form" @submit.prevent="handlePayment">
          <div id="link-authentication-element" />
          <div id="payment-element" ref="paymentElementRef" />
          <button
            id="submit"
            type="submit"
            class="disabled:opacity-50 w-full bg-indigo-600 mt-4 text-white rounded flex items-center justify-center block w-full transition px-4 py-2"
            :disabled="isLoading"
            @click="handlePayment"
          >
            <p class="text-sm font-semibold">Pay Now</p>
          </button>
        </form>
      </div>
    </main>
  </TransitionFade>
</template>

<script setup lang="ts">
import { loadStripe } from '@stripe/stripe-js';
import { useCartStore } from '~~/stores/useCart';
import Stepper from './Stepper/index.vue';

const cartStore = useCartStore();

const config = useRuntimeConfig();
let stripe: any;
let elements: any;
let clientSecret: string;

const isLoading = ref(true);
const paymentElementRef = ref(null);

const { data }: any = await useFetch('/api/stripe/payment-intent', {
  method: 'POST',
  body: {
    amount: Number(cartStore.countTotalPrice) * 100,
  },
});

onMounted(async () => {
  cartStore.deleteAllCart();

  stripe = await loadStripe(config.public.stripePublishSecret);

  if (stripe) {
    clientSecret = data.value?.client_secret;
    elements = stripe.elements({ clientSecret: data.value?.client_secret });

    const paymentElement = elements.create('payment', {
      layout: 'tabs',
      business: {
        name: 'Fews Shop',
      },
    });
    paymentElement.mount('#payment-element');

    isLoading.value = false;
  }
});

watch(
  () => paymentElementRef.value,
  () => {
    if (paymentElementRef.value) {
      isLoading.value = false;
    }
  },
  { deep: true, immediate: true }
);

const handlePayment = async () => {
  isLoading.value = true;

  await elements.submit();

  const result = await stripe.confirmPayment({
    clientSecret,
    elements,
    confirmParams: {
      return_url: 'https://example.com',
    },
  });

  if (result) {
    isLoading.value = false;
  }
};
</script>
