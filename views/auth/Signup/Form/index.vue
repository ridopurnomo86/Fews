<template>
  <div class="lg:w-5/12 w-full flex flex-col justify-center px-10 container mx-auto relative">
    <div class="absolute top-10 bottom-0">
      <NuxtLink to="/">
        <p class="text-xl font-bold mr-4">Fews</p>
      </NuxtLink>
    </div>
    <HeaderForm />
    <form @submit.prevent="handleSubmit">
      <BaseInput
        :id="'full_name'"
        v-model="formData.fullName"
        :label="'Full Name'"
        :name="'full_name'"
        :type="'text'"
        :placeholder="'Ex. John Doe'"
        :error-message="`${v$.fullName.$errors[0]?.$message}`"
        :is-disable="isLoading"
        :is-error="v$.fullName.$error"
        :on-change="v$.fullName.$touch"
      />
      <BaseInput
        :id="'phone_number'"
        v-model="formData.phoneNumber"
        :label="'Phone Number'"
        :name="'phone_number'"
        :type="'text'"
        :placeholder="'+620989******'"
        :error-message="`${v$.phoneNumber.$errors[0]?.$message}`"
        :is-disable="isLoading"
        :is-error="v$.phoneNumber.$error"
        :on-change="v$.phoneNumber.$touch"
      />
      <BaseInput
        :id="'email'"
        v-model="formData.email"
        :label="'Email Address'"
        :name="'email'"
        :type="'email'"
        :placeholder="'John@email.com'"
        :error-message="`${v$.email.$errors[0]?.$message}`"
        :is-disable="isLoading"
        :is-error="v$.email.$error"
        :on-change="v$.email.$touch"
      />
      <BaseInput
        :id="'password'"
        v-model="formData.password"
        :label="'Password'"
        :name="'password'"
        :type="showPassword ? 'text' : 'password'"
        :placeholder="'******'"
        :error-message="`${v$.password.$errors[0]?.$message}`"
        :is-disable="isLoading"
        :is-error="v$.password.$error"
        :on-change="v$.password.$touch"
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
      </BaseInput>
      <BaseInput
        :id="'confirm_password'"
        v-model="formData.confirmPassword"
        :label="'Confirm Password'"
        :name="'confirm_password'"
        :type="'password'"
        :placeholder="'******'"
        :error-message="`${v$.confirmPassword.$errors[0]?.$message}`"
        :is-disable="isLoading"
        :is-error="v$.confirmPassword.$error"
        :on-change="v$.confirmPassword.$touch"
      />
      <div class="flex items-center justify-between">
        <Button
          type="submit"
          :is-disable="v$.invalid || v$.$error || isLoading"
          :text="'Create Account.'"
        />
      </div>
    </form>
    <p class="text-gray-500 text-xs mt-4">&copy;2023 Fews Corp. All rights reserved.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { required, email, minLength, helpers, sameAs } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
import HeaderForm from './HeaderForm/index.vue';

export default defineComponent({
  name: 'SignupForm',
  components: {
    HeaderForm,
  },
  setup() {
    const showPassword = ref<boolean>(false);
    const isLoading = ref<boolean>(false);
    const snackbar = useSnackbar();

    const formData = reactive({
      fullName: '',
      password: '',
      email: '',
      phoneNumber: '',
      confirmPassword: '',
    });

    const rules = computed(() => {
      return {
        fullName: {
          required: helpers.withMessage('The Full Name field is required', required),
        },
        phoneNumber: {
          required: helpers.withMessage('The PhoneNumber field is required', required),
        },
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

    const handleSubmit = async () => {
      const isFormCorrect = await v$.value.$validate();

      if (isFormCorrect) {
        const { data } = useFetch('/api/account/register', {
          body: {
            name: formData.fullName,
            phone_number: formData.phoneNumber,
            email: formData.email,
            password: formData.password,
          },
          method: 'POST',
        });

        if (data.value?.type === 'error')
          return snackbar.add({
            type: 'error',
            text: data.value.message,
          });
      }

      return null;
    };

    return {
      isLoading,
      v$,
      formData,
      showPassword,
      handleShowPassword,
      handleSubmit,
    };
  },
});
</script>
