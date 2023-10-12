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
        :on-edit-address="(e) => handleEditAddress(e)"
        :is-active="selectedAddress?.id === address.id"
        :is-primary-address="true"
      />
    </div>
  </ProfileLayout>
</template>

<script setup lang="ts">
import country from '~~/data/country';
import { ProfileAddressDataType } from '~~/types/profile/address';
import AddressCard from '~~/components/cards/AddressCard.vue';
import ProfileLayout from '../layout/ProfileLayout/index.vue';
import AddAddress from './AddAddress/index.vue';

const { data: addresses } = await useFetch<{ data: ProfileAddressDataType[] }>(
  '/api/profile/address'
);

const selectedAddress = ref<ProfileAddressDataType>();

const getAddressName = (code: string) =>
  country.find((item: { country: string; code: string }) => item.code === code)?.country;

const handleSelectedAddress = (item: ProfileAddressDataType) => {
  selectedAddress.value = item;
};

const handleEditAddress = (e: Event) => {
  e.stopPropagation();
};
</script>
