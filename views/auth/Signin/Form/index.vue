<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div class="w-6/12 flex flex-col justify-center px-10 container mx-auto">
    <div class="mb-10">
      <p class="font-bold text-2xl mb-2">Welcome back.</p>
      <p class="font-medium text-sm text-gray-600">Log in into your account.</p>
      <p class="font-medium text-sm text-gray-600">
        Dont't have a Fews account?
        <NuxtLink href="/signup" class="text-blue-600 text-bold">Sign Up. </NuxtLink>
      </p>
    </div>

    <div class="w-full relative">
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
          <label class="block text-gray-700 text-sm font-medium mb-2" for="password"
            >Password</label
          >
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
        </div>
        <div class="flex items-center justify-between">
          <Button
            class="bg-transparent border-gray-600 border hover:bg-black hover:text-white text-black font-bold transition py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            :text="'Sign in.'"
          />
        </div>
      </form>
      <p class="text-gray-500 text-xs mt-4">&copy;2023 Fews Corp. All rights reserved.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { required, email, helpers } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
import { useToast } from 'tailvue';

export default defineComponent({
  name: 'SigninForm',
  setup() {
    const $toast = useToast();

    const { signIn } = useSession();

    const showPassword = ref<boolean>(false);

    const formData = reactive({
      email: '',
      password: '',
    });

    const rules = computed(() => {
      return {
        email: {
          required: helpers.withMessage('The Email field is required', required),
          email: helpers.withMessage('Invalid Email format', email),
        },
        password: {
          required: helpers.withMessage('The Password field is required', required),
        },
      };
    });

    const v$ = useVuelidate(rules, formData);

    const handleShowPassword = () => {
      showPassword.value = !showPassword.value;
    };

    const handleSubmit = async () => {
      const isFormCorrect = await v$.value.$validate();

      if (isFormCorrect) {
        const { error } = await signIn('credentials', {
          email: formData.email,
          password: formData.password,
          callbackUrl: '/signin',
          redirect: false,
        });

        if (error)
          return $toast.show({
            type: 'warning',
            title: JSON.parse(error).type,
            message: JSON.parse(error).message,
            timeout: 6,
          });

        return $toast.show({
          type: 'success',
          title: 'Success',
          message: 'Success Login',
          timeout: 6,
        });
      }

      return null;
    };

    return { handleSubmit, formData, v$, handleShowPassword, showPassword };
  },
});
</script>
