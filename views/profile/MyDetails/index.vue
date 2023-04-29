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
        <div class="hidden md:flex">
          <button
            class="rounded text-gray-600 border text-sm bg-white px-4 py-2 font-semibold mr-2"
            type="button"
          >
            Cancel
          </button>
          <Button type="button" :text="'Save'" variant="primary" :is-disable="true" />
        </div>
      </div>
      <div class="mt-8">
        <form @submit.prevent="handleSubmit">
          <BaseInput
            :id="'full_name'"
            v-model="formData.name"
            :label="'Full Name'"
            :name="'full_name'"
            :type="'text'"
            :placeholder="''"
            :error-message="`${v$.name.$errors[0]?.$message}`"
            :is-disable="isLoading"
            :is-error="v$.name.$error"
            :on-change="v$.name.$touch"
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
          <VueDatePicker v-model="formData.date" />
          <div class="flex mt-4 md:hidden">
            <Button type="submit" :text="'Save'" variant="primary" :is-disable="true" />
          </div>
        </form>
      </div>
    </div>
  </ProfileLayout>
</template>

<script setup lang="ts">
import '@vuepic/vue-datepicker/dist/main.css';
import { required, helpers, email } from '@vuelidate/validators';
import { ProfileDataType } from '~~/types/profile';
import { useVuelidate } from '@vuelidate/core';
import VueDatePicker from '@vuepic/vue-datepicker';
import ProfileLayout from '../layout/ProfileLayout/index.vue';

const isLoading = ref<boolean>(false);

const { data } = await useFetch<ProfileDataType>('/api/profile');

const formData = reactive({
  name: data.value?.full_name,
  email: data.value?.email,
  gender: data.value?.gender,
  date: data.value?.birth_date,
});

const rules = computed(() => {
  return {
    name: {
      required: helpers.withMessage('The Name field is required', required),
    },
    email: {
      required: helpers.withMessage('The Email field is required', required),
      email: helpers.withMessage('Invalid Email format', email),
    },
    gender: {
      required: helpers.withMessage('The Gender field is required', required),
    },
    date: {
      required: helpers.withMessage('The date field is required', required),
    },
  };
});

const v$ = useVuelidate(rules, formData);

const handleSubmit = () => {};
</script>
