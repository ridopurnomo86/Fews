<template>
  <ProfileLayout>
    <h1 class="font-semibold text-lg text-black">Password</h1>
    <p class="font-medium text-xs md:text-sm text-gray-600 antialiashed">
      Please enter your current password to change new password.
    </p>
    <div class="mt-8">
      <form>
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
            :id="'password'"
            v-model="formData.new_password"
            :label="'Password'"
            :name="'password'"
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
            <p class="font-medium text-xs md:text-sm text-gray-600 antialiashed mt-1">
              Your new password must be more 8 characters.
            </p>
          </BaseInput>
        </div>
        <BaseInput
          :id="'confirm_password'"
          v-model="formData.password"
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
          <button
            class="rounded text-gray-600 border text-sm bg-white px-4 py-2 font-semibold mr-2 w-full mb-4 md:mb-0 md:max-w-[150px]"
            type="button"
          >
            Cancel
          </button>
          <div class="w-full md:max-w-[200px]">
            <Button type="button" :text="'Update Password'" variant="primary" :is-disable="true" />
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

const handleShowPassword = () => {
  showPassword.value = !showPassword.value;
};

const formData = reactive({
  password: '',
  new_password: '',
  confirm_password: '',
});

const rules = computed(() => {
  return {
    password: {
      required: helpers.withMessage('The Password field is required', required),
    },
    new_password: {
      required: helpers.withMessage('The Password field is required', required),
      minLength: minLength(8),
    },
    confirm_password: {
      required: helpers.withMessage('The Password field is required', required),
      sameAs: helpers.withMessage("Passwords don't match", sameAs(formData.new_password)),
    },
  };
});

const v$ = useVuelidate(rules, formData);
</script>
