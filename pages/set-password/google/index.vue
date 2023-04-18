<template>
  <div v-if="route.query.type === 'password_confirm'">
    <ConfirmEmailPassword />
  </div>
  <div v-if="route.query.type === 'user_not_exist'">
    <SetNewPassword />
  </div>
</template>

<script setup lang="ts">
import SetNewPassword from '~~/views/auth/SetPassword/google/SetNewPassword/index.vue';
import ConfirmEmailPassword from '~~/views/auth/SetPassword/google/PasswordConfirm/index.vue';

definePageMeta({
  layout: 'auth',
  middleware: 'auth',
});

useHead({
  title: 'Set Password',
});

const route = useRoute();
</script>
