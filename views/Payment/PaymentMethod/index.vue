<template>
  <TransitionFade :delay="200" :duration="600" :appear="true">
    <main class="relative mx-auto container overflow-x-auto rounded w-full">
      <Stepper />
      <h1 class="font-semibold antialiased text-black text-lg">Payment</h1>
      <p class="font-medium antialiased text-neutral-600 text-sm mb-4">
        Enable more payment method types
        <a href="https://dashboard.stripe.com/settings/payment_methods">in your dashboard</a>.
      </p>
      <form id="payment-form">
        <div id="link-authentication-element" />
        <div id="payment-element" />
        <button
          id="submit"
          type="button"
          disabled
          class="disabled:opacity-50 w-full bg-indigo-600 mt-4 text-white rounded flex items-center justify-center block w-full transition px-4 py-2"
        >
          <p class="text-sm font-semibold">Pay Now</p>
        </button>
      </form>
    </main>
  </TransitionFade>
</template>

<script setup lang="ts">
import { loadStripe } from '@stripe/stripe-js';
import Stepper from './Stepper/index.vue';

const config = useRuntimeConfig();
let stripe: any;
let elements;

const isLoading = ref(true);

const { data }: any = await useFetch('/api/stripe/payment-intent', {
  method: 'POST',
  body: {
    amount: 500,
  },
});

onMounted(async () => {
  stripe = await loadStripe(config.public.stripePublishSecret);

  if (stripe) {
    elements = stripe.elements({ clientSecret: data.value?.client_secret });

    const paymentElement = elements.create('payment', {
      layout: 'tabs',
      business: {
        name: 'Fews Shop',
      },
    });

    paymentElement.mount('#payment-element');
    const linkAuthenticationElement = elements.create('linkAuthentication');
    linkAuthenticationElement.mount('#link-authentication-element');

    isLoading.value = false;
  }
});
</script>
