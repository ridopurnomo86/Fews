<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div class="lg:w-5/12 w-full flex flex-col justify-center px-10 container mx-auto relative">
    <div class="absolute top-10 bottom-0">
      <NuxtLink to="/">
        <p class="text-xl font-bold mr-4">Fews</p>
      </NuxtLink>
    </div>
    <HeaderForm />
    <div class="w-full relative">
      <form @submit.prevent="handleSubmit">
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
          :is-invalid="!v$.password.$invalid"
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
          :is-invalid="!v$.confirmPassword.$invalid"
          :on-change="v$.confirmPassword.$touch"
        />
        <div class="w-full">
          <Button
            type="submit"
            class="w-full"
            :is-disable="v$.invalid || v$.$error || isLoading"
            :text="'Set Password'"
          />
        </div>
      </form>
      <p class="text-gray-500 text-xs mt-4">&copy;2023 Fews Corp. All rights reserved.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { useToast } from 'tailvue';
import { defineComponent } from 'vue';
import { required, helpers, minLength, sameAs } from '@vuelidate/validators';
import useVuelidate from '@vuelidate/core';
import HeaderForm from './HeaderForm/index.vue';

export default defineComponent({
  name: 'SetPassword',
  components: {
    HeaderForm,
  },
  setup() {
    const $toast = useToast();
    const router = useRouter();
    const showPassword = ref<boolean>(false);
    const isLoading = ref<boolean>(false);

    const formData = reactive({
      password: '',
      confirmPassword: '',
    });

    const rules = computed(() => {
      return {
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
      isLoading.value = true;

      const isFormCorrect = await v$.value.$validate();

      if (!isFormCorrect) {
        isLoading.value = false;
      }

      if (isFormCorrect) {
        const { data, error }: any = await useFetch('/api/set-password', {
          body: JSON.stringify({
            password: formData.password,
          }),
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const errorData = error?.value?.data;
        const responseData = data?.value;

        if (errorData && errorData.type === 'error') {
          isLoading.value = false;
          return $toast.show({
            type: 'warning',
            title: errorData.type,
            message: errorData.message,
            timeout: 3,
          });
        }

        if (responseData && responseData.type === 'success') {
          router.push({ path: '/signin' });
          isLoading.value = false;
          return $toast.show({
            type: 'success',
            title: responseData.type,
            message: 'Success set password, Please Login',
            timeout: 3,
          });
        }

        return $toast.show({
          type: 'success',
          title: 'success',
          message: 'success',
          timeout: 3,
        });
      }

      return null;
    };

    return {
      handleSubmit,
      formData,
      v$,
      handleShowPassword,
      showPassword,
      isLoading,
    };
  },
});
</script>
