<template>
  <TransitionFade :delay="200" :duration="600" :appear="true">
    <div class="relative mx-auto container overflow-x-auto rounded w-full">
      <Stepper />
      <div>
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
      </div>
      <OrderList :is-loading="isLoading" :on-place-order="handlePlaceOrder" />
    </div>
  </TransitionFade>
</template>

<script setup lang="ts">
import { ProfileAddressDataType } from '~~/types/profile/address';
import { helpers, required } from '@vuelidate/validators';
import { useCartStore } from '~~/stores/useCart';
import useVuelidate from '@vuelidate/core';
import Stepper from './Stepper/index.vue';
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
        address_id: 6,
        status: 'PENDING',
        items: cartStore.cartItems.map((item: any) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        })),
      },
      onResponse: async () => {
        isLoading.value = false;
        await router.push({
          path: 'order/payment',
          force: true,
          replace: true,
          state: {
            totalAmount: cartStore.countTotalPrice,
          },
        });
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
</script>
