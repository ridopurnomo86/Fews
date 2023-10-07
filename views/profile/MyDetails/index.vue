<template>
  <ProfileLayout>
    <div>
      <div class="flex items-start justify-between">
        <div>
          <h1 class="text-lg font-semibold text-black mb-2">Personal Info</h1>
          <p class="text-sm font-medium text-gray-600">
            Here you can edit public information about yourself.
          </p>
          <p class="text-sm font-medium text-gray-600">
            The changes will be displayed within 5 minutes.
          </p>
        </div>
      </div>
      <div class="mt-8">
        <form @submit.prevent="handleSubmit">
          <BaseInput
            :id="'full_name'"
            v-model="formData.fullName"
            :label="'Full Name'"
            :name="'full_name'"
            :type="'text'"
            :placeholder="''"
            :error-message="`${v$.fullName.$errors[0]?.$message}`"
            :is-disable="isLoading"
            :is-error="v$.fullName.$error"
            :on-change="v$.fullName.$touch"
          />
          <BaseInput
            :id="'email'"
            v-model="formData.email"
            :label="'Email'"
            :name="'email'"
            :type="'email'"
            :placeholder="''"
            :error-message="`${v$.email.$errors[0]?.$message}`"
            :is-disable="true"
            :is-error="v$.email.$error"
            :on-change="v$.email.$touch"
          />
          <BaseInput
            :id="'phone_number'"
            v-model="formData.phoneNumber"
            :label="'Phone Number'"
            :name="'phone_number'"
            :type="'text'"
            :placeholder="''"
            :error-message="`${v$.phoneNumber.$errors[0]?.$message}`"
            :is-disable="true"
            :is-error="v$.phoneNumber.$error"
            :on-change="v$.phoneNumber.$touch"
          />
          <BaseSelectInput
            :id="'gender'"
            v-model="formData.gender"
            :options="[
              { id: 'men', name: 'Men', value: 'men' },
              { id: 'woman', name: 'Woman', value: 'women' },
            ]"
            :label="'Gender'"
            :name="'gender'"
            :placeholder="''"
            :error-message="`${v$.gender.$errors[0]?.$message}`"
            :is-disable="isLoading"
            :is-error="v$.gender.$error"
            :on-change="v$.gender.$touch"
          />
          <label class="block text-gray-700 text-sm font-medium mb-2" :for="'date'"
            >Birth Date</label
          >
          <VueDatePicker v-model="formData.birthDate" />
          <div class="flex mt-4">
            <Button
              type="submit"
              :text="'Save'"
              variant="primary"
              :is-disable="v$.invalid || v$.$error || isLoading"
            />
          </div>
        </form>
      </div>
    </div>
  </ProfileLayout>
</template>

<script setup lang="ts">
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import '@vuepic/vue-datepicker/dist/main.css';
import { required, helpers, email } from '@vuelidate/validators';
import { ProfileDataType } from '~~/types/profile';
import { useVuelidate } from '@vuelidate/core';
import VueDatePicker from '@vuepic/vue-datepicker';
import ProfileLayout from '../layout/ProfileLayout/index.vue';

dayjs.extend(utc);
dayjs.extend(timezone);

const isLoading = ref<boolean>(false);
const snackbar = useSnackbar();

const { data } = await useFetch<ProfileDataType>('/api/profile');

const formData = reactive({
  fullName: data.value?.full_name,
  email: data.value?.email,
  phoneNumber: data.value?.phone_number,
  gender: data.value?.gender,
  birthDate: data.value?.birth_date,
});

const rules = computed(() => {
  return {
    fullName: {
      required: helpers.withMessage('The Name field is required', required),
    },
    email: {
      required: helpers.withMessage('The Email field is required', required),
      email: helpers.withMessage('Invalid Email format', email),
    },
    gender: {
      required: helpers.withMessage('The Gender field is required', required),
    },
    phoneNumber: {
      required: helpers.withMessage('The Gender field is required', required),
    },
    birthDate: {
      required: helpers.withMessage('The date field is required', required),
    },
  };
});

const v$ = useVuelidate(rules, formData);

const handleSubmit = async () => {
  const isFormCorrect = await v$.value.$validate();

  if (isFormCorrect) {
    const body = {
      full_name: formData.fullName,
      gender: formData.gender,
      birth_date: dayjs(dayjs.tz(formData.birthDate, 'Asia/Jakarta')).format(),
    };

    const res: any = useFetch('/api/profile/update', {
      body,
      method: 'POST',
      onResponse: ({ response }) => {
        if (response) isLoading.value = false;
      },
      onRequest: ({ request }) => {
        if (request) isLoading.value = true;
      },
    });

    const { type, message } = res?.data?.value || {};

    if (type === 'error') {
      isLoading.value = false;
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
