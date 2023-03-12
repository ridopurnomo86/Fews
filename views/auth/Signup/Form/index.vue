<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div class="lg:w-6/12 w-full flex flex-col px-10 py-10 container mx-auto">
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
        :is-invalid="!v$.fullName.$invalid"
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
        :is-invalid="!v$.phoneNumber.$invalid"
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
import { ref } from 'vue';
import { required, email, minLength, helpers, sameAs } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
import { useToast } from 'tailvue';
import HeaderForm from './HeaderForm/index.vue';

export default defineComponent({
  name: 'SignupForm',
  components: {
    HeaderForm,
  },
  setup() {
    const $toast = useToast();
    const router = useRouter();

    const showPassword = ref<boolean>(false);
    const isLoading = ref<boolean>(false);

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
        isLoading.value = true;

        const { data }: any = await useFetch('/api/signup', {
          method: 'post',
          body: JSON.stringify({
            full_name: formData.fullName,
            phone_number: formData.phoneNumber,
            email: formData.email,
            password: formData.password,
          }),
        });

        if (data.value.type === 'error') {
          isLoading.value = false;
          return $toast.show({
            type: 'warning',
            title: data.value.type,
            message: data.value.message,
            timeout: 3,
          });
        }

        if (data.value.type === 'success') {
          isLoading.value = false;
          router.push({ path: '/signin' });
          return $toast.show({
            type: 'success',
            title: data.value.type,
            message: data.value.message,
            timeout: 3,
          });
        }
      }

      return null;
    };

    return { isLoading, v$, formData, showPassword, handleShowPassword, handleSubmit };
  },
});
</script>
