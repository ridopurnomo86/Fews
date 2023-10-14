<template>
  <ProfileLayout>
    <h1 class="font-semibold text-lg text-black mb-4">Shipping Address</h1>
    <AddAddress />
    <div v-for="address in addresses?.data" :key="address.id">
      <AddressCard
        :label="address.label"
        :city="address.city"
        :street-name="address.address_name"
        :country="(getAddressName(address.country) as string)"
        :name="address.recepient_name"
        :state="address.state"
        :zip-code="address.zip_code"
        :on-selected-address="() => handleSelectedAddress(address)"
        :on-delete-address="() => handleDeleteAddress(e, address)"
        :on-edit-address="() => handleEditAddress(e)"
        :is-active="selectedAddress?.id === address.id"
        :is-primary-address="true"
      />
    </div>
    <div
      v-if="addresses?.data.length === 0 || !addresses?.data"
      class="flex flex-col items-center justify-center min-h-[40vh]"
    >
      <div class="border rounded inline p-2 items-center">
        <Icon :name="'heroicons:map-pin'" size="32px" class="text-neutral-600" />
      </div>
      <h1 class="font-semibold mt-2 text-lg antialiased">No Address Added Yet</h1>
      <p class="font-medium text-sm antialiased text-neutral-600">
        Let us pack something special for you.
      </p>
    </div>
  </ProfileLayout>
</template>

<script setup lang="ts">
import country from '~~/data/country';
import { ProfileAddressDataType } from '~~/types/profile/address';
import AddressCard from '~~/components/cards/AddressCard.vue';
import ProfileLayout from '../layout/ProfileLayout/index.vue';
import AddAddress from './AddAddress/index.vue';

const snackbar = useSnackbar();

const selectedAddress = ref<ProfileAddressDataType>();

const { data: addresses, execute } = await useFetch<{ data: ProfileAddressDataType[] }>(
  '/api/profile/address'
);

const getAddressName = (code: string) =>
  country.find((item: { country: string; code: string }) => item.code === code)?.country;

const handleSelectedAddress = (item: ProfileAddressDataType) => {
  selectedAddress.value = item;
};

const handleEditAddress = (e: Event) => {
  e.stopPropagation();
};

const handleDeleteAddress = async (e: Event, item: ProfileAddressDataType) => {
  const { data } = await useFetch('/api/profile/remove-address', {
    method: 'POST',
    lazy: true,
    query: {
      id: item.id,
    },
    redirect: 'follow',
  });

  const { type, message } = data.value || {};

  if (data.value?.type === 'error') {
    return snackbar.add({
      type,
      text: message,
    });
  }

  if (type === 'success') {
    execute();
    return snackbar.add({
      type,
      text: message,
    });
  }

  return null;
};
</script>
