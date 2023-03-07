<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div class="w-6/12 flex flex-col justify-center px-10 container mx-auto">
    <div class="mb-10">
      <p class="font-bold text-2xl mb-2">Create your Fews Account.</p>
      <p class="font-medium text-sm text-gray-600">
        You will use it to manage your order and complete your registration later.
      </p>
      <p class="font-medium text-sm text-gray-600">
        Already have a Fews.
        <NuxtLink href="/signin" class="text-blue-600 text-bold">Sign In.</NuxtLink>
      </p>
    </div>
    <form @submit.prevent="handleSubmit">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-medium mb-2" for="email">
          Email Address
        </label>
        <div class="relative">
          <input
            id="email"
            v-model="formData.email"
            class="appearance-none border text-sm rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="john@email.com"
            :class="{
              'border-red-500 focus:border-red-500': v$.email.$error,
              'border-[#42d392] ': !v$.email.$invalid,
            }"
            @change="v$.email.$touch"
          />
          <span v-if="v$.email.$error" class="text-xs text-red-500">
            {{ v$.email.$errors[0].$message }}
          </span>
        </div>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-medium mb-2" for="password">Password</label>
        <div class="relative">
          <input
            id="password"
            v-model="formData.password"
            name="password"
            class="appearance-none border text-sm rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            :type="showPassword ? 'text' : 'password'"
            placeholder="******"
            :class="{
              'border-red-500 focus:border-red-500': v$.password.$error,
              'border-[#42d392] ': !v$.password.$invalid,
            }"
            @change="v$.password.$touch"
          />
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
        </div>
        <span v-if="v$.password.$error" class="text-xs text-red-500">
          {{ v$.password.$errors[0].$message }}
        </span>
        <p class="text-gray-600 text-xs mt-2">
          Your password must be at least 8 Character in length and may not contain spaces.
        </p>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-medium mb-2" for="confirm-password"
          >Confirm Password</label
        >
        <div class="relative">
          <input
            id="confirm-password"
            v-model="formData.confirmPassword"
            name="confirm-password"
            class="appearance-none border text-sm rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            :type="'password'"
            placeholder="******"
            :class="{
              'border-red-500 focus:border-red-500': v$.confirmPassword.$error,
              'border-[#42d392] ': !v$.confirmPassword.$invalid,
            }"
            @change="v$.confirmPassword.$touch"
          />
        </div>
        <span v-if="v$.confirmPassword.$error" class="text-xs text-red-500">
          {{ v$.confirmPassword.$errors[0].$message }}
        </span>
      </div>
    </form>

    <div class="flex items-center justify-between">
      <Button :text="'Create a account'" :type="'submit'" @click="handleSubmit" />
    </div>
    <p class="text-gray-500 text-xs mt-4">&copy;2023 Fews Corp. All rights reserved.</p>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { required, email, minLength, helpers, sameAs } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';

export default defineComponent({
  name: 'SignupForm',
  setup() {
    const showPassword = ref<boolean>(false);

    const formData = reactive({
      email: '',
      password: '',
      confirmPassword: '',
    });

    const rules = computed(() => {
      return {
        email: {
          required: helpers.withMessage('The Email field is required', required),
          email: helpers.withMessage('Invalid Email format', email),
        },
        password: {
          required: helpers.withMessage('The Password field is required', required),
          minLength: minLength(8),
        },
        confirmPassword: {
          required: helpers.withMessage('The password confirmation field is required', required),
          sameAs: helpers.withMessage("Passwords don't match", sameAs(formData.password)),
        },
      };
    });

    const v$ = useVuelidate(rules, formData);

    const handleShowPassword = () => {
      showPassword.value = !showPassword.value;
    };

    const handleSubmit = () => {
      v$.value.$validate();
      console.log(formData);
    };

    return { v$, formData, showPassword, handleShowPassword, handleSubmit };
  },
});
</script>
