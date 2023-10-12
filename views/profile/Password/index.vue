<template>
  <ProfileLayout>
    <h1 class="font-semibold text-lg text-black">Password</h1>
    <p class="font-medium text-xs md:text-sm text-gray-600 antialiased">
      Please enter your current password to change new password.
    </p>
    <div class="mt-8">
      <form @submit.prevent="handleSubmit">
        <BaseInput
          :id="'password'"
          v-model="formData.password"
          :label="'Current Password'"
          :name="'password'"
          :type="'password'"
          :placeholder="'******'"
          :error-message="`${v$.password.$errors[0]?.$message}`"
          :is-disable="isLoading"
          :is-error="v$.password.$error"
          :on-change="v$.password.$touch"
        />
        <div>
          <BaseInput
            :id="'new_password'"
            v-model="formData.new_password"
            :label="'New Password'"
            :name="'new_password'"
            :type="showPassword ? 'text' : 'password'"
            :placeholder="'******'"
            :error-message="`${v$.new_password.$errors[0]?.$message}`"
            :is-disable="isLoading"
            :is-error="v$.new_password.$error"
            :on-change="v$.new_password.$touch"
          >
            <span
              class="absolute top-1 bottom-0 right-0 mr-2 pl-2"
              :class="[v$.password.$error || !v$.password.$invalid ? 'top-0' : 'top-1']"
              @click="handleShowPassword"
            >
              <div class="focus:outline-none focus:shadow-outline">
                <Icon
                  v-if="showPassword"
                  name="ant-design:eye-outlined"
                  size="20px"
                  class="cursor-pointer text-gray-600"
                />
                <Icon
                  v-if="!showPassword"
                  name="ant-design:eye-invisible-outlined"
                  size="20px"
                  class="cursor-pointer text-gray-600"
                />
              </div>
            </span>
            <p class="font-medium text-xs md:text-sm text-gray-600 antialiased mt-1">
              Your new password must be more 8 characters.
            </p>
          </BaseInput>
        </div>
        <BaseInput
          :id="'confirm_password'"
          v-model="formData.confirm_password"
          :label="'Confirm New Password'"
          :name="'confirm_password'"
          :type="'password'"
          :placeholder="'******'"
          :error-message="`${v$.confirm_password.$errors[0]?.$message}`"
          :is-disable="isLoading"
          :is-error="v$.confirm_password.$error"
          :on-change="v$.confirm_password.$touch"
        />
        <div class="block md:flex items-center md:justify-end">
          <div class="w-full md:max-w-[200px]">
            <Button
              type="submit"
              :text="'Update Password'"
              variant="primary"
              :is-disable="v$.invalid || v$.$error || isLoading"
            />
          </div>
        </div>
      </form>
    </div>
  </ProfileLayout>
</template>

<script setup lang="ts">
import { helpers, minLength, required, sameAs } from '@vuelidate/validators';
import useVuelidate from '@vuelidate/core';
import ProfileLayout from '../layout/ProfileLayout/index.vue';

const isLoading = ref<boolean>(false);

const showPassword = ref<boolean>(false);

const snackbar = useSnackbar();

const handleShowPassword = () => {
  showPassword.value = !showPassword.value;
};

const formData = reactive({
  password: '',
  new_password: '',
  confirm_password: '',
});

const mustBeDifferent = (value: string) => value !== formData.password;

const rules = computed(() => {
  return {
    password: {
      required: helpers.withMessage('The Current Password field is required', required),
    },
    new_password: {
      required: helpers.withMessage('The New Password field is required', required),
      minLength: minLength(8),
      mustBeDifferent: helpers.withMessage('Password must be different', mustBeDifferent),
    },
    confirm_password: {
      required: helpers.withMessage('The Confirm Password field is required', required),
      sameAs: helpers.withMessage("Passwords don't match", sameAs(formData.new_password)),
    },
  };
});

const v$ = useVuelidate(rules, formData);

const handleSubmit = async () => {
  const isFormCorrect = await v$.value.$validate();

  if (isFormCorrect) {
    const { data } = await useFetch('/api/profile/change-password', {
      method: 'POST',
      body: {
        old_password: formData.password,
        password: formData.new_password,
      },
      onResponse: ({ response }) => {
        if (response) isLoading.value = false;
      },
      onRequest: ({ request }) => {
        if (request) isLoading.value = true;
      },
      lazy: true,
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
      return snackbar.add({
        type,
        text: message,
      });
    }
  }

  return null;
};
</script>
