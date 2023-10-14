<template>
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
        <form v-if="isShowForm" @submit.prevent="handleSubmit">
          <BaseInput
            :id="'label'"
            v-model="formData.label"
            :label="'Label'"
            :name="'label'"
            :type="'text'"
            :placeholder="'Ex. Office / Home'"
            :error-message="`${v$.label.$errors[0]?.$message}`"
            :is-disable="isLoading"
            :is-error="v$.label.$error"
            :on-change="v$.label.$touch"
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
            :id="'recepient_name'"
            v-model="formData.recepient_name"
            :label="'Recepient Name'"
            :name="'recepient_name'"
            :type="'text'"
            :placeholder="'John Mactavish'"
            :error-message="`${v$.recepient_name.$errors[0]?.$message}`"
            :is-disable="isLoading"
            :is-error="v$.recepient_name.$error"
            :on-change="v$.recepient_name.$touch"
          />
          <BaseInput
            :id="'phone_number'"
            v-model="formData.phone_number"
            :label="'Phone Number'"
            :name="'phone_number'"
            :type="'text'"
            :placeholder="'+62812********'"
            :error-message="`${v$.phone_number.$errors[0]?.$message}`"
            :is-disable="isLoading"
            :is-error="v$.phone_number.$error"
            :on-change="v$.phone_number.$touch"
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
            <BaseInput
              :id="'note'"
              v-model="formData.note"
              :label="'Note'"
              :name="'note'"
              :type="'text'"
              :placeholder="''"
              :is-disable="isLoading"
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
              <Button
                type="submit"
                :text="'Save Changes'"
                variant="primary"
                :is-disable="v$.$invalid || v$.$error || isLoading"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
import { required, helpers } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
import country from '../../../../data/country';

const snackbar = useSnackbar();

const isLoading = ref<boolean>(false);

const isShowForm = ref<boolean>(false);

const selectCountry: any = country.map((item: { country: string; code: string }) => ({
  id: item?.country,
  value: item?.code,
  name: item?.country,
}));

const handleShowForm = () => {
  isShowForm.value = !isShowForm.value;
};

const formData = reactive({
  address_name: '',
  city: '',
  country: '',
  label: '',
  note: '',
  phone_number: '',
  recepient_name: '',
  state: '',
  zip_code: '',
});

const mustBePhoneNumber = helpers.regex(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/);

const rules = computed(() => {
  return {
    address_name: {
      required: helpers.withMessage('The Address Name field is required', required),
    },
    city: {
      required: helpers.withMessage('The City field is required', required),
    },
    country: {
      required: helpers.withMessage('The Country field is required', required),
    },
    label: {
      required: helpers.withMessage('The Label field is required', required),
    },
    phone_number: {
      required: helpers.withMessage('The Contact Phone Number field is required', required),
      mustBePhoneNumber: helpers.withMessage('Phone number is not valid', mustBePhoneNumber),
    },
    recepient_name: {
      required: helpers.withMessage('The Full Name field is required', required),
    },
    state: {
      required: helpers.withMessage('The State field is required', required),
    },
    zip_code: {
      required: helpers.withMessage('The Zip Code field is required', required),
    },
  };
});

const v$ = useVuelidate(rules, formData);

const handleSubmit = async () => {
  const isFormCorrect = await v$.value.$validate();

  if (isFormCorrect) {
    const { data } = await useFetch('/api/profile/add-address', {
      method: 'POST',
      lazy: true,
      body: {
        ...formData,
        langitude: '',
        longitude: '',
      },
      onResponse: ({ response }) => {
        if (response) isLoading.value = false;
      },
      onRequest: ({ request }) => {
        if (request) isLoading.value = true;
      },
    });

    const { type, message } = data.value || {};

    if (data.value?.type === 'error') {
      return snackbar.add({
        type,
        text: message,
      });
    }

    if (type === 'success') {
      return snackbar.add({
        type,
        text: message,
      });
    }
  }

  return null;
};
</script>
