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
      </div>
      <OrderList />
    </div>
  </TransitionFade>
</template>

<script setup lang="ts">
import { ProfileAddressDataType } from '~~/types/profile/address';
import { helpers, required } from '@vuelidate/validators';
import useVuelidate from '@vuelidate/core';
import Stepper from './Stepper/index.vue';
import OrderList from './OrderList/index.vue';

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
</script>
