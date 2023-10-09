<template>
  <ProfileLayout>
    <h1 class="font-semibold text-lg text-black mb-4">Shipping Address</h1>
    <div class="border-b-[1px] my-4 pb-4">
      <div class="border p-4 rounded bg-white">
        <div
          class="cursor-pointer flex items-center justify-between"
          :class="[isShowForm && 'mb-4']"
          @click="handleShowForm"
        >
          <p class="font-semibold text-sm text-gray-700">Add New Address</p>
          <Icon
            v-if="isShowForm"
            :name="'material-symbols:arrow-drop-up-rounded'"
            size="32px"
            class="text-gray-600"
          />
          <Icon
            v-else
            :name="'material-symbols:arrow-drop-down-rounded'"
            size="32px"
            class="text-gray-600"
          />
        </div>
        <div class="transition duration-500" :class="[isShowForm ? 'opacity-100' : 'opacity-0']">
          <form v-if="isShowForm">
            <BaseInput
              :id="'full_name'"
              v-model="formData.full_name"
              :label="'Full Name'"
              :name="'full_name'"
              :type="'text'"
              :placeholder="'John Mactavish'"
              :error-message="`${v$.full_name.$errors[0]?.$message}`"
              :is-disable="isLoading"
              :is-error="v$.full_name.$error"
              :on-change="v$.full_name.$touch"
            />
            <BaseInput
              :id="'address_name'"
              v-model="formData.address_name"
              :label="'Street Address'"
              :name="'address_name'"
              :type="'text'"
              :placeholder="'4141 Malburn'"
              :error-message="`${v$.address_name.$errors[0]?.$message}`"
              :is-disable="isLoading"
              :is-error="v$.address_name.$error"
              :on-change="v$.address_name.$touch"
            />
            <BaseInput
              :id="'contact_phone_number'"
              v-model="formData.contact_phone_number"
              :label="'Contact Phone Number'"
              :name="'contact_phone_number'"
              :type="'text'"
              :placeholder="'+62812********'"
              :error-message="`${v$.contact_phone_number.$errors[0]?.$message}`"
              :is-disable="isLoading"
              :is-error="v$.contact_phone_number.$error"
              :on-change="v$.contact_phone_number.$touch"
            />
            <BaseSelectInput
              :id="'country'"
              v-model="formData.country"
              :options="selectCountry"
              :label="'Country'"
              :name="'country'"
              :placeholder="''"
              :error-message="`${v$.country.$errors[0]?.$message}`"
              :is-disable="isLoading"
              :is-error="v$.country.$error"
              :on-change="v$.country.$touch"
            />
            <div class="grid grid-cols-1 md:grid-cols-3 md:gap-4">
              <BaseInput
                :id="'city'"
                v-model="formData.city"
                :label="'City'"
                :name="'city'"
                :type="'text'"
                :placeholder="''"
                :error-message="`${v$.city.$errors[0]?.$message}`"
                :is-disable="isLoading"
                :is-error="v$.city.$error"
                :on-change="v$.city.$touch"
              />
              <BaseInput
                :id="'state'"
                v-model="formData.state"
                :label="'State'"
                :name="'state'"
                :type="'text'"
                :placeholder="''"
                :error-message="`${v$.state.$errors[0]?.$message}`"
                :is-disable="isLoading"
                :is-error="v$.state.$error"
                :on-change="v$.state.$touch"
              />
              <BaseInput
                :id="'zip_code'"
                v-model="formData.zip_code"
                :label="'Zip Code'"
                :name="'zip_code'"
                :type="'text'"
                :placeholder="'11921'"
                :error-message="`${v$.zip_code.$errors[0]?.$message}`"
                :is-disable="isLoading"
                :is-error="v$.zip_code.$error"
                :on-change="v$.zip_code.$touch"
              />
            </div>
            <div class="block md:flex">
              <button
                class="rounded text-gray-600 border text-sm bg-white px-4 py-2 font-semibold mr-2 w-full mb-4 md:mb-0 md:max-w-[150px]"
                type="button"
              >
                Cancel
              </button>
              <div class="w-full md:max-w-[150px]">
                <Button type="button" :text="'Save Changes'" variant="primary" :is-disable="true" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div v-for="address in addresses" :key="address.id">
      <AddressCard
        :address-type="address.address_type"
        :city="address.city"
        :country="(getAddressName(address.country) as string)"
        :full-name="address.full_name"
        :state="address.state"
        :zip-code="address.zip_code"
        :name="address.address_name"
        :on-selected-address="() => handleSelectedAddress(address)"
        :on-edit-address="(e) => handleEditAddress(e)"
        :is-active="selectedAddress?.id === address.id"
      />
    </div>
  </ProfileLayout>
</template>

<script setup lang="ts">
import { required, helpers } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
import country from '~~/data/country';
import { ProfileAddressDataType } from '~~/types/profile/address';
import AddressCard from '~~/components/cards/AddressCard.vue';
import ProfileLayout from '../layout/ProfileLayout/index.vue';

const { data: addresses } = await useFetch<ProfileAddressDataType[]>('/api/profile/address');

const selectCountry: any = country.map((item: { country: string; code: string }) => ({
  id: item?.country,
  value: item?.code,
  name: item?.country,
}));

const isLoading = ref<boolean>(false);
const isShowForm = ref<boolean>(false);
const selectedAddress = ref<ProfileAddressDataType>();

const getAddressName = (code: string) =>
  country.find((item: { country: string; code: string }) => item.code === code)?.country;

const handleSelectedAddress = (item: ProfileAddressDataType) => {
  selectedAddress.value = item;
};

const handleEditAddress = (e: Event) => {
  e.stopPropagation();
};

const handleShowForm = () => {
  isShowForm.value = !isShowForm.value;
};

const formData = reactive({
  country: '',
  full_name: '',
  address_name: '',
  zip_code: '',
  city: '',
  state: '',
  contact_phone_number: '',
});

const rules = computed(() => {
  return {
    country: {
      required: helpers.withMessage('The Country field is required', required),
    },
    full_name: {
      required: helpers.withMessage('The Full Name field is required', required),
    },
    address_name: {
      required: helpers.withMessage('The Address Name field is required', required),
    },
    zip_code: {
      required: helpers.withMessage('The Zip Code field is required', required),
    },
    city: {
      required: helpers.withMessage('The City field is required', required),
    },
    state: {
      required: helpers.withMessage('The State field is required', required),
    },
    contact_phone_number: {
      required: helpers.withMessage('The Contact Phone Number field is required', required),
    },
  };
});

const v$ = useVuelidate(rules, formData);
</script>
