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
        <NuxtLink to="/forgot-password">
          <p class="text-black underline text-xs md:text-sm font-medium mb-4 right">
            Forgot Password
          </p>
        </NuxtLink>
        <!-- <button
          type="button"
          :disabled="!isReady"
          :text="''"
          :is-disable="v$.invalid || v$.$error || isLoading"
          class="w-full border py-2 cursor-pointer bg-white rounded hover:opacity-60 transition-all"
          @click="handleGoogleLogin"
        >
          <div class="flex items-center justify-center">
            <Icon name="flat-color-icons:google" size="20px" class="text-gray-800" />
            <p class="ml-2 text-gray-800 font-semibold text-sm">Log in with Google</p>
          </div>
        </button> -->
        <div class="w-full flex items-center my-4">
          <div class="h-[1px] w-full bg-gray-200" />
          <p class="text-gray-600 font-semibold text-sm px-4">OR</p>
          <div class="h-[1px] w-full bg-gray-200" />
        </div>
        <div class="w-full">
          <Button
            type="submit"
            class="w-full"
            :is-disable="v$.invalid || v$.$error || isLoading"
            :text="'Log in.'"
          />
        </div>
      </form>
      <p class="text-gray-500 text-xs mt-4">&copy;2023 Fews Corp. All rights reserved.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { required, email, helpers } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
import HeaderForm from './HeaderForm/index.vue';

export default defineComponent({
  name: 'SigninForm',
  components: {
    HeaderForm,
  },

  setup() {
    const route = useRoute();
    const snackbar = useSnackbar();
    const { signIn } = useAuth();

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
      isLoading.value = true;

      const isFormCorrect = await v$.value.$validate();

      if (isFormCorrect) {
        const res: any = await signIn('credentials', {
          email: formData.email,
          password: formData.password,
          callbackUrl: '/signin',
        });

        if (res?.error) {
          isLoading.value = false;
          return snackbar.add({
            type: 'error',
            text: 'You have made a terrible mistake while entering your credentials',
          });
        }

        isLoading.value = false;

        return navigateTo('/', { external: true });
      }

      if (!isFormCorrect) {
        isLoading.value = false;
      }

      return null;
    };

    const query = route.query.error || '';

    onMounted(() => {
      if (query === 'CredentialsSignin') {
        isLoading.value = false;
        snackbar.add({
          type: 'error',
          text: 'You have made a terrible mistake while entering your credentials',
        });
      }
    });

    // const { handleGoogleLogin, isReady } = useAuthGoogle();

    return {
      // handleGoogleLogin,
      // isReady,
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
