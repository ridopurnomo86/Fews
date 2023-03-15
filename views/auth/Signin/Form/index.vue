<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div class="lg:w-6/12 w-full flex flex-col justify-center px-10 container mx-auto">
    <HeaderForm />
    <div class="w-full relative">
      <form @submit.prevent="handleSubmit">
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
          :is-invalid="!v$.email.$invalid"
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
        <div class="flex items-center justify-between">
          <Button
            type="submit"
            :is-disable="v$.invalid || v$.$error || isLoading"
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
import HeaderForm from './HeaderForm/index.vue';

const config = useRuntimeConfig();

export default defineComponent({
  name: 'SigninForm',
  components: {
    HeaderForm,
  },
  setup() {
    const $toast = useToast();
    const router = useRouter();
    const cookie = useCookie(config.authSession);

    const showPassword = ref<boolean>(false);
    const isLoading = ref<boolean>(false);

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
        isLoading.value = true;

        const { data, error }: any = await useFetch('http://localhost:8000/api/v1/account/login', {
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
          method: 'POST',
          credentials: 'include',
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
          cookie.value = responseData.data.access_token;
          router.push({ path: '/' });
          isLoading.value = false;
          return $toast.show({
            type: 'success',
            title: responseData.type,
            message: responseData.message,
            timeout: 3,
          });
        }
      }

      return null;
    };

    return { handleSubmit, formData, v$, handleShowPassword, showPassword, isLoading };
  },
});
</script>
