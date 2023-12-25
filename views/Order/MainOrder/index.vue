<script setup lang="ts">
import { ProfileAddressDataType } from '~~/types/profile/address';
import { helpers, required } from '@vuelidate/validators';
import { useCartStore } from '~~/stores/useCart';
import useVuelidate from '@vuelidate/core';
import OrderList from './OrderList/index.vue';

const cartStore = useCartStore();

const router = useRouter();

const snackbar = useSnackbar();

const isLoading = ref(false);

const formData = reactive({
  shipping_address: '',
});

const rules = computed(() => {
  return {
    shipping_address: {
      required: helpers.withMessage('The Address field is required', required),
    },
  };
});

const v$ = useVuelidate(rules, formData);

const { data: addresses } = await useFetch<any>('/api/profile/address', {
  transform: ({ data: res }) => {
    return res.map((item: ProfileAddressDataType) => ({
      id: item.id,
      name: item.address_name,
      value: item.id,
    }));
  },
});

const handlePlaceOrder = async () => {
  const isFormCorrect = await v$.value.$validate();

  if (isFormCorrect) {
    const { data } = await useFetch('/api/order', {
      method: 'POST',
      lazy: true,
      body: {
        shipping_price: 0,
        total_price: cartStore.countTotalPrice,
        address_id: Number(formData.shipping_address),
        status: 'PENDING',
        items: cartStore.cartItems.map((item: any) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        })),
      },
      onResponse: async ({ response }) => {
        // eslint-disable-next-line no-underscore-dangle
        if (response._data.type === 'success') {
          isLoading.value = false;
          await router.push({
            path: 'order/payment',
            force: true,
            state: {
              totalAmount: cartStore.countTotalPrice,
              // eslint-disable-next-line no-underscore-dangle
              orderId: response._data.order_id,
            },
          });
        }
      },
      onRequest: ({ request }) => {
        if (request) isLoading.value = true;
      },
    });

    if (data.value?.type === 'error')
      return snackbar.add({
        type: 'error',
        text: data.value.message,
      });
  }

  return null;
};

// onBeforeRouteLeave((to, from, next) => {
//   const answer = window.confirm('Do you really want to leave? you have unsaved changes!');
//   if (answer) {
//     const orderCookie = useCookie('nuxt.checkout-token');
//     orderCookie.value = null;
//     return next();
//   }
//   return next(false);
// });
</script>

<template>
  <main class="relative mx-auto container overflow-x-auto rounded w-full mb-8">
    <BaseSelectInput
      :id="'Shipping Address'"
      v-model="formData.shipping_address"
      :options="addresses"
      :label="'Shipping Address'"
      :name="'Shipping Address'"
      :placeholder="''"
      :error-message="`${v$.shipping_address.$errors[0]?.$message}`"
      :is-disable="false"
      :is-error="v$.shipping_address.$error"
      :on-change="v$.shipping_address.$touch"
    />
    <NuxtLink to="/profile/address" class="flex items-center mb-8 cursor-pointer">
      <Icon :name="'material-symbols:add'" size="20px" class="mr-2 text-gray-600" />
      <p class="text-sm text-neutral-600 font-medium">Add Address</p>
    </NuxtLink>
    <OrderList :is-loading="isLoading" :on-place-order="handlePlaceOrder" />
  </main>
</template>
