<script setup lang="ts">
import { loadStripe } from '@stripe/stripe-js';
import { useCartStore } from '~~/stores/useCart';

const cartStore = useCartStore();
const router = useRouter();

const config = useRuntimeConfig();
let stripe: any;
let elements: any;
let clientSecret: string;

const snackbar = useSnackbar();
const isLoading = ref(true);
const paymentElementRef = ref(null);
const { totalAmount, orderId } = window.history.state;

const { data }: any = await useFetch('/api/stripe/payment-intent', {
  method: 'POST',
  body: {
    amount: totalAmount * 100,
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

const handlePayment = async () => {
  isLoading.value = true;

  await elements.submit();

  const result = await stripe.confirmPayment({
    clientSecret,
    elements,
    redirect: 'if_required',
  });

  if (result.error) {
    isLoading.value = false;
    return snackbar.add({
      type: 'error',
      text: result.error?.message,
    });
  }

  const request = await useFetch('/api/payment', {
    body: {
      order_id: orderId,
    },
    method: 'POST',
    lazy: true,
    onRequestError: ({ response }) => {
      if (response) {
        return snackbar.add({
          type: 'error',
          // eslint-disable-next-line no-underscore-dangle
          text: response._data.message,
        });
      }

      return null;
    },
  });

  request.execute();

  if (request.data) {
    isLoading.value = false;
    router.push({
      path: '/order/success',
      force: true,
      replace: true,
      state: {
        totalAmount,
        orderId,
        transactionId: result.paymentIntent.id,
        paymentType: result.paymentIntent.payment_method_types?.[0],
      },
    });
  }

  return null;
};

onBeforeRouteLeave((to, from, next) => {
  if (to.fullPath !== '/order/success') {
    const answer = window.confirm('Do you really want to leave? you have unsaved changes!');
    if (answer) {
      const orderCookie = useCookie('nuxt.checkout-token');
      orderCookie.value = null;
      return next();
    }
    return next(false);
  }
  return next();
});
</script>

<template>
  <main class="relative mx-auto container overflow-x-auto rounded w-full">
    <h1 class="font-semibold antialiased text-black text-lg">Payment</h1>
    <p class="font-medium antialiased text-neutral-600 text-sm mb-4">
      Enable more payment method types
      <a href="https://dashboard.stripe.com/settings/payment_methods">in your dashboard</a>.
    </p>
    <form id="payment-form" @submit.prevent="handlePayment">
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
  </main>
</template>
