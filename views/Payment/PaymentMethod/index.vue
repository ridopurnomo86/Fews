<template>
  <TransitionFade :delay="200" :duration="600" :appear="true">
    <main class="relative mx-auto container overflow-x-auto rounded w-full">
      <Stepper />
      <main>
        <h1>Payment</h1>

        <p>
          Enable more payment method types
          <a href="https://dashboard.stripe.com/settings/payment_methods" target="_blank"
            >in your dashboard</a
          >.
        </p>

        <form id="payment-form" @submit.prevent="handleSubmit">
          <div id="link-authentication-element" />
          <div id="payment-element" />
          <button id="submit" type="submit">Pay now</button>
          <sr-messages :messages="messages" />
        </form>
      </main>
    </main>
  </TransitionFade>
</template>

<script setup lang="ts">
import { loadStripe } from '@stripe/stripe-js';
import Stepper from './Stepper/index.vue';

const isLoading = ref(false);
const messages = ref([]);

const { data } = await useFetch('/api/stripe/payment-intent', {
  method: 'POST',
  body: {
    amount: 500,
  },
});

let stripe: any;
let elements;

onMounted(async () => {
  const config = useRuntimeConfig();
  // const { publishableKey } = await fetch('/api/config').then((res) => res.json());
  stripe = await loadStripe(config.stripePublishSecret);

  // const { clientSecret, error: backendError } = await fetch('/api/create-payment-intent').then(
  //   (res) => res.json()
  // );

  // if (backendError) {
  //   messages.value.push(backendError.message);
  // }
  // messages.value.push(`Client secret returned.`);

  elements = stripe.elements({ clientSecret: data.value?.client_secret });
  const paymentElement = elements.create('payment');
  paymentElement.mount('#payment-element');
  const linkAuthenticationElement = elements.create('linkAuthentication');
  linkAuthenticationElement.mount('#link-authentication-element');
  isLoading.value = false;
});
</script>
