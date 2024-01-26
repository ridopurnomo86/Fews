<script setup lang="ts">
import { formatter } from '~~/modules/formatPrice';

const { getSession } = useAuth();
const { user } = await getSession();
const { totalAmount, orderId, paymentType, transactionId } = window.history.state;

const second = ref(30);
const orderCookie = useCookie('nuxt.checkout-token');

const interval: any = setInterval(() => {
  if (second.value === 0) return clearInterval(interval);
  // eslint-disable-next-line no-return-assign
  return (second.value -= 1);
}, 1000);

const handleNavigate = async () => {
  orderCookie.value = null;
  return navigateTo('/', { external: true, replace: true });
};

watch(second, (after) => {
  if (after === 0) {
    navigateTo('/', { external: true, replace: true });
  }
  orderCookie.value = null;
});
</script>

<template>
  <main class="relative mx-auto container overflow-x-auto rounded w-full">
    <div class="flex min-h-screen items-center justify-center">
      <div class="max-w-[500px] flex flex-col items-center justify-center text-center">
        <div class="p-4 rounded-full bg-green-600 mb-4 w-min">
          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
            <path fill="#FFF" d="M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59z"></path>
          </svg>
        </div>
        <h1 class="font-semibold antialiased text-black text-lg mb-2">Payment Success</h1>
        <p class="font-medium antialiased text-neutral-600 text-sm mb-4">
          Thank you, your payment has been successful. A confirmation has been sent to your email
          id.
        </p>
        <div class="w-full text-left">
          <p class="py-2 font-semibold text-gray-600">Payment Details</p>
          <div class="border-t-[1px] py-4 px-4">
            <div class="flex items-center justify-between py-1">
              <p class="text-md font-medium text-neutral-600">Payment Type</p>
              <p class="text-md font-medium text-neutral-800">{{ paymentType }}</p>
            </div>
            <div class="flex items-center justify-between py-1">
              <p class="text-md font-medium text-neutral-600">Order Id</p>
              <p class="text-md font-medium text-neutral-800">{{ orderId }}</p>
            </div>
            <div class="flex items-center justify-between py-1">
              <p class="text-md font-medium text-neutral-600">Email</p>
              <p class="text-md font-medium text-neutral-800">{{ user?.email }}</p>
            </div>
          </div>
          <div class="border-t-[1px] py-4 px-4">
            <div class="flex items-center justify-between py-1">
              <p class="text-md font-medium text-neutral-600">Amount Paid</p>
              <p class="text-md font-bold text-neutral-800">
                {{ formatter.format(Number(totalAmount)) }}
              </p>
            </div>
            <div class="flex items-center justify-between py-1">
              <p class="text-md font-medium text-neutral-600">Transaction Id</p>
              <p class="text-md font-medium text-neutral-800">{{ transactionId }}</p>
            </div>
          </div>
        </div>
        <Button
          type="button"
          class="w-full"
          :is-disable="false"
          :text="'Back to store'"
          :on-click="() => handleNavigate()"
        />
        <p class="text-md font-medium text-neutral-600 mt-4">
          Automatically redirecting in
          <span class="font-bold text-neutral-800">{{ second }}</span> sec
        </p>
      </div>
    </div>
  </main>
</template>
